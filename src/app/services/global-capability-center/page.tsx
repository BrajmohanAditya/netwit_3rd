import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Link from "next/link";
import Image from "next/image";

import WhyPartner from "./WhyPartner";
import GCCServices from "./GCCServices";
import GCCFramework from "./GCCFramework";
import SustainabilitySection from "./SustainabilitySection";
import EvaluateSetup from "./EvaluateSetup";
import CybersecurityBanner from "./CybersecurityBanner";
import { ContactForm } from "@/components/contact-form";

export default function GlobalCapabilityCenterPage() {
  return (
    <>
      <Header />
      <main className="pt-[80px]">

        {/* Hero Section */}
        <section className="relative overflow-hidden bg-black min-h-[500px] md:min-h-[70vh] flex items-center justify-center">

          {/* Background Image Container */}
          <div className="absolute inset-0 w-full h-full z-0">
            {/* Using a stock image with tall corporate buildings similar to the screenshot */}
            <Image
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1920"
              alt="Global Capability Center Skyscraper Background"
              fill
              className="object-cover object-center opacity-50 mix-blend-overlay"
              priority
            />
            {/* Dark gradient overlay to ensure text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/80 w-full z-10"></div>
            {/* Added a strong dark fade to guarantee the mood from the image */}
            <div className="absolute inset-0 bg-black/60 z-10"></div>
          </div>

          <div className="relative z-20 max-w-[1200px] mx-auto w-full px-6 flex justify-center py-24">
            {/* Text Container constrained to 800px to sit centrally but text-left aligned */}
            <div className="max-w-[700px] w-full text-left">

              {/* Main Title */}
              <h1 className="text-[32px] md:text-[44px] lg:text-[50px] font-bold text-white leading-[1.2] mb-6 tracking-tight">
                Build, Scale, and Transform with <br className="hidden md:block" />
                Global Capability Centers
              </h1>

              {/* Subtitle */}
              <p className="text-[14px] md:text-[16px] text-gray-200 mb-8 font-medium leading-[1.6] max-w-[600px]">
                Collaborate with us to build strategic hubs that deliver tangible growth,
                enhanced efficiency, and a competitive edge.
              </p>

              {/* CTA Transparent Button */}
              <Link
                href="#contact"
                className="inline-flex items-center justify-center border border-white bg-transparent hover:bg-white/10 text-white text-[11px] md:text-[13px] font-bold tracking-[0.05em] py-3 md:py-3.5 px-6 md:px-8 transition-colors duration-300 w-fit"
              >
                TALK TO OUR EXPERTS
              </Link>

            </div>
          </div>
        </section>

        <WhyPartner />
        <GCCServices />
        <GCCFramework />
        <SustainabilitySection />
        <EvaluateSetup />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
