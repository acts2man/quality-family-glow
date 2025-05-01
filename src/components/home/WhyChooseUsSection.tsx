
import React from "react";

const WhyChooseUsSection = () => {
  const benefits = [
    {
      title: "We Pay YOU Directly",
      description: "Payments go straight to you, not to doctors or hospitals, giving you complete financial freedom."
    },
    {
      title: "Guaranteed Coverage Options",
      description: "We have plans with guaranteed acceptance for eligible applicants, regardless of health conditions."
    },
    {
      title: "Keep Your Plan, Even if You Change Jobs",
      description: "Our coverage stays with you regardless of employment changes, providing continuous protection."
    },
    {
      title: "Covers Victims of Crime",
      description: "We provide special coverage options for unexpected situations, including crime-related injuries."
    }
  ];
  
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left Column - Content */}
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Why Choose <span className="text-primary-500">Quality Family Benefits?</span>
              </h2>
              
              <div className="space-y-6 mt-8">
                {benefits.map((benefit, index) => (
                  <div 
                    key={benefit.title}
                    className="flex items-start animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1 + 0.2}s` }}
                  >
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-6 h-6 rounded-full bg-accent-gold flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold mb-1 text-gray-800">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <a href="#" className="glow-button">
                  <span>See Why Thousands Trust QFB</span>
                </a>
              </div>
            </div>
            
            {/* Right Column - Image */}
            <div className="order-1 lg:order-2 relative">
              <div className="relative">
                <div className="absolute -top-8 -left-8 w-40 h-40 bg-primary-100 rounded-full opacity-70"></div>
                <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-accent-gold/20 rounded-full"></div>
                <img 
                  src="/lovable-uploads/4c15b59c-6650-473d-bcce-b9b66019c916.png"
                  alt="Family enjoying time together"
                  className="rounded-xl shadow-xl relative z-10 w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
