"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function ItStaffHero() {
  return (
    <section className="relative min-h-[600px] w-full flex flex-col items-center justify-center p-6 bg-[#0a0f1c] overflow-hidden m-0">
      
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-[100px]"></div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDM5LjVMMzkuNSAwIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiIHN0cm9rZS13aWR0aD0iMSIvPjwvc3ZnPg==')]"></div>
      </div>

      <div className="relative z-10 max-w-[1200px] w-full grid lg:grid-cols-2 gap-12 items-center mt-8">
        
        <div className="flex flex-col text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 w-fit mb-6">
             <span className="w-2 h-2 rounded-full bg-[#f06f12]"></span>
             <span className="text-white/80 text-[12px] font-medium tracking-wider uppercase">IT Staff Augmentation</span>
          </div>

          <h1 className="text-[40px] md:text-[56px] font-bold text-white mb-6 tracking-tight leading-[1.1]">
            Scale Your Engineering Team <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f06f12] to-orange-400">On Demand</span>
          </h1>
          
          <p className="text-[16px] md:text-[18px] text-gray-400 mb-8 max-w-[500px] leading-[1.6]">
            Access the top 1% of pre-vetted tech talent. Augment your in-house team with seasoned developers, engineers, and IT professionals who align perfectly with your culture and goals.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-5 w-full mb-10">
            <Link href="#contact" className="flex items-center justify-center gap-2 bg-[#f06f12] text-white text-[15px] font-bold py-3.5 px-8 transition-transform hover:-translate-y-0.5 w-full sm:w-auto rounded-[3px] shadow-[0_4px_20px_rgba(240,111,18,0.3)]">
              Hire Developers <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="#models" className="flex items-center justify-center bg-transparent border-[1.5px] border-white/20 text-white text-[15px] font-bold py-3.5 px-8 transition-colors hover:bg-white/5 w-full sm:w-auto rounded-[3px]">
              View Engagement Models
            </Link>
          </div>

          <div className="flex items-center gap-6">
             <div className="flex items-center gap-2 text-white/70 text-[13px] font-medium">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                <span>Pre-vetted Talent</span>
             </div>
             <div className="flex items-center gap-2 text-white/70 text-[13px] font-medium">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                <span>Quick Onboarding</span>
             </div>
             <div className="flex items-center gap-2 text-white/70 text-[13px] font-medium">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                <span>Zero Risk Trial</span>
             </div>
          </div>
        </div>

        {/* Hero Illustration / Graphics */}
        <div className="relative hidden lg:flex justify-end">
           <div className="relative w-[500px] h-[500px]">
              {/* Abstract composition showing connecting profiles/nodes */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-white/10 rounded-full animate-spin-slow"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] border border-white/10 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '15s' }}></div>
              
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-br from-[#f06f12] to-orange-600 rounded-2xl flex items-center justify-center shadow-2xl z-20">
                 <span className="text-white font-bold text-xl">Top 1%</span>
              </div>

              {/* Floating elements */}
              <div className="absolute top-[15%] left-[15%] w-16 h-16 bg-[#1a1f33] border border-white/10 rounded-xl shadow-xl flex items-center justify-center p-3 animate-bounce" style={{ animationDuration: '3s' }}>
                <span className="text-[10px] font-bold text-blue-400">React</span>
              </div>
              <div className="absolute bottom-[20%] left-[5%] w-16 h-16 bg-[#1a1f33] border border-white/10 rounded-xl shadow-xl flex items-center justify-center p-3 animate-bounce" style={{ animationDuration: '4s' }}>
                <span className="text-[10px] font-bold text-yellow-400">Node.js</span>
              </div>
              <div className="absolute top-[20%] right-[5%] w-16 h-16 bg-[#1a1f33] border border-white/10 rounded-xl shadow-xl flex items-center justify-center p-3 animate-bounce" style={{ animationDuration: '3.5s' }}>
                <span className="text-[10px] font-bold text-green-400">AWS</span>
              </div>
              <div className="absolute bottom-[15%] right-[15%] w-16 h-16 bg-[#1a1f33] border border-white/10 rounded-xl shadow-xl flex items-center justify-center p-3 animate-bounce" style={{ animationDuration: '4.5s' }}>
                <span className="text-[10px] font-bold text-orange-400">Java</span>
              </div>
           </div>
        </div>

      </div>
    </section>
  );
}
