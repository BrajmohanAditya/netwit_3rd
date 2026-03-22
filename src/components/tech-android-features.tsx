"use client";

import { Braces, SmartphoneNfc, LayoutTemplate, ShieldCheck, Database, Zap } from "lucide-react";

export function AndroidFeatures() {
  const capabilities = [
    {
      title: "Jetpack Compose",
      description: "We orchestrate breathtaking, fluid interfaces using Jetpack Compose. By adopting Google's latest declarative UI framework, we drastically cut down bug surfaces and deliver ultra-responsive layouts devoid of legacy XML.",
      icon: <Braces className="w-8 h-8 text-[#7F52FF]" />,
      bg: "bg-[#7F52FF]/10",
      border: "border-[#7F52FF]/20"
    },
    {
      title: "Room & DataStore",
      description: "Never lose a user's progress. We engineer deeply optimized, highly resilient local database structures using Room and Jetpack DataStore, allowing instantaneous offline access to complex data graphs.",
      icon: <Database className="w-8 h-8 text-blue-500" />,
      bg: "bg-blue-500/10",
      border: "border-blue-500/20"
    },
    {
      title: "Kotlin Coroutines",
      description: "App freezes are unacceptable. We leverage Kotlin Coroutines and Flow to handle massive asynchronous networking and background API polling smoothly on parallel threads, freeing up the UI.",
      icon: <Zap className="w-8 h-8 text-[#F28D1B]" />,
      bg: "bg-[#F28D1B]/10",
      border: "border-[#F28D1B]/20"
    },
    {
      title: "Material Design 3",
      description: "Android users expect specific UX patterns. We align perfectly with Material Design 3 (Material You) guidelines, embedding dynamic color themes, fluid physics, and natural elevation shadows into your brand.",
      icon: <LayoutTemplate className="w-8 h-8 text-[#C757BC]" />,
      bg: "bg-[#C757BC]/10",
      border: "border-[#C757BC]/20"
    },
    {
      title: "Hardware & NFC Layers",
      description: "Android enables raw hardware manipulation. We architect applications that directly command NFC payment networks, Bluetooth Low Energy (BLE), background geofencing, and advanced CameraX sensors.",
      icon: <SmartphoneNfc className="w-8 h-8 text-[#3DDC84]" />,
      bg: "bg-[#3DDC84]/10",
      border: "border-[#3DDC84]/20"
    },
    {
      title: "Rigorous Play Protect",
      description: "Google Play enforces strict policy thresholds. We implement complex Biometric prompts, EncryptedSharedPreferences, and zero-trust data flows, ensuring seamless approval on the Play Store.",
      icon: <ShieldCheck className="w-8 h-8 text-emerald-500" />,
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/20"
    }
  ];

  return (
    <section className="bg-[#101216] py-32 relative text-white border-y border-white/5 overflow-hidden font-sans">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/3 h-[80%] bg-[#7F52FF]/10 blur-[150px] pointer-events-none rounded-r-full"></div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-24">
          <span className="text-[#3DDC84] font-semibold tracking-widest uppercase mb-4 text-xs bg-[#3DDC84]/5 border border-[#3DDC84]/20 px-4 py-1.5 rounded-full backdrop-blur-md">
            Google Ecosystem Integration
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7F52FF] via-[#E5554E] to-[#F28D1B]">Kotlin.</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed font-light">
            Cross-platform tools approximate the Android experience. We don't guess. We compile purely to raw Kotlin bytecode, accessing the deepest layers of the JVM/ART engine that wrappers simply cannot touch.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((c, i) => (
             <div key={i} className="bg-[#1E1F22]/50 border border-white/[0.05] p-8 rounded-3xl group hover:bg-[#2B2D30] hover:border-white/10 transition-all duration-500 relative overflow-hidden cursor-default backdrop-blur-sm shadow-xl">
               <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-[#7F52FF] to-[#F28D1B] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
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
