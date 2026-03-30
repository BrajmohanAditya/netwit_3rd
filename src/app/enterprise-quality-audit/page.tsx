import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ContactForm } from "@/components/contact-form";
import { Bug, ShieldCheck, Microscope, Layers, Infinity as InfinityIcon, Activity } from "lucide-react";

export default function EnterpriseQualityAuditPage() {
  return (
    <>
      <Header />
      <main className="pt-[100px] bg-[#020617] text-white min-h-screen font-sans">
        
        {/* specific hero */}
        <section className="relative overflow-hidden py-24 px-6 border-b border-white/5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(217,70,239,0.15),transparent_50%)] pointer-events-none" />
          
          <div className="max-w-[1000px] mx-auto text-center relative z-10">
             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-fuchsia-500/30 bg-fuchsia-500/10 mb-8">
               <ShieldCheck className="w-4 h-4 text-fuchsia-400" />
               <span className="text-fuchsia-400 text-xs font-bold tracking-[0.2em] uppercase">Enterprise Assurance</span>
             </div>
             
             <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight tracking-tight italic">
               Enterprise Quality <br className="hidden md:block"/>
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-violet-400 to-indigo-500">Governance Audit.</span>
             </h1>
             
             <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed mb-12 font-light">
               Don't leave your software integrity to chance. Our principal QA architects perform multi-tier ecosystem audits, CI/CD pipeline stress tests, and automated coverage validation.
             </p>
          </div>
        </section>

        {/* specific cards */}
        <section className="py-16 px-6 bg-white/[0.02]">
           <div className="max-w-[1200px] mx-auto grid md:grid-cols-3 gap-8">
              <div className="p-10 border border-fuchsia-500/10 rounded-[3rem] bg-[#0f172a]/60 backdrop-blur-xl hover:border-fuchsia-500/50 transition-all group">
                 <div className="w-12 h-12 bg-fuchsia-600/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-fuchsia-600 transition-all">
                    <Microscope className="w-6 h-6 text-fuchsia-400 group-hover:text-white" />
                 </div>
                 <h3 className="text-xl font-black mb-4 italic uppercase">Architecture Review</h3>
                 <p className="text-sm text-slate-400 leading-relaxed font-light">We evaluate your current testing framework's resilience, scalability, and ability to handle high-velocity deployment cycles.</p>
              </div>
              <div className="p-10 border border-fuchsia-500/10 rounded-[3rem] bg-[#0f172a]/60 backdrop-blur-xl hover:border-fuchsia-500/50 transition-all group">
                 <div className="w-12 h-12 bg-fuchsia-600/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-fuchsia-600 transition-all">
                    <InfinityIcon className="w-6 h-6 text-fuchsia-400 group-hover:text-white" />
                 </div>
                 <h3 className="text-xl font-black mb-4 italic uppercase">CI/CD Hardening</h3>
                 <p className="text-sm text-slate-400 leading-relaxed font-light">Audit your automated deployment barriers to ensure critical bugs are trapped before reaching the production baseline.</p>
              </div>
              <div className="p-10 border border-fuchsia-500/10 rounded-[3rem] bg-[#0f172a]/60 backdrop-blur-xl hover:border-fuchsia-500/50 transition-all group">
                 <div className="w-12 h-12 bg-fuchsia-600/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-fuchsia-600 transition-all">
                    <Activity className="w-6 h-6 text-fuchsia-400 group-hover:text-white" />
                 </div>
                 <h3 className="text-xl font-black mb-4 italic uppercase">End-to-End Integrity</h3>
                 <p className="text-sm text-slate-400 leading-relaxed font-light">Validation of mission-critical user journeys across multi-experience platforms ensuring zero integration friction.</p>
              </div>
           </div>
        </section>

        <ContactForm />

      </main>
      <Footer />
    </>
  );
}
