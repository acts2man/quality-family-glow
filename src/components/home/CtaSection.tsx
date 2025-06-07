
import React from "react";

const CtaSection = () => {
  return (
    <section id="schedule" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Image column */}
            <div className="relative">
              <img 
                src="/lovable-uploads/8d778188-0f08-4753-b07a-4c1f2ba8d4de.png" 
                alt="Person relaxing on couch" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-primary-500/40 to-primary-800/80 flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <h3 className="text-3xl font-bold mb-4">Peace of Mind is Just a Call Away</h3>
                  <p className="text-lg text-white/90">
                    Our expert advisors are ready to help you find the perfect coverage.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Form column */}
            <div className="p-8 md:p-12">
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-4 text-gray-900">
                  Sounds Good? Great.
                </h2>
                <p className="text-lg text-gray-600">
                  Until you enroll, our plans can't help protect you and your family. 
                  Let's talk about the coverage that's right for you.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="tel:7083304516" className="glow-button w-full sm:w-auto text-center">
                    <span>Call Now</span>
                  </a>
                  <a href="#" className="glow-button gold-button w-full sm:w-auto text-center">
                    <span>Schedule a Consultation</span>
                  </a>
                </div>
              </div>
              
              <div className="mt-10 text-center text-gray-500 text-sm">
                <p>
                  Your information is protected by our <a href="#" className="text-primary-500 hover:underline">privacy policy</a>.
                  We never share your details without permission.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
