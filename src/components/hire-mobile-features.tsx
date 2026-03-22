"use client";

import { Smartphone, Layers, Rocket, Globe, Zap, Code2 } from "lucide-react";

export function MobileFeatures() {
  const capabilities = [
    {
      title: "Native iOS (Swift)",
      description: "We build fully native iOS applications specifically engineered to maximize the Apple ecosystem, tapping into CoreML, ARKit, and the deepest layers of Swift API.",
      icon: <Smartphone className="w-8 h-8 text-black" />,
      bg: "bg-gray-100"
    },
    {
      title: "Native Android (Kotlin)",
      description: "Our Android experts craft heavily vetted architectures utilizing Kotlin Coroutines and Jetpack Compose to deliver fluid experiences on 10,000+ Android device variations.",
      icon: <Code2 className="w-8 h-8 text-emerald-500" />,
      bg: "bg-emerald-50"
    },
    {
      title: "Cross-Platform (React Native)",
      description: "Ship iOS and Android simultaneously. Our React Native engineers use the exact same underlying architecture utilized by Meta to scale natively with a single codebase.",
      icon: <Globe className="w-8 h-8 text-blue-500" />,
      bg: "bg-blue-50"
    },
    {
      title: "High-Performance Flutter",
      description: "Build incredibly fast, 60fps applications drawing every pixel individually to the screen utilizing Google's Dart-powered Flutter framework.",
      icon: <Zap className="w-8 h-8 text-cyan-500" />,
      bg: "bg-cyan-50"
    },
    {
      title: "Offline-First Architecture",
      description: "Airplanes, subways, or drops in signal—your app never freezes. We implement complex SQLite / Core Data caching to keep users fully operational offline.",
      icon: <Layers className="w-8 h-8 text-indigo-500" />,
      bg: "bg-indigo-50"
    },
    {
      title: "App Store Optimization (ASO)",
      description: "Building the app is only step one. We optimize descriptions, metadata, and screenshots to ensure you break into the Top 10 lists upon launch.",
      icon: <Rocket className="w-8 h-8 text-purple-500" />,
      bg: "bg-purple-50"
    }
  ];

  return (
    <section className="bg-white py-32 relative border-y border-slate-100 overflow-hidden">
      <div className="absolute right-0 top-0 w-1/3 h-full bg-slate-50/50 blur-[100px] pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-20">
          <span className="text-indigo-600 font-bold tracking-widest uppercase mb-4 text-sm bg-indigo-50 px-4 py-1.5 rounded-full border border-indigo-100">
            Uncompromising Quality
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Built For <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">The Modern Pocket</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl leading-relaxed">
            Your users will delete an app that stutters for even half a second. We deploy hardcore performance engineers perfectly versed in memory management, smooth transitions, and multi-threading.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((c, i) => (
             <div 
               key={i} 
               className="bg-[#fcfcfd] border border-slate-200 p-8 rounded-3xl group hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1 hover:border-indigo-200 transition-all duration-300 relative overflow-hidden cursor-default"
             >
               <div className={`w-16 h-16 rounded-2xl ${c.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-white shadow-sm`}>
                  {c.icon}
               </div>
               <h3 className="text-xl font-bold mb-3 text-slate-800 relative z-10">{c.title}</h3>
               <p className="text-slate-600 text-sm leading-relaxed font-light relative z-10">{c.description}</p>
             </div>
          ))}
        </div>
      </div>
    </section>
  );
}
