"use client";

import { ArrowRight, Sparkles, Terminal, Cpu, Bot } from "lucide-react";
import Link from "next/link";

export function GenAiHero() {
  return (
    <section className="relative w-full min-h-screen bg-black text-white flex items-center overflow-hidden pt-20">
      {/* Dynamic Background Gradients */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-br from-fuchsia-600/20 via-purple-600/10 to-transparent blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-tr from-violet-600/20 via-pink-600/10 to-transparent blur-[130px]"></div>
        <div className="absolute top-[40%] left-[50%] w-[800px] h-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-fuchsia-500/10 blur-[150px] pointer-events-none"></div>
      </div>
      
      {/* Light dot grid */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)]"></div>

      <div className="max-w-[1200px] mx-auto w-full px-6 relative z-10 grid lg:grid-cols-[1.2fr,0.8fr] gap-16 items-center">
        
        {/* Left Column */}
        <div className="flex flex-col items-start gap-8 z-20 pt-10">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-fuchsia-500/30 bg-fuchsia-500/10 backdrop-blur-md shadow-[0_0_15px_rgba(217,70,239,0.15)]">
            <Sparkles className="w-4 h-4 text-fuchsia-400 animate-pulse" />
            <span className="text-fuchsia-400 text-xs font-bold tracking-widest uppercase">Hire Top 1% AI Talent</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.05] tracking-tight text-white">
            Build the Future with <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-purple-400 to-pink-400">Generative AI</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 max-w-[550px] leading-relaxed font-light">
            Deploy cutting-edge LLMs, RAG architectures, and autonomous AI agents. Hire elite Generative AI engineers who turn foundational models into massive competitive advantages.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-2">
            <Link href="#contact" className="group relative px-8 py-4 bg-white text-black font-bold rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.2)]">
               Interview Developers
            </Link>
            <button className="flex items-center gap-2 px-8 py-4 rounded-full font-bold border border-white/20 text-white hover:bg-white/5 transition-colors">
               Explore Models <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          
          <div className="flex items-center gap-10 mt-8 pt-6 border-t border-white/10 w-full">
            <div>
              <div className="text-3xl font-black text-white">24<span className="text-fuchsia-400">h</span></div>
              <div className="text-xs text-gray-500 font-medium uppercase tracking-wider mt-1">Av. Matching Time</div>
            </div>
            <div>
              <div className="text-3xl font-black text-white">98<span className="text-fuchsia-400">%</span></div>
              <div className="text-xs text-gray-500 font-medium uppercase tracking-wider mt-1">Retention Rate</div>
            </div>
          </div>
        </div>

        {/* Right Column / Visuals */}
        <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-auto lg:h-[600px] perspective-[1200px] flex justify-center items-center">
           <div className="relative w-full max-w-[450px] transform rotate-y-[-12deg] rotate-x-6 hover:rotate-y-0 hover:rotate-x-0 transition-transform duration-700">
               {/* Glowing aura */}
               <div className="absolute inset-0 bg-gradient-to-tr from-fuchsia-500 to-indigo-500 blur-2xl opacity-20 mt-10 rounded-full"></div>
               
               {/* Terminal Window */}
               <div className="relative z-20 w-full bg-[#0c0c0e] border border-white/10 rounded-2xl overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.5)]">
                  <div className="flex items-center gap-2 px-4 py-3 bg-[#151518] border-b border-white/5">
                     <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                     <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                     <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                     <span className="ml-2 text-xs font-mono text-gray-500">agent_workflow.py</span>
                  </div>
                  <div className="p-6 font-mono text-sm leading-relaxed text-gray-300">
                     <p><span className="text-pink-400">import</span> <span className="text-blue-300">langchain</span></p>
                     <p><span className="text-pink-400">from</span> langchain.llms <span className="text-pink-400">import</span> OpenAI</p>
                     <br/>
                     <p><span className="text-gray-500"># Initialize the core router agent</span></p>
                     <p>llm = OpenAI(temperature=<span className="text-amber-300">0.0</span>)</p>
                     <p>agent = initialize_agent(</p>
                     <p>  tools=custom_enterprise_tools,</p>
                     <p>  llm=llm,</p>
                     <p>  agent=AgentType.<span className="text-purple-300">ZERO_SHOT_REACT</span></p>
                     <p>)</p>
                     <br/>
                     <p className="flex items-center gap-2 line-through opacity-0 animate-[fadeIn_0.5s_ease-out_1s_forwards]"><span className="text-emerald-400">&gt;&gt;</span> <span>Agent optimized successfully</span></p>
                  </div>
               </div>

               {/* Floating Badges */}
               <div className="absolute -top-6 -right-6 lg:-right-10 w-24 h-24 bg-[#111] border border-fuchsia-500/30 rounded-2xl shadow-2xl flex items-center justify-center -rotate-6 z-30 animate-pulse">
                  <Bot className="w-10 h-10 text-fuchsia-400" />
               </div>
               
               <div className="absolute -bottom-10 -left-6 lg:-left-12 w-28 h-28 bg-[#111] border border-blue-500/30 rounded-2xl shadow-2xl flex flex-col items-center justify-center rotate-6 z-30 opacity-90 transition-transform hover:scale-110">
                  <Cpu className="w-8 h-8 text-blue-400 mb-1" />
                  <span className="text-[10px] font-bold text-gray-300 tracking-wider">Llama3 70B</span>
               </div>
           </div>
        </div>
      </div>
    </section>
  );
}
