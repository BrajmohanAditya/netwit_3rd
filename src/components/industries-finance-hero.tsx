"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Activity, Lock } from "lucide-react";

export function FinanceHero() {
  return (
    <section className="relative min-h-[600px] w-full flex flex-col justify-center p-6 bg-[#0B1528] overflow-hidden m-0">
      
      {/* Background & Patterns for Finance */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        
        {/* Subtle glowing lines representing trading charts/networks */}
        <div className="absolute top-[20%] left-[-10%] w-[800px] h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent rotate-12 blur-[1px]"></div>
        <div className="absolute top-[40%] left-[-10%] w-[1000px] h-[1px] bg-gradient-to-r from-transparent via-blue-500/60 to-transparent rotate-[-5deg] blur-[1px]"></div>
        <div className="absolute bottom-[20%] right-[-10%] w-[600px] h-[1px] bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent rotate-[15deg] blur-[1px]"></div>

        {/* Global glowing spheres */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[10%] w-[600px] h-[600px] bg-emerald-600/10 rounded-full blur-[100px]"></div>
        
        {/* Very subtle grid denoting structure/data */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMGg2MHY2MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDU5LjVMNTkuNSAwIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvc3ZnPg==')] opacity-60"></div>
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto w-full grid lg:grid-cols-2 gap-12 items-center mt-8">
        
        {/* Left Side: Content */}
        <div className="flex flex-col text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-900/40 border border-cyan-500/30 w-fit mb-6 shadow-[0_0_15px_rgba(6,182,212,0.1)]">
             <ShieldCheck className="w-4 h-4 text-cyan-400" />
             <span className="text-cyan-300 text-[12px] font-bold tracking-wider uppercase">Finance & Banking</span>
          </div>

          <h1 className="text-[40px] md:text-[56px] font-bold text-white mb-6 tracking-tight leading-[1.1]">
            Bank-Grade DevOps for <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">Financial Innovators</span>
          </h1>
          
          <p className="text-[16px] md:text-[18px] text-gray-400 mb-8 max-w-[500px] leading-[1.6]">
            Meet the demanding requirements of digital finance with our secure, compliant DevOps solutions. Accelerate modernization safely for banks, fintechs, and global trading platforms.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-5 w-full mb-10">
            <Link href="#contact" className="flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-600 to-blue-700 text-white text-[15px] font-bold py-3.5 px-8 transition-all hover:scale-[1.02] w-full sm:w-auto rounded-[4px] shadow-[0_4px_25px_rgba(8,145,178,0.4)]">
              Secure Your Systems <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="#compliance" className="flex items-center justify-center bg-transparent border-[1.5px] border-gray-600 text-gray-300 text-[15px] font-bold py-3.5 px-8 transition-colors hover:bg-white/5 hover:border-gray-500 hover:text-white w-full sm:w-auto rounded-[4px]">
              Review Compliance
            </Link>
          </div>

          <div className="flex flex-wrap items-center gap-6">
             <div className="flex items-center gap-2 text-gray-300 text-[13px] font-medium bg-white/5 px-3 py-1.5 rounded-[4px]">
                <Lock className="w-4 h-4 text-emerald-400" />
                <span>PCI-DSS Compliant</span>
             </div>
             <div className="flex items-center gap-2 text-gray-300 text-[13px] font-medium bg-white/5 px-3 py-1.5 rounded-[4px]">
                <Lock className="w-4 h-4 text-emerald-400" />
                <span>ISO 27001</span>
             </div>
             <div className="flex items-center gap-2 text-gray-300 text-[13px] font-medium bg-white/5 px-3 py-1.5 rounded-[4px]">
                <Activity className="w-4 h-4 text-emerald-400" />
                <span>Zero Downtime Deployments</span>
             </div>
          </div>
        </div>

        {/* Right Side: High-Tech Finance Visual */}
        <div className="relative hidden lg:block h-[500px] w-full">
           {/* Futuristic UI Elements representing finance/trading */}
           <div className="absolute right-0 top-[10%] w-[450px] h-[350px] bg-[#121B2F] border border-cyan-500/20 rounded-xl shadow-2xl p-6 overflow-hidden">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                   <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                     <span className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse"></span>
                   </div>
                   <div>
                     <p className="text-[14px] font-bold text-white">System Status</p>
                     <p className="text-[10px] text-cyan-400">All Nodes Encrypted</p>
                   </div>
                </div>
                <div className="text-right">
                  <p className="text-[20px] font-black text-white font-mono">99.999%</p>
                  <p className="text-[10px] text-gray-400">Availability</p>
                </div>
              </div>

              {/* Chart Mockup */}
              <div className="w-full h-[150px] flex items-end gap-2 border-b border-gray-700/50 pb-2">
                 {[40, 60, 45, 80, 50, 95, 70, 110, 85, 120, 100].map((h, i) => (
                    <div key={i} className="flex-1 bg-gradient-to-t from-cyan-500/20 to-cyan-400/80 rounded-t-sm" style={{ height: `${h}px`, transition: 'height 1s ease-in-out' }}></div>
                 ))}
              </div>

              <div className="grid grid-cols-2 gap-4 mt-6">
                 <div className="bg-white/5 rounded-lg p-3 border border-white/5">
                    <p className="text-[11px] text-gray-400 mb-1">Latency Avg</p>
                    <p className="text-[16px] font-bold text-emerald-400">0.8 ms</p>
                 </div>
                 <div className="bg-white/5 rounded-lg p-3 border border-white/5">
                    <p className="text-[11px] text-gray-400 mb-1">Threats Blocked</p>
                    <p className="text-[16px] font-bold text-white">142,890</p>
                 </div>
              </div>
           </div>

           {/* Floating Compliance Badge */}
           <div className="absolute bottom-[5%] left-[5%] bg-gradient-to-br from-emerald-500 to-emerald-700 p-4 rounded-xl shadow-2xl flex items-center gap-4 animate-bounce" style={{ animationDuration: '4s' }}>
              <div className="bg-white/20 p-2 rounded-full">
                 <ShieldCheck className="w-6 h-6 text-white" />
              </div>
              <div className="text-white">
                 <p className="text-[12px] font-bold">Bank-Grade Crypto</p>
                 <p className="text-[10px] opacity-80">AES-256 Enabled Over Grid</p>
              </div>
           </div>
        </div>

      </div>
    </section>
  );
}
