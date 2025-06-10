
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Shield, Heart, Hospital, Plus, CircleDollarSign } from "lucide-react";
import OtherCoveragesSection from "@/components/OtherCoveragesSection";

export default function CancerDreadDisease() {
  const diseases = [
    "ADDISON'S DISEASE", "MUSCULAR DYSTROPHY", "TAY-SACHS DISEASE", "ALS (LOU GEHRIG'S DISEASE)", 
    "MYASTHENIA GRAVIS", "TETANUS", "DIPTHERIA", "NEUMAN-PICK DISEASE", "TOXIC EPIDERMAL NECROLYSIS", 
    "ENCEPHALITIS", "OSTEOMYELITIS", "TOXIC SHOCK SYNDROME", "EPILEPSY", "POLIOMYELITIS", 
    "TUBERCULOSIS", "LEGIONAIRRE'S DISEASE", "REYE'S SYNDROME", "TULAREMIA", "LUPUS ERYTHEMATOSUS", 
    "RHEUMATIC FEVER", "TYPHOID FEVER", "MENINGITIS", "ROCKY MOUNTAIN SPOTTED FEVER", 
    "WHIPPLE'S DISEASE", "MULTIPLE SCLEROSIS", "SICKLE-CELL ANEMIA", "WHOOPING COUGH"
  ];

  const benefits = [
    { text: "CANCER SCREENING TESTS", icon: Shield },
    { text: "FIRST OCCURRENCES PAID UPON DIAGNOSIS", icon: CircleDollarSign },
    { text: "HOSPITAL CONFINEMENT", icon: Hospital },
    { text: "RADIATION, CHEMO AND IMMUNOTHERAPY", icon: Plus },
    { text: "SURGICAL BENEFITS", icon: Heart },
    { text: "AND MANY MORE BENEFITS!", icon: Plus }
  ];

  return (
    <div className="bg-gradient-to-r from-primary-50 to-white min-h-screen">
      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-20 pb-16">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-100 rounded-full mb-6">
            <Shield className="h-10 w-10 text-primary-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-800 mb-8 leading-tight">
            Cancer and Dread Disease Coverage
          </h1>
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12 animate-fade-in-up">
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              The critical illness plans that pay lump sums upon diagnosis are more and more popular
            </p>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              But many people would like additional plans to cover cancer costs.
            </p>
            <p className="text-xl text-gray-700 font-semibold">
              We offer several plans from different carriers.
            </p>
          </div>
        </div>
      </div>

      {/* Additional Protection Section */}
      <div className="bg-primary-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-gold rounded-full mb-6">
              <Plus className="h-8 w-8 text-primary-800" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              In addition to Cancer, some will offer protection from:
            </h2>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {diseases.map((disease, index) => (
                    <div 
                      key={index} 
                      className="flex items-center space-x-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors duration-300"
                    >
                      <div className="w-2 h-2 bg-accent-gold rounded-full flex-shrink-0"></div>
                      <span className="text-sm font-medium text-white">{disease}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Supplement Information */}
      <div className="py-16 bg-gradient-to-r from-white to-primary-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6">
              <CircleDollarSign className="h-8 w-8 text-primary-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-8">
              Supplemental Coverage That Works For You
            </h2>
            <Card className="bg-white shadow-xl border-0">
              <CardContent className="p-8">
                <p className="text-xl text-gray-700 leading-relaxed">
                  Plans will supplement your health insurance and provide additional funds for however you wish.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-gold rounded-full mb-6">
              <Heart className="h-8 w-8 text-primary-800" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-6">
              They can provide allowances for:
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <Card key={index} className="card-hover border-primary-200 shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                          <IconComponent className="h-6 w-6 text-primary-600" />
                        </div>
                        <span className="text-lg font-bold text-primary-800">
                          {benefit.text}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="py-16 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
              <Hospital className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Ready to Protect Your Future?
            </h2>
            <p className="text-xl mb-8 leading-relaxed">
              Call us or schedule a conference to discuss more details about how a plan can help you and your loved ones
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="glow-button gold-button text-lg px-8 py-4"
                onClick={() => window.open('tel:7083304516', '_self')}
              >
                <span>Call 708.330.4516</span>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-white/10 border-white/30 text-white hover:bg-white/20 text-lg px-8 py-4"
                onClick={() => window.open('https://calendly.com', '_blank')}
              >
                <span>Schedule a Conference</span>
              </Button>
            </div>
            
            <Separator className="my-8 bg-white/20" />
            
            <div className="text-center">
              <p className="text-white/80 text-sm">
                Plans underwritten by trusted carriers. Coverage subject to limitations and exclusions.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Other Coverages Available Section */}
      <OtherCoveragesSection />
    </div>
  );
}
