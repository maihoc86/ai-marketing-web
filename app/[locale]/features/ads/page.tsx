"use client";

import {
  BarChart3,
  DollarSign,
  Users,
  FlaskConical,
  Bell,
  PieChart,
  TrendingUp,
  Target,
} from "lucide-react";
import { FeaturePageTemplate } from "@/components/features/feature-page-template";

const features = [
  {
    icon: DollarSign,
    nameKey: "features.ads.feature1.name",
    descKey: "features.ads.feature1.desc",
  },
  {
    icon: Users,
    nameKey: "features.ads.feature2.name",
    descKey: "features.ads.feature2.desc",
  },
  {
    icon: FlaskConical,
    nameKey: "features.ads.feature3.name",
    descKey: "features.ads.feature3.desc",
  },
  {
    icon: Bell,
    nameKey: "features.ads.feature4.name",
    descKey: "features.ads.feature4.desc",
  },
  {
    icon: PieChart,
    nameKey: "featurePage.ads.feature5.name",
    descKey: "featurePage.ads.feature5.desc",
  },
  {
    icon: TrendingUp,
    nameKey: "featurePage.ads.feature6.name",
    descKey: "featurePage.ads.feature6.desc",
  },
];

const metrics = [
  { value: "8+", labelKey: "featurePage.ads.metric1.label" },
  { value: "99.9%", labelKey: "featurePage.ads.metric2.label" },
  { value: "2x", labelKey: "featurePage.ads.metric3.label" },
  { value: "Auto", labelKey: "featurePage.ads.metric4.label" },
];

export default function AdsFeaturePage() {
  return (
    <FeaturePageTemplate
      featureId="ads"
      icon={BarChart3}
      iconBg="bg-blue-100"
      iconColor="text-blue-600"
      heroImage="/ai-dashboard.png"
      features={features}
      metrics={metrics}
    />
  );
}
