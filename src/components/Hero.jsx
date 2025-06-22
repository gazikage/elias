/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { InlineWidget } from "react-calendly";
import { X } from "lucide-react"; // For a nice close icon

const HeroSection = () => {

  const [showCalendly, setShowCalendly] = useState(false);

  return (
    <section className="flex flex-col justify-center items-center gap-6 md:gap-">


      <p className="text-xs my-2 opacity-60 text-center w-[60%] font-semibold">
        NEW🎉 Get a FREE Instagram page upgrade – but hurry, limited slots available! Click the button below to get started!
      </p>

      <div className='flex flex-col justify-center items-center gap-4'>
        <h3 className='text-center font-semibold mx-4 text-2xl md:text-3xl' style={{ fontSize: '' }}>
          Land Your <u className='text-[#007bff]'>Dream Clients</u> with our Digital <u className='text-[#007bff]'>Expertise</u>
        </h3>
        <p className='text-center w-[90%] opacity-70 text-sm max-w-[580px]'>
          We help <b>businesses</b> like yours <b>grow</b> with stunning websites, powerful <b>marketing strategies</b>,
          and social media solutions that deliver real results.

        </p>
      </div>
      <div className="cta flex flex-col md:flex-row justify-center items-center gap-4 md:w-[38%]">
        <a href="https://wa.me/2349132489550?text=Hello!%20I%20visited%20your%20website%20and%20would%20like%20to%20book%20a%20slot%20for%20the%20free%20Instagram%20page%20revamp%20offer!" className='text-white bg-[#007bff] p-3 sm:px-14 w-full text-center rounded-2xl'> 🚀 Free Instagram Page Upgrade</a>
        <a className='p-3 px-9 w-full text-center rounded-2xl cursor-pointer' style={{ border: '1px solid #007bff' }} onClick={() => setShowCalendly(true)} > Book a Discovery call</a>
      </div>

      {/* Calendly Widget - Show When Button is Clicked */}
      {showCalendly && (
        <div className="mt-6 border rounded-lg shadow-lg p-4 bg-white">

          {/* Close Button */}
          <button
            onClick={() => setShowCalendly(false)}
            className="absolute top-2 right-2 bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition cursor-pointer">
            <X className="w-5 h-5 text-gray-700" />
          </button>
          <InlineWidget url="https://calendly.com/elias-ag/30min" />
        </div>
      )}


    </section>
  );
};

export default HeroSection;