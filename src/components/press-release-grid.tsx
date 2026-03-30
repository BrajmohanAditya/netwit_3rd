"use client";

import { ArrowRight, BadgeCheck, Building, Calendar, Globe, Globe2, Share2, Tag } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const pressReleases = [
   {
      title: "Netwit Launches AI-Powered DevOps",
      description: "Announcing the integration of generative AI within our core DevOps lifecycle to accelerate software delivery and optimize infrastructure reliability.",
      tag: "News",
      date: "March 20, 2026",
      location: "San Jose, CA",
      category: "Corporate"
   },
   {
      title: "Strategic Partnership with AWS",
      description: "Solidifying our commitment to cloud excellence through an expanded partnership with AWS to deliver specialized serverless architecture solutions.",
      tag: "Partnership",
      date: "March 15, 2026",
      location: "Global",
      category: "Strategic"
   },
   {
      title: "Global Award for Engineering Innovation",
      description: "Netsmartz recognized as a top specialized technical partner for delivering critical infrastructure transformations at scale.",
      tag: "Award",
      date: "March 10, 2026",
      location: "London, UK",
      category: "Corporate"
   },
   {
      title: "Expansion to European Market",
      description: "Opening new technical hubs in Europe to better serve our growing enterprise client base and leverage world-class local engineering talent.",
      tag: "News",
      date: "March 05, 2026",
      location: "Berlin, DE",
      category: "Growth"
   },
   {
      title: "New CTO Appointed to Leadership",
      description: "Welcoming our new Chief Technology Officer to spearhead our next-generation R&D initiatives and global architecture standards.",
      tag: "News",
      date: "March 01, 2026",
      location: "New York, NY",
      category: "Leadership"
   },
   {
      title: "Sustainability Computing Initiative",
      description: "Launching our green computing framework to reduce the environmental impact of massive data center operations and cloud infrastructure.",
      tag: "CSR",
      date: "Feb 25, 2026",
      location: "Oslo, NO",
      category: "Mission"
   },
];

export function PressReleaseGrid() {
   const [activeFilter, setActiveFilter] = useState("All");
   const filters = ["All", "Corporate", "Strategic", "Growth", "Leadership", "Mission"];

   const filteredItems = activeFilter === "All"
      ? pressReleases
      : pressReleases.filter(item => item.category === activeFilter);

   return (
      <section id="feed" className="bg-[#05060d] py-24 relative overflow-hidden font-sans border-t border-white/5">
         <div className="max-w-[1200px] mx-auto px-6">

            {/* Release Categories */}
            <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
               <div className="flex flex-wrap items-center gap-3">
                  {filters.map((f) => (
                     <button
                        key={f}
                        onClick={() => setActiveFilter(f)}
                        className={`px-6 py-2 rounded-full text-[10px] font-black tracking-[0.2em] uppercase transition-all duration-300 border ${activeFilter === f
                              ? "bg-[#4338CA] text-white border-[#4338CA] shadow-[0_0_20px_rgba(67,56,202,0.3)]"
                              : "bg-white/5 text-slate-500 border-white/10 hover:border-white/20 hover:text-slate-300"
                           }`}
                     >
                        {f}
                     </button>
                  ))}
               </div>
               <div className="flex items-center gap-4 text-[10px] text-slate-600 font-bold uppercase tracking-widest bg-white/5 px-6 py-2 rounded-full border border-white/5">
                  <BadgeCheck className="w-4 h-4 text-[#818CF8]" /> Verified Official Feed
               </div>
            </div>

            {/* Official Release Feed */}
            <div className="grid lg:grid-cols-2 gap-12">
               {filteredItems.map((item, index) => (
                  <div
                     key={index}
                     className="group flex flex-col md:flex-row gap-8 items-start bg-white/[0.02] border border-white/5 p-10 rounded-[2rem] hover:bg-white/[0.04] hover:border-[#4338CA]/30 transition-all duration-500 relative overflow-hidden"
                  >
                     {/* Date Column */}
                     <div className="flex-shrink-0 w-24 text-center">
                        <span className="block text-2xl font-black text-white leading-none mb-1">{item.date.split(' ')[1].replace(',', '')}</span>
                        <span className="block text-[10px] font-bold text-[#818CF8] uppercase tracking-widest">{item.date.split(' ')[0]}</span>
                        <div className="w-full h-[1px] bg-white/10 my-4"></div>
                        <div className="flex justify-center">
                           <button className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-slate-500 hover:text-[#818CF8] transition-all">
                              <Share2 className="w-4 h-4" />
                           </button>
                        </div>
                     </div>

                     {/* Content Column */}
                     <div className="flex-1 space-y-4">
                        <div className="flex flex-wrap items-center gap-4 text-[10px] font-bold tracking-widest uppercase">
                           <span className="flex items-center gap-1.5 text-[#818CF8]"><Tag className="w-3.5 h-3.5" /> {item.tag}</span>
                           <span className="flex items-center gap-1.5 text-slate-600"><Globe2 className="w-3.5 h-3.5" /> {item.location}</span>
                        </div>

                        <h3 className="text-2xl font-extrabold text-white leading-tight group-hover:text-indigo-50 transition-colors">
                           {item.title}
                        </h3>
                        <p className="text-slate-400 text-sm font-light leading-relaxed mb-6 line-clamp-2">
                           {item.description}
                        </p>

                        <Link
                           href="#"
                           className="inline-flex items-center gap-2 text-xs font-bold text-white group-hover:text-[#818CF8] transition-colors uppercase tracking-[0.2em]"
                        >
                           Read Technical Statement <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                     </div>

                     {/* Background Accent */}
                     <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#4338CA]/5 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
               ))}
            </div>

            {/* Media Relations Abstract Footer */}
            <div className="mt-24 p-12 bg-white/5 border border-white/10 rounded-[3rem] flex flex-col md:flex-row items-center justify-between gap-12 group">
               <div className="max-w-xl text-center md:text-left space-y-4">
                  <span className="inline-block text-[10px] text-[#818CF8] font-bold uppercase tracking-[0.3em]">Institutional Core</span>
                  <h2 className="text-3xl font-extrabold text-white tracking-tight">Media <span className="text-[#818CF8]">Relations</span> & Assets.</h2>
                  <p className="text-slate-400 text-lg font-light leading-relaxed">For official statements, brand assets, or leadership interviews, please reach out to our global press team. We operate on a 24/7 technical-journalism cycle.</p>
               </div>
               <div className="flex flex-col gap-4 w-full md:w-auto">
                  <button className="px-10 py-5 bg-white text-[#05060d] font-bold rounded-full hover:scale-105 transition-transform flex items-center justify-center gap-3">
                     <Building className="w-4 h-4" /> Download Press Kit
                  </button>
                  <button className="px-10 py-5 border border-white/10 text-white font-bold rounded-full hover:bg-white/5 transition-all text-sm flex items-center justify-center gap-3">
                     Contact PR Department
                  </button>
               </div>
            </div>

         </div>
      </section>
   );
}
