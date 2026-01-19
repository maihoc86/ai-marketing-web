"use client"

import { useState } from "react"
import { Check, X } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useI18n } from "@/lib/i18n"
import { cn } from "@/lib/utils"

interface PricingPlan {
  name: string
  nameKey: string
  priceUSD: number | "custom"
  priceVND: number | "custom"
  description: string
  descriptionKey: string
  popular?: boolean
  features: string[]
  featuresKeys: string[]
  ctaText: string
  ctaKey: string
}

const pricingPlans: PricingPlan[] = [
  {
    name: "Startup",
    nameKey: "pricing.enterprise.startup.name",
    priceUSD: 499,
    priceVND: 3500000,
    description: "For small businesses building marketing presence",
    descriptionKey: "pricing.enterprise.startup.description",
    features: [
      "Up to 10 AI Videos/month",
      "1,500 content posts/month",
      "Multi-channel publishing (Facebook, Instagram, TikTok)",
      "50+ content templates",
      "Auto-scheduling",
      "Basic analytics",
      "Email support",
    ],
    featuresKeys: [
      "pricing.enterprise.startup.feature1",
      "pricing.enterprise.startup.feature2",
      "pricing.enterprise.startup.feature3",
      "pricing.enterprise.startup.feature4",
      "pricing.enterprise.startup.feature5",
      "pricing.enterprise.startup.feature6",
      "pricing.enterprise.startup.feature7",
    ],
    ctaText: "Start Free Trial",
    ctaKey: "pricing.enterprise.startup.cta",
  },
  {
    name: "Growth",
    nameKey: "pricing.enterprise.growth.name",
    priceUSD: 2499,
    priceVND: 6900000,
    description: "For agencies and SMEs scaling content production",
    descriptionKey: "pricing.enterprise.growth.description",
    popular: true,
    features: [
      "All Startup features",
      "Up to 25 AI Videos/month",
      "2,500 content posts/month",
      "Bonus 1,000 Credits (7,500 total)",
      "AI banner & thumbnail design",
      "20+ platform publishing",
      "Advanced Analytics & ROI tracking",
      "Priority support (2hr response)",
      "A/B testing for campaigns",
    ],
    featuresKeys: [
      "pricing.enterprise.growth.feature1",
      "pricing.enterprise.growth.feature2",
      "pricing.enterprise.growth.feature3",
      "pricing.enterprise.growth.feature4",
      "pricing.enterprise.growth.feature5",
      "pricing.enterprise.growth.feature6",
      "pricing.enterprise.growth.feature7",
      "pricing.enterprise.growth.feature8",
      "pricing.enterprise.growth.feature9",
    ],
    ctaText: "Get Started",
    ctaKey: "pricing.enterprise.growth.cta",
  },
  {
    name: "Enterprise",
    nameKey: "pricing.enterprise.enterprise.name",
    priceUSD: "custom",
    priceVND: "custom",
    description: "For retail chains and custom enterprise solutions",
    descriptionKey: "pricing.enterprise.enterprise.description",
    features: [
      "All Growth features",
      "Unlimited Videos & Content",
      "Dedicated Server",
      "Custom AI Models (brand fine-tuned)",
      "API Access for system integration",
      "Dedicated Account Manager",
      "99.9% SLA uptime guarantee",
      "24/7 Hotline/Chat support",
      "Team onboarding & training",
      "White-label solution (optional)",
    ],
    featuresKeys: [
      "pricing.enterprise.enterprise.feature1",
      "pricing.enterprise.enterprise.feature2",
      "pricing.enterprise.enterprise.feature3",
      "pricing.enterprise.enterprise.feature4",
      "pricing.enterprise.enterprise.feature5",
      "pricing.enterprise.enterprise.feature6",
      "pricing.enterprise.enterprise.feature7",
      "pricing.enterprise.enterprise.feature8",
      "pricing.enterprise.enterprise.feature9",
      "pricing.enterprise.enterprise.feature10",
    ],
    ctaText: "Contact Sales",
    ctaKey: "pricing.enterprise.enterprise.cta",
  },
]

// Feature comparison data
interface ComparisonFeature {
  name: string
  nameKey: string
  startup: string | boolean
  growth: string | boolean
  enterprise: string | boolean
}

const comparisonFeatures: ComparisonFeature[] = [
  {
    name: "Global LLM Orchestration",
    nameKey: "pricing.enterprise.comparison.feature1",
    startup: true,
    growth: true,
    enterprise: true,
  },
  {
    name: "Localized Content Gen (40+ Languages)",
    nameKey: "pricing.enterprise.comparison.feature2",
    startup: false,
    growth: true,
    enterprise: true,
  },
  {
    name: "Predictive Performance Analytics",
    nameKey: "pricing.enterprise.comparison.feature3",
    startup: "Basic",
    growth: "Advanced",
    enterprise: "Full Real-time",
  },
  {
    name: "Security & API Limits",
    nameKey: "pricing.enterprise.comparison.feature4",
    startup: "10k requests/mo",
    growth: "500k requests/mo",
    enterprise: "Unlimited",
  },
  {
    name: "Deployment Type",
    nameKey: "pricing.enterprise.comparison.feature5",
    startup: "SaaS",
    growth: "SaaS",
    enterprise: "Hybrid / On-Prem",
  },
]

export function PricingEnterpriseStyle() {
  const { t, locale } = useI18n()
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">("monthly")

  // Calculate discounted yearly price (15% discount)
  const calculateYearlyPrice = (monthlyPrice: number | "custom") => {
    if (monthlyPrice === "custom") return "custom"
    return Math.round(monthlyPrice * 12 * 0.85) // 15% discount
  }

  const formatPrice = (priceVND: number | "custom", priceUSD: number | "custom") => {
    if (priceVND === "custom") {
      return locale === "vi" ? "Liên hệ" : "Custom"
    }

    if (locale === "vi") {
      return `${new Intl.NumberFormat("vi-VN").format(priceVND as number)} VNĐ`
    } else {
      return `$${new Intl.NumberFormat("en-US").format(priceUSD as number)}`
    }
  }

  const renderComparisonValue = (value: string | boolean) => {
    if (typeof value === "boolean") {
      return value ? (
        <Check className="w-5 h-5 text-green-600 mx-auto" />
      ) : (
        <X className="w-5 h-5 text-gray-300 mx-auto" />
      )
    }
    return <span className="text-sm font-medium text-gray-700">{value}</span>
  }

  return (
    <section
      id="pricing"
      className="py-20 md:py-32 bg-white relative overflow-hidden font-sans"
    >
      {/* Subtle background decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-40" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-50 rounded-full blur-3xl opacity-40" />

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t("pricing.enterprise.title")} <span className="text-blue-600">{t("pricing.enterprise.titleHighlight")}</span>
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            {t("pricing.enterprise.subtitle.full")}
          </p>

          {/* Billing Period Toggle */}
          <div className="inline-flex items-center gap-3 bg-gray-100 rounded-full p-1.5">
            <button
              onClick={() => setBillingPeriod("monthly")}
              className={cn(
                "px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-200",
                billingPeriod === "monthly"
                  ? "bg-white text-gray-900 shadow-md"
                  : "text-gray-600 hover:text-gray-900"
              )}
            >
              {t("pricing.enterprise.billing.monthly")}
            </button>
            <button
              onClick={() => setBillingPeriod("yearly")}
              className={cn(
                "px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-200 relative",
                billingPeriod === "yearly"
                  ? "bg-white text-gray-900 shadow-md"
                  : "text-gray-600 hover:text-gray-900"
              )}
            >
              {t("pricing.enterprise.billing.yearly")}
              <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                -15%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {pricingPlans.map((plan, index) => (
            <div
              key={plan.name}
              className={cn(
                "relative rounded-xl bg-white p-8 transition-all duration-300",
                plan.popular
                  ? "border-2 border-blue-600 shadow-xl scale-105"
                  : "border border-gray-200 shadow-md hover:shadow-lg",
              )}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-blue-600 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                    {t("pricing.popular")}
                  </span>
                </div>
              )}

              {/* Plan Name */}
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {t(`pricing.enterprise.${plan.name.toLowerCase()}.name`)}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm mb-6 min-h-[40px]">
                {t(`pricing.enterprise.${plan.name.toLowerCase()}.description`)}
              </p>

              {/* Price */}
              <div className="mb-8">
                {billingPeriod === "yearly" && plan.priceVND !== "custom" && (
                  <div className="mb-2">
                    <span className="inline-block bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
                      {t("pricing.enterprise.save15")}
                    </span>
                  </div>
                )}
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl md:text-5xl font-bold text-gray-900">
                    {plan.priceVND === "custom" ? (
                      t("pricing.enterprise.custom")
                    ) : (
                      <>
                        {locale === "vi" ? (
                          billingPeriod === "monthly" ? (
                            <>
                              {new Intl.NumberFormat("vi-VN").format(plan.priceVND as number).slice(0, -4)}
                              <span className="text-2xl text-gray-600">K</span>
                            </>
                          ) : (
                            <>
                              {new Intl.NumberFormat("vi-VN").format(calculateYearlyPrice(plan.priceVND) as number).slice(0, -4)}
                              <span className="text-2xl text-gray-600">K</span>
                            </>
                          )
                        ) : (
                          billingPeriod === "monthly" ? `$${plan.priceUSD}` : `$${calculateYearlyPrice(plan.priceUSD)}`
                        )}
                      </>
                    )}
                  </span>
                  {plan.priceVND !== "custom" && (
                    <span className="text-gray-600 text-base">
                      {t(`pricing.enterprise.per${billingPeriod === "monthly" ? "Month" : "Year"}`)}
                    </span>
                  )}
                </div>
              </div>

              {/* CTA Button */}
              <Link href={`/dang-ky?package=${plan.name.toLowerCase()}`}>
                <Button
                  className={cn(
                    "w-full h-12 rounded-lg font-semibold text-base transition-all duration-200",
                    plan.popular
                      ? "bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg"
                      : "bg-white hover:bg-gray-50 text-blue-600 border-2 border-blue-600 hover:border-blue-700",
                  )}
                >
                  {t(`pricing.enterprise.${plan.name.toLowerCase()}.cta`)}
                </Button>
              </Link>

              {/* Features List */}
              <ul className="mt-8 space-y-4">
                {plan.featuresKeys.map((featureKey, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="shrink-0 w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mt-0.5">
                      <Check className="w-3 h-3 text-blue-600" />
                    </div>
                    <span className="text-gray-700 text-sm leading-relaxed">
                      {t(featureKey)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Feature Comparison Table */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8">
            {t("pricing.enterprise.comparison.title")}
          </h3>

          <div className="bg-white rounded-xl border border-gray-200 shadow-md overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-4 gap-4 bg-gray-50 p-6 font-semibold text-gray-900 border-b border-gray-200">
              <div className="col-span-1">
                {t("pricing.enterprise.comparison.features")}
              </div>
              <div className="text-center">
                {t("pricing.enterprise.startup.name")}
              </div>
              <div className="text-center">
                {t("pricing.enterprise.growth.name")}
              </div>
              <div className="text-center">
                {t("pricing.enterprise.enterprise.name")}
              </div>
            </div>

            {/* Table Body */}
            <div className="divide-y divide-gray-100">
              {comparisonFeatures.map((feature, index) => (
                <div
                  key={index}
                  className={cn(
                    "grid grid-cols-4 gap-4 p-6 hover:bg-gray-50 transition-colors",
                    index % 2 === 0 ? "bg-white" : "bg-gray-50/50",
                  )}
                >
                  <div className="col-span-1 font-medium text-gray-900 text-sm">
                    {t(feature.nameKey)}
                  </div>
                  <div className="text-center flex items-center justify-center">
                    {renderComparisonValue(feature.startup)}
                  </div>
                  <div className="text-center flex items-center justify-center">
                    {renderComparisonValue(feature.growth)}
                  </div>
                  <div className="text-center flex items-center justify-center">
                    {renderComparisonValue(feature.enterprise)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        
      </div>
    </section>
  )
}
