import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ContactForm } from "@/components/contact-form";

// High-Fidelity Cyber Smartz Components
import { CyberSmartzHero } from "@/components/cyber-smartz-hero";
import { CyberSmartzIntelligence } from "@/components/cyber-smartz-intelligence";

export default function SecureSmartzPage() {
  return (
    <div className="bg-[#020617] min-h-screen text-white w-full overflow-x-hidden font-sans">
      <Header />
      <main className="pt-[0px]">
        <CyberSmartzHero />
        <CyberSmartzIntelligence />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
