import type React from "react";

/**
 * Root Layout
 *
 * This minimal layout passes children to the locale-specific layout.
 * The actual HTML structure and providers are in app/[locale]/layout.tsx
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
