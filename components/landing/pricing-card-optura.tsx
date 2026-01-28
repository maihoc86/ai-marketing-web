"use client";

import { LocaleLink } from "@/components/locale-link";
import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";

type BillingPeriod = "monthly" | "quarterly" | "yearly";

interface PricingCardProps {
  tier: any;
  billingPeriod: BillingPeriod;
  formatPrice: (price: number) => string;
  index: number;
}

export function PricingCard({
  tier,
  billingPeriod,
  formatPrice,
  index,
}: PricingCardProps) {
  const { t } = useI18n();

  return (
    <div
      className={`relative glass-card rounded-3xl p-8 transition-all duration-500 hover:shadow-optura-lg ${
        tier.popular ? "ring-2 ring-blue-500 scale-105" : ""
      } animate-fade-up`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {tier.popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <div className="floating-label rounded-full px-4 py-2 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-bold text-gradient">
              {t("pricing.popular")}
            </span>
          </div>
        </div>
      )}

      <h3 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 mb-2">
        {t(tier.nameKey)}
      </h3>

      {tier.description && (
        <p className="text-sm text-gray-600 mb-4 min-h-[40px]">
          {tier.description}
        </p>
      )}

      <div className="text-sm font-semibold text-blue-600 mb-6">
        {tier.credits === -1
          ? t("pricing.credits.unlimited")
          : t("pricing.credits.perMonth", {
              count: tier.credits.toLocaleString(),
            })}
      </div>

      <div className="mb-8">
        {tier.customPrice ? (
          <div className="flex items-baseline gap-2">
            <span className="font-serif text-4xl md:text-5xl font-bold text-gradient">
              {t("pricing.contact")}
            </span>
          </div>
        ) : (
          <>
            <div className="flex items-baseline gap-2">
              <span className="font-serif text-4xl md:text-5xl font-bold text-gradient">
                {tier.price && formatPrice(tier.price[billingPeriod])}
              </span>
              <span className="text-gray-600">{t("pricing.currency")}</span>
            </div>
            <div className="text-sm text-gray-600 mt-1">
              /{t(`pricing.per.${billingPeriod}`) || billingPeriod}
            </div>
          </>
        )}
      </div>

      <LocaleLink
        href={`/register?package=${(tier.name || tier.id || "").toString().toLowerCase()}`}
      >
        <Button
          className={`w-full rounded-full py-6 text-base font-semibold shadow-optura hover:shadow-optura-lg transition-all ${
            tier.popular
              ? "bg-linear-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white"
              : "bg-white hover:bg-gray-50 text-gray-900 border-2 border-gray-200"
          }`}
        >
          {tier.customPrice ? t("pricing.cta.contact") : t("pricing.cta")}
        </Button>
      </LocaleLink>

      <ul className="mt-8 space-y-4">
        {tier.features.map((feature: string, idx: number) => (
          <li key={idx} className="flex items-start gap-3">
            <div className="shrink-0 w-5 h-5 rounded-full bg-linear-to-br from-blue-500 to-cyan-500 flex items-center justify-center mt-0.5">
              <Check className="w-3 h-3 text-white" />
            </div>
            <span className="text-gray-700 text-sm leading-relaxed">
              {feature}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
