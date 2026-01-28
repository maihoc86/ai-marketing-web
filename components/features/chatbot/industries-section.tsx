"use client";

import { useState } from "react";
import { ShoppingCart, Building2, GraduationCap, Heart, ArrowRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import { LocaleLink } from "@/components/locale-link";

export function ChatbotIndustriesSection() {
  const { t } = useI18n();
  const [activeTab, setActiveTab] = useState(0);

  const industries = [
    {
      id: "ecommerce",
      name: t("featurePage.chatbot.industries.ecommerce.name"),
      icon: ShoppingCart,
    },
    {
      id: "realestate",
      name: t("featurePage.chatbot.industries.realestate.name"),
      icon: Building2,
    },
    {
      id: "education",
      name: t("featurePage.chatbot.industries.education.name"),
      icon: GraduationCap,
    },
    {
      id: "healthcare",
      name: t("featurePage.chatbot.industries.healthcare.name"),
      icon: Heart,
    },
  ];

  const industryContent = {
    ecommerce: {
      query: t("featurePage.chatbot.industries.ecommerce.query"),
      response: t("featurePage.chatbot.industries.ecommerce.response"),
      stats: [
        {
          value: "85%",
          label: t("featurePage.chatbot.industries.ecommerce.stat1"),
        },
        {
          value: "3.2x",
          label: t("featurePage.chatbot.industries.ecommerce.stat2"),
        },
      ],
    },
    realestate: {
      query: t("featurePage.chatbot.industries.realestate.query"),
      response: t("featurePage.chatbot.industries.realestate.response"),
      stats: [
        {
          value: "92%",
          label: t("featurePage.chatbot.industries.realestate.stat1"),
        },
        {
          value: "4.1x",
          label: t("featurePage.chatbot.industries.realestate.stat2"),
        },
      ],
    },
    education: {
      query: t("featurePage.chatbot.industries.education.query"),
      response: t("featurePage.chatbot.industries.education.response"),
      stats: [
        {
          value: "78%",
          label: t("featurePage.chatbot.industries.education.stat1"),
        },
        {
          value: "2.8x",
          label: t("featurePage.chatbot.industries.education.stat2"),
        },
      ],
    },
    healthcare: {
      query: t("featurePage.chatbot.industries.healthcare.query"),
      response: t("featurePage.chatbot.industries.healthcare.response"),
      stats: [
        {
          value: "94%",
          label: t("featurePage.chatbot.industries.healthcare.stat1"),
        },
        {
          value: "5.2x",
          label: t("featurePage.chatbot.industries.healthcare.stat2"),
        },
      ],
    },
  };

  const currentIndustry = industries[activeTab];
  const currentContent =
    industryContent[currentIndustry.id as keyof typeof industryContent];

  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            {t("featurePage.chatbot.industries.heading")}
          </h2>
        </div>

        {/* Industry Tabs */}
        <div
          className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in"
          style={{ animationDelay: "0.1s" }}
        >
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            const isActive = activeTab === index;

            return (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-3 rounded-full font-semibold transition-all flex items-center gap-2 ${
                  isActive
                    ? "bg-[#1c1c1c] text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                <Icon className="w-4 h-4" />
                {industry.name}
              </button>
            );
          })}
        </div>

        {/* Content Area */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Use Case */}
          <div
            className="animate-fade-in"
            style={{ animationDelay: "0.2s" }}
            key={currentIndustry.id}
          >
            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-lg">
              <span className="text-xs font-bold text-[#22b5f8] uppercase tracking-wider mb-4 block">
                {t("featurePage.chatbot.industries.commonQuery")}
              </span>
              <p className="text-lg italic text-gray-700 mb-6 leading-relaxed">
                "{currentContent.query}"
              </p>

              <div className="h-px bg-gray-200 my-6" />

              <span className="text-xs font-bold text-green-600 uppercase tracking-wider mb-4 block">
                {t("featurePage.chatbot.industries.aiResponse")}
              </span>
              <p className="text-gray-600 leading-relaxed">
                {currentContent.response}
              </p>
            </div>
          </div>

          {/* Right: Stats & CTA */}
          <div
            className="animate-fade-in"
            style={{ animationDelay: "0.3s" }}
            key={`${currentIndustry.id}-stats`}
          >
            <div className="bg-gradient-to-br from-[#1c1c1c] to-[#2d2d2d] rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-black mb-8">
                {t("featurePage.chatbot.industries.readyBoost")}
              </h3>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                {currentContent.stats.map((stat, idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-4xl font-black text-[#22b5f8] mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-400 uppercase tracking-wide">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">
                {t("featurePage.chatbot.industries.description")}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  className="bg-[#ff7900] hover:bg-[#e56b00] text-white font-bold rounded-full"
                  asChild
                >
                  <LocaleLink href="/register">
                    {t("featurePage.chatbot.industries.cta.start")}
                  </LocaleLink>
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-white/20 text-white hover:bg-white/10 font-semibold rounded-full bg-transparent"
                  asChild
                >
                  <LocaleLink href="/#features">
                    {t("featurePage.chatbot.industries.cta.view")}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </LocaleLink>
                </Button>
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
