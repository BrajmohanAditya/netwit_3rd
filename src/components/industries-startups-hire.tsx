"use client";

import Image from "next/image";

export function StartupsHire() {
  return (
    <section className="w-full flex flex-col items-center">
      
      {/* Top Black Section: How to hire */}
      <div className="w-full bg-black py-24 px-6 flex flex-col items-center text-center">
        <p className="text-[10px] text-[#f06f12] font-bold tracking-[0.15em] uppercase mb-4">
          BUILD YOUR TEAM
        </p>
        <h2 className="text-[28px] md:text-[36px] font-bold text-white mb-4 tracking-tight">
          How to Hire a Netsmartz Developer?
        </h2>
        <p className="text-[14px] text-gray-300 mb-20 max-w-[600px] leading-[1.6]">
          Work with best software companies in just 3 easy steps
        </p>

        <div className="max-w-[800px] w-full relative mb-10">
          
          {/* Connecting Line (Desktop only) */}
          <div className="hidden md:block absolute top-[28px] left-[15%] right-[15%] h-[2px] bg-white opacity-20 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6 relative z-10 w-full px-4">
            
            <div className="flex flex-col items-center">
              <div className="w-[56px] h-[56px] rounded-full bg-[#E0F2FE] border-[4px] border-black flex items-center justify-center text-[#0ea5e9] font-bold text-[22px] mb-6 shadow-sm z-10 mx-auto">
                1
              </div>
              <h3 className="text-[16px] font-bold text-white mb-3 tracking-wide">Tell us the skills you need</h3>
              <p className="text-[12px] text-gray-400 font-medium leading-[1.6] max-w-[200px]">
                We&apos;ll schedule a call to discuss your requirements.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-[56px] h-[56px] rounded-full bg-[#E0F2FE] border-[4px] border-black flex items-center justify-center text-[#0ea5e9] font-bold text-[22px] mb-6 shadow-sm z-10 mx-auto">
                2
              </div>
              <h3 className="text-[16px] font-bold text-white mb-3 tracking-wide">We find the best talent for you</h3>
              <p className="text-[12px] text-gray-400 font-medium leading-[1.6] max-w-[200px]">
                Get a list of pre-vetted developers within minutes.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-[56px] h-[56px] rounded-full bg-[#E0F2FE] border-[4px] border-black flex items-center justify-center text-[#0ea5e9] font-bold text-[22px] mb-6 shadow-sm z-10 mx-auto">
                3
              </div>
              <h3 className="text-[16px] font-bold text-white mb-3 tracking-wide">Schedule interviews</h3>
              <p className="text-[12px] text-gray-400 font-medium leading-[1.6] max-w-[200px]">
                Meet and select the developers you like.
              </p>
            </div>

          </div>
        </div>

      </div>

      {/* Bottom Light Section: Trusted By */}
      <div className="w-full bg-[#f8fbff] py-20 px-6 flex flex-col items-center">
        <h2 className="text-[26px] font-bold text-[#222] mb-12 text-center tracking-tight">
          Trusted By
        </h2>
        
        {/* Logos Grid (Dummy layout mapped to design spacing) */}
        <div className="max-w-[1000px] w-full grid grid-cols-2 md:grid-cols-6 gap-x-6 gap-y-10 items-center justify-items-center opacity-60 hover:opacity-100 transition-opacity px-4">
           {/* Row 1 */}
           <div className="font-serif text-[28px] font-bold">Om</div>
           <div className="font-sans font-bold text-gray-600 flex items-center gap-1"><span className="text-[#f06f12]">A</span>vivendi</div>
           <div className="font-sans font-bold text-gray-700 tracking-tighter">app<span className="text-black">vantage</span></div>
           <div className="flex flex-col items-center -space-y-1"><span className="text-[20px] font-bold border rounded-full px-1 border-gray-400">&</span><span className="text-[10px] font-bold">Cloud9</span></div>
           <div className="font-sans font-bold text-gray-800 tracking-widest">KNECT</div>
           <div className="font-bold text-gray-400">SHW<br/>Technologies</div>

           {/* Row 2 */}
           <div className="font-serif italic text-gray-600">newbrella.</div>
           <div className="font-sans text-gray-500 font-medium italic">manetha</div>
           <div className="font-black text-black italic">Aussielum</div>
           <div className="font-bold text-gray-700">ishorfort</div>
           <div className="font-sans font-bold border-2 border-gray-600 px-2 py-0.5 text-gray-600">picaboo</div>
           <div className="font-black text-black tracking-tight flex items-center gap-1"><div className="w-3 h-3 bg-black"></div>Frintz</div>

           {/* Row 3 */}
           <div className="font-sans text-gray-500 font-bold flex items-center gap-1">komax X</div>
           <div className="font-sans text-gray-400 font-bold tracking-tight">SuperNatural</div>
           <div className="font-sans font-bold text-[22px] tracking-tight">BIPO</div>
           <div className="font-serif font-bold text-[18px]">penny</div>
           <div className="font-sans text-[10px] text-gray-400 text-center font-bold">FableVision<br/>LEARNING</div>
           <div className="font-black text-gray-600 tracking-tighter leading-none border-l-[4px] border-gray-600 pl-1 py-1">DOORSTEP<br/>MARKET</div>
        </div>
      </div>

    </section>
  );
}
