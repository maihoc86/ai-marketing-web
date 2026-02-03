"use client";

import { useState } from "react";
import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LocaleLink } from "@/components/locale-link";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const plans = [
  {
    id: "free",
    nameKey: "featurePage.video.pricing.free.name",
    priceMonthly: "0",
    priceYearly: "0",
    descKey: "featurePage.video.pricing.free.desc",
    features: [
      "featurePage.video.pricing.free.feature1",
      "featurePage.video.pricing.free.feature2",
      "featurePage.video.pricing.free.feature3",
      "featurePage.video.pricing.free.feature4",
    ],
    popular: true,
    ctaKey: "featurePage.video.pricing.free.cta",
    ctaVariant: "outline" as const,
  },
  {
    id: "enterprise",
    nameKey: "featurePage.video.pricing.enterprise.name",
    priceMonthly: "custom",
    priceYearly: "custom",
    descKey: "featurePage.video.pricing.enterprise.desc",
    features: [
      "featurePage.video.pricing.enterprise.feature1",
      "featurePage.video.pricing.enterprise.feature2",
      "featurePage.video.pricing.enterprise.feature3",
      "featurePage.video.pricing.enterprise.feature4",
      "featurePage.video.pricing.enterprise.feature5",
    ],
    popular: false,
    ctaKey: "featurePage.video.pricing.enterprise.cta",
    ctaVariant: "default" as const,
  },
];

export function VideoPricingSection() {
  const { t } = useI18n();
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">(
    "monthly"
  );

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4">
            {t("featurePage.video.pricing.title")}
          </h2>
          <p className="text-gray-600 text-lg">
            {t("featurePage.video.pricing.subtitle")}
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center mt-8">
            <div className="bg-gray-100 p-1 rounded-full flex items-center relative border border-gray-200">
              <button
                onClick={() => setBillingCycle("monthly")}
                className={cn(
                  "px-6 py-2 rounded-full text-sm font-bold transition-all z-10",
                  billingCycle === "monthly"
                    ? "bg-primary text-white shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                )}
              >
                {t("featurePage.video.pricing.monthly")}
              </button>
              <button
                onClick={() => setBillingCycle("yearly")}
                className={cn(
                  "px-6 py-2 rounded-full text-sm font-medium transition-all z-10 flex items-center gap-2",
                  billingCycle === "yearly"
                    ? "bg-primary text-white shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                )}
              >
                {t("featurePage.video.pricing.yearly")}
                <span className="bg-emerald-100 text-emerald-700 text-[10px] px-1.5 py-0.5 rounded uppercase tracking-wide font-bold">
                  {t("featurePage.video.pricing.save")} 20%
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={cn(
                "relative flex flex-col gap-6 rounded-2xl border p-8 transition-all duration-300 hover:shadow-xl",
                plan.popular
                  ? "bg-white border-gray-200 hover:border-primary/50"
                  : "bg-white border-gray-200 hover:border-primary/50"
              )}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <span className="absolute top-6 right-6 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                  {t("featurePage.video.pricing.popular")}
                </span>
              )}

              {/* Plan Info */}
              <div className="space-y-2">
                <h3 className="text-gray-900 text-lg font-bold">
                  {t(plan.nameKey)}
                </h3>
                <div className="flex items-baseline gap-1">
                  {plan.priceMonthly === "custom" ? (
                    <span className="text-gray-900 text-5xl font-black tracking-tight">
                      {t("featurePage.video.pricing.custom")}
                    </span>
                  ) : (
                    <>
                      <span className="text-gray-900 text-5xl font-black tracking-tight">
                        $
                        {billingCycle === "monthly"
                          ? plan.priceMonthly
                          : plan.priceYearly}
                      </span>
                      <span className="text-gray-500 text-base font-medium">
                        /{t("featurePage.video.pricing.mo")}
                      </span>
                    </>
                  )}
                </div>
                <p className="text-gray-500 text-sm">{t(plan.descKey)}</p>
              </div>

              {/* CTA Button */}
              <Button
                size="lg"
                variant={plan.ctaVariant}
                className={cn(
                  "w-full rounded-xl font-bold",
                  plan.ctaVariant === "default"
                    ? "btn-primary-light"
                    : "border-2 border-gray-200 hover:border-primary hover:bg-primary/5"
                )}
                asChild
              >
                <LocaleLink href="/register">{t(plan.ctaKey)}</LocaleLink>
              </Button>

              {/* Features List */}
              <div className="space-y-4 pt-4 border-t border-gray-100">
                {plan.features.map((featureKey, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 text-sm text-gray-700"
                  >
                    <span className="flex-shrink-0 size-5 rounded-full bg-primary/10 flex items-center justify-center">
                      <Check className="size-3 text-primary" />
                    </span>
                    {t(featureKey)}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm mb-4">
            {t("featurePage.video.pricing.needMore")}
          </p>
          <LocaleLink
            href="/register"
            className="inline-flex items-center gap-2 text-primary font-bold hover:underline"
          >
            <Sparkles className="size-4" />
            {t("featurePage.video.pricing.contactSales")}
          </LocaleLink>
        </div>
      </div>
    </section>
  );
}
