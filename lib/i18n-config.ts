/**
 * i18n Configuration
 * Centralized configuration for internationalization
 */

export const i18nConfig = {
  defaultLocale: "en" as const,
  locales: ["en", "vi"] as const,
};

export type Locale = (typeof i18nConfig.locales)[number];

/**
 * Check if a string is a valid locale
 */
export function isValidLocale(locale: string): locale is Locale {
  return i18nConfig.locales.includes(locale as Locale);
}
