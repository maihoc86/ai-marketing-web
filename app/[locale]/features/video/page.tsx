"use client";

import {
  Video,
  User,
  Mic,
  Layers,
  Sparkles,
  Play,
  Film,
  Volume2,
} from "lucide-react";
import { FeaturePageTemplate } from "@/components/features/feature-page-template";

const features = [
  {
    icon: User,
    nameKey: "features.video.feature1.name",
    descKey: "features.video.feature1.desc",
  },
  {
    icon: Volume2,
    nameKey: "features.video.feature2.name",
    descKey: "features.video.feature2.desc",
  },
  {
    icon: Layers,
    nameKey: "features.video.feature3.name",
    descKey: "features.video.feature3.desc",
  },
  {
    icon: Sparkles,
    nameKey: "features.video.feature4.name",
    descKey: "features.video.feature4.desc",
  },
  {
    icon: Mic,
    nameKey: "features.video.feature5.name",
    descKey: "features.video.feature5.desc",
  },
  {
    icon: Film,
    nameKey: "featurePage.video.feature6.name",
    descKey: "featurePage.video.feature6.desc",
  },
];

const metrics = [
  { value: "5min", labelKey: "featurePage.video.metric1.label" },
  { value: "4K", labelKey: "featurePage.video.metric2.label" },
  { value: "95%", labelKey: "featurePage.video.metric3.label" },
  { value: "50+", labelKey: "featurePage.video.metric4.label" },
];

export default function VideoFeaturePage() {
  return (
    <FeaturePageTemplate
      featureId="video"
      icon={Video}
      iconBg="bg-pink-100"
      iconColor="text-pink-600"
      heroImage="/ai-content-factory.png"
      features={features}
      metrics={metrics}
    />
  );
}
