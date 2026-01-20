/**
 * API User Repository
 *
 * Infrastructure implementation of UserRepository.
 * Handles user data persistence via the DXAI API.
 *
 * This implements the Repository interface defined in the Domain layer,
 * following the Dependency Inversion Principle.
 */

import type { User, BusinessType, JobPosition, SubscriptionPlan } from '@/src/domain/entities/user'
import type { UserRepository } from '@/src/domain/interfaces/user-repository'
import { Email } from '@/src/domain/value-objects/email'
import { PhoneNumber } from '@/src/domain/value-objects/phone-number'
import { DxaiApiClient } from '../api/dxai-api-client'

/**
 * API response format for user data
 */
interface ApiUser {
  id: string
  email: string
  phone_number: string
  first_name: string
  last_name: string
  company_name: string
  business_type: string
  tax_code?: string
  job_position: string
  subscription_plan: string
  is_active: boolean
  created_at: string
  updated_at: string
}

export class ApiUserRepository implements UserRepository {
  constructor(private readonly api: DxaiApiClient) {}

  async findById(id: string): Promise<User | null> {
    try {
      const response = await this.api.get<ApiUser>(`/users/${id}`)
      return this.toDomain(response)
    } catch (error) {
      // Handle 404 as null
      if (this.isNotFoundError(error)) {
        return null
      }
      throw error
    }
  }

  async findByEmail(email: Email): Promise<User | null> {
    try {
      const response = await this.api.get<ApiUser>(
        `/users/by-email/${encodeURIComponent(email.getValue())}`
      )
      return this.toDomain(response)
    } catch (error) {
      if (this.isNotFoundError(error)) {
        return null
      }
      throw error
    }
  }

  async emailExists(email: Email): Promise<boolean> {
    try {
      await this.api.get(`/users/check-email/${encodeURIComponent(email.getValue())}`)
      return true
    } catch (error) {
      if (this.isNotFoundError(error)) {
        return false
      }
      throw error
    }
  }

  async save(user: User): Promise<User> {
    const apiUser = this.toApi(user)
    const response = await this.api.post<ApiUser>('/users/register-company', apiUser)
    return this.toDomain(response)
  }

  async update(user: User): Promise<User> {
    const apiUser = this.toApi(user)
    const response = await this.api.put<ApiUser>(`/users/${user.id}`, apiUser)
    return this.toDomain(response)
  }

  async delete(id: string): Promise<void> {
    await this.api.delete(`/users/${id}`)
  }

  /**
   * Transform API response to domain entity
   */
  private toDomain(api: ApiUser): User {
    return {
      id: api.id,
      email: Email.create(api.email),
      phone: PhoneNumber.create(api.phone_number),
      firstName: api.first_name,
      lastName: api.last_name,
      companyName: api.company_name,
      businessType: api.business_type as BusinessType,
      taxCode: api.tax_code,
      jobPosition: api.job_position as JobPosition,
      subscriptionPlan: api.subscription_plan as SubscriptionPlan,
      isActive: api.is_active,
      createdAt: new Date(api.created_at),
      updatedAt: new Date(api.updated_at),
    }
  }

  /**
   * Transform domain entity to API format
   */
  private toApi(user: User): Record<string, unknown> {
    return {
      email: user.email.getValue(),
      phone_number: user.phone.getValue(),
      first_name: user.firstName,
      last_name: user.lastName,
      company_name: user.companyName,
      business_type: user.businessType,
      tax_code: user.taxCode,
      job_position: user.jobPosition,
      subscription_plan: user.subscriptionPlan,
      is_active: user.isActive,
    }
  }

  private isNotFoundError(error: unknown): boolean {
    return (
      error !== null &&
      typeof error === 'object' &&
      'status' in error &&
      (error as { status: number }).status === 404
    )
  }
}
