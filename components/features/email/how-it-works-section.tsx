"use client";

import { useI18n } from "@/lib/i18n";

const steps = [
  {
    number: 1,
    titleKey: "featurePage.email.howItWorks.step1.title",
    descKey: "featurePage.email.howItWorks.step1.desc",
  },
  {
    number: 2,
    titleKey: "featurePage.email.howItWorks.step2.title",
    descKey: "featurePage.email.howItWorks.step2.desc",
  },
  {
    number: 3,
    titleKey: "featurePage.email.howItWorks.step3.title",
    descKey: "featurePage.email.howItWorks.step3.desc",
  },
  {
    number: 4,
    titleKey: "featurePage.email.howItWorks.step4.title",
    descKey: "featurePage.email.howItWorks.step4.desc",
  },
];

export function EmailHowItWorksSection() {
  const { t } = useI18n();

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Steps */}
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              {t("featurePage.email.howItWorks.title")}
            </h2>
            <div className="space-y-8">
              {steps.map((step) => (
                <div key={step.number} className="flex gap-4">
                  <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary font-bold">
                    {step.number}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      {t(step.titleKey)}
                    </h4>
                    <p className="text-gray-600">{t(step.descKey)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Image */}
          <div className="order-1 lg:order-2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-gray-50">
              <div className="aspect-[4/3] bg-gradient-to-br from-primary/5 to-secondary/5 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">📊</div>
                  <p className="text-gray-600 font-medium">
                    {t("featurePage.email.howItWorks.imageAlt")}
                  </p>
                </div>
              </div>
              {/* Floating Badge */}
              <div
                className="absolute bottom-6 right-6 bg-white p-4 rounded-lg shadow-lg border border-gray-100 max-w-xs"
                style={{ animation: "bounce 3s infinite" }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <p className="text-xs font-bold text-gray-900">
                    {t("featurePage.email.howItWorks.badge.title")}
                  </p>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  {t("featurePage.email.howItWorks.badge.subtitle")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
