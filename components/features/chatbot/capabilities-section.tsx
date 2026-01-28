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

export function ChatbotCapabilitiesSection() {
  const { t } = useI18n();

  const capabilities = [
    {
      icon: Brain,
      titleKey: "featurePage.chatbot.capabilities.capability1.title",
      descKey: "featurePage.chatbot.capabilities.capability1.desc",
      progress: 66,
    },
    {
      icon: FileText,
      titleKey: "featurePage.chatbot.capabilities.capability2.title",
      descKey: "featurePage.chatbot.capabilities.capability2.desc",
      progress: 100,
    },
    {
      icon: Globe,
      titleKey: "featurePage.chatbot.capabilities.capability3.title",
      descKey: "featurePage.chatbot.capabilities.capability3.desc",
      progress: 80,
    },
    {
      icon: CalendarCheck,
      titleKey: "featurePage.chatbot.capabilities.capability4.title",
      descKey: "featurePage.chatbot.capabilities.capability4.desc",
      progress: 75,
    },
    {
      icon: Shield,
      titleKey: "featurePage.chatbot.capabilities.capability5.title",
      descKey: "featurePage.chatbot.capabilities.capability5.desc",
      progress: 100,
    },
    {
      icon: LineChart,
      titleKey: "featurePage.chatbot.capabilities.capability6.title",
      descKey: "featurePage.chatbot.capabilities.capability6.desc",
      progress: 50,
    },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div className="max-w-xl animate-fade-in">
            <span className="text-[#22b5f8] font-bold text-sm uppercase tracking-widest mb-4 block">
              {t("featurePage.chatbot.capabilities.badge")}
            </span>
            <h2 className="text-3xl md:text-4xl font-black">
              {t("featurePage.chatbot.capabilities.heading")}
            </h2>
          </div>
          <LocaleLink
            href="/#features"
            className="text-[#22b5f8] font-bold flex items-center gap-2 hover:gap-3 transition-all group animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            {t("featurePage.chatbot.capabilities.viewAll")}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </LocaleLink>
        </div>

      {/* Capabilities Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {capabilities.map((capability, index) => {
          const Icon = capability.icon;

          return (
            <div
              key={index}
              className="group bg-white p-6 md:p-8 rounded-2xl border border-gray-200 hover:border-[#22b5f8] transition-all hover:shadow-xl animate-fade-in"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-[#22b5f8]/5 flex items-center justify-center mb-6 group-hover:bg-[#22b5f8] transition-all group-hover:scale-110">
                <Icon className="w-7 h-7 text-[#22b5f8] group-hover:text-white transition-colors" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-3 text-[#1c1c1c]">
                {t(capability.titleKey)}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed mb-6">
                {t(capability.descKey)}
              </p>

              {/* Progress Bar */}
              <div className="w-full h-1 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-linear-to-r from-[#22b5f8] to-[#008bff] transition-all duration-1000 ease-out"
                  style={{ width: `${capability.progress}%` }}
                />
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
