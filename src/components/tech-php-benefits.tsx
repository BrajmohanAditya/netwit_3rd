"use client";

import { CheckCircle2, Zap, CloudCog, Banknote } from "lucide-react";
import Link from "next/link";

export function PhpBenefits() {
  const points = [
    "PHP operates over 78% of the world's known websites today.",
    "Unmatched deployment speed—from idea to production URL in hours.",
    "Lowest server overhead costs, deploying instantly on generic UNIX hosts.",
    "Decades of battle-tested open-source libraries via the Composer ecosystem.",
    "No complex build steps required. Code modification is virtually instantaneous.",
    "Immediate availability of senior engineers due to massive global adoption."
  ];

  return (
    <section className="bg-gradient-to-b from-[#0b0f19] to-[#04060a] py-24 relative overflow-hidden text-white border-t border-[#1e2a44] font-sans">
      <div className="absolute right-0 bottom-0 w-[600px] h-[600px] bg-[#4F5B93]/10 blur-[150px] pointer-events-none rounded-full"></div>

      <div className="max-w-[1200px] mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
        
        <div className="lg:w-1/2 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight tracking-tight text-white">
            The Economy of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8892BF] to-[#FF2D20]">Velocity & Scale.</span>
          </h2>
          <p className="text-slate-400 text-lg mb-8 leading-relaxed font-light">
            New frameworks emerge weekly, but PHP outlives them all by aggressively focusing on what businesses actually need: returning HTML from a database query as fast, securely, and cheaply as humanly possible.
          </p>
          
          <ul className="grid sm:grid-cols-2 gap-4 mb-10">
            {points.map((p, i) => (
               <li key={i} className="flex items-start gap-3 text-sm text-slate-300 font-light">
                  <CheckCircle2 className="w-5 h-5 text-[#8892BF] flex-shrink-0 mt-0.5" />
                  <span>{p}</span>
               </li>
            ))}
          </ul>
          
          <Link href="#contact" className="inline-flex items-center justify-center gap-2 bg-[#4F5B93] text-white px-8 py-4 rounded-full font-bold transition-all duration-300 hover:scale-105 shadow-[0_0_30px_rgba(79,91,147,0.3)] hover:shadow-[0_0_50px_rgba(79,91,147,0.5)]">
             Provision a PHP Team
          </Link>
        </div>

        <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10 w-full mt-10 lg:mt-0">
           <div className="bg-[#121929]/50 border border-[#1e2a44] backdrop-blur-xl p-8 rounded-[2rem] hover:bg-[#161f33] transition-colors flex flex-col justify-center h-[220px] cursor-default group shadow-2xl">
              <Banknote className="w-8 h-8 text-emerald-400 mb-4 group-hover:scale-110 transition-transform" />
              <span className="text-4xl font-bold text-white mb-2 tracking-tighter">-40%</span>
              <span className="text-xs text-slate-400 tracking-widest uppercase font-semibold">Hosting Overhead</span>
           </div>
           
           <div className="bg-[#121929]/50 border border-[#1e2a44] backdrop-blur-xl p-8 rounded-[2rem] hover:bg-[#161f33] transition-colors flex flex-col justify-center h-[220px] sm:translate-y-8 cursor-default group shadow-2xl">
              <Zap className="w-8 h-8 text-[#FF2D20] mb-4 group-hover:scale-110 transition-transform" />
              <span className="text-4xl font-bold text-white mb-2 tracking-tighter">Fast</span>
              <span className="text-xs text-slate-400 tracking-widest uppercase font-semibold">Time To Market</span>
           </div>
           
           <div className="bg-[#121929]/50 border border-[#1e2a44] backdrop-blur-xl p-8 rounded-[2rem] hover:bg-[#161f33] transition-colors flex flex-col justify-center h-[220px] cursor-default group shadow-2xl">
              <CloudCog className="w-8 h-8 text-[#8892BF] mb-4 group-hover:scale-110 transition-transform" />
              <span className="text-4xl font-bold text-white mb-2 tracking-tighter">UNIX</span>
              <span className="text-xs text-slate-400 tracking-widest uppercase font-semibold">Universal Hosts</span>
           </div>
           
           <div className="bg-gradient-to-br from-[#2E3559] to-[#1e233d] border border-[#4F5B93]/20 p-8 rounded-[2rem] flex flex-col justify-center h-[220px] sm:translate-y-8 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#8892BF]/20 blur-[50px] rounded-full"></div>
              <h4 className="text-xl font-bold mb-2 text-white relative z-10 tracking-tight">Massive Scale.</h4>
              <p className="text-sm text-[#a4adcf] leading-relaxed relative z-10 font-light">Wikipedia, Etsy, Slack, and Mailchimp all utilize PHP to handle hundreds of millions of daily concurrent hits.</p>
           </div>
        </div>
        
      </div>
    </section>
  );
}
