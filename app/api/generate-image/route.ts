import { NextResponse } from "next/server";
import generateImageWithGemini from "@/lib/gemini-server";

// =============================================================================
// SERVER-SIDE RATE LIMITING
// Token bucket algorithm: 5 requests per minute per IP
// =============================================================================
interface RateLimitEntry {
  tokens: number;
  lastRefill: number;
}

const rateLimitStore = new Map<string, RateLimitEntry>();
const RATE_LIMIT_CONFIG = {
  maxTokens: 5,
  refillRate: 1,
  refillIntervalMs: 12000, // 1 token per 12 seconds
};

function getClientIP(request: Request): string {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0].trim();
  }
  return (
    request.headers.get("x-real-ip") ||
    request.headers.get("cf-connecting-ip") ||
    "unknown"
  );
}

function checkRateLimit(ip: string): { allowed: boolean; remaining: number } {
  const now = Date.now();
  let entry = rateLimitStore.get(ip);

  if (!entry) {
    entry = { tokens: RATE_LIMIT_CONFIG.maxTokens - 1, lastRefill: now };
    rateLimitStore.set(ip, entry);
    return { allowed: true, remaining: entry.tokens };
  }

  // Refill tokens based on elapsed time
  const elapsed = now - entry.lastRefill;
  const tokensToAdd =
    Math.floor(elapsed / RATE_LIMIT_CONFIG.refillIntervalMs) *
    RATE_LIMIT_CONFIG.refillRate;

  if (tokensToAdd > 0) {
    entry.tokens = Math.min(
      RATE_LIMIT_CONFIG.maxTokens,
      entry.tokens + tokensToAdd,
    );
    entry.lastRefill = now;
  }

  if (entry.tokens > 0) {
    entry.tokens--;
    rateLimitStore.set(ip, entry);
    return { allowed: true, remaining: entry.tokens };
  }

  return { allowed: false, remaining: 0 };
}

// Cleanup old entries every 5 minutes
setInterval(() => {
  const now = Date.now();
  for (const [key, entry] of rateLimitStore.entries()) {
    if (now - entry.lastRefill > 300000) {
      rateLimitStore.delete(key);
    }
  }
}, 300000);

// =============================================================================
// CSRF PROTECTION - Origin Check
// Validates that requests come from allowed origins
// =============================================================================
function validateOrigin(request: Request): boolean {
  const origin = request.headers.get("origin");
  const referer = request.headers.get("referer");

  const allowedOrigins: string[] = [
    process.env.NEXT_PUBLIC_APP_URL,
    "https://uniksmart.ai",
    "https://www.uniksmart.ai",
  ].filter((o): o is string => Boolean(o));

  // Development: allow localhost
  if (process.env.NODE_ENV !== "production") {
    allowedOrigins.push(
      "http://localhost:3000",
      "http://localhost:3001",
      "http://127.0.0.1:3000",
    );
  }

  // Check origin header
  if (origin && allowedOrigins.includes(origin)) {
    return true;
  }

  // Fallback: check referer (some browsers don't send origin for same-origin)
  if (referer) {
    try {
      const refererOrigin = new URL(referer).origin;
      if (allowedOrigins.includes(refererOrigin)) {
        return true;
      }
    } catch {
      // Invalid referer URL
    }
  }

  // In development, allow requests without origin (e.g., from API clients)
  if (process.env.NODE_ENV !== "production" && !origin && !referer) {
    return true;
  }

  return false;
}

// =============================================================================
// API ROUTE HANDLER
// =============================================================================
export async function POST(request: Request) {
  try {
    // CSRF Protection: Validate origin
    if (!validateOrigin(request)) {
      return NextResponse.json(
        { error: "Invalid request origin" },
        { status: 403 },
      );
    }

    // Check rate limit
    const clientIP = getClientIP(request);
    const rateLimit = checkRateLimit(clientIP);

    if (!rateLimit.allowed) {
      return NextResponse.json(
        { error: "Too many requests. Please wait a moment and try again." },
        {
          status: 429,
          headers: {
            "X-RateLimit-Limit": String(RATE_LIMIT_CONFIG.maxTokens),
            "X-RateLimit-Remaining": "0",
            "Retry-After": String(
              Math.ceil(RATE_LIMIT_CONFIG.refillIntervalMs / 1000),
            ),
          },
        },
      );
    }

    const body = await request.json();
    const { prompt, style, ratio, initImages, initImage, recaptchaToken } =
      body;

    if (!prompt || typeof prompt !== "string") {
      return NextResponse.json({ error: "Missing prompt" }, { status: 400 });
    }

    // =========================================================================
    // reCAPTCHA VERIFICATION
    // Production: MANDATORY - Client must send token
    // Development: OPTIONAL - For easier local testing
    // =========================================================================
    // const isProduction = process.env.NODE_ENV === "production";
    // const RECAPTCHA_SECRET = process.env.NEXT_PUBLIC_RECAPTCHA_SECRET_KEY;

    // if (isProduction) {
    //   // Production: Warn if server not configured
    //   if (!RECAPTCHA_SECRET) {
    //     console.warn(
    //       "[SECURITY] NEXT_PUBLIC_RECAPTCHA_SECRET_KEY not configured in production",
    //     );
    //   }

    //   // Production: REQUIRE client to send reCAPTCHA token
    //   if (!recaptchaToken) {
    //     return NextResponse.json(
    //       { error: "reCAPTCHA verification required" },
    //       { status: 403 },
    //     );
    //   }
    // }

    // Verify token if provided (production: required, development: optional)
    // if (recaptchaToken && RECAPTCHA_SECRET) {
    //   try {
    //     const params = new URLSearchParams();
    //     params.append("secret", RECAPTCHA_SECRET);
    //     params.append("response", String(recaptchaToken));

    //     const verifyRes = await fetch(
    //       "https://www.google.com/recaptcha/api/siteverify",
    //       {
    //         method: "POST",
    //         headers: { "Content-Type": "application/x-www-form-urlencoded" },
    //         body: params.toString(),
    //       },
    //     );
    //     const verifyJson = await verifyRes.json();
    //     const success = verifyJson?.success;
    //     const score = verifyJson?.score;

    //     if (!success || (typeof score === "number" && score < 0.3)) {
    //       return NextResponse.json(
    //         { error: "reCAPTCHA verification failed" },
    //         { status: 403 },
    //       );
    //     }
    //   } catch {
    //     return NextResponse.json(
    //       { error: "reCAPTCHA verification error" },
    //       { status: 500 },
    //     );
    //   }
    // } else if (isProduction && recaptchaToken && !RECAPTCHA_SECRET) {
    //   // Production: Client sent token but server can't verify (missing secret)
    //   console.error(
    //     "[SECURITY] Cannot verify reCAPTCHA - NEXT_PUBLIC_RECAPTCHA_SECRET_KEY missing",
    //   );
    //   return NextResponse.json(
    //     { error: "Server configuration error" },
    //     { status: 500 },
    //   );
    // }

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

    return NextResponse.json(
      { image: imageDataUrl },
      {
        headers: {
          "X-RateLimit-Limit": String(RATE_LIMIT_CONFIG.maxTokens),
          "X-RateLimit-Remaining": String(rateLimit.remaining),
        },
      },
    );
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
