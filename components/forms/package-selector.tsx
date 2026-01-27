"use client";

import { memo } from "react";
import { Check, Sparkles } from "lucide-react";
import { Label } from "@/components/ui/label";
import { packageOptions } from "./types";
import { useI18n } from "@/lib/i18n";

interface PackageSelectorProps {
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  error?: string;
  className?: string;
}

export const PackageSelector = memo(
  ({
    value,
    onChange,
    disabled = false,
    error,
    className = "",
  }: PackageSelectorProps) => {
    const { t } = useI18n();

    return (
      <div className={`space-y-3 ${className}`}>
        <Label className="text-sm font-medium text-gray-900">
          {t("form.packageSelector.label")}{" "}
          <span className="text-red-500" aria-label="required">
            *
          </span>
        </Label>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {packageOptions.map((pkg) => {
            const isSelected = value === pkg.id;
            const isPopular = pkg?.popular;

            return (
              <button
                key={pkg.id}
                type="button"
                onClick={() => !disabled && onChange(pkg.id)}
                disabled={disabled}
                className={`
                relative p-4 rounded-xl border-2 transition-all duration-200 text-left
                ${
                  isSelected
                    ? "border-[#22b5f8] bg-[#22b5f8]/5 shadow-md"
                    : "border-gray-200 hover:border-[#22b5f8]/50 hover:bg-gray-50"
                }
                ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
              `}
              >
                {/* Popular badge */}
                {isPopular && (
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-linear-to-r from-amber-400 to-orange-400 text-white shadow-sm">
                      <Sparkles className="w-3 h-3" aria-hidden="true" />
                      Phổ biến
                    </span>
                  </div>
                )}

                {/* Selected indicator */}
                {isSelected && (
                  <div className="absolute top-3 right-3" aria-hidden="true">
                    <div className="w-5 h-5 rounded-full bg-[#22b5f8] flex items-center justify-center">
                      <Check className="w-3 h-3 text-white" strokeWidth={3} />
                    </div>
                  </div>
                )}

                <div className="pr-6">
                  <div
                    className={`font-bold text-base mb-1 ${isSelected ? "text-[#008bff]" : "text-gray-900"}`}
                  >
                    {pkg.label}
                  </div>
                  <div
                    className={`text-sm ${isSelected ? "text-[#22b5f8]" : "text-gray-600"}`}
                  >
                    {pkg.price}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {error && (
          <p className="text-sm text-red-600 flex items-center gap-1.5">
            {error}
          </p>
        )}
      </div>
    );
  },
);

PackageSelector.displayName = "PackageSelector";
