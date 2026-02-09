"use client";

const contentTypes = [
  "Before/After",
  "Service & Price Clarity",
  "Walk-in Slots",
  "Local Offers",
  "Short Trust Videos",
  "Customer Voices",
];

export default function ContentStrategySection() {
  return (
    <section className="py-24 bg-[#FAF9F6] border-t border-primary/10">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl lg:text-4xl font-display font-light text-text-main mb-12">
          Nail-first{" "}
          <span className="font-bold text-primary">content strategy</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {contentTypes.map((type, index) => (
            <div
              key={index}
              className="px-8 py-4 bg-white border border-primary/20 rounded-full text-text-main shadow-sm hover:shadow-md transition-shadow cursor-default"
            >
              <span className="text-sm font-bold uppercase tracking-widest">
                {type}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
