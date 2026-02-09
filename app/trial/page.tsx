"use client";

import { Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { Loader2 } from "lucide-react";
import { QueryProvider } from "@/components/providers/query-provider";
import { RegistrationForm, SuccessScreen } from "@/components/registration";
import { useRegistrationForm } from "@/hooks/use-registration-form";

const AI_DSP_URL =
  process.env.NEXT_PUBLIC_AI_DSP_URL || "https://admin.dsp.one/login";

function TrialFormContent() {
  const {
    formData,
    errors,
    isLoading,
    isSubmitted,
    successMessage,
    handleInputChange,
    handlePackageSelect,
    handleSocialToggle,
    handleSubmit,
    resetForm,
  } = useRegistrationForm();

  // Show success screen after successful registration
  if (isSubmitted) {
    return <SuccessScreen onRegisterAnother={resetForm} />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-background-light">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 glass-panel transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.png" alt="Uniksmart" width={208} height={48} />
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
      <main className="grow pt-32 pb-24 px-6 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 left-0 w-full h-[800px] bg-linear-to-b from-primary/5 to-transparent pointer-events-none -z-10" />
        <div className="absolute -top-20 -right-20 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none -z-10" />

        <div className="max-w-[900px] mx-auto relative z-10">
          {/* Header Section */}
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 border border-primary/30 bg-white/60 text-[11px] font-extrabold text-primary-dark tracking-[0.15em] uppercase mb-6 rounded-sm">
              10-Day Free Trial
            </span>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-text-main mb-6 tracking-tight leading-tight">
              Begin Your <span className="text-primary">Legacy</span>
            </h1>
            <p className="text-text-muted text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
              Join the artisanal revolution. Experience the gold standard of
              digital boutique management.
            </p>
          </div>

          {/* Form Card */}
          <div className="bg-white border border-gray-100 p-8 md:p-12 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] relative rounded-sm">
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
              onSubmit={handleSubmit}
            />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
          <Link
            href="/"
            className="flex items-center gap-3 mb-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-500"
          >
            <Image src="/logo.png" alt="Uniksmart" width={120} height={28} />
          </Link>
          <div className="flex gap-8 text-[11px] text-text-muted font-bold uppercase tracking-widest mb-8">
            <a className="hover:text-primary-dark transition-colors" href="#">
              Privacy
            </a>
            <a className="hover:text-primary-dark transition-colors" href="#">
              Terms
            </a>
            <a className="hover:text-primary-dark transition-colors" href="#">
              Contact
            </a>
          </div>
          <p className="text-[10px] text-gray-400 font-bold tracking-widest uppercase">
            © 2024 Uniksmart. THE ART OF DIGITAL BEAUTY.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default function TrialPage() {
  return (
    <QueryProvider>
      <Suspense
        fallback={
          <div className="min-h-screen flex items-center justify-center bg-background-light">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
          </div>
        }
      >
        <TrialFormContent />
      </Suspense>
    </QueryProvider>
  );
}
