"use client";

import { useI18n } from "@/lib/i18n";
import { LocaleLink } from "@/components/locale-link";

export function EmailCTASection() {
  const { t } = useI18n();

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-secondary text-center px-6 py-16 md:py-20 shadow-2xl">
          {/* Background Pattern */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

          {/* Gradient Blurs */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary rounded-full blur-[100px] opacity-50"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-secondary rounded-full blur-[100px] opacity-50"></div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
              {t("featurePage.email.cta.title")}
            </h2>
            <p className="text-white/90 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
              {t("featurePage.email.cta.subtitle")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <LocaleLink
                href="/register"
                className="h-14 px-8 rounded-xl bg-white text-primary font-bold text-lg hover:bg-gray-50 transition-colors shadow-lg inline-flex items-center justify-center"
              >
                {t("featurePage.email.cta.trial")}
              </LocaleLink>
              <button className="h-14 px-8 rounded-xl bg-transparent border-2 border-white/30 text-white font-bold text-lg hover:bg-white/10 transition-colors">
                {t("featurePage.email.cta.sales")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
