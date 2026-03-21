"use client";

import { Globe, Shield, Video, Gamepad2, Layers } from "lucide-react";

export function MediaSolutions() {
  const solutions = [
    {
      title: "Intelligent Multi-CDN Strategy",
      desc: "Avoid regional outages. We architect automated failovers across AWS CloudFront, Akamai, and Cloudflare to guarantee lowest latency routing for every single user globally.",
      icon: <Globe className="w-8 h-8 text-fuchsia-400" />
    },
    {
      title: "Real-time Video Transcoding",
      desc: "Deliver pristine 4K quality by utilizing scalable cloud encoders that dynamically adjust bitrates to match the viewer's exact bandwidth and device capabilities on the fly.",
      icon: <Video className="w-8 h-8 text-cyan-400" />
    },
    {
      title: "Gaming Server Orchestration",
      desc: "Host millions of concurrent players. Our Kubernetes-based microservices architecture spins up dedicated match servers instantly to absorb massive launch day traffic.",
      icon: <Gamepad2 className="w-8 h-8 text-purple-400" />
    },
    {
      title: "Content Security & DRM",
      desc: "Protect your intellectual property from piracy. We embed robust Digital Rights Management (DRM) and watermark pipelines directly into your media delivery edge.",
      icon: <Shield className="w-8 h-8 text-pink-400" />
    }
  ];

  return (
    <section className="w-full bg-[#0a0510] py-24 px-6 flex flex-col items-center">
      
      <div className="max-w-[1200px] w-full flex flex-col items-center">
         
         <div className="text-center mb-16 max-w-[800px]">
            <p className="text-[11px] text-fuchsia-500 font-bold tracking-[0.15em] uppercase mb-4">
               CORE CAPABILITIES
            </p>
            <h2 className="text-[34px] md:text-[42px] font-black text-white mb-6 tracking-tight leading-[1.2]">
               Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-cyan-400">Peak Traffic</span>
            </h2>
            <p className="text-[14px] text-gray-400 mb-10 leading-[1.6]">
               Whether you are streaming the Super Bowl or launching a AAA multiplayer title, our absolute priority is ensuring your infrastructure never drops a frame or misses a heartbeat under extreme load.
            </p>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            {solutions.map((sol, i) => (
               <div key={i} className="group relative bg-[#130A1F] p-8 md:p-10 rounded-3xl shadow-sm border border-fuchsia-500/10 hover:shadow-[0_0_30px_rgba(192,38,211,0.15)] hover:border-fuchsia-500/40 transition-all duration-300 flex flex-col items-start overflow-hidden">
                  
                  {/* Subtle Neon Glow behind text */}
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-fuchsia-600/10 blur-[50px] rounded-full group-hover:bg-cyan-500/20 transition-colors"></div>

                  <div className="w-16 h-16 rounded-2xl bg-black/50 backdrop-blur-sm border border-white/5 flex items-center justify-center shadow-lg group-hover:-translate-y-2 transition-transform mb-6 ring-1 ring-inset ring-white/10 group-hover:ring-fuchsia-500/50">
                     {sol.icon}
                  </div>
                  
                  <h3 className="text-[20px] font-bold text-gray-100 mb-3 relative z-10">{sol.title}</h3>
                  <p className="text-[14px] text-gray-400 leading-[1.7] relative z-10">{sol.desc}</p>
                  
               </div>
            ))}
         </div>

      </div>

    </section>
  );
}
