"use client";

import { ArrowRight, Box, CreditCard, ShoppingCart } from "lucide-react";
import Link from "next/link";

export function MagentoHero() {
  return (
    <section className="relative w-full min-h-[110vh] bg-[#0c0908] text-white flex items-center overflow-hidden pt-20 font-sans">
      {/* Magento Orange Gradients */}
      <div className="absolute inset-0 z-0">
         <div className="absolute top-[0%] left-[10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-br from-[#F26322]/20 via-[#c9450c]/10 to-transparent blur-[120px] pointer-events-none"></div>
         <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-tl from-[#ff8b4d]/15 via-[#F26322]/20 to-transparent blur-[130px] pointer-events-none"></div>
      </div>
      
      {/* E-commerce Grid */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(242,99,34,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(242,99,34,0.05)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)] pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto w-full px-6 relative z-10 grid lg:grid-cols-[1.1fr,0.9fr] gap-12 items-center">
        
        {/* Left Column */}
        <div className="flex flex-col items-start gap-8 z-20 pt-10">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-[#F26322]/30 bg-[#F26322]/10 backdrop-blur-xl shadow-lg">
            <ShoppingCart className="w-4 h-4 text-[#F26322]" />
            <span className="text-[#F26322] text-xs font-semibold tracking-widest uppercase">Enterprise Global Commerce</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.05] tracking-tight text-white shadow-sm">
            Architect <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff8b4d] via-[#F26322] to-[#c9450c] font-extrabold tracking-tighter">Revenue.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-orange-50/60 max-w-[480px] leading-relaxed font-light">
            When standard shopping carts instantly collapse under massive global inventory, we deploy Magento (Adobe Commerce). We build headless, brutally scalable B2B & B2C mega-stores.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-2">
            <Link href="#contact" className="group relative px-8 py-4 bg-[#F26322] text-white font-bold rounded-full overflow-hidden transition-all hover:scale-105 shadow-[0_0_40px_rgba(242,99,34,0.3)] hover:bg-[#c9450c]">
               Launch Commerce Node
            </Link>
            <button className="flex items-center gap-2 px-8 py-4 rounded-full font-bold border border-white/20 text-white hover:bg-white/5 transition-colors backdrop-blur-md">
               Audit Magento Store <ArrowRight className="w-4 h-4 text-[#F26322]" />
            </button>
          </div>
          
          <div className="flex items-center gap-8 mt-8 pt-6 border-t border-white/10 w-full mb-10 lg:mb-0">
            <div>
              <div className="text-3xl font-bold text-white tracking-tighter">1M<span className="text-slate-500 text-2xl">+</span></div>
              <div className="text-xs text-orange-100/50 font-medium uppercase tracking-wider mt-1">SKUs Handled</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white tracking-tighter">B2B<span className="text-slate-500 text-2xl"></span></div>
              <div className="text-xs text-orange-100/50 font-medium uppercase tracking-wider mt-1">Wholesale Architecture</div>
            </div>
          </div>
        </div>

        {/* Right Column / Abstract Magento Dashboard UI */}
        <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-auto lg:h-[650px] perspective-[1400px] flex justify-center items-center">
           <div className="relative w-full max-w-[480px] h-[550px] transform rotate-y-[-10deg] rotate-x-5 hover:rotate-y-0 hover:rotate-x-0 transition-transform duration-1000 ease-out">
               
               {/* Translucent Dashboard Window */}
               <div className="absolute top-[10%] left-[0%] w-full h-[85%] bg-[#120a07]/90 backdrop-blur-3xl border border-[#F26322]/20 rounded-2xl shadow-[0_40px_100px_rgba(0,0,0,0.9)] z-20 hover:-translate-y-2 transition-transform cursor-default relative overflow-hidden flex flex-col">
                  
                  {/* Dashboard Header */}
                  <div className="h-12 bg-[#0a0503] border-b border-[#F26322]/20 flex items-center px-4 justify-between backdrop-blur-md flex-shrink-0">
                     <div className="flex gap-4 items-center">
                        <div className="w-8 h-8 rounded-lg bg-[#F26322]/20 flex items-center justify-center border border-[#F26322]/40">
                           <ShoppingCart className="w-4 h-4 text-[#F26322]" />
                        </div>
                        <span className="text-xs text-orange-100/70 font-semibold tracking-wider uppercase">Adobe Commerce Core</span>
                     </div>
                     <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                        <span className="text-[10px] text-emerald-500 font-mono">LIVE SYNC</span>
                     </div>
                  </div>
                  
                  {/* Magento Sales/GraphQL Data Content */}
                  <div className="p-6 flex flex-col gap-4 flex-1">
                     
                     {/* Data Blocks */}
                     <div className="grid grid-cols-2 gap-4">
                        <div className="bg-[#1c100a] border border-[#F26322]/10 p-4 rounded-xl">
                           <span className="text-[10px] text-orange-200/50 font-medium uppercase tracking-widest block mb-1">Total Revenue (24H)</span>
                           <span className="text-2xl font-bold tracking-tighter text-white">$432,890<span className="text-emerald-500 text-sm ml-1">+14%</span></span>
                        </div>
                        <div className="bg-[#1c100a] border border-[#F26322]/10 p-4 rounded-xl">
                           <span className="text-[10px] text-orange-200/50 font-medium uppercase tracking-widest block mb-1">Active Sessions</span>
                           <span className="text-2xl font-bold tracking-tighter text-white">12,409<span className="text-[#F26322] text-sm ml-1">Live</span></span>
                        </div>
                     </div>

                     {/* GraphQL Code Mockup */}
                     <div className="mt-2 bg-[#0a0503] border border-[#F26322]/20 p-4 rounded-xl font-mono text-[10px] leading-[1.8] text-slate-300">
                        <span className="text-[#F97583]">query</span> {"{"}<br/>
                        &nbsp;&nbsp;<span className="text-[#B392F0]">products</span>(search: <span className="text-[#9ECBFF]">"Enterprise Server"</span>) {"{"}<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;total_count<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;items {"{"}<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;sku<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;price_range {"{"}<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;minimum_price {"{"}<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;regular_price {"{"} value currency {"}"}<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"}"}<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"}"}<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;{"}"}<br/>
                        &nbsp;&nbsp;{"}"}<br/>
                        {"}"}
                     </div>

                     {/* Progress Bar Log */}
                     <div className="mt-auto">
                        <div className="flex justify-between text-[10px] mb-1">
                           <span className="text-orange-200/50">ElasticSearch Reindex</span>
                           <span className="text-[#F26322] font-mono">87%</span>
                        </div>
                        <div className="h-1.5 w-full bg-[#1c100a] rounded-full overflow-hidden">
                           <div className="h-full bg-gradient-to-r from-[#F26322] to-[#ff8b4d] w-[87%] relative">
                              <div className="absolute top-0 right-0 bottom-0 w-10 bg-white/20 blur-[2px] animate-[slide-right_2s_ease-in-out_infinite]"></div>
                           </div>
                        </div>
                     </div>

                  </div>
               </div>

               {/* Transaction Badge */}
               <div className="absolute top-[35%] -left-[15%] bg-[#120a07] border border-[#ff8b4d]/40 p-5 rounded-2xl shadow-[0_20px_50px_rgba(242,99,34,0.15)] z-40 transform hover:scale-105 transition-transform flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-[#F26322]/10 flex items-center justify-center border border-[#F26322]/30">
                     <CreditCard className="w-6 h-6 text-[#ff8b4d]" />
                  </div>
                  <div>
                     <span className="block text-sm font-bold text-white tracking-tight">B2B Checkout</span>
                     <span className="block text-[10px] text-[#ff8b4d] font-medium mt-0.5">Payment Authorized</span>
                  </div>
               </div>

               {/* Abstract Magento Box */}
               <div className="absolute -top-10 -right-16 opacity-[0.05] z-0 animate-[pulse_8s_linear_infinite] grayscale">
                  <Box className="w-64 h-64" />
               </div>

           </div>
        </div>
      </div>
    </section>
  );
}
