/**
 * Type definitions for CDS Chatbot SDK
 * @see https://cds-agent-sdk.netlify.app
 */

export interface ChatbotConfig {
  botId: string
  modelId: string
  apiKey: string
  theme?: "light" | "dark"
  position?: "bottom-right" | "bottom-left" | "top-right" | "top-left"
  primaryColor?: string
  greeting?: string
  placeholder?: string
  language?: "vi" | "en"
}

export interface ChatbotInstance {
  /**
   * Initialize the chatbot with configuration
   * @returns Promise that resolves when initialization is complete
   */
  init(config: ChatbotConfig): Promise<void> | void

  /**
   * Open the chatbot interface
   */
  open(): void

  /**
   * Close the chatbot interface
   */
  close(): void

  /**
   * Destroy the chatbot instance and clean up resources
   */
  destroy(): void

  /**
   * Send a message programmatically
   */
  sendMessage?(message: string): void

  /**
   * DOM container element for the chatbot
   */
  container?: HTMLElement

  /**
   * Iframe element containing the chatbot UI
   */
  iframe?: HTMLIFrameElement

  /**
   * Check if chatbot is currently open
   */
  isOpen?: boolean
}

declare global {
  interface Window {
    /**
     * CDS Chatbot SDK instance
     */
    CDSChatbot?: ChatbotInstance
  }
}

export {}
