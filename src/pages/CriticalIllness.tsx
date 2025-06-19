import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Heart, DollarSign, Shield, Clock, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import OtherCoveragesSection from "@/components/OtherCoveragesSection";

const fadeIn = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6
    }
  }
};

const iconFloat = {
  hidden: {
    opacity: 0,
    scale: 0.8
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const CriticalIllness = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToContact = () => {
    document.getElementById('final-cta')?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary-100 to-white relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-20 h-20 bg-primary-300 rounded-full animate-float"></div>
            <div className="absolute top-40 right-20 w-16 h-16 bg-accent-gold rounded-full animate-float" style={{
              animationDelay: '2s'
            }}></div>
            <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-primary-400 rounded-full animate-float" style={{
              animationDelay: '4s'
            }}></div>
          </div>
          
          <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
            <div className="flex flex-col md:flex-row items-center">
              <motion.div className="md:w-1/2 mb-8 md:mb-0" initial="hidden" animate="visible" variants={fadeIn}>
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary-800">
                  When the Diagnosis Comes, Be Ready
                </h1>
                
                {/* Mobile image - shown only on mobile between title and paragraph */}
                <motion.div 
                  className="md:hidden mb-6" 
                  initial="hidden" 
                  animate="visible" 
                  variants={fadeIn} 
                  transition={{ delay: 0.2 }}
                >
                  <div className="relative rounded-lg overflow-hidden shadow-xl">
                    <img 
                      src="/lovable-uploads/26b4e11f-d251-48cb-bd23-d3d1ed4d5e0c.png" 
                      alt="Hospital room with medical monitoring equipment" 
                      className="w-full h-auto object-cover max-h-[300px]" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-800/30 to-transparent"></div>
                  </div>
                </motion.div>
                
                <p className="text-xl text-gray-700 mb-8">
                  Heart attacks. Stroke. Cancer. Our Critical Illness plans pay you directly — so you can focus on recovery, not bills.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="https://calendly.com" className="glow-button gold-button">
                    <span>Speak With an Advisor</span>
                  </a>
                </div>
              </motion.div>
              
              {/* Desktop image - hidden on mobile, shown on desktop */}
              <motion.div className="hidden md:block md:w-1/2" initial="hidden" animate="visible" variants={fadeIn} transition={{ delay: 0.3 }}>
                <div className="relative rounded-lg overflow-hidden shadow-xl">
                  <img src="/lovable-uploads/26b4e11f-d251-48cb-bd23-d3d1ed4d5e0c.png" alt="Hospital room with medical monitoring equipment" className="w-full h-auto object-cover" style={{
                    minHeight: "350px"
                  }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-800/30 to-transparent"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Statistics Section with Icons */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {/* Opening Statistics with Visual Impact */}
              <motion.div className="text-center mb-16" initial="hidden" whileInView="visible" viewport={{
              once: true
            }} variants={fadeIn}>
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                  <motion.div className="bg-white p-8 rounded-2xl shadow-lg border border-primary-100 card-hover" variants={iconFloat} transition={{
                  delay: 0.1
                }}>
                    <div className="flex justify-center mb-4">
                      <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center">
                        <Heart className="w-8 h-8 text-destructive" />
                      </div>
                    </div>
                    <p className="text-3xl font-bold text-destructive mb-2">40%</p>
                    <p className="text-gray-700">
                      The American Cancer Society estimates that <strong>40% of the population will develop cancer at some time in their life!</strong>
                    </p>
                  </motion.div>

                  <motion.div className="bg-white p-8 rounded-2xl shadow-lg border border-primary-100 card-hover" variants={iconFloat} transition={{
                  delay: 0.2
                }}>
                    <div className="flex justify-center mb-4">
                      <div className="w-16 h-16 bg-accent-gold/10 rounded-full flex items-center justify-center">
                        <DollarSign className="w-8 h-8 text-accent-gold" />
                      </div>
                    </div>
                    <p className="text-3xl font-bold text-accent-gold mb-2">60%</p>
                    <p className="text-gray-700">
                      The expenses are <strong>HUGE</strong> and <strong>60% are not covered by medical insurance!</strong>
                    </p>
                  </motion.div>

                  <motion.div className="bg-white p-8 rounded-2xl shadow-lg border border-primary-100 card-hover" variants={iconFloat} transition={{
                  delay: 0.3
                }}>
                    <div className="flex justify-center mb-4">
                      <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
                        <Heart className="w-8 h-8 text-primary-600" />
                      </div>
                    </div>
                    <p className="text-lg font-bold text-primary-600 mb-2">Most of Us</p>
                    <p className="text-gray-700">
                      And most of us will eventually experience heart attacks and strokes
                    </p>
                  </motion.div>
                </div>
              </motion.div>

              {/* Solution Section with Icons */}
              <motion.div className="bg-gradient-to-r from-primary-700 to-primary-900 p-8 md:p-12 rounded-3xl text-white mb-12" initial="hidden" whileInView="visible" viewport={{
              once: true
            }} variants={fadeIn}>
                <div className="text-center mb-8">
                  <div className="flex justify-center mb-4">
                    <div className="w-20 h-20 bg-accent-gold/20 rounded-full flex items-center justify-center">
                      <Shield className="w-10 h-10 text-accent-gold" />
                    </div>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Solution</h2>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8 text-lg">
                  <div className="space-y-4">
                    <p>
                      We represent companies who offer plans that can put <strong className="text-accent-gold">MONEY</strong> in your pocket at a time when you desperately need it!
                    </p>
                    <p>
                      We represent a number of different companies with different levels of coverage.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <p>
                      All will pay on diagnosis for <strong className="text-accent-gold">CANCER HEART ATTACKS AND STROKES</strong>. Some cover other illnesses.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Benefits Section with Timeline */}
              <motion.div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100 mb-12" initial="hidden" whileInView="visible" viewport={{
              once: true
            }} variants={fadeIn}>
                <div className="text-center mb-8">
                  <div className="flex justify-center mb-4">
                    <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center">
                      <Clock className="w-10 h-10 text-primary-600" />
                    </div>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-6">Lock In Your Rates Today</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="space-y-6 text-lg text-gray-700">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-accent-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white font-bold text-sm">1</span>
                      </div>
                      <p>
                        With all the plans, <strong>prices are locked in and will not go up with age!</strong>
                      </p>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-accent-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white font-bold text-sm">2</span>
                      </div>
                      <p>
                        To get the coverage when you are young and healthy is like buying on sale before prices go up!
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-primary-50 to-primary-100 p-6 rounded-2xl">
                    <div className="flex justify-center mb-4">
                      <Calendar className="w-12 h-12 text-primary-600" />
                    </div>
                    <p className="text-center text-primary-700 font-semibold text-lg">
                      Give us a call and we can discuss the coverage that will best fit <strong>YOU</strong> and <strong>YOUR BUDGET!</strong>
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Urgent Call to Action */}
              <motion.div className="bg-gradient-to-r from-destructive to-red-600 p-8 md:p-12 rounded-3xl text-white text-center" initial="hidden" whileInView="visible" viewport={{
              once: true
            }} variants={fadeIn}>
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center animate-pulse">
                    <Clock className="w-10 h-10 text-white" />
                  </div>
                </div>
                <p className="text-2xl md:text-3xl font-bold">
                  Get covered <strong>BEFORE YOU NEED IT! IF YOU WAIT TILL YOU NEED IT YOU WILL BE TOO LATE!</strong>
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section id="final-cta" className="py-16 bg-gradient-to-br from-primary-700 to-primary-900 text-white">
          <div className="container mx-auto px-4">
            <motion.div className="text-center max-w-2xl mx-auto" initial="hidden" whileInView="visible" viewport={{
            once: true
          }} variants={fadeIn}>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Take the First Step?
              </h2>
              <p className="text-xl text-primary-100 mb-8">
                Let's build a plan that protects your future.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a href="tel:7083304516" className="glow-button gold-button">
                  <span>Call 708.330.4516</span>
                </a>
                <a href="https://calendly.com" className="glow-button">
                  <span>Schedule a Call</span>
                </a>
              </div>
              <div className="mt-6 flex justify-center">
                
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
