
import React from "react";
import { Link } from "react-router-dom";
import { Heart, Shield, Home, Phone, Calendar, Users, DollarSign, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

const LongTermCare = () => {
  return (
    <div className="bg-gradient-to-tl from-[#F2FCE2] via-white to-[#D3E4FD] min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-20 pb-12 md:py-28 px-4 md:px-0">
        <div className="container mx-auto flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-7/12 animate-fade-in-up">
            <h1 className="text-3xl md:text-5xl font-montserrat font-bold text-primary-800 mb-5">
              Long Term Care & Home Health Care Coverage
            </h1>
            
            {/* Mobile image - shown only on mobile */}
            <div className="block md:hidden mb-6">
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=400&q=80"
                alt="Elderly Care and Support"
                className="rounded-2xl shadow-lg w-full max-h-64 object-cover mx-auto" 
              />
            </div>
            
            <h2 className="text-lg md:text-2xl text-primary-700 mb-7 font-inter">
              Protecting your savings while ensuring quality care when you need it most
            </h2>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-accent-gold text-primary-800 hover:bg-accent-gold/90 font-semibold py-3 px-6 text-lg shadow-md hover:shadow-lg transition-all duration-300"
                onClick={() => window.open('https://calendly.com', '_blank')}
              >
                Schedule a Consultation
              </Button>
              <Button 
                className="bg-primary-500 text-white hover:bg-primary-600 font-semibold py-3 px-6 text-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-2"
                onClick={() => window.open('tel:7083304516', '_blank')}
              >
                <Phone className="w-5 h-5" />
                Call Now
              </Button>
            </div>
          </div>
          {/* Desktop image - shown only on desktop */}
          <div className="hidden md:block md:w-5/12">
            <img
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=400&q=80"
              alt="Elderly Care and Support"
              className="rounded-2xl shadow-lg w-4/5 max-h-80 object-cover mx-auto" 
            />
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="container mx-auto px-4 py-12 md:py-16 max-w-5xl">
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
      </section>

      {/* CTA Section */}
      <section className="bg-primary-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Protect Your Future?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Don't let long-term care costs devastate your savings. Let's discuss innovative solutions that work for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-accent-gold text-primary-800 hover:bg-accent-gold/90 font-semibold px-8 py-3 text-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-2"
              onClick={() => window.open('https://calendly.com', '_blank')}
            >
              <Calendar className="w-5 h-5" />
              Schedule a Consultation
            </Button>
            <Button 
              size="lg" 
              className="bg-white/10 border-white/30 text-white hover:bg-white/20 font-semibold px-8 py-3 text-lg shadow-md hover:shadow-lg transition-all duration-300 border"
              onClick={() => window.open('tel:7083304516', '_self')}
            >
              <Phone className="w-5 h-5" />
              Call 708.330.4516
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LongTermCare;
