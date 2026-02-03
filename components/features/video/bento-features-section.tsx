"use client";

import {
  UserCircle,
  Mic2,
  Scissors,
  Languages,
  LayoutGrid,
  ArrowRight,
} from "lucide-react";
import { LocaleLink } from "@/components/locale-link";
import { useI18n } from "@/lib/i18n";
import { useInView } from "@/hooks/use-in-view";

export function VideoBentoFeaturesSection() {
  const { t } = useI18n();
  const { ref, isInView } = useInView();

  return (
    <section className="py-16 md:py-24 bg-white">
      <div ref={ref} className="container mx-auto px-4">
        {/* Section Header */}
        <div
          className={`mb-12 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4">
            {t("featurePage.video.bento.title")}
          </h2>
          <p className="text-gray-600 max-w-2xl text-lg">
            {t("featurePage.video.bento.subtitle")}
          </p>
        </div>

        {/* Bento Grid - 5 Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Large Card: AI Brand Ambassador Videos */}
          <div
            className={`group md:col-span-2 relative overflow-hidden bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col ${
              isInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "0.1s" }}
          >
            <div className="p-8">
              <div className="w-14 h-14 rounded-xl bg-pink-100 flex items-center justify-center mb-6">
                <UserCircle className="w-8 h-8 text-pink-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {t("featurePage.video.bento.ambassador.title")}
              </h3>
              <p className="text-gray-600 leading-relaxed max-w-lg">
                {t("featurePage.video.bento.ambassador.desc")}
              </p>
              <LocaleLink
                href="/#features"
                className="inline-flex items-center gap-1 mt-4 text-pink-500 font-bold text-sm group-hover:underline"
              >
                {t("featurePage.video.bento.learnMore")}
                <ArrowRight className="w-4 h-4" />
              </LocaleLink>
            </div>

            {/* Avatar Preview */}
            <div className="flex-1 relative overflow-hidden px-8 pb-8">
              <div className="flex items-center gap-4 opacity-70 group-hover:opacity-100 transition-opacity duration-500">
                <div className="size-16 rounded-full bg-gradient-to-br from-pink-200 to-pink-400 flex items-center justify-center shadow-lg">
                  <UserCircle className="size-10 text-white" />
                </div>
                <div className="size-16 rounded-full bg-gradient-to-br from-blue-200 to-blue-400 flex items-center justify-center shadow-lg">
                  <UserCircle className="size-10 text-white" />
                </div>
                <div className="size-16 rounded-full bg-gradient-to-br from-purple-200 to-purple-400 flex items-center justify-center shadow-lg">
                  <UserCircle className="size-10 text-white" />
                </div>
                <div className="flex items-center justify-center size-16 rounded-full bg-gray-100 border-2 border-dashed border-gray-300 text-gray-400 text-xs font-bold">
                  +100
                </div>
              </div>
            </div>
          </div>

          {/* Card: Hyper-Realistic Lip Sync */}
          <div
            className={`group relative overflow-hidden bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 ${
              isInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "0.2s" }}
          >
            <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-40 transition-opacity">
              <Mic2 className="size-14 text-pink-500" />
            </div>
            <div className="w-12 h-12 rounded-xl bg-pink-100 flex items-center justify-center mb-4">
              <Mic2 className="w-6 h-6 text-pink-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {t("featurePage.video.bento.lipSync.title")}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {t("featurePage.video.bento.lipSync.desc")}
            </p>

            {/* Lip Sync Animation Indicator */}
            <div className="mt-6 flex items-center gap-2">
              <div className="flex items-end gap-0.5 h-6">
                {[3, 5, 8, 4, 7, 3, 6, 4, 5, 7, 4, 6].map((h, i) => (
                  <div
                    key={i}
                    className="w-1 bg-pink-400 rounded-full animate-pulse"
                    style={{
                      height: `${h * 3}px`,
                      animationDelay: `${i * 0.1}s`,
                    }}
                  />
                ))}
              </div>
              <span className="text-xs text-gray-500 ml-2">
                {t("featurePage.video.bento.lipSync.syncing")}
              </span>
            </div>
          </div>

          {/* Card: Three Flexible Creation Modes */}
          <div
            className={`group relative overflow-hidden bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 ${
              isInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "0.3s" }}
          >
            <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-40 transition-opacity">
              <Scissors className="size-14 text-pink-500" />
            </div>
            <div className="w-12 h-12 rounded-xl bg-pink-100 flex items-center justify-center mb-4">
              <Scissors className="w-6 h-6 text-pink-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {t("featurePage.video.bento.creationModes.title")}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              {t("featurePage.video.bento.creationModes.desc")}
            </p>

            {/* Mode Pills */}
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-pink-50 text-pink-600 text-xs font-medium rounded-full border border-pink-200">
                Script-to-Video
              </span>
              <span className="px-3 py-1 bg-pink-50 text-pink-600 text-xs font-medium rounded-full border border-pink-200">
                Text-to-Video
              </span>
              <span className="px-3 py-1 bg-pink-50 text-pink-600 text-xs font-medium rounded-full border border-pink-200">
                Image-to-Video
              </span>
            </div>
          </div>

          {/* Card: Natural AI Voice */}
          <div
            className={`group relative overflow-hidden bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 ${
              isInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "0.4s" }}
          >
            <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-40 transition-opacity">
              <Languages className="size-14 text-pink-500" />
            </div>
            <div className="w-12 h-12 rounded-xl bg-pink-100 flex items-center justify-center mb-4">
              <Languages className="w-6 h-6 text-pink-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {t("featurePage.video.bento.aiVoice.title")}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              {t("featurePage.video.bento.aiVoice.desc")}
            </p>

            {/* Language Badges */}
            <div className="flex items-center gap-2">
              <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded">
                VI
              </span>
              <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded">
                EN
              </span>
              <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded">
                JP
              </span>
              <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded">
                KR
              </span>
              <span className="px-2 py-1 bg-pink-100 text-pink-600 text-xs font-bold rounded">
                +30
              </span>
            </div>
          </div>

          {/* Card: Multi-Scene Editor */}
          <div
            className={`group relative overflow-hidden bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 ${
              isInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "0.5s" }}
          >
            <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-40 transition-opacity">
              <LayoutGrid className="size-14 text-pink-500" />
            </div>
            <div className="w-12 h-12 rounded-xl bg-pink-100 flex items-center justify-center mb-4">
              <LayoutGrid className="w-6 h-6 text-pink-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {t("featurePage.video.bento.multiScene.title")}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              {t("featurePage.video.bento.multiScene.desc")}
            </p>

            {/* Scene Grid Preview */}
            <div className="grid grid-cols-3 gap-1.5">
              <div className="aspect-video bg-gray-200 rounded-sm flex items-center justify-center">
                <span className="text-[8px] text-gray-400 font-bold">01</span>
              </div>
              <div className="aspect-video bg-pink-100 rounded-sm flex items-center justify-center border-2 border-pink-400">
                <span className="text-[8px] text-pink-500 font-bold">02</span>
              </div>
              <div className="aspect-video bg-gray-200 rounded-sm flex items-center justify-center">
                <span className="text-[8px] text-gray-400 font-bold">03</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
