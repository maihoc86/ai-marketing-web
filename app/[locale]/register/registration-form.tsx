"use client";

import Link from "next/link";
import { Loader2, AlertCircle, CheckCircle } from "lucide-react";
import { Navbar } from "@/components/landing/navbar";
import { RegistrationLeftPanel } from "@/components/registration/registration-left-panel";
import { PackageOption } from "@/components/registration/package-option";
import { BusinessFields } from "@/components/registration/business-fields";
import { ContactFields } from "@/components/registration/contact-fields";
import { useI18n } from "@/lib/i18n";
import { useActivityFields } from "@/lib/queries/activity-fields";
import type {
  RegistrationFormData,
  RegistrationFormErrors,
} from "@/hooks/use-registration-form";

interface RegistrationFormProps {
  formData: RegistrationFormData;
  errors: RegistrationFormErrors;
  successMessage: string;
  isLoading: boolean;
  onInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => void;
  onPackageSelect: (packageId: string) => void;
  onBusinessTypeChange: (type: string) => void;
  onSubmit: (e: React.FormEvent) => Promise<void>;
}

// Left panel moved to components/registration/registration-left-panel.tsx

// `PackageOption` moved to components/registration/package-option.tsx

export function RegistrationForm({
  formData,
  errors,
  successMessage,
  isLoading,
  onInputChange,
  onPackageSelect,
  onBusinessTypeChange,
  onSubmit,
}: RegistrationFormProps) {
  const { t, locale } = useI18n();
  const language = locale === "vi" ? "vi" : "en";

  const { data: activityFields = [], isLoading: isLoadingFields } =
    useActivityFields(language);

  const jobPositions = [
    { id: "", labelKey: "registration.form.contact.jobPositionPlaceholder" },
    { id: "ceo", labelKey: "registration.form.jobPosition.ceo" },
    { id: "cmo", labelKey: "registration.form.jobPosition.cmo" },
    {
      id: "marketing_manager",
      labelKey: "registration.form.jobPosition.marketingManager",
    },
    {
      id: "growth_hacker",
      labelKey: "registration.form.jobPosition.growthHacker",
    },
    { id: "other", labelKey: "registration.form.jobPosition.other" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="flex flex-col lg:flex-row min-h-screen pt-24">
        <RegistrationLeftPanel t={t} />

        <div className="w-full lg:w-[60%] bg-white p-8 lg:p-12 xl:p-16 flex flex-col justify-center">
          <div className="max-w-160 mx-auto w-full">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {t("registration.form.title")}
              </h2>
              <p className="text-gray-500">{t("registration.form.subtitle")}</p>
            </div>

            <form onSubmit={onSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <PackageOption
                  id="starter"
                  selected={formData.selected_package}
                  onSelect={onPackageSelect}
                  titleKey="registration.form.package.starter"
                  title="registration.form.package.starterTitle"
                  descKey="registration.form.package.starterDesc"
                  t={t}
                />
                <PackageOption
                  id="business"
                  selected={formData.selected_package}
                  onSelect={onPackageSelect}
                  titleKey="registration.form.package.business"
                  title="registration.form.package.businessTitle"
                  descKey="registration.form.package.businessDesc"
                  primary
                  t={t}
                />
              </div>

              {errors.selected_package && (
                <p
                  role="alert"
                  className="text-sm text-red-600 flex items-center gap-1"
                >
                  <AlertCircle className="w-4 h-4" aria-hidden="true" />
                  {errors.selected_package}
                </p>
              )}

              <BusinessFields
                formData={formData}
                errors={errors}
                onInputChange={onInputChange}
                onBusinessTypeChange={onBusinessTypeChange}
                activityFields={activityFields}
                isLoadingFields={isLoadingFields}
                t={t}
              />

              <ContactFields
                formData={formData}
                errors={errors}
                onInputChange={onInputChange}
                jobPositions={jobPositions}
                t={t}
              />

              {successMessage && (
                <div
                  className="p-4 bg-green-50 border border-green-200 rounded-xl"
                  role="alert"
                >
                  <p className="text-sm text-green-600 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" aria-hidden="true" />
                    {successMessage}
                  </p>
                </div>
              )}

              {errors.general && (
                <div
                  className="p-4 bg-red-50 border border-red-200 rounded-xl"
                  role="alert"
                >
                  <p className="text-sm text-red-600 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5" aria-hidden="true" />
                    {errors.general}
                  </p>
                </div>
              )}

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full h-14 bg-[#22b5f8] text-white font-bold rounded-lg hover:bg-[#1a9fd8] disabled:bg-[#22b5f8]/50 transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#22b5f8]/30"
                >
                  {isLoading ? (
                    <>
                      <Loader2
                        className="w-5 h-5 animate-spin"
                        aria-hidden="true"
                      />
                      {t("registration.form.submit.processing")}
                    </>
                  ) : (
                    t("registration.form.submit.button")
                  )}
                </button>
              </div>

              <p className="text-center text-sm text-gray-600">
                {t("registration.form.login.text")}{" "}
                <a
                  href="https://admin.dsp.one"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#22b5f8] font-semibold hover:underline"
                >
                  {t("registration.form.login.link")}
                </a>
              </p>

              <p className="text-center text-xs text-gray-500">
                {t("registration.form.terms.text")}{" "}
                <Link href="/terms" className="text-[#22b5f8] hover:underline">
                  {t("registration.form.terms.service")}
                </Link>{" "}
                {t("registration.form.terms.and")}{" "}
                <Link
                  href="/privacy"
                  className="text-[#22b5f8] hover:underline"
                >
                  {t("registration.form.terms.privacy")}
                </Link>{" "}
                {t("registration.form.terms.suffix")}
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
