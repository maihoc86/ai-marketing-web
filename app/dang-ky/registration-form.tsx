"use client";

import Link from "next/link";
import { Check, Star, Loader2, AlertCircle, CheckCircle } from "lucide-react";
import { Navbar } from "@/components/landing/navbar";
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
  onBusinessTypeChange: (type: "enterprise" | "household" | "other") => void;
  onSubmit: (e: React.FormEvent) => Promise<void>;
}

const jobPositions = [
  { id: "", label: "Chọn chức vụ" },
  { id: "ceo", label: "CEO / Founder" },
  { id: "cmo", label: "CMO" },
  { id: "marketing_manager", label: "Marketing Manager" },
  { id: "growth_hacker", label: "Growth Hacker" },
  { id: "other", label: "Khác" },
];

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
  return (
    <div className="min-h-screen bg-gray-50">
      {/* System Navbar */}
      <Navbar />

      <div className="flex flex-col lg:flex-row min-h-screen pt-24">
        {/* Left Side: Trust & Value Proposition (40%) */}
        <div className="w-full lg:w-[40%] bg-[#f5f5f5] p-8 lg:p-12 xl:p-16 flex flex-col justify-between border-r border-gray-100">
          <div className="flex flex-col gap-8">
            {/* Hero Section */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#ff7900] text-white text-sm font-semibold rounded-full">
                <Star className="w-4 h-4" aria-hidden="true" />
                Bắt đầu 14 ngày dùng thử miễn phí
              </div>
              <h1 className="text-3xl lg:text-4xl font-extrabold leading-tight text-gray-900">
                Nâng tầm Marketing doanh nghiệp với AI
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed">
                Hơn 2,500+ doanh nghiệp đã chuyển đổi số thành công cùng DXAI.
                Tham gia ngay hôm nay để nhận các ưu đãi độc quyền.
              </p>
            </div>

            {/* Benefits Checklist */}
            <div className="flex flex-col gap-4">
              {[
                "Tư vấn chuyên gia 1-1",
                "Demo sản phẩm trực tiếp",
                "Nhận các ưu đãi đặc biệt dành cho SMBs",
              ].map((benefit, index) => (
                <div key={index} className="flex gap-x-3 items-center">
                  <div className="bg-[#22b5f8]/10 p-1.5 rounded-full">
                    <Check
                      className="w-4 h-4 text-[#22b5f8]"
                      aria-hidden="true"
                    />
                  </div>
                  <p className="text-base font-medium text-gray-900">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Social Proof */}
          <div className="mt-12 lg:mt-0">
            <div className="flex items-center gap-4 mb-3">
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="size-10 rounded-full border-2 border-white bg-gray-200 bg-cover bg-center"
                    style={{
                      backgroundImage: `url('https://ui-avatars.com/api/?name=User+${i}&background=random')`,
                    }}
                  />
                ))}
                <div className="size-10 rounded-full border-2 border-white bg-[#22b5f8]/10 flex items-center justify-center text-xs font-bold text-[#22b5f8]">
                  +2k
                </div>
              </div>
              <div>
                <div className="flex text-yellow-500">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-current"
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="text-xs font-semibold text-gray-500">
                  4.9/5 dựa trên đánh giá người dùng
                </p>
              </div>
            </div>
            <p className="text-sm italic text-gray-600">
              &quot;DXAI giúp chúng tôi tối ưu hóa quy trình làm việc và tăng
              30% tỷ lệ chuyển đổi trong 3 tháng đầu.&quot;
            </p>
          </div>
        </div>

        {/* Right Side: Registration Form (60%) */}
        <div className="w-full lg:w-[60%] bg-white p-8 lg:p-12 xl:p-16 flex flex-col justify-center">
          <div className="max-w-[640px] mx-auto w-full">
            {/* Header */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Đăng ký dùng thử miễn phí
              </h2>
              <p className="text-gray-500">
                Điền thông tin để bắt đầu trải nghiệm DXAI
              </p>
            </div>

            <form onSubmit={onSubmit} className="space-y-6">
              {/* Package Selection */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label
                  className={`relative flex flex-col p-4 border-2 rounded-xl cursor-pointer transition-all ${
                    formData.selected_package === "starter"
                      ? "border-[#22b5f8] bg-[#22b5f8]/10"
                      : "border-gray-200 hover:border-[#22b5f8]/50"
                  }`}
                >
                  <input
                    type="radio"
                    name="package"
                    value="starter"
                    checked={formData.selected_package === "starter"}
                    onChange={() => onPackageSelect("starter")}
                    className="sr-only"
                  />
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-sm font-bold uppercase text-[#22b5f8]">
                      Starter
                    </span>
                    {formData.selected_package === "starter" && (
                      <Check
                        className="w-5 h-5 text-[#22b5f8]"
                        aria-hidden="true"
                      />
                    )}
                  </div>
                  <p className="text-lg font-bold text-gray-900 mb-1">
                    Dành cho cá nhân
                  </p>
                  <p className="text-xs text-gray-500">
                    Miễn phí trải nghiệm đầy đủ tính năng trong 14 ngày.
                  </p>
                </label>

                <label
                  className={`relative flex flex-col p-4 border-2 rounded-xl cursor-pointer transition-all ${
                    formData.selected_package === "business"
                      ? "border-[#22b5f8] bg-[#22b5f8]/10"
                      : "border-gray-200 hover:border-[#22b5f8]/50"
                  }`}
                >
                  <input
                    type="radio"
                    name="package"
                    value="business"
                    checked={formData.selected_package === "business"}
                    onChange={() => onPackageSelect("business")}
                    className="sr-only"
                  />
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-sm font-bold uppercase text-gray-500">
                      Business
                    </span>
                    {formData.selected_package === "business" && (
                      <Check
                        className="w-5 h-5 text-[#22b5f8]"
                        aria-hidden="true"
                      />
                    )}
                  </div>
                  <p className="text-lg font-bold text-gray-900 mb-1">
                    Dành cho tổ chức
                  </p>
                  <p className="text-xs text-gray-500">
                    Giải pháp tùy chỉnh với quản trị viên và phân quyền.
                  </p>
                </label>
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

              {/* Business Info - Only show for Business package */}
              {formData.selected_package === "business" && (
                <>
                  {/* Company Info */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="company_name"
                        className="text-sm font-semibold text-gray-900"
                      >
                        Tên doanh nghiệp / Tổ chức{" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="company_name"
                        name="company_name"
                        type="text"
                        value={formData.company_name}
                        onChange={onInputChange}
                        placeholder="Nhập tên chính thức"
                        className={`w-full h-12 px-4 rounded-lg border focus:ring-2 focus:ring-[#22b5f8] focus:border-[#22b5f8] outline-none transition-all ${
                          errors.company_name
                            ? "border-red-500"
                            : "border-gray-200"
                        }`}
                      />
                      {errors.company_name && (
                        <p
                          role="alert"
                          className="text-sm text-red-600 flex items-center gap-1"
                        >
                          <AlertCircle className="w-4 h-4" aria-hidden="true" />
                          {errors.company_name}
                        </p>
                      )}
                    </div>

                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="tax_code"
                        className="text-sm font-semibold text-gray-900"
                      >
                        Mã số thuế (MST)
                      </label>
                      <input
                        id="tax_code"
                        name="tax_code"
                        type="text"
                        value={formData.tax_code}
                        onChange={onInputChange}
                        placeholder="Ví dụ: 0101234567"
                        className="w-full h-12 px-4 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#22b5f8] focus:border-[#22b5f8] outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Business Type */}
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-gray-900">
                      Loại hình doanh nghiệp
                    </label>
                    <div className="flex flex-wrap gap-4 mt-1">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="business_type"
                          value="enterprise"
                          checked={formData.business_type === "enterprise"}
                          onChange={() => onBusinessTypeChange("enterprise")}
                          className="w-4 h-4 text-[#22b5f8] border-gray-300 focus:ring-[#22b5f8]"
                        />
                        <span className="text-sm text-gray-700">
                          Công ty TNHH/CP
                        </span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="business_type"
                          value="household"
                          checked={formData.business_type === "household"}
                          onChange={() => onBusinessTypeChange("household")}
                          className="w-4 h-4 text-[#22b5f8] border-gray-300 focus:ring-[#22b5f8]"
                        />
                        <span className="text-sm text-gray-700">
                          Hộ kinh doanh
                        </span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="business_type"
                          value="other"
                          checked={formData.business_type === "other"}
                          onChange={() => onBusinessTypeChange("other")}
                          className="w-4 h-4 text-[#22b5f8] border-gray-300 focus:ring-[#22b5f8]"
                        />
                        <span className="text-sm text-gray-700">
                          Tổ chức khác
                        </span>
                      </label>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="address"
                      className="text-sm font-semibold text-gray-900"
                    >
                      Địa chỉ văn phòng
                    </label>
                    <input
                      id="address"
                      name="address"
                      type="text"
                      value={formData.address}
                      onChange={onInputChange}
                      placeholder="Số nhà, tên đường, Quận/Huyện, Tỉnh/Thành phố"
                      className="w-full h-12 px-4 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#22b5f8] focus:border-[#22b5f8] outline-none transition-all"
                    />
                  </div>

                  {/* Divider */}
                  <div className="border-t border-gray-200 my-2" />
                </>
              )}

              {/* Contact Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="full_name"
                    className="text-sm font-semibold text-gray-900"
                  >
                    Họ và tên <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      id="full_name"
                      name="full_name"
                      type="text"
                      value={formData.full_name}
                      onChange={onInputChange}
                      placeholder="Nguyễn Văn A"
                      className={`w-full h-12 px-4 pr-10 rounded-lg border focus:ring-2 focus:ring-[#22b5f8] focus:border-[#22b5f8] outline-none transition-all ${
                        errors.full_name ? "border-red-500" : "border-gray-200"
                      }`}
                    />
                    {formData.full_name && !errors.full_name && (
                      <CheckCircle className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-green-500" />
                    )}
                  </div>
                  {errors.full_name && (
                    <p
                      role="alert"
                      className="text-sm text-red-600 flex items-center gap-1"
                    >
                      <AlertCircle className="w-4 h-4" aria-hidden="true" />
                      {errors.full_name}
                    </p>
                  )}
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-semibold text-gray-900"
                  >
                    Email công việc <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={onInputChange}
                    placeholder="name@company.com"
                    className={`w-full h-12 px-4 rounded-lg border focus:ring-2 focus:ring-[#22b5f8] focus:border-[#22b5f8] outline-none transition-all ${
                      errors.email ? "border-red-500" : "border-gray-200"
                    }`}
                  />
                  {errors.email && (
                    <p
                      role="alert"
                      className="text-sm text-red-600 flex items-center gap-1"
                    >
                      <AlertCircle className="w-4 h-4" aria-hidden="true" />
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              {/* Phone & Job Position */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="phone_number"
                    className="text-sm font-semibold text-gray-900"
                  >
                    Số điện thoại <span className="text-red-500">*</span>
                  </label>
                  <div className="flex">
                    <span className="inline-flex items-center px-3 rounded-l-lg border border-r-0 border-gray-200 bg-gray-50 text-gray-500 text-sm font-medium">
                      +84
                    </span>
                    <input
                      id="phone_number"
                      name="phone_number"
                      type="tel"
                      value={formData.phone_number}
                      onChange={onInputChange}
                      placeholder="912 345 678"
                      className={`w-full h-12 px-4 rounded-r-lg border focus:ring-2 focus:ring-[#22b5f8] focus:border-[#22b5f8] outline-none transition-all ${
                        errors.phone_number
                          ? "border-red-500"
                          : "border-gray-200"
                      }`}
                    />
                  </div>
                  {errors.phone_number && (
                    <p
                      role="alert"
                      className="text-sm text-red-600 flex items-center gap-1"
                    >
                      <AlertCircle className="w-4 h-4" aria-hidden="true" />
                      {errors.phone_number}
                    </p>
                  )}
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="job_position"
                    className="text-sm font-semibold text-gray-900"
                  >
                    Chức vụ <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="job_position"
                    name="job_position"
                    value={formData.job_position}
                    onChange={onInputChange}
                    className={`w-full h-12 px-4 rounded-lg border focus:ring-2 focus:ring-[#22b5f8] focus:border-[#22b5f8] outline-none transition-all ${
                      errors.job_position ? "border-red-500" : "border-gray-200"
                    } ${!formData.job_position ? "text-gray-400" : "text-gray-900"}`}
                  >
                    {jobPositions.map((position) => (
                      <option
                        key={position.id}
                        value={position.id}
                        disabled={position.id === ""}
                      >
                        {position.label}
                      </option>
                    ))}
                  </select>
                  {errors.job_position && (
                    <p
                      role="alert"
                      className="text-sm text-red-600 flex items-center gap-1"
                    >
                      <AlertCircle className="w-4 h-4" aria-hidden="true" />
                      {errors.job_position}
                    </p>
                  )}
                </div>
              </div>

              {/* Success Message */}
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

              {/* General Error */}
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

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full h-14 bg-[#ff7900] text-white font-bold rounded-lg hover:bg-[#e56b00] disabled:bg-[#ff7900]/50 transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#ff7900]/30"
                >
                  {isLoading ? (
                    <>
                      <Loader2
                        className="w-5 h-5 animate-spin"
                        aria-hidden="true"
                      />
                      Đang xử lý...
                    </>
                  ) : (
                    "Bắt đầu dùng thử miễn phí"
                  )}
                </button>
              </div>

              <p className="text-center text-sm text-gray-600">
                Đã có tài khoản?{" "}
                <a
                  href="https://admin-ai-code.dsp.one"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#22b5f8] font-semibold hover:underline"
                >
                  Đăng nhập ngay
                </a>
              </p>

              <p className="text-center text-xs text-gray-500">
                Bằng cách đăng ký, bạn đồng ý với{" "}
                <Link
                  href="/dieu-khoan"
                  className="text-[#22b5f8] hover:underline"
                >
                  Điều khoản dịch vụ
                </Link>{" "}
                và{" "}
                <Link
                  href="/chinh-sach-bao-mat"
                  className="text-[#22b5f8] hover:underline"
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
  );
}
