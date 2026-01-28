"use client";

import {
  Brain,
  FileText,
  Globe,
  CalendarCheck,
  Shield,
  LineChart,
  ArrowRight,
} from "lucide-react";
import { LocaleLink } from "@/components/locale-link";
import { useI18n } from "@/lib/i18n";

export function ChatbotCapabilitiesBentoSection() {
  const { t } = useI18n();

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="mb-12 text-center md:text-left animate-fade-in">
          <span className="inline-block px-3 py-1 mb-4 text-xs font-bold uppercase tracking-widest text-[#22b5f8] bg-[#22b5f8]/10 rounded-full">
            {t("featurePage.chatbot.capabilities.badge")}
          </span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
            {t("featurePage.chatbot.capabilities.heading")}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl">
            {t("featurePage.chatbot.capabilities.bentoDesc")}
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 min-h-[800px]">
          {/* 1. Personalized Consultation (Large - 2x2) */}
          <div
            className="md:col-span-2 md:row-span-2 group relative overflow-hidden bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-2xl transition-all duration-300 animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="flex justify-between items-start mb-6">
              <div className="w-14 h-14 rounded-xl bg-[#22b5f8]/10 flex items-center justify-center">
                <Brain className="w-8 h-8 text-[#22b5f8]" />
              </div>
              <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">
                {t("featurePage.chatbot.capabilities.bento.badge1")}
              </span>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-[#1c1c1c]">
              {t("featurePage.chatbot.capabilities.capability1.title")}
            </h3>
            <p className="text-gray-600 mb-6 max-w-sm leading-relaxed">
              {t("featurePage.chatbot.capabilities.capability1.desc")}
            </p>

            {/* UI Preview */}
            <div className="opacity-40 group-hover:opacity-100 transition-all duration-500 mt-4 rounded-lg bg-gray-50 p-4 border border-gray-200 h-32 flex flex-col gap-2">
              <div className="w-2/3 h-4 bg-[#22b5f8]/20 rounded animate-pulse" />
              <div className="w-full h-4 bg-[#ff7900]/20 rounded animate-pulse" style={{ animationDelay: "0.2s" }} />
              <div className="w-1/2 h-4 bg-[#22b5f8]/20 rounded animate-pulse" style={{ animationDelay: "0.4s" }} />
            </div>

            <div className="absolute bottom-8 left-8">
              <LocaleLink
                href="/#features"
                className="flex items-center gap-1 text-sm font-bold text-[#22b5f8] group-hover:underline"
              >
                {t("featurePage.chatbot.capabilities.learnMore")}
                <ArrowRight className="w-4 h-4" />
              </LocaleLink>
            </div>
          </div>

          {/* 2. Instant Quote (Small - 1x1) */}
          <div
            className="group bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="flex justify-between items-start mb-4">
              <FileText className="w-8 h-8 text-[#22b5f8]" />
              <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-[10px] font-bold rounded-full">
                {t("featurePage.chatbot.capabilities.bento.badge2")}
              </span>
            </div>
            <h3 className="text-lg font-bold mb-2 text-[#1c1c1c]">
              {t("featurePage.chatbot.capabilities.capability2.title")}
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              {t("featurePage.chatbot.capabilities.capability2.desc")}
            </p>
            <LocaleLink
              href="/#features"
              className="flex items-center gap-1 text-xs font-bold text-[#22b5f8]"
            >
              {t("featurePage.chatbot.capabilities.learnMore")}
              <ArrowRight className="w-3 h-3" />
            </LocaleLink>
          </div>

          {/* 3. Global Translation (Large Vertical - 1x2) */}
          <div
            className="md:row-span-2 group relative bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="w-12 h-12 rounded-xl bg-[#22b5f8]/10 flex items-center justify-center mb-6">
              <Globe className="w-7 h-7 text-[#22b5f8]" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-[#1c1c1c]">
              {t("featurePage.chatbot.capabilities.capability3.title")}
            </h3>
            <p className="text-sm text-gray-600 mb-6">
              {t("featurePage.chatbot.capabilities.capability3.desc")}
            </p>

            {/* Icon Grid Preview */}
            <div className="flex-grow flex items-center justify-center py-4">
              <div className="w-32 h-32 rounded-full border-4 border-dashed border-[#22b5f8]/20 flex items-center justify-center transition-all duration-500 group-hover:border-[#22b5f8]/40">
                <div className="w-16 h-16 rounded-full bg-[#22b5f8]/10 flex items-center justify-center">
                  <Globe className="w-8 h-8 text-[#22b5f8] animate-pulse" />
                </div>
              </div>
            </div>

            <div className="mt-auto">
              <span className="block mb-4 text-xs font-bold text-[#22b5f8]">
                {t("featurePage.chatbot.capabilities.bento.badge3")}
              </span>
              <LocaleLink
                href="/#features"
                className="flex items-center gap-1 text-sm font-bold text-[#22b5f8]"
              >
                {t("featurePage.chatbot.capabilities.learnMore")}
                <ArrowRight className="w-4 h-4" />
              </LocaleLink>
            </div>
          </div>

          {/* 4. Smart Booking (Small - 1x1) */}
          <div
            className="group bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="flex justify-between items-start mb-4">
              <CalendarCheck className="w-8 h-8 text-[#22b5f8]" />
              <span className="px-2 py-0.5 bg-orange-100 text-orange-700 text-[10px] font-bold rounded-full">
                {t("featurePage.chatbot.capabilities.bento.badge4")}
              </span>
            </div>
            <h3 className="text-lg font-bold mb-2 text-[#1c1c1c]">
              {t("featurePage.chatbot.capabilities.capability4.title")}
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              {t("featurePage.chatbot.capabilities.capability4.desc")}
            </p>
            <LocaleLink
              href="/#features"
              className="flex items-center gap-1 text-xs font-bold text-[#22b5f8]"
            >
              {t("featurePage.chatbot.capabilities.learnMore")}
              <ArrowRight className="w-3 h-3" />
            </LocaleLink>
          </div>

          {/* 5. Enterprise Security (Small - 1x1) */}
          <div
            className="group bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-in"
            style={{ animationDelay: "0.5s" }}
          >
            <div className="flex justify-between items-start mb-4">
              <Shield className="w-8 h-8 text-[#22b5f8]" />
              <span className="px-2 py-0.5 bg-green-100 text-green-700 text-[10px] font-bold rounded-full">
                {t("featurePage.chatbot.capabilities.bento.badge5")}
              </span>
            </div>
            <h3 className="text-lg font-bold mb-2 text-[#1c1c1c]">
              {t("featurePage.chatbot.capabilities.capability5.title")}
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              {t("featurePage.chatbot.capabilities.capability5.desc")}
            </p>
            <LocaleLink
              href="/#features"
              className="flex items-center gap-1 text-xs font-bold text-[#22b5f8]"
            >
              {t("featurePage.chatbot.capabilities.learnMore")}
              <ArrowRight className="w-3 h-3" />
            </LocaleLink>
          </div>

          {/* 6. Sentiment Analysis (Small - 1x1) */}
          <div
            className="group bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            <div className="flex justify-between items-start mb-4">
              <LineChart className="w-8 h-8 text-[#22b5f8]" />
              <span className="px-2 py-0.5 bg-purple-100 text-purple-700 text-[10px] font-bold rounded-full">
                {t("featurePage.chatbot.capabilities.bento.badge6")}
              </span>
            </div>
            <h3 className="text-lg font-bold mb-2 text-[#1c1c1c]">
              {t("featurePage.chatbot.capabilities.capability6.title")}
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              {t("featurePage.chatbot.capabilities.capability6.desc")}
            </p>
            <LocaleLink
              href="/#features"
              className="flex items-center gap-1 text-xs font-bold text-[#22b5f8]"
            >
              {t("featurePage.chatbot.capabilities.learnMore")}
              <ArrowRight className="w-3 h-3" />
            </LocaleLink>
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
