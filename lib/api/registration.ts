import axios from "axios";
import type {
  RegistrationFormData,
  RegistrationResponse,
} from "@/types/registration";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "https://api.uniksmart.com";

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 30000,
});

// Request interceptor for logging
apiClient.interceptors.request.use(
  (config) => {
    if (process.env.NODE_ENV === "development") {
      console.log(`[API] ${config.method?.toUpperCase()} ${config.url}`);
    }
    return config;
  },
  (error) => Promise.reject(error),
);

// Response interceptor for error handling
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      // Server responded with error status
      const message =
        error.response.data?.message || "An error occurred. Please try again.";
      return Promise.reject(new Error(message));
    } else if (error.request) {
      // Request was made but no response received
      return Promise.reject(
        new Error("Network error. Please check your connection."),
      );
    } else {
      // Something else happened
      return Promise.reject(new Error("An unexpected error occurred."));
    }
  },
);

export async function registerTrial(
  data: RegistrationFormData,
): Promise<RegistrationResponse> {
  // Transform form data to API format
  const payload = {
    account_type: data.selected_package,
    company: {
      name: data.company_name,
      tax_id: data.tax_id,
      business_type: data.business_type,
      address: data.office_address,
    },
    contact: {
      full_name: data.full_name,
      email: data.email,
      phone: `${data.phone_code}${data.phone_number}`,
      job_position: data.job_position,
    },
    social_channels: {
      facebook: data.socials.facebook ? data.facebook_url : null,
      instagram: data.socials.instagram ? data.instagram_url : null,
      tiktok: data.socials.tiktok ? data.tiktok_url : null,
    },
  };

  const response = await apiClient.post<RegistrationResponse>(
    "/api/v1/trial/register",
    payload,
  );

  return response.data;
}

export default apiClient;
