"use client";

export function TelecomClients() {
  const providers = [
    { name: "Vodafone", initials: "VF" },
    { name: "T-Mobile", initials: "TM" },
    { name: "Verizon", initials: "VZ" },
    { name: "AT&T", initials: "T" },
    { name: "Orange", initials: "OR" },
    { name: "Telefonica", initials: "TE" },
  ];

  return (
    <section className="bg-[#020817] py-16 border-y border-white/5 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 text-center">
        <h3 className="text-gray-500 font-semibold tracking-widest text-xs lg:text-sm uppercase mb-12">
          Trusted by Top Global Telecom & ISP Leaders
        </h3>
        <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-60 hover:opacity-100 transition-opacity duration-500">
          {providers.map((p, i) => (
             <div key={i} className="flex flex-col items-center gap-2 group cursor-default">
                 <div className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-b from-gray-200 to-gray-600 group-hover:from-white group-hover:to-gray-400 transition-all duration-300">
                   {p.name}
                 </div>
                 <div className="h-[2px] w-0 bg-cyan-500 group-hover:w-full transition-all duration-500"></div>
             </div>
          ))}
        </div>
      </div>
    </section>
  );
}
