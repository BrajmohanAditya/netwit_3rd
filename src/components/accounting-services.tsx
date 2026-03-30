"use client";

import { ArrowRight, CheckCircle, Globe, Layers, Microscope, ShieldCheck, Sparkles, Star, TrendingUp, Users, Zap, DollarSign, Calculator, LineChart, FileText } from "lucide-react";
import Link from "next/link";

const services = [
  { 
    title: "SaaS Bookkeeping", 
    description: "Multi-layered automated ledger management designed for high-velocity SaaS growth. We handle complex recurring revenue streams and deferred revenue with 100% precision.", 
    tag: "Integrity",
    icon: Calculator,
    benefit: "Precision Ledger"
  },
  { 
    title: "Financial Reporting", 
    description: "High-fidelity strategic reports with rolling forecasts and AI-driven variance analysis. Institutional-grade monthly, quarterly, and annual fiscal packages.", 
    tag: "Velocity",
    icon: FileText,
    stat: "NIST Audit Ready"
  },
  { 
    title: "Tax & Compliance", 
    description: "Global risk mitigation and jurisdictional compliance. We ensure your SaaS entity remains audit-proof across multiple geographies and tax regimes.", 
    tag: "Fortified",
    icon: ShieldCheck,
    stat: "Global Ready"
  },
  { 
    title: "Accounts Payable/Receivable", 
    description: "Automated cash flow optimization and aging management. Our AI-driven collection and payout protocols ensure maximum capital liquidity.", 
    tag: "Autopilot",
    icon: Zap,
    stat: "Capital Velocity"
  },
  { 
    title: "FP&A Strategic Support", 
    description: "Principal-level financial planning and analysis. We provide the technical blueprints for capital allocation and investment readiness.", 
    tag: "Strategic",
    icon: LineChart,
    stat: "Visionary Growth"
  },
  { 
    title: "Cloud-Based Audit Prep", 
    description: "Streamlined audit readiness with integrated technical repositories. We reduce the cost and technical debt of annual institutional audits.", 
    tag: "Sync",
    icon: Microscope,
    stat: "Audit Shield"
  },
];

export function AccountingServices() {
  return (
    <section id="services" className="bg-[#020617] py-24 relative overflow-hidden font-sans border-t border-white/5">
      <div className="max-w-[1250px] mx-auto px-6">
        
        {/* Services Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
           <div className="space-y-6 max-w-2xl">
              <span className="text-[10px] text-primary-500 font-black uppercase tracking-[0.5em] mb-4 block italic">The Netwit Fiscal Protocol</span>
              <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter italic shadow-sm">Capital Stewardship <span className="text-primary-500 underline decoration-primary-500/30 font-black">Architecture.</span></h2>
              <p className="text-slate-400 text-lg font-light leading-relaxed">Our accounting services are engineered for high-prestige SaaS delivery. We provide a full spectrum of automated fiscal validation to ensure your capital's integrity.</p>
           </div>
           <div className="flex items-center gap-6 bg-white/5 px-8 py-3 rounded-full border border-white/5">
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest flex items-center gap-2 italic">
                 <CheckCircle className="w-4 h-4 text-emerald-500" /> Capital Status: Verified
              </span>
           </div>
        </div>

        {/* High-Fi Service Tiles */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((item, index) => (
            <div 
              key={index} 
              className="group bg-[#0f172a]/40 backdrop-blur-3xl border border-primary/10 rounded-[3.5rem] p-10 flex flex-col h-full hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="flex justify-between items-start mb-10">
                 <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all shadow-lg">
                    <item.icon className="w-8 h-8" />
                 </div>
                 <div className="text-right">
                    <span className="block text-xl font-black text-white tracking-tight italic uppercase">{item.stat || item.benefit}</span>
                    <span className="block text-[10px] text-slate-600 font-bold uppercase tracking-widest italic">{item.tag}</span>
                 </div>
              </div>

              <h3 className="text-2xl font-black text-white mb-5 group-hover:text-glow_primary transition-all italic underline decoration-primary-600/20">{item.title}</h3>
              <p className="text-sm text-slate-400 font-light leading-relaxed flex-1 border-l-2 border-white/5 pl-8 group-hover:border-primary transition-colors">
                 {item.description}
              </p>
              
              <div className="mt-10 flex items-center justify-between pt-8 border-t border-white/5 text-[10px] font-black uppercase tracking-widest text-slate-600 group-hover:text-primary-400 transition-colors italic">
                 Deploy Fiscal Protocol <ArrowRight className="w-4 h-4 group-hover:translate-x-1" />
              </div>
            </div>
          ))}
        </div>

        {/* Global Connection Row Footer */}
        <div className="mt-24 p-12 bg-gradient-to-br from-primary-900/10 via-[#0f172a] to-blue-900/10 border border-primary/10 rounded-[4rem] text-center relative overflow-hidden backdrop-blur-3xl group px-16">
           <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(11,61,145,0.2),transparent)] pointer-events-none opacity-40"></div>
           
           <div className="relative z-10 max-w-2xl mx-auto space-y-8">
              <span className="inline-block text-[10px] text-primary-400 font-black uppercase tracking-[0.5em] mb-4 italic">The Global Capital Desk</span>
              <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-none italic uppercase underline decoration-primary-600/30">Fiscal <span className="text-primary-500">Stewardship.</span></h2>
              <p className="text-slate-400 text-lg font-light leading-relaxed font-sans">Our capital specialists are ready to architect your fiscal ecosystem. Connect with our financial desk for a high-fidelity capital audit.</p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                 <Link href="/enterprise-risk-audit" className="px-14 py-6 bg-primary text-white font-black rounded-full hover:scale-105 transition-transform flex items-center justify-center gap-3 shadow-[0_20px_60px_rgba(11,61,145,0.3)] italic">
                    <DollarSign className="w-5 h-5 flex-shrink-0" /> Enterprise ROI Audit
                 </Link>
                 <Link href="/global-capacity-registry" className="px-14 py-6 border border-white/10 text-white font-black rounded-full hover:bg-white/10 transition-all text-sm flex items-center justify-center gap-3 italic">
                    <Globe className="w-4 h-4" /> Global Registry
                 </Link>
              </div>
           </div>
        </div>

      </div>
    </section>
  );
}
