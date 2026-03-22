"use client";

import { ArrowUpRight, Clock, Hash, MessageSquare, Share2, Tag, User } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const blogPosts = [
  { 
    title: "The Future of DevOps in 2025", 
    description: "Predicting the shift from continuous integration to autonomous deployment cycles. How AI is redefining the DevOps lifecycle.", 
    tag: "Trending",
    category: "DevOps",
    readTime: "12 min",
    author: "Elena M.",
    date: "March 15, 2026",
    color: "blue"
  },
  { 
    title: "AI in Cloud Computing", 
    description: "Leveraging large language models to optimize cloud cost and predict infrastructure failures before they happen in production.", 
    tag: "AI",
    category: "Cloud",
    readTime: "8 min",
    author: "David K.",
    date: "March 12, 2026",
    color: "emerald"
  },
  { 
    title: "Kubernetes Best Practices", 
    description: "The ultimate guide to managing multi-cluster enterprise deployments with zero downtime and absolute resource optimization.", 
    tag: "Technical",
    category: "Engineering",
    readTime: "15 min",
    author: "Sarah L.",
    date: "March 10, 2026",
    color: "indigo"
  },
  { 
    title: "Cybersecurity Trends", 
    description: "Protecting your business against quantum-resistant threats. Why zero-trust architecture is no longer optional for modern enterprises.", 
    tag: "Security",
    category: "Security",
    readTime: "10 min",
    author: "Josh T.",
    date: "March 08, 2026",
    color: "rose"
  },
  { 
    title: "DevOps vs Platform Engineering", 
    description: "What's the real difference? Understanding the evolution of infrastructure as a service into internal developer platforms (IDPs).", 
    tag: "Guide",
    category: "Process",
    readTime: "9 min",
    author: "Michael B.",
    date: "March 05, 2026",
    color: "amber"
  },
  { 
    title: "Cloud Cost Optimization", 
    description: "Practical strategies for reducing your annual cloud spend by up to 30% through automated resource scaling and instance rightsizing.", 
    tag: "Tutorial",
    category: "Business",
    readTime: "7 min",
    author: "Jane D.",
    date: "March 01, 2026",
    color: "cyan"
  },
];

export function BlogGrid() {
  const [activeCategory, setActiveCategory] = useState("All");
  const categories = ["All", "DevOps", "Cloud", "Engineering", "Security", "Process", "Business"];

  const filteredPosts = activeCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <section id="blog-feed" className="bg-[#050608] py-24 relative overflow-hidden font-sans border-t border-white/5">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Category Navigation */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
           <div className="flex flex-wrap items-center gap-3">
              {categories.map((c) => (
                 <button
                    key={c}
                    onClick={() => setActiveCategory(c)}
                    className={`px-6 py-2 rounded-full text-[10px] font-black tracking-[0.2em] uppercase transition-all duration-300 border ${
                      activeCategory === c 
                        ? "bg-[#3b82f6] text-white border-[#3b82f6] shadow-[0_0_20px_rgba(59,130,246,0.3)]" 
                        : "bg-white/5 text-slate-500 border-white/10 hover:border-white/20 hover:text-slate-300"
                    }`}
                 >
                    {c}
                 </button>
              ))}
           </div>
           <div className="flex items-center gap-6">
              <span className="text-[10px] text-slate-600 font-bold uppercase tracking-widest bg-white/5 px-4 py-2 rounded-full border border-white/5">
                 Sort by: Latest
              </span>
              <div className="flex gap-2">
                 <button className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-slate-500 hover:text-white transition-colors">
                    <Hash className="w-4 h-4" />
                 </button>
                 <button className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-slate-500 hover:text-white transition-colors">
                    <Share2 className="w-4 h-4" />
                 </button>
              </div>
           </div>
        </div>

        {/* Blog Masonry Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredPosts.map((post, index) => (
            <div 
              key={index} 
              className="group bg-[#0d1017] border border-white/5 rounded-[2rem] overflow-hidden flex flex-col h-full hover:border-[#3b82f6]/40 transition-all duration-500 hover:-translate-y-2 shadow-2xl relative"
            >
              {/* Header Info */}
              <div className="px-8 pt-8 flex-1 flex flex-col">
                 <div className="flex justify-between items-center mb-6">
                    <span className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-black text-[#3b82f6]">
                       <Tag className="w-3.5 h-3.5" />
                       {post.category}
                    </span>
                    <span className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">{post.date}</span>
                 </div>
                 
                 <h3 className="text-xl font-bold text-white mb-4 leading-snug group-hover:text-blue-50 transition-colors">
                    {post.title}
                 </h3>
                 <p className="text-sm text-slate-400 font-light leading-relaxed mb-8 flex-1">
                    {post.description}
                 </p>
              </div>

              {/* Interaction Bar */}
              <div className="px-8 py-6 bg-white/5 border-t border-white/5 flex items-center justify-between group-hover:bg-[#3b82f6]/10 transition-colors duration-500">
                 <div className="flex items-center gap-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                    <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {post.readTime}</span>
                    <span className="flex items-center gap-1.5 text-blue-400 group-hover:text-white"><User className="w-3.5 h-3.5" /> {post.author}</span>
                 </div>
                 <Link 
                    href="#" 
                    className="w-8 h-8 rounded-xl bg-[#3b82f6]/10 text-[#3b82f6] flex items-center justify-center hover:bg-[#3b82f6] hover:text-white transition-all transform group-hover:rotate-12"
                 >
                    <ArrowUpRight className="w-4 h-4" />
                 </Link>
              </div>

              {/* Visual Garnish */}
              <div className={`absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tr from-[#3b82f6]/20 to-transparent blur-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none`}></div>
            </div>
          ))}
        </div>

        {/* Newsletter Abstract Footer */}
        <div className="mt-24 bg-gradient-to-r from-blue-900/10 via-indigo-900/5 to-blue-900/10 border border-white/5 rounded-[3rem] p-12 text-center relative overflow-hidden backdrop-blur-xl">
           <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.1),transparent)] flex items-center justify-center grayscale opacity-10">
              <MessageSquare className="w-[800px] h-[800px]" />
           </div>
           
           <div className="relative z-10 max-w-2xl mx-auto space-y-8">
              <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">The <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3b82f6] to-[#60A5FA]">Engineering</span> Newsletter.</h2>
              <p className="text-slate-400 text-lg font-light leading-relaxed">Direct technical breakdowns of emerging frameworks and cloud architectures, delivered monthly to your inbox. No spam, just intelligence.</p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto relative overflow-hidden p-1 rounded-full border border-white/10 bg-white/5 group">
                 <input 
                    type="email" 
                    placeholder="architect@domain.com" 
                    className="flex-1 bg-transparent border-none py-3 px-6 text-sm text-white focus:outline-none placeholder:text-slate-600"
                 />
                 <button className="px-8 py-3 bg-[#3b82f6] text-white font-bold rounded-full hover:bg-blue-600 transition-all shadow-xl whitespace-nowrap">
                    Join Feed
                 </button>
              </div>
           </div>
        </div>

      </div>
    </section>
  );
}
