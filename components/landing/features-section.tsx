"use client"

import { useEffect, useRef, useState, memo } from "react"
import Image from "next/image"
import { Video, Sparkles, PenTool, Calendar, ImageIcon, BarChart3, Workflow } from "lucide-react"
import { useI18n } from "@/lib/i18n"

export function FeaturesSection() {
  const { t } = useI18n()

  const features = [
    {
      titleKey: "features.video.title",
      descKey: "features.video.desc",
      statsKey: "features.video.stats",
      image: "/ai-video-production-dashboard-with-timeline-editor.jpg",
      icon: Video,
    },
    {
      titleKey: "features.content.title",
      descKey: "features.content.desc",
      statsKey: "features.content.stats",
      image: "/content-writing-ai-tool-with-seo-optimization-and-.jpg",
      icon: PenTool,
    },
    {
      titleKey: "features.schedule.title",
      descKey: "features.schedule.desc",
      statsKey: "features.schedule.stats",
      image: "/social-media-scheduling-calendar-dashboard-with-mu.jpg",
      icon: Calendar,
    },
    {
      titleKey: "features.image.title",
      descKey: "features.image.desc",
      statsKey: "features.image.stats",
      image: "/ai-image-generation-tool-with-product-banner-and-a.jpg",
      icon: ImageIcon,
    },
    {
      titleKey: "features.analytics.title",
      descKey: "features.analytics.desc",
      statsKey: "features.analytics.stats",
      image: "/marketing-analytics-dashboard-with-charts-graphs-a.jpg",
      icon: BarChart3,
    },
    {
      titleKey: "features.integration.title",
      descKey: "features.integration.desc",
      statsKey: "features.integration.stats",
      image: "/social-media-multi-platform-publishing-dashboard.jpg",
      icon: Workflow,
    },
  ]

  const FeatureCard = memo(({
    feature,
    index,
  }: {
    feature: (typeof features)[0]
    index: number
  }) => {
    const [isVisible, setIsVisible] = useState(false)
    const cardRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => setIsVisible(true), index * 100)
          }
        },
        { threshold: 0.1 },
      )

      if (cardRef.current) {
        observer.observe(cardRef.current)
      }

      return () => observer.disconnect()
    }, [index])

    return (
      <article
        ref={cardRef}
        aria-labelledby={`feature-${index}-title`}
        aria-describedby={`feature-${index}-desc`}
        className={`bg-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300 group ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
        style={{ transitionDelay: `${index * 50}ms` }}
      >
        <div className="relative h-48 rounded-xl overflow-hidden mb-6 bg-gradient-to-br from-gray-50 to-gray-100">
          <Image
            src={feature.image || "/placeholder.svg"}
            alt={t(feature.titleKey)}
            width={400}
            height={192}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute top-3 right-3 bg-blue-600 text-white text-xs px-3 py-1 rounded-full font-medium" aria-label={`Statistics: ${t(feature.statsKey)}`}>
            {t(feature.statsKey)}
          </div>
        </div>

        <h3 id={`feature-${index}-title`} className="text-lg font-semibold mb-3 text-gray-900">{t(feature.titleKey)}</h3>
        <p id={`feature-${index}-desc`} className="text-gray-600 text-sm leading-relaxed">{t(feature.descKey)}</p>
      </article>
    )
  })

  FeatureCard.displayName = "FeatureCard"

  return (
    <section id="features" aria-labelledby="features-heading" className="py-20 bg-[#F8FAFB] relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100 border border-blue-200 backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" aria-hidden="true" />
            <span className="text-xs font-medium text-blue-700">{t("features.badge")}</span>
          </div>

          <h2 id="features-heading" className="text-4xl md:text-5xl text-gray-900 mb-4 font-extrabold text-balance mt-4">
            {t("features.title")}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">{t("features.subtitle")}</p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {features.map((feature, index) => (
            <FeatureCard key={feature.titleKey} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
