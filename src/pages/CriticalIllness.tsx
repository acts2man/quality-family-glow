import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import OtherCoveragesSection from "@/components/OtherCoveragesSection";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

const CriticalIllness = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToContact = () => {
    document.getElementById('final-cta')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow pt-20">
        {/* Hero Section - Keep existing but remove "Explore Plan Options" button */}
        <section className="bg-gradient-to-b from-primary-100 to-white">
          <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="flex flex-col md:flex-row items-center">
              <motion.div 
                className="md:w-1/2 mb-8 md:mb-0"
                initial="hidden"
                animate="visible"
                variants={fadeIn}
              >
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary-800">
                  When the Diagnosis Comes, Be Ready
                </h1>
                <p className="text-xl text-gray-700 mb-8">
                  Heart attacks. Stroke. Cancer. Our Critical Illness plans pay you directly — so you can focus on recovery, not bills.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button onClick={scrollToContact} variant="outline" className="border-primary-500 text-primary-500 hover:bg-primary-50">
                    <span>Speak With an Advisor</span>
                  </Button>
                </div>
              </motion.div>
              <motion.div 
                className="md:w-1/2"
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                transition={{ delay: 0.3 }}
              >
                <div className="relative rounded-lg overflow-hidden shadow-xl">
                  <img 
                    src="/lovable-uploads/26b4e11f-d251-48cb-bd23-d3d1ed4d5e0c.png" 
                    alt="Hospital room with medical monitoring equipment" 
                    className="w-full h-auto object-cover"
                    style={{ minHeight: "350px" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-800/30 to-transparent"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Main Content Section - Replace with client content */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <motion.div 
              className="max-w-4xl mx-auto text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <div className="text-lg md:text-xl text-gray-700 space-y-6 leading-relaxed">
                <p>
                  The American Cancer Society estimates that <strong>40% of the population will develop cancer at some time in their life!</strong>
                </p>
                <p>
                  The expenses are <strong>HUGE</strong> and <strong>60% are not covered by medical insurance!</strong>
                </p>
                <p>
                  And most of us will eventually experience heart attacks and strokes
                </p>
                <p className="pt-4">
                  We represent companies who offer plans that can put <strong>MONEY</strong> in your pocket at a time when you desperately need it!
                </p>
                <p>
                  We represent a number of different companies with different levels of coverage.
                </p>
                <p>
                  All will pay on diagnosis for <strong>CANCER HEART ATTACKS AND STROKES</strong>. Some cover other illnesses.
                </p>
                <p className="pt-4">
                  With all the plans, <strong>prices are locked in and will not go up with age!</strong>
                </p>
                <p>
                  To get the coverage when you are young and healthy is like buying on sale before prices go up!
                </p>
                <p className="pt-6 text-primary-700 font-semibold">
                  Give us a call and we can discuss the coverage that will best fit <strong>YOU</strong> and <strong>YOUR BUDGET!</strong>
                </p>
                <p className="text-destructive font-bold text-xl pt-4">
                  Get covered <strong>BEFORE YOU NEED IT! IF YOU WAIT TILL YOU NEED IT YOU WILL BE TOO LATE!</strong>
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section id="final-cta" className="py-16 bg-gradient-to-br from-primary-700 to-primary-900 text-white">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center max-w-2xl mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Take the First Step?
              </h2>
              <p className="text-xl text-primary-100 mb-8">
                Let's build a plan that protects your future.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a href="tel:7083304516" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-accent-gold text-primary-800 hover:bg-accent-gold/90 h-10 px-4 py-2 glow-button">
                  <span>Call 708-330-4516</span>
                </a>
                <Button className="glow-button">
                  <span>Schedule a Call</span>
                </Button>
              </div>
              <div className="mt-6 flex justify-center">
                <label className="flex items-center cursor-pointer">
                  <input type="checkbox" className="rounded border-gray-300 text-primary-500 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50" />
                  <span className="ml-2 text-primary-100">Include My Spouse on the Call</span>
                </label>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Other Coverages Available Section */}
        <OtherCoveragesSection />
      </main>
    </div>
  );
};

export default CriticalIllness;
