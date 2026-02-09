"use client";

const steps = [
  {
    number: "1",
    title: "Sign up",
    description:
      "Quick online sign-up — just your salon name, location and a contact. No tech setup required.",
    highlighted: false,
  },
  {
    number: "2",
    title: "Tell us about your shop",
    description:
      "Fill a short form or upload your price list and a few photos. Share your goals (more walk-ins, higher ticket, busy weekends). That's all we need to start.",
    highlighted: false,
  },
  {
    number: "3",
    title: "We handle everything, A–Z",
    description:
      "We reach out, confirm details, and take over the marketing: content, local ads, Google listing, booking reminders, and ready-to-post images. You review one sample set; then we launch and manage daily.",
    highlighted: false,
  },
  {
    number: "4",
    title: "You get a simple report & results",
    description:
      "Weekly one-page reports show bookings, top posts and one clear recommendation. See bookings grow, approve next steps, or ask us to scale.",
    highlighted: true,
  },
];

export default function ProcessSection() {
  return (
    <section className="py-20 bg-white border-t border-primary/5" id="process">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-2xl lg:text-3xl font-display font-light text-text-main mb-12">
          How we support your shop — <br />
          <span className="text-primary font-bold">
            simple, repeatable process
          </span>
        </h2>

        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-primary/20 -translate-y-1/2 z-0" />

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 relative z-10">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-white p-6 border border-primary/10 lg:border-none shadow-sm lg:shadow-none h-full flex flex-col"
              >
                <div
                  className={`size-16 ${step.highlighted ? "bg-primary text-white border-primary shadow-lg" : "bg-accent-champagne text-primary border-primary/20 shadow-sm"} border rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 flex-shrink-0`}
                >
                  {step.number}
                </div>
                <h3 className="text-lg font-bold text-text-main mb-3 uppercase tracking-wide">
                  {step.title}
                </h3>
                <p className="text-text-muted text-sm font-light leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
