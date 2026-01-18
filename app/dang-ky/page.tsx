"use client"

import type React from "react"
import { useState, useRef, useEffect, Suspense } from "react"
import Link from "next/link"
import Image from "next/image"
import { useSearchParams } from "next/navigation"
import { ArrowLeft, Send, CheckCircle2, Sparkles, Check, Loader2, AlertCircle, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

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

const packageOptions = [
  { id: "startup", name: "Startup", price: "3.5tr/tháng", credits: "3,500 credits" },
  { id: "growth", name: "Growth", price: "6.9tr/tháng", credits: "7,500 credits", popular: true },
  { id: "enterprise", name: "Enterprise", price: "Liên hệ", credits: "Unlimited" },
]

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

function RegisterFormContent() {
  const searchParams = useSearchParams()
  const packageFromUrl = searchParams.get("package") || ""

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    selected_package: packageFromUrl,
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
  const mainHeadingRef = useRef<HTMLHeadingElement>(null)
  const formRef = useRef<HTMLFormElement>(null)
  const [liveMessage, setLiveMessage] = useState("")

  useEffect(() => {
    if (packageFromUrl) {
      setFormData((prev) => ({ ...prev, selected_package: packageFromUrl }))
    }
  }, [packageFromUrl])

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

    if (!formData.selected_package) {
      newErrors.selected_package = "Vui lòng chọn gói dùng thử"
    }

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

  const handlePackageSelect = (packageId: string) => {
    setFormData((prev) => ({ ...prev, selected_package: packageId }))
    if (errors.selected_package) {
      setErrors((prev) => ({ ...prev, selected_package: undefined }))
    }
  }

  const removePackage = () => {
    setFormData((prev) => ({ ...prev, selected_package: "" }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!validateForm()) {
      setLiveMessage("Vui lòng kiểm tra và sửa các lỗi trong biểu mẫu")
      return
    }

    setIsLoading(true)
    setErrors({})
    setLiveMessage("Đang gửi đăng ký...")

    try {
      const submitData = {
        name: `${formData.first_name} ${formData.last_name}`.trim(),
        email: formData.email,
        phone_number: formData.phone_number,
        company_name: formData.company_name,
        customer_need: `Gói: ${formData.selected_package}, Loại hình: ${formData.business_type === "enterprise" ? "Doanh nghiệp" : "Hộ kinh doanh"}, MST: ${formData.tax_code || "N/A"}, Vị trí: ${formData.job_position}`,
      }

      const response = await fetch("https://api-ai-code.dsp.one/api/users/register-company", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(submitData),
      })

      const data = await response.json()

      if (response.ok) {
        setIsSubmitted(true)
        setLiveMessage("Đăng ký thành công! Cảm ơn bạn đã quan tâm đến AI Marketing OS.")
        setFormData({
          selected_package: "",
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
        setLiveMessage(`Lỗi: ${data.message || "Có lỗi xảy ra, vui lòng thử lại"}`)
      }
    } catch (error) {
      setErrors({
        general: "Không thể kết nối đến server, vui lòng thử lại sau",
      })
      setLiveMessage("Lỗi: Không thể kết nối đến server, vui lòng thử lại sau")
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    if (isSubmitted && mainHeadingRef.current) {
      mainHeadingRef.current.focus()
    }
  }, [isSubmitted])

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape" && isSubmitted) {
      setIsSubmitted(false)
    }
  }

  if (isSubmitted) {
    return (
      <div
        className="min-h-screen bg-gradient-to-b from-white to-primary-50 flex items-center justify-center p-4"
        onKeyDown={handleKeyDown}
      >
        <a
          href="#success-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-lg"
        >
          Chuyển đến nội dung chính
        </a>

        <div id="success-content" className="max-w-md w-full text-center">
          <div
            className="w-24 h-24 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center animate-bounce"
            role="img"
            aria-label="Biểu tượng thành công"
          >
            <CheckCircle2 className="w-12 h-12 text-green-600" aria-hidden="true" />
          </div>
          <h1 ref={mainHeadingRef} tabIndex={-1} className="text-3xl font-bold text-gray-900 mb-3 focus:outline-none">
            Đăng ký thành công!
          </h1>
          <p className="text-gray-600 mb-8 text-lg">
            Cảm ơn bạn đã quan tâm đến AI Marketing OS. Đội ngũ của chúng tôi sẽ liên hệ với bạn trong vòng 24 giờ.
          </p>
          <div className="flex gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="rounded-full px-8 min-h-[48px] min-w-[48px]"
              aria-label="Quay lại trang chủ"
            >
              <Link href="/">Quay lại trang chủ</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-8 bg-transparent min-h-[48px] min-w-[48px]"
              onClick={() => setIsSubmitted(false)}
              aria-label="Đăng ký thêm một người khác"
            >
              Đăng ký thêm
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-white to-blue-50/50 relative overflow-hidden">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-lg"
      >
        Chuyển đến nội dung chính
      </a>

      <div
        className="absolute top-1/4 -left-32 w-96 h-96 bg-primary-200/30 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 -right-32 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <header className="border-b border-gray-100 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2" aria-label="Tiên Phong CDS - Về trang chủ">
            <Image
              src="https://tienphongcds.com/_next/image?url=https%3A%2F%2Fmedia.newweb.vn%2Ffile%2FdoMFbzZ4q&w=256&q=75"
              alt="Logo Tiên Phong CDS"
              width={140}
              height={36}
              className="h-9 w-auto"
              priority
            />
          </Link>
          <Button
            variant="ghost"
            size="sm"
            asChild
            className="text-gray-600 hover:text-gray-900 min-h-[48px] min-w-[48px]"
            aria-label="Quay lại trang chủ"
          >
            <Link href="/" className="gap-2">
              <ArrowLeft className="w-4 h-4" aria-hidden="true" />
              <span>Quay lại</span>
            </Link>
          </Button>
        </div>
      </header>

      <main id="main-content" className="py-12 md:py-20 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div className="lg:sticky lg:top-24">
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 mb-6"
                role="status"
                aria-hidden="true"
              >
                <Sparkles className="w-4 h-4 text-blue-600" aria-hidden="true" />
                <span className="text-sm font-semibold text-blue-700">Dùng thử miễn phí</span>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-gray-900 mb-5 leading-tight">
                Đăng ký tài khoản{" "}
                <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  dùng thử AI Marketing
                </span>
              </h1>

              <ul className="space-y-4" aria-label="Danh sách lợi ích">
                {[
                  "Tư vấn 1-1 với chuyên gia Marketing",
                  "Demo sản phẩm theo nhu cầu cụ thể",
                  "Nhận báo giá chi tiết và ưu đãi đặc biệt",
                  "Hỗ trợ triển khai trong 24 giờ",
                ].map((benefit, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-4 p-3 rounded-xl hover:bg-blue-50/50 transition-colors group"
                  >
                    <div
                      className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-200 transition-colors"
                      aria-hidden="true"
                    >
                      <Check className="w-4 h-4 text-blue-600" />
                    </div>
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative">
              <div
                className="absolute -inset-4 bg-gradient-to-br from-blue-100/50 to-cyan-100/30 rounded-3xl blur-2xl -z-10"
                aria-hidden="true"
              />

              <div className="bg-white rounded-3xl border border-gray-200 p-8 md:p-10 shadow-xl shadow-gray-200/50">
                <h2 className="text-xl font-bold text-gray-900 mb-8">Thông tin đăng ký</h2>

                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                  noValidate
                  aria-label="Biểu mẫu đăng ký"
                  onKeyDown={handleKeyDown}
                >
                  {/* Package Selection Section */}
                  <div className="space-y-3">
                    <Label className="text-sm font-medium text-gray-900">
                      Gói dịch vụ <span className="text-red-600" aria-label="bắt buộc">*</span>
                    </Label>

                    {/* Selected Package Display */}
                    {formData.selected_package ? (
                      <div className="relative">
                        {packageOptions
                          .filter((pkg) => pkg.id === formData.selected_package)
                          .map((selectedPkg) => (
                            <div
                              key={selectedPkg.id}
                              className={`relative rounded-xl border-2 p-4 transition-all ${
                                selectedPkg.popular
                                  ? "border-blue-500 bg-gradient-to-br from-blue-50 to-cyan-50"
                                  : "border-gray-300 bg-gray-50"
                              }`}
                            >
                              {selectedPkg.popular && (
                                <div className="absolute -top-3 left-4 bg-gradient-to-r from-amber-400 to-orange-400 text-white text-xs font-bold px-3 py-1 rounded-full">
                                  Phổ biến
                                </div>
                              )}
                              <div className="flex items-start justify-between gap-3">
                                <div className="flex items-center gap-3 flex-1 min-w-0">
                                  <div
                                    className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                                      selectedPkg.popular ? "bg-blue-500" : "bg-gray-600"
                                    }`}
                                  >
                                    <Check className="w-5 h-5 text-white" />
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <h3 className="font-bold text-gray-900 text-base">{selectedPkg.name}</h3>
                                    <p className="text-sm text-gray-600 mt-0.5">
                                      {selectedPkg.price} • {selectedPkg.credits}
                                    </p>
                                  </div>
                                </div>
                                <button
                                  type="button"
                                  onClick={removePackage}
                                  className="p-2 rounded-lg hover:bg-red-100 text-gray-500 hover:text-red-600 transition-colors flex-shrink-0"
                                  aria-label="Xóa gói đã chọn"
                                >
                                  <X className="w-5 h-5" />
                                </button>
                              </div>
                            </div>
                          ))}
                      </div>
                    ) : (
                      /* Package Selection Grid */
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {packageOptions.map((pkg) => (
                          <button
                            key={pkg.id}
                            type="button"
                            onClick={() => handlePackageSelect(pkg.id)}
                            className={`relative p-4 rounded-xl border-2 transition-all text-left hover:shadow-md ${
                              pkg.popular
                                ? "border-blue-500 bg-gradient-to-br from-blue-50 to-cyan-50 hover:border-blue-600"
                                : "border-gray-200 bg-white hover:border-blue-300"
                            }`}
                          >
                            {pkg.popular && (
                              <div className="absolute -top-2 left-3 bg-gradient-to-r from-amber-400 to-orange-400 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                                Phổ biến
                              </div>
                            )}
                            <div className="space-y-2">
                              <h3 className="font-bold text-gray-900 text-sm">{pkg.name}</h3>
                              <p className="text-xs text-blue-600 font-semibold">{pkg.price}</p>
                              <p className="text-xs text-gray-500">{pkg.credits}</p>
                            </div>
                          </button>
                        ))}
                      </div>
                    )}

                    {errors.selected_package && (
                      <p role="alert" className="text-sm text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" aria-hidden="true" />
                        {errors.selected_package}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label className="text-sm font-medium text-gray-900">Loại hình kinh doanh</Label>
                    <div className="flex items-center gap-6">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="business_type"
                          value="enterprise"
                          checked={formData.business_type === "enterprise"}
                          onChange={handleInputChange}
                          className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                        />
                        <span className="text-gray-700">Doanh nghiệp</span>
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
                        <span className="text-gray-700">Hộ kinh doanh</span>
                      </label>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="tax_code" className="text-sm font-medium text-gray-900">
                        Mã số thuế
                      </Label>
                      <Input
                        id="tax_code"
                        name="tax_code"
                        value={formData.tax_code}
                        onChange={handleInputChange}
                        placeholder="Nhập mã số thuế"
                        className="h-12 rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500/20 text-base placeholder:text-gray-400"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company_name" className="text-sm font-medium text-gray-900">
                        Tên công ty
                      </Label>
                      <Input
                        id="company_name"
                        name="company_name"
                        value={formData.company_name}
                        onChange={handleInputChange}
                        placeholder="Nhập tên công ty"
                        autoComplete="organization"
                        className="h-12 rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500/20 text-base placeholder:text-gray-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="first_name" className="text-sm font-medium text-gray-900">
                        Họ và đệm{" "}
                        <span className="text-red-600" aria-label="bắt buộc">
                          *
                        </span>
                      </Label>
                      <Input
                        id="first_name"
                        name="first_name"
                        value={formData.first_name}
                        onChange={handleInputChange}
                        placeholder="Nhập họ và đệm"
                        required
                        autoComplete="family-name"
                        aria-required="true"
                        aria-invalid={errors.first_name ? "true" : "false"}
                        aria-describedby={errors.first_name ? "first-name-error" : undefined}
                        className={`h-12 rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500/20 text-base placeholder:text-gray-400 ${
                          errors.first_name ? "border-red-500 focus:border-red-500" : ""
                        }`}
                      />
                      {errors.first_name && (
                        <p id="first-name-error" role="alert" className="text-sm text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" aria-hidden="true" />
                          {errors.first_name}
                        </p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last_name" className="text-sm font-medium text-gray-900">
                        Tên{" "}
                        <span className="text-red-600" aria-label="bắt buộc">
                          *
                        </span>
                      </Label>
                      <Input
                        id="last_name"
                        name="last_name"
                        value={formData.last_name}
                        onChange={handleInputChange}
                        placeholder="Nhập tên"
                        required
                        autoComplete="given-name"
                        aria-required="true"
                        aria-invalid={errors.last_name ? "true" : "false"}
                        aria-describedby={errors.last_name ? "last-name-error" : undefined}
                        className={`h-12 rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500/20 text-base placeholder:text-gray-400 ${
                          errors.last_name ? "border-red-500 focus:border-red-500" : ""
                        }`}
                      />
                      {errors.last_name && (
                        <p id="last-name-error" role="alert" className="text-sm text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" aria-hidden="true" />
                          {errors.last_name}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium text-gray-900">
                        Email{" "}
                        <span className="text-red-600" aria-label="bắt buộc">
                          *
                        </span>
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Nhập email"
                        required
                        autoComplete="email"
                        inputMode="email"
                        aria-required="true"
                        aria-invalid={errors.email ? "true" : "false"}
                        aria-describedby={errors.email ? "email-error" : undefined}
                        className={`h-12 rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500/20 text-base placeholder:text-gray-400 ${
                          errors.email ? "border-red-500 focus:border-red-500" : ""
                        }`}
                      />
                      {errors.email && (
                        <p id="email-error" role="alert" className="text-sm text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" aria-hidden="true" />
                          {errors.email}
                        </p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone_number" className="text-sm font-medium text-gray-900">
                        Số điện thoại{" "}
                        <span className="text-red-600" aria-label="bắt buộc">
                          *
                        </span>
                      </Label>
                      <Input
                        id="phone_number"
                        name="phone_number"
                        type="tel"
                        value={formData.phone_number}
                        onChange={handleInputChange}
                        placeholder="Nhập số điện thoại"
                        required
                        pattern="0\d{9}"
                        autoComplete="tel"
                        inputMode="tel"
                        aria-required="true"
                        aria-invalid={errors.phone_number ? "true" : "false"}
                        aria-describedby={errors.phone_number ? "phone-error" : undefined}
                        className={`h-12 rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500/20 text-base placeholder:text-gray-400 ${
                          errors.phone_number ? "border-red-500 focus:border-red-500" : ""
                        }`}
                      />
                      {errors.phone_number && (
                        <p id="phone-error" role="alert" className="text-sm text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" aria-hidden="true" />
                          {errors.phone_number}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="job_position" className="text-sm font-medium text-gray-900">
                      Vị trí công việc{" "}
                      <span className="text-red-600" aria-label="bắt buộc">
                        *
                      </span>
                    </Label>
                    <select
                      id="job_position"
                      name="job_position"
                      value={formData.job_position}
                      onChange={handleInputChange}
                      aria-required="true"
                      aria-invalid={errors.job_position ? "true" : "false"}
                      aria-describedby={errors.job_position ? "job-error" : undefined}
                      className={`w-full h-12 px-4 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-base bg-white ${
                        errors.job_position ? "border-red-500 focus:border-red-500" : ""
                      } ${!formData.job_position ? "text-gray-400" : "text-gray-900"}`}
                    >
                      {jobPositions.map((position) => (
                        <option key={position.id} value={position.id} disabled={position.id === ""}>
                          {position.label}
                        </option>
                      ))}
                    </select>
                    {errors.job_position && (
                      <p id="job-error" role="alert" className="text-sm text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" aria-hidden="true" />
                        {errors.job_position}
                      </p>
                    )}
                  </div>

                  {errors.general && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-xl" role="alert">
                      <p className="text-sm text-red-600 flex items-center gap-2">
                        <AlertCircle className="w-5 h-5" aria-hidden="true" />
                        {errors.general}
                      </p>
                    </div>
                  )}

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full h-14 text-base font-semibold rounded-xl bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-600/30 hover:shadow-xl hover:shadow-blue-600/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 min-h-[48px] touch-manipulation"
                    disabled={isLoading}
                    aria-label={isLoading ? "Đang gửi đăng ký" : "Đăng ký"}
                    aria-busy={isLoading}
                  >
                    {isLoading ? (
                      <span className="flex items-center gap-2">
                        <Loader2 className="w-5 h-5 animate-spin" aria-hidden="true" />
                        <span>Đang gửi...</span>
                        <span className="sr-only">Đang xử lý đăng ký của bạn</span>
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <span>Đăng ký</span>
                        <Send className="w-5 h-5" aria-hidden="true" />
                      </span>
                    )}
                  </Button>

                  <p className="text-sm text-gray-600 text-center leading-relaxed">
                    Bằng việc đăng ký, bạn đồng ý với{" "}
                    <Link
                      href="/dieu-khoan"
                      className="text-blue-600 hover:text-blue-700 hover:underline font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded"
                    >
                      Điều khoản sử dụng
                    </Link>{" "}
                    và{" "}
                    <Link
                      href="/chinh-sach-bao-mat"
                      className="text-blue-600 hover:text-blue-700 hover:underline font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded"
                    >
                      Chính sách bảo mật
                    </Link>{" "}
                    của chúng tôi.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>

      <div role="status" aria-live="polite" aria-atomic="true" className="sr-only">
        {liveMessage}
      </div>
    </div>
  )
}

export default function RegisterPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
        </div>
      }
    >
      <RegisterFormContent />
    </Suspense>
  )
}
