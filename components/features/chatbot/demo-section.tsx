"use client";

import { useState } from "react";
import { MessageSquare, User } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export function ChatbotDemoSection() {
  const { t } = useI18n();
  const [messages] = useState([
    {
      type: "bot",
      text: t("featurePage.chatbot.demo.live.message1"),
      timestamp: "10:23 AM",
    },
    {
      type: "user",
      text: t("featurePage.chatbot.demo.live.message2"),
      timestamp: "10:24 AM",
    },
    {
      type: "bot",
      text: t("featurePage.chatbot.demo.live.message3"),
      timestamp: "10:24 AM",
      status: t("featurePage.chatbot.demo.live.checking"),
    },
    {
      type: "bot",
      text: t("featurePage.chatbot.demo.live.message4"),
      timestamp: "10:24 AM",
      highlight: true,
    },
  ]);

  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            {t("featurePage.chatbot.demo.live.heading")}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            {t("featurePage.chatbot.demo.live.subheading")}
          </p>
        </div>

        {/* Demo Chat Terminal */}
        <div
          className="max-w-4xl mx-auto animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          <div className="bg-[#1c1c1c] rounded-2xl shadow-2xl overflow-hidden">
            {/* Terminal Header */}
            <div className="bg-[#2d2d2d] px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <span className="text-gray-400 text-sm ml-4 font-mono">
                  {t("featurePage.chatbot.demo.live.terminal")}
                </span>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="p-6 space-y-4 min-h-[400px] max-h-[500px] overflow-y-auto">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex gap-3 animate-fade-in ${
                    message.type === "user" ? "justify-end" : ""
                  }`}
                  style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                >
                  {message.type === "bot" && (
                    <div className="w-8 h-8 rounded-full bg-[#22b5f8] flex items-center justify-center shrink-0">
                      <MessageSquare className="w-4 h-4 text-white" />
                    </div>
                  )}
                  <div
                    className={`flex flex-col max-w-md ${
                      message.type === "user" ? "items-end" : ""
                    }`}
                  >
                    <div
                      className={`p-4 rounded-2xl text-sm ${
                        message.type === "user"
                          ? "bg-[#22b5f8] text-white rounded-tr-none"
                          : message.highlight
                            ? "bg-linear-to-r from-[#22b5f8] to-[#008bff] text-white rounded-tl-none"
                            : "bg-[#2d2d2d] text-gray-100 rounded-tl-none"
                      }`}
                    >
                      {message.text}
                      {message.status && (
                        <div className="mt-2 pt-2 border-t border-white/10">
                          <p className="text-xs text-gray-300 flex items-center gap-2">
                            <span className="inline-block w-2 h-2 bg-[#22b5f8] rounded-full animate-pulse" />
                            {message.status}
                          </p>
                        </div>
                      )}
                    </div>
                    <span className="text-[10px] text-gray-500 mt-1 font-mono">
                      {message.timestamp}
                    </span>
                  </div>
                  {message.type === "user" && (
                    <div className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center shrink-0">
                      <User className="w-4 h-4 text-white" />
                    </div>
                  )}
                </div>
              ))}

              {/* Transfer to Human Agent Indicator */}
              <div
                className="flex justify-center py-4 animate-fade-in"
                style={{ animationDelay: "0.7s" }}
              >
                <div className="bg-[#2d2d2d] px-4 py-2 rounded-full border border-gray-700">
                  <p className="text-xs text-gray-400 uppercase tracking-wider">
                    {t("featurePage.chatbot.demo.live.transferring")}
                  </p>
                </div>
              </div>
            </div>

            {/* Input Area */}
            <div className="bg-[#2d2d2d] p-4 border-t border-gray-800">
              <div className="flex gap-3">
                <input
                  type="text"
                  placeholder={t("featurePage.chatbot.demo.live.placeholder")}
                  className="flex-1 bg-[#1c1c1c] text-gray-300 px-4 py-3 rounded-xl border border-gray-700 focus:border-[#22b5f8] focus:outline-none transition-colors"
                  disabled
                />
                <button className="px-6 py-3 bg-[#22b5f8] hover:bg-[#1a9fd8] text-white font-semibold rounded-xl transition-colors">
                  {t("featurePage.chatbot.demo.live.send")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx global>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
}
