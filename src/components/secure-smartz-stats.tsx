"use client";

export function SecureSmartzStats() {
  return (
    <section className="w-full bg-[#050505] py-24 px-6 border-b border-white/5 flex flex-col items-center">
      <div className="max-w-[1240px] mx-auto w-full text-center">
        
        <h2 className="text-[28px] md:text-[36px] font-normal text-gray-300 mb-20 tracking-tight leading-[1.3] max-w-[800px] mx-auto">
          Cyber incidents rank #1 as the top<br/> global risk in 2026
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-24 px-4">
          
          <div className="flex flex-col items-center px-4">
            <h3 className="text-[52px] md:text-[64px] font-black text-[#f06f12] mb-4 leading-none tracking-tighter">
              4.4M
            </h3>
            <p className="text-[13px] text-gray-400 leading-[1.7] max-w-[280px]">
              The global average cost of a data breach, in USD, a 9% decrease—driven by faster identification and containment.
            </p>
          </div>

          <div className="flex flex-col items-center px-4">
            <h3 className="text-[52px] md:text-[64px] font-black text-[#f06f12] mb-4 leading-none tracking-tighter">
              1.9M
            </h3>
            <p className="text-[13px] text-gray-400 leading-[1.7] max-w-[280px]">
              Cost savings, in USD, from organizations using SecureSmartz compared to organizations that didn&apos;t use these solutions.
            </p>
          </div>

          <div className="flex flex-col items-center px-4">
            <h3 className="text-[52px] md:text-[64px] font-black text-[#f06f12] mb-4 leading-none tracking-tighter">
              13.8T
            </h3>
            <p className="text-[13px] text-gray-400 leading-[1.7] max-w-[280px]">
              Projected global annual cost of cybercrime from 9.2 trillion USD in 2024 to about 13.8 trillion USD by 2028.
            </p>
          </div>

        </div>

        <div className="max-w-[900px] mx-auto">
          <h2 className="text-[32px] md:text-[42px] font-normal text-gray-300 mb-6 leading-[1.2] tracking-tight">
            The SecureSmartz<br/>
            <span className="text-[#f06f12] font-normal">Intelligence Platform</span>
          </h2>
          <p className="text-[13px] text-gray-300 leading-[1.65] max-w-[650px] mx-auto opacity-90">
            SecureSmartz provides AI-powered MDR services built on a unified detection and response platform—combining automated threat detection, human-led investigation, and continuous risk reduction.
          </p>
        </div>

      </div>
    </section>
  );
}
