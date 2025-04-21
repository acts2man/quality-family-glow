
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const CancerDreadDisease = () => {
  // List of conditions covered
  const conditions = [
    "Addison's Disease",
    "ALS (Lou Gehrig's)",
    "Muscular Dystrophy",
    "Parkinson's",
    "Lupus",
    "Alzheimer's",
    "Multiple Sclerosis",
    "Sickle Cell Anemia",
    "Meningitis",
    "Encephalitis",
    "Tetanus",
    "Rheumatic Fever",
  ];

  // Plan benefits
  const benefits = [
    {
      title: "First Diagnosis",
      description: "$1,000–$10,000 upon first diagnosis",
      icon: "🏥",
    },
    {
      title: "Surgical Benefits",
      description: "$2,500–$4,000 for surgical benefits",
      icon: "🔬",
    },
    {
      title: "Chemotherapy",
      description: "$2,500–$5,000 monthly for chemotherapy",
      icon: "💊",
    },
    {
      title: "Hospital Stay",
      description: "$100–$150 daily for hospital confinement",
      icon: "🛏️",
    },
  ];

  // Plan levels
  const planLevels = ["Plan A", "Plan B", "Plan C", "Plan D"];

  // Usage examples
  const usageExamples = [
    "Rent/Mortgage",
    "Transportation to treatment",
    "Food & groceries",
    "Child care",
    "Missed income",
  ];

  return (
    <div className="w-full min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-100 to-blue-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-primary-800">
              Cancer Costs Are Real — And Mostly Non-Medical
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-700">
              We help you cover what insurance doesn't — with cash payouts you can use your way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="glow-button">
                <span>Learn About Coverage</span>
              </Button>
              <Button className="glow-button gold-button">
                <span>Speak With an Advisor</span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Core Statistics Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8 animate-fade-in-up">
              <p className="text-3xl md:text-4xl font-bold mb-4 text-primary-700">
                "1 in 2 men and 1 in 3 women will face cancer in their lifetime."
              </p>
              <p className="text-lg text-gray-500">— American Cancer Society</p>
            </div>
            <div className="mb-8 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <p className="text-2xl md:text-3xl font-semibold mb-8 text-primary-700">
                "Over 60% of cancer-related costs are non-medical."
              </p>
            </div>
            <Button className="glow-button">
              <span>Protect Yourself With a Plan</span>
            </Button>
          </div>
        </div>
      </section>

      {/* Plan Overview Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-primary-800">
              Coverage for Cancer and Over 25 Other Serious Conditions
            </h2>
            <p className="text-lg md:text-xl mb-10 text-center text-gray-700">
              Our <strong>Cancer Care Plus</strong> plans, underwritten by Manhattan Life, provide coverage for a wide range of critical conditions — from diagnosis to treatment.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
              {conditions.map((condition, index) => (
                <div 
                  key={condition} 
                  className="flex items-center bg-white p-4 rounded-md shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${0.1 * index}s` }}
                >
                  <CheckCircle className="text-primary-500 mr-2 flex-shrink-0" />
                  <span>{condition}</span>
                </div>
              ))}
              <div className="flex items-center bg-white p-4 rounded-md shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in-up">
                <CheckCircle className="text-primary-500 mr-2 flex-shrink-0" />
                <span>and 15+ more</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plan Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-primary-800">
              How Cancer Care Plus Pays You
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
              {benefits.map((benefit, index) => (
                <Card 
                  key={benefit.title}
                  className="card-hover animate-fade-in-up"
                  style={{ animationDelay: `${0.1 * index}s` }}
                >
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl mb-4">{benefit.icon}</div>
                    <h3 className="font-semibold mb-2 text-primary-700">{benefit.title}</h3>
                    <p className="text-gray-700">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <p className="text-center text-xl italic text-primary-700">All to be used as you see fit.</p>
          </div>
        </div>
      </section>

      {/* Plan Levels Table */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-primary-800">
              Choose the Coverage Level That's Right for You
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              {planLevels.map((plan, index) => (
                <Card 
                  key={plan}
                  className="card-hover animate-fade-in-up"
                  style={{ animationDelay: `${0.1 * index}s` }}
                >
                  <CardContent className="p-6 text-center">
                    <h3 className="text-xl font-bold mb-4 text-primary-800">{plan}</h3>
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
                      <div 
                        className="bg-primary-500 h-2 rounded-full" 
                        style={{ width: `${25 * (index + 1)}%` }}
                      ></div>
                    </div>
                    <p className="text-gray-700 font-semibold">Coverage Level</p>
                    <p className="text-lg text-primary-800">{`${25 * (index + 1)}%`}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <p className="text-center text-gray-700 mb-4">
              <span className="font-medium">Note:</span> Reduced payout percentages apply: 50% for spouse, 25% for child
            </p>
          </div>
        </div>
      </section>

      {/* Visual Callout Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-primary-800">
              How Your $10,000 Payout Can Help
            </h2>
            
            <div className="bg-gradient-to-r from-primary-50 to-blue-50 p-8 rounded-lg shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                {usageExamples.map((usage, index) => (
                  <div 
                    key={usage}
                    className="flex flex-col items-center text-center animate-fade-in-up"
                    style={{ animationDelay: `${0.1 * index}s` }}
                  >
                    <div className="w-20 h-20 rounded-full bg-white shadow-md flex items-center justify-center text-primary-500 text-2xl mb-4">
                      ${Math.round((10000 / usageExamples.length) / 100) * 100}
                    </div>
                    <p className="font-medium text-gray-700">{usage}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="relative">
              <div className="text-6xl text-primary-200 absolute -top-10 left-0">"</div>
              <blockquote className="text-2xl md:text-3xl italic text-gray-700 mb-6 relative z-10">
                This plan helped us bridge the financial gap when my wife started chemo. We didn't know how we were going to manage — until this.
              </blockquote>
              <div className="text-6xl text-primary-200 absolute bottom-0 right-0">"</div>
            </div>
          </div>
        </div>
      </section>

      {/* Legal/Exclusions Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center text-primary-800">
              Limitations & Exclusions
            </h2>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm mb-8">
              <h3 className="text-xl font-semibold mb-4">General Limitations for Cancer Care Plus</h3>
              <p className="text-gray-700 mb-4">
                Pre-existing conditions may not be covered for the first 12 months. Coverage is subject to 
                specific definitions of conditions and diagnoses. Plans may vary by state. Not all conditions 
                or treatments may be covered. Please consult your policy documents for complete details.
              </p>
              <Button variant="outline" className="flex items-center gap-2">
                <span>Download Full Policy Details (PDF)</span>
              </Button>
            </div>
            
            <p className="text-center text-gray-600 italic">
              Other plans may be available from other providers. Call us to explore options tailored to you.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              You Deserve Financial Peace During Life's Hardest Moments
            </h2>
            <p className="text-xl mb-8">
              Let us help you choose the right coverage before you need it.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button className="glow-button gold-button">
                <span>Call Now</span>
              </Button>
              <Button className="glow-button bg-white text-primary-700 hover:bg-gray-100">
                <span>Schedule a Call</span>
              </Button>
            </div>
            
            <label className="flex items-center justify-center gap-2">
              <input type="checkbox" className="w-4 h-4 text-primary-500" />
              <span>Include My Spouse or Family Member</span>
            </label>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CancerDreadDisease;
