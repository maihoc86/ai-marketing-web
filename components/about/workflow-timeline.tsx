"use client"

import { useState, useEffect, useRef } from "react"
import { Search, Target, Link2, Settings, TestTube, Rocket } from "lucide-react"
import { useI18n } from "@/lib/i18n"
import { cn } from "@/lib/utils"

export function WorkflowTimeline() {
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

  const steps = [
    {
      number: "01",
      icon: Search,
      title: locale === "vi" ? "Khám phá" : "Discovery",
      description:
        locale === "vi"
          ? "Kiểm tra doanh nghiệp và đánh giá mức độ sẵn sàng AI"
          : "Business audit and AI readiness assessment",
      color: "text-blue-600",
      bgColor: "bg-blue-600",
      lightBg: "bg-blue-50",
    },
    {
      number: "02",
      icon: Target,
      title: locale === "vi" ? "Chiến lược" : "Strategy",
      description:
        locale === "vi"
          ? "Lộ trình AI Marketing tùy chỉnh tập trung vào KPI tăng trưởng"
          : "Tailored AI Marketing roadmap focused on growth KPIs",
      color: "text-emerald-600",
      bgColor: "bg-emerald-600",
      lightBg: "bg-emerald-50",
    },
    {
      number: "03",
      icon: Link2,
      title: locale === "vi" ? "Tích hợp" : "Integration",
      description:
        locale === "vi"
          ? "Kết nối liền mạch DXAI với dữ liệu và công cụ hiện có"
          : "Seamlessly connecting DXAI with existing data and tools",
      color: "text-purple-600",
      bgColor: "bg-purple-600",
      lightBg: "bg-purple-50",
    },
    {
      number: "04",
      icon: Settings,
      title: locale === "vi" ? "Tối ưu hóa" : "Optimization",
      description:
        locale === "vi"
          ? "Tinh chỉnh mô hình để đạt hiệu suất và hiệu quả"
          : "Model fine-tuning for performance and efficiency",
      color: "text-amber-600",
      bgColor: "bg-amber-600",
      lightBg: "bg-amber-50",
    },
    {
      number: "05",
      icon: TestTube,
      title: locale === "vi" ? "Kiểm thử" : "Testing",
      description:
        locale === "vi"
          ? "Đảm bảo chất lượng nghiêm ngặt và theo dõi hiệu suất"
          : "Rigorous quality assurance and performance tracking",
      color: "text-rose-600",
      bgColor: "bg-rose-600",
      lightBg: "bg-rose-50",
    },
    {
      number: "06",
      icon: Rocket,
      title: locale === "vi" ? "Ra mắt" : "Launch",
      description:
        locale === "vi"
          ? "Triển khai toàn diện và giám sát tăng trưởng liên tục"
          : "Full-scale deployment and continuous growth monitoring",
      color: "text-indigo-600",
      bgColor: "bg-indigo-600",
      lightBg: "bg-indigo-50",
    },
  ]

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={cn(
            "text-center mb-16 max-w-3xl mx-auto transition-all duration-700",
            isHeaderVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full mb-6">
            <span className="text-sm font-bold text-gray-700 uppercase tracking-wider">
              {locale === "vi" ? "Phương pháp của chúng tôi" : "Our Methodology"}
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#111518] mb-6">
            {locale === "vi" ? "Quy trình làm việc 6 bước" : "6-Step Process Workflow"}
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
            {locale === "vi"
              ? "Phương pháp tiếp cận có cấu trúc của chúng tôi đảm bảo triển khai thành công và tối ưu hóa liên tục"
              : "Our structured approach ensures successful implementation and continuous optimization"}
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="relative grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Connecting lines (desktop only) */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 opacity-20" />

          {steps.map((step, index) => (
            <StepCard key={index} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function StepCard({ step, index }: { step: any; index: number }) {
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
        "group relative bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-blue-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300",
        isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-95"
      )}
    >
      {/* Step Number Badge */}
      <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-400 rounded-xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
        <span className="text-lg font-black text-white">{step.number}</span>
      </div>

      {/* Icon */}
      <div
        className={`w-16 h-16 ${step.lightBg} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
      >
        <step.icon className={`w-8 h-8 ${step.color}`} />
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold text-[#111518] mb-3 leading-tight">{step.title}</h3>
      <p className="text-gray-600 leading-relaxed text-sm">{step.description}</p>

      {/* Bottom accent */}
      <div
        className={`absolute bottom-0 left-0 right-0 h-1.5 ${step.bgColor} rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}
      />
    </div>
  )
}
