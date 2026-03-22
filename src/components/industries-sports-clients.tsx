"use client";

export function SportsClients() {
  const partners = [
    { name: "LiveSports", logo: "SP" },
    { name: "BetMGM", logo: "BTM" },
    { name: "DraftKings", logo: "DK" },
    { name: "ESPN+", logo: "ESPN" },
    { name: "FuboTV", logo: "FUBO" },
    { name: "FanDuel", logo: "FD" },
  ];

  return (
    <section className="bg-[#030303] py-16 border-y border-white/5 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 mb-10 text-center">
        <h3 className="text-gray-400 font-semibold tracking-widest text-sm uppercase">
          Powering the world's most demanding sports platforms
        </h3>
      </div>
      
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
          {[...partners].map((partner, i) => (
            <div key={i} className="flex items-center justify-center opacity-40 hover:opacity-100 transition-opacity duration-300">
              <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-300 tracking-tighter cursor-crosshair">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
