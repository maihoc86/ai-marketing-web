"use client";

import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-panel transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <img src="/logo.png" alt="Uniksmart" className="w-39" />
        </Link>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center gap-7">
          <Link
            href="#photobooth"
            className="text-text-muted hover:text-primary text-[10px] font-bold tracking-widest transition-colors"
          >
            PHOTOBOOTH
          </Link>
          <Link
            href="#why-uniksmart"
            className="text-text-muted hover:text-primary text-[10px] font-bold tracking-widest transition-colors"
          >
            WHY US
          </Link>
          <Link
            href="#process"
            className="text-text-muted hover:text-primary text-[10px] font-bold tracking-widest transition-colors"
          >
            PROCESS
          </Link>
          <Link
            href="#pricing"
            className="text-text-muted hover:text-primary text-[10px] font-bold tracking-widest transition-colors"
          >
            PRICING
          </Link>
        </nav>

        {/* CTA Buttons */}
        <div className="flex items-center gap-4">
          <a
            href={
              process.env.NEXT_PUBLIC_AI_DSP_URL ||
              "https://admin.dsp.one/login"
            }
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:block text-text-muted text-[10px] font-bold tracking-widest hover:text-primary transition-colors"
          >
            LOGIN
          </a>
          <Link
            href="/trial"
            className="bg-primary hover:bg-primary-dark text-white text-[10px] font-bold py-2 px-6 transition-all shadow-md hover:shadow-lg tracking-widest rounded-md"
          >
            FREE TRIAL
          </Link>
        </div>
      </div>
    </header>
  );
}
