
import React, { useEffect } from "react";
import HeroSection from "@/components/home/HeroSection";
import OfferingsSection from "@/components/home/OfferingsSection";
import WhyChooseUsSection from "@/components/home/WhyChooseUsSection";
import CtaSection from "@/components/home/CtaSection";
import IntroductorySection from "@/components/home/IntroductorySection";

const Index = () => {
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
    <>
      <HeroSection />
      <IntroductorySection />
      <OfferingsSection />
      <WhyChooseUsSection />
      <CtaSection />
    </>
  );
};

export default Index;
