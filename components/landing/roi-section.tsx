"use client";

import { useState } from "react";
import {
  TrendingUp,
  Clock,
  Zap,
  Users,
  Settings,
  Sparkles,
  Play,
  ArrowRight,
} from "lucide-react";
import { useI18n } from "@/lib/i18n";
import YouTubeModal from "@/components/youtube-modal";

export function RoiSection() {
  const { t } = useI18n();

  const [isModalOpen, setIsModalOpen] = useState(false);
  // Helper function to render title with highlighted brand name
  const renderTitle = () => {
    const brandName = t("roi.title.brand");
    const fullTitle = t("roi.title.full", { brand: brandName });

    // Split text by brand name and render with highlight
    const parts = fullTitle.split(brandName);

    return (
      <>
        {parts[0]}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5fffec] to-[#008bff]">
          {brandName}
        </span>
        {parts[1]}
      </>
    );
  };
  const comparisonData = [
    {
      criteriaKey: "roi.row1.criteria",
      traditionalKey: "roi.row1.traditional",
      traditionalDescKey: "roi.row1.traditionalDesc",
      aiKey: "roi.row1.ai",
      aiDescKey: "roi.row1.aiDesc",
      savingsKey: "roi.row1.savings",
      icon: TrendingUp,
      iconBg: "from-blue-500 to-blue-600",
    },
    {
      criteriaKey: "roi.row2.criteria",
      traditionalKey: "roi.row2.traditional",
      traditionalDescKey: "roi.row2.traditionalDesc",
      aiKey: "roi.row2.ai",
      aiDescKey: "roi.row2.aiDesc",
      savingsKey: null,
      icon: Zap,
      iconBg: "from-purple-500 to-purple-600",
    },
    {
      criteriaKey: "roi.row3.criteria",
      traditionalKey: "roi.row3.traditional",
      traditionalDescKey: "roi.row3.traditionalDesc",
      aiKey: "roi.row3.ai",
      aiDescKey: "roi.row3.aiDesc",
      savingsKey: null,
      icon: Clock,
      iconBg: "from-amber-500 to-amber-600",
    },
    {
      criteriaKey: "roi.row4.criteria",
      traditionalKey: "roi.row4.traditional",
      traditionalDescKey: "roi.row4.traditionalDesc",
      aiKey: "roi.row4.ai",
      aiDescKey: "roi.row4.aiDesc",
      savingsKey: null,
      icon: Users,
      iconBg: "from-green-500 to-green-600",
    },
    {
      criteriaKey: "roi.row5.criteria",
      traditionalKey: "roi.row5.traditional",
      traditionalDescKey: "roi.row5.traditionalDesc",
      aiKey: "roi.row5.ai",
      aiDescKey: "roi.row5.aiDesc",
      savingsKey: null,
      icon: Settings,
      iconBg: "from-indigo-500 to-indigo-600",
    },
  ];

  return (
    <section
      id="roi"
      className="relative w-full overflow-hidden py-16 md:py-24 lg:py-32 bg-linear-to-b from-white via-gray-50 to-white"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-[#22b5f8]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 -right-20 size-125 bg-[#5fffec]/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-150 bg-[#ff7900]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative container mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-linear-to-r from-[#5fffec]/10 to-[#008bff]/10 border border-[#22b5f8]/30 text-[#008bff] text-xs font-bold uppercase tracking-wider mb-6">
            <Sparkles className="w-4 h-4 text-[#22b5f8]" />
            {t("roi.badge")}
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-6 leading-tight px-4">
            {renderTitle()}
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8 px-4">
            {t("roi.subtitle.full")}
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center justify-center gap-2 bg-[#22b5f8] hover:bg-[#1a9fd8] text-white font-semibold px-8 py-4 rounded-full shadow-lg shadow-[#22b5f8]/30 hover:shadow-xl transition-all group"
          >
            <Play
              className="w-5 h-5 group-hover:scale-110 transition-transform"
              fill="currentColor"
            />
            {t("roi.watchDemo")}
          </button>
        </div>

        {/* Comparison Table - Enhanced Modern Design */}
        <div>
          {/* Desktop View - 3 Column Grid */}
          <div className="hidden lg:block">
            {/* Table Header */}
            <div className="grid grid-cols-[280px_1fr_1fr] gap-4 mb-4">
              {/* Criteria Column Header */}
              <div className="flex items-center justify-center p-5 rounded-2xl bg-linear-to-br from-gray-50 to-gray-100 border border-gray-200">
                <span className="text-sm font-bold text-gray-700 uppercase tracking-wider">
                  {t("roi.header.criteria")}
                </span>
              </div>

              {/* Traditional Method Header */}
              <div className="relative p-5 rounded-2xl bg-linear-to-br from-blue-50 via-sky-50 to-blue-50 border border-blue-200 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-200/30 rounded-full blur-2xl" />
                <div className="relative flex flex-col items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </div>
                  <h3 className="text-base font-bold text-gray-900">
                    {t("roi.header.traditional")}
                  </h3>
                  <p className="text-xs text-gray-600">
                    {t("roi.header.traditional.manual")}
                  </p>
                </div>
              </div>

              {/* Uniksmart AI Header */}
              <div className="relative p-5 rounded-2xl bg-linear-to-br from-green-50 via-emerald-50 to-green-50 border border-green-300 overflow-hidden">
                <div className="absolute -top-1 -right-1 bg-linear-to-r from-green-500 to-emerald-600 text-white text-xs font-bold px-3 py-1.5 rounded-bl-xl rounded-tr-xl flex items-center gap-1.5 shadow-lg">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{t("roi.header.recommended")}</span>
                </div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-green-200/30 rounded-full blur-2xl" />
                <div className="relative flex flex-col items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-linear-to-br from-green-400 to-emerald-500 flex items-center justify-center shadow-lg">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="text-base font-bold text-gray-900">
                    {t("roi.header.dxai")}
                  </h3>
                  <p className="text-xs text-green-700 font-semibold">
                    {t("roi.header.dxai.auto")}
                  </p>
                </div>
              </div>
            </div>

            {/* Comparison Rows */}
            <div className="space-y-3">
              {comparisonData.map((row, idx) => (
                <div
                  key={idx}
                  className="grid grid-cols-[280px_1fr_1fr] gap-4 items-center"
                >
                  {/* Criteria Cell */}
                  <div className="flex items-center gap-3 p-5 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                    <div
                      className={`w-10 h-10 rounded-xl bg-linear-to-br ${row.iconBg} flex items-center justify-center shadow-lg shrink-0`}
                    >
                      <row.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-semibold text-gray-900 text-sm">
                      {t(row.criteriaKey)}
                    </span>
                  </div>

                  {/* Traditional Value */}
                  <div className="p-5 rounded-2xl bg-linear-to-br from-blue-50/50 to-sky-50/30 border border-blue-100 hover:border-blue-200 transition-all">
                    <div className="text-center">
                      <p className="text-base font-semibold text-gray-700 mb-1">
                        {t(row.traditionalKey)}
                      </p>
                      <p className="text-xs text-gray-500">
                        {t(row.traditionalDescKey)}
                      </p>
                    </div>
                  </div>

                  {/* AI Value */}
                  <div className="p-5 rounded-2xl bg-linear-to-br from-green-50/50 to-emerald-50/30 border border-green-200 hover:border-green-300 transition-all relative overflow-hidden group">
                    <div className="absolute inset-0 bg-linear-to-r from-green-400/0 via-green-400/5 to-green-400/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                    <div className="relative text-center">
                      <div className="flex items-center justify-center gap-2 mb-1">
                        <p className="text-base font-bold text-green-700">
                          {t(row.aiKey)}
                        </p>
                        {row.savingsKey && (
                          <span className="bg-linear-to-r from-green-500 to-emerald-600 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-md">
                            {t(row.savingsKey)}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-green-600 font-medium">
                        {t(row.aiDescKey)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile View - Stacked Cards */}
          <div className="lg:hidden space-y-6">
            {comparisonData.map((row, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-white border border-gray-200 shadow-lg overflow-hidden"
              >
                {/* Criteria Header */}
                <div className="flex items-center gap-3 p-4 bg-linear-to-r from-gray-50 to-gray-100 border-b border-gray-200">
                  <div
                    className={`w-9 h-9 rounded-xl bg-linear-to-br ${row.iconBg} flex items-center justify-center shadow-md shrink-0`}
                  >
                    <row.icon className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-bold text-gray-900 text-sm">
                    {t(row.criteriaKey)}
                  </span>
                </div>

                {/* Comparison Values */}
                <div className="grid grid-cols-2 divide-x divide-gray-200">
                  {/* Traditional */}
                  <div className="p-4 bg-linear-to-br from-blue-50/50 to-sky-50/30">
                    <div className="text-center">
                      <p className="text-xs text-gray-600 mb-1 font-medium uppercase tracking-wider">
                        {t("roi.mobile.traditional")}
                      </p>
                      <p className="text-sm font-semibold text-gray-700 mb-0.5">
                        {t(row.traditionalKey)}
                      </p>
                      <p className="text-xs text-gray-500">
                        {t(row.traditionalDescKey)}
                      </p>
                    </div>
                  </div>

                  {/* AI */}
                  <div className="p-4 bg-linear-to-br from-green-50/50 to-emerald-50/30 relative">
                    {row.savingsKey && (
                      <div className="absolute top-2 right-2">
                        <span className="bg-linear-to-r from-green-500 to-emerald-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-md">
                          {t(row.savingsKey)}
                        </span>
                      </div>
                    )}
                    <div className="text-center">
                      <p className="text-xs text-green-700 mb-1 font-bold uppercase tracking-wider">
                        Uniksmart AI
                      </p>
                      <p className="text-sm font-bold text-green-700 mb-0.5">
                        {t(row.aiKey)}
                      </p>
                      <p className="text-xs text-green-600 font-medium">
                        {t(row.aiDescKey)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-12 md:mt-16 text-center px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-base md:text-lg text-gray-700 mb-6 font-medium">
              {t("roi.cta.ready")}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#pricing"
                className="inline-flex items-center justify-center gap-2 bg-[#22b5f8] hover:bg-[#1a9fd8] text-white font-bold px-8 py-4 rounded-full shadow-lg shadow-[#22b5f8]/30 hover:shadow-xl transition-all group min-h-[56px]"
              >
                {t("roi.cta.start")}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/about-us"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-900 font-semibold px-8 py-4 rounded-full border-2 border-gray-300 hover:border-[#22b5f8]/50 transition-all min-h-[56px]"
              >
                {t("roi.cta.learn")}
              </a>
            </div>
            <p className="text-xs text-gray-500 mt-6">{t("roi.disclaimer")}</p>
          </div>
        </div>
      </div>

      <YouTubeModal
        videoId="R5RuHV_JrMM"
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}
