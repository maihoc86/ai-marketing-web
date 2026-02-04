"use client";

import { LucideIcon } from "lucide-react";
import { LocaleLink } from "@/components/locale-link";
import { ReactNode } from "react";

interface FeatureCtaSectionProps {
  icon: LucideIcon;
  title: string | ReactNode;
  subtitle: string;
  primaryButtonText: string;
  primaryButtonIcon?: LucideIcon;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  trustNote?: string;
}

export function FeatureCtaSection({
  icon: Icon,
  title,
  subtitle,
  primaryButtonText,
  primaryButtonIcon: PrimaryIcon,
  primaryButtonHref = "/register",
  secondaryButtonText,
  secondaryButtonHref,
  trustNote,
}: FeatureCtaSectionProps) {
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
            <Icon className="size-10 text-white" />
          </div>

          {/* Title with Gradient Text */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-6 leading-[1.1]">
            {title}
          </h2>

          {/* Subtitle */}
          <p className="text-xl text-white/90 mb-10 max-w-xl mx-auto leading-relaxed">
            {subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <LocaleLink href={primaryButtonHref}>
              <button className="w-full sm:w-auto bg-white text-[#008bff] hover:bg-gray-100 font-bold px-10 py-6 rounded-full shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all flex items-center justify-center gap-2">
                {PrimaryIcon && <PrimaryIcon className="w-5 h-5" />}
                {primaryButtonText}
              </button>
            </LocaleLink>
            {secondaryButtonText &&
              (secondaryButtonHref ? (
                <LocaleLink href={secondaryButtonHref}>
                  <button className="w-full sm:w-auto bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold px-10 py-6 rounded-full shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all">
                    {secondaryButtonText}
                  </button>
                </LocaleLink>
              ) : (
                <button className="w-full sm:w-auto bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold px-10 py-6 rounded-full shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all">
                  {secondaryButtonText}
                </button>
              ))}
          </div>

          {/* Trust Note */}
          {trustNote && (
            <p className="mt-8 text-white/70 text-sm">{trustNote}</p>
          )}
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
