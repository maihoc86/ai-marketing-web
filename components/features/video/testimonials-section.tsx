"use client";

import { Star, StarHalf, ArrowLeft, ArrowRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import Image from "next/image";
import { useState, useRef } from "react";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import { cn } from "@/lib/utils";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    id: 1,
    rating: 5,
    quoteKey: "featurePage.video.testimonials.1.quote",
    nameKey: "featurePage.video.testimonials.1.name",
    roleKey: "featurePage.video.testimonials.1.role",
    avatar: "/images/avatars/avatar-1.jpg",
  },
  {
    id: 2,
    rating: 4.5,
    quoteKey: "featurePage.video.testimonials.2.quote",
    nameKey: "featurePage.video.testimonials.2.name",
    roleKey: "featurePage.video.testimonials.2.role",
    avatar: "/images/avatars/avatar-2.jpg",
  },
  {
    id: 3,
    rating: 5,
    quoteKey: "featurePage.video.testimonials.3.quote",
    nameKey: "featurePage.video.testimonials.3.name",
    roleKey: "featurePage.video.testimonials.3.role",
    avatar: "/images/avatars/avatar-3.jpg",
  },
  {
    id: 4,
    rating: 5,
    quoteKey: "featurePage.video.testimonials.4.quote",
    nameKey: "featurePage.video.testimonials.4.name",
    roleKey: "featurePage.video.testimonials.4.role",
    avatar: "/images/avatars/avatar-4.jpg",
  },
];

function RatingStars({ rating }: { rating: number }) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div className="flex items-center gap-0.5 text-primary">
      {Array.from({ length: fullStars }).map((_, i) => (
        <Star key={i} className="size-4 fill-current" />
      ))}
      {hasHalfStar && <StarHalf className="size-4 fill-current" />}
    </div>
  );
}

export function VideoTestimonialsSection() {
  const { t } = useI18n();
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);
  const swiperRef = useRef<SwiperRef | null>(null);

  const updateNavigationState = () => {
    if (swiperRef.current?.swiper) {
      const swiper = swiperRef.current.swiper;
      setCanPrev(!swiper.isBeginning);
      setCanNext(!swiper.isEnd);
    }
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50 border-y border-gray-100">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight mb-4">
            {t("featurePage.video.testimonials.title")}
          </h2>
          <p className="text-gray-500 text-lg">
            {t("featurePage.video.testimonials.subtitle")}
          </p>
        </div>

        {/* Swiper Container */}
        <div className="relative">
          <Swiper
            ref={swiperRef}
            modules={[Navigation, Autoplay, Pagination]}
            slidesPerView={1}
            spaceBetween={24}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            pagination={{
              clickable: true,
              dynamicBullets: false,
              el: ".testimonials-pagination",
            }}
            onBeforeInit={(swiper) => {
              swiper.navigation?.init();
              swiper.navigation?.update();
            }}
            speed={500}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            onSlideChange={updateNavigationState}
            onInit={updateNavigationState}
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="bg-white border border-gray-200 p-6 rounded-2xl flex flex-col gap-4 shadow-sm hover:shadow-lg transition-shadow min-h-61.5 h-full m-2">
                  {/* Rating */}
                  <RatingStars rating={testimonial.rating} />

                  {/* Quote */}
                  <p className="text-gray-700 text-sm leading-relaxed flex-1">
                    &ldquo;{t(testimonial.quoteKey)}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                    <div className="size-10 rounded-full bg-gray-200 overflow-hidden relative">
                      <Image
                        src={testimonial.avatar}
                        alt={t(testimonial.nameKey)}
                        fill
                        className="object-cover"
                        sizes="40px"
                      />
                    </div>
                    <div>
                      <p className="text-gray-900 font-semibold text-sm">
                        {t(testimonial.nameKey)}
                      </p>
                      <p className="text-gray-500 text-xs">
                        {t(testimonial.roleKey)}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              aria-label="Previous testimonial"
              disabled={!canPrev}
              className={cn(
                "size-10 rounded-full bg-white shrink-0 shadow-md flex items-center justify-center text-gray-700 hover:bg-gray-100 transition-colors",
                !canPrev && "opacity-40 pointer-events-none",
              )}
              onClick={() => {
                swiperRef.current?.swiper.slidePrev();
              }}
            >
              <ArrowLeft className="size-5" />
            </button>

            {/* Custom Pagination Container */}
            <div className="testimonials-pagination flex w-fit items-center gap-2"></div>

            <button
              aria-label="Next testimonial"
              disabled={!canNext}
              className={cn(
                "size-10 rounded-full shrink-0 bg-white shadow-md flex items-center justify-center text-gray-700 hover:bg-gray-100 transition-colors",
                !canNext && "opacity-40 pointer-events-none",
              )}
              onClick={() => {
                swiperRef.current?.swiper.slideNext();
              }}
            >
              <ArrowRight className="size-5" />
            </button>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .testimonials-pagination {
          display: flex !important;
          align-items: center;
          gap: 0.5rem;
        }

        .testimonials-pagination .swiper-pagination-bullet {
          width: 0.375rem;
          height: 0.375rem;
          background: #d1d5db;
          opacity: 1;
          margin: 0 !important;
          transition: all 0.3s ease;
          border-radius: 9999px;
        }

        .testimonials-pagination .swiper-pagination-bullet-active {
          width: 2rem;
          background: var(--color-primary);
        }
      `}</style>
    </section>
  );
}
