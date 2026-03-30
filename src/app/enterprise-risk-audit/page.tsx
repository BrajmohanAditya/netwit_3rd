import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ContactForm } from "@/components/contact-form";
import { ShieldAlert, ShieldCheck, Lock, Binary } from "lucide-react";

export default function EnterpriseRiskAuditPage() {
  return (
    <>
      <Header />
      <main className="pt-[100px] bg-[#020617] text-white min-h-screen font-sans">
        
        {/* specific hero */}
        <section className="relative overflow-hidden py-24 px-6 border-b border-white/5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(79,70,229,0.15),transparent_50%)] pointer-events-none" />
          
          <div className="max-w-[1000px] mx-auto text-center relative z-10">
             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 mb-8">
               <ShieldAlert className="w-4 h-4 text-indigo-400" />
               <span className="text-indigo-400 text-xs font-bold tracking-[0.2em] uppercase">Cybersecurity Assessment</span>
             </div>
             
             <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight tracking-tight">
               Enterprise Risk <br className="hidden md:block"/>
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-primary to-sky-400">Security Audit.</span>
             </h1>
             
             <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed mb-12">
               Don't leave your global infrastructure exposed. Our institutional-grade security teams perform deep-dive architecture reviews, penetration testing, and zero-trust protocol modeling.
             </p>
          </div>
        </section>

        {/* specific cards */}
        <section className="py-16 px-6 bg-white/[0.02]">
           <div className="max-w-[1200px] mx-auto grid md:grid-cols-3 gap-8">
              <div className="p-8 border border-white/10 rounded-3xl bg-[#0f172a] hover:border-indigo-500/50 transition-colors">
                 <div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center mb-6">
                    <ShieldCheck className="w-6 h-6 text-indigo-400" />
                 </div>
                 <h3 className="text-xl font-bold mb-4">NIST & ISO Compliance</h3>
                 <p className="text-sm text-slate-400 leading-relaxed">Map your entire monolithic ecosystem to the latest global compliance frameworks ensuring zero regulatory blind spots.</p>
              </div>
              <div className="p-8 border border-white/10 rounded-3xl bg-[#0f172a] hover:border-indigo-500/50 transition-colors">
                 <div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center mb-6">
                    <Lock className="w-6 h-6 text-indigo-400" />
                 </div>
                 <h3 className="text-xl font-bold mb-4">Zero-Trust Protocol</h3>
                 <p className="text-sm text-slate-400 leading-relaxed">Identity and access mapping across your distributed cloud infrastructure preventing lateral threat movement.</p>
              </div>
              <div className="p-8 border border-white/10 rounded-3xl bg-[#0f172a] hover:border-indigo-500/50 transition-colors">
                 <div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center mb-6">
                    <Binary className="w-6 h-6 text-indigo-400" />
                 </div>
                 <h3 className="text-xl font-bold mb-4">Vulnerability Pen-Testing</h3>
                 <p className="text-sm text-slate-400 leading-relaxed">Simulated multi-vector attacks against your mission-critical APIs and databases to expose silent integration flaws.</p>
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
