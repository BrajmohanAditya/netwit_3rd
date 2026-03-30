import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ContactForm } from "@/components/contact-form";
import { Calendar, Play, Monitor, Zap } from "lucide-react";

export default function ScheduleDemoPage() {
  return (
    <>
      <Header />
      <main className="pt-[100px] bg-[#020617] text-white min-h-screen font-sans">
        
        {/* Hero Section */}
        <section className="relative overflow-hidden py-24 px-6">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,0.15),transparent_70%)] pointer-events-none" />
          
          <div className="max-w-[1000px] mx-auto text-center relative z-10">
             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 mb-8">
               <Calendar className="w-4 h-4 text-blue-400" />
               <span className="text-blue-400 text-xs font-bold tracking-[0.2em] uppercase">Private Demonstration</span>
             </div>
             
             <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight tracking-tight italic">
               See the <br className="hidden md:block"/>
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-sky-400">Future in Action.</span>
             </h1>
             
             <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed mb-12 italic">
               Experience our AI-first SaaS ecosystem first-hand. Schedule a live walkthrough with our technical architects to explore how autonomous agents and cloud velocity can transform your operations.
             </p>
          </div>
        </section>

        {/* Demo Value Props */}
        <section className="py-16 px-6 bg-white/5 border-y border-white/5">
           <div className="max-w-[1200px] mx-auto grid md:grid-cols-3 gap-8">
              <div className="p-8 border border-white/10 rounded-3xl bg-[#0a0f1d] hover:border-blue-500/50 transition-all group">
                 <div className="w-12 h-12 bg-blue-600/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                    <Play className="w-6 h-6 text-blue-500 group-hover:text-white" />
                 </div>
                 <h3 className="text-xl font-bold mb-4 italic">Live Walkthrough</h3>
                 <p className="text-sm text-slate-400 leading-relaxed">A comprehensive tour of our core dashboard, AI components, and integration layers customized to your industry.</p>
              </div>
              <div className="p-8 border border-white/10 rounded-3xl bg-[#0a0f1d] hover:border-blue-500/50 transition-all group">
                 <div className="w-12 h-12 bg-blue-600/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                    <Monitor className="w-6 h-6 text-blue-500 group-hover:text-white" />
                 </div>
                 <h3 className="text-xl font-bold mb-4 italic">Platform Deep-Dive</h3>
                 <p className="text-sm text-slate-400 leading-relaxed">Explore the technical architecture and security protocols that power our high-velocity engineering lifecycle.</p>
              </div>
              <div className="p-8 border border-white/10 rounded-3xl bg-[#0a0f1d] hover:border-blue-500/50 transition-all group">
                 <div className="w-12 h-12 bg-blue-600/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                    <Zap className="w-6 h-6 text-blue-500 group-hover:text-white" />
                 </div>
                 <h3 className="text-xl font-bold mb-4 italic">Q&A Session</h3>
                 <p className="text-sm text-slate-400 leading-relaxed">Direct access to our senior engineers to answer specific implementation questions and scalability concerns.</p>
              </div>
           </div>
        </section>

        {/* Booking Form Interface */}
        <div id="booking" className="bg-[#020617] border-t border-white/5 py-12">
           <ContactForm />
        </div>

      </main>
      <Footer />
    </>
  );
}
