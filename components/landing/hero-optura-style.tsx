"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Sparkles, Play, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";
import { YouTubeModal } from "@/components/youtube-modal";

export function HeroOpturaStyle() {
  const { t } = useI18n();
  const [showVideoModal, setShowVideoModal] = useState(false);

  return (
    <>
      <section className="relative min-h-screen bg-gradient-optura overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-dot-pattern opacity-30" />

        {/* Floating gradient orbs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-20 animate-float" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-cyan-200 rounded-full blur-3xl opacity-20 animate-float-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-100 rounded-full blur-3xl opacity-10" />

        {/* Content container */}
        <div className="relative container mx-auto px-4 pt-32 pb-16 md:pt-40 md:pb-24">
          <div className="container mx-auto">
            {/* Floating badge */}
            <div className="flex justify-center mb-8 animate-fade-down">
              <div className="floating-label inline-flex items-center gap-2 px-5 py-2.5 rounded-full">
                <Sparkles className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-semibold text-blue-900">
                  {t("hero.badge") || "AI-Powered Marketing Automation"}
                </span>
              </div>
            </div>

            {/* Main headline */}
            <h1 className="font-serif text-display-xl font-bold text-center mb-6 animate-fade-up animation-delay-100">
              {t("hero.title")}{" "}
              <span className="italic text-gradient">
                {t("hero.titleHighlight") || "tự động hóa"}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-gray-700 text-center max-w-3xl mx-auto mb-10 animate-fade-up animation-delay-200">
              {t("hero.subtitle")}
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-up animation-delay-300">
              <Link href="/dang-ky">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-6 rounded-full shadow-optura hover:shadow-optura-lg transition-all text-base group"
                >
                  {t("hero.cta.trial") || "Dùng thử miễn phí"}
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>

              <Button
                size="lg"
                variant="outline"
                onClick={() => setShowVideoModal(true)}
                className="w-full sm:w-auto bg-white/80 backdrop-blur-sm hover:bg-white border-2 border-gray-200 text-gray-900 font-semibold px-8 py-6 rounded-full shadow-optura-sm hover:shadow-optura transition-all text-base group"
              >
                <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                {t("hero.cta.demo") || "Xem demo"}
              </Button>
            </div>

            {/* Dashboard mockup card */}
            <DashboardMockupCard />

            {/* Floating brand icons */}
            <FloatingBrandIcons />
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <YouTubeModal
        isOpen={showVideoModal}
        onClose={() => setShowVideoModal(false)}
        videoId="dQw4w9WgXcQ"
      />
    </>
  );
}

// Dashboard mockup card with glassmorphism
function DashboardMockupCard() {
  const { t } = useI18n();

  // Set this to true when you have a real dashboard screenshot
  const hasRealScreenshot = false;
  const screenshotPath = "/images/dashboard-screenshot.png"; // Update this path

  return (
    <div className="relative container mx-auto max-w-6xl animate-scale-in animation-delay-400">
      {/* Glow effect */}
      <div className="absolute -inset-4 bg-linear-to-r from-blue-400 to-cyan-400 rounded-[3rem] opacity-20 blur-2xl" />

      {/* Main card */}
      <div className="relative glass-card-strong rounded-[2.5rem] p-3 md:p-6">
        {/* Dashboard image */}
        <div className="relative aspect-[16/9] rounded-[2rem] overflow-hidden bg-linear-to-br from-blue-50 to-cyan-50">
          {hasRealScreenshot ? (
            // Real dashboard screenshot
            <Image
              src={screenshotPath}
              alt={t("hero.dashboard.title") || "AI Marketing Dashboard"}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            />
          ) : (
            // Placeholder with decorative elements
            <>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center px-6">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-linear-to-br from-blue-500 to-cyan-500 mb-4 shadow-optura">
                    <Sparkles className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                    {t("hero.dashboard.title") || "AI Marketing Dashboard"}
                  </h3>
                  <p className="text-gray-600 max-w-md mx-auto">
                    {t("hero.dashboard.subtitle") ||
                      "Quản lý toàn bộ chiến dịch marketing từ một nền tảng"}
                  </p>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-6 left-6 w-32 h-32 bg-blue-400 rounded-full blur-3xl opacity-30" />
              <div className="absolute bottom-6 right-6 w-32 h-32 bg-cyan-400 rounded-full blur-3xl opacity-30" />
            </>
          )}
        </div>

        {/* Stats badges on the card */}
        <div className="absolute -top-4 -right-4 hidden md:block">
          <div className="floating-label rounded-2xl px-4 py-3 animate-float">
            <div className="text-xs text-gray-600 mb-1">
              {t("hero.stats.videos") || "Video/tháng"}
            </div>
            <div className="text-2xl font-bold text-gradient">1000+</div>
          </div>
        </div>

        <div className="absolute -bottom-4 -left-4 hidden md:block">
          <div className="floating-label rounded-2xl px-4 py-3 animate-float-slow">
            <div className="text-xs text-gray-600 mb-1">
              {t("hero.stats.savings") || "Tiết kiệm"}
            </div>
            <div className="text-2xl font-bold text-gradient">85%</div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Floating brand icons with animation
function FloatingBrandIcons() {
  const brands = [
    { name: "ChatGPT", icon: "🤖", position: "top-20 left-[5%]", delay: "0s" },
    {
      name: "Gemini",
      icon: "✨",
      position: "top-40 right-[8%]",
      delay: "0.5s",
    },
    {
      name: "Claude",
      icon: "🧠",
      position: "bottom-32 left-[10%]",
      delay: "1s",
    },
    {
      name: "Meta AI",
      icon: "🎯",
      position: "bottom-20 right-[12%]",
      delay: "1.5s",
    },
    { name: "HubSpot", icon: "📊", position: "top-1/3 left-[2%]", delay: "2s" },
    {
      name: "Canva",
      icon: "🎨",
      position: "top-1/2 right-[5%]",
      delay: "2.5s",
    },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none hidden lg:block">
      {brands.map((brand, index) => (
        <div
          key={brand.name}
          className={`absolute ${brand.position} animate-float opacity-60 hover:opacity-100 transition-opacity`}
          style={{
            animationDelay: brand.delay,
          }}
        >
          <div className="avatar-gradient-blue w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shadow-optura">
            {brand.icon}
          </div>
        </div>
      ))}
    </div>
  );
}
