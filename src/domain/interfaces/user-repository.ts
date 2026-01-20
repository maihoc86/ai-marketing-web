/**
 * User Repository Interface
 *
 * Defines the contract for user data access.
 * This interface is defined in the Domain layer and implemented in Infrastructure.
 * This follows the Dependency Inversion Principle.
 */

import type { User } from '../entities/user'
import type { Email } from '../value-objects/email'

export interface UserRepository {
  /**
   * Find a user by their unique ID
   */
  findById(id: string): Promise<User | null>

  /**
   * Find a user by their email address
   */
  findByEmail(email: Email): Promise<User | null>

  /**
   * Check if an email is already registered
   */
  emailExists(email: Email): Promise<boolean>

  /**
   * Save a new user (create)
   */
  save(user: User): Promise<User>

  /**
   * Update an existing user
   */
  update(user: User): Promise<User>

  /**
   * Delete a user by ID
   */
  delete(id: string): Promise<void>
}
