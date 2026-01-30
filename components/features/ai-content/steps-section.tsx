"use client";

import { FileText, Sparkles, Upload } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { useInView } from "@/hooks/use-in-view";

export function AIContentStepsSection() {
  const { t } = useI18n();
  const { ref, isInView } = useInView();

  const steps = [
    {
      icon: FileText,
      titleKey: "featurePage.content.steps.step1.title",
      descKey: "featurePage.content.steps.step1.description",
      gradientId: "gradient1",
      delay: 0.15,
    },
    {
      icon: Sparkles,
      titleKey: "featurePage.content.steps.step2.title",
      descKey: "featurePage.content.steps.step2.description",
      gradientId: "gradient2",
      delay: 0.3,
    },
    {
      icon: Upload,
      titleKey: "featurePage.content.steps.step3.title",
      descKey: "featurePage.content.steps.step3.description",
      gradientId: "gradient3",
      delay: 0.45,
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div ref={ref} className="container mx-auto px-6">
        {/* Section Header */}
        <div
          className={`text-center mb-20 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl font-black tracking-tight mb-4">
            {t("featurePage.content.steps.title")}
          </h2>
          <p className="text-lg text-gray-600">
            {t("featurePage.content.steps.subtitle")}
          </p>
        </div>

        {/* Steps Grid with Connecting Line */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Connecting Line (hidden on mobile) */}
          <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-gray-200 -z-10"></div>

          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.titleKey}
                className={`p-8 shadow-lg rounded-2xl border border-gray-50 hover:bg-gray-50 transition-all duration-500 group ${
                  isInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${step.delay}s` }}
              >
                <div className="size-24 rounded-full bg-white border-4 border-gray-50 shadow-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10">
                  <Icon
                    className="size-10"
                    style={{
                      fill: `url(#${step.gradientId})`,
                      color: "transparent",
                    }}
                  />
                  <svg width="0" height="0">
                    <defs>
                      <linearGradient
                        id={step.gradientId}
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop offset="0%" stopColor="#22b5f8" />
                        <stop offset="100%" stopColor="#008bff" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    {`${idx + 1}. `}
                    {t(step.titleKey)}
                  </h3>
                  <p className="text-gray-500">{t(step.descKey)}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
