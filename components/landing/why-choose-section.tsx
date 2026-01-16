"use client"

import { useState } from "react"
import { ChevronDown, Sparkles, Users, CreditCard, Smartphone, Zap, Brain, Shield, Globe } from "lucide-react"
import { cn } from "@/lib/utils"
import { useI18n } from "@/lib/i18n"

export function WhyChooseSection() {
  const [openItem, setOpenItem] = useState<string>("ai-models")
  const { t } = useI18n()

  const reasons = [
    {
      id: "ai-models",
      icon: Sparkles,
      titleKey: "whyChoose.aiModels.title",
      descriptionKey: "whyChoose.aiModels.description",
      toolsKey: "whyChoose.tools.aiModels",
    },
    {
      id: "team",
      icon: Users,
      titleKey: "whyChoose.team.title",
      descriptionKey: "whyChoose.team.description",
      toolsKey: "whyChoose.tools.team",
    },
    {
      id: "cost",
      icon: CreditCard,
      titleKey: "whyChoose.cost.title",
      descriptionKey: "whyChoose.cost.description",
      toolsKey: "whyChoose.tools.cost",
    },
    {
      id: "mobile",
      icon: Smartphone,
      titleKey: "whyChoose.mobile.title",
      descriptionKey: "whyChoose.mobile.description",
      toolsKey: "whyChoose.tools.mobile",
    },
  ]

  // AI model badges for the mockup
  const aiBadges = [
    { name: "GPT 5.1", icon: Brain, position: "top-4 -left-4", delay: "0s" },
    { name: "Gemini 2.5 Pro", icon: Sparkles, position: "top-1/4 -right-6", delay: "0.5s" },
    { name: "DeepSeek-R1", icon: Zap, position: "bottom-1/3 -left-6", delay: "1s" },
    { name: "Claude 4.7", icon: Shield, position: "bottom-8 -right-3", delay: "1.5s" },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-white to-primary/5 relative overflow-hidden">
      {/* Background dot pattern */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: "radial-gradient(circle, #cbd5e1 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Decorative blur circles */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header - Using translations */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary text-balance">
            {t("whyChoose.title")}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            {t("whyChoose.subtitle")}{" "}
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary font-semibold">
              {t("whyChoose.price")}
            </span>
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Accordion */}
          <div className="bg-white rounded-3xl border border-gray-100 shadow-xl p-2">
            {reasons.map((reason, index) => {
              const isOpen = openItem === reason.id
              const Icon = reason.icon
              const tools = t(reason.toolsKey).split(", ")

              return (
                <div
                  key={reason.id}
                  className={cn(
                    "rounded-2xl transition-all duration-300 overflow-hidden",
                    isOpen ? "bg-primary/5 border-l-[3px] border-l-primary" : "bg-transparent hover:bg-gray-50",
                    index !== reasons.length - 1 && !isOpen && "border-b border-gray-100",
                  )}
                >
                  <button
                    onClick={() => setOpenItem(reason.id)}
                    className="w-full flex items-center gap-4 p-5 text-left"
                  >
                    {/* Icon */}
                    <div
                      className={cn(
                        "w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300",
                        isOpen ? "bg-primary text-white shadow-lg shadow-primary/30" : "bg-gray-100 text-gray-500",
                      )}
                    >
                      <Icon className="w-6 h-6" />
                    </div>

                    {/* Title - Using translation */}
                    <span
                      className={cn(
                        "flex-1 font-semibold transition-colors",
                        isOpen ? "text-gray-900" : "text-gray-700",
                      )}
                    >
                      {t(reason.titleKey)}
                    </span>

                    {/* Chevron */}
                    <ChevronDown
                      className={cn(
                        "w-5 h-5 transition-all duration-300",
                        isOpen ? "rotate-180 text-primary" : "text-gray-400",
                      )}
                    />
                  </button>

                  {/* Expanded Content */}
                  <div
                    className={cn(
                      "grid transition-all duration-300 ease-in-out",
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                    )}
                  >
                    <div className="overflow-hidden">
                      <div className="px-5 pb-5 pl-[76px]">
                        <p className="text-gray-600 leading-relaxed text-[15px]">{t(reason.descriptionKey)}</p>
                        {/* Tool badges */}
                        <div className="flex flex-wrap gap-2 mt-4">
                          {tools.map((tool) => (
                            <span
                              key={tool}
                              className="inline-flex items-center px-3 py-1 rounded-full bg-white border border-gray-200 text-xs font-medium text-gray-600"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Right Side - Dashboard Mockup */}
          <div className="relative lg:pl-8">
            <div className="relative">
              {/* Main mockup card */}
              <div
                className="relative bg-white rounded-2xl border border-gray-200 shadow-2xl overflow-hidden"
                style={{
                  transform: "perspective(1000px) rotateY(-5deg) rotateX(5deg)",
                  transformStyle: "preserve-3d",
                }}
              >
                {/* Mockup header */}
                <div className="bg-gray-50 border-b border-gray-200 px-4 py-3 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <div className="flex-1 flex justify-center">
                    <div className="bg-white rounded-md px-4 py-1 text-xs text-gray-500 border border-gray-200">
                      admin.dsp.one
                    </div>
                  </div>
                </div>

                {/* Mockup content - Using translations */}
                <div className="p-6 bg-gradient-to-br from-gray-50 to-white min-h-[400px]">
                  {/* Dashboard header */}
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h4 className="font-semibold text-gray-900">{t("whyChoose.mockup.title")}</h4>
                      <p className="text-sm text-gray-500">{t("whyChoose.mockup.subtitle")}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <Globe className="w-4 h-4 text-primary" />
                      </div>
                    </div>
                  </div>

                  {/* Stats grid */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
                      <div className="text-2xl font-bold text-gray-900">150+</div>
                      <div className="text-xs text-gray-500">{t("whyChoose.mockup.videos")}</div>
                    </div>
                    <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
                      <div className="text-2xl font-bold text-primary">97%</div>
                      <div className="text-xs text-gray-500">{t("whyChoose.mockup.accuracy")}</div>
                    </div>
                  </div>

                  {/* AI Tools section */}
                  <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
                    <div className="text-sm font-medium text-gray-700 mb-3">{t("whyChoose.mockup.tools")}</div>
                    <div className="flex flex-wrap gap-2">
                      {[
                        t("whyChoose.mockup.videoAi"),
                        t("whyChoose.mockup.content"),
                        t("whyChoose.mockup.imageGen"),
                        t("whyChoose.mockup.chatbot"),
                      ].map((tool) => (
                        <span
                          key={tool}
                          className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-primary/5 text-xs font-medium text-primary"
                        >
                          <Sparkles className="w-3 h-3" />
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Team section */}
                  <div className="mt-4 bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
                    <div className="text-sm font-medium text-gray-700 mb-3">{t("whyChoose.mockup.members")}</div>
                    <div className="flex items-center">
                      <div className="flex -space-x-2">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <div
                            key={i}
                            className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/20 to-primary/40 border-2 border-white flex items-center justify-center text-xs font-medium text-primary"
                          >
                            {String.fromCharCode(64 + i)}
                          </div>
                        ))}
                      </div>
                      <span className="ml-3 text-sm text-gray-500">{t("whyChoose.mockup.others")}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating AI badges */}
              {aiBadges.map((badge) => {
                const BadgeIcon = badge.icon
                return (
                  <div
                    key={badge.name}
                    className={cn(
                      "absolute z-20 bg-white rounded-full px-3 py-1.5 shadow-lg border border-gray-100 flex items-center gap-2",
                      badge.position,
                    )}
                    style={{
                      animation: `float 3s ease-in-out infinite`,
                      animationDelay: badge.delay,
                    }}
                  >
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                      <BadgeIcon className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-xs font-medium text-gray-700">{badge.name}</span>
                  </div>
                )
              })}

              {/* Glow effect behind mockup */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-cyan-500/10 to-purple-500/10 rounded-3xl blur-2xl -z-10" />
            </div>
          </div>
        </div>
      </div>

      {/* Float animation keyframes */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </section>
  )
}
