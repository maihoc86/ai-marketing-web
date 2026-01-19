"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Video, FileText, Calendar, ImageIcon, BarChart3, Link2, ArrowRight } from "lucide-react"
import { useI18n } from "@/lib/i18n"
import { cn } from "@/lib/utils"

// ============================================================
// TYPES
// ============================================================
interface Feature {
  id: string
  icon: React.ElementType
  iconBg: string
  iconColor: string
  badge: string
  badgeColor: string
  image: string
}

// ============================================================
// DATA
// ============================================================
const features: Feature[] = [
  {
    id: "video",
    icon: Video,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    badge: "1000+",
    badgeColor: "bg-blue-100 text-blue-700 border-blue-200",
    image: "/ai-video-production-dashboard-with-timeline-editor.jpg",
  },
  {
    id: "content",
    icon: FileText,
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
    badge: "50+",
    badgeColor: "bg-purple-100 text-purple-700 border-purple-200",
    image: "/content-writing-ai-tool-with-seo-optimization-and-.jpg",
  },
  {
    id: "schedule",
    icon: Calendar,
    iconBg: "bg-indigo-100",
    iconColor: "text-indigo-600",
    badge: "24/7",
    badgeColor: "bg-indigo-100 text-indigo-700 border-indigo-200",
    image: "/social-media-scheduling-calendar-dashboard-with-mu.jpg",
  },
  {
    id: "image",
    icon: ImageIcon,
    iconBg: "bg-pink-100",
    iconColor: "text-pink-600",
    badge: "Unlimited",
    badgeColor: "bg-pink-100 text-pink-700 border-pink-200",
    image: "/ai-image-generation-tool-with-product-banner-and-a.jpg",
  },
  {
    id: "analytics",
    icon: BarChart3,
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
    badge: "10+",
    badgeColor: "bg-emerald-100 text-emerald-700 border-emerald-200",
    image: "/marketing-analytics-dashboard-with-charts-graphs-a.jpg",
  },
  {
    id: "integration",
    icon: Link2,
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
    badge: "20+",
    badgeColor: "bg-orange-100 text-orange-700 border-orange-200",
    image: "/social-media-multi-platform-publishing-dashboard.jpg",
  },
]

// ============================================================
// FEATURE ROW COMPONENT
// ============================================================
interface FeatureRowProps {
  feature: Feature
  index: number
  isVisible: boolean
}

function FeatureRow({ feature, index, isVisible }: FeatureRowProps) {
  const { t } = useI18n()
  const Icon = feature.icon
  const isEven = index % 2 === 0
  const [imageError, setImageError] = useState(false)

  const imageContent = (
    <div
      className={cn(
        "relative rounded-2xl overflow-hidden shadow-xl group",
        "transition-all duration-700 ease-out",
        isVisible
          ? "opacity-100 translate-x-0"
          : isEven
            ? "opacity-0 -translate-x-16"
            : "opacity-0 translate-x-16"
      )}
    >
      {/* Badge */}
      <div
        className={cn(
          "absolute top-4 right-4 z-10",
          "px-3 py-1.5 rounded-full text-sm font-semibold border",
          "bg-white/90 backdrop-blur-sm shadow-sm",
          feature.badgeColor
        )}
      >
        {feature.badge}
      </div>

      {/* Image with placeholder fallback */}
      <div className="aspect-[4/3] relative bg-gradient-to-br from-gray-100 to-gray-200">
        {!imageError ? (
          <Image
            src={feature.image}
            alt={t(`features.${feature.id}.title`)}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <Icon className="w-16 h-16 text-gray-300" />
          </div>
        )}
      </div>
    </div>
  )

  const contentBlock = (
    <div
      className={cn(
        "flex flex-col justify-center",
        "transition-all duration-700 ease-out delay-200",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}
    >
      {/* Icon */}
      <div
        className={cn(
          "w-12 h-12 rounded-xl flex items-center justify-center mb-6 shadow-lg",
          feature.iconBg
        )}
      >
        <Icon className={cn("w-6 h-6", feature.iconColor)} />
      </div>

      {/* Title */}
      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 tracking-tight">
        {t(`features.${feature.id}.title`)}
      </h3>

      {/* Description */}
      <p className="text-gray-600 text-lg leading-relaxed mb-6">
        {t(`features.${feature.id}.desc`)}
      </p>

      {/* Highlight Stat */}
      <div className="flex items-center gap-2 mb-6">
        <div className="w-2 h-2 rounded-full bg-blue-600" />
        <span className="text-gray-700 font-medium">
          {t(`features.${feature.id}.stats`)}
        </span>
      </div>

      {/* CTA Link */}
      <a
        href={`#${feature.id}`}
        className={cn(
          "inline-flex items-center gap-2 font-semibold",
          feature.iconColor,
          "hover:gap-3 transition-all duration-300"
        )}
      >
        {t("features.learnMore")}
        <ArrowRight className="w-4 h-4" />
      </a>
    </div>
  )

  return (
    <div
      className={cn(
        "grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center",
        "py-16 lg:py-24",
        index !== 0 && "border-t border-gray-100"
      )}
    >
      {/* Zigzag: alternate order based on index */}
      {isEven ? (
        <>
          <div className="order-1">{imageContent}</div>
          <div className="order-2">{contentBlock}</div>
        </>
      ) : (
        <>
          <div className="order-2 lg:order-1">{contentBlock}</div>
          <div className="order-1 lg:order-2">{imageContent}</div>
        </>
      )}
    </div>
  )
}

// ============================================================
// MAIN COMPONENT
// ============================================================
export function FeaturesSection() {
  const { t } = useI18n()
  const [visibleFeatures, setVisibleFeatures] = useState<Set<number>>(new Set())
  const featureRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    featureRefs.current.forEach((ref, index) => {
      if (!ref) return

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleFeatures((prev) => new Set([...prev, index]))
              observer.disconnect()
            }
          })
        },
        { threshold: 0.2, rootMargin: "0px 0px -100px 0px" }
      )

      observer.observe(ref)
      observers.push(observer)
    })

    return () => observers.forEach((obs) => obs.disconnect())
  }, [])

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              {t("features.title")}
            </span>{" "}
            <span className="text-gray-900">{t("features.titleHighlight")}</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t("features.subtitle")}
          </p>
        </div>

        {/* Feature Rows - Zigzag Layout */}
        <div className="max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              ref={(el) => {
                featureRefs.current[index] = el
              }}
            >
              <FeatureRow
                feature={feature}
                index={index}
                isVisible={visibleFeatures.has(index)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
