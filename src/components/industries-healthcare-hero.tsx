"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldPlus, HeartPulse, Stethoscope, FileCheck } from "lucide-react";

export function HealthcareHero() {
  return (
    <section className="relative min-h-[650px] w-full flex flex-col justify-center p-6 bg-gradient-to-b from-[#f2fcfb] to-white overflow-hidden m-0">
      
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        
        {/* Soft Medical Teal/Blue gradients */}
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-teal-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[100px]"></div>

        {/* DNA / Medical plus grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTI5IDMwdi0xaDJ2MWgxdjJoLTF2MWgtMnYtMWgtMXYtMmgxem0wIDB6IiBmaWxsPSJyZ2JhKDEzLCAxNDgsIDEzNiwgMC4xKSIvPjwvc3ZnPg==')] opacity-60"></div>
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto w-full grid lg:grid-cols-2 gap-12 items-center mt-8">
        
        {/* Left Side: Content */}
        <div className="flex flex-col text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-100/80 border border-teal-200 w-fit mb-6 shadow-sm">
             <HeartPulse className="w-4 h-4 text-teal-600" />
             <span className="text-teal-800 text-[12px] font-bold tracking-wider uppercase">HealthTech & Providers</span>
          </div>

          <h1 className="text-[42px] md:text-[56px] font-extrabold text-[#1a1f33] mb-6 tracking-tight leading-[1.1]">
            Scale Your HealthTech <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-600">Securely & Compliantly</span>
          </h1>
          
          <p className="text-[16px] md:text-[18px] text-gray-600 mb-8 max-w-[500px] leading-[1.6]">
            Transform healthcare delivery with HIPAA-compliant DevOps infrastructures. We help health tech startups and leading hospitals secure patient data while scaling telemedicine rapidly.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-5 w-full mb-10">
            <Link href="#contact" className="flex items-center justify-center gap-2 bg-gradient-to-r from-teal-500 to-teal-700 text-white text-[15px] font-bold py-3.5 px-8 transition-transform hover:-translate-y-0.5 w-full sm:w-auto rounded-full shadow-[0_4px_20px_rgba(20,184,166,0.3)]">
              Secure Your Systems <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="#solutions" className="flex items-center justify-center bg-white border border-gray-200 text-gray-700 text-[15px] font-bold py-3.5 px-8 transition-colors hover:border-teal-200 hover:bg-teal-50 hover:text-teal-800 w-full sm:w-auto rounded-full shadow-sm">
              Explore EHR Integrations
            </Link>
          </div>

          <div className="flex flex-wrap items-center gap-6">
             <div className="flex items-center gap-2 text-gray-700 text-[13px] font-bold bg-white border border-gray-100 px-4 py-2 rounded-full shadow-sm">
                <ShieldPlus className="w-4 h-4 text-teal-500" />
                <span>100% HIPAA Compliant</span>
             </div>
             <div className="flex items-center gap-2 text-gray-700 text-[13px] font-bold bg-white border border-gray-100 px-4 py-2 rounded-full shadow-sm">
                <FileCheck className="w-4 h-4 text-teal-500" />
                <span>FHIR API Ready</span>
             </div>
             <div className="flex items-center gap-2 text-gray-700 text-[13px] font-bold bg-white border border-gray-100 px-4 py-2 rounded-full shadow-sm">
                <Stethoscope className="w-4 h-4 text-teal-500" />
                <span>Zero-Downtime Telehealth</span>
             </div>
          </div>
        </div>

        {/* Right Side: Visuals */}
        <div className="relative hidden lg:block w-full h-[550px]">
           {/* Main Hospital / Tech Image */}
           <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[420px] h-[480px] bg-white rounded-3xl overflow-hidden shadow-2xl group border border-gray-100">
             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105"></div>
             
             {/* Gradient overlay for text */}
             <div className="absolute inset-0 bg-gradient-to-t from-teal-900/90 via-teal-900/20 to-transparent"></div>
             
             <div className="absolute bottom-8 left-8 right-8">
               <div className="flex items-center gap-3 mb-3">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                  <span className="text-white text-[12px] font-bold uppercase tracking-wider">Live Monitoring</span>
               </div>
               <p className="text-white text-[24px] font-bold leading-tight drop-shadow-md">
                 Predictive Vitals & Cloud EHR Sync
               </p>
             </div>
           </div>

           {/* Floating elements behind/around the mockup representing data */}
           <div className="absolute top-[10%] left-[-5%] bg-white p-4 rounded-xl shadow-xl flex items-center gap-3 animate-bounce z-20" style={{ animationDuration: '3.5s' }}>
              <div className="w-10 h-10 bg-teal-50 rounded-full flex items-center justify-center">
                 <ShieldPlus className="w-5 h-5 text-teal-600" />
              </div>
              <div className="flex flex-col">
                 <span className="text-[12px] font-bold text-gray-800">PHI Encrypted</span>
                 <span className="text-[10px] text-gray-500">AES-256 At Rest</span>
              </div>
           </div>

           <div className="absolute bottom-[20%] right-[-10%] bg-white p-4 rounded-xl shadow-xl flex flex-col gap-2 animate-bounce z-20" style={{ animationDuration: '4.5s' }}>
              <div className="flex items-center justify-between gap-4">
                 <span className="text-[12px] font-bold text-gray-800">Telemed API Traffic</span>
                 <span className="text-[10px] text-green-500 font-bold">+204%</span>
              </div>
              <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                 <div className="h-full bg-gradient-to-r from-teal-400 to-blue-500 w-[78%]"></div>
              </div>
           </div>

        </div>

      </div>
    </section>
  );
}
