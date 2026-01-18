"use server"

export async function getChatbotConfig() {
  const apiKey = process.env.CDS_CHATBOT_API_KEY

  if (!apiKey) {
    throw new Error(
      "CDS_CHATBOT_API_KEY is not configured. Please add it to your environment variables."
    )
  }

  return {
    botId: "691555d6b81f95d483e89594",
    modelId: "google/gemini-2.5-flash",
    apiKey,
  }
}
