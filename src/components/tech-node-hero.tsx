"use client";

import { ArrowRight, Hexagon, TerminalSquare, Database, Network, Server, Webhook } from "lucide-react";
import Link from "next/link";

export function NodeHero() {
  return (
    <section className="relative w-full min-h-[110vh] bg-[#0d1117] text-white flex items-center overflow-hidden pt-20">
      {/* Node Green / V8 Terminal Gradients */}
      <div className="absolute inset-0 z-0">
         <div className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-bl from-[#339933]/20 via-emerald-800/10 to-transparent blur-[120px] pointer-events-none"></div>
         <div className="absolute bottom-[-10%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-tr from-slate-800/30 via-[#5FA04E]/10 to-transparent blur-[130px] pointer-events-none"></div>
      </div>
      
      {/* Server Rack Grid */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)] pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto w-full px-6 relative z-10 grid lg:grid-cols-[1.1fr,0.9fr] gap-12 items-center">
        
        {/* Left Column */}
        <div className="flex flex-col items-start gap-8 z-20 pt-10">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-[#339933]/30 bg-[#339933]/10 backdrop-blur-md shadow-[0_0_20px_rgba(51,153,51,0.15)]">
            <Server className="w-4 h-4 text-[#5FA04E]" />
            <span className="text-[#5FA04E] text-xs font-bold tracking-widest uppercase">Backend Engineering</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.05] tracking-tight text-white">
            Asynchronously <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5FA04E] to-emerald-400">Scalable.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 max-w-[500px] leading-relaxed font-light">
            When monolithic backends crash under traffic, Node.js scales effortlessly. Build hyper-concurrent APIs, WebSockets for real-time data, and globally distributed microservices using raw V8 engine power.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-2">
            <Link href="#contact" className="group relative px-8 py-4 bg-[#339933] text-white font-bold rounded-full overflow-hidden transition-all hover:scale-105 hover:bg-[#287a28] shadow-[0_0_30px_rgba(51,153,51,0.3)]">
               Deploy Node Architects
            </Link>
            <button className="flex items-center gap-2 px-8 py-4 rounded-full font-bold border border-white/20 text-white hover:bg-white/5 transition-colors">
               Explore Infrastructure <ArrowRight className="w-4 h-4 text-[#5FA04E]" />
            </button>
          </div>
          
          <div className="flex items-center gap-8 mt-8 pt-6 border-t border-white/10 w-full mb-10 lg:mb-0">
            <div>
              <div className="text-3xl font-black text-white">Event<span className="text-[#339933]">-</span>Loop</div>
              <div className="text-xs text-slate-500 font-medium uppercase tracking-wider mt-1">Non-Blocking I/O</div>
            </div>
            <div>
              <div className="text-3xl font-black text-white">10<span className="text-[#339933]">M+</span></div>
              <div className="text-xs text-slate-500 font-medium uppercase tracking-wider mt-1">NPM Packages</div>
            </div>
          </div>
        </div>

        {/* Right Column / Abstract Express.js API & Data Stream */}
        <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-auto lg:h-[650px] perspective-[1200px] flex justify-center items-center">
           <div className="relative w-full max-w-[480px] h-[550px] transform rotate-y-[-10deg] rotate-x-6 hover:rotate-y-0 hover:rotate-x-0 transition-transform duration-700">
               
               {/* Main Terminal Window (.ts / .js) */}
               <div className="absolute top-[10%] left-[0%] w-[110%] md:w-[120%] bg-[#0a0c10] border border-white/10 rounded-2xl overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.8)] z-20 hover:-translate-y-2 transition-transform cursor-default">
                  
                  {/* IDE Header */}
                  <div className="h-10 bg-[#161b22] border-b border-[#30363d] flex items-center px-4 justify-between select-none">
                     <div className="flex items-center gap-2">
                        <TerminalSquare className="w-4 h-4 text-[#5FA04E]"/>
                        <span className="text-[10px] text-slate-400 font-mono tracking-wider">server.ts - Express</span>
                     </div>
                     <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-slate-600/50"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-slate-600/50"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-slate-600/50"></div>
                     </div>
                  </div>
                  
                  {/* API Controller Content */}
                  <div className="p-5 font-mono text-[11px] md:text-[13px] leading-[1.7] text-gray-300 relative overflow-hidden bg-[#0a0c10]">
                     <div className="absolute left-0 top-0 bottom-0 w-8 bg-[#161b22] border-r border-[#30363d] flex flex-col items-center py-5 text-[#8b949e] select-none">
                        <span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span>
                     </div>
                     <div className="pl-6">
                        <span className="text-[#ff7b72]">import</span> <span className="text-[#e6edf3]">express</span> <span className="text-[#ff7b72]">from</span> <span className="text-[#a5d6ff]">'express'</span>;<br/>
                        <span className="text-[#ff7b72]">import</span> {`{ `}<span className="text-[#d2a8ff]">createClient</span>{` }`} <span className="text-[#ff7b72]">from</span> <span className="text-[#a5d6ff]">'@supabase/supabase-js'</span>;<br/>
                        <br/>
                        <span className="text-[#ff7b72]">const</span> <span className="text-[#79c0ff]">app</span> = <span className="text-[#d2a8ff]">express</span>();<br/>
                        <span className="text-[#79c0ff]">app</span>.<span className="text-[#d2a8ff]">use</span>(<span className="text-[#e6edf3]">express</span>.<span className="text-[#d2a8ff]">json</span>());<br/>
                        <br/>
                        <span className="text-[#79c0ff]">app</span>.<span className="text-[#d2a8ff]">post</span>(<span className="text-[#a5d6ff]">'/api/v1/stream'</span>, <span className="text-[#ff7b72]">async</span> (<span className="text-[#e6edf3]">req</span>, <span className="text-[#e6edf3]">res</span>) <span className="text-[#ff7b72]">=&gt;</span> {`{`}<br/>
                        &nbsp;&nbsp;<span className="text-[#ff7b72]">const</span> <span className="text-[#79c0ff]">payload</span> = <span className="text-[#ff7b72]">await</span> <span className="text-[#79c0ff]">Queue</span>.<span className="text-[#d2a8ff]">process</span>(<span className="text-[#e6edf3]">req.body</span>);<br/>
                        &nbsp;&nbsp;<span className="text-[#ff7b72]">return</span> <span className="text-[#e6edf3]">res</span>.<span className="text-[#d2a8ff]">status</span>(<span className="text-[#79c0ff]">202</span>).<span className="text-[#d2a8ff]">json</span>({`{ `}<span className="text-[#79c0ff]">queued</span>: <span className="text-[#79c0ff]">true</span>{` }`});<br/>
                        {`});`}
                     </div>
                  </div>
               </div>

               {/* WebSocket Connection Box */}
               <div className="absolute top-[45%] -right-[15%] bg-[#111827] border border-[#339933]/30 p-3 rounded-2xl shadow-[0_20px_50px_rgba(51,153,51,0.15)] z-40 transform hover:scale-105 transition-transform flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl border border-[#339933]/50 bg-[#339933]/10 flex items-center justify-center relative overflow-hidden">
                     <Webhook className="w-5 h-5 text-[#5FA04E]" />
                     <div className="absolute inset-0 border-[2px] border-[#339933] rounded-xl animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite] opacity-75"></div>
                  </div>
                  <div>
                     <span className="block text-[10px] font-bold text-white uppercase tracking-widest">WebSocket / wss://</span>
                     <span className="block text-[9px] text-[#5FA04E] font-mono mt-0.5">Connection established</span>
                  </div>
               </div>

               {/* Docker Microservice Tag */}
               <div className="absolute top-[80%] right-[10%] bg-blue-950/80 backdrop-blur-md border border-blue-500/30 py-3 px-4 rounded-xl shadow-[0_20px_40px_rgba(59,130,246,0.2)] z-40 transform rotate-3 hover:scale-105 transition-transform flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center">
                     <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14h-2v-2h2v2zm0-4h-2V7h2v5z"/></svg>
                  </div>
                  <div>
                     <span className="block text-[10px] font-bold text-blue-100 uppercase tracking-widest">Service Container</span>
                     <span className="block text-[8px] text-blue-300">Replica 4/4 Running</span>
                  </div>
               </div>

               {/* Node.js Giant Silhouette */}
               <div className="absolute -top-[10%] -left-[10%] w-48 h-48 opacity-10 z-0 animate-[pulse_8s_ease-in-out_infinite]">
                  <svg viewBox="0 0 118 134" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#339933" d="M116.122 43.1L59.18 10L1.758 43.1v65.6L59.18 141.523l56.942-32.823V43.1zm-8.243 56.124l-48.7 28.083-48.7-28.083v-56.16l48.7-28.082 48.7 28.082v56.16z"></path>
                    <path fill="#339933" d="M59.18 20.354l-39.75 22.92v45.836l39.75 22.92 39.75-22.92V43.274l-39.75-22.92zm32.4 64.632l-32.4 18.68-32.4-18.68v-37.36l32.4-18.68 32.4 18.68v37.36z"></path>
                    <path fill="#5FA04E" d="M83.842 49.336L59.18 35.11l-24.66 14.225v28.452l24.66 14.225 24.66-14.225V49.336z"></path>
                  </svg>
               </div>

           </div>
        </div>
      </div>
    </section>
  );
}
