"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, type LucideIcon } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { LocaleLink } from "@/components/locale-link";
import FeatureGroups from "./feature-groups";

// ============================================================
// FEATURE URL MAPPING + TYPES
// ============================================================
export const featureUrlSlugs: Record<string, string> = {
  chatbot: "chatbot",
  content: "content",
  trends: "trends",
  video: "video",
  email: "email",
  multiPlatform: "multi-platform",
  ads: "ads",
};

export interface FeatureDetail {
  nameKey: string;
  descKey: string;
  icon: LucideIcon;
}

export interface PerformanceMetric {
  metricKey: string;
  valueKey: string;
  noteKey: string;
}

export interface Feature {
  id: string;
  icon: React.ElementType;
  iconBg: string;
  iconColor: string;
  badge: string;
  badgeColor: string;
  image: string;
  mainFeatures?: FeatureDetail[][];
  performanceMetrics?: PerformanceMetric[];
}

interface FeatureRowProps {
  feature: Feature;
  index: number;
  isVisible: boolean;
}

export default function FeatureRow({
  feature,
  index,
  isVisible,
}: FeatureRowProps) {
  const { t } = useI18n();
  const Icon = feature.icon as React.ElementType;
  const isEven = index % 2 === 0;
  const [imageError, setImageError] = useState(false);

  const imageContent = (
    <div
      className={cn(
        "relative rounded-2xl overflow-hidden shadow-xl group",
        "transition-all duration-700 ease-out",
        isVisible
          ? "opacity-100 translate-x-0"
          : isEven
            ? "opacity-0 -translate-x-16"
            : "opacity-0 translate-x-16",
      )}
    >
      {/* Badge */}
      <div
        className={cn(
          "absolute top-4 right-4 z-10",
          "px-3 py-1.5 rounded-full text-sm font-semibold border",
          "bg-white/90 backdrop-blur-sm shadow-sm",
          feature.badgeColor,
        )}
      >
        {feature.badge}
      </div>

      {/* Image with placeholder fallback */}
      <div className="aspect-4/3 object-cover relative bg-linear-to-br from-gray-100 to-gray-200">
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
  );

  const contentBlock = (
    <div
      className={cn(
        "flex flex-col justify-center",
        "transition-all duration-700 ease-out delay-200",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
      )}
    >
      {/* Icon + Title */}
      <div className="flex items-center space-x-4">
        <div
          className={cn(
            "size-12 rounded-xl flex items-center justify-center mb-6 shadow-lg",
          )}
          style={{ backgroundColor: feature.iconBg }}
        >
          <Icon className="w-6 h-6" style={{ color: feature.iconColor }} />
        </div>

        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 tracking-tight">
          {t(`features.${feature.id}.title`)}
        </h3>
      </div>

      {/* Description */}
      <p className="text-gray-600 text-md leading-relaxed mb-6">
        {t(`features.${feature.id}.desc`)}
      </p>

      <FeatureGroups
        groups={feature.mainFeatures ?? []}
        iconBg={feature.iconBg}
        iconColor={feature.iconColor}
      />

      <div className="mt-8">
        <LocaleLink
          href={`/features/${featureUrlSlugs[feature.id]}`}
          className={cn(
            "inline-flex items-center gap-2 font-semibold text-base",
            "hover:gap-3 transition-all duration-300",
          )}
          style={{ color: feature.iconColor }}
        >
          {t("features.learnMore")}
          <ArrowRight className="w-4 h-4" />
        </LocaleLink>
      </div>
    </div>
  );

  return (
    <div
      className={cn(
        "grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-x-16 items-center",
        "py-16 lg:py-24",
        index !== 0 && "border-t border-gray-100",
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
  );
}
