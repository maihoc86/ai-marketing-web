import { EmailHeroSection } from "@/components/features/email/hero-section";
import { EmailBenefitsSection } from "@/components/features/email/benefits-section";
import { EmailJourneyTimelineSection } from "@/components/features/email/journey-timeline-section";
import { EmailHowItWorksSection } from "@/components/features/email/how-it-works-section";
import { EmailTechnicalCapabilitiesSection } from "@/components/features/email/technical-capabilities-section";
import { EmailUseCasesSection } from "@/components/features/email/use-cases-section";
import { EmailCTASection } from "@/components/features/email/cta-section";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";

export default function EmailFeaturePage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <EmailHeroSection />
      <EmailBenefitsSection />
      <EmailJourneyTimelineSection />
      <EmailHowItWorksSection />
      <EmailTechnicalCapabilitiesSection />
      <EmailUseCasesSection />
      <EmailCTASection />
      <Footer />
    </main>
  );
}
