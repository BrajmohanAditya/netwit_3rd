"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Building, MapPin, Database, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export function RealEstateHero() {
  return (
    <section className="relative min-h-[85vh] w-full flex flex-col justify-center p-6 bg-[#030303] overflow-hidden m-0">
      
      {/* Background Glow & Effects */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Soft neon glows */}
        <div className="absolute top-[-20%] right-[-10%] w-[1000px] h-[1000px] bg-[#00f2fe]/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[800px] h-[800px] bg-[#4facfe]/10 rounded-full blur-[150px]"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PG1hdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPjxnIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAyKSIgc3Ryb2tlLXdpZHRoPSIxIj48cGF0aCBkPSJNMCAwdjQwbTQwLTIwaC00MCIvPjwvZz48L3N2Zz4=')] opacity-50"></div>
      </div>

      <div className="relative z-10 max-w-[1240px] mx-auto w-full grid lg:grid-cols-2 gap-16 items-center mt-12">
        
        {/* Left Side: Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col text-left"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md w-fit mb-8 shadow-[0_0_15px_rgba(0,242,254,0.1)]">
             <Sparkles className="w-4 h-4 text-[#00f2fe]" />
             <span className="text-white text-[12px] font-bold tracking-[0.15em] uppercase">Next-Gen PropTech</span>
          </div>

          <h1 className="text-[48px] md:text-[64px] font-black text-white mb-6 tracking-tight leading-[1.05]">
            Architecting the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f2fe] to-[#4facfe]">Future of Real Estate.</span>
          </h1>
          
          <p className="text-[16px] md:text-[18px] text-gray-400 mb-10 max-w-[540px] leading-[1.7] font-light">
            Power your property portals and MLS infrastructure with specialized specialized tech stacks. We engineer flawless geographic integrations, sub-millisecond data syncs, and lightning-fast property searches.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-5 w-full mb-12">
            <Link href="#contact" className="group relative flex items-center justify-center gap-3 bg-gradient-to-r from-[#00f2fe] to-[#4facfe] text-[#030303] text-[15px] font-bold py-4 px-8 w-full sm:w-auto rounded-full shadow-[0_0_30px_rgba(0,242,254,0.3)] transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(0,242,254,0.5)]">
              Transform Your Platform <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="#services" className="flex items-center justify-center bg-transparent border border-white/20 text-white text-[15px] font-medium py-4 px-8 transition-colors hover:border-white/50 hover:bg-white/5 w-full sm:w-auto rounded-full backdrop-blur-sm">
              Explore Integrations
            </Link>
          </div>

          <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
             <div className="flex items-center gap-3 text-gray-300 text-[14px] font-medium">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                   <Database className="w-4 h-4 text-[#00f2fe]" />
                </div>
                <span>Scalable Data Lakes</span>
             </div>
             <div className="flex items-center gap-3 text-gray-300 text-[14px] font-medium">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                   <MapPin className="w-4 h-4 text-[#4facfe]" />
                </div>
                <span>Sub-50ms Map Queries</span>
             </div>
          </div>
        </motion.div>

        {/* Right Side: Hero Visual */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden lg:block w-full h-[600px]"
        >
           {/* Abstract Phone/Portal Mockup */}
           <div className="absolute top-[45%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[400px] h-[580px] rounded-[24px] border-[1px] border-white/10 shadow-[0_0_80px_rgba(0,242,254,0.15)] z-10 overflow-hidden group">
              
              <Image 
                src="/images/proptech_hero.png" 
                alt="PropTech Futuristic City"
                fill
                className="object-cover transition-transform duration-[20s] group-hover:scale-110"
                priority
              />
              
              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-[#030303]/40 to-transparent"></div>

              {/* Glassmorphic UI elements over image */}
              <div className="absolute bottom-0 left-0 w-full p-8 flex flex-col justify-end">
                 <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-[#00f2fe]/20 border border-[#00f2fe]/40 text-[#00f2fe] text-[10px] font-bold rounded-full uppercase tracking-widest backdrop-blur-md">Featured Listing</span>
                    <span className="text-white text-[16px] font-bold tracking-tight">$4,500,000</span>
                 </div>
                 <h3 className="text-white text-[24px] font-bold leading-tight mb-2 tracking-tight">Cyber-Architectural Penthouse</h3>
                 <div className="flex items-center gap-2 text-gray-400 text-[13px] mb-6">
                    <MapPin className="w-4 h-4 text-[#4facfe]" /> Sector 4, Silicon District
                 </div>
                 
                 {/* Progress Bar Animation */}
                 <div className="w-full h-[3px] bg-white/10 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="h-full bg-gradient-to-r from-[#00f2fe] to-[#4facfe] rounded-full"
                    />
                 </div>
                 <div className="flex justify-between items-center mt-3">
                    <p className="text-[10px] text-gray-400 font-medium uppercase tracking-wider">Syncing Global MLS Data</p>
                    <p className="text-[10px] text-[#00f2fe] font-bold">100%</p>
                 </div>
              </div>
           </div>

           {/* Floating Floating Notification 1 */}
           <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[15%] right-[-8%] bg-[#0f0f12]/80 backdrop-blur-xl border border-white/10 p-5 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.4)] flex items-center gap-4 z-20"
           >
              <div className="w-12 h-12 bg-[#00f2fe]/10 rounded-full flex items-center justify-center border border-[#00f2fe]/20">
                 <Database className="w-5 h-5 text-[#00f2fe]" />
              </div>
              <div>
                 <p className="text-[11px] font-medium text-gray-400 uppercase tracking-wider">Map Query Speed</p>
                 <p className="text-[18px] font-black text-white">42ms</p>
              </div>
           </motion.div>

           {/* Floating Notification 2 */}
           <motion.div 
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-[20%] left-[-15%] bg-[#0f0f12]/80 backdrop-blur-xl border border-white/10 p-5 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.4)] flex flex-col gap-3 z-20 w-[220px]"
           >
              <div className="flex items-center justify-between">
                 <div className="flex items-center gap-2">
                    <div className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00f2fe] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-[#00f2fe]"></span>
                    </div>
                    <span className="text-[12px] font-bold text-white tracking-widest uppercase">Live Pipeline</span>
                 </div>
              </div>
              <div className="h-[2px] bg-white/5 w-full my-1"></div>
              <p className="text-[11px] text-gray-400 font-medium">850,000+ Listings Synchronized Across Active Grids</p>
           </motion.div>
        </motion.div>

      </div>
    </section>
  );
}

