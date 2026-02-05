"use client";

import { useState } from "react";
import {
  ShoppingCart,
  Building2,
  GraduationCap,
  Heart,
  ArrowDown,
  ArrowRight,
} from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { LocaleLink } from "@/components/locale-link";

export function ChatbotIndustriesSection() {
  const { t } = useI18n();
  const [activeTab, setActiveTab] = useState(0);

  const industries = [
    {
      id: "ecommerce",
      name: t("featurePage.chatbot.industries.ecommerce.name"),
      icon: ShoppingCart,
    },
    {
      id: "realestate",
      name: t("featurePage.chatbot.industries.realestate.name"),
      icon: Building2,
    },
    {
      id: "education",
      name: t("featurePage.chatbot.industries.education.name"),
      icon: GraduationCap,
    },
    {
      id: "healthcare",
      name: t("featurePage.chatbot.industries.healthcare.name"),
      icon: Heart,
    },
  ];

  const industryContent = {
    ecommerce: {
      query: t("featurePage.chatbot.industries.ecommerce.query"),
      response: t("featurePage.chatbot.industries.ecommerce.response"),
      stats: [
        {
          value: "85%",
          label: t("featurePage.chatbot.industries.ecommerce.stat1"),
        },
        {
          value: "3.2x",
          label: t("featurePage.chatbot.industries.ecommerce.stat2"),
        },
      ],
    },
    realestate: {
      query: t("featurePage.chatbot.industries.realestate.query"),
      response: t("featurePage.chatbot.industries.realestate.response"),
      stats: [
        {
          value: "92%",
          label: t("featurePage.chatbot.industries.realestate.stat1"),
        },
        {
          value: "4.1x",
          label: t("featurePage.chatbot.industries.realestate.stat2"),
        },
      ],
    },
    education: {
      query: t("featurePage.chatbot.industries.education.query"),
      response: t("featurePage.chatbot.industries.education.response"),
      stats: [
        {
          value: "78%",
          label: t("featurePage.chatbot.industries.education.stat1"),
        },
        {
          value: "2.8x",
          label: t("featurePage.chatbot.industries.education.stat2"),
        },
      ],
    },
    healthcare: {
      query: t("featurePage.chatbot.industries.healthcare.query"),
      response: t("featurePage.chatbot.industries.healthcare.response"),
      stats: [
        {
          value: "94%",
          label: t("featurePage.chatbot.industries.healthcare.stat1"),
        },
        {
          value: "5.2x",
          label: t("featurePage.chatbot.industries.healthcare.stat2"),
        },
      ],
    },
  };

  const currentIndustry = industries[activeTab];
  const currentContent =
    industryContent[currentIndustry.id as keyof typeof industryContent];

  return (
    <section className="bg-slate-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            <span className="gradient-underline">
              {t("featurePage.chatbot.industries.heading")}
            </span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg font-light">
            {t("featurePage.chatbot.industries.description")}
          </p>
        </div>

        {/* Industry Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            const isActive = activeTab === index;

            return (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`group relative px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                  isActive
                    ? "bg-primary text-white shadow-glow transform -translate-y-1"
                    : "bg-white border border-gray-200 text-slate-600 hover:text-primary hover:border-primary/30 shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{industry.name}</span>
              </button>
            );
          })}
        </div>

        {/* Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Left: Glass Panel - Use Case */}
          <div
            className="glass-panel rounded-3xl p-8 lg:p-10 shadow-glass flex flex-col h-full relative overflow-hidden group"
            key={currentIndustry.id}
          >
            {/* Background Glow */}
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors duration-500" />

            <div className="relative z-10 mb-8">
              <h3 className="text-sm font-bold tracking-widest text-primary uppercase mb-1">
                {t("featurePage.chatbot.industries.commonQuery")}
              </h3>
              <p className="text-2xl font-semibold text-slate-900">
                {t("featurePage.chatbot.industries.heading")}
              </p>
            </div>

            <div className="flex-grow space-y-6">
              {/* Query Bubble */}
              <div className="bg-white border border-gray-100 p-5 rounded-2xl rounded-tl-none shadow-sm max-w-md animate-fade-in-up">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded uppercase">
                    {t("featurePage.chatbot.industries.commonQuery")}
                  </span>
                </div>
                <p className="text-lg font-medium italic text-slate-900">
                  &quot;{currentContent.query}&quot;
                </p>
              </div>

              {/* Arrow Indicator */}
              <div className="pl-8 text-gray-300">
                <ArrowDown className="w-5 h-5" />
              </div>

              {/* Response Bubble */}
              <div className="bg-blue-50 border border-blue-100 p-5 rounded-2xl rounded-br-none shadow-sm ml-auto max-w-md">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold text-green-600 bg-green-100 px-2 py-0.5 rounded uppercase">
                    {t("featurePage.chatbot.industries.aiResponse")}
                  </span>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  {currentContent.response}
                  <span className="typing-cursor text-primary" />
                </p>
              </div>
            </div>
          </div>

          {/* Right: Stats Panel */}
          <div
            className="bg-blue-50/50 border border-blue-100 rounded-3xl p-8 lg:p-10 shadow-glass flex flex-col h-full relative"
            key={`${currentIndustry.id}-stats`}
          >
            <div className="absolute inset-0 border border-primary/20 rounded-3xl pointer-events-none" />

            <div className="mb-10">
              <h3 className="text-3xl font-bold text-slate-900 mb-8">
                {t("featurePage.chatbot.industries.readyBoost")}
              </h3>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-8">
                {currentContent.stats.map((stat, idx) => (
                  <div
                    key={idx}
                    className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100 transition-transform hover:scale-105 duration-300"
                    style={{ transitionDelay: idx === 1 ? "75ms" : "0ms" }}
                  >
                    <div className="text-5xl font-black text-primary mb-2">
                      {stat.value}
                    </div>
                    <div className="text-xs font-bold tracking-widest text-slate-600 uppercase">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-auto">
              <p className="text-slate-600 mb-8 text-lg leading-relaxed">
                {t("featurePage.chatbot.industries.description")}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <LocaleLink href="/register" className="flex-1">
                  <button className="w-full bg-primary hover:bg-sky-400 text-white font-semibold py-3.5 px-8 rounded-full shadow-lg shadow-blue-500/30 transition-all duration-300 active:scale-95 flex items-center justify-center gap-2">
                    {t("featurePage.chatbot.industries.cta.start")}
                  </button>
                </LocaleLink>
                <LocaleLink href="/#features" className="flex-1">
                  <button className="w-full group bg-transparent hover:bg-white text-slate-900 font-medium py-3.5 px-8 rounded-full border border-gray-200 hover:border-transparent hover:shadow-md transition-all duration-300 flex items-center justify-center gap-2">
                    {t("featurePage.chatbot.industries.cta.view")}
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </LocaleLink>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Global Styles */}
      <style jsx global>{`
        .gradient-underline {
          position: relative;
          display: inline-block;
        }
        .gradient-underline::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -4px;
          width: 100%;
          height: 4px;
          background: linear-gradient(90deg, #22b5f8 0%, #a855f7 100%);
          border-radius: 2px;
          opacity: 0.7;
        }

        .typing-cursor::after {
          content: "|";
          animation: blink 1s infinite;
        }

        @keyframes blink {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
        }

        .glass-panel {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.3);
        }

        .shadow-glow {
          box-shadow: 0 0 20px -5px rgba(34, 181, 248, 0.4);
        }

        .shadow-glass {
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.07);
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
