"use client";

import {
  Mail,
  Smartphone,
  BarChart3,
  Zap,
  Users,
  FlaskConical,
  Clock,
  Target,
} from "lucide-react";
import { FeaturePageTemplate } from "@/components/features/feature-page-template";

const features = [
  {
    icon: Smartphone,
    nameKey: "features.email.feature1.name",
    descKey: "features.email.feature1.desc",
  },
  {
    icon: BarChart3,
    nameKey: "features.email.feature2.name",
    descKey: "features.email.feature2.desc",
  },
  {
    icon: Zap,
    nameKey: "features.email.feature3.name",
    descKey: "features.email.feature3.desc",
  },
  {
    icon: Users,
    nameKey: "features.email.feature4.name",
    descKey: "features.email.feature4.desc",
  },
  {
    icon: FlaskConical,
    nameKey: "features.email.feature5.name",
    descKey: "features.email.feature5.desc",
  },
  {
    icon: Target,
    nameKey: "featurePage.email.feature6.name",
    descKey: "featurePage.email.feature6.desc",
  },
];

const metrics = [
  { value: "100%", labelKey: "featurePage.email.metric1.label" },
  { value: "+35%", labelKey: "featurePage.email.metric2.label" },
  { value: "4", labelKey: "featurePage.email.metric3.label" },
  { value: "24/7", labelKey: "featurePage.email.metric4.label" },
];

export default function EmailFeaturePage() {
  return (
    <FeaturePageTemplate
      featureId="email"
      icon={Mail}
      iconBg="bg-emerald-100"
      iconColor="text-emerald-600"
      heroImage="/ai-email-marketing.png"
      features={features}
      metrics={metrics}
    />
  );
}
