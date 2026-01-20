# DXAI Marketing Platform

AI-powered marketing automation platform built with Next.js 16, React 19, and Tailwind CSS.

## Overview

DXAI Marketing Platform is a comprehensive AI-powered solution that helps Vietnamese businesses automate their entire marketing workflow from ideation to multi-platform content publishing.

### Key Features

- **Video Production**: AI-powered automated video creation (1000+ videos/month)
- **Content Generation**: Multi-channel content with 50+ templates
- **Smart Scheduling**: 24/7 automated posting with optimal timing
- **Image Design**: Unlimited AI-powered marketing visuals
- **Analytics Dashboard**: Real-time ROI tracking with 10+ metrics
- **Platform Integration**: 20+ social media platforms

## Tech Stack

| Category | Technology |
|----------|------------|
| Framework | Next.js 16.1.1 |
| React | 19.2.3 |
| Language | TypeScript 5.x |
| Styling | Tailwind CSS 4.1.18 |
| UI Components | Radix UI, Shadcn |
| Icons | Lucide React, React Icons |
| Analytics | Vercel Analytics |

## Architecture

DXAI uses **Pragmatic Clean Architecture** - a hybrid approach optimized for Next.js that combines Clean Architecture layers with Domain-Driven Design concepts.

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

### Key Principles

- **Dependency Rule**: Domain is the center, outer layers depend on inner layers
- **Repository Pattern**: Abstract data access for testability
- **Use Case Pattern**: One class = one business operation
- **Value Objects**: Immutable objects for validation (Email, PhoneNumber)

> **Full Documentation**: See [ARCHITECTURE.md](./ARCHITECTURE.md) for comprehensive architecture details, code examples, and migration guide.

## Project Structure

```
ai-marketing-fe/
├── app/                        # Next.js App Router (Presentation)
│   ├── (marketing)/            # Landing pages
│   ├── (auth)/                 # Auth pages (dang-ky)
│   ├── (dashboard)/            # Dashboard (future)
│   ├── api/                    # API routes
│   └── layout.tsx              # Root layout
│
├── src/                        # Core application code (target)
│   ├── domain/                 # Business entities & rules
│   │   ├── entities/           # Campaign, User, Content
│   │   ├── value-objects/      # Email, PhoneNumber, TaxCode
│   │   ├── interfaces/         # Repository contracts
│   │   └── services/           # Domain services
│   │
│   ├── application/            # Use cases & orchestration
│   │   ├── use-cases/          # RegisterUser, CreateCampaign
│   │   ├── services/           # Application services
│   │   ├── dto/                # Request/Response DTOs
│   │   └── mappers/            # Entity ↔ DTO mappers
│   │
│   ├── infrastructure/         # External integrations
│   │   ├── api/                # API clients
│   │   ├── repositories/       # Repository implementations
│   │   └── storage/            # Storage adapters
│   │
│   └── shared/                 # Cross-cutting concerns
│       ├── types/              # Shared types
│       ├── utils/              # Utility functions
│       ├── constants/          # App constants
│       └── errors/             # Custom errors
│
├── components/                 # React components
│   ├── ui/                     # Base UI (shadcn)
│   ├── features/               # Feature-specific components
│   │   ├── landing/            # Landing page
│   │   ├── auth/               # Authentication
│   │   └── dashboard/          # Dashboard (future)
│   └── providers/              # Context providers
│
├── hooks/                      # Custom React hooks
├── lib/                        # Library configs (i18n, etc.)
├── public/                     # Static assets
├── types/                      # Global type declarations
│
├── ARCHITECTURE.md             # Architecture documentation
├── CLAUDE.md                   # Project documentation
└── README.md                   # This file
```

## System Requirements

- Node.js 20+
- pnpm (recommended)

## Getting Started

```bash
# Clone repository
git clone https://gitlab.com/omni.channel/ai-marketing-web.git

# Navigate to project directory
cd ai-marketing-web

# Install dependencies
pnpm install

# Copy environment file
cp .env.example .env.local

# Start development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server |
| `pnpm build` | Create production build |
| `pnpm start` | Start production server |
| `pnpm lint` | Run ESLint |
| `pnpm type-check` | Run TypeScript compiler |

## Development Guidelines

### Branch Strategy

```
main              # Production branch
├── dev           # Development branch
├── feature/*     # Feature branches
├── fix/*         # Bug fix branches
└── hotfix/*      # Critical production fixes
```

### Commit Convention

Using Conventional Commits:

```bash
feat: add new feature
fix: bug fix
docs: documentation updates
style: style changes (no code logic)
refactor: code refactoring
perf: performance improvements
test: add or fix tests
chore: build, dependencies updates
```

### Code Standards

- Follow TypeScript strict mode
- Use Server Components by default
- Add `"use client"` only when needed (hooks, browser APIs, event handlers)
- Use semantic HTML with ARIA labels
- Follow WCAG 2.1 AA accessibility guidelines

> **Full Standards**: See [CLAUDE.md](./CLAUDE.md) for comprehensive coding standards, component guidelines, and best practices.

## Documentation

| Document | Description |
|----------|-------------|
| [CLAUDE.md](./CLAUDE.md) | Complete project documentation for developers |
| [ARCHITECTURE.md](./ARCHITECTURE.md) | Architecture decision document with migration guide |

## Contributing

1. Create a new branch from `dev`
2. Make your changes following the coding standards
3. Write tests for new functionality
4. Push to GitLab
5. Create Merge Request to `dev`

## License

Private - All rights reserved

## Contact

- Repository: https://gitlab.com/omni.channel/ai-marketing-web
- Maintained by: Tien Phong CDS Development Team
