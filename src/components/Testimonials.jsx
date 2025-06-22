/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Star, Quote } from 'lucide-react';
import ScrollReveal from 'scrollreveal'; // Import ScrollReveal

const TestimonialSlider = () => {
  const testimonials = [
    {
      id: 1,
      name: "Samuel Smith A.",
      position: "CEO",
      company: "Smith XM Global",
      content: "We were thoroughly impressed with the service we received! The team's designs were spot on, and they really helped us boost our online confidence. We've seen a significant increase in traffic and engagement, and we couldn't be happier with the results. Their expertise and dedication truly made all the difference!",
      rating: 4
    },
    {
      id: 2,
      name: "Emmanuel O.",
      position: "Co-founder",
      company: "MX Technologies",
      content: "Working with this team has been a game-changer for our company. Their expertise and dedication helped us achieve our goals in record time. I highly recommend their services to anyone looking to grow their business.",
      rating: 4.5
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "Operations Manager",
      company: "Global Retail Group",
      content: "From start to finish, the experience was seamless. The team was responsive, professional, and delivered exactly what we needed. Our performance metrics have improved significantly since implementation.",
      rating: 5
    },
    {
      id: 4,
      name: "David Patel",
      position: "CFO",
      company: "NextGen Financial",
      content: "Their strategic insights and attention to detail have been invaluable to our growth. The ROI we've seen since implementing their recommendations has exceeded all expectations. A truly exceptional team.",
      rating: 5
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change testimonial every 5 seconds

    return () => clearInterval(timer);
  }, []);

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <Star
          key={i}
          size={16}
          className={`${
            i < Math.floor(rating)
              ? 'text-yellow-400 fill-yellow-400'
              : i < rating
              ? 'text-yellow-400 fill-yellow-400 opacity-50'
              : 'text-gray-300'
          }`}
        />
      );
    }
    return stars;
  };





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
    <div className="w-full py-16 px-4 reveal">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-white font-normal mb-4 uppercase tracking-wide text-sm" style={{letterSpacing: '5px'}}>
            Testimonials
          </p>
          <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-[#007bff] mb-4">
           What Our Clients says
          </h2>
          <p className="text-white/50 text-xs">
            We love our clients – and they&#39;ve got some pretty great things to say
            about working with us.
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div
            className="transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            <div className="flex">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-white/5 rounded-2xl p-8 h-full">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-[#007bff] rounded-full flex items-center justify-center mr-4">
                        <Quote className="text-white" size={16} />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold">
                          {testimonial.name}
                        </h3>
                        <p className="text-slate-400 text-sm">
                          {testimonial.position} at {testimonial.company}
                        </p>
                      </div>
                    </div>
                    <div className="mb-4 flex">
                      {renderStars(testimonial.rating)}
                    </div>
                    <p className="text-slate-300 leading-relaxed">
                      {testimonial.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                currentIndex === index ? 'bg-white' : 'bg-slate-600'
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
      <div className='flex justify-center items-center'>
        <hr className='mb-[-7rem] text-white/30 md:w-[80%] w-full'/>
      </div>
    </div>
    
  );
};

export default TestimonialSlider;