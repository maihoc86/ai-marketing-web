/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useRef } from "react";
import {
  CloudUpload,
  Zap,
  Download,
  RefreshCw,
  Bookmark,
  Loader2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";
import { generateImage } from "@/lib/queries/generate-image";
import { useInView } from "@/hooks/use-in-view";

export function AIContentDemoSection() {
  const { t } = useI18n();
  const { ref, isInView } = useInView();
  const [activeField, setActiveField] = useState("");
  const [activeRatio, setActiveRatio] = useState("square");
  const [activeHistory, setActiveHistory] = useState(0);
  const [isGenerating, setIsGenerating] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [generatedSrc, setGeneratedSrc] = useState<string | null>(null);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [historyImages, setHistoryImages] = useState(
    [] as { src: string; alt: string }[],
  );

  const handleGenerate = async () => {
    if (!prompt || prompt.trim().length === 0) {
      // Use a default prompt if none provided
    }
    // Build a final prompt that silently enforces the user's selections
    const defaultPrompt = t("featurePage.content.demo.defaultPrompt");
    const presetObj = styles.find((p) => p.key === selectedPreset);
    const presetText = presetObj ? t(presetObj.labelKey) : "";
    const fieldObj = fields.find((s) => s.key === activeField);
    const fieldText = fieldObj ? t(fieldObj.labelKey) : "";
    const ratioMap: Record<string, string> = {
      square: "square (1:1)",
      landscape: "landscape (4:3)",
      portrait: "portrait (3:4)",
    };
    const ratioText = ratioMap[activeRatio] || activeRatio;

    const variationSeed = Math.random().toString(36).slice(2, 9);

    const styleDescriptors: Record<string, string> = {
      minimalist:
        "minimalist composition, clean negative space, soft natural shadows, muted color palette",
      organic:
        "natural tones, warm ambient light, textured materials, soft highlights",
      cinematic:
        "dramatic cinematic lighting, high contrast, shallow depth of field, rich color grading",
    };

    const fieldDescriptors: Record<string, string> = {
      product:
        "studio product shot: centered composition, product fills most of the frame, sharp details, neutral background",
      lifestyle:
        "lifestyle scene: contextual props, subtle human interaction, environmental storytelling, natural poses",
      ecom: "e-commerce white-background product photo: pure white background, even lighting, crisp shadows, 3/4 angle",
    };

    const styleHint = selectedPreset
      ? styleDescriptors[selectedPreset] || presetText
      : "photorealistic, high-quality";
    const fieldHint = activeField
      ? fieldDescriptors[activeField] || fieldText
      : fieldText || "general product imagery";

    const negativeInstructions =
      "No watermarks, no visible text, no logos, no brand names, no UI overlays, avoid hands covering the product unless specified.";

    // Append a short variation seed so each generation differs from previous ones
    const variationNote = `Variation seed: ${variationSeed}. Produce a visually different composition and details from previous generations.`;

    const base =
      prompt && prompt.trim().length > 0 ? prompt.trim() : defaultPrompt;
    const finalPrompt = [
      base,
      `Style: ${presetText || selectedPreset || "photorealistic"}. ${styleHint}.`,
      `Field: ${fieldText || activeField || "general"}. ${fieldHint}.`,
      `Aspect Ratio: ${ratioText}.`,
      `Output: high resolution, prioritize sharp detail and realistic materials.`,
      negativeInstructions,
      variationNote,
    ]
      .filter(Boolean)
      .join(" ")
      .trim();

    setIsGenerating(true);

    try {
      try {
        const json = await generateImage({
          prompt: finalPrompt,
          field: activeField,
          ratio: activeRatio,
          initImage: uploadedImage,
          preset: selectedPreset,
        });

        if (json?.image) {
          setGeneratedSrc(json.image);
          setHistoryImages((prev) =>
            [
              { src: json.image, alt: finalPrompt || "Generated" },
              ...prev,
            ].slice(0, 6),
          );
          setActiveHistory(0);
        } else {
          console.error("Generation error", json);
        }
      } catch (err) {
        console.error(err);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsGenerating(false);
    }
  };

  const fields = [
    { key: "product", labelKey: "featurePage.content.demo.styleProduct" },
    { key: "lifestyle", labelKey: "featurePage.content.demo.styleLifestyle" },
    { key: "ecom", labelKey: "featurePage.content.demo.styleEcom" },
  ];

  const [selectedPreset, setSelectedPreset] = useState<string | null>(null);

  const styles = [
    {
      key: "minimalist",
      emoji: "✨",
      labelKey: "featurePage.content.demo.presetMinimalist",
    },
    {
      key: "organic",
      emoji: "🌿",
      labelKey: "featurePage.content.demo.presetOrganic",
    },
    {
      key: "cinematic",
      emoji: "🔥",
      labelKey: "featurePage.content.demo.presetCinematic",
    },
  ];

  return (
    <section
      id="demo-generator"
      className="py-24 bg-linear-to-b from-[#22b5f8]/5 to-white"
    >
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
              <span className="inline-block px-3 py-1 mb-4 text-xs font-bold uppercase tracking-widest text-[#22b5f8] bg-primary/10 rounded-full">
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
            <div>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={async (e) => {
                  const file = e.target.files?.[0];
                  if (!file) return;
                  const reader = new FileReader();
                  reader.onload = () => {
                    const result = reader.result as string | null;
                    if (result) {
                      setUploadedImage(result);
                    }
                  };
                  reader.readAsDataURL(file);
                }}
              />

              <div
                role="button"
                tabIndex={0}
                onClick={() => fileInputRef.current?.click()}
                onKeyDown={(e) =>
                  e.key === "Enter" && fileInputRef.current?.click()
                }
                className="border-2 border-dashed border-gray-300 rounded-2xl p-8 bg-white/50 flex flex-col items-center justify-center text-center hover:border-primary transition-colors cursor-pointer group"
              >
                <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {uploadedImage ? (
                    <img
                      src={uploadedImage}
                      alt="upload preview"
                      className="w-10 h-10 object-cover rounded-full"
                    />
                  ) : (
                    <CloudUpload className="w-6 h-6 text-[#22b5f8]" />
                  )}
                </div>
                <p className="text-sm font-bold mb-1">
                  {t("featurePage.content.demo.uploadTitle")}
                </p>
                <p className="text-xs text-gray-500">
                  {t("featurePage.content.demo.uploadDesc")}
                </p>
              </div>
            </div>

            {/* Style & Aspect Ratio */}
            <div className="flex flex-col gap-4">
              <div className="space-y-3">
                <label className="block text-sm font-bold text-gray-700">
                  {t("featurePage.content.demo.promptLabel")}
                </label>
                <textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  className="w-full h-32 p-4 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#22b5f8]/50 focus:border-primary transition-all text-sm resize-none"
                  placeholder={t("featurePage.content.demo.promptPlaceholder")}
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-3">
                  {t("featurePage.content.demo.styleLabel")}
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {styles.map((preset) => (
                    <button
                      key={preset.key}
                      onClick={() => {
                        setSelectedPreset(preset.key);
                      }}
                      className={`px-3 py-1.5 text-xs font-bold rounded-full transition-all ${
                        selectedPreset === preset.key
                          ? "bg-primary text-white shadow-sm"
                          : "bg-white border border-gray-200 hover:bg-primary hover:text-white"
                      }`}
                    >
                      {preset.emoji} {t(preset.labelKey)}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-3">
                  {t("featurePage.content.demo.field")}
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {fields.map((field) => (
                    <button
                      key={field.key}
                      onClick={() => setActiveField(field.key)}
                      className={`px-3 py-1.5 text-xs font-bold rounded-full transition-all ${
                        activeField === field.key
                          ? "bg-primary text-white shadow-sm"
                          : "bg-white border border-gray-200 hover:bg-primary hover:text-white"
                      }`}
                    >
                      {t(field.labelKey)}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-3">
                  {t("featurePage.content.demo.aspectLabel")}
                </label>
                <div className="grid grid-cols-3 gap-4">
                  {(["square", "landscape", "portrait"] as const).map((r) => (
                    <button
                      key={r}
                      onClick={() => setActiveRatio(r)}
                      className={`flex py-5 px-3 items-center justify-center rounded-lg transition-all ${
                        activeRatio === r
                          ? "bg-primary text-white"
                          : "bg-white border border-gray-200 hover:bg-primary hover:text-white"
                      }`}
                    >
                      {r === "square" ? (
                        <div className="aspect-square w-full border-2  border-current rounded-sm" />
                      ) : r === "landscape" ? (
                        <div className="aspect-4/3 w-full border-2  border-current rounded-sm" />
                      ) : (
                        <div className="aspect-3/4 w-full border-2  border-current rounded-sm" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Generate Button & Progress */}
            <div className="space-y-4 pt-4">
              <Button
                onClick={handleGenerate}
                disabled={isGenerating}
                className="btn-primary-light w-full disabled:opacity-70"
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
                  <div className="h-full bg-primary w-[60%] rounded-full" />
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
                {generatedSrc ? (
                  <>
                    <img
                      alt="Generated product image"
                      className="w-full h-full object-cover"
                      src={generatedSrc}
                    />
                    <div className="absolute top-6 left-6">
                      <span className="bg-black/60 backdrop-blur-md text-white px-3 py-1 rounded-full text-[10px] font-bold flex items-center gap-1.5 border border-white/20">
                        <span className="size-1.5 bg-green-400 rounded-full animate-pulse" />
                        {t("featurePage.content.demo.4kReady")}
                      </span>
                    </div>
                  </>
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-gray-50 text-gray-400">
                    <CloudUpload className="w-12 h-12 mb-3" />
                    <div className="text-sm font-semibold">
                      {t("featurePage.content.demo.noImage") || "No image yet"}
                    </div>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-between mt-6 px-2">
                <div className="flex gap-3">
                  <Button className="btn-primary-light rounded-xl" asChild>
                    <a
                      href={
                        generatedSrc ?? "/images/demo/generated-preview.jpg"
                      }
                      download
                    >
                      <Download className="size-4" />
                      {t("featurePage.content.demo.downloadHD")}
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => {
                      // clear current preview and re-run generation with the same params
                      setGeneratedSrc(null);
                      handleGenerate();
                    }}
                    disabled={isGenerating}
                    className="px-6 py-2.5 bg-white border border-gray-200 text-sm font-bold rounded-xl flex items-center gap-2 hover:bg-primary hover:text-white transition-all disabled:opacity-70"
                  >
                    <RefreshCw className="size-4" />
                    {t("featurePage.content.demo.tryAgain")}
                  </Button>
                </div>
              </div>
            </div>

            {/* History */}
            {historyImages.length > 0 && (
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
                          ? "border-2 border-primary ring-2 ring-[#22b5f8]/20"
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
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
