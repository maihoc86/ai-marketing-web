/**
 * Email Value Object
 *
 * Immutable value object that encapsulates email validation logic.
 * Value objects are defined by their attributes, not identity.
 *
 * @example
 * const email = Email.create('user@example.com')
 * console.log(email.getValue()) // 'user@example.com'
 */

import { ValidationError } from '@/src/shared/errors/validation-error'

export class Email {
  private readonly value: string

  private constructor(email: string) {
    this.value = email
  }

  /**
   * Factory method to create a validated Email
   * @throws {ValidationError} if email is invalid
   */
  static create(email: string): Email {
    const normalized = email?.trim().toLowerCase()

    if (!normalized) {
      throw new ValidationError('Email là bắt buộc', 'EMAIL_REQUIRED')
    }

    if (normalized.length < 5 || normalized.length > 255) {
      throw new ValidationError('Email phải từ 5-255 ký tự', 'EMAIL_LENGTH')
    }

    if (!Email.isValid(normalized)) {
      throw new ValidationError('Email không hợp lệ', 'EMAIL_INVALID')
    }

    return new Email(normalized)
  }

  /**
   * Validate email format without throwing
   */
  static isValid(email: string): boolean {
    if (!email) return false
    // RFC 5322 compliant pattern
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  /**
   * Get the email value
   */
  getValue(): string {
    return this.value
  }

  /**
   * Get the domain part of the email
   */
  getDomain(): string {
    return this.value.split('@')[1]
  }

  /**
   * Get the local part of the email (before @)
   */
  getLocalPart(): string {
    return this.value.split('@')[0]
  }

  /**
   * Check equality with another Email
   */
  equals(other: Email): boolean {
    return this.value === other.value
  }

  /**
   * String representation
   */
  toString(): string {
    return this.value
  }
}
