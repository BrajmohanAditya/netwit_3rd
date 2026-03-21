"use client";

import { Phone, Mail } from "lucide-react";

export function SecureSmartzServices() {
  const services = [
    { title: "Managed Security Services", desc: "AI-powered detection and expert-led response for continuous protection." },
    { title: "Endpoint Security", desc: "Detect, contain, and remediate malware and endpoint-based threats in real time." },
    { title: "Email Security", desc: "Stop phishing, business email compromise, and social engineering attacks before they reach users." },
    { title: "Network Security", desc: "Secure every connection with advanced firewall protection, zero trust access, and continuous monitoring." },
    { title: "Cloud Security", desc: "Protect cloud workloads, identities, and configurations across hybrid and cloud environments." },
    { title: "Vulnerability & Risk Management", desc: "Identify, prioritize, and reduce security gaps through continuous assessment and expert validation." },
  ];

  return (
    <section className="w-full bg-[#050505] py-24 px-6 flex flex-col items-center">
      <div className="max-w-[1000px] w-full mb-32">
        <h2 className="text-[28px] md:text-[36px] font-normal text-center text-gray-300 mb-16 tracking-tight">
          SecureSmartz has you covered
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className="bg-[#080808] border border-[#f06f12]/20 rounded-[8px] p-7 transition-all hover:bg-[#0D0D0D] hover:border-[#f06f12]/40 hover:shadow-[0_0_15px_rgba(240,111,18,0.05)] h-full min-h-[160px]"
            >
              <h3 className="text-[14.5px] font-bold text-[#f06f12] mb-3 leading-snug tracking-wide">
                {service.title}
              </h3>
              <p className="text-[12.5px] text-gray-400 leading-[1.6]">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-[1000px] w-full flex flex-col md:flex-row gap-16 md:gap-8 items-start justify-between">
        
        <div className="w-full md:w-1/2 flex flex-col">
          <h2 className="text-[36px] md:text-[46px] font-bold text-gray-300 leading-[1.1] mb-8 tracking-tighter">
            We&apos;re here to<br/>
            help.
          </h2>
          <p className="text-[13px] text-gray-400 leading-[1.6] max-w-[400px] mb-12">
            Ready to strengthen your security posture? Schedule an introductory call with the SecureSmartz team to learn how we help organizations detect threats faster and reduce cyber risk.
          </p>
          
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-[#f06f12]/10 border border-[#f06f12]/20 rounded-[8px] flex items-center justify-center">
                <Phone className="w-[18px] h-[18px] text-[#f06f12]" strokeWidth={1.5} />
              </div>
              <span className="text-[14px] font-bold text-gray-200 tracking-wide">+1-888-881-8987</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-[#f06f12]/10 border border-[#f06f12]/20 rounded-[8px] flex items-center justify-center">
                <Mail className="w-[18px] h-[18px] text-[#f06f12]" strokeWidth={1.5} />
              </div>
              <a href="mailto:sales@securesmartz.com" className="text-[14px] font-bold text-gray-200 tracking-wide hover:text-[#f06f12] transition-colors underline decoration-[#f06f12]/30 underline-offset-4">
                sales@securesmartz.com
              </a>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 bg-white rounded-[12px] p-8 md:p-10">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            
            <div>
              <input 
                type="email" 
                placeholder="Email*" 
                className="w-full bg-transparent border-b border-gray-300 py-3 text-[13px] text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-[#f06f12] transition-colors"
                required
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input 
                type="text" 
                placeholder="Name*" 
                className="w-full bg-transparent border-b border-gray-300 py-3 text-[13px] text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-[#f06f12] transition-colors"
                required
              />
              <input 
                type="tel" 
                placeholder="Phone*" 
                className="w-full bg-transparent border-b border-gray-300 py-3 text-[13px] text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-[#f06f12] transition-colors"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input 
                type="text" 
                placeholder="Job Title" 
                className="w-full bg-transparent border-b border-gray-300 py-3 text-[13px] text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-[#f06f12] transition-colors"
              />
              <input 
                type="text" 
                placeholder="Company Name" 
                className="w-full bg-transparent border-b border-gray-300 py-3 text-[13px] text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-[#f06f12] transition-colors"
              />
            </div>

            <div className="pt-2">
              <textarea 
                placeholder="Message" 
                rows={3}
                className="w-full bg-transparent border-b border-gray-300 py-3 text-[13px] text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-[#f06f12] transition-colors resize-none"
              ></textarea>
            </div>

            <div className="pt-4">
              <button 
                type="submit" 
                className="bg-[#F06F12] hover:bg-[#d5610e] text-white font-bold py-[12px] px-[24px] rounded-[4px] text-[13.5px] transition-all shadow-sm"
              >
                Submit
              </button>
            </div>

          </form>
        </div>

      </div>
    </section>
  );
}
