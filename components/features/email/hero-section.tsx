"use client";

import { useI18n } from "@/lib/i18n";
import Image from "next/image";
import { Mail, Check, ArrowDown, Play, Clock, Sparkles } from "lucide-react";
import { LocaleLink } from "@/components/locale-link";
import { Button } from "@/components/ui/button";

export function EmailHeroSection() {
  const { t } = useI18n();

  return (
    <section className="relative pt-16 pb-20 lg:pt-24 lg:pb-32 overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-background-dark bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      {/* Gradient Blur */}
      <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/20 opacity-20 blur-[100px]"></div>

      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-6 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center self-center lg:self-start gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary">
              <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
              {t("featurePage.email.hero.badge")}
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 leading-[1.15]">
              {t("featurePage.email.hero.title.part1")}{" "}
              <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                {t("featurePage.email.hero.title.part2")}
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {t("featurePage.email.hero.description")}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-2">
              <Button
                size="lg"
                className="btn-primary-light w-40 rounded-full"
                asChild
              >
                <LocaleLink href="/register">
                  <Sparkles className="size-5 mr-2" />
                  {t("featurePage.tryFree")}
                </LocaleLink>
              </Button>
            </div>
          </div>

          {/* Right Image/Demo */}
          <div className="relative w-full aspect-square lg:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-gray-50">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>

            {/* Workflow Card Overlay */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] bg-white rounded-xl shadow-xl border border-gray-200 p-4">
              <div className="flex items-center gap-3 mb-4 border-b border-gray-100 pb-3">
                <div className="size-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                  <Check className="size-5" />
                </div>
                <div>
                  <div className="text-sm font-bold">
                    {t("featurePage.email.hero.workflow.status")}
                  </div>
                  <div className="text-xs text-gray-500">
                    {t("featurePage.email.hero.workflow.lastRun")}
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-100">
                  <div className="flex items-center gap-3">
                    <Mail className="size-5 text-primary" />
                    <span className="text-sm font-medium">
                      {t("featurePage.email.hero.workflow.step1")}
                    </span>
                  </div>
                  <span className="text-xs font-bold text-gray-500">
                    {t("featurePage.email.hero.workflow.sent")}
                  </span>
                </div>

                <div className="flex justify-center">
                  <ArrowDown className="size-5 text-gray-300" />
                </div>

                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-100">
                  <div className="flex items-center gap-3">
                    <Clock className="size-5 text-secondary" />
                    <span className="text-sm font-medium">
                      {t("featurePage.email.hero.workflow.step2")}
                    </span>
                  </div>
                  <span className="text-xs font-bold text-gray-500">
                    {t("featurePage.email.hero.workflow.completed")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
