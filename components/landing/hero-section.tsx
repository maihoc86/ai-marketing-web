"use client";

import { BrandIcons } from "./hero/brand-icons";
import { HeroContent, HeroBottom } from "./hero/hero-content";
import { ProcessFlow } from "./hero/process-flow";

export function HeroSection() {
  return (
    <section className="pt-24 pb-16 md:pt-28 md:pb-24 relative overflow-hidden">
      <BrandIcons />

      <div className="container mx-auto relative z-10">
        <HeroContent />
        <HeroBottom />
        <ProcessFlow />
      </div>

      {/* Global CSS Animations */}
      <style jsx global>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
