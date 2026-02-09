import Link from "next/link";
import { FileText, ArrowLeft } from "lucide-react";

interface LegalPageHeaderProps {
  title: string;
  effectiveDate?: string;
  lastUpdated?: string;
}

export default function LegalPageHeader({
  title,
  effectiveDate = "24 March 2025",
  lastUpdated = "24 November 2025",
}: LegalPageHeaderProps) {
  return (
    <div className="bg-white border-b border-gray-200 sticky top-0 z-10 shadow-sm">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <FileText className="w-8 h-8 text-[#22b5f8]" />
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
              <p className="text-sm text-gray-500">
                Effective Date: {effectiveDate}
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Last Updated: {lastUpdated}
              </p>
            </div>
          </div>
          <Link
            href="/"
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
