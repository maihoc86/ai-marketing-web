"use client"

import { useEffect, useState } from "react"
import { lazyLoadWithIdle } from "@/lib/performance"

export function LazyChatbot() {
  const [shouldLoad, setShouldLoad] = useState(false)

  useEffect(() => {
    let loadTimer: NodeJS.Timeout
    let hasInteracted = false

    const handleInteraction = () => {
      if (!hasInteracted) {
        hasInteracted = true
        setShouldLoad(true)
        cleanup()
      }
    }

    const events = ["scroll", "click", "touchstart", "mousemove"]
    events.forEach((event) => {
      window.addEventListener(event, handleInteraction, { once: true, passive: true })
    })

    // Fallback: load after 3 seconds even without interaction
    loadTimer = setTimeout(() => {
      setShouldLoad(true)
    }, 3000)

    const cleanup = () => {
      clearTimeout(loadTimer)
      events.forEach((event) => {
        window.removeEventListener(event, handleInteraction)
      })
    }

    return cleanup
  }, [])

  useEffect(() => {
    if (!shouldLoad) return

    // Load chatbot dynamically
    lazyLoadWithIdle(() => import("@/components/chatbot").then((mod) => mod.Chatbot))
      .then((ChatbotComponent) => {
        // Render the chatbot
        const container = document.createElement("div")
        document.body.appendChild(container)
      })
      .catch((err) => console.error("Failed to load chatbot:", err))
  }, [shouldLoad])

  return null
}
