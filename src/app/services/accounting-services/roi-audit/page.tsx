import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ContactForm } from "@/components/contact-form";
import { ShieldCheck, LineChart, TrendingUp, DollarSign, Calculator, FileCheck, ArrowRight, Network } from "lucide-react";
import Link from "next/link";

export default function ROIAuditPage() {
  return (
    <>
      <Header />
      <main className="pt-[80px] bg-[#020617] text-white min-h-screen font-sans overflow-hidden">
        
        {/* Premium Hero Section with Mesh Network Background */}
        <section className="relative overflow-hidden py-32 md:py-48 px-6">
          <div className="absolute inset-0 z-0 opacity-40 pointer-events-none flex items-center justify-center overflow-hidden mix-blend-screen">
             <div className="absolute w-[800px] h-[300px] bg-primary rounded-[100%] blur-[120px] opacity-20"></div>
             <Network className="absolute w-[180vw] h-[180vw] max-w-[1800px] max-h-[1800px] text-white stroke-[0.25] rotate-[15deg]" />
             <Network className="absolute w-[140vw] h-[140vw] max-w-[1400px] max-h-[1400px] text-primary stroke-[0.4] -rotate-[10deg] opacity-70" />
          </div>
          
          <div className="max-w-[1000px] mx-auto text-center relative z-10">
             <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-xl shadow-lg mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
               <DollarSign className="w-4 h-4 text-primary-400" />
               <span className="text-primary-400 text-xs font-black tracking-[0.3em] uppercase italic">Financial Engineering Division</span>
             </div>
             
             <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-[0.95] tracking-tighter italic animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
               The Precision <br />
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-primary to-primary-200 underline decoration-primary-600/30">ROI Audit.</span>
             </h1>
             
             <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-12 font-light italic animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-500 border-l-2 border-primary-500/30 pl-8">
               Unlock institutional-grade fiscal transparency. Our AI-driven ROI audit identifies capital leakage, optimizes recurring revenue velocity, and fortifies your SaaS unit economics.
             </p>

             <Link 
               href="#audit-contact" 
               className="bg-primary hover:bg-primary-600 text-white font-black py-5 px-14 rounded-full shadow-[0_0_50px_rgba(11,61,145,0.4)] transition-all hover:scale-105 active:scale-95 text-lg tracking-wide inline-flex items-center justify-center italic"
             >
               Initialize Audit Protocol <ArrowRight className="ml-3 w-5 h-5" />
             </Link>
          </div>
        </section>

        {/* Audit Methodology / Steps */}
        <section className="py-24 px-6 border-y border-white/5 bg-white/[0.02] relative">
          <div className="max-w-[1250px] mx-auto">
             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    step: "01",
                    title: "Capital Mapping",
                    desc: "Deep-dive diagnostic of your entire general ledger using AI-first pattern recognition.",
                    icon: Calculator
                  },
                  {
                    step: "02",
                    title: "Leakage Analysis",
                    desc: "Identification of redundant spend and unoptimized deferred revenue streams.",
                    icon: ShieldCheck
                  },
                  {
                    step: "03",
                    title: "Velocity Audit",
                    desc: "Measuring the real-time speed of cash-conversion cycles across global registries.",
                    icon: TrendingUp
                  },
                  {
                    step: "04",
                    title: "Fiscal Blueprint",
                    desc: "Data-backed strategic roadmap for capital allocation and investment readiness.",
                    icon: FileCheck
                  }
                ].map((item, idx) => (
                  <div key={idx} className="group p-10 border border-white/5 rounded-[3rem] bg-[#0f172a]/40 backdrop-blur-3xl hover:border-primary/40 transition-all hover:-translate-y-2 relative overflow-hidden">
                     <span className="absolute top-8 right-10 text-5xl font-black text-primary/10 group-hover:text-primary/20 transition-colors italic">{item.step}</span>
                     <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-10 group-hover:bg-primary transition-all shadow-lg">
                        <item.icon className="w-7 h-7 text-primary-400 group-hover:text-white" />
                     </div>
                     <h3 className="text-xl font-black text-white italic tracking-tight mb-4 uppercase underline decoration-primary/20">{item.title}</h3>
                     <p className="text-slate-400 text-sm font-light leading-relaxed group-hover:text-slate-300 transition-colors">{item.desc}</p>
                  </div>
                ))}
             </div>
          </div>
        </section>

        {/* Unit Economics Section */}
        <section className="py-32 px-6 bg-[radial-gradient(circle_at_center,rgba(11,61,145,0.1)_0%,transparent_70%)]">
           <div className="max-w-[1000px] mx-auto grid lg:grid-cols-2 gap-20 items-center">
              <div>
                 <span className="text-[10px] text-primary-500 font-black uppercase tracking-[0.5em] italic mb-6 block">Institutional Intelligence</span>
                 <h2 className="text-4xl md:text-6xl font-black text-white italic tracking-tighter leading-none mb-10 underline decoration-primary-600/30">Unit Economic <br /> <span className="text-primary-500">Optimization.</span></h2>
                 <p className="text-lg text-slate-400 font-light leading-relaxed italic border-l-2 border-primary/30 pl-8">
                    We don't just report numbers; we architect fiscal resilience. Our ROI audit protocol is refined for high-velocity SaaS models where LTV, CAC, and Churn are the primary drivers of enterprise value.
                 </p>
                 
                 <div className="mt-12 space-y-6">
                    {[
                      "Real-time Deferred Revenue Tracking",
                      "Automated Inter-company Reconciliation",
                      "Multi-jurisdictional Tax Exposure Models",
                      "Institutional-Grade Compliance Ready"
                    ].map((feature, i) => (
                      <div key={i} className="flex items-center gap-4 group">
                         <div className="w-5 h-5 rounded-full border border-primary/40 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                            <ShieldCheck className="w-3 h-3 text-primary-400" />
                         </div>
                         <span className="text-sm font-bold text-slate-300 uppercase tracking-widest italic">{feature}</span>
                      </div>
                    ))}
                 </div>
              </div>
              
              <div className="relative">
                 <div className="absolute inset-0 bg-primary/20 blur-[120px] rounded-full animate-pulse"></div>
                 <div className="relative border border-primary/20 rounded-[4rem] bg-[#0f172a]/80 backdrop-blur-3xl p-12 shadow-2xl">
                    <LineChart className="w-full h-auto text-primary-500 opacity-60" />
                    <div className="mt-12 grid grid-cols-2 gap-8">
                       <div className="space-y-2">
                          <span className="block text-[8px] text-slate-500 font-black uppercase tracking-widest italic">ROI Average</span>
                          <span className="text-3xl font-black text-white italic">+14.2%</span>
                       </div>
                       <div className="space-y-2 text-right">
                          <span className="block text-[8px] text-slate-500 font-black uppercase tracking-widest italic">Capital Shield</span>
                          <span className="text-3xl font-black text-primary-500 italic">Verified</span>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* Contact UI */}
        <section id="audit-contact" className="py-24 bg-[#18181b] border-t border-white/5 relative z-10">
           <ContactForm />
        </section>

      </main>
      <Footer />
    </>
  );
}
