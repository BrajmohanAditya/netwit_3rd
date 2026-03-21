"use client";

export function EnterpriseInsights() {
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
             IT Staff Augmentation for Startups – Why is it a Viable Option to Bring a Talent Pool to your Enterprise?
          </h3>
          <p className="text-[13.5px] text-gray-600 leading-[1.7] mb-10 max-w-[500px]">
             While entrepreneurs take the best steps to achieve heights of success, one sphere that&apos;s probably still going wrong is the recruitment process. Entrepreneurs make the mistake of bringing in-house te...
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
          <div className="w-full max-w-[300px] aspect-[3/4] bg-white border border-gray-200 shadow-[0_5px_15px_rgba(0,0,0,0.05)] flex flex-col items-center p-0 text-center cursor-pointer hover:shadow-lg transition-shadow overflow-hidden">
            {/* Dark block on top */}
            <div className="w-full h-[45%] bg-[#333] p-5 flex items-center justify-center">
                <h4 className="text-[14px] font-bold text-white leading-snug">
                  The Key Components<br/>of Successful B2B<br/>Appointment Setting
                </h4>
            </div>
            {/* White/grey graphics on bottom */}
            <div className="w-full h-[55%] bg-yellow-50 flex items-center justify-center relative">
               <div className="w-[60%] h-[60%] border-4 border-[#333] rounded-[4px] relative bg-white flex items-center justify-center">
                   <div className="w-8 h-8 rounded-full border-4 border-orange-500 relative -top-2 flex items-center justify-center">
                       <div className="w-2 h-2 bg-[#333] rounded-full"></div>
                       <div className="w-[2px] h-3 bg-[#333] absolute top-1"></div>
                   </div>
                   <div className="absolute right-[-15px] bottom-[-10px] w-8 h-8 bg-orange-200 border-2 border-[#333] rounded-full"></div>
                   <div className="absolute left-[-10px] bottom-2 w-4 h-4 bg-orange-500 rounded-sm"></div>
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
          <div className="w-full max-w-[300px] aspect-[3/4] bg-white border border-gray-200 shadow-[0_5px_15px_rgba(0,0,0,0.05)] flex flex-col items-center p-0 text-center cursor-pointer hover:shadow-lg transition-shadow overflow-hidden">
            {/* Light orange block on top */}
            <div className="w-full h-[45%] bg-[#fdf2e8] p-5 flex items-center justify-center px-8 border-b-2 border-orange-200">
                <h4 className="text-[14px] font-bold text-[#f06f12] leading-snug">
                  Benefits of Upgrading<br/>Enterprise Software<br/>and Tips to Get the<br/>Most Out of It
                </h4>
            </div>
            {/* Abstract block graphics on bottom */}
            <div className="w-full h-[55%] bg-[#fafafa] flex items-center justify-center relative">
               <div className="w-[65%] h-[55%] border-2 border-[#333] rounded-[4px] relative bg-blue-50 flex items-center justify-center overflow-hidden">
                   <div className="absolute inset-0 grid grid-cols-4 grid-rows-3 opacity-20 border-blue-600/30">
                       {[...Array(12)].map((_, i) => <div key={i} className="border border-blue-600/30"></div>)}
                   </div>
                   <div className="relative w-12 h-8 bg-[#333] rounded-sm flex items-center justify-center z-10 shadow-md">
                       <div className="w-6 h-4 bg-orange-400"></div>
                   </div>
                   <div className="absolute -left-2 top-2 w-6 h-6 bg-orange-500 rounded-sm skew-y-12 z-20"></div>
                   <div className="absolute -right-2 bottom-2 w-5 h-5 bg-yellow-400 rounded-full z-20 border-2 border-[#333]"></div>
               </div>
            </div>
          </div>
          <button className="bg-white border-2 border-gray-900 text-black text-[12px] font-bold py-3 px-8 hover:bg-gray-50 transition-colors shadow-sm w-fit mt-10">
            Read Article
          </button>
        </div>

      </div>

      <p className="text-[11px] text-[#555] font-medium leading-[1.6] max-w-[600px] mb-8 text-center uppercase tracking-wider">
         Learn more about the intricacies and processes of the Remote Development industry and scale your Team today!
      </p>

      <button className="bg-black text-white text-[13px] font-bold py-4 px-10 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-transform rounded-[2px]">
         View All Insights
      </button>

    </section>
  );
}
