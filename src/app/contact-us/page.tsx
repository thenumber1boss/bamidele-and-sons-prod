"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Mail, Phone, LocationOn, CheckCircle } from "@mui/icons-material";
import { Button } from "@components/ui/button/button";
import { useUser } from "@context/UserContext";
import contactImage from "@assets/contact-image.png"; 

const ContactPage = () => {
  const { clientType, setClientType } = useUser();
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  // If user lands here directly without choosing type, default to homeowner but allow switch
  const isPartner = clientType === 'partner';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate API call
    setTimeout(() => {
        setFormStatus('success');
    }, 1500);
  };

  return (
    <main className="min-h-screen bg-[var(--bg-primary)] pt-[100px] pb-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
        
        {/* Left: The Visual/Info */}
        <div className="relative h-[400px] lg:h-auto w-full lg:order-2">
            <Image 
                src={contactImage} 
                alt="Bamidele HQ" 
                fill 
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-black/60 flex flex-col justify-end p-10 lg:p-20">
                <h2 className="text-3xl font-playfair text-white mb-6">Visit The HQ</h2>
                <div className="space-y-4">
                    <div className="flex items-center gap-4 text-gray-300">
                        <LocationOn className="text-[var(--primary-gold)]" />
                        <span>Plot 45, Industrial Layout, Idu, Abuja</span>
                    </div>
                    <div className="flex items-center gap-4 text-gray-300">
                        <Phone className="text-[var(--primary-teal)]" />
                        <span>+234 800 BAMIDELE</span>
                    </div>
                    <div className="flex items-center gap-4 text-gray-300">
                        <Mail className="text-[var(--primary-steel)]" />
                        <span>projects@bamidele-steel.com</span>
                    </div>
                </div>
            </div>
        </div>

        {/* Right: The Smart Form */}
        <div className="p-8 lg:p-20 lg:order-1 flex flex-col justify-center">
            {formStatus === 'success' ? (
                <div className="text-center animate-in fade-in zoom-in duration-500">
                    <CheckCircle className="text-[var(--primary-gold)] text-[80px] mb-6" />
                    <h2 className="text-4xl font-playfair text-white mb-4">Request Received</h2>
                    <p className="text-gray-400">
                        Thank you. Our engineering team has received your {isPartner ? 'commercial' : 'residential'} inquiry.
                        <br/>We will revert within 24 hours.
                    </p>
                    <button 
                        onClick={() => window.location.href='/'}
                        className="mt-8 text-[var(--primary-teal)] hover:text-white underline underline-offset-4"
                    >
                        Return Home
                    </button>
                </div>
            ) : (
                <>
                    <div className="mb-10">
                        <span className="text-[var(--primary-teal)] text-xs font-bold uppercase tracking-widest">
                            {isPartner ? "B2B Partnership" : "Private Commission"}
                        </span>
                        <h1 className="text-4xl lg:text-5xl font-playfair text-white mt-2 mb-4">
                            Let's Discuss<br/>Your Project
                        </h1>
                        <p className="text-gray-400">
                            Fill out the details below so we can route your request to the correct department.
                        </p>
                        
                        {/* Quick Toggle if they made a mistake */}
                        <div className="mt-4 flex gap-4 text-xs text-gray-500">
                            Not {isPartner ? 'a Contractor' : 'a Homeowner'}? 
                            <button 
                                onClick={() => setClientType(isPartner ? 'homeowner' : 'partner')}
                                className="text-white underline hover:text-[var(--primary-gold)]"
                            >
                                Switch Form
                            </button>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <input type="text" placeholder="Your Name" required className="bg-transparent border-b border-[var(--glass-border)] py-4 text-white focus:border-[var(--primary-gold)] outline-none transition-colors" />
                            <input type="tel" placeholder="Phone Number" required className="bg-transparent border-b border-[var(--glass-border)] py-4 text-white focus:border-[var(--primary-gold)] outline-none transition-colors" />
                        </div>

                        {/* Context Aware Field 1 */}
                        {isPartner ? (
                            <input type="text" placeholder="Company / Firm Name" className="bg-transparent border-b border-[var(--glass-border)] py-4 text-white focus:border-[var(--primary-gold)] outline-none transition-colors" />
                        ) : (
                            <input type="text" placeholder="Project Location (e.g. Maitama, Lekki)" className="bg-transparent border-b border-[var(--glass-border)] py-4 text-white focus:border-[var(--primary-gold)] outline-none transition-colors" />
                        )}

                        {/* Context Aware Field 2 */}
                        <select className="bg-transparent border-b border-[var(--glass-border)] py-4 text-gray-400 focus:text-white focus:border-[var(--primary-gold)] outline-none transition-colors">
                            <option value="" disabled selected>Select Scope</option>
                            {isPartner ? (
                                <>
                                    <option>Commercial High-Rise</option>
                                    <option>Estate Development ({'>'}10 Units)</option>
                                    <option>Hotel / Hospitality</option>
                                    <option>Supply Only (Wholesale)</option>
                                </>
                            ) : (
                                <>
                                    <option>Balcony Railings</option>
                                    <option>Staircase Renovation</option>
                                    <option>Gate & Fencing</option>
                                    <option>Full Home Fit-out</option>
                                </>
                            )}
                        </select>

                        <textarea placeholder="Describe your requirements..." rows={4} className="bg-[rgba(255,255,255,0.03)] border border-[var(--glass-border)] p-4 text-white focus:border-[var(--primary-gold)] outline-none transition-colors rounded-sm"></textarea>

                        <div className="mt-4">
                            <Button type="submit" disabled={formStatus === 'submitting'}>
                                {formStatus === 'submitting' ? 'Sending...' : isPartner ? 'Request Commercial Quote' : 'Book Free Consultation'}
                            </Button>
                        </div>
                    </form>
                </>
            )}
        </div>
      </div>
    </main>
  );
};

export default ContactPage;