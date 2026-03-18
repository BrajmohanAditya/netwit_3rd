import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";

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
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "CI/CD Pipeline",
                  description:
                    "Automated continuous integration and deployment pipelines",
                  icon: "⚙️",
                },
                {
                  title: "Infrastructure as Code",
                  description:
                    "Scalable and reproducible infrastructure management",
                  icon: "📝",
                },
                {
                  title: "Container Orchestration",
                  description: "Kubernetes and Docker container management",
                  icon: "📦",
                },
                {
                  title: "Cloud Migration",
                  description: "Seamless migration to cloud platforms",
                  icon: "☁️",
                },
                {
                  title: "Monitoring & Logging",
                  description: "Real-time monitoring and centralized logging",
                  icon: "📊",
                },
                {
                  title: "Security Automation",
                  description: "DevSecOps integration for secure deployments",
                  icon: "🔒",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-shadow border border-gray-100"
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  Benefits
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Achieve measurable results with our proven DevOps solutions
                </p>
                <ul className="space-y-4">
                  {[
                    "50% faster deployment cycles",
                    "Reduced infrastructure costs",
                    "Improved team collaboration",
                    "Higher quality releases",
                    "24/7 infrastructure support",
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-[var(--color-primary)]/10 rounded-3xl transform rotate-3"></div>
                <div className="relative bg-white p-10 rounded-3xl border border-gray-100 shadow-lg">
                  <div className="text-center">
                    <div className="text-6xl font-bold text-[var(--color-primary)] mb-2">
                      +
                    </div>
                    <div className="text-2xl font-semibold text-gray-900 mb-4">
                      Business Value
                    </div>
                    <p className="text-gray-600">
                      Join 2000+ clients who transformed their business with our
                      DevOps solutions
                    </p>
                  </div>
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
