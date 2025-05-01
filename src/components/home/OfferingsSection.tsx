
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

const OfferingsSection = () => {
  const insuranceProducts = [
    {
      title: "Accident Coverage",
      description: "Protection for life's unexpected moments with direct payments to you.",
      imageSrc: "/lovable-uploads/061b14db-72d9-48b7-bbca-fc93677535c1.png", // Car accident image
      href: "/accident",
      features: ["Coverage for injuries", "Hospital stays", "Emergency treatment"]
    },
    {
      title: "Critical Illness",
      description: "Financial support during serious health challenges.",
      imageSrc: "/lovable-uploads/1ba8b422-8262-44db-bff8-26c8f96d205a.png", // Swapped with Cancer & Dread Disease image
      href: "/critical-illness",
      features: ["Heart attack", "Stroke", "Major organ transplant"]
    },
    {
      title: "Cancer & Dread Disease",
      description: "Specialized coverage for cancer diagnosis and treatment.",
      imageSrc: "/lovable-uploads/3e0fa4db-490e-4eb2-93d9-c61683935293.png", // Swapped with Critical Illness image
      href: "/cancer-dread-disease",
      features: ["Cancer diagnosis", "Treatment support", "Recovery assistance"]
    },
    {
      title: "Life Insurance",
      description: "Secure your family's future with reliable life coverage.",
      imageSrc: "/lovable-uploads/19106bf6-1dda-457a-a9fc-71c500914a2a.png", // Insurance document with toy cars image
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
            <Card 
              key={product.title}
              className="overflow-hidden transition-all duration-300 hover:shadow-lg border border-gray-100"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={product.imageSrc} 
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
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
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfferingsSection;
