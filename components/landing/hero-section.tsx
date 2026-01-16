"use client"
import Link from "next/link"
import { Rocket, Sparkles, Lightbulb, Cpu, Layers, Share2, Video, ImageIcon, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DemoButton } from "@/components/youtube-modal"
import { useI18n } from "@/lib/i18n"
import {
  SiFacebook,
  SiInstagram,
  SiTiktok,
  SiYoutube,
  SiLinkedin,
  SiX,
  SiOpenai,
  SiGooglegemini,
  SiAnthropic,
  SiMeta,
  SiMailchimp,
  SiHubspot,
  SiCanva,
  SiFigma,
  SiNotion,
  SiZapier,
} from "react-icons/si"

export function HeroSection() {
  const { t } = useI18n()

  const brandIcons = [
    {
      name: "OpenAI",
      Icon: SiOpenai,
      color: "#10A37F",
      top: "62%",
      left: "3%",
      size: 24,
      opacity: 0.85,
      duration: 6,
      delay: 0,
    },
    {
      name: "Gemini",
      Icon: SiGooglegemini,
      color: "#8E75B2",
      top: "70%",
      left: "10%",
      size: 22,
      opacity: 0.8,
      duration: 6.5,
      delay: 0.3,
    },
    {
      name: "Claude",
      Icon: SiAnthropic,
      color: "#D97706",
      top: "56%",
      left: "8%",
      size: 20,
      opacity: 0.75,
      duration: 5.5,
      delay: 0.5,
    },
    {
      name: "Meta",
      Icon: SiMeta,
      color: "#0668E1",
      top: "78%",
      left: "5%",
      size: 20,
      opacity: 0.7,
      duration: 7,
      delay: 0.8,
    },
    {
      name: "Mailchimp",
      Icon: SiMailchimp,
      color: "#FFE01B",
      top: "64%",
      left: "90%",
      size: 22,
      opacity: 0.8,
      duration: 6,
      delay: 0.2,
    },
    {
      name: "HubSpot",
      Icon: SiHubspot,
      color: "#FF7A59",
      top: "72%",
      left: "94%",
      size: 20,
      opacity: 0.75,
      duration: 7,
      delay: 0.6,
    },
    {
      name: "Canva",
      Icon: SiCanva,
      color: "#00C4CC",
      top: "58%",
      left: "92%",
      size: 20,
      opacity: 0.7,
      duration: 5.5,
      delay: 0.9,
    },
    {
      name: "Zapier",
      Icon: SiZapier,
      color: "#FF4A00",
      top: "80%",
      left: "88%",
      size: 18,
      opacity: 0.65,
      duration: 8,
      delay: 1.2,
    },
    {
      name: "Notion",
      Icon: SiNotion,
      color: "#000000",
      top: "18%",
      left: "4%",
      size: 18,
      opacity: 0.5,
      duration: 7,
      delay: 1,
      hideOnMobile: true,
    },
    {
      name: "Figma",
      Icon: SiFigma,
      color: "#F24E1E",
      top: "15%",
      left: "93%",
      size: 18,
      opacity: 0.5,
      duration: 6.5,
      delay: 1.5,
      hideOnMobile: true,
    },
    {
      name: "Facebook",
      Icon: SiFacebook,
      color: "#1877F2",
      top: "45%",
      left: "2%",
      size: 16,
      opacity: 0.4,
      duration: 8,
      delay: 2,
      hideOnTablet: true,
    },
    {
      name: "Instagram",
      Icon: SiInstagram,
      color: "#E4405F",
      top: "42%",
      left: "96%",
      size: 16,
      opacity: 0.4,
      duration: 7.5,
      delay: 2.3,
      hideOnTablet: true,
    },
  ]

  return (
    <section className="pt-24 pb-20 md:pt-28 md:pb-32 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="absolute rounded-full"
          style={{
            width: "500px",
            height: "500px",
            background: "rgba(37, 99, 235, 0.25)",
            top: "-10%",
            left: "-5%",
            filter: "blur(100px)",
            animation: "floatSlow 8s ease-in-out infinite",
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            width: "400px",
            height: "400px",
            background: "rgba(59, 130, 246, 0.2)",
            top: "0%",
            left: "70%",
            filter: "blur(80px)",
            animation: "floatSlowReverse 10s ease-in-out infinite",
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            width: "600px",
            height: "600px",
            background: "rgba(96, 165, 250, 0.15)",
            top: "60%",
            left: "10%",
            filter: "blur(120px)",
            animation: "floatMedium 12s ease-in-out infinite",
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            width: "450px",
            height: "450px",
            background: "rgba(29, 78, 216, 0.12)",
            top: "70%",
            left: "80%",
            filter: "blur(90px)",
            animation: "floatSlow 8s ease-in-out infinite",
          }}
        />
      </div>

      {/* Brand icons */}
      <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
        {brandIcons.map((brand, idx) => (
          <div
            key={brand.name}
            className={`absolute ${brand.hideOnMobile ? "hidden md:block" : ""} ${brand.hideOnTablet ? "hidden lg:block" : ""}`}
            style={{
              top: brand.top,
              left: brand.left,
              opacity: brand.opacity,
              animation: `floatBrand ${brand.duration}s ease-in-out infinite`,
              animationDelay: `${brand.delay}s`,
            }}
          >
            <div
              className="p-2.5 rounded-xl bg-white/80 backdrop-blur-sm border border-white/50 shadow-lg hover:scale-110 transition-transform duration-300"
              style={{
                boxShadow: `0 4px 16px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(255, 255, 255, 0.5)`,
              }}
            >
              <brand.Icon
                style={{
                  width: brand.size,
                  height: brand.size,
                  color: brand.color,
                  filter: `drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1))`,
                }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Dot pattern */}
      <div className="absolute inset-0 z-[2]">
        <div
          className="absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage: `radial-gradient(circle, #94a3b8 1px, transparent 1px)`,
            backgroundSize: "24px 24px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 border border-blue-200 mb-6">
            <Rocket className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-semibold text-blue-700">{t("hero.badge")}</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 text-balance">
            <span className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 bg-clip-text text-transparent">
              {t("hero.title.line1")}
            </span>{" "}
            <br className="hidden md:block" />
            <span className="text-gray-900">{t("hero.title.line2")}</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 text-pretty">
            {t("hero.subtitle")}
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              size="lg"
              className="text-base h-12 px-8 rounded-full bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-600/30 gap-2"
              asChild
            >
              <Link href="/dang-ky">
                <Sparkles className="w-5 h-5" />
                {t("hero.cta.trial")}
              </Link>
            </Button>
            <DemoButton />
          </div>
        </div>

        {/* Process Section */}
        <div className="mt-20 md:mt-28">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100 border border-blue-200 backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span className="text-xs font-medium text-blue-700">{t("process.badge")}</span>
            </div>
          </div>

          <div className="relative">
            {/* Connection line - Desktop */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 -translate-y-1/2 z-0">
              <div className="relative mx-auto" style={{ width: "calc(100% - 80px)", marginLeft: "40px" }}>
                <div
                  className="h-[2px] rounded-full"
                  style={{
                    background: "linear-gradient(90deg, #2563eb 0%, #3b82f6 33%, #60a5fa 66%, #93c5fd 100%)",
                    opacity: 0.3,
                  }}
                />
                <div
                  className="absolute top-1/2 -translate-y-1/2 w-16 h-[3px] rounded-full"
                  style={{
                    background: "linear-gradient(90deg, transparent, #2563eb, #3b82f6, transparent)",
                    boxShadow: "0 0 20px rgba(37, 99, 235, 0.8), 0 0 40px rgba(59, 130, 246, 0.4)",
                    animation: "flowParticle 3s ease-in-out infinite",
                  }}
                />
              </div>
            </div>

            {/* Connection line - Mobile */}
            <div className="lg:hidden absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-[2px] z-0">
              <div
                className="w-full h-full rounded-full"
                style={{
                  background: "linear-gradient(180deg, #2563eb, #3b82f6, #60a5fa, #93c5fd)",
                  opacity: 0.3,
                }}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative z-10 items-stretch">
              {/* Card 1 - Ý tưởng */}
              <div className="relative group h-full">
                <div
                  className="relative bg-white/70 backdrop-blur-xl rounded-2xl border border-white/50 p-6 transition-all duration-300 hover:-translate-y-2 h-full flex flex-col min-h-[280px]"
                  style={{
                    boxShadow: "0 8px 32px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.5)",
                  }}
                >
                  <div
                    className="absolute left-0 top-4 bottom-4 w-[3px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ background: "linear-gradient(180deg, #2563eb, #60a5fa)" }}
                  />

                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-mono text-xs text-gray-400 tracking-wider">01</span>
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                      style={{
                        background: "linear-gradient(135deg, rgba(37, 99, 235, 0.1), rgba(37, 99, 235, 0.2))",
                        boxShadow: "0 0 20px rgba(37, 99, 235, 0), inset 0 1px 0 rgba(255,255,255,0.5)",
                      }}
                    >
                      <Lightbulb
                        className="w-5 h-5 text-blue-600 transition-all duration-300"
                        style={{ filter: "drop-shadow(0 0 8px rgba(37, 99, 235, 0.5))" }}
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <h3 className="text-base font-semibold text-gray-900 mb-1">{t("process.step1.title")}</h3>
                    <p className="text-sm text-gray-500">{t("process.step1.desc")}</p>
                  </div>

                  <div className="flex-1 flex flex-col justify-start">
                    <div
                      className="bg-gray-900 rounded-lg p-3 border border-gray-700"
                      style={{ boxShadow: "inset 0 2px 4px rgba(0,0,0,0.3)" }}
                    >
                      <div className="flex items-center gap-1.5 mb-2">
                        <div className="w-2 h-2 rounded-full bg-red-500" />
                        <div className="w-2 h-2 rounded-full bg-yellow-500" />
                        <div className="w-2 h-2 rounded-full bg-green-500" />
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-gray-500 font-mono text-xs">{">"}</span>
                        <span className="font-mono text-xs text-gray-300">{t("process.step1.placeholder")}</span>
                        <span
                          className="w-[2px] h-4 bg-blue-400 group-hover:bg-blue-300 transition-colors"
                          style={{
                            animation: "cursorBlink 1.8s ease-in-out infinite",
                            opacity: 0.8,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2 - AI Xử lý */}
              <div className="relative group h-full">
                <div
                  className="relative bg-white/70 backdrop-blur-xl rounded-2xl border border-white/50 p-6 transition-all duration-300 hover:-translate-y-2 h-full flex flex-col min-h-[280px]"
                  style={{
                    boxShadow: "0 8px 32px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.5)",
                  }}
                >
                  <div
                    className="absolute left-0 top-4 bottom-4 w-[3px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ background: "linear-gradient(180deg, #3b82f6, #93c5fd)" }}
                  />

                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-mono text-xs text-gray-400 tracking-wider">02</span>
                    <div
                      className="relative w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                      style={{
                        background: "linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(59, 130, 246, 0.2))",
                      }}
                    >
                      <div className="absolute inset-0 rounded-xl overflow-hidden">
                        <div
                          className="absolute w-1 h-1 rounded-full bg-blue-400/40 top-2 left-2"
                          style={{ animation: "pulse 3s ease-in-out infinite" }}
                        />
                        <div
                          className="absolute w-1 h-1 rounded-full bg-blue-400/40 bottom-2 right-2"
                          style={{ animation: "pulse 3s ease-in-out infinite 1s" }}
                        />
                      </div>
                      <Cpu
                        className="w-5 h-5 text-blue-500 relative z-10"
                        style={{ filter: "drop-shadow(0 0 8px rgba(59, 130, 246, 0.6))" }}
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <h3 className="text-base font-semibold text-gray-900 mb-1">{t("process.step2.title")}</h3>
                    <p className="text-sm text-gray-500">{t("process.step2.desc")}</p>
                  </div>

                  <div className="flex-1 flex flex-col justify-center">
                    <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                      <div className="flex items-center justify-center gap-2 h-8">
                        {[...Array(6)].map((_, i) => (
                          <div
                            key={i}
                            className="w-1.5 bg-blue-400 rounded-full"
                            style={{
                              height: `${14 + Math.sin(i * 1.2) * 8}px`,
                              animation: `waveformSubtle 2.8s ease-in-out infinite`,
                              animationDelay: `${i * 0.15}s`,
                              opacity: 0.5,
                            }}
                          />
                        ))}
                      </div>
                      <div className="flex items-center justify-center gap-2 mt-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400 opacity-60" />
                        <span className="text-xs text-gray-400 font-mono">{t("process.step2.processing")}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 3 - Đa định dạng */}
              <div className="relative group h-full">
                <div
                  className="relative bg-white/70 backdrop-blur-xl rounded-2xl border border-white/50 p-6 transition-all duration-300 hover:-translate-y-2 h-full flex flex-col min-h-[280px]"
                  style={{
                    boxShadow: "0 8px 32px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255, 255, 255, 0.5)",
                  }}
                >
                  <div
                    className="absolute left-0 top-4 bottom-4 w-[3px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ background: "linear-gradient(180deg, #10b981, #34d399)" }}
                  />

                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-mono text-xs text-gray-400 tracking-wider">03</span>
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                      style={{
                        background: "linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(16, 185, 129, 0.2))",
                      }}
                    >
                      <Layers
                        className="w-5 h-5 text-emerald-500"
                        style={{ filter: "drop-shadow(0 0 8px rgba(16, 185, 129, 0.6))" }}
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <h3 className="text-base font-semibold text-gray-900 mb-1">{t("process.step3.title")}</h3>
                    <p className="text-sm text-gray-500">{t("process.step3.desc")}</p>
                  </div>

                  <div className="flex-1 flex flex-col justify-start space-y-2">
                    <div
                      className="flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-200 transition-all duration-200 hover:border-emerald-300 hover:shadow-sm cursor-pointer"
                      style={{ background: "linear-gradient(135deg, rgba(239, 68, 68, 0.05), rgba(239, 68, 68, 0.1))" }}
                    >
                      <Video className="w-4 h-4 text-red-500" />
                      <span className="text-xs font-medium text-gray-700">{t("process.step3.video")}</span>
                    </div>
                    <div
                      className="flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-200 transition-all duration-200 hover:border-emerald-300 hover:shadow-sm cursor-pointer"
                      style={{
                        background: "linear-gradient(135deg, rgba(59, 130, 246, 0.05), rgba(59, 130, 246, 0.1))",
                      }}
                    >
                      <ImageIcon className="w-4 h-4 text-blue-500" />
                      <span className="text-xs font-medium text-gray-700">{t("process.step3.image")}</span>
                    </div>
                    <div
                      className="flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-200 transition-all duration-200 hover:border-emerald-300 hover:shadow-sm cursor-pointer"
                      style={{
                        background: "linear-gradient(135deg, rgba(16, 185, 129, 0.05), rgba(16, 185, 129, 0.1))",
                      }}
                    >
                      <FileText className="w-4 h-4 text-emerald-500" />
                      <span className="text-xs font-medium text-gray-700">{t("process.step3.content")}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 4 - Đa nền tảng */}
              <div className="relative group h-full">
                <div
                  className="relative bg-white/70 backdrop-blur-xl rounded-2xl border border-white/50 p-6 transition-all duration-300 hover:-translate-y-2 h-full flex flex-col min-h-[280px]"
                  style={{
                    boxShadow: "0 8px 32px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255, 255, 255, 0.5)",
                  }}
                >
                  <div
                    className="absolute left-0 top-4 bottom-4 w-[3px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ background: "linear-gradient(180deg, #8b5cf6, #a78bfa)" }}
                  />

                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-mono text-xs text-gray-400 tracking-wider">04</span>
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                      style={{
                        background: "linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(139, 92, 246, 0.2))",
                      }}
                    >
                      <Share2
                        className="w-5 h-5 text-violet-500"
                        style={{ filter: "drop-shadow(0 0 8px rgba(139, 92, 246, 0.6))" }}
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <h3 className="text-base font-semibold text-gray-900 mb-1">{t("process.step4.title")}</h3>
                    <p className="text-sm text-gray-500">{t("process.step4.desc")}</p>
                  </div>

                  <div className="flex-1 flex flex-col justify-start">
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { Icon: SiFacebook, color: "#1877F2", name: "Facebook" },
                        { Icon: SiInstagram, color: "#E4405F", name: "Instagram" },
                        { Icon: SiTiktok, color: "#000000", name: "TikTok" },
                        { Icon: SiYoutube, color: "#FF0000", name: "YouTube" },
                        { Icon: SiLinkedin, color: "#0A66C2", name: "LinkedIn" },
                        { Icon: SiX, color: "#000000", name: "X" },
                      ].map((platform, idx) => (
                        <div
                          key={platform.name}
                          className="flex items-center justify-center p-2.5 rounded-lg bg-white border border-gray-200 hover:border-violet-300 hover:shadow-md transition-all duration-200 cursor-pointer group/icon"
                        >
                          <platform.Icon
                            className="w-5 h-5 transition-transform duration-200 group-hover/icon:scale-110"
                            style={{ color: platform.color }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        @keyframes floatSlowReverse {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(20px); }
        }
        @keyframes floatMedium {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-25px) translateX(-10px); }
        }
        @keyframes flowParticle {
          0% { left: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { left: 100%; opacity: 0; }
        }
        @keyframes waveform {
          0%, 100% { transform: scaleY(1); }
          50% { transform: scaleY(0.5); }
        }
        @keyframes waveformSubtle {
          0%, 100% { transform: scaleY(1); }
          50% { transform: scaleY(0.5); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        @keyframes cursorBlink {
          0%, 100% { opacity: 0.8; }
          50% { opacity: 0; }
        }
        @keyframes floatBrand {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
      `}</style>
    </section>
  )
}
