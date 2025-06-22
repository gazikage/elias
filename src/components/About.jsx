import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal'; // Import ScrollReveal

const AboutUs = () => {



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
}, []);




  return (
    <section className="py-10 px-6 md:px-12 lg:px-20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-[#007bff]">Who We Are</h2>
        <p className="text-sm text-white/50 mb-12 leading-relaxed reveal">
          At <strong>ELIAS</strong>, we merge creativity with strategy to <b>help</b> you land those clients you dream of by crafting high-converting websites, brand identities and strong marketing strategies. We’re passionate about helping you grow businesses through strategy, impactful design and technology.
        </p>
      </div>

      <div className="max-w-4xl mx-auto grid gap-10 md:grid-cols-2 reveal">
        <div className="p-8 bg-white/5 rounded-2xl shadow-sm flex flex-col gap-4">
          <h3 className="text-2xl font-semibold bg-clip-text text-transparent bg-[#007bff]">Why Choose Us?</h3>
          <ul className="text-white space-y-2">
            <li>✔ Over 3 years of industry expertise in branding, web, and digital marketing</li>
            <li>✔ Strategic brand identity & rebranding solutions</li>
            <li>✔ High-converting websites, landing pages, and automation tools</li>
            <li>✔ Client-first approach to digital growth & visibility</li>
            <li>✔ Innovative designs powered by the latest technologies</li>
            <li>✔ On-time delivery with a seamless and stress-free process</li>
          </ul>
        </div>

        <div className="p-8 bg-white/5 rounded-2xl shadow-sm flex flex-col gap-4 reveal">
          <h3 className="text-2xl font-semibold bg-clip-text text-transparent bg-[#007bff]">Our Services</h3>
          <ul className="text-white space-y-2">
            <li>✔ Brand Identity & Logo Design</li>
            <li>✔ Website Design & Development</li>
            <li>✔ UI/UX & Product Design</li>
            <li>✔ Social Media & Digital Branding</li>
            <li>✔ Rebranding & Digital Transformation and more</li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-16">
        <a href="https://wa.me/09049173033?text=Hello!%20I%20visited%20your%20website%20and%20would%20like%20to%20inquire%20about%20your%20creative%20services.%20Looking%20forward%20to%20discussing%20how%20you%20can%20help%20with%20my%20project%20needs." className="bg-[#007bff] text-white px-8 py-4 rounded-full text-lg font-medium shadow-md hover:bg-blue- transition">
          Let’s Work Together
        </a>
      </div>

      <div className='flex justify-center items-center'>
        <hr className='mb-[-7rem] text-white/30 md:w-[90%] w-full' />
      </div>
    </section>
  );
};

export default AboutUs;
