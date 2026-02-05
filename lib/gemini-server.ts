export async function generateImageWithGemini(opts: {
  prompt: string;
  style?: string;
  ratio?: "square" | "landscape" | "portrait";
  // support multiple init images (data URLs)
  initImages?: string[] | undefined;
}) {
  const key = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
  if (!key) throw new Error("NEXT_PUBLIC_GEMINI_API_KEY not configured");

  const { prompt, style, ratio } = opts;
  const size =
    ratio === "portrait"
      ? "720x1280"
      : ratio === "landscape"
        ? "1280x720"
        : "1024x1024";

  // Compose a clear prompt for the image generation model
  // Encourage the model to return image bytes inline when using generateContent.
  // We append a clear instruction so the model knows to return base64 image data only.
  const fullPrompt = `${prompt}${style ? ` — style: ${style}` : ""}`;
  const base64Instruction =
    "\n\nIMPORTANT: return the generated image as a single base64-encoded string (JPEG) with no extra text. If the API supports inline image output, include it as inline_data. The response should prioritize providing the image data so it can be decoded programmatically.";

  const body: Record<string, any> = {
    // This payload is compatible with Google Generative AI image endpoints that return base64 images.
    // Adjust fields if your endpoint requires a different schema.
    prompt: fullPrompt,
    size,
  };

  // If caller provided an init image (data URL), include it for image-to-image/transform tasks.
  // If caller provided init images (data URLs), include them for image-to-image/transform tasks.
  const imagesToSend: string[] = [];
  if (
    opts.initImages &&
    Array.isArray(opts.initImages) &&
    opts.initImages.length > 0
  ) {
    imagesToSend.push(...opts.initImages.slice(0, 5));
  }

  if (imagesToSend.length > 0) {
    body.image_transform = true;
    // for non-generateContent endpoints some APIs accept `init_image` or array; keep first as primary
    const first = imagesToSend[0];
    const commaIndex = first.indexOf(",");
    const b64First = commaIndex >= 0 ? first.slice(commaIndex + 1) : first;
    body.init_image = b64First;
  }

  // If GEMINI_URL is provided, use it. Otherwise default to the v1beta generateContent URL
  const model =
    process.env.NEXT_PUBLIC_GEMINI_MODEL || "gemini-2.5-flash-image";
  const defaultUrl = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`;
  const url = process.env.GEMINI_URL || defaultUrl;

  // If we're targeting the generateContent endpoint, the API expects a different
  // payload shape and uses an API key header `x-goog-api-key`.
  const isGenerateContent = url.includes("generateContent");

  let fetchBody: any = body;
  if (isGenerateContent) {
    // Build the `contents` payload with parts. First part = text prompt.
    const parts: any[] = [{ text: fullPrompt + base64Instruction }];

    // Attach any provided init images as inline_data parts (support up to 5)
    if (imagesToSend.length > 0) {
      for (const img of imagesToSend) {
        const dataUrl = img;
        const commaIndex = dataUrl.indexOf(",");
        const b64 = commaIndex >= 0 ? dataUrl.slice(commaIndex + 1) : dataUrl;
        parts.push({
          inline_data: {
            mime_type: "image/jpeg",
            data: b64,
          },
        });
      }
    }

    fetchBody = { contents: [{ parts }] };
  }

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };

  if (isGenerateContent) {
    // prefer NEXT_PUBLIC_GEMINI_API_KEY env var name for clarity
    const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
    if (!apiKey) throw new Error("NEXT_PUBLIC_GEMINI_API_KEY not configured");
    headers["x-goog-api-key"] = apiKey;
  } else {
    headers["Authorization"] = `Bearer ${key}`;
  }

  const res = await fetch(url, {
    method: "POST",
    headers,
    body: JSON.stringify(fetchBody),
  });

  if (!res.ok) {
    const text = await res.text();
    if (res.status === 404) {
      throw new Error(
        `Gemini image generation failed: ${res.status} ${text}\n` +
          `Received 404 — the endpoint URL may be incorrect. Set the GEMINI_URL environment variable to your provider's image endpoint (for example, the correct Google Generative API image endpoint) and ensure the API key in NEXT_PUBLIC_GEMINI_API_KEY is valid.`,
      );
    }
    throw new Error(`Gemini image generation failed: ${res.status} ${text}`);
  }

  const json = await res.json();

  // Try to locate base64 image data in the response. The structure differs
  // depending on endpoint/version, so search recursively for likely fields.
  function findBase64(obj: any): string | null {
    if (!obj || typeof obj !== "object") return null;
    for (const k of Object.keys(obj)) {
      const v = obj[k];
      if (typeof v === "string") {
        // data URL
        if (v.startsWith("data:")) return v;
        // raw base64 (jpeg starts with /9j often) - check length
        if (/^[A-Za-z0-9+/]+=*$/.test(v) && v.length > 200) return v;
      }
      if (typeof v === "object") {
        const found = findBase64(v);
        if (found) return found;
      }
    }
    return null;
  }

  const possibleB64 = findBase64(json);
  if (!possibleB64) {
    // Try to extract any textual candidate to surface model reply for debugging
    const candidateText =
      json?.candidates && json.candidates.length > 0
        ? (json.candidates[0]?.content?.parts || [])
            .map((p: any) => p.text)
            .filter(Boolean)
            .join("\n")
        : null;
    const msg = {
      message: "No image returned from Gemini",
      candidateText: candidateText || null,
      raw: json,
    };
    throw new Error(JSON.stringify(msg));
  }

  const b64 = possibleB64;
  const prefix = b64.startsWith("data:") ? "" : "data:image/jpeg;base64,";
  return prefix + b64;
}

export default generateImageWithGemini;
