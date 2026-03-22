"use client";

import { ShoppingCart, Server, Globe2, CreditCard, LayoutTemplate, ShieldCheck } from "lucide-react";

export function EcommerceFeatures() {
  const capabilities = [
    {
      title: "Headless Commerce Architectures",
      description: "Decouple your frontend from your backend. We build blazing-fast React/Next.js storefronts connected to Shopify Plus or BigCommerce APIs for ultimate design flexibility.",
      icon: <LayoutTemplate className="w-8 h-8 text-emerald-400" />,
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/20"
    },
    {
      title: "Shopify Plus & Magento Mastery",
      description: "Whether you need a massive Magento migration or a custom liquid theme for Shopify Plus, our developers understand the deep technical intricacies of enterprise platforms.",
      icon: <ShoppingCart className="w-8 h-8 text-pink-500" />,
      bg: "bg-pink-500/10",
      border: "border-pink-500/20"
    },
    {
      title: "Global Payment Engineering",
      description: "Frictionless checkout saves millions. We integrate robust Stripe, PayPal, and multi-currency localized payment gateways ensuring absolute compliance and zero drop-off.",
      icon: <CreditCard className="w-8 h-8 text-indigo-400" />,
      bg: "bg-indigo-500/10",
      border: "border-indigo-500/20"
    },
    {
      title: "PWA & Mobile-First Stores",
      description: "60% of commerce is mobile. We engineer Progressive Web Apps that run flawlessly offline and load instantly, creating an app-like experience straight from the browser.",
      icon: <Globe2 className="w-8 h-8 text-blue-400" />,
      bg: "bg-blue-500/10",
      border: "border-blue-500/20"
    },
    {
      title: "Inventory ERP Synchronization",
      description: "We build bulletproof middleware integrations connecting your storefront to NetSuite, SAP, or logistics APIs to guarantee real-time inventory and shipping data.",
      icon: <Server className="w-8 h-8 text-violet-400" />,
      bg: "bg-violet-500/10",
      border: "border-violet-500/20"
    },
    {
      title: "Ironclad Store Security",
      description: "Protect your customers and your reputation. We implement strict PCI-DSS compliance, sophisticated bot mitigation, and advanced fraud detection schemas.",
      icon: <ShieldCheck className="w-8 h-8 text-amber-400" />,
      bg: "bg-amber-500/10",
      border: "border-amber-500/20"
    }
  ];

  return (
    <section className="bg-[#050505] py-32 relative text-white border-y border-white/5 overflow-hidden">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-[80%] bg-emerald-900/10 blur-[150px] pointer-events-none rounded-l-full"></div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-24">
          <span className="text-emerald-400 font-bold tracking-widest uppercase mb-4 text-sm bg-emerald-500/10 px-4 py-1.5 rounded-full border border-emerald-500/20">
            Storefront Engineering
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Built to <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Handle the Surge</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
            A 1-second delay in page response can result in a 7% reduction in conversions. We deploy highly-vetted technical teams that obsess over performance and scalability.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((c, i) => (
             <div key={i} className="bg-[#0a0a0f] border border-white/5 p-8 rounded-3xl group hover:bg-[#0c0c12] hover:border-white/10 transition-all duration-300 relative overflow-hidden cursor-default">
               <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
               <div className={`w-16 h-16 rounded-2xl ${c.bg} ${c.border} border flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300`}>
                  {c.icon}
               </div>
               <h3 className="text-xl font-bold mb-4 text-white relative z-10">{c.title}</h3>
               <p className="text-gray-400 text-sm leading-relaxed font-light relative z-10 group-hover:text-gray-300 transition-colors">{c.description}</p>
             </div>
          ))}
        </div>
      </div>
    </section>
  );
}
