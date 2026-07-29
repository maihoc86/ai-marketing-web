import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

// ============================================================
// TYPES
// ============================================================
export type LegalTheme = "blue" | "emerald";

export interface LegalTocItem {
  id: string;
  title: string;
}

interface LegalHeroProps {
  theme: LegalTheme;
  title: string;
  subtitle?: string;
  meta: string;
  backHref: string;
  backLabel: string;
  icon?: ReactNode;
}

interface LegalSectionProps {
  id: string;
  title: string;
  children: ReactNode;
}

interface LegalCalloutProps {
  tone?: "amber" | "blue" | "emerald";
  children: ReactNode;
}

interface LegalTocProps {
  theme: LegalTheme;
  title: string;
  items: readonly LegalTocItem[];
}

interface LegalContactCardProps {
  company: string;
  address: string;
  email: string;
  phone?: string;
  website?: string;
  extraRows?: readonly { label: string; value: ReactNode }[];
  labels: {
    address: string;
    email: string;
    phone: string;
    website: string;
  };
}

interface LegalListProps {
  items: readonly ReactNode[];
  variant?: "plain" | "disc";
  className?: string;
}

// ============================================================
// CONSTANTS
// ============================================================
const HERO_GRADIENTS: Record<LegalTheme, string> = {
  blue: "bg-linear-to-r from-blue-600 to-indigo-700",
  emerald: "bg-linear-to-r from-emerald-600 to-teal-700",
};

const HERO_MUTED_TEXT: Record<LegalTheme, string> = {
  blue: "text-blue-100",
  emerald: "text-emerald-100",
};

const LINK_COLOR: Record<LegalTheme, string> = {
  blue: "text-blue-600 hover:text-blue-700",
  emerald: "text-emerald-600 hover:text-emerald-700",
};

const CALLOUT_STYLES = {
  amber: "bg-amber-50 border-amber-400 text-amber-800",
  blue: "bg-blue-50 border-blue-400 text-blue-800",
  emerald: "bg-emerald-50 border-emerald-400 text-emerald-800",
} as const;

// ============================================================
// COMPONENTS
// ============================================================
export function LegalHero({
  theme,
  title,
  subtitle,
  meta,
  backHref,
  backLabel,
  icon,
}: LegalHeroProps) {
  return (
    <div className={cn(HERO_GRADIENTS[theme], "text-white py-16")}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href={backHref}
          className={cn(
            "inline-flex items-center hover:text-white mb-6 transition-colors",
            HERO_MUTED_TEXT[theme]
          )}
        >
          <ArrowLeft className="w-4 h-4 mr-2" aria-hidden="true" />
          {backLabel}
        </Link>
        <div className="flex items-center gap-3 mb-4">
          {icon}
          <h1 className="text-3xl md:text-4xl font-bold">{title}</h1>
        </div>
        {subtitle && (
          <p className={cn("mb-2 max-w-2xl", HERO_MUTED_TEXT[theme])}>
            {subtitle}
          </p>
        )}
        <p className={HERO_MUTED_TEXT[theme]}>{meta}</p>
      </div>
    </div>
  );
}

export function LegalToc({ theme, title, items }: LegalTocProps) {
  return (
    <nav
      aria-label={title}
      className="mb-10 rounded-xl border border-gray-200 bg-gray-50 p-6"
    >
      <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-500 mb-4">
        {title}
      </h2>
      <ol className="grid gap-2 sm:grid-cols-2 text-sm">
        {items.map((item, index) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={cn("hover:underline", LINK_COLOR[theme])}
            >
              {index + 1}. {item.title}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function LegalSection({ id, title, children }: LegalSectionProps) {
  return (
    <section id={id} className="mb-10 scroll-mt-24">
      <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
        {title}
      </h2>
      <div className="space-y-4 text-gray-600 leading-relaxed">{children}</div>
    </section>
  );
}

export function LegalSubheading({ children }: { children: ReactNode }) {
  return (
    <h3 className="text-lg font-semibold text-gray-900 mt-6">{children}</h3>
  );
}

export function LegalList({
  items,
  variant = "plain",
  className,
}: LegalListProps) {
  return (
    <ul
      className={cn(
        "space-y-2",
        variant === "disc" && "list-disc pl-6 marker:text-gray-400",
        className
      )}
    >
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

export function LegalCallout({ tone = "blue", children }: LegalCalloutProps) {
  return (
    <div
      className={cn(
        "border-l-4 p-4 mb-8 rounded-r-lg text-sm",
        CALLOUT_STYLES[tone]
      )}
    >
      {children}
    </div>
  );
}

export function LegalContactCard({
  company,
  address,
  email,
  phone,
  website,
  extraRows,
  labels,
}: LegalContactCardProps) {
  return (
    <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
      <p className="font-semibold text-gray-900 mb-3">{company}</p>
      <ul className="space-y-2 text-gray-600">
        <li>
          <strong>{labels.address}:</strong> {address}
        </li>
        <li>
          <strong>{labels.email}:</strong>{" "}
          <a
            href={`mailto:${email}`}
            className="text-blue-600 hover:underline break-all"
          >
            {email}
          </a>
        </li>
        {phone && (
          <li>
            <strong>{labels.phone}:</strong>{" "}
            <a
              href={`tel:${phone.replace(/[^+\d]/g, "")}`}
              className="text-blue-600 hover:underline"
            >
              {phone}
            </a>
          </li>
        )}
        {website && (
          <li>
            <strong>{labels.website}:</strong>{" "}
            <a
              href={website}
              className="text-blue-600 hover:underline break-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              {website}
            </a>
          </li>
        )}
        {extraRows?.map((row) => (
          <li key={row.label}>
            <strong>{row.label}:</strong> {row.value}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function LegalFooterLinks({
  theme,
  links,
}: {
  theme: LegalTheme;
  links: readonly { href: string; label: string; primary?: boolean }[];
}) {
  const primaryClass =
    theme === "emerald"
      ? "bg-emerald-600 hover:bg-emerald-700"
      : "bg-blue-600 hover:bg-blue-700";

  return (
    <div className="mt-8 flex flex-col sm:flex-row gap-4">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={cn(
            "flex-1 text-center px-6 py-3 rounded-lg transition-colors",
            link.primary
              ? cn("text-white", primaryClass)
              : "bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300"
          )}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}

export function LegalPageShell({ children }: { children: ReactNode }) {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
        {children}
      </div>
    </div>
  );
}
