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
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80" 
                alt="Family protected by insurance" 
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
                  <a href="tel:7088665057" className="glow-button w-full sm:w-auto text-center">
                    <span>Call Now</span>
                  </a>
                  <a href="#" className="glow-button gold-button w-full sm:w-auto text-center">
                    <span>Schedule a Consultation</span>
                  </a>
                </div>
                
                <div className="pt-6 border-t border-gray-200">
                  <p className="text-gray-600 mb-4">
                    Would you like to include your spouse or another family member on the call?
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <button className="px-4 py-2 border-2 border-primary-500 text-primary-500 rounded-md font-medium hover:bg-primary-50 transition-colors">
                      Yes, my spouse
                    </button>
                    <button className="px-4 py-2 border-2 border-primary-500 text-primary-500 rounded-md font-medium hover:bg-primary-50 transition-colors">
                      Yes, someone else
                    </button>
                    <button className="px-4 py-2 border-2 border-primary-500 text-primary-500 rounded-md font-medium hover:bg-primary-50 transition-colors">
                      No, just me
                    </button>
                  </div>
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
