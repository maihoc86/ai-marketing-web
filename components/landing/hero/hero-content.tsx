"use client";

import { LocaleLink } from "@/components/locale-link";
import { Rocket, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DemoButton } from "@/components/youtube-modal";
import { useI18n } from "@/lib/i18n";
import { DashboardMockup } from "./dashboard-mockup";
import { TechShowcase } from "./tech-showcase";
import {
  UserSocialProof,
  CTATrustSignals,
  ValuePropositions,
} from "./trust-signals";

export function HeroContent() {
  const { t } = useI18n();

  return (
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      {/* Left Column - Text Content */}
      <div className="text-center lg:text-left order-2 lg:order-1">
        {/* Badge */}
        {/* <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-linear-to-r from-[#5fffec]/10 to-[#008bff]/10 border border-[#22b5f8]/30 mb-6 animate-fade-in">
          <Rocket className="w-4 h-4 text-[#22b5f8]" />
          <span className="text-sm font-semibold text-[#008bff]">
            {t("hero.badge")}
          </span>
        </div> */}

        {/* Main Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-extrabold leading-tight mb-6 text-balance">
          <span className="bg-linear-to-r from-[#5fffec] to-[#008bff] bg-clip-text text-transparent">
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
            className="text-base h-14 px-8 rounded-full bg-[#ff7900] hover:bg-[#e56b00] shadow-lg shadow-[#ff7900]/30 gap-2 transition-all duration-300 hover:shadow-xl hover:shadow-[#ff7900]/40 hover:-translate-y-0.5"
            asChild
          >
            <LocaleLink href="/dang-ky">
              <Sparkles className="w-5 h-5" />
              {t("hero.cta.trial")}
            </LocaleLink>
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
  );
}

// ============================================================
// HERO BOTTOM SECTION - Tech Showcase
// ============================================================
export function HeroBottom() {
  return (
    <div className="mt-16 md:mt-24">
      <TechShowcase />
    </div>
  );
}
