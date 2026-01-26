"use client";

import { useState, useEffect, useRef } from "react";
import {
  Search,
  Lightbulb,
  Puzzle,
  SlidersHorizontal,
  ClipboardCheck,
  Rocket,
} from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

// ============================================================
// TYPES
// ============================================================
interface Step {
  number: string;
  icon: React.ElementType;
  titleKey: string;
  descKey: string;
  color: string;
  bgColor: string;
  lightBg: string;
  borderColor: string;
}

// ============================================================
// DATA
// ============================================================
const steps: Step[] = [
  {
    number: "01",
    icon: Search,
    titleKey: "about.workflow.step1.title",
    descKey: "about.workflow.step1.desc",
    color: "text-[#22b5f8]",
    bgColor: "bg-[#22b5f8]",
    lightBg: "bg-[#22b5f8]/5",
    borderColor: "border-[#22b5f8]/30",
  },
  {
    number: "02",
    icon: Lightbulb,
    titleKey: "about.workflow.step2.title",
    descKey: "about.workflow.step2.desc",
    color: "text-amber-600",
    bgColor: "bg-amber-600",
    lightBg: "bg-amber-50",
    borderColor: "border-amber-200",
  },
  {
    number: "03",
    icon: Puzzle,
    titleKey: "about.workflow.step3.title",
    descKey: "about.workflow.step3.desc",
    color: "text-purple-600",
    bgColor: "bg-purple-600",
    lightBg: "bg-purple-50",
    borderColor: "border-purple-200",
  },
  {
    number: "04",
    icon: SlidersHorizontal,
    titleKey: "about.workflow.step4.title",
    descKey: "about.workflow.step4.desc",
    color: "text-emerald-600",
    bgColor: "bg-emerald-600",
    lightBg: "bg-emerald-50",
    borderColor: "border-emerald-200",
  },
  {
    number: "05",
    icon: ClipboardCheck,
    titleKey: "about.workflow.step5.title",
    descKey: "about.workflow.step5.desc",
    color: "text-rose-600",
    bgColor: "bg-rose-600",
    lightBg: "bg-rose-50",
    borderColor: "border-rose-200",
  },
  {
    number: "06",
    icon: Rocket,
    titleKey: "about.workflow.step6.title",
    descKey: "about.workflow.step6.desc",
    color: "text-indigo-600",
    bgColor: "bg-indigo-600",
    lightBg: "bg-indigo-50",
    borderColor: "border-indigo-200",
  },
];

// ============================================================
// STEP NUMBER COMPONENT
// ============================================================
function StepNumber({
  number,
  bgColor,
  isVisible,
  index,
}: {
  number: string;
  bgColor: string;
  isVisible: boolean;
  index: number;
}) {
  return (
    <div
      className={cn(
        "relative z-10 w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-500",
        bgColor,
        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75",
      )}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <span className="text-lg font-black text-white">{number}</span>
    </div>
  );
}

// ============================================================
// STEP CARD COMPONENT
// ============================================================
function StepCard({ step, index }: { step: Step; index: number }) {
  const { t } = useI18n();
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const Icon = step.icon;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), index * 100);
        }
      },
      { threshold: 0.1 },
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [index]);

  return (
    <div
      ref={cardRef}
      className={cn(
        "group relative bg-white border-2 rounded-2xl p-6 transition-all duration-500",
        "hover:shadow-xl hover:-translate-y-2",
        step.borderColor,
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
      )}
      style={{ transitionDelay: `${index * 100 + 150}ms` }}
    >
      {/* Icon */}
      <div
        className={cn(
          "w-12 h-12 rounded-xl flex items-center justify-center mb-4",
          "group-hover:scale-110 transition-transform duration-300",
          step.lightBg,
        )}
      >
        <Icon className={cn("w-6 h-6", step.color)} />
      </div>

      {/* Content */}
      <h3 className="text-lg font-bold text-gray-900 mb-2">
        {t(step.titleKey)}
      </h3>
      <p className="text-sm text-gray-600 leading-relaxed">{t(step.descKey)}</p>

      {/* Bottom accent line */}
      <div
        className={cn(
          "absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl",
          "transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300",
          step.bgColor,
        )}
      />
    </div>
  );
}

// ============================================================
// MAIN COMPONENT
// ============================================================
export function WorkflowTimeline() {
  const { t } = useI18n();
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const [isTimelineVisible, setIsTimelineVisible] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const headerObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsHeaderVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    const timelineObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsTimelineVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (headerRef.current) {
      headerObserver.observe(headerRef.current);
    }
    if (timelineRef.current) {
      timelineObserver.observe(timelineRef.current);
    }

    return () => {
      headerObserver.disconnect();
      timelineObserver.disconnect();
    };
  }, []);

  return (
    <section className="py-20 md:py-28 bg-linear-to-b from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={cn(
            "text-center mb-16 max-w-3xl mx-auto transition-all duration-700",
            isHeaderVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8",
          )}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#22b5f8]/5 border border-[#22b5f8]/30 rounded-full mb-6">
            <div className="w-2 h-2 bg-[#22b5f8] rounded-full animate-pulse" />
            <span className="text-sm font-bold text-[#22b5f8] uppercase tracking-wider">
              {t("about.workflow.badge")}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-6">
            {t("about.workflow.title")}
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            {t("about.workflow.subtitle")}
          </p>
        </div>

        {/* Horizontal Timeline - Desktop */}
        <div ref={timelineRef} className="hidden lg:block relative mb-12">
          {/* Timeline Line with Dashes */}
          <div className="absolute top-7 left-[8%] right-[8%] h-0.5 flex items-center justify-between">
            <div
              className={cn(
                "absolute inset-0 border-t-2 border-dashed border-gray-300 transition-all duration-1000",
                isTimelineVisible ? "opacity-100" : "opacity-0",
              )}
            />
          </div>

          {/* Step Numbers Row */}
          <div className="flex justify-between items-center px-[4%] mb-8">
            {steps.map((step, index) => (
              <div key={step.number} className="flex flex-col items-center">
                <StepNumber
                  number={step.number}
                  bgColor={step.bgColor}
                  isVisible={isTimelineVisible}
                  index={index}
                />
              </div>
            ))}
          </div>

          {/* Cards Row */}
          <div className="grid grid-cols-6 gap-4">
            {steps.map((step, index) => (
              <StepCard key={step.number} step={step} index={index} />
            ))}
          </div>
        </div>

        {/* Mobile/Tablet Grid Layout */}
        <div className="lg:hidden grid sm:grid-cols-2 gap-6">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Step Number Badge for Mobile */}
              <div
                className={cn(
                  "absolute -top-3 -left-3 z-10 w-10 h-10 rounded-full flex items-center justify-center shadow-md",
                  step.bgColor,
                )}
              >
                <span className="text-sm font-black text-white">
                  {step.number}
                </span>
              </div>
              <StepCard step={step} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
