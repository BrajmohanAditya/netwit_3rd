"use client";

import { ArrowRight, Bot, BrainCircuit, Terminal } from "lucide-react";
import Link from "next/link";

export function PythonHero() {
  return (
    <section className="relative w-full min-h-[110vh] bg-[#0b101e] text-white flex items-center overflow-hidden pt-20 font-sans">
      {/* Python Yellow & Blue, ML Green Gradients */}
      <div className="absolute inset-0 z-0">
         <div className="absolute top-[0%] left-[10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-br from-[#306998]/20 via-[#4B8BBE]/10 to-transparent blur-[120px] pointer-events-none"></div>
         <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-tl from-[#FFD43B]/10 via-[#FFE873]/15 to-transparent blur-[120px] pointer-events-none"></div>
         <div className="absolute top-[40%] left-[40%] w-[40vw] h-[40vw] rounded-full bg-gradient-to-tl from-[#10b981]/10 to-transparent blur-[120px] pointer-events-none mix-blend-screen"></div>
      </div>
      
      {/* Data Science Grid */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(rgba(48,105,152,0.1)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)] pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto w-full px-6 relative z-10 grid lg:grid-cols-[1.05fr,0.95fr] gap-12 items-center">
        
        {/* Left Column */}
        <div className="flex flex-col items-start gap-8 z-20 pt-10">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-[#306998]/30 bg-[#306998]/10 backdrop-blur-xl shadow-lg">
            <BrainCircuit className="w-4 h-4 text-[#FFD43B]" />
            <span className="text-[#4B8BBE] text-xs font-semibold tracking-widest uppercase">Machine Learning & APIs</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.05] tracking-tight text-white shadow-sm">
            Intelligence <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4B8BBE] via-[#FFE873] to-[#10b981] font-extrabold tracking-tighter">Engineered.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 max-w-[480px] leading-relaxed font-light">
            Python is the undisputed language of Artificial Intelligence. We architect high-performance asynchronous FastAPI backends, massive Django systems, and train deep neural networks leveraging PyTorch and TensorFlow.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-2">
            <Link href="#contact" className="group relative px-8 py-4 bg-[#FFE873] text-[#0b101e] font-bold rounded-full overflow-hidden transition-all hover:scale-105 shadow-[0_0_40px_rgba(255,212,59,0.3)] hover:bg-[#FFD43B]">
               Deploy Python Models
            </Link>
            <button className="flex items-center gap-2 px-8 py-4 rounded-full font-bold border border-white/20 text-white hover:bg-white/5 transition-colors backdrop-blur-md">
               Audit ML Pipelines <ArrowRight className="w-4 h-4 text-[#FFE873]" />
            </button>
          </div>
          
          <div className="flex items-center gap-8 mt-8 pt-6 border-t border-white/10 w-full mb-10 lg:mb-0">
            <div>
              <div className="text-3xl font-bold text-white tracking-tighter">AI/ML<span className="text-slate-500 text-2xl"></span></div>
              <div className="text-xs text-slate-500 font-medium uppercase tracking-wider mt-1">Global Standard</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white tracking-tighter">JSON<span className="text-slate-500 text-2xl"></span></div>
              <div className="text-xs text-slate-500 font-medium uppercase tracking-wider mt-1">FastAPI Speed</div>
            </div>
          </div>
        </div>

        {/* Right Column / Abstract Python Server & AI Output */}
        <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-auto lg:h-[650px] perspective-[1400px] flex justify-center items-center">
           <div className="relative w-full max-w-[480px] h-[550px] transform rotate-y-[-10deg] rotate-x-5 hover:rotate-y-0 hover:rotate-x-0 transition-transform duration-1000 ease-out">
               
               {/* Translucent Window */}
               <div className="absolute top-[10%] left-[0%] w-full h-[85%] bg-[#080b12]/90 backdrop-blur-3xl border border-[#306998]/30 rounded-2xl shadow-[0_40px_100px_rgba(0,0,0,0.9)] z-20 hover:-translate-y-2 transition-transform cursor-default relative overflow-hidden flex flex-col">
                  
                  {/* IDE Header */}
                  <div className="h-10 bg-[#06080e] border-b border-[#306998]/30 flex items-center px-4 justify-between backdrop-blur-md flex-shrink-0">
                     <div className="flex gap-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                     </div>
                     <span className="text-[10px] text-slate-400 font-medium flex items-center gap-2 font-mono">
                        inference_api.py
                     </span>
                     <div className="w-10"></div>
                  </div>
                  
                  {/* Python FastAPI / PyTorch Code Content */}
                  <div className="p-6 font-mono text-[11px] leading-[1.8] text-slate-300 flex-1">
                     <span className="text-[#C586C0]">from</span> fastapi <span className="text-[#C586C0]">import</span> FastAPI, Depends<br/>
                     <span className="text-[#C586C0]">import</span> torch<br/>
                     <span className="text-[#C586C0]">from</span> transformers <span className="text-[#C586C0]">import</span> AutoModelForCausalLM<br/>
                     <br/>
                     app = FastAPI(title=<span className="text-[#CE9178]">"Neural Engine"</span>)<br/>
                     <br/>
                     <span className="text-[#BBB529]">@app.on_event</span>(<span className="text-[#CE9178]">"startup"</span>)<br/>
                     <span className="text-[#569CD6]">async def</span> <span className="text-[#DCDCAA]">load_model</span>():<br/>
                     &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#C586C0]">global</span> model, tokenizer<br/>
                     &nbsp;&nbsp;&nbsp;&nbsp;model = AutoModelForCausalLM.from_pretrained(<br/>
                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#CE9178]">"gpt2-large"</span>, <br/>
                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;device_map=<span className="text-[#CE9178]">"auto"</span>, <br/>
                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;torch_dtype=torch.float16<br/>
                     &nbsp;&nbsp;&nbsp;&nbsp;)<br/>
                     <br/>
                     <span className="text-[#BBB529]">@app.post</span>(<span className="text-[#CE9178]">"/api/v1/generate"</span>)<br/>
                     <span className="text-[#569CD6]">async def</span> <span className="text-[#DCDCAA]">predict</span>(prompt: <span className="text-[#4EC9B0]">str</span>):<br/>
                     &nbsp;&nbsp;&nbsp;&nbsp;inputs = tokenizer(prompt, return_tensors=<span className="text-[#CE9178]">"pt"</span>).to(<span className="text-[#CE9178]">"cuda"</span>)<br/>
                     &nbsp;&nbsp;&nbsp;&nbsp;outputs = model.generate(**inputs, max_new_tokens=<span className="text-[#B5CEA8]">100</span>)<br/>
                     &nbsp;&nbsp;&nbsp;&nbsp;<br/>
                     &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#C586C0]">return</span> {"{"}<span className="text-[#CE9178]">"response"</span>: tokenizer.decode(outputs[<span className="text-[#B5CEA8]">0</span>]){"}"}<br/>
                  </div>
               </div>

               {/* Simulated CUDA Node */}
               <div className="absolute top-[65%] -left-[15%] bg-[#080b12] border border-[#10b981]/40 p-5 rounded-2xl shadow-[0_20px_50px_rgba(16,185,129,0.15)] z-40 transform hover:scale-105 transition-transform flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-[#10b981]/10 flex items-center justify-center border border-[#10b981]/30">
                     <Terminal className="w-6 h-6 text-[#10b981]" />
                  </div>
                  <div>
                     <span className="block text-sm font-bold text-white tracking-tight">CUDA Allocated</span>
                     <span className="block text-[10px] text-[#10b981] font-medium mt-0.5">GPU Tensor Inference</span>
                  </div>
               </div>

               {/* Python Abstract Silhouette */}
               <div className="absolute -top-10 -right-16 opacity-[0.05] z-0 animate-[pulse_8s_linear_infinite] grayscale">
                  <Bot className="w-64 h-64" />
               </div>

           </div>
        </div>
      </div>
    </section>
  );
}
