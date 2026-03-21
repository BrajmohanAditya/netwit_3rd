"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

const successStories = [
  {
    image: "/images/saas_ai.png",
    tag: "AI Pod - SaaS",
    title: "How a SaaS Company Achieved Production-Ready AI in 90 Days with Netsmartz AI Pods",
    desc: "Learn how we eliminated prolonged pilot phases and deployed a completely governed semantic search engine allowing their support team to cut response times by 50%."
  },
  {
    image: "/images/manufacturing_ai.png",
    tag: "AI Pod - Manufacturing",
    title: "Netsmartz AI Pods Helped an Automotive Parts Manufacturer Avoid Downtime",
    desc: "By integrating predictive maintenance algorithms into their legacy control systems, our AI Pod successfully drove a 20% reduction in unplanned assembly line stops."
  },
  {
    image: "/images/healthcare_ai.png",
    tag: "AI Pod - Healthcare",
    title: "How a Healthcare Network Accelerated Clinical Trial Recruitment with Dedicated AI Pods",
    desc: "See how we maintained strict HIPAA compliance while automating patient screening with an AI copilot, increasing relevant trial enrollments by 35% in just 10 weeks."
  },
  {
    image: "/images/saas_ai.png", 
    tag: "AI Pod - Finance",
    title: "Global FinTech Provider Transforms Fraud Detection with Generative AI",
    desc: "Implementing our Enterprise AI packages enabled a shift from rules-based algorithms to dynamic, context-aware fraud monitoring systems."
  },
  {
    image: "/images/healthcare_ai.png",
    tag: "AI Pod - Retail",
    title: "National Retailer Deploys Autonomous AI Agents for Supply Chain Optimization",
    desc: "A case study on achieving predictable delivery and stable costs while scaling an AI-driven inventory forecasting engine across 400 stores."
  },
  {
    image: "/images/manufacturing_ai.png",
    tag: "AI Pod - Tech",
    title: "Cloud Infrastructure Company Builds AI Workflow Automations Without Hiring Delays",
    desc: "Leveraging our complete, accountable delivery unit of MLOps and Data Scientists allowed rapid execution without the traditional talent ramp-up delays."
  }
];

export default function SuccessStoriesPage() {
  return (
    <div className="min-h-screen bg-surface-2 font-sans flex flex-col">
      <Header />
      
      <main className="flex-grow pt-[80px]">
        <section className="relative w-full min-h-[350px] md:h-[400px] bg-[#161a25] flex items-center overflow-hidden">
          {/* Background Image Layer */}
          <div className="absolute inset-0 z-0 flex justify-end">
            <div className="relative w-full md:w-2/3 h-full">
              <Image 
                src="/images/case_studies_hero.png" 
                alt="AI Case Studies Background" 
                fill 
                className="object-cover object-right md:object-center opacity-80"
                priority
              />
            </div>
          </div>
          
          {/* Blend Gradient over image */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#161a25] via-[#161a25]/90 to-transparent z-10 w-full md:w-3/4"></div>

          {/* Content Layer */}
          <div className="relative z-20 w-full max-w-[1240px] mx-auto px-6">
            <div className="max-w-[700px]">
              <h1 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                Case Studies
              </h1>
              <p className="text-[13px] md:text-[14px] text-gray-200 leading-relaxed font-light tracking-wide max-w-[500px]">
                Empowering Businesses to Compete and Win in the New Normal. We have helped 1000+ businesses upscale their digital solutions to meet and exceed the demands of modern consumers. Let&apos;s take your business to the next level with the right set of technologies!
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 px-6 max-w-[1240px] mx-auto">
          <div className="mb-4 flex text-left">
            <Link href="/solutions/ai-pods" className="inline-flex items-center text-accent-gold font-bold hover:underline mb-8">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to AI Pods
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {successStories.map((story, idx) => (
              <div 
                key={idx} 
                className="bg-white border rounded-xl border-gray-200 overflow-hidden text-left flex flex-col hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all cursor-pointer group"
              >
                <div className="relative h-[220px] w-full overflow-hidden">
                  <Image 
                    src={story.image} 
                    alt={story.title} 
                    fill 
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                     <span className="text-white font-bold opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 flex items-center">
                        Read Full Story <ArrowRight className="w-4 h-4 ml-1" />
                     </span>
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <span className="inline-block w-max bg-surface-2 border border-gray-200 text-text font-bold text-[10px] md:text-xs py-1.5 px-3 rounded-full mb-4">
                    {story.tag}
                  </span>
                  <h3 className="text-text font-bold text-[17px] md:text-[19px] leading-snug mb-3 hover:text-accent-gold transition-colors">
                    {story.title}
                  </h3>
                  <p className="text-muted text-[14px] md:text-[15px] leading-relaxed flex-grow">
                    {story.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 flex justify-center">
            <button className="bg-white border-2 border-gray-200 hover:border-accent-gold hover:text-accent-gold text-text font-bold py-3.5 px-12 rounded-[6px] transition-colors shadow-sm">
              Load More Stories
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
