# Migration Guide: Current → Pragmatic Clean Architecture

> **Version**: 1.0.0
> **Date**: 2026-01-20

This guide provides step-by-step instructions for migrating the DXAI Marketing Platform from its current structure to the new Pragmatic Clean Architecture.

---

## Table of Contents

1. [Migration Overview](#migration-overview)
2. [Phase 1: Foundation Setup](#phase-1-foundation-setup)
3. [Phase 2: Value Objects](#phase-2-value-objects)
4. [Phase 3: Use Cases](#phase-3-use-cases)
5. [Phase 4: Component Integration](#phase-4-component-integration)
6. [File Migration Map](#file-migration-map)
7. [Validation Checklist](#validation-checklist)

---

## Migration Overview

### Current Structure
```
ai-marketing-fe/
├── app/                    # Next.js pages
├── components/             # All components mixed
├── lib/                    # Utils, i18n, api-client, validation
├── hooks/                  # Custom hooks
└── types/                  # Type declarations
```

### Target Structure
```
ai-marketing-fe/
├── app/                    # Next.js pages (Presentation)
├── src/                    # Core application code
│   ├── domain/             # Business logic
│   ├── application/        # Use cases
│   ├── infrastructure/     # External integrations
│   └── shared/             # Cross-cutting concerns
├── components/             # React components (Presentation)
│   ├── ui/                 # Base UI
│   ├── features/           # Feature-specific
│   └── providers/          # Context providers
├── hooks/                  # Custom hooks
└── lib/                    # Library configs
```

### Migration Principles

1. **Incremental**: Migrate one piece at a time
2. **Non-breaking**: Keep existing code working during migration
3. **Test-driven**: Add tests as you migrate
4. **Parallel imports**: Support both old and new paths temporarily

---

## Phase 1: Foundation Setup

### Step 1.1: Create Directory Structure

```bash
# Run from project root
mkdir -p src/domain/{entities,value-objects,interfaces,services}
mkdir -p src/application/{use-cases/auth,services,dto/request,dto/response,mappers}
mkdir -p src/infrastructure/{api,repositories,storage}
mkdir -p src/shared/{types,utils,constants,errors}
mkdir -p components/features/{landing,auth,dashboard,shared}
mkdir -p components/providers
```

### Step 1.2: Create Error Classes

Create `src/shared/errors/validation-error.ts`:

```typescript
export class ValidationError extends Error {
  public readonly code: string

  constructor(message: string, code: string = 'VALIDATION_ERROR') {
    super(message)
    this.name = 'ValidationError'
    this.code = code
  }
}

export class DomainError extends Error {
  public readonly code: string

  constructor(message: string, code: string = 'DOMAIN_ERROR') {
    super(message)
    this.name = 'DomainError'
    this.code = code
  }
}
```

### Step 1.3: Move Utility Functions

Move `lib/utils.ts` → `src/shared/utils/cn.ts`:

```typescript
// src/shared/utils/cn.ts
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs))
}
```

Update `lib/utils.ts` to re-export (backward compatibility):

```typescript
// lib/utils.ts
export { cn } from '@/src/shared/utils/cn'
```

---

## Phase 2: Value Objects

### Step 2.1: Create Email Value Object

Extract email validation from `lib/validation.ts` to `src/domain/value-objects/email.ts`:

```typescript
import { ValidationError } from '@/src/shared/errors/validation-error'

export class Email {
  private readonly value: string

  private constructor(email: string) {
    this.value = email
  }

  static create(email: string): Email {
    const normalized = email?.trim().toLowerCase()

    if (!normalized) {
      throw new ValidationError('Email là bắt buộc', 'EMAIL_REQUIRED')
    }

    if (!Email.isValid(normalized)) {
      throw new ValidationError('Email không hợp lệ', 'EMAIL_INVALID')
    }

    return new Email(normalized)
  }

  static isValid(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  getValue(): string {
    return this.value
  }

  equals(other: Email): boolean {
    return this.value === other.value
  }
}
```

### Step 2.2: Create PhoneNumber Value Object

```typescript
// src/domain/value-objects/phone-number.ts
import { ValidationError } from '@/src/shared/errors/validation-error'

export class PhoneNumber {
  private readonly value: string

  private constructor(phone: string) {
    this.value = phone
  }

  static create(phone: string): PhoneNumber {
    const normalized = phone?.replace(/[\s-()]/g, '').replace(/^\+84/, '0')

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

  static isValid(phone: string): boolean {
    return /^0\d{9}$/.test(phone)
  }

  getValue(): string {
    return this.value
  }

  getFormatted(): string {
    return this.value.replace(/(\d{4})(\d{3})(\d{3})/, '$1 $2 $3')
  }
}
```

### Step 2.3: Update Validation File

Update `lib/validation.ts` to use value objects:

```typescript
// lib/validation.ts
import { Email } from '@/src/domain/value-objects/email'
import { PhoneNumber } from '@/src/domain/value-objects/phone-number'

// Keep old functions for backward compatibility
export function validateEmail(email: string): ValidationResult {
  try {
    Email.create(email)
    return { success: true }
  } catch (error) {
    return { success: false, error: error.message }
  }
}

export function validatePhone(phone: string): ValidationResult {
  try {
    PhoneNumber.create(phone)
    return { success: true }
  } catch (error) {
    return { success: false, error: error.message }
  }
}
```

---

## Phase 3: Use Cases

### Step 3.1: Create User Entity

```typescript
// src/domain/entities/user.ts
import { Email } from '../value-objects/email'
import { PhoneNumber } from '../value-objects/phone-number'

export type BusinessType = 'enterprise' | 'household'
export type SubscriptionPlan = 'startup' | 'growth' | 'enterprise'

export interface User {
  readonly id: string
  email: Email
  phone: PhoneNumber
  firstName: string
  lastName: string
  companyName: string
  businessType: BusinessType
  taxCode?: string
  jobPosition: string
  subscriptionPlan: SubscriptionPlan
  readonly createdAt: Date
  updatedAt: Date
}
```

### Step 3.2: Create Repository Interface

```typescript
// src/domain/interfaces/user-repository.ts
import type { User } from '../entities/user'
import type { Email } from '../value-objects/email'

export interface UserRepository {
  findByEmail(email: Email): Promise<User | null>
  emailExists(email: Email): Promise<boolean>
  save(user: User): Promise<User>
}
```

### Step 3.3: Create RegisterUser Use Case

```typescript
// src/application/use-cases/auth/register-user.ts
import { Email } from '@/src/domain/value-objects/email'
import { PhoneNumber } from '@/src/domain/value-objects/phone-number'
import type { UserRepository } from '@/src/domain/interfaces/user-repository'

export class RegisterUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(request: RegisterUserRequest): Promise<RegisterUserResponse> {
    // 1. Create value objects (validation happens here)
    const email = Email.create(request.email)
    const phone = PhoneNumber.create(request.phoneNumber)

    // 2. Check if email exists
    if (await this.userRepository.emailExists(email)) {
      return { success: false, message: 'Email đã được đăng ký' }
    }

    // 3. Create and save user
    const user = createUser({ email, phone, ...request })
    await this.userRepository.save(user)

    return { success: true, message: 'Đăng ký thành công!' }
  }
}
```

### Step 3.4: Create API Repository Implementation

```typescript
// src/infrastructure/repositories/api-user-repository.ts
import type { UserRepository } from '@/src/domain/interfaces/user-repository'
import { dxaiApiClient } from '../api/dxai-api-client'

export class ApiUserRepository implements UserRepository {
  async save(user: User): Promise<User> {
    const response = await dxaiApiClient.post('/users/register-company', {
      email: user.email.getValue(),
      phone_number: user.phone.getValue(),
      // ... other fields
    })
    return this.toDomain(response)
  }

  // ... other methods
}
```

---

## Phase 4: Component Integration

### Step 4.1: Update Registration Form

Update `app/dang-ky/registration-form.tsx` to use the new use case:

```typescript
'use client'

import { useState } from 'react'
import { RegisterUserUseCase } from '@/src/application/use-cases/auth/register-user'
import { ApiUserRepository } from '@/src/infrastructure/repositories/api-user-repository'

// Create use case instance
const userRepository = new ApiUserRepository()
const registerUserUseCase = new RegisterUserUseCase(userRepository)

export function RegistrationForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (formData: FormData) => {
    setIsLoading(true)
    setError(null)

    try {
      const result = await registerUserUseCase.execute({
        email: formData.get('email') as string,
        phoneNumber: formData.get('phone_number') as string,
        // ... other fields
      })

      if (!result.success) {
        setError(result.message)
        return
      }

      // Handle success
    } catch (err) {
      setError('An unexpected error occurred')
    } finally {
      setIsLoading(false)
    }
  }

  // ... rest of component
}
```

### Step 4.2: Reorganize Components

Move landing components:
```
components/landing/hero-section.tsx → components/features/landing/hero/hero-section.tsx
components/landing/navbar.tsx → components/features/shared/navbar/navbar.tsx
```

Update imports in pages:
```typescript
// Before
import { HeroSection } from '@/components/landing/hero-section'

// After
import { HeroSection } from '@/components/features/landing/hero/hero-section'
```

---

## File Migration Map

| Current Location | New Location | Priority |
|-----------------|--------------|----------|
| `lib/utils.ts` | `src/shared/utils/cn.ts` | High |
| `lib/validation.ts` | `src/domain/value-objects/` | High |
| `lib/api-client.ts` | `src/infrastructure/api/dxai-api-client.ts` | High |
| `lib/i18n.tsx` | `lib/i18n/index.ts` + `translations/` | Medium |
| `components/landing/` | `components/features/landing/` | Low |
| `components/forms/` | `components/features/auth/` | Medium |
| `components/about/` | `components/features/landing/about/` | Low |

---

## Validation Checklist

### Phase 1 Complete
- [ ] Directory structure created
- [ ] Error classes created
- [ ] Utility functions moved
- [ ] All existing imports still work
- [ ] Build succeeds

### Phase 2 Complete
- [ ] Email value object created with tests
- [ ] PhoneNumber value object created with tests
- [ ] Old validation.ts updated to use value objects
- [ ] Form validation still works

### Phase 3 Complete
- [ ] User entity created
- [ ] UserRepository interface defined
- [ ] RegisterUser use case implemented
- [ ] API repository implementation complete
- [ ] Registration flow works end-to-end

### Phase 4 Complete
- [ ] Registration form uses new architecture
- [ ] Components reorganized under features/
- [ ] All imports updated
- [ ] No console errors
- [ ] All features work as before

---

## Rollback Plan

If issues arise during migration:

1. **Keep old code**: Don't delete old files until new ones are tested
2. **Use re-exports**: Old paths can re-export from new locations
3. **Feature flags**: Use environment variables to toggle old/new code
4. **Git branches**: Keep migration on a separate branch until complete

Example re-export for backward compatibility:

```typescript
// lib/validation.ts (old location)
// Re-export from new location for backward compatibility
export * from '@/src/domain/value-objects'
export { validateRegistrationForm } from '@/src/application/use-cases/auth/register-user'
```

---

## Timeline Estimate

| Phase | Duration | Dependencies |
|-------|----------|--------------|
| Phase 1: Foundation | 2-3 days | None |
| Phase 2: Value Objects | 3-4 days | Phase 1 |
| Phase 3: Use Cases | 1 week | Phase 2 |
| Phase 4: Integration | 1 week | Phase 3 |
| **Total** | **3-4 weeks** | - |

---

## Support

For questions or issues during migration:
- Review [ARCHITECTURE.md](./ARCHITECTURE.md) for architecture details
- Check [CLAUDE.md](./CLAUDE.md) for coding standards
- Create an issue in the repository

---

**Document Version**: 1.0.0
**Last Updated**: 2026-01-20
