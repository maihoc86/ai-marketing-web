"use client"

import { useState } from "react"
import { TrendingUp, Clock, Zap, Users, Settings, Check, X, Play } from "lucide-react"
import { useI18n } from "@/lib/i18n"
import YouTubeModal from "@/components/youtube-modal" // Fixed import path to match actual file name (youtube-modal.tsx)

export function RoiSection() {
  const { t } = useI18n()

  const [isModalOpen, setIsModalOpen] = useState(false)

  const comparisonData = [
    {
      criteriaKey: "roi.cost",
      traditionalKey: "roi.cost.traditional",
      aiKey: "roi.cost.ai",
      highlightKey: "roi.cost.highlight",
      icon: TrendingUp,
    },
    {
      criteriaKey: "roi.videoOutput",
      traditionalKey: "roi.video.traditional",
      aiKey: "roi.video.ai",
      highlightKey: null,
      icon: Zap,
    },
    {
      criteriaKey: "roi.time",
      traditionalKey: "roi.time.traditional",
      aiKey: "roi.time.ai",
      highlightKey: null,
      icon: Clock,
    },
    {
      criteriaKey: "roi.multitask",
      traditionalKey: "roi.multitask.traditional",
      aiKey: "roi.multitask.ai",
      highlightKey: null,
      icon: Users,
    },
    {
      criteriaKey: "roi.operation",
      traditionalKey: "roi.operation.traditional",
      aiKey: "roi.operation.ai",
      highlightKey: null,
      icon: Settings,
    },
  ]

  return (
    <section
      id="roi"
      className="w-full overflow-hidden py-12 sm:py-16 md:py-20 bg-gradient-to-b from-background to-muted/30"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-primary mb-3 sm:mb-4 px-2">
            {t("roi.title")}
          </h2>
          <p className="mt-2 sm:mt-4 text-muted-foreground text-sm sm:text-base md:text-lg px-4 max-w-2xl mx-auto">
            {t("roi.subtitle")}
          </p>
          <div className="mt-6">
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              <Play className="w-4 h-4" fill="currentColor" />
              {t("roi.cta.button")}
            </button>
          </div>
        </div>

        <div className="rounded-2xl sm:rounded-3xl border border-border shadow-lg sm:shadow-2xl overflow-hidden bg-background">
          {/* Column Headers */}
          <div className="grid grid-cols-1 lg:grid-cols-3">
            {/* Criteria header - hidden on mobile, shown on large screens */}
            <div className="hidden lg:flex items-center justify-center p-4 sm:p-6 bg-muted/50 border-b border-border">
              <span className="font-semibold text-sm sm:text-base text-muted-foreground">{t("roi.criteria")}</span>
            </div>

            {/* Traditional column header - red/orange tint */}
            <div className="flex items-center justify-center gap-2 sm:gap-3 p-4 sm:p-6 bg-gradient-to-br from-red-50 to-orange-50 border-b lg:border-l border-border">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                <X className="w-4 h-4 sm:w-5 sm:h-5 text-red-500" />
              </div>
              <div className="min-w-0">
                <h3 className="font-bold text-sm sm:text-base text-foreground leading-tight">
                  {t("roi.traditional.title")}
                </h3>
                <p className="text-xs text-muted-foreground mt-0.5">{t("roi.traditional.subtitle")}</p>
              </div>
            </div>

            {/* AI column header - green tint with badge */}
            <div className="flex items-center justify-center gap-2 sm:gap-3 p-4 sm:p-6 bg-gradient-to-br from-green-50 to-emerald-50 border-b lg:border-l border-border relative">
              <div className="absolute top-0 right-2 sm:right-4 bg-green-500 text-white text-xs font-bold px-2 sm:px-3 py-1 rounded-b-lg flex items-center gap-1 z-10">
                <Check className="w-3 h-3" />
                <span className="hidden sm:inline">{t("roi.best")}</span>
                <span className="sm:hidden">{t("roi.bestMobile")}</span>
              </div>
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
              </div>
              <div className="min-w-0">
                <h3 className="font-bold text-sm sm:text-base text-foreground leading-tight">{t("roi.ai.title")}</h3>
                <p className="text-xs text-muted-foreground mt-0.5">{t("roi.ai.subtitle")}</p>
              </div>
            </div>
          </div>

          {/* Table Rows */}
          {comparisonData.map((row, idx) => (
            <div key={idx} className={`${idx % 2 === 0 ? "bg-background" : "bg-muted/20"}`}>
              {/* Mobile Layout - Stacked */}
              <div className="lg:hidden">
                {/* Criteria header */}
                <div className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 border-b border-border bg-muted/30">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <row.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" />
                  </div>
                  <span className="font-semibold text-sm sm:text-base text-foreground">{t(row.criteriaKey)}</span>
                </div>

                {/* Values side by side on mobile */}
                <div className="grid grid-cols-2 border-b border-border">
                  {/* Traditional value */}
                  <div className="flex flex-col items-center justify-center gap-1.5 p-3 sm:p-4 bg-red-50/30 border-r border-border min-h-[80px]">
                    <span className="text-[10px] sm:text-xs text-muted-foreground text-center uppercase tracking-wide">
                      {t("roi.traditional")}
                    </span>
                    <span className="text-xs sm:text-sm text-muted-foreground text-center font-medium leading-tight px-1">
                      {t(row.traditionalKey)}
                    </span>
                  </div>

                  {/* AI value */}
                  <div className="flex flex-col items-center justify-center gap-1.5 p-3 sm:p-4 bg-green-50/30 min-h-[80px]">
                    <span className="text-[10px] sm:text-xs text-green-600 text-center font-medium uppercase tracking-wide">
                      {t("roi.aiSystem")}
                    </span>
                    <div className="flex flex-col items-center gap-1.5">
                      <span className="text-xs sm:text-sm font-semibold text-foreground text-center leading-tight px-1">
                        {t(row.aiKey)}
                      </span>
                      {row.highlightKey && (
                        <span className="bg-green-500 text-white text-[10px] sm:text-xs font-bold px-2 py-0.5 rounded-full whitespace-nowrap">
                          {t(row.highlightKey)}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Desktop Layout - Grid */}
              <div className="hidden lg:grid grid-cols-3">
                {/* Criteria cell */}
                <div className="flex items-center gap-3 p-5 border-b border-border justify-center">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                    <row.icon className="w-4 h-4 text-primary" />
                  </div>
                  <span className="font-medium text-foreground">{t(row.criteriaKey)}</span>
                </div>

                {/* Traditional value */}
                <div className="flex items-center justify-center p-5 border-b border-l border-border bg-red-50/30">
                  <span className="text-muted-foreground text-center">{t(row.traditionalKey)}</span>
                </div>

                {/* AI value with highlight badge */}
                <div className="flex items-center justify-center gap-2 p-5 border-b border-l border-border bg-green-50/30">
                  <span className="font-semibold text-foreground text-center">{t(row.aiKey)}</span>
                  {row.highlightKey && (
                    <span className="bg-green-500 text-white text-xs font-bold px-2 py-0.5 rounded-full whitespace-nowrap">
                      {t(row.highlightKey)}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 sm:mt-10 text-center px-4">
          <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 max-w-xl mx-auto">
            {t("roi.cta.text")}
          </p>
          <p className="text-xs text-muted-foreground mb-6">{t("roi.note")}</p>
          <a
            href="#pricing"
            className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 sm:px-8 py-3 sm:py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all text-sm sm:text-base min-h-[48px] touch-manipulation"
          >
            Get Started
            <TrendingUp className="w-4 h-4" />
          </a>
        </div>
      </div>

      <YouTubeModal videoId="R5RuHV_JrMM" isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  )
}
