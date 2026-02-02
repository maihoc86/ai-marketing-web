"use client";

import { Star } from "lucide-react";
import Image from "next/image";
import { useI18n } from "@/lib/i18n";
import { useInView } from "@/hooks/use-in-view";

const testimonials = [
  {
    nameKey: "featurePage.trends.testimonials.review1.name",
    companyKey: "featurePage.trends.testimonials.review1.company",
    roleKey: "featurePage.trends.testimonials.review1.role",
    quoteKey: "featurePage.trends.testimonials.review1.quote",
    avatar: "/images/avatars/avatar-1.jpg",
    rating: 5,
  },
  {
    nameKey: "featurePage.trends.testimonials.review2.name",
    companyKey: "featurePage.trends.testimonials.review2.company",
    roleKey: "featurePage.trends.testimonials.review2.role",
    quoteKey: "featurePage.trends.testimonials.review2.quote",
    avatar: "/images/avatars/avatar-2.jpg",
    rating: 5,
  },
  {
    nameKey: "featurePage.trends.testimonials.review3.name",
    companyKey: "featurePage.trends.testimonials.review3.company",
    roleKey: "featurePage.trends.testimonials.review3.role",
    quoteKey: "featurePage.trends.testimonials.review3.quote",
    avatar: "/images/avatars/avatar-3.jpg",
    rating: 5,
  },
];

export function TrendsTestimonialsSection() {
  const { t } = useI18n();
  const { ref, isInView } = useInView();

  return (
    <section className="py-16 bg-gray-50">
      <div ref={ref} className="container mx-auto px-4">
        {/* Section Header */}
        <div
          className={`mb-12 text-center transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            {t("featurePage.trends.testimonials.title")}
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className={`flex flex-col gap-4 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-500 ${
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${0.1 * idx}s` }}
            >
              {/* Header with Avatar */}
              <div className="flex items-center gap-3">
                <div className="size-12 rounded-full bg-gradient-to-br from-primary to-[#008bff] flex items-center justify-center text-white font-bold text-lg shadow-inner overflow-hidden">
                  {/* Fallback initials if no image */}
                  <span>{t(testimonial.nameKey).charAt(0)}</span>
                </div>
                <div className="flex-1">
                  <p className="text-gray-900 text-base font-semibold">
                    {t(testimonial.nameKey)}
                  </p>
                  <div className="flex items-center gap-1 text-xs">
                    <span className="font-bold text-gray-500 uppercase tracking-wider">
                      {t(testimonial.companyKey)}
                    </span>
                    <span className="text-gray-400">•</span>
                    <span className="text-primary font-medium">
                      {t(testimonial.roleKey)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Star Rating */}
              <div className="flex gap-0.5">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-secondary text-secondary"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 text-sm leading-relaxed flex-1">
                &ldquo;{t(testimonial.quoteKey)}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
