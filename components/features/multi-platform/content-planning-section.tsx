"use client";

import { useI18n } from "@/lib/i18n";
import { Calendar, Clock, Edit } from "lucide-react";

export function MultiPlatformContentPlanningSection() {
  const { t } = useI18n();

  return (
    <section className="py-24 bg-primary/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white px-3 py-1 mb-4">
            <Calendar className="h-4 w-4 text-primary" />
            <span className="text-xs font-semibold uppercase tracking-wide text-primary">
              {t("featurePage.multiPlatform.contentPlanning.badge")}
            </span>
          </div>
          <h2 className="text-3xl font-extrabold text-[#0d171c] sm:text-4xl mb-4">
            {t("featurePage.multiPlatform.contentPlanning.title")}
          </h2>
          <p className="text-lg text-gray-600">
            {t("featurePage.multiPlatform.contentPlanning.subtitle")}
          </p>
        </div>

        {/* Calendar UI */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 overflow-x-auto">
          <div className="min-w-[800px]">
            <div className="grid grid-cols-7 gap-4 mb-4 text-center">
              {["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"].map((day) => (
                <div key={day} className="text-sm font-bold text-gray-400">
                  {day}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-4">
              {/* Empty Day */}
              <div className="h-40 rounded-xl bg-gray-50 border border-dashed border-gray-200 p-2">
                <span className="text-gray-400 text-sm">01</span>
              </div>

              {/* Day with Scheduled Post */}
              <div className="h-40 rounded-xl bg-white border border-gray-200 p-2 shadow-sm hover:shadow-md transition-shadow relative group">
                <span className="text-gray-900 font-bold text-sm">02</span>
                <div className="mt-2 bg-blue-50 border-l-4 border-blue-500 p-2 rounded text-xs cursor-pointer hover:bg-blue-100">
                  <div className="font-bold text-blue-700 truncate">
                    {t("featurePage.multiPlatform.contentPlanning.post1.title")}
                  </div>
                  <div className="text-blue-500 mt-1 flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {t("featurePage.multiPlatform.contentPlanning.post1.time")}
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="bg-gray-900 text-white rounded-full p-1">
                    <Edit className="h-3 w-3" />
                  </button>
                </div>
              </div>

              <div className="h-40 rounded-xl bg-gray-50 border border-dashed border-gray-200 p-2">
                <span className="text-gray-400 text-sm">03</span>
              </div>

              {/* Day with Multiple Posts */}
              <div className="h-40 rounded-xl bg-white border border-gray-200 p-2 shadow-sm relative">
                <span className="text-gray-900 font-bold text-sm">04</span>
                <div className="mt-2 bg-orange-50 border-l-4 border-secondary p-2 rounded text-xs mb-1 cursor-pointer">
                  <div className="font-bold text-orange-700 truncate">
                    {t("featurePage.multiPlatform.contentPlanning.post2.title")}
                  </div>
                  <div className="text-orange-500 mt-1 flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {t("featurePage.multiPlatform.contentPlanning.post2.time")}
                  </div>
                </div>
                <div className="bg-gray-100 border-l-4 border-gray-400 p-2 rounded text-xs opacity-60">
                  <div className="font-bold text-gray-600 truncate">
                    {t("featurePage.multiPlatform.contentPlanning.post3.title")}
                  </div>
                </div>
              </div>

              {[5, 6, 7].map((day) => (
                <div
                  key={day}
                  className="h-40 rounded-xl bg-gray-50 border border-dashed border-gray-200 p-2"
                >
                  <span className="text-gray-400 text-sm">0{day}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
