"use client";

import { ChevronDown } from "lucide-react";
import type {
  RegistrationFormData,
  RegistrationFormErrors,
} from "@/types/registration";
import { businessTypes } from "@/types/registration";

interface BusinessFieldsProps {
  formData: RegistrationFormData;
  errors: RegistrationFormErrors;
  onInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => void;
}

export function BusinessFields({
  formData,
  errors,
  onInputChange,
}: BusinessFieldsProps) {
  const isBusinessPackage = formData.selected_package === "business";

  return (
    <section className="mb-14">
      <h3 className="text-sm font-extrabold uppercase tracking-widest text-text-main mb-8 flex items-center gap-4">
        <span className="w-8 h-0.5 bg-primary" /> Business Details
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8">
        <div className="md:col-span-2">
          <label className="block text-xs font-bold uppercase tracking-widest text-text-muted mb-2">
            Company / Organization Name
            {isBusinessPackage && <span className="text-red-500">*</span>}
          </label>
          <input
            type="text"
            name="company_name"
            value={formData.company_name}
            onChange={onInputChange}
            placeholder="e.g. L'Artisan Studio"
            required={isBusinessPackage}
            className={`w-full bg-white border focus:border-primary focus:ring-1 focus:ring-primary/50 placeholder-gray-400 text-text-main py-3.5 px-4 outline-none transition-all text-sm rounded-sm font-medium ${
              errors.company_name ? "border-red-500" : "border-gray-200"
            }`}
          />
          {errors.company_name && (
            <p className="mt-1 text-xs text-red-500">{errors.company_name}</p>
          )}
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-widest text-text-muted mb-2">
            TAX ID
            {isBusinessPackage && <span className="text-red-500">*</span>}
          </label>
          <input
            type="text"
            name="tax_id"
            value={formData.tax_id}
            onChange={onInputChange}
            placeholder="Tax Identification Number"
            required={isBusinessPackage}
            className={`w-full bg-white border focus:border-primary focus:ring-1 focus:ring-primary/50 placeholder-gray-400 text-text-main py-3.5 px-4 outline-none transition-all text-sm rounded-sm font-medium ${
              errors.tax_id ? "border-red-500" : "border-gray-200"
            }`}
          />
          {errors.tax_id && (
            <p className="mt-1 text-xs text-red-500">{errors.tax_id}</p>
          )}
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-widest text-text-muted mb-2">
            Business Type
            {isBusinessPackage && <span className="text-red-500">*</span>}
          </label>
          <div className="relative">
            <select
              name="business_type"
              value={formData.business_type}
              onChange={onInputChange}
              required={isBusinessPackage}
              className="w-full bg-white border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary/50 text-text-main py-3.5 px-4 outline-none transition-all text-sm rounded-sm font-medium appearance-none cursor-pointer pr-10"
            >
              {businessTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-primary pointer-events-none w-5 h-5" />
          </div>
        </div>
        <div className="md:col-span-2">
          <label className="block text-xs font-bold uppercase tracking-widest text-text-muted mb-2">
            Office Address
            {isBusinessPackage && <span className="text-red-500">*</span>}
          </label>
          <input
            type="text"
            name="office_address"
            value={formData.office_address}
            onChange={onInputChange}
            placeholder="Full business address"
            required={isBusinessPackage}
            className={`w-full bg-white border focus:border-primary focus:ring-1 focus:ring-primary/50 placeholder-gray-400 text-text-main py-3.5 px-4 outline-none transition-all text-sm rounded-sm font-medium ${
              errors.office_address ? "border-red-500" : "border-gray-200"
            }`}
          />
          {errors.office_address && (
            <p className="mt-1 text-xs text-red-500">{errors.office_address}</p>
          )}
        </div>
      </div>
    </section>
  );
}
