"use client";

import { Triangle, Cloud, LayoutGrid } from "lucide-react";

export function AIPodsTrustedBy() {
  const logos = [
    { id: 1, name: "Qm", render: () => <div className="text-2xl font-serif text-gray-600 flex items-start leading-none tracking-tight">Q<span className="italic mt-1">m</span><sup className="text-sm mt-0.5 ml-0.5 font-sans">+</sup></div> },
    { id: 2, name: "vivendi", render: () => <div className="flex items-center gap-2"><div className="relative w-4 h-4"><div className="absolute inset-0 border-[2px] border-b-4 border-gray-400 border-l-transparent border-t-transparent -rotate-45" /></div><span className="text-[19px] font-medium tracking-[0.05em] text-gray-500 lowercase">vivendi</span></div> },
    { id: 3, name: "appvantage", render: () => <div className="text-[17px] font-bold tracking-tight text-gray-800">appvantage<span className="font-medium ml-0.5 text-gray-600">{'>'}</span></div> },
    { id: 4, name: "Cloud9", render: () => <div className="flex flex-col items-center"><Cloud className="w-8 h-8 text-gray-500 mb-0.5 stroke-[2]" /><span className="text-[11px] font-medium tracking-wide text-gray-500">Cloud9</span></div> },
    { id: 5, name: "KNECT", render: () => <div className="text-2xl font-light tracking-[0.25em] text-gray-500">KNECT</div> },
    { id: 6, name: "S&W", render: () => <div className="flex items-center gap-2.5"><div className="flex flex-col items-end leading-[0.9]"><span className="text-lg font-bold text-gray-700 tracking-tighter">S&W</span><span className="text-[9px] text-gray-600 lowercase mt-0.5">Technologies</span></div><LayoutGrid className="w-7 h-7 text-gray-500 stroke-[1.5]" /></div> },
    { id: 7, name: "numberella", render: () => <div className="flex flex-col items-center"><span className="text-[22px] font-serif italic text-gray-600 leading-none">numberella.</span><span className="text-[7.5px] tracking-[0.3em] text-gray-400 mt-1 uppercase">- WORLD -</span></div> },
    { id: 8, name: "monetha", render: () => <div className="flex items-center gap-2.5"><div className="flex flex-col gap-[3px] rotate-45"><div className="flex gap-[3px]"><div className="w-2.5 h-2.5 outline outline-2 outline-gray-400 rounded-full" /><div className="w-2.5 h-2.5 outline outline-2 outline-gray-400 rounded-full" /></div><div className="w-2.5 h-2.5 outline outline-[1.5px] outline-gray-400 rounded-full ml-auto" /></div><span className="text-gray-700 tracking-tight text-[19px] font-medium lowercase">monetha</span></div> },
    { id: 9, name: "aussieBum", render: () => <div className="text-[22px] font-black italic tracking-tighter text-gray-700">aussie<span className="italic font-bold text-gray-500">Bum</span></div> },
    { id: 10, name: "JohorPort", render: () => <div className="flex items-center gap-2"><div className="w-6 h-6 flex items-center justify-center -skew-x-[20deg] border border-gray-500 overflow-hidden"><div className="w-4 h-1.5 bg-gray-500" /></div><div className="flex flex-col items-start"><span className="text-base font-bold text-gray-800 leading-none tracking-tight">JohorPort<sup className="text-[9px] ml-0.5">&reg;</sup></span><div className="flex items-center mt-1"><span className="text-[7.5px] text-gray-700 font-semibold tracking-wide flex items-center">A Member of <span className="w-3 mx-1 h-px bg-gray-400 relative border-t-2 border-transparent"></span> MMC Group</span></div></div></div> },
    { id: 11, name: "picaboo", render: () => <div className="text-xl font-medium tracking-tight text-gray-600 border-b-[2px] border-t-[2px] border-gray-400 leading-tight py-0.5 px-0.5">picaboo</div> },
    { id: 12, name: "Frintz", render: () => <div className="flex items-center justify-center gap-1.5"><div className="w-6 h-6 bg-gray-800 rounded flex items-center justify-center text-white font-serif font-black italic text-lg pb-0.5">F</div><span className="font-bold text-gray-800 text-[19px]">Frintz<sup className="text-[9px] ml-0.5">&trade;</sup></span></div> },
    { id: 13, name: "komax", render: () => <div className="flex items-center gap-1.5"><span className="text-lg font-bold text-gray-600 tracking-tight lowercase">komax</span><div className="flex text-gray-500 font-light text-[22px] font-serif leading-none mt-1">)<span className="rotate-180 -ml-1">)</span></div></div> },
    { id: 14, name: "SuperNatural", render: () => <div className="font-bold tracking-tighter text-gray-500 flex flex-col items-center"><span className="leading-none text-[22px] opacity-80 scale-y-110">SuperNatural</span><span className="text-[6px] tracking-[0.2em] font-light uppercase mt-1">Studios</span></div> },
    { id: 15, name: "BIPO", render: () => <div className="text-3xl font-black tracking-tighter text-gray-700">BIPO</div> },
    { id: 16, name: "penny", render: () => <div className="text-[26px] font-bold tracking-tight text-gray-800 lowercase">penny<sup className="text-sm font-normal text-gray-600 -ml-0.5">.</sup></div> },
    { id: 17, name: "FableVision", render: () => <div className="flex flex-col items-center leading-none border-b border-t border-gray-200 py-1.5 px-1 bg-white shadow-sm"><span className="text-[13px] font-black text-gray-400 uppercase tracking-tighter">FableVision</span><span className="text-[9.5px] font-light text-gray-400 tracking-[0.3em] uppercase mt-1">Learning</span><span className="text-[5px] text-gray-300 mt-0.5">MEDIA FOR QUALITY EDUCATION</span></div> },
    { id: 18, name: "DOORSTEP", render: () => <div className="flex items-center gap-1.5"><div className="flex gap-[1.5px]"><div className="w-[10px] h-4 bg-gray-500 rounded-sm rounded-tr-none flex flex-col justify-between"><div className="h-[2px] w-1/2 bg-white/50 ml-1 mt-[1px]" /><div className="h-[2px] w-1/2 bg-white/50 ml-1 mb-[1px]" /></div><div className="w-[10px] h-4 bg-gray-700 rounded-sm rounded-tl-none flex flex-col justify-between"><div className="h-[2px] w-1/2 bg-white/50 mr-1 mt-[1px]" /><div className="h-[2px] w-1/2 bg-white/50 mr-1 mb-[1px]" /></div></div><div className="flex flex-col leading-[0.85]"><span className="text-[11px] font-black text-gray-700 uppercase tracking-tighter scale-y-110">Doorstep</span><span className="text-[11px] font-bold text-gray-700 uppercase tracking-tighter scale-y-110">Market</span></div></div> }
  ];

  return (
    <section className="py-20 bg-surface-2 border-t border-gray-100">
      <div className="max-w-[1240px] mx-auto px-6">
        <h2 className="text-[22px] font-bold text-center text-text mb-12">
          Trusted By
        </h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-5 gap-y-6 max-w-[1100px] mx-auto">
          {logos.map((logo) => (
            <div 
              key={logo.id} 
              className="bg-white h-[60px] flex items-center justify-center p-4 rounded-sm shadow-[0_1px_5px_rgba(0,0,0,0.02)] hover:shadow-md transition-shadow grayscale hover:grayscale-0"
            >
              <div className="opacity-90 transition-opacity hover:opacity-100 scale-90 sm:scale-100 cursor-default">
                {logo.render()}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
