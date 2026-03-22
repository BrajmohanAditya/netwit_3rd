"use client";

export function LogisticsClients() {
  const clients = ["DHL Supply Chain", "FedEx", "Maersk", "UPS", "XPO Logistics", "Kuehne+Nagel"];

  return (
    <section className="bg-[#09090b] py-16 border-y border-white/5 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 text-center">
        <h3 className="text-gray-500 font-semibold tracking-widest text-xs lg:text-sm uppercase mb-12">
          Empowering The Supply Chains of Global Leaders
        </h3>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-50 hover:opacity-100 transition-opacity duration-500">
          {clients.map((c, i) => (
             <div key={i} className="text-2xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-600 hover:from-white hover:to-gray-300 transition-all duration-300 cursor-pointer italic px-4 py-2 hover:bg-white/5 rounded-lg border border-transparent hover:border-white/10">
               {c}
             </div>
          ))}
        </div>
      </div>
    </section>
  );
}
