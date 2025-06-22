import React from 'react';
import { Headphones } from 'lucide-react';

const ImprovementGuarantee = () => {
  return (
    <div className="bg-[#0a1f44] w-full py-6 relative">
      <div className="container mx-auto flex items-center justify-between px-6">
        {/* Left section with headphones icon and guarantee text */}
        <div className="flex items-center space-x-4">
          <div className="bg-white p-2 rounded-full">
            <Headphones className="text-[#121212] h-6 w-6" />
          </div>
          <h2 className="text-white text-2xl md:text-4xl font-bold">
            60 Day Improvement Guarantee 😃
          </h2>
        </div>
        
        {/* Call button on the right */}
        <div className="hidden md:flex">
          <a href="tel:+2349132489550" 
            className="flex items-center bg-white text-black font-bold px-4 py-3 rounded-full"
          >
            <span className="mr-2">Call +(234) 913-248-9550 </span>
            <span>→</span>
          </a>
        </div>
      </div>
      
      {/* Mobile responsive call button */}
      <div className="md:hidden absolute right-6 top-1/2 transform -translate-y-1/2 mt-6">
        <a href="tel:602.690.0442" 
          className="flex items-center bg-white text-black font-bold px-3 py-2 rounded-full text-sm"
        >
          <span className="mr-1 text-xs">CALL</span>
          <span>→</span>
        </a>
      </div>
    </div>
  );
};

export default ImprovementGuarantee;