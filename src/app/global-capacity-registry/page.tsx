import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ContactForm } from "@/components/contact-form";
import { Globe, Users, Network, TrendingUp } from "lucide-react";

export default function GlobalCapacityRegistryPage() {
  return (
    <>
      <Header />
      <main className="pt-[100px] bg-[#020617] text-white min-h-screen font-sans">
        
        {/* specific hero */}
        <section className="relative overflow-hidden py-24 px-6 border-b border-white/5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(14,165,233,0.15),transparent_50%)] pointer-events-none" />
          
          <div className="max-w-[1000px] mx-auto text-center relative z-10">
             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-sky-500/30 bg-sky-500/10 mb-8">
               <Globe className="w-4 h-4 text-sky-400" />
               <span className="text-sky-400 text-xs font-bold tracking-[0.2em] uppercase">Global Team Extension</span>
             </div>
             
             <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight tracking-tight">
               Scale via the <br className="hidden md:block"/>
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-primary to-blue-400">Capacity Registry.</span>
             </h1>
             
             <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed mb-12">
               Instantly extend your technical capital. Tap into 1,500+ pre-vetted engineers across 10 global technology centers to accelerate your time-to-market with zero talent debt.
             </p>
          </div>
        </section>

        {/* specific cards */}
        <section className="py-16 px-6 bg-white/[0.02]">
           <div className="max-w-[1200px] mx-auto grid md:grid-cols-3 gap-8">
              <div className="p-8 border border-white/10 rounded-3xl bg-[#0f172a] hover:border-sky-500/50 transition-colors">
                 <div className="w-12 h-12 bg-sky-500/10 rounded-xl flex items-center justify-center mb-6">
                    <Users className="w-6 h-6 text-sky-400" />
                 </div>
                 <h3 className="text-xl font-bold mb-4">Elite Deep-Tech Talent</h3>
                 <p className="text-sm text-slate-400 leading-relaxed">Instantly assign verified Senior AI Engineers, Cloud Architects, and QA Leads directly to your sprints.</p>
              </div>
              <div className="p-8 border border-white/10 rounded-3xl bg-[#0f172a] hover:border-sky-500/50 transition-colors">
                 <div className="w-12 h-12 bg-sky-500/10 rounded-xl flex items-center justify-center mb-6">
                    <Network className="w-6 h-6 text-sky-400" />
                 </div>
                 <h3 className="text-xl font-bold mb-4">Distributed Operations</h3>
                 <p className="text-sm text-slate-400 leading-relaxed">Establish a 24/7 autonomous capability center utilizing our redundant geopolitical nodes spanning India to the US.</p>
              </div>
              <div className="p-8 border border-white/10 rounded-3xl bg-[#0f172a] hover:border-sky-500/50 transition-colors">
                 <div className="w-12 h-12 bg-sky-500/10 rounded-xl flex items-center justify-center mb-6">
                    <TrendingUp className="w-6 h-6 text-sky-400" />
                 </div>
                 <h3 className="text-xl font-bold mb-4">Elastic Scalability</h3>
                 <p className="text-sm text-slate-400 leading-relaxed">Seamlessly increase or reduce technical squad bandwidth matched to your exact enterprise investment targets.</p>
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
