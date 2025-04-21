
import React from "react";

const IntroductorySection = () => {
  return (
    <section
      id="intro"
      className="section-padding bg-white"
      aria-label="Introductory section about insurance coverage challenges"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 max-w-6xl mx-auto">
          
          {/* Left image */}
          <div
            className="w-full lg:w-1/2 animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            <img
              src="https://images.unsplash.com/photo-1628157588553-6d5eea4b80d4?auto=format&fit=crop&w=800&q=80"
              alt="Concerned person reviewing medical bills"
              className="rounded-xl shadow-lg object-cover w-full h-auto max-h-96"
            />
          </div>
          
          {/* Right text & CTA */}
          <div
            className="w-full lg:w-1/2 animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 leading-tight">
              Struggling With High Deductibles, Lost Wages, or Uncovered Expenses?
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              You're not alone. Every day, families face the financial shock of medical emergencies that traditional health insurance just doesn't cover. Whether it’s a sudden accident, a critical illness, or the overwhelming costs of cancer care — the stress hits hard and fast. And when you can’t work, the bills don’t stop.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              But you're here now — and that means you're already on the path to peace of mind. At Quality Family Benefits, we help you get the cash payouts you need to face life’s hardest moments head-on. Plans are affordable, flexible, and built for real life.
            </p>
            <a
              href="#what-we-offer"
              className="inline-block glow-button gold-button text-white font-semibold text-lg px-8 py-3 rounded-md transition-transform hover:scale-105"
              aria-label="See how we can help you today"
            >
              See How We Can Help You Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroductorySection;

