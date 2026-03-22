"use client";

import { ArrowRight, Coffee, Server, Box } from "lucide-react";
import Link from "next/link";

export function JavaHero() {
  return (
    <section className="relative w-full min-h-[110vh] bg-[#080d15] text-white flex items-center overflow-hidden pt-20 font-sans">
      {/* Java Oracle Colors & Spring Boot Green */}
      <div className="absolute inset-0 z-0">
         <div className="absolute top-[0%] left-[10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-br from-[#007396]/20 via-[#6DB33F]/10 to-transparent blur-[120px] pointer-events-none"></div>
         <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-tl from-[#F18E33]/15 via-[#007396]/20 to-transparent blur-[130px] pointer-events-none"></div>
      </div>
      
      {/* Enterprise Architecture Grid */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(rgba(0,115,150,0.05)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)] pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto w-full px-6 relative z-10 grid lg:grid-cols-[1.1fr,0.9fr] gap-12 items-center">
        
        {/* Left Column */}
        <div className="flex flex-col items-start gap-8 z-20 pt-10">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-[#007396]/30 bg-[#007396]/10 backdrop-blur-xl shadow-lg">
            <Coffee className="w-4 h-4 text-[#F18E33]" />
            <span className="text-[#007396] text-xs font-semibold tracking-widest uppercase">Enterprise Class Architecture</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.05] tracking-tight text-white shadow-sm">
            Unbreakable <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#007396] via-[#6DB33F] to-[#F18E33] font-extrabold tracking-tighter">Scale.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 max-w-[480px] leading-relaxed font-light">
            When billions of transactions are on the line, there is no substitute for Java. We architect horizontally scalable Spring Boot microservices, enforcing unyielding type safety and JVM memory constraints.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-2">
            <Link href="#contact" className="group relative px-8 py-4 bg-[#007396] text-white font-bold rounded-full overflow-hidden transition-all hover:scale-105 shadow-[0_0_40px_rgba(0,115,150,0.3)] hover:bg-[#005e7a]">
               Assemble Enterprise Team
            </Link>
            <button className="flex items-center gap-2 px-8 py-4 rounded-full font-bold border border-white/20 text-white hover:bg-white/5 transition-colors backdrop-blur-md">
               Audit Infrastructure <ArrowRight className="w-4 h-4 text-[#007396]" />
            </button>
          </div>
          
          <div className="flex items-center gap-8 mt-8 pt-6 border-t border-white/10 w-full mb-10 lg:mb-0">
            <div>
              <div className="text-3xl font-bold text-white tracking-tighter">JVM<span className="text-slate-500 text-2xl"></span></div>
              <div className="text-xs text-slate-500 font-medium uppercase tracking-wider mt-1">Multi-cloud portability</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white tracking-tighter">Spring<span className="text-slate-500 text-2xl"></span></div>
              <div className="text-xs text-slate-500 font-medium uppercase tracking-wider mt-1">Inversion of Control</div>
            </div>
          </div>
        </div>

        {/* Right Column / Abstract IDE & Spring Boot Node */}
        <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-auto lg:h-[650px] perspective-[1400px] flex justify-center items-center">
           <div className="relative w-full max-w-[480px] h-[550px] transform rotate-y-[-10deg] rotate-x-5 hover:rotate-y-0 hover:rotate-x-0 transition-transform duration-1000 ease-out">
               
               {/* Translucent Window */}
               <div className="absolute top-[10%] left-[0%] w-full h-[85%] bg-[#0f111a]/90 backdrop-blur-3xl border border-[#007396]/20 rounded-2xl shadow-[0_40px_100px_rgba(0,0,0,0.9)] z-20 hover:-translate-y-2 transition-transform cursor-default relative overflow-hidden flex flex-col">
                  
                  {/* IDE Header */}
                  <div className="h-10 bg-[#080a10] border-b border-[#007396]/20 flex items-center px-4 justify-between backdrop-blur-md flex-shrink-0">
                     <div className="flex gap-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                     </div>
                     <span className="text-[10px] text-slate-400 font-medium flex items-center gap-2 font-mono">
                        TransactionController.java
                     </span>
                     <div className="w-10"></div>
                  </div>
                  
                  {/* Java Spring Boot Code Content */}
                  <div className="p-6 font-mono text-[11px] leading-[1.8] text-slate-300 flex-1">
                     <span className="text-[#F18E33]">package</span> <span className="text-[#007396]">com.enterprise.banking.controllers</span>;<br/>
                     <br/>
                     <span className="text-[#F18E33]">import</span> <span className="text-[#007396]">org.springframework.web.bind.annotation.*</span>;<br/>
                     <span className="text-[#F18E33]">import</span> <span className="text-[#007396]">org.springframework.http.ResponseEntity</span>;<br/>
                     <br/>
                     <span className="text-[#BBB529]">@RestController</span><br/>
                     <span className="text-[#BBB529]">@RequestMapping</span>(<span className="text-[#6A8759]">"/api/v1/transactions"</span>)<br/>
                     <span className="text-[#F18E33]">public class</span> <span className="text-[#FFC66D]">TransactionController</span> {"{"}<br/>
                     <br/>
                     &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#BBB529]">@Autowired</span><br/>
                     &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#F18E33]">private</span> <span className="text-[#FFC66D]">LedgerService</span> ledgerService;<br/>
                     <br/>
                     &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#BBB529]">@PostMapping</span>(<span className="text-[#6A8759]">"/transfer"</span>)<br/>
                     &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#BBB529]">@Transactional</span>(<span className="text-[#FFC66D]">isolation</span> = <span className="text-[#9876AA]">Isolation</span>.<span className="text-[#9876AA]">SERIALIZABLE</span>)<br/>
                     &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#F18E33]">public</span> <span className="text-[#FFC66D]">ResponseEntity</span>&lt;<span className="text-[#FFC66D]">TransferDTO</span>&gt; process(<br/>
                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#BBB529]">@Valid</span> <span className="text-[#BBB529]">@RequestBody</span> <span className="text-[#FFC66D]">TransferRequest</span> request<br/>
                     &nbsp;&nbsp;&nbsp;&nbsp;) {"{"}<br/>
                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#F18E33]">var</span> receipt = ledgerService.executeLedgerAuth(request);<br/>
                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#F18E33]">return</span> <span className="text-[#FFC66D]">ResponseEntity</span>.ok(receipt);<br/>
                     &nbsp;&nbsp;&nbsp;&nbsp;{"}"}<br/>
                     {"}"}<br/>
                  </div>
               </div>

               {/* Simulated Microservice Node */}
               <div className="absolute top-[50%] -left-[15%] bg-[#0f111a] border border-[#6DB33F]/40 p-5 rounded-2xl shadow-[0_20px_50px_rgba(109,179,63,0.15)] z-40 transform hover:scale-105 transition-transform flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-[#6DB33F]/10 flex items-center justify-center border border-[#6DB33F]/30">
                     <Server className="w-6 h-6 text-[#6DB33F]" />
                  </div>
                  <div>
                     <span className="block text-sm font-bold text-white tracking-tight">K8s Pod Active</span>
                     <span className="block text-[10px] text-[#6DB33F] font-medium mt-0.5">Spring Boot Eureka Node</span>
                  </div>
               </div>

               {/* Java Abstract Form */}
               <div className="absolute -top-10 -right-16 opacity-[0.05] z-0 animate-[pulse_8s_linear_infinite] grayscale">
                  <Coffee className="w-64 h-64" />
               </div>

           </div>
        </div>
      </div>
    </section>
  );
}
