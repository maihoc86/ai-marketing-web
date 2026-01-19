"use client"

import { useState, useEffect, useRef } from "react"
import { Rocket, Settings, Shield, TrendingUp } from "lucide-react"
import { useI18n } from "@/lib/i18n"
import { cn } from "@/lib/utils"

export function PhilosophySection() {
  const { t, locale } = useI18n()
  const [isHeaderVisible, setIsHeaderVisible] = useState(false)
  const headerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsHeaderVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (headerRef.current) {
      observer.observe(headerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const benefits = [
    {
      icon: Rocket,
      title: locale === "vi" ? "Triển khai nhanh" : "Rapid Deployment",
      description:
        locale === "vi"
          ? "Hệ thống sẵn sàng vận hành chỉ trong 48 giờ"
          : "System ready to operate in just 48 hours",
      color: "text-blue-600",
      bgColor: "bg-blue-600",
      lightBg: "bg-blue-50",
    },
    {
      icon: Settings,
      title: locale === "vi" ? "Tùy chỉnh linh hoạt" : "Flexible Customization",
      description:
        locale === "vi"
          ? "Module hóa các tính năng phù hợp từng ngành nghề"
          : "Modular features tailored for each industry",
      color: "text-emerald-600",
      bgColor: "bg-emerald-600",
      lightBg: "bg-emerald-50",
    },
    {
      icon: Shield,
      title: locale === "vi" ? "Bảo mật tối đa" : "Maximum Security",
      description:
        locale === "vi" ? "Tiêu chuẩn bảo mật ISO/IEC 27001" : "ISO/IEC 27001 security standards",
      color: "text-amber-600",
      bgColor: "bg-amber-600",
      lightBg: "bg-amber-50",
    },
    {
      icon: TrendingUp,
      title: locale === "vi" ? "Tối ưu ROI" : "Optimized ROI",
      description:
        locale === "vi"
          ? "Giảm 40% chi phí vận hành, tăng 25% tỷ lệ chuyển đổi"
          : "40% reduced costs, 25% increased conversion",
      color: "text-rose-600",
      bgColor: "bg-rose-600",
      lightBg: "bg-rose-50",
    },
  ]

  return (
    <section id="philosophy" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={cn(
            "text-center mb-16 max-w-3xl mx-auto transition-all duration-700",
            isHeaderVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#111518] mb-6">
            {locale === "vi" ? "Triết lý AI-First của chúng tôi" : "Our AI-First Philosophy"}
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
            {locale === "vi"
              ? "Tiên Phong CDS không chỉ là một công cụ, mà là bộ não số hóa giúp doanh nghiệp nâng cao năng lực cạnh tranh và hiệu quả vận hành tối đa thông qua tự động hóa thông minh."
              : "Tiên Phong CDS is not just a tool, but a digital brain that helps businesses enhance competitiveness and maximize operational efficiency through intelligent automation."}
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} benefit={benefit} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function BenefitCard({ benefit, index }: { benefit: any; index: number }) {
  const [isVisible, setIsVisible] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), index * 100)
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
        "group relative bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}
    >
      {/* Icon with gradient background */}
      <div
        className={`w-14 h-14 ${benefit.lightBg} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
      >
        <benefit.icon className={`w-7 h-7 ${benefit.color}`} />
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold text-[#111518] mb-3">{benefit.title}</h3>
      <p className="text-gray-600 leading-relaxed text-sm">{benefit.description}</p>

      {/* Hover accent line */}
      <div
        className={`absolute bottom-0 left-0 right-0 h-1 ${benefit.bgColor} rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}
      />
    </div>
  )
}
