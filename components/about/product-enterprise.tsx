"use client"

import { useState, useEffect, useRef } from "react"
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
  CheckCircle2,
} from "lucide-react"
import { SiOpenai, SiGoogle, SiMeta } from "react-icons/si"
import { ClaudeIcon, MistralIcon, DeepSeekIcon } from "@/components/brand-icons"
import { useI18n } from "@/lib/i18n"
import { cn } from "@/lib/utils"

export function ProductEnterprise() {
  const { t } = useI18n()
  const [isHeaderVisible, setIsHeaderVisible] = useState(false)
  const [isWhyDxaiHeaderVisible, setIsWhyDxaiHeaderVisible] = useState(false)
  const [isCoreCapabilitiesVisible, setIsCoreCapabilitiesVisible] = useState(false)
  const [isTechnologyHeaderVisible, setIsTechnologyHeaderVisible] = useState(false)

  const headerRef = useRef<HTMLDivElement>(null)
  const whyDxaiHeaderRef = useRef<HTMLDivElement>(null)
  const coreCapabilitiesRef = useRef<HTMLDivElement>(null)
  const technologyHeaderRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === headerRef.current) setIsHeaderVisible(true)
            if (entry.target === whyDxaiHeaderRef.current) setIsWhyDxaiHeaderVisible(true)
            if (entry.target === coreCapabilitiesRef.current) setIsCoreCapabilitiesVisible(true)
            if (entry.target === technologyHeaderRef.current) setIsTechnologyHeaderVisible(true)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (headerRef.current) observer.observe(headerRef.current)
    if (whyDxaiHeaderRef.current) observer.observe(whyDxaiHeaderRef.current)
    if (coreCapabilitiesRef.current) observer.observe(coreCapabilitiesRef.current)
    if (technologyHeaderRef.current) observer.observe(technologyHeaderRef.current)

    return () => observer.disconnect()
  }, [])

  const whyDxaiFeatures = [
    {
      icon: Layers,
      titleKey: "about.product.why.allinone.title",
      descKey: "about.product.why.allinone.desc",
      color: "text-[#22b5f8]",
      bgColor: "bg-[#22b5f8]",
      lightBg: "bg-[#22b5f8]/5",
    },
    {
      icon: Wallet,
      titleKey: "about.product.why.cost.title",
      descKey: "about.product.why.cost.desc",
      color: "text-emerald-600",
      bgColor: "bg-emerald-600",
      lightBg: "bg-emerald-50",
    },
    {
      icon: Share2,
      titleKey: "about.product.why.multiplatform.title",
      descKey: "about.product.why.multiplatform.desc",
      color: "text-purple-600",
      bgColor: "bg-purple-600",
      lightBg: "bg-purple-50",
    },
    {
      icon: Brain,
      titleKey: "about.product.why.ai.title",
      descKey: "about.product.why.ai.desc",
      color: "text-amber-600",
      bgColor: "bg-amber-600",
      lightBg: "bg-amber-50",
    },
  ]

  const productFeatures = [
    {
      icon: Video,
      titleKey: "about.product.feature.video.title",
      descKey: "about.product.feature.video.desc",
      color: "text-[#22b5f8]",
      lightBg: "bg-[#22b5f8]/5",
    },
    {
      icon: ImageIcon,
      titleKey: "about.product.feature.image.title",
      descKey: "about.product.feature.image.desc",
      color: "text-amber-600",
      lightBg: "bg-amber-50",
    },
    {
      icon: FileText,
      titleKey: "about.product.feature.content.title",
      descKey: "about.product.feature.content.desc",
      color: "text-purple-600",
      lightBg: "bg-purple-50",
    },
    {
      icon: Bot,
      titleKey: "about.product.feature.chatbot.title",
      descKey: "about.product.feature.chatbot.desc",
      color: "text-emerald-600",
      lightBg: "bg-emerald-50",
    },
    {
      icon: BarChart3,
      titleKey: "about.product.feature.analytics.title",
      descKey: "about.product.feature.analytics.desc",
      color: "text-rose-600",
      lightBg: "bg-rose-50",
    },
    {
      icon: Calendar,
      titleKey: "about.product.feature.schedule.title",
      descKey: "about.product.feature.schedule.desc",
      color: "text-cyan-600",
      lightBg: "bg-cyan-50",
    },
    {
      icon: TrendingUp,
      titleKey: "about.product.feature.report.title",
      descKey: "about.product.feature.report.desc",
      color: "text-orange-600",
      lightBg: "bg-orange-50",
    },
    {
      icon: Link2,
      titleKey: "about.product.feature.integration.title",
      descKey: "about.product.feature.integration.desc",
      color: "text-indigo-600",
      lightBg: "bg-indigo-50",
    },
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
    <section id="product" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={cn(
            "text-center mb-16 max-w-3xl mx-auto transition-all duration-700",
            isHeaderVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#22b5f8]/10 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-[#22b5f8]" />
            <span className="text-sm font-bold text-[#22b5f8] uppercase tracking-wider">
              {t("about.product.badge")}
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#111518] mb-6">
            {t("about.product.title")}
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
            {t("about.product.subtitle")}
          </p>
        </div>

        {/* Why DXAI - 4 Cards */}
        <div className="mb-24">
          <div
            ref={whyDxaiHeaderRef}
            className={cn(
              "text-center mb-12 transition-all duration-700",
              isWhyDxaiHeaderVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            <h3 className="text-3xl sm:text-4xl font-bold text-[#111518] mb-4">
              {t("about.product.why.title")}
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t("about.product.why.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyDxaiFeatures.map((feature, index) => (
              <WhyDxaiCard key={index} feature={feature} index={index} t={t} />
            ))}
          </div>
        </div>

        {/* Core Capabilities Section */}
        <div className="mb-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Feature Grid */}
            <div
              ref={coreCapabilitiesRef}
              className={cn(
                "transition-all duration-700",
                isCoreCapabilitiesVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
              )}
            >
              <h3 className="text-3xl sm:text-4xl font-bold text-[#111518] mb-4">
                {t("about.product.core.title")}
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                {t("about.product.core.desc")}
              </p>

              <div className="grid grid-cols-2 gap-4">
                {productFeatures.map((feature, index) => (
                  <FeatureCard key={index} feature={feature} index={index} t={t} />
                ))}
              </div>
            </div>

            {/* Right - Enhanced Browser Mockup */}
            <DashboardMockup t={t} isVisible={isCoreCapabilitiesVisible} />
          </div>
        </div>

        {/* Technology Behind DXAI */}
        <div className="bg-gradient-to-br from-gray-50 to-[#22b5f8]/5 border-2 border-gray-100 rounded-3xl p-8 sm:p-12">
          <div
            ref={technologyHeaderRef}
            className={cn(
              "text-center mb-12 transition-all duration-700",
              isTechnologyHeaderVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-6 shadow-md">
              <Brain className="w-4 h-4 text-[#22b5f8]" />
              <span className="text-sm font-bold text-[#22b5f8] uppercase tracking-wider">
                {t("about.product.tech.badge")}
              </span>
            </div>
            <h3 className="text-3xl sm:text-4xl font-bold text-[#111518] mb-4">
              {t("about.product.tech.title")}
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t("about.product.tech.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {aiModels.map((model, index) => (
              <AIModelCard key={index} model={model} index={index} isHeaderVisible={isTechnologyHeaderVisible} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// Sub-components
interface WhyDxaiFeature {
  icon: React.ElementType
  titleKey: string
  descKey: string
  color: string
  bgColor: string
  lightBg: string
}

function WhyDxaiCard({ feature, index, t }: { feature: WhyDxaiFeature; index: number; t: (key: string) => string }) {
  const [isVisible, setIsVisible] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), index * 100)
        }
      },
      { threshold: 0.1 }
    )

    if (cardRef.current) observer.observe(cardRef.current)
    return () => observer.disconnect()
  }, [index])

  return (
    <div
      ref={cardRef}
      className={cn(
        "group relative bg-white border-2 border-gray-100 rounded-2xl p-6 hover:border-[#22b5f8]/30 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      )}
    >
      {/* Icon */}
      <div
        className={`w-14 h-14 ${feature.lightBg} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-sm`}
      >
        <feature.icon className={`w-7 h-7 ${feature.color}`} />
      </div>

      {/* Content */}
      <h4 className="text-lg font-bold text-[#111518] mb-3 leading-tight">{t(feature.titleKey)}</h4>
      <p className="text-gray-600 leading-relaxed text-sm">{t(feature.descKey)}</p>

      {/* Bottom accent */}
      <div
        className={`absolute bottom-0 left-0 right-0 h-1.5 ${feature.bgColor} rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}
      />
    </div>
  )
}

interface ProductFeature {
  icon: React.ElementType
  titleKey: string
  descKey: string
  color: string
  lightBg: string
}

function FeatureCard({ feature, index, t }: { feature: ProductFeature; index: number; t: (key: string) => string }) {
  const [isVisible, setIsVisible] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), index * 80)
        }
      },
      { threshold: 0.1 }
    )

    if (cardRef.current) observer.observe(cardRef.current)
    return () => observer.disconnect()
  }, [index])

  return (
    <div
      ref={cardRef}
      className={cn(
        "group relative bg-white border border-gray-200 rounded-xl p-5 hover:shadow-lg hover:border-[#22b5f8]/30 hover:-translate-y-1 transition-all duration-300",
        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
      )}
    >
      <div className="flex items-start gap-3">
        <div
          className={`w-10 h-10 ${feature.lightBg} rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
        >
          <feature.icon className={`w-5 h-5 ${feature.color}`} />
        </div>
        <div className="flex-1 min-w-0">
          <h5 className="font-bold text-[#111518] text-sm mb-1 leading-tight">{t(feature.titleKey)}</h5>
          <p className="text-xs text-gray-500 font-medium">{t(feature.descKey)}</p>
        </div>
      </div>
    </div>
  )
}

function DashboardMockup({ t, isVisible }: { t: (key: string) => string; isVisible: boolean }) {
  return (
    <div
      className={cn(
        "relative transition-all duration-700 delay-200",
        isVisible ? "opacity-100 translate-x-0 scale-100" : "opacity-0 translate-x-12 scale-95"
      )}
    >
      {/* Main browser window */}
      <div className="bg-white border-2 border-gray-200 rounded-3xl shadow-2xl overflow-hidden">
        {/* Browser Chrome */}
        <div className="flex items-center gap-2 px-5 py-4 bg-gray-100 border-b border-gray-200">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <div className="flex-1 flex justify-center">
            <div className="px-6 py-2 bg-white rounded-lg text-sm text-gray-600 border border-gray-200 font-medium flex items-center gap-2">
              <svg className="w-3 h-3 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clipRule="evenodd"
                />
              </svg>
              ai.dsp.one
            </div>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="p-6 bg-gradient-to-br from-gray-50 to-[#22b5f8]/5">
          <div className="space-y-5">
            {/* Header with user */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-[#22b5f8] to-[#5fffec] rounded-xl flex items-center justify-center shadow-lg">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">DXAI Dashboard</p>
                  <p className="text-xs text-gray-500">Marketing Platform</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full" />
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-white rounded-xl p-3 shadow-md border border-gray-100">
                <p className="text-xs text-gray-500 font-medium">Videos</p>
                <p className="text-2xl font-black text-[#22b5f8]">847</p>
                <p className="text-xs text-emerald-600 font-semibold">↑ 23%</p>
              </div>
              <div className="bg-white rounded-xl p-3 shadow-md border border-gray-100">
                <p className="text-xs text-gray-500 font-medium">Content</p>
                <p className="text-2xl font-black text-purple-600">2.4K</p>
                <p className="text-xs text-emerald-600 font-semibold">↑ 18%</p>
              </div>
              <div className="bg-white rounded-xl p-3 shadow-md border border-gray-100">
                <p className="text-xs text-gray-500 font-medium">Images</p>
                <p className="text-2xl font-black text-amber-600">1.2K</p>
                <p className="text-xs text-emerald-600 font-semibold">↑ 31%</p>
              </div>
            </div>

            {/* AI Tools Active */}
            <div className="bg-white rounded-xl p-4 shadow-md border border-gray-100">
              <div className="flex items-center justify-between mb-3">
                <p className="text-xs text-gray-600 font-bold uppercase tracking-wide">AI Tools Active</p>
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1.5 bg-gradient-to-r from-[#22b5f8] to-[#008bff] text-white rounded-lg text-xs font-bold shadow-sm">
                  Video AI
                </span>
                <span className="px-3 py-1.5 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-lg text-xs font-bold shadow-sm">
                  Content AI
                </span>
                <span className="px-3 py-1.5 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-lg text-xs font-bold shadow-sm">
                  Image AI
                </span>
                <span className="px-3 py-1.5 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-lg text-xs font-bold shadow-sm">
                  Chatbot
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating stat badge */}
      <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-2xl border-2 border-gray-100">
        <p className="text-3xl font-black text-[#22b5f8]">10K+</p>
        <p className="text-sm font-bold text-gray-700">{t("about.product.stat.businesses")}</p>
      </div>
    </div>
  )
}

function AIModelCard({ model, index, isHeaderVisible }: { model: any; index: number; isHeaderVisible: boolean }) {
  const [isVisible, setIsVisible] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!isHeaderVisible) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), index * 100)
        }
      },
      { threshold: 0.1 }
    )

    if (cardRef.current) observer.observe(cardRef.current)
    return () => observer.disconnect()
  }, [index, isHeaderVisible])

  return (
    <div
      ref={cardRef}
      className={cn(
        "group relative bg-white hover:bg-gradient-to-br hover:from-white hover:to-[#22b5f8]/5 border-2 border-gray-100 hover:border-[#22b5f8]/50 rounded-2xl p-5 text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}
    >
      <div
        className="w-12 h-12 mx-auto mb-4 bg-white rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform border-2 border-gray-100 group-hover:border-[#22b5f8]/30 shadow-sm"
        style={{ color: model.color }}
      >
        <model.icon className="w-6 h-6" />
      </div>
      <p className="text-xs font-bold text-gray-800 leading-tight">{model.name}</p>

      {/* Shine effect on hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 group-hover:animate-pulse pointer-events-none" />
    </div>
  )
}
