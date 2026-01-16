"use client"

import { useEffect } from "react"
import { initWebVitals } from "@/lib/performance"

export function WebVitals() {
  useEffect(() => {
    initWebVitals()
  }, [])

  return null
}
