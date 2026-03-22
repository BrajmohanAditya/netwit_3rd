import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

// High-Fidelity Data Smartz 360 Components
import { DataSmartzHero } from "@/components/data-smartz-hero";
import { DataSmartzIntelligence } from "@/components/data-smartz-intelligence";

export default function DataSmartz360Page() {
  return (
    <>
      <Header />
      <main className="pt-[0px] bg-[#020617]">
        
        {/* Modern Data Intelligence Hero */}
        <DataSmartzHero />
        
        {/* Core Big Data & Intelligence Solutions */}
        <DataSmartzIntelligence />

      </main>
      <Footer />
    </>
  );
}
