"use client";

import { ArrowRight, Server, Database, Braces } from "lucide-react";
import Link from "next/link";

export function PhpHero() {
  return (
    <section className="relative w-full min-h-[110vh] bg-[#0b0f19] text-white flex items-center overflow-hidden pt-20 font-sans">
      {/* PHP Purple & Laravel Red Gradients */}
      <div className="absolute inset-0 z-0">
         <div className="absolute top-[0%] left-[10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-br from-[#4F5B93]/20 via-[#8892BF]/10 to-transparent blur-[120px] pointer-events-none"></div>
         <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-tl from-[#FF2D20]/15 via-[#4F5B93]/20 to-transparent blur-[130px] pointer-events-none"></div>
      </div>
      
      {/* Backend Grid */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(rgba(136,146,191,0.05)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)] pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto w-full px-6 relative z-10 grid lg:grid-cols-[1.1fr,0.9fr] gap-12 items-center">
        
        {/* Left Column */}
        <div className="flex flex-col items-start gap-8 z-20 pt-10">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-[#4F5B93]/30 bg-[#4F5B93]/10 backdrop-blur-xl shadow-lg">
            <Server className="w-4 h-4 text-[#8892BF]" />
            <span className="text-[#8892BF] text-xs font-semibold tracking-widest uppercase">Web Backbone Engineering</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.05] tracking-tight text-white shadow-sm">
            Powering <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8892BF] to-[#FF2D20] font-extrabold tracking-tighter">The Internet.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 max-w-[480px] leading-relaxed font-light">
            PHP strictly powers 78% of the web. We engineer high-velocity Laravel architectures, massive WordPress ecosystems, and deeply complex Symfony monolithic backends using modern PHP 8+ strict-typing.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-2">
            <Link href="#contact" className="group relative px-8 py-4 bg-[#4F5B93] text-white font-bold rounded-full overflow-hidden transition-all hover:scale-105 shadow-[0_0_40px_rgba(79,91,147,0.3)] hover:bg-[#3d4773]">
               Deploy PHP Architects
            </Link>
            <button className="flex items-center gap-2 px-8 py-4 rounded-full font-bold border border-white/20 text-white hover:bg-white/5 transition-colors backdrop-blur-md">
               Explore Infrastructure <ArrowRight className="w-4 h-4 text-[#8892BF]" />
            </button>
          </div>
          
          <div className="flex items-center gap-8 mt-8 pt-6 border-t border-white/10 w-full mb-10 lg:mb-0">
            <div>
              <div className="text-3xl font-bold text-white tracking-tighter">78<span className="text-slate-500 text-2xl">%</span></div>
              <div className="text-xs text-slate-500 font-medium uppercase tracking-wider mt-1">Global Website Share</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white tracking-tighter">PHP <span className="text-[#8892BF] text-3xl">8.x</span></div>
              <div className="text-xs text-slate-500 font-medium uppercase tracking-wider mt-1">JIT Compiled Speed</div>
            </div>
          </div>
        </div>

        {/* Right Column / Abstract IDE & Laravel ORM */}
        <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-auto lg:h-[650px] perspective-[1400px] flex justify-center items-center">
           <div className="relative w-full max-w-[480px] h-[550px] transform rotate-y-[-10deg] rotate-x-5 hover:rotate-y-0 hover:rotate-x-0 transition-transform duration-1000 ease-out">
               
               {/* Translucent Window */}
               <div className="absolute top-[10%] left-[0%] w-full h-[85%] bg-[#080d17]/90 backdrop-blur-3xl border border-[#4F5B93]/20 rounded-2xl shadow-[0_40px_100px_rgba(0,0,0,0.9)] z-20 hover:-translate-y-2 transition-transform cursor-default relative overflow-hidden">
                  
                  {/* IDE Header */}
                  <div className="h-10 bg-[#050810] border-b border-[#4F5B93]/20 flex items-center px-4 justify-between backdrop-blur-md">
                     <div className="flex gap-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                     </div>
                     <span className="text-[10px] text-[#8892BF] font-medium flex items-center gap-2 font-mono">
                        PaymentController.php
                     </span>
                     <div className="w-10"></div>
                  </div>
                  
                  {/* Laravel / PHP Code Content */}
                  <div className="p-6 font-mono text-[11px] leading-[1.8] text-slate-300">
                     <span className="text-[#FF2D20] font-bold">&lt;?php</span><br/>
                     <br/>
                     <span className="text-[#C586C0]">namespace</span> <span className="text-[#4EC9B0]">App\Http\Controllers</span>;<br/>
                     <br/>
                     <span className="text-[#C586C0]">use</span> <span className="text-[#4EC9B0]">App\Models\Transaction</span>;<br/>
                     <span className="text-[#C586C0]">use</span> <span className="text-[#4EC9B0]">Illuminate\Http\Request</span>;<br/>
                     <br/>
                     <span className="text-[#569CD6]">class</span> <span className="text-[#4EC9B0]">PaymentController</span> <span className="text-[#569CD6]">extends</span> <span className="text-[#4EC9B0]">Controller</span><br/>
                     {"{"}<br/>
                     &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#569CD6]">public function</span> <span className="text-[#DCDCAA]">process</span>(<span className="text-[#4EC9B0]">Request</span> <span className="text-[#9CDCFE]">$request</span>): <span className="text-[#4EC9B0]">JsonResponse</span><br/>
                     &nbsp;&nbsp;&nbsp;&nbsp;{"{"}<br/>
                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#9CDCFE]">$tx</span> = <span className="text-[#4EC9B0]">Transaction</span>::<span className="text-[#DCDCAA]">create</span>([<br/>
                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#CE9178]">'user_id'</span> =&gt; <span className="text-[#9CDCFE]">$request</span>-&gt;<span className="text-[#9CDCFE]">user</span>()-&gt;<span className="text-[#9CDCFE]">id</span>(),<br/>
                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#CE9178]">'amount'</span>  =&gt; <span className="text-[#9CDCFE]">$request</span>-&gt;<span className="text-[#9CDCFE]">amount</span>,<br/>
                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#CE9178]">'status'</span>  =&gt; <span className="text-[#CE9178]">'pending'</span><br/>
                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;]);<br/>
                     <br/>
                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#C586C0]">return</span> <span className="text-[#DCDCAA]">response</span>()-&gt;<span className="text-[#DCDCAA]">json</span>([<br/>
                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#CE9178]">'secure_id'</span> =&gt; <span className="text-[#9CDCFE]">$tx</span>-&gt;<span className="text-[#9CDCFE]">uuid</span><br/>
                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;], <span className="text-[#B5CEA8]">201</span>);<br/>
                     &nbsp;&nbsp;&nbsp;&nbsp;{"}"}<br/>
                     {"}"}<br/>
                  </div>
               </div>

               {/* Active Eloquent Badge */}
               <div className="absolute top-[70%] -left-[15%] bg-[#080d17] border border-[#FF2D20]/40 p-5 rounded-2xl shadow-[0_20px_50px_rgba(255,45,32,0.15)] z-40 transform hover:scale-105 transition-transform flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-[#FF2D20]/10 flex items-center justify-center border border-[#FF2D20]/30">
                     <Database className="w-6 h-6 text-[#FF2D20]" />
                  </div>
                  <div>
                     <span className="block text-sm font-bold text-white tracking-tight">Eloquent ORM</span>
                     <span className="block text-[10px] text-slate-400 font-medium mt-0.5">Active Record Insert</span>
                  </div>
               </div>

               {/* PHP Logo Silhouette */}
               <div className="absolute -top-10 -right-16 opacity-[0.03] z-0 animate-[pulse_8s_linear_infinite] grayscale">
                  <Braces className="w-64 h-64" />
               </div>

           </div>
        </div>
      </div>
    </section>
  );
}
