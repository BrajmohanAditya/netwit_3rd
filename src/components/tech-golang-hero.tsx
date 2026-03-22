"use client";

import { ArrowRight, Server, Network, Terminal } from "lucide-react";
import Link from "next/link";

export function GolangHero() {
  return (
    <section className="relative w-full min-h-[110vh] bg-[#0a0f12] text-white flex items-center overflow-hidden pt-20 font-sans">
      {/* Go Cyan & Docker Blue Gradients */}
      <div className="absolute inset-0 z-0">
         <div className="absolute top-[0%] left-[10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-br from-[#00ADD8]/20 via-[#10b981]/10 to-transparent blur-[120px] pointer-events-none"></div>
         <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-tl from-[#0ea5e9]/15 via-[#00ADD8]/20 to-transparent blur-[130px] pointer-events-none"></div>
      </div>
      
      {/* Cloud Native Grid */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(rgba(0,173,216,0.05)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)] pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto w-full px-6 relative z-10 grid lg:grid-cols-[1.1fr,0.9fr] gap-12 items-center">
        
        {/* Left Column */}
        <div className="flex flex-col items-start gap-8 z-20 pt-10">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-[#00ADD8]/30 bg-[#00ADD8]/10 backdrop-blur-xl shadow-lg">
            <Network className="w-4 h-4 text-[#00ADD8]" />
            <span className="text-[#00ADD8] text-xs font-semibold tracking-widest uppercase">Cloud Native Microservices</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.05] tracking-tight text-white shadow-sm">
            Limitless <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ADD8] via-[#0ea5e9] to-[#10b981] font-extrabold tracking-tighter">Concurrency.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 max-w-[480px] leading-relaxed font-light">
            We architect brutally fast, memory-efficient backend systems using Go (Golang). From high-throughput distributed gRPC networks to massively parallel WebSocket servers, we harness the metal.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-2">
            <Link href="#contact" className="group relative px-8 py-4 bg-[#00ADD8] text-[#0a0f12] font-bold rounded-full overflow-hidden transition-all hover:scale-105 shadow-[0_0_40px_rgba(0,173,216,0.3)] hover:bg-[#0091ba]">
               Deploy Go Engineers
            </Link>
            <button className="flex items-center gap-2 px-8 py-4 rounded-full font-bold border border-white/20 text-white hover:bg-white/5 transition-colors backdrop-blur-md">
               Audit Goroutines <ArrowRight className="w-4 h-4 text-[#00ADD8]" />
            </button>
          </div>
          
          <div className="flex items-center gap-8 mt-8 pt-6 border-t border-white/10 w-full mb-10 lg:mb-0">
            <div>
              <div className="text-3xl font-bold text-white tracking-tighter">gRPC<span className="text-slate-500 text-2xl"></span></div>
              <div className="text-xs text-slate-500 font-medium uppercase tracking-wider mt-1">Protocol Buffers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white tracking-tighter">sub-ms<span className="text-slate-500 text-2xl"></span></div>
              <div className="text-xs text-slate-500 font-medium uppercase tracking-wider mt-1">Compile Velocities</div>
            </div>
          </div>
        </div>

        {/* Right Column / Abstract VScode Go Editor */}
        <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-auto lg:h-[650px] perspective-[1400px] flex justify-center items-center">
           <div className="relative w-full max-w-[480px] h-[550px] transform rotate-y-[-10deg] rotate-x-5 hover:rotate-y-0 hover:rotate-x-0 transition-transform duration-1000 ease-out">
               
               {/* Translucent Editor Window */}
               <div className="absolute top-[10%] left-[0%] w-full h-[85%] bg-[#0d1318]/90 backdrop-blur-3xl border border-[#00ADD8]/20 rounded-2xl shadow-[0_40px_100px_rgba(0,0,0,0.9)] z-20 hover:-translate-y-2 transition-transform cursor-default relative overflow-hidden flex flex-col">
                  
                  {/* IDE Header */}
                  <div className="h-10 bg-[#06090c] border-b border-[#00ADD8]/20 flex items-center px-4 justify-between backdrop-blur-md flex-shrink-0">
                     <div className="flex gap-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                     </div>
                     <span className="text-[10px] text-slate-400 font-medium flex items-center gap-2 font-mono">
                        worker_pool.go
                     </span>
                     <div className="w-10"></div>
                  </div>
                  
                  {/* Go Code Content */}
                  <div className="p-6 font-mono text-[11px] leading-[1.8] text-slate-300 flex-1">
                     <span className="text-[#C586C0]">package</span> main<br/>
                     <br/>
                     <span className="text-[#C586C0]">import</span> (<br/>
                     &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#CE9178]">"fmt"</span><br/>
                     &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#CE9178]">"sync"</span><br/>
                     )<br/>
                     <br/>
                     <span className="text-[#569CD6]">func</span> <span className="text-[#DCDCAA]">Worker</span>(id <span className="text-[#4EC9B0]">int</span>, jobs &lt;-<span className="text-[#569CD6]">chan</span> <span className="text-[#4EC9B0]">int</span>, results <span className="text-[#569CD6]">chan</span>&lt;- <span className="text-[#4EC9B0]">int</span>, wg *sync.<span className="text-[#4EC9B0]">WaitGroup</span>) {"{"}<br/>
                     &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#C586C0]">defer</span> wg.<span className="text-[#DCDCAA]">Done</span>()<br/>
                     &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#569CD6]">for</span> j := <span className="text-[#569CD6]">range</span> jobs {"{"}<br/>
                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;fmt.<span className="text-[#DCDCAA]">Printf</span>(<span className="text-[#CE9178]">"worker %d processing job %d\n"</span>, id, j)<br/>
                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;results &lt;- j * <span className="text-[#B5CEA8]">2</span><br/>
                     &nbsp;&nbsp;&nbsp;&nbsp;{"}"}<br/>
                     {"}"}<br/>
                     <br/>
                     <span className="text-[#569CD6]">func</span> <span className="text-[#DCDCAA]">main</span>() {"{"}<br/>
                     &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#569CD6]">const</span> numJobs = <span className="text-[#B5CEA8]">100</span><br/>
                     &nbsp;&nbsp;&nbsp;&nbsp;jobs := <span className="text-[#DCDCAA]">make</span>(<span className="text-[#569CD6]">chan</span> <span className="text-[#4EC9B0]">int</span>, numJobs)<br/>
                     &nbsp;&nbsp;&nbsp;&nbsp;results := <span className="text-[#DCDCAA]">make</span>(<span className="text-[#569CD6]">chan</span> <span className="text-[#4EC9B0]">int</span>, numJobs)<br/>
                     &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#569CD6]">var</span> wg sync.<span className="text-[#4EC9B0]">WaitGroup</span><br/>
                     <br/>
                     &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#6A9955]">// Spawn strictly allocated goroutines</span><br/>
                     &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#569CD6]">for</span> w := <span className="text-[#B5CEA8]">1</span>; w &lt;= <span className="text-[#B5CEA8]">10</span>; w++ {"{"}<br/>
                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;wg.<span className="text-[#DCDCAA]">Add</span>(<span className="text-[#B5CEA8]">1</span>)<br/>
                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#C586C0]">go</span> <span className="text-[#DCDCAA]">Worker</span>(w, jobs, results, &amp;wg)<br/>
                     &nbsp;&nbsp;&nbsp;&nbsp;{"}"}<br/>
                  </div>
               </div>

               {/* Simulated Concurrency Node */}
               <div className="absolute top-[65%] -left-[15%] bg-[#0d1318] border border-[#00ADD8]/40 p-5 rounded-2xl shadow-[0_20px_50px_rgba(0,173,216,0.15)] z-40 transform hover:scale-105 transition-transform flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-[#00ADD8]/10 flex items-center justify-center border border-[#00ADD8]/30">
                     <Terminal className="w-6 h-6 text-[#00ADD8]" />
                  </div>
                  <div>
                     <span className="block text-sm font-bold text-white tracking-tight">Channels Active</span>
                     <span className="block text-[10px] text-[#00ADD8] font-medium mt-0.5">100,000 Goroutines Running</span>
                  </div>
               </div>

               {/* Go Abstract Mascot/Node */}
               <div className="absolute -top-10 -right-16 opacity-[0.05] z-0 animate-[pulse_8s_linear_infinite] grayscale">
                  <Server className="w-64 h-64" />
               </div>

           </div>
        </div>
      </div>
    </section>
  );
}
