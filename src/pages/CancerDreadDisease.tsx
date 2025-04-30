import React from "react";
import OtherCoveragesSection from "@/components/OtherCoveragesSection";

export default function CancerDreadDisease() {
  return (
    <div className="bg-gradient-to-r from-primary-50 to-white">
      {/* Page content goes here */}
      <div className="container mx-auto py-20 px-4">
        <h1 className="text-4xl font-bold text-primary-800 mb-8">
          Cancer and Dread Disease Coverage
        </h1>
        <p className="text-lg text-gray-700">
          This page provides information about our cancer and dread disease coverage.
        </p>
      </div>
      
      {/* Other Coverages Available Section */}
      <OtherCoveragesSection />
    </div>
  );
}
