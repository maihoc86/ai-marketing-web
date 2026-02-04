"use client";

import { useI18n } from "@/lib/i18n";

export function AdsUseCasesSection() {
  const { t } = useI18n();

  const useCases = [
    {
      titleKey: "featurePage.ads.useCases.case1.title",
      descKey: "featurePage.ads.useCases.case1.desc",
      borderColor: "border-primary",
    },
    {
      titleKey: "featurePage.ads.useCases.case2.title",
      descKey: "featurePage.ads.useCases.case2.desc",
      borderColor: "border-secondary",
    },
    {
      titleKey: "featurePage.ads.useCases.case3.title",
      descKey: "featurePage.ads.useCases.case3.desc",
      borderColor: "border-primary",
    },
    {
      titleKey: "featurePage.ads.useCases.case4.title",
      descKey: "featurePage.ads.useCases.case4.desc",
      borderColor: "border-secondary",
    },
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-background-dark/50">
      <div className="max-w-[1280px] mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#0d0d1c] dark:text-white">
          {t("featurePage.ads.useCases.title")}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className={`bg-white dark:bg-[#1a192e] p-6 rounded-xl border-t-4 ${useCase.borderColor} shadow-sm`}
            >
              <h3 className="font-bold text-lg mb-2 dark:text-white">
                {t(useCase.titleKey)}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {t(useCase.descKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
