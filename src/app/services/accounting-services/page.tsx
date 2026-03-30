import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ContactForm } from "@/components/contact-form";

// High-Fidelity Accounting Components (No Orange)
import { AccountingHero } from "@/components/accounting-hero";
import { AccountingServices } from "@/components/accounting-services";
import { AccountingStack } from "@/components/accounting-stack";
import { AccountingChallenges } from "@/components/accounting-challenges";

// Local Sub-components
import SuccessStories from "./SuccessStories";

export default function AccountingServicesPage() {
  return (
    <>
      <Header />
      <main className="pt-[0px] bg-[#020617] text-white">
        
        {/* Modern Accounting Hero */}
        <AccountingHero />

        {/* Strategic Introduction */}
        <section className="py-24 px-6 border-y border-white/5 bg-gradient-to-br from-primary-900/10 via-[#020617] to-transparent">
           <div className="max-w-[1000px] mx-auto text-center space-y-8">
              <span className="text-[10px] text-primary-500 font-black uppercase tracking-[0.5em] italic">The Netwit Fiscal Protocol</span>
              <h2 className="text-4xl md:text-6xl font-black italic tracking-tighter leading-tight uppercase underline decoration-primary-600/30">Capital Stewardship <br /><span className="text-primary-500">Architecture.</span></h2>
              <p className="text-lg md:text-xl text-slate-400 font-light leading-relaxed max-w-2xl mx-auto border-l-2 border-primary/30 pl-8 text-left md:text-center italic">
                 Traditional accounting is a rearview mirror. We provide a heads-up display. Netwit's AI-first financial engine transforms your ledger into a strategic asset, enabling real-time capital velocity and institutional-grade compliance for the global SaaS market.
              </p>
           </div>
        </section>
        
        {/* Comprehensive Accounting Services */}
        <AccountingServices />

        {/* High-Fidelity Step-by-Step Challenges */}
        <AccountingChallenges />

        {/* Success Stories Implementation */}
        <div className="bg-white">
           <SuccessStories />
        </div>

        {/* Technical Fiscal Stack */}
        <AccountingStack />

        {/* Unified Contact Interface */}
        <section className="py-24 bg-[#18181b] border-t border-white/5">
           <ContactForm />
        </section>

      </main>
      <Footer />
    </>
  );
}
