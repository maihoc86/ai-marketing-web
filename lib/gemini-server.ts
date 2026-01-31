export async function generateImageWithGemini(opts: {
  prompt: string;
  style?: string;
  ratio?: "square" | "landscape" | "portrait";
  initImage?: string; // optional base64 data URL for image-to-image
}) {
  const key = process.env.GEMINI_KEY;
  if (!key) throw new Error("GEMINI_KEY not configured");

  const { prompt, style, ratio } = opts;
  const size =
    ratio === "portrait"
      ? "720x1280"
      : ratio === "landscape"
        ? "1280x720"
        : "1024x1024";

  // Compose a clear prompt for the image generation model
  const fullPrompt = `${prompt}${style ? ` — style: ${style}` : ""}`;

  const body: Record<string, any> = {
    // This payload is compatible with Google Generative AI image endpoints that return base64 images.
    // Adjust fields if your endpoint requires a different schema.
    prompt: fullPrompt,
    size,
  };

  // If caller provided an init image (data URL), include it for image-to-image/transform tasks.
  if (opts.initImage) {
    // Some endpoints expect raw base64 without the data URL prefix. Strip if present.
    const dataUrl = opts.initImage;
    const commaIndex = dataUrl.indexOf(",");
    const b64 = commaIndex >= 0 ? dataUrl.slice(commaIndex + 1) : dataUrl;
    body.init_image = b64;
    // Also include a flag indicating image-to-image intent.
    body.image_transform = true;
  }

  const res = await fetch(
    "https://generativeai.googleapis.com/v1/images:generate",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${key}`,
      },
      body: JSON.stringify(body),
    },
  );

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Gemini image generation failed: ${res.status} ${text}`);
  }

  const json = await res.json();

  // Try to find a base64 image in known fields
  const data = json?.data?.[0] || json?.images?.[0] || json?.result?.[0];
  const b64 =
    data?.b64_png ||
    data?.b64_jpg ||
    data?.b64 ||
    data?.b64_json ||
    data?.image ||
    null;

  if (!b64) {
    throw new Error("No image returned from Gemini: " + JSON.stringify(json));
  }

  // Normalize to data URL (assume PNG if unsure)
  const prefix = b64.startsWith("data:") ? "" : "data:image/png;base64,";
  return prefix + b64;
}

export default generateImageWithGemini;
