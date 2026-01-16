"use client"

import { useState } from "react"
import { ChevronDown, HelpCircle } from "lucide-react"
import { cn } from "@/lib/utils"
import { useI18n } from "@/lib/i18n"

const badgeColors = ["bg-blue-600", "bg-blue-500", "bg-blue-700", "bg-blue-400", "bg-blue-800"]

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const { t } = useI18n()

  const faqs = [
    { questionKey: "faq.q1", answerKey: "faq.a1" },
    { questionKey: "faq.q2", answerKey: "faq.a2" },
    { questionKey: "faq.q3", answerKey: "faq.a3" },
    { questionKey: "faq.q4", answerKey: "faq.a4" },
    { questionKey: "faq.q5", answerKey: "faq.a5" },
  ]

  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-white to-blue-50/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(37,99,235,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-blue-500 flex items-center justify-center shadow-lg shadow-blue-500/25">
              <HelpCircle className="w-6 h-6 text-white" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-3">
            <span className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 bg-clip-text text-transparent">
              {t("faq.title")}
            </span>
          </h2>
          <p className="text-muted-foreground text-lg">{t("faq.subtitle")}</p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className={cn(
                "rounded-xl border bg-white transition-all duration-300 overflow-hidden group",
                openIndex === idx
                  ? "border-l-[3px] border-l-blue-600 border-t-gray-200 border-r-gray-200 border-b-gray-200 shadow-lg shadow-blue-500/5"
                  : "border-gray-200 hover:border-blue-200 hover:shadow-md hover:shadow-gray-100",
                idx % 2 === 1 && openIndex !== idx && "bg-gray-50/50",
              )}
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className={cn(
                  "w-full flex items-center gap-4 p-5 text-left transition-colors duration-200",
                  openIndex !== idx && "group-hover:bg-blue-50/50",
                )}
              >
                <div
                  className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0 transition-transform duration-300",
                    badgeColors[idx % badgeColors.length],
                    openIndex === idx && "scale-110",
                  )}
                >
                  {idx + 1}
                </div>

                <span className="font-semibold text-gray-900 flex-1">{t(faq.questionKey)}</span>

                <ChevronDown
                  className={cn(
                    "w-5 h-5 text-gray-400 shrink-0 transition-transform duration-300",
                    openIndex === idx && "rotate-180 text-blue-600",
                  )}
                />
              </button>

              <div
                className={cn(
                  "grid transition-all duration-300 ease-in-out",
                  openIndex === idx ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                )}
              >
                <div className="overflow-hidden">
                  <div className="px-5 pb-5 pt-0">
                    <div className="border-t border-gray-100 pt-4 ml-12">
                      <p className="text-gray-600 leading-[1.7]">{t(faq.answerKey)}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">{t("faq.notFound")}</p>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700 transition-colors"
          >
            {t("faq.contact")}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
