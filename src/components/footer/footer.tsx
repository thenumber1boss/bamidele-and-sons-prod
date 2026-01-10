"use client";
import React from "react";

export default function Footer() {
  return (
    <footer className="flex flex-col bg-[var(--bg-secondary)] px-[20px] py-[50px] gap-5 sm:px-[40px] md:px-[80px] border-t border-[var(--glass-border)]">
      <div className="flex flex-col items-start sm:flex-row sm:justify-between sm:items-end gap-[40px]">
        {/* Left Section */}
        <div className="flex flex-col items-start gap-3 xl:gap-[100px]">
          <div className="ml-[-20px] lg:ml-[-40px] w-[200px] sm:w-[270px] h-[60px] bg-[url('/darkLogo.png')] bg-no-repeat bg-cover bg-center"></div>
          <div>
            <p className="text-gray-400 text-[12px] lg:text-[16px] leading-[24px]">+2348065470241</p>
            <p className="text-gray-400 text-[12px] lg:text-[16px] leading-[24px]">info@bamsteelworld.com</p>
            <p className="text-gray-400 text-[12px] lg:text-[16px] leading-[24px]">Abuja, Federal Capital Territory, Nigeria</p>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-start gap-2">
          <p className="text-white text-[16px] font-normal lg:text-[24px] font-playfair">
            Stay Connected
          </p>
          <form className="flex">
            <input
              type="email"
              placeholder="Enter email address"
              className="bg-white text-black w-[100%] text-[14px] font-bold px-[16px] py-[8px] lg:px-[32px] lg:py-[20px] outline-none"
            />
            <button
              type="submit"
              className="bg-[var(--primary-gold)] text-[var(--bg-primary)] text-[14px] font-bold px-[16px] py-[8px] lg:px-[32px] lg:py-[20px] uppercase hover:bg-white transition-colors"
            >
              subscribe
            </button>
          </form>
        </div>
      </div>
      
      <div className="flex flex-col sm:flex-row justify-between items-center mt-10 pt-5 border-t border-[var(--glass-border)]">
          <p className="text-gray-500 text-[12px]">
            &copy; {new Date().getFullYear()} Bamijoko & Sons. All rights reserved.
          </p>
          <p className="text-gray-500 text-[12px]">
            Powered by <a href="https://www.gritinformedia.tech" target="_blank" rel="noopener noreferrer" className="text-[var(--primary-teal)] font-bold">Grit Informed Media</a>
          </p>
      </div>
    </footer>
  );
}