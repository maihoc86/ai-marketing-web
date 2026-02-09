"use client";

import {
  ChevronDown,
  Footprints,
  Heart,
  Sparkles,
  PartyPopper,
} from "lucide-react";

const campaigns = [
  { icon: Footprints, label: "Weekend Walk-Ins" },
  { icon: Heart, label: "Bridal & Prom" },
  { icon: Sparkles, label: "Gel & Spa" },
  { icon: PartyPopper, label: "Seasonal Specials" },
];

const faqs = [
  {
    question: "What exactly does the service include?",
    answer:
      "Our service includes AI-powered social media management, automated ad campaigns, client loyalty tools, and integration with our specialized photobooth hardware to capture high-quality content directly at your salon.",
  },
  {
    question: "Do I have control over the content?",
    answer:
      "Absolutely. While our AI generates and suggests content, you have full approval rights before anything goes live. You can also easily create custom posts using our dashboard.",
  },
  {
    question: "Is the 10-day trial really free?",
    answer:
      "Yes, the 10-day trial is completely free with no credit card required upfront. You'll get full access to the platform features to see the value before committing.",
  },
  {
    question: "Is the photobooth hard to use?",
    answer:
      "Not at all. It's designed for busy salon environments. With just a couple of taps, you can take professional lighting photos and videos that automatically sync to your marketing dashboard.",
  },
];

export default function FAQSection() {
  return (
    <section
      className="py-24 bg-primary-light/10 border-t border-primary/10"
      id="faq"
    >
      <div className="max-w-[800px] mx-auto px-6">
        {/* Ready-to-launch campaigns */}
        <div className="mb-20 text-center">
          <h3 className="text-xl font-display font-bold text-text-main uppercase tracking-widest mb-10">
            Ready-to-launch campaigns
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {campaigns.map((campaign, index) => (
              <div
                key={index}
                className="bg-white p-4 border border-primary/10 rounded text-center shadow-sm"
              >
                <campaign.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                <p className="text-xs font-bold uppercase tracking-wider text-text-main">
                  {campaign.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <h2 className="text-3xl font-display font-light text-text-main text-center mb-16 uppercase tracking-widest">
          Common Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group bg-white border border-primary/10 overflow-hidden transition-all duration-300 open:shadow-md rounded-md"
            >
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                <span className="font-bold text-text-main group-open:text-primary uppercase tracking-widest text-xs transition-colors">
                  {faq.question}
                </span>
                <ChevronDown className="w-5 h-5 text-primary group-open:rotate-180 transition-transform duration-300" />
              </summary>
              <div className="px-6 pb-6 text-text-muted text-sm leading-relaxed font-light">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
