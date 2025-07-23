
import React from "react";
import { Button } from "../ui/button";

const IntroductorySection = () => {
  return (
    <section
      id="intro"
      className="section-padding bg-white"
      aria-label="Introductory section about insurance coverage challenges"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-10 max-w-6xl mx-auto">
          {/* Left image - hidden on mobile, shown on desktop */}
          <div
            className="hidden lg:flex w-full lg:w-1/2 items-center justify-center animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            <img
              src="/lovable-uploads/e39a0fde-ebe8-4306-a912-874626dda023.png"
              alt="Concerned person reviewing medical bills"
              className="rounded-xl shadow-lg object-cover w-full h-full max-h-[520px] min-h-[340px]"
            />
          </div>
          
          {/* Right text & CTA */}
          <div
            className="w-full lg:w-1/2 max-w-xl mx-auto flex flex-col justify-center animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 leading-tight">
              Struggling With High Deductibles, Lost Wages, or Uncovered Expenses?
            </h2>
            
            {/* Mobile image - shown only on mobile between title and paragraph */}
            <div className="lg:hidden mb-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <img
                src="/lovable-uploads/e39a0fde-ebe8-4306-a912-874626dda023.png"
                alt="Concerned person reviewing medical bills"
                className="rounded-xl shadow-lg object-cover w-full max-h-[300px]"
              />
            </div>
            
            <p className="text-lg text-gray-700 mb-6">
              You're not alone. Every day, families face the financial shock of medical emergencies that traditional health insurance just doesn't cover. Whether it's a sudden accident, a critical illness, or the overwhelming costs of cancer care — the stress hits hard and fast. And when you can't work, the bills don't stop.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              But you're here now — and that means you're already on the path to peace of mind. At Quality Family Benefits, we help you get the cash payouts you need to face life's hardest moments head-on. Plans are affordable, flexible, and built for real life.
            </p>
            <div className="flex justify-center lg:justify-start">
              <a
                href="https://calendly.com/srswiftm/30min"
                className="inline-block bg-primary-500 text-white font-semibold text-lg px-8 py-3 rounded-md transition-transform hover:bg-primary-600"
                aria-label="Schedule a consultation today"
              >
                Schedule a consultation today
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroductorySection;
