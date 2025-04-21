
import React, { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import OfferingsSection from "@/components/home/OfferingsSection";
import WhyChooseUsSection from "@/components/home/WhyChooseUsSection";
import TestimonialSection from "@/components/home/TestimonialSection";
import CtaSection from "@/components/home/CtaSection";
import PlansPreviewSection from "@/components/home/PlansPreviewSection";

const Index = () => {
  // Add smooth scroll effect when clicking on anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName.toLowerCase() === 'a') {
        const href = target.getAttribute('href');
        if (href?.startsWith('#') && href.length > 1) {
          e.preventDefault();
          const elementId = href.substring(1);
          const element = document.getElementById(elementId);
          if (element) {
            window.scrollTo({
              top: element.offsetTop - 100,
              behavior: 'smooth'
            });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <HeroSection />
        <OfferingsSection />
        <WhyChooseUsSection />
        <TestimonialSection />
        <PlansPreviewSection />
        <CtaSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
