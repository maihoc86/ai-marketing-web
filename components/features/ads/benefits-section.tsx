"use client";

import { useI18n } from "@/lib/i18n";
import { BarChart3, Brain, Eye, BellRing } from "lucide-react";

export function AdsBenefitsSection() {
  const { t } = useI18n();

  const benefits = [
    {
      icon: BarChart3,
      titleKey: "featurePage.ads.benefits.benefit1.title",
      descKey: "featurePage.ads.benefits.benefit1.desc",
    },
    {
      icon: Brain,
      titleKey: "featurePage.ads.benefits.benefit2.title",
      descKey: "featurePage.ads.benefits.benefit2.desc",
    },
    {
      icon: Eye,
      titleKey: "featurePage.ads.benefits.benefit3.title",
      descKey: "featurePage.ads.benefits.benefit3.desc",
    },
    {
      icon: BellRing,
      titleKey: "featurePage.ads.benefits.benefit4.title",
      descKey: "featurePage.ads.benefits.benefit4.desc",
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-transparent">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0d0d1c] dark:text-white">
            {t("featurePage.ads.benefits.title")}
          </h2>
          <p className="text-gray-500 dark:text-gray-400">
            {t("featurePage.ads.benefits.subtitle")}
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-[#f8f8fc] dark:bg-[#15142b] border border-[#e7e6f4] dark:border-white/5 hover:border-primary/50 transition-all hover:shadow-lg hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-[#0d0d1c] dark:text-white">
                  {t(benefit.titleKey)}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {t(benefit.descKey)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
