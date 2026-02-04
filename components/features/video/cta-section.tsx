"use client";

import { Sparkles, Video } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { FeatureCtaSection } from "@/components/features/common/feature-cta-section";

export function VideoCtaSection() {
  const { t } = useI18n();

  return (
    <FeatureCtaSection
      icon={Video}
      title={
        <>
          {t("featurePage.video.cta.title1")}{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/80">
            {t("featurePage.video.cta.title2")}
          </span>
        </>
      }
      subtitle={t("featurePage.video.cta.subtitle")}
      primaryButtonText={t("featurePage.video.cta.button")}
      primaryButtonIcon={Sparkles}
      trustNote={t("featurePage.video.cta.note")}
    />
  );
}
