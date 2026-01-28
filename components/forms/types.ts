/**
 * Shared types for registration forms
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

export const jobPositions = [
  { id: "", label: "registration.form.contact.jobPositionPlaceholder" },
  { id: "ceo", label: "registration.form.jobPosition.ceo" },
  {
    id: "marketing_director",
    label: "registration.form.jobPosition.marketingDirector",
  },
  {
    id: "marketing_manager",
    label: "registration.form.jobPosition.marketingManager",
  },
  {
    id: "content_manager",
    label: "registration.form.jobPosition.contentManager",
  },
  {
    id: "social_media_manager",
    label: "registration.form.jobPosition.socialMediaManager",
  },
  { id: "designer", label: "registration.form.jobPosition.designer" },
  { id: "developer", label: "registration.form.jobPosition.developer" },
  { id: "other", label: "registration.form.jobPosition.other" },
] as const;

export const packageOptions = [
  {
    id: "professional",
    labelKey: "form.package.startup.name",
    priceKey: "form.package.startup.price",
  },
  {
    id: "business",
    labelKey: "form.package.growth.name",
    priceKey: "form.package.growth.price",
    popular: true,
  },
] as const;
