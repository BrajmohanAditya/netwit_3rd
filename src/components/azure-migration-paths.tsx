"use client";

export function AzureMigrationPaths() {
  const paths = [
    { title: "Rehost" },
    { title: "Replatform" },
    { title: "Refactor / Rebuild" },
    { title: "Retire / Retain" }
  ];

  return (
    <section className="bg-white py-24 px-6 w-full">
      <div className="max-w-[1240px] mx-auto text-center">
        <h2 className="text-3xl md:text-[32px] font-bold text-text mb-4 tracking-tight">
          Migration Paths We Support
        </h2>
        <p className="text-[14.5px] text-muted mb-16 max-w-[800px] mx-auto leading-relaxed">
          We guide organizations through the full spectrum of Azure modernization and migration services—aligned to business priorities, risk tolerance, and long-term outcomes. We leverage native Microsoft tools such as Azure Migrate to assess readiness, map dependencies, and execute migrations efficiently.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 w-full max-w-[1000px] mx-auto">
          {paths.map((path, idx) => (
            <div 
              key={idx} 
              className="bg-primary rounded-[8px] shadow-md p-8 min-h-[140px] flex items-center justify-center transition-transform hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(11,61,145,0.3)] bg-gradient-to-br from-primary to-primary-600"
            >
              <h3 className="text-white font-bold text-[18px] md:text-[20px] text-center tracking-wide leading-tight">
                {path.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
