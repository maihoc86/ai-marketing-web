"use client";

import {
  Share2,
  Calendar,
  GripVertical,
  MessageCircle,
  Bot,
  Inbox,
  Clock,
  Layers,
} from "lucide-react";
import { FeaturePageTemplate } from "@/components/features/feature-page-template";

const features = [
  {
    icon: Calendar,
    nameKey: "features.multiPlatform.feature1.name",
    descKey: "features.multiPlatform.feature1.desc",
  },
  {
    icon: Layers,
    nameKey: "features.multiPlatform.feature2.name",
    descKey: "features.multiPlatform.feature2.desc",
  },
  {
    icon: GripVertical,
    nameKey: "features.multiPlatform.feature3.name",
    descKey: "features.multiPlatform.feature3.desc",
  },
  {
    icon: MessageCircle,
    nameKey: "features.multiPlatform.feature4.name",
    descKey: "features.multiPlatform.feature4.desc",
  },
  {
    icon: Bot,
    nameKey: "features.multiPlatform.feature5.name",
    descKey: "features.multiPlatform.feature5.desc",
  },
  {
    icon: Inbox,
    nameKey: "features.multiPlatform.feature6.name",
    descKey: "features.multiPlatform.feature6.desc",
  },
];

const metrics = [
  { value: "5+", labelKey: "featurePage.multiPlatform.metric1.label" },
  { value: "90%", labelKey: "featurePage.multiPlatform.metric2.label" },
  { value: "24/7", labelKey: "featurePage.multiPlatform.metric3.label" },
  { value: "1", labelKey: "featurePage.multiPlatform.metric4.label" },
];

export default function MultiPlatformFeaturePage() {
  return (
    <FeaturePageTemplate
      featureId="multiPlatform"
      icon={Share2}
      iconBg="bg-orange-100"
      iconColor="text-orange-600"
      heroImage="/ai-multi-platform.png"
      features={features}
      metrics={metrics}
    />
  );
}
