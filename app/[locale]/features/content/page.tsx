"use client";

import { AIContentHeroSection } from "@/components/features/ai-content/hero-section";
import { AIContentProblemsSection } from "@/components/features/ai-content/problems-section";
import { AIContentCapabilitiesBentoSection } from "@/components/features/ai-content/capabilities-bento-section";
import { AIContentDemoSection } from "@/components/features/ai-content/demo-section";
import { AIContentGallerySection } from "@/components/features/ai-content/gallery-section";
import { AIContentStepsSection } from "@/components/features/ai-content/steps-section";
import { AIContentMarketingNeedsSection } from "@/components/features/ai-content/marketing-needs-section";
import { AIContentMetricsSection } from "@/components/features/ai-content/metrics-section";
import { AIContentComparisonSection } from "@/components/features/ai-content/comparison-section";
import { AIContentCTASection } from "@/components/features/ai-content/cta-section";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";

export default function AIContentFeaturePage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* 1. Hero - First impression, value proposition */}
      <AIContentHeroSection />

      {/* 2. Marketing Needs - Use cases: what you can do */}
      <AIContentMarketingNeedsSection />

      {/* 3. Problems vs Solutions - Why you need it */}
      <AIContentProblemsSection />

      {/* 4. Interactive Demo - Proof of concept */}
      <AIContentDemoSection />

      {/* 5. Studio Capabilities - Feature deep dive */}
      <AIContentCapabilitiesBentoSection />

      {/* 6. Metrics - Social proof with numbers */}
      <AIContentMetricsSection />

      {/* 7. Before/After Comparison - Visual proof */}
      <AIContentComparisonSection />

      {/* 8. Gallery - Portfolio showcase */}
      <AIContentGallerySection />

      {/* 9. How to Get Started - 3 simple steps */}
      <AIContentStepsSection />

      {/* 10. CTA - Final conversion */}
      <AIContentCTASection />

      <Footer />
    </main>
  );
}
