"use client"

import Link from "next/link"
import { Rocket, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DemoButton } from "@/components/youtube-modal"
import { useI18n } from "@/lib/i18n"

export function HeroContent() {
  const { t } = useI18n()

  return (
    <div className="text-center max-w-4xl mx-auto">
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 border border-blue-200 mb-6">
        <Rocket className="w-4 h-4 text-blue-600" />
        <span className="text-sm font-semibold text-blue-700">{t("hero.badge")}</span>
      </div>

      <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 text-balance">
        <span className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 bg-clip-text text-transparent">
          {t("hero.title.line1")}
        </span>{" "}
        <br className="hidden md:block" />
        <span className="text-gray-900">{t("hero.title.line2")}</span>
      </h1>

      <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 text-pretty">
        {t("hero.subtitle")}
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Button
          size="lg"
          className="text-base h-12 px-8 rounded-full bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-600/30 gap-2"
          asChild
        >
          <Link href="/dang-ky">
            <Sparkles className="w-5 h-5" />
            {t("hero.cta.trial")}
          </Link>
        </Button>
        <DemoButton />
      </div>
    </div>
  )
}
