"use client";

export function TravelClients() {
  const clients = ["Expedia Group", "Airbnb", "Booking.com", "Marriott", "Hilton", "Tripadvisor", "Hopper"];

  return (
    <section className="bg-white py-16 border-y border-slate-100 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 text-center">
        <h3 className="text-slate-400 font-semibold tracking-widest text-xs lg:text-sm uppercase mb-12">
          infrastructure engineered for the world's top travel brands
        </h3>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16 opacity-60 hover:opacity-100 transition-opacity duration-500">
          {clients.map((c, i) => (
             <div key={i} className="text-xl md:text-3xl font-black text-slate-300 hover:text-slate-800 transition-colors duration-300 cursor-pointer px-4 py-2">
               {c}
             </div>
          ))}
        </div>
      </div>
    </section>
  );
}
