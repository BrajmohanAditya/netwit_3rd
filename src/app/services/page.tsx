import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ServiceCards } from "@/components/service-cards";
import { ContactForm } from "@/components/contact-form";

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="pt-[100px] bg-[#020617] text-white">
        
        {/* Sub-Header for the Services Page */}
        <section className="py-20 px-6 border-b border-white/5">
          <div className="max-w-[1000px] mx-auto text-center space-y-6">
            <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase">The Netwit Portfolio</span>
            <h1 className="text-4xl md:text-7xl font-black italic tracking-tighter shadow-sm leading-none">
               Infinite <span className="text-primary">Scalability.</span><br/>
               Global <span className="text-primary">Execution.</span>
            </h1>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed border-l-2 border-primary/30 pl-8">
              Explore our comprehensive suite of high-fidelity digital engineering services. From AI-first development to global talent augmentation, we provide the technical blueprints for market leaders.
            </p>
          </div>
        </section>

        {/* Existing Service Cards Component (already using corporate branding) */}
        <ServiceCards />

        {/* Additional Specialized Services Grid (if needed) */}
        <section className="py-24 px-6 bg-white/[0.02] border-t border-white/5">
           <div className="max-w-[1250px] mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                 <div className="p-8 border border-white/5 rounded-3xl bg-[#0f172a] hover:border-primary/30 transition-all">
                    <h4 className="text-xl font-bold mb-4 italic">Accounting SVCS</h4>
                    <p className="text-slate-400 text-sm mb-6">Fractional accounting and specialized financial reporting for high-growth tech firms.</p>
                    <a href="/services/accounting-services" className="text-primary text-xs font-bold uppercase tracking-widest hover:underline">Learn More</a>
                 </div>
                 <div className="p-8 border border-white/5 rounded-3xl bg-[#0f172a] hover:border-primary/30 transition-all">
                    <h4 className="text-xl font-bold mb-4 italic">Customer Support</h4>
                    <p className="text-slate-400 text-sm mb-6">Institutional-grade customer experience teams for global enterprise assets.</p>
                    <a href="/services/customer-support" className="text-primary text-xs font-bold uppercase tracking-widest hover:underline">Learn More</a>
                 </div>
                 <div className="p-8 border border-white/5 rounded-3xl bg-[#0f172a] hover:border-primary/30 transition-all">
                    <h4 className="text-xl font-bold mb-4 italic">Marketing SVCS</h4>
                    <p className="text-slate-400 text-sm mb-6">Targeted outreach and growth strategy for SaaS product ecosystems.</p>
                    <a href="/services/marketing-services" className="text-primary text-xs font-bold uppercase tracking-widest hover:underline">Learn More</a>
                 </div>
                 <div className="p-8 border border-white/5 rounded-3xl bg-[#0f172a] hover:border-primary/30 transition-all">
                    <h4 className="text-xl font-bold mb-4 italic">Sales Acceleration</h4>
                    <p className="text-slate-400 text-sm mb-6">Optimized lead intake and high-velocity sales engineering for technical builds.</p>
                    <a href="/services/sales-acceleration" className="text-primary text-xs font-bold uppercase tracking-widest hover:underline">Learn More</a>
                 </div>
              </div>
           </div>
        </section>

        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
