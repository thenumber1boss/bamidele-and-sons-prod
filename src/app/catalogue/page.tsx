"use client";
import React, { useEffect } from "react";
import { useUser } from "@context/UserContext";
import CatalogueGrid from "@app/catalogue/CatalogueGrid";
import Service from "@components/services/service";

const CataloguePage = () => {
  const { markCatalogueViewed, visitTier, likedItems } = useUser();

  // Mark as viewed when mounting to track user interest
  useEffect(() => {
    markCatalogueViewed();
  }, [markCatalogueViewed]);

  return (
    <main className="min-h-screen bg-[var(--bg-primary)] pt-[100px]">
      
      {/* 1. Luxury Header */}
      <div className="px-[20px] sm:px-[40px] lg:px-[96px] mb-12">
        <div className="border-l-2 border-[var(--primary-gold)] pl-6">
          <h1 className="text-[40px] lg:text-[64px] font-playfair text-white mb-4">
            {visitTier > 1 ? "The Private Collection" : "Curated Architectural Metals"}
          </h1>
          <p className="text-gray-400 max-w-2xl text-lg leading-relaxed">
            Unlike standard market options, our catalogue features proprietary imports sourced directly from manufacturers. 
            <span className="text-[var(--primary-steel)]"> These profiles are currently in stock at our Abuja facility.</span>
          </p>
        </div>
        
        {/* "Pinned Items" Notification for Return Users */}
        {likedItems.length > 0 && (
           <div className="mt-6 p-4 bg-[var(--bg-secondary)] border border-[var(--glass-border)] inline-block animate-in fade-in slide-in-from-left-4">
             <span className="text-[var(--primary-teal)] text-sm font-bold">
               You have pinned {likedItems.length} exclusive designs.
             </span>
           </div>
        )}
      </div>

      {/* 2. Interactive Grid */}
      <div className="px-[20px] sm:px-[40px] lg:px-[96px] pb-[100px]">
        <CatalogueGrid />
      </div>

      {/* 3. Footer Service Call */}
      <Service />
    </main>
  );
};

export default CataloguePage;