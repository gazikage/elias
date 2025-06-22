import React from 'react';
import r11 from '../assets/images/r11.png';
import r12 from '../assets/images/r12.png';
import r13 from '../assets/images/r13.png';
import r14 from '../assets/images/r14.png';
import r15 from '../assets/images/r15.png';
import r16 from '../assets/images/r16.png';
import r17 from '../assets/images/r17.png';

const PhotoSlides = () => {
    const topRowImages = [r17, r16, r15, r11, r12, r13, r14];
    const duplicatedTopRow = [...topRowImages, ...topRowImages, ...topRowImages, ...topRowImages];

    return (
        <center>
            <p className='font-semibold text-xs opacity-70 italic text-white'>We are trusted by leading busniesses over the world!</p>

            <div className="md:w-3/4 w-full overflow-hidden py-3 relative">
                <div className="absolute top-0 left-0 w-16 h-full bg-gradient-to-r from-[#121212] to-transparent z-10"></div>
                <div className="absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-[#121212] to-transparent z-10"></div>
                <div className="w-full flex">
                    <div className="flex min-w-max animate-scroll">
                        {duplicatedTopRow.map((src, index) => (
                            <div key={index} className="flex-none w-32 md:w-60 h-28 shrink-0">
                                <img src={src} alt="Slide" className="filter invert w-full h-full object-cover opacity-75" />
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
    );
};

export default PhotoSlides;
