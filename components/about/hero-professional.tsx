"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useI18n } from "@/lib/i18n"
import { cn } from "@/lib/utils"

export function HeroProfessional() {
  const { t } = useI18n()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      {/* Background decorative elements with animation */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-40 right-10 w-80 h-80 bg-indigo-200/30 rounded-full blur-3xl animate-pulse delay-150" />
      <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-purple-200/20 rounded-full blur-3xl animate-pulse delay-300" />

      {/* Dot pattern overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle, #3b82f6 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className={cn(
            "transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-full mb-6 hover:shadow-lg transition-shadow">
              <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
              <span className="text-sm font-bold text-blue-600 uppercase tracking-wider">
                {t("about.hero.badge")}
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-[1.1]">
              {t("about.hero.title.prefix")}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 animate-gradient">
                {t("about.hero.title.brand")}
              </span>{" "}
              {t("about.hero.title.suffix")}
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed max-w-xl">
              {t("about.hero.desc")}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold px-8 py-6 rounded-full text-base shadow-lg hover:shadow-xl transition-all group"
                asChild
              >
                <Link href="/dang-ky" className="flex items-center justify-center gap-2">
                  {t("about.hero.cta.contact")}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-2 border-gray-300 text-gray-900 hover:bg-gray-900 hover:text-white hover:border-gray-900 font-semibold px-8 py-6 rounded-full text-base transition-all bg-white group"
                asChild
              >
                <Link href="#philosophy" className="flex items-center justify-center gap-2">
                  {t("about.hero.cta.learn")}
                  <Play className="w-4 h-4 group-hover:scale-110 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Column - Professional Image */}
          <div className={cn(
            "relative transition-all duration-700 delay-300",
            isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"
          )}>
            {/* Main image container */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl group">
              <Image
                src="/professional-team-meeting-in-modern-office-with-la.jpg"
                alt={t("about.hero.image.alt")}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent" />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Decorative accents with animation */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl -z-10 animate-float" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl -z-10 animate-float delay-200" />

            {/* Floating stat card with enhanced animation */}
            <div className="absolute bottom-8 left-8 bg-white/95 backdrop-blur-md rounded-xl p-5 shadow-xl border border-gray-200 hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
              <p className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-1">
                99.9%
              </p>
              <p className="text-sm font-semibold text-gray-700">
                {t("about.hero.stat.uptime")}
              </p>
              <div className="mt-2 flex items-center gap-1">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                <span className="text-xs text-gray-500 font-medium">
                  {t("about.hero.stat.operational")}
                </span>
              </div>
            </div>

            {/* Additional floating stats */}
            <div className="absolute top-8 right-8 bg-white/95 backdrop-blur-md rounded-xl p-4 shadow-xl border border-gray-200 hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
              <p className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600 mb-1">
                500+
              </p>
              <p className="text-xs font-semibold text-gray-700">
                {t("about.hero.stat.businesses")}
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .delay-200 {
          animation-delay: 1s;
        }

        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  )
}
