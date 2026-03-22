"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Bot, Cpu, Globe, Layers, Lock, Sparkles, Zap, ShieldCheck, Activity, Database } from "lucide-react";

const fadeSlideIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-[#020617] pt-[120px] pb-24 px-6 overflow-hidden font-sans">
      
      {/* High-Fidelity Neural Backdrop */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[10%] left-[-10%] h-[600px] w-[600px] rounded-full bg-blue-600/10 blur-[150px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] h-[500px] w-[500px] rounded-full bg-indigo-600/10 blur-[150px] animate-pulse delay-700" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full w-full bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,0.05),transparent_70%)] pointer-events-none" />
      </div>

      {/* Cyber Signal Grid */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(rgba(37,99,235,0.1)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_20%,transparent_100%)] opacity-40 pointer-events-none"></div>

      <div className="max-w-[1250px] mx-auto w-full relative z-10 grid lg:grid-cols-[1.1fr,0.9fr] gap-16 items-center">
        
        {/* Left Column: Narrative */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="flex flex-col items-start text-left space-y-10"
        >
          <motion.div variants={fadeSlideIn} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-xl shadow-[0_10px_40px_rgba(37,99,235,0.2)]">
               <Bot className="w-5 h-5 text-blue-400" />
               <span className="text-blue-400 text-xs font-black tracking-[0.3em] uppercase italic text-glow_blue">The AI-First Engineering Protocol</span>
            </div>
          </motion.div>

          <motion.h1
            variants={fadeSlideIn}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1] tracking-tighter text-white italic shadow-sm"
          >
            Engineering <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-sky-500 underline decoration-blue-600/30">Digital Capital.</span>
          </motion.h1>

          <motion.p
            variants={fadeSlideIn}
            transition={{ duration: 0.6 }}
            className="text-lg md:text-xl text-slate-400 max-w-[600px] leading-relaxed font-light font-sans italic border-l-2 border-blue-500/30 pl-10"
          >
            Netsmartz is the global steward for technical excellence. We build high-fidelity AI ecosystems, secure infrastructures, and scalable talent registries for the world&apos;s most ambitious enterprises.
          </motion.p>

          <motion.div
            variants={fadeSlideIn}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap items-center gap-6 mt-4"
          >
            <Link
              href="#contact"
              className="group relative px-10 py-5 bg-blue-600 text-white font-black rounded-full overflow-hidden transition-all hover:scale-105 shadow-[0_20px_50px_rgba(37,99,235,0.4)] hover:bg-blue-500 italic uppercase tracking-wider"
            >
              Initialize Roadmap
            </Link>
            <Link
              href="#services"
              className="flex items-center gap-3 px-10 py-5 rounded-full font-black border border-white/10 text-white hover:bg-white/5 transition-all backdrop-blur-md italic uppercase tracking-wider group"
            >
              Explore Services <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Institutional Trust Row */}
          <motion.div 
            variants={fadeSlideIn} 
            transition={{ duration: 0.6 }}
            className="flex flex-wrap items-center gap-10 pt-10 border-t border-white/5 w-full"
          >
             <div className="flex items-center gap-3 text-xs font-bold text-slate-500 uppercase tracking-widest italic group">
                <ShieldCheck className="w-5 h-5 text-blue-500 group-hover:scale-110 transition-transform" /> Institutional Security
             </div>
             <div className="flex items-center gap-3 text-xs font-bold text-slate-500 uppercase tracking-widest italic group">
                <Globe className="w-5 h-5 text-indigo-500 group-hover:scale-110 transition-transform" /> Global Capacity
             </div>
             <div className="flex items-center gap-3 text-xs font-bold text-slate-500 uppercase tracking-widest italic group">
                <Sparkles className="w-5 h-5 text-sky-500 group-hover:scale-110 transition-transform" /> AI-Augmented
             </div>
          </motion.div>
        </motion.div>

        {/* Right Column: High-Fi Abstract Component */}
        <div className="relative w-full aspect-square perspective-[1400px] flex justify-center items-center">
           <div className="relative w-full max-w-[500px] h-[600px] transform rotate-y-[-12deg] rotate-x-6 hover:rotate-y-0 hover:rotate-x-0 transition-transform duration-1000 ease-out cursor-default">
               
               {/* Neural Protocol Card */}
               <div className="absolute inset-0 bg-[#0a0f1d]/60 backdrop-blur-3xl border border-blue-500/20 rounded-[4rem] shadow-[0_60px_150px_rgba(0,0,0,0.6)] z-20 flex flex-col group overflow-hidden p-12">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 blur-[100px] rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  
                  <div className="flex justify-between items-start mb-12">
                     <div className="w-16 h-16 rounded-3xl bg-blue-600/10 border border-blue-600/20 flex items-center justify-center shadow-lg group-hover:bg-blue-600 group-hover:text-white transition-all">
                        <Cpu className="w-8 h-8" />
                     </div>
                     <span className="text-[10px] font-black text-blue-400 bg-blue-600/10 px-5 py-2 rounded-full uppercase tracking-[0.3em] italic border border-blue-500/10">
                        PROTOCOL_0017
                     </span>
                  </div>

                  <div className="space-y-10 flex-1 relative z-10">
                     <div className="text-xs text-slate-500 font-mono uppercase tracking-[0.4em] font-black">Core // ENGINE.NEURAL_AUTO</div>
                     
                     <h2 className="text-4xl font-black text-white leading-[1.1] tracking-tight group-hover:text-glow_blue transition-all italic underline decoration-blue-600/20">
                        Institutional Grade. <br/>Architectural Velocity.
                     </h2>
                     
                     <div className="flex items-center gap-6 mt-12">
                        <div className="flex-1 bg-white/5 p-6 rounded-3xl text-center border border-white/5 group-hover:border-blue-500/20 transition-colors">
                           <span className="block text-[8px] text-slate-500 uppercase tracking-widest italic mb-2">Build Integrity</span>
                           <span className="text-2xl font-black text-white italic">100% Core</span>
                        </div>
                        <div className="flex-1 bg-white/5 p-6 rounded-3xl text-center border border-white/5 group-hover:border-blue-500/20 transition-colors">
                           <span className="block text-[8px] text-slate-500 uppercase tracking-widest italic mb-2">Global Scale</span>
                           <span className="text-2xl font-black text-blue-500 italic">2000+ Biz</span>
                        </div>
                     </div>
                  </div>

                  <div className="mt-auto flex items-center justify-between pt-10 border-t border-white/5 group-hover:border-blue-500/10 transition-colors">
                     <div className="flex items-center gap-4">
                        <Activity className="w-5 h-5 text-blue-500 animate-pulse" />
                        <span className="text-[10px] text-slate-500 font-black tracking-widest uppercase italic group-hover:text-blue-400">Node Status: Verified</span>
                     </div>
                     <Database className="w-6 h-6 text-blue-500/30" />
                  </div>
               </div>

               {/* Abstract Floating Bits */}
               <div className="absolute top-[-40px] right-[-40px] w-24 h-24 bg-blue-600 rounded-3xl shadow-2xl z-30 flex items-center justify-center transform hover:rotate-12 transition-transform cursor-pointer group">
                  <Zap className="w-10 h-10 text-white fill-white group-hover:scale-125 transition-transform" />
               </div>

               {/* Backdrop Blur Ring */}
               <div className="absolute -top-16 -left-16 opacity-[0.03] z-0 animate-[spin_80s_linear_infinite] grayscale pointer-events-none">
                  <Globe className="w-[500px] h-[500px]" />
               </div>

           </div>
        </div>

      </div>

      {/* Floating Indicators Row (Mobile) */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 lg:hidden flex gap-4">
         <div className="w-2 h-2 rounded-full bg-blue-600"></div>
         <div className="w-2 h-2 rounded-full bg-white/10"></div>
         <div className="w-2 h-2 rounded-full bg-white/10"></div>
      </div>

    </section>
  );
}
