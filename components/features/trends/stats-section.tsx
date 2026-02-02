"use client";

import { TrendingUp, Clock, Radar, ArrowUp, ArrowDown, Check } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { useInView } from "@/hooks/use-in-view";

const stats = [
  {
    icon: TrendingUp,
    value: "300%",
    labelKey: "featurePage.trends.stats.viralIncrease.label",
    noteKey: "featurePage.trends.stats.viralIncrease.note",
    noteIcon: ArrowUp,
    noteColor: "text-emerald-600",
    color: "text-primary",
  },
  {
    icon: Clock,
    value: "85%",
    labelKey: "featurePage.trends.stats.timeReduction.label",
    noteKey: "featurePage.trends.stats.timeReduction.note",
    noteIcon: ArrowDown,
    noteColor: "text-red-500",
    color: "text-secondary",
  },
  {
    icon: Radar,
    value: "10k+",
    labelKey: "featurePage.trends.stats.trendsDetected.label",
    noteKey: "featurePage.trends.stats.trendsDetected.note",
    noteIcon: Check,
    noteColor: "text-emerald-600",
    color: "text-primary",
  },
];

export function TrendsStatsSection() {
  const { t } = useI18n();
  const { ref, isInView } = useInView();

  return (
    <section className="py-16 bg-white">
      <div ref={ref} className="container mx-auto px-4">
        {/* Section Header */}
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t("featurePage.trends.stats.title")}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            {t("featurePage.trends.stats.subtitle")}
          </p>
        </div>

        {/* Stats Grid */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat, idx) => {
              const StatIcon = stat.icon;
              const NoteIcon = stat.noteIcon;

              return (
                <div
                  key={idx}
                  className={`flex flex-col gap-3 rounded-2xl p-8 bg-white border border-gray-200 shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-500 ${
                    isInView
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${0.1 * idx}s` }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <StatIcon className={`w-8 h-8 ${stat.color}`} />
                  </div>
                  <p className="text-gray-900 text-sm font-medium uppercase tracking-wide opacity-70">
                    {t(stat.labelKey)}
                  </p>
                  <p
                    className={`text-5xl md:text-6xl font-black leading-none tracking-tight ${stat.color}`}
                  >
                    {stat.value}
                  </p>
                  <p
                    className={`${stat.noteColor} text-sm font-medium flex items-center gap-1 mt-2`}
                  >
                    <NoteIcon className="w-4 h-4" />
                    {t(stat.noteKey)}
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
