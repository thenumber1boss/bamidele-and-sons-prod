"use client";
import React from "react";

const TrustTicker = () => {
  return (
    <div className="w-full bg-[var(--bg-primary)] border-b border-[var(--glass-border)] overflow-hidden">
      <div className="flex flex-wrap md:flex-nowrap justify-between items-center px-[20px] lg:px-[96px] py-6 gap-6">
        
        <div className="flex items-center gap-4 pr-8 border-r border-[var(--glass-border)] last:border-0">
          <span className="text-[32px] font-playfair font-bold text-[var(--primary-teal)]">100%</span>
          <span className="text-[10px] uppercase tracking-widest text-gray-400">Material<br/>Integrity</span>
        </div>

        <div className="flex items-center gap-4 pr-8 border-r border-[var(--glass-border)] last:border-0">
           <span className="text-[32px] font-playfair font-bold text-[var(--primary-steel)]">316L</span>
           <span className="text-[10px] uppercase tracking-widest text-gray-400">Marine Grade<br/>Available</span>
        </div>

        <div className="flex items-center gap-4 pr-8 border-r border-[var(--glass-border)] last:border-0">
          <span className="text-[32px] font-playfair font-bold text-[var(--primary-gold)]">150+</span>
          <span className="text-[10px] uppercase tracking-widest text-gray-400">Certified<br/>Installers</span>
        </div>

        <div className="hidden lg:flex items-center gap-2 ml-auto">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
          <span className="text-[10px] uppercase text-green-500">Fabrication Floor: Active</span>
        </div>

      </div>
    </div>
  );
};

export default TrustTicker;