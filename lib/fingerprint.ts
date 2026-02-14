import FingerprintJS from "@fingerprintjs/fingerprintjs";

let cachedFingerprint: string | null = null;

/**
 * Get the device fingerprint using FingerprintJS.
 * The result is cached after the first call to avoid redundant computation.
 * Returns null if fingerprinting fails (e.g., SSR environment).
 */
export async function getFingerprint(): Promise<string | null> {
  if (cachedFingerprint) return cachedFingerprint;

  try {
    if (typeof window === "undefined") return null;

    const fp = await FingerprintJS.load();
    const result = await fp.get();
    cachedFingerprint = result.visitorId;
    return cachedFingerprint;
  } catch (error) {
    console.warn("Fingerprint detection failed:", error);
    return null;
  }
}
