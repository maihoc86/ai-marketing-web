"use client";

import { Brain, Globe, Target, ArrowRight, Terminal } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { useInView } from "@/hooks/use-in-view";

const specs = [
  {
    icon: Brain,
    titleKey: "featurePage.trends.techSpecs.aiRouting.title",
    descKey: "featurePage.trends.techSpecs.aiRouting.desc",
  },
  {
    icon: Globe,
    titleKey: "featurePage.trends.techSpecs.languages.title",
    descKey: "featurePage.trends.techSpecs.languages.desc",
  },
  {
    icon: Target,
    titleKey: "featurePage.trends.techSpecs.accuracy.title",
    descKey: "featurePage.trends.techSpecs.accuracy.desc",
  },
];

export function TrendsTechSpecsSection() {
  const { t } = useI18n();
  const { ref, isInView } = useInView();

  return (
    <section className="py-20 bg-tertiary text-white">
      <div ref={ref} className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left: Text Specs */}
          <div
            className={`flex flex-col gap-6 transition-all duration-700 ${
              isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="inline-flex items-center gap-2 text-primary font-mono text-sm tracking-wider uppercase">
              <Terminal className="w-4 h-4" />
              {t("featurePage.trends.techSpecs.badge")}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">
              {t("featurePage.trends.techSpecs.title")}
            </h2>
            <p className="text-white/70 text-lg">
              {t("featurePage.trends.techSpecs.subtitle")}
            </p>

            <div className="flex flex-col gap-5 mt-4">
              {specs.map((spec, idx) => {
                const SpecIcon = spec.icon;

                return (
                  <div
                    key={idx}
                    className={`flex items-start gap-4 transition-all duration-500 ${
                      isInView
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4"
                    }`}
                    style={{ transitionDelay: `${0.1 * idx + 0.3}s` }}
                  >
                    <div className="rounded-full bg-primary/20 p-3 text-primary shrink-0">
                      <SpecIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-white">
                        {t(spec.titleKey)}
                      </h3>
                      <p className="text-white/60 text-sm">
                        {t(spec.descKey)}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-6">
              <a
                href="#"
                className="text-white border-b border-primary pb-1 hover:text-primary transition-colors inline-flex items-center gap-2 font-medium"
              >
                {t("featurePage.trends.techSpecs.apiDocs")}
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right: Code Snippet */}
          <div
            className={`rounded-2xl overflow-hidden bg-[#0d1117] border border-gray-800 shadow-2xl transition-all duration-700 ${
              isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
            style={{ transitionDelay: "0.2s" }}
          >
            {/* Terminal Header */}
            <div className="flex items-center gap-2 px-4 py-3 bg-[#161b22] border-b border-gray-800">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="ml-2 text-xs text-gray-500 font-mono">
                api-request.js
              </span>
            </div>

            {/* Code */}
            <div className="p-6 overflow-x-auto font-mono text-sm leading-relaxed">
              <pre className="text-gray-300">
                <code>
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-blue-400">response</span>{" "}
                  <span className="text-white">=</span>{" "}
                  <span className="text-purple-400">await</span>{" "}
                  <span className="text-white">uniksmart.</span>
                  <span className="text-yellow-300">predict</span>
                  <span className="text-white">({"{"}</span>
                  {"\n"}
                  {"  "}
                  <span className="text-green-400">topic:</span>{" "}
                  <span className="text-orange-300">
                    &quot;sustainable_fashion&quot;
                  </span>
                  <span className="text-white">,</span>
                  {"\n"}
                  {"  "}
                  <span className="text-green-400">platforms:</span>{" "}
                  <span className="text-white">[</span>
                  <span className="text-orange-300">
                    &quot;tiktok&quot;
                  </span>
                  <span className="text-white">,</span>{" "}
                  <span className="text-orange-300">
                    &quot;instagram&quot;
                  </span>
                  <span className="text-white">],</span>
                  {"\n"}
                  {"  "}
                  <span className="text-green-400">min_virality_score:</span>{" "}
                  <span className="text-blue-300">90</span>
                  {"\n"}
                  <span className="text-white">{"})"}</span>
                  <span className="text-white">;</span>
                  {"\n"}
                  {"\n"}
                  <span className="text-gray-500">{"// Response"}</span>
                  {"\n"}
                  <span className="text-white">{"{"}</span>
                  {"\n"}
                  {"  "}
                  <span className="text-green-400">
                    &quot;prediction&quot;
                  </span>
                  <span className="text-white">:</span>{" "}
                  <span className="text-orange-300">
                    &quot;Rising Trend&quot;
                  </span>
                  <span className="text-white">,</span>
                  {"\n"}
                  {"  "}
                  <span className="text-green-400">
                    &quot;confidence&quot;
                  </span>
                  <span className="text-white">:</span>{" "}
                  <span className="text-blue-300">0.94</span>
                  <span className="text-white">,</span>
                  {"\n"}
                  {"  "}
                  <span className="text-green-400">
                    &quot;projected_views&quot;
                  </span>
                  <span className="text-white">:</span>{" "}
                  <span className="text-orange-300">
                    &quot;250k - 500k&quot;
                  </span>
                  <span className="text-white">,</span>
                  {"\n"}
                  {"  "}
                  <span className="text-green-400">
                    &quot;key_hooks&quot;
                  </span>
                  <span className="text-white">:</span>{" "}
                  <span className="text-white">[</span>
                  {"\n"}
                  {"    "}
                  <span className="text-orange-300">
                    &quot;Eco-luxury minimalist&quot;
                  </span>
                  <span className="text-white">,</span>
                  {"\n"}
                  {"    "}
                  <span className="text-orange-300">
                    &quot;Thrift flip challenge&quot;
                  </span>
                  {"\n"}
                  {"  "}
                  <span className="text-white">]</span>
                  {"\n"}
                  <span className="text-white">{"}"}</span>
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
