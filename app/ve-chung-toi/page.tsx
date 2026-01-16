import { Navbar } from "@/components/landing/navbar"
import { Footer } from "@/components/landing/footer"
import { AboutHeroSection } from "@/components/about/hero-section"
import { CompanySection } from "@/components/about/company-section"
import { ProductSection } from "@/components/about/product-section"
import { AboutCtaSection } from "@/components/about/cta-section"

export const metadata = {
  title: "Về Chúng Tôi | AI Marketing OS - Tiên Phong CDS",
  description:
    "Tìm hiểu về Tiên Phong CDS và DXAI - AI Marketing OS. Đối tác chuyển đổi số đa kênh hàng đầu, thúc đẩy sự tăng trưởng của doanh nghiệp Việt Nam.",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <AboutHeroSection />
      <CompanySection />
      <ProductSection />
      <AboutCtaSection />
      <Footer />
    </main>
  )
}
