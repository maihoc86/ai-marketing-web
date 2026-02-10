"use client";

import { useState } from "react";
import {
  ArrowRight,
  Zap,
  Plus,
  Camera,
  CheckCircle,
  Sparkles,
  Check,
} from "lucide-react";
import Image from "next/image";
import AIPhotoboothModal from "@/components/ai-photobooth-modal";

export default function PhotoboothSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const designs = [
    {
      title: "Halloween",
      image: "/nails-style/1.jpeg",
    },
    {
      title: "Pointed",
      image: "/nails-style/2.jpeg",
    },
    {
      title: "Cute",
      image: "/nails-style/3.jpeg",
    },
    {
      title: "Flower",
      image: "/nails-style/4.jpeg",
    },
  ];

  const features = [
    {
      icon: Zap,
      title: "Faster Decisions",
      description:
        "Clients choose their style in seconds, reducing chair time by up to 15%.",
    },
    {
      icon: Plus,
      title: "Higher Add-ons",
      description:
        "Visualizing premium nail art increases upsell conversion rates significantly.",
    },
    {
      icon: Camera,
      title: "Content Simple",
      description:
        "Automatically generate high-res social media content from every session.",
    },
    {
      icon: CheckCircle,
      title: "Less Rework",
      description:
        "What they see is what they get. Zero surprises means happier clients.",
    },
  ];

  return (
    <section
      className="w-full py-12 lg:py-20 bg-white relative overflow-hidden"
      id="photobooth"
    >
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-linear-to-l from-primary/5 to-transparent pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/5 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left: Scanning interface & design samples */}
          <div className="flex flex-col gap-6">
            {/* Main scanning display */}
            <div className="relative h-[300px] lg:h-[380px] w-full rounded-2xl overflow-hidden border border-primary/10 shadow-2xl group bg-slate-900">
              <Image
                alt="High-tech hand scanning interface"
                className="absolute inset-0 w-full h-full object-cover opacity-70 transition-transform duration-700 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwnXbx59PF5B76rr11A83eMD5PpPwGdbN9dYe0mD1ux3Uh69M1s6R5zAKRme9T5n1mJpt9zlTuZPKNyaMUeEV34_2q2HhlquH859D8VuAzu0we6V3W2DTMXEBz0IgVKmjE-61GfHAU_Nn6ejhiL7kXKUMFIe9LwaLWXVJu4lC0lRf2ZqSofXoqnpvCPHAO44GAciX9M1HCL3XFst0E1YJD8D20FKoip3IfVPunQjfeVX2JlK6Pl3N3Atv5Y8Rb6TTByApQDqPus_s4"
                width={600}
                height={380}
                unoptimized
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-black/20" />

              {/* Style selection bubbles */}
              <div className="absolute right-8 top-[35%] -translate-y-1/2 flex flex-col gap-4 z-20">
                <div className="bg-white/10 backdrop-blur-md border border-primary/40 shadow-lg px-4 py-2 rounded-full flex items-center gap-2 cursor-pointer hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                  <Sparkles className="w-3.5 h-3.5 text-primary" />
                  <span className="text-xs font-sans font-semibold text-white uppercase tracking-wider">
                    Halloween Style
                  </span>
                </div>
                <div className="bg-white/10 backdrop-blur-md border border-primary/40 shadow-lg px-4 py-2 rounded-full flex items-center gap-2 cursor-pointer hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                  <Zap className="w-3.5 h-3.5 text-primary" />
                  <span className="text-xs font-sans font-semibold text-white uppercase tracking-wider">
                    Pointed Nails Style
                  </span>
                </div>
              </div>

              {/* Scanning frame with animation */}
              <div className="absolute inset-0 flex items-center justify-center p-4 md-6 lg:p-8">
                <div className="w-full h-full border-2 border-primary/30 rounded-lg relative overflow-hidden">
                  {/* Scanning line moving up and down */}
                  <div
                    className="absolute left-0 w-full h-1 bg-primary shadow-[0_0_15px_rgba(34,181,248,1)]"
                    style={{
                      animation: "scan 3.5s ease-in-out infinite",
                    }}
                  />
                  <style jsx>{`
                    @keyframes scan {
                      0%,
                      100% {
                        top: 0;
                      }
                      50% {
                        top: calc(100% - 4px);
                      }
                    }
                  `}</style>
                  <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-primary" />
                  <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-primary" />
                  <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-primary" />
                  <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-primary" />
                </div>
              </div>

              {/* Status bar */}
              <div className="absolute bottom-6 left-8 right-8 flex justify-between items-end">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                    <p className="text-xs font-mono text-primary uppercase tracking-[0.2em] font-bold">
                      Live Scanning
                    </p>
                  </div>
                  <p className="text-white text-sm font-medium">
                    Detecting Skin Tone & Nail Bed...
                  </p>
                </div>
                <div className="px-3 py-1.5 bg-white/10 backdrop-blur-md rounded border border-white/20 text-xs font-bold text-white uppercase tracking-widest">
                  HD
                </div>
              </div>
            </div>

            {/* Design samples grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {designs.map((design, index) => (
                <div
                  key={index}
                  className="bg-white p-2 rounded-xl border border-primary/10 shadow-lg hover:border-primary/30 transition-all"
                >
                  <div className="relative aspect-square rounded-lg overflow-hidden mb-2 bg-slate-100">
                    <Image
                      alt={design.title}
                      className="w-full h-full object-cover"
                      src={design.image}
                      width={100}
                      height={100}
                      unoptimized
                    />
                    <div className="absolute top-1.5 right-1.5 px-1.5 py-0.5 bg-black/60 backdrop-blur-sm rounded text-[8px] font-bold text-white uppercase">
                      AI Gen
                    </div>
                  </div>
                  <p className="text-xs font-bold text-text-main text-center uppercase tracking-wider">
                    {design.title}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Content */}
          <div className="flex flex-col">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 border border-primary/20 text-primary text-xs font-bold uppercase tracking-[0.2em] rounded-full bg-primary/5 w-fit">
              <Sparkles className="w-3.5 h-3.5" />
              Exclusive Feature
            </div>

            {/* Heading */}
            <h2 className="text-3xl lg:text-4xl font-display font-extrabold mb-2 text-text-main leading-tight uppercase tracking-tight">
              Spotlight: <span className="text-primary">Photobooth</span>
            </h2>
            <h3 className="text-lg lg:text-xl font-light text-text-muted mb-6 tracking-wide">
              Sell More at the Chair
            </h3>

            {/* Description */}
            <p className="text-text-muted text-base leading-relaxed mb-8 font-light border-l-4 border-primary pl-6">
              Revolutionize your consultation process. Our AI-powered Photobooth
              allows customers to instantly visualize colors and intricate
              designs on their own hands before a single drop of polish is
              applied.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-y-8 gap-x-6 mb-10">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex flex-col gap-1.5 group">
                    <div className="flex items-center gap-4">
                      <div className="p-2.5 bg-primary/10 rounded-lg text-primary transition-all duration-300">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h4 className="text-sm font-bold uppercase tracking-wider text-text-main">
                        {feature.title}
                      </h4>
                    </div>
                    <p className="text-xs text-text-muted pl-13 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* CTA Section */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full sm:w-auto bg-primary hover:bg-primary-dark text-white text-sm font-extrabold py-3 px-10 transition-all shadow-[0_10px_20px_-10px_rgba(34,181,248,0.5)] hover:shadow-[0_15px_25px_-10px_rgba(34,181,248,0.6)] tracking-[0.2em] flex items-center justify-center gap-2 group rounded-md"
              >
                Try AI Photobooth
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <AIPhotoboothModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}
