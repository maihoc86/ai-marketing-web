"use client";

import {
  Sparkles,
  AudioLines,
  Rocket,
  ArrowRight,
} from "lucide-react";
import { LocaleLink } from "@/components/locale-link";
import { useI18n } from "@/lib/i18n";

export function VideoCapabilitiesSection() {
  const { t } = useI18n();

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="mb-12 text-center md:text-left animate-fade-in">
          <span className="inline-block px-3 py-1 mb-4 text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 rounded-full">
            {t("featurePage.video.capabilities.badge")}
          </span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
            {t("featurePage.video.capabilities.heading")}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl">
            {t("featurePage.video.capabilities.description")}
          </p>
        </div>

        {/* Bento Grid - 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* 1. AI Powered Scripts */}
          <div
            className="group relative overflow-hidden bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-2xl transition-all duration-300 animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="flex justify-between items-start mb-6">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                <Sparkles className="w-8 h-8 text-primary group-hover:text-white" />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3 text-[#1c1c1c]">
              {t("featurePage.video.capabilities.aiScripts.title")}
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              {t("featurePage.video.capabilities.aiScripts.desc")}
            </p>

            {/* Script Preview UI */}
            <div className="opacity-50 group-hover:opacity-100 transition-all duration-500 rounded-lg bg-gray-50 p-4 border border-gray-200 h-32 relative overflow-hidden">
              <div className="space-y-2">
                <div className="h-2 bg-gray-300 rounded-full w-3/4"></div>
                <div className="h-2 bg-gray-300 rounded-full w-1/2"></div>
                <div className="h-2 bg-gray-300 rounded-full w-5/6"></div>
                <div className="h-2 bg-gray-300 rounded-full w-2/3"></div>
              </div>
              <div className="absolute bottom-4 right-4 flex items-center gap-1 text-[10px] text-primary font-bold">
                <Sparkles className="size-3" />
                AI Generating...
              </div>
            </div>

            <div className="mt-6">
              <LocaleLink
                href="/#features"
                className="flex items-center gap-1 text-sm font-bold text-primary group-hover:underline"
              >
                {t("featurePage.video.capabilities.learnMore")}
                <ArrowRight className="w-4 h-4" />
              </LocaleLink>
            </div>
          </div>

          {/* 2. Realistic AI Voices */}
          <div
            className="group relative overflow-hidden bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-2xl transition-all duration-300 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="flex justify-between items-start mb-6">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                <AudioLines className="w-8 h-8 text-primary group-hover:text-white" />
              </div>
              <span className="px-2.5 py-1 bg-emerald-100 text-emerald-700 text-[10px] font-bold rounded-full">
                50+ {t("featurePage.video.capabilities.voices.languages")}
              </span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-[#1c1c1c]">
              {t("featurePage.video.capabilities.voices.title")}
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              {t("featurePage.video.capabilities.voices.desc")}
            </p>

            {/* Audio Wave UI */}
            <div className="opacity-50 group-hover:opacity-100 transition-all duration-500 rounded-lg bg-gray-50 p-4 border border-gray-200 h-32 flex items-center justify-center">
              <div className="flex items-end gap-1 h-16">
                {[30, 50, 80, 60, 90, 70, 100, 55, 75, 45, 85, 65].map(
                  (height, idx) => (
                    <div
                      key={idx}
                      className="w-2 bg-primary rounded-full animate-pulse"
                      style={{
                        height: `${height}%`,
                        animationDelay: `${idx * 0.08}s`,
                      }}
                    />
                  )
                )}
              </div>
            </div>

            <div className="mt-6">
              <LocaleLink
                href="/#features"
                className="flex items-center gap-1 text-sm font-bold text-primary group-hover:underline"
              >
                {t("featurePage.video.capabilities.learnMore")}
                <ArrowRight className="w-4 h-4" />
              </LocaleLink>
            </div>
          </div>

          {/* 3. Set up for success */}
          <div
            className="group relative overflow-hidden bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-2xl transition-all duration-300 animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="flex justify-between items-start mb-6">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                <Rocket className="w-8 h-8 text-primary group-hover:text-white" />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3 text-[#1c1c1c]">
              {t("featurePage.video.capabilities.platform.title")}
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              {t("featurePage.video.capabilities.platform.desc")}
            </p>

            {/* Platform Icons UI */}
            <div className="opacity-50 group-hover:opacity-100 transition-all duration-500 rounded-lg bg-gray-50 p-4 border border-gray-200 h-32 flex items-center justify-center">
              <div className="flex gap-4">
                {/* YouTube */}
                <div className="size-12 rounded-full bg-red-600 flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                  <span className="text-white text-xs font-bold">YT</span>
                </div>
                {/* TikTok */}
                <div className="size-12 rounded-full bg-black flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform delay-75">
                  <span className="text-white text-xs font-bold">TK</span>
                </div>
                {/* Instagram */}
                <div className="size-12 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform delay-100">
                  <span className="text-white text-xs font-bold">IG</span>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <LocaleLink
                href="/#features"
                className="flex items-center gap-1 text-sm font-bold text-primary group-hover:underline"
              >
                {t("featurePage.video.capabilities.learnMore")}
                <ArrowRight className="w-4 h-4" />
              </LocaleLink>
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
      `}</style>
    </section>
  );
}
