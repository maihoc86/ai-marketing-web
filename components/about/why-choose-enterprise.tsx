"use client"

import { useState, useEffect, useRef } from "react"
import { Brain, Headphones, Cloud, BarChart3 } from "lucide-react"
import { useI18n } from "@/lib/i18n"
import { cn } from "@/lib/utils"

export function WhyChooseEnterprise() {
  const { t } = useI18n()
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
      titleKey: "about.whyChoose.expertise1.title",
      descKey: "about.whyChoose.expertise1.desc",
      color: "text-[#22b5f8]",
      bgColor: "bg-[#22b5f8]",
      lightBg: "bg-[#22b5f8]/5",
    },
    {
      icon: Headphones,
      titleKey: "about.whyChoose.expertise2.title",
      descKey: "about.whyChoose.expertise2.desc",
      color: "text-emerald-600",
      bgColor: "bg-emerald-600",
      lightBg: "bg-emerald-50",
    },
    {
      icon: Cloud,
      titleKey: "about.whyChoose.expertise3.title",
      descKey: "about.whyChoose.expertise3.desc",
      color: "text-purple-600",
      bgColor: "bg-purple-600",
      lightBg: "bg-purple-50",
    },
    {
      icon: BarChart3,
      titleKey: "about.whyChoose.expertise4.title",
      descKey: "about.whyChoose.expertise4.desc",
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
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#22b5f8]/10 rounded-full mb-6">
            <span className="text-sm font-bold text-[#22b5f8] uppercase tracking-wider">
              {t("about.whyChoose.badge")}
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#111518] mb-6">
            {t("about.whyChoose.title")}
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
            {t("about.whyChoose.subtitle")}
          </p>
        </div>

        {/* Expertise Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {expertise.map((item, index) => (
            <ExpertiseCard key={index} item={item} index={index} t={t} />
          ))}
        </div>
      </div>
    </section>
  )
}

interface ExpertiseItem {
  icon: React.ElementType
  titleKey: string
  descKey: string
  color: string
  bgColor: string
  lightBg: string
}

function ExpertiseCard({ item, index, t }: { item: ExpertiseItem; index: number; t: (key: string) => string }) {
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
      <h3 className="text-xl font-bold text-[#111518] mb-3 leading-tight">{t(item.titleKey)}</h3>
      <p className="text-gray-600 leading-relaxed text-sm">{t(item.descKey)}</p>

      {/* Bottom accent bar */}
      <div
        className={`absolute bottom-0 left-0 right-0 h-1.5 ${item.bgColor} rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}
      />
    </div>
  )
}
