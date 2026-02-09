export type PackageType = "professional" | "business" | "";

export interface RegistrationFormData {
  // Account type
  selected_package: PackageType;

  // Business details
  company_name: string;
  tax_id: string;
  business_type: string;
  office_address: string;

  // Personal information
  full_name: string;
  email: string;
  phone_code: string;
  phone_number: string;
  job_position: string;

  // Social channels
  socials: {
    facebook: boolean;
    instagram: boolean;
    tiktok: boolean;
  };
  facebook_url: string;
  instagram_url: string;
  tiktok_url: string;
}

export interface RegistrationFormErrors {
  selected_package?: string;
  company_name?: string;
  tax_id?: string;
  business_type?: string;
  office_address?: string;
  full_name?: string;
  email?: string;
  phone_number?: string;
  job_position?: string;
  facebook_url?: string;
  instagram_url?: string;
  tiktok_url?: string;
  general?: string;
}

export interface RegistrationResponse {
  success: boolean;
  message: string;
  data?: {
    id: string;
    email: string;
  };
}

export const initialFormData: RegistrationFormData = {
  selected_package: "professional",
  company_name: "",
  tax_id: "",
  business_type: "Beauty Salon",
  office_address: "",
  full_name: "",
  email: "",
  phone_code: "+1",
  phone_number: "",
  job_position: "",
  socials: {
    facebook: true,
    instagram: false,
    tiktok: false,
  },
  facebook_url: "",
  instagram_url: "",
  tiktok_url: "",
};

export const businessTypes = [
  "Beauty Salon",
  "Spa & Wellness",
  "Nail Artistry",
  "Hair Studio",
  "Other",
];

export const phoneCodes = [
  { code: "+1", country: "US" },
  { code: "+44", country: "UK" },
  { code: "+81", country: "JP" },
  { code: "+84", country: "VN" },
];

export const jobPositions = [
  { value: "", label: "Select your role" },
  { value: "owner", label: "Owner / Founder" },
  { value: "manager", label: "Manager" },
  { value: "artisan", label: "Artisan / Stylist" },
  { value: "marketing", label: "Marketing" },
];
