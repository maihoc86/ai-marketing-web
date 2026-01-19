/**
 * Shared types for registration forms
 */

export interface RegistrationFormData {
  selected_package: string
  business_type: "enterprise" | "household" | "other"
  tax_code: string
  company_name: string
  address: string
  full_name: string
  first_name: string
  last_name: string
  email: string
  phone_number: string
  job_position: string
  password: string
}

export interface RegistrationFormErrors {
  selected_package?: string
  tax_code?: string
  company_name?: string
  address?: string
  full_name?: string
  first_name?: string
  last_name?: string
  email?: string
  phone_number?: string
  job_position?: string
  password?: string
  general?: string
}

export const jobPositions = [
  { id: "", label: "Chọn vị trí công việc" },
  { id: "ceo", label: "CEO / Giám đốc" },
  { id: "marketing_director", label: "Giám đốc Marketing" },
  { id: "marketing_manager", label: "Marketing Manager" },
  { id: "content_manager", label: "Content Manager" },
  { id: "social_media_manager", label: "Social Media Manager" },
  { id: "designer", label: "Designer" },
  { id: "developer", label: "Developer" },
  { id: "other", label: "Khác" },
] as const

export const packageOptions = [
  { id: "startup", label: "Startup", price: "3,500,000 VNĐ/tháng" },
  { id: "growth", label: "Growth", price: "6,900,000 VNĐ/tháng", popular: true },
  { id: "enterprise", label: "Enterprise", price: "Liên hệ" },
] as const
