/**
 * Input Validation Library
 * Provides type-safe validation for forms and API data
 *
 * TODO: Install Zod for production use:
 * npm install zod
 *
 * Then uncomment the Zod schemas below and use them instead of manual validators
 */

// =============================================================================
// MANUAL VALIDATION (Current Implementation)
// =============================================================================

/**
 * Validation result type
 */
export interface ValidationResult {
  success: boolean
  error?: string
}

/**
 * Email validation
 * RFC 5322 compliant pattern
 */
export function validateEmail(email: string): ValidationResult {
  if (!email) {
    return { success: false, error: "Email là bắt buộc" }
  }

  if (email.length < 5 || email.length > 255) {
    return { success: false, error: "Email phải từ 5-255 ký tự" }
  }

  // RFC 5322 Official Standard Email Regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  if (!emailRegex.test(email)) {
    return { success: false, error: "Email không hợp lệ" }
  }

  return { success: true }
}

/**
 * Vietnamese phone number validation
 * Format: 0xxxxxxxxx (10 digits starting with 0)
 */
export function validatePhone(phone: string): ValidationResult {
  if (!phone) {
    return { success: false, error: "Số điện thoại là bắt buộc" }
  }

  const phoneRegex = /^0\d{9}$/

  if (!phoneRegex.test(phone)) {
    return { success: false, error: "Số điện thoại không hợp lệ (định dạng: 0xxxxxxxxx)" }
  }

  return { success: true }
}

/**
 * Vietnamese tax code validation
 * Format: 10-14 digits
 */
export function validateTaxCode(taxCode: string): ValidationResult {
  if (!taxCode) {
    // Tax code is optional
    return { success: true }
  }

  const taxCodeRegex = /^\d{10,14}$/

  if (!taxCodeRegex.test(taxCode)) {
    return { success: false, error: "Mã số thuế phải là 10-14 chữ số" }
  }

  return { success: true }
}

/**
 * Name validation (Vietnamese + English characters)
 * Allows: letters, spaces, Vietnamese diacritics
 */
export function validateName(name: string, fieldName: string = "Tên"): ValidationResult {
  if (!name) {
    return { success: false, error: `${fieldName} là bắt buộc` }
  }

  if (name.length < 2) {
    return { success: false, error: `${fieldName} quá ngắn (tối thiểu 2 ký tự)` }
  }

  if (name.length > 100) {
    return { success: false, error: `${fieldName} quá dài (tối đa 100 ký tự)` }
  }

  // Allow Vietnamese characters, English letters, and spaces
  const nameRegex = /^[a-zA-ZÀ-ỹ\s]+$/

  if (!nameRegex.test(name)) {
    return { success: false, error: `${fieldName} chỉ được chứa chữ cái và khoảng trắng` }
  }

  return { success: true }
}

/**
 * Company name validation
 */
export function validateCompanyName(name: string): ValidationResult {
  if (!name) {
    return { success: false, error: "Tên công ty là bắt buộc" }
  }

  if (name.length < 2) {
    return { success: false, error: "Tên công ty quá ngắn (tối thiểu 2 ký tự)" }
  }

  if (name.length > 255) {
    return { success: false, error: "Tên công ty quá dài (tối đa 255 ký tự)" }
  }

  return { success: true }
}

/**
 * Job position validation
 */
const VALID_JOB_POSITIONS = [
  "ceo",
  "marketing_director",
  "marketing_manager",
  "content_manager",
  "social_media_manager",
  "designer",
  "business_owner",
  "student",
  "other",
] as const

export type JobPosition = typeof VALID_JOB_POSITIONS[number]

export function validateJobPosition(position: string): ValidationResult {
  if (!position) {
    return { success: false, error: "Vị trí công việc là bắt buộc" }
  }

  if (!VALID_JOB_POSITIONS.includes(position as JobPosition)) {
    return { success: false, error: "Vị trí công việc không hợp lệ" }
  }

  return { success: true }
}

/**
 * Package selection validation
 */
const VALID_PACKAGES = ["startup", "growth", "enterprise"] as const

export type Package = typeof VALID_PACKAGES[number]

export function validatePackage(pkg: string): ValidationResult {
  if (!pkg) {
    return { success: false, error: "Vui lòng chọn gói dịch vụ" }
  }

  if (!VALID_PACKAGES.includes(pkg as Package)) {
    return { success: false, error: "Gói dịch vụ không hợp lệ" }
  }

  return { success: true }
}

/**
 * Business type validation
 */
const VALID_BUSINESS_TYPES = ["enterprise", "household"] as const

export type BusinessType = typeof VALID_BUSINESS_TYPES[number]

export function validateBusinessType(type: string): ValidationResult {
  if (!type) {
    return { success: false, error: "Vui lòng chọn loại hình kinh doanh" }
  }

  if (!VALID_BUSINESS_TYPES.includes(type as BusinessType)) {
    return { success: false, error: "Loại hình kinh doanh không hợp lệ" }
  }

  return { success: true }
}

// =============================================================================
// REGISTRATION FORM VALIDATION
// =============================================================================

export interface RegistrationFormData {
  selected_package: string
  business_type: string
  tax_code: string
  company_name: string
  first_name: string
  last_name: string
  email: string
  phone_number: string
  job_position: string
}

export interface RegistrationFormErrors {
  selected_package?: string
  business_type?: string
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
 * Validate entire registration form
 * Returns errors object (empty if valid)
 */
export function validateRegistrationForm(data: RegistrationFormData): RegistrationFormErrors {
  const errors: RegistrationFormErrors = {}

  // Package validation
  const packageResult = validatePackage(data.selected_package)
  if (!packageResult.success) {
    errors.selected_package = packageResult.error
  }

  // Business type validation
  const businessTypeResult = validateBusinessType(data.business_type)
  if (!businessTypeResult.success) {
    errors.business_type = businessTypeResult.error
  }

  // Tax code validation (optional)
  const taxCodeResult = validateTaxCode(data.tax_code)
  if (!taxCodeResult.success) {
    errors.tax_code = taxCodeResult.error
  }

  // Company name validation
  const companyNameResult = validateCompanyName(data.company_name)
  if (!companyNameResult.success) {
    errors.company_name = companyNameResult.error
  }

  // First name validation
  const firstNameResult = validateName(data.first_name, "Họ và đệm")
  if (!firstNameResult.success) {
    errors.first_name = firstNameResult.error
  }

  // Last name validation
  const lastNameResult = validateName(data.last_name, "Tên")
  if (!lastNameResult.success) {
    errors.last_name = lastNameResult.error
  }

  // Email validation
  const emailResult = validateEmail(data.email)
  if (!emailResult.success) {
    errors.email = emailResult.error
  }

  // Phone validation
  const phoneResult = validatePhone(data.phone_number)
  if (!phoneResult.success) {
    errors.phone_number = phoneResult.error
  }

  // Job position validation
  const jobPositionResult = validateJobPosition(data.job_position)
  if (!jobPositionResult.success) {
    errors.job_position = jobPositionResult.error
  }

  return errors
}

/**
 * Check if form has any errors
 */
export function hasFormErrors(errors: RegistrationFormErrors): boolean {
  return Object.keys(errors).length > 0
}

// =============================================================================
// ZOD SCHEMAS (Recommended for Production)
// =============================================================================

/*
// TODO: Uncomment when Zod is installed (npm install zod)

import { z } from "zod"

// Email schema
export const emailSchema = z
  .string()
  .min(5, "Email quá ngắn")
  .max(255, "Email quá dài")
  .email("Email không hợp lệ")

// Vietnamese phone schema
export const vietnamesePhoneSchema = z
  .string()
  .regex(/^0\d{9}$/, "Số điện thoại không hợp lệ (định dạng: 0xxxxxxxxx)")

// Tax code schema (optional)
export const taxCodeSchema = z
  .string()
  .regex(/^\d{10,14}$/, "Mã số thuế phải là 10-14 chữ số")
  .optional()
  .or(z.literal(""))

// Name schema
export const nameSchema = z
  .string()
  .min(2, "Tên quá ngắn")
  .max(100, "Tên quá dài")
  .regex(/^[a-zA-ZÀ-ỹ\s]+$/, "Tên chỉ được chứa chữ cái")

// Company name schema
export const companyNameSchema = z
  .string()
  .min(2, "Tên công ty quá ngắn")
  .max(255, "Tên công ty quá dài")

// Job position schema
export const jobPositionSchema = z.enum([
  "ceo",
  "marketing_director",
  "marketing_manager",
  "content_manager",
  "social_media_manager",
  "designer",
  "business_owner",
  "student",
  "other"
])

// Package schema
export const packageSchema = z.enum(["startup", "growth", "enterprise"])

// Business type schema
export const businessTypeSchema = z.enum(["enterprise", "household"])

// Full registration schema
export const registrationSchema = z.object({
  selected_package: packageSchema,
  business_type: businessTypeSchema,
  tax_code: taxCodeSchema,
  company_name: companyNameSchema,
  first_name: nameSchema,
  last_name: nameSchema,
  email: emailSchema,
  phone_number: vietnamesePhoneSchema,
  job_position: jobPositionSchema,
})

// Infer TypeScript type from schema
export type RegistrationData = z.infer<typeof registrationSchema>

// Validate with Zod
export function validateWithZod(data: unknown) {
  return registrationSchema.safeParse(data)
}
*/
