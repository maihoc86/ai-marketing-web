"use client";

import { useI18n } from "@/lib/i18n";
import { useQuery } from "@tanstack/react-query";
import { rateLimitsQueryOptions } from "@/lib/queries/rate-limits";

export default function GenerationProgress() {
  const { t } = useI18n();

  const {
    data: rateLimits,
    isLoading,
    error,
  } = useQuery(rateLimitsQueryOptions);

  // Calculate percentage based on remaining/limit
  const percent = rateLimits
    ? Math.round((rateLimits.remaining / rateLimits.limit) * 100)
    : 0;

  const displayText =
    rateLimits && `${rateLimits.remaining}/${rateLimits.limit}`;

  if (error)
    return (
      <p>
        {t("featurePage.content.demo.error")}: {error?.message}
      </p>
    );

  return (
    !isLoading && (
      <div className="space-y-2">
        <div className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
          {t("featurePage.content.demo.freeRemaining", {
            value: displayText || "",
          })}
        </div>
        <div className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-primary rounded-full transition-all duration-300"
            style={{ width: `${percent}%` }}
          />
        </div>
      </div>
    )
  );
}
