import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

// High-Fidelity QA Components (No Orange)
import { QAAutomationHero } from "@/components/qa-automation-hero";
import { QAAutomationServices } from "@/components/qa-automation-services";
import { QAAutomationStack } from "@/components/qa-automation-stack";
import { QAAutomationFlow } from "@/components/qa-automation-flow";

export default function QAAutomationTestingPage() {
  return (
    <>
      <Header />
      <main className="pt-[0px] bg-[#020617]">
        
        {/* Modern QA Hero */}
        <QAAutomationHero />
        
        {/* Comprehensive QA Services */}
        <QAAutomationServices />

        {/* High-Fidelity Step-by-Step Flow */}
        <QAAutomationFlow />

        {/* Technical Stack Arsenal */}
        <QAAutomationStack />

      </main>
      <Footer />
    </>
  );
}
