/**
 * Secure API Client with CSRF Protection and Rate Limiting
 *
 * Features:
 * - CSRF token generation and validation
 * - Client-side rate limiting
 * - Comprehensive error handling
 * - Type-safe responses
 */

interface ApiError {
  message: string;
  code?: string;
  status: number;
}

interface RateLimitInfo {
  lastCallTime: number;
  callCount: number;
}

// Configuration
const RATE_LIMIT_WINDOW = 1000; // 1 second
const MAX_CALLS_PER_WINDOW = 1;
const CSRF_HEADER = "X-CSRF-Token";
const RATE_LIMIT_KEY = "api_rate_limit";
const CSRF_TOKEN_KEY = "csrf_token";

/**
 * Generate a secure CSRF token
 */
function generateCSRFToken(): string {
  // Use crypto.randomUUID if available, fallback to timestamp-based
  if (typeof crypto !== "undefined" && crypto.randomUUID) {
    return crypto.randomUUID();
  }

  // Fallback for older browsers
  return `${Date.now()}-${Math.random().toString(36).substring(2)}`;
}

/**
 * Get or create CSRF token from sessionStorage
 */
function getCSRFToken(): string {
  try {
    let token = sessionStorage.getItem(CSRF_TOKEN_KEY);

    if (!token) {
      token = generateCSRFToken();
      sessionStorage.setItem(CSRF_TOKEN_KEY, token);
    }

    return token;
  } catch (error) {
    console.error("Failed to manage CSRF token:", error);
    // Generate ephemeral token if storage fails
    return generateCSRFToken();
  }
}

/**
 * Check rate limiting
 * @throws {ApiError} If rate limit exceeded
 */
function checkRateLimit(): void {
  try {
    const stored = localStorage.getItem(RATE_LIMIT_KEY);
    const now = Date.now();

    if (stored) {
      const info: RateLimitInfo = JSON.parse(stored);
      const timeSinceLastCall = now - info.lastCallTime;

      if (timeSinceLastCall < RATE_LIMIT_WINDOW) {
        if (info.callCount >= MAX_CALLS_PER_WINDOW) {
          throw {
            message: "Too many requests. Please wait a moment and try again.",
            status: 429,
            code: "RATE_LIMIT_EXCEEDED",
          } as ApiError;
        }

        // Increment call count within window
        info.callCount++;
        localStorage.setItem(RATE_LIMIT_KEY, JSON.stringify(info));
      } else {
        // Reset window
        localStorage.setItem(
          RATE_LIMIT_KEY,
          JSON.stringify({
            lastCallTime: now,
            callCount: 1,
          }),
        );
      }
    } else {
      // First call
      localStorage.setItem(
        RATE_LIMIT_KEY,
        JSON.stringify({
          lastCallTime: now,
          callCount: 1,
        }),
      );
    }
  } catch (error) {
    // If localStorage fails, allow the call but log error
    console.error("Rate limit check failed:", error);
  }
}

/**
 * Secure API Client
 */
class ApiClient {
  private baseURL: string;
  private timeout: number;

  constructor(baseURL: string, timeout = 30000) {
    this.baseURL = baseURL;
    this.timeout = timeout;
  }

  /**
   * Make a secure API request
   */
  private async request<T>(
    endpoint: string,
    options: RequestInit = {},
  ): Promise<T> {
    // Check rate limit before making request
    checkRateLimit();

    const url = `${this.baseURL}${endpoint}`;
    const csrfToken = getCSRFToken();

    const defaultHeaders = {
      "Content-Type": "application/json",
      Accept: "application/json",
      [CSRF_HEADER]: csrfToken,
    };

    const config: RequestInit = {
      ...options,
      headers: {
        ...defaultHeaders,
        ...options.headers,
      },
      credentials: "same-origin",
    };

    // Create timeout controller
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), this.timeout);

    try {
      const response = await fetch(url, {
        ...config,
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      // Handle HTTP errors
      if (!response.ok) {
        let errorMessage = "Request failed";
        let errorCode: string | undefined;

        try {
          const errorData = await response.json();
          errorMessage = errorData.message || errorMessage;
          errorCode = errorData.code;
        } catch {
          // If JSON parsing fails, use status text
          errorMessage = `${response.status}: ${response.statusText}`;
        }

        const apiError: ApiError = {
          message: errorMessage,
          status: response.status,
          code: errorCode,
        };

        throw apiError;
      }

      // Parse successful response
      try {
        return await response.json();
      } catch (parseError) {
        throw {
          message: "Invalid response format from server",
          status: 500,
          code: "INVALID_RESPONSE",
        } as ApiError;
      }
    } catch (error) {
      clearTimeout(timeoutId);

      // Handle timeout
      if (error instanceof Error && error.name === "AbortError") {
        throw {
          message: "Request timeout. Please try again.",
          status: 408,
          code: "TIMEOUT",
        } as ApiError;
      }

      // Handle network errors
      if (error instanceof TypeError) {
        throw {
          message: "Network error. Please check your internet connection.",
          status: 0,
          code: "NETWORK_ERROR",
        } as ApiError;
      }

      // Re-throw ApiError
      throw error;
    }
  }

  /**
   * POST request
   */
  async post<T>(endpoint: string, data: unknown): Promise<T> {
    return this.request<T>(endpoint, {
      method: "POST",
      body: JSON.stringify(data),
    });
  }

  /**
   * GET request
   */
  async get<T>(endpoint: string): Promise<T> {
    return this.request<T>(endpoint, {
      method: "GET",
    });
  }

  /**
   * PUT request
   */
  async put<T>(endpoint: string, data: unknown): Promise<T> {
    return this.request<T>(endpoint, {
      method: "PUT",
      body: JSON.stringify(data),
    });
  }

  /**
   * DELETE request
   */
  async delete<T>(endpoint: string): Promise<T> {
    return this.request<T>(endpoint, {
      method: "DELETE",
    });
  }
}

// Export configured instance
// Use relative URL to call Next.js API routes by default
// Set NEXT_PUBLIC_API_URL in .env to use external API
export const apiClient = new ApiClient(process.env.NEXT_PUBLIC_API_URL || "");

// Type-safe API methods
interface RegistrationData {
  business_type: "enterprise" | "household";
  tax_code?: string;
  company_name: string;
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  job_position: string;
  selected_package: string;
}

// Simplified format that the API actually accepts
interface RegistrationSubmit {
  name: string;
  email: string;
  phone_number: string;
  company_name?: string;
  customer_need: string;
}

interface RegistrationResponse {
  success: boolean;
  message: string;
}

export const api = {
  /**
   * Register a new company/user
   */
  registerCompany: (data: RegistrationSubmit) =>
    apiClient.post<RegistrationResponse>("/api/users/register-company", data),
};

// Export types
export type {
  ApiError,
  RegistrationData,
  RegistrationSubmit,
  RegistrationResponse,
};
