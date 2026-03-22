"use client";

import { Sparkles, Blocks, Webhook, Zap, TestTube, Lock } from "lucide-react";

export function RailsFeatures() {
  const capabilities = [
    {
      title: "Convention Over Configuration",
      description: "Stop writing boilerplate. Rails assumes logical defaults for database naming, routing, and controller structures, allowing us to build extremely complex applications without agonizing over trivial setup.",
      icon: <Sparkles className="w-8 h-8 text-[#CC342D]" />,
      bg: "bg-[#CC342D]/10",
      border: "border-[#CC342D]/20"
    },
    {
      title: "ActiveRecord ORM",
      description: "We orchestrate massive, highly relational databases effortlessly. ActiveRecord turns complex SQL JOINs and polymorphic associations into elegant, readable, and highly maintainable object-oriented Ruby logic.",
      icon: <Blocks className="w-8 h-8 text-rose-400" />,
      bg: "bg-rose-500/10",
      border: "border-rose-500/20"
    },
    {
      title: "Hotwire & Turbo Setup",
      description: "Write server-side HTML that feels exactly like a Single Page App. By integrating Hotwire and Turbo, we push rapid WebSocket updates to the client, entirely avoiding the overhead of heavy JavaScript frameworks like React.",
      icon: <Zap className="w-8 h-8 text-amber-400" />,
      bg: "bg-amber-500/10",
      border: "border-amber-500/20"
    },
    {
      title: "ActionCable WebSockets",
      description: "When apps need absolute real-time capability like chat algorithms, live notifications, or streaming dashboards seamlessly integrating into the backend logic, we implement deep ActionCable WebSocket pipelines.",
      icon: <Webhook className="w-8 h-8 text-fuchsia-400" />,
      bg: "bg-fuchsia-500/10",
      border: "border-fuchsia-500/20"
    },
    {
      title: "RSpec Test Driven Design",
      description: "Startups cannot afford massive regressions. We utilize RSpec to engineer rigorous Minitest frameworks, unit tests, and system tests, ensuring every Ruby deployment strictly functions exactly as designed.",
      icon: <TestTube className="w-8 h-8 text-emerald-400" />,
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/20"
    },
    {
      title: "Secure Defaults",
      description: "Rails protects inherently. We leverage its built-in defenses against CSRF (Cross-Site Request Forgery), SQL injections, and XSS parameter sniffing without requiring constant manual security configurations.",
      icon: <Lock className="w-8 h-8 text-blue-400" />,
      bg: "bg-blue-500/10",
      border: "border-blue-500/20"
    }
  ];

  return (
    <section className="bg-[#0d0708] py-32 relative text-white border-y border-white/5 overflow-hidden font-sans">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/3 h-[80%] bg-[#CC342D]/10 blur-[150px] pointer-events-none rounded-r-full"></div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-24">
          <span className="text-[#CC342D] font-semibold tracking-widest uppercase mb-4 text-xs bg-[#CC342D]/10 border border-[#CC342D]/20 px-4 py-1.5 rounded-full backdrop-blur-md">
            The One Person Framework
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Stop Discussing. <br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-[#CC342D]">Start Shipping.</span>
          </h2>
          <p className="text-rose-100/60 text-lg max-w-2xl leading-relaxed font-light">
            Engineering teams lose thousands of hours debating complex microservice architectures. Ruby on Rails centralizes everything into an elegant, scalable monolith so you can actually prove product-market fit.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((c, i) => (
             <div key={i} className="bg-[#1a0a0c]/50 border border-[#2b1013] p-8 rounded-3xl group hover:bg-[#200d0f] hover:border-[#CC342D]/40 transition-all duration-500 relative overflow-hidden cursor-default backdrop-blur-sm shadow-xl">
               <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-rose-400 to-[#CC342D] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
               <div className={`w-14 h-14 rounded-2xl ${c.bg} ${c.border} border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                  {c.icon}
               </div>
               <h3 className="text-xl font-semibold mb-4 text-white tracking-tight relative z-10">{c.title}</h3>
               <p className="text-rose-100/50 text-sm leading-relaxed font-light relative z-10 group-hover:text-rose-100/80 transition-colors">{c.description}</p>
             </div>
          ))}
        </div>
      </div>
    </section>
  );
}
