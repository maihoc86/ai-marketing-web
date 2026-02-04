"use client";

import { AdsHeroSection } from "@/components/features/ads/hero-section";
import { AdsBenefitsSection } from "@/components/features/ads/benefits-section";
import { AdsUnifiedDashboardSection } from "@/components/features/ads/unified-dashboard-section";
import { AdsAIEngineSection } from "@/components/features/ads/ai-engine-section";
import { AdsMetricsGridSection } from "@/components/features/ads/metrics-grid-section";
import { AdsHowItWorksSection } from "@/components/features/ads/how-it-works-section";
import { AdsUseCasesSection } from "@/components/features/ads/use-cases-section";
import { FeatureCtaSection } from "@/components/features/common/feature-cta-section";
import { BarChart3, Sparkles } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";

export default function AdsFeaturePage() {
  const { t } = useI18n();

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <AdsHeroSection />
      <AdsBenefitsSection />
      <AdsUnifiedDashboardSection />
      <AdsAIEngineSection />
      <AdsMetricsGridSection />
      <AdsHowItWorksSection />
      <AdsUseCasesSection />
      <FeatureCtaSection
        icon={BarChart3}
        title={t("featurePage.ads.cta.title")}
        subtitle={t("featurePage.ads.cta.subtitle")}
        primaryButtonText={t("featurePage.ads.cta.trial")}
        primaryButtonIcon={Sparkles}
        primaryButtonHref="/register"
        secondaryButtonText={t("featurePage.ads.cta.contact")}
        secondaryButtonHref="/contact"
        trustNote={t("featurePage.ads.cta.trustNote")}
      />
      <Footer />
    </main>
  );
}
