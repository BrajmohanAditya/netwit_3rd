"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Factory, Cpu, Wifi, ActivitySquare } from "lucide-react";

export function ManufacturingHero() {
  return (
    <section className="relative min-h-[650px] w-full flex flex-col justify-center p-6 bg-[#171a21] overflow-hidden m-0">
      
      {/* Dark Industrial Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        
        {/* Glow behind the main text/composition */}
        <div className="absolute top-[30%] left-[-10%] w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[0%] right-[0%] w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[150px]"></div>

        {/* Blueprint / Grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDM5LjVMMzkuNSAwIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiIHN0cm9rZS13aWR0aD0iMSIvPjwvc3ZnPg==')] opacity-50"></div>
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto w-full grid lg:grid-cols-2 gap-12 items-center mt-8">
        
        {/* Left Side: Content */}
        <div className="flex flex-col text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-amber-500/10 border border-amber-500/20 w-fit mb-6">
             <Factory className="w-4 h-4 text-amber-500" />
             <span className="text-amber-400 text-[12px] font-bold tracking-wider uppercase">Industry 4.0</span>
          </div>

          <h1 className="text-[42px] md:text-[56px] font-extrabold text-white mb-6 tracking-tight leading-[1.1]">
            Powering the <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Smart Factory</span> of Tomorrow
          </h1>
          
          <p className="text-[16px] md:text-[18px] text-gray-400 mb-8 max-w-[500px] leading-[1.6]">
            Enable Industry 4.0 with resilient DevOps solutions. Connect legacy PLCs to the cloud, deploy edge computing across your assembly lines, and optimize production with real-time IIoT analytics.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-5 w-full mb-10">
            <Link href="#contact" className="flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 text-black text-[15px] font-bold py-3.5 px-8 transition-transform hover:-translate-y-0.5 w-full sm:w-auto rounded-sm shadow-[0_4px_20px_rgba(245,158,11,0.3)]">
              Modernize Floor Operations <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="#solutions" className="flex items-center justify-center bg-transparent border-[1.5px] border-gray-600 text-gray-300 text-[15px] font-bold py-3.5 px-8 transition-colors hover:border-amber-400 hover:bg-amber-500/10 hover:text-amber-400 w-full sm:w-auto rounded-sm">
              Discover Edge Solutions
            </Link>
          </div>

          <div className="flex flex-wrap items-center gap-6">
             <div className="flex items-center gap-2 text-gray-300 text-[13px] font-medium bg-white/5 border border-white/5 px-4 py-2 rounded-sm shadow-sm">
                <Cpu className="w-4 h-4 text-amber-500" />
                <span>Heavy-Duty Edge Computing</span>
             </div>
             <div className="flex items-center gap-2 text-gray-300 text-[13px] font-medium bg-white/5 border border-white/5 px-4 py-2 rounded-sm shadow-sm">
                <Wifi className="w-4 h-4 text-amber-500" />
                <span>IIoT Connectivity</span>
             </div>
             <div className="flex items-center gap-2 text-gray-300 text-[13px] font-medium bg-white/5 border border-white/5 px-4 py-2 rounded-sm shadow-sm">
                <ActivitySquare className="w-4 h-4 text-amber-500" />
                <span>Predictive Maintenance</span>
             </div>
          </div>
        </div>

        {/* Right Side: High-Tech Factory Visuals */}
        <div className="relative hidden lg:block w-full h-[550px]">
           {/* Main Industrial Machine / Tech Image Mockup */}
           <div className="absolute top-[45%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[420px] h-[480px] bg-[#222733] rounded-[4px] overflow-hidden shadow-2xl border-4 border-gray-800 z-10 group">
             
             {/* Actual Image */}
             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1565515261924-40ce6ba22188?q=80&w=2071&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-1000 group-hover:scale-110 opacity-70 mix-blend-luminosity"></div>
             
             {/* Tech Overlay Lines representing analysis */}
             <div className="absolute inset-0 bg-amber-500/10"></div>
             <div className="absolute top-1/4 left-0 w-full h-[1px] bg-amber-500/50 shadow-[0_0_8px_rgba(245,158,11,0.8)] animate-pulse"></div>
             
             {/* HUD elements inside */}
             <div className="absolute top-4 right-4 flex gap-2">
                <div className="px-2 py-1 bg-amber-500 text-black text-[10px] font-bold uppercase rounded-sm flex items-center gap-1">
                   <div className="w-1.5 h-1.5 bg-black rounded-full animate-pulse"></div> Live
                </div>
                <div className="px-2 py-1 bg-black/60 border border-white/10 text-white text-[10px] font-bold uppercase rounded-sm">
                   Node #042
                </div>
             </div>

             <div className="absolute bottom-0 left-0 w-full bg-[#171a21]/90 backdrop-blur-md border-t border-gray-700 p-4">
                <div className="flex items-center justify-between mb-2">
                   <span className="text-gray-400 text-[11px] font-bold uppercase">Assembly Line Delta</span>
                   <span className="text-amber-400 text-[11px] font-bold">100% Optimal</span>
                </div>
                <div className="w-full h-1 bg-gray-800 rounded-full">
                   <div className="w-full h-full bg-gradient-to-r from-amber-600 to-amber-400 rounded-full"></div>
                </div>
             </div>

           </div>

           {/* Floating elements behind/around the mockup representing data */}
           <div className="absolute top-[10%] right-[-5%] bg-[#222733] border border-gray-700 p-4 rounded-[4px] shadow-xl flex items-center gap-3 animate-bounce z-20" style={{ animationDuration: '3.5s' }}>
              <div className="flex flex-col items-end">
                 <span className="text-[12px] font-bold text-gray-200">Motor Vibration</span>
                 <span className="text-[10px] text-green-400 font-bold">Within Limits</span>
              </div>
              <div className="w-10 h-10 bg-black/40 border border-gray-600 rounded-sm flex items-center justify-center">
                 <ActivitySquare className="w-5 h-5 text-gray-400" />
              </div>
           </div>

           <div className="absolute bottom-[20%] left-[-10%] bg-[#222733] border border-amber-500/30 p-4 rounded-[4px] shadow-xl flex items-center gap-3 animate-bounce z-20" style={{ animationDuration: '4.5s' }}>
              <div className="w-10 h-10 bg-amber-500/20 rounded-sm flex items-center justify-center border border-amber-500/50">
                 <svg className="w-5 h-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                 </svg>
              </div>
              <div className="flex flex-col">
                 <span className="text-[12px] font-bold text-amber-400">Predictive Alerts</span>
                 <span className="text-[10px] text-gray-400 leading-tight">Zero anomalies detected<br/>in the last 48 hrs</span>
              </div>
           </div>

        </div>

      </div>
    </section>
  );
}
