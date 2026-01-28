"use client";

import { useRef, useState, useCallback } from "react";
import { ChevronsLeftRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { useInView } from "@/hooks/use-in-view";

export function AIContentComparisonSection() {
  const { t } = useI18n();
  const { ref: sectionRef, isInView } = useInView();
  const containerRef = useRef<HTMLDivElement>(null);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = useCallback(
    (clientX: number) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
      setSliderPosition(percentage);
    },
    []
  );

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (isDragging) {
        handleMove(e.clientX);
      }
    },
    [isDragging, handleMove]
  );

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      handleMove(e.touches[0].clientX);
    },
    [handleMove]
  );

  return (
    <section className="py-24 bg-gray-50">
      <div ref={sectionRef} className="container mx-auto px-6 text-center max-w-5xl">
        <h2
          className={`text-3xl md:text-4xl font-black mb-6 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {t("featurePage.content.comparison.title")}
        </h2>
        <p
          className={`text-gray-600 mb-12 max-w-2xl mx-auto transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "0.1s" }}
        >
          {t("featurePage.content.comparison.subtitle")}
        </p>

        {/* Before/After Comparison Slider */}
        <div
          ref={containerRef}
          className={`relative aspect-video md:aspect-21/9 rounded-3xl overflow-hidden shadow-2xl bg-white border-4 border-white cursor-col-resize select-none transition-all duration-700 ${
            isInView ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
          style={{ transitionDelay: "0.2s" }}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleMouseUp}
        >
          {/* Standard AI Side (Full Background) */}
          <div className="absolute inset-0">
            <div className="w-full h-full bg-gray-300 flex items-center justify-center">
              <div className="absolute inset-0 bg-linear-to-br from-gray-300 to-gray-400 opacity-60" />
              <img
                src="/images/comparison/standard-ai.jpg"
                alt="Standard AI output"
                className="w-full h-full object-cover grayscale opacity-50"
              />
            </div>
            <span className="absolute top-4 left-6 px-3 py-1 bg-black/50 text-white text-xs font-bold rounded-full backdrop-blur-sm uppercase tracking-widest">
              {t("featurePage.content.comparison.standardAI")}
            </span>
          </div>

          {/* DXAI Pro Side (Clipped) */}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
          >
            <div className="w-full h-full">
              <img
                src="/images/comparison/dxai-pro.jpg"
                alt="DXAI Pro output"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-r from-[#22b5f8]/10 to-[#008bff]/10" />
            </div>
            <span className="absolute top-4 right-6 px-3 py-1 bg-[#22b5f8] text-white text-xs font-bold rounded-full uppercase tracking-widest">
              {t("featurePage.content.comparison.dxaiPro")}
            </span>
          </div>

          {/* Slider Handle */}
          <div
            className="absolute inset-y-0 z-10 flex items-center justify-center"
            style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
            onMouseDown={handleMouseDown}
            onTouchStart={handleMouseDown}
          >
            <div className="w-1 h-full bg-white shadow-xl" />
            <div className="absolute size-10 bg-white rounded-full border-2 border-[#22b5f8] flex items-center justify-center shadow-lg cursor-grab active:cursor-grabbing">
              <ChevronsLeftRight className="w-5 h-5 text-[#22b5f8]" />
            </div>
          </div>
        </div>

        <p
          className={`mt-8 text-sm text-gray-500 font-medium italic transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "0.3s" }}
        >
          {t("featurePage.content.comparison.hint")}
        </p>
      </div>
    </section>
  );
}
