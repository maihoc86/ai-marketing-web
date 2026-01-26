"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { useI18n } from "@/lib/i18n";

export function FaqOpturaStyle() {
  const [openId, setOpenId] = useState<string>("faq1");
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { t } = useI18n();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
      },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const faqs = [
    {
      id: "faq1",
      questionKey: "faq.q1",
      answerKey: "faq.a1",
    },
    {
      id: "faq2",
      questionKey: "faq.q2",
      answerKey: "faq.a2",
    },
    {
      id: "faq3",
      questionKey: "faq.q3",
      answerKey: "faq.a3",
    },
    {
      id: "faq4",
      questionKey: "faq.q4",
      answerKey: "faq.a4",
    },
    {
      id: "faq5",
      questionKey: "faq.q5",
      answerKey: "faq.a5",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-32 bg-gradient-optura-subtle relative overflow-hidden font-sans"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 bg-dot-pattern opacity-20" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-15" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-cyan-200 rounded-full blur-3xl opacity-15" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-linear-to-br from-blue-500 to-cyan-500 mb-6 shadow-optura">
            <HelpCircle className="w-8 h-8 text-white" />
          </div>
          <h2 className="font-serif text-display-md font-bold text-gray-900 mb-4">
            {t("faq.title") || "Câu hỏi"}{" "}
            <span className="italic text-gradient">
              {t("faq.titleHighlight") || "thường gặp"}
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-700">
            {t("faq.subtitle") ||
              "Tìm câu trả lời cho những câu hỏi phổ biến nhất"}
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className={`glass-card rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-optura-lg ${
                  isVisible ? "animate-fade-up" : "opacity-0"
                }`}
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <button
                  onClick={() => setOpenId(isOpen ? "" : faq.id)}
                  className="w-full flex items-start gap-4 p-6 text-left group"
                  aria-expanded={isOpen}
                >
                  {/* Number badge */}
                  <div
                    className={cn(
                      "flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm transition-all",
                      isOpen
                        ? "bg-linear-to-br from-blue-500 to-cyan-500 text-white shadow-optura"
                        : "bg-blue-100 text-blue-600 group-hover:bg-blue-200",
                    )}
                  >
                    {index + 1}
                  </div>

                  {/* Question */}
                  <div className="flex-1">
                    <h3
                      className={cn(
                        "font-serif text-lg md:text-xl font-bold transition-colors",
                        isOpen
                          ? "text-gradient"
                          : "text-gray-900 group-hover:text-blue-600",
                      )}
                    >
                      {t(faq.questionKey)}
                    </h3>
                  </div>

                  {/* Chevron */}
                  <div
                    className={cn(
                      "flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all",
                      isOpen
                        ? "bg-blue-100 rotate-180"
                        : "bg-gray-100 group-hover:bg-blue-50",
                    )}
                  >
                    <ChevronDown
                      className={cn(
                        "w-5 h-5 transition-colors",
                        isOpen ? "text-blue-600" : "text-gray-600",
                      )}
                    />
                  </div>
                </button>

                {/* Answer */}
                <div
                  className={cn(
                    "overflow-hidden transition-all duration-300",
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
                  )}
                >
                  <div className="px-6 pb-6 pl-20">
                    <p className="text-gray-700 leading-relaxed">
                      {t(faq.answerKey)}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
      </div>
    </section>
  );
}
