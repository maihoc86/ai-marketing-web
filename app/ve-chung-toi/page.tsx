import { Navbar } from "@/components/landing/navbar"
import { Footer } from "@/components/landing/footer"
import { HeroProfessional } from "@/components/about/hero-professional"
import { PhilosophySection } from "@/components/about/philosophy-section"
import { WhyChooseEnterprise } from "@/components/about/why-choose-enterprise"
import { WorkflowTimeline } from "@/components/about/workflow-timeline"
// import { DashboardShowcase } from "@/components/about/dashboard-showcase"
import { ProductEnterprise } from "@/components/about/product-enterprise"
import { FinalCtaSection } from "@/components/about/final-cta-section"

export const metadata = {
  title: "Về Chúng Tôi | DXAI Marketing Platform - Tiên Phong CDS",
  description:
    "Tìm hiểu về Tiên Phong CDS và DXAI Marketing Platform. Nền tảng marketing AI tiên phong với triết lý AI-First, thúc đẩy chuyển đổi số toàn diện và tối ưu hóa hiệu suất Marketing tự động.",
  keywords:
    "DXAI, DXAI Marketing Platform, Tiên Phong CDS, AI Marketing, chuyển đổi số, tự động hóa marketing, AI-First, marketing automation, enterprise AI",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#f5f7f8]">
      <Navbar />
      <HeroProfessional />
      <PhilosophySection />
      <WhyChooseEnterprise />
      <WorkflowTimeline />
      <ProductEnterprise />
      <FinalCtaSection />
      <Footer />
    </main>
  )
}
