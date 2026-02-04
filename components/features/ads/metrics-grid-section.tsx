"use client";

import { useI18n } from "@/lib/i18n";
import {
  MousePointer,
  DollarSign,
  TrendingUp,
  CreditCard,
  Eye,
  MousePointerClick,
  RefreshCw,
  Gem,
} from "lucide-react";

export function AdsMetricsGridSection() {
  const { t } = useI18n();

  const metrics = [
    {
      labelKey: "featurePage.ads.metrics.ctr.label",
      icon: MousePointer,
      value: "featurePage.ads.metrics.ctr.value",
      color: "text-primary",
    },
    {
      labelKey: "featurePage.ads.metrics.cpa.label",
      icon: DollarSign,
      value: "featurePage.ads.metrics.cpa.value",
      color: "text-secondary",
    },
    {
      labelKey: "featurePage.ads.metrics.roas.label",
      icon: TrendingUp,
      value: "featurePage.ads.metrics.roas.value",
      color: "text-green-500",
    },
    {
      labelKey: "featurePage.ads.metrics.cpc.label",
      icon: CreditCard,
      value: "featurePage.ads.metrics.cpc.value",
      color: "text-blue-400",
    },
    {
      labelKey: "featurePage.ads.metrics.cpm.label",
      icon: Eye,
      value: "featurePage.ads.metrics.cpm.value",
      color: "text-purple-400",
    },
    {
      labelKey: "featurePage.ads.metrics.convRate.label",
      icon: MousePointerClick,
      value: "featurePage.ads.metrics.convRate.value",
      color: "text-orange-400",
    },
    {
      labelKey: "featurePage.ads.metrics.retention.label",
      icon: RefreshCw,
      value: "featurePage.ads.metrics.retention.value",
      color: "text-indigo-400",
    },
    {
      labelKey: "featurePage.ads.metrics.ltv.label",
      icon: Gem,
      value: "featurePage.ads.metrics.ltv.value",
      color: "text-pink-400",
    },
  ];

  return (
    <section className="py-20 bg-[#f8f8fc] dark:bg-background-dark">
      <div className="max-w-[1280px] mx-auto px-6">
        <h2 className="text-2xl font-bold mb-8 text-[#0d0d1c] dark:text-white">
          {t("featurePage.ads.metrics.title")}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div
                key={index}
                className="bg-white dark:bg-[#1a192e] p-4 rounded-xl border border-gray-100 dark:border-white/5 text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <p className="text-xs text-gray-400 font-bold uppercase mb-2">
                  {t(metric.labelKey)}
                </p>
                <div className={`flex justify-center mb-1 ${metric.color}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <p className="font-bold text-[#0d0d1c] dark:text-white">
                  {t(metric.value)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
