"use client";

import {
  X,
  Sparkles,
  Hand,
  Camera,
  Upload,
  Loader2,
  Download,
} from "lucide-react";
import Image from "next/image";
import { useRef, useState, useEffect, useCallback } from "react";
import { getRateLimits, type RateLimitData } from "@/lib/queries/rate-limits";
import { generateImage } from "@/lib/queries/generate-image";
import { cn } from "@/lib/utils";
import StyleCarousel from "./style-carousel";

interface AIPhotoboothModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const styles = [
  {
    name: "halloween",
    prompt:
      "Apply a spooky Halloween nail art style: dark colors, eerie patterns like bats, pumpkins, ghosts, spider webs, and other Halloween-themed designs on the nails only. Keep the hand exactly as-is.",
    image: "/images/halloween.jpeg",
  },
  {
    name: "Modern",
    prompt:
      "Apply a modern trendy nail art style: geometric patterns, abstract designs, negative-space art, or minimalist lines with bold accent colors. Keep the hand exactly as-is.",
    image: "/images/modern.jpeg",
  },
  {
    name: "Cartoon",
    prompt:
      "Apply a fun cartoon-inspired nail art style: bright vivid colors, playful character designs, comic-book outlines, pop-art dots, and whimsical patterns on the nails only. Keep the hand exactly as-is.",
    image: "/images/cartoon.jpeg",
  },
  {
    name: "Cute",
    prompt:
      "Apply a cute kawaii nail art style: pastel colors, tiny hearts, stars, bows, flowers, and adorable mini illustrations on the nails only. Keep the hand exactly as-is.",
    image: "/images/cute.jpeg",
  },
  {
    name: "Vintage",
    prompt:
      "Apply a vintage nail art style: muted tones, classic floral patterns, lace designs, and retro-inspired details on the nails only. Keep the hand exactly as-is.",
    image: "/images/vintage.jpeg",
  },
  {
    name: "Geometric lines",
    prompt:
      "Apply a geometric lines nail art style: clean lines, shapes, and patterns using contrasting colors on the nails only. Keep the hand exactly as-is.",
    image: "/images/geometric.jpeg",
  },
];

export default function AIPhotoboothModal({
  isOpen,
  onClose,
}: AIPhotoboothModalProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const cameraInputRef = useRef<HTMLInputElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [hasCameraSupport, setHasCameraSupport] = useState(false);
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [stream, setStream] = useState<MediaStream | null>(null);

  // Style selection
  const [selectedStyle, setSelectedStyle] = useState<string | null>(null);

  // Rate limits
  const [rateLimit, setRateLimit] = useState<RateLimitData | null>(null);
  const [rateLimitLoading, setRateLimitLoading] = useState(true);

  // Generation
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedResults, setGeneratedResults] = useState<string[]>([]);
  const [generateError, setGenerateError] = useState<string | null>(null);

  // Preview modal
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  // Fetch rate limits
  const fetchRateLimits = useCallback(async () => {
    try {
      setRateLimitLoading(true);
      const data = await getRateLimits();
      setRateLimit(data);
    } catch (error) {
      console.error("Failed to fetch rate limits:", error);
    } finally {
      setRateLimitLoading(false);
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      fetchRateLimits();
    }
  }, [isOpen, fetchRateLimits]);

  const isLimitReached = rateLimit ? rateLimit.remaining <= 0 : false;

  useEffect(() => {
    // Check if device supports camera
    const checkCamera = async () => {
      try {
        if (
          navigator.mediaDevices &&
          typeof navigator.mediaDevices.getUserMedia === "function"
        ) {
          const devices = await navigator.mediaDevices.enumerateDevices();
          const hasCamera = devices.some(
            (device) => device.kind === "videoinput",
          );
          setHasCameraSupport(hasCamera);
        } else {
          setHasCameraSupport(false);
        }
      } catch {
        setHasCameraSupport(false);
      }
    };

    checkCamera();
  }, []);

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCameraClick = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "environment" },
        audio: false,
      });
      setStream(mediaStream);
      setIsCameraActive(true);
    } catch (error) {
      console.error("Error accessing camera:", error);
      cameraInputRef.current?.click();
    }
  };

  const handleCapture = () => {
    if (videoRef.current) {
      const canvas = document.createElement("canvas");
      canvas.width = videoRef.current.videoWidth;
      canvas.height = videoRef.current.videoHeight;
      const ctx = canvas.getContext("2d");

      if (ctx) {
        ctx.drawImage(videoRef.current, 0, 0);
        const imageData = canvas.toDataURL("image/jpeg");
        setSelectedImage(imageData);
        stopCamera();
      }
    }
  };

  const stopCamera = useCallback(() => {
    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
      setStream(null);
    }
    setIsCameraActive(false);
  }, [stream]);

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleRemoveImage = () => {
    setSelectedImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
    if (cameraInputRef.current) {
      cameraInputRef.current.value = "";
    }
  };

  // Generate nail art
  const handleGenerate = async () => {
    if (!selectedImage || !selectedStyle || isLimitReached || isGenerating)
      return;

    const style = styles.find((s) => s.name === selectedStyle);
    if (!style) return;

    setIsGenerating(true);
    setGenerateError(null);

    try {
      // Build optimized prompt for hand preservation
      const prompt = `You are a professional nail technician AI specializing in precision digital overlay.

      TASK:
      Apply a digital nail overlay onto the provided image. You must treat the original hand as an untouchable base layer.

      STRICT CONSTRAINTS:
      1. IMAGE INTEGRITY: Maintain 100% pixel-level identity for the skin, anatomy, wrinkles, hand pose, and background. Zero modifications allowed outside the nail plate boundaries.
      2. NAIL MORPHOLOGY: Keep the original nail shape and length. Only change the surface texture, color, and pattern.
      3. PHOTOREALISM: The design must inherit the original photo's lighting, highlights, and shadows. The nail pattern must look like it's UNDER a clear glossy top coat, showing realistic depth and micro-reflections.
      4. HARMONIC ADAPTATION: Automatically adjust the saturation, depth, and undertone of the requested style to flawlessly complement the specific skin tone of the hand.
      5. REAL-WORLD VIABILITY: The design must be physically achievable in a real salon. Avoid impossible physics or floating elements.
      6. UNIVERSAL APPROPRIATENESS: Ensure the style is sophisticated and respectful, suitable for any culture, custom, or professional setting.

      DESIGN GUIDELINES:
      - Style: ${style.prompt}
      - Harmony: Calibrate color saturation and undertones to blend seamlessly with the detected skin tone (warm/cool/neutral).
      - Finish: Ensure the edges where the nail meets the cuticle are clean, sharp, and anatomically correct.

      OUTPUT:
      A hyper-realistic photo where the hand remains identical to the source, but with a culturally refined and skin-tone-optimized nail design.`;

      const result = await generateImage({
        prompt,
        initImages: selectedImage ? [selectedImage] : undefined,
        preset: "nail_art",
      });

      if (result?.image) {
        setGeneratedResults((prev) => [result.image, ...prev]);

        // Refresh rate limit display after successful generation
        await fetchRateLimits();
      }
    } catch (error: unknown) {
      const message =
        error instanceof Error
          ? error.message
          : "Generation failed. Please try again.";
      setGenerateError(message);
      console.error("Generate error:", error);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleDownload = (imageUrl: string) => {
    const link = document.createElement("a");
    link.href = imageUrl;
    link.download = `nail-art-${Date.now()}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Cleanup camera stream when modal closes
  useEffect(() => {
    if (!isOpen) {
      stopCamera();
    }
  }, [isOpen, stopCamera]);

  // Set video stream when camera becomes active
  useEffect(() => {
    if (isCameraActive && stream && videoRef.current) {
      videoRef.current.srcObject = stream;
    }
  }, [isCameraActive, stream]);

  if (!isOpen) return null;

  const used = rateLimit?.used ?? 0;
  const limit = rateLimit?.limit ?? 5;
  const canGenerate =
    selectedImage && selectedStyle && !isLimitReached && !isGenerating;

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center p-2 sm:p-4 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-xs z-[-1]"
        onClick={onClose}
      />

      {/* Image Preview Modal */}
      {previewImage && (
        <div
          className="fixed inset-0 z-200 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setPreviewImage(null)}
        >
          <div
            className="relative max-w-3xl max-h-[85vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={previewImage}
              alt="Preview"
              width={800}
              height={800}
              className="w-full h-auto max-h-[85vh] object-contain rounded-2xl"
              unoptimized
            />
            <div className="absolute top-4 right-4 flex gap-2">
              <button
                onClick={() => handleDownload(previewImage)}
                className="p-2.5 bg-primary rounded-full text-charcoal hover:bg-primary-dark transition-colors shadow-lg"
              >
                <Download className="w-5 h-5" />
              </button>
              <button
                onClick={() => setPreviewImage(null)}
                className="p-2.5 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-colors shadow-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal Container */}
      <div className="relative w-full max-w-160 h-[90vh] bg-charcoal rounded-2xl border border-primary/25 shadow-[inset_0_0_20px_rgba(34,181,248,0.03),0_25px_50px_-12px_rgba(0,0,0,0.7)] flex flex-col my-auto overflow-hidden">
        {/* Header */}
        <div className="relative flex items-center justify-between px-3 md:px-4 pb-2 lg:px-6 pt-3 md:pt-4 lg:pt-6 shrink-0">
          <button
            onClick={onClose}
            className="flex items-center justify-center size-8 rounded-full hover:bg-white/5 transition-colors text-white/40 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="px-3 py-1 rounded-full flex items-center gap-1.5 bg-linear-to-br from-primary to-primary-dark shadow-[0_0_15px_rgba(34,181,248,0.2)]">
            <span className="text-[9px] text-charcoal font-display font-bold tracking-[0.2em] flex items-center gap-1 uppercase">
              <Sparkles className="w-3 h-3" />
              AI POWERED
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="px-3 md:px-4 lg:px-6 pt-2 pb-3 md:pb-4 lg:pb-6 flex flex-col h-full overflow-y-auto no-scrollbar">
          {/* Scan Area */}
          {/* Camera input - opens camera directly */}
          <input
            ref={cameraInputRef}
            type="file"
            accept="image/*"
            capture="environment"
            className="hidden"
            onChange={handleImageSelect}
          />
          {/* File upload input - choose from device */}
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageSelect}
          />
          <div className="w-full min-h-125 p-3 md:p-5 rounded-2xl flex flex-col items-center justify-center gap-3 group transition-all duration-500 mb-4 relative overflow-hidden shrink-0 border border-dashed border-primary/30 bg-[#0a1628] shadow-[inset_0_0_40px_rgba(34,181,248,0.08)]">
            {isCameraActive ? (
              <>
                <video
                  ref={videoRef}
                  autoPlay
                  playsInline
                  muted
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Scanning frame overlay */}
                <div className="absolute inset-0 flex items-center justify-center p-6 pointer-events-none">
                  <div className="w-full h-full border-2 border-primary/40 rounded-lg relative overflow-hidden">
                    {/* Scanning line moving up and down */}
                    <div
                      className="absolute left-0 w-full h-1 bg-primary shadow-[0_0_15px_rgba(34,181,248,1)]"
                      style={{
                        animation: "scan 3s ease-in-out infinite",
                      }}
                    />
                    <style jsx>{`
                      @keyframes scan {
                        0%,
                        100% {
                          top: 0;
                        }
                        50% {
                          top: calc(100% - 4px);
                        }
                      }
                    `}</style>
                    {/* Corner brackets */}
                    <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-primary" />
                    <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-primary" />
                    <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-primary" />
                    <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-primary" />
                  </div>
                </div>

                <div className="absolute bottom-4 left-0 right-0 flex items-center justify-center gap-3 z-10">
                  <button
                    onClick={handleCapture}
                    className="px-4 py-2 bg-primary rounded-lg text-charcoal font-bold text-xs uppercase tracking-wider hover:bg-primary-dark transition-colors flex items-center gap-2 shadow-lg"
                  >
                    <Camera className="size-4 shrink-0" />
                    Capture Photo
                  </button>
                  <button
                    onClick={stopCamera}
                    className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg text-white font-bold text-xs uppercase tracking-wider hover:bg-white/20 transition-colors flex items-center gap-2"
                  >
                    <X className="size-4 shrink-0" />
                    Cancel
                  </button>
                </div>
              </>
            ) : selectedImage ? (
              <>
                <Image
                  src={selectedImage}
                  alt="Selected hand image"
                  fill
                  className="object-cover"
                  unoptimized
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                  {hasCameraSupport && (
                    <button
                      onClick={handleCameraClick}
                      className="px-4 py-2 bg-primary rounded-lg text-charcoal font-bold text-xs uppercase tracking-wider hover:bg-primary-dark transition-colors flex items-center gap-2"
                    >
                      <Camera className="w-4 h-4" />
                      Take Photo
                    </button>
                  )}
                  <button
                    onClick={handleUploadClick}
                    className="px-3 py-1.5 bg-primary/80 rounded-lg text-charcoal font-bold text-xs uppercase tracking-wider hover:bg-primary transition-colors flex items-center gap-1.5"
                  >
                    <Upload className="size-3.5" />
                    Upload
                  </button>
                  <button
                    onClick={handleRemoveImage}
                    className="px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-lg text-white font-bold text-xs uppercase tracking-wider hover:bg-white/20 transition-colors flex items-center gap-1.5"
                  >
                    <X className="size-3.5" />
                    Remove
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="relative z-10 flex flex-col items-center justify-center">
                  <div className="relative p-6 border border-primary/10 rounded-full">
                    <Hand className="size-12 text-primary/70 group-hover:text-primary transition-colors duration-500 drop-shadow-[0_0_12px_rgba(34,181,248,0.25)]" />
                  </div>
                  <p className="mt-3 text-white/60 font-display font-light text-sm tracking-[0.05em] group-hover:text-white transition-colors duration-500">
                    Place your hand here to scan
                  </p>
                  <div className="mt-4 flex items-center gap-2 lg:gap-3">
                    {hasCameraSupport && (
                      <>
                        <button
                          onClick={handleCameraClick}
                          className="flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-2.5 bg-primary hover:bg-primary-dark rounded-lg border border-primary transition-all hover:scale-105"
                        >
                          <Camera className="w-4 h-4 text-charcoal" />
                          <span className="text-[10px] sm:text-xs text-charcoal font-bold uppercase tracking-wider">
                            Take Photo
                          </span>
                        </button>
                        <span className="text-white/30 text-xs font-bold">
                          or
                        </span>
                      </>
                    )}
                    <button
                      onClick={handleUploadClick}
                      className="flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-2.5 bg-white/5 hover:bg-white/10 rounded-lg border border-white/20 transition-all hover:scale-105"
                    >
                      <Upload className="w-4 h-4 text-primary" />
                      <span className="text-[10px] sm:text-xs text-white/70 font-bold uppercase tracking-wider">
                        Upload Image
                      </span>
                    </button>
                  </div>
                </div>
                <div className="absolute inset-0 bg-linear-to-b from-transparent via-primary/5 to-transparent opacity-20 group-hover:opacity-40 transition-opacity duration-700"></div>
              </>
            )}
          </div>

          {/* Style Selection */}
          <StyleCarousel
            styles={styles}
            selectedStyle={selectedStyle}
            onStyleSelect={setSelectedStyle}
          />

          {/* Error message */}
          {generateError && (
            <div className="mb-3 p-2 bg-red-500/10 border border-red-500/30 rounded-lg">
              <p className="text-xs text-red-400 font-medium">
                {generateError}
              </p>
            </div>
          )}

          {/* Generate Button */}
          <div className="mb-6 shrink-0">
            <button
              onClick={handleGenerate}
              disabled={!canGenerate}
              className={`w-full py-3 px-2 rounded-lg font-display font-bold tracking-[0.15em] uppercase md:text-xs text-[10px] flex items-center justify-center gap-2 transition-all duration-200 ${
                canGenerate
                  ? "bg-linear-to-br from-primary to-primary-dark text-charcoal hover:scale-[1.01] active:scale-[0.99] shadow-[0_4px_20px_rgba(34,181,248,0.25)] hover:shadow-[0_6px_25px_rgba(34,181,248,0.35)]"
                  : "bg-white/10 text-white/30 cursor-not-allowed"
              }`}
            >
              {isGenerating ? (
                <>
                  <Loader2 className="size-3.5 shrink-0 animate-spin" />
                  GENERATING...
                </>
              ) : isLimitReached ? (
                <>
                  <X className="size-3.5 shrink-0" />
                  FREE TRIAL LIMIT REACHED
                </>
              ) : (
                <>
                  <Sparkles className="size-3.5 shrink-0" />
                  GENERATE DESIGN
                </>
              )}
            </button>
            {!isGenerating && (
              <p
                className={cn(
                  "text-center mt-2 text-[10px] md:text-xs text-white/50",
                  {
                    "text-red-500": used >= limit,
                  },
                )}
              >
                {rateLimitLoading ? (
                  "..."
                ) : (
                  <>
                    {used}/{limit} FREE TRIALS USED
                  </>
                )}
              </p>
            )}
          </div>

          {/* Results */}
          {generatedResults.length > 0 && (
            <div className="mb-2">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-display font-bold text-primary text-xs tracking-[0.25em] uppercase opacity-90">
                  Results
                  <span className="ml-2 text-white/40">
                    ({generatedResults.length})
                  </span>
                </h4>
              </div>
              <div className="grid grid-cols-4 gap-3">
                {generatedResults.map((src, index) => (
                  <div
                    key={`${src.slice(-20)}-${index}`}
                    onClick={() => setPreviewImage(src)}
                    className="aspect-square rounded-xl border border-white/10 bg-[#0a1628]/50 flex items-center justify-center hover:border-primary/50 transition-colors cursor-pointer group overflow-hidden relative"
                  >
                    <Image
                      alt={`Generated Nail Art ${index + 1}`}
                      className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity"
                      src={src}
                      width={150}
                      height={150}
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                      <span className="text-xs text-white font-bold uppercase tracking-wider">
                        Preview
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Bottom Gradient Line */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-primary/30 to-transparent"></div>
      </div>
    </div>
  );
}
