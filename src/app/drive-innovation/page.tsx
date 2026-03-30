import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ContactForm } from "@/components/contact-form";
import { Sparkles, Bot, Zap, Activity } from "lucide-react";

export default function DriveInnovationPage() {
  return (
    <>
      <Header />
      <main className="pt-[100px] bg-[#020617] text-white min-h-screen font-sans">
        
        {/* specific hero */}
        <section className="relative overflow-hidden py-24 px-6 border-b border-white/5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(139,92,246,0.15),transparent_60%)] pointer-events-none" />
          
          <div className="max-w-[1000px] mx-auto text-center relative z-10">
             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-violet-500/30 bg-violet-500/10 mb-8">
               <Sparkles className="w-4 h-4 text-violet-400" />
               <span className="text-violet-400 text-xs font-bold tracking-[0.2em] uppercase">AI-First Innovation Lab</span>
             </div>
             
             <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight tracking-tight">
               Accelerate Your <br className="hidden md:block"/>
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-primary to-blue-400">Competitive Moat.</span>
             </h1>
             
             <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed mb-12">
               Stop iterating slowly. Partner with Netwit's Innovation Desk to radically overhaul your current user experience, ingest predictive intelligence, and achieve a highly autonomous business model.
             </p>
          </div>
        </section>

        {/* specific cards */}
        <section className="py-16 px-6 bg-white/[0.02]">
           <div className="max-w-[1200px] mx-auto grid md:grid-cols-3 gap-8">
              <div className="p-8 border border-white/10 rounded-3xl bg-[#0f172a] hover:border-violet-500/50 transition-colors">
                 <div className="w-12 h-12 bg-violet-500/10 rounded-xl flex items-center justify-center mb-6">
                    <Bot className="w-6 h-6 text-violet-400" />
                 </div>
                 <h3 className="text-xl font-bold mb-4">Neural Data Architecture</h3>
                 <p className="text-sm text-slate-400 leading-relaxed">Transition from reactive metrics to predictive analytics using bespoke LLMs tailored directly on your private data lake.</p>
              </div>
              <div className="p-8 border border-white/10 rounded-3xl bg-[#0f172a] hover:border-violet-500/50 transition-colors">
                 <div className="w-12 h-12 bg-violet-500/10 rounded-xl flex items-center justify-center mb-6">
                    <Zap className="w-6 h-6 text-violet-400" />
                 </div>
                 <h3 className="text-xl font-bold mb-4">High-Velocity Cycles</h3>
                 <p className="text-sm text-slate-400 leading-relaxed">Implement multi-threaded engineering pipelines and automated QA labs that shrink your go-to-market speed by over 60%.</p>
              </div>
              <div className="p-8 border border-white/10 rounded-3xl bg-[#0f172a] hover:border-violet-500/50 transition-colors">
                 <div className="w-12 h-12 bg-violet-500/10 rounded-xl flex items-center justify-center mb-6">
                    <Activity className="w-6 h-6 text-violet-400" />
                 </div>
                 <h3 className="text-xl font-bold mb-4">Continuous Optimization</h3>
                 <p className="text-sm text-slate-400 leading-relaxed">We don't just build your product—we continuously monitor telemetry to automatically evolve user pathways.</p>
              </div>
           </div>
        </section>

        {/* Use the shared form */}
        <ContactForm />

      </main>
      <Footer />
    </>
  );
}
