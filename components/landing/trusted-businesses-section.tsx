"use client"

import { useEffect, useRef, useState } from "react"
import { ShoppingBag, ShoppingCart, Building2, Factory, Shield, CheckCircle2 } from "lucide-react"
import { useI18n } from "@/lib/i18n"
import { cn } from "@/lib/utils"

// ============================================================
// TYPES
// ============================================================
interface Industry {
  id: string
  iconComponent: React.ElementType
  nameVi: string
  nameEn: string
  logos: string[]
}

// ============================================================
// DATA - Industries with placeholder logos
// ============================================================
const industries: Industry[] = [
  {
    id: "retail",
    iconComponent: ShoppingBag,
    nameVi: "Ngành Bán Lẻ",
    nameEn: "Retail Industry",
    logos: [
      "Thế Giới Di Động",
      "FPT Shop",
      "Điện Máy Xanh",
      "Bách Hóa Xanh",
      "Phúc Long",
      "Highland Coffee",
      "Circle K",
      "7-Eleven",
    ],
  },
  {
    id: "ecommerce",
    iconComponent: ShoppingCart,
    nameVi: "Thương Mại Điện Tử",
    nameEn: "E-Commerce",
    logos: [
      "Shopee",
      "Lazada",
      "Tiki",
      "Sendo",
      "Shopee Food",
      "Grab Mart",
      "BeeCost",
      "FPT Online",
    ],
  },
  {
    id: "realestate",
    iconComponent: Building2,
    nameVi: "Bất Động Sản",
    nameEn: "Real Estate",
    logos: [
      "Vingroup",
      "Novaland",
      "Vinhomes",
      "Hưng Thịnh",
      "Đất Xanh",
      "Hòa Bình",
      "Phú Mỹ Hưng",
      "CapitaLand",
    ],
  },
  {
    id: "manufacturing",
    iconComponent: Factory,
    nameVi: "Sản Xuất",
    nameEn: "Manufacturing",
    logos: [
      "Vinamilk",
      "Masan",
      "Hòa Phát",
      "TH True Milk",
      "Acecook",
      "Biti's",
      "Kinh Đô",
      "Tân Hiệp Phát",
    ],
  },
]

// ============================================================
// COMPONENTS
// ============================================================
function LogoCard({ name, index }: { name: string; index: number }) {
  const [isVisible, setIsVisible] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), index * 50)
        }
      },
      { threshold: 0.1 }
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => observer.disconnect()
  }, [index])

  return (
    <div
      ref={cardRef}
      className={cn(
        "flex items-center justify-center h-20 rounded-lg",
        "bg-gray-50 border border-gray-200",
        "transition-all duration-300",
        "hover:-translate-y-1 hover:shadow-lg hover:border-blue-300 hover:bg-white",
        "cursor-pointer group",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      )}
    >
      <span className="text-sm font-medium text-gray-400 group-hover:text-gray-600 transition-colors text-center px-2">
        {name}
      </span>
    </div>
  )
}

function IndustryColumn({ industry, index }: { industry: Industry; index: number }) {
  const { locale } = useI18n()
  const Icon = industry.iconComponent
  const [isVisible, setIsVisible] = useState(false)
  const columnRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), index * 100)
        }
      },
      { threshold: 0.1 }
    )

    if (columnRef.current) {
      observer.observe(columnRef.current)
    }

    return () => observer.disconnect()
  }, [index])

  return (
    <div
      ref={columnRef}
      className={cn(
        "flex flex-col items-center transition-all duration-700",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}
    >
      {/* Industry Header */}
      <div className="flex items-center gap-2 mb-6">
        <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center">
          <Icon className="w-5 h-5 text-blue-600" />
        </div>
        <h3 className="text-base font-bold text-gray-900">
          {locale === "vi" ? industry.nameVi : industry.nameEn}
        </h3>
      </div>

      {/* Logo Grid 2x4 */}
      <div className="grid grid-cols-2 gap-3 w-full">
        {industry.logos.map((logo, idx) => (
          <LogoCard key={`${industry.id}-${idx}`} name={logo} index={idx} />
        ))}
      </div>
    </div>
  )
}

function StatCard({ number, label, index }: { number: string; label: string; index: number }) {
  const [isVisible, setIsVisible] = useState(false)
  const [displayNumber, setDisplayNumber] = useState("0")
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), index * 100)
        }
      },
      { threshold: 0.3 }
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => observer.disconnect()
  }, [index])

  useEffect(() => {
    if (!isVisible) return

    const target = parseInt(number.replace(/[^0-9]/g, ""))
    if (isNaN(target)) {
      setDisplayNumber(number)
      return
    }

    let current = 0
    const increment = target / 50
    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        clearInterval(timer)
        setDisplayNumber(number)
      } else {
        const suffix = number.includes("+") ? "+" : ""
        setDisplayNumber(Math.floor(current).toLocaleString() + suffix)
      }
    }, 30)

    return () => clearInterval(timer)
  }, [isVisible, number])

  return (
    <div
      ref={cardRef}
      className={cn(
        "text-center transition-all duration-700",
        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
      )}
    >
      <p className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-2">
        {displayNumber}
      </p>
      <p className="text-base font-semibold text-gray-700">{label}</p>
    </div>
  )
}

function TrustBadge({ icon: Icon, title, description, index }: { icon: React.ElementType; title: string; description: string; index: number }) {
  const [isVisible, setIsVisible] = useState(false)
  const badgeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), index * 150)
        }
      },
      { threshold: 0.3 }
    )

    if (badgeRef.current) {
      observer.observe(badgeRef.current)
    }

    return () => observer.disconnect()
  }, [index])

  return (
    <div
      ref={badgeRef}
      className={cn(
        "flex items-start gap-4 p-6 bg-white rounded-xl border border-gray-200",
        "shadow-sm hover:shadow-lg transition-all duration-300",
        "hover:border-blue-300 hover:-translate-y-1",
        isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
      )}
    >
      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg">
        <Icon className="w-5 h-5 text-white" />
      </div>
      <div>
        <h4 className="font-bold text-gray-900 mb-1">{title}</h4>
        <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  )
}

// ============================================================
// MAIN COMPONENT
// ============================================================
export function TrustedBusinessesSection() {
  const { locale } = useI18n()

  return (
    <section className="relative py-16 md:py-24 lg:py-32 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-indigo-200/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-6 leading-tight">
            {locale === "vi" ? (
              <>
                Được tin dùng bởi hơn{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                  500 doanh nghiệp
                </span>{" "}
                toàn quốc
              </>
            ) : (
              <>
                Trusted by over{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                  500 businesses
                </span>{" "}
                nationwide
              </>
            )}
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed">
            {locale === "vi"
              ? "Đồng hành cùng các doanh nghiệp hàng đầu và phát triển tại Việt Nam với giải pháp marketing AI."
              : "Helping Vietnam's leading enterprises and growing businesses scale with AI-driven marketing solutions."}
          </p>
        </div>

        {/* Industry Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 mb-16">
          {industries.map((industry, index) => (
            <IndustryColumn key={industry.id} industry={industry} index={index} />
          ))}
        </div>

        {/* Statistics Section */}
        <div className="relative my-16 md:my-20">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 rounded-3xl opacity-60" />
          <div className="relative grid md:grid-cols-3 gap-8 md:gap-12 py-12 md:py-16 px-6">
            <StatCard
              number="500+"
              label={locale === "vi" ? "Doanh nghiệp tin dùng" : "Businesses Trust Us"}
              index={0}
            />
            <StatCard
              number="63"
              label={locale === "vi" ? "Tỉnh thành Việt Nam" : "Vietnamese Provinces"}
              index={1}
            />
            <StatCard
              number="20+"
              label={locale === "vi" ? "Ngành nghề chính" : "Major Industries"}
              index={2}
            />
          </div>
        </div>

        {/* Trust Badges */}
        <div className="grid md:grid-cols-2 gap-6 mt-16">
          <TrustBadge
            icon={Shield}
            title={locale === "vi" ? "SOC 2 Type II Certified" : "SOC 2 Type II Certified"}
            description={
              locale === "vi"
                ? "Tiêu chuẩn bảo mật cấp doanh nghiệp cho dữ liệu của bạn."
                : "Enterprise-grade security standards for your data."
            }
            index={0}
          />
          <TrustBadge
            icon={CheckCircle2}
            title={locale === "vi" ? "99.9% Uptime SLA" : "99.9% Uptime SLA"}
            description={
              locale === "vi"
                ? "Đảm bảo độ tin cậy nền tảng cho hoạt động 24/7."
                : "Guaranteed platform reliability for 24/7 operations."
            }
            index={1}
          />
        </div>

        {/* Footer Copyright */}
        <div className="mt-16 pt-8 border-t border-gray-200 text-center">
          <p className="text-sm text-gray-500">
            {locale === "vi"
              ? "© 2024 DXAI Marketing. Tất cả quyền được bảo lưu. Tín hiệu tin cậy chuyên nghiệp cho thị trường Việt Nam và Quốc tế."
              : "© 2024 DXAI Marketing. All rights reserved. Professional trust signals for Vietnam and Global markets."}
          </p>
        </div>
      </div>
    </section>
  )
}
