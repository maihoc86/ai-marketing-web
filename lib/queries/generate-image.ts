export interface GenerateImageOptions {
  prompt: string;
  field?: string | null;
  ratio?: string | null;
  // support multiple init images (data URLs)
  initImages?: string[] | null;
  preset?: string | null;
}

import { getFingerprint } from "@/lib/fingerprint";

export async function generateImage(opts: GenerateImageOptions) {
  const fingerprint = await getFingerprint();

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };
  if (fingerprint) {
    headers["X-Fingerprint"] = fingerprint;
  }

  const res = await fetch("/api/generate-image", {
    method: "POST",
    headers,
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
