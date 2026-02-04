"use client";

import { useI18n } from "@/lib/i18n";

const useCases = [
  {
    badgeKey: "featurePage.email.useCases.1.badge",
    badgeColor: "bg-primary/10 text-primary",
    titleKey: "featurePage.email.useCases.1.title",
    descKey: "featurePage.email.useCases.1.desc",
    emoji: "🚀",
  },
  {
    badgeKey: "featurePage.email.useCases.2.badge",
    badgeColor: "bg-secondary/10 text-secondary",
    titleKey: "featurePage.email.useCases.2.title",
    descKey: "featurePage.email.useCases.2.desc",
    emoji: "🛍️",
  },
  {
    badgeKey: "featurePage.email.useCases.3.badge",
    badgeColor: "bg-primary/10 text-primary",
    titleKey: "featurePage.email.useCases.3.title",
    descKey: "featurePage.email.useCases.3.desc",
    emoji: "🤝",
  },
];

export function EmailUseCasesSection() {
  const { t } = useI18n();

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          {t("featurePage.email.useCases.title")}
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="flex flex-col h-full rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow"
            >
              {/* Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                <div className="text-6xl">{useCase.emoji}</div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col grow bg-white">
                <div className="mb-3">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${useCase.badgeColor}`}
                  >
                    {t(useCase.badgeKey)}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {t(useCase.titleKey)}
                </h3>
                <p className="text-gray-600 text-sm grow">
                  {t(useCase.descKey)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
