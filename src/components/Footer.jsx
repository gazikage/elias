/* eslint-disable no-unused-vars */
import React from 'react';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin 
} from 'lucide-react';
import logo from '../assets/images/blue.png'
import { Link } from "react-scroll";
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-gray-100 z-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1">
            <img src={logo} alt="logo" className='w-22 '/>
            <p className="text-gray-400 mb-4">
              Amplifying businesses, Attracting Ideal Clients.
            </p>
            <div className="flex gap-4">
              <Link to="instagram" className="text-gray-400 hover:text-gray-600 transition-colors cursor-pointer">
                <Instagram size={20} />
              </Link>
              <Link to="linkedin" className="text-gray-400 hover:text-gray-600 transition-colors cursor-pointer">
                <Linkedin size={20} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h2 className="text-xl font-semibold text-white mb-4">Quick Links</h2>
            <ul className="space-y-2">
              {['About Us', 'Services', 'Projects', 'Programs', 'Careers'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item.toLowerCase().replace(' ', '-')} 
                    className="text-gray-400 hover:text-blue-600 transition-colors cursor-pointer"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="col-span-1">
            <h2 className="text-xl font-semibold text-white mb-4">Services</h2>
            <ul className="space-y-2">
              {[ 'Web Development', 'Digital Marketing', 'Social Media Management', 'Mobile Apps', 'Consulting' ].map((service) => (
                <li key={service}>
                  <Link 
                    to={service.toLowerCase().replace(' ', '-')} 
                    className="text-gray-400 hover:text-blue-600 transition-colors cursor-pointer"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h2 className="text-xl font-semibold text-white mb-4">Contact</h2>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Phone className="text-gray-400" size={20} />
                <a 
                  href="tel:+2349132489550" 
                  className="text-gray-400 hover:text-blue-600 transition-colors cursor-pointer"
                >
                  +(234) 913-248-9550
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-gray-400" size={20} />
                <a 
                  href="mailto:hello.elias.agency@gmail.com" 
                  className="text-gray-400 hover:text-blue-600 transition-colors cursor-pointer"
                >
                  hello.elias.agency@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-100">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm">
              © {currentYear} ELIAS AG. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link 
                to="privacy-policy" 
                className="text-sm text-gray-600 hover:text-blue-600 transition-colors cursor-pointer"
              >
                Privacy Policy
              </Link>
              <Link 
                to="terms-of-service" 
                className="text-sm text-gray-600 hover:text-blue-600 transition-colors cursor-pointer"
              >
                Terms of Service
              </Link>
              <Link 
                to="cookie-policy" 
                className="text-sm text-gray-600 hover:text-blue-600 transition-colors cursor-pointer"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
