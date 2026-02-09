"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, User, Store } from "lucide-react";

const Logo = () => (
  <svg
    fill="none"
    viewBox="0 0 48 48"
    xmlns="http://www.w3.org/2000/svg"
    className="size-9 text-primary"
  >
    <path
      d="M8.57829 8.57829C5.52816 11.6284 3.451 15.5145 2.60947 19.7452C1.76794 23.9758 2.19984 28.361 3.85056 32.3462C5.50128 36.3314 8.29667 39.7376 11.8832 42.134C15.4698 44.5305 19.6865 45.8096 24 45.8096C28.3135 45.8096 32.5302 44.5305 36.1168 42.134C39.7033 39.7375 42.4987 36.3314 44.1494 32.3462C45.8002 28.361 46.2321 23.9758 45.3905 19.7452C44.549 15.5145 42.4718 11.6284 39.4217 8.57829L24 24L8.57829 8.57829Z"
      fill="currentColor"
    />
  </svg>
);

export default function TrialPage() {
  const [accountType, setAccountType] = useState<"professional" | "business">(
    "professional",
  );
  const [socials, setSocials] = useState({
    facebook: true,
    instagram: false,
    tiktok: false,
  });

  return (
    <div className="min-h-screen flex flex-col bg-background-light">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 glass-panel transition-all duration-300">
        <div className="max-w-[1280px] mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Logo />
            <h2 className="text-text-main text-xl font-display font-bold tracking-tight uppercase">
              Uniksmart
            </h2>
          </Link>
          <div className="hidden sm:block text-xs font-bold tracking-widest text-text-muted">
            ALREADY A MEMBER?{" "}
            <a
              className="text-primary hover:text-primary-dark ml-2 underline underline-offset-4 transition-colors font-extrabold"
              href={
                process.env.NEXT_PUBLIC_AI_DSP_URL ||
                "https://admin.dsp.one/login"
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              LOGIN
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-32 pb-24 px-6 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 left-0 w-full h-[800px] bg-gradient-to-b from-primary/5 to-transparent pointer-events-none -z-10" />
        <div className="absolute -top-20 -right-20 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none -z-10" />

        <div className="max-w-[900px] mx-auto relative z-10">
          {/* Header Section */}
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 border border-primary/30 bg-white/60 text-[11px] font-extrabold text-primary-dark tracking-[0.15em] uppercase mb-6 rounded-sm">
              10-Day Free Trial
            </span>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-text-main mb-6 tracking-tight leading-tight">
              Begin Your <span className="text-primary">Legacy</span>
            </h1>
            <p className="text-text-muted text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
              Join the artisanal revolution. Experience the gold standard of
              digital boutique management.
            </p>
          </div>

          {/* Form Card */}
          <div className="bg-white border border-gray-100 p-8 md:p-12 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] relative rounded-sm">
            {/* Top accent line */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/20 via-primary to-primary/20" />

            {/* Account Type Section */}
            <section className="mb-14">
              <h3 className="text-sm font-extrabold uppercase tracking-widest text-text-main mb-8 flex items-center gap-4">
                <span className="w-8 h-[2px] bg-primary" /> Select Account Type
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {/* Professional */}
                <label className="cursor-pointer group relative">
                  <input
                    type="radio"
                    name="account_type"
                    checked={accountType === "professional"}
                    onChange={() => setAccountType("professional")}
                    className="peer sr-only"
                  />
                  <div className="h-full border border-gray-200 p-8 transition-all duration-300 hover:border-primary/60 hover:shadow-lg peer-checked:bg-primary/[0.03] peer-checked:border-primary peer-checked:ring-1 peer-checked:ring-primary/50 bg-white flex flex-col rounded-sm">
                    <div className="flex justify-between items-start mb-5">
                      <User className="w-8 h-8 text-primary-dark" />
                      <div className="size-5 rounded-full border border-gray-300 peer-checked:bg-primary peer-checked:border-primary flex items-center justify-center transition-colors">
                        <div
                          className={`size-2 bg-white rounded-full transition-opacity ${accountType === "professional" ? "opacity-100" : "opacity-0"}`}
                        />
                      </div>
                    </div>
                    <h4 className="text-lg font-bold text-text-main tracking-tight mb-1">
                      Professional
                    </h4>
                    <p className="text-[10px] text-primary-dark font-extrabold uppercase tracking-widest mb-4">
                      For Individuals
                    </p>
                    <p className="text-sm text-text-muted leading-relaxed font-medium">
                      Free full-feature experience for 1 month. Perfect for solo
                      artisans.
                    </p>
                  </div>
                </label>

                {/* Business */}
                <label className="cursor-pointer group relative">
                  <input
                    type="radio"
                    name="account_type"
                    checked={accountType === "business"}
                    onChange={() => setAccountType("business")}
                    className="peer sr-only"
                  />
                  <div className="h-full border border-gray-200 p-8 transition-all duration-300 hover:border-primary/60 hover:shadow-lg peer-checked:bg-primary/[0.03] peer-checked:border-primary peer-checked:ring-1 peer-checked:ring-primary/50 bg-white flex flex-col rounded-sm">
                    <div className="flex justify-between items-start mb-5">
                      <Store className="w-8 h-8 text-primary-dark" />
                      <div className="size-5 rounded-full border border-gray-300 peer-checked:bg-primary peer-checked:border-primary flex items-center justify-center transition-colors">
                        <div
                          className={`size-2 bg-white rounded-full transition-opacity ${accountType === "business" ? "opacity-100" : "opacity-0"}`}
                        />
                      </div>
                    </div>
                    <h4 className="text-lg font-bold text-text-main tracking-tight mb-1">
                      Business
                    </h4>
                    <p className="text-[10px] text-primary-dark font-extrabold uppercase tracking-widest mb-4">
                      For Organizations
                    </p>
                    <p className="text-sm text-text-muted leading-relaxed font-medium">
                      Custom solution with admin controls. Ideal for salons and
                      studios.
                    </p>
                  </div>
                </label>
              </div>
            </section>

            {/* Business Details Section */}
            <section className="mb-14">
              <h3 className="text-sm font-extrabold uppercase tracking-widest text-text-main mb-8 flex items-center gap-4">
                <span className="w-8 h-[2px] bg-primary" /> Business Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8">
                <div className="md:col-span-2">
                  <label className="block text-xs font-bold uppercase tracking-widest text-text-muted mb-2">
                    Company / Organization Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. L'Artisan Studio"
                    className="w-full bg-white border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary/50 placeholder-gray-400 text-text-main py-3.5 px-4 outline-none transition-all text-sm rounded-sm font-medium"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-text-muted mb-2">
                    TAX ID
                  </label>
                  <input
                    type="text"
                    placeholder="Tax Identification Number"
                    className="w-full bg-white border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary/50 placeholder-gray-400 text-text-main py-3.5 px-4 outline-none transition-all text-sm rounded-sm font-medium"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-text-muted mb-2">
                    Business Type
                  </label>
                  <div className="relative">
                    <select className="w-full bg-white border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary/50 text-text-main py-3.5 px-4 outline-none transition-all text-sm rounded-sm font-medium appearance-none cursor-pointer pr-10">
                      <option>Beauty Salon</option>
                      <option>Spa &amp; Wellness</option>
                      <option>Nail Artistry</option>
                      <option>Hair Studio</option>
                      <option>Other</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-primary pointer-events-none w-5 h-5" />
                  </div>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-xs font-bold uppercase tracking-widest text-text-muted mb-2">
                    Office Address
                  </label>
                  <input
                    type="text"
                    placeholder="Full business address"
                    className="w-full bg-white border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary/50 placeholder-gray-400 text-text-main py-3.5 px-4 outline-none transition-all text-sm rounded-sm font-medium"
                  />
                </div>
              </div>
            </section>

            {/* Personal Information Section */}
            <section className="mb-14">
              <h3 className="text-sm font-extrabold uppercase tracking-widest text-text-main mb-8 flex items-center gap-4">
                <span className="w-8 h-[2px] bg-primary" /> Personal Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-text-muted mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Your full name"
                    required
                    className="w-full bg-white border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary/50 placeholder-gray-400 text-text-main py-3.5 px-4 outline-none transition-all text-sm rounded-sm font-medium"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-text-muted mb-2">
                    Work Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="name@company.com"
                    required
                    className="w-full bg-white border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary/50 placeholder-gray-400 text-text-main py-3.5 px-4 outline-none transition-all text-sm rounded-sm font-medium"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-text-muted mb-2">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <div className="flex gap-2">
                    <div className="w-28 relative">
                      <select className="w-full bg-white border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary/50 text-text-main py-3.5 px-4 outline-none transition-all text-sm rounded-sm font-medium appearance-none pr-8">
                        <option>+1</option>
                        <option>+44</option>
                        <option>+81</option>
                        <option>+84</option>
                      </select>
                      <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 text-primary pointer-events-none w-4 h-4" />
                    </div>
                    <input
                      type="tel"
                      placeholder="(555) 000-0000"
                      required
                      className="flex-1 bg-white border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary/50 placeholder-gray-400 text-text-main py-3.5 px-4 outline-none transition-all text-sm rounded-sm font-medium"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-text-muted mb-2">
                    Job Position <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <select
                      required
                      className="w-full bg-white border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary/50 text-text-main py-3.5 px-4 outline-none transition-all text-sm rounded-sm font-medium appearance-none cursor-pointer pr-10"
                    >
                      <option value="" disabled>
                        Select your role
                      </option>
                      <option>Owner / Founder</option>
                      <option>Manager</option>
                      <option>Artisan / Stylist</option>
                      <option>Marketing</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-primary pointer-events-none w-5 h-5" />
                  </div>
                </div>
              </div>
            </section>

            {/* Promotion Channels Section */}
            <section className="mb-16">
              <h3 className="text-sm font-extrabold uppercase tracking-widest text-text-main mb-8 flex items-center gap-4">
                <span className="w-8 h-[2px] bg-primary" /> Promotion Channels
              </h3>
              <div className="space-y-5">
                {/* Facebook */}
                <div className="border border-gray-200 rounded-sm p-5 bg-gray-50/50 transition-colors hover:bg-white hover:border-primary/40">
                  <div className="flex items-center flex-wrap">
                    <input
                      type="checkbox"
                      id="social-fb"
                      checked={socials.facebook}
                      onChange={(e) =>
                        setSocials({ ...socials, facebook: e.target.checked })
                      }
                      className="w-5 h-5 text-primary border-gray-300 rounded focus:ring-primary cursor-pointer bg-white"
                    />
                    <label
                      htmlFor="social-fb"
                      className="ml-4 flex items-center gap-3 text-sm font-bold text-text-main cursor-pointer select-none flex-1"
                    >
                      <div className="size-7 bg-[#1877F2] text-white flex items-center justify-center rounded-sm font-bold text-lg">
                        f
                      </div>
                      Facebook
                    </label>
                    {socials.facebook && (
                      <div className="w-full basis-full pl-0 mt-4 animate-fade-in-up">
                        <label className="block text-xs font-bold uppercase tracking-widest text-text-muted mb-1.5">
                          Link Fanpage
                        </label>
                        <input
                          type="text"
                          placeholder="https://..."
                          className="w-full bg-white border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary/50 placeholder-gray-400 text-text-main py-3.5 px-4 outline-none transition-all text-sm rounded-sm font-medium"
                        />
                      </div>
                    )}
                  </div>
                </div>

                {/* Instagram */}
                <div className="border border-gray-200 rounded-sm p-5 bg-gray-50/50 transition-colors hover:bg-white hover:border-primary/40">
                  <div className="flex items-center flex-wrap">
                    <input
                      type="checkbox"
                      id="social-ig"
                      checked={socials.instagram}
                      onChange={(e) =>
                        setSocials({ ...socials, instagram: e.target.checked })
                      }
                      className="w-5 h-5 text-primary border-gray-300 rounded focus:ring-primary cursor-pointer bg-white"
                    />
                    <label
                      htmlFor="social-ig"
                      className="ml-4 flex items-center gap-3 text-sm font-bold text-text-main cursor-pointer select-none flex-1"
                    >
                      <div className="size-7 bg-gradient-to-tr from-[#FFD600] via-[#FF0069] to-[#D300C5] text-white flex items-center justify-center rounded-sm text-xs font-bold">
                        IG
                      </div>
                      Instagram
                    </label>
                    {socials.instagram && (
                      <div className="w-full basis-full pl-0 mt-4 animate-fade-in-up">
                        <label className="block text-xs font-bold uppercase tracking-widest text-text-muted mb-1.5">
                          Instagram Profile
                        </label>
                        <input
                          type="text"
                          placeholder="https://instagram.com/yourprofile"
                          className="w-full bg-white border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary/50 placeholder-gray-400 text-text-main py-3.5 px-4 outline-none transition-all text-sm rounded-sm font-medium"
                        />
                      </div>
                    )}
                  </div>
                </div>

                {/* TikTok */}
                <div className="border border-gray-200 rounded-sm p-5 bg-gray-50/50 transition-colors hover:bg-white hover:border-primary/40">
                  <div className="flex items-center flex-wrap">
                    <input
                      type="checkbox"
                      id="social-tt"
                      checked={socials.tiktok}
                      onChange={(e) =>
                        setSocials({ ...socials, tiktok: e.target.checked })
                      }
                      className="w-5 h-5 text-primary border-gray-300 rounded focus:ring-primary cursor-pointer bg-white"
                    />
                    <label
                      htmlFor="social-tt"
                      className="ml-4 flex items-center gap-3 text-sm font-bold text-text-main cursor-pointer select-none flex-1"
                    >
                      <div className="size-7 bg-black text-white flex items-center justify-center rounded-sm text-xs font-bold">
                        TT
                      </div>
                      TikTok
                    </label>
                    {socials.tiktok && (
                      <div className="w-full basis-full pl-0 mt-4 animate-fade-in-up">
                        <label className="block text-xs font-bold uppercase tracking-widest text-text-muted mb-1.5">
                          TikTok Profile
                        </label>
                        <input
                          type="text"
                          placeholder="https://tiktok.com/@yourhandle"
                          className="w-full bg-white border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary/50 placeholder-gray-400 text-text-main py-3.5 px-4 outline-none transition-all text-sm rounded-sm font-medium"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </section>

            {/* Submit Section */}
            <div className="mt-16 flex flex-col items-center gap-8">
              <button className="w-full md:w-auto min-w-[320px] py-4 px-10 bg-charcoal hover:bg-charcoal/90 text-white font-extrabold tracking-widest text-xs uppercase shadow-xl transition-all duration-300 transform hover:-translate-y-1 rounded-sm">
                Start free trial
              </button>
              <div className="flex items-center gap-2 text-sm font-medium">
                <span className="text-text-muted">
                  Already have an account?
                </span>
                <a
                  className="text-primary hover:text-primary-dark font-extrabold transition-colors underline underline-offset-4"
                  href={
                    process.env.NEXT_PUBLIC_AI_DSP_URL ||
                    "https://admin.dsp.one/login"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Login now
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-16">
        <div className="max-w-[1280px] mx-auto px-6 flex flex-col items-center">
          <Link
            href="/"
            className="flex items-center gap-3 mb-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-500"
          >
            <div className="size-8 text-primary">
              <svg
                fill="none"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.57829 8.57829C5.52816 11.6284 3.451 15.5145 2.60947 19.7452C1.76794 23.9758 2.19984 28.361 3.85056 32.3462C5.50128 36.3314 8.29667 39.7376 11.8832 42.134C15.4698 44.5305 19.6865 45.8096 24 45.8096C28.3135 45.8096 32.5302 44.5305 36.1168 42.134C39.7033 39.7375 42.4987 36.3314 44.1494 32.3462C45.8002 28.361 46.2321 23.9758 45.3905 19.7452C44.549 15.5145 42.4718 11.6284 39.4217 8.57829L24 24L8.57829 8.57829Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <span className="text-text-main font-extrabold tracking-widest uppercase text-sm">
              Uniksmart
            </span>
          </Link>
          <div className="flex gap-8 text-[11px] text-text-muted font-bold uppercase tracking-widest mb-8">
            <a className="hover:text-primary-dark transition-colors" href="#">
              Privacy
            </a>
            <a className="hover:text-primary-dark transition-colors" href="#">
              Terms
            </a>
            <a className="hover:text-primary-dark transition-colors" href="#">
              Contact
            </a>
          </div>
          <p className="text-[10px] text-gray-400 font-bold tracking-widest uppercase">
            © 2024 Uniksmart. THE ART OF DIGITAL BEAUTY.
          </p>
        </div>
      </footer>
    </div>
  );
}
