"use client";

import { ArrowRight, ShoppingBag, CreditCard, Zap, Package, Tag, Fingerprint } from "lucide-react";
import Link from "next/link";

export function EcommerceHero() {
  return (
    <section className="relative w-full min-h-screen bg-[#050505] text-white flex items-center overflow-hidden pt-20">
      {/* High-Converting Vibrant Gradients */}
      <div className="absolute inset-0 z-0 opacity-40">
         <div className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-bl from-emerald-500/20 via-teal-400/10 to-transparent blur-[120px] pointer-events-none"></div>
         <div className="absolute bottom-[-10%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-tr from-pink-500/15 via-rose-400/5 to-transparent blur-[130px] pointer-events-none"></div>
      </div>

      <div className="max-w-[1200px] mx-auto w-full px-6 relative z-10 grid lg:grid-cols-[1.1fr,0.9fr] gap-12 items-center">
        
        {/* Left Column */}
        <div className="flex flex-col items-start gap-8 z-20 pt-10">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 backdrop-blur-md shadow-[0_0_20px_rgba(16,185,129,0.15)]">
            <ShoppingBag className="w-4 h-4 text-emerald-400" />
            <span className="text-emerald-400 text-xs font-bold tracking-widest uppercase">Elite Commerce Developers</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.05] tracking-tight text-white">
            Architect <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400">Extreme Conversion.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 max-w-[500px] leading-relaxed font-light">
            Every millisecond of load time kills sales. Hire headless commerce experts, Shopify Plus developers, and Magento architects to build stores that convert relentlessly and never crash under Black Friday loads.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-2">
            <Link href="#contact" className="group relative px-8 py-4 bg-emerald-500 text-black font-bold rounded-full overflow-hidden transition-all hover:scale-105 hover:bg-emerald-400 shadow-[0_0_30px_rgba(16,185,129,0.3)]">
               Hire Your Dev Team
            </Link>
            <button className="flex items-center gap-2 px-8 py-4 rounded-full font-bold border border-white/20 text-white hover:bg-white/5 transition-colors">
               Explore Headless <ArrowRight className="w-4 h-4 text-emerald-400" />
            </button>
          </div>
          
          <div className="flex items-center gap-8 mt-8 pt-6 border-t border-white/10 w-full mb-10 lg:mb-0">
            <div>
              <div className="text-3xl font-black text-white">-60<span className="text-emerald-400">%</span></div>
              <div className="text-xs text-gray-500 font-medium uppercase tracking-wider mt-1">Av. Bounce Rate</div>
            </div>
            <div>
              <div className="text-3xl font-black text-white">35<span className="text-emerald-400">%</span></div>
              <div className="text-xs text-gray-500 font-medium uppercase tracking-wider mt-1">Av. Revenue Lift</div>
            </div>
          </div>
        </div>

        {/* Right Column / Floating Checkout & Product UI */}
        <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-auto lg:h-[650px] perspective-[1000px] flex justify-center items-center">
           <div className="relative w-full max-w-[450px] h-full transform rotate-y-[-10deg] rotate-x-6 hover:rotate-y-0 hover:rotate-x-0 transition-transform duration-700">
               
               {/* Main Product Card */}
               <div className="absolute top-[5%] left-[10%] w-[320px] bg-[#0a0a0f] border border-white/10 rounded-3xl p-4 shadow-2xl z-20 hover:-translate-y-2 transition-transform cursor-pointer overflow-hidden group">
                  <div className="w-full h-[220px] bg-gradient-to-tr from-zinc-800 to-zinc-900 rounded-2xl mb-4 relative overflow-hidden flex items-center justify-center">
                     <span className="absolute top-3 left-3 bg-white text-black text-[10px] font-bold px-2 py-1 rounded-full">NEW ARRIVAL</span>
                     <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(16,185,129,0.2),transparent)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                     <Package className="w-20 h-20 text-white/10 group-hover:scale-110 transition-transform duration-700 block" />
                  </div>
                  <div className="flex justify-between items-start mb-2">
                     <div>
                        <h3 className="text-white font-bold text-lg leading-tight">Matte AirPods Pro</h3>
                        <p className="text-gray-500 text-xs mt-1">Midnight Black Edition</p>
                     </div>
                     <span className="text-emerald-400 font-black text-xl">$249</span>
                  </div>
                  <div className="flex gap-2 mt-4 font-mono">
                     <button className="flex-1 bg-white text-black py-3 rounded-xl font-bold text-sm shadow-[0_0_20px_rgba(255,255,255,0.1)] flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors">
                        Add to Bag
                     </button>
                  </div>
               </div>

               {/* Stripe / Checkout Floating Block */}
               <div className="absolute top-[45%] right-[0%] w-[260px] bg-[#111116] border border-white/10 rounded-2xl p-4 shadow-[0_30px_60px_rgba(0,0,0,0.5)] z-30 hover:-translate-y-2 transition-transform cursor-pointer">
                  <div className="flex items-center gap-2 mb-4 border-b border-white/5 pb-3">
                     <CreditCard className="w-4 h-4 text-emerald-400" />
                     <span className="text-xs font-bold text-white uppercase tracking-wider">Fast Checkout</span>
                  </div>
                  <div className="space-y-3">
                     <div className="w-full h-10 bg-[#1a1a24] rounded-lg border border-white/5 flex items-center px-3">
                        <div className="w-4 h-3 bg-red-500 rounded-sm mr-2 flex justify-center -space-x-1 overflow-hidden"><div className="w-3 h-3 bg-orange-400 rounded-full mix-blend-multiply border border-none"></div></div>
                        <span className="text-[10px] text-gray-400 font-mono tracking-widest">•••• •••• •••• 4242</span>
                     </div>
                     <button className="w-full bg-[#635BFF] py-2.5 rounded-lg text-white font-bold text-xs shadow-[0_5px_15px_rgba(99,91,255,0.3)] flex justify-center items-center gap-1">
                        Pay $249.00
                     </button>
                  </div>
               </div>

               {/* Promotion / Discount Tag */}
               <div className="absolute top-[20%] right-[0%] bg-pink-500 text-white font-black text-xs py-3 px-4 rounded-xl shadow-[0_10px_30px_rgba(236,72,153,0.4)] z-40 transform rotate-12 hover:scale-110 transition-transform flex items-center gap-2">
                  <Tag className="w-4 h-4" />
                  SUMMER20
               </div>

               {/* Performance / Speed Badge */}
               <div className="absolute bottom-[20%] left-[0%] bg-[#0a0a0f] border border-emerald-500/30 p-3 rounded-2xl shadow-xl z-40 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                     <Zap className="w-5 h-5 text-emerald-400 animate-pulse" />
                  </div>
                  <div>
                     <span className="block text-white font-black leading-tight text-sm">45ms</span>
                     <span className="block text-[10px] text-gray-500 font-medium uppercase tracking-widest">Time to Interactive</span>
                  </div>
               </div>

           </div>
        </div>
      </div>
    </section>
  );
}
