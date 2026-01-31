export interface GenerateImageOptions {
  prompt: string;
  field?: string | null;
  ratio?: string | null;
  initImage?: string | null;
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
      initImage: opts.initImage,
      preset: opts.preset,
    }),
  });

  const json = await res.json();
  if (!res.ok) throw json;
  return json;
}
