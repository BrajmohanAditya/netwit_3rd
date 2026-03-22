"use client";

import { ArrowRight, Bot, LayoutTemplate, Smartphone } from "lucide-react";
import Link from "next/link";

export function AndroidHero() {
  return (
    <section className="relative w-full min-h-[110vh] bg-[#101216] text-white flex items-center overflow-hidden pt-20 font-sans">
      {/* Kotlin / Android Gradients */}
      <div className="absolute inset-0 z-0">
         <div className="absolute top-[0%] left-[10%] w-[40vw] h-[40vw] rounded-full bg-gradient-to-br from-[#7F52FF]/20 via-[#C757BC]/20 to-transparent blur-[100px] pointer-events-none mix-blend-screen"></div>
         <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-tl from-[#3DDC84]/20 via-[#4285F4]/20 to-transparent blur-[120px] pointer-events-none mix-blend-screen"></div>
      </div>

      <div className="max-w-[1200px] mx-auto w-full px-6 relative z-10 grid lg:grid-cols-[1fr,1fr] gap-16 items-center">
        
        {/* Left Column */}
        <div className="flex flex-col items-start gap-8 z-20 pt-10">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-[#3DDC84]/20 bg-[#3DDC84]/5 backdrop-blur-xl shadow-lg">
            <Bot className="w-4 h-4 text-[#3DDC84]" />
            <span className="text-[#3DDC84] text-xs font-semibold tracking-widest uppercase">Pure Native Android</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight text-white shadow-sm">
            Scale to <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7F52FF] via-[#E5554E] to-[#F28D1B] font-extrabold tracking-tighter">Billions.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 max-w-[450px] leading-relaxed font-light">
            Android OS dominates the global market. We engineer pristine, relentlessly optimized native applications utilizing Kotlin, Jetpack Compose, and Material Design 3.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-2">
            <Link href="#contact" className="group relative px-8 py-4 bg-[#3DDC84] text-[#101216] font-bold rounded-full overflow-hidden transition-all hover:scale-105 shadow-[0_0_40px_rgba(61,220,132,0.2)]">
               Hire Kotlin Engineers
            </Link>
            <button className="flex items-center gap-2 px-8 py-4 rounded-full font-bold border border-white/20 text-white hover:bg-white/10 transition-colors backdrop-blur-md">
               View Compose Stack <ArrowRight className="w-4 h-4 text-[#3DDC84]" />
            </button>
          </div>
          
          <div className="flex items-center gap-8 mt-8 pt-6 border-t border-white/10 w-full mb-10 lg:mb-0">
            <div>
              <div className="text-3xl font-bold text-white tracking-tighter">70<span className="text-gray-500 text-2xl">%</span></div>
              <div className="text-xs text-gray-500 font-medium uppercase tracking-wider mt-1">Global Mobile Market</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white tracking-tighter">JVM<span className="text-gray-500 text-2xl"></span></div>
              <div className="text-xs text-gray-500 font-medium uppercase tracking-wider mt-1">Kotlin Coroutines</div>
            </div>
          </div>
        </div>

        {/* Right Column / Abstract Android Studio / Compose Interface */}
        <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-auto lg:h-[650px] perspective-[1400px] flex justify-center items-center">
           <div className="relative w-full max-w-[500px] h-[580px] transform rotate-y-[-15deg] rotate-x-5 hover:rotate-y-0 hover:rotate-x-0 transition-transform duration-1000 ease-out">
               
               {/* Translucent Android Studio Window */}
               <div className="absolute top-[10%] left-[0%] w-full h-[85%] bg-[#1E1F22]/90 backdrop-blur-3xl border border-white/10 rounded-2xl shadow-[0_40px_100px_rgba(0,0,0,1)] z-20 hover:-translate-y-2 transition-transform cursor-default relative overflow-hidden">
                  
                  {/* IDE Header */}
                  <div className="h-12 bg-[#2B2D30] border-b border-white/5 flex items-center px-4 justify-start gap-4">
                     <div className="flex bg-[#1E1F22] rounded-t-md p-2 px-4 shadow-inner mt-2 border-t border-x border-[#3DDC84]/20">
                         <span className="text-[10px] text-[#3DDC84] font-medium flex items-center gap-2">
                            <Bot className="w-3 h-3" /> DashboardScreen.kt
                         </span>
                     </div>
                  </div>
                  
                  {/* Kotlin/Compose Code Content */}
                  <div className="p-6 font-mono text-[12px] leading-loose text-white/90">
                     <span className="text-[#CC7832]">import</span> <span className="text-[#A9B7C6]">androidx.compose.material3.*</span><br/>
                     <span className="text-[#CC7832]">import</span> <span className="text-[#A9B7C6]">androidx.compose.runtime.*</span><br/>
                     <br/>
                     <span className="text-[#BBB529]">@Composable</span><br/>
                     <span className="text-[#CC7832]">fun</span> <span className="text-[#FFC66D]">DashboardScreen</span>(<br/>
                     &nbsp;&nbsp;&nbsp;&nbsp;viewModel: <span className="text-[#A9B7C6]">DashboardViewModel</span> = <span className="text-[#FFC66D]">hiltViewModel</span>()<br/>
                     ) {"{"}<br/>
                     &nbsp;&nbsp;<span className="text-[#CC7832]">val</span> uiState <span className="text-[#CC7832]">by</span> viewModel.uiState.<span className="text-[#9876AA]">collectAsState</span>()<br/>
                     <br/>
                     &nbsp;&nbsp;<span className="text-[#FFC66D]">Scaffold</span>(<br/>
                     &nbsp;&nbsp;&nbsp;&nbsp;topBar = {"{"} <span className="text-[#FFC66D]">TopAppBar</span>(title = {"{"} <span className="text-[#FFC66D]">Text</span>(<span className="text-[#6A8759]">"Overview"</span>) {"}"}) {"}"}<br/>
                     &nbsp;&nbsp;) {"{"} paddingValues <span className="text-[#CC7832]">{"->"}</span><br/>
                     &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#FFC66D]">LazyColumn</span>(contentPadding = paddingValues) {"{"}<br/>
                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#FFC66D]">items</span>(uiState.graphs) {"{"} graph <span className="text-[#CC7832]">{"->"}</span><br/>
                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#FFC66D]">MaterialCard</span>(<br/>
                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;elevation = <span className="text-[#FFC66D]">CardDefaults</span>.elevation(<span className="text-[#6897BB]">4</span>.dp),<br/>
                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;colors = <span className="text-[#FFC66D]">CardDefaults</span>.cardColors(<br/>
                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;containerColor = <span className="text-[#9876AA]">MaterialTheme</span>.colorScheme.surface<br/>
                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;)<br/>
                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;) {"{"}<br/>
                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#FFC66D]">GraphWidget</span>(data = graph)<br/>
                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"}"}<br/>
                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"}"}<br/>
                     &nbsp;&nbsp;&nbsp;&nbsp;{"}"}<br/>
                     &nbsp;&nbsp;{"}"}<br/>
                     {"}"}
                  </div>
               </div>

               {/* Simulated Material You Widget */}
               <div className="absolute top-[65%] -left-[10%] bg-[#212328]/80 backdrop-blur-2xl border border-white/10 p-5 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-40 transform hover:scale-105 transition-transform flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#7F52FF] to-[#E5554E] flex items-center justify-center shadow-inner">
                     <LayoutTemplate className="w-5 h-5 text-white" />
                  </div>
                  <div>
                     <span className="block text-sm font-bold text-white tracking-tight">MaterialTheme</span>
                     <span className="block text-[10px] text-gray-400 font-medium mt-0.5">Dynamic Color Palette</span>
                  </div>
               </div>

               {/* Background Android Elements */}
               <div className="absolute -top-12 -right-12 text-[#3DDC84]/5 z-0 animate-[pulse_10s_linear_infinite]">
                  <Smartphone className="w-56 h-56" />
               </div>

           </div>
        </div>
      </div>
    </section>
  );
}
