"use client";

import { useI18n } from "@/lib/i18n";
import { Mail, Sparkles } from "lucide-react";
import { FeatureCtaSection } from "@/components/features/common/feature-cta-section";

export function EmailCTASection() {
  const { t } = useI18n();

  return (
    <FeatureCtaSection
      icon={Mail}
      title={t("featurePage.email.cta.title")}
      subtitle={t("featurePage.email.cta.subtitle")}
      primaryButtonText={t("featurePage.email.cta.trial")}
      primaryButtonIcon={Sparkles}
      secondaryButtonText={t("featurePage.email.cta.sales")}
    />
  );
}
