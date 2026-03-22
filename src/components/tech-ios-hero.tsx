"use client";

import { ArrowRight, Apple, ShieldCheck, Blocks } from "lucide-react";
import Link from "next/link";

export function IosHero() {
  return (
    <section className="relative w-full min-h-[110vh] bg-[#020816] text-white flex items-center overflow-hidden pt-20 font-sans">
      {/* iOS Engineering Gradients */}
      <div className="absolute inset-0 z-0">
         <div className="absolute top-[0%] left-[10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-br from-[#007AFF]/10 via-[#5856D6]/10 to-transparent blur-[120px] pointer-events-none"></div>
         <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-tl from-[#34C759]/5 via-[#007AFF]/10 to-transparent blur-[150px] pointer-events-none"></div>
      </div>
      
      {/* Engineering Grid */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)] pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto w-full px-6 relative z-10 grid lg:grid-cols-[1.05fr,0.95fr] gap-12 items-center">
        
        {/* Left Column */}
        <div className="flex flex-col items-start gap-8 z-20 pt-10">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-[#007AFF]/30 bg-[#007AFF]/10 backdrop-blur-xl shadow-lg">
            <Apple className="w-4 h-4 text-[#007AFF]" />
            <span className="text-[#007AFF] text-xs font-semibold tracking-widest uppercase">Enterprise iOS Architecture</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.05] tracking-tight text-white shadow-sm">
            Engineered for <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#007AFF] to-[#5856D6] font-extrabold tracking-tighter">Scale.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 max-w-[480px] leading-relaxed font-light">
            We architect robust, complex iOS systems for enterprise. From bridging legacy Objective-C codebases to modern Swift logic, we build stable foundations utilizing deep UIKit expertise and XCTest automation.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-2">
            <Link href="#contact" className="group relative px-8 py-4 bg-[#007AFF] text-white font-bold rounded-full overflow-hidden transition-all hover:scale-105 shadow-[0_0_40px_rgba(0,122,255,0.3)] hover:bg-[#0056b3]">
               Assemble iOS Team
            </Link>
            <button className="flex items-center gap-2 px-8 py-4 rounded-full font-bold border border-white/20 text-white hover:bg-white/5 transition-colors backdrop-blur-md">
               Review Foundations <ArrowRight className="w-4 h-4 text-[#007AFF]" />
            </button>
          </div>
          
          <div className="flex items-center gap-8 mt-8 pt-6 border-t border-white/10 w-full mb-10 lg:mb-0">
            <div>
              <div className="text-3xl font-bold text-white tracking-tighter">UIKit<span className="text-slate-500 text-2xl"></span></div>
              <div className="text-xs text-slate-500 font-medium uppercase tracking-wider mt-1">Foundational SDK</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white tracking-tighter">Obj-C<span className="text-slate-500 text-2xl"></span></div>
              <div className="text-xs text-slate-500 font-medium uppercase tracking-wider mt-1">Bridging Header</div>
            </div>
          </div>
        </div>

        {/* Right Column / Abstract Interface */}
        <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-auto lg:h-[650px] perspective-[1400px] flex justify-center items-center">
           <div className="relative w-full max-w-[480px] h-[550px] transform rotate-y-[-10deg] rotate-x-5 hover:rotate-y-0 hover:rotate-x-0 transition-transform duration-1000 ease-out">
               
               {/* Translucent Window */}
               <div className="absolute top-[10%] left-[0%] w-full h-[85%] bg-[#0d1627]/90 backdrop-blur-3xl border border-[#007AFF]/20 rounded-2xl shadow-[0_40px_100px_rgba(0,0,0,0.8)] z-20 hover:-translate-y-2 transition-transform cursor-default relative overflow-hidden">
                  
                  {/* IDE Header */}
                  <div className="h-10 bg-[#060c18] border-b border-[#007AFF]/20 flex items-center px-4 justify-between backdrop-blur-md">
                     <div className="flex gap-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                     </div>
                     <span className="text-[10px] text-slate-400 font-medium flex items-center gap-2 font-mono">
                        NetworkManager.h
                     </span>
                     <div className="w-10"></div>
                  </div>
                  
                  {/* Objective-C / Swift Interop Code Content */}
                  <div className="p-6 font-mono text-[11px] leading-loose text-slate-300">
                     <span className="text-[#F97583]">#import</span> <span className="text-[#9ECBFF]">&lt;Foundation/Foundation.h&gt;</span><br/>
                     <span className="text-[#F97583]">#import</span> <span className="text-[#9ECBFF]">&lt;UIKit/UIKit.h&gt;</span><br/>
                     <br/>
                     <span className="text-[#B392F0]">NS_ASSUME_NONNULL_BEGIN</span><br/>
                     <br/>
                     <span className="text-[#F97583]">@interface</span> <span className="text-[#79B8FF]">EnterpriseNetworkManager</span> : <span className="text-[#79B8FF]">NSObject</span><br/>
                     <br/>
                     <span className="text-[#F97583]">+</span> (<span className="text-[#79B8FF]">instancetype</span>)<span className="text-[#B392F0]">sharedManager</span>;<br/>
                     <span className="text-[#F97583]">-</span> (<span className="text-[#F97583]">void</span>)<span className="text-[#B392F0]">fetchSecurePayloadWithCompletion:</span><br/>
                     &nbsp;&nbsp;&nbsp;&nbsp;(<span className="text-[#F97583]">void</span> (^)(<span className="text-[#79B8FF]">NSDictionary</span> <span className="text-[#F97583]">*</span> _Nullable data, <span className="text-[#79B8FF]">NSError</span> <span className="text-[#F97583]">*</span> _Nullable error))<span className="text-[#79B8FF]">completionHandler</span>;<br/>
                     <br/>
                     <span className="text-[#F97583]">@end</span><br/>
                     <br/>
                     <span className="text-[#B392F0]">NS_ASSUME_NONNULL_END</span><br/>
                  </div>
               </div>

               {/* Simulated UIKit AutoLayout Badge */}
               <div className="absolute top-[70%] -left-[15%] bg-[#060c18] border border-[#007AFF]/40 p-5 rounded-2xl shadow-[0_20px_50px_rgba(0,122,255,0.2)] z-40 transform hover:scale-105 transition-transform flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-[#007AFF]/10 flex items-center justify-center border border-[#007AFF]/30">
                     <Blocks className="w-6 h-6 text-[#007AFF]" />
                  </div>
                  <div>
                     <span className="block text-sm font-bold text-white tracking-tight">NSLayoutConstraint</span>
                     <span className="block text-[10px] text-slate-400 font-medium mt-0.5">Programmatic AutoLayout</span>
                  </div>
               </div>

               {/* Swift Logo Ghost */}
               <div className="absolute -top-12 -right-8 opacity-5 z-0 animate-[pulse_8s_linear_infinite] grayscale">
                  <Apple className="w-48 h-48" />
               </div>

           </div>
        </div>
      </div>
    </section>
  );
}
