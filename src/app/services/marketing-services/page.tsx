import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import MarketingExpertise from "./MarketingExpertise";
import ComprehensiveMarketing from "./ComprehensiveMarketing";
import CustomMarketingPlan from "./CustomMarketingPlan";
import MarketingTools from "./MarketingTools";

export default function MarketingServicesPage() {
  return (
    <>
      <Header />
      <main className="pt-[80px]">
        
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-[#020617] min-h-[550px] md:min-h-[600px] flex items-center">
          
          {/* Background Image Container */}
          <div className="absolute inset-0 w-full h-full z-0">
            {/* Using a stock image with data/charts theme similar to the screenshot */}
            <Image 
              src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=1920" 
              alt="Marketing Services Data Background"
              fill
              className="object-cover object-center opacity-40 mix-blend-luminosity"
              priority
            />
            {/* Dark gradient overlay to ensure text readability on the left */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent w-full z-10"></div>
          </div>

          <div className="relative z-20 max-w-[1200px] mx-auto w-full px-6 py-20 flex flex-col justify-center text-left">
            <div className="max-w-[700px]">
              
              {/* Over Title */}
              <h3 className="text-[13px] md:text-[15px] font-bold text-white mb-4">
                AI-Driven Marketing Services
              </h3>
              
              {/* Main Title */}
              <h1 className="text-[40px] md:text-[48px] lg:text-[56px] font-bold text-white leading-[1.15] mb-6 tracking-tight">
                Powerful SaaS <br className="hidden sm:block"/>
                Marketing with AI
              </h1>
              
              {/* Subtitle */}
              <p className="text-[16px] md:text-[18px] lg:text-[20px] text-gray-200 mb-10 font-medium leading-[1.5] max-w-[500px]">
                Result-driven, cost-effective campaigns <br className="hidden sm:block"/> amplify reach and increase impact
              </p>
              
              {/* CTA Button */}
              <Link 
                href="#contact" 
                className="bg-primary hover:bg-primary-600 text-white font-semibold py-3.5 px-7 rounded-[4px] shadow-primary/20 transition-all flex items-center gap-2 text-[15px] inline-flex group w-fit"
              >
                Build Your AI-Powered Marketing Plan 
                <ArrowRight className="w-5 h-5 ml-1 transition-transform group-hover:translate-x-1" strokeWidth={2} />
              </Link>
              
            </div>
          </div>
        </section>

        <MarketingExpertise />
        <ComprehensiveMarketing />
        <CustomMarketingPlan />
        <MarketingTools />

      </main>
      <Footer />
    </>
  );
}
