"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Check, Zap, Layers, Server } from "lucide-react";
import { AIPodsTrustedBy } from "@/components/aipods-trusted-by";

function AnimatedNumber({ end, duration = 2000, suffix = "" }: { end: number, duration?: number, suffix?: string }) {
  const [count, setCount] = useState(0);
  const nodeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let startTime: number | null = null;
    let animationFrame: number;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const animate = (time: number) => {
            if (!startTime) startTime = time;
            const progress = time - startTime;
            const percentage = Math.min(progress / duration, 1);
            
            // ease out quart
            const easeOut = 1 - Math.pow(1 - percentage, 4);
            const currentCount = Math.floor(end * easeOut);
            
            setCount(currentCount);

            if (percentage < 1) {
              animationFrame = requestAnimationFrame(animate);
            } else {
              setCount(end);
            }
          };
          animationFrame = requestAnimationFrame(animate);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (nodeRef.current) observer.observe(nodeRef.current);

    return () => {
      cancelAnimationFrame(animationFrame);
      observer.disconnect();
    };
  }, [end, duration]);

  return <div ref={nodeRef} className="text-[40px] font-bold text-accent-gold mb-3">{count}{suffix}</div>;
}

export function AiPodsHero() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center bg-white overflow-hidden py-20 pb-0">
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-right bg-no-repeat w-full h-full"
            style={{ backgroundImage: `url(/images/ai_pods_hero.png)` }}
          ></div>
          {/* A gradient overlay to ensure text readability on the left */}
          <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/90 to-transparent w-3/4"></div>
        </div>
        
        <div className="max-w-[1200px] mx-auto px-6 relative z-10 w-full pt-10 pb-20">
          <div className="max-w-[700px]">
            <span className="inline-block px-4 py-1.5 rounded-full mb-6 font-semibold text-sm bg-accent-gold text-white">
              AI Pods for Enterprise Leaders
            </span>
            <h1 className="text-4xl md:text-[54px] font-bold mb-6 leading-[1.1] text-text">
              Deploy Production-Ready <span className="text-accent-gold">AI in 90 Days</span> Without Hiring an AI Team
            </h1>
            <p className="text-lg md:text-xl mb-8 leading-relaxed text-muted">
              Dedicated AI Pods from Netwit to integrate with your engineering teams to rapidly design, build, and deploy enterprise AI solutions with measurable outcomes.
            </p>
            
            <ul className="space-y-4 mb-10">
              {[
                "Deploy AI solutions in under 90 Days",
                "Dedicated AI architects, ML engineers & data experts",
                "Seamless integration with enterprise systems",
                "Predictable delivery without cost overruns"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
                    <Check className="w-5 h-5 text-success font-extrabold stroke-[3]" />
                  </div>
                  <span className="text-text font-semibold text-[17px]">{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-md font-bold transition-all bg-accent-gold text-white hover:opacity-90 shadow-lg"
              >
                Request an AI Pod & ROI Assessment Now!
              </Link>
              <Link
                href="#how-it-works"
                className="inline-flex items-center justify-center px-8 py-4 rounded-md font-bold transition-all border-[2px] border-accent-gold text-accent-gold hover:bg-accent-gold/5"
              >
                See How AI Pods Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Orange Banner */}
      <div className="bg-accent-gold py-5 w-full relative z-20 shadow-sm">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4 text-white font-bold text-lg">
            <div className="flex items-center gap-3">
              <Zap className="w-6 h-6 fill-white" />
              <span>No Prolonged Pilots</span>
            </div>
            <div className="hidden md:block w-[1px] h-6 bg-white/40"></div>
            <div className="flex items-center gap-3">
              <Layers className="w-6 h-6" />
              <span>No Hiring Overhead</span>
            </div>
            <div className="hidden md:block w-[1px] h-6 bg-white/40"></div>
            <div className="flex items-center gap-3">
              <Server className="w-6 h-6" />
              <span>No Hidden Costs</span>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <section className="py-24 bg-surface">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-2xl font-bold text-center text-text mb-12 uppercase tracking-wide">
            Measurable Results. Measurable Impact.
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { stat: 200, suffix: "+", text: "AI Capabilities Delivered" },
              { stat: 50, suffix: "%", text: "Faster AI Time to Value" },
              { stat: 40, suffix: "%", text: "Reduction in AI Bias" },
              { stat: 30, suffix: "%", text: "Improvement in AI Accuracy" }
            ].map((item, idx) => (
              <div key={idx} className="bg-surface rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-100 p-8 text-center hover:shadow-[0_4px_25px_rgba(0,0,0,0.08)] transition-all">
                <AnimatedNumber end={item.stat} suffix={item.suffix} />
                <div className="text-text font-bold text-sm tracking-wide px-2 leading-relaxed">{item.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <AIPodsTrustedBy />
    </>
  );
}
