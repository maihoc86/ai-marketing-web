"use client";

import { TimerOff, Zap, CreditCard, TrendingDown } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export function ChatbotProblemsSection() {
  const { t } = useI18n();

  const items = [
    {
      icon: TimerOff,
      type: "problem",
      titleKey: "featurePage.chatbot.problems.problem1.title",
      descKey: "featurePage.chatbot.problems.problem1.desc",
    },
    {
      icon: Zap,
      type: "solution",
      titleKey: "featurePage.chatbot.problems.solution1.title",
      descKey: "featurePage.chatbot.problems.solution1.desc",
    },
    {
      icon: CreditCard,
      type: "problem",
      titleKey: "featurePage.chatbot.problems.problem2.title",
      descKey: "featurePage.chatbot.problems.problem2.desc",
    },
    {
      icon: TrendingDown,
      type: "solution",
      titleKey: "featurePage.chatbot.problems.solution2.title",
      descKey: "featurePage.chatbot.problems.solution2.desc",
    },
  ];

  return (
    <section className="bg-white py-16 md:py-24 border-y border-gray-100">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            {t("featurePage.chatbot.problems.heading")}
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto text-lg">
            {t("featurePage.chatbot.problems.subheading")}
          </p>
        </div>

        {/* 2x2 Grid */}
        <div className="grid md:grid-cols-2 gap-px bg-gray-200 rounded-3xl overflow-hidden border border-gray-200 shadow-lg">
          {items.map((item, index) => {
            const Icon = item.icon;
            const isProblem = item.type === "problem";

            return (
              <div
                key={index}
                className="bg-white p-8 md:p-10 flex gap-6 hover:bg-gray-50 transition-colors animate-fade-in"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <div
                  className={`w-12 h-12 rounded-full shrink-0 flex items-center justify-center transition-transform hover:scale-110 ${
                    isProblem ? "bg-red-50" : "bg-green-50"
                  }`}
                >
                  <Icon
                    className={`w-6 h-6 ${
                      isProblem ? "text-red-500" : "text-green-500"
                    }`}
                  />
                </div>
                <div>
                  <h4
                    className={`text-lg font-bold mb-2 ${
                      isProblem ? "text-red-500" : "text-green-500"
                    }`}
                  >
                    {t(item.titleKey)}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">{t(item.descKey)}</p>
                </div>
              </div>
            );
          })}
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
