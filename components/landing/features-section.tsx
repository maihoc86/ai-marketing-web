"use client";

import { useEffect, useRef, useState } from "react";
import {
  Video,
  FileText,
  Calendar,
  ImageIcon,
  BarChart3,
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
} from "lucide-react";
import FeatureRow, { Feature } from "./feature-row";
import { useI18n } from "@/lib/i18n";

// NOTE: `Feature` type and `featureUrlSlugs` moved to components/landing/feature-row.tsx

// ============================================================
// DATA
// ============================================================
const features: Feature[] = [
  {
    id: "chatbot",
    icon: Video,
    iconBg: "#E6F8FF",
    iconColor: "#22b5f8",
    badge: "24/7",
    badgeColor: "bg-primary/10 text-[#008bff] border-primary/30",
    image: "/ai-chatbot.png",
    mainFeatures: [
      [
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
      ],
      [
        {
          nameKey: "features.chatbot.feature3.name",
          descKey: "features.chatbot.feature3.desc",
          icon: TrendingUp,
        },
        {
          nameKey: "features.chatbot.feature4.name",
          descKey: "features.chatbot.feature4.desc",
          icon: Calendar,
        },
      ],
      [
        {
          nameKey: "features.chatbot.feature5.name",
          descKey: "features.chatbot.feature5.desc",
          icon: UserCheck,
        },
        {
          nameKey: "features.chatbot.feature6.name",
          descKey: "features.chatbot.feature6.desc",
          icon: Users,
        },
      ],
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
    iconBg: "#F3E8FF",
    iconColor: "#7c3aed",
    badge: "50+",
    badgeColor: "bg-purple-100 text-purple-700 border-purple-200",
    image: "/ai-content.png",
    mainFeatures: [
      [
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
      ],
      [
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
      ],
      [
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
    iconBg: "#E0E7FF",
    iconColor: "#4f46e5",
    badge: "24/7",
    badgeColor: "bg-indigo-100 text-indigo-700 border-indigo-200",
    image: "/ai-discovery.png",
    mainFeatures: [
      [
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
      ],
      [
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
      ],
      [
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
    iconBg: "#FCE7F3",
    iconColor: "#db2777",
    badge: "5 min",
    badgeColor: "bg-pink-100 text-pink-700 border-pink-200",
    image: "/ai-content-factory.png",
    mainFeatures: [
      [
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
      ],
      [
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
      ],
      [
        {
          nameKey: "features.video.feature5.name",
          descKey: "features.video.feature5.desc",
          icon: RefreshCw,
        },
      ],
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
    iconBg: "#D1FAE5",
    iconColor: "#059669",
    badge: "100%",
    badgeColor: "bg-emerald-100 text-emerald-700 border-emerald-200",
    image: "/ai-email-marketing.png",
    mainFeatures: [
      [
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
      ],
      [
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
      ],
      [
        {
          nameKey: "features.email.feature5.name",
          descKey: "features.email.feature5.desc",
          icon: Repeat,
        },
      ],
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
    iconBg: "#FFF7ED",
    iconColor: "#ea580c",
    badge: "5 platforms",
    badgeColor: "bg-orange-100 text-orange-700 border-orange-200",
    image: "/ai-multi-platform.png",
    mainFeatures: [
      [
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
      ],
      [
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
      ],
      [
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
    iconBg: "#DBEAFE",
    iconColor: "#2563eb",
    badge: "99.9%",
    badgeColor: "bg-blue-100 text-blue-700 border-blue-200",
    image: "/ai-dashboard.png",
    mainFeatures: [
      [
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
      ],
      [
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

// `FeatureRow` implementation moved to components/landing/feature-row.tsx

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
    <>
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
    </>
  );
}
