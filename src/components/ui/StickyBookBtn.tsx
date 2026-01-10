"use client";
import React, { useEffect, useState } from "react";
import { CalendarMonth } from "@mui/icons-material";
import Link from "next/link";

const StickyBookBtn = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div
      className={`fixed bottom-8 right-8 z-40 transition-all duration-500 transform ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
      }`}
    >
      <Link href="/contact-us">
        <button className="flex items-center gap-2 bg-[var(--primary-gold)] text-[var(--bg-primary)] px-6 py-4 rounded-full shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] transition-all font-bold uppercase tracking-wide text-sm">
          <CalendarMonth />
          <span className="hidden md:inline">Book Consultation</span>
          <span className="md:hidden">Book</span>
        </button>
      </Link>
    </div>
  );
};

export default StickyBookBtn;