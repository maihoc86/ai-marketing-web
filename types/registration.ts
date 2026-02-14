export type PackageType = "starter" | "business";

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
  facebook_urls: string[];
  instagram_urls: string[];
  tiktok_urls: string[];

  // Additional information
  additionalInfo: {
    google_maps: boolean;
    website: boolean;
  };
  google_maps_urls: string[];
  website_urls: string[];
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
  facebook_urls?: string[];
  instagram_urls?: string[];
  tiktok_urls?: string[];
  google_maps_urls?: string[];
  website_urls?: string[];
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
  selected_package: "starter",
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
  facebook_urls: [""],
  instagram_urls: [""],
  tiktok_urls: [""],
  additionalInfo: {
    google_maps: false,
    website: false,
  },
  google_maps_urls: [""],
  website_urls: [""],
};

export const businessTypes = [
  "Beauty Salon",
  "Spa & Wellness",
  "Nail Artistry",
  "Hair Studio",
  "Other",
];

export const phoneCodes = [
  {
    code: "+1",
    country: "US",
    placeholder: "(555) 000-0000",
    pattern: /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
    minLength: 10,
    maxLength: 14,
    description: "10 digits, format: (555) 000-0000",
  },
  {
    code: "+84",
    country: "VN",
    placeholder: "091 234 5678",
    pattern: /^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[1-9]|9[0-9])[0-9]{7}$/,
    minLength: 9,
    maxLength: 10,
    description: "9-10 digits, Vietnamese mobile format",
  },
];

export const jobPositions = [
  { value: "", label: "Select your role" },
  { value: "owner", label: "Owner / Founder" },
  { value: "manager", label: "Manager" },
  { value: "artisan", label: "Artisan / Stylist" },
  { value: "marketing", label: "Marketing" },
];
