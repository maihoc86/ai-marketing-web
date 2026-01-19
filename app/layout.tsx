import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import Script from "next/script"
import { Analytics } from "@vercel/analytics/next"
import { LazyChatbot } from "@/components/lazy-chatbot"
import { LazyAnalytics } from "@/components/lazy-analytics"
import { WebVitals } from "@/components/web-vitals"
import { ErrorBoundary } from "@/components/error-boundary"
import { I18nProvider } from "@/lib/i18n"
import { organizationSchema, softwareApplicationSchema, websiteSchema } from "@/lib/structured-data"
import "./globals.css"

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
  preload: true,
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "DXAI Marketing Platform - Giải pháp Marketing Tự động cho Doanh nghiệp | Tiên Phong CDS",
  description:
    "Nền tảng DXAI Marketing tích hợp ChatGPT, Gemini, Claude, Grok. Sản xuất 150 Video/tháng, 2.500 bài viết SEO tự động. Tiết kiệm 40% chi phí nhân sự Marketing.",
  keywords: [
    "DXAI",
    "DXAI Marketing Platform",
    "AI Marketing",
    "Video Marketing tự động",
    "Content Marketing AI",
    "TikTok Video",
    "Reels tự động",
    "Social Media Automation",
    "Quản lý đa kênh",
    "ChatGPT Marketing",
    "Gemini AI",
    "Tiên Phong CDS",
    "AI cho doanh nghiệp",
  ],
  authors: [{ name: "Tiên Phong CDS" }],
  creator: "Tiên Phong CDS",
  publisher: "Tiên Phong CDS",
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
    locale: "vi_VN",
    url: "https://dsp.one",
    siteName: "DXAI Marketing Platform",
    title: "DXAI Marketing Platform - Giải pháp Marketing Tự động cho Doanh nghiệp",
    description:
      "Nền tảng DXAI Marketing tích hợp đa công cụ AI. Sản xuất Video & Content tự động, tiết kiệm 40% chi phí.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "DXAI Marketing Platform - Nền tảng AI Marketing cho Doanh nghiệp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DXAI Marketing Platform - Giải pháp Marketing Tự động",
    description: "Sản xuất Video & Content Marketing tự động với AI. Tiết kiệm 40% chi phí nhân sự.",
    images: ["/images/og-image.png"],
  },
  alternates: {
    canonical: "https://dsp.one",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/site.webmanifest",
}

export const viewport: Viewport = {
  themeColor: "#3F5AFF",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi" className="scroll-smooth">
      <head>
        <style
          dangerouslySetInnerHTML={{
            __html: `
              body{margin:0;font-family:system-ui,-apple-system,sans-serif;-webkit-text-size-adjust:100%}
              *{box-sizing:border-box}
              .registration-form{max-width:480px;margin:0 auto;padding:20px}
              .form-title{font-size:24px;margin-bottom:20px;font-weight:700}
              .form-field{margin-bottom:16px}
              .form-label{display:block;margin-bottom:4px;color:#1a1a1a;font-weight:500}
              .form-input{width:100%;padding:12px;border:1px solid#ddd;border-radius:8px;font-size:16px}
              .submit-button{width:100%;padding:16px;background:#3B82F6;color:#fff;border:none;border-radius:8px;font-size:16px;font-weight:600;cursor:pointer}
              .submit-button:hover{background:#2563eb}
            `,
          }}
        />

        {/* Preconnect to external domains for faster loading */}
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://api-ai-code.dsp.one" />
        <link rel="dns-prefetch" href="https://cds-agent-sdk.netlify.app" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />

        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="geo.region" content="VN-SG" />
        <meta name="geo.placename" content="Ho Chi Minh City" />

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
          Skip to main content
        </a>

        <ErrorBoundary>
          <I18nProvider>
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
  )
}
