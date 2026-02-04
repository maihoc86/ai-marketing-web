"use client";

import { useI18n } from "@/lib/i18n";
import { Rocket, Users, TrendingUp, Sparkles } from "lucide-react";

const benefits = [
  {
    icon: Rocket,
    nameKey: "featurePage.email.benefits.1.name",
    descKey: "featurePage.email.benefits.1.desc",
  },
  {
    icon: Users,
    nameKey: "featurePage.email.benefits.2.name",
    descKey: "featurePage.email.benefits.2.desc",
  },
  {
    icon: TrendingUp,
    nameKey: "featurePage.email.benefits.3.name",
    descKey: "featurePage.email.benefits.3.desc",
  },
  {
    icon: Sparkles,
    nameKey: "featurePage.email.benefits.4.name",
    descKey: "featurePage.email.benefits.4.desc",
  },
];

export function EmailBenefitsSection() {
  const { t } = useI18n();

  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {t("featurePage.email.benefits.title")}
          </h2>
          <p className="text-gray-600">
            {t("featurePage.email.benefits.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-gray-50 border border-gray-200 hover:border-secondary/50 hover:shadow-lg transition-all duration-300"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-white text-secondary shadow-sm group-hover:bg-secondary group-hover:text-white transition-colors">
                <benefit.icon className="size-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {t(benefit.nameKey)}
              </h3>
              <p className="text-sm text-gray-600">{t(benefit.descKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
