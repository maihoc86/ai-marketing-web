"use client";

import { useI18n } from "@/lib/i18n";
import { useInView } from "@/hooks/use-in-view";

export function AIContentMetricsSection() {
  const { t } = useI18n();
  const { ref, isInView } = useInView();

  const metrics = [
    {
      value: "30 sec",
      labelKey: "featurePage.content.metrics.speed.label",
      descKey: "featurePage.content.metrics.speed.desc",
    },
    {
      value: "4K",
      labelKey: "featurePage.content.metrics.quality.label",
      descKey: "featurePage.content.metrics.quality.desc",
    },
    {
      value: "$0",
      labelKey: "featurePage.content.metrics.cost.label",
      descKey: "featurePage.content.metrics.cost.desc",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div ref={ref} className="container mx-auto px-6 text-center">
        <h2
          className={`text-3xl md:text-4xl font-black mb-16 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {t("featurePage.content.metrics.title")}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className={`p-8 rounded-2xl border border-gray-50 hover:bg-gray-50 transition-all duration-500 group ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${0.1 + index * 0.15}s` }}
            >
              {/* Big Number */}
              <div className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-linear-to-r from-[#22b5f8] to-[#008bff] mb-4">
                {metric.value}
              </div>

              {/* Label */}
              <div className="text-xl font-bold mb-2">
                {t(metric.labelKey)}
              </div>

              {/* Description */}
              <p className="text-gray-500">
                {t(metric.descKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
