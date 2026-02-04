"use client";

import { useI18n } from "@/lib/i18n";
import { Cable, LineChart, SlidersHorizontal, Bot, Rocket } from "lucide-react";

export function AdsHowItWorksSection() {
  const { t } = useI18n();

  const steps = [
    {
      icon: Cable,
      titleKey: "featurePage.ads.howItWorks.step1.title",
      descKey: "featurePage.ads.howItWorks.step1.desc",
      active: true,
    },
    {
      icon: LineChart,
      titleKey: "featurePage.ads.howItWorks.step2.title",
      descKey: "featurePage.ads.howItWorks.step2.desc",
      active: false,
    },
    {
      icon: SlidersHorizontal,
      titleKey: "featurePage.ads.howItWorks.step3.title",
      descKey: "featurePage.ads.howItWorks.step3.desc",
      active: false,
    },
    {
      icon: Bot,
      titleKey: "featurePage.ads.howItWorks.step4.title",
      descKey: "featurePage.ads.howItWorks.step4.desc",
      active: false,
    },
    {
      icon: Rocket,
      titleKey: "featurePage.ads.howItWorks.step5.title",
      descKey: "featurePage.ads.howItWorks.step5.desc",
      active: false,
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-transparent">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#0d0d1c] dark:text-white">
            {t("featurePage.ads.howItWorks.title")}
          </h2>
          <p className="text-gray-500 mt-2">
            {t("featurePage.ads.howItWorks.subtitle")}
          </p>
        </div>
        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-100 dark:bg-white/5 -translate-y-1/2 z-0"></div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col items-center text-center group"
                >
                  <div
                    className={`w-16 h-16 rounded-full ${
                      step.active
                        ? "bg-white dark:bg-[#1a192e] border-2 border-primary text-primary"
                        : "bg-white dark:bg-[#1a192e] border-2 border-gray-200 dark:border-gray-700 text-gray-400"
                    } flex items-center justify-center text-2xl font-bold shadow-lg mb-4 group-hover:scale-110 transition-transform ${
                      !step.active &&
                      "group-hover:border-primary group-hover:text-primary"
                    }`}
                  >
                    <Icon className="w-7 h-7" />
                  </div>
                  <h4 className="font-bold text-[#0d0d1c] dark:text-white">
                    {t(step.titleKey)}
                  </h4>
                  <p className="text-sm text-gray-500 mt-2">
                    {t(step.descKey)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
