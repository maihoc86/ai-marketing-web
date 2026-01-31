import { NextResponse } from "next/server";
import generateImageWithGemini from "@/lib/gemini-server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { prompt, style, ratio, initImages, initImage, recaptchaToken } =
      body;

    if (!prompt || typeof prompt !== "string") {
      return NextResponse.json({ error: "Missing prompt" }, { status: 400 });
    }

    // If a reCAPTCHA token is provided and a server secret is configured,
    // verify the token with Google's verification endpoint.
    const RECAPTCHA_SECRET = process.env.RECAPTCHA_SECRET_KEY;
    if (recaptchaToken && RECAPTCHA_SECRET) {
      try {
        const params = new URLSearchParams();
        params.append("secret", RECAPTCHA_SECRET);
        params.append("response", String(recaptchaToken));

        const verifyRes = await fetch(
          "https://www.google.com/recaptcha/api/siteverify",
          {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: params.toString(),
          },
        );
        const verifyJson = await verifyRes.json();
        const success = verifyJson?.success;
        const score = verifyJson?.score;
        if (!success || (typeof score === "number" && score < 0.3)) {
          return NextResponse.json(
            { error: "reCAPTCHA verification failed" },
            { status: 403 },
          );
        }
      } catch (err) {
        return NextResponse.json(
          { error: "reCAPTCHA verification error" },
          { status: 500 },
        );
      }
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
