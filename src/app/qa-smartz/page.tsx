import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

// High-Fidelity QA Smartz Components
import { QASmartzHero } from "@/components/qa-smartz-hero";
import { QASmartzVelocity } from "@/components/qa-smartz-velocity";

export default function QASmartzPage() {
  return (
    <>
      <Header />
      <main className="pt-[0px] bg-[#020617]">
        
        {/* Modern QA Velocity Hero */}
        <QASmartzHero />
        
        {/* Core Testing Velocity Solutions */}
        <QASmartzVelocity />

      </main>
      <Footer />
    </>
  );
}
