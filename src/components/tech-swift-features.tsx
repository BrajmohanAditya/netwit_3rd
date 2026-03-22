"use client";

import { ShieldCheck, Database, Braces, Layers, Sparkles, LayoutPanelTop } from "lucide-react";

export function SwiftFeatures() {
  const capabilities = [
    {
      title: "SwiftUI Declarative Syntax",
      description: "We orchestrate breathtaking, fluid interfaces using SwiftUI. By adopting Apple's latest declarative UI framework, we drastically cut down bug surfaces and deliver ultra-responsive layouts across all Apple devices.",
      icon: <Braces className="w-8 h-8 text-pink-500" />,
      bg: "bg-pink-500/10",
      border: "border-pink-500/20"
    },
    {
      title: "Core Data & SwiftData",
      description: "Never lose a user's progress. We engineer deeply optimized, highly resilient local database structures using Core Data and SwiftData, allowing instantaneous offline access to complex data graphs.",
      icon: <Database className="w-8 h-8 text-blue-500" />,
      bg: "bg-blue-500/10",
      border: "border-blue-500/20"
    },
    {
      title: "Absolute Security & Privacy",
      description: "Apple enforces rigorous privacy thresholds. We build secure Enclave cryptography, FaceID / biometrics, and Keychain storage natively—ensuring your platform passes stringent App Store security checks effortlessly.",
      icon: <ShieldCheck className="w-8 h-8 text-emerald-500" />,
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/20"
    },
    {
      title: "Metal & Core Animation",
      description: "When normal UI fails to capture the imagination, we drop down to Metal and Core Animation. We engineer 120hz (ProMotion) physics, particle engines, and 3D graphics that squeeze every ounce of power from Apple Silicon.",
      icon: <Sparkles className="w-8 h-8 text-purple-500" />,
      bg: "bg-purple-500/10",
      border: "border-purple-500/20"
    },
    {
      title: "Human Interface Guidelines",
      description: "A great app feels like it belongs. We adhere strictly to Apple's Human Interface Guidelines (HIG), ensuring typography, spacing, navigation, and haptics match the premium quality of the hardware itself.",
      icon: <LayoutPanelTop className="w-8 h-8 text-indigo-500" />,
      bg: "bg-indigo-500/10",
      border: "border-indigo-500/20"
    },
    {
      title: "WatchOS & iPadOS Expansion",
      description: "Your ecosystem shouldn't end at the iPhone. Our Swift architectures are built to seamlessly compile extensions for the Apple Watch, iPad, and macOS, enveloping your user entirely.",
      icon: <Layers className="w-8 h-8 text-orange-500" />,
      bg: "bg-orange-500/10",
      border: "border-orange-500/20"
    }
  ];

  return (
    <section className="bg-black py-32 relative text-white border-y border-white/10 overflow-hidden font-sans">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/3 h-[80%] bg-purple-600/10 blur-[150px] pointer-events-none rounded-r-full"></div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-24">
          <span className="text-white font-semibold tracking-widest uppercase mb-4 text-xs bg-white/5 border border-white/20 px-4 py-1.5 rounded-full backdrop-blur-md">
            Uncompromising Standards
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Stop Emulating. <br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Code Native.</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed font-light">
            Cross-platform tools approximate the iPhone experience. We don't guess. We compile purely to raw Swift machine code, accessing the deepest layers of the iOS SDK that wrappers simply cannot touch.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((c, i) => (
             <div key={i} className="bg-white/[0.03] border border-white/[0.08] p-8 rounded-3xl group hover:bg-white/[0.05] hover:border-white/20 transition-all duration-500 relative overflow-hidden cursor-default backdrop-blur-sm">
               <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
               <div className={`w-14 h-14 rounded-2xl ${c.bg} ${c.border} border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                  {c.icon}
               </div>
               <h3 className="text-xl font-semibold mb-4 text-white tracking-tight relative z-10">{c.title}</h3>
               <p className="text-gray-400 text-sm leading-relaxed font-light relative z-10 group-hover:text-gray-300 transition-colors">{c.description}</p>
             </div>
          ))}
        </div>
      </div>
    </section>
  );
}
