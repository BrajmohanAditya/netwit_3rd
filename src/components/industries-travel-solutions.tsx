"use client";

import { ArrowRight, Bot, CheckCircle, Globe, Layers, Microscope, ShieldCheck, Sparkles, Star, TrendingUp, Users, Zap, CloudLightning, Server, DatabaseZap, Workflow, HeartHandshake, Compass, Navigation } from "lucide-react";
import Link from "next/link";

const travelPillars = [
  { 
    title: "Burstable Infrastructure", 
    description: "Auto-scaling environments engineered for Black Friday, holiday rushes, and seasonal flash sales. We guarantee 100% uptime when your load hits global peaks.", 
    tag: "High Velocity",
    icon: CloudLightning,
    benefit: "Auto-Scale"
  },
  { 
    title: "Booking Engine Core", 
    description: "Re-architect monolithic booking paths into responsive API-first microservices. We deliver search-to-confirm cycles in institutional milliseconds.", 
    tag: "Low Latency",
    icon: Server,
    stat: "12ms Sync"
  },
  { 
    title: "Zero-Trust Payments", 
    description: "Compliant payment processing corridors designed to exceed PCI-DSS standards. We secure your transaction flow across every global jurisdiction.", 
    tag: "Hardened",
    icon: ShieldCheck,
    stat: "PCI-DSS Top"
  },
  { 
    title: "Guest App Ecosystems", 
    description: "Flawless mobile experiences from digital key integrations to localized concierge capabilities. We build the interfaces for the modern global nomad.", 
    tag: "UX Excellence",
    icon: HeartHandshake,
    stat: "High Engagement"
  },
  { 
    title: "Global Inventory Sync", 
    description: "Synchronize massive property and flight availability across geographical regions. We eliminate data lag in high-fidelity inventory distributed loads.", 
    tag: "Atomic Sync",
    icon: DatabaseZap,
    stat: "Global Integrity"
  },
  { 
    title: "Channel Orchestration", 
    description: "Unified API orchestration across OTAs, meta-searches, and B2B aggregators. We integrate your channel management natively into your infrastructure.", 
    tag: "Unified",
    icon: Workflow,
    stat: "Omni-Channel"
  },
];

export function TravelSolutions() {
  return (
    <section id="solutions" className="bg-[#f8fafc] py-24 relative overflow-hidden font-sans border-t border-slate-200">
      <div className="max-w-[1250px] mx-auto px-6">
        
        {/* Travel Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
           <div className="space-y-6 max-w-2xl">
              <span className="text-[10px] text-sky-600 font-black uppercase tracking-[0.5em] mb-4 block italic">The Travel Engineering Protocol</span>
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter italic shadow-sm leading-tight">Seamless Journeys. <br/><span className="text-sky-600 underline decoration-sky-600/30 font-black">Institutional Architecture.</span></h2>
              <p className="text-slate-500 text-lg font-light leading-relaxed">Whether you operate an airline, a hotel chain, or a global OTA, our elite DevOps and cloud architectures ensure your platforms handle millions of concurrent bookings effortlessly.</p>
           </div>
           <div className="flex items-center gap-6 bg-white/80 backdrop-blur-xl px-8 py-3 rounded-full border border-sky-100 shadow-lg">
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest flex items-center gap-2 italic">
                 <Compass className="w-4 h-4 text-sky-500" /> Navigation Core: Optimal
              </span>
           </div>
        </div>

        {/* High-Fi Solution Tiles */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {travelPillars.map((item, index) => (
            <div 
              key={index} 
              className="group bg-white/60 backdrop-blur-3xl border border-sky-100 rounded-[3.5rem] p-10 flex flex-col h-full hover:border-sky-300 transition-all duration-500 hover:-translate-y-2 shadow-xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-sky-600/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="flex justify-between items-start mb-10">
                 <div className="w-16 h-16 rounded-2xl bg-sky-600/5 border border-sky-100 flex items-center justify-center group-hover:bg-sky-600 group-hover:text-white transition-all shadow-md">
                    <item.icon className="w-8 h-8" />
                 </div>
                 <div className="text-right">
                    <span className="block text-xl font-black text-slate-900 tracking-tight italic uppercase">{item.stat || item.benefit}</span>
                    <span className="block text-[10px] text-slate-400 font-bold uppercase tracking-widest italic">{item.tag}</span>
                 </div>
              </div>

              <h3 className="text-2xl font-black text-slate-900 mb-5 group-hover:text-sky-600 transition-all italic underline decoration-sky-600/10 uppercase tracking-tight">{item.title}</h3>
              <p className="text-sm text-slate-500 font-light leading-relaxed flex-1 border-l-2 border-slate-100 pl-8 group-hover:border-sky-500 transition-colors">
                 {item.description}
              </p>
              
              <div className="mt-10 flex items-center justify-between pt-8 border-t border-slate-100 text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:text-sky-600 transition-colors italic">
                 Deploy Journey Protocol <ArrowRight className="w-4 h-4 group-hover:translate-x-1" />
              </div>
            </div>
          ))}
        </div>

        {/* High-Status Connection Row Footer */}
        <div className="mt-24 p-12 bg-gradient-to-br from-sky-900/5 via-white/80 to-blue-900/5 border border-sky-100 rounded-[4rem] text-center relative overflow-hidden backdrop-blur-3xl group px-16 shadow-2xl">
           <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(14,165,233,0.1),transparent)] pointer-events-none opacity-40"></div>
           
           <div className="relative z-10 max-w-2xl mx-auto space-y-8">
              <span className="inline-block text-[10px] text-sky-500 font-black uppercase tracking-[0.5em] mb-4 italic">The Global Travel Hub</span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-none italic uppercase underline decoration-sky-600/30">Actionable <span className="text-sky-600 italic">Travel Intelligence.</span></h2>
              <p className="text-slate-500 text-lg font-light leading-relaxed font-sans">Our travel specialists are ready to architect your high-fidelity booking ecosystem. Connect with our principal desk for a strategic seasonal audit.</p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                 <button className="px-14 py-6 bg-sky-600 text-white font-black rounded-full hover:scale-105 transition-transform flex items-center justify-center gap-3 shadow-[0_20px_60px_rgba(14,165,233,0.3)] italic">
                    <Navigation className="w-5 h-5 flex-shrink-0" /> Enterprise Journey Audit
                 </button>
                 <button className="px-14 py-6 border border-slate-200 text-slate-700 font-black rounded-full hover:bg-slate-50 transition-all text-sm flex items-center justify-center gap-3 italic bg-white shadow-sm">
                    <Globe className="w-4 h-4" /> Global Registry
                 </button>
              </div>
           </div>
        </div>

      </div>
    </section>
  );
}
