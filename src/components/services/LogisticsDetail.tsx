"use client";
import React from "react";
import { DirectionsBoat, LocalShipping, Warehouse, Engineering } from "@mui/icons-material";

const LogisticsDetail = () => {
  const steps = [
    {
      icon: <DirectionsBoat fontSize="large" />,
      title: "Import",
      desc: "Sourced from ISO-9001 mills in Asia/Europe. Containers land in Lagos.",
      color: "text-blue-400"
    },
    {
      icon: <LocalShipping fontSize="large" />,
      title: "Transit",
      desc: "Direct haulage to our central Abuja processing facility.",
      color: "text-yellow-400"
    },
    {
      icon: <Engineering fontSize="large" />,
      title: "Fabrication",
      desc: "Raw profiles are cut, polished, and welded to project specs.",
      color: "text-orange-400"
    },
    {
      icon: <Warehouse fontSize="large" />,
      title: "Deployment",
      desc: "Finished units dispatched to site with installation teams.",
      color: "text-green-400"
    }
  ];

  return (
    <div className="py-20 border-t border-[var(--glass-border)]">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-playfair text-white mb-2">The Logistics Backbone</h2>
        <p className="text-sm text-gray-500 uppercase tracking-widest">Why we deliver when others delay</p>
      </div>

      <div className="relative">
        {/* Connection Line (Desktop) */}
        <div className="hidden md:block absolute top-[28px] left-[10%] right-[10%] h-[2px] bg-[var(--glass-border)] z-0"></div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              <div className={`w-14 h-14 rounded-full bg-[var(--bg-secondary)] border border-[var(--glass-border)] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ${step.color}`}>
                {step.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
              <p className="text-xs text-gray-400 px-4">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogisticsDetail;