"use client";

export function TravelBenefits() {
  const stats = [
    { value: "0", label: "Lost Bookings" },
    { value: "99.99%", label: "Platform Availability" },
    { value: "3x", label: "Faster Search Returns" },
    { value: "50%", label: "Cloud Cost Reduction" },
  ];

  return (
    <section className="bg-white py-24 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col lg:flex-row gap-16 items-center">
        
        <div className="lg:w-1/2 relative z-10">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-8 leading-tight text-slate-900">
            Build Trust Through <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600">Digital Reliability</span>
          </h2>
          <p className="text-slate-600 text-lg mb-8 leading-relaxed font-light">
            In travel and hospitality, downtime means lost revenue and damaged reputation. We build highly-resilient, self-healing platforms that protect your brand and delight your guests at every digital touchpoint.
          </p>

          <div className="bg-[#0f172a] rounded-3xl p-8 md:p-10 shadow-xl overflow-hidden relative mt-10">
             <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/20 blur-3xl rounded-full"></div>
             <p className="text-xl md:text-2xl font-medium text-white italic leading-relaxed relative z-10">
               "Since migrating our booking engine to their cloud-native architecture, we survived our heaviest holiday influx with zero latency and significantly lowered our operating costs."
             </p>
             <div className="mt-8 flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center text-white font-bold">CTO</div>
                <div>
                   <h4 className="text-white font-bold">Global Hospitality Chain</h4>
                   <span className="text-slate-400 text-sm">Enterprise Client</span>
                </div>
             </div>
          </div>
        </div>

        <div className="lg:w-1/2 grid grid-cols-2 gap-6 relative z-10 w-full mt-10 lg:mt-0">
          {stats.map((s, i) => (
             <div key={i} className="bg-[#f8fafc] border border-slate-100 p-8 rounded-3xl flex flex-col items-center justify-center text-center group hover:bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <span className="text-5xl md:text-6xl font-black text-slate-900 group-hover:text-sky-500 transition-colors mb-4">{s.value}</span>
                <span className="text-sm font-bold text-slate-500 uppercase tracking-widest">{s.label}</span>
             </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
