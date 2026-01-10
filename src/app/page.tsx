"use client";
import React from 'react';
import Image from 'next/image';
import { Button } from '@components/ui/button/button';
import useCaseItems from './useCaseItems';
import DynamicHero from '@components/home/DynamicHero';
import TrustTicker from '@components/home/TrustTicker';
import GlobalPipeline from '@components/home/GlobalPipeline';
import Service from '@components/services/service';
import homeCat1 from '@assets/home-cat-1.png';
import homeCat2 from '@assets/home-cat-2.png';
import homeCat3 from '@assets/home-cat-3.png';
import homeCat4 from '@assets/home-cat-4.png';

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--bg-primary)]">
      
      <DynamicHero />
      <TrustTicker />
      <GlobalPipeline />

      {/* Use Cases Section */}
      <section id="use-cases" className="flex flex-col gap-[40px] px-[20px] sm:px-[40px] lg:px-[96px] py-[80px] lg:py-[100px] bg-[var(--bg-primary)]">
        <div className="flex flex-col md:flex-row justify-between items-end gap-[20px] mb-10">
          <div>
            <h2 className="text-[32px] lg:text-[54px] font-[600] font-playfair text-white">Curated<br/>Applications</h2>
          </div>
          <p className="text-[12px] lg:text-[14px] font-[400] max-w-[400px] text-gray-400 pb-2">
            From minimalist residential balconies to high-traffic commercial guardrails. 
            We engineer safety into art.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[24px]">
          {useCaseItems.slice(0, 6).map((item) => (
            <div className="relative overflow-hidden h-[400px] cursor-pointer group rounded-sm" key={item.id}>
              <Image 
                src={item.image} 
                alt={item.title} 
                width={500} 
                height={400} 
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[black] via-transparent to-transparent opacity-80 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 w-full p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-white text-[24px] font-playfair mb-2">{item.title}</h3>
                <p className="text-gray-300 text-[14px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Catalogue Section */}
      <section className="flex flex-col bg-[var(--bg-secondary)] px-[20px] sm:px-[40px] lg:px-[96px] py-[80px] relative overflow-hidden">
        {/* Decorative Line */}
        <div className="absolute top-0 left-[50%] w-[1px] h-full bg-[var(--glass-border)] hidden md:block" />

        <div className="flex flex-col items-center text-center gap-4 mb-12 z-10">
          <h2 className="text-[32px] lg:text-[54px] font-[600] font-playfair text-white">The 2026 Collection</h2>
          <p className="text-gray-400 max-w-xl">
             Explore our exclusive range of imported stainless steel profiles and tempered glass fittings.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 z-10">
           <Image src={homeCat1} alt="Railing 1" className="w-full h-[300px] object-cover filter grayscale hover:grayscale-0 transition-all duration-500 rounded-sm border border-[var(--glass-border)]" />
           <Image src={homeCat2} alt="Railing 2" className="w-full h-[300px] object-cover filter grayscale hover:grayscale-0 transition-all duration-500 rounded-sm border border-[var(--glass-border)]" />
           <Image src={homeCat3} alt="Railing 3" className="w-full h-[300px] object-cover filter grayscale hover:grayscale-0 transition-all duration-500 rounded-sm border border-[var(--glass-border)]" />
           <Image src={homeCat4} alt="Railing 4" className="w-full h-[300px] object-cover filter grayscale hover:grayscale-0 transition-all duration-500 rounded-sm border border-[var(--glass-border)]" />
        </div>

        <div className="flex justify-center mt-12 z-10">
          <Button onClick={() => window.location.href = "/catalogue"}>
            Access Full Catalogue
          </Button>
        </div>
      </section>

      <Service />
    </main>
  );
}