"use client";

import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import {
  TrendsHeroSection,
  TrendsCapabilitiesBentoSection,
  TrendsWorkflowSection,
  TrendsStatsSection,
  TrendsTestimonialsSection,
  TrendsIntegrationsSection,
  // TrendsTechSpecsSection,
  TrendsCtaSection,
} from "@/components/features/trends";

export default function TrendsFeaturePage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section - AI Powered Intelligence */}
      <TrendsHeroSection />

      {/* Bento Grid Capabilities */}
      <TrendsCapabilitiesBentoSection />

      {/* Process Workflow Section */}
      <TrendsWorkflowSection />

      {/* Stats/Results Section */}
      <TrendsStatsSection />

      {/* Testimonials Section */}
      <TrendsTestimonialsSection />

      {/* Integrations Section */}
      <TrendsIntegrationsSection />

      {/* Tech Specs / Under the Hood */}
      {/* <TrendsTechSpecsSection /> */}

      {/* CTA Section */}
      <TrendsCtaSection />

      <Footer />
    </main>
  );
}
