
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Users, Heart, FileText, Phone } from "lucide-react";

const benefits = [
  {
    icon: Heart,
    title: "Final Expense Insurance",
    desc: "Fixed premiums designed to cover funeral and burial costs. Simple, permanent, and affordable."
  },
  {
    icon: FileText,
    title: "Permanent Coverage",
    desc: "Protection for life — your coverage never reduces or expires due to age or health changes."
  },
  {
    icon: Check,
    title: "Guaranteed Issue Plans",
    desc: "No health questions required. Coverage options for everyone, even if you’ve been turned down before."
  }
];

const faqs = [
  {
    q: "What’s the difference between term and permanent?",
    a: "Term insurance lasts for a set period (like 10 or 20 years), while permanent insurance covers you for life and builds cash value."
  },
  {
    q: "Do I need a medical exam?",
    a: "Our guaranteed issue plans require no health exam. Other options may consider your health for better pricing."
  },
  {
    q: "What happens if I miss a payment?",
    a: "Most permanent policies offer a grace period. If payment isn’t made within this, coverage may lapse."
  },
  {
    q: "Can I get coverage if I’ve been denied before?",
    a: "Yes — our guaranteed issue and final expense plans help those who’ve been declined elsewhere."
  }
];

export default function LifeInsurance() {
  const [includeSpouse, setIncludeSpouse] = useState(false);

  return (
    <div className="bg-gradient-to-tl from-[#F2FCE2] via-white to-[#D3E4FD] min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-20 pb-12 md:py-28 px-4 md:px-0">
        <div className="container mx-auto flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-7/12 animate-fade-in-up">
            <h1 className="text-3xl md:text-5xl font-montserrat font-bold text-primary-800 mb-5">
              Life Insurance That Leaves a Legacy — Not a Bill
            </h1>
            <h2 className="text-lg md:text-2xl text-primary-700 mb-7 font-inter">
              Protect your loved ones with permanent, affordable coverage — even if your health isn’t perfect.
            </h2>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="glow-button" size="lg">
                Find a Plan
              </Button>
              <Button className="glow-button gold-button" size="lg" variant="secondary">
                Schedule a No-Pressure Call
              </Button>
            </div>
          </div>
          <div className="hidden md:block md:w-5/12">
            <img
              src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=500&q=80"
              alt="Family Legacy"
              className="rounded-2xl shadow-lg w-full object-cover" />
          </div>
        </div>
      </section>

      {/* Why Life Insurance Matters */}
      <section className="container mx-auto px-4 py-12 md:py-16 max-w-4xl">
        <p className="mb-7 text-lg text-primary-900 text-center font-inter">
          Most people don’t want life insurance to leave someone rich — they just want to make sure their family isn’t stuck with a funeral bill. Our policies are built around that exact need: <span className="font-bold text-accent-gold">affordable final expense coverage</span> that’s simple, permanent, and easy to qualify for.
        </p>
        <div className="bg-white/60 border border-accent-gold rounded-xl p-6 flex flex-col items-center shadow card-hover transition-all duration-300 max-w-lg mx-auto mb-6">
          <span className="italic text-gray-700 text-sm mb-2">“Not for someone to hit the jackpot… just to give them peace when I’m gone.”</span>
          <div className="flex items-center mt-4 gap-3">
            <Users className="text-primary-700" />
            <div className="font-bold text-lg text-primary-800 hover:text-accent-gold transition-colors duration-200 cursor-pointer">
              Average funeral costs: <span className="text-accent-gold">$8,000–$12,000</span>
            </div>
          </div>
        </div>
      </section>

      {/* Our Life Insurance Solutions */}
      <section className="container mx-auto py-10 md:py-16">
        <h3 className="text-center text-2xl font-montserrat text-primary-800 mb-8">Affordable. Permanent. No Surprises.</h3>
        <div className="grid gap-6 md:grid-cols-3">
          {benefits.map((b, i) => (
            <div
              key={b.title}
              className="group card-hover bg-white/70 border border-primary-200 p-6 rounded-xl transition-all hover:shadow-lg hover:bg-primary-50 flex flex-col items-center text-center relative"
            >
              <b.icon className="mb-4 text-accent-gold group-hover:text-primary-700 transition-colors" size={38} />
              <div className="font-bold text-xl text-primary-800 mb-2">{b.title}</div>
              <div className="text-primary-700">{b.desc}</div>
              <div className="absolute top-0 left-0 h-1 w-full bg-accent-gold rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </section>

      {/* Plan Customization Section */}
      <section className="bg-gradient-to-r from-[#FEF7CD]/70 to-[#FFD700]/20 py-12 md:py-16 px-4">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl mb-4 font-bold text-primary-900">We Work With the Top Carriers to Find What Fits YOU</h3>
          <p className="mb-6 mx-auto max-w-2xl text-lg text-primary-800">
            As <span className="font-bold text-accent-gold">independent agents</span>, we aren’t locked into one company. We shop top-rated life insurance providers to find you the best options — based on your age, health, and budget.
          </p>
          <Button className="glow-button gold-button" size="lg">
            Get Matched With a Plan
          </Button>
        </div>
      </section>

      {/* Testimonial/Comforting Callout */}
      <section className="container mx-auto py-12 md:py-20 px-4">
        <div className="bg-primary-800/90 text-white rounded-xl p-7 max-w-2xl mx-auto relative animate-fade-in flex items-center shadow-md">
          <div className="mr-5">
            <Heart className="stroke-accent-gold" size={40} />
          </div>
          <div>
            <span className="italic font-montserrat text-lg md:text-xl block mb-1">
              “I couldn’t qualify anywhere else… but this plan gave my family peace of mind.”
            </span>
          </div>
        </div>
      </section>

      {/* FAQ Accordion (Common Questions) */}
      <section className="container mx-auto px-4 py-6 md:py-12 max-w-2xl">
        <Accordion type="single" collapsible className="bg-white/60 rounded-lg shadow divide-y divide-accent-gold">
          {faqs.map((faq, i) => (
            <AccordionItem value={`faq${i}`} key={faq.q}>
              <AccordionTrigger className="text-primary-800 font-semibold text-base md:text-lg hover:text-accent-gold transition-colors">{faq.q}</AccordionTrigger>
              <AccordionContent className="text-primary-900">{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* Final CTA Block */}
      <section className="w-full bg-gradient-to-t from-[#FFD70020] via-[#F2FCE2] to-[#D3E4FD] py-14 px-4 animate-fade-in-up">
        <div className="container mx-auto flex flex-col items-center gap-6">
          <h3 className="text-2xl md:text-3xl font-bold text-primary-800 mb-2">Leave a Legacy — Not a Burden</h3>
          <p className="text-primary-800 text-lg md:text-xl text-center max-w-2xl mb-4">
            Let’s help you find the coverage that fits your life, your budget, and your values.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
            <Button className="glow-button gold-button" size="lg">
              <Phone className="mr-2" /> Call Now
            </Button>
            <Button className="glow-button" size="lg" variant="secondary">
              Schedule a Call
            </Button>
          </div>
          <label className="flex items-center gap-2 mt-4 cursor-pointer text-primary-900">
            <input
              type="checkbox"
              checked={includeSpouse}
              onChange={e => setIncludeSpouse(e.target.checked)}
              className="form-checkbox accent-primary-600 w-5 h-5 rounded focus:ring-2 focus:ring-primary"
            />
            <span className="select-none">Include My Spouse or Family Member</span>
          </label>
        </div>
      </section>
    </div>
  );
}
