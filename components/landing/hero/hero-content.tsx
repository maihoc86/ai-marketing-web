"use client"

import Link from "next/link"
import { Rocket, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DemoButton } from "@/components/youtube-modal"
import { useI18n } from "@/lib/i18n"
import { DashboardMockup } from "./dashboard-mockup"
import { TechShowcase } from "./tech-showcase"
import { UserSocialProof, CTATrustSignals, ValuePropositions } from "./trust-signals"

export function HeroContent() {
  const { t } = useI18n()

  return (
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      {/* Left Column - Text Content */}
      <div className="text-center lg:text-left order-2 lg:order-1">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-blue-50 border border-blue-200 mb-6 animate-fade-in">
          <Rocket className="w-4 h-4 text-blue-600" />
          <span className="text-sm font-semibold text-blue-700">{t("hero.badge")}</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-extrabold leading-tight mb-6 text-balance">
          <span className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 bg-clip-text text-transparent">
            {t("hero.title.line1")}
          </span>{" "}
          <br className="hidden sm:block" />
          <span className="text-gray-900">{t("hero.title.line2")}</span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-xl mx-auto lg:mx-0 mb-8 text-pretty leading-relaxed">
          {t("hero.subtitle")}
        </p>

        {/* Value Propositions */}
        <div className="mb-8">
          <ValuePropositions />
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mb-6">
          <Button
            size="lg"
            className="text-base h-14 px-8 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg shadow-blue-600/30 gap-2 transition-all duration-300 hover:shadow-xl hover:shadow-blue-600/40 hover:-translate-y-0.5"
            asChild
          >
            <Link href="/dang-ky">
              <Sparkles className="w-5 h-5" />
              {t("hero.cta.trial")}
            </Link>
          </Button>
          <DemoButton />
        </div>

        {/* CTA Trust Signals */}
        <CTATrustSignals />

        {/* User Social Proof */}
        <div className="mt-8 flex justify-center lg:justify-start">
          <UserSocialProof />
        </div>
      </div>

      {/* Right Column - Dashboard Mockup */}
      <div className="order-1 lg:order-2">
        <DashboardMockup />
      </div>
    </div>
  )
}

// ============================================================
// HERO BOTTOM SECTION - Tech Showcase
// ============================================================
export function HeroBottom() {
  return (
    <div className="mt-16 md:mt-24">
      <TechShowcase />
    </div>
  )
}
