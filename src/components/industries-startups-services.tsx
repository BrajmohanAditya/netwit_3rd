"use client";

import { Activity, Users, Play, DollarSign, ArrowDown } from "lucide-react";

export function StartupsServices() {
  const topFeatures = [
    {
      icon: <Activity className="w-5 h-5 text-[#f06f12]" />,
      title: "Build your MVP",
      desc: "Quicker time to market"
    },
    {
      icon: <Users className="w-5 h-5 text-[#10B981]" />,
      title: "Hire Elastic Teams",
      desc: "Flexible and scalable hiring"
    },
    {
      icon: <Play className="w-5 h-5 text-[#8B5CF6]" />,
      title: "Leverage a Free Trial",
      desc: "Risk-free evaluation experience"
    },
    {
      icon: <DollarSign className="w-5 h-5 text-[#4B5563]" />,
      title: "Transparent Pricing",
      desc: "No hidden costs or oversets"
    }
  ];

  return (
    <>
    <section className="bg-[#f2f6f9] w-full flex flex-col items-center pt-20 pb-28 px-6 overflow-hidden">
      
      <div className="max-w-[1240px] w-full flex flex-col items-center text-center mb-16 border-b border-gray-300/60 pb-16">
        <p className="text-[11px] text-[#f06f12] font-bold tracking-[0.15em] uppercase mb-4">
          services
        </p>
        <h2 className="text-[26px] md:text-[34px] font-bold text-[#202020] max-w-[800px] leading-[1.2] mb-5">
          Since 1999, we&apos;ve Helped Startups Grow with our On-demand Development Teams, and On-point Services
        </h2>
        <p className="text-[13px] text-[#606060] max-w-[900px] leading-relaxed">
          Over our 25+ years of supporting startups, we have perfected the art of MVP IT Development, scaling operations and flexible staff augmentation for 500 startups and counting.
        </p>
      </div>

      <div className="max-w-[1000px] w-full grid grid-cols-2 lg:grid-cols-4 gap-8 mb-28">
        {topFeatures.map((feat, idx) => (
          <div key={idx} className="flex flex-col items-center text-center">
            <div className="w-[50px] h-[50px] bg-white rounded-full flex items-center justify-center shadow-[0_2px_10px_rgba(0,0,0,0.06)] mb-5">
              {feat.icon}
            </div>
            <h4 className="text-[14.5px] font-bold text-[#222] mb-2">{feat.title}</h4>
            <p className="text-[12px] text-[#777]">{feat.desc}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="w-full bg-white flex flex-col items-center px-6 py-24 shadow-sm overflow-hidden">
      <div className="max-w-[1240px] w-full flex flex-col items-center">
        <div className="max-w-[1240px] mx-auto flex flex-col items-center w-full">
            <p className="text-[11px] text-[#f06f12] font-bold tracking-[0.15em] uppercase mb-4 text-center">
            ARE YOU BUILDING SOMETHING NEW?
            </p>
            <h3 className="text-[32px] md:text-[38px] font-bold text-[#222] mb-4 text-center tracking-tight">
            Your Product - Your Choice
            </h3>
            <p className="text-[13.5px] text-[#666] mb-20 text-center max-w-[800px]">
            Push the boundaries of innovation with our valuable support at every stage of your product development.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-[1050px] mb-20 px-4">
            
                <div className="flex flex-col">
                    <span className="text-[#f06f12] text-[12px] font-bold mb-1.5">Your Stage</span>
                    <h4 className="text-[20px] font-bold text-[#222] mb-3">MVP/POC Development</h4>
                    <p className="text-[13px] text-[#555] mb-8 min-h-[60px] leading-[1.6]">
                    From product ideation to POC and MVP Development, Scale your Project from Scratch.
                    </p>
                    <div className="bg-[#0b2b5e] text-white px-8 py-10 rounded-[6px] flex flex-col items-center text-center h-full relative cursor-pointer group shadow-lg">
                    <span className="text-[10px] uppercase tracking-widest text-[#a0b0c8] font-bold mb-4">OUR EXPERT MODE</span>
                    <h5 className="text-[20px] font-bold mb-5 tracking-tight">Hire Elastic Team</h5>
                    <p className="text-[12px] text-[#a0b0c8] leading-[1.7] mb-10 w-[90%] mx-auto">
                        Get your own Cloud Team for flexible infrastructure scaling and management.
                    </p>
                    <div className="w-12 h-12 rounded-[50%] bg-white flex items-center justify-center absolute -bottom-6 shadow-md group-hover:-translate-y-1 transition-transform">
                        <ArrowDown className="w-6 h-6 text-[#0b2b5e]" />
                    </div>
                    </div>
                </div>

                <div className="flex flex-col">
                    <span className="text-[#f06f12] text-[12px] font-bold mb-1.5">Your Stage</span>
                    <h4 className="text-[20px] font-bold text-[#222] mb-3">Full-cycle Development</h4>
                    <p className="text-[13px] text-[#555] mb-8 min-h-[60px] leading-[1.6]">
                    Platform / Architecture Review, Development, Design and Iteration for Software Project.
                    </p>
                    <div className="bg-[#0b2b5e] text-white px-8 py-10 rounded-[6px] flex flex-col items-center text-center h-full relative cursor-pointer group shadow-lg">
                    <span className="text-[10px] uppercase tracking-widest text-[#a0b0c8] font-bold mb-4">OUR EXPERT MODE</span>
                    <h5 className="text-[20px] font-bold mb-5 tracking-tight">Outsource Product Dev</h5>
                    <p className="text-[12px] text-[#a0b0c8] leading-[1.7] mb-10 w-[90%] mx-auto">
                        Total Reliance on our outsourced team as your technology partner.
                    </p>
                    <div className="w-12 h-12 rounded-[50%] bg-white flex items-center justify-center absolute -bottom-6 shadow-md group-hover:-translate-y-1 transition-transform">
                        <ArrowDown className="w-6 h-6 text-[#0b2b5e]" />
                    </div>
                    </div>
                </div>

                <div className="flex flex-col">
                    <span className="text-[#f06f12] text-[12px] font-bold mb-1.5">Your Stage</span>
                    <h4 className="text-[20px] font-bold text-[#222] mb-3">Support for Products</h4>
                    <p className="text-[13px] text-[#555] mb-8 min-h-[60px] leading-[1.6]">
                    Support, Maintenance & Comprehensive Testing and Audits of your Software Product.
                    </p>
                    <div className="bg-[#0b2b5e] text-white px-8 py-10 rounded-[6px] flex flex-col items-center text-center h-full relative cursor-pointer group shadow-lg">
                    <span className="text-[10px] uppercase tracking-widest text-[#a0b0c8] font-bold mb-4">OUR EXPERT MODE</span>
                    <h5 className="text-[20px] font-bold mb-5 tracking-tight">Hire Developers (FTE)</h5>
                    <p className="text-[12px] text-[#a0b0c8] leading-[1.7] mb-10 w-[90%] mx-auto">
                        Outsource on 100% resources for Dedicated support.
                    </p>
                    <div className="w-12 h-12 rounded-[50%] bg-white flex items-center justify-center absolute -bottom-6 shadow-md group-hover:-translate-y-1 transition-transform">
                        <ArrowDown className="w-6 h-6 text-[#0b2b5e]" />
                    </div>
                    </div>
                </div>
                
            </div>

            <p className="text-[13px] text-[#555] mb-8 font-medium">
            Over 100+ global companies leverage our pool of certified professionals for outsourcing projects.
            </p>
            <div className="flex gap-4">
            <button className="bg-black text-white text-[13px] font-bold py-3 px-8 shadow-sm rounded-sm hover:-translate-y-0.5 transition-transform">
                Work With Us
            </button>
            <button className="bg-white border-2 border-gray-900 text-black text-[13px] font-bold py-3 px-8 shadow-sm rounded-sm hover:bg-gray-50 transition-colors">
                Get Started
            </button>
            </div>
        </div>
      </div>
    </section>
    </>
  );
}
