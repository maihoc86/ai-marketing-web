"use client"

import { useState, useEffect } from "react"
import { Sparkles, Play } from "lucide-react"
import { useI18n } from "@/lib/i18n"
import { cn } from "@/lib/utils"
import {
  OpenAIIcon,
  GeminiIcon,
  ClaudeIcon,
  DeepSeekIcon,
  MetaIcon,
  MistralIcon,
} from "@/components/brand-icons"

export function HeroLightTheme() {
  const { t } = useI18n()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative hero-gradient-light overflow-hidden min-h-screen flex flex-col justify-center py-16 md:py-24 font-sans">
      {/* Decorative Background Elements */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-100/60 rounded-full blur-[100px] opacity-70 mix-blend-multiply" aria-hidden="true" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-indigo-100/60 rounded-full blur-[100px] opacity-70 mix-blend-multiply" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className={cn(
            "flex flex-col gap-8 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            

            {/* Main Headline - Value-Driven */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight text-gray-900">
              {t("heroLight.title.line1")}{" "}
              <br />
              {t("heroLight.title.line2")}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
                {t("heroLight.title.highlight")}
              </span>
            </h1>

            {/* Subheadline - Specific Value Props */}
            <p className="text-base md:text-lg text-gray-700 max-w-xl leading-relaxed">
              {t("heroLight.subtitle.part1")}{" "}
              <span className="font-bold text-blue-600">{t("heroLight.subtitle.multichannel")}</span>,{" "}
              <span className="font-bold text-indigo-600">{t("heroLight.subtitle.customers")}</span>{" "}
              <span className="font-bold text-purple-600">{t("heroLight.subtitle.ads")}</span>.{" "}
              {t("heroLight.subtitle.part2")}
            </p>

            {/* Key Value Props - Quick Stats */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="flex items-start gap-2">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                  <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-sm text-gray-700">
                  <span className="font-bold text-blue-600">{t("heroLight.stats.videos")}</span> {t("heroLight.stats.videosAuto")}
                </p>
              </div>
              <div className="flex items-start gap-2">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                  <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-sm text-gray-700">
                  {t("heroLight.stats.channelsManage")} <span className="font-bold text-indigo-600">{t("heroLight.stats.channels")}</span> {t("heroLight.stats.channelsSim")}
                </p>
              </div>
              <div className="flex items-start gap-2">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                  <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-sm text-gray-700">
                  {t("heroLight.stats.roiText")} <span className="font-bold text-purple-600">{t("heroLight.stats.roi")}</span> {t("heroLight.stats.roiTime")}
                </p>
              </div>
              <div className="flex items-start gap-2">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                  <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-sm text-gray-700">
                  {t("heroLight.stats.saveText")} <span className="font-bold text-amber-600">{t("heroLight.stats.saveTime")}</span> {t("heroLight.stats.saveCost")}
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-3">
              <div className="flex flex-wrap gap-4">
                <button className="btn-primary-light flex items-center gap-2 group shadow-lg hover:shadow-xl transition-shadow">
                  <Sparkles className="w-5 h-5" />
                  {t("heroLight.cta.trial")}
                  <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                </button>
                <button className="btn-secondary-light flex items-center gap-2 group">
                  <Play className="w-5 h-5" />
                  {t("heroLight.cta.demo")}
                </button>
              </div>
              {/* CTA Sub-text */}
              <div className="flex flex-wrap items-center gap-4 text-xs text-gray-600">
                <div className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium">
                    {t("heroLight.trust.noCard")}
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium">
                    {t("heroLight.trust.setup")}
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium">
                    {t("heroLight.trust.security")}
                  </span>
                </div>
              </div>
            </div>

            {/* Trust Badges Row - Enhanced */}
            
          </div>

          {/* Right Column - Dashboard Mockup - REDESIGNED */}
          <div className={cn(
            "relative perspective-1000 transition-all duration-700 delay-300",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            {/* Main Glass Dashboard Container - Enhanced Glassmorphism */}
            <div
              className="relative rounded-3xl p-6 overflow-visible group"
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
              }}
            >
              {/* Dashboard Header - macOS Style */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/20">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400 hover:bg-red-500 transition-colors cursor-pointer" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400 hover:bg-yellow-500 transition-colors cursor-pointer" />
                  <div className="w-3 h-3 rounded-full bg-green-400 hover:bg-green-500 transition-colors cursor-pointer" />
                </div>
                <div className="flex items-center gap-3">
                  <div className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-[10px] text-gray-700 font-mono tracking-widest uppercase font-bold border border-white/30">
                    {t("heroLight.dashboard.live")}
                  </div>
                  <div className="text-[10px] text-gray-600 font-mono tracking-widest uppercase">
                    {t("heroLight.dashboard.version")}
                  </div>
                </div>
              </div>

              {/* Top Stats Grid - Enhanced with Vietnamese Market Focus */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {/* Total Reach Card */}
                <div
                  className="rounded-2xl p-5 relative overflow-hidden group/card transition-all duration-300 hover:scale-[1.02] cursor-pointer"
                  style={{
                    background: 'rgba(255, 255, 255, 0.15)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)'
                  }}
                >
                  <div className="flex justify-between items-start mb-3">
                    <div className="p-2.5 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg">
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <span className="text-xs font-bold text-green-600 bg-green-100/90 px-2.5 py-1 rounded-full border border-green-200">
                      ↑ 14%
                    </span>
                  </div>
                  <p className="text-xs text-gray-600 font-semibold uppercase tracking-wider mb-1">
                    {t("heroLight.dashboard.reach")}
                  </p>
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    1.2M+
                  </div>
                </div>

                {/* AI Efficiency Card */}
                <div
                  className="rounded-2xl p-5 relative overflow-hidden group/card transition-all duration-300 hover:scale-[1.02] cursor-pointer"
                  style={{
                    background: 'rgba(255, 255, 255, 0.15)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)'
                  }}
                >
                  <div className="flex justify-between items-start mb-3">
                    <div className="p-2.5 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl shadow-lg">
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <span className="text-xs font-bold text-indigo-600 bg-indigo-100/90 px-2.5 py-1 rounded-full border border-indigo-200">
                      AI
                    </span>
                  </div>
                  <p className="text-xs text-gray-600 font-semibold uppercase tracking-wider mb-1">
                    {t("heroLight.dashboard.aiEfficiency")}
                  </p>
                  <div className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    98.4%
                  </div>
                </div>

                {/* Vietnamese Content Card - NEW */}
                <div
                  className="rounded-2xl p-5 relative overflow-hidden group/card transition-all duration-300 hover:scale-[1.02] cursor-pointer"
                  style={{
                    background: 'rgba(255, 255, 255, 0.15)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)'
                  }}
                >
                  <div className="flex justify-between items-start mb-3">
                    <div className="p-2.5 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl shadow-lg">
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                      </svg>
                    </div>
                    <span className="text-xs font-bold text-green-600 bg-green-100/90 px-2.5 py-1 rounded-full border border-green-200">
                      🇻🇳
                    </span>
                  </div>
                  <p className="text-xs text-gray-600 font-semibold uppercase tracking-wider mb-1">
                    {t("heroLight.dashboard.vnContent")}
                  </p>
                  <div className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                    2.5K+
                  </div>
                </div>

                {/* Active Campaigns Card - NEW */}
                <div
                  className="rounded-2xl p-5 relative overflow-hidden group/card transition-all duration-300 hover:scale-[1.02] cursor-pointer"
                  style={{
                    background: 'rgba(255, 255, 255, 0.15)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)'
                  }}
                >
                  <div className="flex justify-between items-start mb-3">
                    <div className="p-2.5 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl shadow-lg">
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <span className="text-xs font-bold text-emerald-600 bg-emerald-100/90 px-2.5 py-1 rounded-full border border-emerald-200">
                      {t("heroLight.dashboard.active")}
                    </span>
                  </div>
                  <p className="text-xs text-gray-600 font-semibold uppercase tracking-wider mb-1">
                    {t("heroLight.dashboard.campaigns")}
                  </p>
                  <div className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                    47
                  </div>
                </div>
              </div>

              {/* Regional Performance Chart - Enhanced with Gradient Bars */}
              

              {/* Japanese Market Sync Notification - Floating Glass Card */}
              
            </div>

            {/* Enhanced Decorative Blur Layers for Depth */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] bg-gradient-to-tr from-blue-200/40 via-indigo-200/30 to-purple-200/40 rounded-full blur-3xl opacity-70" aria-hidden="true" />
            <div className="absolute -z-10 top-1/4 right-0 w-64 h-64 bg-gradient-to-bl from-blue-300/30 to-transparent rounded-full blur-2xl opacity-60" aria-hidden="true" />
            <div className="absolute -z-10 bottom-1/4 left-0 w-48 h-48 bg-gradient-to-tr from-indigo-300/30 to-transparent rounded-full blur-2xl opacity-60" aria-hidden="true" />
          </div>
        </div>
      </div>

      {/* Technology Behind DXAI - AI Models Marquee */}
      <div className="border-t border-gray-200/60 bg-white/50 backdrop-blur-sm py-12 mt-auto">
        <div className="max-w-7xl mx-auto px-4 text-center mb-8">
          <p className="text-xs font-bold text-gray-600 uppercase tracking-[0.3em]">
            {t("heroLight.tech.title")}
          </p>
          <p className="text-xs text-gray-500 mt-2">
            {t("heroLight.tech.subtitle")}
          </p>
        </div>
        <div className="flex overflow-hidden group relative">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" aria-hidden="true" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" aria-hidden="true" />
          <div className="flex animate-scroll gap-16 items-center whitespace-nowrap px-10">
            {/* Duplicate content for seamless loop */}
            {[...Array(2)].map((_, setIndex) => (
              <div key={setIndex} className="flex gap-16 items-center">
                {/* OpenAI GPT-4 */}
                <div className="flex items-center gap-3 group/item cursor-pointer">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center border border-gray-200 group-hover/item:border-gray-300 group-hover/item:shadow-md transition-all">
                    <OpenAIIcon className="w-6 h-6 text-gray-900" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-bold text-gray-900 group-hover/item:text-gray-900 transition-colors">
                      OpenAI
                    </p>
                    <p className="text-xs text-gray-500">GPT-4</p>
                  </div>
                </div>

                {/* Google Gemini */}
                <div className="flex items-center gap-3 group/item cursor-pointer">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center border border-gray-200 group-hover/item:border-blue-300 group-hover/item:shadow-md transition-all">
                    <GeminiIcon className="w-6 h-6 text-[#4285F4]" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-bold text-gray-900 group-hover/item:text-[#4285F4] transition-colors">
                      Google
                    </p>
                    <p className="text-xs text-gray-500">Gemini</p>
                  </div>
                </div>

                {/* Anthropic Claude */}
                <div className="flex items-center gap-3 group/item cursor-pointer">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center border border-gray-200 group-hover/item:border-amber-300 group-hover/item:shadow-md transition-all">
                    <ClaudeIcon className="w-6 h-6 text-[#D97706]" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-bold text-gray-900 group-hover/item:text-[#D97706] transition-colors">
                      Anthropic
                    </p>
                    <p className="text-xs text-gray-500">Claude</p>
                  </div>
                </div>

                {/* Meta Llama */}
                <div className="flex items-center gap-3 group/item cursor-pointer">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center border border-gray-200 group-hover/item:border-blue-300 group-hover/item:shadow-md transition-all">
                    <MetaIcon className="w-6 h-6 text-[#0668E1]" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-bold text-gray-900 group-hover/item:text-[#0668E1] transition-colors">
                      Meta
                    </p>
                    <p className="text-xs text-gray-500">Llama</p>
                  </div>
                </div>

                {/* Mistral AI */}
                <div className="flex items-center gap-3 group/item cursor-pointer">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center border border-gray-200 group-hover/item:border-orange-300 group-hover/item:shadow-md transition-all">
                    <MistralIcon className="w-6 h-6 text-[#FF7000]" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-bold text-gray-900 group-hover/item:text-[#FF7000] transition-colors">
                      Mistral AI
                    </p>
                    <p className="text-xs text-gray-500">Mistral</p>
                  </div>
                </div>

                {/* DeepSeek */}
                <div className="flex items-center gap-3 group/item cursor-pointer">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center border border-gray-200 group-hover/item:border-indigo-300 group-hover/item:shadow-md transition-all">
                    <DeepSeekIcon className="w-6 h-6 text-[#4F46E5]" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-bold text-gray-900 group-hover/item:text-[#4F46E5] transition-colors">
                      DeepSeek
                    </p>
                    <p className="text-xs text-gray-500">DeepSeek</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
