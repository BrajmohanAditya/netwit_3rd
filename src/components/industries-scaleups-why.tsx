"use client";

import { Settings, Shield, RefreshCw, Layers, DollarSign, Users, Award, UserCheck } from "lucide-react";

export function ScaleupsWhyAndTimeline() {
  const whyItems = [
    { icon: <Settings className="w-8 h-8 text-[#f06f12]" />, title: "Managed Services", desc: "Business exploits with Solution Architects, Senior Technical Leads & Project Managers to lead and manage the scope of your project." },
    { icon: <Shield className="w-8 h-8 text-[#f06f12]" />, title: "Better Risk Management", desc: "Full contract complete with IP protection and comprehensive insurance coverage for every client engagement." },
    { icon: <RefreshCw className="w-8 h-8 text-[#f06f12]" />, title: "Agile Framework", desc: "Development & Testing processes built on strong Agile methodologies, offering complete visibility by utilizing JIRA/Confluence/Zephyr." },
    { icon: <Layers className="w-8 h-8 text-[#f06f12]" />, title: "Dynamic Structure", desc: "Extensive talent pool in over 100+ technologies enabling quick resource deployment in less than a week with no setup fee." },
    { icon: <DollarSign className="w-8 h-8 text-[#f06f12]" />, title: "Budget Control", desc: "Custom engagement models that adjust to the scope & scale of your project & offer granular control over budgeting and resources." },
    { icon: <Users className="w-8 h-8 text-[#f06f12]" />, title: "On-demand Team Scaling", desc: "Flexible hiring models offering easy engagement and streamlined team building, as and when you need to scale." },
    { icon: <Award className="w-8 h-8 text-[#f06f12]" />, title: "Faster Onboarding", desc: "Rapid team deployment bringing pre-vetted, skilled, and experienced Developers to your project in less than 48 hours." },
    { icon: <UserCheck className="w-8 h-8 text-[#f06f12]" />, title: "Pre-Vetted Developers", desc: "Tap into a rigorously vetted pool of senior developers that can deliver impactful solutions and bring value instantly to your project." },
  ];

  return (
    <section className="w-full bg-[#f8fafe] flex flex-col items-center py-24 px-6">
      
      {/* Timeline Section */}
      <div className="max-w-[1000px] w-full flex flex-col items-center mb-32">
        <p className="text-[10px] text-[#f06f12] font-bold tracking-[0.15em] uppercase mb-4 text-center">
           BUILD UP
        </p>
        <h2 className="text-[28px] md:text-[36px] font-bold text-[#222] mb-4 text-center tracking-tight">
           Breakdown of Netsmartz Services
        </h2>
        <p className="text-[14px] text-[#666] mb-20 text-center font-medium">
           End to End Engineering Services to take your organization to the next level
        </p>
        
        {/* Visual Timeline Layout */}
        <div className="relative w-full max-w-[800px] flex flex-col md:flex-row items-center justify-between pb-8">
            {/* Connecting dashed line */}
            <div className="absolute top-[35px] left-[10%] right-[10%] border-t-2 border-dashed border-[#f06f12] opacity-50 z-0 hidden md:block"></div>
            
            {/* Path mapping timeline nodes */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-y-12 w-full justify-items-center relative z-10">
               {/* 1 */}
               <div className="flex flex-col items-center mt-[-10px]">
                  <div className="bg-black text-white text-[11px] font-bold px-4 py-2 rounded-full mb-3 whitespace-nowrap shadow-sm">Discovery Phase Workshop</div>
                  <div className="w-3 h-3 bg-[#f06f12] rounded-full border-[3px] border-orange-200"></div>
               </div>
               {/* 2 */}
               <div className="flex flex-col items-center mt-[45px]">
                  <div className="bg-black text-white text-[11px] font-bold px-4 py-2 rounded-full mb-3 whitespace-nowrap shadow-sm">Project Initiation</div>
                  <div className="w-3 h-3 bg-[#f06f12] rounded-full border-[3px] border-orange-200"></div>
               </div>
               {/* 3 */}
               <div className="flex flex-col items-center mt-[-10px]">
                  <div className="bg-black text-white text-[11px] font-bold px-4 py-2 rounded-full mb-3 whitespace-nowrap shadow-sm">Iterative Development</div>
                  <div className="w-3 h-3 bg-[#f06f12] rounded-full border-[3px] border-orange-200"></div>
               </div>
               {/* 4 */}
               <div className="flex flex-col items-center mt-[45px]">
                  <div className="bg-black text-white text-[11px] font-bold px-4 py-2 rounded-full mb-3 whitespace-nowrap shadow-sm">User Acceptance</div>
                  <div className="w-3 h-3 bg-[#f06f12] rounded-full border-[3px] border-orange-200"></div>
               </div>
               {/* 5 */}
               <div className="flex flex-col items-center mt-[-10px]">
                  <div className="bg-black text-white text-[11px] font-bold px-4 py-2 rounded-full mb-3 whitespace-nowrap shadow-sm">MVP/Soft Launch</div>
                  <div className="w-3 h-3 bg-[#f06f12] rounded-full border-[3px] border-orange-200"></div>
               </div>
            </div>
            
            {/* Final Launch Node */}
            <div className="flex flex-col items-center md:absolute -right-4 top-[85px] mt-12 md:mt-0 z-10">
               <div className="bg-black text-white text-[11px] font-bold px-8 py-2 rounded-full mb-3 shadow-md">Launch</div>
            </div>

            {/* Support Rocket Node */}
            <div className="flex flex-col items-center md:absolute right-[20px] -top-[40px] mt-12 md:mt-0 z-10 hidden md:flex">
               <div className="text-[28px] mb-1 drop-shadow-sm">🚀</div>
               <div className="text-[#222] text-[12px] font-bold">Support</div>
            </div>
            
        </div>
      </div>

      {/* Why Choose Section */}
      <div className="max-w-[1240px] w-full flex flex-col items-center">
        <p className="text-[10px] text-[#f06f12] font-bold tracking-[0.15em] uppercase mb-4 text-center">
           TOP OFFSHORE VALUE
        </p>
        <h2 className="text-[28px] md:text-[36px] font-bold text-[#222] mb-16 text-center tracking-tight">
           Why choose Netsmartz for your Scaleup?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16 px-4">
          {whyItems.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
               <div className="mb-5">{item.icon}</div>
               <h4 className="text-[16px] font-bold text-[#222] mb-3 leading-snug max-w-[180px]">{item.title}</h4>
               <p className="text-[12px] text-gray-500 font-medium leading-[1.6]">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
