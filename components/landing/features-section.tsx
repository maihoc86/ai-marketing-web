"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  Video,
  FileText,
  Calendar,
  ImageIcon,
  BarChart3,
  ArrowRight,
  TrendingUp,
  Mail,
  Share2,
  MessageSquare,
  Bot,
  Zap,
  PenTool,
  Search,
  Target,
  Sparkles,
  Clock,
  Users,
  Layers,
  Mic,
  Scissors,
  Lightbulb,
  UserCheck,
  LayoutTemplate,
  Repeat,
  Bell,
  Activity,
  MousePointer,
  DollarSign,
  Settings,
  RefreshCw,
  Radio,
  Flame,
  Building2,
  Eye,
  type LucideIcon,
} from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { LocaleLink } from "@/components/locale-link";

// ============================================================
// FEATURE URL MAPPING
// ============================================================
const featureUrlSlugs: Record<string, string> = {
  chatbot: "chatbot",
  content: "content",
  trends: "trends",
  video: "video",
  email: "email",
  multiPlatform: "multi-platform",
  ads: "ads",
};

// ============================================================
// TYPES
// ============================================================
interface FeatureDetail {
  nameKey: string;
  descKey: string;
  icon: LucideIcon;
}

interface PerformanceMetric {
  metricKey: string;
  valueKey: string;
  noteKey: string;
}

interface Feature {
  id: string;
  icon: React.ElementType;
  iconBg: string;
  iconColor: string;
  badge: string;
  badgeColor: string;
  image: string;
  mainFeatures?: FeatureDetail[];
  performanceMetrics?: PerformanceMetric[];
}

// ============================================================
// DATA
// ============================================================
const features: Feature[] = [
  {
    id: "chatbot",
    icon: Video,
    iconBg: "bg-[#22b5f8]/10",
    iconColor: "text-[#22b5f8]",
    badge: "24/7",
    badgeColor: "bg-[#22b5f8]/10 text-[#008bff] border-[#22b5f8]/30",
    image: "/ai-chatbot.webp",
    mainFeatures: [
      {
        nameKey: "features.chatbot.feature1.name",
        descKey: "features.chatbot.feature1.desc",
        icon: MessageSquare,
      },
      {
        nameKey: "features.chatbot.feature2.name",
        descKey: "features.chatbot.feature2.desc",
        icon: DollarSign,
      },
      {
        nameKey: "features.chatbot.feature3.name",
        descKey: "features.chatbot.feature3.desc",
        icon: Calendar,
      },
      {
        nameKey: "features.chatbot.feature4.name",
        descKey: "features.chatbot.feature4.desc",
        icon: UserCheck,
      },
    ],
    performanceMetrics: [
      {
        metricKey: "features.chatbot.metric1.name",
        valueKey: "features.chatbot.metric1.value",
        noteKey: "features.chatbot.metric1.note",
      },
      {
        metricKey: "features.chatbot.metric2.name",
        valueKey: "features.chatbot.metric2.value",
        noteKey: "features.chatbot.metric2.note",
      },
      {
        metricKey: "features.chatbot.metric3.name",
        valueKey: "features.chatbot.metric3.value",
        noteKey: "features.chatbot.metric3.note",
      },
    ],
  },
  {
    id: "content",
    icon: FileText,
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
    badge: "50+",
    badgeColor: "bg-purple-100 text-purple-700 border-purple-200",
    image: "/ai-content.jpeg",
    mainFeatures: [
      {
        nameKey: "features.content.feature1.name",
        descKey: "features.content.feature1.desc",
        icon: ImageIcon,
      },
      {
        nameKey: "features.content.feature2.name",
        descKey: "features.content.feature2.desc",
        icon: Layers,
      },
      {
        nameKey: "features.content.feature3.name",
        descKey: "features.content.feature3.desc",
        icon: Sparkles,
      },
      {
        nameKey: "features.content.feature4.name",
        descKey: "features.content.feature4.desc",
        icon: PenTool,
      },
      {
        nameKey: "features.content.feature5.name",
        descKey: "features.content.feature5.desc",
        icon: Target,
      },
      {
        nameKey: "features.content.feature6.name",
        descKey: "features.content.feature6.desc",
        icon: Search,
      },
    ],
    performanceMetrics: [
      {
        metricKey: "features.content.metric1.name",
        valueKey: "features.content.metric1.value",
        noteKey: "features.content.metric1.note",
      },
      {
        metricKey: "features.content.metric2.name",
        valueKey: "features.content.metric2.value",
        noteKey: "features.content.metric2.note",
      },
      {
        metricKey: "features.content.metric3.name",
        valueKey: "features.content.metric3.value",
        noteKey: "features.content.metric3.note",
      },
    ],
  },
  {
    id: "trends",
    icon: TrendingUp,
    iconBg: "bg-indigo-100",
    iconColor: "text-indigo-600",
    badge: "24/7",
    badgeColor: "bg-indigo-100 text-indigo-700 border-indigo-200",
    image: "/ai-discovery.jpeg",
    mainFeatures: [
      {
        nameKey: "features.trends.feature1.name",
        descKey: "features.trends.feature1.desc",
        icon: Radio,
      },
      {
        nameKey: "features.trends.feature2.name",
        descKey: "features.trends.feature2.desc",
        icon: Flame,
      },
      {
        nameKey: "features.trends.feature3.name",
        descKey: "features.trends.feature3.desc",
        icon: TrendingUp,
      },
      {
        nameKey: "features.trends.feature4.name",
        descKey: "features.trends.feature4.desc",
        icon: Building2,
      },
      {
        nameKey: "features.trends.feature5.name",
        descKey: "features.trends.feature5.desc",
        icon: Lightbulb,
      },
      {
        nameKey: "features.trends.feature6.name",
        descKey: "features.trends.feature6.desc",
        icon: Eye,
      },
    ],
    performanceMetrics: [
      {
        metricKey: "features.trends.metric1.name",
        valueKey: "features.trends.metric1.value",
        noteKey: "features.trends.metric1.note",
      },
      {
        metricKey: "features.trends.metric2.name",
        valueKey: "features.trends.metric2.value",
        noteKey: "features.trends.metric2.note",
      },
      {
        metricKey: "features.trends.metric3.name",
        valueKey: "features.trends.metric3.value",
        noteKey: "features.trends.metric3.note",
      },
    ],
  },
  {
    id: "video",
    icon: Video,
    iconBg: "bg-pink-100",
    iconColor: "text-pink-600",
    badge: "5 min",
    badgeColor: "bg-pink-100 text-pink-700 border-pink-200",
    image: "/ai-content-factory.png",
    mainFeatures: [
      {
        nameKey: "features.video.feature1.name",
        descKey: "features.video.feature1.desc",
        icon: Users,
      },
      {
        nameKey: "features.video.feature2.name",
        descKey: "features.video.feature2.desc",
        icon: Mic,
      },
      {
        nameKey: "features.video.feature3.name",
        descKey: "features.video.feature3.desc",
        icon: Scissors,
      },
      {
        nameKey: "features.video.feature4.name",
        descKey: "features.video.feature4.desc",
        icon: Sparkles,
      },
      {
        nameKey: "features.video.feature5.name",
        descKey: "features.video.feature5.desc",
        icon: RefreshCw,
      },
    ],
    performanceMetrics: [
      {
        metricKey: "features.video.metric1.name",
        valueKey: "features.video.metric1.value",
        noteKey: "features.video.metric1.note",
      },
      {
        metricKey: "features.video.metric2.name",
        valueKey: "features.video.metric2.value",
        noteKey: "features.video.metric2.note",
      },
      {
        metricKey: "features.video.metric3.name",
        valueKey: "features.video.metric3.value",
        noteKey: "features.video.metric3.note",
      },
    ],
  },
  {
    id: "email",
    icon: Mail,
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
    badge: "100%",
    badgeColor: "bg-emerald-100 text-emerald-700 border-emerald-200",
    image: "/ai-email-marketing.png",
    mainFeatures: [
      {
        nameKey: "features.email.feature1.name",
        descKey: "features.email.feature1.desc",
        icon: LayoutTemplate,
      },
      {
        nameKey: "features.email.feature2.name",
        descKey: "features.email.feature2.desc",
        icon: Activity,
      },
      {
        nameKey: "features.email.feature3.name",
        descKey: "features.email.feature3.desc",
        icon: Zap,
      },
      {
        nameKey: "features.email.feature4.name",
        descKey: "features.email.feature4.desc",
        icon: Settings,
      },
      {
        nameKey: "features.email.feature5.name",
        descKey: "features.email.feature5.desc",
        icon: Repeat,
      },
    ],
    performanceMetrics: [
      {
        metricKey: "features.email.metric1.name",
        valueKey: "features.email.metric1.value",
        noteKey: "features.email.metric1.note",
      },
      {
        metricKey: "features.email.metric2.name",
        valueKey: "features.email.metric2.value",
        noteKey: "features.email.metric2.note",
      },
      {
        metricKey: "features.email.metric3.name",
        valueKey: "features.email.metric3.value",
        noteKey: "features.email.metric3.note",
      },
    ],
  },
  {
    id: "multiPlatform",
    icon: Share2,
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
    badge: "5 platforms",
    badgeColor: "bg-orange-100 text-orange-700 border-orange-200",
    image: "/ai-multi-platform.png",
    mainFeatures: [
      {
        nameKey: "features.multiPlatform.feature1.name",
        descKey: "features.multiPlatform.feature1.desc",
        icon: Clock,
      },
      {
        nameKey: "features.multiPlatform.feature2.name",
        descKey: "features.multiPlatform.feature2.desc",
        icon: Calendar,
      },
      {
        nameKey: "features.multiPlatform.feature3.name",
        descKey: "features.multiPlatform.feature3.desc",
        icon: MousePointer,
      },
      {
        nameKey: "features.multiPlatform.feature4.name",
        descKey: "features.multiPlatform.feature4.desc",
        icon: MessageSquare,
      },
      {
        nameKey: "features.multiPlatform.feature5.name",
        descKey: "features.multiPlatform.feature5.desc",
        icon: Bot,
      },
      {
        nameKey: "features.multiPlatform.feature6.name",
        descKey: "features.multiPlatform.feature6.desc",
        icon: Mail,
      },
    ],
    performanceMetrics: [
      {
        metricKey: "features.multiPlatform.metric1.name",
        valueKey: "features.multiPlatform.metric1.value",
        noteKey: "features.multiPlatform.metric1.note",
      },
      {
        metricKey: "features.multiPlatform.metric2.name",
        valueKey: "features.multiPlatform.metric2.value",
        noteKey: "features.multiPlatform.metric2.note",
      },
      {
        metricKey: "features.multiPlatform.metric3.name",
        valueKey: "features.multiPlatform.metric3.value",
        noteKey: "features.multiPlatform.metric3.note",
      },
    ],
  },
  {
    id: "ads",
    icon: BarChart3,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    badge: "99.9%",
    badgeColor: "bg-blue-100 text-blue-700 border-blue-200",
    image: "/ai-dashboard.png",
    mainFeatures: [
      {
        nameKey: "features.ads.feature1.name",
        descKey: "features.ads.feature1.desc",
        icon: DollarSign,
      },
      {
        nameKey: "features.ads.feature2.name",
        descKey: "features.ads.feature2.desc",
        icon: Users,
      },
      {
        nameKey: "features.ads.feature3.name",
        descKey: "features.ads.feature3.desc",
        icon: Repeat,
      },
      {
        nameKey: "features.ads.feature4.name",
        descKey: "features.ads.feature4.desc",
        icon: Bell,
      },
    ],
    performanceMetrics: [
      {
        metricKey: "features.ads.metric1.name",
        valueKey: "features.ads.metric1.value",
        noteKey: "features.ads.metric1.note",
      },
      {
        metricKey: "features.ads.metric2.name",
        valueKey: "features.ads.metric2.value",
        noteKey: "features.ads.metric2.note",
      },
      {
        metricKey: "features.ads.metric3.name",
        valueKey: "features.ads.metric3.value",
        noteKey: "features.ads.metric3.note",
      },
    ],
  },
];

// ============================================================
// FEATURE ROW COMPONENT
// ============================================================
interface FeatureRowProps {
  feature: Feature;
  index: number;
  isVisible: boolean;
}

function FeatureRow({ feature, index, isVisible }: FeatureRowProps) {
  const { t } = useI18n();
  const Icon = feature.icon;
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
      <div className="aspect-[4/3] object-cover relative bg-linear-to-br from-gray-100 to-gray-200">
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
      {/* Icon */}
      <div className="flex items-center space-x-4">
        <div
          className={cn(
            "w-12 h-12 rounded-xl flex items-center justify-center mb-6 shadow-lg",
            feature.iconBg,
          )}
        >
          <Icon className={cn("w-6 h-6", feature.iconColor)} />
        </div>

        {/* Title */}
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 tracking-tight">
          {t(`features.${feature.id}.title`)}
        </h3>
      </div>

      {/* Description */}
      <p className="text-gray-600 text-lg leading-relaxed mb-6">
        {t(`features.${feature.id}.desc`)}
      </p>

      {/* Highlight Stat */}
      {/* <div className="flex items-center gap-2 mb-2">
        <div className="w-2 h-2 rounded-full bg-[#ff7900]" />
        <span className="text-gray-700 font-medium">
          {t(`features.${feature.id}.stats`)}
        </span>
      </div> */}

      {/* Main Features Badges */}
      {feature.mainFeatures && feature.mainFeatures.length > 0 && (
        <div className="mt-6">
          <div className="grid grid-cols-2 gap-3">
            {feature.mainFeatures.map((item, idx) => {
              const ItemIcon = item.icon;
              return (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
                >
                  <div className={cn(
                    "w-10 h-10 rounded-lg flex items-center justify-center shrink-0",
                    feature.iconBg
                  )}>
                    <ItemIcon className={cn("w-5 h-5", feature.iconColor)} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-gray-900 truncate">
                      {t(item.nameKey)}
                    </p>
                    <p className="text-xs text-gray-500 truncate">
                      {t(item.descKey)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Performance Metrics Table */}
      {/* {feature.performanceMetrics && feature.performanceMetrics.length > 0 && (
        <div className="mt-6">
          <h4 className="text-lg font-bold text-gray-900 mb-4">
            {t("features.table.performance")}
          </h4>
          <div className="overflow-hidden rounded-lg border border-gray-200">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="px-4 py-3 text-left text-sm font-semibold">
                    {t("features.table.metric")}
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">
                    {t("features.table.value")}
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">
                    {t("features.table.note")}
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {feature.performanceMetrics.map((metric, idx) => (
                  <tr key={idx} className="hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-3 text-sm text-gray-700">
                      {t(metric.metricKey)}
                    </td>
                    <td className="px-4 py-3 text-sm font-semibold text-gray-900">
                      {t(metric.valueKey)}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600">
                      {t(metric.noteKey)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )} */}

      {/* CTA Link - Always at bottom */}
      <div className="mt-8">
        <LocaleLink
          href={`/features/${featureUrlSlugs[feature.id]}`}
          className={cn(
            "inline-flex items-center gap-2 font-semibold text-base",
            feature.iconColor,
            "hover:gap-3 transition-all duration-300",
          )}
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
        "grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center",
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

// ============================================================
// MAIN COMPONENT
// ============================================================
export function FeaturesSection() {
  const { t } = useI18n();
  const [visibleFeatures, setVisibleFeatures] = useState<Set<number>>(
    new Set(),
  );
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    featureRefs.current.forEach((ref, index) => {
      if (!ref) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleFeatures((prev) => new Set([...prev, index]));
              observer.disconnect();
            }
          });
        },
        { threshold: 0.2, rootMargin: "0px 0px -100px 0px" },
      );

      observer.observe(ref);
      observers.push(observer);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#5fffec] to-[#008bff]">
              {t("features.title")}
            </span>{" "}
            <span className="text-gray-900">
              {t("features.titleHighlight")}
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t("features.subtitle")}
          </p>
        </div>

        {/* Feature Rows - Zigzag Layout */}
        <div className="">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              ref={(el) => {
                featureRefs.current[index] = el;
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
  );
}
