"use client";

import { useI18n } from "@/lib/i18n";
import {
  MailCheck,
  Bell,
  MessageSquare,
  RotateCcw,
  ArrowRight,
} from "lucide-react";
import { LocaleLink } from "@/components/locale-link";

const steps = [
  {
    icon: MailCheck,
    nameKey: "featurePage.email.journey.step1.name",
    items: [
      "featurePage.email.journey.step1.item1",
      "featurePage.email.journey.step1.item2",
    ],
    isActive: true,
  },
  {
    icon: Bell,
    nameKey: "featurePage.email.journey.step2.name",
    items: [
      "featurePage.email.journey.step2.item1",
      "featurePage.email.journey.step2.item2",
    ],
    isActive: false,
  },
  {
    icon: MessageSquare,
    nameKey: "featurePage.email.journey.step3.name",
    items: [
      "featurePage.email.journey.step3.item1",
      "featurePage.email.journey.step3.item2",
    ],
    isActive: false,
  },
  {
    icon: RotateCcw,
    nameKey: "featurePage.email.journey.step4.name",
    items: [
      "featurePage.email.journey.step4.item1",
      "featurePage.email.journey.step4.item2",
    ],
    isActive: false,
  },
];

export function EmailJourneyTimelineSection() {
  const { t } = useI18n();

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-xl text-center mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t("featurePage.email.journey.title")}
            </h2>
            <p className="text-gray-600">
              {t("featurePage.email.journey.subtitle")}
            </p>
          </div>
        </div>

        <div className="relative mt-12">
          {/* Timeline line */}
          <div className="absolute top-8 left-0 w-full h-1 bg-gray-200 hidden md:block"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative flex flex-col items-center md:items-start text-center md:text-left group"
              >
                <div
                  className={`relative z-10 flex h-16 w-16 items-center justify-center rounded-full border-4 border-white shadow-lg mb-6 transition-transform group-hover:scale-110 ${
                    step.isActive
                      ? "bg-secondary text-white"
                      : "bg-white text-gray-600 border-gray-200 group-hover:border-secondary group-hover:text-secondary"
                  }`}
                >
                  <step.icon className="size-6" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {index + 1}. {t(step.nameKey)}
                </h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  {step.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex items-center justify-center md:justify-start gap-2"
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          step.isActive
                            ? "bg-secondary"
                            : "bg-gray-300 group-hover:bg-secondary/50"
                        } transition-colors`}
                      ></span>
                      {t(item)}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
