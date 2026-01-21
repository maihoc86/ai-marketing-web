"use client"

import Image from "next/image"
import { CheckCircle, Activity } from "lucide-react"
import { useI18n } from "@/lib/i18n"

export function DashboardShowcase() {
  const { t, locale } = useI18n()

  return (
    <section className="py-24 bg-[#f5f7f8] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#22b5f8]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-100/30 rounded-full blur-3xl" />

      
    </section>
  )
}
