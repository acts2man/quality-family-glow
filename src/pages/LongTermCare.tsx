
import React from "react";
import { Link } from "react-router-dom";
import { Heart, Shield, Home, Phone, Calendar, Users, DollarSign, AlertTriangle } from "lucide-react";

const LongTermCare = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-hero-gradient text-white py-20 md:py-32">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 p-4 rounded-full">
                <Heart className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Long Term Care & Home Health Care Coverage
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8">
              Protecting your savings while ensuring quality care when you need it most
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* The Problem */}
            <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-12 rounded-r-lg">
              <div className="flex items-center mb-4">
                <AlertTriangle className="h-8 w-8 text-red-500 mr-3" />
                <h2 className="text-2xl font-bold text-red-800">The Staggering Cost Problem</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                The cost of Long Term Care is a staggering problem.<br />
                State Medicaid plans can cover costs, but when they step in they will require you to give up your savings; take everything but your gold teeth!
              </p>
            </div>

            {/* Traditional Solutions Problem */}
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-12 rounded-r-lg">
              <div className="flex items-center mb-4">
                <DollarSign className="h-8 w-8 text-yellow-600 mr-3" />
                <h2 className="text-2xl font-bold text-yellow-800">Traditional Insurance Limitations</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Long term care insurance is available, but it is very expensive and will just be money wasted if you never need it.
              </p>
            </div>

            {/* Innovative Solutions */}
            <div className="bg-primary-50 border-l-4 border-primary-500 p-6 mb-12 rounded-r-lg">
              <div className="flex items-center mb-4">
                <Shield className="h-8 w-8 text-primary-500 mr-3" />
                <h2 className="text-2xl font-bold text-primary-800">Innovative Solutions Available</h2>
              </div>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  In recent years the insurance industry has come up with some innovative solutions.
                </p>
                <p>
                  One answer are life insurance plans that can be used while the insured is living to pay the costs of long term care. The money can be a godsend to you and your family if needed.
                </p>
              </div>
            </div>

            {/* Key Benefits */}
            <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-12 rounded-r-lg">
              <div className="flex items-center mb-4">
                <Heart className="h-8 w-8 text-green-600 mr-3" />
                <h2 className="text-2xl font-bold text-green-800">No Wasted Premiums</h2>
              </div>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  But unlike other LTC insurance, the funds won't be wasted if you never have a claim.
                </p>
                <p>
                  If you pass away without needing to use long term care, the policy will pay a substantial death benefit.
                </p>
                <p className="font-semibold text-green-800">
                  Either way, the premiums you pay will not be wasted but will pay in life or in death!
                </p>
              </div>
            </div>

            {/* Home Health Care Option */}
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-12 rounded-r-lg">
              <div className="flex items-center mb-4">
                <Home className="h-8 w-8 text-blue-600 mr-3" />
                <h2 className="text-2xl font-bold text-blue-800">Home Health Care Coverage</h2>
              </div>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  Coverage for <strong>HOME HEALTH CARE</strong> might be another option.
                </p>
                <p>
                  We can discuss several options that can provide for you and your loved ones.
                </p>
              </div>
            </div>

            {/* Personal Consultation */}
            <div className="bg-accent-gold/10 border-l-4 border-accent-gold p-6 mb-12 rounded-r-lg">
              <div className="flex items-center mb-4">
                <Users className="h-8 w-8 text-amber-600 mr-3" />
                <h2 className="text-2xl font-bold text-amber-800">Personal Consultation Available</h2>
              </div>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  We will be waiting to discuss your own personal situation and how we can help.
                </p>
                <p>
                  Feel free to schedule an appointment and include family members in your discussion.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-800 text-white section-padding">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Protect Your Future?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Don't let long-term care costs devastate your savings. Let's discuss innovative solutions that work for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="#" className="glow-button gold-button flex items-center">
              <Calendar className="mr-2 h-5 w-5" />
              <span>Schedule a Consultation</span>
            </Link>
            <Link to="tel:7083304516" className="glow-button flex items-center">
              <Phone className="mr-2 h-5 w-5" />
              <span>Call 708-330-4516</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LongTermCare;
