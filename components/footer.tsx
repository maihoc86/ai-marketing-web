"use client";

import Link from "next/link";
import { Mail, Phone } from "lucide-react";

const Logo = () => (
  <svg
    fill="none"
    viewBox="0 0 48 48"
    xmlns="http://www.w3.org/2000/svg"
    className="size-8 text-primary"
  >
    <path
      d="M8.57829 8.57829C5.52816 11.6284 3.451 15.5145 2.60947 19.7452C1.76794 23.9758 2.19984 28.361 3.85056 32.3462C5.50128 36.3314 8.29667 39.7376 11.8832 42.134C15.4698 44.5305 19.6865 45.8096 24 45.8096C28.3135 45.8096 32.5302 44.5305 36.1168 42.134C39.7033 39.7375 42.4987 36.3314 44.1494 32.3462C45.8002 28.361 46.2321 23.9758 45.3905 19.7452C44.549 15.5145 42.4718 11.6284 39.4217 8.57829L24 24L8.57829 8.57829Z"
      fill="currentColor"
    />
  </svg>
);

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
            <div className="flex items-center gap-3 mb-6 md:justify-end">
              <Logo />
              <span className="text-white font-bold tracking-[0.2em] uppercase text-sm">
                Uniksmart
              </span>
            </div>
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
            <Link href="#" className="hover:text-primary transition-colors">
              Privacy
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
