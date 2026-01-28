"use client";

import { useState } from "react";
import { Check, X } from "lucide-react";
import { LocaleLink } from "@/components/locale-link";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

interface PricingPlan {
  nameKey: string;
  priceUSD: number | "custom";
  priceVND: number | "custom";
  descriptionKey: string;
  popular?: boolean;
  featuresKeys: string[];
  ctaKey: string;
}

const pricingPlans: PricingPlan[] = [
  {
    nameKey: "pricing.enterprise.startup.name",
    priceUSD: 499,
    priceVND: 499 * 250000, // Approximate conversion
    descriptionKey: "pricing.enterprise.startup.description",
    featuresKeys: [
      "pricing.enterprise.startup.feature8",
      "pricing.enterprise.startup.feature9",
      "pricing.enterprise.startup.feature10",
      "pricing.enterprise.startup.feature11",
      "pricing.enterprise.startup.feature12",
      "pricing.enterprise.startup.feature13",
      "pricing.enterprise.startup.feature14",
      "pricing.enterprise.startup.feature15",
      "pricing.enterprise.startup.feature16",
      "pricing.enterprise.startup.feature17",
      "pricing.enterprise.startup.feature18",
      "pricing.enterprise.startup.feature19",
      "pricing.enterprise.startup.feature20",
      "pricing.enterprise.startup.feature21",
      "pricing.enterprise.startup.feature22",
      "pricing.enterprise.startup.feature23",
      "pricing.enterprise.startup.feature24",
      "pricing.enterprise.startup.feature25",
    ],
    ctaKey: "pricing.enterprise.startup.cta",
  },
  {
    nameKey: "pricing.enterprise.growth.name",
    priceUSD: 799,
    priceVND: 799 * 250000, // Approximate conversion
    descriptionKey: "pricing.enterprise.growth.description",
    popular: true,
    featuresKeys: [
      "pricing.enterprise.growth.feature10",
      "pricing.enterprise.growth.feature11",
      "pricing.enterprise.growth.feature12",
      "pricing.enterprise.growth.feature13",
      "pricing.enterprise.growth.feature14",
      "pricing.enterprise.growth.feature15",
      "pricing.enterprise.growth.feature16",
      "pricing.enterprise.growth.feature17",
      "pricing.enterprise.growth.feature18",
      "pricing.enterprise.growth.feature19",
      "pricing.enterprise.growth.feature20",
      "pricing.enterprise.growth.feature21",
      "pricing.enterprise.growth.feature22",
      "pricing.enterprise.growth.feature23",
      "pricing.enterprise.growth.feature24",
      "pricing.enterprise.growth.feature25",
      "pricing.enterprise.growth.feature26",
      "pricing.enterprise.growth.feature27",
      "pricing.enterprise.growth.feature28",
      "pricing.enterprise.growth.feature29",
      "pricing.enterprise.growth.feature30",
      "pricing.enterprise.growth.feature31",
      "pricing.enterprise.growth.feature32",
      "pricing.enterprise.growth.feature33",
    ],
    ctaKey: "pricing.enterprise.growth.cta",
  },
];

// Feature comparison data
interface ComparisonFeature {
  name: string;
  nameKey: string;
  professional: string | boolean;
  business: string | boolean;
}

const comparisonFeatures: ComparisonFeature[] = [
  {
    name: "Monthly price",
    nameKey: "pricing.enterprise.comparison.priceMonthly",
    professional: "$499",
    business: "$799",
  },
  {
    name: "Annual price",
    nameKey: "pricing.enterprise.comparison.priceAnnual",
    professional: "$399/mo",
    business: "$639/mo",
  },
  {
    name: "Free trial",
    nameKey: "pricing.enterprise.comparison.freeTrial",
    professional: "Free 1-month trial",
    business: "Free 1-month trial",
  },
  {
    name: "Social accounts",
    nameKey: "pricing.enterprise.comparison.socialAccounts",
    professional: "3 platforms",
    business: "<b>7+ platforms</b>",
  },
  {
    name: "Platforms supported",
    nameKey: "pricing.enterprise.comparison.platformsSupported",
    professional: "3 platforms",
    business: "<b>7+ platforms</b>",
  },
  {
    name: "Multi-language",
    nameKey: "pricing.enterprise.comparison.multiLang",
    professional: "30+ languages",
    business: "30+ languages",
  },
  {
    name: "AI Text Posts",
    nameKey: "pricing.enterprise.comparison.aiText",
    professional: "Unlimited",
    business: "Unlimited",
  },
  {
    name: "AI Images/month",
    nameKey: "pricing.enterprise.comparison.aiImages",
    professional: "500/month",
    business: "<b>5,000/month</b>",
  },
  {
    name: "AI Videos/month",
    nameKey: "pricing.enterprise.comparison.aiVideos",
    professional: "20 videos/month",
    business: "<b>100 videos/month</b>",
  },
  {
    name: "AI Banner & Thumbnail",
    nameKey: "pricing.enterprise.comparison.aiBanner",
    professional: false,
    business: true,
  },
  {
    name: "Custom AI Model",
    nameKey: "pricing.enterprise.comparison.customModel",
    professional: false,
    business: true,
  },
  {
    name: "Basic Analytics",
    nameKey: "pricing.enterprise.comparison.basicAnalytics",
    professional: true,
    business: true,
  },
  {
    name: "Advanced Analytics",
    nameKey: "pricing.enterprise.comparison.advancedAnalytics",
    professional: false,
    business: true,
  },
  {
    name: "ROI Tracking",
    nameKey: "pricing.enterprise.comparison.roi",
    professional: false,
    business: true,
  },
  {
    name: "A/B Testing",
    nameKey: "pricing.enterprise.comparison.abTesting",
    professional: false,
    business: true,
  },
  {
    name: "1-on-1 Onboarding",
    nameKey: "pricing.enterprise.comparison.onboarding",
    professional: "Dedicated",
    business: "Dedicated",
  },
  {
    name: "Strategy Consultation",
    nameKey: "pricing.enterprise.comparison.strategy",
    professional: "",
    business: "<b>Dedicated</b>",
  },
  {
    name: "Account Manager",
    nameKey: "pricing.enterprise.comparison.accountManager",
    professional: true,
    business: true,
  },
  {
    name: "Support Response",
    nameKey: "pricing.enterprise.comparison.supportResponse",
    professional: "",
    business: "<b>Priority 2-hour response</b>",
  },
];

export function PricingEnterpriseStyle() {
  const { t, locale } = useI18n();
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">(
    "monthly",
  );

  // Calculate discounted yearly price (20% discount)
  const calculateYearlyPrice = (monthlyPrice: number | "custom") => {
    if (monthlyPrice === "custom") return "custom";
    return Math.round(monthlyPrice * 12 * 0.8); // 20% discount
  };

  const formatPrice = (
    priceVND: number | "custom",
    priceUSD: number | "custom",
  ) => {
    if (priceVND === "custom") {
      return locale === "vi" ? "Liên hệ" : "Custom";
    }

    if (locale === "vi") {
      return `${new Intl.NumberFormat("vi-VN").format(priceVND as number)} VNĐ`;
    } else {
      return `$${new Intl.NumberFormat("en-US").format(priceUSD as number)}`;
    }
  };

  const renderComparisonValue = (value: string | boolean) => {
    if (typeof value === "boolean") {
      return value ? (
        <Check className="size-5 text-green-600 mx-auto" />
      ) : (
        <X className="size-5 text-gray-300 mx-auto" />
      );
    }
    // support small HTML (e.g. <strong>) from internal strings
    if (typeof value === "string" && value.includes("<")) {
      return (
        <span
          className="text-sm font-medium text-gray-700"
          dangerouslySetInnerHTML={{ __html: value }}
        />
      );
    }
    return <span className="text-sm font-medium text-gray-700">{value}</span>;
  };

  return (
    <section
      id="pricing"
      className="py-20 md:py-32 bg-white relative overflow-hidden font-sans"
    >
      {/* Subtle background decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-40" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-50 rounded-full blur-3xl opacity-40" />

      <div className="container mx-auto relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t("pricing.enterprise.title")}{" "}
            <span className="text-primary">
              {t("pricing.enterprise.titleHighlight")}
            </span>
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
                  : "text-gray-600 hover:text-gray-900",
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
                  : "text-gray-600 hover:text-gray-900",
              )}
            >
              {t("pricing.enterprise.billing.yearly")}
              <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                -20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {pricingPlans.map((plan) => (
            <div
              key={plan.nameKey}
              className={cn(
                "relative rounded-xl bg-white p-8 transition-all duration-300",
                plan.popular
                  ? "border-2 border-primary shadow-xl scale-105"
                  : "border border-gray-200 shadow-md hover:shadow-lg",
              )}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                    {t("pricing.popular")}
                  </span>
                </div>
              )}

              {/* Plan Name */}
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {t(plan.nameKey)}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm mb-6 min-h-10">
                {t(plan.descriptionKey)}
              </p>

              {/* Price */}
              <div className="mb-8">
                {billingPeriod === "yearly" && plan.priceVND !== "custom" && (
                  <div className="mb-2">
                    <span className="inline-block bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
                      {t("pricing.enterprise.save20")}
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
                              {new Intl.NumberFormat("vi-VN")
                                .format(plan.priceVND as number)
                                .slice(0, -4)}
                              <span className="text-2xl text-gray-600">K</span>
                            </>
                          ) : (
                            <>
                              {new Intl.NumberFormat("vi-VN")
                                .format(
                                  calculateYearlyPrice(plan.priceVND) as number,
                                )
                                .slice(0, -4)}
                              <span className="text-2xl text-gray-600">K</span>
                            </>
                          )
                        ) : billingPeriod === "monthly" ? (
                          `$${plan.priceUSD}`
                        ) : (
                          `$${calculateYearlyPrice(plan.priceUSD)}`
                        )}
                      </>
                    )}
                  </span>
                  {plan.priceVND !== "custom" && (
                    <span className="text-gray-600 text-base">
                      {t(
                        `pricing.enterprise.per${billingPeriod === "monthly" ? "Month" : "Year"}`,
                      )}
                    </span>
                  )}
                </div>
              </div>

              {/* CTA Button */}
              <LocaleLink
                href={`/register?package=${plan.nameKey.toLowerCase()}`}
              >
                <Button
                  className={cn(
                    "w-full h-12 rounded-lg font-semibold text-base transition-all duration-200",
                    plan.popular
                      ? "bg-primary hover:bg-primary-hover text-white shadow-md hover:shadow-lg"
                      : "bg-white hover:bg-gray-50 text-primary border-2 border-primary hover:border-primary-hover",
                  )}
                >
                  {t(plan.ctaKey)}
                </Button>
              </LocaleLink>

              {/* Features List */}
              <ul className="mt-8 space-y-4">
                {plan.featuresKeys.map((featureKey, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="shrink-0 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                      <Check className="size-3 text-primary" />
                    </div>
                    <span
                      className="text-gray-700 text-sm leading-relaxed"
                      // translations are internal-controlled; allow simple <strong> tags
                      dangerouslySetInnerHTML={{
                        __html: String(t(featureKey)),
                      }}
                    />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Feature Comparison Table */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8">
            {t("pricing.enterprise.comparison.title")}
          </h3>

          <div className="bg-white rounded-xl border border-gray-200 shadow-md overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-3 gap-4 bg-gray-50 p-6 font-semibold text-gray-900 border-b border-gray-200">
              <div className="col-span-1">
                {t("pricing.enterprise.comparison.features")}
              </div>
              <div className="text-center">
                {t("pricing.enterprise.startup.name")}
              </div>
              <div className="text-center text-primary">
                {t("pricing.enterprise.growth.name")}
              </div>
            </div>

            {/* Table Body */}
            <div className="divide-y divide-gray-100">
              {comparisonFeatures.map((feature, idx) => (
                <div
                  key={idx}
                  className={cn(
                    "grid grid-cols-3 gap-4 p-6 hover:bg-gray-50 transition-colors bg-gray-50/50",
                    { "bg-white": idx % 2 === 0 },
                  )}
                >
                  <div className="col-span-1 font-medium text-gray-900 text-sm">
                    {t(feature.nameKey)}
                  </div>
                  <div className="text-center flex items-center justify-center">
                    {renderComparisonValue(feature.professional)}
                  </div>
                  <div className="text-center flex items-center justify-center">
                    {renderComparisonValue(feature.business)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
