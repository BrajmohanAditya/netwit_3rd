import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Link from "next/link";
import Image from "next/image";
import { Phone, Settings, FileText, TrendingUp, Users, ClipboardList, Handshake, FileEdit, Mails, CalendarCheck, Network } from "lucide-react";
import SuccessStoriesSlider from "./SuccessStoriesSlider";
export default function SalesAccelerationPage() {
  return (
    <>
      <Header />
      <main className="pt-[80px]">
        {/* Dark Hero Section with Mesh Network Background */}
        <section className="relative overflow-hidden bg-[#18181b]">
          {/* Subtle Abstract Node/Mesh Background */}
          <div className="absolute inset-0 opacity-[0.25] pointer-events-none flex items-center justify-center overflow-hidden mix-blend-screen">
            <svg 
              className="w-[120vw] h-[120vh] min-w-[1200px] object-cover" 
              viewBox="0 0 1000 600" 
              fill="none" 
              preserveAspectRatio="xMidYMid slice"
            >
              <g stroke="rgba(255,255,255,0.3)" strokeWidth="0.5">
                {/* Connecting Lines */}
                <path d="M100,100 L300,150 L200,300 Z" />
                <path d="M300,150 L550,100 L400,250 Z" />
                <path d="M550,100 L850,200 L650,300 Z" />
                <path d="M850,200 L950,50 L750,150 Z" />
                <path d="M200,300 L400,250 L350,500 L150,450 Z" />
                <path d="M400,250 L650,300 L550,550 L350,500 Z" />
                <path d="M650,300 L900,400 L750,550 L550,550 Z" />
                <path d="M900,400 L1050,250 L850,200 Z" />
              </g>
              <g fill="rgba(255,255,255,0.5)">
                {/* Nodes */}
                <circle cx="100" cy="100" r="2.5" />
                <circle cx="300" cy="150" r="2.5" />
                <circle cx="200" cy="300" r="2.5" />
                <circle cx="550" cy="100" r="2.5" />
                <circle cx="400" cy="250" r="2.5" />
                <circle cx="850" cy="200" r="2.5" />
                <circle cx="650" cy="300" r="2.5" />
                <circle cx="950" cy="50" r="2.5" />
                <circle cx="750" cy="150" r="2.5" />
                <circle cx="350" cy="500" r="2.5" />
                <circle cx="150" cy="450" r="2.5" />
                <circle cx="550" cy="550" r="2.5" />
                <circle cx="900" cy="400" r="2.5" />
                <circle cx="750" cy="550" r="2.5" />
                <circle cx="1050" cy="250" r="2.5" />
              </g>
            </svg>
          </div>

          <div className="relative z-10 max-w-[1000px] mx-auto px-6 py-36 md:py-48 flex flex-col items-center justify-center text-center">
            
            {/* Tiny top label */}
            <h3 className="text-[13px] md:text-[15px] font-bold text-white mb-5 tracking-[0.03em]">
              AI Appointment Setting Services & Lead Generation
            </h3>
            
            {/* Main Title */}
            <h1 className="text-[40px] md:text-[54px] lg:text-[60px] font-extrabold text-white leading-[1.1] mb-5 tracking-tight">
              SaaS Sales Acceleration with AI
            </h1>
            
            {/* Subtitle */}
            <p className="text-[17px] md:text-[19px] text-[#e5e7eb] mb-12 font-medium">
              Strategic pipelines speed up time to revenue
            </p>
            
            {/* CTA Button */}
            <Link 
              href="#contact" 
              className="bg-primary hover:bg-primary-600 text-white font-bold py-[16px] px-10 rounded-[4px] shadow-lg transition-transform hover:scale-105 text-[15px] tracking-wide inline-flex items-center justify-center w-full sm:w-auto min-w-[340px]"
            >
              Build a Scalable, AI-Powered Sales Engine
            </Link>

          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-20 md:py-28 bg-[var(--color-bg)] px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-[32px] md:text-[40px] font-bold text-[var(--color-text)] mb-6 leading-tight">
              Tap into <span className="text-primary">AI-powered</span> Sales
            </h2>
            <p className="text-[16px] md:text-[18px] text-[var(--color-muted)] leading-[1.8]">
              Harness the power of AI-first sales enablement to enhance lead generation, optimize sales cycles, and boost conversion rates. Our intelligent automation and predictive analytics in AI-driven B2B appointment settings for SaaS enable your team to focus on high-value opportunities while reducing manual effort.
            </p>
          </div>
        </section>

        {/* Trusted Sales Expertise Section */}
        <section className="py-16 md:py-24 bg-[var(--color-bg)]">
          <div className="max-w-[1200px] mx-auto px-6 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Image Side */}
            <div className="w-full lg:w-1/2 relative">
              <div className="relative aspect-[5/3] lg:aspect-[4/3] w-full rounded-2xl md:rounded-[2.5rem] overflow-hidden shadow-lg border border-[var(--color-surface-2)]">
                <Image 
                  src="/images/trusted_sales_expertise.png" 
                  alt="Business professionals analyzing data" 
                  fill 
                  className="object-cover"
                />
              </div>
              {/* Subtle accent matching the image's faint circle glow/overlay */}
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-primary/10 rounded-full blur-2xl pointer-events-none hidden md:block"></div>
            </div>

            {/* Content Side */}
            <div className="w-full lg:w-1/2">
              <h2 className="text-[32px] md:text-[40px] font-bold text-[var(--color-text)] mb-6 leading-tight">
                Trusted Sales <span className="text-primary">Expertise</span>
              </h2>
              <p className="text-[16px] md:text-[18px] text-[var(--color-muted)] leading-[1.8]">
                With years of experience in sales appointment setting services in the USA, our specialists bring deep industry knowledge to craft customized solutions that accelerate growth. We implement proven methodologies, backed by AI-powered technology, to drive results and enhance sales efficiency through an AI appointment setter.
              </p>
            </div>
          </div>
        </section>

        {/* Comprehensive Sales Acceleration Services Section */}
        <section className="py-20 md:py-28 bg-[var(--color-surface)] border-t border-[var(--color-surface-2)]">
          <div className="max-w-[1200px] mx-auto px-6 text-center">
            
            <h2 className="text-[32px] md:text-[40px] font-bold text-[var(--color-text)] mb-4 leading-tight">
              Comprehensive Sales <span className="text-primary">Acceleration Services</span>
            </h2>
            
            <p className="text-[15px] md:text-[16px] text-[var(--color-muted)] max-w-4xl mx-auto mb-16 leading-[1.8]">
              We offer a full suite of AI-powered appointment settings in the USA and B2B appointment setting services for SaaS companies. Our sales acceleration solutions are designed to streamline processes and maximize performance.
            </p>

            <div className="flex flex-col lg:flex-row divide-y lg:divide-y-0 lg:divide-x divide-[var(--color-surface-2)] border-y border-[var(--color-surface-2)] lg:border-none">
              
              {/* Item 1 */}
              <div className="flex-1 px-6 py-10 lg:py-4 flex flex-col items-center text-center">
                <Phone className="w-10 h-10 text-[var(--color-text)] mb-6 stroke-[1.5]" />
                <h3 className="text-[17px] font-bold text-[var(--color-text)] mb-4">
                  AI-driven Lead Generation
                </h3>
                <p className="text-[14px] leading-[1.7] text-[var(--color-muted)]">
                  Effortlessly identify, target, and engage high-potential prospects using advanced artificial intelligence, improving conversion rates and accelerating the B2B lead generation appointment setting pipeline effectively.
                </p>
              </div>

              {/* Item 2 */}
              <div className="flex-1 px-6 py-10 lg:py-4 flex flex-col items-center text-center">
                <Settings className="w-10 h-10 text-[var(--color-text)] mb-6 stroke-[1.5]" />
                <h3 className="text-[17px] font-bold text-[var(--color-text)] mb-4">
                  Automated Appointment Setting
                </h3>
                <p className="text-[14px] leading-[1.7] text-[var(--color-muted)]">
                  Enhance scheduling efficiency by reducing manual tasks through AI-driven automation, ensuring seamless appointment setting coordination and optimized business operations effortlessly.
                </p>
              </div>

              {/* Item 3 */}
              <div className="flex-1 px-6 py-10 lg:py-4 flex flex-col items-center text-center">
                <FileText className="w-10 h-10 text-[var(--color-text)] mb-6 stroke-[1.5]" />
                <h3 className="text-[17px] font-bold text-[var(--color-text)] mb-4">
                  Data-driven Sales Strategy
                </h3>
                <p className="text-[14px] leading-[1.7] text-[var(--color-muted)]">
                  Utilize predictive analytics, NLP, and AI insights to refine targeting methods, ensuring data-backed strategic decisions that enhance customer engagement and revenue potential in AI-powered B2B appointment settings in the USA.
                </p>
              </div>

              {/* Item 4 */}
              <div className="flex-1 px-6 py-10 lg:py-4 flex flex-col items-center text-center">
                <TrendingUp className="w-10 h-10 text-[var(--color-text)] mb-6 stroke-[1.5]" />
                <h3 className="text-[17px] font-bold text-[var(--color-text)] mb-4">
                  Performance Optimization
                </h3>
                <p className="text-[14px] leading-[1.7] text-[var(--color-muted)]">
                  Boost operational efficiency using AI-powered workflow automation, reducing bottlenecks and streamlining processes for increased productivity and business success through effective AI appointment scheduling and sales acceleration strategies.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* 6 Steps Section */}
        <section className="py-20 md:py-28 bg-[var(--color-surface-2)]">
          <div className="max-w-[1000px] mx-auto px-6">
            <h2 className="text-[28px] md:text-[36px] font-bold text-[var(--color-text)] mb-12 text-center">
              Increasing Your Leads in <span className="text-primary">6 Steps</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  number: "1",
                  title: "Book a Free Consultation",
                  description: "Engage with our AI-certified GTM strategist to review your existing processes, analyze performance, and design a result-oriented outbound strategy rooted in AI B2B appointment setting solutions.",
                  icon: Users,
                },
                {
                  number: "2",
                  title: "Outline Your ICP Checklist",
                  description: "Share your Ideal Customer Persona details to build a list of approved prospects with accurate customer tagging for laser-focused outreach messaging and enhanced AI-powered appointment settings for SaaS companies.",
                  icon: ClipboardList,
                },
                {
                  number: "3",
                  title: "Build Your Dream Team",
                  description: "Set up a dedicated team of campaign managers, sales development representatives (SDRs), data analysts, and go-to-market experts to augment your AI-powered B2B appointment setting and overall processes.",
                  icon: Handshake,
                },
                {
                  number: "4",
                  title: "Co-create SOP Document",
                  description: "Define best practices vis-à-vis competitor landscape, brand guidelines, customer pain points, value propositions, and follow-up strategies for improved sales acceleration and AI appointment setting efficiency.",
                  icon: FileEdit,
                },
                {
                  number: "5",
                  title: "Plan Multichannel Outreach",
                  description: "Leverage our MarTech tools for automation and customized templates for emails, LinkedIn messaging, and more to create tailored B2B campaigns powered by a B2B appointment setting company.",
                  icon: Mails,
                },
                {
                  number: "6",
                  title: "Start Fixing Appointments",
                  description: "Initiate your targeted outreach campaigns and seamlessly secure highly qualified B2B meetings within your pipeline, ensuring a steady stream of prospects for sustainable revenue growth.",
                  icon: CalendarCheck,
                },
              ].map((step) => (
                <div 
                  key={step.number}
                  className="group bg-[var(--color-bg)] hover:bg-primary rounded-3xl p-8 relative overflow-hidden flex flex-col items-center text-center justify-center min-h-[220px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-transparent dark:border-[var(--color-surface-2)] transition-all duration-300"
                >
                  {/* Decorative background curve on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="absolute -left-1/4 top-1/4 w-[150%] pt-[150%] bg-white/10 rounded-full blur-[2px]"></div>
                  </div>

                  {/* Huge background number */}
                  <span className="absolute top-2 right-4 text-[100px] leading-none font-bold text-primary opacity-10 group-hover:text-white group-hover:opacity-20 pointer-events-none select-none transition-colors duration-300">
                    {step.number}
                  </span>

                  {/* Icon container */}
                  <div className="relative mb-5 mt-2 z-10 transition-transform duration-500 group-hover:-translate-y-2">
                    <div className="absolute -top-1.5 -left-2 w-8 h-8 rounded-full bg-primary/20 group-hover:bg-white/20 transition-colors duration-300 z-0"></div>
                    <step.icon className="w-10 h-10 text-[var(--color-text)] group-hover:text-white stroke-[1.5] relative z-10 transition-colors duration-300" />
                  </div>

                  {/* Title */}
                  <h3 className="text-[13px] font-bold text-primary group-hover:text-white tracking-wide uppercase px-2 z-10 transition-all duration-500 group-hover:-translate-y-2 text-center">
                    {step.title}
                  </h3>

                  {/* Expandable Description */}
                  <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out w-full z-10">
                    <div className="overflow-hidden overflow-y-visible">
                      <p className="text-[12.5px] text-white/95 leading-[1.6] mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 text-center">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories Slider */}
        <SuccessStoriesSlider />

        {/* Meet Sally Section */}
        <section className="bg-[#f8f9fa] dark:bg-black/20 py-24 px-6 border-t border-gray-200 dark:border-gray-800">
          <div className="max-w-[1000px] mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-16">
            
            {/* Left AI Robot Image */}
            <div className="w-full md:w-1/2 flex justify-center md:justify-end">
              <div className="w-[280px] h-[280px] md:w-[380px] md:h-[380px] relative shrink-0">
                <img 
                  src="https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80&w=800" 
                  alt="Sally AI Assistant" 
                  className="w-full h-full object-cover rounded-[40px] md:rounded-[80px] shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100 dark:border-gray-800"
                />
              </div>
            </div>

            {/* Right Content */}
            <div className="w-full md:w-1/2 flex flex-col">
              <h2 className="text-[28px] md:text-[32px] font-bold text-[#111827] dark:text-[var(--color-text)] leading-[1.15] mb-5 tracking-tight">
                <span className="text-primary">Meet Sally</span>– Our AI-powered<br className="hidden md:block"/> Sales Assistant
              </h2>
              
              <p className="text-[13px] md:text-[14px] font-medium text-[#4b5563] dark:text-[var(--color-muted)] leading-[1.7] mb-3 max-w-[420px]">
                She can talk to your customers – and you – with empathy,
                replicating a proper human conversation that's both engaging
                and meaningful.
              </p>

              <p className="text-[13px] md:text-[14px] font-bold text-[#111827] dark:text-gray-300 leading-relaxed mb-5">
                Here's what Sally can do for you:
              </p>

              <ul className="flex flex-col gap-3">
                {[
                  "Facilitate outbound sales calls in a matter of minutes",
                  "Assess whether phone number database is relevant",
                  "Take client requests and book meetings",
                  "Ask probing questions to identify client needs",
                  "Generate and summarize call transcript",
                  "Save valuable time for human employees"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="text-primary font-black text-[13px] md:text-[14px] leading-snug shrink-0 drop-shadow-sm mt-[2px] opacity-90">✓</span>
                    <span className="text-[13px] md:text-[14.5px] text-[#374151] dark:text-gray-400 font-medium leading-snug pt-[1px]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </section>

        {/* Bring Sally Onboard CTA */}
        <section className="relative overflow-hidden bg-[#10202d] py-16 sm:py-20 px-6 border-t border-[#1a3045]">
          {/* Subtle Abstract Node/Mesh Background */}
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center mix-blend-screen overflow-hidden opacity-30">
            <div className="absolute w-[800px] h-[300px] bg-[#3b82f6] rounded-[100%] blur-[120px] opacity-20"></div>
            <Network className="absolute w-[180vw] h-[180vw] max-w-[1800px] max-h-[1800px] text-white stroke-[0.25] rotate-[15deg]" />
            <Network className="absolute w-[140vw] h-[140vw] max-w-[1400px] max-h-[1400px] text-gray-300 stroke-[0.4] -rotate-[10deg] opacity-70" />
          </div>

          <div className="relative z-10 w-full max-w-[900px] mx-auto flex flex-col items-center text-center">
            <h2 className="text-[20px] sm:text-[23px] md:text-[27px] font-bold text-white leading-tight tracking-[0.015em] mb-7 sm:mb-8">
              Bring Sally Onboard to Position Yourself as an AI-Savvy Company
            </h2>
            <Link 
              href="/schedule-demo" 
              className="bg-white text-[#111827] px-7 py-2.5 text-[13px] md:text-[14px] font-bold hover:bg-gray-100 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 rounded-[2px]"
            >
              Book A Demo
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
