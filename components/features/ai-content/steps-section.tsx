"use client";

import { FileText, Sparkles, Upload } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { useInView } from "@/hooks/use-in-view";

export function AIContentStepsSection() {
  const { t } = useI18n();
  const { ref, isInView } = useInView();

  return (
    <section className="py-24 bg-white">
      <div ref={ref} className="container mx-auto px-6">
        {/* Section Header */}
        <div
          className={`text-center mb-20 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl font-black tracking-tight mb-4">
            {t("featurePage.content.steps.title")}
          </h2>
          <p className="text-lg text-gray-600">
            {t("featurePage.content.steps.subtitle")}
          </p>
        </div>

        {/* Steps Grid with Connecting Line */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Connecting Line (hidden on mobile) */}
          <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-gray-200 -z-10"></div>

          {/* Step 1: Describe */}
          <div
            className={`flex flex-col items-center text-center group transition-all duration-700 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "0.15s" }}
          >
            <div className="size-24 rounded-full bg-white border-4 border-gray-50 shadow-xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 relative z-10">
              <FileText className="w-10 h-10" style={{ fill: "url(#gradient1)", color: "transparent" }} />
              <svg width="0" height="0">
                <defs>
                  <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#22b5f8" />
                    <stop offset="100%" stopColor="#008bff" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="px-6">
              <h3 className="text-xl font-bold mb-3">
                1. {t("featurePage.content.steps.step1.title")}
              </h3>
              <p className="text-gray-500">
                {t("featurePage.content.steps.step1.description")}
              </p>
            </div>
          </div>

          {/* Step 2: Generate */}
          <div
            className={`flex flex-col items-center text-center group transition-all duration-700 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "0.3s" }}
          >
            <div className="size-24 rounded-full bg-white border-4 border-gray-50 shadow-xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 relative z-10">
              <Sparkles className="w-10 h-10" style={{ fill: "url(#gradient2)", color: "transparent" }} />
              <svg width="0" height="0">
                <defs>
                  <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#22b5f8" />
                    <stop offset="100%" stopColor="#008bff" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="px-6">
              <h3 className="text-xl font-bold mb-3">
                2. {t("featurePage.content.steps.step2.title")}
              </h3>
              <p className="text-gray-500">
                {t("featurePage.content.steps.step2.description")}
              </p>
            </div>
          </div>

          {/* Step 3: Publish */}
          <div
            className={`flex flex-col items-center text-center group transition-all duration-700 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "0.45s" }}
          >
            <div className="size-24 rounded-full bg-white border-4 border-gray-50 shadow-xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 relative z-10">
              <Upload className="w-10 h-10" style={{ fill: "url(#gradient3)", color: "transparent" }} />
              <svg width="0" height="0">
                <defs>
                  <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#22b5f8" />
                    <stop offset="100%" stopColor="#008bff" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="px-6">
              <h3 className="text-xl font-bold mb-3">
                3. {t("featurePage.content.steps.step3.title")}
              </h3>
              <p className="text-gray-500">
                {t("featurePage.content.steps.step3.description")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
