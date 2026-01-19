/**
 * JSON-LD Structured Data for SEO
 * Implements Schema.org markup for better search engine understanding
 */

/**
 * Organization Schema
 * Provides information about Tiên Phong CDS company
 */
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Tiên Phong CDS",
  alternateName: "DXAI Marketing Platform",
  url: "https://dsp.one",
  logo: "https://tienphongcds.com/_next/image?url=https%3A%2F%2Fmedia.newweb.vn%2Ffile%2FdoMFbzZ4q&w=256&q=75",
  description:
    "Nền tảng DXAI Marketing tích hợp ChatGPT, Gemini, Claude, Grok. Sản xuất 150 Video/tháng, 2.500 bài viết SEO tự động. Tiết kiệm 40% chi phí nhân sự Marketing.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Ho Chi Minh City",
    addressRegion: "HCM",
    postalCode: "700000",
    addressCountry: "VN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    availableLanguage: ["vi", "en"],
  },
  sameAs: [
    "https://www.facebook.com/tienphongcds",
    "https://www.linkedin.com/company/tienphongcds",
  ],
}

/**
 * SoftwareApplication Schema
 * Describes DXAI Marketing Platform as a software product
 */
export const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "DXAI Marketing Platform",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "AI-powered marketing automation platform for Vietnamese businesses. Automate video production, content creation, scheduling, and analytics.",
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "VND",
    lowPrice: "3500000",
    highPrice: "6900000",
    offerCount: 3,
    offers: [
      {
        "@type": "Offer",
        name: "Startup Plan",
        price: "3500000",
        priceCurrency: "VND",
        description: "150 AI Videos/tháng, 500 bài viết, 20GB lưu trữ",
      },
      {
        "@type": "Offer",
        name: "Growth Plan",
        price: "6900000",
        priceCurrency: "VND",
        description: "500 AI Videos/tháng, 2,500 bài viết, 100GB lưu trữ",
      },
      {
        "@type": "Offer",
        name: "Enterprise Plan",
        price: "0",
        priceCurrency: "VND",
        description: "Unlimited content, dedicated support, custom solutions",
      },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    ratingCount: "350",
    bestRating: "5",
    worstRating: "1",
  },
  featureList: [
    "AI Video Production (1000+ videos/month)",
    "Multi-channel Content (50+ templates)",
    "Smart Scheduling (24/7 automation)",
    "AI Image Design (Unlimited)",
    "Analytics Dashboard (10+ metrics)",
    "Platform Integration (20+ platforms)",
  ],
}

/**
 * FAQPage Schema Generator
 * Creates FAQ structured data from question/answer pairs
 */
export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }
}

/**
 * BreadcrumbList Schema Generator
 * Creates breadcrumb navigation structured data
 */
export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

/**
 * WebSite Schema with SearchAction
 * Enables Google Search Box
 */
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "DXAI Marketing Platform",
  url: "https://dsp.one",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://dsp.one/search?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
}
