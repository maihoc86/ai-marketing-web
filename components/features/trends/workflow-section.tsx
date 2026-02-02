"use client";

import {
  Globe,
  BarChart3,
  Filter,
  Map,
  PenTool,
  RefreshCw,
} from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { useInView } from "@/hooks/use-in-view";

const steps = [
  {
    icon: Globe,
    titleKey: "featurePage.trends.workflow.step1.title",
    descKey: "featurePage.trends.workflow.step1.desc",
    stepNum: "01",
  },
  {
    icon: BarChart3,
    titleKey: "featurePage.trends.workflow.step2.title",
    descKey: "featurePage.trends.workflow.step2.desc",
    stepNum: "02",
  },
  {
    icon: Filter,
    titleKey: "featurePage.trends.workflow.step3.title",
    descKey: "featurePage.trends.workflow.step3.desc",
    stepNum: "03",
  },
  {
    icon: Map,
    titleKey: "featurePage.trends.workflow.step4.title",
    descKey: "featurePage.trends.workflow.step4.desc",
    stepNum: "04",
  },
  {
    icon: PenTool,
    titleKey: "featurePage.trends.workflow.step5.title",
    descKey: "featurePage.trends.workflow.step5.desc",
    stepNum: "05",
  },
  {
    icon: RefreshCw,
    titleKey: "featurePage.trends.workflow.step6.title",
    descKey: "featurePage.trends.workflow.step6.desc",
    stepNum: "06",
  },
];

export function TrendsWorkflowSection() {
  const { t } = useI18n();
  const { ref, isInView } = useInView();

  return (
    <section className="py-20 bg-gray-50 border-t border-gray-100">
      <div ref={ref} className="container mx-auto px-4">
        {/* Section Header */}
        <div
          className={`mb-16 text-center transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t("featurePage.trends.workflow.title")}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            {t("featurePage.trends.workflow.subtitle")}
          </p>
        </div>

        {/* Desktop Process Timeline */}
        <div className="hidden lg:block relative">
          {/* Connecting Line Base */}
          <div className="absolute top-8 left-0 right-0 h-0.5 bg-gray-200 z-0" />
          {/* Connecting Line Active */}

          <div className="grid grid-cols-6 gap-4 relative z-10">
            {steps.map((step, idx) => {
              const StepIcon = step.icon;

              return (
                <div
                  key={idx}
                  className={`flex flex-col items-center text-center group transition-all duration-700 ${
                    isInView
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${0.1 * idx}s` }}
                >
                  <div className="size-16 rounded-full flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 transition-all duration-300 bg-white border-2 border-gray-200 text-gray-500 group-hover:border-primary group-hover:text-primary">
                    <StepIcon className="w-6 h-6" />
                  </div>
                  <div className="flex flex-col gap-2 px-2">
                    <span className="text-xs group-hover:text-primary font-bold uppercase tracking-wider transition-colors">
                      {t("featurePage.trends.workflow.stepLabel", {
                        num: step.stepNum,
                      })}
                    </span>
                    <h3 className="text-gray-900 font-bold text-base group-hover:text-primary">
                      {t(step.titleKey)}
                    </h3>
                    <p className="text-gray-500 text-sm leading-snug">
                      {t(step.descKey)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Process Timeline (Vertical) */}
        <div className="lg:hidden flex flex-col relative space-y-10">
          {steps.map((step, idx) => {
            const StepIcon = step.icon;

            return (
              <div
                key={idx}
                className={`relative z-10 flex space-x-4 transition-all duration-700 ${
                  isInView
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-4"
                }`}
                style={{ transitionDelay: `${0.1 * idx}s` }}
              >
                <div className="bg-white relative  border border-gray-200 text-gray-500 top-0 size-10 rounded-full flex items-center justify-center shadow-md">
                  <StepIcon className="size-5" />
                </div>
                <div>
                  <h3 className="text-gray-900 font-bold text-lg mb-1">
                    {t(step.titleKey)}
                  </h3>
                  <p className="text-gray-500 text-sm">{t(step.descKey)}</p>
                </div>
              </div>
            );
          })}
          <div className="w-px bg-gray-200 absolute top-0 left-5 h-[86%]" />
        </div>
      </div>
    </section>
  );
}
