"use client";

import { LocaleLink } from "@/components/locale-link";
import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";

export function FinalCtaSection() {
  const { t } = useI18n();

  return (
    <section className="py-24 bg-linear-to-br from-[#008bff] via-[#22b5f8] to-[#5fffec] relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000" />

      {/* Dot pattern overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-6">
          <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
          <span className="text-sm font-bold text-white uppercase tracking-wider">
            {t("about.finalCta.badge")}
          </span>
        </div>

        {/* Main Heading */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
          {t("about.finalCta.title.prefix")}
          <span className="bg-linear-to-r from-white/90 to-[#5fffec] bg-clip-text text-transparent">
            {t("about.finalCta.title.highlight")}
          </span>
          {t("about.finalCta.title.suffix")}
        </h2>

        {/* Description */}
        <p className="text-lg sm:text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
          {t("about.finalCta.description")}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            className="bg-white text-[#ff7900] hover:bg-gray-50 font-bold px-8 py-6 rounded-xl text-base shadow-xl hover:shadow-2xl transition-all"
            asChild
          >
            <LocaleLink
              href="/register"
              className="flex items-center justify-center gap-2"
            >
              {t("about.finalCta.cta.demo")}
              <ArrowRight className="w-5 h-5" />
            </LocaleLink>
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="border-2 border-white text-white hover:bg-white/10 font-bold px-8 py-6 rounded-xl text-base transition-all bg-transparent backdrop-blur-sm"
            asChild
          >
            <LocaleLink
              href="/register"
              className="flex items-center justify-center gap-2"
            >
              {t("about.finalCta.cta.roadmap")}
              <Download className="w-5 h-5" />
            </LocaleLink>
          </Button>
        </div>

        {/* Trust indicators */}
        <div className="flex flex-wrap items-center justify-center gap-8 mt-12 text-white/80">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-sm font-semibold">
              {t("about.finalCta.trust.noCard")}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-sm font-semibold">
              {t("about.finalCta.trust.setup")}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-sm font-semibold">
              {t("about.finalCta.trust.support")}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
