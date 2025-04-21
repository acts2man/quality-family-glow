
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDown, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const CriticalIllness = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToPlans = () => {
    document.getElementById('plan-comparison')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('final-cta')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-32 md:pt-40">
        {/* Hero Section */}
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
                  <Button onClick={scrollToPlans} className="glow-button">
                    <span>Explore Plan Options</span>
                    <ArrowDown className="ml-2" />
                  </Button>
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
                    src="/placeholder.svg" 
                    alt="People recovering with family support" 
                    className="w-full h-auto object-cover"
                    style={{ minHeight: "350px" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-800/30 to-transparent"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Real Talk Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-700">
                What Health Insurance Doesn't Cover… Could Cost You Everything
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Even with health insurance, a major diagnosis can leave you with overwhelming out-of-pocket expenses. 
                From lost work to unpaid rent, groceries, and travel — these aren't medical bills, but they're very real. 
                That's where we come in.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div 
                className="bg-blue-50 p-8 rounded-lg shadow-md"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                <h3 className="text-2xl font-bold mb-4 text-primary-600">What Insurance Covers</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <ShieldCheck className="text-primary-500 mr-3" />
                    <span>Hospital stays</span>
                  </li>
                  <li className="flex items-center">
                    <ShieldCheck className="text-primary-500 mr-3" />
                    <span>Surgery costs</span>
                  </li>
                  <li className="flex items-center">
                    <ShieldCheck className="text-primary-500 mr-3" />
                    <span>Some medications</span>
                  </li>
                  <li className="flex items-center">
                    <ShieldCheck className="text-primary-500 mr-3" />
                    <span>Doctor visits</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div 
                className="bg-red-50 p-8 rounded-lg shadow-md"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-2xl font-bold mb-4 text-destructive">What It Doesn't</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-destructive mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                    <span>Lost income while recovering</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-destructive mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                    <span>High deductibles and copays</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-destructive mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                    <span>Childcare during treatment</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-destructive mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                    <span>Travel and lodging for treatment</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-destructive mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                    <span>Mortgage/rent during recovery</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Key Stat Callout Block */}
        <section className="py-16 bg-primary-800 text-white">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <div className="inline-block mb-4 bg-accent-gold p-2 rounded-full">
                <svg className="w-8 h-8 text-primary-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                "More than 60% of cancer-related costs are non-medical."
              </h2>
              <p className="text-xl text-primary-100">— American Cancer Society</p>
            </motion.div>
          </div>
        </section>

        {/* Plan Overview */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-700">
                Our Critical Illness Plans Cover Life's Biggest Health Shocks
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                These plans pay out lump sum benefits to help with real-life costs. Coverage includes conditions like:
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                "Heart Attack", 
                "Stroke", 
                "Cancer", 
                "Kidney Failure", 
                "Major Organ Transplant", 
                "ALS", 
                "Parkinson's", 
                "Severe Burns",
                "Alzheimer's"
              ].map((condition, index) => (
                <motion.div 
                  key={condition}
                  className="card-hover bg-primary-50 rounded-lg p-6 text-center shadow-sm"
                  variants={fadeIn}
                  whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
                >
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <ShieldCheck className="w-8 h-8 text-primary-500" />
                  </div>
                  <h3 className="font-semibold text-primary-700">{condition}</h3>
                </motion.div>
              ))}
            </motion.div>

            <div className="text-center mt-10">
              <Button id="see-coverage" onClick={scrollToPlans} className="glow-button">
                <span>See What's Covered</span>
                <ArrowDown className="ml-2" />
              </Button>
            </div>
          </div>
        </section>

        {/* Plan Comparison Block */}
        <section id="plan-comparison" className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-700">
                Choose the Level of Protection That's Right for You
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Select the coverage amount that best fits your needs and budget. The higher the coverage, the more protection for you and your family.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { level: "Plan A", amount: "$1,000", price: "$12" },
                { level: "Plan B", amount: "$5,000", price: "$25" },
                { level: "Plan C", amount: "$10,000", price: "$45" },
                { level: "Plan D", amount: "$30,000", price: "$75" }
              ].map((plan, index) => (
                <motion.div 
                  key={plan.level}
                  className="card-hover bg-white rounded-lg shadow-md overflow-hidden"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeIn}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
                >
                  <div className="bg-primary-600 text-white p-4 text-center">
                    <h3 className="text-xl font-bold">{plan.level}</h3>
                  </div>
                  <div className="p-6 text-center">
                    <div className="text-4xl font-bold text-primary-800 mb-2">
                      {plan.amount}
                    </div>
                    <p className="text-gray-500 mb-4">Lump Sum Payout</p>
                    <div className="border-t border-gray-200 pt-4 my-4">
                      <p className="text-sm text-gray-600 mb-2">
                        Monthly Premium starting at
                      </p>
                      <p className="text-2xl font-semibold text-primary-700">
                        {plan.price}/mo
                      </p>
                    </div>
                    <Button variant="outline" className="mt-4 w-full border-primary-500 text-primary-500 hover:bg-primary-50">
                      Learn More
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div 
              className="mt-8 text-center bg-primary-50 p-6 rounded-lg"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <p className="text-primary-700">
                <strong>Note:</strong> Spouse coverage is available at 50% of primary insured benefit. 
                Children can be covered at 25% of primary insured benefit.
              </p>
              <Button className="mt-4 glow-button">
                <span>Get a Quick Quote</span>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Scenario Breakdown Example */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="bg-primary-50 rounded-lg shadow-lg overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <motion.div 
                  className="md:w-1/2 bg-primary-800 text-white p-8 flex items-center justify-center"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeIn}
                >
                  <div className="text-center md:text-left">
                    <h2 className="text-3xl font-bold mb-4">
                      How Your Coverage Works
                    </h2>
                    <p className="text-xl mb-6">
                      If you're diagnosed with cancer and your bills reach $10,000, we'll pay you up to $10,000 — money you can use for anything.
                    </p>
                    <div className="inline-block border-2 border-accent-gold p-3 rounded-lg">
                      <p className="text-accent-gold font-bold text-xl">
                        Your money. Your choice.
                      </p>
                    </div>
                  </div>
                </motion.div>
                <motion.div 
                  className="md:w-1/2 p-8"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeIn}
                  transition={{ delay: 0.2 }}
                >
                  <h3 className="text-xl font-bold mb-4 text-primary-700">
                    Use your benefit payment for:
                  </h3>
                  <ul className="space-y-3">
                    {["Mortgage or rent payments", "Childcare costs", "Transportation to treatments", "Groceries and daily expenses", "Replacing lost income", "Covering high deductibles"].map((item) => (
                      <li key={item} className="flex items-center">
                        <svg className="w-5 h-5 text-accent-gold mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Callout Banner */}
        <section className="py-16 bg-primary-100">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center max-w-4xl mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <svg className="w-12 h-12 text-accent-gold mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10z"></path>
                <path d="M21 21v-7.391h-5.5s2.778-1.222 3.833-5.391l-3.833-5.218h4.5l3.5 4.609v13.391h-2.5z" fill="currentColor" opacity="0.5"></path>
              </svg>
              <p className="text-2xl md:text-3xl font-medium text-gray-700 italic mb-6">
                "My husband's plan helped us keep the lights on during his treatment. We didn't have to choose between medicine and rent."
              </p>
              <Button className="glow-button">
                <span>Get the Coverage That Cares</span>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Legal & Exclusions Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-3xl font-bold text-primary-700">
                Critical Illness Plan Limitations & Exclusions
              </h2>
              <p className="text-gray-600">
                Important information you should know before enrolling.
              </p>
            </motion.div>
            
            <motion.div 
              className="max-w-3xl mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ delay: 0.2 }}
            >
              <Accordion type="single" collapsible className="bg-gray-50 rounded-lg shadow-sm">
                <AccordionItem value="general-exclusions">
                  <AccordionTrigger className="px-6 py-4 hover:bg-gray-100">General Exclusions</AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <p className="text-gray-700">
                      Benefits will not be paid for losses caused by or resulting from any of the following:
                    </p>
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-600">
                      <li>Intentionally self-inflicted injuries</li>
                      <li>Active participation in a riot</li>
                      <li>Commission of a felony</li>
                      <li>War, declared or undeclared</li>
                      <li>Pre-existing conditions (as defined in your policy)</li>
                      <li>Conditions diagnosed during the waiting period</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="waiting-periods">
                  <AccordionTrigger className="px-6 py-4 hover:bg-gray-100">Waiting Periods</AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <p className="text-gray-700">
                      There is a 30-day waiting period for coverage to begin. No benefits will be paid for a critical illness that begins during this waiting period.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="pre-existing-conditions">
                  <AccordionTrigger className="px-6 py-4 hover:bg-gray-100">Pre-existing Conditions</AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <p className="text-gray-700">
                      Pre-existing conditions are not covered for the first 12 months. A pre-existing condition is any condition for which medical advice, care, or treatment was received in the 12 months prior to the effective date of coverage.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-500 mb-4">
                  Other plans with other companies may better suit your needs. Call us to discuss options.
                </p>
                <Button variant="outline" className="text-sm">
                  Download Full Policy Details (PDF)
                </Button>
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
                <Button className="glow-button gold-button">
                  <span>Call Now</span>
                </Button>
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
      </main>
      <Footer />
    </div>
  );
};

export default CriticalIllness;
