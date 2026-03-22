"use client";

import { ArrowRight, Box, Code2, Database, LayoutPanelLeft, Server, ShieldCheck } from "lucide-react";
import Link from "next/link";

export function CsharpMvcHero() {
  return (
    <section className="relative w-full min-h-[110vh] bg-[#0a0710] text-white flex items-center overflow-hidden pt-20 font-sans">
      {/* C# Purple & MVC Blue Gradients */}
      <div className="absolute inset-0 z-0">
         <div className="absolute top-[0%] left-[10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-br from-[#5C2D91]/20 via-[#402066]/10 to-transparent blur-[120px] pointer-events-none"></div>
         <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-tl from-[#0078D4]/15 via-[#5C2D91]/20 to-transparent blur-[130px] pointer-events-none"></div>
      </div>
      
      {/* Circuit/Grid Pattern */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(92,45,145,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(92,45,145,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)] pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto w-full px-6 relative z-10 grid lg:grid-cols-[1.1fr,0.9fr] gap-12 items-center">
        
        {/* Left Column */}
        <div className="flex flex-col items-start gap-8 z-20 pt-10">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-[#5C2D91]/30 bg-[#5C2D91]/10 backdrop-blur-xl shadow-lg">
            <LayoutPanelLeft className="w-4 h-4 text-[#967ce2]" />
            <span className="text-[#967ce2] text-xs font-semibold tracking-widest uppercase">Architectural Excellence</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.05] tracking-tight text-white shadow-sm">
            Scalable <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8140db] via-[#5C2D91] to-[#0078D4] font-extrabold tracking-tighter">MVC Power.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 max-w-[480px] leading-relaxed font-light">
            We build high-performance, enterprise-grade web applications using C# and ASP.NET MVC. Clean architecture, robust security, and seamless integration with the Microsoft ecosystem.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-2">
            <Link href="#contact" className="group relative px-8 py-4 bg-[#5C2D91] text-white font-bold rounded-full overflow-hidden transition-all hover:scale-105 shadow-[0_0_40px_rgba(92,45,145,0.3)] hover:bg-[#402066]">
               Hire MVC Developers
            </Link>
            <button className="flex items-center gap-2 px-8 py-4 rounded-full font-bold border border-white/20 text-white hover:bg-white/5 transition-colors backdrop-blur-md">
               Explore Architecture <ArrowRight className="w-4 h-4 text-[#967ce2]" />
            </button>
          </div>
          
          <div className="flex items-center gap-8 mt-8 pt-6 border-t border-white/10 w-full mb-10 lg:mb-0">
            <div>
              <div className="text-3xl font-bold text-white tracking-tighter">EF<span className="text-slate-500 text-2xl">Core</span></div>
              <div className="text-xs text-slate-500 font-medium uppercase tracking-wider mt-1">Data Modeling</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white tracking-tighter">Razor<span className="text-slate-500 text-2xl"></span></div>
              <div className="text-xs text-slate-500 font-medium uppercase tracking-wider mt-1">Dynamic Views</div>
            </div>
          </div>
        </div>

        {/* Right Column / Abstract IDE & MVC Logic */}
        <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-auto lg:h-[650px] perspective-[1400px] flex justify-center items-center">
           <div className="relative w-full max-w-[480px] h-[550px] transform rotate-y-[-10deg] rotate-x-5 hover:rotate-y-0 hover:rotate-x-0 transition-transform duration-1000 ease-out">
               
               {/* Translucent Visual Studio Window */}
               <div className="absolute top-[10%] left-[0%] w-full h-[85%] bg-[#1e1e1e]/95 backdrop-blur-3xl border border-[#5C2D91]/20 rounded-2xl shadow-[0_40px_100px_rgba(0,0,0,0.9)] z-20 hover:-translate-y-2 transition-transform cursor-default relative overflow-hidden flex flex-col">
                  
                  {/* IDE Header */}
                  <div className="h-10 bg-[#181818] border-b border-[#5C2D91]/20 flex items-center px-4 justify-between backdrop-blur-md flex-shrink-0">
                     <div className="flex gap-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                     </div>
                     <span className="text-[10px] text-slate-400 font-medium flex items-center gap-2 font-mono">
                        ProductController.cs
                     </span>
                     <div className="w-10"></div>
                  </div>
                  
                  {/* C# MVC Code Content */}
                  <div className="p-6 font-mono text-[11px] leading-[1.8] text-[#d4d4d4] flex-1">
                     <span className="text-[#569CD6]">public class</span> <span className="text-[#4EC9B0]">ProductController</span> : <span className="text-[#4EC9B0]">Controller</span><br/>
                     {"{"}<br/>
                     &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#569CD6]">private readonly</span> <span className="text-[#4EC9B0]">IProductService</span> _service;<br/>
                     <br/>
                     &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#569CD6]">public</span> <span className="text-[#DCDCAA]">ProductController</span>(<span className="text-[#4EC9B0]">IProductService</span> service)<br/>
                     &nbsp;&nbsp;&nbsp;&nbsp;{"{"}<br/>
                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_service = service;<br/>
                     &nbsp;&nbsp;&nbsp;&nbsp;{"}"}<br/>
                     <br/>
                     &nbsp;&nbsp;&nbsp;&nbsp;[<span className="text-[#4EC9B0]">HttpGet</span>]<br/>
                     &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#569CD6]">public async</span> <span className="text-[#4EC9B0]">Task</span>&lt;<span className="text-[#4EC9B0]">IActionResult</span>&gt; <span className="text-[#DCDCAA]">Index</span>()<br/>
                     &nbsp;&nbsp;&nbsp;&nbsp;{"{"}<br/>
                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#569CD6]">var</span> products = <span className="text-[#C586C0]">await</span> _service.<span className="text-[#DCDCAA]">GetAllAsync</span>();<br/>
                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#C586C0]">return</span> <span className="text-[#DCDCAA]">View</span>(products);<br/>
                     &nbsp;&nbsp;&nbsp;&nbsp;{"}"}<br/>
                     {"}"}<br/>
                  </div>
               </div>

               {/* Simulated Data Node */}
               <div className="absolute top-[65%] -left-[15%] bg-[#080b12] border border-[#5C2D91]/40 p-5 rounded-2xl shadow-[0_20px_50px_rgba(92,45,145,0.15)] z-40 transform hover:scale-105 transition-transform flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-[#5C2D91]/10 flex items-center justify-center border border-[#5C2D91]/30">
                     <Database className="w-6 h-6 text-[#967ce2]" />
                  </div>
                  <div>
                     <span className="block text-sm font-bold text-white tracking-tight">Entity Framework</span>
                     <span className="block text-[10px] text-[#967ce2] font-medium mt-0.5">Database Migrated</span>
                  </div>
               </div>

               {/* UI Link Node */}
               <div className="absolute top-[30%] -right-[15%] bg-[#080b12] border border-[#0078D4]/40 p-5 rounded-2xl shadow-[0_20px_50px_rgba(0,120,212,0.15)] z-40 transform hover:scale-105 transition-transform flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-[#0078D4]/10 flex items-center justify-center border border-[#0078D4]/30">
                     <Code2 className="w-64 h-64 text-[#0078D4]" />
                  </div>
                  <div>
                     <span className="block text-sm font-bold text-white tracking-tight">Razor View</span>
                     <span className="block text-[10px] text-[#0078D4] font-medium mt-0.5">Hot Reload Active</span>
                  </div>
               </div>

               {/* Abstract Backdrop */}
               <div className="absolute -top-10 -left-16 opacity-[0.05] z-0 animate-[pulse_8s_linear_infinite] grayscale">
                  <Box className="w-64 h-64" />
               </div>

           </div>
        </div>
      </div>
    </section>
  );
}
