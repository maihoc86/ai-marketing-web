"use client";

import Link from "next/link";
import { useI18n } from "@/lib/i18n";
import type { ComponentProps } from "react";

type LinkProps = ComponentProps<typeof Link>;

interface LocaleLinkProps extends Omit<LinkProps, "href"> {
  href: string;
}

/**
 * LocaleLink - Locale-aware Link component
 *
 * Automatically adds locale prefix for internal links.
 * Handles:
 * - Internal paths: /register -> /vi/register or /en/register
 * - Hash links: /#features -> /vi/#features
 * - External links: https://example.com (pass-through)
 * - Absolute paths with locale: /vi/... (pass-through)
 */
export function LocaleLink({ href, ...props }: LocaleLinkProps) {
  const { locale } = useI18n();

  // Determine if href needs locale prefix
  const localizedHref = getLocalizedHref(href, locale);

  return <Link href={localizedHref} {...props} />;
}

/**
 * Get localized href based on current locale
 */
function getLocalizedHref(href: string, locale: string): string {
  // External URLs - pass through
  if (href.startsWith("http://") || href.startsWith("https://")) {
    return href;
  }

  // Protocol-relative URLs - pass through
  if (href.startsWith("//")) {
    return href;
  }

  // Already has locale prefix - pass through
  if (href.startsWith("/vi") || href.startsWith("/en")) {
    return href;
  }

  // Hash-only links on current page - add locale prefix
  if (href.startsWith("#")) {
    return `/${locale}/${href}`;
  }

  // Root path
  if (href === "/") {
    return `/${locale}`;
  }

  // Internal paths - add locale prefix
  if (href.startsWith("/")) {
    return `/${locale}${href}`;
  }

  // Relative paths (no leading slash) - add locale prefix
  return `/${locale}/${href}`;
}

/**
 * Hook to get localized href for programmatic navigation
 */
export function useLocalizedHref() {
  const { locale } = useI18n();

  return (href: string) => getLocalizedHref(href, locale);
}
