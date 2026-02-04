"use client";

import { useI18n } from "@/lib/i18n";
import {
  Wallet,
  Users,
  FlaskConical,
  AlertTriangle,
  Lightbulb,
  RefreshCw,
  CheckCircle2,
} from "lucide-react";

export function AdsAIEngineSection() {
  const { t } = useI18n();

  const features = [
    {
      icon: Wallet,
      titleKey: "featurePage.ads.aiEngine.feature1.title",
      descKey: "featurePage.ads.aiEngine.feature1.desc",
      color: "text-secondary",
    },
    {
      icon: Users,
      titleKey: "featurePage.ads.aiEngine.feature2.title",
      descKey: "featurePage.ads.aiEngine.feature2.desc",
      color: "text-purple-600",
    },
    {
      icon: FlaskConical,
      titleKey: "featurePage.ads.aiEngine.feature3.title",
      descKey: "featurePage.ads.aiEngine.feature3.desc",
      color: "text-blue-500",
    },
    {
      icon: AlertTriangle,
      titleKey: "featurePage.ads.aiEngine.feature4.title",
      descKey: "featurePage.ads.aiEngine.feature4.desc",
      color: "text-red-500",
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-transparent overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2 flex flex-col gap-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0d0d1c] dark:text-white">
                {t("featurePage.ads.aiEngine.title")}
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-lg">
                {t("featurePage.ads.aiEngine.subtitle")}
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="p-5 border border-gray-200 dark:border-white/10 rounded-xl bg-gray-50 dark:bg-white/5 hover:border-primary/30 transition-colors"
                  >
                    <div
                      className={`bg-white dark:bg-white/10 w-10 h-10 rounded-lg flex items-center justify-center ${feature.color} mb-3 shadow-sm`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="font-bold text-[#0d0d1c] dark:text-white">
                      {t(feature.titleKey)}
                    </h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      {t(feature.descKey)}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-secondary/20 to-primary/20 rounded-full blur-3xl opacity-40 -z-10"></div>
            <div className="bg-white dark:bg-[#1a192e] rounded-2xl shadow-2xl border border-gray-100 dark:border-white/5 p-8 relative">
              {/* AI Analysis Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <RefreshCw
                    className="w-5 h-5 text-primary animate-spin"
                    style={{ animationDuration: "3s" }}
                  />
                  <span className="font-bold text-lg dark:text-white">
                    {t("featurePage.ads.aiEngine.scanningTitle")}
                  </span>
                </div>
                <span className="text-sm bg-green-100 text-green-700 px-3 py-1 rounded-full font-bold">
                  {t("featurePage.ads.aiEngine.statusActive")}
                </span>
              </div>
              <div className="space-y-4">
                {/* Optimization Suggestion */}
                <div className="bg-[#f8f8fc] dark:bg-white/5 p-4 rounded-xl flex items-start gap-4">
                  <div className="mt-1 text-secondary">
                    <Lightbulb className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-bold text-[#0d0d1c] dark:text-white text-sm">
                      {t("featurePage.ads.aiEngine.suggestion1.title")}
                    </h5>
                    <p className="text-xs text-gray-500 mt-1">
                      {t("featurePage.ads.aiEngine.suggestion1.desc")}
                    </p>
                    <button className="mt-3 text-xs bg-primary text-white px-3 py-1.5 rounded-lg font-bold">
                      {t("featurePage.ads.aiEngine.applyButton")}
                    </button>
                  </div>
                </div>
                {/* Completed Action */}
                <div className="bg-[#f8f8fc] dark:bg-white/5 p-4 rounded-xl flex items-start gap-4 opacity-70">
                  <div className="mt-1 text-gray-400">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-bold text-[#0d0d1c] dark:text-white text-sm">
                      {t("featurePage.ads.aiEngine.suggestion2.title")}
                    </h5>
                    <p className="text-xs text-gray-500 mt-1">
                      {t("featurePage.ads.aiEngine.suggestion2.desc")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
