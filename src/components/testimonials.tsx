"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Play } from "lucide-react";

const testimonials = [
  {
    id: 0,
    quote: "Netwit's approach to being a team member has helped us better manage our Magento systems and websites.",
    author: "William Doyle",
    role: "VP- Information Technology, Southco Inc",
    videoRole: "Vice President IT\nat Southco Inc",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: 1,
    quote: "It has been a very positive experience working with Netsmartz. The team is very loyal and dedicated. They listen to what customers want and that is one of their biggest strengths.",
    author: "Nelson Loureiro",
    role: "Digital Specialist, EZ Linq",
    videoRole: "Digital Specialist of\nEZ Linq",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: 2,
    quote: "Netwit is very good at building custom-made applications so we chose Netwit and we're very happy.",
    author: "Drew Mullin",
    role: "Director Of Product Management, Fibertech Networks",
    videoRole: "Director of product management\nand development,\nFibertech Networks",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400",
  },
];

export function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-white dark:bg-[var(--color-bg)] py-20 px-6 font-sans border-y border-[var(--color-surface-2)]">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-[32px] md:text-[40px] font-bold text-center mb-16 text-[#111827] dark:text-[var(--color-text)]">
          What <span className="text-primary">Our Clients</span> Say
        </h2>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20 max-w-[1000px] mx-auto">

          {/* Left Text Content */}
          <div className="flex-1 w-full relative min-h-[300px] lg:min-h-[250px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col h-full justify-between"
              >
                <p className="text-[18px] md:text-[22px] text-[#4b5563] dark:text-[var(--color-muted)] leading-[1.6] mb-12">
                  {testimonials[active].quote}
                </p>
                <div className="flex flex-col sm:flex-row sm:items-center gap-5 mt-auto">
                  <div className="w-[60px] h-[60px] bg-[#111827] dark:bg-[var(--color-surface-2)] flex items-center justify-center rounded-sm shrink-0">
                    <Quote className="w-8 h-8 text-white dark:text-primary fill-current rotate-180" />
                  </div>
                  <div>
                    <h4 className="text-[16px] md:text-[18px] font-bold text-[#111827] dark:text-[var(--color-text)]">
                      {testimonials[active].author}
                    </h4>
                    <p className="text-[13px] md:text-[14px] text-[#6b7280] dark:text-gray-400">
                      {testimonials[active].role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Video Thumbnail Content */}
          <div className="w-full lg:w-[450px] flex flex-col items-center lg:items-end">

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                className="w-full relative aspect-[16/10] bg-primary overflow-hidden flex shadow-lg"
              >
                {/* Logo top left corner */}
                <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5 opacity-90">
                  <div className="w-3 h-3 text-white">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L2 22h20L12 2z" />
                    </svg>
                  </div>
                  <span className="text-[10px] font-bold text-white tracking-widest lowercase">
                    netsmartz
                  </span>
                </div>

                {/* Left text portion */}
                <div className="flex-1 px-6 md:px-8 py-10 flex flex-col justify-center text-white relative z-10">
                  <div className="text-[13px] md:text-[15px] font-bold mb-4 opacity-95 tracking-wide">
                    #ClientSpeak
                  </div>

                  <div className="mb-2">
                    {testimonials[active].author.split(" ").map((namePart, idx) => (
                      <h3 key={idx} className="text-[24px] md:text-[28px] font-black leading-[1.1] uppercase">
                        {namePart}
                      </h3>
                    ))}
                  </div>

                  <p className="text-[11px] md:text-[12px] font-semibold opacity-90 leading-tight mb-6 w-full max-w-[160px] whitespace-pre-line mt-1">
                    {testimonials[active].videoRole}
                  </p>

                  <button className="flex items-center gap-1.5 bg-white text-primary px-4 py-1.5 rounded-full text-[11px] md:text-[12px] font-bold uppercase hover:scale-[1.03] transition-transform w-fit whitespace-nowrap shadow-sm">
                    <Play className="w-[14px] h-[14px] fill-primary" /> Watch now
                  </button>
                </div>

                {/* Right image portion with gradient mask */}
                <div className="w-1/2 absolute right-0 top-0 bottom-0 pointer-events-none">
                  <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-primary via-primary/80 to-transparent z-10"></div>
                  <img
                    src={testimonials[active].image}
                    alt={testimonials[active].author}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Pagination Thumbnails */}
            <div className="flex justify-end gap-3 mt-6">
              {testimonials.map((t, idx) => (
                <button
                  key={t.id}
                  onClick={() => setActive(idx)}
                  className={`relative w-[50px] h-[50px] md:w-[60px] md:h-[60px] rounded-full overflow-hidden transition-all duration-300 transform border-[3px] focus:outline-none ${active === idx
                      ? 'border-white scale-110 shadow-md ring-1 ring-primary z-10'
                      : 'border-transparent opacity-50 grayscale hover:opacity-80 hover:grayscale-[50%]'
                    }`}
                >
                  <img src={t.image} alt={t.author} className="w-full h-full object-cover object-top" />
                </button>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
