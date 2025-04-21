
import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Shield, FileBadge } from "lucide-react";

const EXCLUSIONS_ALLSTATE = [
  {
    title: "General Exclusions",
    content: (
      <ul className="list-disc list-inside space-y-2">
        <li>
          The plan <b>does not cover</b> intentionally self-inflicted injuries, suicide, war, participation in a riot, or engaging in illegal acts.
        </li>
        <li>
          <b>Excluded</b>: Injuries incurred while committing or attempting to commit a felony, or while under the influence of intoxicants or narcotics unless prescribed.
        </li>
        <li>
          Injuries from professional or semi-professional sports, or operating aircraft (other than as a passenger).
        </li>
        <li>
          <b>Does not cover</b> injuries from racing, stunt activities, or hazardous hobbies.
        </li>
        <li>
          See the policy document for a full list of limitations and exclusions.
        </li>
      </ul>
    ),
  },
];

const EXCLUSIONS_ML = [
  {
    title: "Manhattan Life Exclusions",
    content: (
      <ul className="list-disc list-inside space-y-2">
        <li>
          <b>Excluded</b>: Pre-existing conditions unless specified, cosmetic surgery (unless due to accident), or treatment not considered medically necessary.
        </li>
        <li>
          No benefit for loss resulting from participation in acts of war, military service, or illegal activities.
        </li>
        <li>
          <b>Does not cover</b> loss caused directly or indirectly by intentionally self-inflicted injury or suicide.
        </li>
        <li>
          See the policy document for a comprehensive list of exclusions and definitions.
        </li>
      </ul>
    ),
  },
];

const DownloadPolicyButton = ({ label }: { label: string }) => (
  <Button variant="outline" size="sm" className="mt-4 flex items-center gap-2" disabled>
    <FileBadge className="w-4 h-4" />
    {label}
    <span className="ml-2 text-xs text-gray-500">(Coming Soon)</span>
  </Button>
);

export default function BenefitsAndExclusions() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-white via-gray-50 to-white pb-12">
      {/* HERO */}
      <section className="w-full py-12 px-4 flex flex-col items-center text-center bg-white relative">
        <div className="flex items-center justify-center mb-4">
          <span className="inline-flex items-center justify-center bg-primary-100 rounded-full p-3 shadow-md">
            <Shield className="text-primary-500 w-8 h-8" aria-label="Shield icon" />
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-2 text-primary-800">Know What’s Covered — And What’s Not</h1>
        <p className="text-lg text-gray-600 max-w-2xl">
          We believe in transparency. Review the key exclusions and benefit limits for your policy below.
        </p>
      </section>

      {/* INTRO */}
      <section className="max-w-2xl mx-auto text-center my-8 px-4">
        <p className="text-md md:text-lg text-gray-700">
          Every insurance policy has its fine print. That’s why we’re upfront about what’s included — and what’s not. Below you’ll find detailed exclusions for our two main accident plans, based on your carrier and plan type.
        </p>
      </section>

      {/* TABS FOR PLANS */}
      <section className="max-w-2xl md:max-w-3xl mx-auto my-10 px-4">
        <Tabs defaultValue="allstate" className="w-full">
          <TabsList className="w-full flex bg-muted mb-2 rounded-md shadow-sm">
            <TabsTrigger value="allstate" className="flex-1 py-2 text-primary-700 data-[state=active]:bg-primary-100 data-[state=active]:text-primary-800">
              Allstate Fixed Benefit Plan
            </TabsTrigger>
            <TabsTrigger value="ml" className="flex-1 py-2 text-primary-700 data-[state=active]:bg-primary-100 data-[state=active]:text-primary-800">
              Plan Enhancer & Triomed (Manhattan Life)
            </TabsTrigger>
          </TabsList>
          <TabsContent value="allstate">
            <div className="bg-white rounded-xl shadow p-6 mb-2 border">
              <h3 className="text-lg font-semibold mb-3 text-primary-900">Allstate Fixed Benefit Accident Plan</h3>
              {EXCLUSIONS_ALLSTATE.map(({ title, content }) => (
                <Accordion type="single" collapsible key={title} className="w-full">
                  <AccordionItem value={title}>
                    <AccordionTrigger className="text-left font-medium text-black">{title}</AccordionTrigger>
                    <AccordionContent>{content}</AccordionContent>
                  </AccordionItem>
                </Accordion>
              ))}
              <div className="flex justify-end">
                <DownloadPolicyButton label="Download Full Policy Document (PDF)" />
              </div>
            </div>
          </TabsContent>
          <TabsContent value="ml">
            <div className="bg-white rounded-xl shadow p-6 mb-2 border">
              <h3 className="text-lg font-semibold mb-3 text-primary-900">Plan Enhancer &amp; Triomed Plans</h3>
              <p className="italic text-gray-600 mb-2 text-sm">For policies underwritten by Manhattan Life</p>
              {EXCLUSIONS_ML.map(({ title, content }) => (
                <Accordion type="single" collapsible key={title} className="w-full">
                  <AccordionItem value={title}>
                    <AccordionTrigger className="text-left font-medium text-black">{title}</AccordionTrigger>
                    <AccordionContent>{content}</AccordionContent>
                  </AccordionItem>
                </Accordion>
              ))}
              <div className="flex justify-end">
                <DownloadPolicyButton label="Download Full Policy Document (PDF)" />
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* FINAL CTA */}
      <section className="w-full py-10 px-4 bg-gradient-to-tr from-primary-100 via-accent-gold/30 to-white flex flex-col items-center mt-10">
        <h2 className="text-2xl md:text-3xl font-bold text-primary-900 mb-3">Have Questions About What’s Covered?</h2>
        <p className="text-md md:text-lg mb-5 text-gray-700 max-w-xl text-center">
          We’re happy to walk you through the details and help you understand exactly what to expect.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button className="glow-button min-w-[150px]" size="lg">Call Now</Button>
          <Button variant="secondary" className="glow-button min-w-[170px]" size="lg">
            Schedule a Call
          </Button>
        </div>
      </section>
    </div>
  );
}
