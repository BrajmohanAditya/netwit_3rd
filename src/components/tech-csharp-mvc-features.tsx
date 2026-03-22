"use client";

import { LayoutPanelLeft, Code2, Database, ShieldCheck, Zap, Globe } from "lucide-react";

export function CsharpMvcFeatures() {
  const capabilities = [
    {
      title: "MVC Design Pattern",
      description: "We enforce strict separation of concerns using the Model-View-Controller pattern. This ensures your application is highly maintainable, testable, and scalable as your business grows.",
      icon: <LayoutPanelLeft className="w-8 h-8 text-[#967ce2]" />,
      bg: "bg-[#5C2D91]/10",
      border: "border-[#5C2D91]/20"
    },
    {
      title: "Razor View Engine",
      description: "Our developers utilize Razor to create fluid, dynamic web pages. It combines C# logic with HTML seamlessly, allowing for high-performance server-side rendering and clean UI code.",
      icon: <Code2 className="w-8 h-8 text-[#0078D4]" />,
      bg: "bg-[#0078D4]/10",
      border: "border-[#0078D4]/20"
    },
    {
      title: "Powerful Model Binding",
      description: "Automatic mapping between HTTP requests and C# objects. We build complex forms and data entry points that are both user-friendly and developer-efficient, reducing boilerplate code.",
      icon: <Zap className="w-8 h-8 text-amber-400" />,
      bg: "bg-amber-500/10",
      border: "border-amber-500/20"
    },
    {
      title: "Enterprise Data Security",
      description: "Built-in protection against XSS, CSRF, and SQL Injection. We implement Microsoft's battle-hardened security protocols to ensure your enterprise data remains strictly confidential.",
      icon: <ShieldCheck className="w-8 h-8 text-emerald-400" />,
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/20"
    },
    {
      title: "RESTful API Integration",
      description: "Seamlessly expose your business logic via Web APIs. We build unified backends that serve both web views and mobile applications via JSON/XML endpoints with full authentication.",
      icon: <Globe className="w-8 h-8 text-sky-400" />,
      bg: "bg-sky-500/10",
      border: "border-sky-500/20"
    },
    {
      title: "Entity Framework Core",
      description: "We utilize EF Core for modern object-relational mapping. Your database interactions are type-safe, optimized for performance, and fully integrated with LINQ for complex querying.",
      icon: <Database className="w-8 h-8 text-indigo-400" />,
      bg: "bg-indigo-500/10",
      border: "border-indigo-500/20"
    }
  ];

  return (
    <section className="bg-[#0a0710] py-32 relative text-white border-y border-white/5 overflow-hidden font-sans">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-[80%] bg-[#5C2D91]/10 blur-[150px] pointer-events-none rounded-l-full"></div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-24">
          <span className="text-[#967ce2] font-semibold tracking-widest uppercase mb-4 text-xs bg-[#5C2D91]/10 border border-[#5C2D91]/20 px-4 py-1.5 rounded-full backdrop-blur-md">
            The MVC Framework
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Architectural <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5C2D91] to-[#0078D4]">Precision.</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl leading-relaxed font-light">
            Don't compromise on architecture. ASP.NET MVC provides the perfect balance between high-performance execution and clean code organization for enterprise web solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((c, i) => (
             <div key={i} className="bg-[#15121c]/50 border border-[#2d2538] p-8 rounded-3xl group hover:bg-[#1a1624] hover:border-[#5C2D91]/40 transition-all duration-500 relative overflow-hidden cursor-default backdrop-blur-sm shadow-xl">
               <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-[#5C2D91] to-[#0078D4] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
               <div className={`w-14 h-14 rounded-2xl ${c.bg} ${c.border} border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                  {c.icon}
               </div>
               <h3 className="text-xl font-semibold mb-4 text-white tracking-tight relative z-10">{c.title}</h3>
               <p className="text-slate-400 text-sm leading-relaxed font-light relative z-10 group-hover:text-slate-200 transition-colors">{c.description}</p>
             </div>
          ))}
        </div>
      </div>
    </section>
  );
}
