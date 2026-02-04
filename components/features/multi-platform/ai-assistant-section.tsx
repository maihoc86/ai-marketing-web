"use client";

import { useI18n } from "@/lib/i18n";
import { Sparkles, Bot, RefreshCw } from "lucide-react";

export function MultiPlatformAIAssistantSection() {
  const { t } = useI18n();

  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Text Content */}
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-purple-50 px-3 py-1 mb-4">
              <Sparkles className="h-4 w-4 text-purple-600" />
              <span className="text-xs font-semibold uppercase tracking-wide text-purple-600">
                {t("featurePage.multiPlatform.aiAssistant.badge")}
              </span>
            </div>
            <h2 className="text-3xl font-extrabold text-[#0d171c] sm:text-4xl mb-6">
              {t("featurePage.multiPlatform.aiAssistant.title")}
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              {t("featurePage.multiPlatform.aiAssistant.description")}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-gray-50 border border-gray-100">
                <div className="font-bold text-gray-900 mb-1">
                  {t("featurePage.multiPlatform.aiAssistant.feature1.name")}
                </div>
                <p className="text-sm text-gray-600">
                  {t("featurePage.multiPlatform.aiAssistant.feature1.desc")}
                </p>
              </div>
              <div className="p-4 rounded-lg bg-gray-50 border border-gray-100">
                <div className="font-bold text-gray-900 mb-1">
                  {t("featurePage.multiPlatform.aiAssistant.feature2.name")}
                </div>
                <p className="text-sm text-gray-600">
                  {t("featurePage.multiPlatform.aiAssistant.feature2.desc")}
                </p>
              </div>
            </div>
          </div>

          {/* Chatbot Illustration */}
          <div className="flex-1 w-full max-w-md">
            <div className="bg-white rounded-2xl shadow-xl border border-purple-100 p-6 relative">
              {/* User Comment */}
              <div className="flex gap-4 mb-6">
                <div className="size-10 rounded-full bg-gray-200 shrink-0"></div>
                <div className="flex-1">
                  <div className="bg-gray-100 rounded-2xl rounded-tl-none p-4">
                    <p className="text-sm text-gray-800">
                      {t("featurePage.multiPlatform.aiAssistant.userComment")}
                    </p>
                  </div>
                  <div className="text-xs text-gray-400 mt-1 pl-2">
                    {t("featurePage.multiPlatform.aiAssistant.justNow")}
                  </div>
                </div>
              </div>

              {/* Processing Indicator */}
              <div className="flex justify-center mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-50 rounded-full text-purple-600 text-xs font-medium">
                  <RefreshCw className="h-4 w-4 animate-spin" />
                  {t("featurePage.multiPlatform.aiAssistant.processing")}
                </div>
              </div>

              {/* AI Reply */}
              <div className="flex gap-4 justify-end">
                <div className="flex-1">
                  <div className="bg-gradient-to-br from-purple-500 to-indigo-600 text-white rounded-2xl rounded-tr-none p-4 shadow-lg">
                    <div className="flex items-center gap-2 mb-2 border-b border-white/20 pb-2">
                      <Bot className="h-4 w-4" />
                      <span className="text-xs font-bold uppercase">
                        {t("featurePage.multiPlatform.aiAssistant.botLabel")}
                      </span>
                    </div>
                    <p className="text-sm">
                      {t("featurePage.multiPlatform.aiAssistant.botReply")}
                    </p>
                  </div>
                  <div className="text-xs text-gray-400 mt-1 text-right pr-2">
                    {t("featurePage.multiPlatform.aiAssistant.autoSent")}
                  </div>
                </div>
                <div className="size-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 shrink-0 border border-purple-200">
                  <Bot className="h-6 w-6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
