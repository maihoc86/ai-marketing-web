"use client";

import type React from "react";
import { BusinessTypeSelector } from "@/components/forms/business-type-selector";
import type {
  RegistrationFormData,
  RegistrationFormErrors,
} from "@/hooks/use-registration-form";

export function BusinessFields({
  formData,
  errors,
  onInputChange,
  onBusinessTypeChange,
  t,
}: {
  formData: RegistrationFormData;
  errors: RegistrationFormErrors;
  onInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => void;
  onBusinessTypeChange: (type: string) => void;
  activityFields: Array<{ id: string; name: string }>;
  isLoadingFields: boolean;
  t: (k: string) => string;
}) {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="company_name"
            className="text-sm font-semibold text-gray-900"
          >
            {t("registration.form.company.name")}{" "}
            {/* <span className="text-red-500">*</span> */}
          </label>
          <input
            id="company_name"
            name="company_name"
            type="text"
            value={formData.company_name}
            onChange={onInputChange}
            placeholder={t("registration.form.company.namePlaceholder")}
            className={`w-full h-12 px-4 rounded-lg border focus:ring-2 focus:ring-[#22b5f8] focus:border-[#22b5f8] outline-none transition-all ${errors.company_name ? "border-red-500" : "border-gray-200"}`}
          />
          {/* {errors.company_name && (
            <p
              role="alert"
              className="text-sm text-red-600 flex items-center gap-1"
            >
              <AlertCircle className="w-4 h-4" aria-hidden="true" />
              {errors.company_name}
            </p>
          )} */}
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="tax_code"
            className="text-sm font-semibold text-gray-900"
          >
            {t("registration.form.company.taxCode")}
          </label>
          <input
            id="tax_code"
            name="tax_code"
            type="text"
            value={formData.tax_code}
            onChange={onInputChange}
            placeholder={t("registration.form.company.taxCodePlaceholder")}
            className="w-full h-12 px-4 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#22b5f8] focus:border-[#22b5f8] outline-none transition-all"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <BusinessTypeSelector
          value={formData.business_type}
          onChange={onBusinessTypeChange}
          disabled={false}
          className="w-full"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="address"
          className="text-sm font-semibold text-gray-900"
        >
          {t("registration.form.company.address")}
        </label>
        <input
          id="address"
          name="address"
          type="text"
          value={formData.address}
          onChange={onInputChange}
          placeholder={t("registration.form.company.addressPlaceholder")}
          className="w-full h-12 px-4 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#22b5f8] focus:border-[#22b5f8] outline-none transition-all"
        />
      </div>

      <div className="border-t border-gray-200 mt-2 mb-4" />
    </>
  );
}
