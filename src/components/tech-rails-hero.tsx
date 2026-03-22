"use client";

import { ArrowRight, Gem, TerminalSquare, TrainTrack } from "lucide-react";
import Link from "next/link";

export function RailsHero() {
  return (
    <section className="relative w-full min-h-[110vh] bg-[#0d0708] text-white flex items-center overflow-hidden pt-20 font-sans">
      {/* Ruby Red Gradients */}
      <div className="absolute inset-0 z-0">
         <div className="absolute top-[0%] left-[10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-br from-[#CC342D]/20 via-[#8A0F14]/10 to-transparent blur-[120px] pointer-events-none"></div>
         <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-tl from-[#ef4444]/15 via-[#CC342D]/20 to-transparent blur-[130px] pointer-events-none"></div>
      </div>
      
      {/* Rails Track Grid */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(204,52,45,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(204,52,45,0.05)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)] pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto w-full px-6 relative z-10 grid lg:grid-cols-[1.1fr,0.9fr] gap-12 items-center">
        
        {/* Left Column */}
        <div className="flex flex-col items-start gap-8 z-20 pt-10">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-[#CC342D]/30 bg-[#CC342D]/10 backdrop-blur-xl shadow-lg">
            <Gem className="w-4 h-4 text-[#CC342D]" />
            <span className="text-[#CC342D] text-xs font-semibold tracking-widest uppercase">Convention Over Configuration</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.05] tracking-tight text-white shadow-sm">
            Startup <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ef4444] to-[#CC342D] font-extrabold tracking-tighter">Velocity.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-rose-100/60 max-w-[480px] leading-relaxed font-light">
            When time-to-market is the only metric that matters, Ruby on Rails wins. We engineer high-octane products using the exact framework that scaled Shopify, GitHub, and Airbnb to billions.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-2">
            <Link href="#contact" className="group relative px-8 py-4 bg-[#CC342D] text-white font-bold rounded-full overflow-hidden transition-all hover:scale-105 shadow-[0_0_40px_rgba(204,52,45,0.3)] hover:bg-[#a62a24]">
               Deploy Rails Core
            </Link>
            <button className="flex items-center gap-2 px-8 py-4 rounded-full font-bold border border-white/20 text-white hover:bg-white/5 transition-colors backdrop-blur-md">
               View Architecture <ArrowRight className="w-4 h-4 text-[#CC342D]" />
            </button>
          </div>
          
          <div className="flex items-center gap-8 mt-8 pt-6 border-t border-white/10 w-full mb-10 lg:mb-0">
            <div>
              <div className="text-3xl font-bold text-white tracking-tighter">80<span className="text-slate-500 text-2xl">%</span></div>
              <div className="text-xs text-rose-100/50 font-medium uppercase tracking-wider mt-1">Faster Prototyping</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white tracking-tighter">OMakase<span className="text-slate-500 text-2xl"></span></div>
              <div className="text-xs text-rose-100/50 font-medium uppercase tracking-wider mt-1">Curated Tech Stack</div>
            </div>
          </div>
        </div>

        {/* Right Column / Abstract Rails IDE & Terminal */}
        <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-auto lg:h-[650px] perspective-[1400px] flex justify-center items-center">
           <div className="relative w-full max-w-[480px] h-[550px] transform rotate-y-[-10deg] rotate-x-5 hover:rotate-y-0 hover:rotate-x-0 transition-transform duration-1000 ease-out">
               
               {/* Translucent Window */}
               <div className="absolute top-[10%] left-[0%] w-full h-[85%] bg-[#120606]/90 backdrop-blur-3xl border border-[#CC342D]/20 rounded-2xl shadow-[0_40px_100px_rgba(0,0,0,0.9)] z-20 hover:-translate-y-2 transition-transform cursor-default relative overflow-hidden flex flex-col">
                  
                  {/* IDE Header */}
                  <div className="h-10 bg-[#080202] border-b border-[#CC342D]/20 flex items-center px-4 justify-between backdrop-blur-md flex-shrink-0">
                     <div className="flex gap-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                     </div>
                     <span className="text-[10px] text-rose-200/50 font-medium flex items-center gap-2 font-mono">
                        user.rb
                     </span>
                     <div className="w-10"></div>
                  </div>
                  
                  {/* Rails Model Code Content */}
                  <div className="p-6 font-mono text-[12px] leading-[1.8] text-slate-300 flex-1">
                     <span className="text-[#F97583]">class</span> <span className="text-[#B392F0]">User</span> &lt; <span className="text-[#B392F0]">ApplicationRecord</span><br/>
                     &nbsp;&nbsp;<span className="text-[#79B8FF]">has_many</span> <span className="text-[#9ECBFF]">:subscriptions</span>, <span className="text-[#F97583]">dependent:</span> <span className="text-[#9ECBFF]">:destroy</span><br/>
                     &nbsp;&nbsp;<span className="text-[#79B8FF]">has_secure_password</span><br/>
                     <br/>
                     &nbsp;&nbsp;<span className="text-[#79B8FF]">validates</span> <span className="text-[#9ECBFF]">:email</span>, <span className="text-[#F97583]">presence:</span> <span className="text-[#79B8FF]">true</span>, <span className="text-[#F97583]">uniqueness:</span> <span className="text-[#79B8FF]">true</span><br/>
                     <br/>
                     &nbsp;&nbsp;<span className="text-[#F97583]">def</span> <span className="text-[#B392F0]">active_subscription?</span><br/>
                     &nbsp;&nbsp;&nbsp;&nbsp;subscriptions.<span className="text-[#79B8FF]">active</span>.<span className="text-[#79B8FF]">exists?</span><br/>
                     &nbsp;&nbsp;<span className="text-[#F97583]">end</span><br/>
                     <br/>
                     &nbsp;&nbsp;<span className="text-[#F97583]">def</span> <span className="text-[#B392F0]">broadcast_welcome</span><br/>
                     &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#B392F0]">UserMailer</span>.<span className="text-[#79B8FF]">welcome</span>(<span className="text-[#79B8FF]">self</span>).<span className="text-[#79B8FF]">deliver_later</span><br/>
                     &nbsp;&nbsp;<span className="text-[#F97583]">end</span><br/>
                     <span className="text-[#F97583]">end</span><br/>
                  </div>

                  {/* Terminal Simulation at bottom */}
                  <div className="h-32 bg-[#080202] border-t border-[#CC342D]/20 p-4 font-mono text-[10px] text-green-400 overflow-hidden flex-shrink-0">
                     <span className="text-rose-500">$</span> rails generate scaffold Post title:string body:text<br/>
                     <span className="text-slate-400">invoke</span>  active_record<br/>
                     <span className="text-slate-400">create</span>    db/migrate/20260322120000_create_posts.rb<br/>
                     <span className="text-slate-400">create</span>    app/models/post.rb<br/>
                     <span className="text-slate-400">invoke</span>  resource_route<br/>
                     <span className="text-slate-400">route</span>     resources :posts<br/>
                     <span className="text-slate-400 animate-pulse">_</span>
                  </div>
               </div>

               {/* Active Record Badge */}
               <div className="absolute top-[30%] -left-[15%] bg-[#080202] border border-[#CC342D]/40 p-5 rounded-2xl shadow-[0_20px_50px_rgba(204,52,45,0.15)] z-40 transform hover:scale-105 transition-transform flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-[#CC342D]/10 flex items-center justify-center border border-[#CC342D]/30">
                     <TrainTrack className="w-6 h-6 text-[#CC342D]" />
                  </div>
                  <div>
                     <span className="block text-sm font-bold text-white tracking-tight">ActiveRecord</span>
                     <span className="block text-[10px] text-rose-200/60 font-medium mt-0.5">Automated Migrations</span>
                  </div>
               </div>

               {/* Ruby Ghost */}
               <div className="absolute -top-10 -right-16 opacity-[0.05] z-0 animate-[pulse_8s_linear_infinite] grayscale">
                  <Gem className="w-64 h-64" />
               </div>

           </div>
        </div>
      </div>
    </section>
  );
}
