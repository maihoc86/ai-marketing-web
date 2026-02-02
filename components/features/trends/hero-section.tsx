"use client";

import {
  ChevronRight,
  Sparkles,
  TrendingUp,
  Zap,
  Target,
  ArrowUpRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { LocaleLink } from "@/components/locale-link";
import { useI18n } from "@/lib/i18n";

export function TrendsHeroSection() {
  const { t } = useI18n();

  return (
    <section className="pt-24 pb-16 md:pt-28 md:pb-24 relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center animate-fade-in">
          {/* Left Content */}
          <div>
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm font-medium text-gray-500 mb-6">
              <LocaleLink
                href="/#features"
                className="hover:text-electric-blue transition-colors"
              >
                {t("nav.features")}
              </LocaleLink>
              <ChevronRight className="size-4" />
              <span className="text-primary">
                {t("features.trends.title")}
              </span>
            </nav>

            {/* Badge */}
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-black uppercase tracking-widest text-white rounded-full animate-fade-in bg-primary">
              {t("featurePage.trends.hero.badge")}
            </span>

            {/* Title */}
            <h1
              className="text-5xl md:text-6xl font-black tracking-tight leading-[1.1] mb-6 animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              {t("featurePage.trends.hero.title1")}{" "}
              <span className="text-gradient-brand">
                {t("featurePage.trends.hero.title2")}
              </span>
            </h1>

            {/* Description */}
            <p
              className="text-xl text-gray-600 mb-10 max-w-lg leading-relaxed animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              {t("featurePage.trends.hero.description")}
            </p>

            {/* Metrics */}
            <div
              className="grid grid-cols-3 gap-4 py-8 border-t border-gray-100 animate-fade-in"
              style={{ animationDelay: "0.3s" }}
            >
              <div>
                <div className="text-2xl font-black text-[#1c1c1c]">24/7</div>
                <div className="text-xs font-bold text-gray-400 uppercase tracking-tighter">
                  {t("featurePage.trends.metric.scanning")}
                </div>
              </div>
              <div>
                <div className="text-2xl font-black text-[#1c1c1c]">92%</div>
                <div className="text-xs font-bold text-gray-400 uppercase tracking-tighter">
                  {t("featurePage.trends.metric.accuracy")}
                </div>
              </div>
              <div>
                <div className="text-2xl font-black text-[#1c1c1c]">48h</div>
                <div className="text-xs font-bold text-gray-400 uppercase tracking-tighter">
                  {t("featurePage.trends.metric.earlyDetection")}
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-4 mt-4 animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              <Button
                size="lg"
                className="btn-primary-light rounded-full"
                asChild
              >
                <LocaleLink href="/register">
                  <Sparkles className="size-5 mr-2" />
                  {t("featurePage.tryFree")}
                </LocaleLink>
              </Button>
            </div>
          </div>

          {/* Right - Trend Prediction Visualization */}
          <div
            className="relative animate-fade-in"
            style={{ animationDelay: "0.5s" }}
          >
            {/* Blur background effect */}
            <div className="absolute -inset-10 bg-gradient-optura blur-3xl rounded-full animate-pulse opacity-20" />

            {/* Trend Dashboard */}
            <div className="relative bg-white/80 backdrop-blur-md rounded-3xl border border-gray-200/50 p-6 shadow-2xl overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="size-10 bg-primary rounded-full flex items-center justify-center shadow-lg">
                    <TrendingUp className="size-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-bold">
                      {t("featurePage.trends.demo.title")}
                    </div>
                    <div className="text-[10px] text-green-500 flex items-center gap-1 animate-pulse">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                      {t("featurePage.trends.demo.status")}
                    </div>
                  </div>
                </div>
                <div className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-[10px] font-bold flex items-center gap-1">
                  <ArrowUpRight className="w-3 h-3" />
                  +142%
                </div>
              </div>

              {/* Trend Chart Area */}
              <div className="pt-6 pb-4">
                <div className="h-40 relative">
                  <svg
                    className="w-full h-full overflow-visible"
                    viewBox="0 0 400 150"
                    preserveAspectRatio="none"
                  >
                    {/* Grid Lines */}
                    <line
                      x1="0"
                      y1="150"
                      x2="400"
                      y2="150"
                      stroke="#e5e7eb"
                      strokeWidth="1"
                    />
                    <line
                      x1="0"
                      y1="100"
                      x2="400"
                      y2="100"
                      stroke="#e5e7eb"
                      strokeWidth="1"
                      strokeDasharray="4 4"
                    />
                    <line
                      x1="0"
                      y1="50"
                      x2="400"
                      y2="50"
                      stroke="#e5e7eb"
                      strokeWidth="1"
                      strokeDasharray="4 4"
                    />
                    {/* Area under curve */}
                    <path
                      d="M0,140 C50,135 100,130 150,90 C200,50 250,80 300,40 C350,0 380,10 400,5 L400,150 L0,150 Z"
                      fill="url(#heroGradient)"
                      opacity="0.3"
                    />
                    {/* Trend Line */}
                    <path
                      d="M0,140 C50,135 100,130 150,90 C200,50 250,80 300,40 C350,0 380,10 400,5"
                      fill="none"
                      stroke="#22b5f8"
                      strokeWidth="3"
                      strokeLinecap="round"
                      className="animate-draw-line"
                    />
                    {/* Prediction zone dashed */}
                    <path
                      d="M300,40 C350,0 380,10 400,5"
                      fill="none"
                      stroke="#22b5f8"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeDasharray="8 4"
                    />
                    <defs>
                      <linearGradient
                        id="heroGradient"
                        x1="0%"
                        y1="0%"
                        x2="0%"
                        y2="100%"
                      >
                        <stop offset="0%" stopColor="#22b5f8" stopOpacity="1" />
                        <stop
                          offset="100%"
                          stopColor="#22b5f8"
                          stopOpacity="0"
                        />
                      </linearGradient>
                    </defs>
                    {/* Points */}
                    <circle
                      cx="150"
                      cy="90"
                      r="5"
                      fill="#fff"
                      stroke="#22b5f8"
                      strokeWidth="2"
                    />
                    <circle
                      cx="300"
                      cy="40"
                      r="5"
                      fill="#fff"
                      stroke="#22b5f8"
                      strokeWidth="2"
                    />
                  </svg>
                  {/* Prediction Label */}
                  <div className="absolute right-0 top-0 bg-primary/10 border border-primary/30 text-primary text-[10px] font-bold px-2 py-1 rounded-full">
                    {t("featurePage.trends.demo.prediction")}
                  </div>
                </div>
              </div>

              {/* Trend Cards */}
              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-gray-100">
                {/* Trend 1 */}
                <div
                  className="bg-gray-50 rounded-xl p-3 animate-fade-in"
                  style={{ animationDelay: "0.7s" }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="size-6 rounded-full bg-orange-100 flex items-center justify-center">
                      <Zap className="size-3 text-orange-600" />
                    </div>
                    <span className="text-xs font-bold text-gray-700">
                      {t("featurePage.trends.demo.trend1.title")}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-gray-500">
                      {t("featurePage.trends.demo.trend1.category")}
                    </span>
                    <span className="text-[10px] font-bold text-emerald-600">
                      +85%
                    </span>
                  </div>
                </div>

                {/* Trend 2 */}
                <div
                  className="bg-gray-50 rounded-xl p-3 animate-fade-in"
                  style={{ animationDelay: "0.8s" }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="size-6 rounded-full bg-purple-100 flex items-center justify-center">
                      <Target className="size-3 text-purple-600" />
                    </div>
                    <span className="text-xs font-bold text-gray-700">
                      {t("featurePage.trends.demo.trend2.title")}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-gray-500">
                      {t("featurePage.trends.demo.trend2.category")}
                    </span>
                    <span className="text-[10px] font-bold text-emerald-600">
                      +62%
                    </span>
                  </div>
                </div>
              </div>

              {/* AI Insight */}
              <div
                className="mt-4 bg-primary/5 border border-primary/20 rounded-xl p-3 animate-fade-in"
                style={{ animationDelay: "0.9s" }}
              >
                <div className="flex items-center gap-2">
                  <Sparkles className="size-4 text-primary" />
                  <span className="text-xs font-bold text-primary">
                    {t("featurePage.trends.demo.aiInsight.label")}
                  </span>
                </div>
                <p className="text-[11px] text-gray-600 mt-1 leading-relaxed">
                  {t("featurePage.trends.demo.aiInsight.text")}
                </p>
              </div>
            </div>
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
