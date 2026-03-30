import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ContactForm } from "@/components/contact-form";
import { ShieldAlert, ShieldCheck, Lock, Binary, Fingerprint, Eye } from "lucide-react";

export default function ZeroTrustAuditPage() {
  return (
    <>
      <Header />
      <main className="pt-[100px] bg-[#020617] text-white min-h-screen font-sans">
        
        {/* specific hero */}
        <section className="relative overflow-hidden py-24 px-6 border-b border-white/5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(16,185,129,0.15),transparent_50%)] pointer-events-none" />
          
          <div className="max-w-[1000px] mx-auto text-center relative z-10">
             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 mb-8">
               <Fingerprint className="w-4 h-4 text-emerald-400" />
               <span className="text-emerald-400 text-xs font-bold tracking-[0.2em] uppercase">Zero-Trust Protocol</span>
             </div>
             
             <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight tracking-tight italic">
               Zero-Trust Architecture <br className="hidden md:block"/>
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-indigo-500">Security Audit.</span>
             </h1>
             
             <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed mb-12 font-light">
               Eliminate implicit trust. Our principal engineers conduct deep-tier identity mapping, micro-segmentation reviews, and adaptive policy stress testing for global enterprise scales.
             </p>
          </div>
        </section>

        {/* specific cards */}
        <section className="py-16 px-6 bg-white/[0.02]">
           <div className="max-w-[1200px] mx-auto grid md:grid-cols-3 gap-8">
              <div className="p-10 border border-emerald-500/10 rounded-[3rem] bg-[#0f172a]/60 backdrop-blur-xl hover:border-emerald-500/50 transition-all group">
                 <div className="w-12 h-12 bg-emerald-600/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 transition-all">
                    <Fingerprint className="w-6 h-6 text-emerald-400 group-hover:text-white" />
                 </div>
                 <h3 className="text-xl font-black mb-4 italic uppercase">Identity Hardening</h3>
                 <p className="text-sm text-slate-400 leading-relaxed font-light">Validate MFA, SSO, and Just-In-Time access protocols across your entire distributed workforce and cloud enclaves.</p>
              </div>
              <div className="p-10 border border-emerald-500/10 rounded-[3rem] bg-[#0f172a]/60 backdrop-blur-xl hover:border-emerald-500/50 transition-all group">
                 <div className="w-12 h-12 bg-emerald-600/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 transition-all">
                    <ShieldCheck className="w-6 h-6 text-emerald-400 group-hover:text-white" />
                 </div>
                 <h3 className="text-xl font-black mb-4 italic uppercase">Micro-Segmentation</h3>
                 <p className="text-sm text-slate-400 leading-relaxed font-light">We architect software-defined perimeters to isolate critical workloads, preventing lateral threat movement within your VPC.</p>
              </div>
              <div className="p-10 border border-emerald-500/10 rounded-[3rem] bg-[#0f172a]/60 backdrop-blur-xl hover:border-emerald-500/50 transition-all group">
                 <div className="w-12 h-12 bg-emerald-600/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 transition-all">
                    <Eye className="w-6 h-6 text-emerald-400 group-hover:text-white" />
                 </div>
                 <h3 className="text-xl font-black mb-4 italic uppercase">Continuous Visibility</h3>
                 <p className="text-sm text-slate-400 leading-relaxed font-light">Implement 24/7 monitoring and automated policy enforcement that responds to anomalous behavior in real-time.</p>
              </div>
           </div>
        </section>

        <ContactForm />

      </main>
      <Footer />
    </>
  );
}
