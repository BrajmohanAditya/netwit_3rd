import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Link from "next/link";

export default function SalesAccelerationPage() {
  return (
    <>
      <Header />
      <main className="pt-[80px]">
        {/* Dark Hero Section with Mesh Network Background */}
        <section className="relative overflow-hidden bg-[#18181b]">
          {/* Subtle Abstract Node/Mesh Background */}
          <div className="absolute inset-0 opacity-[0.25] pointer-events-none flex items-center justify-center overflow-hidden mix-blend-screen">
            <svg 
              className="w-[120vw] h-[120vh] min-w-[1200px] object-cover" 
              viewBox="0 0 1000 600" 
              fill="none" 
              preserveAspectRatio="xMidYMid slice"
            >
              <g stroke="rgba(255,255,255,0.3)" strokeWidth="0.5">
                {/* Connecting Lines */}
                <path d="M100,100 L300,150 L200,300 Z" />
                <path d="M300,150 L550,100 L400,250 Z" />
                <path d="M550,100 L850,200 L650,300 Z" />
                <path d="M850,200 L950,50 L750,150 Z" />
                <path d="M200,300 L400,250 L350,500 L150,450 Z" />
                <path d="M400,250 L650,300 L550,550 L350,500 Z" />
                <path d="M650,300 L900,400 L750,550 L550,550 Z" />
                <path d="M900,400 L1050,250 L850,200 Z" />
              </g>
              <g fill="rgba(255,255,255,0.5)">
                {/* Nodes */}
                <circle cx="100" cy="100" r="2.5" />
                <circle cx="300" cy="150" r="2.5" />
                <circle cx="200" cy="300" r="2.5" />
                <circle cx="550" cy="100" r="2.5" />
                <circle cx="400" cy="250" r="2.5" />
                <circle cx="850" cy="200" r="2.5" />
                <circle cx="650" cy="300" r="2.5" />
                <circle cx="950" cy="50" r="2.5" />
                <circle cx="750" cy="150" r="2.5" />
                <circle cx="350" cy="500" r="2.5" />
                <circle cx="150" cy="450" r="2.5" />
                <circle cx="550" cy="550" r="2.5" />
                <circle cx="900" cy="400" r="2.5" />
                <circle cx="750" cy="550" r="2.5" />
                <circle cx="1050" cy="250" r="2.5" />
              </g>
            </svg>
          </div>

          <div className="relative z-10 max-w-[1000px] mx-auto px-6 py-36 md:py-48 flex flex-col items-center justify-center text-center">
            
            {/* Tiny top label */}
            <h3 className="text-[13px] md:text-[15px] font-bold text-white mb-5 tracking-[0.03em]">
              AI Appointment Setting Services & Lead Generation
            </h3>
            
            {/* Main Title */}
            <h1 className="text-[40px] md:text-[54px] lg:text-[60px] font-extrabold text-white leading-[1.1] mb-5 tracking-tight">
              SaaS Sales Acceleration with AI
            </h1>
            
            {/* Subtitle */}
            <p className="text-[17px] md:text-[19px] text-[#e5e7eb] mb-12 font-medium">
              Strategic pipelines speed up time to revenue
            </p>
            
            {/* CTA Button */}
            <Link 
              href="#contact" 
              className="bg-[var(--color-primary)] hover:bg-[#ea580c] text-white font-bold py-[16px] px-10 rounded-[4px] shadow-lg transition-transform hover:scale-105 text-[15px] tracking-wide inline-flex items-center justify-center w-full sm:w-auto min-w-[340px]"
            >
              Build a Scalable, AI-Powered Sales Engine
            </Link>

          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
