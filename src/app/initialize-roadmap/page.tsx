import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ContactForm } from "@/components/contact-form";
import { ArrowRight, Compass, LineChart, Cpu } from "lucide-react";

export default function InitializeRoadmapPage() {
  return (
    <>
      <Header />
      <main className="pt-[100px] bg-[#020617] text-white min-h-screen font-sans">
        
        {/* Hero Section */}
        <section className="relative overflow-hidden py-24 px-6">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(37,99,235,0.15),transparent_60%)] pointer-events-none" />
          
          <div className="max-w-[1000px] mx-auto text-center relative z-10">
             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-8">
               <Compass className="w-4 h-4 text-primary" />
               <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase">Strategic Consultation</span>
             </div>
             
             <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight tracking-tight">
               Initialize Your <br className="hidden md:block"/>
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-400 to-sky-400">Digital Roadmap.</span>
             </h1>
             
             <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed mb-12">
               Begin the process of transforming your enterprise architecture. Our principal engineering desk will audit your current ecosystem and deliver a comprehensive strategy for AI adoption, cloud scaling, and cybersecurity.
             </p>
          </div>
        </section>

        {/* Value Props */}
        <section className="py-16 px-6 bg-white/5 border-y border-white/5">
           <div className="max-w-[1200px] mx-auto grid md:grid-cols-3 gap-8">
              <div className="p-8 border border-white/10 rounded-3xl bg-[#0f172a] hover:border-primary/50 transition-colors">
                 <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                    <LineChart className="w-6 h-6 text-primary" />
                 </div>
                 <h3 className="text-xl font-bold mb-4">Architecture Audit</h3>
                 <p className="text-sm text-slate-400 leading-relaxed">We analyze your monolithic legacy systems and identify critical pathways for high-velocity API refactoring and cloud migration.</p>
              </div>
              <div className="p-8 border border-white/10 rounded-3xl bg-[#0f172a] hover:border-primary/50 transition-colors">
                 <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                    <Cpu className="w-6 h-6 text-primary" />
                 </div>
                 <h3 className="text-xl font-bold mb-4">AI Integration Mapping</h3>
                 <p className="text-sm text-slate-400 leading-relaxed">A strategic blueprint for embedding autonomous AI agents, machine learning workflows, and predictive analytics into your core product.</p>
              </div>
              <div className="p-8 border border-white/10 rounded-3xl bg-[#0f172a] hover:border-primary/50 transition-colors">
                 <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                    <ArrowRight className="w-6 h-6 text-primary" />
                 </div>
                 <h3 className="text-xl font-bold mb-4">Execution Strategy</h3>
                 <p className="text-sm text-slate-400 leading-relaxed">A detailed, step-by-step roadmap with clear resource allocations, timelines, and measurable ROI targets for your executive board.</p>
              </div>
           </div>
        </section>

        {/* Integrated Contact Form */}
        <ContactForm />

      </main>
      <Footer />
    </>
  );
}
