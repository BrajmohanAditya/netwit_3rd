"use client";

import { BrainCircuit, Database, Braces, Rocket, ShieldCheck, Microscope } from "lucide-react";

export function PythonFeatures() {
  const capabilities = [
    {
      title: "FastAPI Asynchronous APIs",
      description: "We abandon slow synchronous legacy servers. By leveraging FastAPI and Starlette, we architect extremely fast, asynchronous REST APIs that utilize native JSON validation via Pydantic.",
      icon: <Rocket className="w-8 h-8 text-[#10b981]" />,
      bg: "bg-[#10b981]/10",
      border: "border-[#10b981]/20"
    },
    {
      title: "Deep Learning & PyTorch",
      description: "Python commands the AI sector. We engineer production-grade machine learning pipelines, fine-tuning large language models (LLMs) and training complex neural networks directly on CUDA hardware using PyTorch and TensorFlow.",
      icon: <BrainCircuit className="w-8 h-8 text-[#FFD43B]" />,
      bg: "bg-[#FFD43B]/10",
      border: "border-[#FFD43B]/20"
    },
    {
      title: "Django Monolithic Systems",
      description: "When startups need an admin panel, auth system, and ORM immediately, we deploy Django. Often referred to as 'Backend with Batteries Included,' we use Django to build massive, highly-secure monolithic architectures.",
      icon: <Braces className="w-8 h-8 text-[#306998]" />,
      bg: "bg-[#306998]/10",
      border: "border-[#306998]/20"
    },
    {
      title: "Data Pipelines & Pandas",
      description: "Data is useless if unstructured. We write intricate data extraction, transformation, and loading (ETL) pipelines using Pandas and NumPy, capable of chewing through gigabytes of CSV or Parquet data instantly.",
      icon: <Microscope className="w-8 h-8 text-indigo-400" />,
      bg: "bg-indigo-500/10",
      border: "border-indigo-500/20"
    },
    {
      title: "SQLAlchemy ORM",
      description: "We ensure absolute database integrity. Utilizing SQLAlchemy, we map complex Python objects directly to PostgreSQL tables, ensuring complex queries are typed, secure, and protected from SQL injection.",
      icon: <Database className="w-8 h-8 text-fuchsia-400" />,
      bg: "bg-fuchsia-500/10",
      border: "border-fuchsia-500/20"
    },
    {
      title: "Celery & Redis Queues",
      description: "Machine learning inferences take time. We implement Celery workers backed by Redis to strictly decouple heavy background rendering processes from the main application, keeping the user interface instantly responsive.",
      icon: <ShieldCheck className="w-8 h-8 text-rose-400" />,
      bg: "bg-rose-500/10",
      border: "border-rose-500/20"
    }
  ];

  return (
    <section className="bg-[#0b101e] py-32 relative text-white border-y border-white/5 overflow-hidden font-sans">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/3 h-[80%] bg-[#306998]/10 blur-[150px] pointer-events-none rounded-r-full"></div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-24">
          <span className="text-[#FFD43B] font-semibold tracking-widest uppercase mb-4 text-xs bg-[#FFD43B]/10 border border-[#FFD43B]/20 px-4 py-1.5 rounded-full backdrop-blur-md">
            The Neural Foundation
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Mathematics. <br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4B8BBE] to-[#10b981]">Deployed to Production.</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl leading-relaxed font-light">
            Python acts as the crucial bridge between complex data science algorithms and live user-facing web applications. We utilize its elegant syntax to serve deep mathematical models to the internet instantly.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((c, i) => (
             <div key={i} className="bg-[#0f1629]/50 border border-[#1a2542] p-8 rounded-3xl group hover:bg-[#121a30] hover:border-[#4B8BBE]/40 transition-all duration-500 relative overflow-hidden cursor-default backdrop-blur-sm shadow-xl">
               <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-[#306998] to-[#10b981] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
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
