"use client";

import { ChevronRight, Bot, Sparkles, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LocaleLink } from "@/components/locale-link";
import { useI18n } from "@/lib/i18n";

export function ChatbotHeroSection() {
  const { t } = useI18n();

  return (
    <section className="pt-24 pb-16 md:pt-28 md:pb-24 relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center animate-fade-in">
        {/* Left Content */}
        <div>
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm font-medium text-gray-500 mb-6">
            <LocaleLink
              href="/#features"
              className="hover:text-[#1f3b61] transition-colors"
            >
              {t("nav.features")}
            </LocaleLink>
            <ChevronRight className="w-4 h-4" />
            <span className="text-[#8b5cf6]">
              {t("features.chatbot.title")}
            </span>
          </nav>

          {/* Badge */}
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-black uppercase tracking-widest text-white bg-[#1c1c1c] rounded-full animate-fade-in">
            24/7 {t("featurePage.chatbot.automated")}
          </span>

          {/* Heading */}
          <h1 className="text-5xl md:text-6xl font-black tracking-tight leading-[1.1] mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            {t("featurePage.chatbot.hero.title1")}{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#22b5f8] to-[#008bff]">
              {t("featurePage.chatbot.hero.title2")}
            </span>
          </h1>

          {/* Description */}
          <p className="text-xl text-gray-600 mb-10 max-w-lg leading-relaxed animate-fade-in" style={{ animationDelay: "0.2s" }}>
            {t("featurePage.chatbot.hero.description")}
          </p>

          {/* Metrics */}
          <div className="grid grid-cols-3 gap-4 py-8 border-t border-gray-100 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div>
              <div className="text-2xl font-black text-[#1c1c1c]">&lt; 2s</div>
              <div className="text-xs font-bold text-gray-400 uppercase tracking-tighter">
                {t("featurePage.chatbot.metric.response")}
              </div>
            </div>
            <div>
              <div className="text-2xl font-black text-[#1c1c1c]">99.7%</div>
              <div className="text-xs font-bold text-gray-400 uppercase tracking-tighter">
                {t("featurePage.chatbot.metric.accuracy")}
              </div>
            </div>
            <div>
              <div className="text-2xl font-black text-[#1c1c1c]">80%</div>
              <div className="text-xs font-bold text-gray-400 uppercase tracking-tighter">
                {t("featurePage.chatbot.metric.costReduction")}
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Button
              size="lg"
              className="px-8 py-4 bg-[#ff7900] hover:bg-[#e56b00] text-white font-bold rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
              asChild
            >
              <LocaleLink href="/register">
                <Sparkles className="w-5 h-5 mr-2" />
                {t("featurePage.tryFree")}
              </LocaleLink>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-4 border-2 border-gray-300 text-gray-700 font-bold rounded-full hover:bg-gray-50 transition-all"
            >
              {t("featurePage.chatbot.cta.watchDemo")}
            </Button>
          </div>
        </div>

        {/* Right - Chat Demo Mockup */}
        <div className="relative animate-fade-in" style={{ animationDelay: "0.5s" }}>
          {/* Blur background effect */}
          <div className="absolute -inset-10 bg-linear-to-tr from-[#22b5f8]/20 to-[#008bff]/20 blur-3xl rounded-full animate-pulse" />

          {/* Chat Interface */}
          <div className="relative bg-white/80 backdrop-blur-md rounded-3xl border border-gray-200/50 p-6 shadow-2xl overflow-hidden aspect-4/5 flex flex-col">
            {/* Chat Header */}
            <div className="flex items-center gap-3 pb-4 border-b border-gray-100">
              <div className="w-10 h-10 bg-[#22b5f8] rounded-full flex items-center justify-center shadow-lg">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-sm font-bold">
                  {t("featurePage.chatbot.demo.agentName")}
                </div>
                <div className="text-[10px] text-green-500 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                  {t("featurePage.chatbot.demo.status")}
                </div>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="grow pt-6 flex flex-col gap-6 overflow-auto">
              {/* User Question */}
              <div className="flex flex-col items-end gap-2 ml-12 animate-fade-in" style={{ animationDelay: "0.6s" }}>
                <div className="bg-gray-100 p-4 rounded-2xl rounded-tr-none text-sm shadow-md hover:shadow-lg transition-shadow">
                  {t("featurePage.chatbot.demo.message1")}
                </div>
                <span className="text-[10px] text-gray-400 font-medium uppercase">
                  {t("featurePage.chatbot.demo.label1")}
                </span>
              </div>

              {/* AI Response 1 */}
              <div className="flex flex-col items-start gap-2 mr-12 animate-fade-in" style={{ animationDelay: "0.7s" }}>
                <div className="bg-[#1c1c1c] text-white p-4 rounded-2xl rounded-tl-none text-sm shadow-md hover:shadow-lg transition-shadow leading-relaxed">
                  {t("featurePage.chatbot.demo.message2")}
                </div>
                <span className="text-[10px] text-[#22b5f8] font-bold uppercase tracking-widest flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  {t("featurePage.chatbot.demo.label2")}
                </span>
              </div>

              {/* User Request */}
              <div className="flex flex-col items-end gap-2 ml-12 animate-fade-in" style={{ animationDelay: "0.8s" }}>
                <div className="bg-gray-100 p-4 rounded-2xl rounded-tr-none text-sm shadow-md hover:shadow-lg transition-shadow">
                  {t("featurePage.chatbot.demo.message3")}
                </div>
              </div>

              {/* AI Response 2 - Success */}
              <div className="flex flex-col items-start gap-2 mr-12 animate-fade-in" style={{ animationDelay: "0.9s" }}>
                <div className="bg-linear-to-r from-[#22b5f8] to-[#008bff] text-white p-4 rounded-2xl rounded-tl-none text-sm shadow-md hover:shadow-lg transition-shadow font-medium">
                  {t("featurePage.chatbot.demo.message4")}
                </div>
                <div className="px-3 py-1 bg-green-500/10 text-green-600 rounded-full text-[10px] font-bold flex items-center gap-1 animate-pulse">
                  <Calendar className="w-3 h-3" />
                  {t("featurePage.chatbot.demo.label3")}
                </div>
              </div>
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
