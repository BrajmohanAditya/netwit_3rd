"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Bot, Cpu, Globe, Sparkles, Zap, ShieldCheck, Activity, Database } from "lucide-react";

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
    <section className="relative min-h-screen flex items-center bg-[#020617] pt-[80px] pb-16 px-6 overflow-hidden font-sans">

      {/* Background glow orbs */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-[120px]" />
        <div className="absolute bottom-[-5%] right-[-5%] h-[400px] w-[400px] rounded-full bg-indigo-600/20 blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,0.07),transparent_70%)]" />
      </div>

      {/* Dot grid */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(rgba(96,165,250,0.15)_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_30%,transparent_100%)] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto w-full relative z-10 grid lg:grid-cols-[1.15fr_0.85fr] gap-12 xl:gap-20 items-center">

        {/* ── Left Column ── */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="flex flex-col items-start text-left space-y-8"
        >
          {/* Badge */}
          <motion.div variants={fadeSlideIn} transition={{ duration: 0.5 }}>
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-blue-500/40 bg-blue-500/10 backdrop-blur-xl">
              <Bot className="w-4 h-4 text-blue-400" />
              <span className="text-blue-400 text-xs font-bold tracking-[0.25em] uppercase">The AI-First Engineering Protocol</span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeSlideIn}
            transition={{ duration: 0.55 }}
            className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight text-white"
          >
            Engineering
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-sky-400">
              Digital Capital.
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            variants={fadeSlideIn}
            transition={{ duration: 0.55 }}
            className="text-base md:text-lg text-slate-300 max-w-[540px] leading-relaxed border-l-2 border-blue-500/50 pl-6"
          >
            Netwit is the global steward for technical excellence. We build high-fidelity AI ecosystems, secure infrastructures, and scalable talent registries for the world&apos;s most ambitious enterprises.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeSlideIn}
            transition={{ duration: 0.55 }}
            className="flex flex-wrap items-center gap-4"
          >
            <Link
              href="#contact"
              className="px-8 py-4 bg-blue-600 text-white font-bold rounded-full transition-all hover:scale-105 hover:bg-blue-500 shadow-[0_10px_40px_rgba(37,99,235,0.45)] uppercase tracking-wide text-sm"
            >
              Initialize Roadmap
            </Link>
            <Link
              href="#services"
              className="flex items-center gap-2 px-8 py-4 rounded-full font-bold border border-white/20 text-white hover:bg-white/10 hover:border-white/40 transition-all text-sm uppercase tracking-wide group"
            >
              Explore Services <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            variants={fadeSlideIn}
            transition={{ duration: 0.55 }}
            className="flex flex-wrap items-center gap-8 pt-6 border-t border-white/10 w-full"
          >
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 uppercase tracking-widest">
              <ShieldCheck className="w-4 h-4 text-blue-400" /> Institutional Security
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 uppercase tracking-widest">
              <Globe className="w-4 h-4 text-indigo-400" /> Global Capacity
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 uppercase tracking-widest">
              <Sparkles className="w-4 h-4 text-sky-400" /> AI-Augmented
            </div>
          </motion.div>
        </motion.div>

        {/* ── Right Column: Floating Card ── */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hidden lg:flex relative w-full justify-center items-center"
        >
          <div className="relative w-full max-w-[420px]">
            {/* Main card */}
            <div className="relative bg-white/[0.04] backdrop-blur-2xl border border-blue-500/25 rounded-[3rem] shadow-[0_40px_120px_rgba(0,0,0,0.5)] p-10 group overflow-hidden">
              {/* Hover glow */}
              <div className="absolute top-0 right-0 w-56 h-56 bg-blue-600/10 blur-[80px] rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              {/* Header row */}
              <div className="flex justify-between items-start mb-10">
                <div className="w-14 h-14 rounded-2xl bg-blue-600/15 border border-blue-500/30 flex items-center justify-center group-hover:bg-blue-600 transition-all duration-300">
                  <Cpu className="w-7 h-7 text-blue-400 group-hover:text-white transition-colors" />
                </div>
                <span className="text-[10px] font-bold text-blue-400 bg-blue-600/10 px-4 py-1.5 rounded-full uppercase tracking-[0.25em] border border-blue-500/20">
                  PROTOCOL_0017
                </span>
              </div>

              {/* Content */}
              <div className="space-y-8 relative z-10">
                <div className="text-[11px] text-slate-500 font-mono uppercase tracking-[0.35em]">Core // ENGINE.NEURAL_AUTO</div>

                <h2 className="text-3xl font-black text-white leading-tight tracking-tight">
                  Institutional Grade.<br />
                  <span className="text-blue-400">Architectural Velocity.</span>
                </h2>

                <div className="flex items-center gap-4">
                  <div className="flex-1 bg-white/5 p-5 rounded-2xl text-center border border-white/10 group-hover:border-blue-500/20 transition-colors">
                    <span className="block text-[9px] text-slate-500 uppercase tracking-widest mb-1.5">Build Integrity</span>
                    <span className="text-xl font-black text-white">100%</span>
                  </div>
                  <div className="flex-1 bg-white/5 p-5 rounded-2xl text-center border border-white/10 group-hover:border-blue-500/20 transition-colors">
                    <span className="block text-[9px] text-slate-500 uppercase tracking-widest mb-1.5">Global Scale</span>
                    <span className="text-xl font-black text-blue-400">2000+</span>
                  </div>
                </div>
              </div>

              {/* Footer row */}
              <div className="mt-8 flex items-center justify-between pt-8 border-t border-white/10">
                <div className="flex items-center gap-3">
                  <Activity className="w-4 h-4 text-blue-500 animate-pulse" />
                  <span className="text-[10px] text-slate-400 font-semibold tracking-widest uppercase">Node Status: Verified</span>
                </div>
                <Database className="w-5 h-5 text-blue-500/40" />
              </div>
            </div>

            {/* Floating zap badge */}
            <div className="absolute -top-6 -right-6 w-16 h-16 bg-blue-600 rounded-2xl shadow-[0_10px_40px_rgba(37,99,235,0.6)] flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
              <Zap className="w-7 h-7 text-white fill-white" />
            </div>

            {/* Subtle spinning globe behind card */}
            <div className="absolute -top-12 -left-12 opacity-[0.025] animate-[spin_90s_linear_infinite] grayscale pointer-events-none">
              <Globe className="w-[400px] h-[400px]" />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
