"use client";

import Link from "next/link";
import { Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white pt-16 pb-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 mb-12 items-center">
          {/* CTA */}
          <div>
            <h3 className="text-2xl font-display font-light mb-3">
              Ready to <span className="text-primary font-bold">Launch?</span>
            </h3>
            <p className="text-gray-400 font-light mb-6 max-w-md">
              Transform your salon&apos;s revenue stream today with intelligent
              automation.
            </p>
            <button className="h-12 px-8 bg-primary hover:bg-primary-dark text-white font-bold transition-all shadow-lg flex items-center justify-center gap-2 tracking-widest text-xs uppercase rounded-md">
              Start 10-day free trial
            </button>
          </div>

          {/* Contact Info */}
          <div className="md:text-right flex flex-col md:items-end justify-center">
            <img
              className="h-32 -mr-7.5"
              src="/logo-dark.png"
              alt="Uniksmart"
            />
            <div className="space-y-1.5 text-xs text-gray-400">
              <p className="flex items-center gap-2 md:justify-end">
                <Mail className="w-3.5 h-3.5 text-primary" />
                salesmarketing@tienphongcds.com
              </p>
              <p className="flex items-center gap-2 md:justify-end">
                <Phone className="w-3.5 h-3.5 text-primary" />
                0798 089 717
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-gray-500 font-medium tracking-widest uppercase">
            © 2026 Uniksmart. All rights reserved.
          </p>
          <div className="flex gap-6 text-[10px] text-gray-500 font-bold uppercase tracking-[0.2em]">
            <Link
              href="/privacy"
              className="hover:text-primary transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="hover:text-primary transition-colors"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
