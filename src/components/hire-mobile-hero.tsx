"use client";

import { ArrowRight, Smartphone, SmartphoneCharging, PlaySquare, Layers, Terminal } from "lucide-react";
import Link from "next/link";

export function MobileHero() {
  return (
    <section className="relative w-full min-h-screen bg-[#fafafa] text-slate-900 flex items-center overflow-hidden pt-20">
      {/* Soft Elegant Background Gradients */}
      <div className="absolute inset-0 z-0">
         <div className="absolute top-[0%] left-[0%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-br from-indigo-100 via-blue-50 to-transparent blur-[100px] pointer-events-none"></div>
         <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-tl from-purple-100 via-pink-50 to-transparent blur-[120px] pointer-events-none"></div>
      </div>
      
      {/* Light dot grid */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)] pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto w-full px-6 relative z-10 grid lg:grid-cols-[1.1fr,0.9fr] gap-12 items-center">
        
        {/* Left Column */}
        <div className="flex flex-col items-start gap-8 z-20 pt-10">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-indigo-200 bg-white/60 backdrop-blur-md shadow-[0_2px_10px_rgba(79,70,229,0.05)]">
            <SmartphoneCharging className="w-4 h-4 text-indigo-500 animate-pulse" />
            <span className="text-indigo-600 text-xs font-bold tracking-widest uppercase">Premium Mobile Developers</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.05] tracking-tight text-slate-900">
            Build Apps <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600">Users Love.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 max-w-[500px] leading-relaxed font-light">
            Skip the learning curve. Hire elite iOS, Android, and Cross-Platform (React Native & Flutter) developers to launch breathtaking mobile experiences that hit #1 on the App Store.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-2">
            <Link href="#contact" className="group relative px-8 py-4 bg-slate-900 text-white font-bold rounded-full overflow-hidden transition-all hover:scale-105 hover:bg-indigo-600 shadow-[0_10px_30px_rgba(79,70,229,0.2)]">
               Interview Developers
            </Link>
            <button className="flex items-center gap-2 px-8 py-4 rounded-full font-bold border border-slate-200 text-slate-700 bg-white hover:bg-slate-50 transition-colors shadow-sm">
               View Platforms <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          
          <div className="flex items-center gap-8 mt-8 pt-6 border-t border-slate-200 w-full mb-10 lg:mb-0">
            <div>
              <div className="text-3xl font-black text-slate-900">60<span className="text-indigo-500">fps</span></div>
              <div className="text-xs text-slate-500 font-medium uppercase tracking-wider mt-1">Native Animations</div>
            </div>
            <div>
              <div className="text-3xl font-black text-slate-900">99<span className="text-indigo-500">%</span></div>
              <div className="text-xs text-slate-500 font-medium uppercase tracking-wider mt-1">Crash-Free Rate</div>
            </div>
          </div>
        </div>

        {/* Right Column / Floating Phone Graphic Abstract */}
        <div className="relative w-full aspect-square md:aspect-[3/4] lg:aspect-auto lg:h-[650px] perspective-[1200px] flex justify-center items-center">
           <div className="relative w-full max-w-[320px] h-[600px] transform rotate-y-[-15deg] rotate-x-12 hover:rotate-y-0 hover:rotate-x-0 transition-transform duration-700">
               
               {/* Main iPhone Body */}
               <div className="absolute inset-0 bg-[#0f172a] rounded-[3rem] border-[6px] border-slate-200 shadow-[20px_40px_80px_rgba(0,0,0,0.15)] flex flex-col overflow-hidden relative z-20">
                  
                  {/* Dynamic Island / Notch */}
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-30"></div>
                  
                  {/* App Screen Content */}
                  <div className="flex-1 bg-white mt-4 rounded-t-[2.5rem] flex flex-col p-6 relative overflow-hidden">
                     {/* Gradient Header */}
                     <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-t-[2.5rem] p-6 text-white pt-10">
                        <div className="flex justify-between items-center mb-6">
                           <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center"><Smartphone className="w-4 h-4 text-white"/></div>
                           <div className="w-8 h-8 rounded-full bg-white/20"></div>
                        </div>
                        <span className="text-2xl font-bold tracking-tight">Balance</span>
                        <div className="text-4xl font-black mt-1">$45,290.<span className="text-indigo-200 text-2xl">00</span></div>
                     </div>
                     
                     {/* App Cards below header */}
                     <div className="mt-40 space-y-4">
                        <div className="w-full bg-slate-50 border border-slate-100 rounded-2xl p-4 flex items-center gap-4 shadow-sm">
                           <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center">
                              <div className="w-6 h-6 bg-orange-500 rounded-full"></div>
                           </div>
                           <div>
                              <div className="text-sm font-bold text-slate-800">Apple Services</div>
                              <div className="text-xs text-slate-400">Subscription</div>
                           </div>
                           <div className="ml-auto font-bold text-slate-800">-$12.99</div>
                        </div>
                        
                        <div className="w-full bg-slate-50 border border-slate-100 rounded-2xl p-4 flex items-center gap-4 shadow-sm">
                           <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center">
                              <div className="w-6 h-6 bg-emerald-500 font-bold text-white text-xs flex items-center justify-center">A</div>
                           </div>
                           <div>
                              <div className="text-sm font-bold text-slate-800">Tech Salary</div>
                              <div className="text-xs text-slate-400">Deposit</div>
                           </div>
                           <div className="ml-auto font-bold text-emerald-500">+$6,450</div>
                        </div>
                        
                        <div className="w-full bg-slate-50 border border-slate-100 rounded-2xl p-4 flex items-center gap-4 shadow-sm opacity-50">
                           <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center"></div>
                           <div className="space-y-2">
                              <div className="w-20 h-4 bg-slate-200 rounded"></div>
                              <div className="w-12 h-3 bg-slate-200 rounded"></div>
                           </div>
                        </div>
                     </div>
                     
                     {/* Floating Action Button */}
                     <div className="absolute bottom-8 right-6 w-14 h-14 bg-indigo-600 rounded-full shadow-lg flex items-center justify-center text-white shadow-indigo-600/40">
                        <Layers className="w-6 h-6" />
                     </div>
                  </div>
               </div>

               {/* Code / Swift floating snippet */}
               <div className="absolute top-[20%] -left-12 lg:-left-24 bg-white border border-slate-100 p-4 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.08)] z-40 transform hover:-translate-y-2 transition-transform cursor-default w-64 hidden sm:block">
                  <div className="flex items-center gap-2 mb-3 border-b border-slate-50 pb-2">
                     <Terminal className="w-4 h-4 text-purple-500" />
                     <span className="text-[10px] font-bold text-slate-400 uppercase">ContentView.swift</span>
                  </div>
                  <div className="font-mono text-[9px] text-slate-600 leading-relaxed overflow-hidden">
                     <span className="text-indigo-500">import</span> SwiftUI<br/>
                     <br/>
                     <span className="text-indigo-500">struct</span> ContentView: View {`{`}<br/>
                     &nbsp;&nbsp;<span className="text-indigo-500">var</span> body: <span className="text-indigo-500">some</span> View {`{`}<br/>
                     &nbsp;&nbsp;&nbsp;&nbsp;VStack {`{`}<br/>
                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;HomeHeader()<br/>
                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.<span className="text-purple-500">transition</span>(.opacity)<br/>
                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TransactionList()<br/>
                     &nbsp;&nbsp;&nbsp;&nbsp;{`}`}<br/>
                     &nbsp;&nbsp;&nbsp;&nbsp;.<span className="text-purple-500">background</span>(Color.white)<br/>
                     &nbsp;&nbsp;{`}`}<br/>
                     {`}`}
                  </div>
               </div>

           </div>
        </div>
      </div>
    </section>
  );
}
