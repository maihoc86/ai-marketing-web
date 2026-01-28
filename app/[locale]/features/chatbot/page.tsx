"use client";

import { ChatbotHeroSection } from "@/components/features/chatbot/hero-section";
import { ChatbotProblemsSection } from "@/components/features/chatbot/problems-section";
import { ChatbotCapabilitiesBentoSection } from "@/components/features/chatbot/capabilities-bento-section";
import { ChatbotDemoSection } from "@/components/features/chatbot/demo-section";
import { ChatbotStepsSection } from "@/components/features/chatbot/steps-section";
import { ChatbotIndustriesSection } from "@/components/features/chatbot/industries-section";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";

export default function ChatbotFeaturePage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <ChatbotHeroSection />

      {/* Problems & Solutions Comparison */}
      <ChatbotProblemsSection />

      {/* Core Capabilities - Bento Grid */}
      <ChatbotCapabilitiesBentoSection />

      {/* Live Demo Section */}
      <ChatbotDemoSection />

      {/* Get Started Steps */}
      <ChatbotStepsSection />

      {/* Industry Use Cases */}
      <ChatbotIndustriesSection />

      <Footer />
    </main>
  );
}
