export interface PerformanceMetric {
  name: string
  value: number
  rating: "good" | "needs-improvement" | "poor"
  delta: number
  id: string
}

export const thresholds = {
  LCP: { good: 2500, poor: 4000 },
  FID: { good: 100, poor: 300 },
  CLS: { good: 0.1, poor: 0.25 },
  FCP: { good: 1800, poor: 3000 },
  TTFB: { good: 800, poor: 1800 },
  INP: { good: 200, poor: 500 },
}

export function getRating(metricName: keyof typeof thresholds, value: number): "good" | "needs-improvement" | "poor" {
  const threshold = thresholds[metricName]
  if (value <= threshold.good) return "good"
  if (value <= threshold.poor) return "needs-improvement"
  return "poor"
}

export function sendToAnalytics(metric: PerformanceMetric) {
  // Send to Google Analytics
  if (typeof window !== "undefined" && "gtag" in window) {
    const gtag = (window as any).gtag
    gtag("event", metric.name, {
      event_category: "Web Vitals",
      value: Math.round(metric.value),
      event_label: metric.id,
      non_interaction: true,
      metric_rating: metric.rating,
    })
  }

  // Log to console in development
  if (process.env.NODE_ENV === "development") {
    console.log("[Performance]", metric.name, {
      value: metric.value,
      rating: metric.rating,
    })
  }
}

// Batch DOM operations to prevent layout thrashing
export function batchDOMOperations(operations: Array<() => void>) {
  requestAnimationFrame(() => {
    operations.forEach((op) => op())
  })
}

// Debounced resize handler
export function debounceRAF(callback: (...args: any[]) => void) {
  let rafId: number | null = null

  return (...args: any[]) => {
    if (rafId !== null) {
      cancelAnimationFrame(rafId)
    }
    rafId = requestAnimationFrame(() => {
      callback(...args)
      rafId = null
    })
  }
}

// Lazy load with idle callback
export async function lazyLoadWithIdle<T>(loader: () => Promise<T>): Promise<T> {
  if ("requestIdleCallback" in window) {
    return new Promise((resolve, reject) => {
      requestIdleCallback(
        () => {
          loader().then(resolve).catch(reject)
        },
        { timeout: 2000 },
      )
    })
  }
  return loader()
}

// Performance budget check
export function checkPerformanceBudget() {
  if (typeof window === "undefined" || !("performance" in window)) return

  const budget = {
    "bundle-size": 200 * 1024, // 200KB
    "image-size": 100 * 1024, // 100KB per image
    "first-contentful-paint": 1500, // 1.5s
    "time-to-interactive": 3500, // 3.5s
  }

  const navigation = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming

  if (navigation) {
    const metrics = {
      "first-contentful-paint": performance.getEntriesByName("first-contentful-paint")[0]?.startTime || 0,
      "time-to-interactive": navigation.domInteractive - navigation.fetchStart,
    }

    Object.entries(metrics).forEach(([name, value]) => {
      const budgetValue = budget[name as keyof typeof budget]
      if (value > budgetValue) {
        console.warn(`Performance budget exceeded for ${name}:`, {
          actual: value,
          budget: budgetValue,
        })
      }
    })
  }
}
