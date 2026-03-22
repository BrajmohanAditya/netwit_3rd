"use client";

import { ArrowRight, Hexagon, Code2, TerminalSquare, Workflow, Globe2, Shapes } from "lucide-react";
import Link from "next/link";

export function AngularHero() {
  return (
    <section className="relative w-full min-h-[110vh] bg-[#09090b] text-white flex items-center overflow-hidden pt-20">
      {/* Angular Red / Enterprise Gradients */}
      <div className="absolute inset-0 z-0">
         <div className="absolute top-[0%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-bl from-[#DD0031]/20 via-rose-600/5 to-transparent blur-[120px] pointer-events-none"></div>
         <div className="absolute bottom-[-10%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-tr from-blue-600/10 via-[#DD0031]/10 to-transparent blur-[130px] pointer-events-none"></div>
      </div>
      
      {/* Structural Tech Grid */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)] pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto w-full px-6 relative z-10 grid lg:grid-cols-[1.1fr,0.9fr] gap-12 items-center">
        
        {/* Left Column */}
        <div className="flex flex-col items-start gap-8 z-20 pt-10">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-[#DD0031]/30 bg-[#DD0031]/10 backdrop-blur-md shadow-[0_0_20px_rgba(221,0,49,0.15)]">
            <Hexagon className="w-4 h-4 text-[#DD0031] fill-[#DD0031]/20" />
            <span className="text-[#ff4772] text-xs font-bold tracking-widest uppercase">Enterprise Web Apps</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.05] tracking-tight text-white">
            Structured for <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DD0031] via-rose-500 to-pink-500">Massive Scale.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 max-w-[500px] leading-relaxed font-light">
            When standard libraries crumble under enterprise complexity, Angular thrives. We build heavily structured, strongly-typed, and highly performant web applications using modern Angular and RxJS.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-2">
            <Link href="#contact" className="group relative px-8 py-4 bg-[#DD0031] text-white font-bold rounded-full overflow-hidden transition-all hover:scale-105 hover:bg-[#b80029] shadow-[0_0_30px_rgba(221,0,49,0.3)]">
               Start Your Project
            </Link>
            <button className="flex items-center gap-2 px-8 py-4 rounded-full font-bold border border-white/20 text-white hover:bg-white/5 transition-colors">
               Explore Architecture <ArrowRight className="w-4 h-4 text-[#DD0031]" />
            </button>
          </div>
          
          <div className="flex items-center gap-8 mt-8 pt-6 border-t border-white/10 w-full mb-10 lg:mb-0">
            <div>
              <div className="text-3xl font-black text-white">100<span className="text-[#DD0031]">%</span></div>
              <div className="text-xs text-gray-500 font-medium uppercase tracking-wider mt-1">TypeScript Strict</div>
            </div>
            <div>
              <div className="text-3xl font-black text-white">AOT</div>
              <div className="text-xs text-gray-500 font-medium uppercase tracking-wider mt-1">Compiled Delivery</div>
            </div>
          </div>
        </div>

        {/* Right Column / Abstract Angular IDE & Component Tree */}
        <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-auto lg:h-[650px] perspective-[1200px] flex justify-center items-center">
           <div className="relative w-full max-w-[480px] h-[550px] transform rotate-y-[10deg] rotate-x-6 hover:rotate-y-0 hover:rotate-x-0 transition-transform duration-700">
               
               {/* Main IDE Window */}
               <div className="absolute top-[5%] left-0 w-full bg-[#1e1e1e] border border-white/10 rounded-2xl overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.8)] z-20 hover:-translate-y-2 transition-transform cursor-default">
                  
                  {/* Window Header */}
                  <div className="h-10 bg-[#2d2d2d] flex items-center px-4 justify-between select-none">
                     <div className="flex items-center gap-2">
                        <TerminalSquare className="w-4 h-4 text-[#DD0031]"/>
                        <span className="text-[10px] text-gray-400 font-mono tracking-wider">app.component.ts - VS Code</span>
                     </div>
                     <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></div>
                     </div>
                  </div>
                  
                  {/* Editor Content */}
                  <div className="p-6 font-mono text-[11px] md:text-[13px] leading-relaxed text-gray-300 relative overflow-hidden bg-[#1e1e1e]">
                     <div className="absolute left-0 top-0 bottom-0 w-8 bg-[#252526] border-r border-[#333] flex flex-col items-center py-6 text-[#858585] select-none">
                        <span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span>
                     </div>
                     <div className="pl-6">
                        <span className="text-[#C586C0]">import</span> {`{ `}<span className="text-[#4EC9B0]">Component</span>, <span className="text-[#4EC9B0]">inject</span>{` }`} <span className="text-[#C586C0]">from</span> <span className="text-[#CE9178]">'@angular/core'</span>;<br/>
                        <span className="text-[#C586C0]">import</span> {`{ `}<span className="text-[#4EC9B0]">DataService</span>{` }`} <span className="text-[#C586C0]">from</span> <span className="text-[#CE9178]">'./core/data.service'</span>;<br/>
                        <br/>
                        <span className="text-[#DCDCAA]">@Component</span>{`({`}<br/>
                        &nbsp;&nbsp;<span className="text-[#9CDCFE]">selector</span>: <span className="text-[#CE9178]">'app-enterprise-root'</span>,<br/>
                        &nbsp;&nbsp;<span className="text-[#9CDCFE]">standalone</span>: <span className="text-[#569CD6]">true</span>,<br/>
                        &nbsp;&nbsp;<span className="text-[#9CDCFE]">template</span>: <span className="text-[#CE9178]">\`&lt;system-dashboard [data]="stream$ | async" /&gt;\`</span><br/>
                        {`})`}<br/>
                        <span className="text-[#C586C0]">export class</span> <span className="text-[#4EC9B0]">AppComponent</span> {`{`}<br/>
                        &nbsp;&nbsp;<span className="text-[#569CD6]">private readonly</span> <span className="text-[#9CDCFE]">api</span> = <span className="text-[#DCDCAA]">inject</span>(<span className="text-[#4EC9B0]">DataService</span>);<br/>
                        &nbsp;&nbsp;<span className="text-[#9CDCFE]">stream$</span> = <span className="text-[#569CD6]">this</span>.<span className="text-[#9CDCFE]">api</span>.<span className="text-[#DCDCAA]">connectStream</span>();<br/>
                        {`}`}
                     </div>
                  </div>
               </div>

               {/* Dependency Injection / RxJS Node */}
               <div className="absolute top-[65%] right-[-15%] bg-[#0f0f11] border border-blue-500/30 p-4 rounded-2xl shadow-[0_20px_50px_rgba(59,130,246,0.15)] z-40 transform hover:scale-105 transition-transform flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl border border-blue-500/50 bg-blue-500/10 flex items-center justify-center">
                     <Workflow className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                     <span className="block text-xs font-bold text-white uppercase tracking-widest">RxJS State Stream</span>
                     <span className="block text-[10px] text-gray-400 font-mono mt-1">concatMap(data =&gt; render)</span>
                  </div>
               </div>

               {/* Angular Logo Badge */}
               <div className="absolute top-[15%] right-[-5%] w-20 h-20 bg-white shadow-[0_10px_40px_rgba(221,0,49,0.3)] z-50 rounded-2xl transform rotate-12 hover:rotate-0 transition-transform flex items-center justify-center p-3">
                  <svg viewBox="0 0 250 250" xmlns="http://www.w3.org/2000/svg">
                     <path d="M125 30L31.9 63.2l14.2 123.1L125 230l78.9-43.7 14.2-123.1z" fill="#dd0031"/>
                     <path d="M125 30v200l78.9-43.7 14.2-123.1z" fill="#c3002f"/>
                     <path d="M125 52.1l-66.8 143h21.9l13.8-31.5H156l13.8 31.5h21.9z" fill="#fff"/>
                     <path d="M125 52.1v96.8h31.1z" fill="#eee"/>
                  </svg>
               </div>

           </div>
        </div>
      </div>
    </section>
  );
}
