"use client";

import { motion } from "framer-motion";
import { ArrowRight, Cloud, ShieldCheck, Zap, Globe, Cpu, Layers, Microscope, Bot, Database, Activity } from "lucide-react";

const AwsBadge = ({ label, color = "purple", type = "SPECIALTY" }: { label: React.ReactNode, color?: "purple" | "teal", type?: string }) => {
  const bgColor = color === "purple" ? "bg-[#522b91]" : "bg-[#007b82]";
  return (
    <div className={`relative w-[85px] sm:w-[95px] h-[95px] sm:h-[105px] ${bgColor} flex flex-col items-center justify-center p-2 text-center text-white font-black leading-tight drop-shadow-2xl hover:scale-110 transition-transform duration-500 cursor-default group`}
         style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}>
      <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
      <span className="text-[10px] opacity-90 mb-1 tracking-widest uppercase italic">aws</span>
      <span className="text-[9px] leading-[1.2] font-black italic uppercase shadow-sm">{label}</span>
      <span className="text-[6px] opacity-70 mt-2 tracking-[0.2em] font-bold italic">{type}</span>
    </div>
  );
};

const AzureBadge = ({ label, type = "ASSOCIATE", stars = 2 }: { label: React.ReactNode, type?: string, stars?: number }) => {
  return (
    <div 
      className="relative w-[100px] sm:w-[110px] h-[110px] sm:h-[120px] flex flex-col items-center bg-[#005ea5] drop-shadow-2xl hover:scale-110 transition-transform duration-500 cursor-default group overflow-hidden"
      style={{ clipPath: "polygon(0 0, 100% 0, 100% 75%, 50% 100%, 0 75%)" }}
    >
       <div className="absolute top-0 left-0 right-0 h-[30px] bg-[#001e36]"></div>
       <div className="relative z-10 w-full h-full flex flex-col items-center justify-between py-2.5">
         <div className="text-[7px] text-white mt-1 leading-[1.1] font-black tracking-[0.2em] text-center uppercase italic">Microsoft<br/>CERTIFIED</div>
         <div className="bg-white w-[100%] text-[#001e36] text-[8px] sm:text-[9.5px] font-black py-2.5 px-1.5 flex items-center justify-center text-center leading-[1.2] shadow-xl uppercase italic">
           {label}
         </div>
         <div className="flex flex-col items-center mb-2.5">
           <div className="text-white text-[7px] font-black tracking-[0.3em] uppercase italic opacity-70">{type}</div>
           <div className="flex gap-1 mt-1">
             {Array.from({ length: stars }).map((_, i) => (
               <span key={i} className="text-white text-[10px] leading-none">★</span>
             ))}
           </div>
         </div>
       </div>
    </div>
  );
};

export function DevOpsCertifications() {
  return (
    <section className="bg-[#020617] py-24 relative overflow-hidden font-sans border-t border-white/5 italic">
      <div className="max-w-[1250px] mx-auto px-6 relative z-10">
        
        <div className="grid lg:grid-cols-[1.1fr,0.9fr] gap-20 items-center">
           
           {/* Left: Badges Registry */}
           <div className="flex flex-col items-center gap-16 order-2 lg:order-1">
              {/* AWS Badges Grid */}
              <div className="flex flex-col items-center gap-6 relative group">
                <div className="absolute inset-0 bg-purple-600/5 blur-[100px] rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="flex flex-wrap gap-4 justify-center relative z-10">
                  <AwsBadge label={<>SAP on AWS</>} />
                  <AwsBadge label={<>Security</>} />
                  <AwsBadge label={<>Machine<br/>Learning</>} />
                  <AwsBadge label={<>Database</>} />
                  <AwsBadge label={<>Data<br/>Analytics</>} />
                </div>
                <div className="flex flex-wrap gap-4 justify-center relative z-10">
                  <AwsBadge label={<>Advanced<br/>Networking</>} />
                  <AwsBadge label={<>DevOps<br/>Engineer</>} color="teal" type="PROFESSIONAL" />
                  <AwsBadge label={<>Solutions<br/>Architect</>} color="teal" type="PROFESSIONAL" />
                </div>
              </div>

              {/* Azure Badges Grid */}
              <div className="flex flex-col items-center gap-6 relative group">
                <div className="absolute inset-0 bg-blue-600/5 blur-[100px] rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="flex flex-wrap gap-5 justify-center relative z-10">
                  <AzureBadge label={<>AZURE<br/>DEVOPS ENGINEER</>} type="EXPERT" stars={3} />
                  <AzureBadge label={<>AZURE<br/>ADMINISTRATOR</>} type="ASSOCIATE" stars={2} />
                  <AzureBadge label={<>AZURE SECURITY<br/>ENGINEER</>} type="ASSOCIATE" stars={2} />
                </div>
                <div className="flex flex-wrap gap-5 justify-center relative z-10">
                  <AzureBadge label={<>AZURE SOLUTIONS<br/>ARCHITECT</>} type="EXPERT" stars={3} />
                  <AzureBadge label={<>AZURE<br/>AI ENGINEER</>} type="ASSOCIATE" stars={2} />
                  <AzureBadge label={<>AZURE<br/>DATA ENGINEER</>} type="ASSOCIATE" stars={2} />
                </div>
              </div>
           </div>

           {/* Right: Narrative & CTA */}
           <div className="space-y-12 order-1 lg:order-2">
              <div className="space-y-6">
                 <span className="text-[10px] text-blue-500 font-black uppercase tracking-[0.5em] mb-4 block italic leading-none">The Cloud Registry Code</span>
                 <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter italic shadow-sm leading-[1.1]">
                    Certified Azure and <br /><span className="text-blue-500 underline decoration-blue-500/30 font-black italic">AWS High-Proficiency.</span>
                 </h2>
                 <p className="text-slate-400 text-lg font-light leading-relaxed font-sans italic border-l-2 border-blue-500/30 pl-10">
                    Craft innovative solutions and exceptional customer journeys by harnessing our leading cloud-based capability and AI. We hold elite status across AWS and Azure technical registries.
                 </p>
              </div>

              <div className="flex flex-col gap-6 pt-6">
                 <button className="group relative px-10 py-5 bg-blue-600 text-white font-black rounded-full overflow-hidden transition-all hover:scale-105 shadow-[0_20px_50px_rgba(37,99,235,0.4)] hover:bg-blue-500 italic uppercase tracking-wider flex items-center justify-center gap-3">
                    Hire AWS DevOps Engineer <ArrowRight className="w-5 h-5 group-hover:translate-x-1" />
                 </button>
                 <button className="flex items-center justify-center gap-3 px-10 py-5 rounded-full font-black border border-white/10 text-white hover:bg-white/5 transition-all backdrop-blur-md italic uppercase tracking-wider group bg-white/5">
                    Hire Azure DevOps Engineer <ArrowRight className="w-5 h-5 group-hover:translate-x-1" />
                 </button>
              </div>

              <div className="pt-12 border-t border-white/5 flex items-center gap-8">
                 <div className="flex items-center gap-4 text-slate-500 grayscale group hover:grayscale-0 transition-all">
                    <Cloud className="w-10 h-10 opacity-30 group-hover:text-blue-500 group-hover:opacity-100 transition-all" />
                    <div className="text-left">
                       <span className="block text-[8px] font-black uppercase tracking-widest italic leading-none">Global Architecture</span>
                       <span className="block text-sm font-bold text-white italic">Multi-Cloud Core</span>
                    </div>
                 </div>
                 <div className="flex items-center gap-4 text-slate-500 grayscale group hover:grayscale-0 transition-all">
                    <ShieldCheck className="w-10 h-10 opacity-30 group-hover:text-emerald-500 group-hover:opacity-100 transition-all" />
                    <div className="text-left">
                       <span className="block text-[8px] font-black uppercase tracking-widest italic leading-none">Security Registry</span>
                       <span className="block text-sm font-bold text-white italic">NIST Aligned Hub</span>
                    </div>
                 </div>
              </div>
           </div>

        </div>

      </div>
    </section>
  );
}
