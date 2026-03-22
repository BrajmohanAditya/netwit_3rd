"use client";

import { ArrowRight, Smartphone, Layers, Palette, MonitorSmartphone, Flame } from "lucide-react";
import Link from "next/link";

export function FlutterHero() {
  return (
    <section className="relative w-full min-h-[110vh] bg-[#040b16] text-white flex items-center overflow-hidden pt-20">
      {/* Flutter Cyan/Blue Gradients */}
      <div className="absolute inset-0 z-0">
         <div className="absolute top-[0%] right-[0%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-bl from-[#0175C2]/20 via-[#42A5F5]/10 to-transparent blur-[120px] pointer-events-none"></div>
         <div className="absolute bottom-[-10%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-tr from-blue-900/30 via-[#13B9FD]/10 to-transparent blur-[130px] pointer-events-none"></div>
      </div>
      
      {/* Skia Vector Grid */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(rgba(19,185,253,0.05)_1px,transparent_1px)] bg-[size:30px_30px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)] pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto w-full px-6 relative z-10 grid lg:grid-cols-[1.1fr,0.9fr] gap-12 items-center">
        
        {/* Left Column */}
        <div className="flex flex-col items-start gap-8 z-20 pt-10">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-[#42A5F5]/30 bg-[#42A5F5]/10 backdrop-blur-md shadow-[0_0_20px_rgba(66,165,245,0.15)]">
            <Palette className="w-4 h-4 text-[#42A5F5]" />
            <span className="text-[#42A5F5] text-xs font-bold tracking-widest uppercase">Pixel-Perfect UI Control</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.05] tracking-tight text-white">
            Paint Your <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#13B9FD] to-[#0175C2]">Masterpiece.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 max-w-[500px] leading-relaxed font-light">
            Don't compromise your vision to OEM widgets. Flutter draws directly to the screen via the Impeller engine, delivering breathtaking 120fps animations across Mobile, Web, and Desktop simultaneously.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-2">
            <Link href="#contact" className="group relative px-8 py-4 bg-[#0175C2] text-white font-bold rounded-full overflow-hidden transition-all hover:scale-105 hover:bg-[#02569B] shadow-[0_0_30px_rgba(1,117,194,0.3)]">
               Hire Flutter Engineers
            </Link>
            <button className="flex items-center gap-2 px-8 py-4 rounded-full font-bold border border-white/20 text-white hover:bg-white/5 transition-colors">
               Explore Dart Stack <ArrowRight className="w-4 h-4 text-[#42A5F5]" />
            </button>
          </div>
          
          <div className="flex items-center gap-8 mt-8 pt-6 border-t border-white/10 w-full mb-10 lg:mb-0">
            <div>
              <div className="text-3xl font-black text-white">120<span className="text-[#42A5F5]">fps</span></div>
              <div className="text-xs text-slate-500 font-medium uppercase tracking-wider mt-1">Impeller Hardware GPU</div>
            </div>
            <div>
              <div className="text-3xl font-black text-white">6<span className="text-[#42A5F5]">x</span></div>
              <div className="text-xs text-slate-500 font-medium uppercase tracking-wider mt-1">Platforms per Codebase</div>
            </div>
          </div>
        </div>

        {/* Right Column / Abstract Flutter Widget Tree Map directly to Canvas */}
        <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-auto lg:h-[650px] perspective-[1200px] flex justify-center items-center">
           <div className="relative w-full max-w-[480px] h-[550px] transform rotate-y-[-12deg] rotate-x-6 hover:rotate-y-0 hover:rotate-x-0 transition-transform duration-700">
               
               {/* 3D Widget Tree Representation */}
               <div className="absolute top-[20%] left-[10%] w-[300px] h-[400px] bg-[#02050A] border border-cyan-500/20 rounded-3xl overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.8)] z-20 hover:-translate-y-2 transition-transform cursor-default relative">
                  
                  {/* Mock Dart UI Component */}
                  <div className="p-6 relative h-full flex flex-col gap-4 w-full bg-gradient-to-b from-[#0a1426] to-[#040b16] overflow-hidden">
                     {/* Scaffold / AppBar */}
                     <div className="w-full h-12 bg-[#0175C2]/20 rounded-xl border border-[#0175C2]/30 flex items-center px-4 relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                        <div className="w-24 h-3 bg-[#42A5F5] rounded-full"></div>
                     </div>
                     
                     {/* Container / Column / ListViews (Deeply Nested) */}
                     <div className="flex-1 w-full bg-[#13B9FD]/5 rounded-xl border border-[#13B9FD]/10 p-4 flex flex-col gap-3">
                         
                         {/* Card Widget */}
                         <div className="w-full h-24 bg-white/5 rounded-xl border border-white/5 flex gap-3 p-3 shadow-lg">
                            <div className="w-16 h-16 bg-gradient-to-br from-purple-500/40 to-cyan-500/40 rounded-lg"></div>
                            <div className="flex-1 flex flex-col gap-2 justify-center">
                               <div className="w-3/4 h-2 bg-white/20 rounded-full"></div>
                               <div className="w-1/2 h-2 bg-white/10 rounded-full"></div>
                               <div className="w-1/4 h-2 bg-[#42A5F5]/50 rounded-full mt-2"></div>
                            </div>
                         </div>
                         
                         {/* Card Widget 2 */}
                         <div className="w-full h-24 bg-white/5 rounded-xl border border-white/5 flex gap-3 p-3 shadow-lg">
                            <div className="w-16 h-16 bg-gradient-to-br from-blue-500/40 to-emerald-500/40 rounded-lg"></div>
                            <div className="flex-1 flex flex-col gap-2 justify-center">
                               <div className="w-3/4 h-2 bg-white/20 rounded-full"></div>
                               <div className="w-1/2 h-2 bg-white/10 rounded-full"></div>
                               <div className="w-1/4 h-2 bg-[#42A5F5]/50 rounded-full mt-2"></div>
                            </div>
                         </div>
                     </div>
                     
                     {/* Floating Action Button (FAB) */}
                     <div className="absolute bottom-6 right-6 w-14 h-14 bg-[#42A5F5] rounded-full shadow-[0_10px_30px_rgba(66,165,245,0.4)] border border-white/20 flex items-center justify-center">
                        <div className="w-4 h-4 bg-[#040b16] rounded-sm transform rotate-45"></div>
                     </div>
                  </div>
               </div>
               
               {/* Translucent Overlay Widget (Highlighting "Everything is a widget") */}
               <div className="absolute top-[35%] left-[25%] w-[330px] h-[150px] bg-cyan-500/5 backdrop-blur-xl border border-cyan-400/30 rounded-2xl shadow-[0_20px_50px_rgba(1,117,194,0.2)] z-30 transform translate-z-10 translate-x-4 stroke-cyan-500 flex items-center justify-center p-4 group">
                  <div className="absolute -top-3 -left-3 bg-[#0175C2] text-white text-[9px] font-bold px-3 py-1.5 rounded-md shadow-lg font-mono">BackdropFilter()</div>
                  <div className="text-xl font-bold text-white text-center tracking-widest uppercase opacity-40 group-hover:opacity-100 transition-opacity">Custom<br/>Paint</div>
               </div>

               {/* Hot Reload State Badge */}
               <div className="absolute top-[80%] right-[0%] bg-[#040b16] border border-orange-500/30 p-3 rounded-xl shadow-[0_20px_50px_rgba(249,115,22,0.15)] z-40 transform rotate-6 hover:scale-105 transition-transform flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg border border-orange-500/50 bg-orange-500/10 flex items-center justify-center">
                     <Flame className="w-4 h-4 text-orange-400 animate-pulse" />
                  </div>
                  <div>
                     <span className="block text-[10px] font-bold text-white uppercase tracking-widest">Stateful Hot Reload</span>
                     <span className="block text-[9px] text-orange-400 font-mono mt-0.5">305ms compile</span>
                  </div>
               </div>

               {/* Flutter Giant Silhouette */}
               <div className="absolute -top-[10%] -right-[15%] w-56 h-56 opacity-10 z-0 animate-[pulse_6s_ease-in-out_infinite]">
                  <svg viewBox="0 0 166 202" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M81.0427 101L15.3404 35.3032L45.986 4.65997L142.338 101.011L81.0427 101Z" fill="#13B9FD"/>
                    <path d="M81.0456 100.999L15.3433 166.696L45.9889 197.339L142.341 100.988L81.0456 100.999Z" fill="#0175C2"/>
                    <path d="M129.566 113.766L81.0441 162.285L65.7266 146.968L114.248 98.4485L129.566 113.766Z" fill="#02569B"/>
                    <path d="M160.211 4.65997L142.338 22.5303L81.0427 83.8234L114.245 117.026L193.388 37.8863L160.211 4.65997Z" fill="#42A5F5"/>
                  </svg>
               </div>

           </div>
        </div>
      </div>
    </section>
  );
}
