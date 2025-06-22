/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from "react-scroll";
import { Helmet } from 'react-helmet'; // For adding preload
import logo from '../assets/images/black.png'

import ScrollReveal from 'scrollreveal'; // Import ScrollReveal


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Why Us');
  const logoUrl = logo; // Use the CDN URL for logo

  const toggleMenu = () => setIsOpen(!isOpen);
  const handleLinkClick = (title) => {
    setActiveLink(title);
    setIsOpen(false);
  };

  const navLinks = [
    { title: 'Why Us', href: 'why-us' },
    { title: 'Services', href: 'services' },
    { title: 'Testimonials', href: 'testimonials' },
    { title: 'FAQ', href: 'faq' },
  ];
  useEffect(() => {
    // ScrollReveal setup
    ScrollReveal().reveal('.reveal', {
      distance: '50px',
      duration: 1000,
      delay: 200,
      easing: 'ease-in-out',
      opacity: 0,
      reset: true, // Optional: Reset animation on scroll back
      scale: 0.8, // Optional: You can scale the element
    });
  }, []);

  return (
    <>
      <Helmet>
        <link rel="preload" href={logoUrl} as="image" />
      </Helmet>
      <nav className="text-white px-6 fixed left-1/2 -translate-x-1/2 w-full max-w-full bg-white/1 backdrop-blur-lg shadow-lg z-50 reveal">
        <div className="max-w-7xl mx-auto">
          {/* Desktop Navigation */}
          <div className="flex justify-between items-center">
            {/* Left Section: Hamburger and Logo */}
            <div className="flex items-center space-x-4">
              <a href="/" className="text-xl font-bold">
                <img
                  src={logoUrl}
                  alt="Logo"
                  className="md:w-24 w-18 filter invert blur-xs"
                  loading="eager" // Ensure logo is eagerly loaded
                  onLoad={(e) => e.target.classList.remove('blur-xs')}
                />
              </a>
            </div>

            {/* Center Section: Nav Links */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.title}
                  to={link.href}
                  className={`relative transition-colors duration-200 cursor-pointer ${
                    activeLink === link.title
                      ? 'text-white'
                      : 'text-gray-300 hover:text-white'
                  }`}
                  onClick={() => handleLinkClick(link.title)}
                >
                  {link.title}
                  {activeLink === link.title && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#fff] duration-200" />
                  )}
                </Link>
              ))}
            </div>

            {/* Right Section: CTA Button */}
            <button
              className="md:hidden text-gray-300 hover:text-white transition-all duration-200"
              onClick={toggleMenu}
            >
              <div className="transform transition-transform duration-200">
                {isOpen ? <X size={34} /> : <Menu size={32} />}
              </div>
            </button>
          </div>

          {/* Mobile Navigation */}
          <div
            className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
              isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="flex flex-col space-y-4 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.title}
                  to={link.href}
                  smooth={true}
                  duration={500}
                  className={`transition-colors duration-200 transform cursor-pointer ${
                    activeLink === link.title
                      ? 'text-white pl-4 border-l-2 border-[#007bff]'
                      : 'text-gray-300 hover:text-white hover:pl-4'
                  }`}
                  onClick={() => handleLinkClick(link.title)}
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
