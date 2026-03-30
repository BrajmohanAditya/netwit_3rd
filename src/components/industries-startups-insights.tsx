"use client";

import Link from "next/link";

export function StartupsInsights() {
  return (
    <section className="w-full bg-white py-24 px-6 flex flex-col items-center border-t border-gray-100">
      
      <p className="text-[10px] text-[#f06f12] font-bold tracking-[0.15em] uppercase mb-4 text-center">
        KNOW MORE
      </p>
      <h2 className="text-[32px] md:text-[38px] font-bold text-[#222] mb-6 text-center tracking-tight">
        Insights
      </h2>
      <p className="text-[13.5px] text-[#666] mb-20 text-center max-w-[550px] leading-[1.6]">
        Read our blogs to stay updated on the latest trends and challenges in IT and Cloud Infrastructure
      </p>

      <div className="max-w-[1100px] w-full grid grid-cols-1 lg:grid-cols-[1.5fr,1fr,1fr] gap-10 mb-20">
        
        {/* Left Column: Whitepaper Text Block */}
        <div className="flex flex-col pr-0 lg:pr-8 py-2">
          <div className="flex items-center gap-3 mb-6">
             <div className="w-[30px] h-[1px] bg-gray-300"></div>
             <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">Whitepaper</span>
          </div>
          <h3 className="text-[22px] md:text-[26px] font-bold text-[#222] mb-6 leading-[1.2] tracking-tight pr-4">
             Profit Matrix through Offshore Development Teams- How Can Startups Reduce Overheads?
          </h3>
          <p className="text-[13px] text-[#666] leading-[1.7] mb-10 max-w-[500px]">
             Outsourcing is gaining traction with every passing day. Established organizations have been outsourcing their complex projects to offshore experts and are thumbs up for the end-development results. As...
          </p>
          <div className="mt-auto">
             <Link 
               href="#contact" 
               className="bg-white border-2 border-gray-900 text-black text-[12px] font-bold py-3.5 px-8 hover:bg-gray-50 transition-colors shadow-sm w-fit flex items-center justify-center"
             >
               Download Whitepaper
             </Link>
          </div>
        </div>

        {/* Middle Column: Blog 1 */}
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-3 mb-6 w-full justify-center lg:justify-start -ml-2">
             <div className="w-[30px] h-[1px] bg-gray-300"></div>
             <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">Blog</span>
          </div>
          {/* Faux Card Image covering Blog 1 */}
          <div className="w-full max-w-[300px] aspect-[3/4] bg-white border border-gray-200 shadow-[0_5px_15px_rgba(0,0,0,0.05)] flex flex-col items-center p-6 text-center cursor-pointer hover:shadow-lg transition-shadow border-t-[4px] border-t-[#f06f12]">
            <h4 className="text-[17px] font-bold text-[#2a2a2a] leading-snug mb-4 pt-2">
              How to Reduce<br/>your Startup<br/>Cost and Boost<br/>Growth
            </h4>
            {/* Abstract Graphic representing the illustration */}
            <div className="w-full mt-auto mb-4 h-1/3 bg-gray-50 rounded-sm relative flex items-end justify-between px-4 pb-2">
              <div className="w-[10px] h-[40%] bg-blue-500 rounded-t-sm"></div>
              <div className="w-[10px] h-[60%] bg-blue-500 rounded-t-sm"></div>
              <div className="w-[10px] h-[80%] bg-blue-500 rounded-t-sm"></div>
              <div className="w-[10px] h-[100%] bg-orange-500 rounded-t-sm"></div>
              {/* Abstract human figure */}
              <div className="absolute bottom-2 left-6 w-[12px] h-[24px] bg-gray-700"></div>
            </div>
          </div>
          <Link 
            href="/resources" 
            className="bg-white border-2 border-gray-900 text-black text-[12px] font-bold py-3 px-8 hover:bg-gray-50 transition-colors shadow-sm w-fit mt-10 flex items-center justify-center"
          >
            Read Article
          </Link>
        </div>

        {/* Right Column: Blog 2 */}
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-3 mb-6 w-full justify-center lg:justify-start -ml-2">
             <div className="w-[30px] h-[1px] bg-gray-300"></div>
             <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">Blog</span>
          </div>
          {/* Faux Card Image covering Blog 2 */}
          <div className="w-full max-w-[300px] aspect-[3/4] bg-[#2F5BB7] border border-blue-800 shadow-[0_5px_15px_rgba(47,91,183,0.2)] flex flex-col items-center p-6 text-center cursor-pointer hover:shadow-lg transition-shadow border-t-[4px] border-t-yellow-400">
            <h4 className="text-[17.5px] font-bold text-white leading-snug mb-4 pt-2">
              How to build a Minimum<br/>Viable Product (MVP)<br/>for a Successful<br/>Business
            </h4>
            {/* Abstract Graphic representing the illustration */}
            <div className="w-full mt-auto mb-4 h-1/3 relative flex items-center justify-center">
               <div className="w-[60px] h-[80px] bg-white rounded-[4px] relative flex flex-col items-center pt-2">
                 <div className="w-[30px] h-[30px] rounded-full bg-blue-500 mb-2"></div>
                 <div className="w-[40px] h-[8px] bg-gray-200"></div>
                 {/* Rocket wings abstract */}
                 <div className="absolute -left-3 bottom-0 w-[15px] h-[20px] bg-orange-400"></div>
                 <div className="absolute -right-3 bottom-0 w-[15px] h-[20px] bg-orange-400"></div>
               </div>
            </div>
          </div>
          <Link 
            href="/resources" 
            className="bg-white border-2 border-gray-900 text-black text-[12px] font-bold py-3 px-8 hover:bg-gray-50 transition-colors shadow-sm w-fit mt-10 flex items-center justify-center"
          >
            Read Article
          </Link>
        </div>

      </div>

      <p className="text-[13px] text-[#555] font-medium leading-[1.6] max-w-[600px] mb-8 text-center">
         Learn more about the intricacies and processes of the Remote Development industry and scale your Team today!
      </p>

      <Link 
        href="/resources" 
        className="bg-black text-white text-[13px] font-bold py-4 px-10 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-transform rounded-sm flex items-center justify-center w-fit"
      >
         View All Insights
      </Link>

    </section>
  );
}
