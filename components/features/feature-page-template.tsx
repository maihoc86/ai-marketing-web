"use client";

import Image from "next/image";
import { ArrowLeft, Check, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LocaleLink } from "@/components/locale-link";
import { useI18n } from "@/lib/i18n";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import { cn } from "@/lib/utils";

interface FeatureItem {
  icon: LucideIcon;
  nameKey: string;
  descKey: string;
}

interface MetricItem {
  value: string;
  labelKey: string;
  noteKey?: string;
}

interface FeaturePageProps {
  featureId: string;
  icon: LucideIcon;
  iconBg: string;
  iconColor: string;
  heroImage: string;
  features: FeatureItem[];
  metrics: MetricItem[];
  screenshotImages?: string[];
}

export function FeaturePageTemplate({
  featureId,
  icon: FeatureIcon,
  iconBg,
  iconColor,
  heroImage,
  features,
  metrics,
  screenshotImages = [],
}: FeaturePageProps) {
  const { t } = useI18n();

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-cyan-100/50 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          {/* Back link */}
          <LocaleLink
            href="/#features"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>{t("featurePage.backToFeatures")}</span>
          </LocaleLink>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <div
                className={cn(
                  "inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6",
                  iconBg
                )}
              >
                <FeatureIcon className={cn("w-8 h-8", iconColor)} />
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                {t(`features.${featureId}.title`)}
              </h1>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {t(`features.${featureId}.desc`)}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-[#ff7900] hover:bg-[#e56b00] text-white font-semibold px-8 rounded-full"
                  asChild
                >
                  <LocaleLink href="/dang-ky">
                    <Sparkles className="w-5 h-5 mr-2" />
                    {t("featurePage.tryFree")}
                  </LocaleLink>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold px-8 rounded-full"
                  asChild
                >
                  <LocaleLink href="/#pricing">{t("featurePage.viewPricing")}</LocaleLink>
                </Button>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={heroImage}
                  alt={t(`features.${featureId}.title`)}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-16 bg-gradient-to-r from-[#008bff] via-[#22b5f8] to-[#5fffec]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {metrics.map((metric, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl sm:text-5xl font-bold text-white mb-2">
                  {metric.value}
                </div>
                <div className="text-white/90 font-medium">
                  {t(metric.labelKey)}
                </div>
                {metric.noteKey && (
                  <div className="text-white/70 text-sm mt-1">
                    {t(metric.noteKey)}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {t("featurePage.keyFeatures")}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t("featurePage.keyFeaturesDesc")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => {
              const ItemIcon = feature.icon;
              return (
                <div
                  key={idx}
                  className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow"
                >
                  <div
                    className={cn(
                      "inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4",
                      iconBg
                    )}
                  >
                    <ItemIcon className={cn("w-6 h-6", iconColor)} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {t(feature.nameKey)}
                  </h3>
                  <p className="text-gray-600">{t(feature.descKey)}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      {screenshotImages.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                {t("featurePage.seeInAction")}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {screenshotImages.map((img, idx) => (
                <div
                  key={idx}
                  className="relative aspect-video rounded-2xl overflow-hidden shadow-lg"
                >
                  <Image
                    src={img}
                    alt={`Screenshot ${idx + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                {t(`featurePage.${featureId}.benefitsTitle`)}
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                {t(`featurePage.${featureId}.benefitsDesc`)}
              </p>

              <ul className="space-y-4">
                {[1, 2, 3, 4].map((num) => {
                  const benefitKey = `featurePage.${featureId}.benefit${num}`;
                  const benefitText = t(benefitKey);
                  if (benefitText === benefitKey) return null;
                  return (
                    <li key={num} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center mt-0.5">
                        <Check className="w-4 h-4 text-emerald-600" />
                      </div>
                      <span className="text-gray-700">{benefitText}</span>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="relative">
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={heroImage}
                  alt="Benefits"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#008bff] via-[#22b5f8] to-[#5fffec]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {t("featurePage.ctaTitle")}
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            {t("featurePage.ctaDesc")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-[#008bff] hover:bg-gray-100 font-semibold px-8 rounded-full"
              asChild
            >
              <LocaleLink href="/dang-ky">
                <Sparkles className="w-5 h-5 mr-2" />
                {t("featurePage.startTrial")}
              </LocaleLink>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 font-semibold px-8 rounded-full bg-transparent"
              asChild
            >
              <LocaleLink href="/#features">{t("featurePage.exploreMore")}</LocaleLink>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
