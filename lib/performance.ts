"use client"

import { onCLS, onINP, onLCP, onFCP, onTTFB, type Metric } from "web-vitals"

export function reportWebVitals(metric: Metric) {
  // Send to Google Analytics
  if (window.gtag) {
    window.gtag("event", metric.name, {
      event_category: "Web Vitals",
      value: Math.round(metric.name === "CLS" ? metric.value * 1000 : metric.value),
      event_label: metric.id,
      non_interaction: true,
    })
  }

  // Log to console in development
  if (process.env.NODE_ENV === "development") {
    console.log("[Performance]", metric)
  }
}

export function initWebVitals() {
  onCLS(reportWebVitals)
  onINP(reportWebVitals)
  onLCP(reportWebVitals)
  onFCP(reportWebVitals)
  onTTFB(reportWebVitals)
}

export function lazyLoadWithIdle<T>(
  importFn: () => Promise<T>,
  options: IdleRequestOptions = { timeout: 2000 },
): Promise<T> {
  return new Promise((resolve) => {
    if ("requestIdleCallback" in window) {
      requestIdleCallback(() => {
        importFn().then(resolve)
      }, options)
    } else {
      // Fallback for browsers without requestIdleCallback
      setTimeout(() => {
        importFn().then(resolve)
      }, 1)
    }
  })
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}
