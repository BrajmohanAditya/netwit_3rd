"use client";

import { motion } from "framer-motion";

export function ProductEcosystem() {
  const businesses = [
    {
      id: "netsmartz",
      render: () => (
        <div className="flex items-center gap-1.5 pointer-events-none select-none">
          <div className="relative w-4 h-5 flex flex-col justify-end">
            <div className="w-1.5 h-1.5 bg-[#f97316] rounded-full absolute top-0 left-1/2 -translate-x-1/2"></div>
            <div className="w-full h-2.5 bg-[#f97316] rounded-sm mt-0.5"></div>
          </div>
          <span className="font-extrabold text-[15px] sm:text-[18px] text-[#0f172a] dark:text-gray-200 tracking-tight flex items-center">
            netsmartz
            <div className="w-2.5 h-3 bg-[#e11d48] rounded-bl-sm rounded-tr-sm ml-1 flex items-center justify-center">
              <span className="text-white text-[5px] font-bold pb-[1px]">★</span>
            </div>
          </span>
        </div>
      )
    },
    {
      id: "projectpro",
      render: () => (
        <div className="flex flex-col items-center pointer-events-none select-none pt-1">
          <div className="flex items-center gap-1.5 relative">
            <span className="text-[16px] text-cyan-500 absolute -left-[14px] top-[-3px] animate-pulse">❆</span>
            <span className="font-bold text-[15px] sm:text-[17px] text-[#1e293b] dark:text-gray-200 tracking-tight leading-[1]">ProjectPro</span>
          </div>
          <span className="text-[6px] sm:text-[7px] text-gray-500 font-medium italic mt-1 ml-4 tracking-wider">by netsmartz</span>
        </div>
      )
    },
    {
      id: "dynamicssmartz",
      render: () => (
        <div className="flex flex-col items-center pointer-events-none select-none">
          <div className="flex items-center gap-1.5">
            <div className="flex items-center gap-[2px]">
              <div className="w-1.5 h-4 bg-[#0ea5e9] rounded-[1px]"></div>
              <div className="w-1.5 h-3 bg-[#0ea5e9] rounded-[1px]"></div>
            </div>
            <span className="font-extrabold text-[13px] sm:text-[14px] tracking-tight">
              <span className="text-[#334155] dark:text-gray-300">Dynamics</span>
              <span className="text-[#0ea5e9]">Smartz</span>
            </span>
          </div>
          <span className="text-[5px] sm:text-[6px] text-gray-400 font-semibold tracking-wide ml-4 mt-0.5 uppercase">a netsmartz company</span>
        </div>
      )
    },
    {
      id: "caresmartz",
      render: () => (
        <div className="flex flex-col items-center pointer-events-none select-none pt-2">
          <div className="flex items-center gap-1">
            <div className="relative w-4 h-4 flex items-center justify-center mr-0.5">
              <div className="absolute w-2 h-2 bg-pink-400 rounded-full top-0 left-0 mix-blend-multiply"></div>
              <div className="absolute w-2 h-2 bg-cyan-400 rounded-full top-0 right-0 mix-blend-multiply"></div>
              <div className="absolute w-2 h-2 bg-orange-400 rounded-full bottom-0 left-1/4 mix-blend-multiply"></div>
            </div>
            <span className="text-[14px] sm:text-[15px] tracking-tighter font-extrabold">
              <span className="text-cyan-500 leading-none">Care</span>
              <span className="text-gray-600 dark:text-gray-300 leading-none">Smartz360</span>
            </span>
          </div>
          <span className="text-[5px] sm:text-[6px] tracking-[0.15em] text-gray-400 font-bold uppercase mt-1 pl-4">A better way to care</span>
        </div>
      )
    },
    {
      id: "envision",
      render: () => (
        <div className="flex items-center pointer-events-none select-none">
          <span className="font-black text-[18px] sm:text-[21px] text-[#2563eb] tracking-wider flex items-center">
            <div className="flex flex-col gap-[3px] mr-0.5 mt-[2px]">
               <div className="w-[11px] h-[3px] bg-[#2563eb]"></div>
               <div className="w-[11px] h-[3px] bg-[#2563eb]"></div>
               <div className="w-[11px] h-[3px] bg-[#2563eb]"></div>
            </div>
            NVISION
          </span>
        </div>
      )
    },
    {
      id: "seal",
      render: () => (
        <div className="w-[45px] h-[45px] sm:w-[50px] sm:h-[50px] rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center relative overflow-hidden bg-white shadow-inner pointer-events-none select-none p-1">
           <div className="w-full h-full rounded-full border border-orange-200 relative flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-600 via-orange-500 to-yellow-500 opacity-90 rounded-full"></div>
              <span className="relative text-white font-serif font-black text-[18px] sm:text-[20px] z-10 leading-[1] mt-[2px] pr-[1px]">N</span>
           </div>
        </div>
      )
    },
    {
      id: "cloudsmartz",
      render: () => (
        <div className="flex items-center gap-1.5 sm:gap-2 pointer-events-none select-none">
           <div className="w-6 h-6 sm:w-8 sm:h-8 relative">
              <svg viewBox="0 0 100 100" className="w-full h-full fill-[#e11d48]">
                <path d="M70,40 C70,25 55,15 40,25 C25,15 10,25 15,40 C5,50 10,70 25,75 C30,90 50,90 55,75 C70,80 85,65 75,50 C85,40 80,25 70,40 Z" opacity="0.8" />
                <circle cx="45" cy="45" r="20" fill="white" />
              </svg>
           </div>
           <div className="flex flex-col">
             <span className="text-[12px] sm:text-[14px] font-extrabold tracking-tight">
               <span className="text-[#e11d48]">Cloud</span>
               <span className="text-gray-700 dark:text-gray-300">Smartz</span>
             </span>
             <span className="text-[5px] text-gray-400 mt-[1px]">POWERING THE DIGITAL ECONOMY</span>
           </div>
        </div>
      )
    },
    {
      id: "aismartz",
      render: () => (
        <div className="flex flex-col justify-center pointer-events-none select-none pt-1">
           <div className="flex items-center gap-[2px]">
             <span className="text-[#f97316] font-black text-[18px] sm:text-[22px] leading-none shrink-0 border-r-2 border-[#f97316] pr-1">AI</span>
             <span className="text-[#1f2937] dark:text-gray-200 font-extrabold text-[15px] sm:text-[17px] leading-none tracking-tight">Smartz</span>
           </div>
           <span className="text-[4.5px] sm:text-[5px] text-gray-500 uppercase font-black mt-1.5 tracking-widest leading-[1.2]">
             Robust Data<br/>Environment Solutions
           </span>
        </div>
      )
    },
    {
      id: "servicesmartz",
      render: () => (
        <div className="flex items-center gap-1.5 pointer-events-none select-none">
           <div className="w-5 h-6 relative text-[#0ea5e9]">
             <svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full transform scale-125 -mt-1"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
             <div className="absolute top-0 right-0 w-2 h-2 bg-[#0ea5e9] rounded-full translate-x-1 -translate-y-1"></div>
           </div>
           <div className="flex flex-col leading-none">
             <span className="text-[13px] sm:text-[15px] font-bold text-gray-700 dark:text-gray-200 uppercase tracking-tight">service</span>
             <span className="text-[13px] sm:text-[15px] font-bold text-[#0ea5e9] uppercase tracking-tight">smartz</span>
             <span className="text-[4px] sm:text-[5px] text-gray-400 uppercase mt-0.5 ml-0.5 tracking-wide">A netsmartz company</span>
           </div>
        </div>
      )
    },
    {
      id: "ebiz",
      render: () => (
        <div className="flex items-center gap-1.5 sm:gap-2 pointer-events-none select-none">
           <div className="w-6 h-6 sm:w-7 sm:h-7 bg-[#84cc16] flex items-center justify-center rounded-[2px] shadow-sm transform -skew-x-6">
             <span className="text-white font-bold text-[18px] transform skew-x-6">e</span>
           </div>
           <div className="flex flex-col leading-[1]">
             <span className="font-extrabold text-[15px] sm:text-[16px] text-[#3f3f46] dark:text-gray-200 uppercase tracking-widest">BIZ</span>
             <span className="text-[6px] text-gray-500 mt-0.5 font-medium tracking-wide">testing india</span>
           </div>
        </div>
      )
    },
    {
      id: "appworx",
      render: () => (
        <div className="flex items-center pointer-events-none select-none">
           <div className="flex relative">
              <span className="bg-[#ea580c] text-white font-black text-[12px] sm:text-[14px] px-1 sm:px-1.5 py-0.5 rounded-sm relative z-10 shadow-sm border border-orange-600/50">APP</span>
              <span className="text-[#3f3f46] dark:text-gray-200 font-black text-[14px] sm:text-[16px] flex items-center justify-center pl-[2px] tracking-tight">WORX</span>
           </div>
        </div>
      )
    },
    {
      id: "tigers",
      render: () => (
        <div className="flex flex-col items-center justify-center pointer-events-none select-none pt-1">
          <div className="w-5 h-5 bg-gradient-to-tr from-[#ea580c] to-amber-300 rounded-[3px] mb-[2px] flex items-center justify-center border border-orange-500/30">
             <div className="w-2.5 h-2.5 bg-white mix-blend-overlay rounded-full blur-[0.5px]"></div>
          </div>
          <span className="text-[8px] sm:text-[9px] font-bold text-gray-800 dark:text-gray-300 leading-none tracking-tight">netsmartz</span>
          <span className="text-[11px] sm:text-[12px] font-black text-[#1f2937] dark:text-gray-100 leading-[1.1] tracking-widest">TIGERS</span>
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
    <section className="bg-white dark:bg-[var(--color-bg)] py-20 px-6 font-sans">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center">
        
        <div className="text-center w-full mb-12 sm:mb-16">
          <h2 className="text-[26px] sm:text-[28px] md:text-[34px] font-bold text-[#111827] dark:text-[var(--color-text)] leading-tight">
            Our Deep Expertise is Evident in <span className="text-[#ea580c]">Our Successful,<br className="hidden sm:block" /> Home-Grown Businesses</span>
          </h2>
        </div>

        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 w-full"
        >
          {businesses.map((business, index) => (
            <motion.div 
              key={business.id}
              variants={fadeSlideIn}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="bg-white dark:bg-[var(--color-surface)] shadow-[0_2px_12px_rgba(0,0,0,0.06)] dark:shadow-none border border-gray-100 dark:border-[var(--color-surface-2)] rounded-[6px] aspect-[16/10] flex items-center justify-center p-3 hover:shadow-[0_8px_25px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 overflow-hidden relative cursor-default group"
            >
              {/* Subtle hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-gray-50 to-white dark:from-[var(--color-surface-2)] dark:to-[var(--color-surface)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10 w-full h-full flex items-center justify-center">
                {business.render()}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
