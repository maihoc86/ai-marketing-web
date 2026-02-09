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
import {
  getRateLimits,
  incrementRateLimit,
  type RateLimitData,
} from "@/lib/queries/rate-limits";
import { generateImage } from "@/lib/queries/generate-image";
import { cn } from "@/lib/utils";

interface AIPhotoboothModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const styles = [
  {
    name: "Classic",
    prompt:
      "Apply a classic elegant nail art style: solid rich colors, clean lines, timeless French manicure or single-tone glossy finish. Keep the hand exactly as-is.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC_Z8EPlBfqn7KDCVTpbIoTRpMgSt_Q3t-UjMQv6rLsgRo2K456Y3bK1YX__2UDW36epdQaRUtW8exj2YFeyG3rwCmjJQK8s4PGzJOUOaocSg_dJwP7WVn8mI587V8mZAB_K6rKHPSKFtOsJ0jPa6W2DwVwFJFQ39-S60QQDnIerwgkHPtJdu9d4VEgfrMztXSBcJ6MyhEKUiFHiWH8ZGFXAmPUBNTm9VJj5av7qCC1ePxBWRIT1sp8q1NZ99nV8_Jd5_CBKFQS1_RZ",
  },
  {
    name: "Modern",
    prompt:
      "Apply a modern trendy nail art style: geometric patterns, abstract designs, negative-space art, or minimalist lines with bold accent colors. Keep the hand exactly as-is.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD3k01TyKpOvsWwYqRA6AAat4ZsPSPbiDcTdrvZid-rY-B9Z93BTWB-mAOIckT9r1vCqImVXUnEyyWcmo2UUSAf7h19547mOs9jnGpCf7Iivw6H0HNtjtBg51TCffxblCjJr3yL_HwYsi4_IZhjrjGi1Mm1OiAdeFgBYyCj9--usfE12cEPG69HFW5_9gRcjyuYV_XK0I54d3OYfZ8DoIXgVhwzT_9bFF3AH-cIru0sGj8U3X9U95wb7w7tRb5XwwFVg6IOrQUCmllw",
  },
  {
    name: "Cartoon",
    prompt:
      "Apply a fun cartoon-inspired nail art style: bright vivid colors, playful character designs, comic-book outlines, pop-art dots, and whimsical patterns on the nails only. Keep the hand exactly as-is.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDv0XdZPUtOS5xluWpG-zmNF3NUPdvk6vqnX4FIKG3D6kxU5y6DqeAvNdYrPGZR2cpxvAl7ntSsI0BzfDsMFFqLMtjVlQHB-2OVhlpnHLmdBETz2ksTstdJ5mxcQjaJUCshEcP1wPvAfBwAPOKkrUvc-2cyEhfUfaPcXVMIRZFe03oiG-iJwZzUG6JeIXzo45OtTL43ZwD_Ahqr6yc59nArTDNyT9xXMsIsCm0WKt2PWyqaWepJ0meTm9SG31KvO7KEyf4gB-ViPT-P",
  },
  {
    name: "Cute",
    prompt:
      "Apply a cute kawaii nail art style: pastel colors, tiny hearts, stars, bows, flowers, and adorable mini illustrations on the nails only. Keep the hand exactly as-is.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCLV0XPy7ol7vdxPaaAjWs9mf-YgWDrdk2gnyUIX7B2LndIMOYqgL0v3gZNamdwxI74R_k05Be9akOzsOOVnnMAOlzOCbcNMsFGi-ok_MC7bacqci0YSIo4U2I7wYNp-0YLNYMOLUkXr_4pO_gktyLLXakyM464rbOjKrOe8_pHL3lNRADn78MIS2wE6LxH130NWoxceQ-Gc2J1ibCQSZ5UUzmm-AdZlTgD6tS80uz8y9VSSOe_phVNprcZUy1abIYSA8k9cHRshUGO",
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
      const prompt = [
        "You are a professional nail art designer AI.",
        "I am providing a photo of a real human hand.",
        "Your task: ONLY modify the fingernails/toenails in the image.",
        "DO NOT alter the hand shape, skin tone, skin texture, fingers, palm, background, or any other part of the image.",
        "The hand, wrist, fingers, and background must remain pixel-perfect identical to the original photo.",
        "Only paint/design the nail surface area.",
        "",
        `Nail art style to apply: ${style.prompt}`,
        "",
        "Output: A single photorealistic image of the SAME hand with ONLY the nails changed to match the requested style.",
      ].join("\n");

      const result = await generateImage({
        prompt,
        initImages: [selectedImage],
        preset: "nail_art",
      });

      if (result?.image) {
        setGeneratedResults((prev) => [result.image, ...prev]);

        // Increment rate limit after successful generation
        await incrementRateLimit();
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
          <div className="w-full p-3 md:p-5 rounded-2xl flex flex-col items-center justify-center gap-3 group transition-all duration-500 mb-4 relative overflow-hidden shrink-0 border border-dashed border-primary/30 bg-[#0a1628] shadow-[inset_0_0_40px_rgba(34,181,248,0.08)]">
            {isCameraActive ? (
              <>
                <video
                  ref={videoRef}
                  autoPlay
                  playsInline
                  muted
                  className="absolute inset-0 w-full h-full object-cover"
                />
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
          <div className="mb-6">
            <h3 className="font-display text-primary text-xs font-bold tracking-[0.25em] mb-3 flex items-center gap-2 opacity-90 uppercase">
              <span className="text-sm">✨</span> Select your style
            </h3>
            <div className="grid grid-cols-4 gap-3">
              {styles.map((style) => (
                <div
                  key={style.name}
                  onClick={() => setSelectedStyle(style.name)}
                  className={`flex flex-col gap-1.5 group cursor-pointer transition-all duration-200 ${
                    selectedStyle === style.name ? "scale-[1.02]" : ""
                  }`}
                >
                  <div
                    className={`aspect-square bg-[#0a1628] rounded-lg border-2 transition-all duration-300 overflow-hidden shadow-xl relative ${
                      selectedStyle === style.name
                        ? "border-primary shadow-[0_0_20px_rgba(34,181,248,0.3)]"
                        : "border-white/5 group-hover:border-primary/40"
                    }`}
                  >
                    <Image
                      alt={`${style.name} Style Nail Art`}
                      className={`w-full h-full object-cover transition-opacity duration-300 ${
                        selectedStyle === style.name
                          ? "opacity-100"
                          : "opacity-80 group-hover:opacity-100"
                      }`}
                      src={style.image}
                      width={150}
                      height={150}
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-charcoal/80 to-transparent opacity-60"></div>
                    {selectedStyle === style.name && (
                      <div className="absolute top-1 right-1 sm:top-2 sm:right-2 size-3 sm:size-5 bg-primary rounded-full flex items-center justify-center">
                        <svg
                          className="w-3 h-3 text-charcoal"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={3}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                    )}
                  </div>
                  <span
                    className={`text-center text-[10px] font-display uppercase tracking-wider transition-colors font-bold ${
                      selectedStyle === style.name
                        ? "text-primary"
                        : "text-white/50 group-hover:text-primary"
                    }`}
                  >
                    {style.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

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
