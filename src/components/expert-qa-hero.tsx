"use client";

import { ArrowRight, HelpCircle, MessageSquare, Search, Sparkles, UserCheck, Zap } from "lucide-react";
import Link from "next/link";

export function ExpertQaHero() {
  return (
    <section className="relative w-full min-h-[90vh] bg-[#050a0f] text-white flex items-center overflow-hidden pt-20 font-sans">
      {/* Knowledge Cyan & Solutions Lime Gradients */}
      <div className="absolute inset-0 z-0">
         <div className="absolute top-[0%] left-[10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-br from-[#06b6d4]/15 via-[#0891b2]/10 to-transparent blur-[130px] pointer-events-none"></div>
         <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-tl from-[#84cc16]/10 via-[#06b6d4]/15 to-transparent blur-[150px] pointer-events-none"></div>
      </div>
      
      {/* Dialogue Pattern */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)] pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto w-full px-6 relative z-10 grid lg:grid-cols-[1.1fr,0.9fr] gap-12 items-center">
        
        {/* Left Column */}
        <div className="flex flex-col items-start gap-8 z-20 pt-10">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-[#06b6d4]/30 bg-[#06b6d4]/10 backdrop-blur-xl shadow-lg">
            <Sparkles className="w-4 h-4 text-[#22d3ee]" />
            <span className="text-[#22d3ee] text-xs font-semibold tracking-widest uppercase">Collaborative Engineering Intelligence</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.05] tracking-tight text-white shadow-sm">
            Expert <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#22d3ee] via-[#06b6d4] to-[#84cc16] font-extrabold tracking-tighter">Solved.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 max-w-[500px] leading-relaxed font-light">
            Direct access to our architecture labs. No gatekeeping—just technical answers to your most complex DevOps, Security, and AI integration questions.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-2">
            <Link href="#qa-feed" className="group relative px-8 py-4 bg-[#06b6d4] text-[#050a0f] font-bold rounded-full overflow-hidden transition-all hover:scale-105 shadow-[0_0_40px_rgba(6,182,212,0.3)] hover:bg-[#0891b2]">
               Ask Your Question
            </Link>
            <button className="flex items-center gap-2 px-8 py-4 rounded-full font-bold border border-white/20 text-white hover:bg-white/5 transition-colors backdrop-blur-md">
               Browse Archive <ArrowRight className="w-4 h-4 text-[#22d3ee]" />
            </button>
          </div>
          
          <div className="flex items-center gap-8 mt-8 pt-6 border-t border-white/10 w-full mb-10 lg:mb-0">
            <div>
              <div className="text-3xl font-bold text-white tracking-tighter">100<span className="text-[#22d3ee] text-2xl font-black ml-1">%</span></div>
              <div className="text-xs text-slate-500 font-medium uppercase tracking-wider mt-1">Status: Success Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white tracking-tighter">Live<span className="text-lime-400 text-2xl ml-1">●</span></div>
              <div className="text-xs text-slate-500 font-medium uppercase tracking-wider mt-1">Updates: Technical Desk</div>
            </div>
          </div>
        </div>

        {/* Right Column / Dialogue Abstract */}
        <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-auto lg:h-[650px] perspective-[1400px] flex justify-center items-center">
           <div className="relative w-full max-w-[480px] h-[550px] transform rotate-y-[-10deg] rotate-x-5 hover:rotate-y-0 hover:rotate-x-0 transition-transform duration-1000 ease-out">
               
               {/* Translucent Conversation Card */}
               <div className="absolute top-[10%] left-[0%] w-full h-[85%] bg-slate-900/60 backdrop-blur-3xl border border-white/10 rounded-3xl shadow-[0_40px_100px_rgba(0,0,0,0.8)] z-20 hover:-translate-y-2 transition-transform cursor-default relative overflow-hidden flex flex-col group p-10">
                  
                  <div className="flex justify-between items-start mb-10">
                     <div className="w-12 h-12 rounded-2xl bg-[#06b6d4]/10 border border-[#06b6d4]/20 flex items-center justify-center">
                        <MessageSquare className="w-6 h-6 text-[#22d3ee]" />
                     </div>
                     <span className="text-[10px] font-bold text-[#22d3ee] bg-[#06b6d4]/10 px-3 py-1 rounded-full uppercase tracking-widest border border-[#06b6d4]/10">
                        Technical Q&A
                     </span>
                  </div>

                  <div className="space-y-8 flex-1">
                     <div className="relative">
                        <div className="absolute -left-4 top-1 w-1 h-full bg-[#06b6d4]/30 rounded-full"></div>
                        <h4 className="text-xs text-[#22d3ee] font-black uppercase tracking-widest mb-2">User Inquiry // #2041</h4>
                        <p className="text-sm text-slate-300 font-medium leading-relaxed italic">"How can we achieve zero-downtime Blue/Green deployments on AWS EKS without service meshes like Istio?"</p>
                     </div>
                     
                     <div className="relative pl-6">
                        <div className="absolute left-0 top-1 w-1 h-full bg-[#84cc16]/30 rounded-full"></div>
                        <h4 className="text-xs text-[#84cc16] font-black uppercase tracking-widest mb-2">Expert Synthesis</h4>
                        <p className="text-sm text-slate-400 font-light leading-relaxed">"By leveraging ALB Weighted Target Groups and external-dns, you can shift traffic at the ingress layer directly. We suggest using a Custom Resource Definition..."</p>
                     </div>
                  </div>

                  <div className="mt-auto flex items-center justify-between pt-8 border-t border-white/5">
                     <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#06b6d4] to-[#84cc16] flex items-center justify-center text-white/80">
                           <UserCheck className="w-4 h-4" />
                        </div>
                        <span className="text-[10px] text-slate-500 font-semibold tracking-widest uppercase">Verified Expert Resolution</span>
                     </div>
                  </div>
               </div>

               {/* Active Session Badge */}
               <div className="absolute top-[65%] -right-[15%] bg-[#06b6d4] text-[#050a0f] p-5 rounded-2xl shadow-[0_20px_50px_rgba(6,182,212,0.3)] z-40 transform hover:scale-105 transition-transform flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center border border-white/10">
                     <Zap className="w-6 h-6 fill-[#050a0f] text-[#050a0f]" />
                  </div>
                  <div>
                     <span className="block text-sm font-bold tracking-tight">Rapid Response</span>
                     <span className="block text-[10px] font-bold opacity-80 mt-0.5 uppercase tracking-widest">Avg 4h Resolution</span>
                  </div>
               </div>

               {/* Abstract Backdrop */}
               <div className="absolute -top-10 -left-16 opacity-[0.05] z-0 animate-[pulse_8s_linear_infinite] grayscale">
                  <HelpCircle className="w-64 h-64" />
               </div>

           </div>
        </div>
      </div>
    </section>
  );
}
