import { NextRequest, NextResponse } from "next/server";
import { i18nConfig, isValidLocale } from "@/lib/i18n-config";

const { locales, defaultLocale } = i18nConfig;

/**
 * Extract locale from pathname
 */
function getLocaleFromPath(pathname: string): string | null {
  const segments = pathname.split("/");
  const potentialLocale = segments[1];

  if (potentialLocale && isValidLocale(potentialLocale)) {
    return potentialLocale;
  }

  return null;
}


export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip static files, API routes, and Next.js internals
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/favicon") ||
    pathname.includes(".") // Skip files with extensions
  ) {
    return NextResponse.next();
  }

  // Check if pathname already has a valid locale
  const pathnameLocale = getLocaleFromPath(pathname);

  if (pathnameLocale) {
    // Locale is already in path, continue
    return NextResponse.next();
  }

  // Redirect to locale-prefixed path (always use default locale)
  const newPathname = pathname === "/" ? "" : pathname;
  const newUrl = new URL(`/${defaultLocale}${newPathname}`, request.url);

  // Preserve query parameters
  newUrl.search = request.nextUrl.search;

  return NextResponse.redirect(newUrl);
}

export const config = {
  // Match all paths except static files and API routes
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
