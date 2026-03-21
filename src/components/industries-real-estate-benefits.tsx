"use client";

import { Zap, Users, Link as LinkIcon, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

export function RealEstateBenefits() {
  const benefits = [
    {
      icon: <Zap className="w-8 h-8 text-[#00f2fe]" />,
      title: "Fast Property Searches",
      desc: "Instantaneous page loads and search filtering ensure users never leave your portal due to frustrating wait times.",
      delay: 0
    },
    {
      icon: <Users className="w-8 h-8 text-[#4facfe]" />,
      title: "Better Lead Management",
      desc: "Funnel high-intent buyers directly into your CRM the second they interact with a property, boosting agent responsiveness.",
      delay: 0.1
    },
    {
      icon: <LinkIcon className="w-8 h-8 text-[#00f2fe]" />,
      title: "Seamless Integrations",
      desc: "We eliminate disconnected systems. From Docusign APIs to mortgage calculators, your entire stack functions as a cohesive unit.",
      delay: 0.2
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-[#4facfe]" />,
      title: "Improved Conversions",
      desc: "By removing friction points across the user journey, from map load to form submission, overall lead capture rates soar.",
      delay: 0.3
    }
  ];

  return (
    <section className="w-full bg-[#030303] py-24 px-6 flex flex-col items-center relative overflow-hidden">
      
      {/* Background radial gradient */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#4facfe]/5 rounded-full blur-[150px] -translate-y-1/2 pointer-events-none"></div>

      <div className="max-w-[1240px] w-full text-center relative z-10">
        
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
        >
           <p className="text-[12px] text-[#00f2fe] font-bold tracking-[0.2em] uppercase mb-4">
             IMPACT ON BROKERAGES
           </p>
           <h2 className="text-[36px] md:text-[52px] font-black text-white mb-6 tracking-tight leading-[1.1]">
             Closing Deals <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f2fe] to-[#4facfe]">Faster</span>
           </h2>
           <p className="text-[16px] text-gray-400 mb-16 max-w-[650px] mx-auto leading-[1.8] font-light">
             When your digital infrastructure runs seamlessly, real estate agents can focus entirely on client relationships rather than software bugs.
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
               <div className="w-16 h-16 rounded-full bg-[#0f0f12] border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(0,242,254,0.3)] transition-all duration-300 relative overflow-hidden">
                 <div className="absolute inset-0 bg-gradient-to-r from-[#00f2fe]/10 to-[#4facfe]/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
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
