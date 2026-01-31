export interface GenerateImageOptions {
  prompt: string;
  field?: string | null;
  ratio?: string | null;
  // support multiple init images (data URLs)
  initImages?: string[] | null;
  preset?: string | null;
}

export async function generateImage(opts: GenerateImageOptions) {
  const res = await fetch("/api/generate-image", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      prompt: opts.prompt,
      field: opts.field,
      ratio: opts.ratio,
      initImages: opts.initImages,
      preset: opts.preset,
    }),
  });

  const json = await res.json();
  if (!res.ok) throw json;
  return json;
}
