"use client";

import { CheckCircle2, Factory, Timer, Heart } from "lucide-react";
import Link from "next/link";

export function RailsBenefits() {
  const points = [
    "Unrivaled minimum viable product (MVP) deployment speeds.",
    "Integrated testing frameworks (RSpec/Capybara) forced by default.",
    "Massive ecosystem of Rubygems capable of importing any complex feature instantly.",
    "Eliminate frontend JavaScript exhaustion by rendering HTML over WebSockets with Hotwire.",
    "Highly readable, beautiful Ruby syntax built specifically for programmer happiness.",
    "Historically proven to scale beautifully (GitHub, Basecamp, Shopify, Stripe)."
  ];

  return (
    <section className="bg-gradient-to-b from-[#0d0708] to-[#050202] py-24 relative overflow-hidden text-white border-t border-[#2b1013] font-sans">
      <div className="absolute right-0 bottom-0 w-[600px] h-[600px] bg-[#CC342D]/10 blur-[150px] pointer-events-none rounded-full"></div>

      <div className="max-w-[1200px] mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
        
        <div className="lg:w-1/2 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight tracking-tight text-white">
            The Ultimate <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-[#CC342D]">Startup Arsenal.</span>
          </h2>
          <p className="text-rose-100/50 text-lg mb-8 leading-relaxed font-light">
            If you want to validate a startup idea, you need to ship. While other frameworks require weeks of configuration just to spin up basic API scaffolding and security protocols, Rails can generate an entire authenticated framework with three CLI commands.
          </p>
          
          <ul className="grid sm:grid-cols-2 gap-4 mb-10">
            {points.map((p, i) => (
               <li key={i} className="flex items-start gap-3 text-sm text-rose-100/70 font-light">
                  <CheckCircle2 className="w-5 h-5 text-[#CC342D] flex-shrink-0 mt-0.5" />
                  <span>{p}</span>
               </li>
            ))}
          </ul>
          
          <Link href="#contact" className="inline-flex items-center justify-center gap-2 bg-[#CC342D] text-white px-8 py-4 rounded-full font-bold transition-all duration-300 hover:scale-105 shadow-[0_0_30px_rgba(204,52,45,0.3)] hover:shadow-[0_0_50px_rgba(204,52,45,0.5)]">
             Spin up a Rails Team
          </Link>
        </div>

        <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10 w-full mt-10 lg:mt-0">
           <div className="bg-[#1a0a0c]/50 border border-[#2b1013] backdrop-blur-xl p-8 rounded-[2rem] hover:bg-[#200d0f] transition-colors flex flex-col justify-center h-[220px] cursor-default group shadow-2xl">
              <Factory className="w-8 h-8 text-[#CC342D] mb-4 group-hover:scale-110 transition-transform" />
              <span className="text-4xl font-bold text-white mb-2 tracking-tighter">10x</span>
              <span className="text-xs text-rose-100/60 tracking-widest uppercase font-semibold">Development Speed</span>
           </div>
           
           <div className="bg-[#1a0a0c]/50 border border-[#2b1013] backdrop-blur-xl p-8 rounded-[2rem] hover:bg-[#200d0f] transition-colors flex flex-col justify-center h-[220px] sm:translate-y-8 cursor-default group shadow-2xl">
              <Timer className="w-8 h-8 text-rose-400 mb-4 group-hover:scale-110 transition-transform" />
              <span className="text-4xl font-bold text-white mb-2 tracking-tighter">MVP</span>
              <span className="text-xs text-rose-100/60 tracking-widest uppercase font-semibold">Immediate Launch</span>
           </div>
           
           <div className="bg-[#1a0a0c]/50 border border-[#2b1013] backdrop-blur-xl p-8 rounded-[2rem] hover:bg-[#200d0f] transition-colors flex flex-col justify-center h-[220px] cursor-default group shadow-2xl">
              <Heart className="w-8 h-8 text-pink-500 mb-4 group-hover:scale-110 transition-transform" />
              <span className="text-4xl font-bold text-white mb-2 tracking-tighter">Matz</span>
              <span className="text-xs text-rose-100/60 tracking-widest uppercase font-semibold">Developer Happiness</span>
           </div>
           
           <div className="bg-gradient-to-br from-[#4a1114] to-[#240608] border border-[#CC342D]/20 p-8 rounded-[2rem] flex flex-col justify-center h-[220px] sm:translate-y-8 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#CC342D]/20 blur-[50px] rounded-full"></div>
              <h4 className="text-xl font-bold mb-2 text-white relative z-10 tracking-tight">Omakase.</h4>
              <p className="text-sm text-rose-200/70 leading-relaxed relative z-10 font-light">Like a curated sushi menu, Rails makes the best framework choices for you, letting you focus entirely on your business logic.</p>
           </div>
        </div>
        
      </div>
    </section>
  );
}
