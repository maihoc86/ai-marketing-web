# CLAUDE.MD - DXAI Marketing Platform Project Documentation

> **Project Guide for AI Assistants and Developers**
> Last Updated: 2026-01-16
> Version: 1.0.0

---

## 📋 TABLE OF CONTENTS

1. [Project Overview](#project-overview)
2. [Tech Stack](#tech-stack)
3. [Project Structure](#project-structure)
4. [Architecture Patterns](#architecture-patterns)
5. [Coding Standards & Best Practices](#coding-standards--best-practices)
6. [Component Guidelines](#component-guidelines)
7. [Internationalization (i18n)](#internationalization-i18n)
8. [Styling & Design System](#styling--design-system)
9. [Performance Optimization](#performance-optimization)
10. [Accessibility (a11y)](#accessibility-a11y)
11. [State Management](#state-management)
12. [API Integration](#api-integration)
13. [Testing Guidelines](#testing-guidelines)
14. [Git Workflow](#git-workflow)
15. [Deployment](#deployment)
16. [Troubleshooting](#troubleshooting)
17. [Common Patterns](#common-patterns)

---

## 📊 PROJECT OVERVIEW

**DXAI Marketing Platform** is a comprehensive AI-powered marketing automation platform that helps Vietnamese businesses automate their entire marketing workflow from ideation to multi-platform content publishing.

### Key Features
- **Video Production**: AI-powered automated video creation (1000+ videos/month)
- **Content Generation**: Multi-channel content with 50+ templates
- **Smart Scheduling**: 24/7 automated posting with optimal timing
- **Image Design**: Unlimited AI-powered marketing visuals
- **Analytics Dashboard**: Real-time ROI tracking with 10+ metrics
- **Platform Integration**: 20+ social media platforms (Facebook, TikTok, Instagram, LinkedIn, YouTube)

### Target Audience
- Vietnamese SMEs and Enterprises
- Marketing Agencies
- Retail chains
- E-commerce businesses

### Project Goals
- Automate 80% of marketing tasks
- Save 54% in operational costs vs traditional methods
- Produce 2x more content with AI assistance
- Reduce video production time from 1-2 days to 2 minutes

---

## 🛠 TECH STACK

### Core Framework
```json
{
  "framework": "Next.js 16.1.1",
  "react": "19.2.3",
  "typescript": "5.x",
  "node": ">=18.17.0"
}
```

### Styling
- **Tailwind CSS 4.1.18** - Utility-first CSS framework
- **tw-animate-css 1.4.0** - Animation utilities
- **class-variance-authority** - Component variants
- **tailwind-merge** - Conditional class merging

### UI Components
- **Radix UI** - Headless accessible components
  - `@radix-ui/react-label`
  - `@radix-ui/react-slot`
- **Lucide React 0.562.0** - Icon library
- **React Icons 5.5.0** - Additional icons

### Analytics & Monitoring
- **Vercel Analytics** - Performance monitoring
- **Web Vitals 5.1.0** - Core Web Vitals tracking
- **Google Tag Manager** - Marketing analytics

### Third-party Integrations
- **CDS Chatbot SDK** - AI chatbot (Gemini 2.5 Flash)
- **YouTube API** - Video embedding
- **Social Media APIs** - Multi-platform publishing

---

## 📁 PROJECT STRUCTURE

```
ai-marketing-fe/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout with providers
│   ├── page.tsx                 # Landing page (/)
│   ├── dang-ky/                 # Registration page (/dang-ky)
│   │   └── page.tsx
│   ├── ve-chung-toi/            # About page (/ve-chung-toi)
│   │   └── page.tsx
│   ├── dieu-khoan/              # Terms page (/dieu-khoan)
│   │   └── page.tsx
│   ├── chinh-sach-bao-mat/      # Privacy page (/chinh-sach-bao-mat)
│   │   └── page.tsx
│   └── globals.css              # Global styles
│
├── components/                   # React components
│   ├── ui/                      # Shadcn UI components
│   │   ├── button.tsx
│   │   ├── input.tsx
│   │   └── label.tsx
│   │
│   ├── landing/                 # Landing page sections
│   │   ├── navbar.tsx           # Main navigation
│   │   ├── hero-section.tsx     # Hero with floating brands
│   │   ├── features-section.tsx # 6 core features
│   │   ├── pricing-section.tsx  # 3-tier pricing
│   │   ├── roi-section.tsx      # ROI comparison table
│   │   ├── testimonials-section.tsx
│   │   ├── faq-section.tsx
│   │   ├── why-choose-section.tsx
│   │   ├── trusted-businesses-section.tsx
│   │   ├── cta-section.tsx
│   │   └── footer.tsx
│   │
│   ├── language-selector.tsx    # Vi/En switcher
│   ├── youtube-modal.tsx        # Video player modal
│   └── cta-register-modal.tsx   # Timed CTA popup
│
├── lib/                         # Utility functions
│   ├── utils.ts                # cn() - class merger
│   ├── i18n.tsx                # Internationalization
│   ├── performance.ts          # Web Vitals tracking
│   └── performance-monitor.ts  # Performance monitoring
│
├── public/                      # Static assets
│   ├── images/                 # Image assets
│   └── favicon.ico
│
├── .env.local                   # Environment variables (gitignored)
├── .env.example                 # Environment template
├── next.config.ts               # Next.js configuration
├── tailwind.config.ts           # Tailwind configuration
├── tsconfig.json                # TypeScript configuration
├── package.json                 # Dependencies
├── CLAUDE.md                    # This file
└── README.md                    # Project documentation
```

---

## 🏗 ARCHITECTURE PATTERNS

### Next.js App Router Patterns

#### 1. Server vs Client Components
```typescript
// ✅ CORRECT: Server Component (default)
export function ServerComponent() {
  // No hooks, no browser APIs
  // Can directly fetch data
  return <div>Server rendered</div>
}

// ✅ CORRECT: Client Component
"use client"

import { useState } from "react"

export function ClientComponent() {
  const [count, setCount] = useState(0)
  return <button onClick={() => setCount(count + 1)}>{count}</button>
}
```

**Rules:**
- Default to Server Components
- Add `"use client"` ONLY when you need:
  - React hooks (`useState`, `useEffect`, etc.)
  - Browser APIs (`window`, `localStorage`, etc.)
  - Event handlers (`onClick`, `onChange`, etc.)
  - Context consumers

#### 2. Lazy Loading Pattern
```typescript
// ✅ CORRECT: Lazy load below-the-fold sections
import dynamic from "next/dynamic"

const FeaturesSection = dynamic(() => import("@/components/landing/features-section").then(mod => ({ default: mod.FeaturesSection })), {
  loading: () => <div className="h-screen animate-pulse bg-gray-100" />,
  ssr: false
})
```

**Rules:**
- Lazy load sections below the fold
- Provide loading skeleton
- Disable SSR for client-heavy components
- Keep above-the-fold content in main bundle

#### 3. Layout Composition
```typescript
// app/layout.tsx - Root layout with providers
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body>
        <I18nProvider>
          <Navbar />
          {children}
          <Footer />
        </I18nProvider>
      </body>
    </html>
  )
}
```

---

## 📝 CODING STANDARDS & BEST PRACTICES

### TypeScript Guidelines

#### 1. Type Safety
```typescript
// ✅ CORRECT: Explicit types for props
interface ButtonProps {
  variant: "primary" | "secondary" | "ghost"
  size: "sm" | "md" | "lg"
  onClick?: () => void
  disabled?: boolean
  children: React.ReactNode
}

export function Button({ variant, size, onClick, disabled, children }: ButtonProps) {
  // Implementation
}

// ❌ INCORRECT: Implicit any
export function Button(props) { // Type error: Parameter 'props' implicitly has an 'any' type
  // Implementation
}
```

#### 2. Strict Mode Compliance
```typescript
// tsconfig.json
{
  "compilerOptions": {
    "strict": true,              // Enable all strict checks
    "noEmit": true,             // Only type-check
    "esModuleInterop": true,    // CommonJS/ESM interop
    "skipLibCheck": true,       // Skip .d.ts files
    "resolveJsonModule": true   // Import JSON files
  }
}
```

#### 3. Component Prop Types
```typescript
// ✅ CORRECT: Destructured props with types
interface CardProps {
  title: string
  description: string
  imageSrc?: string
  onClick?: () => void
}

export function Card({ title, description, imageSrc, onClick }: CardProps) {
  return (
    <div className="card" onClick={onClick}>
      {imageSrc && <img src={imageSrc} alt={title} />}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

// ❌ INCORRECT: Props as object
export function Card(props: CardProps) {
  return (
    <div onClick={props.onClick}>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  )
}
```

### File Naming Conventions

```
kebab-case.tsx     # Components: hero-section.tsx
kebab-case.ts      # Utils: performance-monitor.ts
PascalCase.tsx     # Only for components in ui/: Button.tsx
page.tsx           # Next.js route files
layout.tsx         # Next.js layout files
```

### Import Order
```typescript
// 1. React/Next.js imports
import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"

// 2. Third-party libraries
import { Sparkles, Menu, X } from "lucide-react"

// 3. Internal components
import { Button } from "@/components/ui/button"
import { LanguageSelector } from "@/components/language-selector"

// 4. Utils and helpers
import { useI18n } from "@/lib/i18n"
import { cn } from "@/lib/utils"

// 5. Types
import type { Locale } from "@/lib/i18n"
```

### Code Organization
```typescript
// ✅ CORRECT: Logical grouping
export function Component() {
  // 1. Hooks
  const [state, setState] = useState()
  const { t, locale } = useI18n()

  // 2. Derived state
  const isActive = state === "active"

  // 3. Effects
  useEffect(() => {
    // Side effects
  }, [])

  // 4. Event handlers
  const handleClick = () => {
    setState("active")
  }

  // 5. Render helpers
  const renderContent = () => {
    return <div>Content</div>
  }

  // 6. JSX
  return (
    <div onClick={handleClick}>
      {renderContent()}
    </div>
  )
}
```

---

## 🎨 COMPONENT GUIDELINES

### Component Structure Template

```typescript
"use client"

import { useState, useEffect, type ReactNode } from "react"
import { cn } from "@/lib/utils"
import { useI18n } from "@/lib/i18n"

// ============================================================
// TYPES
// ============================================================
interface ComponentProps {
  variant?: "default" | "primary" | "secondary"
  size?: "sm" | "md" | "lg"
  disabled?: boolean
  className?: string
  children: ReactNode
  onClick?: () => void
}

// ============================================================
// CONSTANTS
// ============================================================
const ANIMATION_DURATION = 300
const DEFAULT_VARIANT = "default"

// ============================================================
// COMPONENT
// ============================================================
export function Component({
  variant = DEFAULT_VARIANT,
  size = "md",
  disabled = false,
  className,
  children,
  onClick
}: ComponentProps) {
  // Hooks
  const [isActive, setIsActive] = useState(false)
  const { t } = useI18n()

  // Effects
  useEffect(() => {
    // Setup
    return () => {
      // Cleanup
    }
  }, [])

  // Handlers
  const handleClick = () => {
    if (disabled) return
    setIsActive(true)
    onClick?.()
  }

  // Render
  return (
    <button
      className={cn(
        "base-styles",
        variant === "primary" && "primary-styles",
        size === "lg" && "large-styles",
        disabled && "disabled-styles",
        className
      )}
      onClick={handleClick}
      disabled={disabled}
      aria-label={t("component.label")}
    >
      {children}
    </button>
  )
}
```

### Component Best Practices

#### 1. Always Use Semantic HTML
```typescript
// ✅ CORRECT
<button onClick={handleClick} aria-label="Close">
  <X />
</button>

// ❌ INCORRECT
<div onClick={handleClick} className="button">
  <X />
</div>
```

#### 2. Provide ARIA Labels
```typescript
// ✅ CORRECT
<nav aria-label="Main navigation">
  <Link href="/" aria-label="Home">Logo</Link>
</nav>

// ❌ INCORRECT
<div>
  <a href="/">Logo</a>
</div>
```

#### 3. Use Next.js Image Component
```typescript
// ✅ CORRECT
import Image from "next/image"

<Image
  src="/images/hero.jpg"
  alt="AI Marketing Dashboard"
  width={1200}
  height={600}
  priority // For LCP images
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,..."
/>

// ❌ INCORRECT
<img src="/images/hero.jpg" alt="Hero" />
```

#### 4. Handle Loading States
```typescript
// ✅ CORRECT
export function Form() {
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async () => {
    setIsLoading(true)
    try {
      await submitForm()
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Button disabled={isLoading}>
        {isLoading ? (
          <>
            <Loader2 className="animate-spin" />
            Submitting...
          </>
        ) : (
          "Submit"
        )}
      </Button>
    </form>
  )
}
```

---

## 🌍 INTERNATIONALIZATION (i18n)

### Translation System

The project uses a custom i18n system with **692 translation keys** across **2 languages** (Vietnamese and English).

#### Usage Pattern
```typescript
"use client"

import { useI18n } from "@/lib/i18n"

export function Component() {
  const { t, locale, setLocale } = useI18n()

  return (
    <div>
      <h1>{t("nav.features")}</h1>
      <p>{t("pricing.subtitle")}</p>

      {/* With parameters */}
      <p>{t("cta.trusted", { count: "500" })}</p>

      {/* Language switcher */}
      <button onClick={() => setLocale(locale === "vi" ? "en" : "vi")}>
        {locale === "vi" ? "English" : "Tiếng Việt"}
      </button>
    </div>
  )
}
```

### Translation Key Naming Convention
```
{section}.{subsection}.{element}

Examples:
nav.features          # Navigation > Features
pricing.startup.name  # Pricing > Startup > Name
hero.cta.trial       # Hero > CTA > Trial button
```

### Adding New Translations

1. **Add to both locales** in `lib/i18n.tsx`:
```typescript
const translations: Record<Locale, Record<string, string>> = {
  vi: {
    "section.new.key": "Vietnamese text",
  },
  en: {
    "section.new.key": "English text",
  }
}
```

2. **Use in component**:
```typescript
const { t } = useI18n()
return <p>{t("section.new.key")}</p>
```

### Locale Persistence
- Stored in `localStorage` under key: `dxai_locale`
- Default locale: `vi` (Vietnamese)
- Updates `<html lang="...">` attribute automatically

---

## 🎨 STYLING & DESIGN SYSTEM

### Tailwind CSS Approach

#### 1. Utility-First Pattern
```typescript
// ✅ CORRECT: Compose with utilities
<div className="flex items-center gap-4 rounded-xl bg-white p-6 shadow-lg">
  <h3 className="text-lg font-semibold text-gray-900">Title</h3>
</div>

// ❌ INCORRECT: Custom CSS classes
<div className="card">
  <h3 className="card-title">Title</h3>
</div>
```

#### 2. Responsive Design
```typescript
// Mobile-first approach
<div className="
  px-4         // mobile
  sm:px-6      // 640px+
  md:px-8      // 768px+
  lg:px-12     // 1024px+
  xl:px-16     // 1280px+
">
  <h1 className="
    text-2xl     // mobile
    sm:text-3xl  // 640px+
    md:text-4xl  // 768px+
    lg:text-5xl  // 1024px+
  ">
    Responsive Heading
  </h1>
</div>
```

#### 3. Conditional Classes with cn()
```typescript
import { cn } from "@/lib/utils"

<button
  className={cn(
    // Base styles
    "px-4 py-2 rounded-full font-semibold transition-colors",

    // Conditional styles
    variant === "primary" && "bg-blue-600 text-white hover:bg-blue-700",
    variant === "secondary" && "bg-gray-200 text-gray-900 hover:bg-gray-300",

    // State styles
    disabled && "opacity-50 cursor-not-allowed",
    isActive && "ring-2 ring-blue-500",

    // User className (highest priority)
    className
  )}
>
  Button
</button>
```

### Design Tokens (To Be Implemented)

```typescript
// Recommended: Define in tailwind.config.ts
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
        }
      },
      spacing: {
        xs: '4px',
        sm: '8px',
        md: '12px',
        lg: '16px',
        xl: '20px',
      },
      borderRadius: {
        'card': '12px',
        'modal': '16px',
        'button': '9999px', // Full rounded
      }
    }
  }
}
```

### Common Patterns

#### Card Component
```typescript
<div className="rounded-xl border border-gray-200 bg-white p-6 shadow-md hover:shadow-lg transition-shadow">
  <h3 className="text-lg font-semibold text-gray-900 mb-2">Card Title</h3>
  <p className="text-sm text-gray-600">Card content</p>
</div>
```

#### Button Variants
```typescript
// Primary CTA
<button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full shadow-sm hover:shadow-lg transition-all">
  Start Free Trial
</button>

// Secondary
<button className="bg-white hover:bg-gray-50 text-gray-900 font-medium px-6 py-3 rounded-full border border-gray-200 transition-colors">
  Learn More
</button>

// Ghost
<button className="text-gray-600 hover:text-gray-900 hover:bg-gray-100 px-4 py-2 rounded-full transition-colors">
  View Details
</button>
```

#### Glassmorphism Effect
```typescript
<div className="
  bg-white/95 backdrop-blur-md
  border border-gray-200/70
  rounded-full
  shadow-[0_8px_30px_rgba(0,0,0,0.08)]
">
  Glassmorphism container
</div>
```

---

## ⚡ PERFORMANCE OPTIMIZATION

### Image Optimization

#### 1. Next.js Image Component
```typescript
import Image from "next/image"

// ✅ CORRECT: Optimized images
<Image
  src="/images/feature-dashboard.png"
  alt="AI Marketing Dashboard"
  width={800}
  height={600}
  quality={85}
  placeholder="blur"
  loading="lazy"
/>

// For remote images
<Image
  src="https://cdn.example.com/image.jpg"
  alt="Description"
  width={800}
  height={600}
  unoptimized={false} // Let Next.js optimize
/>
```

#### 2. Image Format Priority
1. **AVIF** (best compression, modern browsers)
2. **WebP** (good compression, wide support)
3. **JPEG** (fallback)

Next.js handles this automatically with the Image component.

### Code Splitting

#### 1. Dynamic Imports
```typescript
import dynamic from "next/dynamic"

// ✅ CORRECT: Lazy load heavy components
const PricingSection = dynamic(
  () => import("@/components/landing/pricing-section").then(mod => ({ default: mod.PricingSection })),
  {
    loading: () => <div className="h-screen animate-pulse bg-gray-50" />,
    ssr: false // Disable SSR for client-only components
  }
)

// Heavy third-party libraries
const ReactPlayer = dynamic(() => import("react-player/youtube"), {
  ssr: false
})
```

#### 2. Bundle Analysis
```bash
# Add to package.json scripts
"analyze": "ANALYZE=true next build"

# Then add to next.config.ts
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer(nextConfig)
```

### Web Vitals Targets

```typescript
// Target metrics (from lib/performance.ts)
const TARGET_METRICS = {
  LCP: 2500,  // Largest Contentful Paint < 2.5s
  FID: 100,   // First Input Delay < 100ms
  CLS: 0.1,   // Cumulative Layout Shift < 0.1
  TTFB: 800,  // Time to First Byte < 800ms
  FCP: 1800,  // First Contentful Paint < 1.8s
}
```

### Performance Checklist

- [ ] Use `next/image` for all images
- [ ] Lazy load below-the-fold sections
- [ ] Defer non-critical JavaScript
- [ ] Minimize CSS bundle (use Tailwind's purge)
- [ ] Enable compression (gzip/brotli)
- [ ] Add `priority` to LCP images
- [ ] Use `loading="lazy"` for images
- [ ] Preload critical assets
- [ ] Monitor Web Vitals in production

---

## ♿ ACCESSIBILITY (a11y)

### WCAG 2.1 AA Compliance

#### 1. Semantic HTML
```typescript
// ✅ CORRECT
<nav aria-label="Main navigation">
  <ul role="list">
    <li><Link href="/features">Features</Link></li>
  </ul>
</nav>

<main>
  <section aria-labelledby="pricing-heading">
    <h2 id="pricing-heading">Pricing Plans</h2>
  </section>
</main>

<footer>
  <p>&copy; 2026 Tien Phong CDS</p>
</footer>

// ❌ INCORRECT
<div className="nav">
  <div className="nav-item">Features</div>
</div>
```

#### 2. ARIA Attributes
```typescript
// Form inputs
<label htmlFor="email" className="sr-only">Email</label>
<input
  id="email"
  type="email"
  aria-required="true"
  aria-invalid={hasError}
  aria-describedby="email-error"
/>
{hasError && (
  <p id="email-error" role="alert" className="text-red-600">
    Invalid email address
  </p>
)}

// Buttons
<button
  aria-label="Close modal"
  aria-expanded={isOpen}
  onClick={handleClose}
>
  <X aria-hidden="true" />
</button>

// Navigation
<nav aria-label="Main navigation">
  <Link href="/" aria-current={isActive ? "page" : undefined}>
    Home
  </Link>
</nav>
```

#### 3. Keyboard Navigation
```typescript
// ✅ CORRECT: Keyboard accessible
<div
  role="button"
  tabIndex={0}
  onClick={handleClick}
  onKeyDown={(e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault()
      handleClick()
    }
  }}
>
  Interactive element
</div>

// Better: Use actual button
<button onClick={handleClick}>
  Interactive element
</button>
```

#### 4. Focus Management
```typescript
// Modal focus trap
export function Modal({ isOpen, onClose, children }: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!isOpen) return

    // Save currently focused element
    const previouslyFocused = document.activeElement as HTMLElement

    // Focus modal
    modalRef.current?.focus()

    // Prevent body scroll
    document.body.style.overflow = "hidden"

    return () => {
      // Restore focus
      previouslyFocused?.focus()
      document.body.style.overflow = ""
    }
  }, [isOpen])

  return (
    <div
      ref={modalRef}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      tabIndex={-1}
    >
      {children}
    </div>
  )
}
```

#### 5. Touch Targets
```typescript
// Minimum 44x44px for touch targets
<button className="
  min-h-[44px] min-w-[44px]
  p-2.5
  touch-manipulation
">
  <Icon className="w-5 h-5" />
</button>
```

#### 6. Color Contrast
```typescript
// ✅ CORRECT: WCAG AA compliant
<p className="text-gray-900 bg-white">          // 21:1 ratio
<p className="text-gray-700 bg-white">          // 4.5:1 ratio
<p className="text-blue-600 bg-white">          // 4.5:1 ratio

// ❌ INCORRECT: Poor contrast
<p className="text-gray-400 bg-white">          // 2.5:1 ratio (fail)
<p className="text-yellow-300 bg-white">        // 1.8:1 ratio (fail)
```

### Screen Reader Support

```typescript
// Skip to content link
<a href="#main-content" className="
  sr-only focus:not-sr-only
  focus:fixed focus:top-4 focus:left-4
  focus:z-50 focus:px-4 focus:py-2
  focus:bg-blue-600 focus:text-white
">
  Skip to main content
</a>

<main id="main-content">
  {/* Page content */}
</main>
```

---

## 🔄 STATE MANAGEMENT

### Local State (useState)
```typescript
// ✅ CORRECT: Simple component state
export function Counter() {
  const [count, setCount] = useState(0)

  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  )
}
```

### Context API for Global State
```typescript
// lib/theme-context.tsx
"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

interface ThemeContextType {
  theme: "light" | "dark"
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<"light" | "dark">("light")

  const toggleTheme = () => {
    setTheme(prev => prev === "light" ? "dark" : "light")
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider")
  }
  return context
}
```

### LocalStorage State
```typescript
// ✅ CORRECT: Safe localStorage usage
export function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(initialValue)
  const [isHydrated, setIsHydrated] = useState(false)

  useEffect(() => {
    try {
      const stored = localStorage.getItem(key)
      if (stored) {
        setValue(JSON.parse(stored))
      }
    } catch (error) {
      console.error("Failed to read from localStorage:", error)
    } finally {
      setIsHydrated(true)
    }
  }, [key])

  const updateValue = (newValue: T) => {
    setValue(newValue)
    try {
      localStorage.setItem(key, JSON.stringify(newValue))
    } catch (error) {
      console.error("Failed to write to localStorage:", error)
    }
  }

  return [value, updateValue, isHydrated] as const
}
```

---

## 🌐 API INTEGRATION

### Registration API

```typescript
// ✅ CORRECT: Type-safe API calls
interface RegisterFormData {
  business_type: "enterprise" | "household"
  tax_code: string
  company_name: string
  first_name: string
  last_name: string
  email: string
  phone_number: string
  job_position: string
  selected_package: string
}

async function registerUser(data: RegisterFormData) {
  const response = await fetch("https://api-ai-code.dsp.one/api/users/register-company", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })

  if (!response.ok) {
    const error = await response.json()
    throw new Error(error.message || "Registration failed")
  }

  return response.json()
}

// Usage in component
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  setIsLoading(true)

  try {
    const result = await registerUser(formData)
    setSuccess(true)
  } catch (error) {
    setErrors({
      submit: error instanceof Error ? error.message : "An error occurred"
    })
  } finally {
    setIsLoading(false)
  }
}
```

### Error Handling

```typescript
// ✅ CORRECT: Comprehensive error handling
async function apiCall() {
  try {
    const response = await fetch("/api/endpoint")

    if (!response.ok) {
      // HTTP error
      throw new Error(`HTTP ${response.status}: ${response.statusText}`)
    }

    const data = await response.json()
    return data

  } catch (error) {
    if (error instanceof TypeError) {
      // Network error
      console.error("Network error:", error)
      throw new Error("Unable to connect. Check your internet connection.")
    }

    if (error instanceof SyntaxError) {
      // JSON parse error
      console.error("Invalid response format:", error)
      throw new Error("Server returned invalid data.")
    }

    // Re-throw other errors
    throw error
  }
}
```

---

## 🧪 TESTING GUIDELINES

### Unit Testing (To Be Implemented)

```typescript
// Recommended: Vitest + React Testing Library
import { render, screen, fireEvent } from "@testing-library/react"
import { Button } from "./button"

describe("Button", () => {
  it("renders with correct text", () => {
    render(<Button>Click me</Button>)
    expect(screen.getByText("Click me")).toBeInTheDocument()
  })

  it("calls onClick handler", () => {
    const handleClick = vi.fn()
    render(<Button onClick={handleClick}>Click</Button>)

    fireEvent.click(screen.getByText("Click"))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it("is disabled when disabled prop is true", () => {
    render(<Button disabled>Click</Button>)
    expect(screen.getByRole("button")).toBeDisabled()
  })
})
```

### E2E Testing (To Be Implemented)

```typescript
// Recommended: Playwright
import { test, expect } from "@playwright/test"

test("user can register successfully", async ({ page }) => {
  await page.goto("/dang-ky")

  // Fill form
  await page.fill('[name="first_name"]', "John")
  await page.fill('[name="last_name"]', "Doe")
  await page.fill('[name="email"]', "john@example.com")
  await page.fill('[name="phone_number"]', "0912345678")

  // Submit
  await page.click('button[type="submit"]')

  // Verify success
  await expect(page.locator('text=Thành công')).toBeVisible()
})
```

---

## 🔀 GIT WORKFLOW

### Branch Strategy

```
main              # Production branch
├── dev           # Development branch (current)
├── feature/*     # Feature branches
├── fix/*         # Bug fix branches
└── hotfix/*      # Critical production fixes
```

### Commit Message Convention

```bash
# Format: <type>(<scope>): <subject>

# Types:
feat: Add new feature
fix: Bug fix
docs: Documentation only
style: Code style (formatting, missing semicolons)
refactor: Code refactoring
perf: Performance improvement
test: Add tests
chore: Build process, dependencies

# Examples:
feat(pricing): add quarterly billing option
fix(navbar): resolve mobile menu z-index issue
docs(readme): update installation instructions
refactor(i18n): extract translation keys to separate file
perf(images): implement lazy loading for features section
```

### Git Hooks (Recommended)

```json
// package.json
{
  "scripts": {
    "prepare": "husky install",
    "lint": "eslint . --ext .ts,.tsx",
    "format": "prettier --write \"**/*.{ts,tsx,json,md}\""
  },
  "devDependencies": {
    "husky": "^8.0.0",
    "lint-staged": "^15.0.0"
  },
  "lint-staged": {
    "*.{ts,tsx}": [
      "eslint --fix",
      "prettier --write"
    ]
  }
}
```

---

## 🚀 DEPLOYMENT

### Environment Variables

```bash
# .env.local (DO NOT COMMIT)
NEXT_PUBLIC_API_URL=https://api-ai-code.dsp.one
NEXT_PUBLIC_ADMIN_URL=https://admin.dsp.one
NEXT_PUBLIC_CHATBOT_ID=691555d6b81f95d483e89594
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
NEXT_PUBLIC_GA_TRACKING_ID=G-XXXXXXXXXX

# Vercel Analytics
NEXT_PUBLIC_VERCEL_ANALYTICS_ID=<auto-generated>
```

### Build Process

```bash
# Development
npm run dev

# Production build
npm run build
npm run start

# Type checking
npx tsc --noEmit

# Linting
npm run lint
```

### Vercel Deployment

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy to preview
vercel

# Deploy to production
vercel --prod
```

**Build Settings:**
- Framework: Next.js
- Root Directory: `./`
- Build Command: `next build`
- Output Directory: `.next`
- Node Version: 18.x

---

## 🐛 TROUBLESHOOTING

### Common Issues

#### 1. Hydration Mismatch
```
Error: Text content does not match server-rendered HTML
```

**Cause:** Client/server mismatch (localStorage, Date.now(), Math.random())

**Solution:**
```typescript
// ❌ INCORRECT
export function Component() {
  const timestamp = Date.now() // Different on server/client
  return <div>{timestamp}</div>
}

// ✅ CORRECT
export function Component() {
  const [timestamp, setTimestamp] = useState<number | null>(null)

  useEffect(() => {
    setTimestamp(Date.now())
  }, [])

  if (timestamp === null) return null // Or skeleton

  return <div>{timestamp}</div>
}
```

#### 2. "use client" Missing
```
Error: Attempted to call useState() in a Server Component
```

**Solution:** Add `"use client"` directive at top of file

```typescript
"use client"

import { useState } from "react"
// ...
```

#### 3. Image Optimization Error
```
Error: Invalid src prop on `next/image`
```

**Solution:** Add domain to `next.config.ts`
```typescript
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tienphongcds.com",
      },
      {
        protocol: "https",
        hostname: "media.newweb.vn",
      },
    ],
  },
}
```

#### 4. Tailwind Classes Not Working
```
Classes not applying in production
```

**Solution:** Check `tailwind.config.ts` content paths
```typescript
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
}
```

---

## 📚 COMMON PATTERNS

### Form Validation Pattern

```typescript
"use client"

import { useState, type FormEvent } from "react"

interface FormData {
  email: string
  phone: string
}

interface FormErrors {
  email?: string
  phone?: string
  submit?: string
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    phone: "",
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isLoading, setIsLoading] = useState(false)

  const validateEmail = (email: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  const validatePhone = (phone: string): boolean => {
    return /^0[0-9]{9}$/.test(phone)
  }

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!validateEmail(formData.email)) {
      newErrors.email = "Invalid email address"
    }

    if (!validatePhone(formData.phone)) {
      newErrors.phone = "Invalid phone number (format: 0xxxxxxxxx)"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsLoading(true)
    setErrors({})

    try {
      await submitForm(formData)
      // Success handling
    } catch (error) {
      setErrors({
        submit: error instanceof Error ? error.message : "An error occurred"
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
        />
        {errors.email && (
          <p id="email-error" role="alert" className="text-red-600">
            {errors.email}
          </p>
        )}
      </div>

      <button type="submit" disabled={isLoading}>
        {isLoading ? "Submitting..." : "Submit"}
      </button>

      {errors.submit && (
        <p role="alert" className="text-red-600">
          {errors.submit}
        </p>
      )}
    </form>
  )
}
```

### Modal Pattern

```typescript
"use client"

import { useEffect, useRef, type ReactNode } from "react"
import { X } from "lucide-react"

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  children: ReactNode
}

export function Modal({ isOpen, onClose, title, children }: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!isOpen) return

    // Focus management
    const previouslyFocused = document.activeElement as HTMLElement
    modalRef.current?.focus()

    // Prevent body scroll
    document.body.style.overflow = "hidden"

    // Escape key handler
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    document.addEventListener("keydown", handleEscape)

    return () => {
      previouslyFocused?.focus()
      document.body.style.overflow = ""
      document.removeEventListener("keydown", handleEscape)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={onClose}
    >
      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        className="relative max-w-lg w-full bg-white rounded-2xl p-6"
        onClick={(e) => e.stopPropagation()}
        tabIndex={-1}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg hover:bg-gray-100"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <h2 id="modal-title" className="text-xl font-bold mb-4">
          {title}
        </h2>

        {children}
      </div>
    </div>
  )
}
```

### Accordion Pattern

```typescript
"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface AccordionItem {
  id: string
  question: string
  answer: string
}

interface AccordionProps {
  items: AccordionItem[]
}

export function Accordion({ items }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null)

  return (
    <div className="space-y-2">
      {items.map((item) => {
        const isOpen = openId === item.id

        return (
          <div key={item.id} className="border border-gray-200 rounded-xl overflow-hidden">
            <button
              onClick={() => setOpenId(isOpen ? null : item.id)}
              className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
              aria-expanded={isOpen}
              aria-controls={`accordion-${item.id}`}
            >
              <span className="font-semibold">{item.question}</span>
              <ChevronDown
                className={cn(
                  "w-5 h-5 transition-transform",
                  isOpen && "rotate-180"
                )}
              />
            </button>

            <div
              id={`accordion-${item.id}`}
              className={cn(
                "overflow-hidden transition-all",
                isOpen ? "max-h-96" : "max-h-0"
              )}
            >
              <p className="p-4 pt-0 text-gray-600">
                {item.answer}
              </p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
```

---

## 📖 ADDITIONAL RESOURCES

### Documentation
- [Next.js 14 Docs](https://nextjs.org/docs)
- [React 19 Docs](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

### Tools
- [Lighthouse](https://developers.google.com/web/tools/lighthouse) - Performance auditing
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/) - Color contrast
- [WAVE](https://wave.webaim.org/) - Accessibility evaluation

### Community
- Project Issues: [GitHub Issues](https://github.com/anthropics/claude-code/issues)
- Next.js Discord: [discord.gg/nextjs](https://discord.gg/nextjs)

---

## 📝 CHANGE LOG

### Version 1.0.0 (2026-01-16)
- Initial CLAUDE.md documentation
- Comprehensive project structure
- Code standards and best practices
- Component guidelines
- Performance optimization guide
- Accessibility standards
- Common patterns and examples

---

## 🤝 CONTRIBUTING

When contributing to this project:

1. **Read this guide thoroughly**
2. Follow all coding standards
3. Maintain accessibility (WCAG 2.1 AA)
4. Write semantic HTML
5. Test on multiple devices
6. Update documentation
7. Add proper ARIA labels
8. Ensure TypeScript types
9. Follow commit message convention
10. Test with keyboard navigation

---

**Maintained by Tiên Phong CDS Development Team**
For questions or suggestions, please open an issue or contact the development team.
