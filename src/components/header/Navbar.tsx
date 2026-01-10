"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Close } from "@mui/icons-material";
import { useUser } from "@context/UserContext";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { visitTier } = useUser();
  const pathname = usePathname();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const isActive = (href: string) => pathname === href;

  const getSmartCTA = () => {
    if (visitTier === 1) return { text: "View Catalogue", href: "/catalogue" };
    if (visitTier === 2) return { text: "Our Projects", href: "/#use-cases" };
    return { text: "Book Consultation", href: "/contact-us" }; 
  };

  const cta = getSmartCTA();

  // Helper for Nav Links
  const linkClasses = (path: string) => `
    text-[14px] font-[500] uppercase tracking-wider transition-colors duration-300
    ${isActive(path) ? "text-white font-[600] border-b border-[var(--primary-gold)]" : "text-[var(--text-secondary)] hover:text-[var(--primary-gold)]"}
  `;

  return (
    <nav className="fixed top-0 w-full z-50 glass-panel bg-[#0F1012]/80 px-[20px] sm:px-[40px] lg:px-[96px] py-4 transition-all duration-300">
      <div className="flex justify-between items-center w-full max-w-[1440px] mx-auto">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <div className="w-[140px] sm:w-[160px] h-[40px] bg-[url('/darkLogo.png')] bg-no-repeat bg-contain bg-center"></div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-[40px]">
          <Link href="/" className={linkClasses("/")}>Home</Link>
          <Link href="/services" className={linkClasses("/services")}>Services</Link>
          <Link href="/catalogue" className={linkClasses("/catalogue")}>Catalogue</Link>
          <Link href="/contact-us" className={linkClasses("/contact-us")}>Contact</Link>
          
          <Link href={cta.href} className="bg-[var(--primary-teal)] text-white px-6 py-2 rounded-sm text-[14px] font-[600] uppercase tracking-wide transition-all duration-300 hover:bg-white hover:text-[var(--bg-primary)] hover:shadow-[0_0_15px_rgba(255,255,255,0.3)]">
            {cta.text}
          </Link>
        </div>

        {/* Mobile Actions */}
        <div className="flex md:hidden items-center gap-4">
          <Link href={cta.href} className="bg-[var(--primary-teal)] text-white px-3 py-1 rounded-sm text-xs font-[600] uppercase">
            {visitTier >= 3 ? "Book" : "Explore"}
          </Link>
          <button onClick={toggleMenu} className="text-white">
            {isMenuOpen ? <Close /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="flex flex-col items-start w-full gap-6 px-4 py-8 md:hidden bg-[var(--bg-primary)] border-t border-[var(--glass-border)] absolute top-[100%] left-0 h-screen">
          <Link href="/" onClick={toggleMenu} className="text-[24px] font-playfair text-white">Home</Link>
          <Link href="/services" onClick={toggleMenu} className="text-[24px] font-playfair text-white">Services</Link>
          <Link href="/catalogue" onClick={toggleMenu} className="text-[24px] font-playfair text-white">Catalogue</Link>
          <Link href="/contact-us" onClick={toggleMenu} className="text-[24px] font-playfair text-white">Contact Us</Link>
        </div>
      )}
    </nav>
  );
};

export default NavBar;