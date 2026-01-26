"use client";

import {
  FileText,
  Image as ImageIcon,
  Sparkles,
  Hash,
  Search,
  Palette,
  Wand2,
  Layers,
} from "lucide-react";
import { FeaturePageTemplate } from "@/components/features/feature-page-template";

const features = [
  {
    icon: ImageIcon,
    nameKey: "features.content.feature1.name",
    descKey: "features.content.feature1.desc",
  },
  {
    icon: Sparkles,
    nameKey: "features.content.feature2.name",
    descKey: "features.content.feature2.desc",
  },
  {
    icon: Layers,
    nameKey: "features.content.feature3.name",
    descKey: "features.content.feature3.desc",
  },
  {
    icon: FileText,
    nameKey: "features.content.feature4.name",
    descKey: "features.content.feature4.desc",
  },
  {
    icon: Hash,
    nameKey: "features.content.feature5.name",
    descKey: "features.content.feature5.desc",
  },
  {
    icon: Search,
    nameKey: "features.content.feature6.name",
    descKey: "features.content.feature6.desc",
  },
];

const metrics = [
  { value: "50+", labelKey: "featurePage.content.metric1.label" },
  { value: "4K", labelKey: "featurePage.content.metric2.label" },
  { value: "30s", labelKey: "featurePage.content.metric3.label" },
  { value: "90%", labelKey: "featurePage.content.metric4.label" },
];

export default function ContentFeaturePage() {
  return (
    <FeaturePageTemplate
      featureId="content"
      icon={Wand2}
      iconBg="bg-purple-100"
      iconColor="text-purple-600"
      heroImage="/ai-content.jpeg"
      features={features}
      metrics={metrics}
    />
  );
}
