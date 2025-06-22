import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal'; // Import ScrollReveal

const ServicesSection = () => {
  const popularServices = [
    "Logos and Branding",
    "Website Design",
    "Brand Guidelines",
    "Newsletter Emails",
    "Website & Blog Copywriting",
    "Social Media Graphics",
    "Design Systems"
  ];

  const additionalServices = [
    "Email Copywriting",
    "Landing Pages",
    "Sales & Marketing Emails",
    "Presentations & Pitch Decks",
    "Social Media Ads",
    "Flyers & Brochures",
    "Google Display Ads",
    "Banner Ads",
    "SEO",
    "Maintenance & Hosting",
    "Automation",
    "And more.."
  ];




  useEffect(() => {
    // ScrollReveal setup
    ScrollReveal().reveal('.reveal', {
        distance: '50px',
        duration: 1000,
        delay: 200,
        easing: 'ease-in-out',
        opacity: 0,
        origin: 'bottom',
        reset: true, // Optional: Reset animation on scroll back
        scale: 0.8, // Optional: You can scale the element
    });

    ScrollReveal().reveal('.reveal1', {
      distance: '50px',
      duration: 1000,
      delay: 200,
      easing: 'ease-in-out',
      opacity: 0,
      origin: 'left',
      reset: true, // Optional: Reset animation on scroll back
      scale: 0.8, // Optional: You can scale the element
  });

  ScrollReveal().reveal('.reveal2', {
    distance: '50px',
    duration: 1000,
    delay: 200,
    easing: 'ease-in-out',
    opacity: 0,
    origin: 'right',
    reset: true, // Optional: Reset animation on scroll back
    scale: 0.8, // Optional: You can scale the element
});




}, []);




  return (
    <div className="bg-[#121212] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-left flex flex-col mb-16">
          <div className="flex items-center justify-items-start gap- mb-4">
            <span className="text-white uppercase text-sm tracking-wider" style={{letterSpacing: '5px'}}>CORE SERVICES</span>
            <svg className="w-3 h-3 text-[#007bff]" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 0L9.5 6.5H16L10.5 9.5L12 16L8 12L4 16L5.5 9.5L0 6.5H6.5L8 0Z" />
            </svg>
          </div>
          <h2 className="md:text-4xl text-[27px] text-left font-semibold text-white mb-4">
            Exceeding Expectaions
          </h2>
          <p className="text-white text-left opacity-65 text-sm md:w-full :max-w-2xl ">
            We're your go-to creative partner, offering a range of services that will turn your brand around and keep things running smoothly.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 reveal">
          {/* Most Popular Section */}
          <div className="relative bg-[#121212] border rounded-3xl p-8 text-white reveal1">
            <div className="absolute top-8 right-8">
              <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M30 50L50 30" stroke="#FFD700" strokeWidth="2" />
                <path d="M45 28L52 35" stroke="#FFD700" strokeWidth="2" />
                <path d="M52 28L45 35" stroke="#FFD700" strokeWidth="2" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-6">Most popular</h3>
            <div className="space-y-4">
              {popularServices.map((service, index) => (
                <div
                  key={index}
                  className="py-2 border-b border-white/10 hover:border-white/30 transition-colors cursor-pointer"
                >
                  {service}
                </div>
              ))}
            </div>
            <button className="mt-8 w-full bg-[#007bff] py-3 rounded-full font-medium hover:bg-gray-100 transition-colors">
              <a href="https://wa.me/09049173033?text=Hello!%20I%20visited%20your%20website%20and%20would%20like%20to%20inquire%20about%20your%20creative%20services.%20Looking%20forward%20to%20discussing%20how%20you%20can%20help%20with%20my%20project%20needs.">Reach out to us directly</a>
            </button>
          </div>

          {/* Additional Services Grid */}
          <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-x-8 reveal2">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="py-4 border-b border-gray-200 hover:border-gray-400 transition-colors cursor-pointer text-white/50"
              >
                {service}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;