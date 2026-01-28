"use client";

import { Check, Star } from "lucide-react";

export function RegistrationLeftPanel({ t }: { t: (k: string) => string }) {
  const benefits = [
    t("registration.form.benefit1"),
    t("registration.form.benefit2"),
    t("registration.form.benefit3"),
  ];

  return (
    <div className="w-full lg:w-[40%] bg-[#f5f5f5] p-8 lg:p-12 xl:p-16 flex flex-col justify-between border-r border-gray-100">
      <div className="flex flex-col gap-8">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#22b5f8] text-white text-sm font-semibold rounded-full">
            <Star className="w-4 h-4" aria-hidden="true" />
            {t("registration.form.trial")}
          </div>
          <h1 className="text-3xl lg:text-4xl font-extrabold leading-tight text-gray-900">
            {t("registration.form.hero.title")}
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            {t("registration.form.hero.subtitle")}
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {benefits.map((b, i) => (
            <div key={i} className="flex gap-x-3 items-center">
              <div className="bg-[#22b5f8]/10 p-1.5 rounded-full">
                <Check className="w-4 h-4 text-[#22b5f8]" aria-hidden="true" />
              </div>
              <p className="text-base font-medium text-gray-900">{b}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 lg:mt-0">
        <div className="flex items-center gap-4 mb-3">
          <div className="flex -space-x-3">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="size-10 rounded-full border-2 border-white bg-gray-200 bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://ui-avatars.com/api/?name=User+${i}&background=random')`,
                }}
              />
            ))}
            <div className="size-10 rounded-full border-2 border-white bg-[#22b5f8]/10 flex items-center justify-center text-xs font-bold text-[#22b5f8]">
              +200
            </div>
          </div>
          <div>
            <div className="flex text-yellow-500">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-current"
                  aria-hidden="true"
                />
              ))}
            </div>
            <p className="text-xs font-semibold text-gray-500">
              {t("registration.form.rating")}
            </p>
          </div>
        </div>
        <p className="text-sm italic text-gray-600">
          &quot;{t("registration.form.testimonial")}&quot;
        </p>
      </div>
    </div>
  );
}
