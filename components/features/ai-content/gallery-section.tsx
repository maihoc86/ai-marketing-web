"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";
import { useInView } from "@/hooks/use-in-view";

type FilterType = "all" | "product" | "lifestyle" | "social";

export function AIContentGallerySection() {
  const { t } = useI18n();
  const { ref, isInView } = useInView();
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");

  const galleryImages = [
    { src: "/images/gallery/product-1.jpg", alt: "Product AI Generation", category: "product" },
    { src: "/images/gallery/lifestyle-1.jpg", alt: "Lifestyle AI Generation", category: "lifestyle" },
    { src: "/images/gallery/social-1.jpg", alt: "Social Media Content", category: "social" },
    { src: "/images/gallery/product-2.jpg", alt: "High Quality Audio Visuals", category: "product" },
    { src: "/images/gallery/lifestyle-2.jpg", alt: "Style Transfer AI", category: "lifestyle" },
    { src: "/images/gallery/social-2.jpg", alt: "Creative AI Art", category: "social" },
  ];

  const filteredImages = activeFilter === "all"
    ? galleryImages
    : galleryImages.filter(img => img.category === activeFilter);

  const filters: { key: FilterType; labelKey: string }[] = [
    { key: "all", labelKey: "featurePage.content.gallery.filter.all" },
    { key: "product", labelKey: "featurePage.content.gallery.filter.product" },
    { key: "lifestyle", labelKey: "featurePage.content.gallery.filter.lifestyle" },
    { key: "social", labelKey: "featurePage.content.gallery.filter.social" },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div ref={ref} className="container mx-auto px-6">
        {/* Section Header with Filters */}
        <div
          className={`flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div>
            <h2 className="text-4xl font-black tracking-tight mb-4">
              {t("featurePage.content.gallery.title")}
            </h2>
            <p className="text-lg text-gray-600">
              {t("featurePage.content.gallery.subtitle")}
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <Button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-5 py-2 rounded-full text-sm font-bold transition-all ${
                  activeFilter === filter.key
                    ? "bg-[#22b5f8] text-white shadow-lg"
                    : "bg-white border border-gray-200 text-gray-600 hover:border-[#22b5f8] hover:text-[#22b5f8]"
                }`}
              >
                {t(filter.labelKey)}
              </Button>
            ))}
          </div>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className={`break-inside-avoid transition-all duration-500 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300">
                <img
                  alt={image.alt}
                  className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700"
                  src={image.src}
                />
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white font-bold text-sm">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
