"use client";

import { useI18n } from "@/lib/i18n";
import {
  Facebook,
  Instagram,
  Music,
  Youtube,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";

export function AdsUnifiedDashboardSection() {
  const { t } = useI18n();

  return (
    <section className="py-20 bg-gray-50 dark:bg-background-dark/50">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <span className="text-primary font-bold text-sm tracking-wider uppercase">
              {t("featurePage.ads.dashboard.badge")}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 text-[#0d0d1c] dark:text-white">
              {t("featurePage.ads.dashboard.title")}
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mt-4">
              {t("featurePage.ads.dashboard.subtitle")}
            </p>
          </div>
          <div className="flex gap-3">
            <div className="w-10 h-10 rounded-full bg-white dark:bg-white/10 flex items-center justify-center shadow-sm text-blue-600">
              <Facebook className="w-5 h-5" />
            </div>
            <div className="w-10 h-10 rounded-full bg-white dark:bg-white/10 flex items-center justify-center shadow-sm text-pink-600">
              <Instagram className="w-5 h-5" />
            </div>
            <div className="w-10 h-10 rounded-full bg-white dark:bg-white/10 flex items-center justify-center shadow-sm text-black dark:text-white">
              <Music className="w-5 h-5" />
            </div>
            <div className="w-10 h-10 rounded-full bg-white dark:bg-white/10 flex items-center justify-center shadow-sm text-red-600">
              <Youtube className="w-5 h-5" />
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-[#1a192e] rounded-2xl shadow-xl border border-gray-200 dark:border-white/5 overflow-hidden">
          <div className="p-6 border-b border-gray-100 dark:border-white/5 flex justify-between items-center">
            <h3 className="font-bold text-lg dark:text-white">
              {t("featurePage.ads.dashboard.cardTitle")}
            </h3>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-gray-100 dark:bg-white/10 rounded-full text-xs font-medium text-gray-600 dark:text-gray-300">
                {t("featurePage.ads.dashboard.timeRange")}
              </span>
              <span className="px-3 py-1 border border-gray-200 dark:border-white/10 rounded-full text-xs font-medium text-gray-500 cursor-pointer">
                {t("featurePage.ads.dashboard.export")}
              </span>
            </div>
          </div>
          <div className="grid lg:grid-cols-4 border-b border-gray-100 dark:border-white/5">
            <div className="p-6 border-r border-gray-100 dark:border-white/5 last:border-0">
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                {t("featurePage.ads.dashboard.metric1.label")}
              </p>
              <p className="text-2xl font-bold text-[#0d0d1c] dark:text-white">
                {t("featurePage.ads.dashboard.metric1.value")}
              </p>
              <span className="text-xs text-green-500 font-medium flex items-center gap-1 mt-1">
                <ArrowUpRight className="w-4 h-4" />
                {t("featurePage.ads.dashboard.metric1.change")}
              </span>
            </div>
            <div className="p-6 border-r border-gray-100 dark:border-white/5 last:border-0">
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                {t("featurePage.ads.dashboard.metric2.label")}
              </p>
              <p className="text-2xl font-bold text-[#0d0d1c] dark:text-white">
                {t("featurePage.ads.dashboard.metric2.value")}
              </p>
              <span className="text-xs text-green-500 font-medium flex items-center gap-1 mt-1">
                <ArrowUpRight className="w-4 h-4" />
                {t("featurePage.ads.dashboard.metric2.change")}
              </span>
            </div>
            <div className="p-6 border-r border-gray-100 dark:border-white/5 last:border-0">
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                {t("featurePage.ads.dashboard.metric3.label")}
              </p>
              <p className="text-2xl font-bold text-[#0d0d1c] dark:text-white">
                {t("featurePage.ads.dashboard.metric3.value")}
              </p>
              <span className="text-xs text-red-500 font-medium flex items-center gap-1 mt-1">
                <ArrowDownRight className="w-4 h-4" />
                {t("featurePage.ads.dashboard.metric3.change")}
              </span>
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                {t("featurePage.ads.dashboard.metric4.label")}
              </p>
              <p className="text-2xl font-bold text-[#0d0d1c] dark:text-white">
                {t("featurePage.ads.dashboard.metric4.value")}
              </p>
              <span className="text-xs text-green-500 font-medium flex items-center gap-1 mt-1">
                <ArrowUpRight className="w-4 h-4" />
                {t("featurePage.ads.dashboard.metric4.change")}
              </span>
            </div>
          </div>
          {/* Visual Dashboard Chart Placeholder */}
          <div
            className="w-full h-80 bg-gray-50 dark:bg-[#15142b] relative bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDIIrCKydqtYQg-f9nttX210FQOX3N0tBRwBcJacpgdVrcwU94iL0_JCjL6W1YiQhyD_aJavaXzg7vcP8w2vThMJybi9NmWMad-5jGqQ0bgguxYCtSXSlEwmfYQdWYhZ4QjyQAZ2ZkqhdRTvoXN2gvirsNbju_9PVoLgM2EzuiAWTWuWLx5BQQi_A5jaQyX9bacp1RJs_ICvU0BWC6f94uduBuOntgBciF9XN9t2-n3Qf6tnEdCexl_6_TgdpaI_m8BfsaYYrAGbg')",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent dark:from-[#15142b]/80"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
