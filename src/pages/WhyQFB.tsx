import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { HandCoins, HandHeart, Clock, Shield, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";
import OtherCoveragesSection from "@/components/OtherCoveragesSection";
import HistoryAndVisionSection from "@/components/why/HistoryAndVisionSection";

const WhyQFB = () => {
  return (
    <div className="min-h-screen">
      {/* 1. Hero Section */}
      <section className="relative min-h-[60vh] bg-gradient-to-r from-primary-800 to-primary-700 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-800/90 to-primary-700/90 z-10"></div>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3')] bg-cover bg-center opacity-20"></div>
        </div>
        
        <div className="container mx-auto px-4 py-20 md:py-28 relative z-20 flex flex-col items-center justify-center min-h-[60vh]">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight animate-fade-in">
              Why Families Trust Us
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 animate-fade-in-up" style={{
            animationDelay: "0.2s"
          }}>
              Real Protection. Real People. Real Benefits.
            </p>
            
            <div className="flex justify-center mb-12 animate-fade-in-up" style={{
            animationDelay: "0.4s"
          }}>
              <a href="#contact" className="glow-button gold-button">
                <span>Get Protected Today</span>
              </a>
            </div>
          </div>
          
          {/* Animated background shapes */}
          <div className="absolute top-1/4 left-10 w-64 h-64 rounded-full bg-primary-300/10 blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-10 w-80 h-80 rounded-full bg-accent-gold/10 blur-3xl animate-float" style={{
          animationDelay: "2s"
        }}></div>
        </div>
      </section>

      {/* New History and Vision Section */}
      <HistoryAndVisionSection />

      {/* 2. Built For Real Life Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Built For Real Life
            </h2>
            <div className="w-20 h-1 bg-primary-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Quality Family Benefits understands the challenges families face. Our plans are designed to provide financial support when you need it most.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex items-center space-x-6">
              <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center text-primary-500">
                <Clock className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Fast Claim Payments</h3>
                <p className="text-gray-600">Quick access to funds when you need them.</p>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center text-primary-500">
                <HandCoins className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Affordable Coverage</h3>
                <p className="text-gray-600">Quality protection that fits your budget.</p>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center text-primary-500">
                <HandHeart className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Family-First Approach</h3>
                <p className="text-gray-600">Coverage designed with your loved ones in mind.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. What Makes Us Different Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              We're Not Just a Policy. We're an Advocate.
            </h2>
            <div className="w-20 h-1 bg-primary-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              What sets Quality Family Benefits apart is our commitment to providing coverage that truly protects families when traditional insurance falls short.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center text-primary-500 mx-auto mb-6">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">Guaranteed Issue Policies</h3>
              <p className="text-gray-600 text-center mb-4">No health questions required for many of our policies.</p>
              <div className="border-t border-gray-100 pt-4 mt-2">
                <h4 className="text-lg font-medium mb-2">Guaranteed Issue</h4>
                <p className="text-sm text-gray-600">
                  Many of our policies are available with no medical exam or health questions, ensuring that everyone can get the coverage they need regardless of pre-existing conditions.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center text-primary-500 mx-auto mb-6">
                <DollarSign className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">Direct Payments to You</h3>
              <p className="text-gray-600 text-center mb-4">Benefits are paid directly to you, not hospitals or doctors.</p>
              <div className="border-t border-gray-100 pt-4 mt-2">
                <h4 className="text-lg font-medium mb-2">Cash in Your Hands</h4>
                <p className="text-sm text-gray-600">
                  Unlike traditional health insurance, our benefits are paid directly to you, allowing you to use the funds wherever they're needed most in your life.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center text-primary-500 mx-auto mb-6">
                <HandHeart className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">Flexible Use of Benefits</h3>
              <p className="text-gray-600 text-center mb-4">Pay rent, groceries, childcare—your choice.</p>
              <div className="border-t border-gray-100 pt-4 mt-2">
                <h4 className="text-lg font-medium mb-2">Use Benefits Your Way</h4>
                <p className="text-sm text-gray-600">
                  When you receive a benefit payment, there are no restrictions on how you use it. Pay medical bills, mortgage, utilities, childcare, or any other expenses.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. The Grace Story Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
            <div className="md:order-2">
              <img
                src="https://images.unsplash.com/photo-1560786499-b5f348f05339?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                alt="Grace and her family"
                className="rounded-2xl shadow-lg"
              />
            </div>
            <div className="md:order-1">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">
                Meet Grace: A Story of Real Protection
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                When Grace was diagnosed with a critical illness, her Quality Family Benefits plan provided the financial support she needed to focus on recovery, not bills.
              </p>
              <Button asChild variant="secondary">
                <Link to="/stories">Read Grace's Full Story</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Coverage You Can Trust Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              What We Cover
            </h2>
            <div className="w-20 h-1 bg-primary-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our comprehensive range of supplemental insurance plans provides protection for life's most challenging moments.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <Link to="/accident" className="block h-full">
                <div className="h-2 bg-primary-500"></div>
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 rounded-full bg-primary-100 flex items-center justify-center text-primary-500 mx-auto mb-4">
                    <HandCoins className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">Accident Plans</h3>
                  <p className="text-sm text-gray-600">
                    Coverage for injuries that helps with medical and recovery costs when accidents happen.
                  </p>
                </CardContent>
              </Link>
            </Card>

            <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <Link to="/critical-illness" className="block h-full">
                <div className="h-2 bg-primary-600"></div>
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 rounded-full bg-primary-100 flex items-center justify-center text-primary-500 mx-auto mb-4">
                    <Shield className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">Critical Illness</h3>
                  <p className="text-sm text-gray-600">
                    Lump-sum benefits when diagnosed with covered serious conditions like heart attack or stroke.
                  </p>
                </CardContent>
              </Link>
            </Card>

            <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <Link to="/cancer-dread-disease" className="block h-full">
                <div className="h-2 bg-primary-700"></div>
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 rounded-full bg-primary-100 flex items-center justify-center text-primary-500 mx-auto mb-4">
                    <HandHeart className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">Cancer/Dread Disease</h3>
                  <p className="text-sm text-gray-600">
                    Specialized coverage for cancer treatment costs and associated expenses.
                  </p>
                </CardContent>
              </Link>
            </Card>

            <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <Link to="/life-insurance" className="block h-full">
                <div className="h-2 bg-primary-800"></div>
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 rounded-full bg-primary-100 flex items-center justify-center text-primary-500 mx-auto mb-4">
                    <Shield className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">Life Insurance</h3>
                  <p className="text-sm text-gray-600">
                    Financial protection for your family's future and peace of mind.
                  </p>
                </CardContent>
              </Link>
            </Card>

            <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 opacity-80">
              <div className="block h-full">
                <div className="h-2 bg-accent-gold"></div>
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 rounded-full bg-primary-100 flex items-center justify-center text-primary-500 mx-auto mb-4">
                    <HandHeart className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">Dental</h3>
                  <p className="text-sm text-gray-600">
                    Comprehensive dental coverage for routine and emergency care.
                  </p>
                  <span className="inline-block mt-3 text-xs bg-accent-gold text-primary-800 px-2 py-0.5 rounded-full">
                    Coming Soon
                  </span>
                </CardContent>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* 6. CTA Footer Section */}
      <section className="py-16 bg-gradient-to-r from-primary-700 to-primary-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="relative">
              {/* Background decorative elements */}
              <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-accent-gold rounded-full opacity-20 blur-lg"></div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Your Peace of Mind Is One Click Away
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Let's talk about how we can protect your family with affordable coverage that pays when you need it most.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
                <a href="tel:7083304516" className="glow-button gold-button">
                  <span>Call Now: 708.330.4516</span>
                </a>
                <a href="https://calendly.com" className="glow-button">
                  <span>Schedule a Free Consultation</span>
                </a>
              </div>
              
              <p className="text-white/80 text-sm max-w-lg mx-auto">
                Our coverage specialists are ready to answer your questions and help find the right protection for your family's unique needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Other Coverages Available Section */}
      <OtherCoveragesSection />
    </div>
  );
};

export default WhyQFB;
