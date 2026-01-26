"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LanguageSelector } from "@/components/language-selector";
import { LocaleLink } from "@/components/locale-link";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useI18n();

  const navLinks = [
    { href: "/#features", label: t("nav.features") },
    { href: "/#pricing", label: t("nav.pricing") },
    { href: "/ve-chung-toi", label: t("nav.about") },
    { href: "/#faq", label: t("nav.faq") },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-4 ">
      <div className="container mx-auto">
        <nav
          className={cn(
            "flex items-center justify-between",
            "bg-white",
            "border border-[#e0e0e0]",
            "rounded-full",
            "px-6 sm:px-8 py-3",
            "h-14 sm:h-16",
            "transition-all duration-300 ease-out",
            isScrolled && "shadow-lg shadow-black/10",
          )}
          aria-label="Main navigation"
        >
          {/* Logo - LEFT */}
          <LocaleLink
            href="/"
            className="flex items-center shrink-0 focus:outline-none focus:ring-2 focus:ring-[#22b5f8] focus:ring-offset-2 focus:ring-offset-white rounded-lg"
            aria-label="UNIKSMART - Home"
          >
            <Image
              src="/logo.png"
              alt="UNIKSMART Logo"
              width={110}
              height={30}
              className="h-7 w-auto"
              priority
            />
          </LocaleLink>

          {/* Navigation Links - CENTER (absolute centering) */}
          <div className="absolute left-1/2 -translate-x-1/2 hidden lg:block">
            <ul className="flex items-center gap-1" role="list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <LocaleLink
                    href={link.href}
                    className={cn(
                      "relative px-4 py-2 text-[14px] font-medium text-[#1c1c1c]",
                      "hover:text-[#ff7900] transition-colors duration-200",
                      "rounded-lg hover:bg-[#f5f5f5]",
                      "focus:outline-none focus:ring-2 focus:ring-[#22b5f8] focus:ring-offset-2 focus:ring-offset-white",
                    )}
                  >
                    {link.label}
                  </LocaleLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Actions - RIGHT */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Language Selector */}
            <LanguageSelector variant="pill" />

            {/* Login link */}
            <a
              href="https://admin.dsp.one"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "text-[14px] font-medium text-[#1c1c1c] hover:text-[#ff7900]",
                "px-4 py-2 rounded-lg",
                "hover:bg-[#f5f5f5] transition-colors duration-200",
                "focus:outline-none focus:ring-2 focus:ring-[#22b5f8] focus:ring-offset-2 focus:ring-offset-white",
              )}
              aria-label={t("nav.login")}
            >
              {t("nav.login")}
            </a>

            <Button
              size="sm"
              className={cn(
                "bg-[#22b5f8] hover:bg-[#1a9fd8] text-white",
                "text-[14px] font-semibold",
                "px-5 py-2 h-10",
                "rounded-full",
                "shadow-sm hover:shadow-lg shadow-[#22b5f8]/30",
                "transition-all duration-200",
                "focus:outline-none focus:ring-2 focus:ring-[#1a9fd8] focus:ring-offset-2 focus:ring-offset-white",
              )}
              asChild
            >
              <LocaleLink href="/dang-ky" aria-label={t("nav.trialFree")}>
                <span>{t("nav.trialFree")}</span>
              </LocaleLink>
            </Button>
          </div>

          {/* Mobile: CTA + Hamburger */}
          <div className="flex lg:hidden items-center gap-2">
            <Button
              size="sm"
              className={cn(
                "bg-[#22b5f8] hover:bg-[#1a9fd8] text-white",
                "text-[13px] sm:text-[14px] font-semibold",
                "px-3 sm:px-4 py-2 h-10",
                "rounded-full shadow-sm shadow-[#ff7900]/30",
                "min-h-[44px] min-w-[44px] touch-manipulation",
              )}
              asChild
            >
              <LocaleLink href="/dang-ky" aria-label={t("nav.trialFree")}>
                <Sparkles className="w-4 h-4 sm:hidden" aria-hidden="true" />
                <span className="hidden sm:inline">{t("nav.trial")}</span>
              </LocaleLink>
            </Button>

            {/* Hamburger button */}
            <button
              className={cn(
                "p-2.5 text-[#1c1c1c] hover:text-[#1a9fd8]",
                "hover:bg-[#f5f5f5] rounded-lg",
                "transition-colors duration-200",
                "min-h-[44px] min-w-[44px]",
                "flex items-center justify-center touch-manipulation",
                "focus:outline-none focus:ring-2 focus:ring-[#22b5f8] focus:ring-offset-2 focus:ring-offset-white",
              )}
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {isOpen ? (
                <X className="w-5 h-5" aria-hidden="true" />
              ) : (
                <Menu className="w-5 h-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </nav>

        <div
          id="mobile-menu"
          className={cn(
            "lg:hidden mt-3",
            "bg-white/95 backdrop-blur-md",
            "border border-[#e0e0e0]",
            "rounded-2xl shadow-lg shadow-black/10",
            "transition-all duration-300 ease-out overflow-hidden",
            isOpen
              ? "max-h-[500px] opacity-100"
              : "max-h-0 opacity-0 pointer-events-none",
          )}
          aria-hidden={!isOpen}
        >
          <nav className="px-4 py-4" aria-label="Mobile navigation">
            {/* Nav Links */}
            <ul className="space-y-0.5" role="list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <LocaleLink
                    href={link.href}
                    className={cn(
                      "block py-2.5 px-3 rounded-lg",
                      "text-[14px] font-medium text-[#1c1c1c]",
                      "hover:text-[#ff7900] hover:bg-[#f5f5f5]",
                      "transition-colors duration-200",
                      "min-h-[44px] flex items-center touch-manipulation",
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </LocaleLink>
                </li>
              ))}
            </ul>

            {/* Divider */}
            <div className="my-3 border-t border-[#e0e0e0]" />

            {/* Language Selector */}
            <div className="flex items-center justify-between px-3 py-2">
              <span className="text-[14px] text-[#666666] font-medium">
                Ngôn ngữ
              </span>
              <LanguageSelector variant="pill" />
            </div>

            {/* Divider */}
            <div className="my-3 border-t border-[#e0e0e0]" />

            {/* Actions */}
            <div className="space-y-2">
              <a
                href="https://admin.dsp.one"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "block py-2.5 text-center",
                  "text-[14px] font-medium text-[#1c1c1c]",
                  "bg-[#f5f5f5] hover:bg-[#e0e0e0] rounded-lg",
                  "transition-colors duration-200",
                  "min-h-[44px] flex items-center justify-center touch-manipulation",
                )}
                onClick={() => setIsOpen(false)}
                aria-label={t("nav.login")}
              >
                {t("nav.login")}
              </a>

              <Button
                className={cn(
                  "w-full h-11 rounded-full",
                  "bg-[#ff7900] hover:bg-[#e56b00] text-white",
                  "text-[14px] font-semibold",
                  "shadow-sm hover:shadow-lg shadow-[#ff7900]/30",
                  "min-h-[44px] touch-manipulation",
                )}
                asChild
              >
                <LocaleLink
                  href="/dang-ky"
                  className="flex items-center justify-center gap-2"
                  onClick={() => setIsOpen(false)}
                >
                  <span>{t("nav.trialFree")}</span>
                </LocaleLink>
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
