"use client";

export function EnterpriseMetricsTech() {
  const metrics = [
    { val: "2000+", label: "Projects\nDelivered" },
    { val: "2100+", label: "Delighted\nClients" },
    { val: "71", label: "NPS score" },
    { val: "1500", label: "People on\nboard" },
    { val: "25+", label: "Years of\nOperations" }
  ];

  const techLogos = [
    { name: "Android", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/android/android-original.svg" },
    { name: "Angular", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularjs/angularjs-original.svg" },
    { name: "iOS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apple/apple-original.svg" },
    { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
    { name: "Azure", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg" },
    { name: "ORACLE", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oracle/oracle-original.svg" },
    { name: "ERP & CRM", fallback: "ERP" },
    { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg" },
    { name: "Golang", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg" },
    { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
    { name: "Magento", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/magento/magento-original.svg" },
    { name: "MERN\nStack", fallback: "MERN" },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
    { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
    { name: "ReactJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
    { name: "Ruby on\nRails", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rubyonrails/rubyonrails-original.svg" },
    { name: "Swift", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swift/swift-original.svg" },
    { name: "Vue.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg" },
    { name: "Web3", fallback: "W3" },
    { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
    { name: "DevOps", fallback: "OPS" },
    { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
    { name: "Jenkins", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg" },
    { name: "Laravel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg" },
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
    { name: "Shopify", fallback: "SHOP" },
    { name: "Spring", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg" },
    { name: "MEAN\nStack", fallback: "MEAN" },
    { name: "Testing", fallback: "QA" }
  ];

  return (
    <section className="w-full bg-white flex flex-col items-center pt-24 pb-28 px-6">
      
      <div className="max-w-[700px] w-full flex flex-col items-center text-center mb-16">
         <h2 className="text-[26px] md:text-[34px] font-bold text-[#222] leading-tight mb-12 tracking-tight">
           Our Metrics are the Testament to Our Scale,<br/>Success, and Efficacy for Enterprise Software<br/>needs
         </h2>
         
         <div className="flex flex-wrap items-start justify-center gap-x-12 gap-y-8 w-full">
            {metrics.map((m, idx) => (
                <div key={idx} className="flex flex-col items-center">
                    <span className="text-[32px] font-bold text-[#222] mb-2">{m.val}</span>
                    <span className="text-[10px] text-gray-500 uppercase tracking-widest whitespace-pre-line font-bold">{m.label}</span>
                </div>
            ))}
         </div>
      </div>

      <div className="w-full max-w-[1100px] grid grid-cols-1 md:grid-cols-[1.5fr,1fr] gap-12 lg:gap-24 items-center">
         
         {/* Grid of Technologies */}
         <div className="bg-white border border-gray-100 rounded-sm shadow-[0_5px_30px_rgba(0,0,0,0.05)] p-4 md:p-8">
            <div className="grid grid-cols-4 md:grid-cols-6 gap-2">
                {techLogos.map((tech, idx) => (
                    <div key={idx} className="flex flex-col items-center justify-center py-2 px-1 border border-transparent hover:border-gray-100 rounded-sm cursor-pointer group transition-colors min-h-[70px]">
                        <div className="w-8 h-8 mb-2 flex items-center justify-center group-hover:scale-110 transition-transform origin-bottom">
                           {tech.icon ? (
                              <img src={tech.icon} alt={tech.name} className="max-w-full max-h-full object-contain filter drop-shadow-sm" />
                           ) : (
                              <div className="w-full h-full bg-gradient-to-br from-primary/10 to-primary/20 border border-primary/30 rounded-sm flex items-center justify-center text-primary text-[8px] font-black tracking-tighter shadow-sm">{tech.fallback}</div>
                           )}
                        </div>
                        <span className="text-[9.5px] text-gray-700 font-bold whitespace-pre-line text-center leading-tight">{tech.name}</span>
                    </div>
                ))}
            </div>
         </div>

         {/* Call to action text block */}
         <div className="flex flex-col items-start px-4 md:px-0">
             <h3 className="text-[24px] md:text-[28px] font-bold text-[#222] leading-[1.3] mb-8 max-w-[380px] tracking-tight">
               A pool of 1500+ vetted and certified developers in 40+ skillstacks like Node.js, Python, Testing/QA, Ruby, React, Java and more.
             </h3>
             <button className="bg-black text-white text-[13px] font-bold py-3.5 px-8 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-transform rounded-[2px]">
               Build Your Team
             </button>
         </div>

      </div>

    </section>
  );
}
