"use client";

import { Database, Map, Target, Link as LinkIcon, Building2 } from "lucide-react";
import { motion } from "framer-motion";

export function RealEstateSolutions() {
  const solutions = [
    {
      title: "Scalable Property Databases",
      desc: "Handle millions of high-resolution images and listing records with zero latency. We build robust NoSQL architectures that return complex property searches in milliseconds.",
      icon: <Database className="w-8 h-8 text-[#00f2fe]" />,
      theme: "from-[#00f2fe]/20 to-[#4facfe]/20"
    },
    {
      title: "Map API Integrations",
      desc: "Create immersive neighborhood discovery experiences. We optimize Google Maps and Mapbox payload sizes to ensure smooth panning and zooming without overloading costs.",
      icon: <Map className="w-8 h-8 text-[#4facfe]" />,
      theme: "from-[#4facfe]/20 to-[#00f2fe]/20"
    },
    {
      title: "CRM & Lead Automation",
      desc: "Never let a potential buyer slip through. We connect your frontend portals directly into your sales CRMs, automating email pipelines immediately upon property inquiries.",
      icon: <Target className="w-8 h-8 text-emerald-400" />,
      theme: "from-emerald-400/20 to-teal-400/20"
    },
    {
      title: "MLS Connectivity Pipelines",
      desc: "Stop dealing with fragmented, outdated listings. We engineer automated ETL pipelines that synchronize your platform with national MLS databases continuously in real-time.",
      icon: <LinkIcon className="w-8 h-8 text-indigo-400" />,
      theme: "from-indigo-400/20 to-purple-400/20"
    }
  ];

  return (
    <section className="w-full bg-[#030303] py-24 px-6 flex flex-col items-center relative overflow-hidden">
      
      {/* Background gradients */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#00f2fe]/5 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="max-w-[1240px] w-full flex flex-col lg:flex-row gap-16 items-start relative z-10">
         
         <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/3 sticky top-32"
         >
            <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(0,242,254,0.1)] backdrop-blur-xl">
               <Building2 className="w-8 h-8 text-[#00f2fe]" />
            </div>
            <p className="text-[12px] text-[#00f2fe] font-bold tracking-[0.2em] uppercase mb-4">
               CORE CAPABILITIES
            </p>
            <h2 className="text-[36px] md:text-[48px] font-black text-white mb-6 tracking-tight leading-[1.1]">
               Foundation Built <br />
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f2fe] to-[#4facfe]">for Scale</span>
            </h2>
            <p className="text-[16px] text-gray-400 mb-10 leading-[1.7] font-light">
               Property platforms live and die by their data accuracy and search speed. We eliminate infrastructure bottlenecks so your users can find their dream homes without friction.
            </p>
            <div className="p-6 bg-white/5 border border-white/10 rounded-xl backdrop-blur-md relative overflow-hidden group">
               <div className="absolute inset-0 bg-gradient-to-r from-[#00f2fe]/10 to-transparent translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></div>
               <h4 className="text-[16px] font-bold text-white mb-2 relative z-10 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#00f2fe] animate-pulse"></div>
                  Industry Standard
               </h4>
               <p className="text-[14px] text-gray-400 leading-relaxed font-light relative z-10">
                  Real estate portals using optimized NoSQL geographic indexing see a <span className="text-white font-medium">40% increase</span> in average session duration and lead capture.
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
