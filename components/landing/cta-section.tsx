"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, Shield, CreditCard, CheckCircle2 } from "lucide-react"
import { useI18n } from "@/lib/i18n"

export function CtaSection() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { t } = useI18n()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubmitted(true)
    }
  }

  return (
    <section className="relative py-24 overflow-hidden font-sans">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-600 to-blue-700" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-white/5" />
        <div className="absolute -bottom-10 -left-10 w-60 h-60 rounded-full bg-white/5" />
        <div className="absolute top-1/4 left-1/4 w-4 h-4 rounded-full bg-white/20" />
        <div className="absolute top-1/3 right-1/3 w-3 h-3 rounded-full bg-white/15" />
        <div className="absolute bottom-1/4 right-1/4 w-5 h-5 rounded-full bg-white/10" />
        <div className="absolute top-1/2 left-[15%] w-2 h-2 rounded-full bg-white/25" />
        <div className="absolute bottom-1/3 left-1/3 w-3 h-3 rounded-full bg-white/20" />

        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
            backgroundSize: "24px 24px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 text-balance">{t("cta.title")}</h2>

        <p className="text-lg md:text-xl text-blue-100 mb-10">{t("cta.subtitle")}</p>

        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="max-w-xl mx-auto mb-8">
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder={t("cta.emailPlaceholder")}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-14 px-6 rounded-full bg-white border-0 text-gray-900 placeholder:text-gray-400 text-base flex-1 shadow-lg"
                required
              />
              <Button
                type="submit"
                size="lg"
                className="h-14 px-8 rounded-full bg-white text-blue-600 hover:bg-blue-50 font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-[1.02]"
              >
                {t("cta.button")}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </form>
        ) : (
          <div className="max-w-xl mx-auto mb-8 bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <CheckCircle2 className="w-12 h-12 text-green-400 mx-auto mb-3" />
            <p className="text-white font-medium text-lg">{t("cta.thankYou")}</p>
            <p className="text-blue-100 text-sm mt-1">{t("cta.thankYouSub")}</p>
          </div>
        )}

        <div className="flex flex-col items-center gap-4">
          <p className="text-blue-100 text-sm">{t("cta.trusted", { count: "500" })}</p>
          <div className="flex items-center justify-center gap-6 text-sm text-blue-100">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-green-400" />
              <span>{t("cta.ssl")}</span>
            </div>
            <div className="flex items-center gap-2">
              <CreditCard className="w-4 h-4 text-green-400" />
              <span>{t("cta.noCard")}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
