/**
 * Production-safe Logger Utility
 * Only logs in development, silent in production
 * Provides structured logging with prefixes
 */

const isDevelopment = process.env.NODE_ENV === "development"

/**
 * Log levels for categorization
 */
export enum LogLevel {
  INFO = "INFO",
  WARN = "WARN",
  ERROR = "ERROR",
  DEBUG = "DEBUG",
}

/**
 * Logger configuration
 */
interface LoggerConfig {
  prefix?: string
  enableInProduction?: boolean
}

/**
 * Create a logger instance with optional prefix
 */
function createLogger(config: LoggerConfig = {}) {
  const { prefix = "", enableInProduction = false } = config

  const shouldLog = isDevelopment || enableInProduction

  /**
   * Format log message with prefix and timestamp
   */
  const formatMessage = (level: LogLevel, ...args: unknown[]) => {
    const timestamp = new Date().toISOString()
    const prefixStr = prefix ? `[${prefix}]` : ""
    return [`[${timestamp}]`, prefixStr, `[${level}]`, ...args]
  }

  return {
    /**
     * Info level logging (general information)
     */
    log: (...args: unknown[]) => {
      if (shouldLog) {
        console.log(...formatMessage(LogLevel.INFO, ...args))
      }
    },

    /**
     * Info level logging (alias for log)
     */
    info: (...args: unknown[]) => {
      if (shouldLog) {
        console.log(...formatMessage(LogLevel.INFO, ...args))
      }
    },

    /**
     * Warning level logging
     */
    warn: (...args: unknown[]) => {
      if (shouldLog) {
        console.warn(...formatMessage(LogLevel.WARN, ...args))
      }
    },

    /**
     * Error level logging (always logged, even in production)
     */
    error: (...args: unknown[]) => {
      console.error(...formatMessage(LogLevel.ERROR, ...args))

      // In production, send errors to monitoring service
      if (!isDevelopment && typeof window !== "undefined") {
        // TODO: Send to error monitoring service (Sentry, LogRocket, etc.)
        // Example: Sentry.captureException(args[0])
      }
    },

    /**
     * Debug level logging (verbose, development only)
     */
    debug: (...args: unknown[]) => {
      if (isDevelopment) {
        console.debug(...formatMessage(LogLevel.DEBUG, ...args))
      }
    },

    /**
     * Group logging (collapsible in browser console)
     */
    group: (label: string, ...args: unknown[]) => {
      if (shouldLog) {
        console.group(label)
        args.forEach((arg) => console.log(arg))
        console.groupEnd()
      }
    },

    /**
     * Table logging (for arrays/objects)
     */
    table: (data: unknown) => {
      if (shouldLog && console.table) {
        console.table(data)
      }
    },
  }
}

/**
 * Default logger instance
 */
export const logger = createLogger()

/**
 * Create domain-specific loggers
 */
export const chatbotLogger = createLogger({ prefix: "Chatbot" })
export const performanceLogger = createLogger({ prefix: "Performance" })
export const apiLogger = createLogger({ prefix: "API" })

/**
 * Export createLogger for custom instances
 */
export { createLogger }
