"use client";

import { useI18n } from "@/lib/i18n";
import { LocaleLink } from "@/components/locale-link";

export function MultiPlatformCTASection() {
  const { t } = useI18n();

  return (
    <section className="py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-primary/15 to-secondary/10 p-12 text-center border border-primary/10 shadow-sm">
          <h2 className="text-3xl font-extrabold text-[#0d171c] sm:text-4xl lg:text-5xl mb-6">
            {t("featurePage.multiPlatform.cta.title.part1")}{" "}
            <span className="text-primary">
              {t("featurePage.multiPlatform.cta.title.highlight")}
            </span>{" "}
            {t("featurePage.multiPlatform.cta.title.part2")}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 mb-10">
            {t("featurePage.multiPlatform.cta.subtitle")}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <LocaleLink href="/register">
              <button className="w-full sm:w-auto h-14 px-8 rounded-xl bg-primary text-white font-bold text-lg shadow-lg hover:shadow-primary/30 hover:bg-primary/90 transition-all hover:scale-105">
                {t("featurePage.multiPlatform.cta.trial")}
              </button>
            </LocaleLink>
            <button className="w-full sm:w-auto h-14 px-8 rounded-xl border-2 border-[#0d171c] text-[#0d171c] bg-transparent font-bold text-lg hover:bg-[#0d171c] hover:text-white transition-all">
              {t("featurePage.multiPlatform.cta.contact")}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
