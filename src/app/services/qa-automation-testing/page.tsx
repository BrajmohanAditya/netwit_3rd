import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import QAAutomationTools from "./QAAutomationTools";
import QAServices from "./QAServices";
import QAProcess from "./QAProcess";
export default function QAAutomationTestingPage() {
  return (
    <>
      <Header />
      <main className="pt-[80px]">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-[#0a0a0a] min-h-[500px] md:min-h-[600px] flex items-center">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 w-full h-full pointer-events-none">
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent z-10"></div>
            {/* Background Image */}
            <Image 
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1920" 
              alt="QA Automation Background" 
              fill
              className="object-cover opacity-50"
              priority
            />
            
            {/* Fake Decorative Gears Overlay (Simulating the image requested) if we wanted absolute accuracy without exact assets */}
            <div className="absolute top-1/2 -translate-y-1/2 right-10 md:right-[10%] z-10 opacity-40 mix-blend-screen hidden md:block">
              <svg width="400" height="400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" className="text-blue-200">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"></path>
              </svg>
            </div>
          </div>

          <div className="relative z-20 max-w-[1200px] mx-auto w-full px-6 py-24 md:py-32 flex flex-col items-start text-left">
            
            {/* Top Label */}
            <h3 className="text-[14px] md:text-[15px] font-bold text-white mb-4 tracking-[0.02em]">
              AI-Powered Quality Assurance and Testing Company
            </h3>
            
            {/* Main Title */}
            <h1 className="text-[36px] md:text-[44px] lg:text-[54px] font-extrabold text-white leading-[1.15] mb-5 tracking-tight max-w-[800px]">
              Quality Assurance & <br className="hidden md:block"/> Automation Testing for SaaS<br className="hidden md:block"/> Products
            </h1>
            
            {/* Subtitle */}
            <p className="text-[16px] md:text-[18px] text-[#e5e7eb] mb-10 font-medium max-w-[650px] leading-relaxed">
              AI-based software testing ensures reliability and mitigates performance risks
            </p>
            
            {/* CTA Button */}
            <Link 
              href="#contact" 
              className="bg-[#ea580c] hover:bg-[#c2410c] text-white font-bold py-3.5 px-8 rounded shadow-[0_4px_14px_0_rgba(234,88,12,0.39)] transition-all flex items-center gap-2 text-[15px] group"
            >
              Start Your SaaS Testing Journey <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>

          </div>
        </section>
        
        {/* Services Section */}
        <QAServices />

        {/* Process Section */}
        <QAProcess />

        {/* Tools & Platforms Section */}
        <QAAutomationTools />

      </main>
      <Footer />
    </>
  );
}
