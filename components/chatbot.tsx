"use client"
import { useEffect } from "react"
import { getChatbotConfig } from "@/app/actions/chatbot"
import { chatbotLogger } from "@/lib/logger"

// Type definitions are now in types/cds-chatbot.d.ts
// Window.CDSChatbot is globally typed

export function Chatbot() {
  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://cds-agent-sdk.netlify.app/sdk/chatbot-sdk.umd.js"
    script.async = true

    script.onload = async () => {
      if (window.CDSChatbot) {
        try {
          const config = await getChatbotConfig()
          chatbotLogger.log("CDS Chatbot config retrieved:", {
            botId: config.botId,
            modelId: config.modelId,
            apiKeyPresent: !!config.apiKey,
            apiKeyLength: config.apiKey?.length,
          })

          if (config.apiKey) {
            chatbotLogger.log("CDS Chatbot SDK loaded, initializing...")
            const result = window.CDSChatbot.init({
              botId: config.botId,
              modelId: config.modelId,
              apiKey: config.apiKey,
            })

            if (result && typeof result.then === "function") {
              await result
            }

            chatbotLogger.log("CDS Chatbot initialization completed")

            if (window.CDSChatbot.container) {
              chatbotLogger.log("Found CDSChatbot container, appending to body")
              if (!document.body.contains(window.CDSChatbot.container)) {
                document.body.appendChild(window.CDSChatbot.container)
                chatbotLogger.log("Container appended to DOM")
              } else {
                chatbotLogger.log("Container already in DOM")
              }
            } else {
              chatbotLogger.log("No container found on CDSChatbot object")
            }

            if (window.CDSChatbot.iframe) {
              chatbotLogger.log("iframe exists:", window.CDSChatbot.iframe)
            }
          } else {
            chatbotLogger.error("CDS Chatbot API key is missing")
          }
        } catch (error) {
          chatbotLogger.error("Failed to initialize CDS chatbot:", error)
        }
      }
    }

    script.onerror = () => {
      chatbotLogger.error("Failed to load CDS Chatbot SDK script")
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
