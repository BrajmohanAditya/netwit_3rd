"use client";

import { ArrowRight, Award, BookOpen, CheckCircle, Flag, GraduationCap, Layout, Sparkles, Trophy, Users, Zap } from "lucide-react";
import Link from "next/link";

const curriculumPillars = [
  { 
    title: "Global Certification", 
    description: "Industry-recognized technical paths. We prepare our graduates for the most demanding technical certifications in Cloud, AI, and DevOps.", 
    tag: "Standard",
    icon: Award,
    benefit: "Verified Class"
  },
  { 
    title: "Project Immersive", 
    description: "Hands-on engineering on live Netwit legacy projects. Gain real-world architectural experience before entering the professional global field.", 
    tag: "Practical",
    icon: Layout,
    stat: "Live Systems"
  },
  { 
    title: "Expert Mentorship", 
    description: "Learn directly from our principal architects. Every academy track is guided by a global lead with at least 15+ years of technical delivery experience.", 
    tag: "Guidance",
    icon: Users,
    stat: "1:1 Coaching"
  },
  { 
    title: "Accelerated Placement", 
    description: "Direct entry into the Netwit global team or our 50+ corporate partners. A 90% placement rate for all certified technical graduates.", 
    tag: "Velocity",
    icon: Zap,
    stat: "90% Rate"
  },
];

export function NetwitAcademyCurriculum() {
  return (
    <section id="programs" className="bg-[#020502] py-24 relative overflow-hidden font-sans border-t border-white/5">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Curriculum Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
           <div className="space-y-6 max-w-2xl">
              <span className="text-[10px] text-emerald-500 font-black uppercase tracking-[0.5em] mb-4 block">The Netwit Academy Curriculum Protocol</span>
              <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter italic">Transforming <span className="text-emerald-500 underline decoration-emerald-500/30">Potential.</span></h2>
              <p className="text-slate-400 text-lg font-light leading-relaxed">Our academy is a living technical lab. We don't just teach; we sculpt the next generation of global technical architects through a high-fidelity educational blueprint.</p>
           </div>
           <div className="flex items-center gap-6 bg-white/5 px-8 py-3 rounded-full border border-white/5">
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest flex items-center gap-2">
                 <CheckCircle className="w-4 h-4 text-emerald-500" /> Talent Pathway Verified
              </span>
           </div>
        </div>

        {/* High-Fi Curriculum Tiles */}
        <div className="grid md:grid-cols-2 gap-10">
          {curriculumPillars.map((item, index) => (
            <div 
              key={index} 
              className="group bg-[#0d0f0d] border border-white/5 rounded-[3rem] p-12 flex flex-col h-full hover:border-emerald-500/30 transition-all duration-500 hover:-translate-y-2 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-emerald-600/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="flex justify-between items-start mb-12">
                 <div className="w-16 h-16 rounded-2xl bg-emerald-600/5 border border-emerald-600/10 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-black transition-all">
                    <item.icon className="w-8 h-8" />
                 </div>
                 <div className="text-right">
                    <span className="block text-2xl font-black text-white tracking-tight">{item.stat || item.benefit}</span>
                    <span className="block text-[10px] text-slate-600 font-bold uppercase tracking-widest">{item.tag} Level</span>
                 </div>
              </div>

              <h3 className="text-3xl font-black text-white mb-6 group-hover:text-glow transition-all">{item.title}</h3>
              <p className="text-base text-slate-400 font-light leading-relaxed flex-1 border-l-2 border-white/5 pl-8 group-hover:border-emerald-500 transition-colors">
                 {item.description}
              </p>
              
              <div className="mt-12 flex items-center justify-between pt-8 border-t border-white/5 text-[10px] font-black uppercase tracking-widest text-slate-600 group-hover:text-emerald-400 transition-colors">
                 Explore Curriculum Hub <ArrowRight className="w-4 h-4 group-hover:translate-x-1" />
              </div>
            </div>
          ))}
        </div>

        {/* Global Talent Row Footer */}
        <div className="mt-24 p-12 bg-gradient-to-br from-emerald-900/20 via-[#0d0f0d] to-[#064e3b]/20 border border-white/10 rounded-[4rem] text-center relative overflow-hidden backdrop-blur-3xl group px-16">
           <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(16,185,129,0.1),transparent)] pointer-events-none opacity-40"></div>
           
           <div className="relative z-10 max-w-2xl mx-auto space-y-8">
              <span className="inline-block text-[10px] text-emerald-400 font-black uppercase tracking-[0.5em] mb-4">The Global Technical Lab</span>
              <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-none italic uppercase">Engineer Your <span className="text-emerald-500">Mastery.</span></h2>
              <p className="text-slate-400 text-lg font-light leading-relaxed">The next technical revolution begins here. Connect with our academy advisors to discuss your enrollment and start your journey towards technical excellence.</p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                 <button className="px-14 py-6 bg-emerald-600 text-white font-black rounded-full hover:scale-105 transition-transform flex items-center justify-center gap-3 shadow-[0_20px_60px_rgba(16,185,129,0.3)]">
                    <GraduationCap className="w-5 h-5 flex-shrink-0" /> Application Desk
                 </button>
                 <button className="px-14 py-6 border border-white/10 text-white font-black rounded-full hover:bg-white/10 transition-all text-sm flex items-center justify-center gap-3">
                    <Trophy className="w-4 h-4" /> Alumni Success
                 </button>
              </div>
           </div>
        </div>

      </div>
    </section>
  );
}
