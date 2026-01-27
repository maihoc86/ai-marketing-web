"use client";

import { memo, useState, useEffect } from "react";
import { Label } from "@/components/ui/label";
import { useI18n } from "@/lib/i18n";
import { fetchActivityFields, type ActivityField } from "@/lib/graphql-client";

interface BusinessTypeSelectorProps {
  value: "enterprise" | "household" | "other";
  onChange: (value: "enterprise" | "household" | "other") => void;
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
    const [activityFields, setActivityFields] = useState<ActivityField[]>([]);
    const [isLoadingFields, setIsLoadingFields] = useState(true);

    useEffect(() => {
      const loadActivityFields = async () => {
        setIsLoadingFields(true);
        const fields = await fetchActivityFields(locale);
        setActivityFields(fields);
        setIsLoadingFields(false);
      };

      loadActivityFields();
    }, [locale]);

    if (isLoadingFields) {
      return (
        <div className={`space-y-2 ${className}`}>
          <Label className="text-sm font-medium text-gray-900">
            {t("registration.form.company.type")}
          </Label>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <div className="animate-spin rounded-full h-4 w-4 border-2 border-gray-300 border-t-[#22b5f8]" />
            <span>{t("common.loading")}</span>
          </div>
        </div>
      );
    }

    return (
      <div className={`space-y-2 ${className}`}>
        <Label className="text-sm font-medium text-gray-900">
          {t("registration.form.company.type")}
        </Label>
        <div className="flex flex-wrap items-center gap-4 sm:gap-6">
          {activityFields.map((field) => (
            <label
              key={field.id}
              className="flex items-center gap-2 cursor-pointer"
            >
              <input
                type="radio"
                name="business_type"
                value={field.id}
                checked={value === field.id}
                onChange={(e) =>
                  onChange(
                    e.target.value as "enterprise" | "household" | "other",
                  )
                }
                disabled={disabled}
                className="w-4 h-4 text-[#22b5f8] border-gray-300 focus:ring-[#22b5f8] accent-[#22b5f8]"
              />
              <span className="text-gray-700 text-sm">{field.name}</span>
            </label>
          ))}
        </div>
      </div>
    );
  },
);

BusinessTypeSelector.displayName = "BusinessTypeSelector";
