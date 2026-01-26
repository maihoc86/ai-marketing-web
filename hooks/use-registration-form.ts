"use client";

import { useState, type ChangeEvent } from "react";
import { api, type ApiError } from "@/lib/api-client";

/**
 * Form Data Structure
 */
export interface RegistrationFormData {
  selected_package: string;
  business_type: "enterprise" | "household" | "other";
  tax_code: string;
  company_name: string;
  address: string;
  full_name: string;
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  job_position: string;
  password: string;
}

/**
 * Form Errors Structure
 */
export interface RegistrationFormErrors {
  selected_package?: string;
  tax_code?: string;
  company_name?: string;
  address?: string;
  full_name?: string;
  first_name?: string;
  last_name?: string;
  email?: string;
  phone_number?: string;
  job_position?: string;
  password?: string;
  general?: string;
}

/**
 * Password Strength Levels
 */
export type PasswordStrength = "weak" | "medium" | "strong" | "very_strong";

/**
 * Hook Configuration
 */
interface UseRegistrationFormConfig {
  initialPackage?: string;
  onSuccess?: () => void;
  onError?: (error: string) => void;
}

/**
 * Hook Return Value
 */
interface UseRegistrationFormReturn {
  formData: RegistrationFormData;
  errors: RegistrationFormErrors;
  successMessage: string;
  isLoading: boolean;
  isSubmitted: boolean;
  currentStep: number;
  passwordStrength: PasswordStrength;
  setIsSubmitted: (value: boolean) => void;
  setCurrentStep: (step: number) => void;
  handleInputChange: (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => void;
  handlePackageSelect: (packageId: string) => void;
  removePackage: () => void;
  handleBusinessTypeChange: (
    type: "enterprise" | "household" | "other",
  ) => void;
  handleSubmit: (e: React.FormEvent) => Promise<void>;
  handleNextStep: () => boolean;
  handlePrevStep: () => void;
  resetForm: () => void;
  validateForm: () => boolean;
  validateStep1: () => boolean;
  validateStep2: () => boolean;
}

/**
 * Email Validation
 */
function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Phone Validation (Vietnamese format: 9 or 10 digits)
 */
function validatePhone(phone: string): boolean {
  const cleanPhone = phone.replace(/\s/g, "");
  // Accept either 9 digits or 10 digits starting with 0
  const phoneRegex = /^(0\d{9}|\d{9})$/;
  return phoneRegex.test(cleanPhone);
}

/**
 * Password Strength Calculation
 */
function calculatePasswordStrength(password: string): PasswordStrength {
  if (!password) return "weak";

  let score = 0;

  // Length checks
  if (password.length >= 8) score += 1;
  if (password.length >= 12) score += 1;

  // Character type checks
  if (/[a-z]/.test(password)) score += 1;
  if (/[A-Z]/.test(password)) score += 1;
  if (/[0-9]/.test(password)) score += 1;
  if (/[^a-zA-Z0-9]/.test(password)) score += 1;

  if (score <= 2) return "weak";
  if (score <= 4) return "medium";
  if (score <= 5) return "strong";
  return "very_strong";
}

/**
 * Shared Registration Form Hook
 *
 * Consolidates duplicate form logic from:
 * - components/cta-register-modal.tsx
 * - app/dang-ky/page.tsx
 *
 * Provides:
 * - Form state management
 * - Validation logic
 * - Submission handling
 * - Error management
 * - Multi-step form support
 *
 * @param config - Hook configuration options
 * @returns Form state and handlers
 */
export function useRegistrationForm(
  config: UseRegistrationFormConfig = {},
): UseRegistrationFormReturn {
  const { initialPackage = "starter", onSuccess, onError } = config;

  // Form State
  const [formData, setFormData] = useState<RegistrationFormData>({
    selected_package: initialPackage,
    business_type: "enterprise",
    tax_code: "",
    company_name: "",
    address: "",
    full_name: "",
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    job_position: "",
    password: "",
  });

  const [errors, setErrors] = useState<RegistrationFormErrors>({});
  const [successMessage, setSuccessMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  // Calculate password strength
  const passwordStrength = calculatePasswordStrength(formData.password);

  /**
   * Validate Step 1 - Business Information
   */
  const validateStep1 = (): boolean => {
    const newErrors: RegistrationFormErrors = {};

    // Package validation
    if (!formData.selected_package) {
      newErrors.selected_package = "Vui lòng chọn gói dùng thử";
    }

    // Company name validation - only required for business package
    if (
      formData.selected_package === "business" &&
      !formData.company_name.trim()
    ) {
      newErrors.company_name = "Vui lòng nhập tên doanh nghiệp";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  /**
   * Validate Step 2 - Contact & Account
   */
  const validateStep2 = (): boolean => {
    const newErrors: RegistrationFormErrors = {};

    // Full name validation
    if (!formData.full_name.trim()) {
      newErrors.full_name = "Vui lòng nhập họ và tên";
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Vui lòng nhập email";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Email không hợp lệ";
    }

    // Phone validation
    if (!formData.phone_number.trim()) {
      newErrors.phone_number = "Vui lòng nhập số điện thoại";
    } else if (!validatePhone(formData.phone_number)) {
      newErrors.phone_number = "Số điện thoại không hợp lệ (9-10 chữ số)";
    }

    // Job position validation
    if (!formData.job_position) {
      newErrors.job_position = "Vui lòng chọn chức vụ";
    }

    // Password validation (optional - only validate if provided)
    if (formData.password && formData.password.length < 8) {
      newErrors.password = "Mật khẩu phải có ít nhất 8 ký tự";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  /**
   * Validate entire form
   */
  const validateForm = (): boolean => {
    return validateStep1() && validateStep2();
  };

  /**
   * Handle next step
   */
  const handleNextStep = (): boolean => {
    if (currentStep === 1 && validateStep1()) {
      setCurrentStep(2);
      return true;
    }
    return false;
  };

  /**
   * Handle previous step
   */
  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      setErrors({});
    }
  };

  /**
   * Handle input field changes
   */
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error and success message for this field
    if (errors[name as keyof RegistrationFormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
    if (successMessage) {
      setSuccessMessage("");
    }
  };

  /**
   * Handle package selection
   */
  const handlePackageSelect = (packageId: string) => {
    setFormData((prev) => ({ ...prev, selected_package: packageId }));
    if (errors.selected_package) {
      setErrors((prev) => ({ ...prev, selected_package: undefined }));
    }
  };

  /**
   * Remove selected package
   */
  const removePackage = () => {
    setFormData((prev) => ({ ...prev, selected_package: "" }));
  };

  /**
   * Handle business type change
   */
  const handleBusinessTypeChange = (
    type: "enterprise" | "household" | "other",
  ) => {
    setFormData((prev) => ({ ...prev, business_type: type }));
  };

  /**
   * Reset form to initial state
   */
  const resetForm = () => {
    setFormData({
      selected_package: initialPackage,
      business_type: "enterprise",
      tax_code: "",
      company_name: "",
      address: "",
      full_name: "",
      first_name: "",
      last_name: "",
      email: "",
      phone_number: "",
      job_position: "",
      password: "",
    });
    setErrors({});
    setIsLoading(false);
    setIsSubmitted(false);
    setCurrentStep(1);
  };

  /**
   * Handle form submission
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate based on package type
    const isBusinessPackage = formData.selected_package === "business";

    // Validate step 1 for business package
    if (isBusinessPackage && !validateStep1()) {
      return;
    }

    // Validate step 2 (contact info) for all packages
    if (!validateStep2()) {
      return;
    }

    setIsLoading(true);
    setErrors({});
    setSuccessMessage("");

    try {
      // Get business type label
      const businessTypeLabels = {
        enterprise: "Công ty TNHH/CP",
        household: "Hộ kinh doanh",
        other: "Tổ chức khác",
      };

      // Prepare submission data based on package type
      const customerNeed = isBusinessPackage
        ? `Gói: ${formData.selected_package}, Loại hình: ${businessTypeLabels[formData.business_type]}, MST: ${formData.tax_code || "N/A"}, Địa chỉ: ${formData.address || "N/A"}, Vị trí: ${formData.job_position}`
        : `Gói: ${formData.selected_package}, Vị trí: ${formData.job_position}`;

      // Normalize phone number - add leading 0 if it's 9 digits
      const cleanPhone = formData.phone_number.replace(/\s/g, "");
      const normalizedPhone =
        cleanPhone.length === 9 ? `0${cleanPhone}` : cleanPhone;

      const submitData = {
        name: formData.full_name.trim(),
        email: formData.email,
        phone_number: normalizedPhone,
        company_name: isBusinessPackage
          ? formData.company_name
          : formData.full_name.trim(),
        customer_need: customerNeed,
      };

      // Use secure API client with CSRF protection and rate limiting
      const data = await api.registerCompany(submitData);

      if (data.success) {
        // Set success message
        setSuccessMessage(data.message || "Đăng ký thành công!");
        setIsSubmitted(true);

        // Reset form after successful submission
        setFormData({
          selected_package: initialPackage,
          business_type: "enterprise",
          tax_code: "",
          company_name: "",
          address: "",
          full_name: "",
          first_name: "",
          last_name: "",
          email: "",
          phone_number: "",
          job_position: "",
          password: "",
        });

        // Call success callback if provided
        onSuccess?.();
      } else {
        const errorMessage = data.message || "Có lỗi xảy ra, vui lòng thử lại";
        setErrors({ general: errorMessage });
        onError?.(errorMessage);
      }
    } catch (error) {
      // Handle API errors with better messages
      const apiError = error as ApiError;
      const errorMessage =
        apiError.message ||
        "Không thể kết nối đến server, vui lòng thử lại sau";
      setErrors({ general: errorMessage });
      onError?.(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    formData,
    errors,
    successMessage,
    isLoading,
    isSubmitted,
    currentStep,
    passwordStrength,
    setIsSubmitted,
    setCurrentStep,
    handleInputChange,
    handlePackageSelect,
    removePackage,
    handleBusinessTypeChange,
    handleSubmit,
    handleNextStep,
    handlePrevStep,
    resetForm,
    validateForm,
    validateStep1,
    validateStep2,
  };
}
