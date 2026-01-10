"use client";
import React from "react";
import { Public, Flight, Architecture, LocalShipping } from "@mui/icons-material";

const GlobalPipeline = () => {
  const steps = [
    { 
      icon: <Public className="text-[40px] text-[var(--primary-gold)]" />, 
      title: "Global Sourcing", 
      desc: "Direct procurement from verified mills in Europe & Asia." 
    },
    { 
      icon: <Flight className="text-[40px] text-[var(--primary-steel)]" />, 
      title: "Import Logistics", 
      desc: "Fast-tracked clearing and handling to our Abuja HQ." 
    },
    { 
      icon: <Architecture className="text-[40px] text-[var(--primary-teal)]" />, 
      title: "Precision Fabrication", 
      desc: "Laser-cut exactness meeting international standards." 
    },
    { 
      icon: <LocalShipping className="text-[40px] text-[var(--primary-steel)]" />, 
      title: "Nationwide Delivery", 
      desc: "Safe transport to any site within Nigeria." 
    },
  ];

  return (
    <section className="py-20 px-[20px] lg:px-[96px] bg-[var(--bg-secondary)] border-y border-[var(--glass-border)]">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
        <div className="max-w-[300px]">
          <h2 className="text-3xl font-playfair text-white mb-4">The Global<br/>Pipeline</h2>
          <p className="text-gray-400 text-sm">We bridge the gap between international quality and local accessibility.</p>
        </div>
        
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col gap-4 p-6 glass-panel hover:bg-[rgba(255,255,255,0.05)] transition-all duration-500 group">
              <div className="transform group-hover:-translate-y-2 transition-transform duration-300">
                {step.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlobalPipeline;