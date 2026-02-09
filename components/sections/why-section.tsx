"use client";

import {
  MapPin,
  Calendar,
  CreditCard,
  Clock,
  BadgeDollarSign,
} from "lucide-react";

const benefits = [
  {
    icon: MapPin,
    title: "More Local Visibility",
    description: "Dominate search results in your neighborhood.",
  },
  {
    icon: Calendar,
    title: "More Bookings",
    description: "Fill empty slots automatically.",
  },
  {
    icon: CreditCard,
    title: "Higher Average Ticket",
    description: "Upsell services effortlessly at the chair.",
  },
  {
    icon: Clock,
    title: "Less Admin",
    description: "Automate marketing tasks completely.",
  },
  {
    icon: BadgeDollarSign,
    title: "Predictable Costs",
    description: "Flat monthly fee, no hidden surprises.",
  },
];

export default function WhySection() {
  return (
    <section className="py-24 bg-primary-light/10" id="why-uniksmart">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-display font-light text-text-main mb-3">
            Why Uniksmart works for{" "}
            <span className="text-primary font-bold">nail salons</span>
          </h2>
          <div className="h-1 w-16 bg-primary mx-auto mt-6 rounded-full" />
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="p-6 border border-primary/10 bg-white text-center hover:shadow-lg transition-all duration-300 group rounded-md"
            >
              <div className="size-12 mx-auto mb-4 bg-primary/5 rounded-full flex items-center justify-center border border-primary/20 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <benefit.icon className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-text-main text-sm uppercase tracking-wider mb-2">
                {benefit.title}
              </h3>
              <p className="text-text-muted text-xs leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
