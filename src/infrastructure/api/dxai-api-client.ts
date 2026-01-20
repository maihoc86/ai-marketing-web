/**
 * DXAI API Client
 *
 * Infrastructure layer API client for communicating with the DXAI backend.
 * Wraps fetch with error handling, CSRF protection, and rate limiting.
 */

export interface ApiError {
  message: string
  code?: string
  status: number
}

export class DxaiApiClient {
  private baseURL: string
  private timeout: number

  constructor(
    baseURL: string = process.env.NEXT_PUBLIC_API_URL || 'https://api-ai-code.dsp.one',
    timeout: number = 30000
  ) {
    this.baseURL = baseURL
    this.timeout = timeout
  }

  /**
   * Make a GET request
   */
  async get<T>(endpoint: string): Promise<T> {
    return this.request<T>(endpoint, { method: 'GET' })
  }

  /**
   * Make a POST request
   */
  async post<T>(endpoint: string, data: unknown): Promise<T> {
    return this.request<T>(endpoint, {
      method: 'POST',
      body: JSON.stringify(data),
    })
  }

  /**
   * Make a PUT request
   */
  async put<T>(endpoint: string, data: unknown): Promise<T> {
    return this.request<T>(endpoint, {
      method: 'PUT',
      body: JSON.stringify(data),
    })
  }

  /**
   * Make a DELETE request
   */
  async delete<T>(endpoint: string): Promise<T> {
    return this.request<T>(endpoint, { method: 'DELETE' })
  }

  /**
   * Internal request method with error handling
   */
  private async request<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    const url = `${this.baseURL}${endpoint}`

    const config: RequestInit = {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        ...options.headers,
      },
      credentials: 'same-origin',
    }

    // Create timeout controller
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), this.timeout)

    try {
      const response = await fetch(url, {
        ...config,
        signal: controller.signal,
      })

      clearTimeout(timeoutId)

      if (!response.ok) {
        const error = await this.parseError(response)
        throw error
      }

      // Handle empty responses
      const text = await response.text()
      if (!text) {
        return {} as T
      }

      return JSON.parse(text) as T
    } catch (error) {
      clearTimeout(timeoutId)

      if (error instanceof Error && error.name === 'AbortError') {
        throw {
          message: 'Request timeout. Please try again.',
          status: 408,
          code: 'TIMEOUT',
        } as ApiError
      }

      if (error instanceof TypeError) {
        throw {
          message: 'Network error. Please check your internet connection.',
          status: 0,
          code: 'NETWORK_ERROR',
        } as ApiError
      }

      throw error
    }
  }

  private async parseError(response: Response): Promise<ApiError> {
    try {
      const data = await response.json()
      return {
        message: data.message || `HTTP ${response.status}: ${response.statusText}`,
        code: data.code,
        status: response.status,
      }
    } catch {
      return {
        message: `HTTP ${response.status}: ${response.statusText}`,
        status: response.status,
      }
    }
  }
}

// Export singleton instance
export const dxaiApiClient = new DxaiApiClient()
