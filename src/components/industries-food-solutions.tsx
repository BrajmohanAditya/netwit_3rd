"use client";

import { Activity, LayoutDashboard, Truck, Database } from "lucide-react";

export function FoodSolutions() {
  const solutions = [
    {
      title: "Burstable Infrastructure",
      desc: "Our auto-scaling architectures instantly provision resources during lunch/dinner rushes, ensuring zero downtime when order volumes spike by 500%.",
      icon: <Activity className="w-6 h-6 text-white" />,
      bg: "bg-gradient-to-br from-primary to-primary/80"
    },
    {
      title: "Seamless POS Integrations",
      desc: "We centralize your ecosystem by securely connecting diverse POS systems directly with top food delivery aggregators and your custom loyalty apps.",
      icon: <LayoutDashboard className="w-6 h-6 text-white" />,
      bg: "bg-gradient-to-br from-primary/90 to-primary/70"
    },
    {
      title: "Supply Chain Automation",
      desc: "Prevent stockouts with automated inventory tracking and smart supplier procurement workflows powered by real-time location data.",
      icon: <Truck className="w-6 h-6 text-white" />,
      bg: "bg-gradient-to-br from-primary/80 to-primary/60"
    },
    {
      title: "Real-time Analytics",
      desc: "Build highly responsive dashboards for franchise owners to monitor kitchen prep times, delivery driver locations, and exact revenue per minute.",
      icon: <Database className="w-6 h-6 text-white" />,
      bg: "bg-gradient-to-br from-primary/70 to-primary/50"
    }
  ];

  return (
    <section className="w-full bg-white py-24 px-6 flex flex-col items-center">
      
      <div className="max-w-[1200px] w-full items-center">
         
         <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Left side: Context */}
            <div className="lg:w-1/3 flex flex-col">
               <p className="text-[11px] text-primary font-bold tracking-[0.15em] uppercase mb-4">
                  CORE TECH SOLUTIONS
               </p>
               <h2 className="text-[34px] md:text-[42px] font-bold text-[#1a1f33] mb-6 tracking-tight leading-[1.2]">
                  The Engine Behind Modern Food Delivery
               </h2>
               <p className="text-[14px] text-gray-600 mb-8 leading-[1.6]">
                  Whether you are scaling a ghost kitchen network or managing thousands of franchised restaurants, our DevOps pipelines eliminate the technological bottlenecks of growth. 
               </p>
               <div className="bg-primary/5 p-6 rounded-2xl border border-primary/10">
                  <h4 className="text-[16px] font-bold text-primary mb-2">Did you know?</h4>
                  <p className="text-[13px] text-primary/80 leading-relaxed">
                     A 2-second delay in your ordering app can lead to a 10% rate of cart abandonment. Don't let infrastructure cost you orders.
                  </p>
               </div>
            </div>

            {/* Right side: Solutions Grid */}
            <div className="lg:w-2/3 grid sm:grid-cols-2 gap-6">
               {solutions.map((sol, i) => (
                  <div key={i} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-100 group">
                     <div className={`${sol.bg} w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:-translate-y-1 transition-transform`}>
                        {sol.icon}
                     </div>
                     <h3 className="text-[18px] font-bold text-[#1a1f33] mb-3">{sol.title}</h3>
                     <p className="text-[13px] text-gray-600 leading-[1.6]">{sol.desc}</p>
                  </div>
               ))}
            </div>

         </div>

      </div>

    </section>
  );
}
