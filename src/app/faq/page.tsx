import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FAQ } from "@/components/faq";
import { ContactForm } from "@/components/contact-form";

export default function FAQPage() {
  return (
    <>
      <Header />
      <main className="pt-[100px] bg-[#020617] text-white min-h-screen">
        
        {/* FAQ Page Hero */}
        <section className="py-24 px-6 border-b border-white/5 bg-white/[0.02]">
          <div className="max-w-[1000px] mx-auto text-center space-y-6">
            <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase italic">Knowledge Base</span>
            <h1 className="text-4xl md:text-7xl font-black italic tracking-tighter shadow-sm leading-none uppercase">
               Frequently <br/>
               <span className="text-primary">Asked Questions.</span>
            </h1>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed border-l-2 border-primary/30 pl-8 italic">
              Find answers to common technical queries regarding our AI-first engineering protocols, global team extensions, and digital transformation roadmaps.
            </p>
          </div>
        </section>

        {/* Existing FAQ Section (already branded) */}
        <FAQ />

        {/* Support CTA */}
        <section className="py-20 px-6 border-t border-white/5 text-center">
           <div className="max-w-2xl mx-auto space-y-8">
              <h2 className="text-3xl font-black italic uppercase italic">Still Have Questions?</h2>
              <p className="text-slate-400 font-light italic">Our principal engineering support desk is available 24/7 for strategic enterprise queries.</p>
           </div>
        </section>

        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
