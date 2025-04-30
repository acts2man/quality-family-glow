
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, Ambulance, User, BookOpen, CircleDollarSign, Shield, Cancer, HeartAttack, Stroke, Organ } from "lucide-react";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const AccidentPage = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-800 to-primary-600 text-white py-28 px-4">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
          <div className="w-full lg:w-1/2 mb-10 lg:mb-0 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Accident Insurance That Pays YOU — Not Just Your Doctor
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              From everyday mishaps to serious emergencies, our plans pay you directly to help with real-life recovery.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="glow-button text-lg px-6 py-3 h-auto" size="lg">
                <span>Get Covered Today</span>
              </Button>
              <Button variant="outline" className="text-lg px-6 py-3 h-auto bg-white/10 hover:bg-white/20 border-white" size="lg">
                <span>See Plan Types</span>
              </Button>
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800"
              alt="Person recovering from an injury"
              className="rounded-xl shadow-xl max-h-[500px] object-cover"
            />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
            <path fill="#ffffff" fillOpacity="1" d="M0,224L80,197.3C160,171,320,117,480,117.3C640,117,800,171,960,181.3C1120,192,1280,160,1360,144L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* Grace's Story Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col lg:flex-row items-center gap-12 bg-white rounded-2xl shadow-lg p-8 animate-fade-in-up">
            <div className="lg:w-1/3">
              <div className="bg-primary-100 rounded-full p-6 mx-auto" style={{width: "220px", height: "220px"}}>
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&h=300"
                  alt="Grace's profile"
                  className="rounded-full w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="lg:w-2/3">
              <h2 className="text-3xl font-bold mb-4 text-primary-700">Meet Grace</h2>
              <blockquote className="text-lg text-gray-700 mb-8 italic">
                "When I broke my ankle, I thought I'd lose everything. I couldn't work for weeks and had no income to cover rent or bills. But just when panic set in — I remembered my accident policy. My $4,000 payout arrived fast, giving me a lifeline when I needed it most."
              </blockquote>
              <Button 
                className="glow-button" 
                onClick={() => document.getElementById('plan-overview')?.scrollIntoView({behavior: 'smooth'})}
              >
                <span>Learn How It Works</span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Fixed-Benefit Plan Overview */}
      <section id="plan-overview" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary-800">
            Our Fixed-Benefit Plan: Based on Your Injury and Treatment
          </h2>
          
          <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Shield className="h-12 w-12 text-primary-500" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-primary-700 mb-4">How Our Plans Work</h3>
                    <p className="text-gray-700">
                      <span className="font-bold">The ACCIDENT FIXED BENEFIT PLAN</span> pays based on your injury and the treatment you receive.
                    </p>
                    <p className="text-gray-700 mt-3">
                      <span className="font-bold">The PLAN ENHANCER and TRIOMED PLAN</span> pay based on the actual charges for your treatment. You also have the option of adding coverage for critical illnesses such as cancer, heart attack, and stroke.
                    </p>
                    <div className="mt-4 bg-primary-50 p-4 rounded-lg border border-primary-100">
                      <p className="font-semibold text-primary-700">All plans can include coverage for on-the-job accidents.</p>
                      <p className="font-bold text-primary-800 mt-2">AND THEY ALL WILL PAY IF YOU ARE INJURED AS A VICTIM OF CRIME!</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800"
                  alt="Insurance coverage document"
                  className="rounded-xl shadow-md w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              {
                title: "Slip on Ice? Get Paid.",
                image: "/lovable-uploads/08592e29-42d6-4973-83d0-f1c5f645c6c7.png",
                delay: "0.1s"
              },
              {
                title: "Sports Injury? You're Covered.",
                image: "/lovable-uploads/2b91ce04-33ec-46ec-9710-fc26e48b0d57.png",
                delay: "0.2s"
              },
              {
                title: "Victim of Crime? We've Got You.",
                image: "/lovable-uploads/634f8a52-093f-4273-9811-e56fbf95539a.png",
                delay: "0.3s"
              },
              {
                title: "$200 for the Ride, $250 for the ER",
                image: "/lovable-uploads/0e38cfb0-3899-47f4-851d-168ca8a79841.png",
                delay: "0.4s"
              }
            ].map((card, index) => (
              <Card key={index} className="overflow-hidden transform transition-all hover:scale-105 duration-300 h-full shadow-lg animate-fade-in-up" style={{ animationDelay: card.delay }}>
                <div className="h-48 overflow-hidden">
                  <img 
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6 bg-white">
                  <h3 className="text-xl font-semibold text-primary-600">{card.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="bg-gray-50 rounded-xl p-8 shadow-inner mb-16 animate-fade-in-up">
            <h3 className="text-2xl font-bold mb-8 text-center text-primary-700">What You Get With Our Fixed-Benefit Plan</h3>
            
            {/* Everyday Accident Coverage - Now expanded instead of accordion */}
            <div className="mb-10">
              <h4 className="text-lg font-semibold text-primary-700 mb-4 border-b border-gray-200 pb-2">
                Everyday Accident Coverage
              </h4>
              <div className="text-gray-700">
                <p className="mb-4">Suppose you fall down while shoveling snow, a covered family member is hurt playing amateur sports, or you're a victim of a crime...</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                    <div className="flex items-center mb-2">
                      <Ambulance className="h-5 w-5 text-primary-500 mr-2" />
                      <p className="font-semibold">Ambulance</p>
                    </div>
                    <p className="text-2xl font-bold text-primary-600">$200</p>
                    <p className="text-xs text-gray-500">$3,000 for air ambulance!</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                    <div className="flex items-center mb-2">
                      <BookOpen className="h-5 w-5 text-primary-500 mr-2" />
                      <p className="font-semibold">Emergency Room</p>
                    </div>
                    <p className="text-2xl font-bold text-primary-600">$250</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                    <div className="flex items-center mb-2">
                      <CircleDollarSign className="h-5 w-5 text-primary-500 mr-2" />
                      <p className="font-semibold">Ancillary Charges</p>
                    </div>
                    <p className="text-2xl font-bold text-primary-600">$150</p>
                  </div>
                </div>
                <p className="mt-4 font-medium text-primary-700">And this is for a less serious accident that doesn't even cause you to miss work!</p>
              </div>
            </div>
            
            {/* Fracture & Hospital Benefits - Now expanded instead of accordion */}
            <div className="mb-10">
              <h4 className="text-lg font-semibold text-primary-700 mb-4 border-b border-gray-200 pb-2">
                Fracture & Hospital Benefits
              </h4>
              <div className="text-gray-700">
                <p className="mb-4">But suppose they tell you "BAD NEWS! You have a fracture!"</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                  <div>
                    <h4 className="font-semibold text-primary-600 mb-3">Fracture Payment Schedule:</h4>
                    <ul className="space-y-2">
                      <li className="flex justify-between">
                        <span>Hip, neck or skull fracture</span>
                        <span className="font-bold">$2,500</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Thigh fracture</span>
                        <span className="font-bold">$1,500</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Less serious fractures</span>
                        <span className="font-bold">$500+</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-600 mb-3">Additional Benefits:</h4>
                    <ul className="space-y-2">
                      <li className="flex justify-between">
                        <span>Hospital stay (per day)</span>
                        <span className="font-bold">$750</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Rehabilitation services</span>
                        <span className="font-bold">$150</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Maximum per covered accident</span>
                        <span className="font-bold">Up to $15,000</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <p className="mt-4">The plan can also pay for concussions and dislocations.</p>
              </div>
            </div>
            
            {/* Life & Limb Benefits - Now expanded instead of accordion */}
            <div>
              <h4 className="text-lg font-semibold text-primary-700 mb-4 border-b border-gray-200 pb-2">
                Life & Limb Benefits
              </h4>
              <div className="text-gray-700">
                <p className="mb-4">For loss of life or limb, the plan will pay:</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                    <p className="text-sm text-gray-500 mb-2">Loss of one hand, foot, or eye</p>
                    <p className="text-2xl font-bold text-primary-600">$25,000</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                    <p className="text-sm text-gray-500 mb-2">Loss of both feet, hands, or eyes</p>
                    <p className="text-2xl font-bold text-primary-600">$50,000</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                    <p className="text-sm text-gray-500 mb-2">Accidental loss of life</p>
                    <p className="text-2xl font-bold text-primary-600">$50,000</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plan Enhancer & Triomed Plan Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-primary-800">
            Prefer Simplicity? We'll Pay Your Bills — Up to $10,000
          </h2>
          <p className="text-xl text-gray-700 text-center max-w-4xl mx-auto mb-16">
            The Plan Enhancer and Triomed options pay based on the <strong>actual costs</strong> of your treatment — not just injury types. If your insurance leaves you with a deductible or uncovered expenses, we help close the gap with direct payments.
          </p>
          
          <div className="bg-white rounded-xl shadow-lg p-8 mb-10 animate-fade-in-up">
            <h3 className="text-2xl font-bold mb-6 text-primary-700 text-center">How It Works: A Real Example</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-primary-50 rounded-lg p-6 text-center">
                <p className="text-sm uppercase font-semibold text-gray-500 mb-2">Medical Bill</p>
                <p className="text-3xl font-bold text-primary-700">$4,500</p>
              </div>
              <div className="bg-primary-50 rounded-lg p-6 text-center">
                <p className="text-sm uppercase font-semibold text-gray-500 mb-2">Your Deductible</p>
                <p className="text-3xl font-bold text-primary-700">$2,000</p>
              </div>
              <div className="bg-primary-50 rounded-lg p-6 text-center">
                <p className="text-sm uppercase font-semibold text-gray-500 mb-2">QFB Plan Pays</p>
                <p className="text-3xl font-bold text-accent-gold">$4,250</p>
                <p className="text-xs text-gray-500">minus $250 first-year deductible</p>
              </div>
              <div className="bg-accent-gold/10 rounded-lg p-6 text-center border-2 border-accent-gold">
                <p className="text-sm uppercase font-semibold text-gray-700 mb-2">You Keep</p>
                <p className="text-3xl font-bold text-primary-800">$2,250</p>
                <p className="text-xs text-gray-500">to cover bills, rent, or whatever you need</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Riders & Add-Ons Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-6">
              Want More Protection? Add a Critical Illness Rider
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Our plans offer riders that pay up to <strong>$30,000</strong> if you're diagnosed with a covered condition. This financial support helps when you need it most - during treatment and recovery.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-primary-600">
              <h3 className="text-xl font-semibold text-primary-700 mb-4">Covered Conditions</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Cancer className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" />
                  <span><strong>Cancer</strong> - Including most malignant tumors and cancers</span>
                </li>
                <li className="flex items-start gap-3">
                  <HeartAttack className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" />
                  <span><strong>Heart Attack</strong> - Diagnosed acute myocardial infarction</span>
                </li>
                <li className="flex items-start gap-3">
                  <Stroke className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" />
                  <span><strong>Stroke</strong> - Resulting in permanent neurological deficit</span>
                </li>
                <li className="flex items-start gap-3">
                  <Organ className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" />
                  <span><strong>Major Organ Transplant</strong> - As a recipient of heart, lung, liver, kidney, pancreas, or bone marrow</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-primary-600">
              <h3 className="text-xl font-semibold text-primary-700 mb-4">Additional Coverage</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" />
                  <span><strong>End Stage Kidney Failure</strong> - Requiring regular dialysis</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" />
                  <span><strong>Advanced Alzheimer's Disease</strong> - Resulting in significant cognitive impairment</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" />
                  <span><strong>Coma</strong> - Resulting from severe trauma or illness</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" />
                  <span><strong>ALS (Lou Gehrig's Disease)</strong> - Progressive neurodegenerative disease</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-primary-600">
              <h3 className="text-xl font-semibold text-primary-700 mb-4">More Conditions</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" />
                  <span><strong>Parkinson's Disease</strong> - With permanent neurological deficit</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" />
                  <span><strong>Severe Burns</strong> - Covering significant body surface area</span>
                </li>
              </ul>
              
              <div className="mt-6 bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-primary-700 mb-2">Payment Structure</h4>
                <ul className="space-y-2 text-sm">
                  <li>• 100% of benefit amount to primary insured</li>
                  <li>• 50% of benefit amount to covered spouse</li>
                  <li>• 25% of benefit amount to covered child</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-primary-50 rounded-xl p-8 shadow-inner mb-8">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold mb-4 text-primary-700">How Critical Illness Coverage Works</h3>
                <p className="mb-4">If you're diagnosed with a covered condition after your coverage begins, you'll receive a lump sum payment. This payment is:</p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                  <li>Paid directly to you, not your medical providers</li>
                  <li>Available for any expenses - medical bills, mortgage, groceries, or childcare</li>
                  <li>Not affected by any other insurance you might have</li>
                  <li>Paid in addition to your accident coverage benefits</li>
                </ul>
                <p className="font-medium">Coverage amounts range from $5,000 to $30,000 depending on your selected plan.</p>
              </div>
              <div className="md:w-1/3 flex justify-center">
                <div className="bg-white p-6 rounded-full shadow-lg border-2 border-primary-300 w-48 h-48 flex flex-col items-center justify-center">
                  <span className="text-4xl font-bold text-primary-600">$30,000</span>
                  <span className="text-sm text-center text-gray-500">Maximum Benefit Available</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <Button className="glow-button text-lg px-6 py-3 h-auto">
              <span>Add Critical Illness Coverage</span>
            </Button>
            <p className="text-sm text-gray-500 mt-4">Speak with a licensed agent to customize your coverage</p>
          </div>
        </div>
      </section>

      {/* Legal & Fine Print Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-10 text-primary-800">
            Exclusions & Limitations — What You Need to Know
          </h2>
          
          <Tabs defaultValue="fixed" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="fixed">Allstate Fixed Benefit Plan</TabsTrigger>
              <TabsTrigger value="enhancer">Plan Enhancer & Triomed Plans</TabsTrigger>
            </TabsList>
            
            <TabsContent value="fixed" className="bg-white rounded-xl p-6 shadow-md">
              <div className="prose max-w-none">
                <h3 className="text-xl font-semibold mb-4">Benefits</h3>
                <p>Benefits include emergency care, hospital confinement, fractures, surgery, follow-up care, accidental death, and dismemberment. The Allstate Benefits plan pays a fixed amount directly to you based on the type of injury and treatment received.</p>
                
                <h3 className="text-xl font-semibold mt-6 mb-4">Exclusions</h3>
                <p>The policy does not pay for losses caused by or resulting from:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Self-inflicted injuries</li>
                  <li>War or act of war, declared or undeclared</li>
                  <li>Commission of a felony</li>
                  <li>Injuries incurred while intoxicated</li>
                  <li>Injuries sustained while participating in professional sports</li>
                  <li>Pre-existing conditions (limitations apply)</li>
                </ul>
              </div>
            </TabsContent>
            
            <TabsContent value="enhancer" className="bg-white rounded-xl p-6 shadow-md">
              <div className="prose max-w-none">
                <h3 className="text-xl font-semibold mb-4">Benefits</h3>
                <p>These plans pay benefits based on the actual costs of your treatment, not just by injury type. They help cover deductibles, copays, and out-of-pocket expenses. Benefits are paid directly to you unless you specify otherwise.</p>
                
                <h3 className="text-xl font-semibold mt-6 mb-4">Exclusions</h3>
                <p>These plans typically do not cover:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Pre-existing conditions (within 12 months prior to coverage)</li>
                  <li>Cosmetic or elective procedures</li>
                  <li>Mental health or substance abuse treatment</li>
                  <li>Self-inflicted injuries</li>
                  <li>Pregnancy or childbirth (except for complications)</li>
                </ul>
                <p className="text-sm mt-4"><em>*This is a summary of plan exclusions. Please refer to the policy documents for complete details.</em></p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Call to Action Footer Section */}
      <section className="py-16 bg-gradient-to-r from-primary-800 to-primary-600 text-white px-4">
        <div className="container mx-auto max-w-4xl text-center animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Want To See What You Qualify For?</h2>
          <p className="text-xl opacity-90 mb-8">It only takes a few minutes to speak with a licensed advisor.</p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button className="glow-button gold-button text-lg px-6 py-3 h-auto" size="lg">
              <span>Call Now</span>
            </Button>
            <Button variant="outline" className="text-lg px-6 py-3 h-auto bg-white/10 hover:bg-white/20 border-white" size="lg">
              <span>Schedule My Call</span>
            </Button>
          </div>
          
          <label className="flex items-center justify-center space-x-2 cursor-pointer">
            <input type="checkbox" className="w-5 h-5 rounded" />
            <span>Include my spouse on the call</span>
          </label>
        </div>
      </section>
    </div>
  );
};

export default AccidentPage;
