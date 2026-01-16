"use client"

import { useI18n } from "@/lib/i18n"
import Image from "next/image"

// ============================================================
// TYPES
// ============================================================
interface Business {
  name: string
  logo: string
}

interface BusinessCategory {
  id: string
  titleKey: string
  businesses: Business[]
}

// ============================================================
// DATA - Mock business logos by category
// ============================================================
const businessCategories: BusinessCategory[] = [
  {
    id: "retail",
    titleKey: "trustedBusinesses.category.retail",
    businesses: [
      { name: "Thế Giới Di Động", logo: "/mobile-world-logo.png" },
      { name: "FPT Shop", logo: "/fpt-shop-logo.jpg" },
      { name: "Điện Máy Xanh", logo: "/dien-may-xanh-logo.jpg" },
      { name: "Bách Hóa Xanh", logo: "/bach-hoa-xanh-logo.jpg" },
    ],
  },
  {
    id: "commerce",
    titleKey: "trustedBusinesses.category.commerce",
    businesses: [
      { name: "Shopee", logo: "/generic-e-commerce-logo.png" },
      { name: "Lazada", logo: "/generic-online-shopping-logo.png" },
      { name: "Tiki", logo: "/tiki-logo.jpg" },
      { name: "Sendo", logo: "/sendo-logo.jpg" },
    ],
  },
  {
    id: "realestate",
    titleKey: "trustedBusinesses.category.realestate",
    businesses: [
      { name: "Vingroup", logo: "/vingroup-logo.png" },
      { name: "Novaland", logo: "/novaland-logo.jpg" },
      { name: "Hưng Thịnh", logo: "/hung-thinh-corp-logo.jpg" },
      { name: "Đất Xanh", logo: "/dat-xanh-group-logo.jpg" },
    ],
  },
  {
    id: "manufacturing",
    titleKey: "trustedBusinesses.category.manufacturing",
    businesses: [
      { name: "Vinamilk", logo: "/vinamilk-logo.jpg" },
      { name: "Masan", logo: "/masan-group-logo.jpg" },
      { name: "Hòa Phát", logo: "/hoa-phat-group-logo.jpg" },
      { name: "TH True Milk", logo: "/th-true-milk-logo.jpg" },
    ],
  },
]

// ============================================================
// BUSINESS CARD COMPONENT
// ============================================================
function BusinessCard({ category }: { category: BusinessCategory }) {
  const { t } = useI18n()

  return (
    <div className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md">
      {/* Category Badge */}
      <div className="mb-5">
        <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
          {t(category.titleKey)}
        </span>
      </div>

      {/* Logo Grid */}
      <div className="grid grid-cols-2 gap-4">
        {category.businesses.map((business) => (
          <div
            key={business.name}
            className="flex h-14 items-center justify-center rounded-lg bg-gray-50 p-2 transition-all duration-300"
          >
            <Image
              src={business.logo || "/placeholder.svg"}
              alt={business.name}
              width={100}
              height={40}
              className="h-8 w-auto max-w-[100px] object-contain opacity-60 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

// ============================================================
// MAIN COMPONENT
// ============================================================
export function TrustedBusinessesSection() {
  const { t } = useI18n()

  return (
    <section className="bg-gray-50/50 py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
          <h2 className="mb-4 text-3xl font-extrabold text-primary text-balance tracking-tight text-gray-900 md:text-4xl">
            {t("trustedBusinesses.title")}
          </h2>
          <p className="text-lg text-gray-600">{t("trustedBusinesses.subtitle")}</p>
        </div>

        {/* Business Categories Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {businessCategories.map((category) => (
            <BusinessCard key={category.id} category={category} />
          ))}
        </div>

        {/* Stats Line */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-8 border-t border-gray-200 pt-10 md:gap-12">
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900">12,000+</div>
            <div className="mt-1 text-sm text-gray-600">{t("trustedBusinesses.stats.businesses")}</div>
          </div>
          <div className="h-10 w-px bg-gray-200" />
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900">63</div>
            <div className="mt-1 text-sm text-gray-600">{t("trustedBusinesses.stats.provinces")}</div>
          </div>
          <div className="h-10 w-px bg-gray-200" />
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900">20+</div>
            <div className="mt-1 text-sm text-gray-600">{t("trustedBusinesses.stats.industries")}</div>
          </div>
        </div>
      </div>
    </section>
  )
}
