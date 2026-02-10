"use client";

import Link from "next/link";
import { Play, ArrowRight, ShieldCheck } from "lucide-react";
import { useState } from "react";
import YouTubeModal from "../common/YouTubeModal";

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
            <div className="space-y-4 pr-0 bg-linear-to-r from-primary/5 to-transparent p-6 rounded-lg border-l-4 border-primary">
              <ul className="space-y-3">
                <li className="flex items-start gap-3 group">
                  <div className="flex-shrink-0 mt-0.5">
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
                  <div className="flex-shrink-0 mt-0.5">
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
                  <div className="flex-shrink-0 mt-0.5">
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
                  <div className="flex-shrink-0 mt-0.5">
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
                  <div className="flex-shrink-0 mt-0.5">
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
              {/* Window Header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 bg-gray-50/50">
                <div className="flex items-center gap-2">
                  <div className="size-3 rounded-full bg-red-400" />
                  <div className="size-3 rounded-full bg-yellow-400" />
                  <div className="size-3 rounded-full bg-green-400" />
                </div>
                <div className="text-xs text-text-muted font-bold tracking-wider uppercase flex items-center gap-2">
                  <span className="size-2 rounded-full bg-green-500 animate-pulse" />
                  Live Analytics Dashboard
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="p-6 md:p-8 bg-background-light">
                {/* Stats Row */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-white p-5 rounded border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-2">
                      <p className="text-xs text-text-muted uppercase tracking-wider font-bold">
                        Local Reach
                      </p>
                      <span className="text-primary text-sm">📍</span>
                    </div>
                    <p className="text-2xl lg:text-3xl font-display font-bold text-text-main">
                      15,200
                    </p>
                    <p className="mt-2 text-xs text-text-muted leading-tight">
                      High visibility in{" "}
                      <span className="text-primary font-semibold">
                        Downtown Area
                      </span>
                    </p>
                  </div>
                  <div className="bg-white p-5 rounded border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-2">
                      <p className="text-xs text-text-muted uppercase tracking-wider font-bold">
                        Content
                      </p>
                      <span className="text-primary text-sm">🖼️</span>
                    </div>
                    <p className="text-2xl lg:text-3xl font-display font-bold text-text-main">
                      24 Posts
                    </p>
                    <p className="mt-2 text-xs text-text-muted leading-tight">
                      Images & Short Videos created
                    </p>
                  </div>
                </div>

                {/* Promo & Bookings Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="bg-white p-5 rounded border border-gray-100 shadow-sm relative group overflow-hidden">
                    <div className="flex justify-between items-center mb-3">
                      <div className="flex items-center gap-2">
                        <span className="text-primary text-sm">📢</span>
                        <p className="text-xs text-text-muted uppercase tracking-wider font-bold">
                          Promo
                        </p>
                      </div>
                      <span className="bg-emerald-50 text-emerald-600 text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide border border-emerald-100">
                        Active
                      </span>
                    </div>
                    <p className="text-lg font-bold text-text-main mb-1">
                      Weekend Walk-in Special
                    </p>
                    <button className="mt-3 text-xs font-bold text-primary hover:text-primary-dark uppercase tracking-widest flex items-center gap-1 transition-colors">
                      🚀 Boost Now
                    </button>
                  </div>
                  <div className="bg-white p-5 rounded border border-gray-100 shadow-sm flex flex-col justify-between">
                    <div className="flex justify-between items-start mb-1">
                      <p className="text-xs text-text-muted uppercase tracking-wider font-bold">
                        Est. Bookings
                      </p>
                      <span className="text-green-500 text-sm">📈</span>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <p className="text-2xl font-display font-bold text-text-main">
                        +18
                      </p>
                      <span className="text-xs text-text-muted">this week</span>
                    </div>
                    <p className="mt-1 text-xs text-green-600 font-medium bg-green-50 w-fit px-1.5 py-0.5 rounded">
                      Campaign is working well.
                    </p>
                  </div>
                </div>

                {/* ROI Chart */}
                <div className="bg-white p-5 rounded border border-gray-100 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xs font-bold text-text-main uppercase tracking-wider">
                        Ad Spend vs. ROI
                      </h3>
                      <p className="text-xs text-text-muted">
                        Last 7 days performance
                      </p>
                    </div>
                    <div className="flex items-center gap-1 text-primary text-xs font-bold bg-accent-champagne px-2 py-1 rounded border border-primary/10">
                      👍
                      <span>Keep running this ad</span>
                    </div>
                  </div>
                  <div className="flex items-end gap-6 h-24 w-full px-4">
                    <div className="flex flex-col items-center gap-2 w-1/2 h-full justify-end group cursor-pointer">
                      <span className="text-xs font-bold text-text-muted mb-1">
                        $50
                      </span>
                      <div className="w-full bg-gray-200 rounded-t-sm h-[20%] relative group-hover:bg-gray-300 transition-colors" />
                      <span className="text-xs font-bold text-text-muted uppercase tracking-wider mt-1">
                        Spent
                      </span>
                    </div>
                    <div className="flex flex-col items-center gap-2 w-1/2 h-full justify-end group cursor-pointer">
                      <span className="text-xs font-bold text-primary mb-1 opacity-100">
                        $450
                      </span>
                      <div className="w-full bg-primary rounded-t-sm h-[85%] relative shadow-lg shadow-primary/20 group-hover:bg-primary-dark transition-colors" />
                      <span className="text-xs font-bold text-primary-dark uppercase tracking-wider mt-1">
                        Booked
                      </span>
                    </div>
                  </div>
                </div>
              </div>
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
