"use client"

import Link from "next/link"
import { ArrowRight, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useI18n } from "@/lib/i18n"

export function FinalCtaSection() {
  const { t, locale } = useI18n()

  return (
    <section className="py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000" />

      {/* Dot pattern overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-6">
          <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
          <span className="text-sm font-bold text-white uppercase tracking-wider">
            {locale === "vi" ? "Bắt đầu ngay hôm nay" : "Get Started Today"}
          </span>
        </div>

        {/* Main Heading */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
          {locale === "vi" ? (
            <>
              Sẵn sàng tối ưu hóa{" "}
              <span className="bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">
                quy trình marketing
              </span>{" "}
              của bạn?
            </>
          ) : (
            <>
              Ready to streamline your{" "}
              <span className="bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">
                marketing workflow
              </span>
              ?
            </>
          )}
        </h2>

        {/* Description */}
        <p className="text-lg sm:text-xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
          {locale === "vi"
            ? "Tham gia cùng hơn 10,000 doanh nghiệp đang chuyển đổi marketing với AI. Bắt đầu hành trình tự động hóa của bạn ngay hôm nay."
            : "Join over 10,000 businesses transforming marketing with AI. Start your automation journey today."}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            className="bg-white text-blue-600 hover:bg-blue-50 font-bold px-8 py-6 rounded-xl text-base shadow-xl hover:shadow-2xl transition-all"
            asChild
          >
            <Link href="/dang-ky" className="flex items-center justify-center gap-2">
              {locale === "vi" ? "Đặt lịch Demo" : "Schedule a Demo"}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="border-2 border-white text-white hover:bg-white/10 font-bold px-8 py-6 rounded-xl text-base transition-all bg-transparent backdrop-blur-sm"
            asChild
          >
            <Link href="/dang-ky" className="flex items-center justify-center gap-2">
              {locale === "vi" ? "Tải Roadmap" : "Download Roadmap"}
              <Download className="w-5 h-5" />
            </Link>
          </Button>
        </div>

        {/* Trust indicators */}
        <div className="flex flex-wrap items-center justify-center gap-8 mt-12 text-blue-100">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-sm font-semibold">
              {locale === "vi" ? "Không cần thẻ tín dụng" : "No credit card required"}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-sm font-semibold">
              {locale === "vi" ? "Thiết lập trong 48 giờ" : "48-hour setup"}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-sm font-semibold">
              {locale === "vi" ? "Hỗ trợ 24/7" : "24/7 support"}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
