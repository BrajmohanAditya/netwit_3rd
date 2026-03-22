"use client";

import { Brush, Terminal, ShieldCheck, Gamepad2, Layers, Cpu } from "lucide-react";

export function FlutterFeatures() {
  const capabilities = [
    {
      title: "Google's Dart Language",
      description: "We write strict, heavily optimized Dart language codebases. Dart was specifically engineered for UI creation, utilizing both Just-In-Time (JIT) compilation for hot reload, and Ahead-Of-Time (AOT) for raw release speed.",
      icon: <Terminal className="w-8 h-8 text-[#13B9FD]" />,
      bg: "bg-[#13B9FD]/10",
      border: "border-[#13B9FD]/20"
    },
    {
      title: "The Impeller Graphics Engine",
      description: "Unlike React Native, Flutter doesn't use the phone’s OEM widgets. It draws every single pixel natively to a blank canvas utilizing the Impeller GPU engine, completely bypassing software bridges.",
      icon: <Cpu className="w-8 h-8 text-indigo-400" />,
      bg: "bg-indigo-500/10",
      border: "border-indigo-500/20"
    },
    {
      title: "Extravagant Custom UIs",
      description: "When brands demand completely custom UI elements, shadows, lighting engines, and fluid micro-animations, standard native widgets fail. We utilize Flutter's CustomPainter to build Oscar-winning design directly into code.",
      icon: <Brush className="w-8 h-8 text-fuchsia-400" />,
      bg: "bg-fuchsia-500/10",
      border: "border-fuchsia-500/20"
    },
    {
      title: "Everything Is A Widget",
      description: "We architect deeply modular, incredibly resilient UI trees. By thinking purely in Widgets, we dramatically reduce code coupling and ensure flawless testing coverage of every possible visual state.",
      icon: <Layers className="w-8 h-8 text-blue-400" />,
      bg: "bg-blue-500/10",
      border: "border-blue-500/20"
    },
    {
      title: "Hardware & Game Control",
      description: "Flutter natively handles complex gestures, multitouch panning, game-loop states, and low-level hardware access (Bluetooth, GPS, Camera) seamlessly across all deploying platforms.",
      icon: <Gamepad2 className="w-8 h-8 text-emerald-400" />,
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/20"
    },
    {
      title: "Null-Safety Security",
      description: "Production applications cannot crash. We enable absolute rigorous Sound Null Safety across all Dart files, meaning Null Reference Exceptions are literally prevented from compiling.",
      icon: <ShieldCheck className="w-8 h-8 text-cyan-400" />,
      bg: "bg-cyan-900/20",
      border: "border-cyan-500/30"
    }
  ];

  return (
    <section className="bg-[#040b16] py-32 relative text-white border-y border-white/5 overflow-hidden">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-[80%] bg-[#0175C2]/10 blur-[150px] pointer-events-none rounded-l-full"></div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-24">
          <span className="text-[#42A5F5] font-bold tracking-widest uppercase mb-4 text-sm bg-[#42A5F5]/10 px-4 py-1.5 rounded-full border border-[#42A5F5]/20">
            Render Absolute Perfection
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Stop Bridging. <br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#13B9FD] to-[#0175C2]">Start Painting.</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
            The era of slow mobile web apps is over. Flutter takes control of every pixel on the screen, creating stunning, fluid applications that feel indistinguishable from pure Swift or Kotlin.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((c, i) => (
             <div key={i} className="bg-[#081326] border border-[#13284f] p-8 rounded-3xl group hover:border-[#42A5F5]/40 transition-all duration-300 relative overflow-hidden cursor-default shadow-lg">
               <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-[#13B9FD] to-[#02569B] opacity-0 group-hover:opacity-100 transition-opacity"></div>
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
