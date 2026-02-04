/**
 * Load reCAPTCHA script into the document
 */
export function loadRecaptchaScript(): void {
  const key = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
  if (!key) return;
  if (document.querySelector('script[data-recaptcha="true"]')) return;

  const script = document.createElement("script");
  script.src = `https://www.google.com/recaptcha/api.js?render=${key}`;
  script.async = true;
  script.setAttribute("data-recaptcha", "true");
  document.head.appendChild(script);
}

/**
 * Execute reCAPTCHA and get token
 * @param action - The action name for reCAPTCHA
 * @returns Promise<string | null> - The reCAPTCHA token or null if not configured/failed
 */
export async function getRecaptchaToken(
  action: string = "submit",
): Promise<string | null> {
  const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  if (!RECAPTCHA_SITE_KEY) return null;

  // Wait until grecaptcha is available
  if (!(window as any).grecaptcha) {
    await new Promise<void>((resolve) => {
      const interval = setInterval(() => {
        if ((window as any).grecaptcha) {
          clearInterval(interval);
          resolve();
        }
      }, 100);
    });
  }

  try {
    return await (window as any).grecaptcha.execute(RECAPTCHA_SITE_KEY, {
      action,
    });
  } catch (err) {
    console.error("reCAPTCHA execution failed:", err);
    return null;
  }
}
