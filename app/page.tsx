import dynamic from "next/dynamic"
import { HeroSection } from "@/components/landing/hero-section"
import { Navbar } from "@/components/landing/navbar"
import { CtaModalWrapper } from "@/components/cta-modal-wrapper"

// Lazy load below-the-fold sections
const WhyChooseSection = dynamic(
  () => import("@/components/landing/why-choose-section").then((m) => ({ default: m.WhyChooseSection })),
  {
    loading: () => <div className="h-screen" />,
  },
)
const FeaturesSection = dynamic(
  () => import("@/components/landing/features-section").then((m) => ({ default: m.FeaturesSection })),
  {
    loading: () => <div className="h-screen" />,
  },
)
const PricingSection = dynamic(
  () => import("@/components/landing/pricing-section").then((m) => ({ default: m.PricingSection })),
  {
    loading: () => <div className="h-screen" />,
  },
)
const TestimonialsSection = dynamic(
  () => import("@/components/landing/testimonials-section").then((m) => ({ default: m.TestimonialsSection })),
  {
    loading: () => <div className="h-screen" />,
  },
)
const RoiSection = dynamic(() => import("@/components/landing/roi-section").then((m) => ({ default: m.RoiSection })), {
  loading: () => <div className="h-screen" />,
})
const TrustedBusinessesSection = dynamic(
  () =>
    import("@/components/landing/trusted-businesses-section").then((m) => ({ default: m.TrustedBusinessesSection })),
  {
    loading: () => <div className="h-64" />,
  },
)
const FaqSection = dynamic(() => import("@/components/landing/faq-section").then((m) => ({ default: m.FaqSection })), {
  loading: () => <div className="h-screen" />,
})
const CtaSection = dynamic(() => import("@/components/landing/cta-section").then((m) => ({ default: m.CtaSection })), {
  loading: () => <div className="h-screen" />,
})
const Footer = dynamic(() => import("@/components/landing/footer").then((m) => ({ default: m.Footer })), {
  loading: () => <div className="h-screen" />,
})

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <WhyChooseSection />
      <FeaturesSection />
      <PricingSection />
      <TestimonialsSection />
      <RoiSection />
      <TrustedBusinessesSection />
      <FaqSection />
      <CtaSection />
      <Footer />
      <CtaModalWrapper />
    </main>
  )
}
