"use client";
import React from "react";
import ClientSplit from "@components/services/ClientSplit";
import LogisticsDetail from "@components/services/LogisticsDetail";
import { Button } from "@components/ui/button/button";

const ServicesPage = () => {
  return (
    <main className="min-h-screen bg-[var(--bg-primary)] pt-[120px] px-[20px] sm:px-[40px] lg:px-[96px] pb-20">
      
      {/* 1. Page Header */}
      <div className="max-w-4xl mx-auto text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <h1 className="text-[40px] lg:text-[64px] font-playfair text-white mb-6 leading-[1.1]">
          World-Class Fabrication.<br/>
          <span className="text-metallic">Local Execution.</span>
        </h1>
        <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
          We combine the precision of international manufacturing with the agility of a local workforce.
          Tell us about your needs to see how we fit your project.
        </p>
      </div>

      {/* 2. The Interactive B2B/B2C Split */}
      {/* This component handles the switching logic between Homeowner and Partner views */}
      <ClientSplit />

      {/* 3. The Evidence: Logistics Chain */}
      <div className="mt-20">
        <LogisticsDetail />
      </div>

      {/* 4. Final Call to Action */}
      <div className="py-20 flex flex-col items-center justify-center text-center gap-6 border-t border-[var(--glass-border)] mt-20">
        <h2 className="text-3xl font-playfair text-white">Ready to discuss your requirements?</h2>
        <p className="text-gray-400 max-w-lg mb-4">
            Our engineering team is ready to review your architectural drawings or schedule a site visit.
        </p>
        <Button onClick={() => window.location.href = "/contact-us"} className="w-auto px-12">
          Start Project Discussion
        </Button>
      </div>

    </main>
  );
};

export default ServicesPage;