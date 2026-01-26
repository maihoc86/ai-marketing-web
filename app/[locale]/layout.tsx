import type React from "react";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { notFound } from "next/navigation";
import { Analytics } from "@vercel/analytics/next";
import { LazyChatbot } from "@/components/lazy-chatbot";
import { LazyAnalytics } from "@/components/lazy-analytics";
import { WebVitals } from "@/components/web-vitals";
import { ErrorBoundary } from "@/components/error-boundary";
import { I18nProvider } from "@/lib/i18n";
import { i18nConfig, isValidLocale, type Locale } from "@/lib/i18n-config";
import {
  organizationSchema,
  softwareApplicationSchema,
  websiteSchema,
} from "@/lib/structured-data";
import "../globals.css";

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
  preload: true,
  variable: "--font-inter",
});

// Metadata translations
const metadataByLocale: Record<Locale, { title: string; description: string }> =
  {
    vi: {
      title: "Uniksmart - Giải pháp Marketing Tự động cho Doanh nghiệp",
      description:
        "Nền tảng Uniksmart tích hợp ChatGPT, Gemini, Claude, Grok. Sản xuất 150 Video/tháng, 2.500 bài viết SEO tự động. Tiết kiệm 40% chi phí nhân sự Marketing.",
    },
    en: {
      title: "Uniksmart - Automated Marketing Solution for Businesses",
      description:
        "Uniksmart platform integrates ChatGPT, Gemini, Claude, Grok. Produce 150 Videos/month, 2,500 automated SEO articles. Save 40% on Marketing personnel costs.",
    },
  };

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export async function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const validLocale = isValidLocale(locale) ? locale : i18nConfig.defaultLocale;
  const t = metadataByLocale[validLocale];

  return {
    metadataBase: new URL("https://dsp.one"),
    title: t.title,
    description: t.description,
    keywords: [
      "Uniksmart",
      "Uniksmart Platform",
      "AI Marketing",
      "Video Marketing",
      "Content Marketing AI",
    ],
    authors: [{ name: "Uniksmart" }],
    creator: "Uniksmart",
    publisher: "Uniksmart",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      type: "website",
      locale: validLocale === "vi" ? "vi_VN" : "en_US",
      url: `https://dsp.one/${validLocale}`,
      siteName: "Uniksmart",
      title: t.title,
      description: t.description,
      images: [
        {
          url: "/images/og-image.png",
          width: 1200,
          height: 630,
          alt:
            validLocale === "vi"
              ? "Uniksmart - Nền tảng AI Marketing cho Doanh nghiệp"
              : "Uniksmart - AI Marketing Platform for Businesses",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t.title,
      description: t.description,
      images: ["/images/og-image.png"],
    },
    alternates: {
      canonical: `https://dsp.one/${validLocale}`,
      languages: {
        vi: "https://dsp.one/vi",
        en: "https://dsp.one/en",
      },
    },
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "any" },
        { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
        { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      ],
      apple: [
        { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
      ],
    },
    manifest: "/site.webmanifest",
  };
}

export const viewport: Viewport = {
  themeColor: "#3F5AFF",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;

  // Validate locale
  if (!isValidLocale(locale)) {
    notFound();
  }

  const skipLinkText =
    locale === "vi" ? "Chuyển đến nội dung chính" : "Skip to main content";

  return (
    <html lang={locale} className="scroll-smooth">
      <head>
        {/* Preconnect to external domains for faster loading */}
        <link
          rel="preconnect"
          href="https://www.googletagmanager.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="https://api-ai-code.dsp.one" />
        <link rel="dns-prefetch" href="https://cds-agent-sdk.netlify.app" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />

        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <meta name="geo.region" content="VN-SG" />
        <meta name="geo.placename" content="Ho Chi Minh City" />

        {/* Alternate language links for SEO */}
        <link rel="alternate" hrefLang="vi" href="https://dsp.one/vi" />
        <link rel="alternate" hrefLang="en" href="https://dsp.one/en" />
        <link rel="alternate" hrefLang="x-default" href="https://dsp.one/vi" />

        <link
          rel="preload"
          href="https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiA.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />

        {/* Structured Data - JSON-LD for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(softwareApplicationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {/* Skip to main content link for keyboard navigation */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-6 focus:py-3 focus:bg-blue-600 focus:text-white focus:rounded-lg focus:font-semibold focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          {skipLinkText}
        </a>

        <ErrorBoundary>
          <I18nProvider locale={locale}>
            <LazyAnalytics />
            <WebVitals />
            <main id="main-content" tabIndex={-1}>
              {children}
            </main>
            <LazyChatbot />
          </I18nProvider>
          <Analytics />
        </ErrorBoundary>

        <Script id="perf-monitor" strategy="afterInteractive">
          {`
            if ('PerformanceObserver' in window) {
              const observer = new PerformanceObserver((list) => {
                for (const entry of list.getEntries()) {
                  if (window.gtag) {
                    gtag('event', 'web_vitals', {
                      event_category: 'Web Vitals',
                      name: entry.name,
                      value: Math.round(entry.value),
                      event_label: entry.entryType,
                    });
                  }
                }
              });
              observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });
            }
          `}
        </Script>
      </body>
    </html>
  );
}
