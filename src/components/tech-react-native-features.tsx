"use client";

import { Smartphone, Code2, CloudRain, ShieldCheck, Box, Flame } from "lucide-react";

export function ReactNativeFeatures() {
  const capabilities = [
    {
      title: "Shared JavaScript Codebase",
      description: "Stop writing Objective-C for Apple and Kotlin for Google. We architect a single, highly-scalable unified React codebase that instantly deploys to both the iOS App Store and Google Play Store.",
      icon: <Code2 className="w-8 h-8 text-[#61DAFB]" />,
      bg: "bg-[#61DAFB]/10",
      border: "border-[#61DAFB]/20"
    },
    {
      title: "Hermes JavaScript Engine",
      description: "Sluggish mobile web apps are dead. We utilize the Hermes engine, an open-source JS engine optimized entirely for React Native. Expect instantaneous App Time to Interactive (TTI) and 60fps scrolling.",
      icon: <Flame className="w-8 h-8 text-orange-400" />,
      bg: "bg-orange-500/10",
      border: "border-orange-500/20"
    },
    {
      title: "Expo & EAS Infrastructure",
      description: "We orchestrate the entire Expo Application Services (EAS) suite. Bypassing Xcode/Android Studio completely, we run automated cloud builds that ship universally in minutes, not hours.",
      icon: <Box className="w-8 h-8 text-indigo-400" />,
      bg: "bg-indigo-500/10",
      border: "border-indigo-500/20"
    },
    {
      title: "Over-The-Air (OTA) Updates",
      description: "Never wait for Apple's 48-hour App Store approval process again. For minor hotfixes and UI edits, we push direct OTA updates via CodePush/Expo that update your user's app the exact second they open it.",
      icon: <CloudRain className="w-8 h-8 text-emerald-400" />,
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/20"
    },
    {
      title: "Native Modules & Bridges",
      description: "Sometimes JS isn't enough. If your app requires intense biometric security or complex AR camera hardware access, we drop down into C++, Swift, and Java to write custom Native Modules.",
      icon: <ShieldCheck className="w-8 h-8 text-rose-400" />,
      bg: "bg-rose-500/10",
      border: "border-rose-500/20"
    },
    {
      title: "True Native Interfaces",
      description: "A React Native app is not a web-view. It compiles immediately down to fundamentally native components (UIView for iOS and View for Android) so it genuinely feels exactly like a native phone application.",
      icon: <Smartphone className="w-8 h-8 text-blue-400" />,
      bg: "bg-blue-500/10",
      border: "border-blue-500/20"
    }
  ];

  return (
    <section className="bg-[#0a0f1c] py-32 relative text-white border-y border-white/5 overflow-hidden">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-[80%] bg-[#61DAFB]/10 blur-[150px] pointer-events-none rounded-l-full"></div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-24">
          <span className="text-[#61DAFB] font-bold tracking-widest uppercase mb-4 text-sm bg-[#61DAFB]/10 px-4 py-1.5 rounded-full border border-[#61DAFB]/20">
            Native Architectures
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Half The Cost. <br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#61DAFB] to-indigo-400">Twice the Velocity.</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
            Major platforms like Instagram, Discord, and Shopify run heavily on React Native. It combines the lightning-fast iteration of web development with the pristine native smoothness of mobile infrastructure.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((c, i) => (
             <div key={i} className="bg-[#12192b] border border-[#1e293b] p-8 rounded-3xl group hover:border-[#61DAFB]/40 transition-all duration-300 relative overflow-hidden cursor-default shadow-lg">
               <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-[#61DAFB] to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
               <div className={`w-16 h-16 rounded-2xl ${c.bg} ${c.border} border flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300`}>
                  {c.icon}
               </div>
               <h3 className="text-xl font-bold mb-4 text-gray-100 relative z-10">{c.title}</h3>
               <p className="text-slate-400 text-sm leading-relaxed font-light relative z-10 group-hover:text-slate-200 transition-colors">{c.description}</p>
             </div>
          ))}
        </div>
      </div>
    </section>
  );
}
