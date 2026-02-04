"use client";

import { useI18n } from "@/lib/i18n";
import { Store, Users, ShieldCheck, ShoppingBag } from "lucide-react";

export function MultiPlatformUseCasesSection() {
  const { t } = useI18n();

  const useCases = [
    {
      icon: Store,
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
      titleKey: "featurePage.multiPlatform.useCases.1.title",
      descKey: "featurePage.multiPlatform.useCases.1.desc",
    },
    {
      icon: Users,
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600",
      titleKey: "featurePage.multiPlatform.useCases.2.title",
      descKey: "featurePage.multiPlatform.useCases.2.desc",
    },
    {
      icon: ShieldCheck,
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600",
      titleKey: "featurePage.multiPlatform.useCases.3.title",
      descKey: "featurePage.multiPlatform.useCases.3.desc",
    },
    {
      icon: ShoppingBag,
      bgColor: "bg-green-50",
      iconColor: "text-green-600",
      titleKey: "featurePage.multiPlatform.useCases.4.title",
      descKey: "featurePage.multiPlatform.useCases.4.desc",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#0d171c]">
            {t("featurePage.multiPlatform.useCases.title")}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            return (
              <div
                key={index}
                className="p-6 rounded-xl border border-gray-100 bg-white hover:shadow-lg transition-shadow"
              >
                <div
                  className={`size-12 rounded-lg ${useCase.bgColor} ${useCase.iconColor} flex items-center justify-center mb-4`}
                >
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-lg mb-2">
                  {t(useCase.titleKey)}
                </h3>
                <p className="text-sm text-gray-600">{t(useCase.descKey)}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
