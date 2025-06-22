/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import ScrollReveal from 'scrollreveal'; // Import ScrollReveal
import Smithxm from '../assets/images/clients/smith.png'
import mx from '../assets/images/clients/mx.png'
import oasis from '../assets/images/clients/OASIS.png'
import r11 from '../assets/images/r11.png';
import r12 from '../assets/images/r12.png';
import r13 from '../assets/images/r13.png';
import r14 from '../assets/images/r14.png';
import r15 from '../assets/images/r15.png';
import r16 from '../assets/images/r16.png';
import r17 from '../assets/images/r17.png';

const HeroSection = () => {
    const topRowImages = [r17, r16, r15, r11, r12, r13, r14];
    const duplicatedTopRow = [...topRowImages, ...topRowImages, ...topRowImages, ...topRowImages];



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

    // TYPING EFFECT
    const [charIndex, setCharIndex] = useState(0);
    const [isTyping, setIsTyping] = useState(true);
    const dreamText = "Dream Clients!";

    useEffect(() => {
        if (isTyping && charIndex < dreamText.length) {
            // Type each character with a slight delay
            const timer = setTimeout(() => {
                setCharIndex(charIndex + 1);
            }, 100);
            return () => clearTimeout(timer);
        } else if (isTyping && charIndex === dreamText.length) {
            // Pause at the end of typing before deleting
            const timer = setTimeout(() => {
                setIsTyping(false);
            }, 1500);
            return () => clearTimeout(timer);
        } else if (!isTyping && charIndex > 0) {
            // Delete each character with a slight delay
            const timer = setTimeout(() => {
                setCharIndex(charIndex - 1);
            }, 50);
            return () => clearTimeout(timer);
        } else if (!isTyping && charIndex === 0) {
            // Pause when empty before starting to type again
            const timer = setTimeout(() => {
                setIsTyping(true);
            }, 500);
            return () => clearTimeout(timer);
        }
    }, [charIndex, isTyping]);

    return (
        <div className="h-full md:h-[100vh] flex flex-col gap-10 justify-center items-left mx-10 md:mx-80 pt-36 reveal">
            <div className="heading flex flex-col gap-4 justify-center items-left text-left">
                <p className='text-[27px] md:text-5xl text-white text-center font-semibold md:font-bold'>
                    Helping Businesses & Personal Brands Land Their{" "}
                    <span className="text-blue-400">
                        {dreamText.substring(0, charIndex)}
                        <span className="animate-pulse">|</span>
                    </span>
                </p>

                <p className='text-white opacity-70 text-xs text-center'>
                    We help businesses like yours grow with stunning websites, and powerful marketing strategies, and social media solutions that deliver real results.
                </p>
            </div>

            <div className="cta flex flex-col gap-10 md:flex-row justify-center items-center">
                <div>
                    <a href="https://calendly.com/elias-ag/30min" className='text-sm px-4 rounded-full py-3 text-white bg-[#007bff] hover:scale-[1.05] transition'>Claim FREE Consultation now!</a>
                </div>

                <div className="clients flex gap-3 items-center">
                    <div className="pics flex object-cover"  >
                        <img src={Smithxm} alt="smith_xm" className='rounded-full w-8 h-8 blur-xs' onLoad={(e) => e.target.classList.remove('blur-xs')} />
                        <img src={mx} alt="smith_xm" className='rounded-full w-8 h-8 ml-[-1rem] blur-xs' onLoad={(e) => e.target.classList.remove('blur-xs')} />
                        <img src={oasis} alt="smith_xm" className='rounded-full w-8 h-8 ml-[-1rem] blur-xs' onLoad={(e) => e.target.classList.remove('blur-xs')} />
                    </div>
                    <div className="words flex flex-col">
                        <p className='text-white text-xs'>10+</p>
                        <p className='opacity-65 text-white text-xs'>Happy Clients</p>
                    </div>
                </div>
            </div>

            <center>
                <p className='font-semibold text-xs opacity-70 italic text-white'>We are trusted by leading businesses worldwide!</p>

                <div className="md:w-3/4 w-full overflow-hidden py-3 relative">
                    <div className="absolute top-0 left-0 w-16 h-full bg-gradient-to-r from-[#121212] to-transparent z-10"></div>
                    <div className="absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-[#121212] to-transparent z-10"></div>
                    <div className="w-full flex">
                        <div className="flex min-w-max animate-scroll">
                            {duplicatedTopRow.map((src, index) => (
                                <div key={index} className="flex-none w-32 md:w-60 h-28 shrink-0">
                                    <img
                                        src={src}
                                        alt="Slide"
                                        className="filter invert w-full h-full object-cover opacity-75 blur-xs"
                                        // style={{ objectFit: 'cover', filter: 'blur(10px)' }}
                                        onLoad={(e) => e.target.classList.remove('blur-xs')}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    <style>
                        {`
              @keyframes scroll {
                from {
                  transform: translateX(0);
                }
                to {
                  transform: translateX(-100%);
                }
              }
              .animate-scroll {
                display: flex;
                animation: scroll 40s linear infinite;
              }
            `}
                    </style>
                </div>
            </center>
        </div>
    )
}

export default HeroSection;
