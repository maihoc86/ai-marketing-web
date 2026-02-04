"use client";

import { useI18n } from "@/lib/i18n";
import { Monitor, BarChart3, CloudSync, ArrowLeftRight } from "lucide-react";

const capabilities = [
  {
    icon: Monitor,
    nameKey: "featurePage.email.technical.1.name",
    descKey: "featurePage.email.technical.1.desc",
  },
  {
    icon: BarChart3,
    nameKey: "featurePage.email.technical.2.name",
    descKey: "featurePage.email.technical.2.desc",
  },
  {
    icon: CloudSync,
    nameKey: "featurePage.email.technical.3.name",
    descKey: "featurePage.email.technical.3.desc",
  },
  {
    icon: ArrowLeftRight,
    nameKey: "featurePage.email.technical.4.name",
    descKey: "featurePage.email.technical.4.desc",
  },
];

export function EmailTechnicalCapabilitiesSection() {
  const { t } = useI18n();

  return (
    <section className="py-20 bg-gray-50 border-y border-gray-200">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900">
            {t("featurePage.email.technical.title")}
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {capabilities.map((capability, index) => (
            <div
              key={index}
              className="flex flex-col gap-3 p-5 rounded-xl bg-white border border-gray-200"
            >
              <capability.icon className="size-8 text-secondary" />
              <h3 className="font-bold text-gray-900">
                {t(capability.nameKey)}
              </h3>
              <p className="text-sm text-gray-500">{t(capability.descKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
