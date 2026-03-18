import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ArrowRight, CheckCircle, LineChart, Lightbulb, Settings, LifeBuoy } from "lucide-react";
import Link from "next/link";
import { ToolsSlider } from "@/components/tools-slider";
import { TrustedBySlider } from "@/components/trusted-by-slider";

// CSS-rendered AWS Certification Badge component
const AwsBadge = ({ label, color = "purple", type = "SPECIALTY" }: { label: React.ReactNode, color?: "purple" | "teal", type?: string }) => {
  const bgColor = color === "purple" ? "bg-[#522b91]" : "bg-[#007b82]";
  return (
    <div className={`relative w-[80px] sm:w-[85px] h-[90px] sm:h-[95px] ${bgColor} flex flex-col items-center justify-center p-1.5 text-center text-white font-bold leading-tight drop-shadow-sm`}
         style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}>
      <span className="text-[10px] opacity-90 mb-0.5 tracking-wider">aws</span>
      <span className="text-[8.5px] leading-[1.15]">{label}</span>
      <span className="text-[6px] opacity-80 mt-1 tracking-widest">{type}</span>
    </div>
  );
};

// CSS-rendered Azure Certification Shield component
const AzureBadge = ({ label, type = "ASSOCIATE", stars = 2 }: { label: React.ReactNode, type?: string, stars?: number }) => {
  return (
    <div 
      className="relative w-[90px] sm:w-[95px] h-[100px] sm:h-[105px] flex flex-col items-center bg-[#005ea5] drop-shadow-md"
      style={{ clipPath: "polygon(0 0, 100% 0, 100% 75%, 50% 100%, 0 75%)" }}
    >
       <div className="absolute top-0 left-0 right-0 h-[26px] bg-[#001e36]"></div>
       <div className="relative z-10 w-full h-full flex flex-col items-center justify-between py-1.5">
         <div className="text-[6px] text-white mt-1 leading-[1.1] font-semibold tracking-wider text-center">Microsoft<br/>CERTIFIED</div>
         <div className="bg-white w-[100%] text-[#001e36] text-[7.5px] sm:text-[8px] font-extrabold py-2 px-1 flex items-center justify-center text-center leading-[1.1] shadow-sm">
           {label}
         </div>
         <div className="flex flex-col items-center mb-1.5">
           <div className="text-white text-[6px] font-bold tracking-widest uppercase">{type}</div>
           <div className="flex gap-0.5 mt-0.5">
             {Array.from({ length: stars }).map((_, i) => (
               <span key={i} className="text-white text-[8px] leading-none">★</span>
             ))}
           </div>
         </div>
       </div>
    </div>
  );
};

export default function DevOpsPage() {
  return (
    <>
      <Header />
      <main className="pt-[80px]">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[#f3f6fb] to-white">
          {/* Background Pattern - Dotted Top Right */}
          <div className="absolute top-6 right-6 w-96 h-96 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 400 400" fill="none">
              <pattern
                id="dots"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="2" cy="2" r="1.5" fill="#0B3D91" />
              </pattern>
              <rect width="400" height="400" fill="url(#dots)" />
            </svg>
          </div>

          {/* Subtle Mesh Lines */}
          <div className="absolute inset-0 opacity-10">
            <svg
              className="w-full h-full"
              viewBox="0 0 1200 800"
              preserveAspectRatio="xMidYMid slice"
            >
              <defs>
                <linearGradient
                  id="meshGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#0B3D91" stopOpacity="0.1" />
                  <stop offset="50%" stopColor="var(--color-primary)" stopOpacity="0.05" />
                  <stop offset="100%" stopColor="#0B3D91" stopOpacity="0.1" />
                </linearGradient>
              </defs>
              <path
                d="M0 400 Q 300 200 600 400 T 1200 400"
                stroke="url(#meshGradient)"
                strokeWidth="1"
                fill="none"
              />
              <path
                d="M0 600 Q 300 400 600 600 T 1200 600"
                stroke="url(#meshGradient)"
                strokeWidth="1"
                fill="none"
              />
              <path
                d="M0 200 Q 300 0 600 200 T 1200 200"
                stroke="url(#meshGradient)"
                strokeWidth="1"
                fill="none"
              />
            </svg>
          </div>

          {/* Curved Wave Bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-28">
            <svg
              className="w-full h-full"
              viewBox="0 0 1440 100"
              preserveAspectRatio="none"
            >
              <path
                d="M0,50 C360,100 720,0 1080,50 C1260,75 1350,75 1440,50 L1440,100 L0,100 Z"
                fill="#f3f6fb"
              />
            </svg>
          </div>

          <div className="relative max-w-[1200px] mx-auto px-6 pt-28 pb-28 min-h-[520px] md:min-h-[620px]">
            {/* Left Aligned Content */}
            <div className="max-w-2xl">
              {/* Small Label */}
              <span className="inline-block text-sm font-medium text-gray-500 mb-4 tracking-wide">
                AI-Powered DevOps Services and Solutions
              </span>

              {/* Main Heading */}
              <h1 className="text-5xl lg:text-[64px] font-extrabold text-[#07263f] leading-tight mb-6">
                Fast-Track Your SaaS Deployments with Expert DevOps
              </h1>

              {/* Subheading */}
              <p className="text-[16px] lg:text-[18px] text-[#6b7280] mb-8 leading-relaxed max-w-[680px]">
                An agile approach to accelerate SaaS DevOps development
              </p>

              {/* CTA Button */}
              <Link
                href="#contact"
                className="inline-flex items-center gap-3 bg-[var(--color-cta)] text-white px-8 py-4 rounded-lg font-semibold shadow-xl transition-transform transform hover:scale-105"
              >
                Accelerate SaaS Growth with AI-First DevOps
                <ArrowRight className="w-5 h-5" />
              </Link>

              {/* Cloud Logos Section */}
              <div className="flex items-center gap-6 mt-12 pt-8 border-t border-gray-200">
                <span className="text-sm text-gray-400 font-medium">
                  Powered by:
                </span>
                <div className="flex items-center gap-8">
                  {/* AWS */}
                  <div className="h-8 flex items-center">
                    <img
                      src="/aws.svg"
                      alt="AWS"
                      className="h-8 w-auto object-contain"
                    />
                  </div>
                  {/* Azure */}
                  <div className="h-8 flex items-center">
                    <img
                      src="/azure.svg"
                      alt="Azure"
                      className="h-8 w-auto object-contain"
                    />
                  </div>
                  {/* Google Cloud */}
                  <div className="h-8 flex items-center">
                    <img
                      src="/gcp.svg"
                      alt="Google Cloud Platform"
                      className="h-8 w-auto object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <TrustedBySlider />

        {/* Trusted Expertise Section - Force Reload */}
        <section className="py-20 bg-white">
          <div className="max-w-[1000px] mx-auto px-6 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              <span className="text-[var(--color-primary)]">Trusted</span> DevOps Expertise
            </h2>
            <p className="text-[15px] lg:text-[17px] text-[#6b7280] leading-relaxed mb-14 mx-auto max-w-[900px]">
              We are your reliable SaaS and AI partners offering industry-leading AI-based DevOps services and solutions in the US that go beyond automation. By embedding AI-driven DevOps into your processes, we ensure intelligent deployments, predictive maintenance, and continuous innovation.
            </p>

            {/* Stats Card */}
            <div className="bg-white rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.08)] py-12 px-6 border border-gray-100 flex flex-col md:flex-row items-center justify-between divide-y md:divide-y-0 md:divide-x divide-gray-300">
              {[
                { value: "150+", label: "Certified Talent" },
                { value: "12+", label: "Industries" },
                { value: "300+", label: "Happy Clients" },
                { value: "10+", label: "Locations" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="flex-1 flex flex-col items-center justify-center w-full py-6 md:py-0"
                >
                  <div className="text-[40px] lg:text-[50px] font-bold text-[var(--color-primary)] mb-2 leading-none tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 text-[15px] font-medium tracking-wide">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-[40px] font-bold text-gray-900 mb-6">
                Comprehensive DevOps Services
              </h2>
              <p className="text-[16px] lg:text-[18px] text-[#4b5563] leading-relaxed max-w-[850px] mx-auto">
                Get AI-powered DevOps automation designed to enhance efficiency, scalability, and innovation. From seamless integrations to intelligent automation with AI, our expertise ensures peak performance at every stage.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {[
                {
                  title: "DevSecOps",
                  description:
                    "Secure your SaaS applications with AI-powered DevSecOps. We integrate machine learning models to detect anomalies, automate threat responses, and ensure compliance—without slowing down your development cycle.",
                },
                {
                  title: "CI/CD Optimization",
                  description:
                    "Streamline your continuous integration and delivery pipelines with AI. We leverage intelligent generative AI tools for DevOps solutions to enhance workflows, speed up deployment, and improve overall quality leading to faster releases.",
                },
                {
                  title: "Site Reliability Engineering",
                  description:
                    "Our AI-enhanced SRE practices focus on system scalability, incident management, and proactive monitoring for a seamless user experience, helping you achieve unmatched reliability and performance.",
                },
                {
                  title: "Infrastructure & Configuration Management",
                  description:
                    "We leverage AI for DevOps solutions and services to automate infrastructure provisioning and configuration, ensuring consistency, reducing human error, and enabling self-healing systems that adapt to real-time performance metrics.",
                },
                {
                  title: "DevOps Assessment & Consultation",
                  description:
                    "Gain expert AI-driven insights to elevate your DevOps strategy. Our tailored assessments identify gaps and opportunities, guiding you toward enhanced efficiency and innovation.",
                },
              ].map((feature, index) => {
                let colClass = "col-span-1 md:col-span-2 lg:col-span-2";
                if (index === 3) {
                  colClass += " md:col-auto lg:col-start-2";
                }
                if (index === 4) {
                  colClass += " md:col-start-2 lg:col-start-4";
                }

                return (
                  <div
                    key={index}
                    className={`bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-all flex flex-col group ${colClass}`}
                  >
                    <h3 className="text-[18px] lg:text-[20px] font-bold text-[var(--color-primary)] mb-4 leading-snug">
                      {feature.title}
                    </h3>
                    <p className="text-[#6b7280] text-[14px] lg:text-[15px] leading-relaxed mb-8 flex-grow">
                      {feature.description}
                    </p>
                    <Link
                      href="#"
                      className="inline-flex items-center gap-1.5 text-[13px] font-bold text-gray-800 hover:text-[var(--color-primary)] transition-colors mt-auto uppercase tracking-wider"
                    >
                      LEARN MORE <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Process Steps Section */}
        <section className="py-24 bg-white relative overflow-hidden">
          {/* Subtle dots background on the left */}
          <div className="absolute left-[-20px] top-1/2 -translate-y-1/2 opacity-20 hidden md:block">
            <svg width="150" height="150" fill="none" viewBox="0 0 100 100">
              <pattern
                id="dot-grid"
                x="0"
                y="0"
                width="16"
                height="16"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="2" cy="2" r="2" fill="#000" />
              </pattern>
              <rect width="100" height="100" fill="url(#dot-grid)" />
            </svg>
          </div>

          <div className="max-w-[1200px] mx-auto px-6 relative z-10">
            {/* Header */}
            <div className="text-center mb-20">
              <h2 className="text-3xl lg:text-[40px] font-bold text-gray-900 mb-6">
                <span className="text-[var(--color-primary)]">
                  Accelerating Your Product Development in
                </span>{" "}
                4 Steps
              </h2>
              <p className="text-[#6b7280] text-[16px] lg:text-[18px] max-w-2xl mx-auto">
                Seamlessly integrate DevOps best practices into your SaaS
                operations with Netsmartz
              </p>
            </div>

            {/* Content Area */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Side: Staggered Tiles */}
              <div className="relative max-w-lg mx-auto lg:mx-0 w-full">
                <div className="flex gap-6">
                  {/* Column 1 */}
                  <div className="flex flex-col gap-6 w-1/2">
                    {/* Tile 1 (Active) */}
                    <div className="relative bg-[var(--color-primary)] text-white rounded-2xl p-6 aspect-square flex flex-col justify-center items-start border border-[var(--color-primary)] shadow-lg hover:shadow-xl transition-all cursor-pointer">
                      <div className="absolute -top-3 -right-3 w-8 h-8 bg-gray-900 text-white flex items-center justify-center rounded-md font-bold shadow-md">
                        1
                      </div>
                      <LineChart className="w-12 h-12 mb-4 text-white" strokeWidth={1.5} />
                      <h4 className="text-[17px] font-bold leading-tight">
                        Strategic
                        <br />
                        Planning
                      </h4>
                    </div>

                    {/* Tile 3 */}
                    <div className="relative bg-white text-[var(--color-primary)] rounded-2xl p-6 aspect-square flex flex-col justify-center items-start border border-[var(--color-primary)] hover:shadow-lg transition-all cursor-pointer">
                      <div className="absolute -bottom-3 right-6 w-8 h-8 bg-[var(--color-primary)] text-white flex items-center justify-center rounded-md font-bold shadow-md">
                        3
                      </div>
                      <Settings className="w-12 h-12 mb-4 text-[var(--color-primary)]" strokeWidth={1.5} />
                      <h4 className="text-[17px] font-bold leading-tight">
                        Solution
                        <br />
                        Development
                      </h4>
                    </div>
                  </div>

                  {/* Column 2 (Staggered down) */}
                  <div className="flex flex-col gap-6 w-1/2 pt-12">
                    {/* Tile 2 */}
                    <div className="relative bg-white text-[var(--color-primary)] rounded-2xl p-6 aspect-square flex flex-col justify-center items-start border border-[var(--color-primary)] hover:shadow-lg transition-all cursor-pointer">
                      <div className="absolute top-8 -right-3 w-8 h-8 bg-[var(--color-primary)] text-white flex items-center justify-center rounded-md font-bold shadow-md">
                        2
                      </div>
                      <Lightbulb className="w-12 h-12 mb-4 text-[var(--color-primary)]" strokeWidth={1.5} />
                      <h4 className="text-[17px] font-bold leading-tight">
                        Implementation
                        <br />
                        Process
                      </h4>
                    </div>

                    {/* Tile 4 */}
                    <div className="relative bg-white text-[var(--color-primary)] rounded-2xl p-6 aspect-square flex flex-col justify-center items-start border border-[var(--color-primary)] hover:shadow-lg transition-all cursor-pointer">
                      <div className="absolute -bottom-3 -right-3 w-8 h-8 bg-[var(--color-primary)] text-white flex items-center justify-center rounded-md font-bold shadow-md">
                        4
                      </div>
                      <LifeBuoy className="w-12 h-12 mb-4 text-[var(--color-primary)]" strokeWidth={1.5} />
                      <h4 className="text-[17px] font-bold leading-tight">
                        Operational
                        <br />
                        Support
                      </h4>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side: Step Details */}
              <div className="lg:pl-8">
                <h3 className="text-[28px] font-bold text-[var(--color-primary)] mb-6">
                  Strategic Planning
                </h3>
                <p className="text-[#6b7280] text-[16px] leading-relaxed max-w-lg">
                  Our experts analyze the current IT infrastructure, resources, and
                  product portfolio to devise a winning DevOps strategy for your
                  SaaS business.
                </p>
              </div>
            </div>
          </div>
        </section>

        <ToolsSlider />

        {/* Certifications Section */}
        <section className="py-24 bg-[#f8fafc]">
          <div className="max-w-[1240px] mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">
              
              {/* Left Side: Badges */}
              <div className="flex flex-col items-center gap-10">
                {/* AWS Badges */}
                <div className="flex flex-col items-center gap-2 relative">
                  <div className="flex flex-wrap gap-2 justify-center">
                    <AwsBadge label={<>SAP on AWS</>} />
                    <AwsBadge label={<>Security</>} />
                    <AwsBadge label={<>Machine<br/>Learning</>} />
                    <AwsBadge label={<>Database</>} />
                    <AwsBadge label={<>Data<br/>Analytics</>} />
                  </div>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <AwsBadge label={<>Advanced<br/>Networking</>} />
                    <AwsBadge label={<>DevOps<br/>Engineer</>} color="teal" type="PROFESSIONAL" />
                    <AwsBadge label={<>Solutions<br/>Architect</>} color="teal" type="PROFESSIONAL" />
                  </div>
                </div>

                {/* Azure Badges */}
                <div className="flex flex-col items-center gap-3">
                  <div className="flex flex-wrap gap-3 justify-center">
                    <AzureBadge label={<>AZURE<br/>DEVOPS ENGINEER</>} type="EXPERT" stars={3} />
                    <AzureBadge label={<>AZURE<br/>ADMINISTRATOR</>} type="ASSOCIATE" stars={2} />
                    <AzureBadge label={<>AZURE SECURITY<br/>ENGINEER</>} type="ASSOCIATE" stars={2} />
                    <AzureBadge label={<>AZURE SOLUTIONS<br/>ARCHITECT</>} type="EXPERT" stars={3} />
                    <AzureBadge label={<>AZURE<br/>AI ENGINEER</>} type="ASSOCIATE" stars={2} />
                  </div>
                  <div className="flex flex-wrap gap-3 justify-center">
                    <AzureBadge label={<>AZURE<br/>DATA ENGINEER</>} type="ASSOCIATE" stars={2} />
                  </div>
                </div>
              </div>

              {/* Right Side: Text & Buttons */}
              <div className="flex flex-col justify-center lg:pl-12">
                <h2 className="text-[32px] lg:text-[40px] font-bold text-gray-900 mb-6 leading-[1.15]">
                  Certified Microsoft Azure and <br className="hidden lg:block" />
                  <span className="text-[var(--color-primary)]">AWS Proficiency</span>
                </h2>
                <p className="text-[#6b7280] text-[16px] lg:text-[17px] mb-10 leading-relaxed max-w-[500px]">
                  Craft innovative solutions and exceptional customer journeys by harnessing our leading cloud-based capability and AI.
                </p>
                <div className="flex flex-col gap-4">
                  <button className="bg-[var(--color-primary)] hover:bg-[#ea580c] text-white font-bold py-4 px-8 rounded flex items-center justify-center gap-3 transition-colors w-full sm:w-[380px] shadow-sm hover:shadow-md text-[16px]">
                    Hire AWS DevOps Engineer <ArrowRight className="w-5 h-5" />
                  </button>
                  <button className="bg-black hover:bg-gray-800 text-white font-bold py-4 px-8 rounded flex items-center justify-center gap-3 transition-colors w-full sm:w-[380px] shadow-sm hover:shadow-md text-[16px]">
                    Hire Azure DevOps Engineer <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="py-20 bg-[#0B3D91]">
          <div className="max-w-[800px] mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Get in touch with our experts today and start your journey
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#contact-form"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#0B3D91] px-8 py-4 rounded-full font-semibold transition-all hover:shadow-lg"
              >
                Get Started <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-full font-semibold transition-all hover:bg-white/10"
              >
                Schedule a Demo
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
