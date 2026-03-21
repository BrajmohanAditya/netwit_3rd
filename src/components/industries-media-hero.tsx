"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, PlayCircle, Gamepad2, Globe, Radio } from "lucide-react";

export function MediaHero() {
  return (
    <section className="relative min-h-[650px] w-full flex flex-col justify-center p-6 bg-[#0a0510] overflow-hidden m-0">
      
      {/* Immersive Dark/Neon Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        
        {/* Cinematic Glowing Orbs */}
        <div className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] bg-fuchsia-600/20 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute top-[40%] left-[30%] w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px]"></div>

        {/* Dynamic scanlines / grid */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDM5LjVMMzkuNSAwIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvc3ZnPg==')] opacity-40"></div>
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto w-full grid lg:grid-cols-2 gap-12 items-center mt-8">
        
        {/* Left Side: Content */}
        <div className="flex flex-col text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-fuchsia-900/30 border border-fuchsia-500/30 w-fit mb-6 shadow-[0_0_15px_rgba(217,70,239,0.15)]">
             <PlayCircle className="w-4 h-4 text-fuchsia-400" />
             <span className="text-fuchsia-300 text-[12px] font-bold tracking-wider uppercase">Streaming & Gaming</span>
          </div>

          <h1 className="text-[42px] md:text-[56px] font-black text-white mb-6 tracking-tight leading-[1.1]">
            Deliver Content to a <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-cyan-400">Global Audience</span>
          </h1>
          
          <p className="text-[16px] md:text-[18px] text-gray-400 mb-8 max-w-[500px] leading-[1.6]">
            Architected for peak primetime traffic. From live broadcasting to multiplayer gaming servers, our media DevOps solutions ensure zero buffering and infinite scale.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-5 w-full mb-10">
            <Link href="#contact" className="flex items-center justify-center gap-2 bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white text-[15px] font-bold py-3.5 px-8 transition-transform hover:-translate-y-0.5 w-full sm:w-auto rounded-full shadow-[0_4px_25px_rgba(192,38,211,0.3)]">
              Scale Your Platform <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="#capabilities" className="flex items-center justify-center bg-transparent border-[1.5px] border-white/20 text-gray-300 text-[15px] font-bold py-3.5 px-8 transition-colors hover:bg-white/5 hover:border-white/40 hover:text-white w-full sm:w-auto rounded-full">
              View CDN Strategies
            </Link>
          </div>

          <div className="flex flex-wrap items-center gap-6">
             <div className="flex items-center gap-2 text-gray-300 text-[13px] font-bold bg-white/5 px-4 py-2 rounded-full border border-white/10 shadow-sm backdrop-blur-sm">
                <Radio className="w-4 h-4 text-cyan-400" />
                <span>Multi-CDN Routing</span>
             </div>
             <div className="flex items-center gap-2 text-gray-300 text-[13px] font-bold bg-white/5 px-4 py-2 rounded-full border border-white/10 shadow-sm backdrop-blur-sm">
                <Globe className="w-4 h-4 text-cyan-400" />
                <span>Edge Encoding</span>
             </div>
             <div className="flex items-center gap-2 text-gray-300 text-[13px] font-bold bg-white/5 px-4 py-2 rounded-full border border-white/10 shadow-sm backdrop-blur-sm">
                <Gamepad2 className="w-4 h-4 text-cyan-400" />
                <span>Sub-15ms Latency</span>
             </div>
          </div>
        </div>

        {/* Right Side: High-Tech Streaming Visuals */}
        <div className="relative hidden lg:block w-full h-[550px]">
           {/* Abstract Floating UI Overlays representing Streaming App/Stats */}
           <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[480px] h-[320px] bg-[#110B18] rounded-2xl shadow-2xl border border-white/10 z-10 overflow-hidden shadow-[0_20px_60px_rgba(192,38,211,0.15)] group">
              
              {/* Media Player Mockup */}
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542204165-65bf26472b9b?q=80&w=2074&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-1000 group-hover:scale-105 opacity-60 mix-blend-screen"></div>
              
              {/* Player UI */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
              
              {/* Play Button */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-fuchsia-600/80 backdrop-blur-sm flex items-center justify-center cursor-pointer hover:scale-110 transition-transform shadow-[0_0_30px_rgba(192,38,211,0.5)]">
                 <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
              </div>

              {/* Player Bar */}
              <div className="absolute bottom-6 left-6 right-6 flex items-center gap-4">
                 <div className="text-white text-[12px] font-bold font-mono">LIVE</div>
                 <div className="flex-1 h-1.5 bg-gray-600 rounded-full overflow-hidden">
                    <div className="w-[85%] h-full bg-gradient-to-r from-fuchsia-500 to-cyan-400 rounded-full relative">
                       <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-lg"></div>
                    </div>
                 </div>
                 <div className="text-[12px] font-bold text-cyan-400">4K UHD</div>
              </div>
           </div>

           {/* Floating Metrics */}
           <div className="absolute top-[5%] right-0 bg-[#160D24]/80 backdrop-blur-md border border-fuchsia-500/30 p-4 rounded-xl shadow-xl flex items-center gap-4 animate-bounce z-20" style={{ animationDuration: '4s' }}>
              <div className="flex flex-col items-end">
                 <span className="text-[12px] font-bold text-gray-300">Concurrent Streams</span>
                 <span className="text-[16px] font-black text-white font-mono">1.28M</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-fuchsia-500 to-purple-600 flex items-center justify-center shadow-lg">
                 <Globe className="w-5 h-5 text-white" />
              </div>
           </div>

           <div className="absolute bottom-[10%] left-[-10%] bg-[#160D24]/80 backdrop-blur-md border border-cyan-500/30 p-4 rounded-xl shadow-xl flex items-center gap-3 animate-bounce z-20" style={{ animationDuration: '5s' }}>
              <div className="w-10 h-10 rounded-full bg-cyan-900/50 flex items-center justify-center border border-cyan-500/50">
                 <span className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,211,238,0.8)]"></span>
              </div>
              <div className="flex flex-col">
                 <span className="text-[12px] font-bold text-cyan-300">Global Edge Node</span>
                 <span className="text-[10px] text-gray-400 leading-tight">Asia-Pac active<br/>Zero Packet Loss</span>
              </div>
           </div>

        </div>

      </div>
    </section>
  );
}
