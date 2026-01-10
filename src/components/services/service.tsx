"use client";
import React from "react";
import { Button } from "@components/ui/button/button";
import { useUser } from "@context/UserContext";
import { ArrowForward } from "@mui/icons-material";

export default function Service() {
  const { clientType } = useUser();
  const isPartner = clientType === 'partner';
  
  return (
    <section className="w-full box-border relative px-[20px] sm:px-[40px] lg:px-[96px] py-[80px] bg-[radial-gradient(circle_at_center,_#1a1c1e_0%,_#0F1012_100%)]">
      <div className="max-w-[1240px] mx-auto">
        <div className="flex flex-col gap-2 mb-8">
            <span className="text-[var(--primary-gold)] text-xs font-bold uppercase tracking-widest">
                {isPartner ? "Commercial Scale" : "Residential Luxury"}
            </span>
            <h2 className="text-[32px] lg:text-[48px] font-[600] font-playfair text-white leading-tight">
                {isPartner ? "Fabrication & Supply" : "Bespoke Installations"}
            </h2>
            <p className="text-gray-400 max-w-xl">
                {isPartner 
                    ? "Secure priority manufacturing slots for your next high-rise or estate development." 
                    : "Transform your home with our imported stainless steel and tempered glass collections."}
            </p>
        </div>

        <ul className="flex flex-col gap-4 mt-8">
          {/* Service Item 1 */}
          <li className="flex flex-col md:flex-row md:items-center justify-between p-6 lg:p-10 border border-[var(--glass-border)] bg-[var(--bg-secondary)] rounded-sm transition-all duration-300 hover:border-[var(--primary-teal)] hover:bg-[rgba(31,122,140,0.1)] hover:translate-x-2">
            <div className="flex flex-col">
                <span className="text-[20px] lg:text-[24px] font-playfair text-white mb-1">
                    {isPartner ? "Wholesale Material Supply" : "Railing Installation"}
                </span>
                <span className="text-[12px] text-gray-400 uppercase tracking-wider">
                    {isPartner ? "304/316L Profiles" : "Balconies & Staircases"}
                </span>
            </div>
            <div className="mt-4 md:mt-0">
              <Button onClick={() => window.location.href = "/contact-us"}> 
                Get Quote <ArrowForward className="ml-2 text-[16px]" />
              </Button>
            </div>
          </li>

          {/* Service Item 2 */}
          <li className="flex flex-col md:flex-row md:items-center justify-between p-6 lg:p-10 border border-[var(--glass-border)] bg-[var(--bg-secondary)] rounded-sm transition-all duration-300 hover:border-[var(--primary-teal)] hover:bg-[rgba(31,122,140,0.1)] hover:translate-x-2">
            <div className="flex flex-col">
                <span className="text-[20px] lg:text-[24px] font-playfair text-white mb-1">
                    {isPartner ? "Contract Fabrication" : "Custom Glass Works"}
                </span>
                <span className="text-[12px] text-gray-400 uppercase tracking-wider">
                    {isPartner ? "Laser Precision Cutting" : "Showers & Partitions"}
                </span>
            </div>
            <div className="mt-4 md:mt-0">
              <Button variant="secondary" onClick={() => window.location.href = "/services"}> 
                Learn More
              </Button>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}