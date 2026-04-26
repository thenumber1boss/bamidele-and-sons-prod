"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@components/ui/button/button";
import { useUser } from "@context/UserContext";

const DynamicHero = () => {
  const { visitTier } = useUser();
  const router = useRouter();

  const content = {
    1: {
      title: "Timeless Elegance.\nImported Perfection.",
      subtitle: "We don't just fabricate. We source the world's finest stainless steel and glass for Nigeria's most ambitious projects.",
      cta: "Explore Catalogue",
      link: "/catalogue"
    },
    2: {
      title: "Trusted by Nigeria's\nTop Architects.",
      subtitle: "Join 100+ developers who rely on our direct import pipeline and precision fabrication for guaranteed material integrity.",
      cta: "View Our Projects",
      link: "/#use-cases"
    },
    3: {
      title: "Ready to Build?\nSecure Your Materials.",
      subtitle: "Our fabrication slots are filling up. Book your consultation today to ensure project timeline and material availability.",
      cta: "Book Consultation",
      link: "/contact-us"
    }
  }[visitTier];

  return (

    <section className="flex flex-col items-center justify-start min-h-[90vh] relative px-[20px] sm:px-[40px] lg:px-[96px] pt-[180px] pb-10 md:pb-20 bg-[url('/home_img.jpg')] bg-no-repeat bg-cover bg-center bg-fixed">
      <div className="absolute inset-0 bg-gradient-to-r from-[#0F1012] via-[#0f1012d9] to-transparent z-0" />
      
      <div className="flex flex-col items-start justify-center gap-[40px] max-w-[800px] z-10 w-full">
        <div className="flex flex-col items-start justify-center gap-[20px]">
          <h1 className="text-[40px] lg:text-[80px] font-[600] font-playfair leading-[1.1] whitespace-pre-line text-white text-metallic">
            {content.title}
          </h1>
          <p className="text-[14px] lg:text-[18px] font-[400] text-gray-300 max-w-[500px] leading-relaxed">
            {content.subtitle}
          </p>
        </div>
        
        <div className="mt-8">
            <Button onClick={() => router.push(content.link)}>
              {content.cta}
            </Button>
        </div>
      </div>
    </section>
  );
};

export default DynamicHero;