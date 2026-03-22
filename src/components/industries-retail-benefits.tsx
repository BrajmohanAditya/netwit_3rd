"use client";

import { Zap, Box, ArrowRightLeft, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

export function RetailBenefits() {
  const benefits = [
    {
      icon: <Zap className="w-8 h-8 text-[#d53a9d]" />,
      title: "Zero Abandoned Carts",
      desc: "Sub-millisecond latency on checkout pages ensures users never abandon their cart due to slow loading speeds.",
      delay: 0
    },
    {
      icon: <Box className="w-8 h-8 text-[#743ad5]" />,
      title: "Perfect Inventory",
      desc: "Live synchronization across all digital and physical stores guarantees that out-of-stock items are instantly hidden from buyers.",
      delay: 0.1
    },
    {
      icon: <ArrowRightLeft className="w-8 h-8 text-[#d53a9d]" />,
      title: "Unified Supply Chain",
      desc: "We integrate your logistics APIs so suppliers and warehouses trigger automatic restocks when inventory drops below ML-predicted thresholds.",
      delay: 0.2
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-[#743ad5]" />,
      title: "Massive Revenue Lift",
      desc: "A frictionless shopping experience and bulletproof technical foundation lead to significantly higher conversion rates overall.",
      delay: 0.3
    }
  ];

  return (
    <section className="w-full bg-[#030303] py-24 px-6 flex flex-col items-center relative overflow-hidden">
      
      {/* Background radial gradient */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#743ad5]/5 rounded-full blur-[150px] -translate-y-1/2 pointer-events-none"></div>

      <div className="max-w-[1240px] w-full text-center relative z-10">
        
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
        >
           <p className="text-[12px] text-[#d53a9d] font-bold tracking-[0.2em] uppercase mb-4">
             IMPACT ON REVENUE
           </p>
           <h2 className="text-[36px] md:text-[52px] font-black text-white mb-6 tracking-tight leading-[1.1]">
             Converting Clicks to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d53a9d] to-[#743ad5]">Customers</span>
           </h2>
           <p className="text-[16px] text-gray-400 mb-16 max-w-[650px] mx-auto leading-[1.8] font-light">
             When your e-commerce infrastructure is robust, fast, and intelligent, your entire focus shifts from fixing bugs to scaling your brand.
           </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, idx) => (
            <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-50px" }}
               transition={{ duration: 0.5, delay: benefit.delay }}
               key={idx} 
               className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 flex flex-col items-center text-center hover:border-white/30 hover:bg-white/10 transition-all duration-300 group shadow-[0_4px_20px_rgba(0,0,0,0.2)]"
            >
               <div className="w-16 h-16 rounded-full bg-[#0f0f12] border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(213,58,157,0.3)] transition-all duration-300 relative overflow-hidden">
                 <div className="absolute inset-0 bg-gradient-to-r from-[#d53a9d]/10 to-[#743ad5]/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                 <div className="relative z-10">
                    {benefit.icon}
                 </div>
               </div>
               <h4 className="text-[18px] font-bold text-white mb-3 tracking-tight">{benefit.title}</h4>
               <p className="text-[14px] text-gray-400 font-light leading-[1.7]">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
      
    </section>
  );
}
