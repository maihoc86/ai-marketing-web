"use client"

import { memo } from "react"
import { useI18n } from "@/lib/i18n"
import { Shield, Zap, Star, CreditCard, Clock, Lock, Users, MapPin } from "lucide-react"
import { cn } from "@/lib/utils"

// ============================================================
// TYPES
// ============================================================
interface TrustBadgeProps {
  icon: React.ReactNode
  text: string
  variant?: "default" | "highlight"
}

interface UserAvatarProps {
  index: number
}

// ============================================================
// USER AVATAR COMPONENT
// ============================================================
const UserAvatar = memo(({ index }: UserAvatarProps) => {
  const colors = [
    "bg-[#ff7900]",
    "bg-[#22b5f8]",
    "bg-[#5fffec]",
    "bg-[#008bff]",
    "bg-emerald-500",
  ]
  const initials = ["T", "M", "H", "L", "N"]

  return (
    <div
      className={cn(
        "w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-semibold border-2 border-white shadow-sm",
        colors[index % colors.length]
      )}
      style={{
        marginLeft: index > 0 ? "-8px" : "0",
        zIndex: 5 - index,
      }}
    >
      {initials[index]}
    </div>
  )
})

UserAvatar.displayName = "UserAvatar"

// ============================================================
// TRUST BADGE COMPONENT
// ============================================================
const TrustBadge = memo(({ icon, text, variant = "default" }: TrustBadgeProps) => (
  <div
    className={cn(
      "flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 hover:scale-105",
      variant === "highlight"
        ? "bg-[#22b5f8]/10 text-[#008bff] border border-[#22b5f8]/30"
        : "bg-gray-100 text-gray-700 border border-gray-200"
    )}
  >
    {icon}
    <span>{text}</span>
  </div>
))

TrustBadge.displayName = "TrustBadge"

// ============================================================
// USER SOCIAL PROOF
// ============================================================
export function UserSocialProof() {
  const { t } = useI18n()

  return (
    <div className="flex flex-col sm:flex-row items-center gap-4">
      {/* Avatar cluster */}
      <div className="flex items-center">
        <div className="flex">
          {[0, 1, 2, 3, 4].map((index) => (
            <UserAvatar key={index} index={index} />
          ))}
        </div>
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold text-[#ff7900] bg-[#ff7900]/10 border-2 border-white shadow-sm"
          style={{ marginLeft: "-8px" }}
        >
          +200
        </div>
      </div>

      {/* Text */}
      <div className="flex flex-col items-center sm:items-start">
        <span className="text-sm font-semibold text-gray-900">
          {t("hero.trust.users")}
        </span>
        <span className="text-xs text-gray-500 flex items-center gap-1">
          <MapPin className="w-3 h-3" />
          {t("hero.trust.provinces")}
        </span>
      </div>
    </div>
  )
}

// ============================================================
// SECURITY & COMPLIANCE BADGES
// ============================================================
export function SecurityBadges() {
  const { t } = useI18n()

  return (
    <div className="flex flex-wrap justify-center gap-2">
      <TrustBadge
        icon={<Shield className="w-3.5 h-3.5 text-emerald-600" />}
        text={t("hero.trust.soc2")}
        variant="highlight"
      />
      <TrustBadge
        icon={<Lock className="w-3.5 h-3.5 text-[#22b5f8]" />}
        text={t("hero.trust.iso")}
        variant="highlight"
      />
      <TrustBadge
        icon={<Zap className="w-3.5 h-3.5 text-yellow-600" />}
        text={t("hero.trust.uptime")}
      />
      <TrustBadge
        icon={<MapPin className="w-3.5 h-3.5 text-red-500" />}
        text={t("hero.trust.dataResidency")}
      />
    </div>
  )
}

// ============================================================
// PERFORMANCE BADGES
// ============================================================
export function PerformanceBadges() {
  const { t } = useI18n()

  return (
    <div className="flex flex-wrap justify-center gap-2">
      <TrustBadge
        icon={<Zap className="w-3.5 h-3.5 text-purple-600" />}
        text={t("hero.trust.videoTime")}
        variant="highlight"
      />
      <TrustBadge
        icon={<Star className="w-3.5 h-3.5 text-yellow-500" />}
        text={t("hero.trust.avgRoi")}
        variant="highlight"
      />
      <TrustBadge
        icon={<Users className="w-3.5 h-3.5 text-[#22b5f8]" />}
        text={t("hero.trust.rating")}
      />
    </div>
  )
}

// ============================================================
// CTA TRUST SIGNALS
// ============================================================
export function CTATrustSignals() {
  const { t } = useI18n()

  return (
    <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-600">
      <span className="flex items-center gap-1.5">
        <CreditCard className="w-4 h-4 text-emerald-500" />
        {t("hero.trust.noCard")}
      </span>
      <span className="flex items-center gap-1.5">
        <Clock className="w-4 h-4 text-[#22b5f8]" />
        {t("hero.trust.setup")}
      </span>
      <span className="flex items-center gap-1.5">
        <Shield className="w-4 h-4 text-[#ff7900]" />
        {t("hero.trust.security")}
      </span>
    </div>
  )
}

// ============================================================
// VALUE PROPOSITIONS
// ============================================================
export function ValuePropositions() {
  const { t } = useI18n()

  const props = [
    { icon: "🎬", text: t("hero.valueProp.videos") },
    { icon: "📱", text: t("hero.valueProp.channels") },
    { icon: "📈", text: t("hero.valueProp.roi") },
    { icon: "💰", text: t("hero.valueProp.savings") },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl mx-auto">
      {props.map((prop, index) => (
        <div
          key={index}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/80 backdrop-blur-sm border border-gray-200/70 hover:border-[#22b5f8]/50 hover:shadow-md transition-all duration-200"
        >
          <span className="text-lg">{prop.icon}</span>
          <span className="text-sm font-medium text-gray-700">{prop.text}</span>
        </div>
      ))}
    </div>
  )
}

// ============================================================
// COMBINED TRUST SECTION
// ============================================================
export function TrustSignals() {
  return (
    <div className="space-y-6">
      {/* User Social Proof */}
      <div className="flex justify-center">
        <UserSocialProof />
      </div>

      {/* Security Badges */}
      <SecurityBadges />

      {/* Performance Badges */}
      <PerformanceBadges />
    </div>
  )
}
