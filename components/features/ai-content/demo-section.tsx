"use client";

import { useState } from "react";
import { CloudUpload, Zap, Download, RefreshCw, Bookmark, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";
import { useInView } from "@/hooks/use-in-view";

export function AIContentDemoSection() {
  const { t } = useI18n();
  const { ref, isInView } = useInView();
  const [activeStyle, setActiveStyle] = useState("product");
  const [activeRatio, setActiveRatio] = useState("square");
  const [activeHistory, setActiveHistory] = useState(0);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => setIsGenerating(false), 2000);
  };

  const styles = [
    { key: "product", labelKey: "featurePage.content.demo.styleProduct" },
    { key: "lifestyle", labelKey: "featurePage.content.demo.styleLifestyle" },
    { key: "ecom", labelKey: "featurePage.content.demo.styleEcom" },
  ];

  const presets = [
    { emoji: "✨", labelKey: "featurePage.content.demo.presetMinimalist" },
    { emoji: "🌿", labelKey: "featurePage.content.demo.presetOrganic" },
    { emoji: "🔥", labelKey: "featurePage.content.demo.presetCinematic" },
  ];

  const historyImages = [
    { src: "/images/demo/history-1.jpg", alt: "History 1" },
    { src: "/images/demo/history-2.jpg", alt: "History 2" },
    { src: "/images/demo/history-3.jpg", alt: "History 3" },
    { src: "/images/demo/history-4.jpg", alt: "History 4" },
  ];

  return (
    <section className="py-24 bg-linear-to-b from-[#22b5f8]/5 to-white">
      <div ref={ref} className="container mx-auto px-6">
        <div
          className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-start transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Left Panel - Controls */}
          <div className="lg:col-span-5 space-y-8">
            {/* Header */}
            <div>
              <span className="inline-block px-3 py-1 mb-4 text-xs font-bold uppercase tracking-widest text-[#22b5f8] bg-[#22b5f8]/10 rounded-full">
                {t("featurePage.content.demo.badge")}
              </span>
              <h2 className="text-4xl font-black tracking-tight mb-4">
                {t("featurePage.content.demo.title")}
              </h2>
              <p className="text-gray-600">
                {t("featurePage.content.demo.description")}
              </p>
            </div>

            {/* Upload Area */}
            <div className="border-2 border-dashed border-gray-300 rounded-2xl p-8 bg-white/50 flex flex-col items-center justify-center text-center hover:border-[#22b5f8] transition-colors cursor-pointer group">
              <div className="size-12 rounded-full bg-[#22b5f8]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <CloudUpload className="w-6 h-6 text-[#22b5f8]" />
              </div>
              <p className="text-sm font-bold mb-1">
                {t("featurePage.content.demo.uploadTitle")}
              </p>
              <p className="text-xs text-gray-500">
                {t("featurePage.content.demo.uploadDesc")}
              </p>
            </div>

            {/* Prompt */}
            <div className="space-y-4">
              <label className="block text-sm font-bold text-gray-700">
                {t("featurePage.content.demo.promptLabel")}
              </label>
              <textarea
                className="w-full h-32 p-4 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#22b5f8]/50 focus:border-[#22b5f8] transition-all text-sm resize-none"
                placeholder={t("featurePage.content.demo.promptPlaceholder")}
                readOnly
              />
              <div className="flex flex-wrap gap-2">
                {presets.map((preset) => (
                  <button
                    key={preset.labelKey}
                    className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 bg-gray-100 rounded-full hover:bg-[#22b5f8]/10 hover:text-[#22b5f8] transition-colors"
                  >
                    {preset.emoji} {t(preset.labelKey)}
                  </button>
                ))}
              </div>
            </div>

            {/* Style & Aspect Ratio */}
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-3">
                  {t("featurePage.content.demo.styleLabel")}
                </label>
                <div className="flex flex-wrap gap-2">
                  {styles.map((style) => (
                    <button
                      key={style.key}
                      onClick={() => setActiveStyle(style.key)}
                      className={`px-3 py-1.5 text-xs font-bold rounded-full transition-all ${
                        activeStyle === style.key
                          ? "bg-[#22b5f8] text-white shadow-sm"
                          : "bg-white border border-gray-200 hover:border-[#22b5f8]"
                      }`}
                    >
                      {t(style.labelKey)}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-3">
                  {t("featurePage.content.demo.aspectLabel")}
                </label>
                <div className="flex gap-2">
                  <button
                    onClick={() => setActiveRatio("square")}
                    className={`size-8 flex items-center justify-center rounded-lg transition-all ${
                      activeRatio === "square"
                        ? "bg-[#22b5f8] text-white"
                        : "bg-white border border-gray-200 hover:border-[#22b5f8]"
                    }`}
                  >
                    <div className="size-3.5 border-2 border-current rounded-sm" />
                  </button>
                  <button
                    onClick={() => setActiveRatio("landscape")}
                    className={`size-8 flex items-center justify-center rounded-lg transition-all ${
                      activeRatio === "landscape"
                        ? "bg-[#22b5f8] text-white"
                        : "bg-white border border-gray-200 hover:border-[#22b5f8]"
                    }`}
                  >
                    <div className="w-4 h-3 border-2 border-current rounded-sm" />
                  </button>
                  <button
                    onClick={() => setActiveRatio("portrait")}
                    className={`size-8 flex items-center justify-center rounded-lg transition-all ${
                      activeRatio === "portrait"
                        ? "bg-[#22b5f8] text-white"
                        : "bg-white border border-gray-200 hover:border-[#22b5f8]"
                    }`}
                  >
                    <div className="w-3 h-4 border-2 border-current rounded-sm" />
                  </button>
                </div>
              </div>
            </div>

            {/* Generate Button & Progress */}
            <div className="space-y-4 pt-4">
              <Button
                onClick={handleGenerate}
                disabled={isGenerating}
                className="w-full py-4 bg-[#22b5f8] hover:bg-[#1a9fd8] text-white font-bold rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-[#22b5f8]/25 transition-all transform hover:-translate-y-1 disabled:opacity-70"
              >
                {isGenerating ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    {t("featurePage.content.demo.generating")}
                  </>
                ) : (
                  <>
                    {t("featurePage.content.demo.generateBtn")}
                    <Zap className="w-5 h-5" />
                  </>
                )}
              </Button>
              <div className="space-y-2">
                <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-gray-500">
                  <span>{t("featurePage.content.demo.freeRemaining")}</span>
                  <span>60%</span>
                </div>
                <div className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-[#22b5f8] w-[60%] rounded-full" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel - Preview */}
          <div
            className={`lg:col-span-7 flex flex-col gap-6 transition-all duration-700 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "0.2s" }}
          >
            {/* Main Image Preview */}
            <div className="relative group">
              <div className="aspect-4/3 rounded-3xl overflow-hidden bg-gray-100 border-8 border-white shadow-2xl relative">
                <img
                  alt="Generated product image"
                  className="w-full h-full object-cover"
                  src="/images/demo/generated-preview.jpg"
                />
                <div className="absolute top-6 left-6">
                  <span className="bg-black/60 backdrop-blur-md text-white px-3 py-1 rounded-full text-[10px] font-bold flex items-center gap-1.5 border border-white/20">
                    <span className="size-1.5 bg-green-400 rounded-full animate-pulse" />
                    4K READY
                  </span>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-between mt-6 px-2">
                <div className="flex gap-3">
                  <Button className="px-6 py-2.5 bg-[#1f3b61] text-white text-sm font-bold rounded-xl flex items-center gap-2 hover:bg-[#1f3b61]/90 transition-all">
                    <Download className="w-4 h-4" />
                    {t("featurePage.content.demo.downloadHD")}
                  </Button>
                  <Button
                    variant="outline"
                    className="px-6 py-2.5 bg-white border border-gray-200 text-sm font-bold rounded-xl flex items-center gap-2 hover:border-[#22b5f8] transition-all"
                  >
                    <RefreshCw className="w-4 h-4" />
                    {t("featurePage.content.demo.tryAgain")}
                  </Button>
                </div>
                <button className="p-2.5 bg-white border border-gray-200 rounded-xl hover:text-[#22b5f8] transition-all">
                  <Bookmark className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* History */}
            <div className="mt-4">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500">
                  {t("featurePage.content.demo.history")}
                </h4>
                <button className="text-xs font-bold text-[#22b5f8]">
                  {t("featurePage.content.demo.viewAll")}
                </button>
              </div>
              <div className="flex gap-4">
                {historyImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveHistory(index)}
                    className={`size-20 rounded-xl overflow-hidden transition-all cursor-pointer ${
                      activeHistory === index
                        ? "border-2 border-[#22b5f8] ring-2 ring-[#22b5f8]/20"
                        : "border border-gray-200 grayscale hover:grayscale-0 opacity-70 hover:opacity-100"
                    }`}
                  >
                    <img
                      alt={image.alt}
                      className="w-full h-full object-cover"
                      src={image.src}
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
