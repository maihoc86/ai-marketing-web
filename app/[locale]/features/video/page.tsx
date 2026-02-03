"use client";

import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import {
  VideoHeroSection,
  VideoCapabilitiesSection,
  VideoWorkflowSection,
  VideoTestimonialsSection,
  VideoBentoFeaturesSection,
  VideoFAQSection,
  VideoCtaSection,
} from "@/components/features/video";

export default function VideoFeaturePage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <VideoHeroSection />
      <VideoCapabilitiesSection />
      <VideoWorkflowSection />
      <VideoTestimonialsSection />
      <VideoBentoFeaturesSection />
      <VideoFAQSection />
      <VideoCtaSection />
      <Footer />
    </main>
  );
}
