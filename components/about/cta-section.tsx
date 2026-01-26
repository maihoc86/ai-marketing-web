"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";

export function AboutCtaSection() {
  const { t } = useI18n();

  return (
    <section className="py-20 bg-linear-to-br from-[#008bff] via-[#22b5f8] to-[#5fffec] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl" />

      {/* Dot pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
          {t("about.cta.title")}
          <br />
          <span className="text-white/80">{t("about.cta.subtitle")}</span>
        </h2>

        <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
          {t("about.cta.description")}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            className="bg-white text-[#ff7900] hover:bg-gray-50 font-semibold px-8 py-6 rounded-xl text-base transition-all"
            asChild
          >
            <Link href="/dang-ky" className="flex items-center gap-2">
              {t("about.cta.trial")}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="border-2 border-white text-white hover:bg-white/10 font-semibold px-8 py-6 rounded-xl text-base transition-all bg-transparent"
            asChild
          >
            <Link href="/dang-ky">{t("about.cta.contact")}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
