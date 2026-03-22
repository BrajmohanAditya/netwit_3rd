"use client";

import { ArrowRight, Apple, Command, LayoutTemplate } from "lucide-react";
import Link from "next/link";

export function SwiftHero() {
  return (
    <section className="relative w-full min-h-[110vh] bg-black text-white flex items-center overflow-hidden pt-20 font-sans">
      {/* Apple Silicon / WWDC Style Gradients */}
      <div className="absolute inset-0 z-0">
         <div className="absolute top-[0%] left-[10%] w-[40vw] h-[40vw] rounded-full bg-gradient-to-br from-indigo-600/30 via-purple-600/20 to-transparent blur-[100px] pointer-events-none mix-blend-screen"></div>
         <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-tl from-orange-500/20 via-pink-600/20 to-transparent blur-[120px] pointer-events-none mix-blend-screen"></div>
      </div>

      <div className="max-w-[1200px] mx-auto w-full px-6 relative z-10 grid lg:grid-cols-[1fr,1fr] gap-16 items-center">
        
        {/* Left Column */}
        <div className="flex flex-col items-start gap-8 z-20 pt-10">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-xl shadow-lg">
            <Apple className="w-4 h-4 text-white" />
            <span className="text-white text-xs font-semibold tracking-widest uppercase">Pure Native Ecosystem</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight text-white">
            Designed for <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 font-extrabold tracking-tighter">Perfection.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 max-w-[450px] leading-relaxed font-light">
            Don't build an app; craft an experience. We engineer pristine, relentlessly smooth iOS applications using raw Swift and SwiftUI that feel inextricably woven into Apple's hardware.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-2">
            <Link href="#contact" className="group relative px-8 py-4 bg-white text-black font-bold rounded-full overflow-hidden transition-all hover:scale-105 shadow-[0_0_40px_rgba(255,255,255,0.2)]">
               Hire Swift Engineers
            </Link>
            <button className="flex items-center gap-2 px-8 py-4 rounded-full font-bold border border-white/20 text-white hover:bg-white/10 transition-colors backdrop-blur-md">
               View Architecture <ArrowRight className="w-4 h-4 text-white" />
            </button>
          </div>
          
          <div className="flex items-center gap-8 mt-8 pt-6 border-t border-white/10 w-full mb-10 lg:mb-0">
            <div>
              <div className="text-3xl font-bold text-white tracking-tighter">120<span className="text-gray-500 text-2xl">hz</span></div>
              <div className="text-xs text-gray-500 font-medium uppercase tracking-wider mt-1">ProMotion Displays</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white tracking-tighter">100<span className="text-gray-500 text-2xl">%</span></div>
              <div className="text-xs text-gray-500 font-medium uppercase tracking-wider mt-1">SwiftUI Declarative</div>
            </div>
          </div>
        </div>

        {/* Right Column / Abstract Xcode / SwiftUI Interface */}
        <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-auto lg:h-[650px] perspective-[1400px] flex justify-center items-center">
           <div className="relative w-full max-w-[500px] h-[580px] transform rotate-y-[-15deg] rotate-x-5 hover:rotate-y-0 hover:rotate-x-0 transition-transform duration-1000 ease-out">
               
               {/* Translucent macOS / Xcode Window */}
               <div className="absolute top-[10%] left-[0%] w-full h-[85%] bg-black/40 backdrop-blur-3xl border border-white/20 rounded-2xl shadow-[0_40px_100px_rgba(0,0,0,1)] z-20 hover:-translate-y-2 transition-transform cursor-default relative overflow-hidden">
                  
                  {/* Mac Window Header */}
                  <div className="h-12 bg-white/5 border-b border-white/10 flex items-center px-4 justify-between backdrop-blur-md">
                     <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-[#FF5F56] border border-black/20"></div>
                        <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-black/20"></div>
                        <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-black/20"></div>
                     </div>
                     <div className="flex bg-white/10 rounded-md p-1 px-3">
                         <span className="text-[10px] text-gray-300 font-medium">DashboardView.swift</span>
                     </div>
                     <div className="w-10"></div>
                  </div>
                  
                  {/* SwiftUI Code Content */}
                  <div className="p-6 font-mono text-[12px] leading-loose text-white/90">
                     <span className="text-[#F97583]">import</span> <span className="text-[#B392F0]">SwiftUI</span><br/>
                     <br/>
                     <span className="text-[#F97583]">struct</span> <span className="text-[#B392F0]">DashboardView</span>: <span className="text-[#79B8FF]">View</span> {`{`}<br/>
                     &nbsp;&nbsp;<span className="text-[#F97583]">@State private var</span> animationAmount <span className="text-[#F97583]">=</span> <span className="text-[#79B8FF]">1.0</span><br/>
                     <br/>
                     &nbsp;&nbsp;<span className="text-[#F97583]">var</span> body: <span className="text-[#F97583]">some</span> <span className="text-[#79B8FF]">View</span> {`{`}<br/>
                     &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#B392F0]">VStack</span> {`{`}<br/>
                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#B392F0]">Text</span>(<span className="text-[#9ECBFF]">"Enterprise iOS"</span>)<br/>
                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.<span className="text-[#79B8FF]">font</span>(.<span className="text-[#79B8FF]">system</span>(.<span className="text-[#79B8FF]">largeTitle</span>, design: .<span className="text-[#79B8FF]">rounded</span>))<br/>
                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.<span className="text-[#79B8FF]">fontWeight</span>(.<span className="text-[#79B8FF]">bold</span>)<br/>
                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.<span className="text-[#79B8FF]">foregroundStyle</span>(.<span className="text-[#79B8FF]">ultraThinMaterial</span>)<br/>
                     &nbsp;&nbsp;&nbsp;&nbsp;{`}`}<br/>
                     &nbsp;&nbsp;&nbsp;&nbsp;.<span className="text-[#79B8FF]">background</span>(<br/>
                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#B392F0]">AngularGradient</span>(<br/>
                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;colors: [.<span className="text-[#79B8FF]">pink</span>, .<span className="text-[#79B8FF]">purple</span>, .<span className="text-[#79B8FF]">blue</span>]<br/>
                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;)<br/>
                     &nbsp;&nbsp;&nbsp;&nbsp;)<br/>
                     &nbsp;&nbsp;{`}`}<br/>
                     {`}`}
                  </div>
               </div>

               {/* Simulated iOS Glass Widget */}
               <div className="absolute top-[65%] -left-[10%] bg-white/10 backdrop-blur-2xl border border-white/20 p-5 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-40 transform hover:scale-105 transition-transform flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center shadow-inner">
                     <LayoutTemplate className="w-6 h-6 text-white" />
                  </div>
                  <div>
                     <span className="block text-sm font-bold text-white tracking-tight">ultraThinMaterial</span>
                     <span className="block text-[10px] text-gray-400 font-medium mt-0.5">Live Hardware Rendering</span>
                  </div>
               </div>

               {/* Command Symbol */}
               <div className="absolute -top-6 -right-6 text-white/5 z-0 animate-[spin_40s_linear_infinite]">
                  <Command className="w-48 h-48" />
               </div>

           </div>
        </div>
      </div>
    </section>
  );
}
