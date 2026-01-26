"use client";

import { useState, useEffect, useCallback } from "react";
import { X, Play } from "lucide-react";

interface YouTubeModalProps {
  videoId: string;
  isOpen: boolean;
  onClose: () => void;
}

export function YouTubeModal({ videoId, isOpen, onClose }: YouTubeModalProps) {
  // Handle ESC key press
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
      // Prevent body scroll
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-in fade-in duration-300"
      onClick={onClose}
    >
      {/* Dark backdrop with blur */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

      {/* Modal container */}
      <div
        className="relative w-full max-w-[1200px] animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 p-2 text-white/80 hover:text-white transition-colors rounded-full hover:bg-white/10"
          aria-label="Đóng video"
        >
          <X className="w-8 h-8" />
        </button>

        {/* Video container with 16:9 aspect ratio */}
        <div className="relative w-full pt-[56.25%] bg-black rounded-xl overflow-hidden shadow-2xl">
          <iframe
            className="absolute inset-0 w-full h-full"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
            title="Demo Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}

export default YouTubeModal;

interface DemoButtonProps {
  className?: string;
}

export function DemoButton({ className = "" }: DemoButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() => {
    if (typeof window !== "undefined") {
      return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    }
    return false;
  });

  const openModal = useCallback(() => setIsModalOpen(true), []);
  const closeModal = useCallback(() => setIsModalOpen(false), []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const shouldAnimate = !prefersReducedMotion && !isHovered;

  return (
    <>
      <button
        onClick={openModal}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`
          relative inline-flex items-center justify-center gap-2
          text-base font-medium h-12 px-8 rounded-full
          bg-white border border-gray-200
          transition-all duration-200
          ${isHovered ? "border-[#22b5f8] bg-[#22b5f8]/5 scale-[1.02] shadow-lg shadow-[#22b5f8]/20" : ""}
          active:scale-[0.98] active:shadow-md
          ${className}
        `}
      >
        {shouldAnimate && (
          <>
            <span
              className="absolute inset-0 rounded-full pointer-events-none"
              style={{
                background:
                  "linear-gradient(135deg, rgba(34, 181, 248, 0.15), rgba(0, 139, 255, 0.1))",
                animation: "demoButtonPulse 3s ease-in-out infinite",
              }}
            />
            <span
              className="absolute inset-0 rounded-full pointer-events-none"
              style={{
                background:
                  "linear-gradient(135deg, rgba(34, 181, 248, 0.1), rgba(0, 139, 255, 0.05))",
                animation: "demoButtonPulse 3s ease-in-out infinite 1.5s",
              }}
            />
          </>
        )}

        <span
          className="relative flex items-center justify-center w-6 h-6 rounded-full bg-[#22b5f8]/10"
          style={
            shouldAnimate
              ? {
                  animation: "demoIconPulse 2.5s ease-in-out infinite",
                }
              : undefined
          }
        >
          <Play
            className="w-3.5 h-3.5 text-[#22b5f8] ml-0.5"
            fill="currentColor"
          />
        </span>

        <span className="relative">Xem Demo</span>
      </button>

      <YouTubeModal
        videoId="R5RuHV_JrMM"
        isOpen={isModalOpen}
        onClose={closeModal}
      />

      <style jsx>{`
        @keyframes demoButtonPulse {
          0%,
          100% {
            transform: scale(1);
            opacity: 0;
          }
          50% {
            transform: scale(1.08);
            opacity: 1;
          }
        }

        @keyframes demoIconPulse {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          @keyframes demoButtonPulse {
            0%,
            100% {
              transform: scale(1);
              opacity: 0;
            }
          }
          @keyframes demoIconPulse {
            0%,
            100% {
              transform: scale(1);
            }
          }
        }
      `}</style>
    </>
  );
}
