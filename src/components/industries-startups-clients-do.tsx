"use client";

import { Monitor, Layers, PenTool, CheckSquare, Terminal, Play } from "lucide-react";
import Image from "next/image";

export function StartupsClientsDo() {
   const services = [
      {
         icon: <Monitor className="w-[38px] h-[38px] text-[#f06f12]" strokeWidth={1.5} />,
         title: "Product Discovery",
         desc: "Redefine the foundation of your startup by validating your product idea"
      },
      {
         icon: <Layers className="w-[38px] h-[38px] text-[#f06f12]" strokeWidth={1.5} />,
         title: "UI / UX",
         desc: "Devise a product design strategy that drives customer experience"
      },
      {
         icon: <PenTool className="w-[38px] h-[38px] text-[#f06f12]" strokeWidth={1.5} />,
         title: "Software / Product Dev",
         desc: "Design secure and scalable apps to unlock unprecedented performance"
      },
      {
         icon: <CheckSquare className="w-[38px] h-[38px] text-[#f06f12]" strokeWidth={1.5} />,
         title: "QA / Testing",
         desc: "Ensure app security and privacy with ongoing quality testing and end-to-end data protection"
      },
      {
         icon: <Terminal className="w-[38px] h-[38px] text-[#f06f12]" strokeWidth={1.5} />,
         title: "DevOps & Support",
         desc: "Take advantage of our dedicated teams at every stage of the product development cycle"
      }
   ];

   return (
      <section className="w-full flex flex-col items-center">

         {/* What Our Clients Say */}
         <div className="w-full bg-white py-24 px-6 flex flex-col items-center border-t border-gray-100">
            <h2 className="text-[28px] md:text-[36px] font-bold text-[#222] mb-20 tracking-tight">
               What <span className="text-[#f06f12]">Our Clients</span> Say
            </h2>

            <div className="max-w-[700px] w-full grid grid-cols-1 md:grid-cols-[1.2fr,1fr] gap-12 items-center mx-auto">

               <div className="flex flex-col relative w-full pr-4">
                  <div className="text-[80px] text-black font-serif absolute -top-12 -left-6 opacity-[0.05] leading-none pointer-events-none">
                     &ldquo;
                  </div>
                  <p className="text-[14.5px] text-[#444] font-medium leading-[1.65] mb-8 z-10">
                     Netwit&apos;s approach to being a team member has helped us better manage our Magento systems and websites.
                  </p>
                  <div className="flex items-center gap-4 z-10">
                     <div className="w-11 h-11 bg-[#1A1A1A] flex items-center justify-center rounded-sm shrink-0">
                        <span className="text-white text-[32px] font-serif leading-none mt-2">&ldquo;</span>
                     </div>
                     <div className="flex flex-col">
                        <span className="text-[13px] font-bold text-[#222]">William Doyle</span>
                        <span className="text-[10px] text-[#888] font-bold mt-0.5 tracking-wide uppercase">VP - Information Technology, RealSeal.Inc.</span>
                     </div>
                  </div>
               </div>

               <div className="flex flex-col items-center md:items-start w-full gap-4">
                  {/* Orange Video Thumbnail Placeholder */}
                  <div className="bg-[#f06f12] p-5 text-white font-bold h-[150px] w-full relative flex flex-col justify-end shadow-md overflow-hidden rounded-[2px] cursor-pointer group hover:shadow-lg transition-shadow">
                     <span className="text-[14px] z-10">#ClientSpeak</span>
                     <span className="text-[16px] uppercase tracking-widest leading-[1.1] mt-1 z-10 opacity-90">William<br />Doyle</span>

                     {/* Visual Fake Profile */}
                     <div className="absolute right-0 bottom-0 w-[45%] h-[90%] opacity-90 mix-blend-luminosity z-0 flex items-end justify-center pb-2">
                        <div className="w-full h-full bg-white/20 rounded-t-full flex items-end justify-center px-4 overflow-hidden pt-6">
                           <div className="w-full h-full bg-white/20 rounded-full flex flex-col items-center justify-end pb-3">
                              <div className="w-[20px] h-[20px] bg-white rounded-full mb-[2px]"></div>
                              <div className="w-[40px] h-[25px] bg-white rounded-t-[12px] mb-[-10px]"></div>
                           </div>
                        </div>
                     </div>

                     <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30 z-20">
                        <Play className="w-12 h-12 text-white fill-white" />
                     </div>
                  </div>

                  <div className="flex items-center gap-2 justify-start mt-2 w-full">
                     <div className="w-[36px] h-[36px] rounded-full bg-gray-100 border-2 border-white shadow-[0_2px_8px_rgba(0,0,0,0.06)] overflow-hidden flex items-center justify-center">
                        <div className="text-[10px] text-gray-400 font-bold">WD</div>
                     </div>
                     <div className="w-[36px] h-[36px] rounded-full bg-gray-100 border-2 border-white shadow-[0_2px_8px_rgba(0,0,0,0.06)] -ml-4 overflow-hidden flex items-center justify-center">
                        <div className="text-[10px] text-gray-400 font-bold">TS</div>
                     </div>
                     <div className="w-[36px] h-[36px] rounded-full bg-gray-100 border-2 border-white shadow-[0_2px_8px_rgba(0,0,0,0.06)] -ml-4 overflow-hidden flex items-center justify-center">
                        <div className="text-[10px] text-gray-400 font-bold">AK</div>
                     </div>
                  </div>
               </div>

            </div>
         </div>

         {/* What We Do */}
         <div className="w-full bg-[#1e2331] py-28 px-6 flex flex-col items-center text-center">
            <p className="text-[11px] text-[#f06f12] font-bold tracking-[0.2em] uppercase mb-5">
               EXPLORE
            </p>
            <h2 className="text-[34px] md:text-[42px] font-bold text-white mb-6 tracking-tight drop-shadow-sm">
               What We Do
            </h2>
            <p className="text-[14px] text-gray-300 mb-20 max-w-[550px] leading-[1.6]">
               We offer a complete suite of services to power businesses online through cloud-ready infrastructure and agile workflows.
            </p>

            <div className="max-w-[1100px] w-full mb-16 px-4">
               <div className="grid grid-cols-1 md:grid-cols-3 gap-y-16 gap-x-12 justify-items-center mb-16">

                  {/* Top Row - 3 items */}
                  {services.slice(0, 3).map((svc, idx) => (
                     <div key={idx} className="flex flex-col items-center text-center max-w-[280px]">
                        <div className="mb-6">{svc.icon}</div>
                        <h4 className="text-[16.5px] font-bold text-white mb-4 tracking-wide">{svc.title}</h4>
                        <p className="text-[12.5px] text-gray-400 font-medium leading-[1.6]">{svc.desc}</p>
                     </div>
                  ))}
               </div>

               <div className="flex flex-col md:flex-row justify-center gap-y-16 gap-x-12 md:gap-x-[120px] max-w-[850px] mx-auto">
                  {services.slice(3, 5).map((svc, idx) => (
                     <div key={idx} className="flex flex-col items-center text-center max-w-[280px] w-full">
                        <div className="mb-6">{svc.icon}</div>
                        <h4 className="text-[16.5px] font-bold text-white mb-4 tracking-wide">{svc.title}</h4>
                        <p className="text-[12.5px] text-gray-400 font-medium leading-[1.6]">{svc.desc}</p>
                     </div>
                  ))}
               </div>
            </div>

            <p className="text-[13.5px] text-gray-400 font-medium leading-[1.6] max-w-[700px] mb-12">
               Our on-time process methodology and low-cost services fulfillment has helped startups launch powerful and quickly scalable solutions.
            </p>

            <button className="bg-white text-black text-[13.5px] font-bold py-4 px-10 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-transform rounded-[3px]">
               Get Started
            </button>

         </div>

      </section>
   );
}
