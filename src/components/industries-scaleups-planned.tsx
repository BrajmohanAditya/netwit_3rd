"use client";

import Image from "next/image";

export function ScaleupsPlanned() {
  return (
    <section className="w-full flex flex-col">
      
      {/* Black 01-05 Section */}
      <div className="bg-black py-20 px-6 w-full flex flex-col items-center">
        <div className="max-w-[1240px] w-full flex flex-col">
           
           <div className="grid grid-cols-1 lg:grid-cols-[1fr,1fr] gap-10 items-end mb-24 pr-4">
             <h2 className="text-[26px] md:text-[34px] font-bold text-white leading-snug tracking-tight">
               Effectively Scaleup your Organization in a <span className="text-[#f06f12]">Planned and Structured Manner</span>
             </h2>
             <p className="text-[13px] md:text-[14px] text-gray-300 leading-[1.7] max-w-[500px]">
               With Netsmartz, you can define your requirements and build your team as per your needs. Deploy, expand, and iterate with Netsmartz.
             </p>
           </div>

           {/* Connected 01-05 Timeline */}
           <div className="relative w-full flex flex-row justify-between items-start mt-10">
              
              {/* Connecting background line */}
              <div className="absolute top-[25px] left-[10%] right-[10%] h-[1px] bg-slate-700 z-0 hidden md:block"></div>

              {[
                { num: "0", dot: "•", digit: "1", text: "Quicker Kickoff" },
                { num: "0", dot: "•", digit: "2", text: "Accelerated Resource\nDeployment" },
                { num: "0", dot: "•", digit: "3", text: "Incremental Solution\nDelivery" },
                { num: "0", dot: "•", digit: "4", text: "Collaborative Effort" },
                { num: "0", dot: "•", digit: "5", text: "Impact-driven Solutions" }
              ].map((step, idx) => (
                <div key={idx} className="flex flex-col items-center flex-1 relative z-10 group px-2 text-center mt-6 md:mt-0">
                   <div className="bg-black px-4 flex items-center justify-center mb-6">
                      <span className="text-[44px] md:text-[54px] font-bold text-gray-700 leading-none group-hover:text-gray-400 transition-colors">{step.num}</span>
                      <span className="text-[44px] md:text-[54px] font-bold text-[#f06f12] leading-none mx-0.5 group-hover:drop-shadow-[0_0_8px_rgba(240,111,18,0.8)] transition-all">{step.dot}</span>
                      <span className="text-[44px] md:text-[54px] font-bold text-gray-700 leading-none group-hover:text-gray-400 transition-colors">{step.digit}</span>
                   </div>
                   <p className="text-[12.5px] font-bold text-white tracking-wide whitespace-pre-line group-hover:text-[#f06f12] transition-colors">{step.text}</p>
                </div>
              ))}
           </div>

        </div>
      </div>

      {/* Elastic Teams Image Banner */}
      <div className="w-full relative h-[380px] bg-gray-900 border-t border-gray-800 overflow-hidden flex flex-col items-center justify-center">
         <div className="absolute inset-0 opacity-40 mix-blend-overlay">
           <Image src="/images/media__1774091699713.png" alt="Person working" fill className="object-cover object-top" />
         </div>
         <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/80"></div>
         
         <div className="relative z-10 flex flex-col items-center text-center">
            <p className="text-[11px] text-[#f06f12] font-bold tracking-[0.15em] uppercase mb-4">
               ELASTIC TEAMS
            </p>
            <h2 className="text-[32px] md:text-[40px] font-bold text-white mb-8 tracking-tight drop-shadow-md">
               Scale or Churn your Teams On-demand
            </h2>
            <button className="bg-white text-black text-[13.5px] font-bold py-3.5 px-8 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-transform rounded-[2px]">
               Schedule Interview
            </button>
         </div>
      </div>

    </section>
  );
}
