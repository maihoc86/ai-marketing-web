"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { LanguageSelector } from "@/components/language-selector"
import { useI18n } from "@/lib/i18n"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { t } = useI18n()

  const navLinks = [
    { href: "/#features", label: t("nav.features") },
    { href: "/#pricing", label: t("nav.pricing") },
    { href: "/ve-chung-toi", label: t("nav.about") },
    { href: "/#faq", label: t("nav.faq") },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 pt-3 sm:pt-4">
      <div className="mx-auto max-w-6xl">
        <nav
          className={cn(
            "flex items-center justify-between",
            "bg-white/95 backdrop-blur-md",
            "border border-gray-200/70",
            "rounded-full",
            "px-4 sm:px-6 py-2.5",
            "h-16 sm:h-[68px]",
            "transition-all duration-300 ease-out",
            isScrolled
              ? "shadow-[0_8px_30px_rgba(0,0,0,0.08)] border-gray-200/90"
              : "shadow-[0_2px_12px_rgba(0,0,0,0.04)]",
          )}
          aria-label="Main navigation"
        >
          {/* Logo - LEFT */}
          <Link
            href="/"
            className="flex items-center flex-shrink-0 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-lg"
            aria-label="AI Marketing OS - Home"
          >
            <Image
              src="https://tienphongcds.com/_next/image?url=https%3A%2F%2Fmedia.newweb.vn%2Ffile%2FdoMFbzZ4q&w=256&q=75"
              alt="DXAI Logo"
              width={120}
              height={32}
              className="h-8 w-auto"
              unoptimized
              priority
            />
          </Link>

          {/* Navigation Links - CENTER */}
          <ul className="hidden lg:flex items-center justify-center gap-1 xl:gap-2" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "relative px-4 py-2 text-[15px] font-medium text-gray-600",
                    "hover:text-gray-900 transition-colors duration-200",
                    "rounded-full hover:bg-gray-50",
                    "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Actions - RIGHT */}
          <div className="hidden lg:flex items-center gap-2">
            <LanguageSelector variant="pill" />

            {/* Login link */}
            <a
              href="https://admin.dsp.one"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "text-[15px] font-medium text-gray-600 hover:text-gray-900",
                "px-4 py-2 rounded-full",
                "hover:bg-gray-50 transition-all duration-200",
                "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
              )}
              aria-label={t("nav.login")}
            >
              {t("nav.login")}
            </a>

            <Button
              size="sm"
              className={cn(
                "bg-blue-600 hover:bg-blue-700 text-white",
                "text-[15px] font-semibold",
                "px-5 py-2.5 h-11",
                "rounded-full",
                "shadow-sm hover:shadow-lg hover:shadow-blue-500/20",
                "transition-all duration-200",
                "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
              )}
              asChild
            >
              <Link href="/dang-ky" className="flex items-center gap-2" aria-label={t("nav.trialFree")}>
                <Sparkles className="w-4 h-4" aria-hidden="true" />
                <span>{t("nav.trialFree")}</span>
              </Link>
            </Button>
          </div>

          {/* Mobile: CTA + Hamburger */}
          <div className="flex lg:hidden items-center gap-2">
            <Button
              size="sm"
              className={cn(
                "bg-blue-600 hover:bg-blue-700 text-white",
                "text-[13px] sm:text-[14px] font-semibold",
                "px-3 sm:px-4 py-2 h-10",
                "rounded-full",
                "shadow-sm",
                "min-h-[44px] min-w-[44px] touch-manipulation",
              )}
              asChild
            >
              <Link href="/dang-ky" aria-label={t("nav.trialFree")}>
                <Sparkles className="w-4 h-4 sm:hidden" aria-hidden="true" />
                <span className="hidden sm:inline">{t("nav.trial")}</span>
              </Link>
            </Button>

            {/* Hamburger button */}
            <button
              className={cn(
                "p-2.5 text-gray-600 hover:text-gray-900",
                "hover:bg-gray-100 rounded-full",
                "transition-colors duration-200",
                "min-h-[44px] min-w-[44px]",
                "flex items-center justify-center touch-manipulation",
                "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
              )}
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {isOpen ? <X className="w-5 h-5" aria-hidden="true" /> : <Menu className="w-5 h-5" aria-hidden="true" />}
            </button>
          </div>
        </nav>

        <div
          id="mobile-menu"
          className={cn(
            "lg:hidden mt-2",
            "bg-white border border-gray-200/70",
            "rounded-2xl shadow-xl",
            "transition-all duration-300 ease-out overflow-hidden",
            isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 pointer-events-none",
          )}
          aria-hidden={!isOpen}
        >
          <nav className="px-5 py-4" aria-label="Mobile navigation">
            {/* Nav Links */}
            <ul className="space-y-1" role="list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "block py-3 px-3 rounded-xl",
                      "text-[15px] font-medium text-gray-700",
                      "hover:text-blue-600 hover:bg-blue-50",
                      "transition-colors duration-200",
                      "min-h-[48px] flex items-center touch-manipulation",
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Divider */}
            <div className="my-3 border-t border-gray-100" />

            {/* Language Selector Row */}
            <div className="flex items-center justify-between px-3 py-2">
              <span className="text-[14px] text-gray-500 font-medium">Language</span>
              <LanguageSelector variant="pill" />
            </div>

            {/* Divider */}
            <div className="my-3 border-t border-gray-100" />

            {/* Actions */}
            <div className="space-y-2 pt-1">
              <a
                href="https://admin.dsp.one"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "block py-3 text-center",
                  "text-[15px] font-medium text-gray-700",
                  "bg-gray-100 hover:bg-gray-200 rounded-xl",
                  "transition-colors duration-200",
                  "min-h-[48px] flex items-center justify-center touch-manipulation",
                )}
                onClick={() => setIsOpen(false)}
                aria-label={t("nav.login")}
              >
                {t("nav.login")}
              </a>

              <Button
                className={cn(
                  "w-full h-12 rounded-xl",
                  "bg-blue-600 hover:bg-blue-700 text-white",
                  "text-[15px] font-semibold",
                  "min-h-[48px] touch-manipulation",
                )}
                asChild
              >
                <Link
                  href="/dang-ky"
                  className="flex items-center justify-center gap-2"
                  onClick={() => setIsOpen(false)}
                >
                  <Sparkles className="w-4 h-4" aria-hidden="true" />
                  <span>{t("nav.trialFree")}</span>
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
