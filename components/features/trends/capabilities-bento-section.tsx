"use client";

import {
  TrendingUp,
  Zap,
  Activity,
  BarChart3,
  Lightbulb,
  CalendarDays,
  ArrowRight,
} from "lucide-react";
import { LocaleLink } from "@/components/locale-link";
import { useI18n } from "@/lib/i18n";

export function TrendsCapabilitiesBentoSection() {
  const { t } = useI18n();

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="mb-12 text-center md:text-left animate-fade-in">
          <span className="inline-block px-3 py-1 mb-4 text-xs font-bold uppercase tracking-widest text-[#22b5f8] bg-primary/10 rounded-full">
            {t("featurePage.trends.capabilities.badge")}
          </span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
            {t("featurePage.trends.capabilities.heading")}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl">
            {t("featurePage.trends.capabilities.bentoDesc")}
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 min-h-[800px]">
          {/* 1. Trend Detection (Large - 2x2) */}
          <div
            className="md:col-span-2 md:row-span-2 group relative overflow-hidden bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-2xl transition-all duration-300 animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="flex justify-between items-start mb-6">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-[#22b5f8]" />
              </div>
              <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full flex items-center gap-1.5">
                <span className="size-1.5 bg-green-500 rounded-full animate-pulse" />
                {t("featurePage.trends.capabilities.bento.badge1")}
              </span>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-[#1c1c1c]">
              {t("featurePage.trends.capabilities.trendDetection.title")}
            </h3>
            <p className="text-gray-600 mb-6 max-w-sm leading-relaxed">
              {t("featurePage.trends.capabilities.trendDetection.desc")}
            </p>

            {/* UI Preview - Trend Chart */}
            <div className="opacity-40 group-hover:opacity-100 transition-all duration-500 mt-4 rounded-lg bg-gray-50 p-4 border border-gray-200 h-40">
              <svg
                className="w-full h-full overflow-visible"
                viewBox="0 0 400 120"
                preserveAspectRatio="none"
              >
                {/* Grid Lines */}
                <line
                  x1="0"
                  y1="120"
                  x2="400"
                  y2="120"
                  stroke="#e5e7eb"
                  strokeWidth="1"
                />
                <line
                  x1="0"
                  y1="80"
                  x2="400"
                  y2="80"
                  stroke="#e5e7eb"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                />
                <line
                  x1="0"
                  y1="40"
                  x2="400"
                  y2="40"
                  stroke="#e5e7eb"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                />
                {/* Area under curve */}
                <path
                  d="M0,110 C50,105 100,100 150,70 C200,40 250,60 300,30 C350,0 380,10 400,5 L400,120 L0,120 Z"
                  fill="url(#trendGradient)"
                  opacity="0.3"
                />
                {/* Trend Line */}
                <path
                  d="M0,110 C50,105 100,100 150,70 C200,40 250,60 300,30 C350,0 380,10 400,5"
                  fill="none"
                  stroke="#22b5f8"
                  strokeWidth="3"
                  strokeLinecap="round"
                  className="animate-draw-line"
                />
                <defs>
                  <linearGradient
                    id="trendGradient"
                    x1="0%"
                    y1="0%"
                    x2="0%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#22b5f8" stopOpacity="1" />
                    <stop offset="100%" stopColor="#22b5f8" stopOpacity="0" />
                  </linearGradient>
                </defs>
                {/* Points */}
                <circle
                  cx="150"
                  cy="70"
                  r="4"
                  fill="#fff"
                  stroke="#22b5f8"
                  strokeWidth="2"
                />
                <circle
                  cx="300"
                  cy="30"
                  r="4"
                  fill="#fff"
                  stroke="#22b5f8"
                  strokeWidth="2"
                />
              </svg>
            </div>

            <div className="absolute bottom-8 left-8">
              <LocaleLink
                href="/#features"
                className="flex items-center gap-1 text-sm font-bold text-[#22b5f8] group-hover:underline"
              >
                {t("featurePage.trends.capabilities.learnMore")}
                <ArrowRight className="w-4 h-4" />
              </LocaleLink>
            </div>
          </div>

          {/* 2. Brief Optimizer (Small - 1x1) */}
          <div
            className="group bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="flex justify-between items-start mb-4">
              <Zap className="w-8 h-8 text-[#22b5f8]" />
              <span className="px-2 py-0.5 bg-purple-100 text-purple-700 text-[10px] font-bold rounded-full">
                {t("featurePage.trends.capabilities.bento.badge2")}
              </span>
            </div>
            <h3 className="text-lg font-bold mb-2 text-[#1c1c1c]">
              {t("featurePage.trends.capabilities.briefOptimizer.title")}
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              {t("featurePage.trends.capabilities.briefOptimizer.desc")}
            </p>
            <LocaleLink
              href="/#features"
              className="flex items-center gap-1 text-xs font-bold text-[#22b5f8]"
            >
              {t("featurePage.trends.capabilities.learnMore")}
              <ArrowRight className="w-3 h-3" />
            </LocaleLink>
          </div>

          {/* 3. Performance Prediction (Large Vertical - 1x2) */}
          <div
            className="md:row-span-2 group relative bg-primary text-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col animate-fade-in overflow-hidden"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="absolute -right-10 -bottom-10 size-40 bg-white/10 rounded-full blur-2xl" />
            <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-6">
              <BarChart3 className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3">
              {t("featurePage.trends.capabilities.performancePrediction.title")}
            </h3>
            <p className="text-sm text-white/70 mb-6">
              {t("featurePage.trends.capabilities.performancePrediction.desc")}
            </p>

            {/* Visual: Big Stat */}
            <div className="grow flex items-center justify-center py-4">
              <div className="text-center">
                <div className="text-6xl font-black tracking-tight mb-2">
                  92%
                </div>
                <div className="text-sm font-medium text-white/80">
                  {t("featurePage.trends.capabilities.performancePrediction.accuracy")}
                </div>
                <div className="w-32 mx-auto bg-white/20 h-1.5 rounded-full mt-3 overflow-hidden">
                  <div
                    className="bg-white h-full rounded-full animate-pulse"
                    style={{ width: "92%" }}
                  />
                </div>
              </div>
            </div>

            <div className="mt-auto relative z-10">
              <span className="block mb-4 text-xs font-bold text-white/80">
                {t("featurePage.trends.capabilities.bento.badge3")}
              </span>
              <LocaleLink
                href="/#features"
                className="flex items-center gap-1 text-sm font-bold text-white"
              >
                {t("featurePage.trends.capabilities.learnMore")}
                <ArrowRight className="w-4 h-4" />
              </LocaleLink>
            </div>
          </div>

          {/* 4. Real-Time Scoring (Small - 1x1) */}
          <div
            className="group bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="flex justify-between items-start mb-4">
              <Activity className="w-8 h-8 text-[#22b5f8]" />
              <span className="px-2 py-0.5 bg-orange-100 text-orange-700 text-[10px] font-bold rounded-full">
                {t("featurePage.trends.capabilities.bento.badge4")}
              </span>
            </div>
            <h3 className="text-lg font-bold mb-2 text-[#1c1c1c]">
              {t("featurePage.trends.capabilities.realTimeScoring.title")}
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              {t("featurePage.trends.capabilities.realTimeScoring.desc")}
            </p>
            <LocaleLink
              href="/#features"
              className="flex items-center gap-1 text-xs font-bold text-[#22b5f8]"
            >
              {t("featurePage.trends.capabilities.learnMore")}
              <ArrowRight className="w-3 h-3" />
            </LocaleLink>
          </div>

          {/* 5. AI Ideation Engine (Small - 1x1) */}
          <div
            className="group bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-in"
            style={{ animationDelay: "0.5s" }}
          >
            <div className="flex justify-between items-start mb-4">
              <Lightbulb className="w-8 h-8 text-[#22b5f8]" />
              <span className="px-2 py-0.5 bg-teal-100 text-teal-700 text-[10px] font-bold rounded-full">
                {t("featurePage.trends.capabilities.bento.badge5")}
              </span>
            </div>
            <h3 className="text-lg font-bold mb-2 text-[#1c1c1c]">
              {t("featurePage.trends.capabilities.ideationEngine.title")}
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              {t("featurePage.trends.capabilities.ideationEngine.desc")}
            </p>
            <LocaleLink
              href="/#features"
              className="flex items-center gap-1 text-xs font-bold text-[#22b5f8]"
            >
              {t("featurePage.trends.capabilities.learnMore")}
              <ArrowRight className="w-3 h-3" />
            </LocaleLink>
          </div>

          {/* 6. Campaign Blueprint (Small - 1x1) */}
          <div
            className="group bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            <div className="flex justify-between items-start mb-4">
              <CalendarDays className="w-8 h-8 text-[#22b5f8]" />
              <span className="px-2 py-0.5 bg-indigo-100 text-indigo-700 text-[10px] font-bold rounded-full">
                {t("featurePage.trends.capabilities.bento.badge6")}
              </span>
            </div>
            <h3 className="text-lg font-bold mb-2 text-[#1c1c1c]">
              {t("featurePage.trends.capabilities.campaignBlueprint.title")}
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              {t("featurePage.trends.capabilities.campaignBlueprint.desc")}
            </p>
            <LocaleLink
              href="/#features"
              className="flex items-center gap-1 text-xs font-bold text-[#22b5f8]"
            >
              {t("featurePage.trends.capabilities.learnMore")}
              <ArrowRight className="w-3 h-3" />
            </LocaleLink>
          </div>
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx global>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
          opacity: 0;
        }

        @keyframes draw-line {
          from {
            stroke-dasharray: 1000;
            stroke-dashoffset: 1000;
          }
          to {
            stroke-dasharray: 1000;
            stroke-dashoffset: 0;
          }
        }

        .animate-draw-line {
          animation: draw-line 2s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
