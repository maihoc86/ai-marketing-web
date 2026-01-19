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
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 pt-4">
      <div className="mx-auto max-w-7xl">
        <nav
          className={cn(
            "flex items-center justify-between",
            "bg-white/80 backdrop-blur-md",
            "border border-gray-200/50",
            "rounded-full",
            "px-6 sm:px-8 py-3",
            "h-14 sm:h-16",
            "transition-all duration-300 ease-out",
            isScrolled && "shadow-lg shadow-gray-900/5 bg-white/90",
          )}
          aria-label="Main navigation"
        >
          {/* Logo - LEFT */}
          <Link
            href="/"
            className="flex items-center flex-shrink-0 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-lg"
            aria-label="DXAI Marketing Platform - Home"
          >
            <Image
              src="https://tienphongcds.com/_next/image?url=https%3A%2F%2Fmedia.newweb.vn%2Ffile%2FdoMFbzZ4q&w=256&q=75"
              alt="DXAI Logo"
              width={110}
              height={30}
              className="h-7 w-auto"
              priority
            />
          </Link>

          {/* Navigation Links - CENTER (absolute centering) */}
          <div className="absolute left-1/2 -translate-x-1/2 hidden lg:block">
            <ul className="flex items-center gap-1" role="list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "relative px-4 py-2 text-[14px] font-medium text-gray-600",
                      "hover:text-gray-900 transition-colors duration-200",
                      "rounded-lg hover:bg-gray-50",
                      "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
                    )}
                  >
                    {link.label}
                  </Link>
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
                "text-[14px] font-medium text-gray-600 hover:text-gray-900",
                "px-4 py-2 rounded-lg",
                "hover:bg-gray-50 transition-colors duration-200",
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
                "text-[14px] font-semibold",
                "px-5 py-2 h-10",
                "rounded-lg",
                "shadow-sm hover:shadow-md",
                "transition-all duration-200",
                "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
              )}
              asChild
            >
              <Link href="/dang-ky" aria-label={t("nav.trialFree")}>
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
                "rounded-lg shadow-sm",
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
                "hover:bg-gray-50 rounded-lg",
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
            "lg:hidden mt-3",
            "bg-white/95 backdrop-blur-md",
            "border border-gray-200/50",
            "rounded-2xl shadow-lg shadow-gray-900/5",
            "transition-all duration-300 ease-out overflow-hidden",
            isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 pointer-events-none",
          )}
          aria-hidden={!isOpen}
        >
          <nav className="px-4 py-4" aria-label="Mobile navigation">
            {/* Nav Links */}
            <ul className="space-y-0.5" role="list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "block py-2.5 px-3 rounded-lg",
                      "text-[14px] font-medium text-gray-600",
                      "hover:text-gray-900 hover:bg-gray-50",
                      "transition-colors duration-200",
                      "min-h-[44px] flex items-center touch-manipulation",
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

            {/* Language Selector */}
            <div className="flex items-center justify-between px-3 py-2">
              <span className="text-[14px] text-gray-500 font-medium">Ngôn ngữ</span>
              <LanguageSelector variant="pill" />
            </div>

            {/* Divider */}
            <div className="my-3 border-t border-gray-100" />

            {/* Actions */}
            <div className="space-y-2">
              <a
                href="https://admin.dsp.one"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "block py-2.5 text-center",
                  "text-[14px] font-medium text-gray-600",
                  "bg-gray-50 hover:bg-gray-100 rounded-lg",
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
                  "w-full h-11 rounded-lg",
                  "bg-blue-600 hover:bg-blue-700 text-white",
                  "text-[14px] font-semibold",
                  "shadow-sm hover:shadow-md",
                  "min-h-[44px] touch-manipulation",
                )}
                asChild
              >
                <Link
                  href="/dang-ky"
                  className="flex items-center justify-center gap-2"
                  onClick={() => setIsOpen(false)}
                >
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
