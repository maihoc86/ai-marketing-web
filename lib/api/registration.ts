import axios from "axios";
import type {
  RegistrationFormData,
  RegistrationResponse,
} from "@/types/registration";
import { getFingerprint } from "@/lib/fingerprint";

const API_BASE_URL = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 30000,
});

// Request interceptor for fingerprint & logging
apiClient.interceptors.request.use(
  async (config) => {
    // Attach device fingerprint if available
    const fingerprint = await getFingerprint();
    if (fingerprint) {
      config.headers["X-Fingerprint"] = fingerprint;
    }

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
  // Process phone number: add leading 0 for Vietnam numbers if needed
  let phoneNumber = data.phone_number;
  if (data.phone_code === "+84") {
    // Remove all non-digit characters
    const digits = phoneNumber.replace(/\D/g, "");

    // If user entered 9 digits without leading 0, add 0 at the beginning
    if (digits.length === 9 && !digits.startsWith("0")) {
      phoneNumber = "0" + digits;
    } else {
      phoneNumber = digits;
    }
  }

  // Transform form data to Next.js API format
  const payload = {
    registration_type: data.selected_package, // "business" | "starter"
    name: data.full_name,
    email: data.email,
    phone_number: phoneNumber, // Send phone number without country code
    position: data.job_position,
    locale: "vi", // Default to Vietnamese
    ...(data.selected_package === "business" && {
      company_name: data.company_name,
      tax_code: data.tax_id,
      activity_field: data.business_type,
      address: data.office_address,
    }),
    additional_information: {
      facebook_urls: (data.facebook_urls || []).filter(
        (url) => url.trim() !== "",
      ),
      instagram_urls: (data.instagram_urls || []).filter(
        (url) => url.trim() !== "",
      ),
      tiktok_urls: (data.tiktok_urls || []).filter((url) => url.trim() !== ""),
    },
  };

  const response = await apiClient.post<RegistrationResponse>(
    "/api/users/register-company",
    payload,
  );

  return response.data;
}

export default apiClient;
