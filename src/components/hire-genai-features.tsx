"use client";

import { BrainCircuit, DatabaseZap, Network, MessageSquareCode } from "lucide-react";

export function GenAiFeatures() {
  return (
    <section className="bg-black py-32 relative text-white border-y border-white/5 overflow-hidden">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/3 h-1/2 bg-purple-900/10 blur-[150px] pointer-events-none rounded-r-full"></div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-20">
          <span className="text-purple-400 font-bold tracking-widest uppercase mb-4 text-sm bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20">
            Expertise & Capabilities
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-extrabold text-white mb-6 tracking-tight">
            Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-purple-500">AI Engineering</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
            Our engineers don't just prompt; they build entirely new generative infrastructures. From fine-tuning open-source models to deploying complex retrieval-augmented generation (RAG) pipelines.
          </p>
        </div>

        {/* Bento Grid layout */}
        <div className="grid md:grid-cols-3 gap-6 auto-rows-[250px]">
           {/* Item 1 - Large */}
           <div className="md:col-span-2 bg-[#0c0c0e] border border-white/10 p-8 rounded-3xl relative overflow-hidden group hover:border-fuchsia-500/30 transition-colors">
              <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-fuchsia-500/10 blur-3xl rounded-full group-hover:bg-fuchsia-500/20 transition-all duration-500"></div>
              <Network className="w-10 h-10 text-fuchsia-400 mb-6 relative z-10" />
              <h3 className="text-2xl font-bold mb-3 relative z-10">Custom LLM Fine-Tuning</h3>
              <p className="text-gray-400 max-w-md leading-relaxed font-light relative z-10">Train foundational models (Llama, Falcon, Mistral) on your proprietary datasets securely, embedding your deep domain expertise directly into the neural weights.</p>
           </div>
           
           {/* Item 2 - Small */}
           <div className="bg-[#0c0c0e] border border-white/10 p-8 rounded-3xl relative overflow-hidden group hover:border-purple-500/30 transition-colors">
              <DatabaseZap className="w-10 h-10 text-purple-400 mb-6" />
              <h3 className="text-xl font-bold mb-3">RAG Architectures</h3>
              <p className="text-gray-400 text-sm leading-relaxed font-light">Eliminate hallucinations. Connect LLMs to your private data utilizing advanced vector databases like Pinecone, Weaviate, or Milvus.</p>
           </div>

           {/* Item 3 - Small */}
           <div className="bg-[#0c0c0e] border border-white/10 p-8 rounded-3xl relative overflow-hidden group hover:border-pink-500/30 transition-colors">
              <BrainCircuit className="w-10 h-10 text-pink-400 mb-6" />
              <h3 className="text-xl font-bold mb-3">Autonomous Agents</h3>
              <p className="text-gray-400 text-sm leading-relaxed font-light">Deploy multi-agent frameworks (AutoGPT, LangChain) that can plan, reason, and execute complex workflows without human intervention.</p>
           </div>

           {/* Item 4 - Large */}
           <div className="md:col-span-2 bg-[#0c0c0e] border border-white/10 p-8 rounded-3xl relative overflow-hidden group hover:border-blue-500/30 transition-colors flex flex-col justify-end">
              <div className="absolute top-0 right-0 w-full h-1/2 bg-gradient-to-b from-blue-500/5 to-transparent pointer-events-none"></div>
              <div className="flex justify-between items-end relative z-10 w-full flex-wrap gap-4">
                 <div className="flex-1 min-w-[300px]">
                    <MessageSquareCode className="w-10 h-10 text-blue-400 mb-6" />
                    <h3 className="text-2xl font-bold mb-3">Conversational Interfaces & Voice</h3>
                    <p className="text-gray-400 max-w-md leading-relaxed font-light">Go beyond simple chatbots. Build deeply contextual virtual AI assistants capable of voice synthesis formatting, semantic understanding, and maintaining infinite context.</p>
                 </div>
                 <div className="flex gap-2 pb-2">
                    <span className="bg-white/5 border border-white/10 px-3 py-1 rounded-full text-xs text-gray-300">OpenAI</span>
                    <span className="bg-white/5 border border-white/10 px-3 py-1 rounded-full text-xs text-gray-300">Anthropic</span>
                    <span className="bg-white/5 border border-white/10 px-3 py-1 rounded-full text-xs text-gray-300">Cohere</span>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}
