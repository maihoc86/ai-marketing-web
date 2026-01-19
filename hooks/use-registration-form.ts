"use client"

import { useState, type ChangeEvent } from "react"
import { api, type ApiError } from "@/lib/api-client"

/**
 * Form Data Structure
 */
export interface RegistrationFormData {
  selected_package: string
  business_type: "enterprise" | "household"
  tax_code: string
  company_name: string
  first_name: string
  last_name: string
  email: string
  phone_number: string
  job_position: string
}

/**
 * Form Errors Structure
 */
export interface RegistrationFormErrors {
  selected_package?: string
  tax_code?: string
  company_name?: string
  first_name?: string
  last_name?: string
  email?: string
  phone_number?: string
  job_position?: string
  general?: string
}

/**
 * Hook Configuration
 */
interface UseRegistrationFormConfig {
  initialPackage?: string
  onSuccess?: () => void
  onError?: (error: string) => void
}

/**
 * Hook Return Value
 */
interface UseRegistrationFormReturn {
  formData: RegistrationFormData
  errors: RegistrationFormErrors
  isLoading: boolean
  isSubmitted: boolean
  setIsSubmitted: (value: boolean) => void
  handleInputChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
  handlePackageSelect: (packageId: string) => void
  removePackage: () => void
  handleBusinessTypeChange: (type: "enterprise" | "household") => void
  handleSubmit: (e: React.FormEvent) => Promise<void>
  resetForm: () => void
  validateForm: () => boolean
}

/**
 * Email Validation
 */
function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

/**
 * Phone Validation (Vietnamese format: 0xxxxxxxxx)
 */
function validatePhone(phone: string): boolean {
  const phoneRegex = /^0\d{9}$/
  return phoneRegex.test(phone.replace(/\s/g, ""))
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
 *
 * @param config - Hook configuration options
 * @returns Form state and handlers
 */
export function useRegistrationForm(config: UseRegistrationFormConfig = {}): UseRegistrationFormReturn {
  const { initialPackage = "growth", onSuccess, onError } = config

  // Form State
  const [formData, setFormData] = useState<RegistrationFormData>({
    selected_package: initialPackage,
    business_type: "enterprise",
    tax_code: "",
    company_name: "",
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    job_position: "",
  })

  const [errors, setErrors] = useState<RegistrationFormErrors>({})
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  /**
   * Validate entire form
   */
  const validateForm = (): boolean => {
    const newErrors: RegistrationFormErrors = {}

    // Package validation
    if (!formData.selected_package) {
      newErrors.selected_package = "Vui lòng chọn gói dùng thử"
    }

    // First name validation
    if (!formData.first_name.trim()) {
      newErrors.first_name = "Vui lòng nhập họ và đệm"
    }

    // Last name validation
    if (!formData.last_name.trim()) {
      newErrors.last_name = "Vui lòng nhập tên"
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Vui lòng nhập email"
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Email không hợp lệ"
    }

    // Phone validation
    if (!formData.phone_number.trim()) {
      newErrors.phone_number = "Vui lòng nhập số điện thoại"
    } else if (!validatePhone(formData.phone_number)) {
      newErrors.phone_number = "Số điện thoại không hợp lệ (10 chữ số, bắt đầu bằng 0)"
    }

    // Job position validation
    if (!formData.job_position) {
      newErrors.job_position = "Vui lòng chọn vị trí công việc"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  /**
   * Handle input field changes
   */
  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear error for this field
    if (errors[name as keyof RegistrationFormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  /**
   * Handle package selection
   */
  const handlePackageSelect = (packageId: string) => {
    setFormData((prev) => ({ ...prev, selected_package: packageId }))
    if (errors.selected_package) {
      setErrors((prev) => ({ ...prev, selected_package: undefined }))
    }
  }

  /**
   * Remove selected package
   */
  const removePackage = () => {
    setFormData((prev) => ({ ...prev, selected_package: "" }))
  }

  /**
   * Handle business type change
   */
  const handleBusinessTypeChange = (type: "enterprise" | "household") => {
    setFormData((prev) => ({ ...prev, business_type: type }))
  }

  /**
   * Reset form to initial state
   */
  const resetForm = () => {
    setFormData({
      selected_package: initialPackage,
      business_type: "enterprise",
      tax_code: "",
      company_name: "",
      first_name: "",
      last_name: "",
      email: "",
      phone_number: "",
      job_position: "",
    })
    setErrors({})
    setIsLoading(false)
    setIsSubmitted(false)
  }

  /**
   * Handle form submission
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsLoading(true)
    setErrors({})

    try {
      // Prepare submission data
      const submitData = {
        name: `${formData.first_name} ${formData.last_name}`.trim(),
        email: formData.email,
        phone_number: formData.phone_number,
        company_name: formData.company_name,
        customer_need: `Gói: ${formData.selected_package}, Loại hình: ${formData.business_type === "enterprise" ? "Doanh nghiệp" : "Hộ kinh doanh"}, MST: ${formData.tax_code || "N/A"}, Vị trí: ${formData.job_position}`,
      }

      // Use secure API client with CSRF protection and rate limiting
      const data = await api.registerCompany(submitData)

      if (data.success) {
        setIsSubmitted(true)

        // Reset form after successful submission
        setFormData({
          selected_package: initialPackage,
          business_type: "enterprise",
          tax_code: "",
          company_name: "",
          first_name: "",
          last_name: "",
          email: "",
          phone_number: "",
          job_position: "",
        })

        // Call success callback if provided
        onSuccess?.()
      } else {
        const errorMessage = data.message || "Có lỗi xảy ra, vui lòng thử lại"
        setErrors({ general: errorMessage })
        onError?.(errorMessage)
      }
    } catch (error) {
      // Handle API errors with better messages
      const apiError = error as ApiError
      const errorMessage = apiError.message || "Không thể kết nối đến server, vui lòng thử lại sau"
      setErrors({ general: errorMessage })
      onError?.(errorMessage)
    } finally {
      setIsLoading(false)
    }
  }

  return {
    formData,
    errors,
    isLoading,
    isSubmitted,
    setIsSubmitted,
    handleInputChange,
    handlePackageSelect,
    removePackage,
    handleBusinessTypeChange,
    handleSubmit,
    resetForm,
    validateForm,
  }
}
