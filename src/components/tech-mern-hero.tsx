"use client";

import { ArrowRight, Component, Database, Server } from "lucide-react";
import Link from "next/link";

export function MernHero() {
  return (
    <section className="relative w-full min-h-[110vh] bg-[#05080a] text-white flex items-center overflow-hidden pt-20 font-sans">
      {/* React Cyan & Node/Mongo Green Gradients */}
      <div className="absolute inset-0 z-0">
         <div className="absolute top-[0%] left-[10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-br from-[#61DAFB]/20 via-[#4498b0]/10 to-transparent blur-[120px] pointer-events-none"></div>
         <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-tl from-[#47A248]/15 via-[#61DAFB]/20 to-transparent blur-[130px] pointer-events-none"></div>
      </div>
      
      {/* Full-Stack Matrix Grid */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(rgba(97,218,251,0.05)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)] pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto w-full px-6 relative z-10 grid lg:grid-cols-[1.1fr,0.9fr] gap-12 items-center">
        
        {/* Left Column */}
        <div className="flex flex-col items-start gap-8 z-20 pt-10">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-[#61DAFB]/30 bg-[#61DAFB]/10 backdrop-blur-xl shadow-lg">
            <Component className="w-4 h-4 text-[#61DAFB]" />
            <span className="text-[#61DAFB] text-xs font-semibold tracking-widest uppercase">Pure JavaScript Architecture</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.05] tracking-tight text-white shadow-sm">
            Isomorphic <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#61DAFB] via-[#85dffd] to-[#47A248] font-extrabold tracking-tighter">Stack.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 max-w-[480px] leading-relaxed font-light">
            We abolish context-switching by utilizing absolute, full-stack JavaScript. From the MongoDB NoSQL layer to the Node/Express core, culminating in an ultra-fast React Virtual DOM frontend.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-2">
            <Link href="#contact" className="group relative px-8 py-4 bg-[#61DAFB] text-[#05080a] font-bold rounded-full overflow-hidden transition-all hover:scale-105 shadow-[0_0_40px_rgba(97,218,251,0.3)] hover:bg-[#85dffd]">
               Deploy JS Architects
            </Link>
            <button className="flex items-center gap-2 px-8 py-4 rounded-full font-bold border border-white/20 text-white hover:bg-white/5 transition-colors backdrop-blur-md">
               Review MERN Code <ArrowRight className="w-4 h-4 text-[#61DAFB]" />
            </button>
          </div>
          
          <div className="flex items-center gap-8 mt-8 pt-6 border-t border-white/10 w-full mb-10 lg:mb-0">
            <div>
              <div className="text-3xl font-bold text-white tracking-tighter">JSON<span className="text-slate-500 text-2xl"></span></div>
              <div className="text-xs text-slate-500 font-medium uppercase tracking-wider mt-1">Universal Data Type</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white tracking-tighter">NPM<span className="text-slate-500 text-2xl"></span></div>
              <div className="text-xs text-slate-500 font-medium uppercase tracking-wider mt-1">3M+ Dependencies</div>
            </div>
          </div>
        </div>

        {/* Right Column / Abstract MERN Pipeline UI */}
        <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-auto lg:h-[650px] perspective-[1400px] flex justify-center items-center">
           <div className="relative w-full max-w-[480px] h-[550px] transform rotate-y-[-10deg] rotate-x-5 hover:rotate-y-0 hover:rotate-x-0 transition-transform duration-1000 ease-out">
               
               {/* Translucent Pipeline Window */}
               <div className="absolute top-[5%] left-[0%] w-full h-[90%] bg-[#0b1016]/90 backdrop-blur-3xl border border-[#61DAFB]/20 rounded-2xl shadow-[0_40px_100px_rgba(0,0,0,0.9)] z-20 hover:-translate-y-2 transition-transform cursor-default relative overflow-hidden flex flex-col items-center py-10 px-6 justify-between">
                  
                  {/* React Layer */}
                  <div className="w-full bg-[#111821] border border-[#61DAFB]/30 rounded-xl p-4 flex flex-col gap-2">
                     <div className="flex items-center justify-between">
                        <span className="text-[10px] text-[#61DAFB] uppercase tracking-widest font-semibold flex items-center gap-2">
                           <Component className="w-3 h-3" /> React Frontend
                        </span>
                        <div className="w-2 h-2 rounded-full bg-[#61DAFB] animate-pulse"></div>
                     </div>
                     <span className="text-[11px] font-mono text-slate-400">const [state, dispatch] = useReducer()</span>
                  </div>

                  {/* Flow Arrow */}
                  <div className="h-8 w-px bg-gradient-to-b from-[#61DAFB] to-[#afaaaa]"></div>

                  {/* Express/Node Layer */}
                  <div className="w-full bg-[#111821] border border-[#afaaaa]/30 rounded-xl p-4 flex flex-col gap-2">
                     <div className="flex items-center justify-between">
                        <span className="text-[10px] text-slate-300 uppercase tracking-widest font-semibold flex items-center gap-2">
                           <Server className="w-3 h-3" /> Node / Express Core
                        </span>
                        <div className="w-2 h-2 rounded-full bg-[#afaaaa] animate-pulse"></div>
                     </div>
                     <span className="text-[11px] font-mono text-slate-400">app.post("/api/auth", authenticateJWT)</span>
                  </div>

                  {/* Flow Arrow */}
                  <div className="h-8 w-px bg-gradient-to-b from-[#afaaaa] to-[#47A248]"></div>

                  {/* MongoDB Layer */}
                  <div className="w-full bg-[#111821] border border-[#47A248]/30 rounded-xl p-4 flex flex-col gap-2">
                     <div className="flex items-center justify-between">
                        <span className="text-[10px] text-[#47A248] uppercase tracking-widest font-semibold flex items-center gap-2">
                           <Database className="w-3 h-3" /> MongoDB Atlas
                        </span>
                        <div className="w-2 h-2 rounded-full bg-[#47A248] animate-pulse"></div>
                     </div>
                     <span className="text-[11px] font-mono text-slate-400">User.findOneAndUpdate(&#123; _id: req.user &#125;)</span>
                  </div>
                  
               </div>

               {/* REST Badge */}
               <div className="absolute top-[45%] -right-[15%] bg-[#0a0f14] border border-[#61DAFB]/40 p-5 rounded-2xl shadow-[0_20px_50px_rgba(97,218,251,0.15)] z-40 transform hover:scale-105 transition-transform flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-[#61DAFB]/10 flex items-center justify-center border border-[#61DAFB]/30">
                     <Activity className="w-6 h-6 text-[#61DAFB]" />
                  </div>
                  <div>
                     <span className="block text-sm font-bold text-white tracking-tight">REST Payload</span>
                     <span className="block text-[10px] text-[#61DAFB] font-medium mt-0.5">200 OK / 14ms</span>
                  </div>
               </div>

               {/* React Abstract Box */}
               <div className="absolute -top-10 -left-16 opacity-[0.05] z-0 animate-[spin_30s_linear_infinite] grayscale">
                  <Component className="w-64 h-64" />
               </div>

           </div>
        </div>
      </div>
    </section>
  );
}

function Activity(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  );
}
