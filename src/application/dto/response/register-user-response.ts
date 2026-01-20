/**
 * Register User Response DTO
 *
 * Data Transfer Object for registration response.
 * Contains only the data that should be exposed externally.
 */

export interface RegisterUserResponse {
  success: boolean
  message: string
  userId?: string
}
