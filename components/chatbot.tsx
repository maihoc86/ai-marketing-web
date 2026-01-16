"use client"
import { useEffect } from "react"
import { getChatbotConfig } from "@/components/chatbot"

declare global {
  interface Window {
    CDSChatbot?: any
  }
}

export function Chatbot() {
  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://cds-agent-sdk.netlify.app/sdk/chatbot-sdk.umd.js"
    script.async = true

    script.onload = async () => {
      if (window.CDSChatbot) {
        try {
          const config = await getChatbotConfig()
          console.log("[v0] CDS Chatbot config retrieved:", {
            botId: config.botId,
            modelId: config.modelId,
            apiKeyPresent: !!config.apiKey,
            apiKeyLength: config.apiKey?.length,
          })

          if (config.apiKey) {
            console.log("[v0] CDS Chatbot SDK loaded, initializing...")
            const result = window.CDSChatbot.init({
              botId: config.botId,
              modelId: config.modelId,
              apiKey: config.apiKey,
            })

            if (result && typeof result.then === "function") {
              await result
            }

            console.log("[v0] CDS Chatbot initialization completed")

            if (window.CDSChatbot.container) {
              console.log("[v0] Found CDSChatbot container, appending to body")
              if (!document.body.contains(window.CDSChatbot.container)) {
                document.body.appendChild(window.CDSChatbot.container)
                console.log("[v0] Container appended to DOM")
              } else {
                console.log("[v0] Container already in DOM")
              }
            } else {
              console.log("[v0] No container found on CDSChatbot object")
            }

            if (window.CDSChatbot.iframe) {
              console.log("[v0] iframe exists:", window.CDSChatbot.iframe)
            }
          } else {
            console.error("[v0] CDS Chatbot API key is missing")
          }
        } catch (error) {
          console.error("[v0] Failed to initialize CDS chatbot:", error)
        }
      }
    }

    script.onerror = () => {
      console.error("[v0] Failed to load CDS Chatbot SDK script")
    }

    document.body.appendChild(script)

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script)
      }
    }
  }, [])

  return null
}
