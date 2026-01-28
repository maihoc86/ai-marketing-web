"use client";

import { Share2, ShoppingBag, Target, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";
import { useInView } from "@/hooks/use-in-view";

export function AIContentMarketingNeedsSection() {
  const { t } = useI18n();
  const { ref, isInView } = useInView();

  const categories = [
    {
      icon: Share2,
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      titleKey: "featurePage.content.marketingNeeds.social.title",
      descKey: "featurePage.content.marketingNeeds.social.desc",
      features: [
        "featurePage.content.marketingNeeds.social.feature1",
        "featurePage.content.marketingNeeds.social.feature2",
        "featurePage.content.marketingNeeds.social.feature3",
      ],
      ctaKey: "featurePage.content.marketingNeeds.social.cta",
    },
    {
      icon: ShoppingBag,
      iconBg: "bg-orange-100",
      iconColor: "text-orange-600",
      titleKey: "featurePage.content.marketingNeeds.ecommerce.title",
      descKey: "featurePage.content.marketingNeeds.ecommerce.desc",
      features: [
        "featurePage.content.marketingNeeds.ecommerce.feature1",
        "featurePage.content.marketingNeeds.ecommerce.feature2",
        "featurePage.content.marketingNeeds.ecommerce.feature3",
      ],
      ctaKey: "featurePage.content.marketingNeeds.ecommerce.cta",
    },
    {
      icon: Target,
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
      titleKey: "featurePage.content.marketingNeeds.advertising.title",
      descKey: "featurePage.content.marketingNeeds.advertising.desc",
      features: [
        "featurePage.content.marketingNeeds.advertising.feature1",
        "featurePage.content.marketingNeeds.advertising.feature2",
        "featurePage.content.marketingNeeds.advertising.feature3",
      ],
      ctaKey: "featurePage.content.marketingNeeds.advertising.cta",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div ref={ref} className="container mx-auto px-6">
        <h2
          className={`text-3xl md:text-4xl font-black mb-10 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {t("featurePage.content.marketingNeeds.title")}
        </h2>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className={`bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-lg hover:border-[#22b5f8]/30 transition-all duration-500 flex flex-col ${
                  isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${0.1 + index * 0.15}s` }}
              >
                {/* Icon */}
                <div className={`size-12 rounded-xl ${category.iconBg} flex items-center justify-center mb-6`}>
                  <Icon className={`w-6 h-6 ${category.iconColor}`} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-4">
                  {t(category.titleKey)}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-6">
                  {t(category.descKey)}
                </p>

                {/* Features List */}
                <ul className="space-y-3 mb-8 text-sm text-gray-500">
                  {category.features.map((featureKey, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 shrink-0" />
                      {t(featureKey)}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <div className="mt-auto">
                  <Button className="w-full py-3 bg-[#1f3b61] hover:bg-[#1f3b61]/90 text-white font-bold rounded-xl transition-all">
                    {t(category.ctaKey)}
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
