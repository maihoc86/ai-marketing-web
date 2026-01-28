"use client";

import { useState } from "react";
import {} from "@/components/locale-link";
import { Check } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import pricingPlans from "@/lib/constants/pricing-plans";
import { PricingCard } from "@/components/landing/pricing-card-optura";

type BillingPeriod = "monthly" | "quarterly" | "yearly";

export function PricingOpturaStyle() {
  const { t, locale } = useI18n();
  const [billingPeriod, setBillingPeriod] = useState<BillingPeriod>("monthly");

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat(locale === "vi" ? "vi-VN" : "en-US").format(
      price,
    );
  };

  return (
    <section className="py-20 md:py-32 bg-gradient-optura relative overflow-hidden font-sans">
      {/* Background decorations */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-cyan-200 rounded-full blur-3xl opacity-20" />

      <div className="container mx-auto relative">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-serif text-display-md font-bold text-gray-900 mb-4">
            {t("pricing.title") || "Bảng giá"}{" "}
            <span className="italic text-gradient">
              {t("pricing.titleHighlight") || "linh hoạt"}
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-700">
            {t("pricing.subtitle") || "Chọn gói phù hợp với nhu cầu của bạn"}
          </p>
        </div>

        {/* Billing toggle */}
        <div className="flex justify-center mb-12">
          <div className="glass-card-strong inline-flex items-center gap-2 p-2 rounded-full">
            {(["monthly", "quarterly", "yearly"] as BillingPeriod[]).map(
              (period) => (
                <button
                  key={period}
                  onClick={() => setBillingPeriod(period)}
                  className={`relative px-6 py-2.5 rounded-full font-semibold text-sm transition-all ${
                    billingPeriod === period
                      ? "bg-linear-to-r from-blue-600 to-cyan-600 text-white shadow-optura"
                      : "text-gray-700 hover:text-gray-900"
                  }`}
                >
                  {t(`pricing.billing.${period}`)}
                  {period === "yearly" && (
                    <span className="absolute -top-2 -right-2 bg-linear-to-r from-green-500 to-emerald-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                      -15%
                    </span>
                  )}
                </button>
              ),
            )}
          </div>
        </div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 container mx-auto">
          {pricingPlans.map((tier, index) => (
            <PricingCard
              key={tier.id}
              tier={tier}
              billingPeriod={billingPeriod}
              formatPrice={formatPrice}
              index={index}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            {t("pricing.guarantee") ||
              "Dùng thử 14 ngày miễn phí. Không cần thẻ tín dụng."}
          </p>
          <div className="flex items-center justify-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-600" />
              <span>{t("pricing.features.ssl") || "Bảo mật SSL"}</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-600" />
              <span>{t("pricing.features.support") || "Hỗ trợ 24/7"}</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-600" />
              <span>
                {t("pricing.features.cancel") || "Hủy bất kỳ lúc nào"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// `PricingCard` extracted to components/landing/pricing-card-optura.tsx
