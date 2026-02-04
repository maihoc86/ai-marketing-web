import { MultiPlatformHeroSection } from "@/components/features/multi-platform/hero-section";
import { MultiPlatformBenefitsSection } from "@/components/features/multi-platform/benefits-section";
import { MultiPlatformUnifiedInboxSection } from "@/components/features/multi-platform/unified-inbox-section";
import { MultiPlatformContentPlanningSection } from "@/components/features/multi-platform/content-planning-section";
import { MultiPlatformAIAssistantSection } from "@/components/features/multi-platform/ai-assistant-section";
import { MultiPlatformHowItWorksSection } from "@/components/features/multi-platform/how-it-works-section";
import { MultiPlatformUseCasesSection } from "@/components/features/multi-platform/use-cases-section";
import { MultiPlatformCTASection } from "@/components/features/multi-platform/cta-section";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";

export default function MultiPlatformFeaturePage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <MultiPlatformHeroSection />
      <MultiPlatformBenefitsSection />
      <MultiPlatformUnifiedInboxSection />
      <MultiPlatformContentPlanningSection />
      <MultiPlatformAIAssistantSection />
      <MultiPlatformHowItWorksSection />
      <MultiPlatformUseCasesSection />
      <MultiPlatformCTASection />
      <Footer />
    </main>
  );
}
