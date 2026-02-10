"use client";

import Link from "next/link";
import { Play, ArrowRight, ShieldCheck } from "lucide-react";
import { useState } from "react";
import YouTubeModal from "../common/YouTubeModal";
import Image from "next/image";

export default function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative pt-24 pb-16 lg:pt-36 lg:pb-24 px-4 overflow-hidden bg-white">
      {/* Background gradient */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-primary/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
        {/* Left Content */}
        <div className="flex flex-col gap-6 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight leading-[1.1] text-text-main uppercase">
            BOOST NAIL <br />
            <span className="text-gradient-blue whitespace-nowrap">
              SALON REVENUE
            </span>
          </h1>

          <div className="space-y-6">
            <p className="text-sm sm:text-base text-text-muted leading-relaxed font-light">
              Uniksmart helps nail salons get more local clients, fill
              appointments and boost sales. Done-for-you social posts, local
              ads, booking reminders, realistic nail preview images, and an easy
              website (Business plan). Start a 10-day free trial.
            </p>

            {/* Key Benefits */}
            <div className="space-y-4 pr-0 bg-linear-to-r from-primary/5 to-transparent p-4 md:p-6 rounded-lg border-l-4 border-primary">
              <ul className="space-y-3">
                <li className="flex items-start gap-3 group">
                  <div className="shrink-0 mt-0.5">
                    <div className="size-5 rounded-full bg-primary flex items-center justify-center">
                      <span className="text-[10px] font-bold text-white">
                        1
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-text-main leading-relaxed font-medium text-start">
                    We help salons get found locally and fill chairs.
                  </p>
                </li>
                <li className="flex items-start gap-3 group">
                  <div className="shrink-0 mt-0.5">
                    <div className="size-5 rounded-full bg-primary flex items-center justify-center">
                      <span className="text-[10px] font-bold text-white">
                        2
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-text-main leading-relaxed font-medium text-start">
                    We do the marketing work: posts, ads, booking follow-ups,
                    and review management.
                  </p>
                </li>
                <li className="flex items-start gap-3 group">
                  <div className="shrink-0 mt-0.5">
                    <div className="size-5 rounded-full bg-primary flex items-center justify-center">
                      <span className="text-[10px] font-bold text-white">
                        3
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-text-main leading-relaxed font-medium text-start">
                    We provide realistic nail preview images to boost upsells
                    and social shares.
                  </p>
                </li>
                <li className="flex items-start gap-3 group">
                  <div className="shrink-0 mt-0.5">
                    <div className="size-5 rounded-full bg-primary flex items-center justify-center">
                      <span className="text-[10px] font-bold text-white">
                        4
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-text-main leading-relaxed font-medium text-start">
                    Business plan includes a mobile-friendly website.
                  </p>
                </li>
                <li className="flex items-start gap-3 group">
                  <div className="shrink-0 mt-0.5">
                    <div className="size-5 rounded-full bg-primary flex items-center justify-center">
                      <span className="text-[10px] font-bold text-white">
                        5
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-text-main leading-relaxed font-medium text-start">
                    No tech skills required and no hardware to buy.
                  </p>
                </li>
              </ul>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5 pt-4">
            <Link
              href="/trial"
              className="w-full sm:w-auto h-14 px-10 bg-primary hover:bg-primary-dark text-white font-bold transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group tracking-widest text-sm rounded-md"
            >
              START TRIAL
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <button
              className="w-full sm:w-auto h-14 px-10 bg-transparent border border-primary/40 text-primary font-bold hover:bg-primary/5 transition-all flex items-center justify-center gap-2 tracking-widest text-sm rounded-md"
              onClick={() => setIsModalOpen(true)}
            >
              <Play className="size-5" />
              WATCH 3-MINUTE DEMO
            </button>
          </div>

          {/* Trust badge */}
          <div className="flex items-center justify-center lg:justify-start gap-2">
            <ShieldCheck className="w-4 h-4 text-primary" />
            <p className="text-xs text-text-muted uppercase tracking-[0.2em] font-bold">
              Try risk-free: 10-day free trial — no credit card required.
            </p>
          </div>
        </div>

        {/* Right Content - Dashboard Preview */}
        <div className="relative w-full aspect-square flex items-center justify-center lg:justify-end">
          {/* Background blur */}
          <div className="absolute inset-0 bg-primary/10 blur-[100px] rounded-full translate-x-10" />

          {/* Dashboard Card */}
          <div className="relative w-full max-w-lg h-auto p-1 bg-linear-to-br from-primary to-primary-dark shadow-2xl rounded-xl">
            <div className="bg-white rounded-[10px] h-full overflow-hidden">
              <Image
                src="/images/hero.jpg"
                alt="Hero Image"
                width={600}
                height={600}
              />
            </div>
          </div>
        </div>
      </div>
      <YouTubeModal
        videoId="R5RuHV_JrMM"
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}
