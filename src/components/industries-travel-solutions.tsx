"use client";

import { CloudLightning, Server, ShieldCheck, HeartHandshake, DatabaseZap, Workflow } from "lucide-react";

export function TravelSolutions() {
  const solutions = [
    {
      title: "Burstable Infrastructure",
      description: "Auto-scale instantly during Black Friday, holiday rushes, and flash sales to guarantee 100% uptime when it matters most.",
      icon: <CloudLightning className="w-7 h-7 text-sky-500" />,
      bg: "bg-sky-50",
    },
    {
      title: "Booking Engine Optimization",
      description: "Re-architect monolithic booking apps into highly responsive API-first microservices that search and confirm in milliseconds.",
      icon: <Server className="w-7 h-7 text-indigo-500" />,
      bg: "bg-indigo-50",
    },
    {
      title: "Secure Payment Gateways",
      description: "Integrate compliant, zero-trust payment processing corridors meeting absolute PCI-DSS standards globally.",
      icon: <ShieldCheck className="w-7 h-7 text-emerald-500" />,
      bg: "bg-emerald-50",
    },
    {
      title: "Guest App Ecosystems",
      description: "Deliver flawless mobile experiences from mobile key integrations to localized, real-time concierge capabilities.",
      icon: <HeartHandshake className="w-7 h-7 text-rose-500" />,
      bg: "bg-rose-50",
    },
    {
      title: "Global Inventory Sync",
      description: "Synchronize massive property availability and flight databases across geographical regions seamlessly without data lag.",
      icon: <DatabaseZap className="w-7 h-7 text-amber-500" />,
      bg: "bg-amber-50",
    },
    {
      title: "Channel Management API",
      description: "Orchestrate real-time integrations with OTAs, meta-searches, and B2B aggregators natively into your unified stack.",
      icon: <Workflow className="w-7 h-7 text-purple-500" />,
      bg: "bg-purple-50",
    },
  ];

  return (
    <section id="solutions" className="bg-[#f8fafc] py-32 relative text-slate-900 border-b border-slate-100 overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-sky-100/50 blur-[150px] pointer-events-none rounded-full"></div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-20">
          <span className="text-sky-600 font-bold tracking-widest uppercase mb-4 text-sm bg-sky-100 px-3 py-1 rounded-full">
            Engineering Excellence
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Seamless <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600">Journeys</span> Start Here
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl leading-relaxed">
            Whether you operate an airline, a hotel chain, or a global OTA, our elite DevOps and cloud architectures ensure your platforms handle millions of concurrent searches and bookings effortlessly.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((s, i) => (
            <div 
              key={i} 
              className="bg-white border border-slate-100 rounded-3xl p-8 hover:shadow-[0_20px_40px_rgba(14,165,233,0.08)] hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden flex flex-col cursor-default"
            >
              <div className={`w-14 h-14 rounded-2xl ${s.bg} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 border border-slate-50`}>
                 {s.icon}
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-4">{s.title}</h3>
              <p className="text-slate-600 leading-relaxed font-light">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
