/**
 * User Entity
 *
 * Domain entity representing a user/company in the system.
 * Entities have identity and lifecycle.
 */

import { Email } from '../value-objects/email'
import { PhoneNumber } from '../value-objects/phone-number'

export type BusinessType = 'enterprise' | 'household'

export type SubscriptionPlan = 'startup' | 'growth' | 'enterprise'

export type JobPosition =
  | 'ceo'
  | 'marketing_director'
  | 'marketing_manager'
  | 'content_manager'
  | 'social_media_manager'
  | 'designer'
  | 'business_owner'
  | 'student'
  | 'other'

export interface User {
  readonly id: string
  email: Email
  phone: PhoneNumber
  firstName: string
  lastName: string
  companyName: string
  businessType: BusinessType
  taxCode?: string
  jobPosition: JobPosition
  subscriptionPlan: SubscriptionPlan
  isActive: boolean
  readonly createdAt: Date
  updatedAt: Date
}

/**
 * Create a new User entity
 */
export function createUser(params: {
  id: string
  email: Email
  phone: PhoneNumber
  firstName: string
  lastName: string
  companyName: string
  businessType: BusinessType
  taxCode?: string
  jobPosition: JobPosition
  subscriptionPlan: SubscriptionPlan
}): User {
  const now = new Date()

  return {
    id: params.id,
    email: params.email,
    phone: params.phone,
    firstName: params.firstName,
    lastName: params.lastName,
    companyName: params.companyName,
    businessType: params.businessType,
    taxCode: params.taxCode,
    jobPosition: params.jobPosition,
    subscriptionPlan: params.subscriptionPlan,
    isActive: true,
    createdAt: now,
    updatedAt: now,
  }
}

/**
 * Get user's full name
 */
export function getUserFullName(user: User): string {
  return `${user.firstName} ${user.lastName}`
}

/**
 * Check if user is an enterprise customer
 */
export function isEnterpriseUser(user: User): boolean {
  return user.businessType === 'enterprise' || user.subscriptionPlan === 'enterprise'
}

/**
 * Get display name for user (company or personal)
 */
export function getUserDisplayName(user: User): string {
  return user.companyName || getUserFullName(user)
}
