"use client";

import type React from "react";
import { useState, useEffect, useRef } from "react";
import { LocaleLink } from "@/components/locale-link";
import Image from "next/image";
import {
  X,
  CheckCircle2,
  Loader2,
  Send,
  Sparkles,
  Gift,
  Users,
  Headphones,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { BusinessTypeSelector } from "@/components/forms/business-type-selector";
import { PackageSelector } from "@/components/forms/package-selector";
import { RegistrationFields } from "@/components/forms/registration-fields";
import { useRegistrationForm } from "@/hooks/use-registration-form";

const STORAGE_KEY = "dxai_cta_modal_dismissed";

export function CtaRegisterModal() {
  const [isOpen, setIsOpen] = useState(false);
  const firstInputRef = useRef<HTMLInputElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  // Use shared registration form hook
  const {
    formData,
    errors,
    isLoading,
    isSubmitted,
    setIsSubmitted,
    handleInputChange,
    handlePackageSelect,
    handleBusinessTypeChange,
    handleSubmit,
  } = useRegistrationForm({
    initialPackage: "growth",
    onSuccess: () => {
      // Store dismissed state on success
      localStorage.setItem(STORAGE_KEY, "true");
    },
    onError: () => {
      // Additional error handling if needed
    },
  });

  // Check localStorage and show modal after delay for first-time visitors
  useEffect(() => {
    const isDismissed = localStorage.getItem(STORAGE_KEY);
    if (!isDismissed) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Auto-focus first input when modal opens
  useEffect(() => {
    if (isOpen && firstInputRef.current && !isSubmitted) {
      setTimeout(() => {
        firstInputRef.current?.focus();
      }, 100);
    }
  }, [isOpen, isSubmitted]);

  // Handle ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        handleClose();
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen]);

  // Focus trap
  useEffect(() => {
    if (!isOpen || !modalRef.current) return;

    // Save previous focus
    previousFocusRef.current = document.activeElement as HTMLElement;

    // Get all focusable elements
    const focusableElements = modalRef.current.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
    );

    if (focusableElements.length === 0) return;

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    // Handle Tab key
    const handleTab = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;

      if (e.shiftKey) {
        // Shift + Tab
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        }
      } else {
        // Tab
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    };

    document.addEventListener("keydown", handleTab);

    return () => {
      document.removeEventListener("keydown", handleTab);
      // Restore previous focus
      previousFocusRef.current?.focus();
    };
  }, [isOpen]);

  const handleClose = () => {
    localStorage.setItem(STORAGE_KEY, "true");
    setIsOpen(false);
  };

  if (!isOpen) return null;

  // Success state
  if (isSubmitted) {
    return (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
        onClick={handleClose}
        role="dialog"
        aria-modal="true"
        aria-labelledby="success-title"
      >
        <div
          className="w-full max-w-md bg-white rounded-3xl p-8 shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10 text-green-600" />
            </div>
            <h2
              id="success-title"
              className="text-2xl font-bold text-gray-900 mb-3"
            >
              Đăng ký thành công!
            </h2>
            <p className="text-gray-600 mb-6">
              Cảm ơn bạn đã quan tâm đến Uniksmart. Đội ngũ của
              chúng tôi sẽ liên hệ với bạn trong vòng 24 giờ.
            </p>
            <Button
              onClick={handleClose}
              className="w-full h-12 rounded-xl bg-[#ff7900] hover:bg-[#e56b00]"
            >
              Đóng
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        ref={modalRef}
        className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
        tabIndex={-1}
      >
        <div className="grid lg:grid-cols-[400px_1fr]">
          {/* Left column - Branding */}
          <div className="hidden lg:flex flex-col justify-between p-8 bg-linear-to-br from-[#008bff] via-[#22b5f8] to-[#5fffec] text-white relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-cyan-400/20 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10">
              {/* Logo */}
              <div className="mb-8">
                <Image
                  src="https://tienphongcds.com/_next/image?url=https%3A%2F%2Fmedia.newweb.vn%2Ffile%2FdoMFbzZ4q&w=256&q=75"
                  alt="Uniksmart"
                  width={140}
                  height={36}
                  className="h-9 w-auto brightness-0 invert"
                />
              </div>

              {/* Main heading */}
              <h2 className="text-3xl font-bold mb-6 leading-tight">
                ĐỪNG BỎ LỠ!
              </h2>

              {/* Benefits list */}
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-cyan-400/30 flex items-center justify-center shrink-0 mt-0.5">
                    <Gift className="w-3.5 h-3.5 text-cyan-100" />
                  </div>
                  <span className="text-white/90 text-sm">
                    Demo miễn phí Uniksmart
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-cyan-400/30 flex items-center justify-center shrink-0 mt-0.5">
                    <Sparkles className="w-3.5 h-3.5 text-cyan-100" />
                  </div>
                  <span className="text-white/90 text-sm">
                    Báo giá cá nhân hóa theo quy mô doanh nghiệp
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-cyan-400/30 flex items-center justify-center shrink-0 mt-0.5">
                    <Headphones className="w-3.5 h-3.5 text-cyan-100" />
                  </div>
                  <span className="text-white/90 text-sm">
                    Tư vấn 1:1 bởi chuyên gia Marketing
                  </span>
                </li>
              </ul>

              {/* Stats card */}
              <div className="relative rounded-2xl overflow-hidden bg-white/10 backdrop-blur-sm p-5 border border-white/20">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center">
                    <Users className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">350,000+</div>
                    <div className="text-white/80 text-sm">
                      Doanh nghiệp đã tin chọn
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom trust line */}
            <div className="relative z-10 mt-6 pt-4 border-t border-white/20">
              <p className="text-white/70 text-sm">
                Powered by Uniksmart
              </p>
            </div>
          </div>

          {/* Right column - Form */}
          <div className="p-6 sm:p-8 bg-white relative max-h-[90vh] overflow-y-auto">
            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors z-10"
              aria-label="Đóng modal"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>

            {/* Form header */}
            <div className="mb-6 pr-12">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#22b5f8]/10 text-[#008bff] text-xs font-medium mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                Chỉ 10s – Nhận demo toàn bộ tính năng
              </div>
              <h3 id="modal-title" className="text-2xl font-bold text-gray-900">
                BÁO GIÁ & DÙNG THỬ NGAY!
              </h3>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              {/* Package Selection */}
              <PackageSelector
                value={formData.selected_package}
                onChange={handlePackageSelect}
                disabled={isLoading}
                error={errors.selected_package}
              />

              {/* Business Type */}
              <BusinessTypeSelector
                value={formData.business_type}
                onChange={handleBusinessTypeChange}
                disabled={isLoading}
              />

              {/* Registration Fields */}
              <RegistrationFields
                formData={formData}
                errors={errors}
                onChange={handleInputChange}
                disabled={isLoading}
                firstInputRef={firstInputRef}
              />

              {/* Submit button */}
              <Button
                type="submit"
                size="lg"
                className="w-full h-12 text-base font-semibold rounded-xl bg-[#ff7900] hover:bg-[#e56b00] shadow-lg shadow-[#ff7900]/25 hover:shadow-xl hover:shadow-[#ff7900]/30 transition-all duration-200"
                disabled={isLoading}
                aria-label={
                  isLoading
                    ? "Đang gửi đăng ký"
                    : "Nhận báo giá & Demo miễn phí"
                }
              >
                {isLoading ? (
                  <span className="flex items-center justify-center gap-2">
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Đang gửi...</span>
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    <span>Nhận báo giá & Demo miễn phí</span>
                    <Send className="w-4 h-4" />
                  </span>
                )}
              </Button>

              {/* Terms */}
              <p className="text-xs text-gray-500 text-center leading-relaxed pt-2">
                Bằng việc đăng ký, bạn đồng ý với{" "}
                <LocaleLink
                  href="/dieu-khoan"
                  className="text-[#22b5f8] hover:underline"
                >
                  Điều khoản sử dụng
                </LocaleLink>{" "}
                và{" "}
                <LocaleLink
                  href="/chinh-sach-bao-mat"
                  className="text-[#22b5f8] hover:underline"
                >
                  Chính sách bảo mật
                </LocaleLink>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
