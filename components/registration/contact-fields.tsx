"use client";

import { ChevronDown } from "lucide-react";
import type {
  RegistrationFormData,
  RegistrationFormErrors,
} from "@/types/registration";
import { phoneCodes, jobPositions } from "@/types/registration";

interface ContactFieldsProps {
  formData: RegistrationFormData;
  errors: RegistrationFormErrors;
  onInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => void;
}

export function ContactFields({
  formData,
  errors,
  onInputChange,
}: ContactFieldsProps) {
  return (
    <section className="mb-14">
      <h3 className="text-sm font-extrabold uppercase tracking-widest text-text-main mb-8 flex items-center gap-4">
        <span className="w-8 h-0.5 bg-primary" /> Personal Information
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8">
        <div>
          <label className="block text-xs font-bold uppercase tracking-widest text-text-muted mb-2">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="full_name"
            value={formData.full_name}
            onChange={onInputChange}
            placeholder="Your full name"
            required
            className={`w-full bg-white border focus:border-primary focus:ring-1 focus:ring-primary/50 placeholder-gray-400 text-text-main py-3.5 px-4 outline-none transition-all text-sm rounded-sm font-medium ${
              errors.full_name ? "border-red-500" : "border-gray-200"
            }`}
          />
          {errors.full_name && (
            <p className="mt-1 text-xs text-red-500">{errors.full_name}</p>
          )}
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-widest text-text-muted mb-2">
            Work Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={onInputChange}
            placeholder="name@company.com"
            required
            className={`w-full bg-white border focus:border-primary focus:ring-1 focus:ring-primary/50 placeholder-gray-400 text-text-main py-3.5 px-4 outline-none transition-all text-sm rounded-sm font-medium ${
              errors.email ? "border-red-500" : "border-gray-200"
            }`}
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-500">{errors.email}</p>
          )}
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-widest text-text-muted mb-2">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <div className="flex gap-2">
            <div className="w-28 relative">
              <select
                name="phone_code"
                value={formData.phone_code}
                onChange={onInputChange}
                className="w-full bg-white border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary/50 text-text-main py-3.5 px-4 outline-none transition-all text-sm rounded-sm font-medium appearance-none pr-8"
              >
                {phoneCodes.map((item) => (
                  <option key={item.code} value={item.code}>
                    {item.code}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 text-primary pointer-events-none w-4 h-4" />
            </div>
            <input
              type="tel"
              name="phone_number"
              value={formData.phone_number}
              onChange={onInputChange}
              placeholder={
                phoneCodes.find((pc) => pc.code === formData.phone_code)
                  ?.placeholder || "(555) 000-0000"
              }
              required
              className={`flex-1 bg-white border focus:border-primary focus:ring-1 focus:ring-primary/50 placeholder-gray-400 text-text-main py-3.5 px-4 outline-none transition-all text-sm rounded-sm font-medium ${
                errors.phone_number ? "border-red-500" : "border-gray-200"
              }`}
            />
          </div>
          {errors.phone_number && (
            <p className="mt-1 text-xs text-red-500">{errors.phone_number}</p>
          )}
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-widest text-text-muted mb-2">
            Job Position <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <select
              name="job_position"
              value={formData.job_position}
              onChange={onInputChange}
              required
              className={`w-full bg-white border focus:border-primary focus:ring-1 focus:ring-primary/50 text-text-main py-3.5 px-4 outline-none transition-all text-sm rounded-sm font-medium appearance-none cursor-pointer pr-10 ${
                errors.job_position ? "border-red-500" : "border-gray-200"
              }`}
            >
              {jobPositions.map((pos) => (
                <option key={pos.value} value={pos.value} disabled={!pos.value}>
                  {pos.label}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-primary pointer-events-none w-5 h-5" />
          </div>
          {errors.job_position && (
            <p className="mt-1 text-xs text-red-500">{errors.job_position}</p>
          )}
        </div>
      </div>
    </section>
  );
}
