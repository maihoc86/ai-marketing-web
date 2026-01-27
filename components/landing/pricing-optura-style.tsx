"use client";

import { useState } from "react";
import { LocaleLink } from "@/components/locale-link";
import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";

type BillingPeriod = "monthly" | "quarterly" | "yearly";

interface PricingTier {
  name: string;
  nameKey: string;
  price?: {
    monthly: number;
    quarterly: number;
    yearly: number;
  };
  customPrice?: boolean;
  credits: number;
  popular?: boolean;
  description?: string;
  maxVideos?: number;
  maxPosts?: number;
  features: string[];
}

const pricingTiers: PricingTier[] = [
  {
    name: "Startup",
    nameKey: "pricing.startup.name",
    price: {
      monthly: 3500000,
      quarterly: 3500000,
      yearly: 3500000,
    },
    credits: 3500,
    description: "Dành cho doanh nghiệp nhỏ muốn xây kênh tần suất thấp",
    maxVideos: 10,
    maxPosts: 1500,
    features: [
      "Tối đa 10 Video AI/tháng",
      "Tối đa 1,500 bài viết/tháng",
      "Tạo nội dung đa kênh (Facebook, Instagram, TikTok)",
      "Templates có sẵn (50+ mẫu)",
      "Lên lịch đăng bài tự động",
      "Analytics cơ bản",
      "Hỗ trợ email",
    ],
  },
  {
    name: "Growth",
    nameKey: "pricing.growth.name",
    price: {
      monthly: 6900000,
      quarterly: 6900000,
      yearly: 6900000,
    },
    credits: 7500,
    popular: true,
    description: "Dành cho Agency hoặc SME muốn phủ nội dung video hàng ngày",
    maxVideos: 25,
    maxPosts: 2500,
    features: [
      "Tất cả tính năng Startup",
      "Tối đa 25 Video AI/tháng",
      "Tối đa 2,500 bài viết/tháng",
      "Bonus 1,000 Credits (tổng 7,500 Credits)",
      "Thiết kế banner/thumbnail AI",
      "Multi-platform publishing (20+ platforms)",
      "Advanced Analytics & ROI tracking",
      "Priority support (phản hồi trong 2h)",
      "A/B Testing cho campaigns",
    ],
  },
  {
    name: "Enterprise",
    nameKey: "pricing.enterprise.name",
    customPrice: true,
    credits: -1,
    description: "Dành cho chuỗi bán lẻ hoặc hệ thống cần Custom",
    features: [
      "Tất cả tính năng Growth",
      "Video & Content không giới hạn",
      "Dedicated Server (riêng biệt)",
      "Custom AI Models (fine-tuned cho brand)",
      "API Access cho tích hợp hệ thống",
      "Dedicated Account Manager",
      "SLA 99.9% uptime guarantee",
      "Hỗ trợ 24/7 qua Hotline/Zalo",
      "Onboarding & Training cho team",
      "White-label solution (if needed)",
    ],
  },
];

export function PricingOpturaStyle() {
  const { t, locale } = useI18n();
  const [billingPeriod, setBillingPeriod] = useState<BillingPeriod>("monthly");

  const getDiscount = (period: BillingPeriod) => {
    if (period === "yearly") return 15;
    if (period === "quarterly") return 0;
    return 0;
  };

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
          {pricingTiers.map((tier, index) => (
            <PricingCard
              key={tier.name}
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

interface PricingCardProps {
  tier: PricingTier;
  billingPeriod: BillingPeriod;
  formatPrice: (price: number) => string;
  index: number;
}

function PricingCard({
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
      style={{
        animationDelay: `${index * 100}ms`,
      }}
    >
      {/* Popular badge */}
      {tier.popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <div className="floating-label rounded-full px-4 py-2 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-bold text-gradient">
              {t("pricing.popular") || "Phổ biến nhất"}
            </span>
          </div>
        </div>
      )}

      {/* Tier name */}
      <h3 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 mb-2">
        {t(tier.nameKey)}
      </h3>

      {/* Description */}
      {tier.description && (
        <p className="text-sm text-gray-600 mb-4 min-h-[40px]">
          {tier.description}
        </p>
      )}

      {/* Credits */}
      <div className="text-sm font-semibold text-blue-600 mb-6">
        {tier.credits === -1
          ? t("pricing.credits.unlimited")
          : t("pricing.credits.perMonth", {
              count: tier.credits.toLocaleString(),
            })}
      </div>

      {/* Price */}
      <div className="mb-8">
        {tier.customPrice ? (
          <div className="flex items-baseline gap-2">
            <span className="font-serif text-4xl md:text-5xl font-bold text-gradient">
              {t("pricing.contact") || "Liên hệ"}
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

      {/* CTA button */}
      <LocaleLink href={`/register?package=${tier.name.toLowerCase()}`}>
        <Button
          className={`w-full rounded-full py-6 text-base font-semibold shadow-optura hover:shadow-optura-lg transition-all ${
            tier.popular
              ? "bg-linear-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white"
              : "bg-white hover:bg-gray-50 text-gray-900 border-2 border-gray-200"
          }`}
        >
          {tier.customPrice
            ? t("pricing.cta.contact") || "Liên hệ tư vấn"
            : t("pricing.cta") || "Bắt đầu ngay"}
        </Button>
      </LocaleLink>

      {/* Features list */}
      <ul className="mt-8 space-y-4">
        {tier.features.map((feature, idx) => (
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
