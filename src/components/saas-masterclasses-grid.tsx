"use client";

import { ArrowRight, Award, BookOpen, Clock, Globe, GraduationCap, MonitorPlay, ShieldCheck, Sparkles, User, Zap } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const masterclassItems = [
  { 
    title: "Advanced Kubernetes", 
    description: "Expert-level workshop on multi-cluster management, service mesh secrets, and automated disaster recovery at global scale.", 
    tag: "Premium",
    duration: "12 Weeks",
    instructor: "Mark L.",
    role: "Cloud Architect",
    level: "Architectural Mastery"
  },
  { 
    title: "AWS Solutions Architect", 
    description: "Intensive certification prep focusing on complex infrastructure design patterns and enterprise policy governance.", 
    tag: "Premium",
    duration: "8 Weeks",
    instructor: "Elena P.",
    role: "AWS Certified Trainer",
    level: "Professional Certification"
  },
  { 
    title: "DevOps Leadership", 
    description: "Transforming engineering culture. Management skills for leading high-velocity DevOps and Platform teams.", 
    tag: "Premium",
    duration: "6 Weeks",
    instructor: "Nora B.",
    role: "VP Engineering",
    level: "Executive Leadership"
  },
  { 
    title: "Cloud Security", 
    description: "Zero-trust implementation and threat modeling for sensitive enterprise workloads in high-compliance sectors.", 
    tag: "Premium",
    duration: "10 Weeks",
    instructor: "David R.",
    role: "SecOps Principal",
    level: "Security Mastery"
  },
  { 
    title: "AI/ML Implementation", 
    description: "Integrating generative models and MLOps pipelines into existing distributed enterprise architectures.", 
    tag: "Premium",
    duration: "14 Weeks",
    instructor: "Sasha K.",
    role: "AI Research Lead",
    level: "Technical Mastery"
  },
  { 
    title: "Platform Engineering", 
    description: "The modern successor to DevOps. Building internal developer platforms that scale with organizational growth.", 
    tag: "Premium",
    duration: "9 Weeks",
    instructor: "Marco V.",
    role: "Platform Lead",
    level: "Systems Mastery"
  },
];

export function SaasMasterclassesGrid() {
  const [activeLevel, setActiveLevel] = useState("All");
  const levels = ["All", "Architectural Mastery", "Professional Certification", "Executive Leadership", "Security Mastery", "Technical Mastery", "Systems Mastery"];

  const filteredItems = activeLevel === "All" 
    ? masterclassItems 
    : masterclassItems.filter(item => item.level === activeLevel);

  return (
    <section id="masterclasses" className="bg-[#050505] py-24 relative overflow-hidden font-sans border-t border-white/5">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Academy Filter Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
           <div className="flex flex-wrap items-center gap-2">
              {levels.map((l) => (
                 <button
                    key={l}
                    onClick={() => setActiveLevel(l)}
                    className={`px-6 py-2 rounded-full text-[10px] font-black tracking-[0.2em] uppercase transition-all duration-300 border ${
                      activeLevel === l 
                        ? "bg-[#e11d48] text-white border-[#e11d48] shadow-[0_0_20px_rgba(225,29,72,0.3)]" 
                        : "bg-white/5 text-slate-500 border-white/10 hover:border-white/20 hover:text-slate-300"
                    }`}
                 >
                    {l}
                 </button>
              ))}
           </div>
           
           <div className="flex items-center gap-6">
              <span className="text-[10px] text-slate-600 font-bold uppercase tracking-widest flex items-center gap-2">
                 <ShieldCheck className="w-4 h-4 text-rose-500" /> Authorized Certifications
              </span>
           </div>
        </div>

        {/* Masterclass Hub Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredItems.map((item, index) => (
            <div 
              key={index} 
              className="group bg-[#0d0d0d] border border-white/5 rounded-[3rem] overflow-hidden flex flex-col h-full hover:border-[#e11d48]/50 transition-all duration-500 hover:-translate-y-2 shadow-2xl relative"
            >
              {/* Workshop Top Banner */}
              <div className="h-64 w-full bg-slate-900/40 relative overflow-hidden border-b border-white/5 p-10 flex flex-col justify-between">
                 <div className="absolute inset-0 bg-gradient-to-br from-[#e11d48]/10 via-transparent to-transparent pointer-events-none"></div>
                 <div className="flex justify-between items-start">
                    <span className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.4em] text-[#fb7185] bg-white/5 px-3 py-1 rounded-full border border-white/5">
                       Mastery {index+1}
                    </span>
                    <button className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-600 hover:text-white transition-colors border border-white/5">
                       <MonitorPlay className="w-4 h-4" />
                    </button>
                 </div>
                 
                 <div className="mt-8">
                    <h4 className="text-2xl font-black text-white leading-tight group-hover:text-rose-50 transition-colors italic">{item.title}</h4>
                 </div>
              </div>

              {/* Class Master Metadata */}
              <div className="p-10 pb-6 flex-1 flex flex-col">
                 <div className="flex justify-between items-center mb-8 text-[10px] font-bold text-slate-600 uppercase tracking-widest border-b border-white/5 pb-6">
                    <span className="flex items-center gap-1.5 text-rose-500"><Clock className="w-4 h-4" /> {item.duration}</span>
                    <span className="flex items-center gap-1.5"><Award className="w-4 h-4" /> {item.level}</span>
                 </div>
                 
                 <p className="text-[13px] text-slate-400 font-light leading-relaxed mb-10 flex-1 border-l-2 border-white/5 pl-6 group-hover:border-rose-500 transition-colors">
                    {item.description}
                 </p>
                 
                 <div className="flex items-center gap-4 mb-10">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#e11d48] to-[#9f1239] flex items-center justify-center text-white ring-4 ring-white/5">
                       <User className="w-5 h-5" />
                    </div>
                    <div>
                       <span className="block text-xs font-black text-white uppercase tracking-wider">{item.instructor}</span>
                       <span className="block text-[10px] text-slate-600 font-bold uppercase tracking-widest">{item.role}</span>
                    </div>
                 </div>
                 
                 <Link 
                    href="#" 
                    className="flex items-center justify-between w-full p-6 bg-white/[0.03] rounded-2xl border border-white/5 hover:bg-[#e11d48] hover:text-white transition-all duration-500 font-black text-xs uppercase tracking-widest group/btn"
                 >
                    Enroll in Masterclass <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                 </Link>
              </div>

              {/* Tier Bottom Strip */}
              <div className="px-10 py-5 bg-white/5 flex items-center justify-between text-[8px] font-black uppercase tracking-[0.5em] text-slate-700 group-hover:text-rose-400 transition-colors">
                 <span>Mastery Academy Hub</span>
                 <Sparkles className="w-3.5 h-3.5" />
              </div>

            </div>
          ))}
        </div>

        {/* Global Academy Graduation Footer */}
        <div className="mt-24 p-12 bg-gradient-to-br from-[#e11d48]/15 via-[#0d0d0d] to-slate-900 border border-white/10 rounded-[4rem] text-center relative overflow-hidden backdrop-blur-3xl group">
           <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(225,29,72,0.1),transparent)] pointer-events-none grayscale opacity-10">
              < GraduationCap className="w-[800px] h-[800px]" />
           </div>
           
           <div className="relative z-10 max-w-2xl mx-auto space-y-8">
              <span className="inline-block text-[10px] text-rose-500 font-black uppercase tracking-[0.5em] mb-4">The Future of Engineering Mastery</span>
              <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-none italic">Become the <span className="text-[#e11d48]">Principal.</span></h2>
              <p className="text-slate-400 text-lg font-light leading-relaxed">Our masterclasses are led by the very architects who build high-scale global infrastructures. Join a cohort to transform your technical trajectory into an organizational legacy.</p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                 <button className="px-12 py-5 bg-[#e11d48] text-white font-black rounded-full hover:scale-105 transition-transform flex items-center justify-center gap-3 shadow-[0_20px_50px_rgba(225,29,72,0.3)]">
                    <Zap className="w-5 h-5" /> Enroll in Mastery Batch
                 </button>
                 <button className="px-12 py-5 border border-white/10 text-white font-black rounded-full hover:bg-white/10 transition-all text-sm flex items-center justify-center gap-3">
                    <Globe className="w-4 h-4" /> Global Curriculums
                 </button>
              </div>
           </div>
        </div>

      </div>
    </section>
  );
}
