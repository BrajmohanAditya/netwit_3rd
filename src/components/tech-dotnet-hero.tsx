"use client";

import { ArrowRight, Box, Cloud, Server } from "lucide-react";
import Link from "next/link";

export function DotnetHero() {
  return (
    <section className="relative w-full min-h-[110vh] bg-[#090b10] text-white flex items-center overflow-hidden pt-20 font-sans">
      {/* .NET Purple & Azure Blue Gradients */}
      <div className="absolute inset-0 z-0">
         <div className="absolute top-[0%] left-[10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-br from-[#5C2D91]/20 via-[#402066]/10 to-transparent blur-[120px] pointer-events-none"></div>
         <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-tl from-[#0078D4]/15 via-[#5C2D91]/20 to-transparent blur-[130px] pointer-events-none"></div>
      </div>
      
      {/* Enterprise Grid */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(rgba(0,120,212,0.05)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)] pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto w-full px-6 relative z-10 grid lg:grid-cols-[1.1fr,0.9fr] gap-12 items-center">
        
        {/* Left Column */}
        <div className="flex flex-col items-start gap-8 z-20 pt-10">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-[#5C2D91]/30 bg-[#5C2D91]/10 backdrop-blur-xl shadow-lg">
            <Server className="w-4 h-4 text-[#5C2D91]" />
            <span className="text-[#967ce2] text-xs font-semibold tracking-widest uppercase">Microsoft Enterprise Stack</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.05] tracking-tight text-white shadow-sm">
            Secure. <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8140db] via-[#5C2D91] to-[#0078D4] font-extrabold tracking-tighter">Scalable.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 max-w-[480px] leading-relaxed font-light">
            We architect deeply performant, cross-platform enterprise backends utilizing C# and ASP.NET Core. Tightly integrated with the Microsoft Azure Cloud for absolute compliance and reliability.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-2">
            <Link href="#contact" className="group relative px-8 py-4 bg-[#5C2D91] text-white font-bold rounded-full overflow-hidden transition-all hover:scale-105 shadow-[0_0_40px_rgba(92,45,145,0.3)] hover:bg-[#402066]">
               Deploy C# Architects
            </Link>
            <button className="flex items-center gap-2 px-8 py-4 rounded-full font-bold border border-white/20 text-white hover:bg-white/5 transition-colors backdrop-blur-md">
               Audit .NET Solutions <ArrowRight className="w-4 h-4 text-[#967ce2]" />
            </button>
          </div>
          
          <div className="flex items-center gap-8 mt-8 pt-6 border-t border-white/10 w-full mb-10 lg:mb-0">
            <div>
              <div className="text-3xl font-bold text-white tracking-tighter">7<span className="text-slate-500 text-2xl">M+</span></div>
              <div className="text-xs text-slate-500 font-medium uppercase tracking-wider mt-1">.NET Developers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white tracking-tighter">8.x<span className="text-slate-500 text-2xl"></span></div>
              <div className="text-xs text-slate-500 font-medium uppercase tracking-wider mt-1">LTS Performance</div>
            </div>
          </div>
        </div>

        {/* Right Column / Abstract IDE & Server Logic */}
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
                        Program.cs
                     </span>
                     <div className="w-10"></div>
                  </div>
                  
                  {/* C# Minimal API Code Content */}
                  <div className="p-6 font-mono text-[11px] leading-[1.8] text-[#d4d4d4] flex-1">
                     <span className="text-[#569CD6]">using</span> <span className="text-[#4EC9B0]">Microsoft</span>.<span className="text-[#4EC9B0]">AspNetCore</span>.<span className="text-[#4EC9B0]">Builder</span>;<br/>
                     <span className="text-[#569CD6]">using</span> <span className="text-[#4EC9B0]">Microsoft</span>.<span className="text-[#4EC9B0]">EntityFrameworkCore</span>;<br/>
                     <span className="text-[#569CD6]">using</span> <span className="text-[#4EC9B0]">EnterpriseData</span>.<span className="text-[#4EC9B0]">Models</span>;<br/>
                     <br/>
                     <span className="text-[#569CD6]">var</span> builder = <span className="text-[#4EC9B0]">WebApplication</span>.<span className="text-[#DCDCAA]">CreateBuilder</span>(args);<br/>
                     <br/>
                     <span className="text-[#6A9955]">// Add EF Core DbContext to DI</span><br/>
                     builder.<span className="text-[#4EC9B0]">Services</span>.<span className="text-[#DCDCAA]">AddDbContext</span>&lt;<span className="text-[#4EC9B0]">BankingContext</span>&gt;(options <span className="text-[#569CD6]">=&gt;</span><br/>
                     &nbsp;&nbsp;&nbsp;&nbsp;options.<span className="text-[#DCDCAA]">UseSqlServer</span>(builder.<span className="text-[#4EC9B0]">Configuration</span>.<span className="text-[#DCDCAA]">GetConnectionString</span>(<span className="text-[#CE9178]">"AzureSQL"</span>)));<br/>
                     <br/>
                     <span className="text-[#569CD6]">var</span> app = builder.<span className="text-[#DCDCAA]">Build</span>();<br/>
                     <br/>
                     <span className="text-[#6A9955]">// Minimal API Endpoint</span><br/>
                     app.<span className="text-[#DCDCAA]">MapPost</span>(<span className="text-[#CE9178]">"/api/v1/secure-transfer"</span>, <span className="text-[#569CD6]">async</span> (<span className="text-[#4EC9B0]">Transfer</span> req, <span className="text-[#4EC9B0]">BankingContext</span> db) <span className="text-[#569CD6]">=&gt;</span><br/>
                     {"{"}<br/>
                     &nbsp;&nbsp;&nbsp;&nbsp;db.<span className="text-[#4EC9B0]">Transfers</span>.<span className="text-[#DCDCAA]">Add</span>(req);<br/>
                     &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#C586C0]">await</span> db.<span className="text-[#DCDCAA]">SaveChangesAsync</span>();<br/>
                     &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#C586C0]">return</span> <span className="text-[#4EC9B0]">Results</span>.<span className="text-[#DCDCAA]">Created</span>(<span className="text-[#CE9178]">$"/api/v1/secure-transfer/</span>{"{"}req.<span className="text-[#4EC9B0]">Id</span>{"}"}<span className="text-[#CE9178]">"</span>, req);<br/>
                     {"}"}).<span className="text-[#DCDCAA]">RequireAuthorization</span>();<br/>
                     <br/>
                     app.<span className="text-[#DCDCAA]">Run</span>();<br/>
                  </div>
               </div>

               {/* Simulated Azure Node */}
               <div className="absolute top-[65%] -left-[15%] bg-[#080b12] border border-[#0078D4]/40 p-5 rounded-2xl shadow-[0_20px_50px_rgba(0,120,212,0.15)] z-40 transform hover:scale-105 transition-transform flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-[#0078D4]/10 flex items-center justify-center border border-[#0078D4]/30">
                     <Cloud className="w-6 h-6 text-[#0078D4]" />
                  </div>
                  <div>
                     <span className="block text-sm font-bold text-white tracking-tight">Azure Pipeline</span>
                     <span className="block text-[10px] text-[#0078D4] font-medium mt-0.5">Deployment Successful</span>
                  </div>
               </div>

               {/* .NET Abstract Silhouette */}
               <div className="absolute -top-10 -right-16 opacity-[0.05] z-0 animate-[pulse_8s_linear_infinite] grayscale">
                  <Box className="w-64 h-64" />
               </div>

           </div>
        </div>
      </div>
    </section>
  );
}
