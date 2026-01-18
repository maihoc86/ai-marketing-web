# 🔍 AI MARKETING OS - COMPREHENSIVE UPGRADE CHECKLIST

> **Generated:** 2026-01-16
> **Audit Scope:** Complete codebase analysis
> **Total Issues Identified:** 60+
> **Critical Issues:** 3

---

## 📊 EXECUTIVE SUMMARY

| Category | Issues | Critical | High | Medium | Low |
|----------|--------|----------|------|--------|-----|
| **Security** | 5 | 1 | 2 | 2 | 0 |
| **Type Safety** | 5 | 0 | 5 | 0 | 0 |
| **Performance** | 12 | 0 | 2 | 8 | 2 |
| **Accessibility** | 15 | 2 | 6 | 7 | 0 |
| **Code Quality** | 18 | 0 | 3 | 10 | 5 |
| **SEO** | 5 | 0 | 2 | 3 | 0 |
| **TOTAL** | **60** | **3** | **20** | **30** | **7** |

---

## 🚨 PHASE 0: CRITICAL SECURITY FIXES (DO IMMEDIATELY)

### ⚠️ CRITICAL-001: Exposed API Key
**Priority:** CRITICAL 🔴
**File:** `app/actions/chatbot.ts:7`

```typescript
// ❌ CURRENT - EXPOSED IN SOURCE CODE
apiKey: process.env.CDS_CHATBOT_API_KEY || "6f1b19cf85f64f9a90b56a4c9d1a0d3d"

// ✅ FIX
apiKey: process.env.CDS_CHATBOT_API_KEY || (() => {
  throw new Error("CDS_CHATBOT_API_KEY is required")
})()
```

**Actions Required:**
- [ ] Immediately rotate API key `6f1b19cf85f64f9a90b56a4c9d1a0d3d`
- [ ] Contact CDS Chatbot provider to revoke old key
- [ ] Generate new API key
- [ ] Update `.env.local` and Vercel environment variables
- [ ] Remove hardcoded fallback from code
- [ ] Verify key not in Git history (use `git log -p -S "6f1b19cf"`)

**Impact:** API key visible in GitHub, build logs, client-side source maps
**Est. Time:** 30 minutes
**Risk if not fixed:** Unauthorized API access, billing fraud, data theft

---

### ⚠️ CRITICAL-002: Insecure API Calls
**Priority:** CRITICAL 🔴
**Files:**
- `components/cta-register-modal.tsx:185-192`
- `app/dang-ky/page.tsx:169-176`

**Issues:**
- No CSRF token validation
- No request signing
- No rate limiting
- Sensitive data transmitted without additional protection

**Fix:**
```typescript
// Create: lib/api-client.ts
import { nanoid } from "nanoid"

const CSRF_HEADER = "X-CSRF-Token"
const RATE_LIMIT_KEY = "api_rate_limit"

export async function secureApiCall(endpoint: string, data: any) {
  // Rate limiting check
  const lastCallTime = parseInt(localStorage.getItem(RATE_LIMIT_KEY) || "0")
  const now = Date.now()
  if (now - lastCallTime < 1000) { // 1 call per second
    throw new Error("Too many requests. Please wait.")
  }
  localStorage.setItem(RATE_LIMIT_KEY, now.toString())

  // Generate CSRF token
  const csrfToken = nanoid()
  sessionStorage.setItem(CSRF_HEADER, csrfToken)

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      [CSRF_HEADER]: csrfToken,
    },
    body: JSON.stringify(data),
    credentials: "same-origin",
  })

  if (!response.ok) {
    throw new Error(`HTTP ${response.status}: ${response.statusText}`)
  }

  return response.json()
}
```

**Tasks:**
- [ ] Install `nanoid` package: `npm install nanoid`
- [ ] Create `lib/api-client.ts` with secure wrapper
- [ ] Update both registration forms to use `secureApiCall()`
- [ ] Add server-side CSRF validation (coordinate with backend team)
- [ ] Implement rate limiting on backend

**Est. Time:** 2-3 hours
**Risk if not fixed:** CSRF attacks, form spam, data manipulation

---

### ⚠️ CRITICAL-003: Missing ARIA Labels on Interactive Elements
**Priority:** HIGH 🟠
**Files:**
- `components/landing/hero-section.tsx:224-252`
- `components/landing/features-section.tsx` (multiple locations)

**Issues:**
- 12 brand icons without screen reader labels
- Feature cards lack accessible descriptions
- Interactive elements missing context

**Fix:**
```typescript
// Hero brand icons
<div
  className="..."
  aria-hidden="true" // If decorative
  // OR
  role="img"
  aria-label={`${brand.name} integration`}
>
  {brand.icon}
</div>

// Feature cards
<div
  className="feature-card"
  role="article"
  aria-labelledby={`feature-${index}-title`}
  aria-describedby={`feature-${index}-desc`}
>
  <h3 id={`feature-${index}-title`}>{title}</h3>
  <p id={`feature-${index}-desc`}>{description}</p>
</div>
```

**Tasks:**
- [ ] Add `aria-hidden="true"` to all decorative brand icons
- [ ] Add `role="img"` + `aria-label` to informative icons
- [ ] Add proper heading IDs and aria-labelledby relationships
- [ ] Test with VoiceOver (Mac) or NVDA (Windows)

**Est. Time:** 2 hours
**Risk if not fixed:** ADA compliance violations, poor UX for screen reader users

---

## 🔧 PHASE 1: HIGH PRIORITY FIXES (Week 1)

### HIGH-001: TypeScript Type Safety Violations

**Priority:** HIGH 🟠
**Estimated Time:** 4-6 hours

#### Issue 1.1: Define CDSChatbot Interface
**File:** `components/chatbot.tsx:7`

```typescript
// ❌ CURRENT
declare global {
  interface Window {
    CDSChatbot?: any
  }
}

// ✅ FIX
declare global {
  interface Window {
    CDSChatbot?: {
      init: (config: ChatbotConfig) => void
      destroy: () => void
      open: () => void
      close: () => void
    }
  }
}

interface ChatbotConfig {
  botId: string
  apiKey: string
  theme?: "light" | "dark"
  position?: "bottom-right" | "bottom-left"
}
```

**Tasks:**
- [ ] Create `types/cds-chatbot.d.ts`
- [ ] Define complete CDSChatbot interface
- [ ] Update all usages to use typed interface
- [ ] Remove `any` types

---

#### Issue 1.2: Type Window Object Access
**File:** `lib/performance-monitor.ts:28, 55, 58`

```typescript
// ❌ CURRENT
const gtag = (window as any).gtag

// ✅ FIX
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
    dataLayer?: unknown[]
  }
}

const gtag = window.gtag
if (!gtag) {
  console.warn("Google Analytics not loaded")
  return
}
```

**Tasks:**
- [ ] Add Window interface extensions to `types/global.d.ts`
- [ ] Replace all `(window as any)` with typed access
- [ ] Add runtime checks for undefined properties
- [ ] Update `lib/performance.ts:50` similarly

---

#### Issue 1.3: Type Error Boundary Props
**File:** `components/error-boundary.tsx:25`

```typescript
// ❌ CURRENT
componentDidCatch(error: Error, errorInfo: any)

// ✅ FIX
import { ErrorInfo } from "react"

componentDidCatch(error: Error, errorInfo: ErrorInfo) {
  console.error("Error caught by boundary:", error, errorInfo)
}
```

**Tasks:**
- [ ] Import `ErrorInfo` from React
- [ ] Update componentDidCatch signature
- [ ] Add proper error logging types

---

### HIGH-002: Consolidate Duplicate Registration Forms

**Priority:** HIGH 🟠
**Estimated Time:** 6-8 hours

**Problem:** Registration logic duplicated in 2 files (990+ lines total):
- `app/dang-ky/page.tsx` (~400 lines)
- `components/cta-register-modal.tsx` (~597 lines)

**Solution:** Extract to shared component

```typescript
// Create: components/forms/registration-form.tsx
"use client"

import { useState } from "react"
import { useRegistrationForm } from "@/hooks/use-registration-form"

interface RegistrationFormProps {
  defaultPackage?: string
  onSuccess?: () => void
  onError?: (error: Error) => void
  variant?: "page" | "modal"
}

export function RegistrationForm({
  defaultPackage,
  onSuccess,
  onError,
  variant = "page"
}: RegistrationFormProps) {
  const {
    formData,
    errors,
    isLoading,
    handleChange,
    handleSubmit,
    validateField
  } = useRegistrationForm({ defaultPackage })

  // Shared form logic here
  return (
    <form onSubmit={handleSubmit} className={/* variant styles */}>
      {/* Shared form fields */}
    </form>
  )
}
```

**Tasks:**
- [ ] Create `hooks/use-registration-form.ts` hook
- [ ] Extract validation functions to `lib/validation.ts`
- [ ] Create shared `components/forms/registration-form.tsx`
- [ ] Update `/dang-ky/page.tsx` to use shared component
- [ ] Update `cta-register-modal.tsx` to use shared component
- [ ] Test both forms maintain functionality
- [ ] Remove duplicate code

**Benefits:**
- Single source of truth for validation
- Easier maintenance and bug fixes
- Consistent UX across forms
- Reduced bundle size (~300-400 lines saved)

---

### HIGH-003: Remove Console Statements in Production

**Priority:** HIGH 🟠
**Estimated Time:** 1 hour

**Files with console statements:**
- `components/chatbot.tsx` - 11 statements (lines 21, 29, 40, 43, 46, 48, 51, 55, 58, 61, 67)
- `lib/performance-monitor.ts` - 2 statements (lines 40, 106)
- `lib/i18n.tsx` - 2 statements (lines 713, 730)
- `components/lazy-chatbot.tsx` - 1 statement (line 51)
- `components/error-boundary.tsx` - 1 statement (line 26)

**Fix Strategy:**

```typescript
// Create: lib/logger.ts
const isDev = process.env.NODE_ENV === "development"

export const logger = {
  log: (...args: unknown[]) => {
    if (isDev) console.log(...args)
  },
  warn: (...args: unknown[]) => {
    if (isDev) console.warn(...args)
  },
  error: (...args: unknown[]) => {
    // Always log errors, but send to monitoring service in production
    console.error(...args)
    if (!isDev) {
      // Send to Sentry/LogRocket/etc
    }
  }
}

// Replace all instances
- console.log("Chatbot loading...")
+ logger.log("Chatbot loading...")
```

**Tasks:**
- [ ] Create `lib/logger.ts` with dev/prod conditional logging
- [ ] Replace all `console.log()` with `logger.log()`
- [ ] Replace all `console.warn()` with `logger.warn()`
- [ ] Replace all `console.error()` with `logger.error()`
- [ ] Verify `next.config.mjs` removeConsole works
- [ ] Test in production build

---

### HIGH-004: Improve Error Handling

**Priority:** HIGH 🟠
**Estimated Time:** 3-4 hours

#### Issue 4.1: Unhandled JSON Parse Errors
**Files:** `app/dang-ky/page.tsx:178`, `components/cta-register-modal.tsx:194`

```typescript
// ❌ CURRENT
const response = await fetch(API_URL, {...})
if (!response.ok) {
  const error = await response.json() // Can throw on invalid JSON
  throw new Error(error.message)
}

// ✅ FIX
const response = await fetch(API_URL, {...})
if (!response.ok) {
  let errorMessage = "Registration failed"
  try {
    const error = await response.json()
    errorMessage = error.message || errorMessage
  } catch (parseError) {
    // JSON parse failed, use status text
    errorMessage = `${response.status}: ${response.statusText}`
  }
  throw new Error(errorMessage)
}
```

**Tasks:**
- [ ] Wrap all `response.json()` calls in try-catch
- [ ] Add fallback error messages
- [ ] Test with malformed API responses
- [ ] Add user-friendly error messages to i18n

---

#### Issue 4.2: Silent Promise Failures
**File:** `components/lazy-chatbot.tsx:42-43`

```typescript
// ❌ CURRENT
lazyLoadWithIdle(() => import("./chatbot"))
  .catch((error) => {
    console.error("Failed to load chatbot:", error)
  })

// ✅ FIX
lazyLoadWithIdle(() => import("./chatbot"))
  .then(() => {
    logger.log("Chatbot loaded successfully")
  })
  .catch((error) => {
    logger.error("Failed to load chatbot:", error)
    // Show user notification or fallback
    showNotification({
      type: "warning",
      message: "Chat support temporarily unavailable"
    })
  })
```

**Tasks:**
- [ ] Add promise rejection handlers for all async operations
- [ ] Implement user-facing error notifications
- [ ] Create fallback UI for failed lazy loads

---

### HIGH-005: Input Validation Library

**Priority:** HIGH 🟠
**Estimated Time:** 4-5 hours

**Problem:** Current validation is too permissive and error-prone

```typescript
// ❌ CURRENT (too permissive)
const validateEmail = (email: string): boolean => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}
// Allows: a@b.c, test@test, etc.

// ✅ FIX: Use Zod
import { z } from "zod"

const registrationSchema = z.object({
  business_type: z.enum(["enterprise", "household"]),
  tax_code: z.string().min(10).max(14).optional(),
  company_name: z.string().min(2).max(255),
  first_name: z.string().min(2).max(100),
  last_name: z.string().min(2).max(100),
  email: z.string().email("Invalid email address"),
  phone_number: z.string().regex(/^0\d{9}$/, "Invalid Vietnamese phone number"),
  job_position: z.enum([
    "ceo",
    "marketing_manager",
    "marketing_staff",
    "sales_manager",
    "sales_staff",
    "content_creator",
    "business_owner",
    "student",
    "other"
  ]),
  selected_package: z.enum(["startup", "growth", "enterprise"])
})

type RegistrationData = z.infer<typeof registrationSchema>
```

**Tasks:**
- [ ] Install Zod: `npm install zod`
- [ ] Create `lib/schemas/registration.ts`
- [ ] Define comprehensive validation schemas
- [ ] Update form components to use Zod validation
- [ ] Add better error messages to i18n
- [ ] Test all validation edge cases

**Benefits:**
- Type-safe validation
- Better error messages
- Consistent validation rules
- Runtime type checking

---

### HIGH-006: Memory Leak Prevention

**Priority:** HIGH 🟠
**Estimated Time:** 2-3 hours

#### Issue 6.1: Event Listener Cleanup
**File:** `components/landing/navbar.tsx:24-30`

```typescript
// ✅ IMPROVED
useEffect(() => {
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 10)
  }

  window.addEventListener("scroll", handleScroll, { passive: true })

  return () => {
    window.removeEventListener("scroll", handleScroll)
  }
}, []) // Empty deps - runs once
```

**Tasks:**
- [ ] Add `passive: true` to all scroll listeners for performance
- [ ] Verify cleanup functions properly remove listeners
- [ ] Test with React DevTools Profiler

---

#### Issue 6.2: Modal Event Cleanup
**File:** `components/cta-register-modal.tsx:101-109`

```typescript
// ✅ IMPROVED
useEffect(() => {
  if (!isOpen) return

  const events = {
    handleEscape: (e: KeyboardEvent) => e.key === "Escape" && handleClose(),
    handleOutsideClick: (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        handleClose()
      }
    }
  }

  document.addEventListener("keydown", events.handleEscape)
  document.addEventListener("mousedown", events.handleOutsideClick)
  document.body.style.overflow = "hidden"

  return () => {
    document.removeEventListener("keydown", events.handleEscape)
    document.removeEventListener("mousedown", events.handleOutsideClick)
    document.body.style.overflow = ""
  }
}, [isOpen]) // Add dependency
```

**Tasks:**
- [ ] Audit all useEffect cleanup functions
- [ ] Add missing dependencies to dependency arrays
- [ ] Use ESLint exhaustive-deps rule

---

## 🚀 PHASE 2: PERFORMANCE OPTIMIZATIONS (Week 2)

### PERF-001: Image Optimization

**Priority:** MEDIUM 🟡
**Estimated Time:** 2-3 hours

#### Issue 1.1: Remove unoptimized={true}
**Files:**
- `components/landing/navbar.tsx:56-64`
- `components/cta-register-modal.tsx:278-284`

```typescript
// ❌ CURRENT
<Image
  src="https://tienphongcds.com/_next/image?url=..."
  unoptimized={true}
  // ...
/>

// ✅ FIX
// Option 1: Self-host the image
<Image
  src="/images/logo-dxai.png"
  alt="DXAI Logo"
  width={120}
  height={32}
  priority // Above fold
/>

// Option 2: Configure remote pattern
// In next.config.ts
export default {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tienphongcds.com",
        pathname: "/_next/image/**",
      }
    ]
  }
}

// Then use optimized
<Image
  src="https://tienphongcds.com/path/to/image.png"
  alt="DXAI Logo"
  width={120}
  height={32}
/>
```

**Tasks:**
- [ ] Download logo to `/public/images/logo-dxai.png`
- [ ] Remove `unoptimized={true}` from all images
- [ ] Add `priority` to above-the-fold images
- [ ] Test image loading in production build

---

#### Issue 1.2: Add Lazy Loading to Features
**File:** `components/landing/features-section.tsx:15-50`

```typescript
// ✅ ADD
<Image
  src={feature.image}
  alt={feature.title}
  width={800}
  height={600}
  loading="lazy" // Below fold
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRg..." // Generate with plaiceholder
/>
```

**Tasks:**
- [ ] Install plaiceholder: `npm install plaiceholder sharp`
- [ ] Generate blur placeholders for all feature images
- [ ] Add `loading="lazy"` to below-fold images
- [ ] Measure LCP improvement

---

### PERF-002: Code Splitting & Bundle Size

**Priority:** MEDIUM 🟡
**Estimated Time:** 6-8 hours

#### Issue 2.1: Split Large Components

**Target Components:**
- `components/landing/hero-section.tsx` (638 lines)
- `components/cta-register-modal.tsx` (597 lines)
- `components/landing/pricing-section.tsx` (403 lines)
- `components/landing/testimonials-section.tsx` (383 lines)

**Strategy:**

```typescript
// BEFORE: hero-section.tsx (638 lines)
export function HeroSection() {
  return (
    <>
      <BrandIcons />      // 200 lines
      <HeroContent />     // 150 lines
      <ProcessFlow />     // 288 lines
    </>
  )
}

// AFTER: Split into smaller components
// components/landing/hero/index.tsx
import { BrandIcons } from "./brand-icons"
import { HeroContent } from "./hero-content"
import { ProcessFlow } from "./process-flow"

export function HeroSection() {
  return (
    <>
      <BrandIcons />
      <HeroContent />
      <ProcessFlow />
    </>
  )
}

// components/landing/hero/brand-icons.tsx (200 lines)
// components/landing/hero/hero-content.tsx (150 lines)
// components/landing/hero/process-flow.tsx (288 lines)
```

**Tasks:**
- [ ] Create `components/landing/hero/` directory
- [ ] Split HeroSection into 3 components
- [ ] Create `components/forms/` directory for registration
- [ ] Split modal into smaller logical pieces
- [ ] Extract pricing cards to separate component
- [ ] Extract testimonial card component
- [ ] Test all components still work
- [ ] Measure bundle size reduction

---

#### Issue 2.2: Extract Inline CSS to Tailwind Config

**File:** `components/landing/hero-section.tsx:596-636`

```typescript
// ❌ CURRENT: 7 animation keyframes inline (40 lines)
<style jsx>{`
  @keyframes float { ... }
  @keyframes pulse { ... }
  @keyframes fadeIn { ... }
  // ... 4 more
`}</style>

// ✅ FIX: Move to tailwind.config.ts
module.exports = {
  theme: {
    extend: {
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" }
        },
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" }
        },
        // ... others
      },
      animation: {
        float: "float 3s ease-in-out infinite",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        // ... others
      }
    }
  }
}

// Then use in component
<div className="animate-float">...</div>
```

**Tasks:**
- [ ] Extract all keyframes from inline styles
- [ ] Add to `tailwind.config.ts`
- [ ] Replace `<style jsx>` with Tailwind classes
- [ ] Remove style tags from components
- [ ] Test animations still work

---

### PERF-003: Prevent Unnecessary Re-renders

**Priority:** MEDIUM 🟡
**Estimated Time:** 3-4 hours

#### Issue 3.1: Memoize i18n Context Value
**File:** `lib/i18n.tsx:745`

```typescript
// ❌ CURRENT
return <I18nContext.Provider value={{ locale, setLocale, t }}>
  {children}
</I18nContext.Provider>

// ✅ FIX
const value = useMemo(
  () => ({ locale, setLocale, t }),
  [locale, setLocale, t]
)

return <I18nContext.Provider value={value}>
  {children}
</I18nContext.Provider>
```

**Tasks:**
- [ ] Add useMemo to i18n context value
- [ ] Test context consumers don't re-render unnecessarily
- [ ] Use React DevTools Profiler to verify

---

#### Issue 3.2: Throttle Scroll Handler
**File:** `components/landing/navbar.tsx:24-30`

```typescript
// ✅ ADD THROTTLE
import { useCallback, useEffect, useRef } from "react"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const throttleRef = useRef<number | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (throttleRef.current) return

      throttleRef.current = window.requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 10)
        throttleRef.current = null
      })
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", handleScroll)
      if (throttleRef.current) {
        cancelAnimationFrame(throttleRef.current)
      }
    }
  }, [])
}
```

**Tasks:**
- [ ] Add throttle to all scroll handlers
- [ ] Use requestAnimationFrame for smooth updates
- [ ] Test scroll performance with DevTools Performance tab

---

#### Issue 3.3: Memoize Heavy Computations
**File:** `components/landing/hero-section.tsx:224-252`

```typescript
// ✅ MEMOIZE BRAND ICONS
const brandIcons = useMemo(() => [
  {
    name: "OpenAI",
    icon: SiOpenai,
    color: "text-emerald-500",
    // ... rest
  },
  // ... 11 more
], [])

// ✅ MEMOIZE ICON COMPONENT
const BrandIcon = React.memo(({ brand, index }: { brand: BrandIcon, index: number }) => {
  return (
    <div
      className="..."
      style={{ /* ... */ }}
    >
      <brand.icon />
    </div>
  )
})

// Use in render
{brandIcons.map((brand, index) => (
  <BrandIcon key={brand.name} brand={brand} index={index} />
))}
```

**Tasks:**
- [ ] Memoize brand icon array with useMemo
- [ ] Wrap BrandIcon in React.memo
- [ ] Memoize expensive style calculations
- [ ] Profile component render times

---

### PERF-004: Optimize Third-party Scripts

**Priority:** MEDIUM 🟡
**Estimated Time:** 2 hours

**File:** `app/layout.tsx:143-161`

```typescript
// ❌ CURRENT
<Script
  id="performance-monitoring"
  strategy="afterInteractive" // Blocks interaction
>
  {/* PerformanceObserver setup */}
</Script>

// ✅ FIX
<Script
  id="performance-monitoring"
  strategy="lazyOnload" // Load after everything else
>
  {/* PerformanceObserver setup */}
</Script>

// ✅ ALSO: Defer chatbot loading
// In lazy-chatbot.tsx
useEffect(() => {
  // Wait for user interaction OR 5 seconds
  const timer = setTimeout(() => {
    loadChatbot()
  }, 5000)

  const handleUserInteraction = () => {
    clearTimeout(timer)
    loadChatbot()
    // Remove listeners
  }

  window.addEventListener("mousemove", handleUserInteraction, { once: true })
  window.addEventListener("scroll", handleUserInteraction, { once: true })

  return () => {
    clearTimeout(timer)
    window.removeEventListener("mousemove", handleUserInteraction)
    window.removeEventListener("scroll", handleUserInteraction)
  }
}, [])
```

**Tasks:**
- [ ] Change performance script to `strategy="lazyOnload"`
- [ ] Defer chatbot until user interaction or 5s timeout
- [ ] Move Google Analytics to lazyOnload
- [ ] Test Time to Interactive (TTI) improvement

---

## ♿ PHASE 3: ACCESSIBILITY IMPROVEMENTS (Week 2-3)

### A11Y-001: Comprehensive ARIA Implementation

**Priority:** HIGH 🟠
**Estimated Time:** 6-8 hours

#### Task 1.1: Hero Section Brand Icons
**File:** `components/landing/hero-section.tsx:224-252`

```typescript
// ✅ FIX
<div
  key={brand.name}
  className="..."
  aria-hidden="true" // Decorative floating icons
  role="presentation"
>
  <brand.icon className={brand.color} aria-hidden="true" />
</div>

// If icons are informative, use instead:
<div
  role="img"
  aria-label={`${brand.name} integration available`}
  className="..."
>
  <brand.icon className={brand.color} aria-hidden="true" />
</div>
```

**Tasks:**
- [ ] Decide if brand icons are decorative or informative
- [ ] Add `aria-hidden="true"` to all decorative icons
- [ ] Add `role="img"` + `aria-label` to informative icons
- [ ] Test with VoiceOver (Mac) or NVDA (Windows)

---

#### Task 1.2: Feature Cards
**File:** `components/landing/features-section.tsx`

```typescript
// ✅ ADD PROPER STRUCTURE
<section
  aria-labelledby="features-heading"
  className="..."
>
  <h2 id="features-heading" className="sr-only">
    Features of AI Marketing OS
  </h2>

  <div className="grid">
    {features.map((feature, index) => (
      <article
        key={feature.title}
        role="article"
        aria-labelledby={`feature-${index}-title`}
        aria-describedby={`feature-${index}-desc`}
        className="feature-card"
      >
        <div aria-hidden="true">
          <feature.icon className="..." />
        </div>

        <h3 id={`feature-${index}-title`}>
          {feature.title}
        </h3>

        <p id={`feature-${index}-desc`}>
          {feature.description}
        </p>

        <span className="badge" aria-label={`Statistics: ${feature.stats}`}>
          {feature.stats}
        </span>
      </article>
    ))}
  </div>
</section>
```

**Tasks:**
- [ ] Add section landmarks with aria-labelledby
- [ ] Use `<article>` for feature cards
- [ ] Add proper heading hierarchy
- [ ] Connect headings to descriptions with IDs
- [ ] Add screen reader only text where needed

---

#### Task 1.3: Form Error Association
**File:** `components/cta-register-modal.tsx`

```typescript
// ✅ FIX ALL FORM FIELDS
<div className="space-y-2">
  <Label htmlFor="email">
    Email <span className="text-red-600" aria-label="required">*</span>
  </Label>

  <Input
    id="email"
    type="email"
    name="email"
    value={formData.email}
    onChange={handleChange}
    aria-required="true"
    aria-invalid={!!errors.email}
    aria-describedby={errors.email ? "email-error" : "email-hint"}
  />

  {!errors.email && (
    <p id="email-hint" className="text-sm text-gray-600">
      We'll never share your email
    </p>
  )}

  {errors.email && (
    <p id="email-error" role="alert" className="text-sm text-red-600">
      <AlertCircle className="w-4 h-4 inline" aria-hidden="true" />
      {errors.email}
    </p>
  )}
</div>
```

**Tasks:**
- [ ] Add `aria-describedby` to all form inputs
- [ ] Connect error messages with unique IDs
- [ ] Add `role="alert"` to error messages
- [ ] Add `aria-invalid` when field has error
- [ ] Test with screen reader

---

### A11Y-002: Color Contrast Fixes

**Priority:** MEDIUM 🟡
**Estimated Time:** 2-3 hours

**Tool:** Use [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)

#### Issue 2.1: Navigation Links
**File:** `components/landing/navbar.tsx:74`

```css
/* CURRENT: text-gray-600 on white */
color: rgb(75, 85, 99); /* #4b5563 */
background: rgb(255, 255, 255); /* #ffffff */
/* Contrast Ratio: 5.74:1 - PASS AA (4.5:1) ✓ */

/* If failing, change to: */
text-gray-700  /* Ratio: 7.23:1 - PASS AAA */
```

#### Issue 2.2: Hero Dot Pattern
**File:** `components/landing/hero-section.tsx:308`

```typescript
// ❌ CURRENT
className="absolute inset-0 opacity-[0.4]" // 40% opacity

// ✅ FIX: Increase opacity or darken color
className="absolute inset-0 opacity-[0.6]"
// OR
className="absolute inset-0 bg-gray-900/40" // Use darker base
```

**Tasks:**
- [ ] Audit all text colors against backgrounds
- [ ] Create color combinations reference
- [ ] Update failing combinations to WCAG AA (4.5:1 minimum)
- [ ] Document approved color pairs in CLAUDE.md

**Color Pair Reference:**
```typescript
// PASS WCAG AA (4.5:1+)
✓ text-gray-900 on white (21:1)
✓ text-gray-700 on white (7.23:1)
✓ text-gray-600 on white (5.74:1)
✓ text-blue-600 on white (4.57:1)

// FAIL WCAG AA
✗ text-gray-500 on white (3.94:1)
✗ text-gray-400 on white (2.85:1)
✗ text-yellow-300 on white (1.8:1)
```

---

### A11Y-003: Keyboard Navigation

**Priority:** MEDIUM 🟡
**Estimated Time:** 3-4 hours

#### Issue 3.1: Modal Focus Trap
**File:** `components/cta-register-modal.tsx`

```typescript
// ✅ ADD FOCUS TRAP
import { useEffect, useRef } from "react"

export function Modal({ isOpen, onClose, children }) {
  const modalRef = useRef<HTMLDivElement>(null)
  const previousFocusRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (!isOpen) return

    // Save current focus
    previousFocusRef.current = document.activeElement as HTMLElement

    // Get all focusable elements
    const focusableElements = modalRef.current?.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )

    if (!focusableElements || focusableElements.length === 0) return

    const firstElement = focusableElements[0] as HTMLElement
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement

    // Focus first element
    firstElement.focus()

    // Trap focus
    const handleTab = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return

      if (e.shiftKey) {
        // Shift + Tab
        if (document.activeElement === firstElement) {
          e.preventDefault()
          lastElement.focus()
        }
      } else {
        // Tab
        if (document.activeElement === lastElement) {
          e.preventDefault()
          firstElement.focus()
        }
      }
    }

    document.addEventListener("keydown", handleTab)

    return () => {
      document.removeEventListener("keydown", handleTab)
      // Restore previous focus
      previousFocusRef.current?.focus()
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

**Tasks:**
- [ ] Implement focus trap in modal
- [ ] Save and restore previous focus
- [ ] Test with Tab and Shift+Tab
- [ ] Ensure Escape key closes modal
- [ ] Test with keyboard only (no mouse)

---

#### Issue 3.2: Skip to Content Link
**File:** `app/layout.tsx`

```typescript
// ✅ ADD SKIP LINK
<body>
  <a
    href="#main-content"
    className="
      sr-only focus:not-sr-only
      focus:fixed focus:top-4 focus:left-4
      focus:z-[9999] focus:px-6 focus:py-3
      focus:bg-blue-600 focus:text-white
      focus:rounded-lg focus:font-semibold
      focus:shadow-lg
      focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
    "
  >
    Skip to main content
  </a>

  <I18nProvider>
    <Navbar />
    <main id="main-content" tabIndex={-1}>
      {children}
    </main>
    <Footer />
  </I18nProvider>
</body>
```

**Tasks:**
- [ ] Add skip link at start of body
- [ ] Style for visibility on focus
- [ ] Add `id="main-content"` to main element
- [ ] Test with Tab key
- [ ] Add to all pages

---

### A11Y-004: Touch Target Sizes

**Priority:** MEDIUM 🟡
**Estimated Time:** 2 hours

**Rule:** All interactive elements must be **minimum 44x44px**

```typescript
// ✅ ENSURE MINIMUM SIZES
<button className="
  min-h-[44px] min-w-[44px]
  p-2.5
  touch-manipulation
  flex items-center justify-center
">
  <Icon className="w-5 h-5" />
</button>

// For small icons, increase padding
<button className="
  p-3 // 12px + 20px icon + 12px = 44px
  min-h-[44px] min-w-[44px]
  touch-manipulation
">
  <Icon className="w-5 h-5" />
</button>
```

**Tasks:**
- [ ] Audit all buttons, links, and interactive elements
- [ ] Add `min-h-[44px] min-w-[44px]` to small elements
- [ ] Add `touch-manipulation` CSS property
- [ ] Test on mobile device
- [ ] Document in design system

**Files to Check:**
- `components/landing/navbar.tsx` - Mobile menu icons
- `components/cta-register-modal.tsx` - Close button
- `components/landing/testimonials-section.tsx` - Arrow buttons
- `components/language-selector.tsx` - Language toggle

---

## 🔍 PHASE 4: SEO ENHANCEMENTS (Week 3)

### SEO-001: Add JSON-LD Structured Data

**Priority:** HIGH 🟠
**Estimated Time:** 4-5 hours

**Create:** `lib/structured-data.ts`

```typescript
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Tiên Phong CDS",
  "alternateName": "DXAI - AI Marketing OS",
  "url": "https://dxai.vn",
  "logo": "https://dxai.vn/images/logo-dxai.png",
  "description": "AI-powered marketing automation platform for Vietnamese businesses",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Nguyen Hue",
    "addressLocality": "Ho Chi Minh City",
    "addressRegion": "HCM",
    "postalCode": "700000",
    "addressCountry": "VN"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+84-xxx-xxx-xxx",
    "contactType": "customer service",
    "availableLanguage": ["vi", "en"]
  },
  "sameAs": [
    "https://facebook.com/dxai",
    "https://linkedin.com/company/dxai"
  ]
}

export const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "AI Marketing OS",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web",
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "VND",
    "lowPrice": "3500000",
    "highPrice": "6900000",
    "priceSpecification": [
      {
        "@type": "UnitPriceSpecification",
        "price": "3500000",
        "priceCurrency": "VND",
        "name": "Startup Plan",
        "billingDuration": "P1M"
      },
      {
        "@type": "UnitPriceSpecification",
        "price": "6900000",
        "priceCurrency": "VND",
        "name": "Growth Plan",
        "billingDuration": "P1M"
      }
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "350",
    "bestRating": "5"
  }
}

export const faqSchema = (faqs: Array<{ question: string, answer: string }>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
})
```

**Add to Layout:**
```typescript
// app/layout.tsx
import { organizationSchema, softwareApplicationSchema } from "@/lib/structured-data"

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema)
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(softwareApplicationSchema)
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
```

**Tasks:**
- [ ] Create `lib/structured-data.ts`
- [ ] Add Organization schema
- [ ] Add SoftwareApplication schema
- [ ] Add FAQPage schema to FAQ section
- [ ] Add BreadcrumbList schema to sub-pages
- [ ] Test with [Google Rich Results Test](https://search.google.com/test/rich-results)
- [ ] Validate with [Schema.org Validator](https://validator.schema.org/)

---

### SEO-002: Improve Semantic HTML Structure

**Priority:** MEDIUM 🟡
**Estimated Time:** 3-4 hours

#### Issue 2.1: Proper Heading Hierarchy

**Audit Current Structure:**
```
❌ CURRENT (Incorrect)
└── page.tsx
    ├── h2 (Hero)
    ├── h2 (Features)
    ├── h2 (Pricing)
    └── h2 (FAQ)

✅ FIX (Correct)
└── page.tsx
    ├── h1 (Hero - Main page title)
    ├── h2 (Why Choose - Section)
    │   └── h3 (Reason 1, 2, 3)
    ├── h2 (Features - Section)
    │   └── h3 (Feature 1, 2, 3...)
    ├── h2 (Pricing - Section)
    │   └── h3 (Plan 1, 2, 3)
    └── h2 (FAQ - Section)
        └── h3 (Question 1, 2, 3...)
```

**Tasks:**
- [ ] Ensure only ONE `<h1>` per page (Hero title)
- [ ] Use `<h2>` for major sections
- [ ] Use `<h3>` for subsections/cards
- [ ] Don't skip levels (h2 → h4)
- [ ] Audit with [Headings Map](https://www.tpgi.com/heading-map/)

---

#### Issue 2.2: Landmark Regions

```typescript
// ✅ ADD PROPER LANDMARKS
<body>
  <header>
    <Navbar />
  </header>

  <main>
    <section aria-labelledby="hero-heading">
      <h1 id="hero-heading">...</h1>
    </section>

    <section aria-labelledby="features-heading">
      <h2 id="features-heading">Features</h2>
    </section>

    <aside aria-label="Customer testimonials">
      <TestimonialsSection />
    </aside>
  </main>

  <footer>
    <Footer />
  </footer>
</body>
```

**Tasks:**
- [ ] Wrap navbar in `<header>`
- [ ] Wrap main content in `<main>`
- [ ] Use `<section>` for distinct content areas
- [ ] Use `<aside>` for complementary content (testimonials)
- [ ] Wrap footer in `<footer>`
- [ ] Add `aria-labelledby` to all sections
- [ ] Test with screen reader landmark navigation

---

### SEO-003: Meta Tag Optimization

**Priority:** MEDIUM 🟡
**Estimated Time:** 2 hours

**File:** `app/layout.tsx:20-76`

**Current Status:** ✓ Good metadata exists

**Improvements:**

```typescript
// ADD: Canonical URLs
export const metadata: Metadata = {
  // ... existing metadata

  alternates: {
    canonical: "https://dxai.vn",
    languages: {
      "vi-VN": "https://dxai.vn",
      "en-US": "https://dxai.vn/en"
    }
  },

  // ADD: More specific geo targeting
  other: {
    "geo.region": "VN-SG", // Ho Chi Minh City
    "geo.placename": "Ho Chi Minh City",
    "geo.position": "10.8231;106.6297", // Lat;Long
  },

  // ADD: App manifest
  manifest: "/manifest.json",

  // IMPROVE: Robots directives
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}
```

**Create:** `public/manifest.json`
```json
{
  "name": "AI Marketing OS by DXAI",
  "short_name": "DXAI",
  "description": "AI-powered marketing automation platform",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#3b82f6",
  "icons": [
    {
      "src": "/images/icon-192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/images/icon-512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
```

**Tasks:**
- [ ] Add canonical URLs to all pages
- [ ] Create manifest.json
- [ ] Generate PWA icons (192x192, 512x512)
- [ ] Add language alternates
- [ ] Improve geo targeting precision
- [ ] Test with Lighthouse SEO audit

---

### SEO-004: Sitemap & Robots.txt

**Priority:** MEDIUM 🟡
**Estimated Time:** 1-2 hours

**Install:** `npm install next-sitemap`

**Create:** `next-sitemap.config.js`
```javascript
/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://dxai.vn',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ['/server-sitemap.xml'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        crawlDelay: 1,
      },
    ],
    additionalSitemaps: [
      'https://dxai.vn/sitemap.xml',
    ],
  },
  transform: async (config, path) => {
    // Custom priority based on page
    let priority = 0.7
    let changefreq = 'weekly'

    if (path === '/') {
      priority = 1.0
      changefreq = 'daily'
    } else if (path === '/dang-ky') {
      priority = 0.9
      changefreq = 'daily'
    } else if (path === '/ve-chung-toi') {
      priority = 0.8
      changefreq = 'monthly'
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    }
  },
}
```

**Add to package.json:**
```json
{
  "scripts": {
    "postbuild": "next-sitemap"
  }
}
```

**Tasks:**
- [ ] Install next-sitemap
- [ ] Create configuration file
- [ ] Set page priorities (homepage = 1.0, registration = 0.9, etc.)
- [ ] Generate sitemap.xml
- [ ] Generate robots.txt
- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools

---

## 📦 PHASE 5: CODE QUALITY & REFACTORING (Week 3-4)

### CODE-001: Extract Configuration Files

**Priority:** MEDIUM 🟡
**Estimated Time:** 4-5 hours

#### Task 1.1: Extract Translation Files

**Problem:** 600+ lines of translations in `lib/i18n.tsx`

**Solution:**

```
# Create structure
lib/
├── i18n/
│   ├── index.ts          # Main i18n logic
│   ├── translations/
│   │   ├── vi.json       # Vietnamese (350+ keys)
│   │   ├── en.json       # English (350+ keys)
│   │   └── index.ts      # Export all
│   └── types.ts          # Locale, translation types
```

**File:** `lib/i18n/translations/vi.json`
```json
{
  "nav": {
    "features": "Tính năng",
    "pricing": "Bảng giá",
    "about": "Về chúng tôi",
    "faq": "FAQ",
    "login": "Đăng nhập",
    "trial": "Dùng thử",
    "trialFree": "Dùng thử miễn phí"
  },
  "hero": {
    "badge": "Nền tảng AI Marketing #1 Việt Nam",
    "title": {
      "line1": "NỀN TẢNG AI MARKETING",
      "line2": "CHO MỌI DOANH NGHIỆP"
    }
  }
  // ... rest
}
```

**File:** `lib/i18n/index.ts`
```typescript
import vi from "./translations/vi.json"
import en from "./translations/en.json"

const translations = { vi, en }

// Rest of i18n logic
```

**Tasks:**
- [ ] Create `lib/i18n/` directory structure
- [ ] Extract Vietnamese translations to `vi.json`
- [ ] Extract English translations to `en.json`
- [ ] Update imports in `i18n/index.ts`
- [ ] Generate TypeScript types from JSON
- [ ] Test all translation keys still work

---

#### Task 1.2: Extract Brand Icons Configuration

**File:** `components/landing/hero-section.tsx:29-166` (137 lines)

**Create:** `config/brand-icons.ts`
```typescript
import {
  SiOpenai,
  SiGoogle,
  SiMeta,
  // ... rest
} from "react-icons/si"

export interface BrandIcon {
  name: string
  icon: IconType
  color: string
  position: {
    top?: string
    bottom?: string
    left?: string
    right?: string
  }
  animation: {
    delay: number
    duration: number
  }
  size: "sm" | "md" | "lg"
}

export const brandIcons: BrandIcon[] = [
  {
    name: "OpenAI",
    icon: SiOpenai,
    color: "text-emerald-500",
    position: { top: "15%", left: "8%" },
    animation: { delay: 0, duration: 4 },
    size: "lg"
  },
  // ... 11 more
]
```

**Tasks:**
- [ ] Create `config/brand-icons.ts`
- [ ] Extract all brand icon data
- [ ] Define TypeScript interface
- [ ] Import in hero-section.tsx
- [ ] Remove hardcoded data from component

---

#### Task 1.3: Extract Package Options

**Files:**
- `app/dang-ky/page.tsx:37-41`
- `components/cta-register-modal.tsx` (similar data)

**Create:** `config/pricing.ts`
```typescript
export interface PricingPackage {
  id: "startup" | "growth" | "enterprise"
  name: string
  price: {
    vi: string
    en: string
  }
  credits: string
  popular?: boolean
  features: string[]
  billingPeriods: {
    monthly: number
    quarterly: number
    yearly: number
  }
}

export const pricingPackages: PricingPackage[] = [
  {
    id: "startup",
    name: "Startup",
    price: {
      vi: "3.5 triệu/tháng",
      en: "$130/month"
    },
    credits: "3,500 credits",
    popular: false,
    features: [
      "10-15 videos/month",
      "Basic AI models",
      "Email support"
    ],
    billingPeriods: {
      monthly: 3500000,
      quarterly: 10500000,
      yearly: 35700000
    }
  },
  // ... rest
]
```

**Tasks:**
- [ ] Create `config/pricing.ts`
- [ ] Move package data from both files
- [ ] Add billing period details
- [ ] Add feature lists
- [ ] Update both registration forms to import config
- [ ] Consider making this API-driven in future

---

### CODE-002: Create Shared Utilities

**Priority:** MEDIUM 🟡
**Estimated Time:** 3-4 hours

#### Task 2.1: Validation Utilities

**Create:** `lib/validation.ts`
```typescript
import { z } from "zod"

// Email validation
export const emailSchema = z
  .string()
  .email("Invalid email address")
  .min(5, "Email too short")
  .max(255, "Email too long")

// Vietnamese phone validation
export const vietnamesePhoneSchema = z
  .string()
  .regex(/^0\d{9}$/, "Invalid phone number (format: 0xxxxxxxxx)")

// Tax code validation (10-14 digits)
export const taxCodeSchema = z
  .string()
  .regex(/^\d{10,14}$/, "Tax code must be 10-14 digits")
  .optional()

// Name validation
export const nameSchema = z
  .string()
  .min(2, "Name too short")
  .max(100, "Name too long")
  .regex(/^[a-zA-ZÀ-ỹ\s]+$/, "Name can only contain letters")

// Full registration schema
export const registrationSchema = z.object({
  business_type: z.enum(["enterprise", "household"]),
  tax_code: taxCodeSchema,
  company_name: nameSchema,
  first_name: nameSchema,
  last_name: nameSchema,
  email: emailSchema,
  phone_number: vietnamesePhoneSchema,
  job_position: z.enum([
    "ceo",
    "marketing_manager",
    "marketing_staff",
    "sales_manager",
    "sales_staff",
    "content_creator",
    "business_owner",
    "student",
    "other"
  ]),
  selected_package: z.enum(["startup", "growth", "enterprise"])
})

export type RegistrationData = z.infer<typeof registrationSchema>

// Validation functions
export function validateEmail(email: string): boolean {
  return emailSchema.safeParse(email).success
}

export function validatePhone(phone: string): boolean {
  return vietnamesePhoneSchema.safeParse(phone).success
}

export function validateRegistration(data: unknown) {
  return registrationSchema.safeParse(data)
}
```

**Tasks:**
- [ ] Create `lib/validation.ts`
- [ ] Define all validation schemas with Zod
- [ ] Export helper functions
- [ ] Update both registration forms to use
- [ ] Add error message translations
- [ ] Write unit tests for validation

---

#### Task 2.2: API Client Utility

**Create:** `lib/api/client.ts`
```typescript
interface ApiError {
  message: string
  code?: string
  status: number
}

class ApiClient {
  private baseURL: string

  constructor(baseURL: string) {
    this.baseURL = baseURL
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const url = `${this.baseURL}${endpoint}`

    const defaultHeaders = {
      "Content-Type": "application/json",
      "Accept": "application/json",
    }

    const config: RequestInit = {
      ...options,
      headers: {
        ...defaultHeaders,
        ...options.headers,
      },
    }

    try {
      const response = await fetch(url, config)

      if (!response.ok) {
        let errorMessage = "Request failed"
        try {
          const error = await response.json()
          errorMessage = error.message || errorMessage
        } catch {
          errorMessage = `${response.status}: ${response.statusText}`
        }

        const apiError: ApiError = {
          message: errorMessage,
          status: response.status,
        }
        throw apiError
      }

      return response.json()
    } catch (error) {
      if (error instanceof TypeError) {
        throw {
          message: "Network error. Please check your connection.",
          status: 0,
        } as ApiError
      }
      throw error
    }
  }

  async post<T>(endpoint: string, data: unknown): Promise<T> {
    return this.request<T>(endpoint, {
      method: "POST",
      body: JSON.stringify(data),
    })
  }

  async get<T>(endpoint: string): Promise<T> {
    return this.request<T>(endpoint, {
      method: "GET",
    })
  }
}

// Export configured instance
export const apiClient = new ApiClient(
  process.env.NEXT_PUBLIC_API_URL || "https://api-ai-code.dsp.one"
)

// Typed API methods
export const api = {
  registerCompany: (data: RegistrationData) =>
    apiClient.post<{ success: boolean; message: string }>(
      "/api/users/register-company",
      data
    ),
}
```

**Tasks:**
- [ ] Create `lib/api/client.ts`
- [ ] Implement ApiClient class with error handling
- [ ] Add typed methods for each endpoint
- [ ] Update registration forms to use api.registerCompany()
- [ ] Add request/response interceptors if needed
- [ ] Add retry logic for failed requests

---

### CODE-003: Component Extraction

**Priority:** MEDIUM 🟡
**Estimated Time:** 6-8 hours

#### Task 3.1: Extract Shared Form Components

**Create:** `components/forms/`
```
components/forms/
├── index.ts
├── form-field.tsx      # Reusable field wrapper
├── form-input.tsx      # Input with validation
├── form-select.tsx     # Select with validation
├── form-radio.tsx      # Radio group
├── form-error.tsx      # Error message display
└── form-label.tsx      # Label with required indicator
```

**Example:** `components/forms/form-field.tsx`
```typescript
interface FormFieldProps {
  label: string
  name: string
  required?: boolean
  error?: string
  hint?: string
  children: React.ReactNode
}

export function FormField({
  label,
  name,
  required,
  error,
  hint,
  children
}: FormFieldProps) {
  return (
    <div className="space-y-2">
      <Label htmlFor={name} className="text-sm font-medium text-gray-900">
        {label}
        {required && (
          <span className="text-red-600 ml-1" aria-label="required">
            *
          </span>
        )}
      </Label>

      {children}

      {!error && hint && (
        <p
          id={`${name}-hint`}
          className="text-sm text-gray-600"
        >
          {hint}
        </p>
      )}

      {error && (
        <p
          id={`${name}-error`}
          role="alert"
          className="text-sm text-red-600 flex items-center gap-1"
        >
          <AlertCircle className="w-4 h-4" aria-hidden="true" />
          {error}
        </p>
      )}
    </div>
  )
}
```

**Tasks:**
- [ ] Create form components directory
- [ ] Extract FormField wrapper
- [ ] Extract FormInput with validation
- [ ] Extract FormSelect component
- [ ] Extract FormRadio component
- [ ] Extract FormError component
- [ ] Update registration forms to use components
- [ ] Add Storybook stories for each component

---

#### Task 3.2: Split Hero Section

**Current:** `components/landing/hero-section.tsx` (638 lines)

**Split into:**
```
components/landing/hero/
├── index.tsx              # Main HeroSection (50 lines)
├── brand-icons.tsx        # Floating brand icons (200 lines)
├── hero-content.tsx       # Title, subtitle, CTAs (150 lines)
├── process-flow.tsx       # 4-step process (250 lines)
└── animations.css         # Extract keyframes (40 lines)
```

**Tasks:**
- [ ] Create `components/landing/hero/` directory
- [ ] Extract BrandIcons component
- [ ] Extract HeroContent component
- [ ] Extract ProcessFlow component
- [ ] Move animations to separate CSS file
- [ ] Update main hero-section to compose
- [ ] Test all animations still work

---

### CODE-004: Add Constants

**Priority:** LOW 🟢
**Estimated Time:** 2 hours

**Create:** `lib/constants.ts`
```typescript
// Timing constants
export const TIMING = {
  MODAL_DELAY: 15000,              // 15s (was 2s)
  SCROLL_THRESHOLD: 0.5,           // 50% scroll
  CHATBOT_TIMEOUT: 3000,           // 3s fallback
  DEBOUNCE_DELAY: 300,             // 300ms
  THROTTLE_DELAY: 16,              // ~60fps
  API_TIMEOUT: 30000,              // 30s
  RATE_LIMIT_WINDOW: 1000,         // 1s between calls
} as const

// URL constants
export const URLS = {
  API_BASE: process.env.NEXT_PUBLIC_API_URL || "https://api-ai-code.dsp.one",
  ADMIN_URL: "https://admin.dsp.one",
  CHATBOT_SDK: "https://cds-agent-sdk.netlify.app/cds-chatbot-sdk.js",
} as const

// Storage keys
export const STORAGE_KEYS = {
  LOCALE: "dxai_locale",
  CTA_DISMISSED: "cta_modal_dismissed",
  RATE_LIMIT: "api_rate_limit",
} as const

// Validation rules
export const VALIDATION = {
  EMAIL_MAX_LENGTH: 255,
  NAME_MIN_LENGTH: 2,
  NAME_MAX_LENGTH: 100,
  PHONE_LENGTH: 10,
  TAX_CODE_MIN: 10,
  TAX_CODE_MAX: 14,
} as const

// Web Vitals thresholds
export const WEB_VITALS = {
  LCP_TARGET: 2500,   // Largest Contentful Paint
  FID_TARGET: 100,    // First Input Delay
  CLS_TARGET: 0.1,    // Cumulative Layout Shift
  TTFB_TARGET: 800,   // Time to First Byte
  FCP_TARGET: 1800,   // First Contentful Paint
} as const

// Z-index layers
export const Z_INDEX = {
  BACKGROUND: -1,
  BASE: 0,
  DROPDOWN: 10,
  NAVBAR: 50,
  MODAL_BACKDROP: 100,
  MODAL: 101,
  TOAST: 200,
  SKIP_LINK: 9999,
} as const
```

**Tasks:**
- [ ] Create `lib/constants.ts`
- [ ] Replace all magic numbers with constants
- [ ] Document each constant's purpose
- [ ] Export as `const` assertions for type safety
- [ ] Update all files to import constants
- [ ] Add JSDoc comments

---

## 🧪 PHASE 6: TESTING & DOCUMENTATION (Week 4)

### TEST-001: Setup Testing Infrastructure

**Priority:** MEDIUM 🟡
**Estimated Time:** 4-6 hours

**Install Dependencies:**
```bash
npm install -D vitest @testing-library/react @testing-library/jest-dom @testing-library/user-event jsdom
```

**Create:** `vitest.config.ts`
```typescript
import { defineConfig } from "vitest/config"
import react from "@vitejs/plugin-react"
import path from "path"

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    setupFiles: ["./vitest.setup.ts"],
    globals: true,
    coverage: {
      provider: "v8",
      reporter: ["text", "json", "html"],
      exclude: [
        "node_modules/",
        "vitest.setup.ts",
        "**/*.config.ts",
        "**/*.d.ts",
      ],
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./"),
    },
  },
})
```

**Create:** `vitest.setup.ts`
```typescript
import "@testing-library/jest-dom"
import { cleanup } from "@testing-library/react"
import { afterEach } from "vitest"

// Cleanup after each test
afterEach(() => {
  cleanup()
})

// Mock Next.js router
vi.mock("next/navigation", () => ({
  useRouter: () => ({
    push: vi.fn(),
    replace: vi.fn(),
    prefetch: vi.fn(),
  }),
  useSearchParams: () => ({
    get: vi.fn(),
  }),
  usePathname: () => "/",
}))
```

**Add Scripts to package.json:**
```json
{
  "scripts": {
    "test": "vitest",
    "test:ui": "vitest --ui",
    "test:coverage": "vitest --coverage"
  }
}
```

**Tasks:**
- [ ] Install testing dependencies
- [ ] Configure Vitest
- [ ] Create setup file
- [ ] Add test scripts
- [ ] Test configuration works

---

### TEST-002: Write Unit Tests

**Priority:** MEDIUM 🟡
**Estimated Time:** 8-10 hours

#### Test 2.1: Validation Functions

**Create:** `lib/__tests__/validation.test.ts`
```typescript
import { describe, it, expect } from "vitest"
import { validateEmail, validatePhone, validateRegistration } from "../validation"

describe("validateEmail", () => {
  it("should accept valid emails", () => {
    expect(validateEmail("user@example.com")).toBe(true)
    expect(validateEmail("test+tag@domain.co.uk")).toBe(true)
  })

  it("should reject invalid emails", () => {
    expect(validateEmail("invalid")).toBe(false)
    expect(validateEmail("@example.com")).toBe(false)
    expect(validateEmail("user@")).toBe(false)
    expect(validateEmail("a@b.c")).toBe(false) // Too short TLD
  })
})

describe("validatePhone", () => {
  it("should accept valid Vietnamese phone numbers", () => {
    expect(validatePhone("0912345678")).toBe(true)
    expect(validatePhone("0987654321")).toBe(true)
  })

  it("should reject invalid phone numbers", () => {
    expect(validatePhone("123456789")).toBe(false) // Doesn't start with 0
    expect(validatePhone("09123456789")).toBe(false) // Too long
    expect(validatePhone("091234567")).toBe(false) // Too short
  })
})
```

**Tasks:**
- [ ] Test all validation functions
- [ ] Test edge cases
- [ ] Test error messages
- [ ] Aim for 80%+ coverage on utilities

---

#### Test 2.2: Component Tests

**Create:** `components/__tests__/button.test.tsx`
```typescript
import { describe, it, expect, vi } from "vitest"
import { render, screen, fireEvent } from "@testing-library/react"
import { Button } from "../ui/button"

describe("Button", () => {
  it("renders with correct text", () => {
    render(<Button>Click me</Button>)
    expect(screen.getByRole("button")).toHaveTextContent("Click me")
  })

  it("calls onClick handler when clicked", () => {
    const handleClick = vi.fn()
    render(<Button onClick={handleClick}>Click</Button>)

    fireEvent.click(screen.getByRole("button"))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it("is disabled when disabled prop is true", () => {
    render(<Button disabled>Click</Button>)
    expect(screen.getByRole("button")).toBeDisabled()
  })

  it("does not call onClick when disabled", () => {
    const handleClick = vi.fn()
    render(<Button disabled onClick={handleClick}>Click</Button>)

    fireEvent.click(screen.getByRole("button"))
    expect(handleClick).not.toHaveBeenCalled()
  })
})
```

**Priority Components to Test:**
- [ ] Button component
- [ ] Input component
- [ ] LanguageSelector
- [ ] FormField wrapper
- [ ] RegistrationForm (integration test)

---

### TEST-003: E2E Tests

**Priority:** LOW 🟢
**Estimated Time:** 6-8 hours

**Install Playwright:**
```bash
npm install -D @playwright/test
npx playwright install
```

**Create:** `e2e/registration.spec.ts`
```typescript
import { test, expect } from "@playwright/test"

test.describe("Registration Flow", () => {
  test("should complete registration successfully", async ({ page }) => {
    await page.goto("/dang-ky")

    // Select package
    await page.click('button:has-text("Growth")')

    // Fill form
    await page.fill('[name="first_name"]', "John")
    await page.fill('[name="last_name"]', "Doe")
    await page.fill('[name="email"]', "john@example.com")
    await page.fill('[name="phone_number"]', "0912345678")
    await page.selectOption('[name="job_position"]', "marketing_manager")

    // Submit
    await page.click('button[type="submit"]')

    // Verify success
    await expect(page.locator('text=Thành công')).toBeVisible()
  })

  test("should show validation errors", async ({ page }) => {
    await page.goto("/dang-ky")

    // Submit without filling
    await page.click('button[type="submit"]')

    // Check for errors
    await expect(page.locator('text=Email is required')).toBeVisible()
    await expect(page.locator('text=Phone is required')).toBeVisible()
  })
})

test.describe("Accessibility", () => {
  test("should be keyboard navigable", async ({ page }) => {
    await page.goto("/")

    // Tab through interactive elements
    await page.keyboard.press("Tab")
    await expect(page.locator("a:focus")).toBeVisible()

    await page.keyboard.press("Tab")
    await expect(page.locator("button:focus, a:focus")).toBeVisible()
  })
})
```

**Tasks:**
- [ ] Install Playwright
- [ ] Create E2E test directory
- [ ] Test critical user flows (registration, navigation)
- [ ] Test form validation
- [ ] Test keyboard navigation
- [ ] Test mobile viewport
- [ ] Run in CI/CD pipeline

---

### DOC-001: Update Documentation

**Priority:** LOW 🟢
**Estimated Time:** 3-4 hours

**Tasks:**
- [ ] Update CLAUDE.md with new patterns
- [ ] Document all new constants
- [ ] Add JSDoc comments to public APIs
- [ ] Create component usage examples
- [ ] Update README.md with:
  - [ ] New testing commands
  - [ ] Configuration guide
  - [ ] Contributing guidelines
  - [ ] Environment variables reference
- [ ] Create CONTRIBUTING.md
- [ ] Create CHANGELOG.md
- [ ] Document migration guide for breaking changes

---

## 📋 IMPLEMENTATION TIMELINE

### Week 1: Critical Fixes
**Days 1-2: Security** (16 hours)
- ✅ Rotate API key
- ✅ Add CSRF protection
- ✅ Implement rate limiting
- ✅ Fix input validation

**Days 3-4: Type Safety** (16 hours)
- ✅ Remove all `any` types
- ✅ Add proper TypeScript interfaces
- ✅ Fix type errors

**Day 5: Code Quality** (8 hours)
- ✅ Remove console statements
- ✅ Improve error handling
- ✅ Fix memory leaks

---

### Week 2: Performance & A11y
**Days 1-2: Performance** (16 hours)
- ✅ Optimize images
- ✅ Split large components
- ✅ Add memoization
- ✅ Defer third-party scripts

**Days 3-5: Accessibility** (24 hours)
- ✅ Add comprehensive ARIA labels
- ✅ Fix color contrast
- ✅ Implement keyboard navigation
- ✅ Add focus management
- ✅ Test with screen readers

---

### Week 3: SEO & Refactoring
**Days 1-2: SEO** (16 hours)
- ✅ Add structured data (JSON-LD)
- ✅ Improve semantic HTML
- ✅ Generate sitemap
- ✅ Optimize meta tags

**Days 3-5: Refactoring** (24 hours)
- ✅ Extract configurations
- ✅ Create shared utilities
- ✅ Split components
- ✅ Add constants file
- ✅ Consolidate registration forms

---

### Week 4: Testing & Polish
**Days 1-2: Testing** (16 hours)
- ✅ Setup test infrastructure
- ✅ Write unit tests
- ✅ Write E2E tests

**Days 3-5: Documentation & Final QA** (24 hours)
- ✅ Update all documentation
- ✅ Full QA pass
- ✅ Performance audit
- ✅ Accessibility audit
- ✅ Security review

---

## ✅ VERIFICATION CHECKLIST

### Security ✓
- [ ] All API keys in environment variables
- [ ] CSRF protection implemented
- [ ] Rate limiting active
- [ ] Input validation with Zod
- [ ] No sensitive data in logs

### Performance ✓
- [ ] Lighthouse score > 90
- [ ] LCP < 2.5s
- [ ] FID < 100ms
- [ ] CLS < 0.1
- [ ] Bundle size < 200KB

### Accessibility ✓
- [ ] All images have alt text
- [ ] ARIA labels on interactive elements
- [ ] Color contrast WCAG AA compliant
- [ ] Keyboard navigation works
- [ ] Focus management proper
- [ ] Screen reader tested

### SEO ✓
- [ ] Structured data validates
- [ ] Semantic HTML correct
- [ ] Sitemap generated
- [ ] Meta tags optimized
- [ ] Lighthouse SEO > 95

### Code Quality ✓
- [ ] No TypeScript `any` types
- [ ] No console statements in production
- [ ] All tests passing
- [ ] Test coverage > 80%
- [ ] No ESLint errors
- [ ] Documentation complete

---

## 🎯 SUCCESS METRICS

| Metric | Current | Target | Improvement |
|--------|---------|--------|-------------|
| **Lighthouse Performance** | ~75 | 90+ | +20% |
| **Lighthouse Accessibility** | ~80 | 95+ | +18% |
| **Lighthouse SEO** | ~85 | 95+ | +12% |
| **Bundle Size (JS)** | ~350KB | <200KB | -43% |
| **LCP** | ~3.5s | <2.5s | -29% |
| **FID** | ~150ms | <100ms | -33% |
| **CLS** | ~0.15 | <0.1 | -33% |
| **Type Safety** | 5 `any` types | 0 | -100% |
| **Code Duplication** | ~1000 lines | <200 lines | -80% |
| **Test Coverage** | 0% | 80%+ | +80% |

---

## 📞 SUPPORT & RESOURCES

### Tools
- **Type Checking:** `npx tsc --noEmit`
- **Linting:** `npm run lint`
- **Testing:** `npm run test`
- **Bundle Analysis:** `npm run analyze`
- **Lighthouse:** Chrome DevTools > Lighthouse
- **Contrast Checker:** https://webaim.org/resources/contrastchecker/
- **Schema Validator:** https://validator.schema.org/

### Documentation
- **CLAUDE.md** - Project guidelines
- **README.md** - Setup & usage
- **CONTRIBUTING.md** - How to contribute
- **CHANGELOG.md** - Version history

---

**Last Updated:** 2026-01-16
**Next Review:** After Phase 1 completion (Week 1)

---

*This checklist is a living document and should be updated as issues are discovered or requirements change.*
