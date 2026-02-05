"use client";

import { Database, Palette, Rocket, ArrowRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export function ChatbotStepsSection() {
  const { t } = useI18n();

  const steps = [
    {
      number: "01",
      icon: Database,
      titleKey: "featurePage.chatbot.steps.step1.title",
      descKey: "featurePage.chatbot.steps.step1.desc",
      linkKey: "featurePage.chatbot.steps.step1.link",
      colorClass: "text-[#22b5f8]",
      glassClass: "glass-icon-blue",
      glowClass: "shadow-glow-blue",
      bgNumberHover: "group-hover:text-blue-50",
    },
    {
      number: "02",
      icon: Palette,
      titleKey: "featurePage.chatbot.steps.step2.title",
      descKey: "featurePage.chatbot.steps.step2.desc",
      linkKey: "featurePage.chatbot.steps.step2.link",
      colorClass: "text-[#ff7900]",
      glassClass: "glass-icon-orange",
      glowClass: "shadow-glow-orange",
      bgNumberHover: "group-hover:text-orange-50",
    },
    {
      number: "03",
      icon: Rocket,
      titleKey: "featurePage.chatbot.steps.step3.title",
      descKey: "featurePage.chatbot.steps.step3.desc",
      linkKey: "featurePage.chatbot.steps.step3.link",
      colorClass: "text-[#10b981]",
      glassClass: "glass-icon-green",
      glowClass: "shadow-glow-green",
      bgNumberHover: "group-hover:text-emerald-50",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#f8fafc] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 bg-pattern opacity-40 pointer-events-none"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-150 bg-linear-to-b from-blue-50/50 via-transparent to-transparent pointer-events-none z-0"></div>

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24 px-4">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-6">
            {t("featurePage.chatbot.steps.heading")}{" "}
            <span className="bg-clip-text text-transparent bg-linear-to-r from-blue-500 to-indigo-600">
              {t("featurePage.chatbot.steps.headingHighlight")}
            </span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-8 leading-relaxed">
            {t("featurePage.chatbot.steps.subheading")}
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
            </span>
            <span className="text-sm font-medium text-blue-700">
              {t("featurePage.chatbot.steps.badge")}
            </span>
          </div>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative px-4">
          {/* Animated Dashed Connecting Lines */}
          <div className="hidden md:block absolute top-24 left-0 w-full h-24 z-0 pointer-events-none">
            <svg className="w-full h-full" preserveAspectRatio="none">
              <path
                className="text-slate-200 animate-dash"
                d="M 25% 40 Q 33% 40 40% 40 T 50% 40"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                className="text-slate-200 animate-dash"
                d="M 58% 40 Q 66% 40 75% 40 T 83% 40"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          </div>

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 shadow-soft border border-slate-100 hover:-translate-y-2 transition-transform duration-300 z-10 flex flex-col h-full"
              >
                {/* Large Background Number */}
                <div
                  className={`absolute -top-6 -right-6 text-[120px] font-bold text-slate-100 leading-none select-none -z-10 ${step.bgNumberHover} transition-colors duration-300`}
                >
                  {step.number}
                </div>

                {/* Glass Icon */}
                <div
                  className={`w-16 h-16 rounded-2xl ${step.glassClass} flex items-center justify-center mb-6 ${step.colorClass} group-hover:scale-110 transition-transform duration-300 ${step.glowClass}`}
                >
                  <Icon className="w-9 h-9" />
                </div>

                {/* Title with Dot */}
                <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  {t(step.titleKey)}
                  <div
                    className={`w-2 h-2 rounded-full ${step.colorClass.replace("text-", "bg-")} mt-1`}
                  ></div>
                </h3>

                {/* Description */}
                <p className="text-slate-600 leading-relaxed flex-grow">
                  {t(step.descKey)}
                </p>

                {/* Link */}
                <div
                  className={`mt-8 pt-6 border-t border-slate-100 flex items-center text-sm font-medium ${step.colorClass} cursor-pointer group-hover:gap-2 transition-all`}
                >
                  {t(step.linkKey)}
                  <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Styles */}
      <style jsx global>{`
        .bg-pattern {
          background-image: radial-gradient(#cbd5e1 1px, transparent 1px);
          background-size: 32px 32px;
        }
        .glass-icon-blue {
          background: linear-gradient(
            135deg,
            rgba(34, 181, 248, 0.2),
            rgba(34, 181, 248, 0.05)
          );
          border: 1px solid rgba(34, 181, 248, 0.2);
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.07);
        }
        .glass-icon-orange {
          background: linear-gradient(
            135deg,
            rgba(255, 121, 0, 0.2),
            rgba(255, 121, 0, 0.05)
          );
          border: 1px solid rgba(255, 121, 0, 0.2);
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.07);
        }
        .glass-icon-green {
          background: linear-gradient(
            135deg,
            rgba(16, 185, 129, 0.2),
            rgba(16, 185, 129, 0.05)
          );
          border: 1px solid rgba(16, 185, 129, 0.2);
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.07);
        }
        .shadow-soft {
          box-shadow: 0 10px 40px -10px rgba(0, 0, 0, 0.08);
        }
        .shadow-glow-blue {
          box-shadow: 0 0 20px rgba(34, 181, 248, 0.3);
        }
        .shadow-glow-orange {
          box-shadow: 0 0 20px rgba(255, 121, 0, 0.3);
        }
        .shadow-glow-green {
          box-shadow: 0 0 20px rgba(16, 185, 129, 0.3);
        }
        @keyframes dash {
          to {
            stroke-dashoffset: -20;
          }
        }
        .animate-dash {
          stroke-dasharray: 6 6;
          animation: dash 1s linear infinite;
        }
      `}</style>
    </section>
  );
}
