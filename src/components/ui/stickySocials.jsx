import React from "react";
import { WhatsApp, Facebook, Instagram, Phone } from "@mui/icons-material";

const StickySocials = () => {
  return (
    <div className="fixed bottom-[100px] right-[0] z-50 flex flex-col items-center space-y-[5px] md:space-y-2 py-[5px] pr-[5px] pl-[3px] bg-white dark:bg-[#272626] rounded-[2px] lg:rounded-[3px] shadow-md">
    <a href="tel:+2348065470241">
      <Phone className="text-[#066d18] w-[20px] h-[20px] sm:w-[30px] sm:h-[30px]  hover:text-gray-600" />
    </a>
      <a href="https://wa.me/+2348065470241" target="_blank" rel="noopener noreferrer">
        <WhatsApp className="text-green-500 w-[20px] h-[20px] sm:w-[30px] sm:h-[30px] hover:text-green-700" />
      </a>
      <a href="https://facebook.com/bamidele.bamijoko" target="_blank" rel="noopener noreferrer">
        <Facebook className="text-blue-600 w-[20px] h-[20px] sm:w-[30px] sm:h-[30px]  hover:text-blue-800" />
      </a>
      <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
        <Instagram className="text-pink-500 w-[20px] h-[20px] sm:w-[30px] sm:h-[30px]  hover:text-pink-700" />
      </a>
    </div>
  );
};

export default StickySocials;