"use client";

import { TrendingUp, Maximize, Users, RefreshCw } from "lucide-react";

export function ScaleupsExpertise() {
  return (
    <section className="w-full bg-white flex flex-col items-center py-20 px-6">
      
      {/* Top 4 Icons */}
      <div className="max-w-[1240px] w-full grid grid-cols-2 md:grid-cols-4 gap-8 mb-32 justify-items-center">
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full border border-orange-100 flex items-center justify-center mb-4">
            <TrendingUp className="w-6 h-6 text-[#f06f12]" />
          </div>
          <h4 className="text-[14px] font-bold text-[#222] mb-1">Rapid Growth</h4>
          <p className="text-[11px] text-gray-500">Build Your Team in hours</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full border border-green-100 flex items-center justify-center mb-4">
            <Maximize className="w-6 h-6 text-green-500" />
          </div>
          <h4 className="text-[14px] font-bold text-[#222] mb-1">Strategic Expansion</h4>
          <p className="text-[11px] text-gray-500">Leverage Elite Engineering Talent</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full border border-blue-100 flex items-center justify-center mb-4">
            <Users className="w-6 h-6 text-blue-500" />
          </div>
          <h4 className="text-[14px] font-bold text-[#222] mb-1">Flexible Hiring</h4>
          <p className="text-[11px] text-gray-500">Hire and Churn On-Demand</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full border border-purple-100 flex items-center justify-center mb-4">
            <RefreshCw className="w-6 h-6 text-purple-500" />
          </div>
          <h4 className="text-[14px] font-bold text-[#222] mb-1">Product Iterations</h4>
          <p className="text-[11px] text-gray-500">Hire for Niche Skills and Stacks</p>
        </div>
      </div>

      {/* Certifications */}
      <div className="w-full max-w-[900px] flex flex-col items-center mb-24">
         <p className="text-[10px] text-[#f06f12] font-bold tracking-[0.15em] uppercase mb-4 text-center">
           CERTIFICATIONS
         </p>
         <h2 className="text-[28px] md:text-[32px] font-bold text-[#222] mb-12 text-center tracking-tight">
           Reliable Expertise On-demand
         </h2>
         <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-10 opacity-70">
            {/* Dummy representation of logos to match layout */}
            <span className="font-bold text-[18px] text-gray-700">Apple Developer</span>
            <span className="font-bold text-[18px] text-gray-700">Microsoft <span className="text-gray-400 font-normal">Partner</span></span>
            <span className="font-bold text-[24px] text-gray-800 tracking-tighter">ISO</span>
            <span className="font-bold text-[18px] text-gray-700">AWS Partner</span>
            <span className="font-black text-[20px] text-gray-800 tracking-tighter">CMMI 3</span>
            <span className="font-bold text-[20px] text-gray-700 border border-gray-400 px-2 py-1">ISO 27001</span>
         </div>
      </div>

      {/* Focus Program Dark Box */}
      <div className="w-full max-w-[1100px] bg-slate-900 border border-slate-800 relative py-20 px-6 flex flex-col items-center shadow-lg overflow-hidden">
         <div className="absolute inset-0 bg-black/40 z-0"></div>
         <div className="relative z-10 flex flex-col items-center text-center max-w-[800px]">
            <h3 className="text-[26px] md:text-[32px] font-bold text-white mb-16 leading-[1.3] drop-shadow-md">
               A Focused Program Specifically Designed to<br/>Manoeuver Development Snags and Assist your<br/>High-growth Company
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-5 bg-white shadow-xl max-w-[900px] w-full rounded-sm">
                <div className="flex flex-col items-center justify-center px-4 py-6 border-b md:border-b-0 border-r border-gray-100">
                  <span className="text-[28px] font-bold text-[#222]">25+</span>
                  <span className="text-[10px] text-[#777] font-semibold text-center uppercase mt-1">Years</span>
                </div>
                <div className="flex flex-col items-center justify-center px-4 py-6 border-b md:border-b-0 border-r border-gray-100">
                  <span className="text-[28px] font-bold text-[#222]">6</span>
                  <span className="text-[10px] text-[#777] font-semibold text-center uppercase mt-1">In-house<br/>Products</span>
                </div>
                <div className="flex flex-col items-center justify-center px-4 py-6 border-b md:border-b-0 border-r border-gray-100 col-span-2 md:col-span-1">
                  <span className="text-[28px] font-bold text-[#222]">200</span>
                  <span className="text-[10px] text-[#777] font-semibold text-center uppercase mt-1">Startups<br/>Supported</span>
                </div>
                <div className="flex flex-col items-center justify-center px-4 py-6 border-r border-gray-100">
                  <span className="text-[28px] font-bold text-[#222]">100+</span>
                  <span className="text-[10px] text-[#777] font-semibold text-center uppercase mt-1">Technologies<br/>Offered</span>
                </div>
                <div className="flex flex-col items-center justify-center px-4 py-6">
                  <span className="text-[28px] font-bold text-[#222]">1500+</span>
                  <span className="text-[10px] text-[#777] font-semibold text-center uppercase mt-1">Engineers<br/>Onboard</span>
                </div>
            </div>
         </div>
      </div>

    </section>
  );
}
