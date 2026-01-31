import { NextResponse } from "next/server";
import generateImageWithGemini from "@/lib/gemini-server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { prompt, style, ratio, initImages, initImage } = body;

    if (!prompt || typeof prompt !== "string") {
      return NextResponse.json({ error: "Missing prompt" }, { status: 400 });
    }

    const imageDataUrl = await generateImageWithGemini({
      prompt,
      style,
      ratio,
      // prefer initImages array if provided, otherwise fall back to single initImage for backwards compatibility
      initImages: Array.isArray(initImages)
        ? initImages
        : initImage
          ? [initImage]
          : undefined,
    });

    return NextResponse.json({ image: imageDataUrl });
  } catch (err: any) {
    return NextResponse.json(
      { error: err?.message || String(err) },
      { status: 500 },
    );
  }
}
