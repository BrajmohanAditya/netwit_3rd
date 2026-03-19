import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export default function SolveChallenges() {
  return (
    <section className="bg-white py-24 pb-32 border-t border-gray-100">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col gap-24">
        
        {/* Top Feature Layout */}
        <div className="flex flex-col lg:flex-row items-center gap-14">
          
          {/* Left Side: Support AI Image */}
          <div className="w-full lg:w-[45%]">
            <div className="relative w-full aspect-square md:aspect-[4/3] rounded-xl overflow-hidden shadow-xl border-8 border-yellow-50/50">
              <Image 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1200" 
                alt="AI Customer Support Agent"
                fill
                className="object-cover"
              />
              {/* Optional slight dark overlay for text/style pop if needed */}
              <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply"></div>
            </div>
          </div>

          {/* Right Side: Features Text */}
          <div className="w-full lg:w-[55%] flex flex-col text-left">
            <h2 className="text-[32px] md:text-[40px] font-bold text-[#111827] mb-6 leading-[1.2]">
              Solve Customer <span className="text-[#ea580c]">Support<br/> Challenges with AI</span>
            </h2>
            
            <p className="text-[15px] md:text-[16px] text-[#4b5563] leading-[1.8] mb-8 font-medium">
              Say goodbye to long wait times, inconsistent service, and high churn. Our AI-powered customer service empowers your business to deliver faster, smarter, and more personalized customer experiences. By leveraging advanced machine learning and natural language processing, our tools can:
            </p>

            <ul className="flex flex-col gap-4 mb-8">
              <li className="flex items-center gap-3 text-[14px] md:text-[15px] text-[#374151] font-semibold">
                <CheckCircle2 className="w-[18px] h-[18px] text-[#111827]" />
                Predict customer needs before they arise
              </li>
              <li className="flex items-center gap-3 text-[14px] md:text-[15px] text-[#374151] font-semibold">
                <CheckCircle2 className="w-[18px] h-[18px] text-[#111827]" />
                Route tickets intelligently for faster resolution
              </li>
              <li className="flex items-center gap-3 text-[14px] md:text-[15px] text-[#374151] font-semibold">
                <CheckCircle2 className="w-[18px] h-[18px] text-[#111827]" />
                Analyze sentiment and feedback in real-time
              </li>
              <li className="flex items-center gap-3 text-[14px] md:text-[15px] text-[#374151] font-semibold">
                <CheckCircle2 className="w-[18px] h-[18px] text-[#111827]" />
                Continuously improve with data-driven insights
              </li>
            </ul>

            <p className="text-[15px] md:text-[16px] text-[#4b5563] leading-[1.8] font-medium border-l-4 border-[#ea580c] pl-4">
              As an AI-first company, Netsmartz doesn't just use AI for customer support solutions — we embed it into the DNA of our customer support solutions, helping you do the same.
            </p>
          </div>
        </div>

        {/* Bottom Banner Layout */}
        <div className="relative mt-12 bg-gradient-to-r from-[#e66a1a] to-[#d95a0f] rounded-2xl md:rounded-3xl shadow-[0_10px_30px_rgba(234,88,12,0.2)]">
          <div className="px-8 md:px-14 py-12 md:py-16 w-full md:w-3/4 flex flex-col items-start relative z-10 text-left">
            
            <h3 className="text-[24px] md:text-[32px] lg:text-[36px] font-bold text-white leading-tight mb-8">
              Tired of Reactive Support? Move to Proactive, AI-driven Experience
            </h3>
            
            <Link 
              href="#contact" 
              className="bg-white hover:bg-gray-50 text-[#111827] font-bold py-3.5 px-8 rounded shadow-md transition-all text-[15px]"
            >
              Start Your AI Support Journey
            </Link>
          </div>

          {/* Banner Cutout Image Element */}
          <div className="absolute right-4 md:right-10 bottom-0 pointer-events-none hidden md:block w-[300px] h-[350px]">
            {/* Using an overlapping invisible boundary image trick for that "breaking out" effect */}
            <Image 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600" 
              alt="Friendly Advisor"
              fill
              className="object-cover object-top mask-image shadow-2xl rounded-t-full"
              style={{ maskImage: "linear-gradient(to bottom, black 80%, transparent 100%)", WebkitMaskImage: "linear-gradient(to bottom, black 80%, transparent 100%)" }}
            />
          </div>
        </div>

      </div>
    </section>
  );
}
