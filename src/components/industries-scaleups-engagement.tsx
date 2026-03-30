"use client";

import { CheckSquare } from "lucide-react";

export function ScaleupsEngagement() {
  return (
    <section className="w-full bg-white flex flex-col items-center py-24 px-6 relative overflow-hidden">
      
      {/* Decorative large circle behind cards */}
      <div className="absolute right-[-10%] bottom-[-10%] w-[600px] h-[600px] bg-blue-50/50 rounded-full z-0"></div>

      <div className="max-w-[1200px] w-full grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
        
        {/* Left Form Content */}
        <div className="flex flex-col pr-8 pt-8">
           <p className="text-[11px] text-primary font-bold tracking-[0.15em] uppercase mb-4">
             ENGAGEMENT MODELS
           </p>
           <h2 className="text-[34px] md:text-[40px] font-bold text-[#222] mb-6 tracking-tight">
             Your Team - Your Way
           </h2>
           <p className="text-[14px] text-[#555] mb-10 leading-[1.6]">
             Based on your needs and size of the projects, you can choose what you need from us. We have various engagement models to pick from.
           </p>

           <form className="flex flex-col gap-4 max-w-[500px]">
              <input type="text" placeholder="Your Name*" className="w-full border border-gray-300 p-3.5 text-[13px] outline-none focus:border-gray-500 rounded-[2px]" />
              <input type="text" placeholder="Company*" className="w-full border border-gray-300 p-3.5 text-[13px] outline-none focus:border-gray-500 rounded-[2px]" />
              <input type="email" placeholder="Email Address*" className="w-full border border-gray-300 p-3.5 text-[13px] outline-none focus:border-gray-500 rounded-[2px]" />
              
              <div className="flex border border-gray-300 rounded-[2px] bg-white">
                <div className="w-[80px] border-r border-gray-300 flex items-center justify-center p-2 bg-gray-50 cursor-pointer">
                   <div className="w-6 h-4 bg-gray-300 relative flex items-center justify-center text-[8px] font-bold shadow-sm">US</div>
                   <span className="text-[12px] ml-1">▼</span>
                </div>
                <input type="tel" placeholder="Phone*" className="flex-1 p-3.5 text-[13px] outline-none" />
              </div>

              <p className="text-[10px] text-gray-500 mt-2 leading-relaxed">
                 © 2024 ReCaptcha Policies - Netsmartz process your message recorded for any purpose from Netsmartz may be apply "T&C*" and Privacy Policy applicable to apply Netsmartz Privacy may apply.
              </p>

              <div className="flex items-center gap-4 mt-2">
                 <button type="button" className="bg-black text-white text-[13.5px] font-bold py-3.5 px-8 hover:-translate-y-0.5 transition-transform rounded-[2px]">
                   Get Started
                 </button>
                 {/* Dummy ReCaptcha */}
                 <div className="border border-gray-300 bg-white p-2 flex items-center gap-3 w-[220px] rounded-[3px] shadow-sm ml-auto">
                    <div className="w-6 h-6 border-2 border-gray-300 rounded-sm flex items-center justify-center cursor-pointer hover:border-blue-400"><CheckSquare className="w-4 h-4 text-transparent" /></div>
                    <span className="text-[11px] text-gray-600 font-medium">I&apos;m not a robot</span>
                    <div className="ml-auto w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center"><div className="w-3 h-3 bg-blue-600 rotate-45"></div></div>
                 </div>
              </div>
           </form>
        </div>

        {/* Right 2x2 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
           {/* Card 1 */}
           <div className="bg-[#1a1f33] p-10 flex flex-col items-center text-center justify-center min-h-[220px] rounded-[2px] shadow-lg hover:-translate-y-1 transition-transform cursor-pointer border-t-[3px] border-transparent hover:border-primary group">
              <h4 className="text-[18px] font-bold text-white leading-tight mb-4">Outsource Project<br/>Development</h4>
              <p className="text-[12px] text-gray-300 leading-relaxed font-medium">Your managed solution, partner with comprehensive services.</p>
           </div>
           
           {/* Card 2 */}
           <div className="bg-[#1a1f33] p-10 flex flex-col items-center text-center justify-center min-h-[220px] rounded-[2px] shadow-lg hover:-translate-y-1 transition-transform cursor-pointer border-t-[3px] border-transparent hover:border-primary group">
              <h4 className="text-[18px] font-bold text-white leading-tight mb-4">Extend your in-<br/>house team</h4>
              <p className="text-[12px] text-gray-300 leading-relaxed font-medium">Get access to 1000+ skilled software developer.</p>
           </div>

           {/* Card 3 */}
           <div className="bg-[#1a1f33] p-10 flex flex-col items-center text-center justify-center min-h-[220px] rounded-[2px] shadow-lg hover:-translate-y-1 transition-transform cursor-pointer border-t-[3px] border-transparent hover:border-primary group">
              <h4 className="text-[18px] font-bold text-white leading-tight mb-4">Build your Dev<br/>team</h4>
              <p className="text-[12px] text-gray-300 leading-relaxed font-medium">Customize multi-disciplinary teams and save on average 40% on IT costs.</p>
           </div>

           {/* Card 4 */}
           <div className="bg-[#1a1f33] p-10 flex flex-col items-center text-center justify-center min-h-[220px] rounded-[2px] shadow-lg hover:-translate-y-1 transition-transform cursor-pointer border-t-[3px] border-transparent hover:border-primary group">
              <h4 className="text-[18px] font-bold text-white leading-tight mb-4">Offshore Dev<br/>Center</h4>
              <p className="text-[12px] text-gray-300 leading-relaxed font-medium">Choose any of our 10+ Global campuses to offshore your resources.</p>
           </div>
        </div>

      </div>

    </section>
  );
}
