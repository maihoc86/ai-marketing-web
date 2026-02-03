"use client";

import { Star, StarHalf } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import Image from "next/image";

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

        {/* Horizontal Scroll Container */}
        <div className="relative w-full">
          <div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory px-4 md:px-0 scrollbar-hide">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="snap-center shrink-0 w-[300px] md:w-[350px] bg-white border border-gray-200 p-6 rounded-2xl flex flex-col gap-4 shadow-sm hover:shadow-lg transition-shadow"
              >
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
            ))}
          </div>

          {/* Scroll Indicators (Desktop) */}
          <div className="hidden md:flex justify-center gap-2 mt-4">
            {testimonials.map((_, idx) => (
              <div
                key={idx}
                className={`h-1.5 rounded-full transition-all ${
                  idx === 0 ? "w-8 bg-primary" : "w-2 bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
