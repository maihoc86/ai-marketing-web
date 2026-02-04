"use client";

import { useI18n } from "@/lib/i18n";
import { Share2, Sparkles } from "lucide-react";
import { FeatureCtaSection } from "@/components/features/common/feature-cta-section";

export function MultiPlatformCTASection() {
  const { t } = useI18n();

  return (
    <FeatureCtaSection
      icon={Share2}
      title={
        <>
          {t("featurePage.multiPlatform.cta.title.part1")}{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/80">
            {t("featurePage.multiPlatform.cta.title.highlight")}
          </span>{" "}
          {t("featurePage.multiPlatform.cta.title.part2")}
        </>
      }
      subtitle={t("featurePage.multiPlatform.cta.subtitle")}
      primaryButtonText={t("featurePage.multiPlatform.cta.trial")}
      primaryButtonIcon={Sparkles}
      secondaryButtonText={t("featurePage.multiPlatform.cta.contact")}
      trustNote={`${t("featurePage.multiPlatform.hero.feature1")} • ${t("featurePage.multiPlatform.hero.feature2")}`}
    />
  );
}
