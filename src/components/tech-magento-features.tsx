"use client";

import { Store, Network, Box, Zap, ShoppingBag, Fingerprint } from "lucide-react";

export function MagentoFeatures() {
  const capabilities = [
    {
      title: "Extensive B2B Architecture",
      description: "We orchestrate wholesale commerce. Magento allows us to deploy tiered corporate customer pricing, requisition lists, custom catalogs, and massive bulk-order purchasing logics natively out of the box.",
      icon: <Network className="w-8 h-8 text-[#F26322]" />,
      bg: "bg-[#F26322]/10",
      border: "border-[#F26322]/20"
    },
    {
      title: "Headless GraphQL PWA",
      description: "Decouple your frontend entirely. We utilize Magento's vast REST and GraphQL endpoint matrices to construct instantaneous React/Vue Progressive Web Apps (PWAs) that bypass legacy monolithic rendering.",
      icon: <Zap className="w-8 h-8 text-amber-500" />,
      bg: "bg-amber-500/10",
      border: "border-amber-500/20"
    },
    {
      title: "Multi-Store Dominance",
      description: "Run fifty brands from one dashboard. We deploy deep Multi-Store Instance (MSI) networking, allowing corporate groups to control entirely distinct websites, domains, and global currencies from a single centralized admin panel.",
      icon: <Store className="w-8 h-8 text-[#ff8b4d]" />,
      bg: "bg-[#ff8b4d]/10",
      border: "border-[#ff8b4d]/20"
    },
    {
      title: "ElasticSearch & Varnish",
      description: "A slow cart abandons revenue. We wrap Magento inside rigorous Varnish caching layers and deploy ultra-fast ElasticSearch indexes, ensuring millions of complex, faceted product queries render in milliseconds.",
      icon: <Box className="w-8 h-8 text-emerald-400" />,
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/20"
    },
    {
      title: "Custom Module Engineering",
      description: "SaaS platforms restrict your business model; Magento bends to it. We engineer highly specific Zend Framework (PHP) modules that completely rewrite checkout flows, ERP integrations, and custom logistics endpoints.",
      icon: <Fingerprint className="w-8 h-8 text-fuchsia-400" />,
      bg: "bg-fuchsia-500/10",
      border: "border-fuchsia-500/20"
    },
    {
      title: "Adobe Commerce Integration",
      description: "Scale seamlessly into the Enterprise tier. When scaling gets serious, we transition Open Source infrastructure directly into Adobe Commerce Cloud, utilizing AI-driven product recommendations and deep analytics.",
      icon: <ShoppingBag className="w-8 h-8 text-rose-500" />,
      bg: "bg-rose-500/10",
      border: "border-rose-500/20"
    }
  ];

  return (
    <section className="bg-[#0c0908] py-32 relative text-white border-y border-white/5 overflow-hidden font-sans">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/3 h-[80%] bg-[#F26322]/10 blur-[150px] pointer-events-none rounded-r-full"></div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-24">
          <span className="text-[#F26322] font-semibold tracking-widest uppercase mb-4 text-xs bg-[#F26322]/10 border border-[#F26322]/20 px-4 py-1.5 rounded-full backdrop-blur-md">
            Heavyweight Commerce
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Scale Beyond <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff8b4d] to-[#F26322]">SaaS Limits.</span>
          </h2>
          <p className="text-orange-50/60 text-lg max-w-2xl leading-relaxed font-light">
            Platforms like Shopify eventually force enterprises into a locked eco-system. Magento grants you absolute 100% control over the source code, databases, database schemas, and hosting environments.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((c, i) => (
             <div key={i} className="bg-[#170e0a]/50 border border-[#2e170c] p-8 rounded-3xl group hover:bg-[#1f120c] hover:border-[#F26322]/40 transition-all duration-500 relative overflow-hidden cursor-default backdrop-blur-sm shadow-xl">
               <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-[#ff8b4d] to-[#F26322] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
               <div className={`w-14 h-14 rounded-2xl ${c.bg} ${c.border} border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                  {c.icon}
               </div>
               <h3 className="text-xl font-semibold mb-4 text-white tracking-tight relative z-10">{c.title}</h3>
               <p className="text-orange-50/50 text-sm leading-relaxed font-light relative z-10 group-hover:text-orange-50/80 transition-colors">{c.description}</p>
             </div>
          ))}
        </div>
      </div>
    </section>
  );
}
