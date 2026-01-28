"use client";

import type React from "react";
import { useRef, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  PackageType,
  useRegistrationForm,
} from "@/hooks/use-registration-form";
import { RegistrationForm } from "./registration-form";
import { useI18n } from "@/lib/i18n";

function RegisterFormContent() {
  const { t } = useI18n();
  const searchParams = useSearchParams();
  const packageFromUrl = searchParams.get("package") || "professional";

  const mainHeadingRef = useRef<HTMLHeadingElement>(null);

  // Use shared registration form hook
  const {
    formData,
    errors,
    successMessage,
    isLoading,
    isSubmitted,
    setIsSubmitted,
    handleInputChange,
    handlePackageSelect,
    handleBusinessTypeChange,
    handleSubmit,
  } = useRegistrationForm({
    initialPackage: packageFromUrl as PackageType,
  });

  // Focus heading on success
  useEffect(() => {
    if (isSubmitted && mainHeadingRef.current) {
      mainHeadingRef.current.focus();
    }
  }, [isSubmitted]);

  // Handle Escape key to dismiss success message
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape" && isSubmitted) {
      setIsSubmitted(false);
    }
  };

  if (isSubmitted) {
    return (
      <div
        className="min-h-screen bg-linear-to-b from-white to-[#f5f5f5] flex items-center justify-center p-4"
        onKeyDown={handleKeyDown}
      >
        <a
          href="#success-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#22b5f8] focus:text-white focus:rounded-lg"
        >
          {t("registration.skipLink")}
        </a>

        <div id="success-content" className="max-w-md w-full text-center">
          <div
            className="w-24 h-24 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center animate-bounce"
            role="img"
            aria-label={t("registration.successIcon")}
          >
            <CheckCircle2
              className="w-12 h-12 text-green-600"
              aria-hidden="true"
            />
          </div>
          <h1
            ref={mainHeadingRef}
            tabIndex={-1}
            className="text-3xl font-bold text-gray-900 mb-3 focus:outline-none"
          >
            {t("registration.successTitle")}
          </h1>
          <p className="text-gray-600 mb-8 text-lg">
            {t("registration.successMessage")}
          </p>

          {/* Primary CTA */}
          <div className="mb-6">
            <Button
              asChild
              size="lg"
              className="rounded-full px-12 min-h-14 bg-[#22b5f8] hover:bg-[#1a9dd9] text-base font-semibold shadow-lg"
              aria-label={t("registration.loginLabel")}
            >
              <a
                href="https://admin.dsp.one"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("registration.loginButton")}
              </a>
            </Button>
          </div>

          {/* Secondary Actions */}
          <div className="flex flex-col items-center gap-3">
            <button
              onClick={() => setIsSubmitted(false)}
              className="text-sm text-gray-600 hover:text-[#22b5f8] font-medium"
              aria-label={t("registration.registerAnotherLabel")}
            >
              {t("registration.registerAnotherButton")}
            </button>
            <Button
              asChild
              variant="ghost"
              size="sm"
              className="text-gray-500 hover:text-gray-700 hover:bg-transparent text-xs"
              aria-label={t("registration.backToHome")}
            >
              <Link href="/">{t("registration.backToHome")}</Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <RegistrationForm
      formData={formData}
      errors={errors}
      successMessage={successMessage}
      isLoading={isLoading}
      onInputChange={handleInputChange}
      onPackageSelect={handlePackageSelect}
      onBusinessTypeChange={handleBusinessTypeChange}
      onSubmit={handleSubmit}
    />
  );
}

export default function RegisterPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <Loader2 className="w-8 h-8 animate-spin text-[#22b5f8]" />
        </div>
      }
    >
      <RegisterFormContent />
    </Suspense>
  );
}
