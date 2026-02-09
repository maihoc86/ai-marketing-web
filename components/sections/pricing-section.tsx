"use client";

import {
  Check,
  CheckCircle,
  TrendingUp,
  BadgeCheck,
  Clock,
  CalendarCheck,
  Cog,
  Heart,
  DollarSign,
  Store,
  Handshake,
} from "lucide-react";

const professionalFeatures = [
  "Manage & post content (Facebook/Instagram/TikTok)",
  "Create professional media",
  "Write captions/promos",
  "Send appointment reminders",
  "Provide weekly reports",
];

const professionalBenefits = [
  { icon: TrendingUp, text: "More new clients" },
  { icon: BadgeCheck, text: "Professional online presence" },
  { icon: Clock, text: "Time savings" },
  { icon: CalendarCheck, text: "Fewer no-shows" },
];

const businessFeatures = [
  "Paid ad campaigns",
  "Virtual Photobooth image service",
  "Website design & launch included",
  "24/7 AI-driven assistant",
  "Email & SMS loyalty",
  "Multi-location support",
  "Dedicated manager",
];

const businessBenefits = [
  { icon: Cog, text: "Hands-off marketing machine" },
  { icon: Heart, text: "Client loyalty" },
  { icon: DollarSign, text: "Higher revenue per client" },
  { icon: Store, text: "Strong local presence" },
  { icon: Handshake, text: "True marketing partner" },
];

export default function PricingSection() {
  return (
    <section className="py-28 bg-white relative" id="pricing">
      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-display font-light text-text-main mb-4 uppercase tracking-tighter">
            Investment in <span className="font-bold text-primary">Growth</span>
          </h2>
          <p className="text-text-muted text-lg">
            Simple, transparent pricing to scale your salon.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start max-w-5xl mx-auto">
          {/* Professional Plan */}
          <div className="bg-background-light border border-primary/20 p-8 flex flex-col artisanal-shadow relative group rounded-lg">
            <div className="mb-8 border-b border-primary/10 pb-8">
              <h3 className="text-sm font-bold text-primary mb-4 uppercase tracking-[0.3em]">
                Professional
              </h3>
              <div className="flex items-baseline gap-1">
                <span className="text-5xl font-bold text-text-main tracking-tighter">
                  $499
                </span>
                <span className="text-text-muted font-light">/mo</span>
              </div>
              <p className="text-text-muted text-sm mt-4 font-light leading-relaxed">
                For salons ready to grow their client base and online presence.
              </p>
            </div>

            <div className="space-y-6 mb-8 flex-grow">
              <div>
                <p className="text-xs font-bold text-text-main uppercase tracking-widest mb-4">
                  What we do for you
                </p>
                <ul className="space-y-3">
                  {professionalFeatures.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-text-muted text-sm font-light"
                    >
                      <Check className="w-[18px] h-[18px] text-primary mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-primary-light/30 p-6 -mx-8 mb-8 border-y border-primary/5">
              <p className="text-xs font-bold text-primary uppercase tracking-widest mb-4">
                What you get back
              </p>
              <ul className="space-y-2">
                {professionalBenefits.map((benefit, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 text-text-main text-sm font-medium"
                  >
                    <benefit.icon className="w-4 h-4 text-primary" />
                    <span>{benefit.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button className="w-full py-4 px-8 border border-primary text-primary hover:bg-primary/5 font-bold transition-all uppercase tracking-[0.2em] text-xs rounded-md">
              Start Free Trial
            </button>
          </div>

          {/* Business Plan */}
          <div className="bg-white border-2 border-primary p-8 flex flex-col relative shadow-2xl lg:-mt-4 lg:mb-4 z-10 scale-100 lg:scale-105 origin-top rounded-lg">
            {/* Recommended Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] font-bold uppercase py-2 px-6 tracking-[0.2em] shadow-lg rounded-full">
              Recommended
            </div>

            <div className="mb-8 border-b border-primary/10 pb-8 pt-2">
              <h3 className="text-sm font-bold text-primary mb-4 uppercase tracking-[0.3em]">
                Business
              </h3>
              <div className="flex items-baseline gap-1">
                <span className="text-5xl font-bold text-text-main tracking-tighter">
                  $799
                </span>
                <span className="text-text-muted font-light">/mo</span>
              </div>
              <p className="text-text-muted text-sm mt-4 font-light leading-relaxed">
                For salons and chains that want full-service marketing and
                maximum growth.
              </p>
            </div>

            <div className="space-y-6 mb-8 flex-grow">
              <div>
                <p className="text-xs font-bold text-text-main uppercase tracking-widest mb-4">
                  Everything in Professional, plus:
                </p>
                <ul className="space-y-3">
                  {businessFeatures.map((feature, index) => (
                    <li
                      key={index}
                      className={`flex items-start gap-3 text-sm ${index === 1 || index === 2 ? "text-text-main font-bold" : "text-text-main"}`}
                    >
                      <CheckCircle className="w-[18px] h-[18px] text-primary mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-primary-light/30 p-6 -mx-8 mb-8 border-y border-primary/5">
              <p className="text-xs font-bold text-primary uppercase tracking-widest mb-4">
                What you get back
              </p>
              <ul className="space-y-2">
                {businessBenefits.map((benefit, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 text-text-main text-sm font-medium"
                  >
                    <benefit.icon className="w-4 h-4 text-primary" />
                    <span>{benefit.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button className="w-full py-4 px-8 bg-primary hover:bg-primary-dark text-white font-bold transition-all shadow-lg uppercase tracking-[0.2em] text-xs rounded-md">
              Start Free Trial
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
