"use client";

import { useI18n } from "@/lib/i18n";
import ChatTerminal from "@/components/features/chatbot/terminal";

export function ChatbotDemoSection() {
  const { t } = useI18n();

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
          <ChatTerminal />
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
