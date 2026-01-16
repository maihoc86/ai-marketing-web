"use server"

export async function getChatbotConfig() {
  return {
    botId: "691555d6b81f95d483e89594",
    modelId: "google/gemini-2.5-flash",
    apiKey: process.env.CDS_CHATBOT_API_KEY || "6f1b19cf85f64f9a90b56a4c9d1a0d3d",
  }
}
