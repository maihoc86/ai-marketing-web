"use client";

import { Sparkles, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LocaleLink } from "@/components/locale-link";
import { useI18n } from "@/lib/i18n";
import { useInView } from "@/hooks/use-in-view";

export function AIContentCTASection() {
  const { t } = useI18n();
  const { ref, isInView } = useInView();

  return (
    <section className="py-24 bg-gray-50">
      <div ref={ref} className="container mx-auto px-6">
        <div
          className={`bg-[#1f3b61] text-white rounded-3xl p-12 md:p-16 text-center relative overflow-hidden shadow-2xl max-w-5xl mx-auto transition-all duration-700 ${
            isInView ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          {/* Dot Grid Background Pattern */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: "radial-gradient(#fff 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          ></div>

          {/* Gradient Blobs */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#22b5f8]/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#008bff]/20 rounded-full blur-3xl"></div>

          {/* Content */}
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-black mb-6">
              {t("featurePage.content.cta.title")}
            </h2>
            <p className="text-lg text-gray-300 mb-10 max-w-xl mx-auto">
              {t("featurePage.content.cta.description")}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="px-8 py-4 bg-[#ff7900] hover:bg-[#e06c00] text-white font-bold rounded-xl hover:scale-105 transition-transform shadow-xl flex items-center justify-center gap-2"
                asChild
              >
                <LocaleLink href="/register">
                  <Sparkles className="w-5 h-5" />
                  {t("featurePage.content.cta.startTrial")}
                </LocaleLink>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-4 bg-white/10 text-white font-bold rounded-xl hover:bg-white/20 transition-all border border-white/20 flex items-center justify-center gap-2"
              >
                <Calendar className="w-5 h-5" />
                {t("featurePage.content.cta.bookDemo")}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
