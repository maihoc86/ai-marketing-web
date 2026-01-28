"use client";

import { ChevronRight, Sparkles, Zap, Image as ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LocaleLink } from "@/components/locale-link";
import { useI18n } from "@/lib/i18n";

export function AIContentHeroSection() {
  const { t } = useI18n();

  return (
    <section className="relative overflow-hidden pt-24 pb-32 md:pt-28 md:pb-40">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-linear-to-br from-[#22b5f8]/5 via-[#008bff]/5 to-white" />

      {/* Animated Gradient Blobs */}
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-[#22b5f8]/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: "4s" }} />
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-[#008bff]/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: "6s", animationDelay: "1s" }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="animate-fade-in">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm font-medium text-gray-500 mb-6">
              <LocaleLink
                href="/#features"
                className="hover:text-[#1f3b61] transition-colors"
              >
                {t("nav.features")}
              </LocaleLink>
              <ChevronRight className="w-4 h-4" />
              <span className="text-[#22b5f8]">
                {t("features.content.title")}
              </span>
            </nav>

            {/* Badge */}
            <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 text-[11px] font-black uppercase tracking-[0.2em] text-white bg-[#1c1c1c] rounded-full shadow-lg">
              <Sparkles className="w-3 h-3" />
              4K QUALITY RENDERING
            </span>

            {/* Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1] mb-8">
              {t("featurePage.content.hero.title1")}{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#5fffec] to-[#008bff]">
                {t("featurePage.content.hero.title2")}
              </span>
              {", "}
              {t("featurePage.content.hero.title3")}
            </h1>

            {/* Description */}
            <p className="text-xl text-gray-600 mb-10 max-w-lg leading-relaxed">
              {t("featurePage.content.hero.description")}
            </p>

            {/* Metrics */}
            <div className="flex flex-wrap gap-8 mb-12 border-y border-gray-200 py-6">
              <div className="flex flex-col">
                <span className="text-3xl font-black text-[#1c1c1c]">30s</span>
                <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">
                  {t("featurePage.content.metric.perImage")}
                </span>
              </div>
              <div className="w-px h-12 bg-gray-200"></div>
              <div className="flex flex-col">
                <span className="text-3xl font-black text-[#1c1c1c]">4K</span>
                <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">
                  {t("featurePage.content.metric.resolution")}
                </span>
              </div>
              <div className="w-px h-12 bg-gray-200"></div>
              <div className="flex flex-col">
                <span className="text-3xl font-black text-[#1c1c1c]">100%</span>
                <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">
                  {t("featurePage.content.metric.commercial")}
                </span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="px-10 py-5 bg-[#ff7900] hover:bg-[#e06c00] text-white font-bold rounded-full shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all flex items-center justify-center gap-2"
                asChild
              >
                <LocaleLink href="/register">
                  {t("featurePage.content.cta.generate")}
                  <Zap className="w-5 h-5" />
                </LocaleLink>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="px-10 py-5 bg-white border-2 border-gray-200 text-gray-700 font-bold rounded-full hover:bg-gray-50 transition-all flex items-center justify-center gap-2"
              >
                {t("featurePage.content.cta.viewGallery")}
                <ImageIcon className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Right - Image Grid */}
          <div className="relative lg:h-[600px] grid grid-cols-2 gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            {/* Column 1 */}
            <div className="space-y-4 pt-12">
              <div className="h-64 rounded-3xl overflow-hidden shadow-2xl bg-gray-200 group relative transform hover:scale-105 transition-transform duration-300">
                <img
                  alt="Product flat lay"
                  className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
                  src="/images/gallery/product-flatlay-1.jpg"
                />
                <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold">
                  #ProductFlatlay
                </div>
              </div>
              <div className="h-80 rounded-3xl overflow-hidden shadow-2xl bg-gray-200 group relative transform hover:scale-105 transition-transform duration-300">
                <img
                  alt="Abstract 3D"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  src="/images/gallery/abstract-3d.jpg"
                />
                <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold">
                  #ModernAbstract
                </div>
              </div>
            </div>

            {/* Column 2 */}
            <div className="space-y-4">
              <div className="h-80 rounded-3xl overflow-hidden shadow-2xl bg-gray-200 group relative transform hover:scale-105 transition-transform duration-300">
                <img
                  alt="Lifestyle shot"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  src="/images/gallery/lifestyle-model.jpg"
                />
                <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold">
                  #LifestyleModel
                </div>
              </div>
              <div className="h-64 rounded-3xl overflow-hidden shadow-2xl bg-gray-200 group relative transform hover:scale-105 transition-transform duration-300">
                <img
                  alt="Tech device"
                  className="w-full h-full object-cover group-hover:rotate-1 transition-transform duration-700"
                  src="/images/gallery/tech-minimal.jpg"
                />
                <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold">
                  #TechMinimal
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx global>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
}
