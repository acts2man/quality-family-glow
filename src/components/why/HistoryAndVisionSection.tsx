
import React from "react";
import { Link } from "react-router-dom";
import { Landmark, Users, UserCheck, Briefcase } from "lucide-react";

const HistoryAndVisionSection = () => {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Journey & Vision
            </h2>
            <div className="w-20 h-1 bg-primary-500 mx-auto mb-6"></div>
          </div>

          {/* Story Timeline */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 lg:order-1">
              <div className="space-y-8">
                <div className="relative pl-12 border-l-2 border-primary-200 pb-8">
                  <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary-500"></div>
                  <h3 className="text-xl font-semibold text-primary-600 mb-2">Where We Started</h3>
                  <p className="text-gray-700">
                    We are a new venture started by insurance agents with decades of experience selling supplemental health benefits through worksites.
                  </p>
                </div>

                <div className="relative pl-12 border-l-2 border-primary-200 pb-8">
                  <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary-500"></div>
                  <h3 className="text-xl font-semibold text-primary-600 mb-2">The Legacy</h3>
                  <p className="text-gray-700">
                    Back in our grandparents' day, many insurance agents sold these benefits door to door. Insurance mogul and "Positive Thinking" guru W. Clement Stone built his empire on an accident plan that he nicknamed "The Little Giant" for all the benefits offered in a very affordable plan.
                  </p>
                </div>

                <div className="relative pl-12 border-l-2 border-primary-200 pb-8">
                  <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary-500"></div>
                  <h3 className="text-xl font-semibold text-primary-600 mb-2">The Evolution</h3>
                  <p className="text-gray-700">
                    In recent years, the focus has shifted to selling benefits at worksites. We are changing the focus again to offering coverage online—making quality benefits accessible to everyone, regardless of where they work.
                  </p>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary-100 rounded-full opacity-70 z-0"></div>
                <div className="relative z-10 bg-white p-8 rounded-xl shadow-xl border border-gray-100">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 mr-4">
                      <Landmark size={24} />
                    </div>
                    <h3 className="text-xl font-bold">Our Partnerships</h3>
                  </div>
                  <p className="text-gray-700 mb-6">
                    We are partnering with large well-established, highly rated insurance carriers. As independent agents, we shop for the best plans to serve our clients and advocate on their behalf.
                  </p>
                  <div className="grid grid-cols-3 gap-3 mt-6">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="h-12 bg-gray-100 rounded-md flex items-center justify-center">
                        <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Problems with Workplace Benefits */}
          <div className="bg-gray-50 rounded-2xl p-8 mb-16">
            <h3 className="text-2xl font-bold text-center mb-8">
              The Problem with Workplace Benefits
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center text-red-600 mb-4">
                  <Briefcase size={20} />
                </div>
                <h4 className="text-lg font-semibold mb-2">Changing Coverage</h4>
                <p className="text-gray-600 text-sm">
                  Employers often negotiate benefit packages that are satisfactory, but later change coverage levels for various reasons—the least of which are the employees' needs!
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center text-red-600 mb-4">
                  <Users size={20} />
                </div>
                <h4 className="text-lg font-semibold mb-2">Poor Communication</h4>
                <p className="text-gray-600 text-sm">
                  Sometimes employers communicate changes well, but often they don't! Critical information about your coverage can easily slip through the cracks.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center text-red-600 mb-4">
                  <UserCheck size={20} />
                </div>
                <h4 className="text-lg font-semibold mb-2">Job Changes</h4>
                <p className="text-gray-600 text-sm">
                  What happens when you change jobs? Usually you're allowed to continue voluntary benefits, but often that gets forgotten, leaving you unprotected!
                </p>
              </div>
            </div>
          </div>

          {/* Final Call-to-Action */}
          <div className="text-center bg-primary-700 text-white p-8 md:p-12 rounded-xl relative overflow-hidden">
            <div className="absolute inset-0 bg-pattern opacity-10"></div>
            <h3 className="text-2xl md:text-3xl font-bold mb-6 relative z-10">
              Take Control of Your Coverage
            </h3>
            
            <div className="space-y-3 mb-8 relative z-10">
              <p className="text-xl font-semibold">
                YOU DON'T GET YOUR CAR INSURANCE THROUGH YOUR EMPLOYER, DO YOU?
              </p>
              <p className="text-lg">
                HOW ABOUT YOUR HOME INSURANCE OR YOUR MORTGAGE OR GROCERIES?
              </p>
              <p className="text-xl font-bold mt-2">
                SO WHY GET YOUR BENEFITS THROUGH THE BOSS?
              </p>
            </div>
            
            <div className="relative z-10">
              <Link to="/contact" className="glow-button gold-button inline-block">
                <span>QUALITY FAMILY BENEFITS IS WAITING TO SERVE YOU!</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistoryAndVisionSection;
