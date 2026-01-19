"use client"

import { useEffect, useRef, useState } from "react"
import { Video, FileText, Calendar, Image as ImageIcon, BarChart3, Link2 } from "lucide-react"
import { useI18n } from "@/lib/i18n"

interface Feature {
  icon: React.ElementType
  titleKey: string
  descriptionKey: string
  statLabel: string
  statValue: string
  gradient: string
}

const features: Feature[] = [
  {
    icon: Video,
    titleKey: "features.video.title",
    descriptionKey: "features.video.description",
    statLabel: "Videos/tháng",
    statValue: "1000+",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: FileText,
    titleKey: "features.content.title",
    descriptionKey: "features.content.description",
    statLabel: "Templates",
    statValue: "50+",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    icon: Calendar,
    titleKey: "features.schedule.title",
    descriptionKey: "features.schedule.description",
    statLabel: "Automation",
    statValue: "24/7",
    gradient: "from-blue-600 to-blue-400",
  },
  {
    icon: ImageIcon,
    titleKey: "features.design.title",
    descriptionKey: "features.design.description",
    statLabel: "Designs",
    statValue: "Unlimited",
    gradient: "from-cyan-600 to-cyan-400",
  },
  {
    icon: BarChart3,
    titleKey: "features.analytics.title",
    descriptionKey: "features.analytics.description",
    statLabel: "Metrics",
    statValue: "10+",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Link2,
    titleKey: "features.integration.title",
    descriptionKey: "features.integration.description",
    statLabel: "Platforms",
    statValue: "20+",
    gradient: "from-cyan-500 to-blue-600",
  },
]

export function FeaturesOpturaStyle() {
  const { t } = useI18n()
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      {
        threshold: 0.1,
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section ref={sectionRef} className="py-20 md:py-32 bg-gradient-optura-subtle relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-200 rounded-full blur-3xl opacity-10" />

      <div className="container mx-auto px-4 relative">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-display-md font-bold text-gray-900 mb-4">
            {t("features.title") || "Tính năng"}{" "}
            <span className="italic text-gradient">
              {t("features.titleHighlight") || "vượt trội"}
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-700">
            {t("features.subtitle") || "Mọi công cụ bạn cần để tự động hóa marketing"}
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.titleKey}
              feature={feature}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

interface FeatureCardProps {
  feature: Feature
  index: number
  isVisible: boolean
}

function FeatureCard({ feature, index, isVisible }: FeatureCardProps) {
  const { t } = useI18n()
  const Icon = feature.icon

  return (
    <div
      className={`glass-card rounded-3xl p-8 hover:shadow-optura-lg transition-all duration-500 group ${
        isVisible ? "animate-fade-up" : "opacity-0"
      }`}
      style={{
        animationDelay: isVisible ? `${index * 100}ms` : "0ms",
      }}
    >
      {/* Icon with gradient background */}
      <div className="relative mb-6">
        <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} shadow-optura group-hover:scale-110 transition-transform duration-300`}>
          <Icon className="w-8 h-8 text-white" />
        </div>

        {/* Stat badge */}
        <div className="absolute -top-2 -right-2 floating-label rounded-xl px-3 py-1">
          <div className="text-xs font-semibold text-blue-900">
            {feature.statValue}
          </div>
        </div>
      </div>

      {/* Content */}
      <h3 className="font-serif text-xl md:text-2xl font-bold text-gray-900 mb-3">
        {t(feature.titleKey)}
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        {t(feature.descriptionKey)}
      </p>

      {/* Bottom stat label */}
      <div className="flex items-center gap-2 text-sm text-gray-600">
        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500" />
        <span className="font-medium">{feature.statLabel}</span>
      </div>
    </div>
  )
}
