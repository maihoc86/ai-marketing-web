"use client";

import { useState, useEffect, memo } from "react";
import {
  Sparkles,
  Play,
  Check,
  Zap,
  TrendingUp,
  ArrowUp,
  Rocket,
  CreditCard,
  Clock,
  Shield,
} from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import {
  SiFacebook,
  SiInstagram,
  SiTiktok,
  SiYoutube,
  SiLinkedin,
} from "react-icons/si";
import {
  OpenAIIcon,
  GeminiIcon,
  ClaudeIcon,
  DeepSeekIcon,
  MetaIcon,
  MistralIcon,
} from "@/components/brand-icons";
import Link from "next/link";

// ============================================================
// ANIMATED COUNTER COMPONENT
// ============================================================
function AnimatedCounter({
  target,
  suffix = "",
}: {
  target: string;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);
  const numericValue = parseFloat(target.replace(/[^0-9.]/g, ""));

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const stepValue = numericValue / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += stepValue;
      if (current >= numericValue) {
        setCount(numericValue);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [numericValue]);

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + "M";
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + "K";
    }
    return num.toFixed(num % 1 === 0 ? 0 : 1);
  };

  return (
    <span>
      {formatNumber(count)}
      {suffix}
    </span>
  );
}

// ============================================================
// DASHBOARD METRIC CARD
// ============================================================
interface MetricCardProps {
  label: string;
  value: string;
  growth?: string;
  badge?: string;
  badgeColor?: string;
  delay?: number;
}

const MetricCard = memo(
  ({
    label,
    value,
    growth,
    badge,
    badgeColor = "bg-emerald-500",
    delay = 0,
  }: MetricCardProps) => (
    <div
      className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50 hover:border-blue-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
      style={{
        animation: `fadeInUp 0.5s ease-out ${delay}ms forwards`,
        opacity: 0,
      }}
    >
      <div className="flex items-center justify-between mb-2">
        <span className="text-[11px] text-slate-400 uppercase tracking-wider font-medium">
          {label}
        </span>
        {badge && (
          <span
            className={cn(
              "text-[9px] px-2 py-0.5 rounded-full text-white font-bold",
              badgeColor,
            )}
          >
            {badge}
          </span>
        )}
      </div>
      <div className="flex items-end gap-2">
        <span className="text-2xl font-bold text-white">
          <AnimatedCounter
            target={value}
            suffix={value.includes("%") ? "%" : value.includes("+") ? "+" : ""}
          />
        </span>
        {growth && (
          <span className="text-[11px] text-emerald-400 flex items-center gap-0.5 mb-1 font-semibold">
            <ArrowUp className="w-3 h-3" />
            {growth}
          </span>
        )}
      </div>
    </div>
  ),
);

MetricCard.displayName = "MetricCard";

// ============================================================
// LIGHT THEME METRIC CARD
// ============================================================
const MetricCardLight = memo(
  ({
    label,
    value,
    growth,
    badge,
    badgeColor = "bg-emerald-500",
    delay = 0,
  }: MetricCardProps) => (
    <div
      className="bg-white rounded-xl p-4 border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-md"
      style={{
        animation: `fadeInUp 0.5s ease-out ${delay}ms forwards`,
        opacity: 0,
      }}
    >
      <div className="flex items-center justify-between mb-2">
        <span className="text-[11px] text-gray-500 uppercase tracking-wider font-medium">
          {label}
        </span>
        {badge && (
          <span
            className={cn(
              "text-[9px] px-2 py-0.5 rounded-full text-white font-bold",
              badgeColor,
            )}
          >
            {badge}
          </span>
        )}
      </div>
      <div className="flex items-end gap-2">
        <span className="text-2xl font-bold text-gray-900">
          <AnimatedCounter
            target={value}
            suffix={value.includes("%") ? "%" : value.includes("+") ? "+" : ""}
          />
        </span>
        {growth && (
          <span className="text-[11px] text-emerald-600 flex items-center gap-0.5 mb-1 font-semibold">
            <ArrowUp className="w-3 h-3" />
            {growth}
          </span>
        )}
      </div>
    </div>
  ),
);

MetricCardLight.displayName = "MetricCardLight";

// ============================================================
// ACTIVITY ITEM
// ============================================================
interface ActivityItemProps {
  icon: "check" | "zap";
  text: string;
  delay: number;
}

const ActivityItem = memo(({ icon, text, delay }: ActivityItemProps) => (
  <div
    className="flex items-center gap-2 text-[11px] py-2 px-3 rounded-lg bg-slate-800/30 hover:bg-slate-700/30 transition-colors"
    style={{
      animation: `slideInRight 0.4s ease-out ${delay}ms forwards`,
      opacity: 0,
      transform: "translateX(20px)",
    }}
  >
    {icon === "check" ? (
      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
    ) : (
      <Zap className="w-3.5 h-3.5 text-yellow-400 shrink-0" />
    )}
    <span className="text-slate-300 truncate">{text}</span>
  </div>
));

ActivityItem.displayName = "ActivityItem";

// ============================================================
// LIGHT THEME ACTIVITY ITEM
// ============================================================
const ActivityItemLight = memo(({ icon, text, delay }: ActivityItemProps) => (
  <div
    className="flex items-center gap-2 text-[11px] py-2 px-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors border border-gray-100"
    style={{
      animation: `slideInRight 0.4s ease-out ${delay}ms forwards`,
      opacity: 0,
      transform: "translateX(20px)",
    }}
  >
    {icon === "check" ? (
      <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
    ) : (
      <Zap className="w-3.5 h-3.5 text-amber-500 shrink-0" />
    )}
    <span className="text-gray-700 truncate">{text}</span>
  </div>
));

ActivityItemLight.displayName = "ActivityItemLight";

// ============================================================
// REGION BAR
// ============================================================
interface RegionBarProps {
  label: string;
  percentage: number;
  color: string;
  delay: number;
}

const RegionBar = memo(
  ({ label, percentage, color, delay }: RegionBarProps) => {
    const [width, setWidth] = useState(0);

    useEffect(() => {
      const timer = setTimeout(() => setWidth(percentage), delay);
      return () => clearTimeout(timer);
    }, [percentage, delay]);

    return (
      <div className="flex items-center gap-3">
        <span className="text-[10px] text-slate-400 w-20 truncate font-medium">
          {label}
        </span>
        <div className="flex-1 h-5 bg-slate-700/50 rounded overflow-hidden">
          <div
            className={cn(
              "h-full rounded transition-all duration-1000 ease-out",
              color,
            )}
            style={{ width: `${width}%` }}
          />
        </div>
        <span className="text-[10px] text-slate-400 w-10 text-right font-semibold">
          {percentage}%
        </span>
      </div>
    );
  },
);

RegionBar.displayName = "RegionBar";

// ============================================================
// LIGHT THEME REGION BAR
// ============================================================
const RegionBarLight = memo(
  ({ label, percentage, color, delay }: RegionBarProps) => {
    const [width, setWidth] = useState(0);

    useEffect(() => {
      const timer = setTimeout(() => setWidth(percentage), delay);
      return () => clearTimeout(timer);
    }, [percentage, delay]);

    return (
      <div className="flex items-center gap-3">
        <span className="text-[10px] text-gray-600 w-20 truncate font-medium">
          {label}
        </span>
        <div className="flex-1 h-5 bg-gray-200 rounded overflow-hidden">
          <div
            className={cn(
              "h-full rounded transition-all duration-1000 ease-out",
              color,
            )}
            style={{ width: `${width}%` }}
          />
        </div>
        <span className="text-[10px] text-gray-600 w-10 text-right font-semibold">
          {percentage}%
        </span>
      </div>
    );
  },
);

RegionBarLight.displayName = "RegionBarLight";

// ============================================================
// PLATFORM ICONS
// ============================================================
const platforms = [
  { Icon: SiFacebook, color: "#1877F2", name: "Facebook" },
  { Icon: SiInstagram, color: "#E4405F", name: "Instagram" },
  { Icon: SiTiktok, color: "#ffffff", name: "TikTok" },
  { Icon: SiYoutube, color: "#FF0000", name: "YouTube" },
  { Icon: SiLinkedin, color: "#0A66C2", name: "LinkedIn" },
];

// ============================================================
// MAIN HERO COMPONENT
// ============================================================
export function HeroLightTheme() {
  const { t } = useI18n();
  const [isVisible] = useState(true);

  return (
    <section className="relative hero-gradient-light overflow-hidden min-h-screen flex flex-col justify-center py-16 md:py-24 font-sans">
      {/* Decorative Background Elements */}
      <div
        className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-100/60 rounded-full blur-[100px] opacity-70 mix-blend-multiply"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 -right-20 w-96 h-96 bg-indigo-100/60 rounded-full blur-[100px] opacity-70 mix-blend-multiply"
        aria-hidden="true"
      />

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div
            className={cn(
              "flex flex-col gap-6 transition-all duration-700",
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8",
            )}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-linear-to-r from-blue-100 to-blue-50 border border-blue-200 w-fit">
              <Rocket className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-semibold text-blue-700">
                {t("hero.badge")}
              </span>
            </div>

            {/* Main Headline - Value-Driven */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight text-gray-900">
              {t("heroLight.title.line1")} <br />
              {t("heroLight.title.line2")}{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600">
                {t("heroLight.title.highlight")}
              </span>
            </h1>

            {/* Subheadline - Specific Value Props */}
            <p className="text-base md:text-lg text-gray-700 max-w-xl leading-relaxed">
              {t("hero.subtitle")}
            </p>

            {/* Key Value Props - Quick Stats */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="flex items-start gap-2">
                <div className="shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                  <svg
                    className="w-3 h-3 text-green-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="text-sm text-gray-700">
                  <span className="font-bold text-blue-600">
                    {t("heroLight.stats.videos")}
                  </span>{" "}
                  {t("heroLight.stats.videosAuto")}
                </p>
              </div>
              <div className="flex items-start gap-2">
                <div className="shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                  <svg
                    className="w-3 h-3 text-green-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="text-sm text-gray-700">
                  {t("heroLight.stats.channelsManage")}{" "}
                  <span className="font-bold text-indigo-600">
                    {t("heroLight.stats.channels")}
                  </span>{" "}
                  {t("heroLight.stats.channelsSim")}
                </p>
              </div>
              <div className="flex items-start gap-2">
                <div className="shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                  <svg
                    className="w-3 h-3 text-green-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="text-sm text-gray-700">
                  {t("heroLight.stats.roiText")}{" "}
                  <span className="font-bold text-purple-600">
                    {t("heroLight.stats.roi")}
                  </span>{" "}
                  {t("heroLight.stats.roiTime")}
                </p>
              </div>
              <div className="flex items-start gap-2">
                <div className="shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                  <svg
                    className="w-3 h-3 text-green-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="text-sm text-gray-700">
                  {t("heroLight.stats.saveText")}{" "}
                  <span className="font-bold text-amber-600">
                    {t("heroLight.stats.saveTime")}
                  </span>{" "}
                  {t("heroLight.stats.saveCost")}
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-4 pt-2">
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/dang-ky"
                  className="btn-primary-light flex items-center gap-2 group shadow-lg hover:shadow-xl transition-all rounded-full px-6 py-3"
                >
                  <Sparkles className="w-5 h-5" />
                  {t("hero.cta.trial")}
                  <span className="ml-1 transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </Link>
                <button className="btn-secondary-light flex items-center gap-2 group rounded-full px-6 py-3">
                  <Play className="w-5 h-5" />
                  {t("hero.cta.demo")}
                </button>
              </div>

              {/* CTA Sub-text - Trust Signals */}
              <div className="flex flex-wrap items-center gap-4 text-xs text-gray-600">
                <span className="flex items-center gap-1.5">
                  <CreditCard className="w-4 h-4 text-emerald-500" />
                  <span className="font-medium">{t("hero.trust.noCard")}</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-blue-500" />
                  <span className="font-medium">{t("hero.trust.setup")}</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Shield className="w-4 h-4 text-purple-500" />
                  <span className="font-medium">
                    {t("hero.trust.security")}
                  </span>
                </span>
              </div>
            </div>

            {/* User Social Proof */}
            <div className="flex items-center gap-4 pt-2">
              <div className="flex">
                {["T", "M", "H", "L", "N"].map((initial, index) => (
                  <div
                    key={index}
                    className={cn(
                      "w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-semibold border-2 border-white shadow-sm",
                      [
                        "bg-blue-500",
                        "bg-emerald-500",
                        "bg-purple-500",
                        "bg-orange-500",
                        "bg-pink-500",
                      ][index],
                    )}
                    style={{
                      marginLeft: index > 0 ? "-10px" : "0",
                      zIndex: 5 - index,
                    }}
                  >
                    {initial}
                  </div>
                ))}
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-[10px] font-bold text-blue-600 bg-blue-100 border-2 border-white shadow-sm"
                  style={{ marginLeft: "-10px" }}
                >
                  +12K
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-gray-900">
                  {t("hero.trust.users")}
                </span>
                <span className="text-xs text-gray-500">
                  {t("hero.trust.provinces")}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column - LIGHT DASHBOARD MOCKUP */}
          <div
            className={cn(
              "relative transition-all duration-700 delay-300",
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8",
            )}
          >
            {/* Glow effect */}
            <div className="absolute -inset-4 bg-linear-to-r from-blue-200/40 via-indigo-200/40 to-purple-200/40 rounded-3xl blur-2xl opacity-70" />

            {/* Main dashboard container - LIGHT THEME */}
            <div className="relative bg-white/95 backdrop-blur-xl rounded-2xl border border-gray-200/80 shadow-xl overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 bg-gray-50/50">
                <div className="flex items-center gap-3">
                  {/* Window controls */}
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <span className="text-xs font-semibold text-gray-600 ml-2">
                    {t("hero.dashboard.version")}
                  </span>
                </div>

                {/* Live indicator */}
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                    <div className="absolute inset-0 w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                  </div>
                  <span className="text-[11px] font-bold text-emerald-600 uppercase tracking-wider">
                    {t("hero.dashboard.live")}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 space-y-4">
                {/* Metrics Grid */}
                <div className="grid grid-cols-2 gap-3">
                  <MetricCardLight
                    label={t("hero.dashboard.totalReach")}
                    value="1200000"
                    growth="+14%"
                    delay={200}
                  />
                  <MetricCardLight
                    label={t("hero.dashboard.aiEfficiency")}
                    value="98.4"
                    badge="AI"
                    badgeColor="bg-blue-500"
                    delay={300}
                  />
                  <MetricCardLight
                    label={t("hero.dashboard.contentCreated")}
                    value="2500"
                    growth="+23%"
                    delay={400}
                  />
                  <MetricCardLight
                    label={t("hero.dashboard.activeCampaigns")}
                    value="47"
                    badge={t("hero.dashboard.active")}
                    badgeColor="bg-emerald-500"
                    delay={500}
                  />
                </div>

                {/* Region Performance Chart */}
                <div className="bg-gray-50/80 rounded-xl p-4 border border-gray-100">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] text-gray-500 uppercase tracking-wider font-medium">
                      {t("hero.dashboard.regionTitle")}
                    </span>
                    <TrendingUp className="w-4 h-4 text-emerald-500" />
                  </div>
                  <div className="space-y-3">
                    <RegionBarLight
                      label={t("hero.dashboard.region.vietnam")}
                      percentage={87}
                      color="bg-blue-500"
                      delay={600}
                    />
                    <RegionBarLight
                      label={t("hero.dashboard.region.sea")}
                      percentage={62}
                      color="bg-blue-400"
                      delay={700}
                    />
                    <RegionBarLight
                      label={t("hero.dashboard.region.latam")}
                      percentage={45}
                      color="bg-indigo-400"
                      delay={800}
                    />
                    <RegionBarLight
                      label={t("hero.dashboard.region.apac")}
                      percentage={58}
                      color="bg-cyan-500"
                      delay={900}
                    />
                  </div>
                </div>
                {/* Platform Integration Bar */}
                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <div className="flex items-center gap-2">
                    {platforms.map((platform, index) => (
                      <div
                        key={platform.name}
                        className="p-2 rounded-lg bg-gray-50 border border-gray-200 hover:border-blue-300 hover:shadow-sm transition-all duration-200 hover:scale-110"
                        style={{
                          animation: `fadeInUp 0.3s ease-out ${1500 + index * 100}ms forwards`,
                          opacity: 0,
                        }}
                      >
                        <platform.Icon
                          className="w-4 h-4"
                          style={{
                            color:
                              platform.name === "TikTok"
                                ? "#000000"
                                : platform.color,
                          }}
                        />
                      </div>
                    ))}
                  </div>
                  <span
                    className="text-[10px] text-gray-500 font-medium"
                    style={{
                      animation: `fadeInUp 0.3s ease-out 2000ms forwards`,
                      opacity: 0,
                    }}
                  >
                    {t("hero.dashboard.platforms")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Technology Behind DXAI - AI Models Marquee */}
      <div className="border-t border-gray-200/60 bg-white/50 backdrop-blur-sm py-12 mt-auto">
        <div className="container mx-auto text-center mb-8">
          <p className="text-xs font-bold text-gray-600 uppercase tracking-[0.3em]">
            {t("heroLight.tech.title")}
          </p>
          <p className="text-xs text-gray-500 mt-2">
            {t("heroLight.tech.subtitle")}
          </p>
        </div>
        <div className="flex overflow-hidden group relative">
          <div
            className="absolute left-0 top-0 bottom-0 w-24 bg-linear-to-r from-white to-transparent z-10 pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute right-0 top-0 bottom-0 w-24 bg-linear-to-l from-white to-transparent z-10 pointer-events-none"
            aria-hidden="true"
          />
          <div className="flex animate-scroll gap-16 items-center whitespace-nowrap px-10">
            {/* Duplicate content for seamless loop */}
            {[...Array(2)].map((_, setIndex) => (
              <div key={setIndex} className="flex gap-16 items-center">
                {/* OpenAI GPT-4 */}
                <div className="flex items-center gap-3 group/item cursor-pointer">
                  <div className="w-11 h-11 bg-gradient-to-br from-gray-50 to-white rounded-xl flex items-center justify-center border border-gray-200 shadow-sm group-hover/item:border-gray-400 group-hover/item:shadow-lg transition-all duration-300">
                    <OpenAIIcon className="w-7 h-7 text-[#10A37F]" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-bold text-gray-900 group-hover/item:text-[#10A37F] transition-colors">
                      OpenAI
                    </p>
                    <p className="text-xs text-gray-500">GPT-4o</p>
                  </div>
                </div>

                {/* Google Gemini */}
                <div className="flex items-center gap-3 group/item cursor-pointer">
                  <div className="w-11 h-11 bg-gradient-to-br from-blue-50 to-white rounded-xl flex items-center justify-center border border-blue-100 shadow-sm group-hover/item:border-blue-400 group-hover/item:shadow-lg transition-all duration-300">
                    <GeminiIcon className="w-7 h-7 text-[#4285F4]" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-bold text-gray-900 group-hover/item:text-[#4285F4] transition-colors">
                      Google
                    </p>
                    <p className="text-xs text-gray-500">Gemini 2.0</p>
                  </div>
                </div>

                {/* Anthropic Claude */}
                <div className="flex items-center gap-3 group/item cursor-pointer">
                  <div className="w-11 h-11 bg-gradient-to-br from-amber-50 to-white rounded-xl flex items-center justify-center border border-amber-100 shadow-sm group-hover/item:border-amber-400 group-hover/item:shadow-lg transition-all duration-300">
                    <ClaudeIcon className="w-7 h-7 text-[#CC785C]" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-bold text-gray-900 group-hover/item:text-[#CC785C] transition-colors">
                      Anthropic
                    </p>
                    <p className="text-xs text-gray-500">Claude 3.7</p>
                  </div>
                </div>

                {/* Meta Llama */}
                <div className="flex items-center gap-3 group/item cursor-pointer">
                  <div className="w-11 h-11 bg-gradient-to-br from-blue-50 to-white rounded-xl flex items-center justify-center border border-blue-100 shadow-sm group-hover/item:border-blue-400 group-hover/item:shadow-lg transition-all duration-300">
                    <MetaIcon className="w-7 h-7 text-[#0668E1]" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-bold text-gray-900 group-hover/item:text-[#0668E1] transition-colors">
                      Meta
                    </p>
                    <p className="text-xs text-gray-500">Llama 4</p>
                  </div>
                </div>

                {/* Mistral AI */}
                <div className="flex items-center gap-3 group/item cursor-pointer">
                  <div className="w-11 h-11 bg-gradient-to-br from-orange-50 to-white rounded-xl flex items-center justify-center border border-orange-100 shadow-sm group-hover/item:border-orange-400 group-hover/item:shadow-lg transition-all duration-300">
                    <MistralIcon className="w-7 h-7 text-[#FF7000]" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-bold text-gray-900 group-hover/item:text-[#FF7000] transition-colors">
                      Mistral
                    </p>
                    <p className="text-xs text-gray-500">Large</p>
                  </div>
                </div>

                {/* DeepSeek */}
                <div className="flex items-center gap-3 group/item cursor-pointer">
                  <div className="w-11 h-11 bg-gradient-to-br from-indigo-50 to-white rounded-xl flex items-center justify-center border border-indigo-100 shadow-sm group-hover/item:border-indigo-400 group-hover/item:shadow-lg transition-all duration-300">
                    <DeepSeekIcon className="w-7 h-7 text-[#4F46E5]" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-bold text-gray-900 group-hover/item:text-[#4F46E5] transition-colors">
                      DeepSeek
                    </p>
                    <p className="text-xs text-gray-500">V3</p>
                  </div>
                </div>
              </div>
            ))}
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
      `}</style>
    </section>
  );
}
