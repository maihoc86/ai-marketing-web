"use client";

import type React from "react";
import { CheckCircle, AlertCircle } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import type {
  RegistrationFormData,
  RegistrationFormErrors,
} from "@/hooks/use-registration-form";

export function ContactFields({
  formData,
  errors,
  onInputChange,
  jobPositions,
  t,
}: {
  formData: RegistrationFormData;
  errors: RegistrationFormErrors;
  onInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => void;
  jobPositions: Array<{ id: string; labelKey: string }>;
  t: (k: string) => string;
}) {
  const { locale } = useI18n();

  const countryCode = locale === "vi" ? "+84" : "+1";
  const phonePlaceholder =
    countryCode === "+1" ? "(555) 555-5555" : "0123 456 789";
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="full_name"
            className="text-sm font-semibold text-gray-900"
          >
            {t("registration.form.contact.fullName")}{" "}
            <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <input
              id="full_name"
              name="full_name"
              type="text"
              value={formData.full_name}
              onChange={onInputChange}
              placeholder={t("registration.form.contact.fullNamePlaceholder")}
              className={`w-full h-12 px-4 pr-10 rounded-lg border focus:ring-2 focus:ring-[#22b5f8] focus:border-[#22b5f8] outline-none transition-all ${errors.full_name ? "border-red-500" : "border-gray-200"}`}
            />
            {formData.full_name && !errors.full_name && (
              <CheckCircle className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-green-500" />
            )}
          </div>
          {errors.full_name && (
            <p
              role="alert"
              className="text-sm text-red-600 flex items-center gap-1"
            >
              <AlertCircle className="w-4 h-4" aria-hidden="true" />
              {errors.full_name}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="email"
            className="text-sm font-semibold text-gray-900"
          >
            {t("registration.form.contact.email")}{" "}
            <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={onInputChange}
            placeholder={t("registration.form.contact.emailPlaceholder")}
            className={`w-full h-12 px-4 rounded-lg border focus:ring-2 focus:ring-[#22b5f8] focus:border-[#22b5f8] outline-none transition-all ${errors.email ? "border-red-500" : "border-gray-200"}`}
          />
          {errors.email && (
            <p
              role="alert"
              className="text-sm text-red-600 flex items-center gap-1"
            >
              <AlertCircle className="w-4 h-4" aria-hidden="true" />
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="phone_number"
            className="text-sm font-semibold text-gray-900"
          >
            {t("registration.form.contact.phone")}{" "}
            <span className="text-red-500">*</span>
          </label>
          <div className="flex">
            <span className="inline-flex items-center px-3 rounded-l-lg border border-r-0 border-gray-200 bg-gray-50 text-gray-500 text-sm font-medium">
              {countryCode}
            </span>
            <input
              id="phone_number"
              name="phone_number"
              type="tel"
              value={formData.phone_number}
              onChange={onInputChange}
              placeholder={phonePlaceholder}
              className={`w-full h-12 px-4 rounded-r-lg border focus:ring-2 focus:ring-[#22b5f8] focus:border-[#22b5f8] outline-none transition-all ${errors.phone_number ? "border-red-500" : "border-gray-200"}`}
            />
          </div>
          {errors.phone_number && (
            <p
              role="alert"
              className="text-sm text-red-600 flex items-center gap-1"
            >
              <AlertCircle className="w-4 h-4" aria-hidden="true" />
              {errors.phone_number}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="job_position"
            className="text-sm font-semibold text-gray-900"
          >
            {t("registration.form.contact.jobPosition")}{" "}
            <span className="text-red-500">*</span>
          </label>
          <select
            id="job_position"
            name="job_position"
            value={formData.job_position}
            onChange={onInputChange}
            className={`w-full h-12 px-4 rounded-lg border focus:ring-2 focus:ring-[#22b5f8] focus:border-[#22b5f8] outline-none transition-all ${errors.job_position ? "border-red-500" : "border-gray-200"} ${!formData.job_position ? "text-gray-400" : "text-gray-900"}`}
          >
            {jobPositions.map((position) => (
              <option
                key={position.id}
                value={position.id}
                disabled={position.id === ""}
              >
                {t(position.labelKey)}
              </option>
            ))}
          </select>
          {errors.job_position && (
            <p
              role="alert"
              className="text-sm text-red-600 flex items-center gap-1"
            >
              <AlertCircle className="w-4 h-4" aria-hidden="true" />
              {errors.job_position}
            </p>
          )}
        </div>
      </div>
    </>
  );
}
