"use client";

export function ScaleupsInsights() {
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
             What are the Ways of Setting Up an Offshore Development Center for a Stellar ROI?
          </h3>
          <p className="text-[13.5px] text-gray-600 leading-[1.7] mb-10 max-w-[500px]">
             While the global pandemic contributed to its share of destruction, the phase surprisingly proved to be a digitalization boon. It worked in accelerating the technological transformation and increased it...
          </p>
          <div className="mt-auto">
             <button className="bg-white border-2 border-gray-900 text-black text-[12px] font-bold py-3.5 px-8 hover:bg-gray-50 transition-colors shadow-sm w-fit">
               Download Whitepaper
             </button>
          </div>
        </div>

        {/* Middle Column: Blog 1 */}
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-3 mb-6 w-full justify-center lg:justify-start -ml-2">
             <div className="w-[30px] h-[1px] bg-gray-300"></div>
             <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">Blog</span>
          </div>
          <div className="w-full max-w-[300px] aspect-[3/4] bg-white border border-gray-200 shadow-[0_5px_15px_rgba(0,0,0,0.05)] flex flex-col items-center p-6 text-center cursor-pointer hover:shadow-lg transition-shadow border-t-[4px] border-t-blue-500">
            <h4 className="text-[17px] font-bold text-[#2a2a2a] leading-snug mb-4 pt-2">
              How to Scale Up Your<br/>Startup? Challenges &<br/>Tips to Overcome
            </h4>
            <div className="w-full mt-auto mb-4 h-1/2 bg-blue-50 rounded-sm flex items-center justify-center">
              {/* Bullseye / Target abstraction */}
              <div className="w-16 h-16 rounded-full border-4 border-blue-500 flex items-center justify-center relative">
                 <div className="w-8 h-8 rounded-full border-4 border-red-500"></div>
                 <div className="absolute right-[-10px] top-0 w-8 h-[4px] bg-orange-400 rotate-45"></div>
              </div>
            </div>
          </div>
          <button className="bg-white border-2 border-gray-900 text-black text-[12px] font-bold py-3 px-8 hover:bg-gray-50 transition-colors shadow-sm w-fit mt-10">
            Read Article
          </button>
        </div>

        {/* Right Column: Blog 2 */}
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-3 mb-6 w-full justify-center lg:justify-start -ml-2">
             <div className="w-[30px] h-[1px] bg-gray-300"></div>
             <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">Blog</span>
          </div>
          <div className="w-full max-w-[300px] aspect-[3/4] bg-teal-50 border border-teal-200 shadow-[0_5px_15px_rgba(20,184,166,0.1)] flex flex-col items-center p-6 text-center cursor-pointer hover:shadow-lg transition-shadow border-t-[4px] border-t-green-500">
            <h4 className="text-[17.5px] font-bold text-[#111] leading-snug mb-4 pt-2">
              How Tech Leaders<br/>Build Teams in a Post<br/>Pandemic World
            </h4>
            <div className="w-full mt-auto mb-4 h-1/2 relative flex items-center justify-center">
                 {/* Team building abstract */}
                 <div className="w-[40px] h-[60px] bg-orange-100 border border-orange-300 rounded-[4px] flex items-center justify-center ml-[-20px] shadow-sm z-20"></div>
                 <div className="w-[45px] h-[70px] bg-blue-100 border border-blue-300 rounded-[4px] flex items-center justify-center ml-[-15px] -translate-y-2 shadow-sm z-10"></div>
                 <div className="w-[50px] h-[80px] bg-green-100 border border-green-300 rounded-[4px] flex items-center justify-center ml-[-10px] -translate-y-4 shadow-sm z-0"></div>
            </div>
          </div>
          <button className="bg-white border-2 border-gray-900 text-black text-[12px] font-bold py-3 px-8 hover:bg-gray-50 transition-colors shadow-sm w-fit mt-10">
            Read Article
          </button>
        </div>

      </div>

      <p className="text-[13px] text-[#555] font-medium leading-[1.6] max-w-[600px] mb-8 text-center">
         Learn more about the intricacies and processes of the Remote Development industry and scale your Team today!
      </p>

      <button className="bg-black text-white text-[13px] font-bold py-4 px-10 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-transform rounded-sm">
         View All Insights
      </button>

    </section>
  );
}
