
import React from "react";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-r from-primary-500 to-primary-600 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-700/80 to-primary-500/80 z-10"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3')] bg-cover bg-center opacity-20"></div>
      </div>
      
      <div className="container mx-auto px-4 pt-32 pb-16 md:pt-40 md:pb-24 relative z-20 flex flex-col items-center justify-center min-h-screen">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight animate-fade-in">
            Insurance That Pays <span className="text-accent-gold">YOU</span> <br className="hidden md:block" />
            When You Need It
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Accident, Critical Illness, Cancer, and Life Plans That Deliver When It Matters Most
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <a href="tel:7737995524" className="glow-button gold-button">
              <span>Call Now</span>
            </a>
            <a href="https://calendly.com/srswiftm/30min" className="glow-button">
              <span>Schedule a Call</span>
            </a>
          </div>
          
          <a 
            href="#what-we-offer" 
            className="inline-block animate-bounce text-white hover:text-accent-gold transition-colors"
            aria-label="Scroll to learn more"
          >
            <div className="flex flex-col items-center">
              <span className="text-sm mb-2 font-medium">Learn More</span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </a>
        </div>
        
        {/* Animated background shapes */}
        <div className="absolute top-1/4 left-10 w-64 h-64 rounded-full bg-primary-300/10 blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-10 w-80 h-80 rounded-full bg-accent-gold/10 blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
      </div>
      
      {/* Straight line separator */}
      <div className="absolute bottom-0 left-0 w-full">
        <Separator className="h-1 bg-white" />
      </div>
    </section>
  );
};

export default HeroSection;
