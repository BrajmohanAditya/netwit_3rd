"use client";

export function FinanceClients() {
  return (
    <section className="w-full bg-[#0B1528] py-16 px-6 flex flex-col items-center border-t border-gray-800">
      
      <div className="max-w-[1000px] w-full flex flex-col items-center">
         <p className="text-[14px] text-gray-500 font-medium mb-10 text-center uppercase tracking-widest">
           Trusted by Top Banks and Financial Institutions
         </p>
         
         <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 md:gap-16 items-center justify-items-center opacity-60">
            <div className="font-serif text-[24px] font-bold text-white tracking-tight">Trust<span className="text-cyan-500">Bank</span></div>
            <div className="font-sans text-[18px] font-black text-gray-300 uppercase tracking-widest text-center leading-none border-b-2 border-emerald-500 pb-1">Capital<br/><span className="text-[12px] text-gray-400">Holdings</span></div>
            <div className="flex items-center gap-2"><div className="w-6 h-6 bg-cyan-600 rounded-sm"></div><span className="font-serif italic text-[24px] font-bold text-white">FinX</span></div>
            <div className="font-sans font-bold text-gray-300 text-[20px] tracking-tight">Global<span className="font-light">Pay</span></div>
            <div className="font-bold text-[22px] text-gray-400 tracking-tighter">Vault<span className="text-emerald-500">Core</span></div>
         </div>
      </div>
      
    </section>
  );
}
