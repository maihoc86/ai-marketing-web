"use client"

import { useEffect, useState } from "react"
import Script from "next/script"

export function LazyAnalytics() {
  const [shouldLoad, setShouldLoad] = useState(false)

  useEffect(() => {
    const handleInteraction = () => {
      setShouldLoad(true)
    }

    const events = ["scroll", "click", "touchstart"]
    events.forEach((event) => {
      window.addEventListener(event, handleInteraction, { once: true, passive: true })
    })

    // Fallback: load after 2 seconds
    const timer = setTimeout(() => setShouldLoad(true), 2000)

    return () => {
      clearTimeout(timer)
      events.forEach((event) => {
        window.removeEventListener(event, handleInteraction)
      })
    }
  }, [])

  if (!shouldLoad) return null

  return (
    <>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-FX3KH26XSV" strategy="lazyOnload" />
      <Script id="google-analytics" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-FX3KH26XSV');
        `}
      </Script>
    </>
  )
}
