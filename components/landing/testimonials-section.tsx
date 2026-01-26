"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useI18n } from "@/lib/i18n";

const testimonialsData = {
  vi: [
    {
      id: 1,
      content:
        "Uniksmart được xây dựng từ những vấn đề thực tế mà chúng tôi và nhiều doanh nghiệp Việt gặp phải khi dùng AI rời rạc. Nền tảng giúp gom mọi công cụ AI vào một chỗ, dễ dùng và chi phí hợp lý cho doanh nghiệp.",
      author: "Anh Nguyễn Văn Minh",
      role: "Tổng Giám đốc",
      company: "Uniksmart",
      avatar: "/professional-asian-man-ceo-portrait.jpg",
    },
    {
      id: 2,
      content:
        "Điều mình thích nhất là mọi công cụ AI cần cho marketing đều nằm trong một nền tảng. Tạo video, viết content, thiết kế hình ảnh nhanh hơn nhiều và không phải quản lý quá nhiều tài khoản khác nhau.",
      author: "Chị Trần Thu Hà",
      role: "Giám đốc Marketing",
      company: "Công ty TNHH ABC",
      avatar: "/asian-marketing-director.png",
    },
    {
      id: 3,
      content:
        "Uniksmart giúp chúng tôi quản lý marketing và việc sử dụng AI của đội ngũ trên cùng một hệ thống. Mọi thứ rõ ràng hơn, dễ theo dõi và kiểm soát tốt hơn so với trước đây.",
      author: "Anh Lê Hoàng Nam",
      role: "Giám đốc",
      company: "Công ty XYZ",
      avatar: "/professional-asian-man-business-director-portrait.jpg",
    },
  ],
  en: [
    {
      id: 1,
      content:
        "Uniksmart was built from real problems that we and many Vietnamese businesses face when using fragmented AI tools. The platform helps consolidate all AI tools in one place, easy to use and cost-effective for businesses.",
      author: "Mr. Nguyen Van Minh",
      role: "CEO",
      company: "Uniksmart",
      avatar: "/professional-asian-man-ceo-portrait.jpg",
    },
    {
      id: 2,
      content:
        "What I like most is that all AI tools needed for marketing are in one platform. Creating videos, writing content, designing images is much faster and I don't have to manage too many different accounts.",
      author: "Ms. Tran Thu Ha",
      role: "Marketing Director",
      company: "ABC Company Ltd.",
      avatar: "/asian-marketing-director.png",
    },
    {
      id: 3,
      content:
        "Uniksmart helps us manage marketing and our team's AI usage on the same system. Everything is clearer, easier to track and control better than before.",
      author: "Mr. Le Hoang Nam",
      role: "Director",
      company: "XYZ Company",
      avatar: "/professional-asian-man-business-director-portrait.jpg",
    },
  ],
};

const ANIMATION_DURATION = 400;
const AUTO_SLIDE_INTERVAL = 5000;
const RESUME_DELAY = 7000;

interface TestimonialCardProps {
  testimonial: (typeof testimonialsData.vi)[0];
  isActive: boolean;
  onClick?: () => void;
  isClickable?: boolean;
}

function TestimonialCard({
  testimonial,
  isActive,
  onClick,
  isClickable,
}: TestimonialCardProps) {
  return (
    <div
      onClick={isClickable ? onClick : undefined}
      className={cn(
        "bg-white rounded-3xl p-6 md:p-8 relative shrink-0",
        "w-full",
        "min-h-[320px] md:min-h-[340px]",
        "transition-all duration-400 ease-out",
        isActive
          ? "shadow-2xl scale-100 opacity-100"
          : "shadow-lg scale-95 opacity-50 hover:opacity-70",
        isClickable && "cursor-pointer",
      )}
    >
      <Quote
        className={cn(
          "absolute top-6 left-6 w-10 h-10 transition-colors duration-400",
          isActive ? "text-[#22b5f8]/20" : "text-gray-200",
        )}
      />

      <div className="pt-8 flex flex-col h-full">
        <blockquote
          className={cn(
            "text-gray-700 leading-relaxed mb-6 flex-1",
            "text-base md:text-lg",
            "line-clamp-5 md:line-clamp-6",
          )}
        >
          "{testimonial.content}"
        </blockquote>

        <div className="h-px bg-linear-to-r from-transparent via-gray-200 to-transparent mb-6" />

        <div className="flex items-center gap-4 h-14">
          <div
            className={cn(
              "rounded-full overflow-hidden border-2 shrink-0 transition-all duration-400",
              "w-12 h-12",
              isActive ? "border-[#22b5f8]/30" : "border-gray-200",
            )}
          >
            <img
              src={testimonial.avatar || "/placeholder.svg"}
              alt={testimonial.author}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="min-w-0">
            <div className="font-semibold text-gray-900 text-sm md:text-base truncate">
              {testimonial.author}
            </div>
            <div className="text-gray-500 text-xs md:text-sm truncate">
              {testimonial.role}, {testimonial.company}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const autoSlideRef = useRef<NodeJS.Timeout | null>(null);
  const resumeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const { t, locale } = useI18n();

  const testimonials = testimonialsData[locale] || testimonialsData.vi;

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const getVisibleIndices = useCallback(() => {
    const total = testimonials.length;
    const left = (activeIndex - 1 + total) % total;
    const right = (activeIndex + 1) % total;
    return { left, center: activeIndex, right };
  }, [activeIndex, testimonials.length]);

  const { left: leftIndex, right: rightIndex } = getVisibleIndices();

  const navigateTo = useCallback(
    (newIndex: number) => {
      if (isAnimating) return;

      setIsAnimating(true);
      setActiveIndex(newIndex);

      setTimeout(() => {
        setIsAnimating(false);
      }, ANIMATION_DURATION);
    },
    [isAnimating],
  );

  const nextTestimonial = useCallback(() => {
    navigateTo((activeIndex + 1) % testimonials.length);
  }, [activeIndex, navigateTo, testimonials.length]);

  const prevTestimonial = useCallback(() => {
    navigateTo((activeIndex - 1 + testimonials.length) % testimonials.length);
  }, [activeIndex, navigateTo, testimonials.length]);

  const pauseAutoSlide = useCallback(() => {
    setIsPaused(true);

    if (resumeTimeoutRef.current) {
      clearTimeout(resumeTimeoutRef.current);
    }

    resumeTimeoutRef.current = setTimeout(() => {
      setIsPaused(false);
    }, RESUME_DELAY);
  }, []);

  const handleUserInteraction = useCallback(() => {
    pauseAutoSlide();
  }, [pauseAutoSlide]);

  useEffect(() => {
    if (
      prefersReducedMotion ||
      testimonials.length <= 1 ||
      isPaused ||
      isAnimating
    ) {
      return;
    }

    autoSlideRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, AUTO_SLIDE_INTERVAL);

    return () => {
      if (autoSlideRef.current) {
        clearInterval(autoSlideRef.current);
      }
    };
  }, [prefersReducedMotion, isPaused, isAnimating, testimonials.length]);

  useEffect(() => {
    return () => {
      if (autoSlideRef.current) {
        clearInterval(autoSlideRef.current);
      }
      if (resumeTimeoutRef.current) {
        clearTimeout(resumeTimeoutRef.current);
      }
    };
  }, []);

  const handlePrev = useCallback(() => {
    handleUserInteraction();
    prevTestimonial();
  }, [handleUserInteraction, prevTestimonial]);

  const handleNext = useCallback(() => {
    handleUserInteraction();
    nextTestimonial();
  }, [handleUserInteraction, nextTestimonial]);

  const handleDotClick = useCallback(
    (idx: number) => {
      handleUserInteraction();
      navigateTo(idx);
    },
    [handleUserInteraction, navigateTo],
  );

  const handleLeftCardClick = useCallback(() => {
    handleUserInteraction();
    prevTestimonial();
  }, [handleUserInteraction, prevTestimonial]);

  const handleRightCardClick = useCallback(() => {
    handleUserInteraction();
    nextTestimonial();
  }, [handleUserInteraction, nextTestimonial]);

  return (
    <section className="py-24 md:py-32 bg-gray-50/50 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-gray-900 font-extrabold text-primary text-balance">
            {t("testimonials.title")}
          </h2>
        </div>

        <div
          className="relative"
          onMouseEnter={pauseAutoSlide}
          onMouseLeave={() => {
            if (resumeTimeoutRef.current) {
              clearTimeout(resumeTimeoutRef.current);
            }
            resumeTimeoutRef.current = setTimeout(() => {
              setIsPaused(false);
            }, RESUME_DELAY);
          }}
          onTouchStart={pauseAutoSlide}
        >
          {/* Desktop: 3 cards */}
          <div className="hidden lg:block">
            <div className="relative h-[380px] overflow-visible">
              <div
                className={cn(
                  "grid grid-cols-3 gap-6 items-center",
                  isAnimating && "pointer-events-none",
                )}
              >
                <div className="transition-all duration-400 ease-out">
                  <TestimonialCard
                    testimonial={testimonials[leftIndex]}
                    isActive={false}
                    onClick={handleLeftCardClick}
                    isClickable={true}
                  />
                </div>

                <div className="transition-all duration-400 ease-out z-10">
                  <TestimonialCard
                    testimonial={testimonials[activeIndex]}
                    isActive={true}
                  />
                </div>

                <div className="transition-all duration-400 ease-out">
                  <TestimonialCard
                    testimonial={testimonials[rightIndex]}
                    isActive={false}
                    onClick={handleRightCardClick}
                    isClickable={true}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Mobile/Tablet: Single card */}
          <div className="lg:hidden">
            <div className="relative h-[360px] overflow-hidden">
              <div
                className={cn(
                  "absolute inset-0 transition-all duration-400 ease-out",
                  isAnimating && "pointer-events-none",
                )}
              >
                <TestimonialCard
                  testimonial={testimonials[activeIndex]}
                  isActive={true}
                />
              </div>
            </div>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={handlePrev}
            disabled={isAnimating}
            aria-label={t("testimonials.prev")}
            className={cn(
              "absolute left-0 lg:-left-6 top-1/2 -translate-y-1/2",
              "w-12 h-12 rounded-full bg-white border border-gray-200",
              "flex items-center justify-center",
              "hover:bg-gray-50 hover:border-[#22b5f8] hover:shadow-lg",
              "transition-all duration-300 z-30 shadow-md",
              isAnimating && "opacity-50 cursor-not-allowed",
            )}
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>

          <button
            onClick={handleNext}
            disabled={isAnimating}
            aria-label={t("testimonials.next")}
            className={cn(
              "absolute right-0 lg:-right-6 top-1/2 -translate-y-1/2",
              "w-12 h-12 rounded-full bg-white border border-gray-200",
              "flex items-center justify-center",
              "hover:bg-gray-50 hover:border-[#22b5f8] hover:shadow-lg",
              "transition-all duration-300 z-30 shadow-md",
              isAnimating && "opacity-50 cursor-not-allowed",
            )}
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center items-center gap-2 mt-10">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => handleDotClick(idx)}
              disabled={isAnimating}
              aria-label={t("testimonials.view", { n: idx + 1 })}
              className={cn(
                "h-2.5 rounded-full transition-all duration-300",
                idx === activeIndex
                  ? "w-8 bg-[#22b5f8]"
                  : "w-2.5 bg-gray-300 hover:bg-gray-400",
                isAnimating && "cursor-not-allowed",
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
