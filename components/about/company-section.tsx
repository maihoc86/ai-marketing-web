"use client"

import Image from "next/image"
import Link from "next/link"
import {
  Sparkles,
  Target,
  Zap,
  HeartHandshake,
  ArrowRight,
  Search,
  FileText,
  Palette,
  Code2,
  TestTube,
  Rocket,
  CheckCircle2,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useI18n } from "@/lib/i18n"

export function CompanySection() {
  const { t } = useI18n()

  const whyChooseUs = [
    {
      icon: Sparkles,
      titleKey: "about.why.expertise.title",
      descKey: "about.why.expertise.desc",
      color: "text-[#22b5f8]",
      bgColor: "bg-[#22b5f8]/10",
    },
    {
      icon: Target,
      titleKey: "about.why.optimize.title",
      descKey: "about.why.optimize.desc",
      color: "text-emerald-600",
      bgColor: "bg-emerald-100",
    },
    {
      icon: Zap,
      titleKey: "about.why.speed.title",
      descKey: "about.why.speed.desc",
      color: "text-amber-600",
      bgColor: "bg-amber-100",
    },
    {
      icon: HeartHandshake,
      titleKey: "about.why.support.title",
      descKey: "about.why.support.desc",
      color: "text-rose-600",
      bgColor: "bg-rose-100",
    },
  ]

  const processSteps = [
    {
      icon: Search,
      titleKey: "about.process.discovery.title",
      descKey: "about.process.discovery.desc",
    },
    {
      icon: FileText,
      titleKey: "about.process.planning.title",
      descKey: "about.process.planning.desc",
    },
    {
      icon: Palette,
      titleKey: "about.process.design.title",
      descKey: "about.process.design.desc",
    },
    {
      icon: Code2,
      titleKey: "about.process.development.title",
      descKey: "about.process.development.desc",
    },
    {
      icon: TestTube,
      titleKey: "about.process.testing.title",
      descKey: "about.process.testing.desc",
    },
    {
      icon: Rocket,
      titleKey: "about.process.launch.title",
      descKey: "about.process.launch.desc",
    },
  ]

  const companyHighlights = [
    "about.company.highlight1",
    "about.company.highlight2",
    "about.company.highlight3",
    "about.company.highlight4",
  ]

  return (
    <section id="company" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* About Company */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">{t("about.company.title")}</h2>
            <p className="text-lg text-gray-500">{t("about.company.subtitle")}</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Image */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-blue-100 to-blue-50">
                <Image
                  src="/professional-team-meeting-in-modern-office-with-la.jpg"
                  alt="Đội ngũ Tiên Phong CDS"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#22b5f8] rounded-2xl -z-10" />
            </div>

            {/* Right - Content */}
            <div>
              <p className="text-gray-600 leading-relaxed mb-6">{t("about.company.desc1")}</p>
              <p className="text-gray-600 leading-relaxed mb-8">{t("about.company.desc2")}</p>

              {/* Bullet points */}
              <ul className="space-y-3 mb-8">
                {companyHighlights.map((key, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#22b5f8] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{t(key)}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant="outline"
                className="border-2 border-[#22b5f8] text-[#22b5f8] hover:bg-[#22b5f8] hover:text-white font-semibold px-6 py-5 rounded-xl transition-all bg-transparent"
                asChild
              >
                <Link href="/dang-ky" className="flex items-center gap-2">
                  {t("about.company.cta")}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-24">
          <div className="text-center mb-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">{t("about.why.title")}</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">{t("about.why.subtitle")}</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 mt-12">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="relative bg-[#f7f7f8] rounded-2xl p-8 pt-12 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                {/* Floating icon */}
                <div
                  className={`absolute -top-6 left-8 w-12 h-12 ${item.bgColor} rounded-xl flex items-center justify-center shadow-md`}
                >
                  <item.icon className={`w-6 h-6 ${item.color}`} />
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-3">{t(item.titleKey)}</h3>
                <p className="text-gray-600 leading-relaxed">{t(item.descKey)}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Process */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12">{t("about.process.title")}</h2>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - Description + Image */}
            <div>
              <p className="text-gray-600 leading-relaxed mb-6">{t("about.process.description")}</p>

              <Button
                variant="outline"
                className="border-2 border-[#22b5f8] text-[#22b5f8] hover:bg-[#22b5f8]/5 font-medium px-5 py-4 rounded-xl mb-8 bg-transparent"
                asChild
              >
                <Link href="https://tienphongcds.com/vi/blog" className="flex items-center gap-2">
                  {t("about.process.cta")}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>

              {/* Process illustration image */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-blue-50 to-gray-100">
                <Image
                  src="/team-collaboration-workflow-with-gears-and-process.jpg"
                  alt="Quy trình làm việc"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right Column - Vertical Timeline */}
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-6 top-0 bottom-0 w-px bg-[#22b5f8]/30" />

              <div className="space-y-8">
                {processSteps.map((step, index) => (
                  <div key={index} className="relative flex gap-6">
                    {/* Icon circle */}
                    <div className="relative z-10 w-12 h-12 bg-white border-2 border-[#22b5f8]/30 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
                      <step.icon className="w-5 h-5 text-[#22b5f8]" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 pb-2">
                      <h4 className="text-lg font-bold text-gray-900 mb-2">{t(step.titleKey)}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{t(step.descKey)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
