import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { DevOpsHero } from "@/components/devops-hero";
import { DevOpsStats } from "@/components/devops-stats";
import { DevOpsFeatures } from "@/components/devops-features";
import { DevOpsProcess } from "@/components/devops-process";
import { DevOpsCertifications } from "@/components/devops-certifications";
import { TrustedBySlider } from "@/components/trusted-by-slider";
import { ToolsSlider } from "@/components/tools-slider";
import { ContactForm } from "@/components/contact-form";
import { FloatingElements } from "@/components/floating-elements";

export default function DevOpsPage() {
  return (
    <>
      <Header />
      <main className="overflow-visible bg-[#020617]">
        {/* Modernized Hero Hub */}
        <DevOpsHero />

        {/* Established Trust Registry */}
        <TrustedBySlider />

        {/* Engineering Capacity & Stats Hub */}
        <DevOpsStats />

        {/* Global Technical Service Matrix */}
        <DevOpsFeatures />

        {/* High-Velocity Engineering Lifecycle */}
        <DevOpsProcess />

        {/* Technical Registry Hub (Tools) */}
        <div className="bg-[#020617] py-24 border-t border-white/5 italic">
           <div className="max-w-[1250px] mx-auto px-6 mb-16">
              <span className="text-[10px] text-blue-500 font-black uppercase tracking-[0.5em] mb-4 block italic leading-none">The Technical Registry</span>
              <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter italic uppercase leading-none">Elite <span className="text-blue-500 font-black italic">Toolchain Proficiency.</span></h2>
           </div>
           <ToolsSlider />
        </div>

        {/* Institutional Certification Registry */}
        <DevOpsCertifications />

        {/* Roadmap Contact Interface */}
        <div id="contact" className="bg-[#020617] border-t border-white/5 py-24">
           <ContactForm />
        </div>

        <FloatingElements />
      </main>
      <Footer />
    </>
  );
}
