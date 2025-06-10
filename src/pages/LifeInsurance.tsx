import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, Users, Heart, FileText, Phone, Shield, ShieldCheck } from "lucide-react";
import OtherCoveragesSection from "@/components/OtherCoveragesSection";

export default function LifeInsurance() {
  const [includeSpouse, setIncludeSpouse] = useState(false);

  return (
    <div className="bg-gradient-to-tl from-[#F2FCE2] via-white to-[#D3E4FD] min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-20 pb-12 md:py-28 px-4 md:px-0">
        <div className="container mx-auto flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-7/12 animate-fade-in-up">
            <h1 className="text-3xl md:text-5xl font-montserrat font-bold text-primary-800 mb-5">
              Life Insurance That Leaves a Legacy — Not a Bill
            </h1>
            <h2 className="text-lg md:text-2xl text-primary-700 mb-7 font-inter">
              Protect your loved ones with permanent, affordable coverage — even if your health isn't perfect.
            </h2>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://calendly.com" className="glow-button gold-button" >
                Schedule a No-Pressure Call
              </a>
            </div>
          </div>
          <div className="hidden md:block md:w-5/12">
            <img
              src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=500&q=80"
              alt="Family Legacy"
              className="rounded-2xl shadow-lg w-full object-cover" />
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="container mx-auto px-4 py-12 md:py-16 max-w-5xl">
        {/* Introduction */}
        <div className="text-center mb-12">
          <p className="text-lg text-primary-900 mb-8 leading-relaxed">
            Many insurance agents are out there selling different types of coverages.<br />
            Some are used for investments and are very sophisticated and good but very expensive
          </p>
        </div>

        {/* Focus Statement */}
        <div className="bg-gradient-to-r from-primary-800 to-primary-700 text-white rounded-2xl p-8 md:p-12 mb-12 shadow-xl">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-shrink-0">
              <Heart className="w-16 h-16 text-accent-gold" />
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                OUR FOCUS IS ON HELPING PEOPLE WHO JUST WANT TO MAKE SURE THEIR FINAL EXPENSES ARE PAID.
              </h3>
              <p className="text-xl text-white/90 leading-relaxed">
                YOU DON'T WANT ANYONE TO "HIT THE JACKPOT" AND BECOME RICH AT YOUR PASSING; YOU JUST WANT TO LEAVE HAPPY MEMORIES BEHIND INSTEAD OF A FUNERAL BILL!
              </p>
            </div>
          </div>
        </div>

        {/* Our Promise Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white/70 rounded-xl p-6 shadow-lg card-hover">
            <div className="flex items-center gap-4 mb-4">
              <ShieldCheck className="w-8 h-8 text-accent-gold" />
              <h4 className="text-xl font-bold text-primary-800">Permanent Protection</h4>
            </div>
            <p className="text-primary-700 leading-relaxed">
              We offer plans that are permanent, that cannot be cancelled by the insurance companies regardless of any health issues that develop. The price will also be locked in for life!
            </p>
          </div>
          
          <div className="bg-white/70 rounded-xl p-6 shadow-lg card-hover">
            <div className="flex items-center gap-4 mb-4">
              <Shield className="w-8 h-8 text-accent-gold" />
              <h4 className="text-xl font-bold text-primary-800">Trusted Companies</h4>
            </div>
            <p className="text-primary-700 leading-relaxed">
              And we only represent companies that are financially sound, protected by state guarantee associations and have a history of great customer service.
            </p>
          </div>
        </div>

        {/* Who We Help Section */}
        <div className="bg-gradient-to-r from-[#FEF7CD]/70 to-[#FFD700]/20 rounded-2xl p-8 md:p-12 mb-12">
          <div className="text-center mb-8">
            <Users className="w-12 h-12 text-primary-700 mx-auto mb-4" />
            <h3 className="text-2xl md:text-3xl font-bold text-primary-800 mb-4">
              We Help People of All Ages
            </h3>
            <p className="text-lg text-primary-700 mb-6">
              Including those who are older and have health issues that most insurance people consider uninsurable.
            </p>
          </div>
          
          <div className="bg-white/60 rounded-xl p-6 mb-6">
            <h4 className="text-xl font-bold text-primary-800 mb-4 text-center">
              We are thrilled to help people with serious conditions such as:
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-primary-700">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-accent-gold flex-shrink-0" />
                <span>HIV</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-accent-gold flex-shrink-0" />
                <span>COPD</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-accent-gold flex-shrink-0" />
                <span>Histories of cancer</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-accent-gold flex-shrink-0" />
                <span>Heart attack</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-accent-gold flex-shrink-0" />
                <span>Stroke</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-accent-gold flex-shrink-0" />
                <span>And much more</span>
              </div>
            </div>
          </div>
          
          <p className="text-center text-primary-800 font-semibold">
            While it is certainly best to get coverage when you are young and healthy, we are certain that the plans we offer will be the best way available to plan for your inevitable final expenses.
          </p>
        </div>
      </section>

      {/* Other Coverages Available Section */}
      <OtherCoveragesSection />

      {/* Final CTA Block */}
      <section className="w-full bg-gradient-to-t from-[#FFD70020] via-[#F2FCE2] to-[#D3E4FD] py-14 px-4 animate-fade-in-up">
        <div className="container mx-auto flex flex-col items-center gap-6">
          <h3 className="text-2xl md:text-3xl font-bold text-primary-800 mb-2 text-center">
            Call or Schedule a No Pressure Consultation
          </h3>
          <p className="text-primary-800 text-lg md:text-xl text-center max-w-2xl mb-4">
            With a trained licensed professional
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
            <a href="tel:7083304516" className="glow-button gold-button text-center">
              <Phone className="mr-2" /> Call Now - 708.330.4516
            </a>
            <a href="https://calendly.com" className="glow-button text-center">
              Schedule a Call
            </a>
          </div>
          <label className="flex items-center gap-2 mt-4 cursor-pointer text-primary-900">
            <input
              type="checkbox"
              checked={includeSpouse}
              onChange={e => setIncludeSpouse(e.target.checked)}
              className="form-checkbox accent-primary-600 w-5 h-5 rounded focus:ring-2 focus:ring-primary"
            />
            <span className="select-none">Include My Spouse or Family Member</span>
          </label>
        </div>
      </section>
    </div>
  );
}
