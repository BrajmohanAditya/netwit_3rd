"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Utensils, Smartphone, TrendingUp, Store } from "lucide-react";

export function FoodHero() {
  return (
    <section className="relative min-h-[650px] w-full flex flex-col justify-center p-6 bg-[#fffdfa] overflow-hidden m-0">
      
      {/* Background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        
        {/* Soft, appetizing gradient orbs */}
        <div className="absolute top-[-20%] right-[-10%] w-[700px] h-[700px] bg-primary/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px]"></div>
        <div className="absolute top-[30%] left-[20%] w-[300px] h-[300px] bg-primary/5 rounded-full blur-[80px]"></div>

        {/* Diagonal subtle pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMjBMMjAgMCIgc3Ryb2tlPSJyZ2JhKDI0MCwxMTEsMTgsMC4wNCkiIHN0cm9rZS13aWR0aD0iMSIvPjwvc3ZnPg==')] opacity-50"></div>
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto w-full grid lg:grid-cols-2 gap-12 items-center mt-8">
        
        {/* Left Side: Content */}
        <div className="flex flex-col text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 w-fit mb-6">
             <Utensils className="w-4 h-4 text-primary" />
             <span className="text-primary text-[12px] font-bold tracking-wider uppercase">Food Tech & Restaurants</span>
          </div>

          <h1 className="text-[42px] md:text-[56px] font-extrabold text-[#1a1f33] mb-6 tracking-tight leading-[1.1]">
            Scale Your <br/><span className="text-primary">Food Delivery Apps</span> Without a Hitch
          </h1>
          
          <p className="text-[16px] md:text-[18px] text-gray-600 mb-8 max-w-[500px] leading-[1.6]">
            Power your food tech infrastructure with DevOps engineered for rush hours. From seamless POS integrations to burstable cloud capacity—never miss a single order again.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-5 w-full mb-10">
            <Link href="#contact" className="flex items-center justify-center gap-2 bg-primary text-white text-[15px] font-bold py-3.5 px-8 transition-transform hover:-translate-y-0.5 w-full sm:w-auto rounded-full shadow-[0_4px_25px_rgba(11,61,145,0.3)]">
              Optimize Operations <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="#solutions" className="flex items-center justify-center bg-white border border-gray-200 text-gray-700 text-[15px] font-bold py-3.5 px-8 transition-colors hover:border-primary/30 hover:bg-primary/5 hover:text-primary w-full sm:w-auto rounded-full shadow-sm">
              View Capabilities
            </Link>
          </div>

          <div className="flex flex-wrap items-center gap-6">
             <div className="flex items-center gap-2 text-gray-600 text-[13px] font-bold bg-white border border-gray-100 px-4 py-2 rounded-full shadow-sm">
                <Store className="w-4 h-4 text-primary" />
                <span>Multi-Location Sync</span>
             </div>
             <div className="flex items-center gap-2 text-gray-600 text-[13px] font-bold bg-white border border-gray-100 px-4 py-2 rounded-full shadow-sm">
                <TrendingUp className="w-4 h-4 text-primary" />
                <span>99.99% Rush Hour Uptime</span>
             </div>
             <div className="flex items-center gap-2 text-gray-600 text-[13px] font-bold bg-white border border-gray-100 px-4 py-2 rounded-full shadow-sm">
                <Smartphone className="w-4 h-4 text-primary" />
                <span>Delivery App APIs</span>
             </div>
          </div>
        </div>

        {/* Right Side: Visuals */}
        <div className="relative hidden lg:block w-full h-[550px]">
           {/* Abstract Phone Mockup / POS Screen overlay */}
           <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[300px] h-[550px] bg-white rounded-[40px] shadow-[0_20px_60px_rgba(0,0,0,0.08)] border-[6px] border-gray-100 overflow-hidden z-10">
              
              {/* App Header */}
              <div className="bg-primary p-6 pt-10 text-white flex flex-col items-center relative">
                 <div className="absolute top-2 left-1/2 -translate-x-1/2 w-1/3 h-6 bg-gray-100 rounded-b-2xl"></div>
                 <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-2">
                    <Utensils className="w-6 h-6 text-white" />
                 </div>
                 <p className="text-[16px] font-bold">Incoming Orders</p>
                 <p className="text-[32px] font-black mt-2">1,402 / min</p>
              </div>

              {/* App Body */}
              <div className="bg-gray-50 h-full p-4 flex flex-col gap-3">
                 {[1,2,3].map((_, i) => (
                    <div key={i} className="bg-white p-3 rounded-xl shadow-sm border border-orange-50 flex items-center justify-between">
                       <div className="flex flex-col">
                          <span className="text-[12px] font-bold text-gray-800">Order #{8409 + i}</span>
                          <span className="text-[10px] text-orange-500 font-medium">Processing • Edge Node A</span>
                       </div>
                       <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                          <ArrowRight className="w-3 h-3 text-green-600 -rotate-45" />
                       </div>
                    </div>
                 ))}
                 
                 <div className="mt-4 bg-orange-50 border border-orange-100 p-3 rounded-xl">
                    <div className="flex justify-between items-center mb-2">
                       <span className="text-[11px] font-bold text-orange-800">Server Capacity Burst</span>
                       <span className="text-[11px] font-bold text-orange-600">Active</span>
                    </div>
                    <div className="w-full bg-orange-200 h-1.5 rounded-full overflow-hidden">
                       <div className="bg-orange-500 w-[85%] h-full rounded-full"></div>
                    </div>
                 </div>
              </div>

           </div>

           {/* Floating elements behind/around the mockup */}
           <div className="absolute top-[15%] right-0 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 animate-bounce z-20" style={{ animationDuration: '3s' }}>
              <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                 <svg className="w-5 h-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                 </svg>
              </div>
              <div className="flex flex-col">
                 <span className="text-[12px] font-bold text-gray-800">Latency: 12ms</span>
                 <span className="text-[10px] text-gray-500">Seamless transactions</span>
              </div>
           </div>

           <div className="absolute bottom-[20%] left-[-10%] bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 animate-bounce z-20" style={{ animationDuration: '4s' }}>
              <div className="flex flex-col">
                 <span className="text-[12px] font-bold text-gray-800 text-right">POS Syncing</span>
                 <span className="text-[10px] text-green-500 text-right">100% Real-time</span>
              </div>
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                 <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                 </svg>
              </div>
           </div>

        </div>

      </div>
    </section>
  );
}
