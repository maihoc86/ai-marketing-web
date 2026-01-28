"use client";

import { PackageType } from "@/hooks/use-registration-form";
import { Check } from "lucide-react";

type PackageOptionProps = {
  id: PackageType;
  selected: PackageType;
  onSelect: (id: PackageType) => void;
  titleKey: string;
  title: string;
  descKey: string;
  primary?: boolean;
  t: (k: string) => string;
};

export function PackageOption({
  id,
  selected,
  onSelect,
  titleKey,
  title,
  descKey,
  primary,
  t,
}: PackageOptionProps) {
  const isSelected = selected === id;
  return (
    <label
      className={`relative flex flex-col p-4 border-2 rounded-xl cursor-pointer transition-all ${isSelected ? "border-[#22b5f8] bg-[#22b5f8]/10" : "border-gray-200 hover:border-[#22b5f8]/50"}`}
    >
      <input
        type="radio"
        name="package"
        value={id}
        checked={isSelected}
        onChange={() => onSelect(id)}
        className="sr-only"
      />
      <div className="flex justify-between items-start mb-2">
        <span
          className={`text-sm font-bold uppercase ${primary ? "text-primary" : ""}`}
        >
          {t(titleKey)}
        </span>
        {isSelected && (
          <Check className="w-5 h-5 text-[#22b5f8]" aria-hidden="true" />
        )}
      </div>
      <p className="text-lg font-bold text-gray-900 mb-1">{t(title)}</p>
      <p className="text-xs text-gray-500">{t(descKey)}</p>
    </label>
  );
}
