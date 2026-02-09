"use client";

import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 mb-16 items-center">
          {/* CTA */}
          <div>
            <h3 className="text-3xl font-display font-light mb-4">
              Ready to <span className="text-primary font-bold">Launch?</span>
            </h3>
            <p className="text-gray-400 font-light mb-8 max-w-md">
              Transform your salon&apos;s revenue stream today with intelligent
              automation.
            </p>
            <button className="h-14 px-10 bg-primary hover:bg-primary-dark text-white font-bold transition-all shadow-lg flex items-center justify-center gap-2 tracking-widest text-sm uppercase rounded-md">
              Start 10-day free trial
            </button>
          </div>

          {/* Contact Info */}
          <div className="md:text-right flex flex-col md:items-end justify-center">
            <img
              className="h-40 -mr-7.5"
              src="/logo-dark.png"
              alt="Uniksmart"
            />
            <div className="space-y-2 text-sm text-gray-400">
              <p className="flex items-center gap-2 md:justify-end">
                <Mail className="w-4 h-4 text-primary" />
                salesmarketing@tienphongcds.com
              </p>
              <p className="flex items-center gap-2 md:justify-end">
                <Phone className="w-4 h-4 text-primary" />
                0798 089 717
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] text-gray-500 font-medium tracking-widest uppercase">
            © 2026 Uniksmart. All rights reserved.
          </p>
          <div className="flex gap-8 text-[10px] text-gray-500 font-bold uppercase tracking-[0.2em]">
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
