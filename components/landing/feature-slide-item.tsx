"use client";

import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export default function FeatureSlideItem({
  nameKey,
  descKey,
  Icon,
  iconBg,
  iconColor,
}: {
  nameKey: string;
  descKey: string;
  Icon: React.ElementType;
  iconBg: string;
  iconColor: string;
}) {
  const { t } = useI18n();

  return (
    <div className="relative shadow-sm flex items-center gap-3 p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors min-h-19">
      <div
        className={cn(
          "w-10 h-10 rounded-lg flex items-center justify-center shrink-0",
        )}
        style={{ backgroundColor: iconBg }}
      >
        <Icon className="w-5 h-5" style={{ color: iconColor }} />
      </div>
      <div className="min-w-0">
        <p className="text-sm font-semibold text-gray-900">{t(nameKey)}</p>
        <p className="text-xs text-gray-500">{t(descKey)}</p>
      </div>
    </div>
  );
}
