"use client"

import Link from "next/link"
import { useState, memo } from "react"
import { Check, Sparkles } from "lucide-react"
import { useI18n } from "@/lib/i18n"

type BillingPeriod = "monthly" | "quarterly" | "yearly"

const pricingPlans = [
  {
    id: "startup",
    nameKey: "pricing.startup.name",
    subtitleKey: "pricing.startup.subtitle",
    price: {
      monthly: "3,500,000",
      quarterly: "9,975,000",
      yearly: "35,700,000",
    },
    credits: "3,500 credits",
    creditsKey: "pricing.month",
    features: [
      "Kết nối: Facebook, Instagram, TikTok",
      "Giới hạn 3 kênh/page mỗi nền tảng",
      "Báo cáo hiệu suất đa nền tảng",
      "Quản trị nội dung đa nền tảng",
      "Quản trị quảng cáo đa nền tảng",
      "Hỗ trợ qua Ticket",
    ],
    featuresEn: [
      "Connect: Facebook, Instagram, TikTok",
      "Limit 3 channels/pages per platform",
      "Multi-platform performance reports",
      "Multi-platform content management",
      "Multi-platform advertising management",
      "Ticket support",
    ],
    ctaKey: "pricing.cta.start",
    popular: false,
    featured: false,
  },
  {
    id: "growth",
    nameKey: "pricing.growth.name",
    badgeKey: "pricing.popular",
    subtitleKey: "pricing.growth.subtitle",
    price: {
      monthly: "6,900,000",
      quarterly: "19,665,000",
      yearly: "70,380,000",
    },
    credits: "7,500 credits (Bonus 1,000)",
    creditsKey: "pricing.month",
    features: [
      "Kết nối: Facebook, Instagram, TikTok, LinkedIn, X, YouTube",
      "Không giới hạn kênh/page trên nền tảng",
      "Báo cáo hiệu suất đa nền tảng",
      "AI Phân tích nội dung & đề xuất chỉnh sửa",
      "AI Phân tích quảng cáo & đề xuất tối ưu",
      "AI Phân tích chỉ số nền tảng",
      "Quản trị nội dung đa nền tảng",
      "Quản trị quảng cáo đa nền tảng",
      "Hỗ trợ ưu tiên 24/7",
    ],
    featuresEn: [
      "Connect: Facebook, Instagram, TikTok, LinkedIn, X, YouTube",
      "Unlimited channels/pages per platform",
      "Multi-platform performance reports",
      "AI Content analysis & editing suggestions",
      "AI Advertising analysis & optimization",
      "AI Platform metrics analysis",
      "Multi-platform content management",
      "Multi-platform advertising management",
      "24/7 priority support",
    ],
    ctaKey: "pricing.cta.start",
    popular: true,
    featured: true,
  },
  {
    id: "enterprise",
    nameKey: "pricing.enterprise.name",
    subtitleKey: "pricing.enterprise.subtitle",
    price: {
      monthly: "pricing.contact",
      quarterly: "pricing.contact",
      yearly: "pricing.contact",
    },
    credits: "Unlimited credits",
    creditsKey: null,
    features: [
      "Bao gồm tất cả tính năng gói Growth",
      "Tất cả tính năng nâng cao (AI, Báo cáo, Phân quyền)",
      "Dedicated Server (không chia sẻ tài nguyên)",
      "Kết nối không giới hạn kênh",
      "Lưu trữ video không giới hạn, không hết hạn",
      "Model AI sử dụng riêng, chi phí tách biệt",
      "SLA 99.9% uptime",
      "Hỗ trợ 1:1 chuyên biệt",
    ],
    featuresEn: [
      "All Growth plan features included",
      "All advanced features (AI, Reports, Permissions)",
      "Dedicated Server (no resource sharing)",
      "Unlimited channel connections",
      "Unlimited video storage, never expires",
      "Dedicated AI models, separate costs",
      "SLA 99.9% uptime",
      "1:1 dedicated support",
    ],
    ctaKey: "pricing.cta.contact",
    popular: false,
    featured: false,
  },
]

const BillingToggle = memo(({
  billing,
  setBilling,
}: {
  billing: BillingPeriod
  setBilling: (b: BillingPeriod) => void
}) => {
  const { t } = useI18n()

  return (
    <div className="flex items-center justify-center gap-1 mb-14 bg-white border border-[#e0e0e0] rounded-full p-1.5 max-w-md mx-auto">
      <button
        onClick={() => setBilling("monthly")}
        className={`px-5 py-2.5 text-sm font-medium rounded-full transition-all duration-200 ${
          billing === "monthly" ? "bg-[#22b5f8] text-white shadow-sm" : "text-[#666666] hover:text-[#1c1c1c]"
        }`}
      >
        {t("pricing.billing.monthly")}
      </button>

      <button
        onClick={() => setBilling("quarterly")}
        className={`px-5 py-2.5 text-sm font-medium rounded-full transition-all duration-200 ${
          billing === "quarterly" ? "bg-[#22b5f8] text-white shadow-sm" : "text-[#666666] hover:text-[#1c1c1c]"
        }`}
      >
        {t("pricing.billing.quarterly")}
      </button>

      <button
        onClick={() => setBilling("yearly")}
        className={`px-5 py-2.5 text-sm font-medium rounded-full transition-all duration-200 flex items-center gap-2 ${
          billing === "yearly" ? "bg-[#22b5f8] text-white shadow-sm" : "text-[#666666] hover:text-[#1c1c1c]"
        }`}
      >
        {t("pricing.billing.yearly")}
        <span className="bg-[#ff7900]/10 text-[#ff7900] text-xs px-2 py-0.5 rounded-full font-medium">
          {t("pricing.billing.discount")}
        </span>
      </button>
    </div>
  )
})

BillingToggle.displayName = "BillingToggle"

const PricingCard = memo(({
  plan,
  billing,
}: {
  plan: (typeof pricingPlans)[0]
  billing: BillingPeriod
}) => {
  const price = plan.price[billing]
  const isContact = price === "Liên hệ"
  const isFeatured = plan.featured

  return (
    <div
      className={`
        relative rounded-3xl transition-all duration-300 h-full flex flex-col
        ${
          isFeatured
            ? "bg-gradient-to-br from-blue-600 via-blue-600 to-blue-700 text-white shadow-2xl shadow-blue-600/25 scale-[1.02] md:-mt-4 md:mb-4 z-10"
            : "bg-white border border-gray-200 hover:border-gray-300 hover:shadow-xl"
        }
      `}
    >
      {/* Popular badge - floating on top */}
      {plan.badge && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-bold bg-gradient-to-r from-amber-400 to-orange-500 text-white rounded-full shadow-lg uppercase tracking-wide">
            <Sparkles className="w-3.5 h-3.5" />
            {plan.badge}
          </span>
        </div>
      )}

      <div className="p-8 flex flex-col h-full">
        {/* ==================== HEADER ZONE (fixed height) ==================== */}
        <div className="min-h-[60px] mb-2">
          <h3 className={`text-2xl font-bold mb-1 ${isFeatured ? "text-white" : "text-gray-900"}`}>{plan.name}</h3>
          <p className={`text-sm ${isFeatured ? "text-gray-300" : "text-gray-500"}`}>{plan.subtitle}</p>
        </div>

        {/* ==================== PRICE ZONE (FIXED HEIGHT - ANTI LAYOUT SHIFT) ==================== */}
        <div className="min-h-[90px] flex flex-col justify-center mb-6">
          {/* Price display - always same height regardless of content */}
          <div className="h-[50px] flex items-baseline gap-1">
            <span
              className={`text-3xl md:text-4xl font-extrabold transition-opacity duration-200 tracking-tight ${
                isFeatured ? "text-white" : "text-gray-900"
              }`}
            >
              {price}
            </span>
            {!isContact && (
              <span className={`text-sm font-medium ${isFeatured ? "text-blue-200" : "text-gray-400"}`}>VNĐ</span>
            )}
          </div>

          {/* Billing period */}
          {!isContact && (
            <div className={`text-sm ${isFeatured ? "text-blue-200" : "text-gray-400"}`}>
              / {billing === "monthly" ? "tháng" : billing === "quarterly" ? "quý" : "năm"}
            </div>
          )}

          {/* Credits - fixed height line */}
          <div
            className={`h-[24px] flex items-center text-sm font-semibold mt-2 ${
              isFeatured ? "text-gray-300" : "text-blue-600"
            }`}
          >
            {plan.credits}
          </div>
        </div>

        {/* ==================== CTA ZONE ==================== */}
        <Link
          href={`/dang-ky?package=${plan.id}`}
          className={`
            w-full py-4 px-6 rounded-xl font-semibold transition-all duration-200 
            text-center flex items-center justify-center gap-2 mb-8
            ${
              isFeatured
                ? "bg-white text-blue-600 hover:bg-blue-50 shadow-lg"
                : "border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
            }
          `}
        >
          {plan.cta}
          <span className="text-lg">→</span>
        </Link>

        {/* ==================== FEATURES ZONE (flex-grow) ==================== */}
        <div
          className={`text-xs font-semibold uppercase tracking-wider mb-4 ${
            isFeatured ? "text-blue-200" : "text-gray-400"
          }`}
        >
          Tính năng bao gồm
        </div>

        <ul className="space-y-3 flex-grow">
          {plan.features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <div
                className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                  isFeatured ? "bg-blue-500/50" : "bg-blue-100"
                }`}
              >
                <Check className={`w-3 h-3 ${isFeatured ? "text-white" : "text-blue-600"}`} strokeWidth={3} />
              </div>
              <span className={`text-sm leading-relaxed ${isFeatured ? "text-blue-50" : "text-gray-600"}`}>
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
})

PricingCard.displayName = "PricingCard"

export function PricingSection() {
  const [billing, setBilling] = useState<BillingPeriod>("monthly")
  const { t, locale } = useI18n()

  const getBillingPeriodLabel = () => {
    switch (billing) {
      case "monthly":
        return t("pricing.month")
      case "quarterly":
        return t("pricing.quarter")
      case "yearly":
        return t("pricing.year")
    }
  }

  return (
    <section id="pricing" className="py-20 md:py-28 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">{t("pricing.title")}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t("pricing.subtitle")}</p>
        </div>

        {/* Billing Toggle */}
        <BillingToggle billing={billing} setBilling={setBilling} />

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-start">
          {pricingPlans.map((plan) => {
            const isFeatured = plan.featured
            const isContact = plan.price[billing].includes("pricing.contact") || plan.price[billing] === "Liên hệ"
            const displayPrice = isContact ? t("pricing.contact") : plan.price[billing]
            const features = locale === "en" ? plan.featuresEn : plan.features

            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl p-8 transition-all duration-300 ${
                  isFeatured
                    ? "bg-gradient-to-br from-[#1c1c1c] via-[#1c1c1c] to-[#2a2a2a] text-white shadow-2xl scale-[1.02] md:-mt-4 md:mb-4 ring-2 ring-[#ff7900]/30"
                    : "bg-white border border-gray-200 hover:border-[#22b5f8]/50 hover:shadow-xl"
                }`}
              >
                {/* Popular Badge */}
                {plan.badgeKey && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-semibold bg-[#ff7900] text-white shadow-lg shadow-[#ff7900]/30">
                      <Sparkles className="w-4 h-4" />
                      {t(plan.badgeKey)}
                    </span>
                  </div>
                )}

                {/* Header Zone - Fixed height */}
                <div className="min-h-[72px] mb-6">
                  <h3 className={`text-xl font-bold mb-1 ${isFeatured ? "text-white" : "text-gray-900"}`}>
                    {t(plan.nameKey)}
                  </h3>
                  <p className={`text-sm ${isFeatured ? "text-gray-300" : "text-gray-500"}`}>{t(plan.subtitleKey)}</p>
                </div>

                {/* Price Zone - Fixed height for no layout shift */}
                <div className="min-h-[100px] flex flex-col justify-center mb-6">
                  <div className="h-[48px] flex items-baseline justify-start transition-opacity duration-200">
                    <span className={`text-3xl md:text-4xl font-bold ${isFeatured ? "text-white" : "text-gray-900"}`}>
                      {displayPrice}
                    </span>
                    {!isContact && (
                      <span className={`text-base ml-2 ${isFeatured ? "text-gray-300" : "text-gray-500"}`}>
                        VNĐ
                      </span>
                    )}
                  </div>
                  <div className={`h-[24px] text-sm mt-2 ${isFeatured ? "text-[#22b5f8]" : "text-gray-600"}`}>
                    {plan.creditsKey ? `${plan.credits} / ${t(plan.creditsKey)}` : plan.credits}
                  </div>
                </div>

                {/* CTA Button */}
                <Link
                  href={`/dang-ky?package=${plan.id}`}
                  className={`block w-full py-3.5 px-6 rounded-full font-semibold text-center transition-all duration-200 mb-8 ${
                    isFeatured
                      ? "bg-[#ff7900] text-white hover:bg-[#e56b00] shadow-lg shadow-[#ff7900]/30 hover:shadow-xl"
                      : "bg-[#ff7900] text-white hover:bg-[#e56b00] shadow-md shadow-[#ff7900]/20 hover:shadow-lg"
                  }`}
                >
                  {t(plan.ctaKey)} →
                </Link>

                {/* Features */}
                <div>
                  <p
                    className={`text-xs font-semibold uppercase tracking-wider mb-4 ${
                      isFeatured ? "text-gray-400" : "text-gray-400"
                    }`}
                  >
                    {t("pricing.features.included")}
                  </p>
                  <ul className="space-y-3">
                    {features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check
                          className={`w-5 h-5 mt-0.5 shrink-0 ${isFeatured ? "text-[#5fffec]" : "text-[#22b5f8]"}`}
                        />
                        <span className={`text-sm leading-relaxed ${isFeatured ? "text-gray-300" : "text-gray-600"}`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>

        {/* Trust Line */}
        <p className="text-center text-gray-500 text-sm mt-12">{t("pricing.trusted")}</p>
      </div>
    </section>
  )
}
