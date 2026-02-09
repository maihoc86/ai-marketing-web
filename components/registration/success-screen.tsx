"use client";

import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

const AI_DSP_URL =
  process.env.NEXT_PUBLIC_AI_DSP_URL || "https://admin.dsp.one/login";

interface SuccessScreenProps {
  onRegisterAnother: () => void;
}

export function SuccessScreen({ onRegisterAnother }: SuccessScreenProps) {
  return (
    <div className="min-h-screen bg-linear-to-b from-white to-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center">
        <div
          className="w-24 h-24 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center animate-bounce"
          role="img"
          aria-label="Success icon"
        >
          <CheckCircle2
            className="w-12 h-12 text-green-600"
            aria-hidden="true"
          />
        </div>
        <h1 className="text-3xl font-bold text-text-main mb-3">
          Registration Successful!
        </h1>
        <p className="text-text-muted mb-8 text-lg">
          Check your email for login credentials and next steps.
        </p>

        {/* Primary CTA */}
        <div className="mb-6">
          <a
            href={AI_DSP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-12 py-4 bg-primary hover:bg-primary-dark text-white font-bold rounded-sm shadow-lg transition-all duration-300 transform hover:-translate-y-1"
          >
            Login to Dashboard
          </a>
        </div>

        {/* Secondary Actions */}
        <div className="flex flex-col items-center gap-3">
          <button
            onClick={onRegisterAnother}
            className="text-sm text-text-muted hover:text-primary font-medium transition-colors"
          >
            Register another account
          </button>
          <Link
            href="/"
            className="text-xs text-gray-500 hover:text-gray-700 transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
