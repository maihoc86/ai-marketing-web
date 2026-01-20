/**
 * Register User Request DTO
 *
 * Data Transfer Object for registration request data.
 * DTOs are simple data structures with no business logic.
 */

import type { BusinessType, JobPosition, SubscriptionPlan } from '@/src/domain/entities/user'

export interface RegisterUserRequest {
  email: string
  phoneNumber: string
  firstName: string
  lastName: string
  companyName: string
  businessType: BusinessType
  taxCode?: string
  jobPosition: JobPosition
  selectedPackage: SubscriptionPlan
}
