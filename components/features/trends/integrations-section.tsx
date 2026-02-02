"use client";

import { FaTiktok, FaInstagram, FaYoutube, FaLinkedin, FaFacebook } from "react-icons/fa";
import { useI18n } from "@/lib/i18n";
import { useInView } from "@/hooks/use-in-view";

const integrations = [
  {
    name: "TikTok",
    icon: FaTiktok,
    color: "bg-black text-white",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    color: "bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 text-white",
  },
  {
    name: "YouTube Shorts",
    icon: FaYoutube,
    color: "bg-red-600 text-white",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    color: "bg-[#0077b5] text-white",
  },
  {
    name: "Facebook",
    icon: FaFacebook,
    color: "bg-[#1877f2] text-white",
  },
];

export function TrendsIntegrationsSection() {
  const { t } = useI18n();
  const { ref, isInView } = useInView();

  return (
    <section className="py-16 bg-white">
      <div ref={ref} className="container mx-auto px-4">
        {/* Section Header */}
        <div
          className={`flex flex-col items-center mb-10 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center">
            {t("featurePage.trends.integrations.title")}
          </h2>
          <p className="text-gray-600 mt-2 text-center">
            {t("featurePage.trends.integrations.subtitle")}
          </p>
        </div>

        {/* Integrations Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
          {integrations.map((integration, idx) => {
            const IntegrationIcon = integration.icon;

            return (
              <div
                key={idx}
                className={`flex flex-col items-center justify-center gap-3 p-6 rounded-2xl border border-gray-200 bg-white hover:border-primary/50 hover:shadow-lg transition-all duration-500 group ${
                  isInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${0.05 * idx}s` }}
              >
                <div
                  className={`size-12 rounded-full ${integration.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                >
                  <IntegrationIcon className="w-5 h-5" />
                </div>
                <span className="font-semibold text-gray-900 text-sm">
                  {integration.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
