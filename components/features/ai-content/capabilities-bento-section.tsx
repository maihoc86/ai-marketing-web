"use client";

import { ImageIcon, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";
import { useInView } from "@/hooks/use-in-view";

export function AIContentCapabilitiesBentoSection() {
  const { t } = useI18n();
  const { ref, isInView } = useInView();

  return (
    <section className="py-24 bg-gray-50">
      <div ref={ref} className="container mx-auto px-6">
        {/* Section Header */}
        <div
          className={`mb-16 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-[#22b5f8] font-bold text-sm tracking-[0.2em] uppercase">
            {t("featurePage.content.capabilities.badge")}
          </span>
          <h2 className="text-4xl md:text-5xl font-black mt-4">
            {t("featurePage.content.capabilities.title")}
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 md:grid-rows-2 gap-6 h-auto md:h-[600px]">
          {/* AI Image Studio - Large Card */}
          <div
            className={`md:col-span-4 md:row-span-2 group bg-white border border-gray-100 rounded-4xl p-10 overflow-hidden relative shadow-sm hover:shadow-2xl hover:border-[#22b5f8]/30 transition-all duration-500 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "0.15s" }}
          >
            <div className="relative z-10 flex flex-col h-full">
              <div className="size-16 rounded-2xl bg-[#22b5f8]/10 flex items-center justify-center mb-8">
                <ImageIcon className="w-8 h-8 text-[#22b5f8]" />
              </div>

              <h3 className="text-3xl font-black mb-4">
                {t("featurePage.content.capabilities.aiStudio.title")}
              </h3>

              <p className="text-gray-500 text-lg max-w-sm mb-auto">
                {t("featurePage.content.capabilities.aiStudio.description")}
              </p>

              <div className="flex items-center gap-6 mt-12">
                <Button
                  variant="ghost"
                  className="flex items-center gap-2 text-[#1f3b61] font-bold group/btn p-0 hover:bg-transparent"
                >
                  {t("featurePage.content.capabilities.aiStudio.cta")}
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </Button>

                <span className="text-xs font-black text-[#22b5f8] bg-[#22b5f8]/10 px-3 py-1 rounded-full">
                  {t("featurePage.content.capabilities.aiStudio.badge")}
                </span>
              </div>
            </div>

            {/* Gradient Background Effect */}
            <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-80 h-80 bg-linear-to-br from-[#22b5f8]/15 to-[#008bff]/15 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-1000"></div>

            {/* Decorative Image Grid */}
            <div className="absolute right-10 bottom-0 top-0 w-1/3 flex items-center opacity-20 group-hover:opacity-100 transition-opacity duration-700">
              <div className="grid grid-cols-2 gap-2 transform rotate-12">
                <div className="h-40 w-full bg-linear-to-br from-[#22b5f8]/20 to-[#008bff]/20 rounded-xl"></div>
                <div className="h-32 w-full bg-linear-to-br from-[#008bff]/20 to-[#22b5f8]/20 rounded-xl mt-8"></div>
                <div className="h-32 w-full bg-linear-to-br from-[#22b5f8]/20 to-[#008bff]/20 rounded-xl"></div>
                <div className="h-40 w-full bg-linear-to-br from-[#008bff]/20 to-[#22b5f8]/20 rounded-xl -mt-8"></div>
              </div>
            </div>
          </div>

          {/* Character Consistency Engine - Tall Card */}
          <div
            className={`md:col-span-2 md:row-span-2 group bg-[#1f3b61] rounded-4xl p-10 overflow-hidden relative shadow-sm hover:shadow-2xl transition-all duration-500 text-white ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "0.3s" }}
          >
            <div className="relative z-10 flex flex-col h-full">
              <div className="size-16 rounded-2xl bg-white/10 flex items-center justify-center mb-8">
                <Users className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl font-black mb-4 leading-tight">
                {t("featurePage.content.capabilities.characterEngine.title")}
              </h3>

              <p className="text-white/60 text-sm mb-auto">
                {t("featurePage.content.capabilities.characterEngine.description")}
              </p>

              <div className="mt-12">
                <Button
                  variant="outline"
                  className="bg-white/10 hover:bg-white/20 px-6 py-3 rounded-xl font-bold text-sm transition-colors border border-white/10 text-white"
                >
                  {t("featurePage.content.capabilities.characterEngine.cta")}
                </Button>
              </div>
            </div>

            {/* Decorative Background Blob */}
            <div className="absolute -bottom-10 -right-10 size-48 bg-white/5 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
