import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const fingerprint = request.headers.get("x-fingerprint");

    const headers: Record<string, string> = {
      "x-api-key":
        "7e7a0271c6f5482e886a8cd47f0d41e36fb0a2258fabfd2f01bb8ea4a1db743e",
      "Content-Type": "application/json",
    };
    if (fingerprint) {
      headers["X-Fingerprint"] = fingerprint;
    }

    const response = await fetch(
      "https://api-ai-code.dsp.one/api/rate-limits/status/ai_image_generate",
      {
        method: "GET",
        headers,
      },
    );

    if (!response.ok) {
      return NextResponse.json(
        { error: `HTTP error! status: ${response.status}` },
        { status: response.status },
      );
    }

    const data = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    console.error("Rate limits API error:", error);
    return NextResponse.json(
      { error: "Failed to fetch rate limits" },
      { status: 500 },
    );
  }
}
