import { Building2 } from "lucide-react";
import { BUSINESS_IDENTITY } from "@/lib/legal/business-identity";
import { cn } from "@/lib/utils";

// ============================================================
// TYPES
// ============================================================
type IdentityLocale = "vi" | "en";

interface BusinessIdentityCardProps {
  locale: IdentityLocale;
  className?: string;
}

interface IdentityRow {
  label: string;
  value: React.ReactNode;
}

// ============================================================
// CONSTANTS
// ============================================================
const COPY = {
  vi: {
    heading: "Đơn vị vận hành và chịu trách nhiệm",
    intro:
      "Chính sách này được ban hành bởi pháp nhân dưới đây, là chủ sở hữu và đơn vị vận hành các sản phẩm, ứng dụng và tên miền được liệt kê.",
    legalName: "Tên pháp nhân",
    taxCode: "Mã số doanh nghiệp / Mã số thuế",
    address: "Địa chỉ đăng ký",
    email: "Email liên hệ",
    hotline: "Hotline",
    corporateWebsite: "Website doanh nghiệp",
    products: "Sản phẩm được điều chỉnh",
    domains: "Tên miền được điều chỉnh",
    facebookApp: "Ứng dụng Facebook",
    appId: "App ID",
  },
  en: {
    heading: "Operator and responsible entity",
    intro:
      "This policy is published by the legal entity below, which owns and operates the products, applications and domains listed here.",
    legalName: "Legal entity",
    taxCode: "Business registration / Tax code",
    address: "Registered address",
    email: "Contact email",
    hotline: "Hotline",
    corporateWebsite: "Corporate website",
    products: "Products covered",
    domains: "Domains covered",
    facebookApp: "Facebook application",
    appId: "App ID",
  },
} as const;

// ============================================================
// HELPERS
// ============================================================
function buildRows(locale: IdentityLocale): IdentityRow[] {
  const copy = COPY[locale];
  const {
    legalNameVi,
    legalNameEn,
    taxCode,
    addressVi,
    addressEn,
    email,
    hotline,
    corporateWebsite,
    productNames,
    coveredDomains,
    facebookApp,
  } = BUSINESS_IDENTITY;

  const rows: IdentityRow[] = [
    {
      label: copy.legalName,
      value: locale === "vi" ? legalNameVi : legalNameEn,
    },
    { label: copy.taxCode, value: taxCode },
    { label: copy.address, value: locale === "vi" ? addressVi : addressEn },
  ];

  if (facebookApp) {
    rows.push(
      { label: copy.facebookApp, value: facebookApp.displayName },
      { label: copy.appId, value: facebookApp.appId }
    );
  }

  rows.push(
    { label: copy.products, value: productNames.join(", ") },
    { label: copy.domains, value: coveredDomains.join(", ") },
    {
      label: copy.email,
      value: (
        <a
          href={`mailto:${email}`}
          className="text-blue-600 hover:underline break-all"
        >
          {email}
        </a>
      ),
    },
    { label: copy.hotline, value: hotline },
    {
      label: copy.corporateWebsite,
      value: (
        <a
          href={corporateWebsite}
          className="text-blue-600 hover:underline break-all"
          target="_blank"
          rel="noopener noreferrer"
        >
          {corporateWebsite}
        </a>
      ),
    }
  );

  return rows;
}

// ============================================================
// COMPONENT
// ============================================================
export function BusinessIdentityCard({
  locale,
  className,
}: BusinessIdentityCardProps) {
  const copy = COPY[locale];
  const rows = buildRows(locale);

  return (
    <section
      aria-labelledby="business-identity-heading"
      className={cn(
        "mb-8 rounded-xl border border-gray-200 bg-gray-50 p-6",
        className
      )}
    >
      <div className="flex items-center gap-2 mb-3">
        <Building2 className="w-5 h-5 text-gray-500" aria-hidden="true" />
        <h2
          id="business-identity-heading"
          className="text-base font-bold text-gray-900"
        >
          {copy.heading}
        </h2>
      </div>

      <p className="text-sm text-gray-600 mb-4">{copy.intro}</p>

      <dl className="grid gap-x-6 gap-y-3 sm:grid-cols-[minmax(0,14rem)_1fr] text-sm">
        {rows.map((row) => (
          <div key={row.label} className="sm:contents">
            <dt className="font-semibold text-gray-700">{row.label}</dt>
            <dd className="text-gray-600">{row.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
