import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ContactForm } from "@/components/contact-form";
import { Zap, TrendingUp, Clock, Bug, Activity, BarChart3 } from "lucide-react";

export default function VelocityROISyncPage() {
  return (
    <>
      <Header />
      <main className="pt-[100px] bg-[#020617] text-white min-h-screen font-sans">
        
        {/* specific hero */}
        <section className="relative overflow-hidden py-24 px-6 border-b border-white/5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(217,70,239,0.15),transparent_50%)] pointer-events-none" />
          
          <div className="max-w-[1000px] mx-auto text-center relative z-10">
             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-fuchsia-500/30 bg-fuchsia-500/10 mb-8">
               <Zap className="w-4 h-4 text-fuchsia-400" />
               <span className="text-fuchsia-400 text-xs font-bold tracking-[0.2em] uppercase">Velocity ROI Sync</span>
             </div>
             
             <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight tracking-tight italic">
               QA Velocity ROI <br className="hidden md:block"/>
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-violet-400 to-indigo-500">Economic Audit.</span>
             </h1>
             
             <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed mb-12 font-light">
               Quantify the impact of automation. Our technical auditors map your testing lifecycle to economic outcomes, highlighting significant savings in time-to-market and operational spend.
             </p>
          </div>
        </section>

        {/* specific statistics */}
        <section className="py-24 px-6 relative z-10 bg-[#020617]">
          <div className="max-w-[1250px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="flex flex-col items-center">
              <div className="text-6xl font-black text-fuchsia-500 mb-4 italic tracking-tighter shadow-sm">
                70%<span className="text-4xl ml-1">+</span>
              </div>
              <p className="text-slate-400 text-sm font-semibold uppercase tracking-[0.3em]">Reduction in Cycle Time</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-6xl font-black text-violet-400 mb-4 italic tracking-tighter shadow-sm">
                4.5x
              </div>
              <p className="text-slate-400 text-sm font-semibold uppercase tracking-[0.3em]">Operational ROI</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-6xl font-black text-fuchsia-500 mb-4 italic tracking-tighter shadow-sm">
                Zero
              </div>
              <p className="text-slate-400 text-sm font-semibold uppercase tracking-[0.3em]">Critical Regression Loss</p>
            </div>
          </div>
        </section>

        {/* specific cards */}
        <section className="py-20 px-6 bg-white/[0.02]">
           <div className="max-w-[1200px] mx-auto grid md:grid-cols-3 gap-8">
              <div className="p-10 border border-fuchsia-500/10 rounded-[3rem] bg-[#0f172a]/60 backdrop-blur-xl hover:border-fuchsia-500/50 transition-all group">
                 <div className="w-12 h-12 bg-fuchsia-600/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-fuchsia-600 transition-all">
                    <Clock className="w-6 h-6 text-fuchsia-400 group-hover:text-white" />
                 </div>
                 <h3 className="text-xl font-black mb-4 italic uppercase">Time Transformation</h3>
                 <p className="text-sm text-slate-400 leading-relaxed font-light">Convert days of manual regression into minutes of automated pulse checks. Accelerate your roadmap without compromising quality.</p>
              </div>
              <div className="p-10 border border-fuchsia-500/10 rounded-[3rem] bg-[#0f172a]/60 backdrop-blur-xl hover:border-fuchsia-500/50 transition-all group">
                 <div className="w-12 h-12 bg-fuchsia-600/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-fuchsia-600 transition-all">
                    <BarChart3 className="w-6 h-6 text-fuchsia-400 group-hover:text-white" />
                 </div>
                 <h3 className="text-xl font-black mb-4 italic uppercase">Unit Economics</h3>
                 <p className="text-sm text-slate-400 leading-relaxed font-light">We analyze the cost per defect at various SDLC stages, demonstrating how automated early detection protects your margins.</p>
              </div>
              <div className="p-10 border border-fuchsia-500/10 rounded-[3rem] bg-[#0f172a]/60 backdrop-blur-xl hover:border-fuchsia-500/50 transition-all group">
                 <div className="w-12 h-12 bg-fuchsia-600/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-fuchsia-600 transition-all">
                    <Activity className="w-6 h-6 text-fuchsia-400 group-hover:text-white" />
                 </div>
                 <h3 className="text-xl font-black mb-4 italic uppercase">Stability Stewardship</h3>
                 <p className="text-sm text-slate-400 leading-relaxed font-light">Reduce maintenance overhead through resilient script architecture and AI-driven self-healing test protocols.</p>
              </div>
           </div>
        </section>

        <ContactForm />

      </main>
      <Footer />
    </>
  );
}
