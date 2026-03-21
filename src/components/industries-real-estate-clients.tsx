"use client";

import { Home, Key, Map, LocateFixed, Blocks } from "lucide-react";
import { motion } from "framer-motion";

export function RealEstateClients() {
  const clients = [
    { icon: <Home />, name: "Urban", suffix: "Estates", theme: "from-[#00f2fe] to-[#4facfe]" },
    { icon: <Map />, name: "Terra", suffix: "Holdings", theme: "from-[#4facfe] to-indigo-500" },
    { icon: <LocateFixed />, name: "Geo", suffix: "Search", theme: "from-emerald-400 to-[#00f2fe]" },
    { icon: <Key />, name: "Key", suffix: "Properties", theme: "from-indigo-400 to-purple-500" },
    { icon: <Blocks />, name: "Build", suffix: "Pro", theme: "from-[#00f2fe] to-blue-500" },
  ];

  return (
    <section className="w-full bg-[#030303] py-16 px-6 flex flex-col items-center border-t border-white/5 relative overflow-hidden">
      
      {/* Background Subtle Effects */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PG1hdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPjxnIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAyKSIgc3Ryb2tlLXdpZHRoPSIxIj48cGF0aCBkPSJNMCAwdjQwbTQwLTIwaC00MCIvPjwvZz48L3N2Zz4=')] opacity-30"></div>

      <div className="max-w-[1200px] w-full flex flex-col items-center relative z-10">
          <div className="text-[12px] text-gray-400 font-bold mb-12 text-center uppercase tracking-[0.3em] relative w-full flex justify-center items-center">
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
            <span className="px-6 text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-200">Trusted By Global Property Leaders</span>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
          </div>
         
         <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 md:gap-10 items-center justify-items-center w-full">
            {clients.map((client, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex items-center gap-3 group transition-all duration-300 cursor-pointer"
              >
                <div className="relative w-12 h-12 rounded-xl flex items-center justify-center bg-[#0f0f12] border border-white/10 overflow-hidden group-hover:border-white/30 transition-colors">
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity bg-gradient-to-br ${client.theme}`}></div>
                  <div className={`text-gray-500 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-br transition-all ${client.theme}`}>
                     {client.icon}
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="font-sans text-[20px] font-black text-gray-300 tracking-tight leading-none group-hover:text-white transition-colors">{client.name}</span>
                  <span className={`text-[10px] font-bold uppercase tracking-widest leading-none mt-1 text-transparent bg-clip-text bg-gradient-to-r ${client.theme} opacity-70 group-hover:opacity-100 transition-opacity`}>{client.suffix}</span>
                </div>
              </motion.div>
            ))}
         </div>
      </div>
      
    </section>
  );
}
