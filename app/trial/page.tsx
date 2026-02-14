"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Loader2 } from "lucide-react";
import { QueryProvider } from "@/components/providers/query-provider";
import { RegistrationForm, SuccessScreen } from "@/components/registration";
import { useRegistrationForm } from "@/hooks/use-registration-form";
import Footer from "@/components/footer";
import type { PackageType } from "@/types/registration";

const AI_DSP_URL =
  process.env.NEXT_PUBLIC_AI_DSP_URL || "https://admin.dsp.one/login";

function TrialFormContent() {
  const searchParams = useSearchParams();
  const packageParam = searchParams.get("package");

  // Validate and set initial package from URL
  const initialPackage: PackageType =
    packageParam === "business" || packageParam === "starter"
      ? packageParam
      : "starter";

  const {
    formData,
    errors,
    isLoading,
    isSubmitted,
    successMessage,
    handleInputChange,
    handlePackageSelect,
    handleSocialToggle,
    handleAdditionalInfoToggle,
    handleAddUrl,
    handleRemoveUrl,
    handleUrlChange,
    handleSubmit,
    resetForm,
  } = useRegistrationForm({ initialPackage });

  // Show success screen after successful registration
  if (isSubmitted) {
    return <SuccessScreen onRegisterAnother={resetForm} />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-background-light">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 glass-panel transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.png" alt="Uniksmart" width={156} height={36} />
          </Link>
          <div className="hidden sm:block text-xs font-bold tracking-widest text-text-muted">
            ALREADY A MEMBER?{" "}
            <a
              className="text-primary hover:text-primary-dark ml-2 underline underline-offset-4 transition-colors font-extrabold"
              href={AI_DSP_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              LOGIN
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="grow pt-24 pb-16 px-4 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 left-0 w-full h-[600px] bg-linear-to-b from-primary/5 to-transparent pointer-events-none -z-10" />
        <div className="absolute -top-20 -right-20 w-[450px] h-[450px] bg-primary/5 rounded-full blur-[100px] pointer-events-none -z-10" />

        <div className="max-w-[900px] mx-auto relative z-10">
          {/* Header Section */}
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 border border-primary/30 bg-white/60 text-[9px] font-extrabold text-primary-dark tracking-[0.15em] uppercase mb-4 rounded-sm">
              10-Day Free Trial
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-text-main mb-4 tracking-tight leading-tight">
              Begin Your <span className="text-primary">Legacy</span>
            </h1>
            <p className="text-text-muted text-base md:text-lg font-medium max-w-2xl mx-auto leading-relaxed">
              Join the artisanal revolution. Experience the gold standard of
              digital boutique management.
            </p>
          </div>

          {/* Form Card */}
          <div className="bg-white border border-gray-100 p-6 max-sm:px-0 md:p-8 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] relative max-sm:border-0 max-sm:shadow-none rounded-sm">
            {/* Top accent line */}
            <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-primary/20 via-primary to-primary/20" />

            <RegistrationForm
              formData={formData}
              errors={errors}
              successMessage={successMessage}
              isLoading={isLoading}
              onInputChange={handleInputChange}
              onPackageSelect={handlePackageSelect}
              onSocialToggle={handleSocialToggle}
              onAdditionalInfoToggle={handleAdditionalInfoToggle}
              onAddUrl={handleAddUrl}
              onRemoveUrl={handleRemoveUrl}
              onUrlChange={handleUrlChange}
              onSubmit={handleSubmit}
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default function TrialPage() {
  return (
    <QueryProvider>
      <Suspense
        fallback={
          <div className="min-h-screen flex items-center justify-center bg-background-light">
            <Loader2 className="w-6 h-6 animate-spin text-primary" />
          </div>
        }
      >
        <TrialFormContent />
      </Suspense>
    </QueryProvider>
  );
}
