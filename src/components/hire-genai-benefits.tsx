"use client";

import { UserCheck, Zap, Rocket, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

export function GenAiBenefits() {
  const points = [
    "Pre-Vetted AI Specialists & Researchers",
    "Deep Expertise in LangChain & LlamaIndex",
    "Enterprise-Grade Data Privacy & Security",
    "Flexible Timezones & Communication",
    "Continuous Learning & Upskilling",
    "Rapid Onboarding in < 48 Hours"
  ];

  return (
    <section className="bg-gradient-to-b from-black to-[#0a0a0f] py-24 relative overflow-hidden text-white border-t border-white/5">
      <div className="absolute right-0 bottom-0 w-1/2 h-full bg-purple-900/10 blur-[150px] pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
        
        <div className="lg:w-1/2 relative z-10">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-8 leading-tight text-white">
            Why Source AI Talent <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-purple-500">From Our Network?</span>
          </h2>
          <p className="text-gray-400 text-lg mb-8 leading-relaxed font-light">
            Finding genuine Generative AI talent is incredibly difficult in today's market. We've built an elite pool of AI engineers who have proven experience deploying production-ready models, not just prototypes.
          </p>
          
          <ul className="grid sm:grid-cols-2 gap-4 mb-10">
            {points.map((p, i) => (
               <li key={i} className="flex items-start gap-3 text-sm text-gray-300 font-medium whitespace-pre-line">
                  <CheckCircle2 className="w-5 h-5 text-fuchsia-400 flex-shrink-0 mt-0.5" />
                  <span>{p}</span>
               </li>
            ))}
          </ul>
          
          <Link href="#contact" className="inline-flex items-center justify-center gap-2 bg-white text-black px-8 py-4 rounded-full font-bold transition-all duration-300 hover:bg-gray-200 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]">
             Start Interviewing
          </Link>
        </div>

        <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10 w-full mt-10 lg:mt-0">
           <div className="bg-[#111116] border border-white/5 p-8 rounded-3xl hover:border-fuchsia-500/30 transition-colors flex flex-col justify-center h-[220px]">
              <UserCheck className="w-8 h-8 text-fuchsia-400 mb-4" />
              <span className="text-4xl font-black text-white mb-2">Top 1%</span>
              <span className="text-xs text-gray-500 tracking-widest uppercase font-bold">Vetted Engineering Talent</span>
           </div>
           
           <div className="bg-[#111116] border border-white/5 p-8 rounded-3xl hover:border-purple-500/30 transition-colors flex flex-col justify-center h-[220px] sm:translate-y-8">
              <Zap className="w-8 h-8 text-purple-400 mb-4" />
              <span className="text-4xl font-black text-white mb-2">2x</span>
              <span className="text-xs text-gray-500 tracking-widest uppercase font-bold">Faster Time-to-Market</span>
           </div>
           
           <div className="bg-[#111116] border border-white/5 p-8 rounded-3xl hover:border-blue-500/30 transition-colors flex flex-col justify-center h-[220px]">
              <Rocket className="w-8 h-8 text-blue-400 mb-4" />
              <span className="text-4xl font-black text-white mb-2">100+</span>
              <span className="text-xs text-gray-500 tracking-widest uppercase font-bold">Successful AI Deployments</span>
           </div>
           
           <div className="bg-gradient-to-br from-fuchsia-500 to-purple-600 p-8 rounded-3xl shadow-[0_20px_40px_rgba(217,70,239,0.2)] flex flex-col justify-center h-[220px] sm:translate-y-8 text-white relative overflow-hidden group cursor-pointer">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 blur-3xl rounded-full"></div>
              <h4 className="text-xl font-bold mb-2 relative z-10">Ready to scale?</h4>
              <p className="text-sm text-fuchsia-100 mb-6 relative z-10">We match you with the perfect AI engineer in 48 hours.</p>
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-fuchsia-600 relative z-10 group-hover:scale-110 transition-transform">
                 <ArrowRight className="w-5 h-5" />
              </div>
           </div>
        </div>
        
      </div>
    </section>
  );
}
