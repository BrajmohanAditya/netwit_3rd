"use client";

import { CheckCircle, Users, Globe, Rocket } from "lucide-react";

export function EnterpriseHero() {
  return (
    <section className="w-full flex flex-col items-center">
      
      {/* Dark Hero Section */}
      <div className="relative min-h-[500px] w-full flex flex-col items-center justify-center p-6 bg-black overflow-hidden m-0">
        <div className="absolute inset-0 z-0 opacity-40">
           {/* Abstract dark photo stand-in */}
           <div className="w-full h-full bg-gradient-to-r from-gray-900 to-slate-800 mix-blend-multiply"></div>
        </div>
        <div className="absolute inset-0 bg-black/60 z-0"></div>

        <div className="relative z-10 max-w-[900px] w-full flex flex-col items-center text-center mt-8">
          <h1 className="text-[34px] md:text-[44px] font-bold text-white mb-6 tracking-tight drop-shadow-md">
            Expert Enterprise Software Development<br/>Services
          </h1>
          <p className="text-[13px] md:text-[14px] font-medium text-gray-200 mb-10 max-w-[650px] leading-[1.6] drop-shadow-sm">
            Serving Enterprises is a game of seasoned players who have<br/>infrastructure, scale, team and processes to deliver. We&apos;ve got that all<br/>covered.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full">
            <button className="bg-white text-black text-[13px] font-bold py-3 px-8 transition-transform hover:-translate-y-0.5 w-[180px] h-[48px] shadow-sm rounded-[2px]">
              Build Your Team
            </button>
            <button className="bg-transparent border-[1.5px] border-white text-white text-[13px] font-bold py-3 px-8 transition-colors hover:bg-white/10 w-[200px] h-[48px] rounded-[2px]">
              Our Engagement Model
            </button>
          </div>
        </div>
      </div>

      {/* Light Banner Section */}
      <div className="w-full bg-[#f8fbff] py-20 px-6 flex flex-col items-center">
        <h2 className="text-[26px] md:text-[32px] font-bold text-[#222] mb-6 text-center tracking-tight max-w-[800px] leading-snug">
          Reliable and Streamlined Enterprise<br/>Development Solutions
        </h2>
        <p className="text-[13px] text-[#666] mb-20 text-center max-w-[800px] leading-[1.6]">
          In our 25+ years of operations, we have helped over 100 Fortune 500 Enterprises unlock<br/>unprecedented performance through our On-Demand Teams and IT services.
        </p>

        {/* 4 Icons Grid */}
        <div className="max-w-[1240px] w-full grid grid-cols-2 md:grid-cols-4 gap-8 mb-24 justify-items-center">
            <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-[#f06f12]" />
            </div>
            <h4 className="text-[14px] font-bold text-[#222] mb-1">Reliable Processes</h4>
            <p className="text-[11px] text-gray-400">Integrated suite of development services.</p>
            </div>
            <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-purple-50 rounded-full flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-purple-600" />
            </div>
            <h4 className="text-[14px] font-bold text-[#222] mb-1">Dedicated Teams</h4>
            <p className="text-[11px] text-gray-400">High-performance, certified resource pool.</p>
            </div>
            <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-teal-50 rounded-full flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-teal-500" />
            </div>
            <h4 className="text-[14px] font-bold text-[#222] mb-1">10+ Global Campuses</h4>
            <p className="text-[11px] text-gray-400">Your Timezone, Your Terms.</p>
            </div>
            <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <Rocket className="w-6 h-6 text-gray-600" />
            </div>
            <h4 className="text-[14px] font-bold text-[#222] mb-1">2138+ Projects</h4>
            <p className="text-[11px] text-gray-400">Cross-functional Industry Experience.</p>
            </div>
        </div>

        {/* Certifications Block */}
        <div className="w-full max-w-[800px] flex flex-col items-center">
            <p className="text-[11px] text-gray-400 font-medium mb-10 text-center uppercase tracking-wide leading-relaxed">
            Strong foundation set on Trust, Camaraderie, and Excellence. Netsmartz is trusted for its Technology<br/>and Testing teams by Fortune 500 companies across the globe.
            </p>
            <button className="bg-black text-white text-[13px] font-bold py-3.5 px-10 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-transform rounded-[2px] mb-16">
            Get Started
            </button>

            {/* Dummy representation of logos to match layout */}
            <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-10 opacity-70 border-t border-gray-200 pt-16">
                <span className="font-bold text-[18px] text-gray-700">Apple Developer</span>
                <span className="font-bold text-[18px] text-gray-700">Microsoft <span className="text-gray-400 font-normal">Partner</span></span>
                <span className="font-bold text-[24px] text-gray-800 tracking-tighter">ISO</span>
                <span className="font-bold text-[18px] text-gray-700">AWS Partner</span>
                <span className="font-black text-[20px] text-gray-800 tracking-tighter">CMMI 3</span>
                <span className="font-bold text-[20px] text-gray-700 border border-gray-400 px-2 py-1">ISO 27001</span>
            </div>
        </div>

      </div>

    </section>
  );
}
