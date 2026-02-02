"use client";

import { Rocket, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LocaleLink } from "@/components/locale-link";
import { useI18n } from "@/lib/i18n";
import { useInView } from "@/hooks/use-in-view";

export function TrendsCtaSection() {
  const { t } = useI18n();
  const { ref, isInView } = useInView();

  return (
    <section className="py-24 bg-white">
      <div ref={ref} className="container mx-auto px-4">
        <div
          className={`bg-gradient-to-br from-primary/10 via-[#5fffec]/5 to-primary/5 border border-primary/20 rounded-3xl p-10 md:p-16 max-w-4xl mx-auto text-center relative overflow-hidden transition-all duration-700 ${
            isInView ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          {/* Abstract Background pattern */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#5fffec]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center gap-6">
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight">
              {t("featurePage.trends.cta.title")}
            </h2>
            <p className="text-gray-600 max-w-lg text-lg">
              {t("featurePage.trends.cta.subtitle")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full justify-center">
              <Button
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-white font-bold px-8 py-4 rounded-xl text-lg shadow-lg hover:shadow-secondary/30 transition-all flex items-center justify-center gap-2"
                asChild
              >
                <LocaleLink href="/register">
                  {t("featurePage.trends.cta.getStarted")}
                  <Rocket className="w-5 h-5" />
                </LocaleLink>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white hover:bg-gray-50 text-gray-900 border border-gray-200 font-semibold px-8 py-4 rounded-xl text-lg transition-all flex items-center justify-center gap-2"
                asChild
              >
                <LocaleLink href="/#pricing">
                  {t("featurePage.trends.cta.viewPricing")}
                </LocaleLink>
              </Button>
            </div>

            <p className="text-xs text-gray-500 mt-4 uppercase tracking-wider">
              {t("featurePage.trends.cta.note")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
