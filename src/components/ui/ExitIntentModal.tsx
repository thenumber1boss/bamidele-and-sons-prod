"use client";
import React, { useEffect, useState } from "react";
import { Close, Download } from "@mui/icons-material";
import { Button } from "./button/button";

const ExitIntentModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      // If mouse leaves the top of the viewport and we haven't shown this yet
      if (e.clientY <= 0 && !hasTriggered) {
        // Check local storage so we don't annoy them every session
        const alreadySeen = localStorage.getItem("bam_exit_intent_seen");
        if (!alreadySeen) {
          setIsOpen(true);
          setHasTriggered(true);
          localStorage.setItem("bam_exit_intent_seen", "true");
        }
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [hasTriggered]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 animate-in fade-in duration-300">
      <div className="bg-[var(--bg-secondary)] border border-[var(--primary-gold)] w-full max-w-lg p-8 rounded-sm relative shadow-2xl">
        <button 
            onClick={() => setIsOpen(false)} 
            className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <Close />
        </button>

        <div className="text-center mb-6">
            <span className="text-[var(--primary-gold)] uppercase text-xs tracking-[0.2em] font-bold">Wait! Don&apos;t build without this.</span>
            <h3 className="text-3xl font-playfair text-white mt-2">The 2026 Stainless Steel Trend Report</h3>
            <p className="text-gray-400 mt-4 text-sm leading-relaxed">
                Before you commit to a design, download our curated guide on the top 5 imported profiles defining luxury homes in Abuja and Lagos this year.
            </p>
        </div>

        <div className="flex flex-col gap-4">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="w-full bg-[var(--bg-primary)] border border-[var(--glass-border)] text-white p-4 focus:border-[var(--primary-gold)] outline-none"
            />
            <Button onClick={() => setIsOpen(false)} className="w-full justify-center">
                <Download className="mr-2" /> Download Free PDF
            </Button>
        </div>
        
        <p className="text-center text-[10px] text-gray-600 mt-4">
            Join 2,000+ architects and homeowners on our list.
        </p>
      </div>
    </div>
  );
};

export default ExitIntentModal;