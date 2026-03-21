"use client";

export function EducationClients() {
  return (
    <section className="w-full bg-white py-20 px-6 flex flex-col items-center border-t border-gray-100">
      
      <div className="max-w-[1000px] w-full flex flex-col items-center">
         <p className="text-[14px] text-gray-500 font-medium mb-10 text-center uppercase tracking-widest">
           Empowering Leading Educational Institutions
         </p>
         
         <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-16 items-center justify-items-center opacity-60">
            <div className="font-serif text-[24px] font-bold text-gray-800 tracking-tight">Edu<span className="text-blue-600">Core</span></div>
            <div className="font-sans text-[22px] font-black text-gray-700 uppercase tracking-widest text-center leading-none">Global<br/><span className="text-[12px]">Academy</span></div>
            <div className="font-serif italic text-[26px] font-bold text-gray-600">Coursera</div>
            <div className="font-sans font-bold text-gray-800 text-[20px] tracking-tight">Skill<span className="font-light">Share</span></div>
            <div className="font-bold text-[22px] text-gray-500 tracking-tighter">Learn<span className="text-blue-500">Fast</span></div>
         </div>
      </div>
      
    </section>
  );
}
