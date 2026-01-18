"use client"

import { BrandIcons } from "./hero/brand-icons"
import { HeroContent } from "./hero/hero-content"
import { ProcessFlow } from "./hero/process-flow"

export function HeroSection() {
  return (
    <section className="pt-24 pb-20 md:pt-28 md:pb-32 relative overflow-hidden">
      <BrandIcons />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <HeroContent />
        <ProcessFlow />
      </div>
    </section>
  )
}
