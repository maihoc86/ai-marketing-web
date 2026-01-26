"use client";

import {
  TrendingUp,
  Search,
  Flame,
  BarChart3,
  Lightbulb,
  Eye,
  Target,
  Zap,
} from "lucide-react";
import { FeaturePageTemplate } from "@/components/features/feature-page-template";

const features = [
  {
    icon: Search,
    nameKey: "features.trends.feature1.name",
    descKey: "features.trends.feature1.desc",
  },
  {
    icon: Flame,
    nameKey: "features.trends.feature2.name",
    descKey: "features.trends.feature2.desc",
  },
  {
    icon: BarChart3,
    nameKey: "features.trends.feature3.name",
    descKey: "features.trends.feature3.desc",
  },
  {
    icon: Target,
    nameKey: "features.trends.feature4.name",
    descKey: "features.trends.feature4.desc",
  },
  {
    icon: Lightbulb,
    nameKey: "features.trends.feature5.name",
    descKey: "features.trends.feature5.desc",
  },
  {
    icon: Eye,
    nameKey: "features.trends.feature6.name",
    descKey: "features.trends.feature6.desc",
  },
];

const metrics = [
  { value: "24/7", labelKey: "featurePage.trends.metric1.label" },
  { value: "30s", labelKey: "featurePage.trends.metric2.label" },
  { value: "7+", labelKey: "featurePage.trends.metric3.label" },
  { value: "95%", labelKey: "featurePage.trends.metric4.label" },
];

export default function TrendsFeaturePage() {
  return (
    <FeaturePageTemplate
      featureId="trends"
      icon={TrendingUp}
      iconBg="bg-indigo-100"
      iconColor="text-indigo-600"
      heroImage="/ai-discovery.jpeg"
      features={features}
      metrics={metrics}
    />
  );
}
