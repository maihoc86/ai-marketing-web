"use client";

import { X, CheckCircle, Clock, Wand2 } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { useInView } from "@/hooks/use-in-view";

export function AIContentProblemsSection() {
  const { t } = useI18n();
  const { ref, isInView } = useInView();

  return (
    <section className="py-24 bg-white">
      <div ref={ref} className="container mx-auto px-6">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            {t("featurePage.content.problems.title")}
          </h2>
          <p className="text-gray-500">
            {t("featurePage.content.problems.subtitle")}
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* The Old Way */}
          <div
            className={`bg-gray-50 rounded-3xl p-8 border border-red-100 transition-all duration-700 ${
              isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-16"
            }`}
            style={{ transitionDelay: "0.2s" }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="size-10 rounded-full bg-red-100 flex items-center justify-center text-red-600">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-red-700">
                {t("featurePage.content.problems.oldWay.title")}
              </h3>
            </div>

            <ul className="space-y-6">
              <li className="flex items-start gap-3">
                <X className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-gray-700">
                    {t("featurePage.content.problems.oldWay.problem1.title")}
                  </p>
                  <p className="text-sm text-gray-500">
                    {t("featurePage.content.problems.oldWay.problem1.desc")}
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <X className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-gray-700">
                    {t("featurePage.content.problems.oldWay.problem2.title")}
                  </p>
                  <p className="text-sm text-gray-500">
                    {t("featurePage.content.problems.oldWay.problem2.desc")}
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <X className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-gray-700">
                    {t("featurePage.content.problems.oldWay.problem3.title")}
                  </p>
                  <p className="text-sm text-gray-500">
                    {t("featurePage.content.problems.oldWay.problem3.desc")}
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* The DXAI Way */}
          <div
            className={`bg-[#1f3b61] rounded-3xl p-8 shadow-2xl shadow-[#1f3b61]/10 transition-all duration-700 ${
              isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-16"
            }`}
            style={{ transitionDelay: "0.2s" }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="size-10 rounded-full bg-green-400/20 flex items-center justify-center text-green-400">
                <Wand2 className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white">
                {t("featurePage.content.problems.dxaiWay.title")}
              </h3>
            </div>

            <ul className="space-y-6 text-white/90">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold">
                    {t("featurePage.content.problems.dxaiWay.solution1.title")}
                  </p>
                  <p className="text-sm text-white/60">
                    {t("featurePage.content.problems.dxaiWay.solution1.desc")}
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold">
                    {t("featurePage.content.problems.dxaiWay.solution2.title")}
                  </p>
                  <p className="text-sm text-white/60">
                    {t("featurePage.content.problems.dxaiWay.solution2.desc")}
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold">
                    {t("featurePage.content.problems.dxaiWay.solution3.title")}
                  </p>
                  <p className="text-sm text-white/60">
                    {t("featurePage.content.problems.dxaiWay.solution3.desc")}
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
