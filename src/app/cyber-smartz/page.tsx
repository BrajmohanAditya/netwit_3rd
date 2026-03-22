import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

// High-Fidelity Cyber Smartz Components
import { CyberSmartzHero } from "@/components/cyber-smartz-hero";
import { CyberSmartzIntelligence } from "@/components/cyber-smartz-intelligence";

export default function CyberSmartzPage() {
  return (
    <>
      <Header />
      <main className="pt-[0px] bg-[#020617]">
        
        {/* Modern Cyber Intelligence Hero */}
        <CyberSmartzHero />
        
        {/* Core AI Safeguard Solutions */}
        <CyberSmartzIntelligence />

      </main>
      <Footer />
    </>
  );
}
