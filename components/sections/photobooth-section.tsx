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
      title: "Chrome Finish",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDI23rgFBitscVnpXAK8eC750INr8sGich89cer-eE-hyWar2tdweskhhYgL4ON9kX4OgUa_n0WpipYUQIZTO9vFsu9-d0pa3iOU2u7yWVaB0fcuL5QeSaSbErK1g3NtQBCbg6a0S0C6jvQz4HdssibINchuXb8SjKiRYyqLVL2MWeWNFd1AX65Zr46ha5TSsWJXP-w_WSBfSwbvjPsLpNXDeFSnCz4TGS5w1NfFWopgmZgjHMDNw0J0pgrFGnZlHeyzrWn2KyjfS3T",
    },
    {
      title: "Matte Ombre",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCLyZmg8CPyu0x4vxgCJRCf7Dn-vPfEI1OM7bYU3enX4hDG7Cq9AcsrbzlBkp6F8FJbEzcKYGHPhiCHLLja6S7HZqjDp2eFt9ivlpI3xdy0kDXjS8ONCmraGRQV2xQVmEBDp5PSNEmxV5WD4smRy8x0Nlj8h0p6cRvovYev_NCw2sgHANvrPlE_BJpWOhsE2JgfeSCgAov6L1ZS08zk6HQppayvMDnPtsNWMvb6WxKsgliNAJoOkB3TdFm3IGRBCAfscjnglkHHHya3",
    },
    {
      title: "3D Floral",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuACXmi1opyOrxB8bxc1_Zn6Wfbq2TERW0H8K7f7hKVuLf6FbIkQVGNqLUIifrXcwFMg040L4_bWNbUGBCRbv_11Up0F2cyviZM6CusIL8__9wUzO7ESS9ryYDklNBSD_gAytppvmAk5eLKkXKTQ9xRe3L3u7ddzNYVctLjKh7__xJss4ltep7jGVCOcrXfM3ipsQpygQiVFkH8g6lsb1r8yOpsnZYtK99eThANnfS8WmdjnXjKQBaSHdAP27n6BeEAN3viGlcuXB8Tr",
    },
    {
      title: "French Tip",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAl3F24txjiGf33EPPcGQ5XZ29QLehDcY3e_HKR2Xi04vU3QhomceKjitLP4iiC98hwIhg4sweQfKTNOWgn341BVwH6vPIl0V6tK_fV6TT8n2ykoAM0uSHRjy7r3LX9rn-3bQg0o-mziseNb5mVXveOVZIG3sbJWagvw061aPhrpn54j0kSwA-dwYisxm-XocX2X1wSOM-PSRG9c22qP0O72906cizIZPavzAZVpUyf3KTAzyHm8DeKw425ChrCFoEh3ScI274MsNgB",
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
      className="w-full py-16 lg:py-24 bg-white relative overflow-hidden"
      id="photobooth"
    >
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/5 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

              {/* Scanning frame with animation */}
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="w-full h-full border-2 border-primary/30 rounded-lg relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-primary shadow-[0_0_15px_rgba(34,181,248,1)] animate-pulse" />
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
                    <p className="text-[10px] font-mono text-primary uppercase tracking-[0.2em] font-bold">
                      Live Scanning
                    </p>
                  </div>
                  <p className="text-white text-sm font-medium">
                    Detecting Skin Tone & Nail Bed...
                  </p>
                </div>
                <div className="px-3 py-1.5 bg-white/10 backdrop-blur-md rounded border border-white/20 text-[10px] font-bold text-white uppercase tracking-widest">
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
                  <p className="text-[10px] font-bold text-text-main text-center uppercase tracking-wider">
                    {design.title}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Content */}
          <div className="flex flex-col">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-[0.2em] rounded-full bg-primary/5 w-fit">
              <Sparkles className="w-3.5 h-3.5" />
              Exclusive Feature
            </div>

            {/* Heading */}
            <h2 className="text-4xl lg:text-5xl font-display font-extrabold mb-2 text-text-main leading-tight uppercase tracking-tight">
              Spotlight: <span className="text-primary">Photobooth</span>
            </h2>
            <h3 className="text-xl lg:text-2xl font-light text-text-muted mb-8 tracking-wide">
              Sell More at the Chair
            </h3>

            {/* Description */}
            <p className="text-text-muted text-lg leading-relaxed mb-10 font-light border-l-4 border-primary pl-6">
              Revolutionize your consultation process. Our AI-powered Photobooth
              allows customers to instantly visualize colors and intricate
              designs on their own hands before a single drop of polish is
              applied.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-y-10 gap-x-8 mb-12">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex flex-col gap-3 group">
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
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full sm:w-auto bg-primary hover:bg-primary-dark text-white text-sm font-extrabold py-4 px-12 transition-all shadow-[0_10px_20px_-10px_rgba(34,181,248,0.5)] hover:shadow-[0_15px_25px_-10px_rgba(34,181,248,0.6)] tracking-[0.2em] flex items-center justify-center gap-3 group rounded-md"
              >
                START FREE TRIAL
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <div className="flex items-center gap-2 py-2">
                <Check className="w-4 h-4 text-green-500" />
                <p className="text-[10px] text-text-muted font-bold uppercase tracking-widest whitespace-nowrap">
                  Compatible with iOS & Android
                </p>
              </div>
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
