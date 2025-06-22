import React, { useState, useEffect } from 'react';
import ScrollReveal from 'scrollreveal'; // Import ScrollReveal
import { Plus, Minus } from 'lucide-react';

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "What services do you offer in digital marketing?",
      answer: "We provide a comprehensive suite of digital marketing services including SEO optimization, social media management, content marketing, PPC advertising, email marketing campaigns, and marketing analytics. Our team crafts customized strategies that align with your business goals and target audience to maximize your online presence and ROI."
    },
    {
      id: 2,
      question: "How do you measure the success of marketing campaigns?",
      answer: "We track various key performance indicators (KPIs) including website traffic, conversion rates, engagement metrics, lead generation, and ROI. We provide detailed monthly reports with comprehensive analytics and insights. Our transparent reporting helps you understand the impact of your marketing investments and allows us to continuously optimize campaigns for better results."
    },
    {
      id: 3,
      question: "What is your website design and development process?",
      answer: "Our process begins with a thorough discovery phase to understand your business needs and goals. We then move through strategic planning, wireframing, design, development, and testing phases. We follow a collaborative approach, ensuring regular client feedback and revisions at each stage. Typical website projects take 8-12 weeks from concept to launch, depending on complexity."
    },
    {
      id: 4,
      question: "Do you offer ongoing maintenance and support?",
      answer: "Yes, we provide comprehensive maintenance and support packages. These include regular website updates, security monitoring, performance optimization, content updates, and technical support. We also offer training sessions for your team to manage basic content updates independently. Our support team is available during business hours to address any concerns or technical issues."
    },
    {
      id: 5,
      question: "What makes your agency different from others?",
      answer: "We stand out through our integrated approach to digital marketing and design. Unlike agencies that offer isolated services, we ensure all digital strategies work together cohesively. We assign dedicated project managers, provide transparent reporting, and focus on delivering measurable results. Our team stays current with industry trends and technologies to provide innovative solutions that drive real business growth."
    },
    {
      id: 6,
      question: "What makes your agency different from others?",
      answer: "We stand out through our integrated approach to digital marketing and design. Unlike agencies that offer isolated services, we ensure all digital strategies work together cohesively. We assign dedicated project managers, provide transparent reporting, and focus on delivering measurable results. Our team stays current with industry trends and technologies to provide innovative solutions that drive real business growth."
    },
    {
      id: 5,
      question: "What makes your agency different from others?",
      answer: "We stand out through our integrated approach to digital marketing and design. Unlike agencies that offer isolated services, we ensure all digital strategies work together cohesively. We assign dedicated project managers, provide transparent reporting, and focus on delivering measurable results. Our team stays current with industry trends and technologies to provide innovative solutions that drive real business growth."
    },
    
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
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
    <div className="w-full py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-2xl bg-clip-text text-transparent bg-[#007bff] font-semibold mb-4 uppercase tracking-wide">
            FAQs
          </p>
          <h2 className="text-sm text-white  mb-4">
            Your questions answered
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={faq.id}
              className="rounded-2xl overflow-hidden reveal"
            >
              <button
                className="w-full px-6 py-4 flex justify-between items-center cursor-pointer bg-white/5 hover:bg-white/15 transition-colors duration-200"
                onClick={() => toggleAccordion(index)}
              >
                <span className="text-left font-medium text-white/70">
                  {faq.question}
                </span>
                <span className="ml-4 flex-shrink-0 rounded-2xl bg-[#007bff]">
                  {openIndex === index ? (
                    <Minus size={20} />
                  ) : (
                    <Plus size={20} />
                  )}
                </span>
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index 
                    ? 'max-h-96 opacity-100' 
                    : 'max-h-0 opacity-0'
                } overflow-hidden`}
              >
                <div className="px-6 py-4 bg-white/5 text-white/70 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQAccordion;