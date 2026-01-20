/**
 * ValidationError - Custom error for domain validation failures
 *
 * Use this error when validating domain objects (value objects, entities)
 */
export class ValidationError extends Error {
  public readonly code: string

  constructor(message: string, code: string = 'VALIDATION_ERROR') {
    super(message)
    this.name = 'ValidationError'
    this.code = code

    // Maintains proper stack trace for where error was thrown
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ValidationError)
    }
  }

  /**
   * Check if an error is a ValidationError
   */
  static isValidationError(error: unknown): error is ValidationError {
    return error instanceof ValidationError
  }
}

/**
 * DomainError - Base error for domain-level errors
 */
export class DomainError extends Error {
  public readonly code: string

  constructor(message: string, code: string = 'DOMAIN_ERROR') {
    super(message)
    this.name = 'DomainError'
    this.code = code

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, DomainError)
    }
  }
}

/**
 * NotFoundError - When a requested entity doesn't exist
 */
export class NotFoundError extends DomainError {
  constructor(entity: string, id: string) {
    super(`${entity} with id "${id}" not found`, 'NOT_FOUND')
    this.name = 'NotFoundError'
  }
}
