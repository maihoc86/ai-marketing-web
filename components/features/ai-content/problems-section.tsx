"use client";

import { X, CheckCircle } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export function AIContentProblemsSection() {
  const { t } = useI18n();

  // Unified items array for 2x2 grid
  const items = [
    {
      type: "problem",
      titleKey: "featurePage.content.problems.oldWay.problem1.title",
      descKey: "featurePage.content.problems.oldWay.problem1.desc",
    },
    {
      type: "solution",
      titleKey: "featurePage.content.problems.dxaiWay.solution1.title",
      descKey: "featurePage.content.problems.dxaiWay.solution1.desc",
    },
    {
      type: "problem",
      titleKey: "featurePage.content.problems.oldWay.problem2.title",
      descKey: "featurePage.content.problems.oldWay.problem2.desc",
    },
    {
      type: "solution",
      titleKey: "featurePage.content.problems.dxaiWay.solution2.title",
      descKey: "featurePage.content.problems.dxaiWay.solution2.desc",
    },
  ];

  return (
    <section className="bg-white py-16 md:py-24 border-y border-gray-100">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            {t("featurePage.content.problems.title")}
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto text-lg">
            {t("featurePage.content.problems.subtitle")}
          </p>
        </div>

        {/* Grid Header */}
        <div className="grid md:grid-cols-2 gap-px bg-gray-200 rounded-t-3xl overflow-hidden border border-gray-200 shadow-lg">
          <div className="bg-white py-4 px-8 md:px-10 flex items-center justify-center gap-3 font-bold text-secondary text-lg tracking-wide border-b border-gray-200">
            <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
              <X className="w-5 h-5 text-(--color-secondary)" />
            </div>
            <div>{t("featurePage.content.problems.oldWay.header")}</div>
          </div>
          <div className="bg-white py-4 px-8 md:px-10 flex items-center justify-center gap-3 font-bold text-primary text-lg tracking-wide border-b border-gray-200">
            <div className="w-10 h-10 rounded-full bg-(--color-primary)/10 flex items-center justify-center">
              <CheckCircle className="w-5 h-5 text-(--color-primary)" />
            </div>
            <div>{t("featurePage.content.problems.dxaiWay.header")}</div>
          </div>
        </div>
        {/* 2x2 Grid */}
        <div className="grid md:grid-cols-2 gap-px bg-gray-200 rounded-b-3xl overflow-hidden border-x border-b border-gray-200 shadow-lg">
          {items.map((item, index) => {
            const isProblem = item.type === "problem";

            return (
              <div
                key={index}
                className="bg-white p-8 md:p-10 hover:bg-gray-50 transition-colors animate-fade-in"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <h4
                  className={`text-lg font-bold mb-2 ${isProblem ? "text-secondary" : "text-primary"}`}
                >
                  {t(item.titleKey)}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {t(item.descKey)}
                </p>
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
