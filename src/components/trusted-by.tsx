"use client";

import { motion } from "framer-motion";
import { Star, StarHalf } from "lucide-react";

export function TrustedBy() {
  const cards = [
    {
      id: "clutch",
      rating: "4.8",
      renderLogo: () => (
        <div className="flex items-center h-full">
          <span className="text-[34px] font-bold text-[#1a2b3c] tracking-tight relative flex items-center">
            Clutch
            <div className="absolute right-[22px] bottom-[11px] w-1.5 h-1.5 bg-primary rounded-full"></div>
          </span>
        </div>
      ),
    },
    {
      id: "featured",
      rating: "4.8",
      renderLogo: () => (
        <div className="flex items-center justify-center h-full gap-2.5">
          <div className="w-9 h-9 bg-primary rounded-md flex items-center justify-center text-white text-[28px] font-serif leading-none pt-2">
            "
          </div>
          <div className="flex flex-col leading-[1.1] text-left">
            <span className="text-[15px] font-black text-[#111827] dark:text-white">featured</span>
            <span className="text-[15px] font-medium text-[#111827] dark:text-gray-300">customers</span>
          </div>
        </div>
      ),
    },
    {
      id: "google",
      rating: "4.8",
      renderLogo: () => (
        <div className="flex items-center h-full">
          <span className="text-[34px] font-semibold tracking-tighter flex items-center">
            <span className="text-[#4285F4]">G</span>
            <span className="text-[#EA4335]">o</span>
            <span className="text-[#FBBC05]">o</span>
            <span className="text-[#4285F4]">g</span>
            <span className="text-[#34A853]">l</span>
            <span className="text-[#EA4335]">e</span>
          </span>
        </div>
      ),
    },
    {
      id: "serchen",
      rating: "4.8",
      renderLogo: () => (
        <div className="flex items-center justify-center h-full gap-2">
          <svg className="w-8 h-8 text-[#2e5a7b] dark:text-[#5e8bab]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
          </svg>
          <span className="text-[26px] font-semibold text-[#2e5a7b] dark:text-[#5e8bab] tracking-tight">serchen</span>
        </div>
      ),
    },
  ];

  const fadeSlideIn = {
    initial: { opacity: 0, y: 15 },
    animate: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <section className="bg-white dark:bg-[var(--color-bg)] py-20 px-6 font-sans">
      <div className="max-w-[1200px] mx-auto text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-[28px] md:text-[36px] font-bold text-[#111827] dark:text-[var(--color-text)] mb-3">
            Trusted By <span className="text-primary">2000+ SaaS Businesses</span>
          </h2>
          <p className="text-[17px] md:text-[19px] text-[#4b5563] dark:text-[var(--color-muted)] mb-14">
            And Industry Experts Globally
          </p>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1100px] mx-auto"
        >
          {cards.map((card) => (
            <motion.div 
              key={card.id}
              variants={fadeSlideIn}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="bg-white dark:bg-[var(--color-surface)] shadow-[0_4px_24px_rgba(0,0,0,0.06)] dark:shadow-none border border-gray-100 dark:border-[var(--color-surface-2)] p-8 rounded-sm flex flex-col hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300"
            >
              {/* Logo Box */}
              <div className="h-[60px] flex items-center justify-center mb-6 w-full">
                {card.renderLogo()}
              </div>

              {/* Strict Separator Line */}
              <hr className="w-[90%] mx-auto border-t-[1.5px] border-gray-500 dark:border-gray-500 mb-5" />

              {/* Rating Box - Left Aligned */}
              <div className="w-[90%] mx-auto flex flex-col items-start gap-1.5">
                <span className="text-[14px] font-bold text-[#111827] dark:text-[var(--color-text)]">
                  {card.rating} Rating
                </span>
                <div className="flex items-center gap-1">
                  <Star className="w-[18px] h-[18px] text-[#fbbf24] fill-[#fbbf24] stroke-amber-500" />
                  <Star className="w-[18px] h-[18px] text-[#fbbf24] fill-[#fbbf24] stroke-amber-500" />
                  <Star className="w-[18px] h-[18px] text-[#fbbf24] fill-[#fbbf24] stroke-amber-500" />
                  <Star className="w-[18px] h-[18px] text-[#fbbf24] fill-[#fbbf24] stroke-amber-500" />
                  <StarHalf className="w-[18px] h-[18px] text-[#fbbf24] fill-[#fbbf24] stroke-amber-500" />
                </div>
              </div>

            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
