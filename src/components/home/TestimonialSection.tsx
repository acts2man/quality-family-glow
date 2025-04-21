
import React from "react";

const TestimonialSection = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-primary-500 to-primary-700 text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute left-0 top-10 w-96 h-96 rounded-full bg-white/5 blur-3xl"></div>
      <div className="absolute right-0 bottom-10 w-96 h-96 rounded-full bg-accent-gold/10 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Grace's Story
            </h2>
            <div className="w-20 h-1 bg-accent-gold mx-auto mb-6"></div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 md:p-10 shadow-xl animate-fade-in-up">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Image Column */}
              <div className="relative">
                <div className="aspect-square rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80" 
                    alt="Grace" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent-gold rounded-full flex items-center justify-center text-primary-800 font-bold text-xl">
                  $8,500
                </div>
              </div>
              
              {/* Content Column */}
              <div className="lg:col-span-2">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  "When I broke my ankle, I thought I'd lose everything..."
                </h3>
                <div className="space-y-4 text-white/90 mb-6">
                  <p>
                    "Last winter, I slipped on ice and broke my ankle badly. I needed surgery and was out of work for 8 weeks. 
                    Even with my regular health insurance, the co-pays, deductibles, and lost wages were overwhelming."
                  </p>
                  <p>
                    "Thankfully, my accident policy from Quality Family Benefits paid me directly. I received $8,500 that covered 
                    my out-of-pocket medical costs, helped with rent while I couldn't work, and even paid for food delivery since
                    I couldn't drive to the store."
                  </p>
                  <p className="font-semibold text-white">
                    "Without this coverage, I might have lost my apartment. Instead, I focused on healing without financial stress."
                  </p>
                </div>
                <div className="flex items-center">
                  <div>
                    <p className="font-bold text-xl">Grace Martinez</p>
                    <p className="text-white/80">Policy holder since 2022</p>
                  </div>
                </div>
                <div className="mt-8">
                  <a href="#" className="glow-button gold-button">
                    <span>Get Protected Like Grace</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
