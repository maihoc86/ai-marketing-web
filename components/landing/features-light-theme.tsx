"use client";

import { useEffect, useRef, useState } from "react";
import {
  Video,
  FileText,
  Calendar,
  Image as ImageIcon,
  BarChart3,
  Link2,
} from "lucide-react";
import Image from "next/image";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

interface Feature {
  icon: React.ElementType;
  titleKey: string;
  descKey: string;
  statLabelKey: string;
  statValue: string;
  iconBg: string;
  image: string;
}

const features: Feature[] = [
  {
    icon: Video,
    titleKey: "features.video.title",
    descKey: "features.video.desc",
    statLabelKey: "features.video.stats",
    statValue: "1000+",
    iconBg: "from-blue-500 to-blue-600",
    image: "/ai-video-production-dashboard-with-timeline-editor.jpg",
  },
  {
    icon: FileText,
    titleKey: "features.content.title",
    descKey: "features.content.desc",
    statLabelKey: "features.content.stats",
    statValue: "50+",
    iconBg: "from-cyan-500 to-cyan-600",
    image: "/content-writing-ai-tool-with-seo-optimization-and-.jpg",
  },
  {
    icon: Calendar,
    titleKey: "features.schedule.title",
    descKey: "features.schedule.desc",
    statLabelKey: "features.schedule.stats",
    statValue: "24/7",
    iconBg: "from-indigo-500 to-indigo-600",
    image: "/social-media-scheduling-calendar-dashboard-with-mu.jpg",
  },
  {
    icon: ImageIcon,
    titleKey: "features.image.title",
    descKey: "features.image.desc",
    statLabelKey: "features.image.stats",
    statValue: "Unlimited",
    iconBg: "from-purple-500 to-purple-600",
    image: "/ai-image-generation-tool-with-product-banner-and-a.jpg",
  },
  {
    icon: BarChart3,
    titleKey: "features.analytics.title",
    descKey: "features.analytics.desc",
    statLabelKey: "features.analytics.stats",
    statValue: "10+",
    iconBg: "from-green-500 to-green-600",
    image: "/marketing-analytics-dashboard-with-charts-graphs-a.jpg",
  },
  {
    icon: Link2,
    titleKey: "features.integration.title",
    descKey: "features.integration.desc",
    statLabelKey: "features.integration.stats",
    statValue: "20+",
    iconBg: "from-orange-500 to-orange-600",
    image: "/social-media-multi-platform-publishing-dashboard.jpg",
  },
];

export function FeaturesLightTheme() {
  const { t } = useI18n();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
      },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

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

      <div className="relative container mx-auto">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600">
              {t("features.title")}
            </span>{" "}
            {t("features.titleHighlight")}
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed">
            {t("features.subtitle")}
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
              t={t}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface FeatureCardProps {
  feature: Feature;
  index: number;
  isVisible: boolean;
  t: (key: string, params?: Record<string, string | number>) => string;
}

function FeatureCard({ feature, index, isVisible, t }: FeatureCardProps) {
  const Icon = feature.icon;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={cn(
        "group relative rounded-2xl bg-white border border-gray-200 overflow-hidden",
        "hover:border-blue-300 hover:shadow-xl transition-all duration-300",
        "cursor-pointer",
        isVisible ? "animate-fade-up opacity-100" : "opacity-0",
      )}
      style={{
        animationDelay: isVisible ? `${index * 100}ms` : "0ms",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Section */}
      <div className="relative h-48 overflow-hidden bg-linear-to-br from-gray-100 to-gray-200">
        <Image
          src={feature.image}
          alt={t(feature.titleKey)}
          fill
          className={cn(
            "object-cover transition-transform duration-500",
            isHovered && "scale-110",
          )}
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

        {/* Stat badge on image */}
        <div className="absolute top-4 right-4">
          <div
            className={cn(
              "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full",
              "bg-white/95 backdrop-blur-sm border border-white/50 shadow-lg",
              "transition-all duration-300",
              isHovered && "scale-110",
            )}
          >
            <span className="text-xs font-bold text-blue-600">
              {feature.statValue}
            </span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        {/* Icon with gradient background */}
        <div className="mb-4">
          <div
            className={cn(
              "inline-flex items-center justify-center",
              "w-12 h-12 rounded-xl",
              `bg-linear-to-br ${feature.iconBg}`,
              "shadow-lg",
              "transition-all duration-300",
              isHovered && "scale-110 shadow-xl",
            )}
          >
            <Icon className="w-6 h-6 text-white" />
          </div>
        </div>

        {/* Title */}
        <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 leading-tight">
          {t(feature.titleKey)}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-600 leading-relaxed mb-4">
          {t(feature.descKey)}
        </p>

        {/* Bottom stat label */}
        <div className="flex items-center gap-2 text-xs font-medium text-gray-500">
          <div
            className={cn(
              "w-2 h-2 rounded-full bg-blue-500",
              "transition-all duration-300",
              isHovered && "animate-pulse",
            )}
          />
          <span>{t(feature.statLabelKey)}</span>
        </div>
      </div>

      {/* Hover effect overlay */}
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-t from-blue-600/5 to-transparent opacity-0",
          "transition-opacity duration-300 pointer-events-none",
          isHovered && "opacity-100",
        )}
      />
    </div>
  );
}
