import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import CustomerSupportIntro from "./CustomerSupportIntro";
import TrustedExpertise from "./TrustedExpertise";
import ComprehensiveSupport from "./ComprehensiveSupport";
import SolveChallenges from "./SolveChallenges";
import CustomerSupportTools from "./CustomerSupportTools";
export default function CustomerSupportPage() {
  return (
    <>
      <Header />
      <main className="pt-[80px]">
        
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-black min-h-[500px] md:min-h-[600px] flex items-center">
          
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 w-full h-full pointer-events-none">
            {/* Background Image of Call Center */}
            <Image 
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1920" 
              alt="Call Center Background" 
              fill
              className="object-cover opacity-30 object-right"
              priority
            />
            {/* Dark Gradient Overlay to make left side solid black and right side faded */}
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/95 to-black/50 z-10"></div>
          </div>

          <div className="relative z-20 max-w-[1200px] mx-auto w-full px-6 py-20 flex flex-col md:flex-row items-center justify-between gap-12">
            
            {/* Left Content */}
            <div className="w-full md:w-[55%] flex flex-col items-start text-left">
              
              {/* Main Title */}
              <h1 className="text-[36px] md:text-[46px] lg:text-[54px] font-extrabold text-white leading-[1.2] mb-6 tracking-tight">
                AI-Driven, Tech-Smart <br className="hidden md:block"/>
                Customer Support
              </h1>
              
              {/* Subtitle */}
              <p className="text-[16px] md:text-[18px] text-[#d1d5db] mb-10 font-medium leading-[1.6]">
                Intelligent processes boost adoption, <br className="hidden md:block"/>
                retention, and your bottom line
              </p>
              
              {/* CTA Button */}
              <Link 
                href="#contact" 
                className="bg-[#f97316] hover:bg-[#ea580c] text-white font-bold py-3.5 px-6 rounded shadow-lg transition-all flex items-center gap-2 text-[14px] md:text-[15px] group"
              >
                Boost CSAT with AI-driven Customer Service 
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              
            </div>

            {/* Right Content - Visual Element */}
            <div className="w-full md:w-[45%] flex justify-center md:justify-end">
              <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full border-[10px] sm:border-[16px] border-[#f97316] shadow-2xl overflow-hidden shadow-[#f97316]/20">
                {/* Image of support representative */}
                <Image 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800" 
                  alt="Customer Support Representative"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </div>

          </div>
        </section>

        <CustomerSupportIntro />
        <TrustedExpertise />
        <ComprehensiveSupport />
        <SolveChallenges />
        <CustomerSupportTools />
      </main>
      <Footer />
    </>
  );
}
