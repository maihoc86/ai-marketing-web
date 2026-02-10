"use client";

import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

interface Style {
  name: string;
  prompt: string;
  image: string;
}

interface StyleCarouselProps {
  styles: Style[];
  selectedStyle: string | null;
  onStyleSelect: (styleName: string) => void;
}

export default function StyleCarousel({
  styles,
  selectedStyle,
  onStyleSelect,
}: StyleCarouselProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollability = () => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const { scrollLeft, scrollWidth, clientWidth } = container;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1);
  };

  useEffect(() => {
    checkScrollability();
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", checkScrollability);
      window.addEventListener("resize", checkScrollability);
      return () => {
        container.removeEventListener("scroll", checkScrollability);
        window.removeEventListener("resize", checkScrollability);
      };
    }
  }, [styles]);

  const scroll = (direction: "left" | "right") => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const scrollAmount = 200;
    const targetScroll =
      container.scrollLeft +
      (direction === "left" ? -scrollAmount : scrollAmount);

    container.scrollTo({
      left: targetScroll,
      behavior: "smooth",
    });
  };

  return (
    <div className="mb-6">
      <h3 className="font-display text-primary text-xs font-bold tracking-[0.25em] mb-3 flex items-center gap-2 opacity-90 uppercase">
        <span className="text-sm">✨</span> Select your style
      </h3>

      <div className="relative group/carousel">
        {/* Previous button */}
        {canScrollLeft && (
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 hidden md:flex items-center justify-center size-8 bg-charcoal/90 backdrop-blur-sm rounded-full border border-primary/30 text-primary hover:bg-primary hover:text-charcoal transition-all shadow-lg opacity-0 group-hover/carousel:opacity-100"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
        )}

        {/* Scrollable container */}
        <div
          ref={scrollContainerRef}
          className="flex gap-3 overflow-x-auto pb-2 no-scrollbar scroll-smooth"
        >
          {styles.map((style) => (
            <div
              key={style.name}
              onClick={() => onStyleSelect(style.name)}
              className={`flex flex-col gap-1.5 group cursor-pointer transition-all duration-200 flex-shrink-0 ${
                selectedStyle === style.name ? "scale-[1.02]" : ""
              }`}
            >
              <div
                className={`w-24 h-24 sm:w-28 sm:h-28 bg-[#0a1628] rounded-lg border-2 transition-all duration-300 overflow-hidden shadow-xl relative ${
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
                className={`text-center text-[10px] font-display uppercase tracking-wider transition-colors font-bold w-24 sm:w-28 ${
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

        {/* Next button */}
        {canScrollRight && (
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 hidden md:flex items-center justify-center size-8 bg-charcoal/90 backdrop-blur-sm rounded-full border border-primary/30 text-primary hover:bg-primary hover:text-charcoal transition-all shadow-lg "
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        )}
      </div>
    </div>
  );
}
