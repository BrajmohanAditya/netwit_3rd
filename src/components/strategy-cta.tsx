"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function StrategyCTA() {
  return (
    <section className="relative overflow-hidden bg-[#0c1e2a] py-28 sm:py-36 flex items-center justify-center">
      {/* Mesh Network Background Overlay */}
      <div className="absolute inset-0 opacity-[0.25] pointer-events-none flex items-center justify-center overflow-hidden mix-blend-screen mix-blend-plus-lighter">
        <svg 
          className="w-[120vw] h-[120vh] min-w-[1200px] object-cover" 
          viewBox="0 0 1000 600" 
          fill="none" 
          preserveAspectRatio="xMidYMid slice"
        >
          <g stroke="rgba(255,255,255,0.4)" strokeWidth="0.5">
            {/* Connecting Lines */}
            <path d="M100,100 L300,150 L200,300 Z" />
            <path d="M300,150 L550,100 L400,250 Z" />
            <path d="M550,100 L850,200 L650,300 Z" />
            <path d="M850,200 L950,50 L750,150 Z" />
            <path d="M200,300 L400,250 L350,500 L150,450 Z" />
            <path d="M400,250 L650,300 L550,550 L350,500 Z" />
            <path d="M650,300 L900,400 L750,550 L550,550 Z" />
            <path d="M900,400 L1050,250 L850,200 Z" />
            {/* Additional connecting lines for density */}
            <path d="M400,250 L200,100 L550,100" />
            <path d="M650,300 L950,50" />
            <path d="M350,500 L100,600" />
            <path d="M750,550 L1000,600" />
            <path d="M100,100 L150,450" />
            <path d="M850,200 L1050,250" />
            <path d="M550,550 L750,550" />
            <path d="M200,300 L150,450" />
          </g>
          <g fill="rgba(255,255,255,0.7)">
            {/* Nodes */}
            <circle cx="100" cy="100" r="3" />
            <circle cx="300" cy="150" r="3" />
            <circle cx="200" cy="300" r="3" />
            <circle cx="550" cy="100" r="3" />
            <circle cx="400" cy="250" r="3" />
            <circle cx="850" cy="200" r="3" />
            <circle cx="650" cy="300" r="3" />
            <circle cx="950" cy="50" r="3" />
            <circle cx="750" cy="150" r="3" />
            <circle cx="350" cy="500" r="3" />
            <circle cx="150" cy="450" r="3" />
            <circle cx="550" cy="550" r="3" />
            <circle cx="900" cy="400" r="3" />
            <circle cx="750" cy="550" r="3" />
            <circle cx="1050" cy="250" r="3" />
            <circle cx="200" cy="100" r="3" />
            <circle cx="100" cy="600" r="3" />
            <circle cx="1000" cy="600" r="3" />
          </g>
        </svg>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative z-10 mx-auto max-w-[800px] px-6 text-center flex flex-col items-center"
      >
        <h2 className="text-[28px] sm:text-[34px] md:text-[38px] font-bold text-white tracking-wide mb-10 leading-snug">
          Ready to Embrace an AI-First SaaS Strategy?
        </h2>
        
        <Link
          href="/drive-innovation"
          className="inline-flex items-center justify-center bg-white text-[#0c1e2a] px-8 py-3.5 rounded-[4px] text-[14px] font-bold tracking-wide transition-all hover:bg-gray-100 hover:-translate-y-0.5 shadow-lg active:scale-[0.98]"
        >
          Let's Drive Innovation
        </Link>
      </motion.div>
    </section>
  );
}
