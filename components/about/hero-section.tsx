"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useI18n } from "@/lib/i18n"

export function AboutHeroSection() {
  const { t } = useI18n()

  return (
    <section className="relative pt-28 pb-16 overflow-hidden">
      <div className="absolute inset-0 bg-white" />

      <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl" />
      <div className="absolute top-40 right-1/4 w-80 h-80 bg-blue-50/40 rounded-full blur-3xl" />

      {/* Dot pattern */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `radial-gradient(circle, #d1d5db 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">{t("about.hero.title")}</h1>

        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-4">
          <span className="font-semibold text-blue-600">{t("about.hero.subtitle")}</span>
        </p>
        <p className="text-base text-gray-500 max-w-2xl mx-auto mb-10">{t("about.hero.description")}</p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Button
            size="lg"
            className="bg-blue-600 text-white hover:bg-blue-700 font-semibold px-8 py-6 rounded-xl text-base"
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
            className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold px-8 py-6 rounded-xl text-base bg-transparent"
            asChild
          >
            <Link href="/dang-ky">{t("about.cta.contact")}</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
