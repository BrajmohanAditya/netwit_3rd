"use client";

import Image from "next/image";
import Link from "next/link";

export function StartupsHero() {
  return (
    <section className="relative min-h-[500px] md:min-h-[550px] w-full flex flex-col items-center justify-center p-6 bg-black overflow-hidden m-0">
      
      {/* Background Image exactly as specified */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/startups_hero_bg.png"
          alt="Startups Assembly Puzzle"
          fill
          className="object-cover opacity-[0.45] mix-blend-screen"
          priority
        />
        {/* Soft dark gradient to make text stand out */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/80"></div>
      </div>

      <div className="relative z-10 max-w-[800px] w-full flex flex-col items-center text-center mt-8">
        
        <h1 className="text-[36px] md:text-[54px] font-bold text-white mb-6 tracking-tight drop-shadow-md">
          Build - Scale - Grow
        </h1>
        
        <p className="text-[14px] md:text-[16.5px] font-medium text-gray-100 mb-10 max-w-[600px] leading-[1.6] drop-shadow-sm">
          Our Elastic teams enable Startups to translate their vision into scalable software products. Full-cycle development services for agility & growth.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full">
          <Link 
            href="/hire" 
            className="bg-white text-black text-[13.5px] font-bold py-3 px-8 transition-transform hover:-translate-y-0.5 w-[160px] h-[50px] shadow-[0_4px_14px_rgba(255,255,255,0.15)] rounded-sm flex items-center justify-center"
          >
            Build Your Team
          </Link>
          <Link 
            href="/about/engagement-model" 
            className="bg-transparent border-[1.5px] border-white text-white text-[13.5px] font-bold py-3 px-8 transition-colors hover:bg-white/10 w-[200px] h-[50px] rounded-sm flex items-center justify-center text-center leading-tight"
          >
            Our Engagement Model
          </Link>
        </div>

      </div>
    </section>
  );
}
