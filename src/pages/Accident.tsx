import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import OtherCoveragesSection from "@/components/OtherCoveragesSection";

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
              src="/lovable-uploads/83371fda-d166-41b4-8be2-d26ad26ded5b.png"
              alt="Woman with neck pain after car accident"
              className="rounded-xl shadow-xl max-h-[500px] object-cover"
            />
          </div>
        </div>
        {/* Straight line separator */}
        <div className="absolute bottom-0 left-0 w-full">
          <hr className="border-0 h-1 bg-white" />
        </div>
      </section>

      {/* Introductory Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-primary-700">
              OVER TWENTY MILLION PEOPLE A YEAR SUFFER ACCIDENTAL INJURIES, FROM MINOR TO FATAL!
            </h2>
            <div className="w-20 h-1 bg-accent-gold mx-auto mb-8"></div>
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-gray-700">
              <p>
                Part of what makes them so devastating is that there is no advance notice or way to prepare.
              </p>
              <p>
                Medical insurance covers most of the cost (minus <strong>HUGE DEDUCTIBLES AND COPAYS!</strong>) but there is also loss of work time and other out of pocket costs.
              </p>
              <p>
                So Medical Insurance pays the doctors (except for deductibles!) and car insurance will pay mechanics to fix your car
              </p>
              <p className="text-2xl font-bold text-primary-800">
                BUT WHO PAYS YOU FOR YOUR ECONOMIC HURT?
              </p>
              <p className="text-2xl font-bold text-accent-gold">
                THE PLANS WE OFFER WILL!
              </p>
              <p className="text-base italic text-gray-600 bg-gray-50 p-4 rounded-lg">
                (Our joke is that medical insurance will pay the doctor so he can make payments on his BMW while our plans will keep you from having your Ford or Chevy repossessed!)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Maria's Story Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-700">
              Meet Maria: A Real Story of Recovery
            </h2>
            <div className="w-20 h-1 bg-accent-gold mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              When an unexpected accident happens, having the right coverage can make all the difference.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Left column with image and highlight */}
              <div className="lg:col-span-5 bg-gradient-to-br from-primary-50 to-primary-100 p-8 flex flex-col justify-between">
                <div>
                  <div className="bg-white rounded-xl shadow-lg p-4 mb-8 max-w-xs mx-auto">
                    <img 
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&h=300"
                      alt="Maria's profile"
                      className="rounded-lg w-full h-auto"
                    />
                  </div>
                  
                  <div className="bg-white rounded-xl p-6 shadow-md mb-6">
                    <div className="flex items-center mb-4">
                      <span className="text-accent-gold text-5xl font-bold mr-2">$</span>
                      <span className="text-5xl font-bold text-primary-700">4,000</span>
                    </div>
                    <p className="text-gray-700">Payout received directly to Maria</p>
                  </div>
                  
                  <div className="bg-primary-100 border border-primary-200 rounded-lg p-4">
                    <h4 className="font-semibold text-primary-700 mb-2">Maria's Policy Details:</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-primary-500 mr-2" />
                        <span>Monthly premium: $21.95</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-primary-500 mr-2" />
                        <span>Policy in force: Since 2022</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-primary-500 mr-2" />
                        <span>Plan type: Fixed-Benefit Accident Plan</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-8 text-center">
                  <p className="text-sm text-gray-500 italic">"I never thought I'd need it until I did."</p>
                  <p className="font-bold text-primary-700">Maria Martinez</p>
                </div>
              </div>
              
              {/* Right column with story */}
              <div className="lg:col-span-7 p-8 md:p-12">
                <div className="space-y-6">
                  <div className="bg-accent-gold/10 border-l-4 border-accent-gold p-4 mb-6">
                    <h3 className="text-2xl font-bold text-primary-800 mb-2">
                      "When I broke my ankle, I thought I'd lose everything..."
                    </h3>
                  </div>
                  
                  <div className="space-y-4 text-gray-700">
                    <p className="text-lg leading-relaxed">
                      <span className="font-semibold">Maria was devastated.</span> When she slipped on ice and broke her ankle badly, 
                      she couldn't work for a month and had no idea how she would make ends meet.
                    </p>
                    
                    <p>
                      Although she had an accident plan through her job, it was so affordable that she had completely forgotten about it! 
                      Panic set in as she realized she had no income for the next month.
                    </p>
                    
                    <p>
                      <span className="italic">Desperate, she called her friends in tears.</span>
                    </p>
                    
                    <blockquote className="border-l-4 border-primary-200 pl-4 py-2 my-4 text-primary-700 italic">
                      "I was barely scraping by before this happened. Now, I can't pay my rent… my car might get repossessed… 
                      Can you lend me some money? Or at least help me get some cat food for my kitty?"
                    </blockquote>
                    
                    <p>
                      One friend responded bluntly, <span className="font-medium">"Maria, this is on you. You should have gotten accident insurance!"</span>
                    </p>
                    
                    <p>
                      That's when it hit her—<span className="font-semibold">she did have accident coverage!</span> She quickly filed a claim, 
                      and just when she was at her lowest point…
                    </p>
                    
                    <div className="bg-primary-50 p-6 rounded-xl border border-primary-100 my-6">
                      <p className="text-xl font-bold text-primary-700 text-center">
                        She received a $4,000 payout!
                      </p>
                    </div>
                    
                    <p>
                      The money covered her rent, car payment, and even her cat's food while she recovered. 
                      Without this coverage, she might have lost her apartment. Instead, she focused on healing without financial stress.
                    </p>
                  </div>
                  
                  <div className="mt-8">
                    <a href="#plan-overview" className="glow-button gold-button inline-block">
                      <span>Get Protected Like Maria</span>
                    </a>
                    <p className="mt-4 text-sm text-gray-500">Plans start at just $19.95/month</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Two Types of Accident Plans Section */}
      <section id="plan-overview" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary-800">
            THERE ARE TWO TYPES OF ACCIDENT PLANS WE OFFER:
          </h2>
          
          <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold text-primary-700 mb-4">Two Plan Types:</h3>
                  <ul className="space-y-3 text-lg text-gray-700">
                    <li className="flex items-start">
                      <span className="font-bold text-primary-600 mr-2">1.</span>
                      <span>One pays depending on the nature of the injury and treatment</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold text-primary-600 mr-2">2.</span>
                      <span>The other will just pay the bill for accidental treatments, depending on the limits of the policy you have chosen.</span>
                    </li>
                  </ul>
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
          
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-primary-700">In the first case, suppose you or a covered member:</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="mb-4">
                  <img 
                    src="/lovable-uploads/08592e29-42d6-4973-83d0-f1c5f645c6c7.png"
                    alt="Person shoveling snow"
                    className="w-full h-48 object-cover rounded-lg shadow-md"
                  />
                </div>
                <h4 className="text-lg font-semibold text-primary-600">Slipped while shoveling snow</h4>
              </div>
              
              <div className="text-center">
                <div className="mb-4">
                  <img 
                    src="/lovable-uploads/2b91ce04-33ec-46ec-9710-fc26e48b0d57.png"
                    alt="Sports injury"
                    className="w-full h-48 object-cover rounded-lg shadow-md"
                  />
                </div>
                <h4 className="text-lg font-semibold text-primary-600">Fell down while playing amateur sports</h4>
              </div>
              
              <div className="text-center">
                <div className="mb-4">
                  <img 
                    src="/lovable-uploads/634f8a52-093f-4273-9811-e56fbf95539a.png"
                    alt="Crime victim"
                    className="w-full h-48 object-cover rounded-lg shadow-md"
                  />
                </div>
                <h4 className="text-lg font-semibold text-primary-600">Were a crime victim</h4>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-8 space-y-6">
              <p className="text-lg text-gray-700">
                You could have chosen a plan that would pay you for a set amount for an ambulance ride to the hospital, and set amounts for emergency room or office treatments, X-Rays and other services.
              </p>
              <p className="text-lg text-gray-700">
                If you are lucky you might find that there were no broken bones, but you could still receive hundreds of dollars.
              </p>
              
              <div className="bg-white p-6 rounded-lg border-l-4 border-primary-500">
                <h4 className="text-xl font-bold text-primary-700 mb-4">But let's say you weren't so lucky!</h4>
                <p className="text-lg text-gray-700 mb-4">You have suffered a major fracture!</p>
                <ul className="space-y-2 text-gray-700">
                  <li>• In that case, you could get several thousand for the fracture (depending on which bone and the treatment)</li>
                  <li>• More money for hospital admission.</li>
                  <li>• More money for every day in the hospital</li>
                  <li>• More money for outpatient rehab and much more!</li>
                  <li>• And in a worst-case scenario, would even pay for accidental death.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reimbursement-Based Plans Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary-800">
            Reimbursement-Based Plans
          </h2>
          
          <div className="bg-white rounded-xl shadow-lg p-8 mb-10">
            <div className="space-y-6 text-lg text-gray-700">
              <p>
                Another type of coverage is preferred by many.
              </p>
              <p>
                In that case, the insurance carrier will simply pay the costs of whatever medical costs you have received.
              </p>
              <p className="text-xl font-bold text-primary-700">
                If those costs are covered by your health insurance, you can just take additional money and use it for loss of work time or whatever you need!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Call to Action Section */}
      <section className="py-16 bg-gradient-to-r from-primary-800 to-primary-600 text-white px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">
            GIVE US A CALL AND A LICENSED EXPERIENCED COUNSELOR WILL HAVE A NO PRESSURE PROFESSIONAL DISCUSSION ABOUT WHAT COVERAGE WILL WORK BEST FOR YOU!
          </h2>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a href="tel:7083304516" className="glow-button gold-button text-lg px-6 py-3 h-auto inline-block">
              <span>Call 708-330-4516</span>
            </a>
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

      {/* Other Coverages Available Section */}
      <OtherCoveragesSection />
    </div>
  );
};

export default AccidentPage;
