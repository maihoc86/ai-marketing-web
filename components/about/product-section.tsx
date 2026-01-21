"use client"

import {
  Layers,
  Wallet,
  Share2,
  Brain,
  Video,
  ImageIcon,
  FileText,
  Bot,
  BarChart3,
  Calendar,
  TrendingUp,
  Link2,
  Sparkles,
} from "lucide-react"
import { SiOpenai, SiGoogle, SiMeta } from "react-icons/si"
import {
  ClaudeIcon,
  MistralIcon,
  DeepSeekIcon,
} from "@/components/brand-icons"
import { useI18n } from "@/lib/i18n"

export function ProductSection() {
  const { t } = useI18n()

  const whyDxaiFeatures = [
    {
      icon: Layers,
      titleKey: "about.product.why.allinone.title",
      descKey: "about.product.why.allinone.desc",
      color: "text-[#22b5f8]",
      bgColor: "bg-[#22b5f8]/10",
    },
    {
      icon: Wallet,
      titleKey: "about.product.why.cost.title",
      descKey: "about.product.why.cost.desc",
      color: "text-emerald-600",
      bgColor: "bg-emerald-100",
    },
    {
      icon: Share2,
      titleKey: "about.product.why.multiplatform.title",
      descKey: "about.product.why.multiplatform.desc",
      color: "text-[#22b5f8]",
      bgColor: "bg-[#22b5f8]/5",
    },
    {
      icon: Brain,
      titleKey: "about.product.why.ai.title",
      descKey: "about.product.why.ai.desc",
      color: "text-amber-600",
      bgColor: "bg-amber-100",
    },
  ]

  const productFeatures = [
    { icon: Video, titleKey: "about.product.capabilities.video", color: "text-[#22b5f8]" },
    { icon: ImageIcon, titleKey: "about.product.capabilities.image", color: "text-amber-500" },
    { icon: FileText, titleKey: "about.product.capabilities.content", color: "text-[#22b5f8]" },
    { icon: Bot, titleKey: "about.product.capabilities.chatbot", color: "text-emerald-500" },
    { icon: BarChart3, titleKey: "about.product.capabilities.analytics", color: "text-[#22b5f8]" },
    { icon: Calendar, titleKey: "about.product.capabilities.schedule", color: "text-cyan-500" },
    { icon: TrendingUp, titleKey: "about.product.capabilities.report", color: "text-orange-500" },
    { icon: Link2, titleKey: "about.product.capabilities.integration", color: "text-[#22b5f8]" },
  ]

  const aiModels = [
    { name: "OpenAI GPT-4", icon: SiOpenai, color: "#000000" },
    { name: "Google Gemini", icon: SiGoogle, color: "#4285F4" },
    { name: "Anthropic Claude", icon: ClaudeIcon, color: "#D97706" },
    { name: "Meta Llama", icon: SiMeta, color: "#0668E1" },
    { name: "Mistral AI", icon: MistralIcon, color: "#FF7000" },
    { name: "DeepSeek", icon: DeepSeekIcon, color: "#4F46E5" },
  ]

  return (
    <section id="product" className="py-20 bg-[#f9fafb]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#22b5f8]/10 text-[#008bff] rounded-full text-xs font-semibold uppercase tracking-wide mb-4">
            <Sparkles className="w-3 h-3" />
            {t("about.product.badge")}
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">{t("about.product.title")}</h2>
          <p className="text-lg text-gray-500 max-w-3xl mx-auto">{t("about.product.subtitle")}</p>
        </div>

        {/* Why DXAI */}
        <div className="mb-20">
          <div className="text-center mb-4">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">{t("about.product.why.title")}</h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {whyDxaiFeatures.map((feature, index) => (
              <div
                key={index}
                className="relative bg-white border border-gray-100 rounded-2xl p-6 pt-10 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                {/* Floating icon */}
                <div
                  className={`absolute -top-5 left-6 w-10 h-10 ${feature.bgColor} rounded-xl flex items-center justify-center shadow-md`}
                >
                  <feature.icon className={`w-5 h-5 ${feature.color}`} />
                </div>

                <h4 className="font-bold text-gray-900 mb-2">{t(feature.titleKey)}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{t(feature.descKey)}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Capabilities */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Features List */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
                {t("about.product.capabilities.title")}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {productFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-100 hover:shadow-md hover:border-[#22b5f8]/30 transition-all"
                  >
                    <feature.icon className={`w-5 h-5 ${feature.color} flex-shrink-0`} />
                    <span className="text-sm text-gray-700 font-medium">{t(feature.titleKey)}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Browser Mockup */}
            <div className="relative">
              <div className="bg-white border border-gray-200 rounded-2xl shadow-xl overflow-hidden">
                {/* Browser Chrome */}
                <div className="flex items-center gap-2 px-4 py-3 bg-gray-50 border-b border-gray-200">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <div className="flex-1 flex justify-center">
                    <div className="px-4 py-1 bg-white rounded-md text-xs text-gray-500 border border-gray-200">
                      ai.dsp.one
                    </div>
                  </div>
                </div>

                {/* Dashboard Content */}
                <div className="p-6 bg-gray-50">
                  <div className="space-y-4">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-[#22b5f8] rounded-xl flex items-center justify-center">
                          <Sparkles className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">DXAI Dashboard</p>
                          <p className="text-xs text-gray-500">DXAI Marketing Platform</p>
                        </div>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-3">
                      <div className="bg-white rounded-xl p-3 border border-gray-100">
                        <p className="text-xs text-gray-500">Videos</p>
                        <p className="text-lg font-bold text-gray-900">—</p>
                      </div>
                      <div className="bg-white rounded-xl p-3 border border-gray-100">
                        <p className="text-xs text-gray-500">Content</p>
                        <p className="text-lg font-bold text-gray-900">—</p>
                      </div>
                      <div className="bg-white rounded-xl p-3 border border-gray-100">
                        <p className="text-xs text-gray-500">Images</p>
                        <p className="text-lg font-bold text-gray-900">—</p>
                      </div>
                    </div>

                    {/* AI Tools */}
                    <div className="bg-white rounded-xl p-4 border border-gray-100">
                      <p className="text-xs text-gray-500 mb-3">AI Tools</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-2 py-1 bg-[#22b5f8]/5 text-[#22b5f8] rounded-md text-xs font-medium">
                          Video AI
                        </span>
                        <span className="px-2 py-1 bg-[#22b5f8]/10 text-[#008bff] rounded-md text-xs font-medium">
                          Content AI
                        </span>
                        <span className="px-2 py-1 bg-emerald-50 text-emerald-600 rounded-md text-xs font-medium">
                          Image AI
                        </span>
                        <span className="px-2 py-1 bg-amber-50 text-amber-600 rounded-md text-xs font-medium">
                          Chatbot
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technology */}
        <div className="bg-white border border-gray-100 rounded-2xl p-8 sm:p-12">
          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">{t("about.product.tech.title")}</h3>
            <p className="text-gray-500">{t("about.product.tech.subtitle")}</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {aiModels.map((model, index) => (
              <div
                key={index}
                className="group bg-gray-50 hover:bg-white border border-gray-100 hover:border-[#22b5f8]/30 rounded-xl p-4 text-center hover:shadow-md transition-all duration-300"
              >
                <div
                  className="w-10 h-10 mx-auto mb-3 bg-white rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform border border-gray-100"
                  style={{ color: model.color }}
                >
                  <model.icon className="w-5 h-5" />
                </div>
                <p className="text-xs font-medium text-gray-700">{model.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
