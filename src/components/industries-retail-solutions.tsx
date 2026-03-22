"use client";

import { ShoppingCart, Server, ShieldCheck, Cpu, Smartphone } from "lucide-react";
import { motion } from "framer-motion";

export function RetailSolutions() {
  const solutions = [
    {
      title: "Auto-Scaling E-Commerce",
      desc: "Black Friday traffic won't crash your systems anymore. We deploy Kubernetes-based auto-scaling clusters that seamlessly handle sudden 100x traffic spikes without latency.",
      icon: <Server className="w-8 h-8 text-[#d53a9d]" />,
      theme: "from-[#d53a9d]/20 to-[#743ad5]/20"
    },
    {
      title: "Omni-Channel Sync",
      desc: "Merge your physical POS systems with your online storefront. We build sub-millisecond data sync pipelines so inventory is perfectly accurate across every channel.",
      icon: <ShoppingCart className="w-8 h-8 text-[#743ad5]" />,
      theme: "from-[#743ad5]/20 to-[#d53a9d]/20"
    },
    {
      title: "PCI-DSS Compliant Security",
      desc: "Protect buyer data with military-grade encryption workflows. We harden your entire DevOps pipeline ensuring all payment data streams exceed global compliance standards.",
      icon: <ShieldCheck className="w-8 h-8 text-[#ff71cb]" />,
      theme: "from-[#ff71cb]/20 to-pink-400/20"
    },
    {
      title: "AI Demand Forecasting",
      desc: "Stop guessing what will sell. We integrate Machine Learning engines into your data lakes to predict inventory demands based on real-time market trends.",
      icon: <Cpu className="w-8 h-8 text-fuchsia-400" />,
      theme: "from-fuchsia-400/20 to-purple-400/20"
    }
  ];

  return (
    <section className="w-full bg-[#030303] py-24 px-6 flex flex-col items-center relative overflow-hidden">
      
      {/* Background gradients */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#d53a9d]/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="max-w-[1240px] w-full flex flex-col lg:flex-row gap-16 items-start relative z-10">
         
         <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/3 sticky top-32"
         >
            <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(213,58,157,0.1)] backdrop-blur-xl">
               <Smartphone className="w-8 h-8 text-[#d53a9d]" />
            </div>
            <p className="text-[12px] text-[#d53a9d] font-bold tracking-[0.2em] uppercase mb-4">
               CORE CAPABILITIES
            </p>
            <h2 className="text-[36px] md:text-[48px] font-black text-white mb-6 tracking-tight leading-[1.1]">
               Architected <br />
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d53a9d] to-[#743ad5]">For Growth</span>
            </h2>
            <p className="text-[16px] text-gray-400 mb-10 leading-[1.7] font-light">
               Retail is a game of microseconds and perfect logistics. From the Add-To-Cart click to warehouse dispatch, we engineer robust, zero-downtime solutions.
            </p>
            <div className="p-6 bg-white/5 border border-white/10 rounded-xl backdrop-blur-md relative overflow-hidden group">
               <div className="absolute inset-0 bg-gradient-to-r from-[#d53a9d]/10 to-transparent translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></div>
               <h4 className="text-[16px] font-bold text-white mb-2 relative z-10 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#d53a9d] animate-pulse"></div>
                  Peak Performance
               </h4>
               <p className="text-[14px] text-gray-400 leading-relaxed font-light relative z-10">
                  Clients deploying our auto-scaling architecture report <span className="text-white font-medium">99.999% uptime</span> during Black Friday and Cyber Monday events.
               </p>
            </div>
         </motion.div>

         <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {solutions.map((sol, i) => (
               <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  key={i} 
                  className="group bg-[#0f0f12]/80 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col items-start relative overflow-hidden h-full shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
               >
                  
                  {/* Subtle Gradient background slice */}
                  <div className={`absolute top-0 right-0 w-40 h-40 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 bg-gradient-to-br ${sol.theme}`}></div>
                  
                  <div className="w-16 h-16 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shadow-[0_0_15px_rgba(0,0,0,0.2)] group-hover:-translate-y-2 group-hover:bg-white/10 transition-all duration-300 mb-8 backdrop-blur-sm">
                     <div className="group-hover:scale-110 transition-transform duration-300">
                        {sol.icon}
                     </div>
                  </div>
                  
                  <h3 className="text-[22px] font-bold text-white mb-4 tracking-tight">{sol.title}</h3>
                  <p className="text-[15px] text-gray-400 leading-[1.7] font-light">{sol.desc}</p>
                  
               </motion.div>
            ))}
         </div>

      </div>

    </section>
  );
}
