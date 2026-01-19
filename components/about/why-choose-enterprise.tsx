"use client"

import { useState, useEffect, useRef } from "react"
import { Brain, Headphones, Cloud, BarChart3 } from "lucide-react"
import { useI18n } from "@/lib/i18n"
import { cn } from "@/lib/utils"

export function WhyChooseEnterprise() {
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

  const expertise = [
    {
      icon: Brain,
      title: locale === "vi" ? "Chuyên môn AI" : "AI Expertise",
      description:
        locale === "vi"
          ? "Tận dụng khả năng sản phẩm DXAI để đạt hiệu quả marketing xuất sắc"
          : "Leveraging DXAI product capabilities for marketing excellence",
      color: "text-blue-600",
      bgColor: "bg-blue-600",
      lightBg: "bg-blue-50",
    },
    {
      icon: Headphones,
      title: locale === "vi" ? "Hỗ trợ Doanh nghiệp" : "Enterprise Support",
      description:
        locale === "vi"
          ? "Độ tin cậy 24/7 chuyên dụng cho hoạt động cấp doanh nghiệp"
          : "Dedicated 24/7 reliability for enterprise-grade operations",
      color: "text-emerald-600",
      bgColor: "bg-emerald-600",
      lightBg: "bg-emerald-50",
    },
    {
      icon: Cloud,
      title: locale === "vi" ? "Cơ sở hạ tầng Mở rộng" : "Scalable Infrastructure",
      description:
        locale === "vi"
          ? "Kiến trúc mạnh mẽ được xây dựng để phát triển cùng nhu cầu kinh doanh"
          : "Robust architecture built to grow with your business needs",
      color: "text-purple-600",
      bgColor: "bg-purple-600",
      lightBg: "bg-purple-50",
    },
    {
      icon: BarChart3,
      title: locale === "vi" ? "Kết quả Dựa trên Dữ liệu" : "Data-Driven Results",
      description:
        locale === "vi"
          ? "Tối ưu hiệu suất thông qua tinh chỉnh mô hình AI tiên tiến"
          : "Optimizing performance through advanced AI model fine-tuning",
      color: "text-orange-600",
      bgColor: "bg-orange-600",
      lightBg: "bg-orange-50",
    },
  ]

  return (
    <section className="py-24 bg-[#f5f7f8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={cn(
            "text-center mb-16 max-w-3xl mx-auto transition-all duration-700",
            isHeaderVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-6">
            <span className="text-sm font-bold text-blue-600 uppercase tracking-wider">
              {locale === "vi" ? "Tại sao chọn chúng tôi" : "Why Choose Us"}
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#111518] mb-6">
            {locale === "vi" ? "Tại sao chọn chúng tôi" : "Why Choose Us"}
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
            {locale === "vi"
              ? "Chúng tôi kết hợp chuyên môn marketing sâu rộng với cơ sở hạ tầng AI hiện đại để thúc đẩy tăng trưởng doanh nghiệp."
              : "We combine deep marketing expertise with state-of-the-art AI infrastructure to drive enterprise growth."}
          </p>
        </div>

        {/* Expertise Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {expertise.map((item, index) => (
            <ExpertiseCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ExpertiseCard({ item, index }: { item: any; index: number }) {
  const [isVisible, setIsVisible] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), index * 150)
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
        "group relative bg-white rounded-2xl p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      )}
    >
      {/* Icon circle with gradient */}
      <div
        className={`relative w-16 h-16 ${item.lightBg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md`}
      >
        <item.icon className={`w-8 h-8 ${item.color}`} />

        {/* Pulse animation on hover */}
        <div
          className={`absolute inset-0 ${item.bgColor} rounded-2xl opacity-0 group-hover:opacity-20 group-hover:animate-pulse`}
        />
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold text-[#111518] mb-3 leading-tight">{item.title}</h3>
      <p className="text-gray-600 leading-relaxed text-sm">{item.description}</p>

      {/* Bottom accent bar */}
      <div
        className={`absolute bottom-0 left-0 right-0 h-1.5 ${item.bgColor} rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}
      />
    </div>
  )
}
