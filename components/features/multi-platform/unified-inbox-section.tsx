"use client";

import { useI18n } from "@/lib/i18n";
import { Inbox, Check, MoreHorizontal } from "lucide-react";

export function MultiPlatformUnifiedInboxSection() {
  const { t } = useI18n();

  return (
    <section className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Inbox UI Mockup */}
          <div className="flex-1 order-2 lg:order-1">
            <div className="rounded-2xl bg-white shadow-xl border border-gray-200 p-2 overflow-hidden">
              <div className="flex h-[450px] bg-white rounded-xl overflow-hidden">
                {/* Sidebar List */}
                <div className="w-1/3 border-r border-gray-100 bg-gray-50 flex flex-col">
                  <div className="p-4 border-b border-gray-100">
                    <div className="h-8 bg-gray-200 rounded w-2/3"></div>
                  </div>
                  <div className="flex-1 overflow-y-auto p-2 space-y-2">
                    <div className="bg-white p-3 rounded-lg shadow-sm border border-gray-100 flex gap-3 items-center">
                      <div className="size-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs">
                        A
                      </div>
                      <div className="flex-1">
                        <div className="h-3 bg-gray-200 rounded w-3/4 mb-1"></div>
                        <div className="h-2 bg-gray-100 rounded w-1/2"></div>
                      </div>
                      <div className="size-2 rounded-full bg-secondary"></div>
                    </div>
                    <div className="p-3 rounded-lg flex gap-3 items-center opacity-60">
                      <div className="size-8 rounded-full bg-pink-100"></div>
                      <div className="flex-1">
                        <div className="h-3 bg-gray-200 rounded w-3/4 mb-1"></div>
                        <div className="h-2 bg-gray-100 rounded w-1/2"></div>
                      </div>
                    </div>
                    <div className="p-3 rounded-lg flex gap-3 items-center opacity-60">
                      <div className="size-8 rounded-full bg-green-100"></div>
                      <div className="flex-1">
                        <div className="h-3 bg-gray-200 rounded w-3/4 mb-1"></div>
                        <div className="h-2 bg-gray-100 rounded w-1/2"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Chat Area */}
                <div className="w-2/3 flex flex-col bg-white">
                  <div className="p-4 border-b border-gray-100 flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div className="size-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">
                        A
                      </div>
                      <div className="h-4 bg-gray-200 rounded w-24"></div>
                    </div>
                    <MoreHorizontal className="text-gray-400 h-5 w-5" />
                  </div>
                  <div className="flex-1 p-4 space-y-4">
                    <div className="flex gap-2">
                      <div className="bg-gray-100 rounded-2xl rounded-tl-none p-3 max-w-[80%]">
                        <div className="h-2 bg-gray-300 rounded w-32 mb-1"></div>
                        <div className="h-2 bg-gray-300 rounded w-20"></div>
                      </div>
                    </div>
                    <div className="flex gap-2 justify-end">
                      <div className="bg-primary text-white rounded-2xl rounded-tr-none p-3 max-w-[80%]">
                        <div className="h-2 bg-white/50 rounded w-40 mb-1"></div>
                        <div className="h-2 bg-white/50 rounded w-24"></div>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 border-t border-gray-100">
                    <div className="h-10 bg-gray-50 rounded-lg border border-gray-200 flex items-center px-4">
                      <div className="h-2 bg-gray-300 rounded w-32"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="flex-1 order-1 lg:order-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="flex size-8 items-center justify-center rounded-lg bg-secondary/10 text-secondary">
                <Inbox className="h-5 w-5" />
              </span>
              <span className="text-sm font-bold uppercase tracking-wide text-secondary">
                {t("featurePage.multiPlatform.unifiedInbox.badge")}
              </span>
            </div>
            <h2 className="text-3xl font-extrabold text-[#0d171c] sm:text-4xl mb-6">
              {t("featurePage.multiPlatform.unifiedInbox.title")}
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              {t("featurePage.multiPlatform.unifiedInbox.description")}
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <span className="text-gray-700">
                  {t("featurePage.multiPlatform.unifiedInbox.feature1")}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <span className="text-gray-700">
                  {t("featurePage.multiPlatform.unifiedInbox.feature2")}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <span className="text-gray-700">
                  {t("featurePage.multiPlatform.unifiedInbox.feature3")}
                </span>
              </li>
            </ul>
            <button className="flex h-11 items-center justify-center rounded-lg border border-gray-200 bg-white px-6 text-sm font-bold text-[#0d171c] hover:border-primary hover:text-primary transition-colors">
              {t("featurePage.multiPlatform.unifiedInbox.cta")}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
