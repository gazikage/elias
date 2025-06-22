import React from 'react';
import { Briefcase, Users, Wine, Award } from 'lucide-react';

const StatsSection = () => {
  return (
      <center>
          <div className="bg-[#0a1f44] p-8 rounded-4xl w-3/4 shadow-md">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {/* Years of Experience */}
          <div className="flex flex-col items-center text-white relative">
            <Briefcase size={32} className="mb-2" />
            <div className="text-4xl font-bold mb-2">3+</div>
            <div className="text-center">Years of experience</div>
            <div className="hidden md:block absolute right-0 top-0 h-full w-px bg-white/20" />
          </div>

          {/* Trusted Clients */}
          <div className="flex flex-col items-center text-white relative">
            <Users size={32} className="mb-2" />
            <div className="text-4xl font-bold mb-2">10+</div>
            <div className="text-center">Happy Clients</div>
            <div className="hidden md:block absolute right-0 top-0 h-full w-px bg-white/20" />
          </div>

          {/* Millions in Online Sales */}
          <div className="flex flex-col items-center text-white relative">
            <Wine size={32} className="mb-2" />
            <div className="text-4xl font-bold mb-2">$8k+</div>
            <div className="text-center">in Online Sales</div>
            <div className="hidden md:block absolute right-0 top-0 h-full w-px bg-white/20" />
          </div>

          {/* Master Certifications */}
          <div className="flex flex-col items-center text-white">
            <Award size={32} className="mb-2" />
            <div className="text-4xl font-bold mb-2">2+</div>
            <div className="text-center">Master Certifications</div>
          </div>
        </div>
      </div>
    </div>
    </center>
  );
};

export default StatsSection;