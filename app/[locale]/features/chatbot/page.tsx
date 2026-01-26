"use client";

import {
  MessageSquare,
  Bot,
  Clock,
  Users,
  Zap,
  HeadphonesIcon,
  Target,
  TrendingUp,
} from "lucide-react";
import { FeaturePageTemplate } from "@/components/features/feature-page-template";

const features = [
  {
    icon: MessageSquare,
    nameKey: "features.chatbot.feature1.name",
    descKey: "features.chatbot.feature1.desc",
  },
  {
    icon: Zap,
    nameKey: "features.chatbot.feature2.name",
    descKey: "features.chatbot.feature2.desc",
  },
  {
    icon: Clock,
    nameKey: "features.chatbot.feature3.name",
    descKey: "features.chatbot.feature3.desc",
  },
  {
    icon: Users,
    nameKey: "features.chatbot.feature4.name",
    descKey: "features.chatbot.feature4.desc",
  },
  {
    icon: HeadphonesIcon,
    nameKey: "featurePage.chatbot.feature5.name",
    descKey: "featurePage.chatbot.feature5.desc",
  },
  {
    icon: Target,
    nameKey: "featurePage.chatbot.feature6.name",
    descKey: "featurePage.chatbot.feature6.desc",
  },
];

const metrics = [
  { value: "24/7", labelKey: "featurePage.chatbot.metric1.label" },
  { value: "3s", labelKey: "featurePage.chatbot.metric2.label" },
  { value: "+45%", labelKey: "featurePage.chatbot.metric3.label" },
  { value: "99%", labelKey: "featurePage.chatbot.metric4.label" },
];

export default function ChatbotFeaturePage() {
  return (
    <FeaturePageTemplate
      featureId="chatbot"
      icon={Bot}
      iconBg="bg-blue-100"
      iconColor="text-blue-600"
      heroImage="/ai-chatbot.webp"
      features={features}
      metrics={metrics}
    />
  );
}
