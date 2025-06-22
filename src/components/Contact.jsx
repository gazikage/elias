import React from 'react';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const ContactSection = () => {
  return (
    <div className="w-full bg-slate-50 py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-slate-900 mb-6">
            Let's discuss how we can{' '}
            <span className="italic">elevate</span> your business
          </h2>
          <div className="flex items-center justify-center mt-8 space-x-2 text-slate-600">
            <ArrowRight className="w-5 h-5" />
            <span className="text-lg">Now</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-3 mt-16">
          <div className="text-center">
            <div className="bg-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-sm">
              <Mail className="text-slate-600" size={24} />
            </div>
            <h3 className="font-medium text-slate-900 mb-2">Email Us</h3>
            <a href="mailto:hello.elias.agency@gmail.com" className="text-slate-600 hover:text-slate-900 transition-colors">
            hello.elias.agency@gmail.com
            </a>
          </div>

          <div className="text-center">
            <div className="bg-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-sm">
              <Phone className="text-slate-600" size={24} />
            </div>
            <h3 className="font-medium text-slate-900 mb-2">Call Us</h3>
            <a href="tel:+2349132489550" className="text-slate-600 hover:text-slate-900 transition-colors">
              +(234) 913-248-9550
            </a>
          </div>

          
        </div>

        <div className="text-center mt-16">
          <a 
            href="https://calendly.com/elias-ag/30min"
            className="inline-flex items-center space-x-2 bg-slate-900 text-white px-8 py-4 rounded-2xl hover:bg-slate-800 transition-colors duration-200"
          >
            <span className="font-medium">Schedule a Call</span>
            <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;