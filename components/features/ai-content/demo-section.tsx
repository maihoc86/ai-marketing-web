/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useRef, useEffect } from "react";
import { CloudUpload, Zap, Download, RefreshCw, Loader2 } from "lucide-react";
import GenerationProgress from "@/components/features/ai-content/generation-progress";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";
import { generateImage } from "@/lib/queries/generate-image";
import { useInView } from "@/hooks/use-in-view";
import { buildFinalPrompt } from "@/lib/prompt-builder";
import { useQuery } from "@tanstack/react-query";
import { rateLimitsQueryOptions } from "@/lib/queries/rate-limits";

export function AIContentDemoSection() {
  const { t } = useI18n();
  const { ref, isInView } = useInView();
  const [activeField, setActiveField] = useState("");
  const [activeRatio, setActiveRatio] = useState("square");
  const [activeHistory, setActiveHistory] = useState(0);
  const [isGenerating, setIsGenerating] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [rateLimitError, setRateLimitError] = useState<string | null>(null);

  // Fetch rate limits
  const {
    data: rateLimitData,
    error: rateLimitQueryError,
    isLoading: isLoadingRateLimits,
  } = useQuery(rateLimitsQueryOptions);
  const [promptError, setPromptError] = useState<string | null>(null);
  const [generatedSrc, setGeneratedSrc] = useState<string | null>(null);
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [historyImages, setHistoryImages] = useState(
    [] as { src: string; alt: string }[],
  );

  useEffect(() => {
    const key = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
    if (!key) return;
    if (document.querySelector('script[data-recaptcha="true"]')) return;
    const s = document.createElement("script");
    s.src = `https://www.google.com/recaptcha/api.js?render=${key}`;
    s.async = true;
    s.setAttribute("data-recaptcha", "true");
    document.head.appendChild(s);
  }, []);

  const handleGenerate = async () => {
    // Check rate limits first
    if (rateLimitQueryError) {
      setRateLimitError(
        t("featurePage.content.demo.rateLimitError") ||
          "Unable to check rate limits. Please try again.",
      );
      return;
    }

    if (!rateLimitData) {
      setRateLimitError(
        t("featurePage.content.demo.rateLimitLoading") ||
          "Loading rate limits...",
      );
      return;
    }

    if (rateLimitData.remaining <= 0) {
      setRateLimitError(
        t("featurePage.content.demo.noCreditsRemaining") ||
          "You have no free generation credits remaining. Please upgrade your plan.",
      );
      return;
    }

    setRateLimitError(null);

    if (!prompt || prompt.trim().length === 0) {
      setPromptError(
        t("featurePage.content.demo.promptRequired") ||
          "Please enter a prompt to generate an image.",
      );
      return;
    }
    setPromptError(null);
    if (uploadedImages.length === 0) {
      setUploadError(
        t("featurePage.content.demo.uploadRequired") ||
          "Please upload at least one image.",
      );
      return;
    }
    setUploadError(null);

    const variationSeed = Math.random().toString(36).slice(2, 9);
    const base =
      prompt && prompt.trim().length > 0
        ? prompt.trim()
        : t("featurePage.content.demo.defaultPrompt");
    const finalPrompt = buildFinalPrompt({
      base,
      selectedPreset,
      activeField,
      ratio: activeRatio,
      uploadedImages,
      variationSeed,
    });

    setIsGenerating(true);

    // If reCAPTCHA site key is configured, obtain a token before sending.
    const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
    const getRecaptchaToken = async () => {
      if (!RECAPTCHA_SITE_KEY) return null;
      // wait until grecaptcha is available
      if (!(window as any).grecaptcha) {
        await new Promise<void>((resolve) => {
          const interval = setInterval(() => {
            if ((window as any).grecaptcha) {
              clearInterval(interval);
              resolve();
            }
          }, 100);
        });
      }
      try {
        return await (window as any).grecaptcha.execute(RECAPTCHA_SITE_KEY, {
          action: "generate",
        });
      } catch (err) {
        return null;
      }
    };

    // execute reCAPTCHA if configured
    const recaptchaToken = await getRecaptchaToken();
    if (process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY && !recaptchaToken) {
      setUploadError(
        t("featurePage.content.demo.recaptchaFailed") ||
          "reCAPTCHA verification failed. Please try again.",
      );
      setIsGenerating(false);
      return;
    }

    try {
      try {
        const json = await generateImage({
          prompt: finalPrompt,
          field: activeField,
          ratio: activeRatio,
          initImages: uploadedImages ?? [],
          preset: selectedPreset,
          recaptchaToken: recaptchaToken ?? undefined,
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
                multiple
                className="hidden"
                onChange={async (e) => {
                  const input = e.currentTarget as HTMLInputElement;
                  const replaceIndex = input.dataset.replaceIndex;
                  const files = Array.from(input.files || []);
                  if (files.length === 0) return;

                  const readFile = (file: File) =>
                    new Promise<string>((resolve, reject) => {
                      const reader = new FileReader();
                      reader.onload = () => resolve(String(reader.result));
                      reader.onerror = reject;
                      reader.readAsDataURL(file);
                    });

                  // If replaceIndex is set on the input dataset, replace that single slot with the first selected file
                  if (replaceIndex) {
                    const idx = Number(replaceIndex);
                    try {
                      const dataUrl = await readFile(files[0]);
                      setUploadedImages((prev) => {
                        const next = [...prev];
                        next[idx] = dataUrl;
                        return next;
                      });
                      input.dataset.replaceIndex = "";
                      setUploadError(null);
                    } catch (err) {
                      console.error(err);
                    } finally {
                      input.value = "";
                    }
                    return;
                  }

                  // Otherwise append new images up to 5
                  try {
                    const dataUrls = await Promise.all(
                      files.map((f) => readFile(f)),
                    );
                    setUploadedImages((prev) => {
                      const combined = [...prev, ...dataUrls].slice(0, 5);
                      return combined;
                    });
                    setUploadError(null);
                  } catch (err) {
                    console.error(err);
                  } finally {
                    if (fileInputRef.current) fileInputRef.current.value = "";
                  }
                }}
              />

              <div
                role="button"
                tabIndex={0}
                onClick={() => {
                  if (fileInputRef.current)
                    fileInputRef.current.dataset.replaceIndex = "";
                  fileInputRef.current?.click();
                }}
                onKeyDown={(e) =>
                  e.key === "Enter" &&
                  (fileInputRef.current &&
                    (fileInputRef.current.dataset.replaceIndex = ""),
                  fileInputRef.current?.click())
                }
                className="border-2 border-dashed border-gray-300 rounded-2xl p-4 bg-white/50 flex flex-col items-center justify-center text-center hover:border-primary transition-colors cursor-pointer group"
              >
                <div className="w-full flex gap-3 items-center justify-center mb-3">
                  {uploadedImages.length > 0 ? (
                    <div className="flex gap-3">
                      {uploadedImages.map((src, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={(ev) => {
                            ev.stopPropagation();
                            if (fileInputRef.current)
                              fileInputRef.current.dataset.replaceIndex =
                                String(idx);
                            fileInputRef.current?.click();
                          }}
                          className="w-12 h-12 rounded-md overflow-hidden border border-gray-200 shrink-0 relative"
                          aria-label={`Replace image ${idx + 1}`}
                        >
                          <img
                            src={src}
                            alt={`preview-${idx}`}
                            className="w-full h-full object-cover"
                          />
                          <span className="absolute inset-0 flex items-center justify-center text-xs text-white bg-black/30 opacity-0 hover:opacity-100 transition-opacity">
                            <RefreshCw className="size-4" />
                          </span>
                        </button>
                      ))}
                    </div>
                  ) : (
                    <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <CloudUpload className="size-6 text-[#22b5f8]" />
                    </div>
                  )}
                </div>

                <div className="w-full">
                  <p className="text-sm font-bold mb-1">
                    {t("featurePage.content.demo.uploadTitle")}{" "}
                    <span className="text-red-500">*</span>
                    <span className="ml-2 text-xs text-gray-400">
                      {uploadedImages.length}/5
                    </span>
                  </p>
                  <p className="text-xs text-gray-500 mb-2">
                    {t("featurePage.content.demo.uploadDesc")}
                  </p>
                  {uploadedImages.length < 5 && (
                    <div className="text-xs text-gray-600">
                      <button
                        type="button"
                        onClick={(ev) => {
                          ev.stopPropagation();
                          if (fileInputRef.current)
                            fileInputRef.current.dataset.replaceIndex = "";
                          fileInputRef.current?.click();
                        }}
                        className="text-primary font-bold"
                      >
                        Add images
                      </button>
                    </div>
                  )}
                </div>
                {uploadError && (
                  <p className="text-xs text-red-500 mt-2">{uploadError}</p>
                )}
              </div>
            </div>

            {/* Style & Aspect Ratio */}
            <div className="flex flex-col gap-4">
              <div className="space-y-3">
                <label className="block text-sm font-bold text-gray-700">
                  {t("featurePage.content.demo.promptLabel")}{" "}
                  <span className="text-red-500">*</span>
                </label>
                <textarea
                  value={prompt}
                  onChange={(e) => {
                    setPrompt(e.target.value);
                    if (promptError) setPromptError(null);
                  }}
                  className="w-full h-32 p-4 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#22b5f8]/50 focus:border-primary transition-all text-sm resize-none"
                  placeholder={t("featurePage.content.demo.promptPlaceholder")}
                />
                {promptError && (
                  <p className="text-xs text-red-500 mt-2">{promptError}</p>
                )}
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
                  {t("featurePage.content.demo.aspectLabel")}{" "}
                  <span className="text-red-500">*</span>
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
              <div className="relative">
                <Button
                  onClick={handleGenerate}
                  disabled={
                    isGenerating ||
                    prompt.trim().length === 0 ||
                    uploadedImages.length === 0 ||
                    isLoadingRateLimits ||
                    !rateLimitData ||
                    rateLimitData.remaining <= 0
                  }
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
                      {rateLimitData && (
                        <span className="ml-2 text-xs opacity-70">
                          ({rateLimitData.remaining}/{rateLimitData.limit})
                        </span>
                      )}
                    </>
                  )}
                </Button>
                {rateLimitError && (
                  <div className="absolute -top-16 left-0 right-0 bg-red-500 text-white text-xs font-medium px-4 py-2 rounded-lg shadow-lg z-10">
                    <div className="flex items-start gap-2">
                      <span className="flex-shrink-0 mt-0.5">⚠️</span>
                      <span>{rateLimitError}</span>
                    </div>
                    <div className="absolute -bottom-1 left-8 w-2 h-2 bg-red-500 transform rotate-45"></div>
                  </div>
                )}
              </div>
              {/* Loading overlay moved to the preview container so it only covers the image area */}
              <GenerationProgress />
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
                    <div className="absolute top-4 left-4">
                      <span className="bg-black/60 backdrop-blur-md text-white px-3 py-1 rounded-full text-[10px] font-bold flex items-center gap-1.5 border border-white/20">
                        <span className="size-1.5 bg-green-400 rounded-full animate-pulse" />
                        {t("featurePage.content.demo.4kReady")}
                      </span>
                    </div>
                  </>
                ) : isGenerating ? (
                  <div className="size-full flex flex-col items-center justify-center bg-gray-50 text-gray-400">
                    <Loader2 className="w-12 animate-spin mb-3" />
                    <div className="text-sm font-semibold">
                      {t("featurePage.content.demo.generating")}
                    </div>
                  </div>
                ) : (
                  <div className="size-full flex flex-col items-center justify-center bg-gray-50 text-gray-400">
                    <CloudUpload className="w-12 mb-3" />
                    <div className="text-sm font-semibold">
                      {t("featurePage.content.demo.noImage") || "No image yet"}
                    </div>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              {generatedSrc && (
                <div className="flex gap-3 mt-6">
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
              )}
            </div>

            {/* History */}
            {historyImages.length > 0 && (
              <div className="mt-4">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500">
                    {t("featurePage.content.demo.history")}
                  </h4>
                  {/* <button className="text-xs font-bold text-[#22b5f8]">
                    {t("featurePage.content.demo.viewAll")}
                  </button> */}
                </div>
                <div className="flex gap-4">
                  {historyImages.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setActiveHistory(index);
                        setGeneratedSrc(image.src);
                      }}
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
