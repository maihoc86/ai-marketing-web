"use client";

import {
  PenLine,
  Sparkles,
  SlidersHorizontal,
  Upload,
  ArrowRight,
} from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { useInView } from "@/hooks/use-in-view";
import { LocaleLink } from "@/components/locale-link";

const steps = [
  {
    icon: PenLine,
    titleKey: "featurePage.video.workflow.step1.title",
    descKey: "featurePage.video.workflow.step1.desc",
    stepNum: "1",
  },
  {
    icon: Sparkles,
    titleKey: "featurePage.video.workflow.step2.title",
    descKey: "featurePage.video.workflow.step2.desc",
    stepNum: "2",
  },
  {
    icon: SlidersHorizontal,
    titleKey: "featurePage.video.workflow.step3.title",
    descKey: "featurePage.video.workflow.step3.desc",
    stepNum: "3",
  },
  {
    icon: Upload,
    titleKey: "featurePage.video.workflow.step4.title",
    descKey: "featurePage.video.workflow.step4.desc",
    stepNum: "4",
  },
];

export function VideoWorkflowSection() {
  const { t } = useI18n();
  const { ref, isInView } = useInView();

  return (
    <section className="py-20 bg-white border-t border-gray-100">
      <div ref={ref} className="container mx-auto px-4">
        {/* Section Header */}
        <div
          className={`mb-16 text-center transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t("featurePage.video.workflow.title")}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            {t("featurePage.video.workflow.subtitle")}
          </p>
        </div>

        {/* Desktop Process Timeline */}
        <div className="hidden lg:block relative">
          {/* Connecting Line Base */}
          <div className="absolute top-12 left-[15%] right-[15%] h-0.5 bg-gray-200 z-0" />
          {/* Connecting Line Gradient */}
          <div className="absolute top-12 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-primary via-[#22b5f8] to-primary opacity-30 z-0" />

          <div className="grid grid-cols-4 gap-8 relative z-10">
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
                  style={{ transitionDelay: `${0.15 * idx}s` }}
                >
                  {/* Step Number Badge */}
                  <div className="relative mb-4">
                    <div className="size-24 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 bg-white border-2 border-gray-200 text-gray-500 group-hover:border-primary group-hover:text-primary">
                      <StepIcon className="w-10 h-10" />
                    </div>
                    <span className="absolute -top-2 -right-2 size-8 rounded-full bg-primary text-white text-sm font-bold flex items-center justify-center shadow-md">
                      {step.stepNum}
                    </span>
                  </div>

                  <div className="flex flex-col gap-2 px-2 mt-2">
                    <h3 className="text-gray-900 font-bold text-lg group-hover:text-primary transition-colors">
                      {t(step.titleKey)}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {t(step.descKey)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Process Timeline (Vertical) */}
        <div className="lg:hidden flex flex-col relative space-y-8">
          {/* Vertical Line */}
          <div className="absolute top-0 left-5 w-0.5 h-[calc(100%-40px)] bg-gradient-to-b from-primary via-[#22b5f8] to-primary opacity-30" />

          {steps.map((step, idx) => {
            const StepIcon = step.icon;

            return (
              <div
                key={idx}
                className={`relative z-10 flex gap-6 transition-all duration-700 ${
                  isInView
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-4"
                }`}
                style={{ transitionDelay: `${0.1 * idx}s` }}
              >
                <div className="relative flex-shrink-0">
                  <div className="bg-white border-2 border-gray-200 text-gray-500 size-12 rounded-xl flex items-center justify-center shadow-md">
                    <StepIcon className="size-6" />
                  </div>
                  <span className="absolute -top-1 -right-1 size-5 rounded-full bg-primary text-white text-[10px] font-bold flex items-center justify-center">
                    {step.stepNum}
                  </span>
                </div>
                <div className="pt-1">
                  <h3 className="text-gray-900 font-bold text-lg mb-1">
                    {t(step.titleKey)}
                  </h3>
                  <p className="text-gray-500 text-sm">{t(step.descKey)}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div
          className={`mt-16 text-center transition-all duration-700 delay-500 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <LocaleLink
            href="/#features"
            className="inline-flex items-center gap-2 text-primary font-bold hover:underline border-b-2 border-primary/30 hover:border-primary pb-0.5 transition-all"
          >
            <span>{t("featurePage.video.workflow.learnMore")}</span>
            <ArrowRight className="w-4 h-4" />
          </LocaleLink>
        </div>
      </div>
    </section>
  );
}
