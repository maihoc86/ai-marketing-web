"use client";

import { useI18n } from "@/lib/i18n";
import { Link2, Settings, CalendarClock, Send, BarChart3 } from "lucide-react";

export function MultiPlatformHowItWorksSection() {
  const { t } = useI18n();

  const steps = [
    {
      icon: Link2,
      numberKey: "featurePage.multiPlatform.howItWorks.step1.number",
      titleKey: "featurePage.multiPlatform.howItWorks.step1.title",
      descKey: "featurePage.multiPlatform.howItWorks.step1.desc",
      color: "primary",
    },
    {
      icon: Settings,
      numberKey: "featurePage.multiPlatform.howItWorks.step2.number",
      titleKey: "featurePage.multiPlatform.howItWorks.step2.title",
      descKey: "featurePage.multiPlatform.howItWorks.step2.desc",
      color: "primary",
    },
    {
      icon: CalendarClock,
      numberKey: "featurePage.multiPlatform.howItWorks.step3.number",
      titleKey: "featurePage.multiPlatform.howItWorks.step3.title",
      descKey: "featurePage.multiPlatform.howItWorks.step3.desc",
      color: "primary",
    },
    {
      icon: Send,
      numberKey: "featurePage.multiPlatform.howItWorks.step4.number",
      titleKey: "featurePage.multiPlatform.howItWorks.step4.title",
      descKey: "featurePage.multiPlatform.howItWorks.step4.desc",
      color: "primary",
    },
    {
      icon: BarChart3,
      numberKey: "featurePage.multiPlatform.howItWorks.step5.number",
      titleKey: "featurePage.multiPlatform.howItWorks.step5.title",
      descKey: "featurePage.multiPlatform.howItWorks.step5.desc",
      color: "secondary",
    },
  ];

  return (
    <section className="py-20 bg-gray-50 border-y border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#0d171c]">
            {t("featurePage.multiPlatform.howItWorks.title")}
          </h2>
        </div>
        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-gray-200 -z-10"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isLast = index === steps.length - 1;
              const borderColor = isLast
                ? "border-secondary/20"
                : "border-primary/20";
              const iconColor = isLast ? "text-secondary" : "text-primary";
              const titleColor = isLast ? "text-secondary" : "text-[#0d171c]";

              return (
                <div
                  key={index}
                  className="flex flex-col items-center text-center"
                >
                  <div
                    className={`size-24 rounded-full bg-white border-4 ${borderColor} flex items-center justify-center shadow-sm mb-4 z-10`}
                  >
                    <Icon className={`h-8 w-8 ${iconColor}`} />
                  </div>
                  <h3 className={`text-lg font-bold mb-2 ${titleColor}`}>
                    {t(step.titleKey)}
                  </h3>
                  <p className="text-sm text-gray-500">{t(step.descKey)}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
