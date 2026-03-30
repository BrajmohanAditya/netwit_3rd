"use client";

import { ArrowRight } from "lucide-react";

export function ScaleupsSuccessStories() {
   return (
      <section className="w-full bg-[#f8fafe] flex flex-col items-center pt-24 pb-16 overflow-hidden border-t border-gray-100">

         <p className="text-[10px] text-[#f06f12] font-bold tracking-[0.15em] uppercase mb-4 text-center">
            2510+ ENTERPRISE CLIENTS
         </p>
         <h2 className="text-[32px] md:text-[38px] font-bold text-[#222] mb-5 text-center tracking-tight">
            Success Stories
         </h2>
         <p className="text-[13px] text-[#666] mb-16 text-center max-w-[600px] leading-[1.6] px-4">
            Learn how organizations are redefining business norms with our cutting-edge Cloud and IT Infrastructure services.
         </p>

         {/* Horizontal Carousel View */}
         <div className="w-full max-w-[1400px] flex justify-center items-center gap-8 mb-16 px-4">

            {/* Left Ghost Card */}
            <div className="hidden lg:flex w-[400px] h-[280px] bg-gray-300 relative border border-gray-200 shrink-0 shadow-sm opacity-50 cursor-pointer hover:opacity-80 transition-opacity">
               <div className="absolute inset-0 bg-white/50 z-0"></div>
               <div className="relative z-10 p-8 flex flex-col">
                  <span className="text-[9px] text-[#f06f12] font-bold tracking-widest uppercase mb-4 opacity-70">Online Education Company / New York</span>
                  <h3 className="text-[24px] font-bold text-gray-600 leading-tight mb-20">
                     Building a Flexible, Secure eCommerce Site for an Education Firm
                  </h3>
                  <span className="text-[12px] font-bold text-gray-400 mt-auto uppercase tracking-wide flex items-center gap-1">Read Success Story &rarr;</span>
               </div>
            </div>

            {/* Center Active Card */}
            <div className="w-full max-w-[500px] sm:w-[450px] md:w-[500px] h-[320px] bg-black text-white relative shrink-0 shadow-[0_15px_40px_rgba(0,0,0,0.15)] overflow-hidden cursor-pointer group">
               {/* Split layout mapping photograph and text */}
               <div className="absolute inset-y-0 right-0 w-[60%] overflow-hidden z-0">
                  <div className="w-full h-full bg-gradient-to-l from-transparent to-black absolute inset-0 z-10"></div>
                  {/* Abstract background representation */}
                  <div className="w-full h-full bg-slate-800 opacity-60"></div>
               </div>

               <div className="relative z-20 p-10 h-full flex flex-col">
                  <span className="text-[9px] text-[#f06f12] font-bold tracking-widest uppercase mb-6 opacity-90 drop-shadow-sm">Art Fundraising Company / New York</span>
                  <h3 className="text-[26px] md:text-[28px] font-bold text-white leading-[1.15] mb-auto tracking-tight drop-shadow-md pr-12">
                     Netwit Boosts a<br />Fundraising Platform&apos;s<br />User Experience<br />Capabilities with AI<br />Chatbot Integration
                  </h3>
                  <span className="text-[12px] font-bold text-[#f06f12] uppercase tracking-wider flex items-center gap-2 group-hover:text-white transition-colors">
                     Read Success Story <ArrowRight className="w-4 h-4" />
                  </span>
               </div>
            </div>

            {/* Right Ghost Card */}
            <div className="hidden lg:flex w-[400px] h-[280px] bg-gray-300 relative border border-gray-200 shrink-0 shadow-sm opacity-50 cursor-pointer hover:opacity-80 transition-opacity">
               <div className="absolute inset-0 bg-white/50 z-0"></div>
               <div className="relative z-10 p-8 flex flex-col">
                  <span className="text-[9px] text-[#f06f12] font-bold tracking-widest uppercase mb-4 opacity-70">Online Education Company / New York</span>
                  <h3 className="text-[24px] font-bold text-gray-600 leading-tight mb-20">
                     Building a Flexible, Secure eCommerce Site for an Education Firm
                  </h3>
                  <span className="text-[12px] font-bold text-gray-400 mt-auto uppercase tracking-wide flex items-center gap-1">Read Success Story &rarr;</span>
               </div>
            </div>

         </div>

         <button className="bg-black text-white text-[13px] font-bold py-3.5 px-10 shadow-sm hover:shadow-lg transition-transform hover:-translate-y-0.5 rounded-sm">
            View All Success Stories
         </button>

      </section>
   );
}
