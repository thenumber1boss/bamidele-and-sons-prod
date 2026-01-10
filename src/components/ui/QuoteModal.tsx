"use client";
import React from "react";
import { Close } from "@mui/icons-material";
import { Button } from "@components/ui/button/button";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  itemTitle: string;
}

const QuoteModal = ({ isOpen, onClose, itemTitle }: QuoteModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="bg-[var(--bg-secondary)] border border-[var(--glass-border)] w-full max-w-md p-6 rounded-sm relative shadow-2xl">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white">
          <Close />
        </button>

        <h3 className="text-2xl font-playfair text-white mb-2">Request Specification</h3>
        <p className="text-sm text-gray-400 mb-6">
          Inquiring about: <span className="text-[var(--primary-teal)] font-semibold">{itemTitle}</span>.
          <br/>Our engineering team will confirm stock availability.
        </p>

        <form className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-xs uppercase text-gray-500">Project Type</label>
            <select className="bg-[var(--bg-primary)] border border-[var(--glass-border)] text-white p-3 text-sm focus:border-[var(--primary-teal)] outline-none">
              <option>Residential (Private Home)</option>
              <option>Commercial (Hotel/Office)</option>
              <option>Development (Multi-Unit)</option>
            </select>
          </div>
          
          <div className="flex flex-col gap-1">
            <label className="text-xs uppercase text-gray-500">Email Address</label>
            <input 
              type="email" 
              placeholder="developer@firm.com" 
              className="bg-[var(--bg-primary)] border border-[var(--glass-border)] text-white p-3 text-sm focus:border-[var(--primary-teal)] outline-none"
            />
          </div>

          <div className="mt-2">
            <Button onClick={(e) => { e.preventDefault(); alert("Request sent to logistics team."); onClose(); }}>
              Check Availability
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default QuoteModal;