"use client";

import { Database, Palette, Rocket } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export function ChatbotStepsSection() {
  const { t } = useI18n();

  const steps = [
    {
      number: 1,
      icon: Database,
      titleKey: "featurePage.chatbot.steps.step1.title",
      descKey: "featurePage.chatbot.steps.step1.desc",
      color: "from-[#22b5f8] to-[#008bff]",
    },
    {
      number: 2,
      icon: Palette,
      titleKey: "featurePage.chatbot.steps.step2.title",
      descKey: "featurePage.chatbot.steps.step2.desc",
      color: "from-[#ff7900] to-[#e56b00]",
    },
    {
      number: 3,
      icon: Rocket,
      titleKey: "featurePage.chatbot.steps.step3.title",
      descKey: "featurePage.chatbot.steps.step3.desc",
      color: "from-[#10b981] to-[#059669]",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-4 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            {t("featurePage.chatbot.steps.heading")}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg mb-6">
            {t("featurePage.chatbot.steps.subheading")}
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#22b5f8]/10 text-[#22b5f8] rounded-full text-sm font-semibold">
            <span className="w-2 h-2 bg-[#22b5f8] rounded-full animate-pulse" />
            {t("featurePage.chatbot.steps.badge")}
          </div>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={index}
                className="relative animate-fade-in"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-gray-300 to-transparent" />
                )}

                <div className="bg-white rounded-2xl border-2 border-gray-200 p-8 hover:border-[#22b5f8] transition-all hover:shadow-xl group">
                  {/* Icon with Gradient */}
                  <div className="relative mb-6">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-linear-to-br ${step.color} flex items-center justify-center group-hover:scale-110 transition-transform`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    {/* Step Number */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#1c1c1c] text-white rounded-full flex items-center justify-center text-sm font-black">
                      {step.number}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-3 text-[#1c1c1c]">
                    {t(step.titleKey)}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {t(step.descKey)}
                  </p>
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
