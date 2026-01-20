# Architecture Decision Document: DXAI Marketing Platform

> **Version**: 1.0.0
> **Date**: 2026-01-20
> **Status**: Approved
> **Author**: DXAI Architecture Team

---

## Executive Summary

After analyzing six architecture options against DXAI's current state (landing page phase), growth trajectory (dashboard, APIs, multi-platform), and team context (Next.js expertise, Vietnamese market), we recommend **Option 6: Pragmatic Clean Architecture for Next.js** - a hybrid approach that combines:

- **Clean Architecture layers** (from Option 2) for clear separation of concerns
- **DDD concepts** (from Option 4) for domain modeling without full complexity
- **Next.js App Router patterns** for optimal framework integration
- **Simplified event handling** (inspired by Option 3) only where truly needed

This architecture provides the right balance: simple enough for the current landing page phase, yet scalable enough for dashboard, API integrations, and enterprise features. It avoids over-engineering while establishing patterns that prevent technical debt.

---

## Table of Contents

1. [Architecture Comparison Matrix](#architecture-comparison-matrix)
2. [Recommendation: Pragmatic Clean Architecture](#recommendation-pragmatic-clean-architecture)
3. [Folder Structure](#folder-structure)
4. [Layer Definitions](#layer-definitions)
5. [Design Patterns](#design-patterns)
6. [Implementation Phases](#implementation-phases)
7. [Migration Guide](#migration-guide)
8. [Code Examples](#code-examples)
9. [Testing Strategy](#testing-strategy)
10. [Risk Assessment](#risk-assessment)
11. [Success Criteria](#success-criteria)

---

## Architecture Comparison Matrix

| Criteria | Option 1 (DDD Hexagon) | Option 2 (Clean Next.js) | Option 3 (CQRS/ES) | Option 4 (Codely DDD) | Option 5 (Node API) | Option 6 (Hybrid) |
|----------|------------------------|--------------------------|--------------------|-----------------------|---------------------|-------------------|
| Next.js Compatibility | 2/5 | 5/5 | 2/5 | 3/5 | 2/5 | **5/5** |
| Learning Curve | 4/5 | 2/5 | 5/5 | 3/5 | 3/5 | **2/5** |
| Scalability | 5/5 | 3/5 | 5/5 | 4/5 | 3/5 | **4/5** |
| MVP Speed | 2/5 | 4/5 | 1/5 | 3/5 | 3/5 | **4/5** |
| Enterprise Ready | 5/5 | 3/5 | 5/5 | 4/5 | 3/5 | **4/5** |
| Team Fit (Next.js expertise) | 2/5 | 5/5 | 2/5 | 3/5 | 3/5 | **5/5** |
| **TOTAL** | 20/30 | 22/30 | 20/30 | 20/30 | 17/30 | **24/30** |

### Why NOT Other Options

| Option | Primary Rejection Reason |
|--------|-------------------------|
| Option 1 | NestJS-focused, requires significant adaptation for Next.js |
| Option 2 | Too simple for future dashboard/API complexity |
| Option 3 | Massive over-engineering for current phase, 6+ month ROI |
| Option 4 | Backend-only, requires building Next.js layer from scratch |
| Option 5 | REST API focused, doesn't address frontend architecture |

---

## Recommendation: Pragmatic Clean Architecture

### Core Principles

```
┌─────────────────────────────────────────────────────────────────┐
│                        PRESENTATION                              │
│   (Next.js Pages, React Components, Hooks)                       │
├─────────────────────────────────────────────────────────────────┤
│                        APPLICATION                                │
│   (Use Cases, Services, DTOs, Mappers)                           │
├─────────────────────────────────────────────────────────────────┤
│                          DOMAIN                                   │
│   (Entities, Value Objects, Domain Services, Interfaces)         │
├─────────────────────────────────────────────────────────────────┤
│                       INFRASTRUCTURE                              │
│   (API Clients, Storage, External Services, Repositories)        │
└─────────────────────────────────────────────────────────────────┘
```

### Dependency Rule

```
Presentation → Application → Domain ← Infrastructure
                    ↓
              Domain (center)
```

- **Domain** is the center - no dependencies on outer layers
- **Application** depends only on Domain
- **Infrastructure** implements Domain interfaces
- **Presentation** orchestrates Application services

---

## Folder Structure

```
ai-marketing-fe/
├── app/                              # Next.js App Router (Presentation)
│   ├── (marketing)/                  # Marketing pages group
│   │   ├── page.tsx                  # Landing page
│   │   ├── ve-chung-toi/            # About page
│   │   ├── dieu-khoan/              # Terms page
│   │   └── chinh-sach-bao-mat/      # Privacy page
│   │
│   ├── (auth)/                       # Auth pages group
│   │   ├── dang-ky/                 # Registration
│   │   └── dang-nhap/               # Login (future)
│   │
│   ├── (dashboard)/                  # Dashboard group (future)
│   │   ├── layout.tsx               # Dashboard layout
│   │   ├── page.tsx                 # Dashboard home
│   │   ├── campaigns/               # Campaign management
│   │   ├── content/                 # Content creation
│   │   ├── analytics/               # Analytics views
│   │   └── settings/                # User settings
│   │
│   ├── api/                          # API Routes
│   │   ├── auth/                    # Auth endpoints
│   │   ├── campaigns/               # Campaign endpoints
│   │   └── webhooks/                # External webhooks
│   │
│   ├── layout.tsx                    # Root layout
│   ├── globals.css                   # Global styles
│   └── error.tsx                     # Error boundary
│
├── src/                              # Core application code
│   ├── domain/                       # DOMAIN LAYER
│   │   ├── entities/                # Business entities
│   │   │   ├── user.ts
│   │   │   ├── campaign.ts
│   │   │   ├── content.ts
│   │   │   └── analytics.ts
│   │   │
│   │   ├── value-objects/           # Immutable value types
│   │   │   ├── email.ts
│   │   │   ├── phone-number.ts
│   │   │   ├── tax-code.ts
│   │   │   └── money.ts
│   │   │
│   │   ├── interfaces/              # Repository interfaces
│   │   │   ├── user-repository.ts
│   │   │   ├── campaign-repository.ts
│   │   │   └── content-repository.ts
│   │   │
│   │   ├── services/                # Domain services
│   │   │   ├── pricing-calculator.ts
│   │   │   └── content-validator.ts
│   │   │
│   │   └── events/                  # Domain events (simple)
│   │       ├── user-registered.ts
│   │       └── campaign-created.ts
│   │
│   ├── application/                  # APPLICATION LAYER
│   │   ├── use-cases/               # Business use cases
│   │   │   ├── auth/
│   │   │   │   ├── register-user.ts
│   │   │   │   └── login-user.ts
│   │   │   ├── campaigns/
│   │   │   │   ├── create-campaign.ts
│   │   │   │   ├── update-campaign.ts
│   │   │   │   └── get-campaigns.ts
│   │   │   └── content/
│   │   │       ├── generate-content.ts
│   │   │       └── schedule-content.ts
│   │   │
│   │   ├── services/                # Application services
│   │   │   ├── auth-service.ts
│   │   │   ├── campaign-service.ts
│   │   │   └── analytics-service.ts
│   │   │
│   │   ├── dto/                     # Data Transfer Objects
│   │   │   ├── request/
│   │   │   │   ├── register-request.ts
│   │   │   │   └── create-campaign-request.ts
│   │   │   └── response/
│   │   │       ├── user-response.ts
│   │   │       └── campaign-response.ts
│   │   │
│   │   └── mappers/                 # Entity ↔ DTO mappers
│   │       ├── user-mapper.ts
│   │       └── campaign-mapper.ts
│   │
│   ├── infrastructure/              # INFRASTRUCTURE LAYER
│   │   ├── api/                     # External API clients
│   │   │   ├── dxai-api-client.ts
│   │   │   ├── facebook-api.ts
│   │   │   ├── tiktok-api.ts
│   │   │   └── openai-api.ts
│   │   │
│   │   ├── repositories/            # Repository implementations
│   │   │   ├── api-user-repository.ts
│   │   │   ├── api-campaign-repository.ts
│   │   │   └── local-storage-repository.ts
│   │   │
│   │   ├── storage/                 # Storage adapters
│   │   │   ├── local-storage.ts
│   │   │   └── session-storage.ts
│   │   │
│   │   ├── analytics/               # Analytics integrations
│   │   │   ├── gtm.ts
│   │   │   └── vercel-analytics.ts
│   │   │
│   │   └── services/                # External service adapters
│   │       ├── chatbot-service.ts
│   │       └── email-service.ts
│   │
│   └── shared/                       # SHARED LAYER
│       ├── types/                   # Shared TypeScript types
│       │   ├── common.ts
│       │   └── api.ts
│       │
│       ├── utils/                   # Pure utility functions
│       │   ├── cn.ts                # Class name merger
│       │   ├── format.ts            # Formatters
│       │   └── validation.ts        # Validation helpers
│       │
│       ├── constants/               # App constants
│       │   ├── routes.ts
│       │   ├── api-endpoints.ts
│       │   └── config.ts
│       │
│       └── errors/                  # Custom error classes
│           ├── domain-error.ts
│           ├── validation-error.ts
│           └── api-error.ts
│
├── components/                       # PRESENTATION COMPONENTS
│   ├── ui/                          # Base UI components (shadcn)
│   │   ├── button.tsx
│   │   ├── input.tsx
│   │   ├── label.tsx
│   │   ├── card.tsx
│   │   └── modal.tsx
│   │
│   ├── features/                    # Feature-specific components
│   │   ├── landing/                 # Landing page features
│   │   │   ├── hero/
│   │   │   ├── features/
│   │   │   ├── pricing/
│   │   │   └── testimonials/
│   │   │
│   │   ├── auth/                    # Auth features
│   │   │   ├── registration-form/
│   │   │   └── login-form/
│   │   │
│   │   ├── dashboard/               # Dashboard features (future)
│   │   │   ├── campaign-card/
│   │   │   ├── analytics-chart/
│   │   │   └── content-editor/
│   │   │
│   │   └── shared/                  # Shared feature components
│   │       ├── navbar/
│   │       ├── footer/
│   │       └── language-selector/
│   │
│   └── providers/                   # React context providers
│       ├── i18n-provider.tsx
│       ├── theme-provider.tsx
│       └── auth-provider.tsx
│
├── hooks/                            # Custom React hooks
│   ├── use-i18n.ts
│   ├── use-auth.ts
│   ├── use-campaigns.ts
│   └── use-analytics.ts
│
├── lib/                              # Library configurations
│   ├── i18n/                        # Internationalization
│   │   ├── translations/
│   │   │   ├── vi.ts
│   │   │   └── en.ts
│   │   └── index.ts
│   │
│   └── config/                      # App configuration
│       ├── env.ts
│       └── features.ts
│
├── public/                           # Static assets
│   ├── images/
│   ├── icons/
│   └── fonts/
│
├── types/                            # Global type declarations
│   └── cds-chatbot.d.ts
│
├── tests/                            # Test files
│   ├── unit/
│   │   ├── domain/
│   │   ├── application/
│   │   └── components/
│   ├── integration/
│   └── e2e/
│
├── ARCHITECTURE.md                   # This document
├── CLAUDE.md                         # Project documentation
├── README.md                         # Project readme
├── package.json
├── tsconfig.json
├── next.config.ts
└── tailwind.config.ts
```

---

## Layer Definitions

### 1. Domain Layer (`src/domain/`)

The **heart of the application**. Contains business logic that is independent of frameworks, UI, and external services.

#### Entities
Business objects with identity and lifecycle:

```typescript
// src/domain/entities/campaign.ts
export interface Campaign {
  id: string
  name: string
  status: CampaignStatus
  platforms: Platform[]
  content: Content[]
  schedule: Schedule
  analytics: CampaignAnalytics
  createdAt: Date
  updatedAt: Date
}

export type CampaignStatus = 'draft' | 'scheduled' | 'active' | 'paused' | 'completed'
```

#### Value Objects
Immutable objects defined by their attributes:

```typescript
// src/domain/value-objects/email.ts
export class Email {
  private readonly value: string

  private constructor(email: string) {
    this.value = email
  }

  static create(email: string): Email {
    if (!Email.isValid(email)) {
      throw new ValidationError('Invalid email format')
    }
    return new Email(email.toLowerCase())
  }

  static isValid(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  getValue(): string {
    return this.value
  }
}
```

#### Repository Interfaces
Contracts for data access (implemented in Infrastructure):

```typescript
// src/domain/interfaces/campaign-repository.ts
export interface CampaignRepository {
  findById(id: string): Promise<Campaign | null>
  findByUser(userId: string): Promise<Campaign[]>
  save(campaign: Campaign): Promise<Campaign>
  delete(id: string): Promise<void>
}
```

### 2. Application Layer (`src/application/`)

Orchestrates domain objects to implement use cases. Contains no business rules.

#### Use Cases
Single-purpose operations:

```typescript
// src/application/use-cases/campaigns/create-campaign.ts
export class CreateCampaignUseCase {
  constructor(
    private campaignRepository: CampaignRepository,
    private contentValidator: ContentValidator
  ) {}

  async execute(request: CreateCampaignRequest): Promise<CampaignResponse> {
    // 1. Validate request
    const validatedContent = this.contentValidator.validate(request.content)

    // 2. Create domain entity
    const campaign: Campaign = {
      id: generateId(),
      name: request.name,
      status: 'draft',
      platforms: request.platforms,
      content: validatedContent,
      schedule: request.schedule,
      analytics: initialAnalytics(),
      createdAt: new Date(),
      updatedAt: new Date()
    }

    // 3. Persist
    const saved = await this.campaignRepository.save(campaign)

    // 4. Return DTO
    return CampaignMapper.toResponse(saved)
  }
}
```

#### DTOs (Data Transfer Objects)
Data structures for input/output:

```typescript
// src/application/dto/request/create-campaign-request.ts
export interface CreateCampaignRequest {
  name: string
  platforms: Platform[]
  content: ContentInput[]
  schedule: ScheduleInput
}

// src/application/dto/response/campaign-response.ts
export interface CampaignResponse {
  id: string
  name: string
  status: string
  platformCount: number
  contentCount: number
  nextScheduledAt: string | null
}
```

### 3. Infrastructure Layer (`src/infrastructure/`)

Implements interfaces defined in Domain. Handles external concerns.

#### Repository Implementations

```typescript
// src/infrastructure/repositories/api-campaign-repository.ts
export class ApiCampaignRepository implements CampaignRepository {
  constructor(private apiClient: DxaiApiClient) {}

  async findById(id: string): Promise<Campaign | null> {
    const response = await this.apiClient.get<ApiCampaign>(`/campaigns/${id}`)
    return response ? this.toDomain(response) : null
  }

  async save(campaign: Campaign): Promise<Campaign> {
    const apiCampaign = this.toApi(campaign)
    const response = await this.apiClient.post<ApiCampaign>('/campaigns', apiCampaign)
    return this.toDomain(response)
  }

  private toDomain(api: ApiCampaign): Campaign {
    // Transform API response to domain entity
  }

  private toApi(domain: Campaign): ApiCampaign {
    // Transform domain entity to API format
  }
}
```

### 4. Presentation Layer (`app/`, `components/`)

Next.js pages and React components. Uses Application layer services.

#### Page Component

```typescript
// app/(dashboard)/campaigns/page.tsx
import { getCampaigns } from '@/src/application/services/campaign-service'

export default async function CampaignsPage() {
  const campaigns = await getCampaigns()

  return (
    <div>
      <h1>Campaigns</h1>
      <CampaignList campaigns={campaigns} />
    </div>
  )
}
```

---

## Design Patterns

### 1. Repository Pattern
**Where**: Domain ↔ Infrastructure
**Purpose**: Abstract data access, enable testing with mocks

```typescript
// Domain defines interface
interface UserRepository {
  findByEmail(email: string): Promise<User | null>
}

// Infrastructure implements
class ApiUserRepository implements UserRepository {
  async findByEmail(email: string): Promise<User | null> {
    // API call
  }
}
```

### 2. Use Case Pattern
**Where**: Application layer
**Purpose**: Encapsulate business operations, single responsibility

```typescript
// One class = one use case
class RegisterUserUseCase {
  async execute(request: RegisterRequest): Promise<UserResponse>
}

class CreateCampaignUseCase {
  async execute(request: CampaignRequest): Promise<CampaignResponse>
}
```

### 3. DTO Pattern
**Where**: Application layer boundaries
**Purpose**: Decouple internal models from external representation

```typescript
// Internal domain entity
interface User {
  id: string
  email: Email  // Value object
  passwordHash: string  // Never exposed
}

// External response
interface UserResponse {
  id: string
  email: string  // Primitive
  // No password
}
```

### 4. Mapper Pattern
**Where**: Application layer
**Purpose**: Transform between layers

```typescript
class UserMapper {
  static toResponse(user: User): UserResponse {
    return {
      id: user.id,
      email: user.email.getValue()
    }
  }

  static toDomain(dto: UserDto): User {
    return {
      id: dto.id,
      email: Email.create(dto.email)
    }
  }
}
```

### 5. Factory Pattern
**Where**: Domain layer (for complex entity creation)
**Purpose**: Encapsulate creation logic

```typescript
class CampaignFactory {
  static createDraft(name: string, userId: string): Campaign {
    return {
      id: generateId(),
      name,
      userId,
      status: 'draft',
      createdAt: new Date()
    }
  }
}
```

### 6. Service Pattern
**Where**: Application layer
**Purpose**: Coordinate multiple use cases, provide facade

```typescript
class CampaignService {
  constructor(
    private createUseCase: CreateCampaignUseCase,
    private updateUseCase: UpdateCampaignUseCase,
    private getUseCase: GetCampaignsUseCase
  ) {}

  // Facade methods for components
  async create(request: CreateRequest) {
    return this.createUseCase.execute(request)
  }
}
```

---

## Implementation Phases

### Phase 1: Foundation (Current → 2 weeks)

**Goal**: Reorganize existing code without breaking functionality

```
Week 1:
├── Create src/ directory structure
├── Move validation.ts → src/domain/value-objects/
├── Move api-client.ts → src/infrastructure/api/
├── Create shared/utils/ from lib/utils.ts
└── Update import paths

Week 2:
├── Create basic entities (User)
├── Create first use case (RegisterUser)
├── Refactor registration form to use new structure
└── Add unit tests for domain layer
```

**Deliverables**:
- `src/` directory with domain, application, infrastructure, shared
- Working registration flow using new architecture
- 80%+ test coverage on domain layer

### Phase 2: Dashboard Prep (2-4 weeks)

**Goal**: Build infrastructure for dashboard features

```
Week 3-4:
├── Create Campaign entity and value objects
├── Create Content entity
├── Build repository interfaces
├── Implement API repositories
├── Create dashboard layout structure
└── Add authentication flow
```

**Deliverables**:
- Complete domain model for campaigns/content
- Repository pattern working with API
- Dashboard shell with auth

### Phase 3: Core Features (4-8 weeks)

**Goal**: Implement main dashboard functionality

```
Weeks 5-8:
├── Campaign management (CRUD)
├── Content creation flow
├── Multi-platform integration
├── Analytics dashboard
├── Scheduling system
└── Real-time updates
```

**Deliverables**:
- Working campaign management
- Content creation with AI
- Platform integrations
- Basic analytics

### Phase 4: Scale & Optimize (8-12 weeks)

**Goal**: Enterprise features and optimization

```
Weeks 9-12:
├── Advanced analytics
├── Team collaboration
├── Role-based access
├── Performance optimization
├── Caching strategies
└── Event-driven updates (if needed)
```

**Deliverables**:
- Enterprise-ready features
- Performance benchmarks met
- Full test coverage

---

## Migration Guide

### Step-by-Step Migration from Current Structure

#### Step 1: Create Directory Structure

```bash
# Create new directories
mkdir -p src/domain/{entities,value-objects,interfaces,services,events}
mkdir -p src/application/{use-cases,services,dto,mappers}
mkdir -p src/infrastructure/{api,repositories,storage,analytics,services}
mkdir -p src/shared/{types,utils,constants,errors}
mkdir -p components/features/{landing,auth,dashboard,shared}
mkdir -p components/providers
mkdir -p lib/i18n/translations
mkdir -p lib/config
mkdir -p tests/{unit,integration,e2e}
```

#### Step 2: Move Existing Files

| Current Location | New Location | Notes |
|-----------------|--------------|-------|
| `lib/utils.ts` | `src/shared/utils/cn.ts` | Extract cn() function |
| `lib/validation.ts` | `src/domain/value-objects/` | Split into value objects |
| `lib/api-client.ts` | `src/infrastructure/api/dxai-api-client.ts` | Keep as is |
| `lib/i18n.tsx` | `lib/i18n/index.ts` + `translations/` | Split translations |
| `lib/performance.ts` | `src/infrastructure/analytics/` | Move to infrastructure |
| `components/landing/` | `components/features/landing/` | Reorganize |
| `components/forms/` | `components/features/auth/` | Merge with auth |
| `components/about/` | `components/features/landing/about/` | Group with landing |

#### Step 3: Create Value Objects from Validation

```typescript
// Current: lib/validation.ts
export function validateEmail(email: string): ValidationResult { ... }

// New: src/domain/value-objects/email.ts
export class Email {
  private constructor(private readonly value: string) {}

  static create(email: string): Email {
    if (!this.isValid(email)) {
      throw new ValidationError('Invalid email')
    }
    return new Email(email.toLowerCase())
  }

  static isValid(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  getValue(): string {
    return this.value
  }
}
```

#### Step 4: Create First Use Case

```typescript
// src/application/use-cases/auth/register-user.ts
import { Email } from '@/src/domain/value-objects/email'
import { PhoneNumber } from '@/src/domain/value-objects/phone-number'
import { UserRepository } from '@/src/domain/interfaces/user-repository'

export interface RegisterUserRequest {
  email: string
  phoneNumber: string
  companyName: string
  firstName: string
  lastName: string
}

export interface RegisterUserResponse {
  success: boolean
  message: string
}

export class RegisterUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute(request: RegisterUserRequest): Promise<RegisterUserResponse> {
    // Validate and create value objects
    const email = Email.create(request.email)
    const phone = PhoneNumber.create(request.phoneNumber)

    // Create user entity
    const user = {
      email,
      phone,
      companyName: request.companyName,
      name: `${request.firstName} ${request.lastName}`
    }

    // Persist
    await this.userRepository.save(user)

    return { success: true, message: 'Registration successful' }
  }
}
```

#### Step 5: Update Imports

```typescript
// Before
import { cn } from "@/lib/utils"
import { useI18n } from "@/lib/i18n"
import { apiClient } from "@/lib/api-client"

// After
import { cn } from "@/src/shared/utils/cn"
import { useI18n } from "@/lib/i18n"
import { dxaiApiClient } from "@/src/infrastructure/api/dxai-api-client"
```

#### Step 6: Create Path Aliases

```json
// tsconfig.json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./*"],
      "@/domain/*": ["./src/domain/*"],
      "@/application/*": ["./src/application/*"],
      "@/infrastructure/*": ["./src/infrastructure/*"],
      "@/shared/*": ["./src/shared/*"],
      "@/components/*": ["./components/*"],
      "@/hooks/*": ["./hooks/*"],
      "@/lib/*": ["./lib/*"]
    }
  }
}
```

---

## Code Examples

### Example 1: Complete Value Object

```typescript
// src/domain/value-objects/phone-number.ts
import { ValidationError } from '@/src/shared/errors/validation-error'

export class PhoneNumber {
  private readonly value: string

  private constructor(phone: string) {
    this.value = phone
  }

  static create(phone: string): PhoneNumber {
    const normalized = this.normalize(phone)

    if (!this.isValid(normalized)) {
      throw new ValidationError(
        'Số điện thoại không hợp lệ (định dạng: 0xxxxxxxxx)',
        'INVALID_PHONE'
      )
    }

    return new PhoneNumber(normalized)
  }

  static isValid(phone: string): boolean {
    return /^0\d{9}$/.test(phone)
  }

  private static normalize(phone: string): string {
    // Remove spaces, dashes, and country code
    return phone.replace(/[\s-]/g, '').replace(/^\+84/, '0')
  }

  getValue(): string {
    return this.value
  }

  getFormatted(): string {
    // Format: 0xxx xxx xxx
    return this.value.replace(/(\d{4})(\d{3})(\d{3})/, '$1 $2 $3')
  }

  equals(other: PhoneNumber): boolean {
    return this.value === other.value
  }
}
```

### Example 2: Domain Entity

```typescript
// src/domain/entities/campaign.ts
import { Platform } from './platform'
import { Content } from './content'
import { Schedule } from '../value-objects/schedule'

export type CampaignStatus = 'draft' | 'scheduled' | 'active' | 'paused' | 'completed'

export interface Campaign {
  readonly id: string
  readonly userId: string
  name: string
  description?: string
  status: CampaignStatus
  platforms: Platform[]
  content: Content[]
  schedule: Schedule | null
  budget?: number
  analytics: CampaignAnalytics
  readonly createdAt: Date
  updatedAt: Date
}

export interface CampaignAnalytics {
  totalReach: number
  engagement: number
  conversions: number
  roi: number
}

// Domain logic methods
export function canPublish(campaign: Campaign): boolean {
  return (
    campaign.status === 'draft' &&
    campaign.content.length > 0 &&
    campaign.platforms.length > 0 &&
    campaign.schedule !== null
  )
}

export function calculateEffectiveness(campaign: Campaign): number {
  const { totalReach, engagement, conversions } = campaign.analytics
  if (totalReach === 0) return 0
  return (engagement + conversions * 10) / totalReach * 100
}
```

### Example 3: Repository Interface and Implementation

```typescript
// src/domain/interfaces/campaign-repository.ts
import { Campaign } from '../entities/campaign'

export interface CampaignRepository {
  findById(id: string): Promise<Campaign | null>
  findByUserId(userId: string): Promise<Campaign[]>
  findActive(): Promise<Campaign[]>
  save(campaign: Campaign): Promise<Campaign>
  update(campaign: Campaign): Promise<Campaign>
  delete(id: string): Promise<void>
}

// src/infrastructure/repositories/api-campaign-repository.ts
import { CampaignRepository } from '@/domain/interfaces/campaign-repository'
import { Campaign } from '@/domain/entities/campaign'
import { DxaiApiClient } from '../api/dxai-api-client'

interface ApiCampaign {
  id: string
  user_id: string
  name: string
  status: string
  platforms: string[]
  created_at: string
  // ... API format
}

export class ApiCampaignRepository implements CampaignRepository {
  constructor(private api: DxaiApiClient) {}

  async findById(id: string): Promise<Campaign | null> {
    try {
      const response = await this.api.get<ApiCampaign>(`/campaigns/${id}`)
      return this.toDomain(response)
    } catch (error) {
      if (error.status === 404) return null
      throw error
    }
  }

  async findByUserId(userId: string): Promise<Campaign[]> {
    const response = await this.api.get<ApiCampaign[]>(`/users/${userId}/campaigns`)
    return response.map(this.toDomain)
  }

  async save(campaign: Campaign): Promise<Campaign> {
    const apiFormat = this.toApi(campaign)
    const response = await this.api.post<ApiCampaign>('/campaigns', apiFormat)
    return this.toDomain(response)
  }

  private toDomain(api: ApiCampaign): Campaign {
    return {
      id: api.id,
      userId: api.user_id,
      name: api.name,
      status: api.status as CampaignStatus,
      platforms: api.platforms.map(p => ({ name: p })),
      content: [],
      schedule: null,
      analytics: { totalReach: 0, engagement: 0, conversions: 0, roi: 0 },
      createdAt: new Date(api.created_at),
      updatedAt: new Date(api.created_at)
    }
  }

  private toApi(domain: Campaign): Partial<ApiCampaign> {
    return {
      name: domain.name,
      status: domain.status,
      platforms: domain.platforms.map(p => p.name)
    }
  }
}
```

### Example 4: Use Case

```typescript
// src/application/use-cases/campaigns/create-campaign.ts
import { Campaign, CampaignStatus } from '@/domain/entities/campaign'
import { CampaignRepository } from '@/domain/interfaces/campaign-repository'
import { generateId } from '@/shared/utils/id'

export interface CreateCampaignRequest {
  userId: string
  name: string
  description?: string
  platforms: string[]
}

export interface CreateCampaignResponse {
  id: string
  name: string
  status: CampaignStatus
  createdAt: string
}

export class CreateCampaignUseCase {
  constructor(private campaignRepository: CampaignRepository) {}

  async execute(request: CreateCampaignRequest): Promise<CreateCampaignResponse> {
    // Validate
    if (!request.name || request.name.trim().length < 3) {
      throw new ValidationError('Campaign name must be at least 3 characters')
    }

    if (request.platforms.length === 0) {
      throw new ValidationError('At least one platform is required')
    }

    // Create campaign entity
    const campaign: Campaign = {
      id: generateId(),
      userId: request.userId,
      name: request.name.trim(),
      description: request.description,
      status: 'draft',
      platforms: request.platforms.map(name => ({ name })),
      content: [],
      schedule: null,
      analytics: {
        totalReach: 0,
        engagement: 0,
        conversions: 0,
        roi: 0
      },
      createdAt: new Date(),
      updatedAt: new Date()
    }

    // Persist
    const saved = await this.campaignRepository.save(campaign)

    // Return response DTO
    return {
      id: saved.id,
      name: saved.name,
      status: saved.status,
      createdAt: saved.createdAt.toISOString()
    }
  }
}
```

### Example 5: React Hook Integration

```typescript
// hooks/use-campaigns.ts
'use client'

import { useState, useCallback } from 'react'
import { CampaignService } from '@/application/services/campaign-service'
import { CreateCampaignRequest, CreateCampaignResponse } from '@/application/use-cases/campaigns/create-campaign'

// Singleton service instance
const campaignService = new CampaignService()

export function useCampaigns() {
  const [campaigns, setCampaigns] = useState<CampaignResponse[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchCampaigns = useCallback(async (userId: string) => {
    setLoading(true)
    setError(null)

    try {
      const result = await campaignService.getByUser(userId)
      setCampaigns(result)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch campaigns')
    } finally {
      setLoading(false)
    }
  }, [])

  const createCampaign = useCallback(async (request: CreateCampaignRequest) => {
    setLoading(true)
    setError(null)

    try {
      const result = await campaignService.create(request)
      setCampaigns(prev => [...prev, result])
      return result
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to create campaign')
      throw err
    } finally {
      setLoading(false)
    }
  }, [])

  return {
    campaigns,
    loading,
    error,
    fetchCampaigns,
    createCampaign
  }
}
```

### Example 6: Server Component with Architecture

```typescript
// app/(dashboard)/campaigns/page.tsx
import { Suspense } from 'react'
import { CampaignService } from '@/application/services/campaign-service'
import { CampaignList } from '@/components/features/dashboard/campaign-list'
import { CampaignListSkeleton } from '@/components/features/dashboard/campaign-list-skeleton'
import { getCurrentUser } from '@/lib/auth'

// Server-side service
const campaignService = new CampaignService()

export default async function CampaignsPage() {
  const user = await getCurrentUser()

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Campaigns</h1>
        <CreateCampaignButton />
      </div>

      <Suspense fallback={<CampaignListSkeleton />}>
        <CampaignListAsync userId={user.id} />
      </Suspense>
    </div>
  )
}

async function CampaignListAsync({ userId }: { userId: string }) {
  const campaigns = await campaignService.getByUser(userId)
  return <CampaignList campaigns={campaigns} />
}
```

---

## Testing Strategy

### Unit Tests (Domain + Application)

```typescript
// tests/unit/domain/value-objects/email.test.ts
import { Email } from '@/domain/value-objects/email'
import { ValidationError } from '@/shared/errors/validation-error'

describe('Email Value Object', () => {
  describe('create', () => {
    it('creates email with valid input', () => {
      const email = Email.create('test@example.com')
      expect(email.getValue()).toBe('test@example.com')
    })

    it('normalizes email to lowercase', () => {
      const email = Email.create('TEST@EXAMPLE.COM')
      expect(email.getValue()).toBe('test@example.com')
    })

    it('throws ValidationError for invalid email', () => {
      expect(() => Email.create('invalid')).toThrow(ValidationError)
    })

    it('throws ValidationError for empty email', () => {
      expect(() => Email.create('')).toThrow(ValidationError)
    })
  })

  describe('isValid', () => {
    it('returns true for valid emails', () => {
      expect(Email.isValid('test@example.com')).toBe(true)
      expect(Email.isValid('user.name@domain.co.uk')).toBe(true)
    })

    it('returns false for invalid emails', () => {
      expect(Email.isValid('invalid')).toBe(false)
      expect(Email.isValid('@domain.com')).toBe(false)
      expect(Email.isValid('user@')).toBe(false)
    })
  })
})
```

### Integration Tests

```typescript
// tests/integration/use-cases/create-campaign.test.ts
import { CreateCampaignUseCase } from '@/application/use-cases/campaigns/create-campaign'
import { InMemoryCampaignRepository } from '@/tests/mocks/in-memory-campaign-repository'

describe('CreateCampaignUseCase', () => {
  let useCase: CreateCampaignUseCase
  let repository: InMemoryCampaignRepository

  beforeEach(() => {
    repository = new InMemoryCampaignRepository()
    useCase = new CreateCampaignUseCase(repository)
  })

  it('creates campaign with valid input', async () => {
    const result = await useCase.execute({
      userId: 'user-123',
      name: 'My Campaign',
      platforms: ['facebook', 'instagram']
    })

    expect(result.id).toBeDefined()
    expect(result.name).toBe('My Campaign')
    expect(result.status).toBe('draft')
  })

  it('persists campaign to repository', async () => {
    const result = await useCase.execute({
      userId: 'user-123',
      name: 'My Campaign',
      platforms: ['facebook']
    })

    const saved = await repository.findById(result.id)
    expect(saved).not.toBeNull()
    expect(saved?.name).toBe('My Campaign')
  })
})
```

---

## Risk Assessment

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| Over-engineering early | Medium | High | Start with minimal layers, add complexity only when needed |
| Migration breaks features | Medium | High | Incremental migration, comprehensive tests, feature flags |
| Team learning curve | Low | Medium | Pair programming, code reviews, documentation |
| Performance overhead | Low | Low | Lazy loading, code splitting, profiling |
| Import path confusion | Medium | Low | Clear path aliases, linting rules, IDE configuration |

---

## Success Criteria

### Phase 1 Success (Foundation)
- [ ] All existing features work without regression
- [ ] `src/` directory structure in place
- [ ] At least 3 value objects created
- [ ] Registration flow uses new architecture
- [ ] 80%+ test coverage on domain layer
- [ ] Build time < 30 seconds

### Phase 2 Success (Dashboard Prep)
- [ ] Domain model complete for campaigns/content
- [ ] Repository pattern working with API
- [ ] Dashboard layout renders
- [ ] Authentication flow complete
- [ ] Zero runtime errors in production

### Phase 3 Success (Core Features)
- [ ] Campaign CRUD fully functional
- [ ] Content creation with AI working
- [ ] 3+ platform integrations active
- [ ] Analytics dashboard displaying data
- [ ] < 3 second page load time

### Phase 4 Success (Scale)
- [ ] Enterprise features operational
- [ ] Team collaboration working
- [ ] < 100ms API response times
- [ ] 95%+ uptime
- [ ] Full test coverage (unit + integration + E2E)

---

## Appendix: Quick Reference

### Layer Responsibility Summary

| Layer | Contains | Depends On | Example Files |
|-------|----------|------------|---------------|
| Domain | Entities, Value Objects, Interfaces | Nothing | `campaign.ts`, `email.ts` |
| Application | Use Cases, Services, DTOs | Domain | `create-campaign.ts` |
| Infrastructure | API Clients, Repositories | Domain interfaces | `api-campaign-repository.ts` |
| Presentation | Pages, Components, Hooks | Application | `page.tsx`, `CampaignList.tsx` |

### When to Add Code to Each Layer

**Domain**: When defining business rules, validation logic, or core concepts
**Application**: When orchestrating a workflow or transforming data
**Infrastructure**: When interacting with external systems (API, storage)
**Presentation**: When displaying data or handling user interaction

---

**Document Version**: 1.0.0
**Last Updated**: 2026-01-20
**Approved By**: DXAI Architecture Team
