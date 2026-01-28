"use client";

import { memo } from "react";
import { Label } from "@/components/ui/label";
import { useI18n } from "@/lib/i18n";
import { useActivityFields } from "@/lib/queries/activity-fields";

interface BusinessTypeSelectorProps {
  value?: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  className?: string;
}

export const BusinessTypeSelector = memo(
  ({
    value,
    onChange,
    disabled = false,
    className = "",
  }: BusinessTypeSelectorProps) => {
    const { t, locale } = useI18n();
    const { data: activityFields = [], isLoading: isLoadingFields } =
      useActivityFields(locale);

    // if (isLoadingFields) {
    //   return (
    //     <div className={`space-y-2 ${className}`}>
    //       <Label className="text-sm font-medium text-gray-900">
    //         {t("registration.form.company.type")}
    //       </Label>
    //       <div className="flex items-center w-full justify-center gap-2 text-sm text-gray-500">
    //         <div className="animate-spin rounded-full size-4 border-2 border-gray-300 border-t-[#22b5f8]" />
    //         <span>{t("common.loading")}</span>
    //       </div>
    //     </div>
    //   );
    // }

    return (
      <div className={`space-y-2 ${className}`}>
        <Label className="text-sm font-medium text-gray-900">
          {t("registration.form.company.type")}
        </Label>
        <div>
          <select
            id="business_type"
            name="business_type"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            disabled={isLoadingFields || disabled}
            className={`w-full h-12 disabled:opacity-60 px-4 rounded-lg border focus:ring-2 focus:ring-[#22b5f8] focus:border-[#22b5f8] outline-none transition-all border-gray-200 ${!value ? "text-gray-400" : "text-gray-900"}`}
            defaultValue={"placeholder"}
          >
            <option value="placeholder" disabled>
              {t("registration.form.company.typePlaceholder")}
            </option>
            {activityFields.map((field) => (
              <option key={field.id} value={field.id}>
                {field.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    );
  },
);

BusinessTypeSelector.displayName = "BusinessTypeSelector";
