"use client";

import { memo, type RefObject } from "react";
import { AlertCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useI18n } from "@/lib/i18n";
import {
  jobPositions,
  type RegistrationFormData,
  type RegistrationFormErrors,
} from "./types";

interface RegistrationFieldsProps {
  formData: RegistrationFormData;
  errors: RegistrationFormErrors;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => void;
  disabled?: boolean;
  firstInputRef?: RefObject<HTMLInputElement | null>;
  className?: string;
}

export const RegistrationFields = memo(
  ({
    formData,
    errors,
    onChange,
    disabled = false,
    firstInputRef,
    className = "",
  }: RegistrationFieldsProps) => {
    const { t } = useI18n();

    return (
      <div className={`space-y-4 ${className}`}>
        {/* Tax code & Company name */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <Label
              htmlFor="tax_code"
              className="text-sm font-medium text-gray-900"
            >
              {t("registration.form.company.taxCode")}
            </Label>
            <Input
              ref={firstInputRef}
              id="tax_code"
              name="tax_code"
              value={formData.tax_code}
              onChange={onChange}
              disabled={disabled}
              placeholder={t("registration.form.company.taxCodePlaceholder")}
              className="h-11 rounded-xl border-gray-200 focus:border-[#22b5f8] focus:ring-[#22b5f8]/20"
            />
            {errors.tax_code && (
              <p
                role="alert"
                className="text-sm text-red-600 flex items-center gap-1.5"
              >
                <AlertCircle className="w-3.5 h-3.5" aria-hidden="true" />
                {errors.tax_code}
              </p>
            )}
          </div>

          <div className="space-y-1.5">
            <Label
              htmlFor="company_name"
              className="text-sm font-medium text-gray-900"
            >
              {t("registration.form.company.name")}
            </Label>
            <Input
              id="company_name"
              name="company_name"
              value={formData.company_name}
              onChange={onChange}
              disabled={disabled}
              placeholder={t("registration.form.company.namePlaceholder")}
              className="h-11 rounded-xl border-gray-200 focus:border-[#22b5f8] focus:ring-[#22b5f8]/20"
            />
            {errors.company_name && (
              <p
                role="alert"
                className="text-sm text-red-600 flex items-center gap-1.5"
              >
                <AlertCircle className="w-3.5 h-3.5" aria-hidden="true" />
                {errors.company_name}
              </p>
            )}
          </div>
        </div>

        {/* Name fields */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <Label
              htmlFor="first_name"
              className="text-sm font-medium text-gray-900"
            >
              {t("registration.form.contact.firstName")}{" "}
              <span
                className="text-red-500"
                aria-label={t("registration.form.required")}
              >
                *
              </span>
            </Label>
            <Input
              id="first_name"
              name="first_name"
              value={formData.first_name}
              onChange={onChange}
              disabled={disabled}
              placeholder={t("registration.form.contact.firstNamePlaceholder")}
              className={`h-11 rounded-xl ${
                errors.first_name ? "border-red-500" : "border-gray-200"
              } focus:border-[#22b5f8] focus:ring-[#22b5f8]/20`}
              aria-invalid={!!errors.first_name}
              aria-describedby={
                errors.first_name ? "first_name-error" : undefined
              }
            />
            {errors.first_name && (
              <p
                id="first_name-error"
                role="alert"
                className="text-sm text-red-600 flex items-center gap-1.5"
              >
                <AlertCircle className="w-3.5 h-3.5" aria-hidden="true" />
                {errors.first_name}
              </p>
            )}
          </div>

          <div className="space-y-1.5">
            <Label
              htmlFor="last_name"
              className="text-sm font-medium text-gray-900"
            >
              {t("registration.form.contact.lastName")}{" "}
              <span
                className="text-red-500"
                aria-label={t("registration.form.required")}
              >
                *
              </span>
            </Label>
            <Input
              id="last_name"
              name="last_name"
              value={formData.last_name}
              onChange={onChange}
              disabled={disabled}
              placeholder={t("registration.form.contact.lastNamePlaceholder")}
              className={`h-11 rounded-xl ${
                errors.last_name ? "border-red-500" : "border-gray-200"
              } focus:border-[#22b5f8] focus:ring-[#22b5f8]/20`}
              aria-invalid={!!errors.last_name}
              aria-describedby={
                errors.last_name ? "last_name-error" : undefined
              }
            />
            {errors.last_name && (
              <p
                id="last_name-error"
                role="alert"
                className="text-sm text-red-600 flex items-center gap-1.5"
              >
                <AlertCircle className="w-3.5 h-3.5" aria-hidden="true" />
                {errors.last_name}
              </p>
            )}
          </div>
        </div>

        {/* Email field */}
        <div className="space-y-1.5">
          <Label htmlFor="email" className="text-sm font-medium text-gray-900">
            {t("registration.form.contact.email")}{" "}
            <span
              className="text-red-500"
              aria-label={t("registration.form.required")}
            >
              *
            </span>
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={onChange}
            disabled={disabled}
            placeholder={t("registration.form.contact.emailPlaceholder")}
            className={`h-11 rounded-xl ${
              errors.email ? "border-red-500" : "border-gray-200"
            } focus:border-[#22b5f8] focus:ring-[#22b5f8]/20`}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && (
            <p
              id="email-error"
              role="alert"
              className="text-sm text-red-600 flex items-center gap-1.5"
            >
              <AlertCircle className="w-3.5 h-3.5" aria-hidden="true" />
              {errors.email}
            </p>
          )}
        </div>

        {/* Phone & Job Position */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <Label
              htmlFor="phone_number"
              className="text-sm font-medium text-gray-900"
            >
              {t("registration.form.contact.phone")}{" "}
              <span
                className="text-red-500"
                aria-label={t("registration.form.required")}
              >
                *
              </span>
            </Label>
            <Input
              id="phone_number"
              name="phone_number"
              type="tel"
              value={formData.phone_number}
              onChange={onChange}
              disabled={disabled}
              placeholder={t("registration.form.contact.phonePlaceholder")}
              className={`h-11 rounded-xl ${
                errors.phone_number ? "border-red-500" : "border-gray-200"
              } focus:border-[#22b5f8] focus:ring-[#22b5f8]/20`}
              aria-invalid={!!errors.phone_number}
              aria-describedby={
                errors.phone_number ? "phone_number-error" : undefined
              }
            />
            {errors.phone_number && (
              <p
                id="phone_number-error"
                role="alert"
                className="text-sm text-red-600 flex items-center gap-1.5"
              >
                <AlertCircle className="w-3.5 h-3.5" aria-hidden="true" />
                {errors.phone_number}
              </p>
            )}
          </div>

          <div className="space-y-1.5">
            <Label
              htmlFor="job_position"
              className="text-sm font-medium text-gray-900"
            >
              {t("registration.form.contact.jobPosition")}{" "}
              <span
                className="text-red-500"
                aria-label={t("registration.form.required")}
              >
                *
              </span>
            </Label>
            <select
              id="job_position"
              name="job_position"
              value={formData.job_position}
              onChange={onChange}
              disabled={disabled}
              className={`w-full h-11 rounded-xl px-3 border ${
                errors.job_position ? "border-red-500" : "border-gray-200"
              } focus:border-[#22b5f8] focus:ring-2 focus:ring-[#22b5f8]/20 focus:outline-none bg-white text-gray-900`}
              aria-invalid={!!errors.job_position}
              aria-describedby={
                errors.job_position ? "job_position-error" : undefined
              }
            >
              {jobPositions.map((position) => (
                <option key={position.id} value={position.id}>
                  {t(position.label)}
                </option>
              ))}
            </select>
            {errors.job_position && (
              <p
                id="job_position-error"
                role="alert"
                className="text-sm text-red-600 flex items-center gap-1.5"
              >
                <AlertCircle className="w-3.5 h-3.5" aria-hidden="true" />
                {errors.job_position}
              </p>
            )}
          </div>
        </div>

        {/* General error */}
        {errors.general && (
          <div
            className="rounded-xl bg-red-50 border border-red-200 p-4"
            role="alert"
          >
            <p className="text-sm text-red-800 flex items-center gap-2">
              <AlertCircle className="w-4 h-4" aria-hidden="true" />
              {errors.general}
            </p>
          </div>
        )}
      </div>
    );
  },
);

RegistrationFields.displayName = "RegistrationFields";
