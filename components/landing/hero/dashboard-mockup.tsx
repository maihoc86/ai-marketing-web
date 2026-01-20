"use client"

import { memo, useEffect, useState } from "react"
import { useI18n } from "@/lib/i18n"
import { Check, Zap, TrendingUp, ArrowUp } from "lucide-react"
import {
  SiFacebook,
  SiInstagram,
  SiTiktok,
  SiYoutube,
  SiLinkedin,
} from "react-icons/si"
import { cn } from "@/lib/utils"

// ============================================================
// TYPES
// ============================================================
interface MetricCardProps {
  label: string
  value: string
  growth?: string
  badge?: string
  badgeColor?: string
  delay?: number
}

interface ActivityItemProps {
  icon: "check" | "zap"
  text: string
  delay: number
}

interface RegionBarProps {
  label: string
  percentage: number
  color: string
  delay: number
}

// ============================================================
// ANIMATED NUMBER COUNTER
// ============================================================
function AnimatedCounter({ target, suffix = "", prefix = "" }: { target: string; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(0)
  const numericValue = parseFloat(target.replace(/[^0-9.]/g, ""))

  useEffect(() => {
    const duration = 2000
    const steps = 60
    const stepValue = numericValue / steps
    let current = 0

    const timer = setInterval(() => {
      current += stepValue
      if (current >= numericValue) {
        setCount(numericValue)
        clearInterval(timer)
      } else {
        setCount(current)
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [numericValue])

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + "M"
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + "K"
    }
    return num.toFixed(num % 1 === 0 ? 0 : 1)
  }

  return (
    <span>
      {prefix}{formatNumber(count)}{suffix}
    </span>
  )
}

// ============================================================
// METRIC CARD COMPONENT
// ============================================================
const MetricCard = memo(({ label, value, growth, badge, badgeColor = "bg-emerald-500", delay = 0 }: MetricCardProps) => (
  <div
    className="bg-slate-800/50 rounded-lg p-3 border border-slate-700/50 hover:border-blue-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
    style={{
      animation: `fadeInUp 0.5s ease-out ${delay}ms forwards`,
      opacity: 0
    }}
  >
    <div className="flex items-center justify-between mb-1">
      <span className="text-[10px] text-slate-400 uppercase tracking-wider font-medium">{label}</span>
      {badge && (
        <span className={cn("text-[8px] px-1.5 py-0.5 rounded-full text-white font-medium", badgeColor)}>
          {badge}
        </span>
      )}
    </div>
    <div className="flex items-end gap-2">
      <span className="text-xl font-bold text-white">
        <AnimatedCounter target={value} suffix={value.includes("%") ? "%" : value.includes("+") ? "+" : ""} />
      </span>
      {growth && (
        <span className="text-[10px] text-emerald-400 flex items-center gap-0.5 mb-1">
          <ArrowUp className="w-2.5 h-2.5" />
          {growth}
        </span>
      )}
    </div>
  </div>
))

MetricCard.displayName = "MetricCard"

// ============================================================
// ACTIVITY ITEM COMPONENT
// ============================================================
const ActivityItem = memo(({ icon, text, delay }: ActivityItemProps) => (
  <div
    className="flex items-center gap-2 text-[10px] py-1.5 px-2 rounded-md bg-slate-800/30 hover:bg-slate-700/30 transition-colors"
    style={{
      animation: `slideInRight 0.4s ease-out ${delay}ms forwards`,
      opacity: 0,
      transform: "translateX(20px)"
    }}
  >
    {icon === "check" ? (
      <Check className="w-3 h-3 text-emerald-400 shrink-0" />
    ) : (
      <Zap className="w-3 h-3 text-yellow-400 shrink-0" />
    )}
    <span className="text-slate-300 truncate">{text}</span>
  </div>
))

ActivityItem.displayName = "ActivityItem"

// ============================================================
// REGION BAR COMPONENT
// ============================================================
const RegionBar = memo(({ label, percentage, color, delay }: RegionBarProps) => {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => setWidth(percentage), delay)
    return () => clearTimeout(timer)
  }, [percentage, delay])

  return (
    <div className="flex items-center gap-2">
      <span className="text-[9px] text-slate-400 w-16 truncate">{label}</span>
      <div className="flex-1 h-4 bg-slate-700/50 rounded-sm overflow-hidden">
        <div
          className={cn("h-full rounded-sm transition-all duration-1000 ease-out", color)}
          style={{ width: `${width}%` }}
        />
      </div>
      <span className="text-[9px] text-slate-400 w-8 text-right">{percentage}%</span>
    </div>
  )
})

RegionBar.displayName = "RegionBar"

// ============================================================
// PLATFORM ICONS
// ============================================================
const platforms = [
  { Icon: SiFacebook, color: "#1877F2", name: "Facebook" },
  { Icon: SiInstagram, color: "#E4405F", name: "Instagram" },
  { Icon: SiTiktok, color: "#ffffff", name: "TikTok" },
  { Icon: SiYoutube, color: "#FF0000", name: "YouTube" },
  { Icon: SiLinkedin, color: "#0A66C2", name: "LinkedIn" },
]

// ============================================================
// MAIN DASHBOARD COMPONENT
// ============================================================
export function DashboardMockup() {
  const { t } = useI18n()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div
      className={cn(
        "relative w-full max-w-lg mx-auto transition-all duration-700",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}
    >
      {/* Glow effect */}
      <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 rounded-3xl blur-2xl opacity-60" />

      {/* Main dashboard container */}
      <div className="relative bg-slate-900/95 backdrop-blur-xl rounded-2xl border border-slate-700/50 shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-slate-700/50 bg-slate-800/30">
          <div className="flex items-center gap-2">
            {/* Window controls */}
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
            </div>
            <span className="text-xs font-semibold text-slate-300 ml-2">{t("hero.dashboard.version")}</span>
          </div>

          {/* Live indicator */}
          <div className="flex items-center gap-1.5">
            <div className="relative">
              <div className="w-2 h-2 rounded-full bg-emerald-500" />
              <div className="absolute inset-0 w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            </div>
            <span className="text-[10px] font-semibold text-emerald-400 uppercase tracking-wider">
              {t("hero.dashboard.live")}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 space-y-4">
          {/* Metrics Grid */}
          <div className="grid grid-cols-2 gap-3">
            <MetricCard
              label={t("hero.dashboard.totalReach")}
              value="1200000"
              growth="+14%"
              delay={200}
            />
            <MetricCard
              label={t("hero.dashboard.aiEfficiency")}
              value="98.4"
              badge="AI"
              badgeColor="bg-blue-500"
              delay={300}
            />
            <MetricCard
              label={t("hero.dashboard.vnContent")}
              value="2500"
              growth="+23%"
              delay={400}
            />
            <MetricCard
              label={t("hero.dashboard.activeCampaigns")}
              value="47"
              badge={t("hero.dashboard.active")}
              badgeColor="bg-emerald-500"
              delay={500}
            />
          </div>

          {/* Region Performance Chart */}
          <div className="bg-slate-800/30 rounded-lg p-3 border border-slate-700/30">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] text-slate-400 uppercase tracking-wider font-medium">
                {t("hero.dashboard.regionTitle")}
              </span>
              <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
            </div>
            <div className="space-y-2">
              <RegionBar label={t("hero.dashboard.region.vietnam")} percentage={87} color="bg-blue-500" delay={600} />
              <RegionBar label={t("hero.dashboard.region.sea")} percentage={62} color="bg-blue-400" delay={700} />
              <RegionBar label={t("hero.dashboard.region.latam")} percentage={45} color="bg-blue-300/70" delay={800} />
              <RegionBar label={t("hero.dashboard.region.apac")} percentage={58} color="bg-cyan-400/70" delay={900} />
            </div>
          </div>

          {/* Activity Feed */}
          <div className="space-y-1.5">
            <ActivityItem icon="check" text={t("hero.dashboard.activity.contentGen")} delay={1000} />
            <ActivityItem icon="check" text={t("hero.dashboard.activity.vnSync")} delay={1100} />
            <ActivityItem icon="check" text={t("hero.dashboard.activity.fbOptimized")} delay={1200} />
            <ActivityItem icon="check" text={t("hero.dashboard.activity.tiktokBatch")} delay={1300} />
            <ActivityItem icon="zap" text={t("hero.dashboard.activity.aiAnalysis")} delay={1400} />
          </div>

          {/* Platform Integration Bar */}
          <div className="flex items-center justify-between pt-2 border-t border-slate-700/30">
            <div className="flex items-center gap-2">
              {platforms.map((platform, index) => (
                <div
                  key={platform.name}
                  className="p-1.5 rounded-md bg-slate-800/50 border border-slate-700/30 hover:border-blue-500/30 transition-all duration-200 hover:scale-110"
                  style={{
                    animation: `fadeInUp 0.3s ease-out ${1500 + index * 100}ms forwards`,
                    opacity: 0
                  }}
                >
                  <platform.Icon
                    className="w-3.5 h-3.5"
                    style={{ color: platform.color }}
                  />
                </div>
              ))}
            </div>
            <span
              className="text-[9px] text-slate-500"
              style={{
                animation: `fadeInUp 0.3s ease-out 2000ms forwards`,
                opacity: 0
              }}
            >
              {t("hero.dashboard.platforms")}
            </span>
          </div>
        </div>
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

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes expandWidth {
          from {
            width: 0%;
          }
          to {
            width: var(--target-width, 0%);
          }
        }
      `}</style>
    </div>
  )
}
