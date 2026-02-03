"use client";

import { useState } from "react";
import {
  ChevronRight,
  Sparkles,
  Play,
  Building2,
  Video,
  Pause,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { LocaleLink } from "@/components/locale-link";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

// Scene data with video URLs
const scenes = [
  {
    id: 1,
    title: "01. Intro",
    duration: "00:05s",
    description: "Welcome team, here are the key highlights for...",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1",
    thumbnail: "/images/video/scene-intro.jpg",
  },
  {
    id: 2,
    title: "02. Metrics",
    duration: "00:12s",
    description: "Revenue is up by 20% YoY driven by enterprise...",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1",
    thumbnail: "/images/video/scene-metrics.jpg",
  },
  {
    id: 3,
    title: "03. Closing",
    duration: "00:04s",
    description: "Let's keep pushing for Q4. Thank you!",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1",
    thumbnail: "/images/video/scene-closing.jpg",
  },
];

export function VideoHeroSection() {
  const { t } = useI18n();
  const [activeScene, setActiveScene] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleSceneClick = (index: number) => {
    setActiveScene(index);
    setIsPlaying(true);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="pt-24 pb-16 md:pt-28 md:pb-24 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white" />
      <div className="absolute top-20 left-10 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-cyan-100/50 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-100/30 rounded-full blur-3xl" />

      <div className="container mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center animate-fade-in">
          {/* Left Content */}
          <div>
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm font-medium text-gray-500 mb-6">
              <LocaleLink
                href="/#features"
                className="hover:text-primary transition-colors"
              >
                {t("nav.features")}
              </LocaleLink>
              <ChevronRight className="size-4" />
              <span className="text-primary">{t("features.video.title")}</span>
            </nav>

            {/* Badge */}
            <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-xs font-black uppercase tracking-widest text-white rounded-full animate-fade-in bg-primary">
              <Sparkles className="size-3" />
              {t("featurePage.video.hero.badge")}
            </span>

            {/* Title */}
            <h1
              className="text-5xl md:text-6xl font-black tracking-tight leading-[1.1] mb-6 animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              {t("featurePage.video.hero.title1")}{" "}
              <span className="text-gradient-brand">
                {t("featurePage.video.hero.title2")}
              </span>
            </h1>

            {/* Description */}
            <p
              className="text-xl text-gray-600 mb-10 max-w-lg leading-relaxed animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              {t("featurePage.video.hero.description")}
            </p>

            {/* Metrics */}
            <div
              className="grid grid-cols-3 gap-4 py-8 border-t border-gray-100 animate-fade-in"
              style={{ animationDelay: "0.3s" }}
            >
              <div>
                <div className="text-2xl font-black text-[#1c1c1c]">5min</div>
                <div className="text-xs font-bold text-gray-400 uppercase tracking-tighter">
                  {t("featurePage.video.metric.perVideo")}
                </div>
              </div>
              <div>
                <div className="text-2xl font-black text-[#1c1c1c]">4K</div>
                <div className="text-xs font-bold text-gray-400 uppercase tracking-tighter">
                  {t("featurePage.video.metric.resolution")}
                </div>
              </div>
              <div>
                <div className="text-2xl font-black text-[#1c1c1c]">50+</div>
                <div className="text-xs font-bold text-gray-400 uppercase tracking-tighter">
                  {t("featurePage.video.metric.aiVoices")}
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-4 mt-4 animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              <Button
                size="lg"
                className="btn-primary-light w-50 rounded-full"
                asChild
              >
                <LocaleLink href="/register">
                  <Sparkles className="size-5 mr-2" />
                  {t("featurePage.video.cta.createFirst")}
                </LocaleLink>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-2"
                asChild
              >
                <LocaleLink href="#demo">
                  <Play className="size-5 mr-2" />
                  {t("featurePage.video.cta.watchDemo")}
                </LocaleLink>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div
              className="pt-8 mt-4 flex flex-col sm:flex-row items-start sm:items-center gap-6 animate-fade-in"
              style={{ animationDelay: "0.5s" }}
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white rounded-lg shadow-sm border border-gray-100 text-primary">
                  <Building2 className="size-5" />
                </div>
                <div className="text-left">
                  <p className="text-base font-bold text-[#1c1c1c] leading-none">
                    12,000+
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    {t("featurePage.video.trust.businesses")}
                  </p>
                </div>
              </div>
              <div className="w-px h-10 bg-gray-200 hidden sm:block"></div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white rounded-lg shadow-sm border border-gray-100 text-primary">
                  <Video className="size-5" />
                </div>
                <div className="text-left">
                  <p className="text-base font-bold text-[#1c1c1c] leading-none">
                    2M+
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    {t("featurePage.video.trust.videosCreated")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Dashboard Mockup with Interactive Scenes */}
          <div
            className="relative animate-fade-in"
            style={{ animationDelay: "0.5s" }}
          >
            {/* Blur background effect */}
            <div className="absolute -inset-10 bg-gradient-optura blur-3xl rounded-full animate-pulse opacity-20" />

            {/* Main Dashboard Mockup */}
            <div className="relative bg-white/95 backdrop-blur-md rounded-2xl border border-gray-200/50 shadow-2xl overflow-hidden">
              {/* Window Header */}
              <div className="h-10 bg-gray-50 border-b border-gray-200 flex items-center px-4 gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="flex-1 flex items-center justify-center">
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <Video className="size-3" />
                    <span>Q3 Marketing Update.mp4</span>
                  </div>
                </div>
                <button className="text-xs text-primary font-bold">SAVE</button>
              </div>

              {/* Dashboard Content */}
              <div className="flex">
                {/* Scenes Panel - Interactive */}
                <div className="w-1/3 border-r border-gray-100 p-4 bg-gray-50/50">
                  <div className="text-xs font-bold text-primary uppercase tracking-wider mb-4">
                    {t("featurePage.video.demo.scenes")}
                  </div>

                  {/* Clickable Scenes */}
                  {scenes.map((scene, index) => (
                    <button
                      key={scene.id}
                      onClick={() => handleSceneClick(index)}
                      className={cn(
                        "w-full text-left rounded-lg p-3 mb-3 transition-all duration-300",
                        activeScene === index
                          ? "bg-white border-l-2 border-primary shadow-sm"
                          : "bg-white border border-gray-100 hover:border-primary/50 hover:shadow-sm"
                      )}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-bold text-gray-900">
                          {scene.title}
                        </span>
                        <span className="text-[10px] text-gray-400">
                          {scene.duration}
                        </span>
                      </div>
                      <p className="text-[10px] text-gray-500 line-clamp-2">
                        {scene.description}
                      </p>
                      {activeScene === index && (
                        <div className="flex items-center gap-1 text-[10px] text-primary font-bold mt-2">
                          <Sparkles className="size-3" />
                          AI Improve
                        </div>
                      )}
                    </button>
                  ))}
                </div>

                {/* Preview Panel - Video Demo */}
                <div className="flex-1 bg-[#0a1628] relative min-h-[280px]">
                  {/* Rendering Badge */}
                  <div className="absolute top-4 right-4 z-10 bg-primary/20 border border-primary/30 text-primary text-[10px] font-bold px-2 py-1 rounded-full flex items-center gap-1.5">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                    </span>
                    {t("featurePage.video.demo.rendering")}
                  </div>

                  {/* Video Preview Area */}
                  {isPlaying ? (
                    <div className="relative w-full h-full">
                      <iframe
                        src={scenes[activeScene].videoUrl}
                        className="w-full h-full absolute inset-0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title={`Scene ${activeScene + 1} Preview`}
                      />
                      {/* Play/Pause Overlay Button */}
                      <button
                        onClick={togglePlay}
                        className="absolute bottom-4 left-4 z-10 size-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                      >
                        <Pause className="size-4 text-white" />
                      </button>
                    </div>
                  ) : (
                    <div className="relative w-full h-full flex flex-col items-center justify-center p-4">
                      {/* Audio Visualization when not playing */}
                      <div className="flex items-end gap-1 h-20 mb-4">
                        {[40, 60, 100, 70, 85, 50, 90, 65, 45, 80, 55, 95].map(
                          (height, idx) => (
                            <div
                              key={idx}
                              className="w-2 bg-primary/60 rounded-full animate-pulse"
                              style={{
                                height: `${height}%`,
                                animationDelay: `${idx * 0.1}s`,
                              }}
                            />
                          )
                        )}
                      </div>

                      {/* Play Button */}
                      <button
                        onClick={togglePlay}
                        className="size-16 bg-primary/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-primary/30 transition-colors border border-primary/30"
                      >
                        <Play className="size-6 text-primary ml-1" />
                      </button>

                      <p className="text-xs text-gray-400 mt-4">
                        {t("featurePage.video.demo.clickToPlay")}
                      </p>
                    </div>
                  )}

                  {/* Platform Thumbnails */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
                    <div className="w-10 h-10 rounded-lg bg-gray-700/80 flex items-center justify-center border-2 border-primary">
                      <span className="text-[8px] text-white font-bold">
                        16:9
                      </span>
                    </div>
                    <div className="w-10 h-10 rounded-lg bg-gray-700/80 flex items-center justify-center opacity-50">
                      <span className="text-[8px] text-white font-bold">
                        9:16
                      </span>
                    </div>
                    <div className="w-10 h-10 rounded-lg bg-gray-700/80 flex items-center justify-center opacity-50">
                      <span className="text-[8px] text-white font-bold">
                        1:1
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx global>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
}
