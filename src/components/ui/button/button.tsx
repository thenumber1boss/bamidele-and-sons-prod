"use client";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "glass";
  className?: string;
}

export function Button({ 
  children, 
  onClick, 
  variant = "primary", 
  className = "",
  ...props 
}: ButtonProps) {
  
  const baseStyles = "relative overflow-hidden px-8 py-4 font-bold uppercase tracking-widest text-[12px] transition-all duration-300 ease-out cursor-pointer rounded-sm flex items-center justify-center gap-2 active:scale-95 group";
  
  const variants = {
    primary: "bg-[var(--primary-gold)] text-[var(--bg-primary)] shadow-[0_4px_14px_rgba(212,175,55,0.3)] hover:shadow-[0_6px_20px_rgba(212,175,55,0.5)] hover:bg-white",
    secondary: "bg-[var(--primary-teal)] text-white shadow-[0_4px_14px_rgba(31,122,140,0.3)] hover:bg-[#175d6b] hover:shadow-[0_6px_20px_rgba(31,122,140,0.5)]",
    glass: "bg-[rgba(255,255,255,0.1)] backdrop-blur-md border border-[var(--glass-border)] text-white hover:bg-[rgba(255,255,255,0.2)] hover:border-white",
    outline: "border border-[var(--primary-gold)] text-[var(--primary-gold)] bg-transparent hover:bg-[var(--primary-gold)] hover:text-[var(--bg-primary)]"
  };

  return (
    <button onClick={onClick} className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      <span className="relative z-10">{children}</span>
      {/* Shine Effect */}
      <div className="absolute inset-0 w-full h-full opacity-0 pointer-events-none bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.4)] to-transparent -skew-x-12 -translate-x-full transition-opacity duration-500 group-hover:opacity-100 group-hover:animate-shine-pass" />
    </button>
  );
};