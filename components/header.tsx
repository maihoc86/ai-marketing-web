"use client";

import Link from "next/link";

const Logo = () => (
  <svg
    fill="none"
    viewBox="0 0 48 48"
    xmlns="http://www.w3.org/2000/svg"
    className="size-9 text-primary"
  >
    <path
      d="M8.57829 8.57829C5.52816 11.6284 3.451 15.5145 2.60947 19.7452C1.76794 23.9758 2.19984 28.361 3.85056 32.3462C5.50128 36.3314 8.29667 39.7376 11.8832 42.134C15.4698 44.5305 19.6865 45.8096 24 45.8096C28.3135 45.8096 32.5302 44.5305 36.1168 42.134C39.7033 39.7375 42.4987 36.3314 44.1494 32.3462C45.8002 28.361 46.2321 23.9758 45.3905 19.7452C44.549 15.5145 42.4718 11.6284 39.4217 8.57829L24 24L8.57829 8.57829Z"
      fill="currentColor"
    />
  </svg>
);

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-panel transition-all duration-300">
      <div className="max-w-[1280px] mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Logo />
          <h2 className="text-text-main text-xl font-display font-bold tracking-tight uppercase">
            Uniksmart
          </h2>
        </Link>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center gap-10">
          <Link
            href="#photobooth"
            className="text-text-muted hover:text-primary text-xs font-bold tracking-widest transition-colors"
          >
            PHOTOBOOTH
          </Link>
          <Link
            href="#why-uniksmart"
            className="text-text-muted hover:text-primary text-xs font-bold tracking-widest transition-colors"
          >
            WHY US
          </Link>
          <Link
            href="#process"
            className="text-text-muted hover:text-primary text-xs font-bold tracking-widest transition-colors"
          >
            PROCESS
          </Link>
          <Link
            href="#pricing"
            className="text-text-muted hover:text-primary text-xs font-bold tracking-widest transition-colors"
          >
            PRICING
          </Link>
        </nav>

        {/* CTA Buttons */}
        <div className="flex items-center gap-6">
          <a
            href={
              process.env.NEXT_PUBLIC_AI_DSP_URL ||
              "https://admin.dsp.one/login"
            }
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:block text-text-muted text-xs font-bold tracking-widest hover:text-primary transition-colors"
          >
            LOGIN
          </a>
          <Link
            href="/trial"
            className="bg-primary hover:bg-primary-dark text-white text-xs font-bold py-3 px-8 transition-all shadow-md hover:shadow-lg tracking-widest rounded-md"
          >
            FREE TRIAL
          </Link>
        </div>
      </div>
    </header>
  );
}
