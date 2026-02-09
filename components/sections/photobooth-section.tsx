"use client";

import { useState } from "react";
import { ArrowRight, Zap, Plus, Camera, CheckCircle } from "lucide-react";
import Image from "next/image";
import AIPhotoboothModal from "@/components/ai-photobooth-modal";

export default function PhotoboothSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section
      className="py-24 bg-primary-light/30 relative overflow-hidden"
      id="photobooth"
    >
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 pointer-events-none" />
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/50 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1 relative">
            <div className="absolute inset-0 bg-primary/20 blur-[80px] rounded-full" />
            <div className="relative border-2 border-primary/30 p-2 bg-white/50 backdrop-blur-sm rounded-lg shadow-xl">
              <Image
                alt="High contrast nail photobooth setup"
                className="w-full h-auto object-cover grayscale-[20%] rounded"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBi0BnDoknlaej_ZdWp_-4aXF742PQhKag-6-F3fn6EikWJUhToFavj2AP7AFU3S5X5a3-aHnkwuQGGzIUSXDLoZbeEIPVYGcXcqJw-_wSIIwIW1zjxHS8tWGXLBIV-xST6zPz4m5hTaxHoJKJSyGYjE0gKbQFhk_9McIC7MiE0rAWjWEt1XlTNCYCFOATmUZGoKXdHgAzL18ZoKlr9SaiMh3xk5Lzx6OhvsW_aZSY-YrGHvEjx5j3p1S5mfnd2lfsoIaR-X_NCHmYr"
                width={600}
                height={400}
                unoptimized
              />
              <div className="absolute -bottom-6 -right-6 bg-primary text-white p-6 shadow-2xl hidden md:block rounded-lg">
                <p className="text-3xl font-bold">HD</p>
                <p className="text-[10px] uppercase tracking-widest font-bold">
                  Instant Preview
                </p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <div className="inline-block mb-6 px-4 py-1 border border-primary text-primary text-[10px] font-bold uppercase tracking-[0.2em] rounded-full bg-white">
              Spotlight Feature
            </div>
            <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6 text-text-main">
              Spotlight: Photobooth — <br />
              <span className="text-primary font-bold">
                sell more at the chair
              </span>
            </h2>
            <p className="text-text-muted text-lg leading-relaxed mb-8 font-light border-l-4 border-primary pl-6">
              Photobooth is our most effective upsell tool for nail shops.
              It&apos;s an in-salon station for clean hand photos and instant
              color previews. Customers can see how colors and designs look on
              their own hands before you start.
            </p>

            {/* CTA */}
            <div className="mb-12">
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-primary hover:bg-primary-dark text-white text-sm font-bold py-4 px-10 transition-all shadow-lg tracking-widest flex items-center gap-3 group rounded-md"
              >
                Try it now
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-y-8 gap-x-4">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-primary">
                  <Zap className="w-5 h-5" />
                  <h4 className="text-sm font-bold uppercase tracking-wider text-text-main">
                    Faster Decisions
                  </h4>
                </div>
                <p className="text-xs text-text-muted">
                  Clients choose quickly.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-primary">
                  <Plus className="w-5 h-5" />
                  <h4 className="text-sm font-bold uppercase tracking-wider text-text-main">
                    Higher Add-ons
                  </h4>
                </div>
                <p className="text-xs text-text-muted">Upsell art with ease.</p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-primary">
                  <Camera className="w-5 h-5" />
                  <h4 className="text-sm font-bold uppercase tracking-wider text-text-main">
                    Content Simple
                  </h4>
                </div>
                <p className="text-xs text-text-muted">
                  Instant social photos.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-primary">
                  <CheckCircle className="w-5 h-5" />
                  <h4 className="text-sm font-bold uppercase tracking-wider text-text-main">
                    Less Rework
                  </h4>
                </div>
                <p className="text-xs text-text-muted">
                  Previews match results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* AI Photobooth Modal */}
      <AIPhotoboothModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}
