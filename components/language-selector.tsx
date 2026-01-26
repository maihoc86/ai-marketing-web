"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { useI18n, type Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const languages: {
  code: Locale;
  label: string;
  flag: string;
  shortLabel: string;
}[] = [
  { code: "en", label: "English", flag: "🇺🇸", shortLabel: "EN" },
  { code: "vi", label: "Tiếng Việt", flag: "🇻🇳", shortLabel: "VI" },
];

interface LanguageSelectorProps {
  className?: string;
  variant?: "default" | "compact" | "pill";
}

export function LanguageSelector({
  className,
  variant = "default",
}: LanguageSelectorProps) {
  const { locale, setLocale } = useI18n();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLang = languages.find((l) => l.code === locale) || languages[0];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close on escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  const handleSelect = (code: Locale) => {
    setLocale(code);
    setIsOpen(false);
  };

  return (
    <div ref={dropdownRef} className={cn("relative", className)}>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "flex items-center gap-1.5 transition-all duration-200",
          "focus:outline-none focus:ring-2 focus:ring-[#22b5f8] focus:ring-offset-2 focus:ring-offset-white",
          variant === "pill" && [
            "px-3 py-2 rounded-full",
            "bg-[#f5f5f5] hover:bg-[#e0e0e0]",
            "text-[14px] font-medium text-[#1c1c1c]",
          ],
          variant === "compact" && [
            "px-2 py-1.5 rounded-full",
            "text-sm text-[#1c1c1c] hover:text-[#ff7900] hover:bg-[#f5f5f5]",
          ],
          variant === "default" && [
            "px-3 py-2 rounded-lg",
            "text-sm font-medium text-[#1c1c1c] hover:text-[#ff7900]",
            "bg-[#f5f5f5] hover:bg-[#e0e0e0] border border-[#e0e0e0]",
          ],
        )}
        aria-label="Select language"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <span className="text-base leading-none" aria-hidden="true">
          {currentLang.flag}
        </span>
        <span>{currentLang.shortLabel}</span>
        <ChevronDown
          className={cn(
            "w-3.5 h-3.5 text-[#666666] transition-transform duration-200",
            isOpen && "rotate-180",
          )}
          aria-hidden="true"
        />
      </button>

      {/* Dropdown Menu */}
      <div
        className={cn(
          "absolute right-0 mt-2 w-40",
          "rounded-xl bg-white border border-gray-200",
          "shadow-lg shadow-gray-200/50",
          "transition-all duration-200 origin-top-right z-50",
          isOpen
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-95 -translate-y-2 pointer-events-none",
        )}
        role="listbox"
        aria-label="Available languages"
      >
        <div className="p-1.5 space-y-0.5">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleSelect(lang.code)}
              className={cn(
                "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg",
                "text-[14px] transition-colors duration-150",
                "focus:outline-none focus:ring-2 focus:ring-[#22b5f8] focus:ring-inset",
                locale === lang.code
                  ? "bg-[#22b5f8]/10 text-[#008bff] font-medium"
                  : "text-gray-700 hover:bg-gray-50",
              )}
              role="option"
              aria-selected={locale === lang.code}
            >
              <span className="text-lg leading-none" aria-hidden="true">
                {lang.flag}
              </span>
              <span className="flex-1 text-left whitespace-nowrap">
                {lang.label}
              </span>
              {locale === lang.code && (
                <svg
                  className="w-4 h-4 text-[#22b5f8]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
