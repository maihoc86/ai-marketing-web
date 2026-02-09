"use client";

import { Loader2, AlertCircle, CheckCircle } from "lucide-react";
import { PackageOption } from "./package-option";
import { BusinessFields } from "./business-fields";
import { ContactFields } from "./contact-fields";
import { SocialChannels } from "./social-channels";
import type {
  PackageType,
  RegistrationFormData,
  RegistrationFormErrors,
} from "@/types/registration";

const AI_DSP_URL =
  process.env.NEXT_PUBLIC_AI_DSP_URL || "https://admin.dsp.one/login";

interface RegistrationFormProps {
  formData: RegistrationFormData;
  errors: RegistrationFormErrors;
  successMessage: string;
  isLoading: boolean;
  onInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => void;
  onPackageSelect: (packageId: PackageType) => void;
  onSocialToggle: (social: keyof RegistrationFormData["socials"]) => void;
  onSubmit: (e: React.FormEvent) => Promise<void>;
}

export function RegistrationForm({
  formData,
  errors,
  successMessage,
  isLoading,
  onInputChange,
  onPackageSelect,
  onSocialToggle,
  onSubmit,
}: RegistrationFormProps) {
  return (
    <form onSubmit={onSubmit} className="space-y-6">
      {/* Account Type Selection */}
      <section className="mb-14">
        <h3 className="text-sm font-extrabold uppercase tracking-widest text-text-main mb-8 flex items-center gap-4">
          <span className="w-8 h-0.5 bg-primary" /> Select Account Type
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <PackageOption
            id="starter"
            selected={formData.selected_package}
            onSelect={onPackageSelect}
          />
          <PackageOption
            id="business"
            selected={formData.selected_package}
            onSelect={onPackageSelect}
          />
        </div>
        {errors.selected_package && (
          <p className="mt-2 text-sm text-red-500 flex items-center gap-1">
            <AlertCircle className="w-4 h-4" />
            {errors.selected_package}
          </p>
        )}
      </section>

      {/* Business Details */}
      <BusinessFields
        formData={formData}
        errors={errors}
        onInputChange={onInputChange}
      />

      {/* Personal Information */}
      <ContactFields
        formData={formData}
        errors={errors}
        onInputChange={onInputChange}
      />

      {/* Promotion Channels */}
      <SocialChannels
        formData={formData}
        errors={errors}
        onSocialToggle={onSocialToggle}
        onInputChange={onInputChange}
      />

      {/* Success Message */}
      {successMessage && (
        <div
          className="p-4 bg-green-50 border border-green-200 rounded-sm"
          role="alert"
        >
          <p className="text-sm text-green-600 flex items-center gap-2">
            <CheckCircle className="w-5 h-5" />
            {successMessage}
          </p>
        </div>
      )}

      {/* Error Message */}
      {errors.general && (
        <div
          className="p-4 bg-red-50 border border-red-200 rounded-sm"
          role="alert"
        >
          <p className="text-sm text-red-600 flex items-center gap-2">
            <AlertCircle className="w-5 h-5" />
            {errors.general}
          </p>
        </div>
      )}

      {/* Submit Section */}
      <div className="mt-16 flex flex-col items-center gap-8">
        <button
          type="submit"
          disabled={isLoading}
          className="w-full md:w-auto min-w-[320px] py-4 px-10 bg-secondary hover:bg-secondary/90 text-white font-extrabold tracking-widest text-xs uppercase shadow-xl transition-all duration-300 transform hover:-translate-y-1 rounded-sm disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
        >
          {isLoading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Processing...
            </>
          ) : (
            "Start free trial"
          )}
        </button>
        <div className="flex items-center gap-2 text-sm font-medium">
          <span className="text-text-muted">Already have an account?</span>
          <a
            className="text-primary hover:text-primary-dark font-extrabold transition-colors underline underline-offset-4"
            href={AI_DSP_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Login now
          </a>
        </div>
      </div>
    </form>
  );
}
