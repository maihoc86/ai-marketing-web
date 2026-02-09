import Header from "@/components/header";
import HeroSection from "@/components/sections/hero-section";
import PhotoboothSection from "@/components/sections/photobooth-section";
import FeaturesSection from "@/components/sections/features-section";
import WhySection from "@/components/sections/why-section";
import ProcessSection from "@/components/sections/process-section";
import ContentStrategySection from "@/components/sections/content-strategy-section";
import PricingSection from "@/components/sections/pricing-section";
import FAQSection from "@/components/sections/faq-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <PhotoboothSection />
      <FeaturesSection />
      <WhySection />
      <ProcessSection />
      <ContentStrategySection />
      <PricingSection />
      <FAQSection />
      <Footer />
    </main>
  );
}
