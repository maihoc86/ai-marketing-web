"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { X, CheckCircle2, Loader2, AlertCircle, Send, Sparkles, Gift, Users, Headphones } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { api, type ApiError } from "@/lib/api-client"

const STORAGE_KEY = "dxai_cta_modal_dismissed"

interface FormData {
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

interface FormErrors {
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

const jobPositions = [
  { id: "", label: "Chọn vị trí công việc" },
  { id: "ceo", label: "CEO / Giám đốc" },
  { id: "marketing_director", label: "Giám đốc Marketing" },
  { id: "marketing_manager", label: "Marketing Manager" },
  { id: "content_manager", label: "Content Manager" },
  { id: "social_media_manager", label: "Social Media Manager" },
  { id: "designer", label: "Designer" },
  { id: "developer", label: "Developer" },
  { id: "other", label: "Khác" },
]

export function CtaRegisterModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    selected_package: "growth",
    business_type: "enterprise",
    tax_code: "",
    company_name: "",
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    job_position: "",
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const firstInputRef = useRef<HTMLInputElement>(null)

  // Check localStorage and show modal after delay for first-time visitors
  useEffect(() => {
    const isDismissed = localStorage.getItem(STORAGE_KEY)
    if (!isDismissed) {
      const timer = setTimeout(() => {
        setIsOpen(true)
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [])

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  // Auto-focus first input when modal opens
  useEffect(() => {
    if (isOpen && firstInputRef.current && !isSubmitted) {
      setTimeout(() => {
        firstInputRef.current?.focus()
      }, 100)
    }
  }, [isOpen, isSubmitted])

  // Handle ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        handleClose()
      }
    }
    window.addEventListener("keydown", handleEsc)
    return () => window.removeEventListener("keydown", handleEsc)
  }, [isOpen])

  const handleClose = () => {
    localStorage.setItem(STORAGE_KEY, "true")
    setIsOpen(false)
  }

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const validatePhone = (phone: string): boolean => {
    const phoneRegex = /^0\d{9}$/
    return phoneRegex.test(phone.replace(/\s/g, ""))
  }

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.first_name.trim()) {
      newErrors.first_name = "Vui lòng nhập họ và đệm"
    }

    if (!formData.last_name.trim()) {
      newErrors.last_name = "Vui lòng nhập tên"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Vui lòng nhập email"
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Email không hợp lệ"
    }

    if (!formData.phone_number.trim()) {
      newErrors.phone_number = "Vui lòng nhập số điện thoại"
    } else if (!validatePhone(formData.phone_number)) {
      newErrors.phone_number = "Số điện thoại không hợp lệ (10 chữ số, bắt đầu bằng 0)"
    }

    if (!formData.job_position) {
      newErrors.job_position = "Vui lòng chọn vị trí công việc"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsLoading(true)
    setErrors({})

    try {
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
        localStorage.setItem(STORAGE_KEY, "true")
        setFormData({
          selected_package: "growth",
          business_type: "enterprise",
          tax_code: "",
          company_name: "",
          first_name: "",
          last_name: "",
          email: "",
          phone_number: "",
          job_position: "",
        })
      } else {
        setErrors({
          general: data.message || "Có lỗi xảy ra, vui lòng thử lại",
        })
      }
    } catch (error) {
      // Handle API errors with better messages
      const apiError = error as ApiError
      setErrors({
        general: apiError.message || "Không thể kết nối đến server, vui lòng thử lại sau",
      })
    } finally {
      setIsLoading(false)
    }
  }

  if (!isOpen) return null

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
        <div className="w-full max-w-md bg-white rounded-3xl p-8 shadow-2xl" onClick={(e) => e.stopPropagation()}>
          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10 text-green-600" />
            </div>
            <h2 id="success-title" className="text-2xl font-bold text-gray-900 mb-3">
              Đăng ký thành công!
            </h2>
            <p className="text-gray-600 mb-6">
              Cảm ơn bạn đã quan tâm đến AI Marketing OS. Đội ngũ của chúng tôi sẽ liên hệ với bạn trong vòng 24 giờ.
            </p>
            <Button onClick={handleClose} className="w-full h-12 rounded-xl bg-blue-600 hover:bg-blue-700">
              Đóng
            </Button>
          </div>
        </div>
      </div>
    )
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
        className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="grid lg:grid-cols-[400px_1fr]">
          {/* Left column - Branding */}
          <div className="hidden lg:flex flex-col justify-between p-8 bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-500 text-white relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-cyan-400/20 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10">
              {/* Logo */}
              <div className="mb-8">
                <Image
                  src="https://tienphongcds.com/_next/image?url=https%3A%2F%2Fmedia.newweb.vn%2Ffile%2FdoMFbzZ4q&w=256&q=75"
                  alt="Tiên Phong CDS"
                  width={140}
                  height={36}
                  className="h-9 w-auto brightness-0 invert"
                />
              </div>

              {/* Main heading */}
              <h2 className="text-3xl font-bold mb-6 leading-tight">ĐỪNG BỎ LỠ!</h2>

              {/* Benefits list */}
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-cyan-400/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Gift className="w-3.5 h-3.5 text-cyan-100" />
                  </div>
                  <span className="text-white/90 text-sm">Demo miễn phí AI Marketing OS</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-cyan-400/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Sparkles className="w-3.5 h-3.5 text-cyan-100" />
                  </div>
                  <span className="text-white/90 text-sm">Báo giá cá nhân hóa theo quy mô doanh nghiệp</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-cyan-400/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Headphones className="w-3.5 h-3.5 text-cyan-100" />
                  </div>
                  <span className="text-white/90 text-sm">Tư vấn 1:1 bởi chuyên gia Marketing</span>
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
                    <div className="text-white/80 text-sm">Doanh nghiệp đã tin chọn</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom trust line */}
            <div className="relative z-10 mt-6 pt-4 border-t border-white/20">
              <p className="text-white/70 text-sm">Powered by Tiên Phong CDS & DXAI</p>
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
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100 text-blue-700 text-xs font-medium mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                Chỉ 10s – Nhận demo toàn bộ tính năng
              </div>
              <h3 id="modal-title" className="text-2xl font-bold text-gray-900">
                BÁO GIÁ & DÙNG THỬ NGAY!
              </h3>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              {/* Business type */}
              <div className="space-y-2">
                <Label className="text-sm font-medium text-gray-900">Loại hình kinh doanh</Label>
                <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="business_type"
                      value="enterprise"
                      checked={formData.business_type === "enterprise"}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                    />
                    <span className="text-gray-700 text-sm">Doanh nghiệp</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="business_type"
                      value="household"
                      checked={formData.business_type === "household"}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                    />
                    <span className="text-gray-700 text-sm">Hộ kinh doanh</span>
                  </label>
                </div>
              </div>

              {/* Tax code & Company name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label htmlFor="modal_tax_code" className="text-sm font-medium text-gray-900">
                    Mã số thuế
                  </Label>
                  <Input
                    ref={firstInputRef}
                    id="modal_tax_code"
                    name="tax_code"
                    value={formData.tax_code}
                    onChange={handleInputChange}
                    placeholder="Nhập mã số thuế"
                    className="h-11 rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500/20"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="modal_company_name" className="text-sm font-medium text-gray-900">
                    Tên công ty
                  </Label>
                  <Input
                    id="modal_company_name"
                    name="company_name"
                    value={formData.company_name}
                    onChange={handleInputChange}
                    placeholder="Nhập tên công ty"
                    className="h-11 rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500/20"
                  />
                </div>
              </div>

              {/* First name & Last name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label htmlFor="modal_first_name" className="text-sm font-medium text-gray-900">
                    Họ và đệm <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="modal_first_name"
                    name="first_name"
                    value={formData.first_name}
                    onChange={handleInputChange}
                    placeholder="Nhập họ và đệm"
                    required
                    aria-invalid={errors.first_name ? "true" : "false"}
                    className={`h-11 rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500/20 ${
                      errors.first_name ? "border-red-500" : ""
                    }`}
                  />
                  {errors.first_name && (
                    <p className="text-xs text-red-600 flex items-center gap-1 mt-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.first_name}
                    </p>
                  )}
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="modal_last_name" className="text-sm font-medium text-gray-900">
                    Tên <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="modal_last_name"
                    name="last_name"
                    value={formData.last_name}
                    onChange={handleInputChange}
                    placeholder="Nhập tên"
                    required
                    aria-invalid={errors.last_name ? "true" : "false"}
                    className={`h-11 rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500/20 ${
                      errors.last_name ? "border-red-500" : ""
                    }`}
                  />
                  {errors.last_name && (
                    <p className="text-xs text-red-600 flex items-center gap-1 mt-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.last_name}
                    </p>
                  )}
                </div>
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label htmlFor="modal_email" className="text-sm font-medium text-gray-900">
                    Email <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="modal_email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Nhập email"
                    required
                    inputMode="email"
                    aria-invalid={errors.email ? "true" : "false"}
                    className={`h-11 rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500/20 ${
                      errors.email ? "border-red-500" : ""
                    }`}
                  />
                  {errors.email && (
                    <p className="text-xs text-red-600 flex items-center gap-1 mt-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.email}
                    </p>
                  )}
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="modal_phone_number" className="text-sm font-medium text-gray-900">
                    Số điện thoại <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="modal_phone_number"
                    name="phone_number"
                    type="tel"
                    value={formData.phone_number}
                    onChange={handleInputChange}
                    placeholder="Nhập số điện thoại"
                    required
                    inputMode="tel"
                    aria-invalid={errors.phone_number ? "true" : "false"}
                    className={`h-11 rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500/20 ${
                      errors.phone_number ? "border-red-500" : ""
                    }`}
                  />
                  {errors.phone_number && (
                    <p className="text-xs text-red-600 flex items-center gap-1 mt-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.phone_number}
                    </p>
                  )}
                </div>
              </div>

              {/* Job position */}
              <div className="space-y-1.5">
                <Label htmlFor="modal_job_position" className="text-sm font-medium text-gray-900">
                  Vị trí công việc <span className="text-red-500">*</span>
                </Label>
                <select
                  id="modal_job_position"
                  name="job_position"
                  value={formData.job_position}
                  onChange={handleInputChange}
                  aria-invalid={errors.job_position ? "true" : "false"}
                  className={`w-full h-11 px-4 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-sm bg-white transition-colors ${
                    errors.job_position ? "border-red-500" : ""
                  } ${!formData.job_position ? "text-gray-400" : "text-gray-900"}`}
                >
                  {jobPositions.map((position) => (
                    <option key={position.id} value={position.id} disabled={position.id === ""}>
                      {position.label}
                    </option>
                  ))}
                </select>
                {errors.job_position && (
                  <p className="text-xs text-red-600 flex items-center gap-1 mt-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.job_position}
                  </p>
                )}
              </div>

              {/* General error */}
              {errors.general && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-xl">
                  <p className="text-sm text-red-600 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    {errors.general}
                  </p>
                </div>
              )}

              {/* Submit button */}
              <Button
                type="submit"
                size="lg"
                className="w-full h-12 text-base font-semibold rounded-xl bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-600/25 hover:shadow-xl hover:shadow-blue-600/30 transition-all duration-200"
                disabled={isLoading}
                aria-label={isLoading ? "Đang gửi đăng ký" : "Nhận báo giá & Demo miễn phí"}
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
                <Link href="/dieu-khoan" className="text-blue-600 hover:underline">
                  Điều khoản sử dụng
                </Link>{" "}
                và{" "}
                <Link href="/chinh-sach-bao-mat" className="text-blue-600 hover:underline">
                  Chính sách bảo mật
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
