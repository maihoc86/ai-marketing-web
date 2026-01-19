"use client"

import { memo } from "react"
import { Label } from "@/components/ui/label"

interface BusinessTypeSelectorProps {
  value: "enterprise" | "household"
  onChange: (value: "enterprise" | "household") => void
  disabled?: boolean
  className?: string
}

export const BusinessTypeSelector = memo(({
  value,
  onChange,
  disabled = false,
  className = "",
}: BusinessTypeSelectorProps) => {
  return (
    <div className={`space-y-2 ${className}`}>
      <Label className="text-sm font-medium text-gray-900">Loại hình kinh doanh</Label>
      <div className="flex flex-wrap items-center gap-4 sm:gap-6">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="business_type"
            value="enterprise"
            checked={value === "enterprise"}
            onChange={(e) => onChange(e.target.value as "enterprise" | "household")}
            disabled={disabled}
            className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
          />
          <span className="text-gray-700 text-sm">Doanh nghiệp</span>
        </label>
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="business_type"
            value="household"
            checked={value === "household"}
            onChange={(e) => onChange(e.target.value as "enterprise" | "household")}
            disabled={disabled}
            className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
          />
          <span className="text-gray-700 text-sm">Hộ kinh doanh</span>
        </label>
      </div>
    </div>
  )
})

BusinessTypeSelector.displayName = "BusinessTypeSelector"
