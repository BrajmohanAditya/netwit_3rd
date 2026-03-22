"use client";

import { Wrench, Beaker, Braces, Blocks, Target, LayoutTemplate } from "lucide-react";

export function IosFeatures() {
  const capabilities = [
    {
      title: "Objective-C & Swift Integration",
      description: "We don't abandon your technical debt; we bridge it. We excel at maintaining vast legacy Objective-C monolithic architectures while systematically migrating new modules into memory-safe Swift.",
      icon: <Braces className="w-8 h-8 text-[#007AFF]" />,
      bg: "bg-[#007AFF]/10",
      border: "border-[#007AFF]/20"
    },
    {
      title: "UIKit & AutoLayout",
      description: "While SwiftUI is the future, millions of enterprise applications rely on UIKit. We architect complex programmatic AutoLayout constraints and deeply customized Storyboards that withstand any OS update.",
      icon: <LayoutTemplate className="w-8 h-8 text-indigo-400" />,
      bg: "bg-indigo-500/10",
      border: "border-indigo-500/20"
    },
    {
      title: "XCTest & CI/CD Pipelines",
      description: "Enterprise code requires absolute certainty. We engineer extensive XCTest and XCUI testing suites, hooking them directly into Fastlane and Jenkins to automate completely flawless App Store deployments.",
      icon: <Beaker className="w-8 h-8 text-emerald-400" />,
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/20"
    },
    {
      title: "Memory Profiling (Instruments)",
      description: "Memory leaks destroy app retention. We utilize Xcode Instruments to hunt down retain cycles, optimize Automatic Reference Counting (ARC) faults, and ensure the app uses minimal battery and CPU.",
      icon: <Target className="w-8 h-8 text-rose-400" />,
      bg: "bg-rose-500/10",
      border: "border-rose-500/20"
    },
    {
      title: "Core Foundation Frameworks",
      description: "We navigate the deepest levels of Apple's SDKs. Whether writing custom Bluetooth Low Energy (CoreBluetooth) protocols or raw camera buffer streams (AVFoundation), we harness the metal.",
      icon: <Blocks className="w-8 h-8 text-[#5856D6]" />,
      bg: "bg-[#5856D6]/10",
      border: "border-[#5856D6]/20"
    },
    {
      title: "Legacy Maintenance",
      description: "Sometimes an app just needs to keep working. We provide relentless maintenance, upgrading deprecated APIs, migrating networking layers from NSURLConnection to URLSession, and ensuring day-one OS compatibility.",
      icon: <Wrench className="w-8 h-8 text-amber-500" />,
      bg: "bg-amber-500/10",
      border: "border-amber-500/20"
    }
  ];

  return (
    <section className="bg-[#020816] py-32 relative text-white border-y border-white/5 overflow-hidden font-sans">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/3 h-[80%] bg-[#007AFF]/10 blur-[150px] pointer-events-none rounded-r-full"></div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-24">
          <span className="text-[#007AFF] font-semibold tracking-widest uppercase mb-4 text-xs bg-[#007AFF]/10 border border-[#007AFF]/20 px-4 py-1.5 rounded-full backdrop-blur-md">
            Architectural Stability
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Unbreakable <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#007AFF] to-[#5856D6]">Foundations.</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl leading-relaxed font-light">
            We don't just write apps; we engineer resilient enterprise software. By mastering the core Apple frameworks, we ensure your iOS application scales smoothly through years of OS iterations without crumbling.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((c, i) => (
             <div key={i} className="bg-[#0d1627]/50 border border-[#1e2d4a] p-8 rounded-3xl group hover:bg-[#111d35] hover:border-[#007AFF]/30 transition-all duration-500 relative overflow-hidden cursor-default backdrop-blur-sm shadow-xl">
               <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-[#007AFF] to-[#5856D6] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
               <div className={`w-14 h-14 rounded-2xl ${c.bg} ${c.border} border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                  {c.icon}
               </div>
               <h3 className="text-xl font-semibold mb-4 text-white tracking-tight relative z-10">{c.title}</h3>
               <p className="text-slate-400 text-sm leading-relaxed font-light relative z-10 group-hover:text-slate-200 transition-colors">{c.description}</p>
             </div>
          ))}
        </div>
      </div>
    </section>
  );
}
