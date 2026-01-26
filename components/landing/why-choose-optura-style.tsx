"use client";

import { useState, useEffect, useRef } from "react";
import {
  TrendingUp,
  Zap,
  Clock,
  Users,
  Settings,
  CheckCircle2,
  XCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useI18n } from "@/lib/i18n";
import { LocaleLink } from "@/components/locale-link";

interface ComparisonRow {
  id: string;
  icon: typeof TrendingUp;
  iconBg: string;
  criteriaKey: string;
  traditionalKey: string;
  dxaiKey: string;
  savingsKey?: string;
}

export function WhyChooseOpturaStyle() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { t } = useI18n();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
      },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const comparisonRows: ComparisonRow[] = [
    {
      id: "cost",
      icon: TrendingUp,
      iconBg: "bg-blue-100",
      criteriaKey: "whyChoose.optura.row1.criteria",
      traditionalKey: "whyChoose.optura.row1.traditional",
      dxaiKey: "whyChoose.optura.row1.dxai",
      savingsKey: "whyChoose.optura.row1.savings",
    },
    {
      id: "video-output",
      icon: Zap,
      iconBg: "bg-blue-100",
      criteriaKey: "whyChoose.optura.row2.criteria",
      traditionalKey: "whyChoose.optura.row2.traditional",
      dxaiKey: "whyChoose.optura.row2.dxai",
    },
    {
      id: "time",
      icon: Clock,
      iconBg: "bg-blue-100",
      criteriaKey: "whyChoose.optura.row3.criteria",
      traditionalKey: "whyChoose.optura.row3.traditional",
      dxaiKey: "whyChoose.optura.row3.dxai",
    },
    {
      id: "multitask",
      icon: Users,
      iconBg: "bg-blue-100",
      criteriaKey: "whyChoose.optura.row4.criteria",
      traditionalKey: "whyChoose.optura.row4.traditional",
      dxaiKey: "whyChoose.optura.row4.dxai",
    },
    {
      id: "operation",
      icon: Settings,
      iconBg: "bg-blue-100",
      criteriaKey: "whyChoose.optura.row5.criteria",
      traditionalKey: "whyChoose.optura.row5.traditional",
      dxaiKey: "whyChoose.optura.row5.dxai",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-32 bg-linear-to-b from-white to-gray-50 relative overflow-hidden font-sans"
    >
      {/* Subtle background decoration */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-indigo-100 rounded-full blur-3xl opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-6">
            {t("whyChoose.optura.title")}{" "}
            <span className="text-blue-600">{t("whyChoose.optura.brand")}</span>
            ?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            {t("whyChoose.optura.subtitle")}
          </p>

          {/* Watch Demo Button */}
          <LocaleLink href="#demo">
            <button className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold shadow-lg hover:shadow-xl transition-all duration-200">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
              </svg>
              {t("whyChoose.optura.watchDemo")}
            </button>
          </LocaleLink>
        </div>

        {/* Comparison Table - Desktop */}
        <div
          className={cn(
            "hidden md:block rounded-3xl border-2 border-gray-200 overflow-hidden shadow-xl mb-12 bg-white transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          )}
        >
          {/* Table Header */}
          <div className="grid grid-cols-[300px_1fr_1fr] bg-linear-to-r from-gray-50 to-white">
            <div className="px-8 py-6 border-r border-gray-200">
              <h3 className="text-base font-bold text-gray-900">
                {t("whyChoose.optura.criteria")}
              </h3>
            </div>
            <div className="px-8 py-6 border-r border-gray-200 bg-red-50/30 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-100 border border-red-200">
                  <XCircle className="w-4 h-4 text-red-600" />
                  <span className="text-xs font-bold text-red-700 uppercase tracking-wider">
                    {t("whyChoose.optura.traditional")}
                  </span>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-2">
                {t("whyChoose.optura.traditional.manual")}
              </p>
            </div>
            <div className="px-8 py-6 bg-green-50/30 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-600 border border-green-700 shadow-lg">
                  <CheckCircle2 className="w-4 h-4 text-white" />
                  <span className="text-xs font-bold text-white uppercase tracking-wider">
                    {t("whyChoose.optura.bestChoice")}
                  </span>
                </div>
              </div>
              <h3 className="text-base font-bold text-green-700 mt-2">
                {t("whyChoose.optura.dxai")}
              </h3>
              <p className="text-sm text-green-600">
                {t("whyChoose.optura.dxai.auto")}
              </p>
            </div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-gray-200">
            {comparisonRows.map((row, index) => {
              const Icon = row.icon;
              return (
                <div
                  key={row.id}
                  className={cn(
                    "grid grid-cols-[300px_1fr_1fr] transition-all duration-200 hover:bg-gray-50",
                    isVisible && "animate-fade-up",
                  )}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Criteria Column */}
                  <div className="px-8 py-6 border-r border-gray-200 flex items-center gap-4">
                    <div
                      className={cn(
                        "w-12 h-12 rounded-xl flex items-center justify-center shrink-0",
                        row.iconBg,
                      )}
                    >
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h4 className="text-base font-bold text-gray-900">
                      {t(row.criteriaKey)}
                    </h4>
                  </div>

                  {/* Traditional Method Column */}
                  <div className="px-8 py-6 border-r border-gray-200 bg-red-50/10 flex items-center">
                    <p className="text-base text-gray-700">
                      {t(row.traditionalKey)}
                    </p>
                  </div>

                  {/* Uniksmart Platform Column */}
                  <div className="px-8 py-6 bg-green-50/10 flex items-center justify-between">
                    <p className="text-base font-bold text-gray-900">
                      {t(row.dxaiKey)}
                    </p>
                    {row.savingsKey && (
                      <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-green-600 text-white text-xs font-bold">
                        {t(row.savingsKey)}
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Version - Stacked Cards */}
        <div className="md:hidden space-y-6 mb-12">
          {comparisonRows.map((row, index) => {
            const Icon = row.icon;
            return (
              <div
                key={row.id}
                className={cn(
                  "rounded-2xl border-2 border-gray-200 overflow-hidden shadow-lg bg-white transition-all duration-700",
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8",
                )}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Criteria Header */}
                <div className="px-6 py-4 bg-linear-to-r from-gray-50 to-white border-b-2 border-gray-200 flex items-center gap-3">
                  <div
                    className={cn(
                      "w-12 h-12 rounded-xl flex items-center justify-center shrink-0",
                      row.iconBg,
                    )}
                  >
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900">
                    {t(row.criteriaKey)}
                  </h4>
                </div>

                {/* Traditional Method */}
                <div className="px-6 py-4 bg-red-50/20 border-b border-gray-200">
                  <div className="flex items-center gap-2 mb-2">
                    <XCircle className="w-4 h-4 text-red-600 shrink-0" />
                    <p className="text-xs font-bold text-red-700 uppercase tracking-wider">
                      {t("whyChoose.optura.traditional")}
                    </p>
                  </div>
                  <p className="text-base text-gray-700">
                    {t(row.traditionalKey)}
                  </p>
                </div>

                {/* Uniksmart Platform */}
                <div className="px-6 py-4 bg-green-50/20">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" />
                      <p className="text-xs font-bold text-green-700 uppercase tracking-wider">
                        {t("whyChoose.optura.mobilePlatform")}
                      </p>
                    </div>
                    {row.savingsKey && (
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-green-600 text-white text-xs font-bold">
                        {t(row.savingsKey)}
                      </span>
                    )}
                  </div>
                  <p className="text-base font-bold text-gray-900">
                    {t(row.dxaiKey)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <div
          className={cn(
            "grid md:grid-cols-2 gap-8 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          )}
          style={{ animationDelay: "600ms" }}
        >
          {/* Left: Trust Signal */}
          <div className="rounded-3xl border-2 border-blue-200 bg-linear-to-br from-blue-50 to-indigo-50 p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {t("whyChoose.optura.guarantee.title")}
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {t("whyChoose.optura.guarantee.desc")}
                </p>
              </div>
            </div>

            <LocaleLink href="/dang-ky">
              <button className="w-full px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2 group">
                {t("whyChoose.optura.tryNow")}
                <svg
                  className="w-4 h-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </button>
            </LocaleLink>
          </div>

          {/* Right: Consultation */}
          <div className="rounded-3xl border-2 border-gray-200 bg-white p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
                <Users className="w-6 h-6 text-gray-700" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {t("whyChoose.optura.consult.title")}
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {t("whyChoose.optura.consult.desc")}
                </p>
              </div>
            </div>

            <LocaleLink href="/ve-chung-toi">
              <button className="w-full px-8 py-4 rounded-xl bg-white hover:bg-gray-50 text-blue-600 font-bold border-2 border-blue-600 shadow-md hover:shadow-lg transition-all duration-200">
                {t("whyChoose.optura.consultBtn")}
              </button>
            </LocaleLink>
          </div>
        </div>
      </div>
    </section>
  );
}
