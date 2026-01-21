"use client"

import { memo } from "react"
import { Sparkles, Lightbulb, Cpu, Layers, Share2, Video, ImageIcon, FileText } from "lucide-react"
import { useI18n } from "@/lib/i18n"
import { SiFacebook, SiInstagram, SiTiktok, SiYoutube, SiLinkedin, SiX } from "react-icons/si"

interface Platform {
  Icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>
  color: string
  name: string
}

const PlatformIcon = memo(({ platform }: { platform: Platform }) => (
  <div
    className="flex items-center justify-center p-2.5 rounded-lg bg-white border border-gray-200 hover:border-violet-300 hover:shadow-md transition-all duration-200 cursor-pointer group/icon"
  >
    <platform.Icon
      className="w-5 h-5 transition-transform duration-200 group-hover/icon:scale-110"
      style={{ color: platform.color }}
    />
  </div>
))

PlatformIcon.displayName = "PlatformIcon"

const platforms: Platform[] = [
  { Icon: SiFacebook, color: "#1877F2", name: "Facebook" },
  { Icon: SiInstagram, color: "#E4405F", name: "Instagram" },
  { Icon: SiTiktok, color: "#000000", name: "TikTok" },
  { Icon: SiYoutube, color: "#FF0000", name: "YouTube" },
  { Icon: SiLinkedin, color: "#0A66C2", name: "LinkedIn" },
  { Icon: SiX, color: "#000000", name: "X" },
]

export function ProcessFlow() {
  const { t } = useI18n()

  return (
    <div className="mt-20 md:mt-28">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#22b5f8]/10 border border-[#22b5f8]/30 backdrop-blur-sm">
          <Sparkles className="w-3.5 h-3.5 text-[#22b5f8]" />
          <span className="text-xs font-medium text-[#008bff]">{t("process.badge")}</span>
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
                    className="w-5 h-5 text-[#22b5f8] transition-all duration-300"
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
                    className="w-5 h-5 text-[#22b5f8] relative z-10"
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
                  <ImageIcon className="w-4 h-4 text-[#22b5f8]" />
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
                  {platforms.map((platform) => (
                    <PlatformIcon key={platform.name} platform={platform} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes flowParticle {
          0% { left: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { left: 100%; opacity: 0; }
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
      `}</style>
    </div>
  )
}
