"use client";
import React, { useEffect } from "react";
import { CheckCircle, Business, Home } from "@mui/icons-material";
import { useUser } from "@context/UserContext";

const ClientSplit = () => {
  const { clientType, setClientType } = useUser();

  // Content Data
  const data = {
    homeowner: {
      title: "For Private Residences",
      desc: "Elevate your property value with bespoke installations. We handle everything from design to final polish.",
      features: ["3D Design Consultation", "Child-Safe Tempered Glass", "Maintenance-Free Finishes", "Installation Clean-up Guarantee"]
    },
    partner: {
      title: "For Contractors & Architects",
      desc: "Reliable supply chain partners. We provide verifiable material grades and high-volume fabrication capacity.",
      features: ["Wholesale Material Pricing", "Mill Certificates (304/316L)", "Priority Fabrication Slots", "Logistics Support (Abuja/Lagos)"]
    }
  };

  // Default to homeowner view if undecided, but show visual toggle
  const activeData = clientType === 'partner' ? data.partner : data.homeowner;

  return (
    <section className="flex flex-col gap-8">
      {/* The Toggle Switch */}
      <div className="flex justify-center">
        <div className="bg-[var(--bg-secondary)] border border-[var(--glass-border)] p-1 rounded-full flex relative">
          <button
            onClick={() => setClientType('homeowner')}
            className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold uppercase transition-all duration-300 ${
              clientType !== 'partner' ? "bg-[var(--primary-teal)] text-white shadow-lg" : "text-gray-500 hover:text-white"
            }`}
          >
            <Home fontSize="small" /> Residential
          </button>
          <button
            onClick={() => setClientType('partner')}
            className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold uppercase transition-all duration-300 ${
              clientType === 'partner' ? "bg-[var(--primary-gold)] text-[var(--bg-primary)] shadow-lg" : "text-gray-500 hover:text-white"
            }`}
          >
            <Business fontSize="small" /> Commercial
          </button>
        </div>
      </div>

      {/* Dynamic Content Area */}
      <div className="glass-panel p-8 md:p-12 mt-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div className="flex-1">
            <h2 className="text-3xl font-playfair text-white mb-4">{activeData.title}</h2>
            <p className="text-gray-400 leading-relaxed mb-6">{activeData.desc}</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {activeData.features.map((feat, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle className={`text-[20px] ${clientType === 'partner' ? 'text-[var(--primary-gold)]' : 'text-[var(--primary-teal)]'}`} />
                  <span className="text-sm text-gray-300">{feat}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Visual Indicator of Persona */}
          <div className="hidden md:block w-1/3">
             <div className={`w-full aspect-square rounded-full border-2 border-dashed flex items-center justify-center ${
                clientType === 'partner' ? 'border-[var(--primary-gold)]' : 'border-[var(--primary-teal)]'
             }`}>
                {clientType === 'partner' ? 
                  <Business style={{ fontSize: 80, color: 'var(--primary-gold)' }} /> : 
                  <Home style={{ fontSize: 80, color: 'var(--primary-teal)' }} />
                }
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientSplit;