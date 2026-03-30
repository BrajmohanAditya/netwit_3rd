"use client";

import { use } from "react";
import Link from "next/link";
import { ArrowLeft, CheckCircle, ArrowRight, ShieldCheck, Zap, Microscope, Cpu, Globe, Sparkles } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { qaSubServices } from "@/config/menu-data";

export default function QASubServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params) as { slug: string };
  const data = qaSubServices[slug as keyof typeof qaSubServices];

  if (!data) {
    return (
      <div className="min-h-screen bg-[#020617] text-white flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center p-6 text-center">
          <div>
            <h1 className="text-4xl font-black mb-4 italic uppercase">Protocol Not Found</h1>
            <p className="text-slate-400 mb-8">The requested QA validation protocol does not exist in our registry.</p>
            <Link href="/services/qa-automation-testing" className="px-8 py-4 bg-blue-600 rounded-full font-bold hover:bg-blue-500 transition-colors inline-flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" /> Back to QA Hub
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#020617] text-white font-sans selection:bg-blue-500/30">
      <Header />
      
      <main className="relative pt-32 pb-24 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-gradient-to-b from-blue-600/10 to-transparent pointer-events-none opacity-50"></div>
        <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          
          {/* Breadcrumb / Back */}
          <Link href="/services/qa-automation-testing" className="inline-flex items-center gap-2 text-blue-400 text-xs font-black uppercase tracking-widest mb-12 hover:text-white transition-colors group italic">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to QA Hub
          </Link>

          {/* Hero Section */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-xl">
                 <ShieldCheck className="w-4 h-4 text-blue-400" />
                 <span className="text-blue-400 text-[10px] font-bold tracking-[0.2em] uppercase italic">Active Protocol // {slug.replace('-', '_').toUpperCase()}</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-none italic uppercase">
                {data.title}. <br/>
                <span className="text-blue-500 text-glow_blue">Optimized.</span>
              </h1>
              
              <p className="text-xl text-slate-400 font-light leading-relaxed max-w-xl">
                {data.subtitle}. {data.description}
              </p>

              <div className="flex gap-6">
                <Link href="#contact" className="px-10 py-5 bg-blue-600 text-white font-black rounded-full hover:scale-105 transition-transform shadow-[0_20px_50px_rgba(59,130,246,0.3)] italic uppercase text-sm">
                  Initialize Audit
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-blue-600/20 rounded-[3rem] blur-3xl opacity-20"></div>
              <div className="bg-[#0f172a]/80 backdrop-blur-3xl border border-white/5 p-12 rounded-[4rem] relative overflow-hidden group">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-600/20 to-transparent"></div>
                 
                 <div className="w-20 h-20 bg-blue-600 rounded-3xl flex items-center justify-center mb-10 shadow-2xl group-hover:rotate-12 transition-transform duration-500">
                    <Microscope className="w-10 h-10 text-white" />
                 </div>

                 <div className="space-y-6">
                    <div className="text-xs text-blue-500 font-black uppercase tracking-[0.3em] font-mono">Registry Details</div>
                    <div className="flex items-center justify-between py-4 border-b border-white/5">
                        <span className="text-slate-500 uppercase text-[10px] font-bold tracking-widest">Efficiency</span>
                        <span className="text-white font-black italic">High Fidelity</span>
                    </div>
                    <div className="flex items-center justify-between py-4 border-b border-white/5">
                        <span className="text-slate-500 uppercase text-[10px] font-bold tracking-widest">Velocity</span>
                        <span className="text-blue-400 font-black italic">100% Guaranteed</span>
                    </div>
                    <div className="flex items-center justify-between py-4">
                        <span className="text-slate-500 uppercase text-[10px] font-bold tracking-widest">Status</span>
                        <span className="px-3 py-1 bg-emerald-500/20 text-emerald-500 rounded-full text-[10px] font-black uppercase tracking-widest">Production Ready</span>
                    </div>
                 </div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="mb-32">
             <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                <div className="space-y-4">
                   <span className="text-[10px] text-blue-500 font-black uppercase tracking-[0.5em] italic">The Capabilities</span>
                   <h2 className="text-4xl font-black italic uppercase tracking-tighter text-white underline decoration-blue-600/30">Protocol <span className="text-blue-500">Elements.</span></h2>
                </div>
                <p className="text-slate-500 text-sm max-w-sm italic">Engineered for absolute precision in high-scale SaaS production environments.</p>
             </div>

             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {data.features.map((feature, idx) => (
                  <div key={idx} className="bg-[#0f172a]/40 border border-white/5 p-8 rounded-[2.5rem] hover:border-blue-500/30 transition-all hover:-translate-y-2 group">
                    <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600/10 transition-colors">
                       <Cpu className="w-6 h-6 text-blue-400" />
                    </div>
                    <h3 className="text-lg font-black text-white mb-3 italic tracking-tight">{feature.title}</h3>
                    <p className="text-sm text-slate-400 font-light leading-relaxed">{feature.description}</p>
                  </div>
                ))}
             </div>
          </div>

          {/* Benefits / Impact Section */}
          <div className="bg-gradient-to-br from-blue-900/10 via-[#0f172a] to-indigo-900/10 border border-blue-500/10 rounded-[4rem] p-16 relative overflow-hidden text-center mb-32">
             <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.1),transparent)] pointer-events-none"></div>
             
             <div className="relative z-10 max-w-3xl mx-auto space-y-12">
                <div className="space-y-6">
                   <span className="text-[10px] text-blue-400 font-black uppercase tracking-[0.4em] italic">Business Velocity</span>
                   <h2 className="text-4xl md:text-5xl font-black text-white uppercase italic tracking-tighter">Strategic <span className="text-blue-500">Impact.</span></h2>
                </div>

                <div className="grid sm:grid-cols-2 gap-8 text-left">
                  {data.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-4 p-6 bg-white/5 rounded-2xl border border-white/5 backdrop-blur-sm">
                       <CheckCircle className="w-6 h-6 text-emerald-500 flex-shrink-0" />
                       <span className="text-slate-200 font-medium italic">{benefit}</span>
                    </div>
                  ))}
                </div>
             </div>
          </div>

          {/* Call to Action */}
          <section id="contact" className="py-24 text-center space-y-12">
             <div className="inline-flex items-center gap-2 px-6 py-2 bg-blue-600/10 border border-blue-600/20 rounded-full">
                <Globe className="w-4 h-4 text-blue-400" />
                <span className="text-[10px] font-black text-blue-400 uppercase tracking-widest italic">Global Deployment Active</span>
             </div>
             
             <h2 className="text-5xl md:text-7xl font-black text-white italic uppercase tracking-tighter leading-none">
                Ready to <span className="text-blue-500 underline decoration-blue-600/30">Optimize?</span>
             </h2>

             <p className="text-slate-400 text-lg font-light max-w-2xl mx-auto">
                Connect with our QA engineering desk to integrate this specialized protocol into your development ecosystem today.
             </p>

             <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
                <Link href="/schedule-demo" className="px-14 py-6 bg-blue-600 text-white font-black rounded-full hover:scale-105 transition-transform flex items-center justify-center gap-3 shadow-[0_20px_60px_rgba(59,130,246,0.3)] italic uppercase text-sm">
                   Initialize Full Audit <ArrowRight className="w-4 h-4" />
                </Link>
             </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
