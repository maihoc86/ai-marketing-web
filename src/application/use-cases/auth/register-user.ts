/**
 * Register User Use Case
 *
 * Orchestrates the user registration process.
 * Use cases contain application logic and coordinate domain objects.
 *
 * Single Responsibility: This use case only handles user registration.
 *
 * @example
 * const useCase = new RegisterUserUseCase(userRepository)
 * const result = await useCase.execute({
 *   email: 'user@example.com',
 *   phoneNumber: '0912345678',
 *   firstName: 'Nguyen',
 *   lastName: 'Van A',
 *   companyName: 'ABC Company',
 *   businessType: 'enterprise',
 *   jobPosition: 'ceo',
 *   selectedPackage: 'growth'
 * })
 */

import { Email } from '@/src/domain/value-objects/email'
import { PhoneNumber } from '@/src/domain/value-objects/phone-number'
import { createUser } from '@/src/domain/entities/user'
import type { UserRepository } from '@/src/domain/interfaces/user-repository'
import type { RegisterUserRequest } from '@/src/application/dto/request/register-user-request'
import type { RegisterUserResponse } from '@/src/application/dto/response/register-user-response'
import { ValidationError, DomainError } from '@/src/shared/errors/validation-error'

export class RegisterUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(request: RegisterUserRequest): Promise<RegisterUserResponse> {
    try {
      // 1. Validate and create value objects
      const email = Email.create(request.email)
      const phone = PhoneNumber.create(request.phoneNumber)

      // 2. Check if email already exists
      const emailExists = await this.userRepository.emailExists(email)
      if (emailExists) {
        throw new DomainError('Email đã được đăng ký', 'EMAIL_EXISTS')
      }

      // 3. Validate required fields
      this.validateRequiredFields(request)

      // 4. Create user entity
      const user = createUser({
        id: this.generateId(),
        email,
        phone,
        firstName: request.firstName.trim(),
        lastName: request.lastName.trim(),
        companyName: request.companyName.trim(),
        businessType: request.businessType,
        taxCode: request.taxCode?.trim(),
        jobPosition: request.jobPosition,
        subscriptionPlan: request.selectedPackage,
      })

      // 5. Persist user
      const savedUser = await this.userRepository.save(user)

      // 6. Return success response
      return {
        success: true,
        message: 'Đăng ký thành công! Chúng tôi sẽ liên hệ với bạn sớm.',
        userId: savedUser.id,
      }
    } catch (error) {
      // Handle known errors
      if (error instanceof ValidationError || error instanceof DomainError) {
        return {
          success: false,
          message: error.message,
        }
      }

      // Re-throw unexpected errors
      throw error
    }
  }

  private validateRequiredFields(request: RegisterUserRequest): void {
    if (!request.firstName?.trim()) {
      throw new ValidationError('Họ và đệm là bắt buộc', 'FIRST_NAME_REQUIRED')
    }

    if (!request.lastName?.trim()) {
      throw new ValidationError('Tên là bắt buộc', 'LAST_NAME_REQUIRED')
    }

    if (!request.companyName?.trim()) {
      throw new ValidationError('Tên công ty là bắt buộc', 'COMPANY_NAME_REQUIRED')
    }

    if (!request.businessType) {
      throw new ValidationError('Loại hình kinh doanh là bắt buộc', 'BUSINESS_TYPE_REQUIRED')
    }

    if (!request.jobPosition) {
      throw new ValidationError('Vị trí công việc là bắt buộc', 'JOB_POSITION_REQUIRED')
    }

    if (!request.selectedPackage) {
      throw new ValidationError('Vui lòng chọn gói dịch vụ', 'PACKAGE_REQUIRED')
    }

    // Validate tax code for enterprise
    if (request.businessType === 'enterprise' && request.taxCode) {
      if (!/^\d{10,14}$/.test(request.taxCode)) {
        throw new ValidationError('Mã số thuế phải là 10-14 chữ số', 'TAX_CODE_INVALID')
      }
    }
  }

  private generateId(): string {
    // Use crypto.randomUUID if available, fallback to timestamp-based
    if (typeof crypto !== 'undefined' && crypto.randomUUID) {
      return crypto.randomUUID()
    }
    return `${Date.now()}-${Math.random().toString(36).substring(2)}`
  }
}
