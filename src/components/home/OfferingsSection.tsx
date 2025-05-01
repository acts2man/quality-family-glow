
import React from "react";
import { Link } from "react-router-dom";

const OfferingsSection = () => {
  const insuranceProducts = [
    {
      title: "Accident Coverage",
      description: "Protection for life's unexpected moments with direct payments to you.",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 8V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 16H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      href: "/accident",
      features: ["Coverage for injuries", "Hospital stays", "Emergency treatment"]
    },
    {
      title: "Critical Illness",
      description: "Financial support during serious health challenges.",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19.5 12.5714L12 5.07144L4.5 12.5714" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M6.5 10.5714V18.0714H17.5V10.5714" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 18.0714V13.5714" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      href: "/critical-illness",
      features: ["Heart attack", "Stroke", "Major organ transplant"]
    },
    {
      title: "Cancer & Dread Disease",
      description: "Specialized coverage for cancer diagnosis and treatment.",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22 12H18L15 21L9 3L6 12H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      href: "/cancer-dread-disease",
      features: ["Cancer diagnosis", "Treatment support", "Recovery assistance"]
    },
    {
      title: "Life Insurance",
      description: "Secure your family's future with reliable life coverage.",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 4H18C19.1046 4 20 4.89543 20 6V20C20 21.1046 19.1046 22 18 22H6C4.89543 22 4 21.1046 4 20V6C4 4.89543 4.89543 4 6 4H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M15 2H9C8.44772 2 8 2.44772 8 3V5C8 5.55228 8.44772 6 9 6H15C15.5523 6 16 5.55228 16 5V3C16 2.44772 15.5523 2 15 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      href: "/life-insurance",
      features: ["Term life options", "Whole life coverage", "Death benefits"]
    }
  ];

  return (
    <section id="what-we-offer" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            What We Offer
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our supplemental insurance plans are designed to provide financial 
            support when you need it most - paying directly to you, not to doctors or hospitals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {insuranceProducts.map((product, index) => (
            <div 
              key={product.title}
              className="bg-white rounded-xl shadow-md overflow-hidden card-hover border border-gray-100"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center text-primary-500">
                    {product.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{product.title}</h3>
                <p className="text-gray-600 mb-6">{product.description}</p>
                
                <div className="space-y-2 mb-6">
                  {product.features.map((feature, i) => (
                    <div key={i} className="flex items-center">
                      <svg className="w-5 h-5 text-primary-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Link 
                  to={product.href} 
                  className="inline-flex items-center text-primary-500 font-medium hover:text-primary-700 transition-colors"
                >
                  <span>Learn More</span>
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfferingsSection;
