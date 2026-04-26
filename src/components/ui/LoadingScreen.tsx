"use client";
import React from "react";
import Image from "next/image";

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 z-[9999] bg-[#0F1012] flex flex-col items-center justify-center">
      
      {/* Brand Logo - Static (No Pulse) */}
      <div className="relative w-[280px] h-[80px] md:w-[350px] md:h-[100px] mb-8">
        <Image 
          src="/darkLogo.png" 
          alt="Bamidele & Sons" 
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* Loading Bar */}
      <div className="w-[200px] h-[2px] bg-[var(--bg-secondary)] overflow-hidden relative rounded-full">
        <div className="absolute inset-0 bg-[var(--primary-gold)] w-1/2 animate-[shinePass_1.5s_infinite_linear]" />
      </div>

      <p className="mt-4 text-[10px] text-gray-500 font-mono tracking-widest">
        INITIALIZING EXPERIENCE...
      </p>
    </div>
  );
};

export default LoadingScreen;