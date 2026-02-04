"use client";

import { useI18n } from "@/lib/i18n";
import { Network, Zap, ShieldCheck, Bot } from "lucide-react";

export function MultiPlatformBenefitsSection() {
  const { t } = useI18n();

  const benefits = [
    {
      icon: Network,
      nameKey: "featurePage.multiPlatform.benefits.1.name",
      descKey: "featurePage.multiPlatform.benefits.1.desc",
    },
    {
      icon: Zap,
      nameKey: "featurePage.multiPlatform.benefits.2.name",
      descKey: "featurePage.multiPlatform.benefits.2.desc",
    },
    {
      icon: ShieldCheck,
      nameKey: "featurePage.multiPlatform.benefits.3.name",
      descKey: "featurePage.multiPlatform.benefits.3.desc",
    },
    {
      icon: Bot,
      nameKey: "featurePage.multiPlatform.benefits.4.name",
      descKey: "featurePage.multiPlatform.benefits.4.desc",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-[#0d171c] sm:text-4xl mb-4">
            {t("featurePage.multiPlatform.benefits.title")}
          </h2>
          <p className="text-lg text-gray-600">
            {t("featurePage.multiPlatform.benefits.subtitle")}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="group relative rounded-xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="text-lg font-bold text-[#0d171c] mb-2">
                  {t(benefit.nameKey)}
                </h3>
                <p className="text-sm text-gray-600">{t(benefit.descKey)}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
