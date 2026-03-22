import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

// High-Fidelity Accounting Components (No Orange)
import { AccountingHero } from "@/components/accounting-hero";
import { AccountingServices } from "@/components/accounting-services";
import { AccountingStack } from "@/components/accounting-stack";
import { AccountingChallenges } from "@/components/accounting-challenges";

export default function AccountingServicesPage() {
  return (
    <>
      <Header />
      <main className="pt-[0px] bg-[#020617]">
        
        {/* Modern Accounting Hero */}
        <AccountingHero />
        
        {/* Comprehensive Accounting Services */}
        <AccountingServices />

        {/* High-Fidelity Step-by-Step Challenges */}
        <AccountingChallenges />

        {/* Technical Fiscal Stack */}
        <AccountingStack />

      </main>
      <Footer />
    </>
  );
}
