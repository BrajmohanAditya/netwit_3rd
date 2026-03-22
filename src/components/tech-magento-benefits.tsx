"use client";

import { CheckCircle2, TrendingUp, Shield, Layers } from "lucide-react";
import Link from "next/link";

export function MagentoBenefits() {
  const points = [
    "Retain absolute source code ownership, avoiding indefinite % revenue taxes from SaaS vendors.",
    "Seamlessly host 1,000,000+ deeply relational SKUs with complex child/configurable logic.",
    "Unite multiple global localized domains (US, UK, EU) under one master database installation.",
    "Strict open-source architecture explicitly designed to integrate with monolithic ERPs (SAP/Oracle).",
    "Completely customizable checkout logic to handle massive freight or complex corporate B2B tax.",
    "Historically proven to stabilize and scale the world's largest automotive and retail brands."
  ];

  return (
    <section className="bg-gradient-to-b from-[#0c0908] to-[#050302] py-24 relative overflow-hidden text-white border-t border-[#2e170c] font-sans">
      <div className="absolute right-0 bottom-0 w-[600px] h-[600px] bg-[#F26322]/10 blur-[150px] pointer-events-none rounded-full"></div>

      <div className="max-w-[1200px] mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
        
        <div className="lg:w-1/2 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight tracking-tight text-white">
            Monolithic <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff8b4d] to-[#F26322]">Inventory Power.</span>
          </h2>
          <p className="text-orange-100/50 text-lg mb-8 leading-relaxed font-light">
            When you outgrow lightweight cloud carts, Magento acts as an impenetrable, fully owned eCommerce fortress. It provides the deepest, most configurable administrative panel on the planet, guaranteeing your business processes never have to compromise.
          </p>
          
          <ul className="grid sm:grid-cols-2 gap-4 mb-10">
            {points.map((p, i) => (
               <li key={i} className="flex items-start gap-3 text-sm text-orange-100/70 font-light">
                  <CheckCircle2 className="w-5 h-5 text-[#F26322] flex-shrink-0 mt-0.5" />
                  <span>{p}</span>
               </li>
            ))}
          </ul>
          
          <Link href="#contact" className="inline-flex items-center justify-center gap-2 bg-[#F26322] text-white px-8 py-4 rounded-full font-bold transition-all duration-300 hover:scale-105 shadow-[0_0_30px_rgba(242,99,34,0.3)] hover:shadow-[0_0_50px_rgba(242,99,34,0.5)]">
             Spin Up Magento Team
          </Link>
        </div>

        <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10 w-full mt-10 lg:mt-0">
           <div className="bg-[#170e0a]/50 border border-[#2e170c] backdrop-blur-xl p-8 rounded-[2rem] hover:bg-[#1f120c] transition-colors flex flex-col justify-center h-[220px] cursor-default group shadow-2xl">
              <Layers className="w-8 h-8 text-[#F26322] mb-4 group-hover:scale-110 transition-transform" />
              <span className="text-4xl font-bold text-white mb-2 tracking-tighter">API</span>
              <span className="text-xs text-orange-200/50 tracking-widest uppercase font-semibold">Headless GraphQL</span>
           </div>
           
           <div className="bg-[#170e0a]/50 border border-[#2e170c] backdrop-blur-xl p-8 rounded-[2rem] hover:bg-[#1f120c] transition-colors flex flex-col justify-center h-[220px] sm:translate-y-8 cursor-default group shadow-2xl">
              <TrendingUp className="w-8 h-8 text-amber-500 mb-4 group-hover:scale-110 transition-transform" />
              <span className="text-4xl font-bold text-white mb-2 tracking-tighter">B2B</span>
              <span className="text-xs text-orange-200/50 tracking-widest uppercase font-semibold">Wholesale Negotiation</span>
           </div>
           
           <div className="bg-[#170e0a]/50 border border-[#2e170c] backdrop-blur-xl p-8 rounded-[2rem] hover:bg-[#1f120c] transition-colors flex flex-col justify-center h-[220px] cursor-default group shadow-2xl">
              <Shield className="w-8 h-8 text-rose-500 mb-4 group-hover:scale-110 transition-transform" />
              <span className="text-4xl font-bold text-white mb-2 tracking-tighter">0%</span>
              <span className="text-xs text-orange-200/50 tracking-widest uppercase font-semibold">SaaS Revenue Tax</span>
           </div>
           
           <div className="bg-gradient-to-br from-[#2e1206] to-[#120703] border border-[#F26322]/20 p-8 rounded-[2rem] flex flex-col justify-center h-[220px] sm:translate-y-8 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#F26322]/20 blur-[50px] rounded-full"></div>
              <h4 className="text-xl font-bold mb-2 text-white relative z-10 tracking-tight">EAV Model.</h4>
              <p className="text-sm text-orange-200/70 leading-relaxed relative z-10 font-light">The Entity-Attribute-Value architecture enables massive, infinite product configurations without rigid database limitations.</p>
           </div>
        </div>
        
      </div>
    </section>
  );
}
