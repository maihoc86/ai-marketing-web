"use client";

import { Sparkles, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LocaleLink } from "@/components/locale-link";
import { useI18n } from "@/lib/i18n";

export function VideoCtaSection() {
  const { t } = useI18n();

  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#008bff] via-[#22b5f8] to-[#5fffec]" />

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-60 h-60 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-white/5 rounded-full blur-2xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          {/* Animated Icon */}
          <div className="inline-flex items-center justify-center size-20 bg-white/20 backdrop-blur-sm rounded-2xl mb-8 animate-float">
            <Video className="size-10 text-white" />
          </div>

          {/* Title with Gradient Text */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-6 leading-[1.1]">
            {t("featurePage.video.cta.title1")}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/80">
              {t("featurePage.video.cta.title2")}
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-xl text-white/90 mb-10 max-w-xl mx-auto leading-relaxed">
            {t("featurePage.video.cta.subtitle")}
          </p>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-[#008bff] hover:bg-gray-100 font-bold px-10 py-6 rounded-full shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all"
              asChild
            >
              <LocaleLink href="/register">
                <Sparkles className="w-5 h-5 mr-2" />
                {t("featurePage.video.cta.button")}
              </LocaleLink>
            </Button>
          </div>

          {/* Trust Note */}
          <p className="mt-8 text-white/70 text-sm">
            {t("featurePage.video.cta.note")}
          </p>
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx global>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-12px);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
