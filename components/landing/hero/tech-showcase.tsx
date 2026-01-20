"use client"

import { memo, useState, useEffect } from "react"
import { useI18n } from "@/lib/i18n"
import {
  SiOpenai,
  SiGooglegemini,
  SiAnthropic,
  SiMeta,
} from "react-icons/si"
import { cn } from "@/lib/utils"

// ============================================================
// TYPES
// ============================================================
interface AIModel {
  name: string
  Icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>
  color: string
  bgColor: string
}

// ============================================================
// AI MODELS DATA
// ============================================================
const aiModels: AIModel[] = [
  {
    name: "GPT-4",
    Icon: SiOpenai,
    color: "#10A37F",
    bgColor: "rgba(16, 163, 127, 0.1)",
  },
  {
    name: "Gemini Pro",
    Icon: SiGooglegemini,
    color: "#8E75B2",
    bgColor: "rgba(142, 117, 178, 0.1)",
  },
  {
    name: "Claude",
    Icon: SiAnthropic,
    color: "#D97706",
    bgColor: "rgba(217, 119, 6, 0.1)",
  },
  {
    name: "Llama",
    Icon: SiMeta,
    color: "#0668E1",
    bgColor: "rgba(6, 104, 225, 0.1)",
  },
]

// Custom icons for Mistral and DeepSeek
function MistralIcon({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 24 24" className={className} style={style} fill="currentColor">
      <path d="M4 4h4v4H4V4zm6 0h4v4h-4V4zm6 0h4v4h-4V4zM4 10h4v4H4v-4zm6 0h4v4h-4v-4zm6 0h4v4h-4v-4zM4 16h4v4H4v-4zm6 0h4v4h-4v-4zm6 0h4v4h-4v-4z"/>
    </svg>
  )
}

function DeepSeekIcon({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 24 24" className={className} style={style} fill="currentColor">
      <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2"/>
      <path d="M12 6v12M6 12h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
}

const extendedModels: AIModel[] = [
  ...aiModels,
  {
    name: "Mistral",
    Icon: MistralIcon,
    color: "#FF7000",
    bgColor: "rgba(255, 112, 0, 0.1)",
  },
  {
    name: "DeepSeek",
    Icon: DeepSeekIcon,
    color: "#4F46E5",
    bgColor: "rgba(79, 70, 229, 0.1)",
  },
]

// ============================================================
// AI MODEL CARD
// ============================================================
const AIModelCard = memo(({ model, index }: { model: AIModel; index: number }) => (
  <div
    className="group flex flex-col items-center gap-2 p-3 rounded-xl bg-white/80 backdrop-blur-sm border border-gray-200/70 hover:border-blue-300 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
    style={{
      animation: `fadeInUp 0.5s ease-out ${index * 100}ms forwards`,
      opacity: 0,
    }}
  >
    <div
      className="w-10 h-10 rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
      style={{ backgroundColor: model.bgColor }}
    >
      <model.Icon
        className="w-5 h-5"
        style={{ color: model.color }}
      />
    </div>
    <span className="text-[10px] font-medium text-gray-700 text-center">{model.name}</span>
  </div>
))

AIModelCard.displayName = "AIModelCard"

// ============================================================
// ROTATING TEXT ANIMATION
// ============================================================
function RotatingPoweredBy() {
  const { t } = useI18n()
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % extendedModels.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
      <span>{t("hero.tech.poweredBy")}</span>
      <div className="relative h-6 w-24 overflow-hidden">
        {extendedModels.map((model, index) => (
          <div
            key={model.name}
            className={cn(
              "absolute inset-0 flex items-center gap-1.5 transition-all duration-500",
              index === currentIndex
                ? "opacity-100 translate-y-0"
                : index === (currentIndex - 1 + extendedModels.length) % extendedModels.length
                  ? "opacity-0 -translate-y-full"
                  : "opacity-0 translate-y-full"
            )}
          >
            <model.Icon className="w-4 h-4" style={{ color: model.color }} />
            <span className="font-semibold" style={{ color: model.color }}>{model.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

// ============================================================
// MAIN TECH SHOWCASE COMPONENT
// ============================================================
export function TechShowcase() {
  const { t } = useI18n()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div
      className={cn(
        "w-full max-w-2xl mx-auto transition-all duration-700",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      )}
    >
      {/* Title */}
      <div className="text-center mb-6">
        <h3 className="text-sm font-semibold text-gray-700 mb-3">
          {t("hero.tech.title")}
        </h3>
        <RotatingPoweredBy />
      </div>

      {/* AI Model Grid */}
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
        {extendedModels.map((model, index) => (
          <AIModelCard key={model.name} model={model} index={index} />
        ))}
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
}
