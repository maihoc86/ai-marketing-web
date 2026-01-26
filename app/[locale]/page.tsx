import dynamic from "next/dynamic"
import { HeroLightTheme } from "@/components/landing/hero-light-theme"
import { Navbar } from "@/components/landing/navbar"
import { CtaModalWrapper } from "@/components/cta-modal-wrapper"

// Lazy load below-the-fold sections - OPTURA Style
const FeaturesSection = dynamic(
  () => import("@/components/landing/features-section").then((m) => ({ default: m.FeaturesSection })),
  {
    loading: () => <div className="h-screen bg-white animate-pulse" />,
  },
)
const PricingEnterpriseStyle = dynamic(
  () => import("@/components/landing/pricing-enterprise-style").then((m) => ({ default: m.PricingEnterpriseStyle })),
  {
    loading: () => <div className="h-screen bg-white animate-pulse" />,
  },
)
const TestimonialsOpturaStyle = dynamic(
  () => import("@/components/landing/testimonials-optura-style").then((m) => ({ default: m.TestimonialsOpturaStyle })),
  {
    loading: () => <div className="h-screen bg-gradient-optura animate-pulse" />,
  },
)
const RoiSection = dynamic(() => import("@/components/landing/roi-section").then((m) => ({ default: m.RoiSection })), {
  loading: () => <div className="h-screen" />,
})
// const TrustedBusinessesSection = dynamic(
//   () =>
//     import("@/components/landing/trusted-businesses-section").then((m) => ({ default: m.TrustedBusinessesSection })),
//   {
//     loading: () => <div className="h-64" />,
//   },
// )
const FaqOpturaStyle = dynamic(
  () => import("@/components/landing/faq-optura-style").then((m) => ({ default: m.FaqOpturaStyle })),
  {
    loading: () => <div className="h-screen bg-gradient-optura-subtle animate-pulse" />,
  },
)
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
      <HeroLightTheme />
      <FeaturesSection />
      <PricingEnterpriseStyle />
      <TestimonialsOpturaStyle />
      <RoiSection />
      {/* <TrustedBusinessesSection /> */}
      <FaqOpturaStyle />
      <CtaSection />
      <Footer />
      <CtaModalWrapper />
    </main>
  )
}
