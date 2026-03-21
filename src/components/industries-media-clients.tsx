"use client";

import { Video, Gamepad2, Headphones, RadioReceiver } from "lucide-react";

export function MediaClients() {
  return (
    <section className="w-full bg-[#160D24] py-16 px-6 flex flex-col items-center border-t border-fuchsia-900/40">
      
      <div className="max-w-[1000px] w-full flex flex-col items-center">
         <p className="text-[14px] text-fuchsia-400 font-bold mb-10 text-center uppercase tracking-[0.2em] relative mix-blend-screen opacity-80">
           Powering Leading Broadcasters & Studios
         </p>
         
         <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-16 items-center justify-items-center opacity-60">
            {/* Dummy Client 1 */}
            <div className="flex items-center gap-3 group transition-all duration-300">
              <div className="w-10 h-10 border border-fuchsia-500/20 bg-fuchsia-500/10 flex items-center justify-center rounded-3xl group-hover:bg-fuchsia-500/30 group-hover:border-fuchsia-400 transition-colors"><Video className="text-fuchsia-400 group-hover:text-fuchsia-300" /></div>
              <div className="font-sans text-[22px] font-black text-fuchsia-100 tracking-tight leading-none group-hover:text-white transition-colors">Stream<span className="font-light text-fuchsia-400">Box</span></div>
            </div>

            {/* Dummy Client 2 */}
            <div className="flex items-center gap-3 group transition-all duration-300">
              <div className="w-10 h-10 border border-cyan-500/20 bg-cyan-500/10 flex items-center justify-center rounded-3xl group-hover:bg-cyan-500/30 group-hover:border-cyan-400 transition-colors"><Gamepad2 className="text-cyan-400 group-hover:text-cyan-300" /></div>
              <div className="font-serif italic text-[26px] font-bold text-cyan-100 tracking-tight group-hover:text-white transition-colors">Nexus<br/><span className="font-sans text-[10px] not-italic font-bold text-cyan-500 uppercase tracking-widest relative -top-3">Studios</span></div>
            </div>

            {/* Dummy Client 3 */}
            <div className="flex items-center gap-3 group transition-all duration-300">
              <div className="w-10 h-10 border border-purple-500/20 bg-purple-500/10 flex items-center justify-center rounded-3xl group-hover:bg-purple-500/30 group-hover:border-purple-400 transition-colors"><Headphones className="text-purple-400 group-hover:text-purple-300" /></div>
              <div className="font-sans text-[24px] font-bold text-purple-200 tracking-tighter uppercase group-hover:text-white transition-colors">Audio<span className="text-[24px] text-purple-400 group-hover:text-purple-300 font-black">Sync</span></div>
            </div>

            {/* Dummy Client 4 */}
            <div className="flex items-center gap-3 group transition-all duration-300">
               <div className="font-serif text-[28px] font-bold text-fuchsia-200 tracking-tight group-hover:text-white transition-colors">Net<span className="font-sans text-[16px] font-black text-fuchsia-600 uppercase tracking-[0.2em] relative top-[-4px] group-hover:text-fuchsia-400">Cast</span></div>
              <div className="w-10 h-10 border border-fuchsia-500/20 bg-fuchsia-500/10 flex items-center justify-center rounded-3xl group-hover:bg-fuchsia-500/30 group-hover:border-fuchsia-400 transition-colors"><RadioReceiver className="text-fuchsia-400 group-hover:text-fuchsia-300" /></div>
            </div>
         </div>
      </div>
      
    </section>
  );
}
