"use client"

import { useState } from "react"
import { TrendingUp, Clock, Zap, Users, Settings, Sparkles, Play, ArrowRight } from "lucide-react"
import { useI18n } from "@/lib/i18n"
import YouTubeModal from "@/components/youtube-modal"

export function RoiSection() {
  const { locale } = useI18n()

  const [isModalOpen, setIsModalOpen] = useState(false)

  const comparisonData = [
    {
      criteriaVi: "Chi phí vận hành",
      criteriaEn: "Operating Cost",
      traditionalVi: "~$555/tháng",
      traditionalEn: "~$555/month",
      traditionalDesc: "(Nhân sự + Tools)",
      aiVi: "~$255/tháng",
      aiEn: "~$255/month",
      aiDesc: "(All-in-one)",
      savingsVi: "Tiết kiệm ~54%",
      savingsEn: "Save ~54%",
      icon: TrendingUp,
      iconBg: "from-blue-500 to-blue-600",
    },
    {
      criteriaVi: "Sản lượng Video",
      criteriaEn: "Video Output",
      traditionalVi: "10-15 video",
      traditionalEn: "10-15 videos",
      traditionalDesc: "/tháng",
      aiVi: "1000+ video",
      aiEn: "1000+ videos",
      aiDesc: "/tháng",
      savingsVi: null,
      savingsEn: null,
      icon: Zap,
      iconBg: "from-purple-500 to-purple-600",
    },
    {
      criteriaVi: "Thời gian/Video",
      criteriaEn: "Time per Video",
      traditionalVi: "1-2 ngày",
      traditionalEn: "1-2 days",
      traditionalDesc: "(Thủ công)",
      aiVi: "2 phút",
      aiEn: "2 minutes",
      aiDesc: "(Tự động)",
      savingsVi: null,
      savingsEn: null,
      icon: Clock,
      iconBg: "from-amber-500 to-amber-600",
    },
    {
      criteriaVi: "Đa nhiệm",
      criteriaEn: "Multitasking",
      traditionalVi: "Khó khăn",
      traditionalEn: "Difficult",
      traditionalDesc: "(1-2 kênh)",
      aiVi: "50+ kênh",
      aiEn: "50+ channels",
      aiDesc: "(Cùng lúc)",
      savingsVi: null,
      savingsEn: null,
      icon: Users,
      iconBg: "from-green-500 to-green-600",
    },
    {
      criteriaVi: "Vận hành",
      criteriaEn: "Operation",
      traditionalVi: "8-10 giờ",
      traditionalEn: "8-10 hours",
      traditionalDesc: "/ngày",
      aiVi: "24/7",
      aiEn: "24/7",
      aiDesc: "(Tự động)",
      savingsVi: null,
      savingsEn: null,
      icon: Settings,
      iconBg: "from-indigo-500 to-indigo-600",
    },
  ]

  return (
    <section
      id="roi"
      className="relative w-full overflow-hidden py-16 md:py-24 lg:py-32 bg-gradient-to-b from-white via-gray-50 to-white"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 -right-20 w-[500px] h-[500px] bg-indigo-200/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-100/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 text-blue-900 text-xs font-bold uppercase tracking-wider mb-6">
            <Sparkles className="w-4 h-4 text-blue-600" />
            {locale === "vi" ? "SO SÁNH HIỆU QUẢ" : "ROI COMPARISON"}
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-6 leading-tight px-4">
            {locale === "vi" ? (
              <>
                Tại sao{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                  DXAI Marketing
                </span>{" "}
                vượt trội?
              </>
            ) : (
              <>
                Why{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                  DXAI Marketing
                </span>{" "}
                excels?
              </>
            )}
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8 px-4">
            {locale === "vi"
              ? "So sánh quy trình marketing truyền thống với giải pháp tự động hóa AI. Tiết kiệm chi phí, tăng hiệu suất gấp 100 lần."
              : "Compare traditional marketing workflows vs AI-powered automation. Save costs, boost efficiency 100x."}
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all group"
          >
            <Play className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" />
            {locale === "vi" ? "Xem Video Demo" : "Watch Demo Video"}
          </button>
        </div>

        {/* Comparison Table - Enhanced Modern Design */}
        <div className="max-w-6xl mx-auto">
          {/* Desktop View - 3 Column Grid */}
          <div className="hidden lg:block">
            {/* Table Header */}
            <div className="grid grid-cols-[280px_1fr_1fr] gap-4 mb-4">
              {/* Criteria Column Header */}
              <div className="flex items-center justify-center p-5 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200">
                <span className="text-sm font-bold text-gray-700 uppercase tracking-wider">
                  {locale === "vi" ? "Tiêu chí" : "Criteria"}
                </span>
              </div>

              {/* Traditional Method Header */}
              <div className="relative p-5 rounded-2xl bg-gradient-to-br from-red-50 via-orange-50 to-red-50 border border-red-200 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-200/30 rounded-full blur-2xl" />
                <div className="relative flex flex-col items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                    <svg className="w-5 h-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <h3 className="text-base font-bold text-gray-900">
                    {locale === "vi" ? "Marketing Truyền thống" : "Traditional Marketing"}
                  </h3>
                  <p className="text-xs text-gray-600">
                    {locale === "vi" ? "Quy trình thủ công" : "Manual workflow"}
                  </p>
                </div>
              </div>

              {/* DXAI AI Header */}
              <div className="relative p-5 rounded-2xl bg-gradient-to-br from-green-50 via-emerald-50 to-green-50 border border-green-300 overflow-hidden">
                <div className="absolute -top-1 -right-1 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-xs font-bold px-3 py-1.5 rounded-bl-xl rounded-tr-xl flex items-center gap-1.5 shadow-lg">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{locale === "vi" ? "ĐƯỢC ĐỀ XUẤT" : "RECOMMENDED"}</span>
                </div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-green-200/30 rounded-full blur-2xl" />
                <div className="relative flex flex-col items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center shadow-lg">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-base font-bold text-gray-900">
                    {locale === "vi" ? "DXAI Marketing AI" : "DXAI Marketing AI"}
                  </h3>
                  <p className="text-xs text-green-700 font-semibold">
                    {locale === "vi" ? "Tự động hóa 100%" : "100% Automated"}
                  </p>
                </div>
              </div>
            </div>

            {/* Comparison Rows */}
            <div className="space-y-3">
              {comparisonData.map((row, idx) => (
                <div
                  key={idx}
                  className="grid grid-cols-[280px_1fr_1fr] gap-4 items-center"
                >
                  {/* Criteria Cell */}
                  <div className="flex items-center gap-3 p-5 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${row.iconBg} flex items-center justify-center shadow-lg flex-shrink-0`}>
                      <row.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-semibold text-gray-900 text-sm">
                      {locale === "vi" ? row.criteriaVi : row.criteriaEn}
                    </span>
                  </div>

                  {/* Traditional Value */}
                  <div className="p-5 rounded-2xl bg-gradient-to-br from-red-50/50 to-orange-50/30 border border-red-100 hover:border-red-200 transition-all">
                    <div className="text-center">
                      <p className="text-base font-semibold text-gray-700 mb-1">
                        {locale === "vi" ? row.traditionalVi : row.traditionalEn}
                      </p>
                      <p className="text-xs text-gray-500">{row.traditionalDesc}</p>
                    </div>
                  </div>

                  {/* AI Value */}
                  <div className="p-5 rounded-2xl bg-gradient-to-br from-green-50/50 to-emerald-50/30 border border-green-200 hover:border-green-300 transition-all relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-400/0 via-green-400/5 to-green-400/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                    <div className="relative text-center">
                      <div className="flex items-center justify-center gap-2 mb-1">
                        <p className="text-base font-bold text-green-700">
                          {locale === "vi" ? row.aiVi : row.aiEn}
                        </p>
                        {row.savingsVi && (
                          <span className="bg-gradient-to-r from-green-500 to-emerald-600 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-md">
                            {locale === "vi" ? row.savingsVi : row.savingsEn}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-green-600 font-medium">{row.aiDesc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile View - Stacked Cards */}
          <div className="lg:hidden space-y-6">
            {comparisonData.map((row, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-white border border-gray-200 shadow-lg overflow-hidden"
              >
                {/* Criteria Header */}
                <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200">
                  <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${row.iconBg} flex items-center justify-center shadow-md flex-shrink-0`}>
                    <row.icon className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-bold text-gray-900 text-sm">
                    {locale === "vi" ? row.criteriaVi : row.criteriaEn}
                  </span>
                </div>

                {/* Comparison Values */}
                <div className="grid grid-cols-2 divide-x divide-gray-200">
                  {/* Traditional */}
                  <div className="p-4 bg-gradient-to-br from-red-50/50 to-orange-50/30">
                    <div className="text-center">
                      <p className="text-xs text-gray-600 mb-1 font-medium uppercase tracking-wider">
                        {locale === "vi" ? "Truyền thống" : "Traditional"}
                      </p>
                      <p className="text-sm font-semibold text-gray-700 mb-0.5">
                        {locale === "vi" ? row.traditionalVi : row.traditionalEn}
                      </p>
                      <p className="text-xs text-gray-500">{row.traditionalDesc}</p>
                    </div>
                  </div>

                  {/* AI */}
                  <div className="p-4 bg-gradient-to-br from-green-50/50 to-emerald-50/30 relative">
                    {row.savingsVi && (
                      <div className="absolute top-2 right-2">
                        <span className="bg-gradient-to-r from-green-500 to-emerald-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-md">
                          {locale === "vi" ? row.savingsVi : row.savingsEn}
                        </span>
                      </div>
                    )}
                    <div className="text-center">
                      <p className="text-xs text-green-700 mb-1 font-bold uppercase tracking-wider">
                        DXAI AI
                      </p>
                      <p className="text-sm font-bold text-green-700 mb-0.5">
                        {locale === "vi" ? row.aiVi : row.aiEn}
                      </p>
                      <p className="text-xs text-green-600 font-medium">{row.aiDesc}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-12 md:mt-16 text-center px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-base md:text-lg text-gray-700 mb-6 font-medium">
              {locale === "vi"
                ? "Sẵn sàng chuyển đổi số và tăng trưởng với AI Marketing?"
                : "Ready to transform and grow with AI Marketing?"}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#pricing"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all group min-h-[56px]"
              >
                {locale === "vi" ? "Bắt đầu ngay" : "Get Started"}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/ve-chung-toi"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-900 font-semibold px-8 py-4 rounded-full border-2 border-gray-300 hover:border-gray-400 transition-all min-h-[56px]"
              >
                {locale === "vi" ? "Tìm hiểu thêm" : "Learn More"}
              </a>
            </div>
            <p className="text-xs text-gray-500 mt-6">
              {locale === "vi"
                ? "* Số liệu dựa trên khảo sát 500+ doanh nghiệp Việt Nam sử dụng DXAI Marketing Platform"
                : "* Data based on survey of 500+ Vietnamese businesses using DXAI Marketing Platform"}
            </p>
          </div>
        </div>
      </div>

      <YouTubeModal videoId="R5RuHV_JrMM" isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  )
}
