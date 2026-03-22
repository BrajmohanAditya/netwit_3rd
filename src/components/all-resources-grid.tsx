"use client";

import { ArrowRight, BarChart3, Book, BookOpen, FileText, GraduationCap, HelpCircle, Layers, MessageSquare, Mic2, MonitorPlay, Search, Share2, Sparkles, TrendingUp, Zap } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const categories = [
  { slug: "case-studies", title: "Case Studies", icon: TrendingUp, count: 6, color: "#34d399", desc: "Success stories from the technical frontline." },
  { slug: "blog", title: "Blog Insights", icon: FileText, count: 6, color: "#818cf8", desc: "Latest trends and architectural updates." },
  { slug: "webinars", title: "Webinars", icon: MonitorPlay, count: 6, color: "#fb7185", desc: "Live and recorded sessions by experts." },
  { slug: "press-release", title: "Press Releases", icon: Share2, count: 6, color: "#38bdf8", desc: "Official company news and breakthroughs." },
  { slug: "expert-qa", title: "Expert Q&A", icon: MessageSquare, count: 6, color: "#a78bfa", desc: "Technical dialogues with our architects." },
  { slug: "podcasts", title: "Podcasts", icon: Mic2, count: 6, color: "#f472b6", desc: "Technical stories and audible insights." },
  { slug: "whitepapers", title: "Whitepapers", icon: Book, count: 6, color: "#94a3b8", desc: "Deep technical research and frameworks." },
  { slug: "ebooks", title: "eBooks", icon: BookOpen, count: 6, color: "#10b981", desc: "Comprehensive guides to scaling technology." },
  { slug: "brochure", title: "Brochures", icon: Layers, count: 6, color: "#f59e0b", desc: "Our official brand and service identity." },
  { slug: "infographics", title: "Infographics", icon: BarChart3, count: 6, color: "#84cc16", desc: "Visual blueprints of technical flows." },
  { slug: "tech-tales", title: "Tech Tales", icon: Sparkles, count: 6, color: "#f97316", desc: "Engineering journals from the field." },
  { slug: "saas-masterclasses", title: "Masterclasses", icon: GraduationCap, count: 6, color: "#e11d48", desc: "Elite technical academy workshops." },
  { slug: "faq", title: "FAQ Hub", icon: HelpCircle, count: 6, color: "#6366f1", desc: "Answers for complex technical queries." },
];

export function AllResourcesGrid() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCategories = categories.filter(c => 
    c.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    c.desc.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="citadel" className="bg-[#020202] py-24 relative overflow-hidden font-sans border-t border-white/5">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Hub Navigation Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-20 gap-8">
           <div className="space-y-2">
              <span className="text-[10px] text-indigo-500 font-black uppercase tracking-[0.5em] mb-2 block">Knowledge Registry</span>
              <h2 className="text-4xl font-extrabold text-white tracking-tight">The Infinite <span className="text-white/40">Repository.</span></h2>
           </div>
           
           <div className="flex items-center gap-6 bg-white/5 px-8 py-3 rounded-full border border-white/5">
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest flex items-center gap-2">
                 Displaying {filteredCategories.length} Departments
              </span>
           </div>
        </div>

        {/* Global Hub Tiles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCategories.map((item, index) => (
            <Link 
              key={index} 
              href={`/resources/${item.slug}`}
              className="group bg-[#0d0d0d] border border-white/5 rounded-[2.5rem] p-10 flex flex-col h-full hover:border-white/20 transition-all duration-500 hover:-translate-y-2 shadow-2xl relative overflow-hidden"
            >
              {/* Dynamic Theme Glow */}
              <div 
                className="absolute -top-24 -right-24 w-48 h-48 opacity-[0.03] group-hover:opacity-10 transition-opacity blur-[60px]"
                style={{ backgroundColor: item.color }}
              ></div>

              <div className="flex justify-between items-start mb-10">
                 <div 
                    className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all bg-white/5 border border-white/5 group-hover:scale-110"
                    style={{ color: item.color }}
                 >
                    <item.icon className="w-7 h-7" />
                 </div>
                 <span className="text-[9px] font-black uppercase tracking-widest text-slate-700 bg-white/5 px-3 py-1 rounded-full group-hover:text-white transition-colors">
                    {item.count} Assets
                 </span>
              </div>
              
              <h3 className="text-xl font-black text-white mb-4 group-hover:text-glow transition-all">{item.title}</h3>
              <p className="text-[13px] text-slate-500 font-light leading-relaxed mb-10 flex-1">
                 {item.desc}
              </p>
              
              <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-widest text-slate-600 group-hover:text-white transition-colors pt-6 border-t border-white/5">
                 Explore Core <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>

            </Link>
          ))}
        </div>

        {/* Global Intelligence Registry Entry */}
        <div className="mt-24 p-12 bg-gradient-to-br from-indigo-900/20 via-[#0d0d0d] to-rose-900/20 border border-white/10 rounded-[4rem] flex flex-col items-center text-center relative overflow-hidden backdrop-blur-3xl group">
           <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(99,102,241,0.15),transparent)] pointer-events-none opacity-30"></div>
           
           <div className="max-w-2xl space-y-8 relative z-10">
              <div className="flex justify-center -space-x-4 mb-4">
                 {[1,2,3,4,5].map(i => (
                    <div key={i} className="w-14 h-14 rounded-full bg-slate-800 border-4 border-[#020202] flex items-center justify-center grayscale hover:grayscale-0 transition-all cursor-crosshair">
                       <UserCheck className="w-6 h-6 text-slate-500" />
                    </div>
                 ))}
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter italic leading-none">The <span className="text-indigo-400">Citadel</span> Intelligence Collective.</h2>
              <p className="text-slate-400 text-lg font-light leading-relaxed">Our unified knowledge base is curated by global principal architects and technical leaders. Join 50K+ other engineers in receiving our bi-weekly intelligence bulletin, aggregating the best stories across all departments.</p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                 <button className="px-14 py-6 bg-white text-black font-black rounded-full hover:scale-105 transition-transform flex items-center justify-center gap-3 shadow-[0_20px_60px_rgba(255,255,255,0.1)]">
                    <Zap className="w-5 h-5 flex-shrink-0" /> Subscribe to Universal Hub
                 </button>
                 <Link href="/contact" className="px-14 py-6 border border-white/10 text-white font-black rounded-full hover:bg-white/10 transition-all text-sm flex items-center justify-center gap-3">
                    Institutional Access
                 </Link>
              </div>
           </div>
        </div>

      </div>
    </section>
  );
}

function UserCheck(props: any) {
   return (
      <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><polyline points="16 11 18 13 22 9"/></svg>
   )
}
