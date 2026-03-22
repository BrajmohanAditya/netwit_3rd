"use client";

import { ArrowRight, Download, FileText, TrendingUp } from "lucide-react";

export function EnterpriseInsights() {
  return (
    <section className="w-full bg-gray-50 py-24 px-6 flex flex-col items-center border-t border-gray-100 relative overflow-hidden">
      {/* Decorative background blur */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[100px] -z-10"></div>

      <div className="flex flex-col items-center mb-16 relative z-10">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wide uppercase mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
          KNOW MORE
        </span>
        <h2 className="text-4xl md:text-5xl lg:text-5xl font-extrabold text-gray-900 mb-6 text-center tracking-tight">
          Insights & Resources
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl text-center leading-relaxed">
          Read our latest blogs and whitepapers to stay updated on the most recent trends and challenges in IT and Cloud Infrastructure.
        </p>
      </div>

      <div className="max-w-[1200px] w-full grid grid-cols-1 lg:grid-cols-[1.2fr,1fr,1fr] gap-8 mb-16 relative z-10">
        
        {/* Left Column: Whitepaper Card */}
        <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0a192f] via-[#112240] to-[#0a192f] p-8 md:p-10 flex flex-col justify-between items-start text-left text-white shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all duration-500 hover:-translate-y-2 border border-white/10 h-full">
          {/* Glow effect */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/30 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
          
          <div className="relative z-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-semibold tracking-wider uppercase mb-8 border border-white/20 text-white/90">
              <Download className="w-3.5 h-3.5" /> Whitepaper
            </span>
            <h3 className="text-3xl md:text-4xl font-bold mb-6 leading-[1.15] text-white">
              IT Staff Augmentation for Startups
            </h3>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-8 max-w-[90%] font-light">
              While entrepreneurs take the best steps to achieve heights of success, one sphere that&apos;s probably still going wrong is the recruitment process. Learn why bringing a dedicated talent pool to your enterprise is a viable strategy for scaling.
            </p>
          </div>
          
          <button className="relative z-10 mt-auto flex items-center gap-2 bg-white text-gray-900 px-7 py-3.5 rounded-full font-bold transition-all duration-300 hover:bg-gray-100 shadow-[0_0_20px_rgba(255,255,255,0.2)] group-hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] hover:gap-3">
            Download Whitepaper <Download className="w-4 h-4" />
          </button>
        </div>

        {/* Middle Column: Blog 1 */}
        <div className="group relative flex flex-col bg-white rounded-3xl overflow-hidden shadow-xl shadow-gray-200/50 border border-gray-100 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-gray-200/80 h-full">
          <div className="h-[220px] w-full relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-100 via-orange-50 to-white group-hover:scale-105 transition-transform duration-700">
              {/* Decorative background elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-200/50 rounded-bl-full blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-yellow-200/50 rounded-tr-full blur-2xl"></div>
              
              <div className="w-full h-full flex items-center justify-center relative z-10">
                <div className="w-20 h-20 bg-white rounded-2xl shadow-lg shadow-orange-100/50 flex items-center justify-center rotate-3 group-hover:-rotate-6 transition-all duration-500 ring-1 ring-orange-100/50">
                  <FileText className="w-10 h-10 text-orange-500" strokeWidth={1.5} />
                </div>
              </div>
            </div>
          </div>
          <div className="p-8 flex flex-col flex-grow bg-white relative z-20">
            <span className="text-orange-500 text-xs font-bold tracking-widest uppercase mb-4 block">
              Blog Article
            </span>
            <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 leading-snug group-hover:text-orange-600 transition-colors duration-300">
              The Key Components of Successful B2B Appointment Setting
            </h4>
            <div className="mt-auto pt-6 flex items-center text-gray-900 font-bold text-sm tracking-wide group-hover:text-orange-600 hover:gap-2 transition-all duration-300">
               Read Article <ArrowRight className="w-4 h-4 ml-1 inline-block -mt-0.5" />
            </div>
          </div>
        </div>

        {/* Right Column: Blog 2 */}
        <div className="group relative flex flex-col bg-white rounded-3xl overflow-hidden shadow-xl shadow-gray-200/50 border border-gray-100 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-gray-200/80 h-full">
          <div className="h-[220px] w-full relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-blue-50 to-white group-hover:scale-105 transition-transform duration-700">
              {/* Decorative background elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-200/50 rounded-bl-full blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-indigo-200/50 rounded-tr-full blur-2xl"></div>
              
              <div className="w-full h-full flex items-center justify-center relative z-10">
                <div className="w-20 h-20 bg-white rounded-2xl shadow-lg shadow-blue-100/50 flex items-center justify-center -rotate-3 group-hover:rotate-6 transition-all duration-500 ring-1 ring-blue-100/50">
                  <TrendingUp className="w-10 h-10 text-blue-500" strokeWidth={1.5} />
                </div>
              </div>
            </div>
          </div>
          <div className="p-8 flex flex-col flex-grow bg-white relative z-20">
            <span className="text-blue-500 text-xs font-bold tracking-widest uppercase mb-4 block">
              Blog Article
            </span>
            <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 leading-snug group-hover:text-blue-600 transition-colors duration-300">
              Benefits of Upgrading Enterprise Software and Tips to Get the Most Out of It
            </h4>
            <div className="mt-auto pt-6 flex items-center text-gray-900 font-bold text-sm tracking-wide group-hover:text-blue-600 hover:gap-2 transition-all duration-300">
               Read Article <ArrowRight className="w-4 h-4 ml-1 inline-block -mt-0.5" />
            </div>
          </div>
        </div>

      </div>

      <div className="flex flex-col items-center relative z-10 w-full">
        <p className="text-sm text-gray-500 font-medium leading-[1.6] max-w-2xl mb-8 text-center bg-gray-100/50 px-6 py-3 rounded-full border border-gray-200">
          Learn more about the intricacies and processes of the Remote Development industry and scale your Team today!
        </p>

        <button className="flex items-center justify-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:bg-[#0B3D91] hover:shadow-[0_0_20px_rgba(11,61,145,0.4)] hover:-translate-y-1">
          View All Insights <ArrowRight className="w-5 h-5" />
        </button>
      </div>

    </section>
  );
}
