"use client"

import { useEffect, useRef, useState } from "react"
import { Video, FileText, Calendar, Image as ImageIcon, BarChart3, Link2 } from "lucide-react"
import Image from "next/image"
import { useI18n } from "@/lib/i18n"
import { cn } from "@/lib/utils"

interface Feature {
  icon: React.ElementType
  titleVi: string
  titleEn: string
  descVi: string
  descEn: string
  statLabel: string
  statValue: string
  iconBg: string
  image: string
}

const features: Feature[] = [
  {
    icon: Video,
    titleVi: "Sản xuất Video tự động",
    titleEn: "Auto Video Production",
    descVi: "Biến ý tưởng thành video viral trong vài giây. AI tự động tạo script, lồng tiếng và chỉnh sửa chuyên nghiệp.",
    descEn: "Turn ideas into viral videos in seconds. AI automatically creates scripts, voiceover, and professional editing.",
    statLabel: "Videos/tháng",
    statValue: "1000+",
    iconBg: "from-blue-500 to-blue-600",
    image: "/ai-video-production-dashboard-with-timeline-editor.jpg",
  },
  {
    icon: FileText,
    titleVi: "Content đa kênh",
    titleEn: "Multi-channel Content",
    descVi: "Tạo nội dung SEO-optimized cho mọi nền tảng. Blog, social posts, email marketing - tất cả trong một.",
    descEn: "Create SEO-optimized content for all platforms. Blog, social posts, email marketing - all in one.",
    statLabel: "Templates",
    statValue: "50+",
    iconBg: "from-cyan-500 to-cyan-600",
    image: "/content-writing-ai-tool-with-seo-optimization-and-.jpg",
  },
  {
    icon: Calendar,
    titleVi: "Lên lịch thông minh",
    titleEn: "Smart Scheduling",
    descVi: "Tự động đăng vào golden hours. AI phân tích thời điểm tối ưu cho từng nền tảng.",
    descEn: "Auto-post at golden hours. AI analyzes optimal timing for each platform.",
    statLabel: "Automation",
    statValue: "24/7",
    iconBg: "from-indigo-500 to-indigo-600",
    image: "/social-media-scheduling-calendar-dashboard-with-mu.jpg",
  },
  {
    icon: ImageIcon,
    titleVi: "Thiết kế hình ảnh AI",
    titleEn: "AI Image Design",
    descVi: "Tạo banner, thumbnail và ad creative chuyên nghiệp. Chỉnh sửa nhanh với AI.",
    descEn: "Create professional banners, thumbnails and ad creatives. Quick editing with AI.",
    statLabel: "Designs",
    statValue: "Unlimited",
    iconBg: "from-purple-500 to-purple-600",
    image: "/ai-image-generation-tool-with-product-banner-and-a.jpg",
  },
  {
    icon: BarChart3,
    titleVi: "Phân tích thông minh",
    titleEn: "Smart Analytics",
    descVi: "Dashboard trực quan với insights sâu sắc. Theo dõi ROI và hiệu suất chiến dịch real-time.",
    descEn: "Intuitive dashboard with deep insights. Track ROI and campaign performance in real-time.",
    statLabel: "Metrics",
    statValue: "10+",
    iconBg: "from-green-500 to-green-600",
    image: "/marketing-analytics-dashboard-with-charts-graphs-a.jpg",
  },
  {
    icon: Link2,
    titleVi: "Tích hợp liền mạch",
    titleEn: "Seamless Integration",
    descVi: "Kết nối với Facebook, Instagram, TikTok, LinkedIn, YouTube và 20+ nền tảng khác.",
    descEn: "Connect with Facebook, Instagram, TikTok, LinkedIn, YouTube and 20+ other platforms.",
    statLabel: "Platforms",
    statValue: "20+",
    iconBg: "from-orange-500 to-orange-600",
    image: "/social-media-multi-platform-publishing-dashboard.jpg",
  },
]

export function FeaturesLightTheme() {
  const { locale } = useI18n()
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
    <section
      id="features"
      ref={sectionRef}
      className="relative py-16 md:py-24 lg:py-32 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 -right-20 w-[500px] h-[500px] bg-purple-200/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-100/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-6 leading-tight">
            {locale === "vi" ? (
              <>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                  Tính năng
                </span>{" "}
                vượt trội
              </>
            ) : (
              <>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                  Features
                </span>{" "}
                that Excel
              </>
            )}
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed">
            {locale === "vi"
              ? "Mọi công cụ bạn cần để tự động hóa marketing và tăng trưởng doanh nghiệp"
              : "Everything you need to automate your marketing and grow your business"}
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              feature={feature}
              index={index}
              isVisible={isVisible}
              locale={locale}
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
  locale: string
}

function FeatureCard({ feature, index, isVisible, locale }: FeatureCardProps) {
  const Icon = feature.icon
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={cn(
        "group relative rounded-2xl bg-white border border-gray-200 overflow-hidden",
        "hover:border-blue-300 hover:shadow-xl transition-all duration-300",
        "cursor-pointer",
        isVisible ? "animate-fade-up opacity-100" : "opacity-0"
      )}
      style={{
        animationDelay: isVisible ? `${index * 100}ms` : "0ms",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Section */}
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
        <Image
          src={feature.image}
          alt={locale === "vi" ? feature.titleVi : feature.titleEn}
          fill
          className={cn(
            "object-cover transition-transform duration-500",
            isHovered && "scale-110"
          )}
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

        {/* Stat badge on image */}
        <div className="absolute top-4 right-4">
          <div className={cn(
            "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full",
            "bg-white/95 backdrop-blur-sm border border-white/50 shadow-lg",
            "transition-all duration-300",
            isHovered && "scale-110"
          )}>
            <span className="text-xs font-bold text-blue-600">{feature.statValue}</span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        {/* Icon with gradient background */}
        <div className="mb-4">
          <div className={cn(
            "inline-flex items-center justify-center",
            "w-12 h-12 rounded-xl",
            `bg-gradient-to-br ${feature.iconBg}`,
            "shadow-lg",
            "transition-all duration-300",
            isHovered && "scale-110 shadow-xl"
          )}>
            <Icon className="w-6 h-6 text-white" />
          </div>
        </div>

        {/* Title */}
        <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 leading-tight">
          {locale === "vi" ? feature.titleVi : feature.titleEn}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-600 leading-relaxed mb-4">
          {locale === "vi" ? feature.descVi : feature.descEn}
        </p>

        {/* Bottom stat label */}
        <div className="flex items-center gap-2 text-xs font-medium text-gray-500">
          <div className={cn(
            "w-2 h-2 rounded-full bg-blue-500",
            "transition-all duration-300",
            isHovered && "animate-pulse"
          )} />
          <span>{feature.statLabel}</span>
        </div>
      </div>

      {/* Hover effect overlay */}
      <div className={cn(
        "absolute inset-0 bg-gradient-to-t from-blue-600/5 to-transparent opacity-0",
        "transition-opacity duration-300 pointer-events-none",
        isHovered && "opacity-100"
      )} />
    </div>
  )
}
