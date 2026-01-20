/**
 * PhoneNumber Value Object
 *
 * Immutable value object for Vietnamese phone numbers.
 * Handles normalization and validation of phone formats.
 *
 * Supported formats:
 * - 0xxxxxxxxx (10 digits starting with 0)
 * - +84xxxxxxxxx (with country code)
 *
 * @example
 * const phone = PhoneNumber.create('0912345678')
 * console.log(phone.getValue()) // '0912345678'
 * console.log(phone.getFormatted()) // '0912 345 678'
 */

import { ValidationError } from '@/src/shared/errors/validation-error'

export class PhoneNumber {
  private readonly value: string

  private constructor(phone: string) {
    this.value = phone
  }

  /**
   * Factory method to create a validated PhoneNumber
   * @throws {ValidationError} if phone number is invalid
   */
  static create(phone: string): PhoneNumber {
    const normalized = PhoneNumber.normalize(phone)

    if (!normalized) {
      throw new ValidationError('Số điện thoại là bắt buộc', 'PHONE_REQUIRED')
    }

    if (!PhoneNumber.isValid(normalized)) {
      throw new ValidationError(
        'Số điện thoại không hợp lệ (định dạng: 0xxxxxxxxx)',
        'PHONE_INVALID'
      )
    }

    return new PhoneNumber(normalized)
  }

  /**
   * Normalize phone number to standard format
   * Removes spaces, dashes, and converts +84 to 0
   */
  private static normalize(phone: string): string {
    if (!phone) return ''

    return phone
      .replace(/[\s-()]/g, '')  // Remove spaces, dashes, parentheses
      .replace(/^\+84/, '0')     // Convert +84 to 0
  }

  /**
   * Validate Vietnamese phone number format
   * Format: 10 digits starting with 0
   */
  static isValid(phone: string): boolean {
    if (!phone) return false
    return /^0\d{9}$/.test(phone)
  }

  /**
   * Get the raw phone number value
   */
  getValue(): string {
    return this.value
  }

  /**
   * Get formatted phone number: 0xxx xxx xxx
   */
  getFormatted(): string {
    return this.value.replace(/(\d{4})(\d{3})(\d{3})/, '$1 $2 $3')
  }

  /**
   * Get phone with country code: +84xxxxxxxxx
   */
  getInternational(): string {
    return '+84' + this.value.substring(1)
  }

  /**
   * Check equality with another PhoneNumber
   */
  equals(other: PhoneNumber): boolean {
    return this.value === other.value
  }

  /**
   * String representation
   */
  toString(): string {
    return this.value
  }
}
