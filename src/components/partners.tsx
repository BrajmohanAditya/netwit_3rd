"use client";

import { motion } from "framer-motion";

export function Partners() {
  const partnerLogos = [
    {
      id: "ms-solutions",
      render: () => (
        <div className="flex items-center justify-center w-full gap-3 pointer-events-none select-none">
          <div className="grid grid-cols-2 gap-[1.5px] w-6 h-6 sm:w-7 sm:h-7 shrink-0">
            <div className="bg-[#f25022]"></div><div className="bg-[#7fba00]"></div>
            <div className="bg-[#00a4ef]"></div><div className="bg-[#ffb900]"></div>
          </div>
          <span className="font-semibold text-[#111827] dark:text-gray-200 text-[12px] sm:text-[13px] xl:text-[14px] leading-[1.1] text-left">Microsoft<br/>Solutions Partner</span>
        </div>
      )
    },
    {
      id: "ms-gold",
      render: () => (
        <div className="flex items-center justify-center w-full gap-3 pointer-events-none select-none">
          <div className="grid grid-cols-2 gap-[1.5px] w-6 h-6 sm:w-7 sm:h-7 shrink-0">
            <div className="bg-[#f25022]"></div><div className="bg-[#7fba00]"></div>
            <div className="bg-[#00a4ef]"></div><div className="bg-[#ffb900]"></div>
          </div>
          <span className="font-semibold text-[#111827] dark:text-gray-200 text-[12px] sm:text-[13px] xl:text-[14px] leading-[1.1] text-left">Microsoft<br/>Gold Partner</span>
        </div>
      )
    },
    {
      id: "ms-silver",
      render: () => (
        <div className="flex items-center justify-center w-full gap-3 pointer-events-none select-none">
          <div className="grid grid-cols-2 gap-[1.5px] w-6 h-6 sm:w-7 sm:h-7 shrink-0">
            <div className="bg-[#f25022]"></div><div className="bg-[#7fba00]"></div>
            <div className="bg-[#00a4ef]"></div><div className="bg-[#ffb900]"></div>
          </div>
          <span className="font-semibold text-[#111827] dark:text-gray-200 text-[12px] sm:text-[13px] xl:text-[14px] leading-[1.1] text-left">Microsoft<br/>Silver Partner</span>
        </div>
      )
    },
    {
      id: "ms-infra",
      render: () => (
        <div className="flex items-center justify-center w-full gap-3 pointer-events-none select-none">
          <div className="grid grid-cols-2 gap-[1.5px] w-6 h-6 sm:w-7 sm:h-7 shrink-0">
            <div className="bg-[#f25022]"></div><div className="bg-[#7fba00]"></div>
            <div className="bg-[#00a4ef]"></div><div className="bg-[#ffb900]"></div>
          </div>
          <span className="font-semibold text-[#111827] dark:text-gray-200 text-[12px] sm:text-[13px] xl:text-[14px] leading-[1.1] text-left">Microsoft<br/>Infrastructure Partner</span>
        </div>
      )
    },
    {
      id: "ibm",
      render: () => (
        <div className="flex items-center justify-center w-full pointer-events-none select-none">
          <span className="font-serif font-black text-[34px] sm:text-[44px] text-[#0530ad] tracking-[-0.05em] leading-[1] relative">
            <div className="absolute inset-x-0 inset-y-1.5 flex flex-col justify-between mix-blend-screen opacity-90 overflow-hidden">
              <div className="h-[3px] w-full bg-white"></div>
              <div className="h-[3px] w-full bg-white"></div>
              <div className="h-[3px] w-full bg-white"></div>
              <div className="h-[3px] w-full bg-white"></div>
              <div className="h-[3px] w-full bg-white"></div>
            </div>
            IBM
          </span>
        </div>
      )
    },
    {
      id: "adobe",
      render: () => (
        <div className="flex items-center justify-center w-full gap-2.5 pointer-events-none select-none">
          <div className="w-6 h-7 sm:w-7 sm:h-8 bg-[#ff0000] flex items-center justify-center relative overflow-hidden shrink-0">
            <div className="w-0 h-0 border-l-[7px] border-l-transparent border-r-[7px] border-r-transparent border-b-[20px] border-b-white transform scale-y-[1.5] translate-y-[2px]"></div>
          </div>
          <span className="font-bold text-[#111827] dark:text-gray-200 text-[12px] sm:text-[13px] xl:text-[14px] leading-[1.1] text-left">Adobe<br/>Solution Partner</span>
        </div>
      )
    },
    {
      id: "cmmi-5",
      render: () => (
        <div className="flex items-center justify-center w-full pointer-events-none select-none">
          <div className="flex bg-[#009b4f] p-[8px] sm:p-2.5 gap-2 items-center shadow-sm">
             <div className="text-[17px] sm:text-[20px] font-black text-white leading-none tracking-tight">CMMI</div>
             <div className="border-[1.5px] border-white text-white px-1.5 py-0.5 text-[11px] sm:text-[13px] font-bold leading-none">5</div>
          </div>
        </div>
      )
    },
    {
      id: "cmmi-3",
      render: () => (
        <div className="flex items-center justify-center w-full pointer-events-none select-none">
          <div className="flex bg-[#004785] p-[8px] sm:p-2.5 gap-2 items-center shadow-sm">
             <div className="text-[17px] sm:text-[20px] font-black text-white leading-none tracking-tight">CMMI</div>
             <div className="border-[1.5px] border-white text-white px-1.5 py-0.5 text-[11px] sm:text-[13px] font-bold leading-none">3</div>
          </div>
        </div>
      )
    },
    {
      id: "salesforce",
      render: () => (
        <div className="flex items-center justify-center w-full gap-2.5 pointer-events-none select-none">
          <svg className="w-10 h-8 sm:w-12 sm:h-9 text-[#009edb] fill-current" viewBox="0 0 24 24"><path d="M16 8c-2.21 0-4 1.79-4 4 0 .34.04.67.12.98C11.51 12.36 10.8 12 10 12c-2.76 0-5 2.24-5 5s2.24 5 5 5h8c2.76 0 5-2.24 5-5s-2.24-5-5-5c-.34 0-.67.04-.98.12-.62-2.31-2.74-4.12-5.02-4.12z"/></svg>
          <span className="font-extrabold text-gray-800 dark:text-gray-300 text-[13px] sm:text-[15px] uppercase tracking-wide">partner</span>
        </div>
      )
    },
    {
      id: "google",
      render: () => (
        <div className="flex items-center justify-center w-full gap-2.5 pointer-events-none select-none pt-1">
          <span className="font-bold tracking-tighter text-[24px] sm:text-[28px] leading-[1]">
             <span className="text-[#4285F4]">G</span>
             <span className="text-[#EA4335]">o</span>
             <span className="text-[#FBBC05]">o</span>
             <span className="text-[#4285F4]">g</span>
             <span className="text-[#34A853]">l</span>
             <span className="text-[#EA4335]">e</span>
          </span>
          <span className="font-bold text-gray-500 text-[14px] sm:text-[16px] pt-[2px]">Partner</span>
        </div>
      )
    },
    {
      id: "intel",
      render: () => (
        <div className="flex items-center justify-center w-full pointer-events-none select-none pt-1">
          <div className="relative w-16 h-10 sm:w-20 sm:h-12 rounded-[50%] border-[2.5px] border-[#0071c5] flex items-center justify-center">
             <span className="text-[#0071c5] font-black tracking-tighter text-[16px] sm:text-[20px] translate-y-[-1px]">intel</span>
          </div>
        </div>
      )
    },
    {
      id: "verizon",
      render: () => (
        <div className="flex items-center justify-center w-full pointer-events-none select-none">
           <span className="font-black text-[#000000] dark:text-white text-[20px] sm:text-[24px] tracking-tight">verizon</span>
           <span className="text-[#cd040b] font-black text-[24px] sm:text-[28px] ml-1 mt-1 -rotate-6">✓</span>
        </div>
      )
    }
  ];

  const fadeSlideIn = {
    initial: { opacity: 0, scale: 0.95, y: 15 },
    animate: { opacity: 1, scale: 1, y: 0 },
  };

  const staggerContainer = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  return (
    <section className="bg-white dark:bg-[var(--color-bg)] py-16 sm:py-20 px-6 font-sans">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center">
        
        <div className="text-center w-full mb-12 sm:mb-16">
          <h2 className="text-[28px] sm:text-[34px] font-bold text-[#111827] dark:text-[var(--color-text)] leading-tight mb-4">
            Partner <span className="text-primary">With Us</span>
          </h2>
          <p className="text-[14px] sm:text-[16px] text-[#4b5563] dark:text-[var(--color-muted)] font-medium max-w-[600px] mx-auto leading-relaxed">
            Join hands with us and experience the difference of working with a trusted global AI-based SaaS technology partner. Let's unlock new possibilities and accelerate your journey to success.
          </p>
        </div>

        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 sm:gap-5 w-full"
        >
          {partnerLogos.map((partner) => (
            <motion.div 
              key={partner.id}
              variants={fadeSlideIn}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="bg-white dark:bg-[var(--color-surface)] shadow-[0_4px_16px_rgba(0,0,0,0.06)] dark:shadow-none border border-gray-100 dark:border-[var(--color-surface-2)] rounded-[6px] aspect-[16/10] sm:aspect-[4/3] xl:aspect-[16/10] flex items-center justify-center p-4 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300"
            >
              {partner.render()}
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
