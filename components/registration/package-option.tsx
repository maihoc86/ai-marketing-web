"use client";

import { User, Store } from "lucide-react";
import type { PackageType } from "@/types/registration";

interface PackageOptionProps {
  id: PackageType;
  selected: PackageType;
  onSelect: (id: PackageType) => void;
}

const packageConfig = {
  professional: {
    icon: User,
    title: "Professional",
    subtitle: "For Individuals",
    description:
      "Free full-feature experience for 1 month. Perfect for solo artisans.",
  },
  business: {
    icon: Store,
    title: "Business",
    subtitle: "For Organizations",
    description:
      "Custom solution with admin controls. Ideal for salons and studios.",
  },
};

export function PackageOption({ id, selected, onSelect }: PackageOptionProps) {
  if (id === "") return null;

  const config = packageConfig[id];
  const Icon = config.icon;
  const isSelected = selected === id;

  return (
    <label className="cursor-pointer group relative">
      <input
        type="radio"
        name="account_type"
        checked={isSelected}
        onChange={() => onSelect(id)}
        className="peer sr-only"
      />
      <div
        className={`h-full border p-8 transition-all duration-300 hover:border-primary/60 hover:shadow-lg bg-white flex flex-col rounded-sm ${
          isSelected
            ? "bg-primary/[0.03] border-primary ring-1 ring-primary/50"
            : "border-gray-200"
        }`}
      >
        <div className="flex justify-between items-start mb-5">
          <Icon className="w-8 h-8 text-primary-dark" />
          <div
            className={`size-5 rounded-full border flex items-center justify-center transition-colors ${
              isSelected ? "bg-primary border-primary" : "border-gray-300"
            }`}
          >
            <div
              className={`size-2 bg-white rounded-full transition-opacity ${
                isSelected ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>
        </div>
        <h4 className="text-lg font-bold text-text-main tracking-tight mb-1">
          {config.title}
        </h4>
        <p className="text-[10px] text-primary-dark font-extrabold uppercase tracking-widest mb-4">
          {config.subtitle}
        </p>
        <p className="text-sm text-text-muted leading-relaxed font-medium">
          {config.description}
        </p>
      </div>
    </label>
  );
}
