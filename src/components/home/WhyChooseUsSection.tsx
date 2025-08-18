
import React from "react";

const WhyChooseUsSection = () => {
  const benefits = [
    {
      title: "Decades of Experience",
      description: "We have decades of experience working with insurance companies for our clients"
    },
    {
      title: "Multiple Company Options",
      description: "We offer plans from many companies and help clients select the plans that suit them best"
    },
    {
      title: "Financially Strong Companies",
      description: "All our companies are financially strong with top ratings"
    },
    {
      title: "State Protection",
      description: "All are protected by state guarantee associations"
    },
    {
      title: "Quality Service",
      description: "All have good records for customer service"
    }
  ];

  const employerComparison = [
    {
      description: "Employers often change coverage levels with insurance companies and brokers. The coverage you thought you had coming might wind up different when claim time comes"
    },
    {
      description: "When you leave your employer you might remember to continue the coverage on your own, but it might just \"FALL THROUGH THE CRACKS!\""
    },
    {
      description: "YOU DON'T HAVE YOUR CAR INSURANCE THROUGH YOUR EMPLOYER, DO YOU? OR YOUR HOMEOWNERS OR MORTGAGE THROUGH THE BOSS, DO YOU?"
    },
    {
      description: "SO WHY HAVE YOUR SUPPLEMENTAL COVERAGES THROUGH THE JOB?"
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

          {/* Calendly Widget */}
          <div className="mt-16 pt-16 border-t border-gray-200">
            <div className="max-w-4xl mx-auto mb-16">
              <div className="calendly-inline-widget" data-url="https://calendly.com/srswiftm" style={{minWidth:'320px', height:'700px'}}></div>
            </div>
          </div>

          {/* New subsection: How Are We Better Than Getting Benefits On The Job? */}
          <div className="mt-16 pt-16 border-t border-gray-200">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
                How Are We Better Than Getting Benefits On The Job?
              </h3>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="space-y-6">
                {employerComparison.map((point, index) => (
                  <div 
                    key={index}
                    className="flex items-start animate-fade-in-up p-6 bg-gray-50 rounded-lg"
                    style={{ animationDelay: `${index * 0.1 + 0.4}s` }}
                  >
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-6 h-6 rounded-full bg-primary-500 flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <p className="text-gray-700 text-lg">{point.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
