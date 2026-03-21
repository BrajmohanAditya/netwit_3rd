"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, GraduationCap, CloudRain } from "lucide-react";

export function EducationHero() {
  return (
    <section className="relative min-h-[600px] w-full flex flex-col justify-center p-6 bg-gradient-to-br from-[#f8fbff] to-white overflow-hidden m-0">
      
      {/* Background Abstract Shapes */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-blue-100/50 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] bg-indigo-100/40 rounded-full blur-[80px]"></div>
        
        {/* Decorative Grid */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDM5LjVMMzkuNSAwIiBzdHJva2U9InJnYmEoMCwwLDAsMC4wMikiIHN0cm9rZS13aWR0aD0iMSIvPjwvc3ZnPg==')]"></div>
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto w-full grid lg:grid-cols-2 gap-12 items-center mt-8">
        
        <div className="flex flex-col text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 w-fit mb-6">
             <GraduationCap className="w-4 h-4 text-blue-600" />
             <span className="text-blue-800 text-[12px] font-bold tracking-wider uppercase">Education & Learning</span>
          </div>

          <h1 className="text-[42px] md:text-[56px] font-bold text-[#1a1f33] mb-6 tracking-tight leading-[1.1]">
            Scale Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">EdTech</span> Platform With Confidence
          </h1>
          
          <p className="text-[16px] md:text-[18px] text-gray-600 mb-8 max-w-[500px] leading-[1.6]">
            Transform educational technology with our specialized DevOps solutions. Support concurrent online learners, secure student data, and modernize legacy systems with robust cloud infrastructure.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-5 w-full mb-10">
            <Link href="#contact" className="flex items-center justify-center gap-2 bg-blue-600 text-white text-[15px] font-bold py-3.5 px-8 transition-transform hover:-translate-y-0.5 w-full sm:w-auto rounded-full shadow-[0_4px_20px_rgba(37,99,235,0.3)]">
              Modernize Your Platform <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="#solutions" className="flex items-center justify-center bg-white border-[1.5px] border-gray-200 text-gray-700 text-[15px] font-bold py-3.5 px-8 transition-colors hover:bg-gray-50 hover:border-gray-300 w-full sm:w-auto rounded-full shadow-sm">
              Explore Solutions
            </Link>
          </div>

          <div className="flex items-center gap-8">
             <div className="flex flex-col">
                <span className="text-[28px] font-black text-[#1a1f33]">99.99%</span>
                <span className="text-[12px] text-gray-500 font-medium">Uptime Guarantee</span>
             </div>
             <div className="w-[1px] h-10 bg-gray-200"></div>
             <div className="flex flex-col">
                <span className="text-[28px] font-black text-[#1a1f33]">10M+</span>
                <span className="text-[12px] text-gray-500 font-medium">Concurrent Learners</span>
             </div>
          </div>
        </div>

        {/* Hero Image/Composition */}
        <div className="relative hidden lg:block">
           <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl group">
             <Image 
               src="https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=2070&auto=format&fit=crop" 
               alt="Students learning on laptops" 
               fill 
               className="object-cover transition-transform duration-700 group-hover:scale-105"
             />
             <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-blue-900/0 transition-colors duration-500"></div>
           </div>

           {/* Floating Floating Notification */}
           <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl flex items-center gap-4 animate-bounce" style={{ animationDuration: '4s' }}>
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                 <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                 </svg>
              </div>
              <div>
                 <p className="text-[12px] font-bold text-gray-800">Peak Traffic Handled</p>
                 <p className="text-[10px] text-gray-500">Zero latency during exams</p>
              </div>
           </div>

           {/* Floating Stats */}
           <div className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-xl flex items-center gap-3 animate-bounce" style={{ animationDuration: '3.5s', animationDelay: '1s' }}>
              <BookOpen className="w-8 h-8 text-blue-600" />
              <div>
                 <p className="text-[12px] font-bold text-gray-800">Secure Data</p>
                 <p className="text-[10px] text-gray-500">FERPA/GDPR Compliant</p>
              </div>
           </div>
        </div>

      </div>
    </section>
  );
}
