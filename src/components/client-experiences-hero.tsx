"use client";

import { ArrowRight, MessageSquare, Quote, Star, Users, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export function ClientExperiencesHero() {
  return (
    <section className="relative w-full min-h-[90vh] bg-[#050810] text-white flex items-center overflow-hidden pt-20 font-sans">
      {/* Deep Blue & Trust Violet Gradients */}
      <div className="absolute inset-0 z-0">
         <div className="absolute top-[0%] left-[10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-br from-[#1E3A8A]/20 via-[#4F46E5]/10 to-transparent blur-[130px] pointer-events-none"></div>
         <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-tl from-[#6366F1]/10 via-[#1E3A8A]/20 to-transparent blur-[150px] pointer-events-none"></div>
      </div>
      
      {/* Network Pattern */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(rgba(99,102,241,0.05)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)] pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto w-full px-6 relative z-10 grid lg:grid-cols-[1.1fr,0.9fr] gap-12 items-center">
        
        {/* Left Column */}
        <div className="flex flex-col items-start gap-8 z-20 pt-10">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-[#4F46E5]/30 bg-[#4F46E5]/10 backdrop-blur-xl shadow-lg">
            <Users className="w-4 h-4 text-[#818CF8]" />
            <span className="text-[#818CF8] text-xs font-semibold tracking-widest uppercase">Trusted by Global Leaders</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.05] tracking-tight text-white shadow-sm">
            Client <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#818CF8] via-[#6366F1] to-[#3B82F6] font-extrabold tracking-tighter">Voices.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 max-w-[500px] leading-relaxed font-light">
            Behind every line of code is a success story. Read how our engineering partnerships have solved mission-critical challenges for companies ranging from high-growth startups to the Fortune 500.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-2">
            <Link href="#testimonials" className="group relative px-8 py-4 bg-[#4F46E5] text-white font-bold rounded-full overflow-hidden transition-all hover:scale-105 shadow-[0_0_40px_rgba(79,70,229,0.3)] hover:bg-[#4338CA]">
               Read Experiences
            </Link>
            <button className="flex items-center gap-2 px-8 py-4 rounded-full font-bold border border-white/20 text-white hover:bg-white/5 transition-colors backdrop-blur-md">
               Partner With Us <ArrowRight className="w-4 h-4 text-[#818CF8]" />
            </button>
          </div>
          
          <div className="flex items-center gap-8 mt-8 pt-6 border-t border-white/10 w-full mb-10 lg:mb-0">
            <div>
              <div className="text-3xl font-bold text-white tracking-tighter">4.9<span className="text-yellow-400 text-2xl">★</span></div>
              <div className="text-xs text-slate-500 font-medium uppercase tracking-wider mt-1">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white tracking-tighter">200<span className="text-blue-400 text-2xl">+</span></div>
              <div className="text-xs text-slate-500 font-medium uppercase tracking-wider mt-1">Global Clients</div>
            </div>
          </div>
        </div>

        {/* Right Column / Testimonial Abstract */}
        <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-auto lg:h-[650px] perspective-[1400px] flex justify-center items-center">
           <div className="relative w-full max-w-[480px] h-[550px] transform rotate-y-[-10deg] rotate-x-5 hover:rotate-y-0 hover:rotate-x-0 transition-transform duration-1000 ease-out">
               
               {/* Translucent Glass Card */}
               <div className="absolute top-[10%] left-[0%] w-full h-[80%] bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] shadow-[0_40px_100px_rgba(0,0,0,0.5)] z-20 hover:-translate-y-2 transition-transform cursor-default relative overflow-hidden flex flex-col p-10">
                  
                  <div className="absolute top-8 right-8 text-[#818CF8]/20">
                     <Quote className="w-20 h-20 rotate-180" />
                  </div>

                  <div className="flex gap-1 mb-6 relative z-10">
                     {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />)}
                  </div>

                  <p className="text-xl text-slate-200 leading-relaxed font-light mb-10 relative z-10 italic">
                    "The depth of their engineering talent and their obsession with quality transformed our infrastructure into a competitive advantage."
                  </p>

                  <div className="mt-auto flex items-center gap-4 relative z-10">
                     <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#4F46E5] to-[#3B82F6] flex items-center justify-center font-bold text-xl text-white shadow-xl">
                        JD
                     </div>
                     <div>
                        <span className="block text-white font-bold tracking-tight">John Doe</span>
                        <span className="block text-xs text-slate-400 uppercase tracking-widest font-semibold mt-0.5">CTO, Enterprise SaaS</span>
                     </div>
                  </div>
               </div>

               {/* Trust Node */}
               <div className="absolute top-[65%] -right-[15%] bg-[#0f111a] border border-[#4F46E5]/40 p-5 rounded-2xl shadow-[0_20px_50px_rgba(79,70,229,0.2)] z-40 transform hover:scale-105 transition-transform flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-[#4F46E5]/10 flex items-center justify-center border border-[#4F46E5]/30">
                     <CheckCircle2 className="w-6 h-6 text-[#4F46E5]" />
                  </div>
                  <div>
                     <span className="block text-sm font-bold text-white tracking-tight">Verified Partnership</span>
                     <span className="block text-[10px] text-[#818CF8] font-medium mt-0.5">Netsmartz Engineering</span>
                  </div>
               </div>

               {/* Abstract Elements */}
               <div className="absolute -top-10 -left-16 opacity-[0.05] z-0 animate-[pulse_8s_linear_infinite] grayscale">
                  <MessageSquare className="w-64 h-64" />
               </div>

           </div>
        </div>
      </div>
    </section>
  );
}
