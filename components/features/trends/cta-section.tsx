"use client";

import { Rocket, Sparkles } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { FeatureCtaSection } from "@/components/features/common/feature-cta-section";

export function TrendsCtaSection() {
  const { t } = useI18n();

  return (
    <FeatureCtaSection
      icon={Rocket}
      title={t("featurePage.trends.cta.title")}
      subtitle={t("featurePage.trends.cta.subtitle")}
      primaryButtonText={t("featurePage.trends.cta.getStarted")}
      primaryButtonIcon={Sparkles}
      trustNote={t("featurePage.trends.cta.note")}
    />
  );
}
