import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import ComprehensiveServices from "./ComprehensiveServices";
import AccountingChallenges from "./AccountingChallenges";
import AccountingTools from "./AccountingTools";
import SuccessStories from "./SuccessStories";
export default function AccountingServicesPage() {
  return (
    <>
      <Header />
      <main className="pt-[80px]">
        
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-white min-h-[550px] md:min-h-[650px] flex items-center">
          
          {/* Background Container for Right-Aligned Image */}
          <div className="absolute inset-0 w-full h-full pointer-events-none">
            {/* Background Image positioned on the right half */}
            <div className="absolute top-0 right-0 w-full md:w-[65%] h-full">
              <Image 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1920" 
                alt="Accounting Services Working Professional"
                fill
                className="object-cover object-center md:object-right"
                priority
              />
            </div>
            
            {/* White Gradient Overlay merging from left to right */}
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-transparent w-full md:w-[70%] z-10"></div>
          </div>

          <div className="relative z-20 max-w-[1200px] mx-auto w-full px-6 py-20 flex flex-col items-start justify-center text-left">
            <div className="max-w-[600px]">
              
              {/* Over Title */}
              <h3 className="text-[12px] md:text-[13px] font-bold text-[#111827] uppercase tracking-[0.05em] mb-4">
                Next-Gen AI Accounting & Bookkeeping Software
              </h3>
              
              {/* Main Title */}
              <h1 className="text-[38px] md:text-[48px] lg:text-[56px] font-extrabold text-[#111827] leading-[1.1] mb-6 tracking-tight">
                SaaS Bookkeeping <br />
                Services, Modernized <br />
                with AI
              </h1>
              
              {/* Subtitle */}
              <p className="text-[15px] md:text-[17px] text-[#4b5563] mb-10 font-medium leading-[1.6] max-w-[480px]">
                Customized, tech-driven support to scale your financial systems on demand.
              </p>
              
              {/* CTA Button */}
              <Link 
                href="#contact" 
                className="bg-[#ea580c] hover:bg-[#c2410c] text-white font-bold py-3.5 px-8 rounded shadow-[0_6px_20px_0_rgba(234,88,12,0.3)] transition-all flex items-center gap-2 text-[14px] md:text-[15px] inline-flex group w-fit"
              >
                Start Financial Journey with AI <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              
            </div>
          </div>
        </section>

        <ComprehensiveServices />
        <AccountingChallenges />
        <AccountingTools />
        <SuccessStories />
        
      </main>
      <Footer />
    </>
  );
}
