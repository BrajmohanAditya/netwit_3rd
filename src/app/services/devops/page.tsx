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
                  <stop offset="50%" stopColor="#F97316" stopOpacity="0.05" />
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
                className="inline-flex items-center gap-3 bg-[#ff7a20] text-white px-8 py-4 rounded-lg font-semibold shadow-xl transition-transform transform hover:scale-105"
              >
                Accelerate SaaS Growth with AI-First DevOps
                <ArrowRight className="w-5 h-5" />
              </Link>

              {/* Cloud Logos Section */}
              <div className="flex items-center gap-6 mt-12 pt-8 border-t border-gray-200">
                <span className="text-sm text-gray-400 font-medium">
                  Powered by:
                </span>
                <div className="flex items-center gap-6">
                  {/* AWS */}
                  <div className="h-8 flex items-center text-gray-400 font-medium text-sm tracking-wide">
                    <svg
                      className="h-6 w-auto"
                      viewBox="0 0 64 24"
                      fill="currentColor"
                    >
                      <path d="M6.69 15.63c0 .98.79 1.77 1.77 1.77s1.77-.79 1.77-1.77V9.74l2.7-2.7c.67-.67.67-1.77 0-2.44-.67-.67-1.77-.67-2.44 0l-3.8 3.8c-.67.67-.67 1.77 0 2.44l.67.67v4.16zm17.94.12c0 .98.79 1.77 1.77 1.77s1.77-.79 1.77-1.77v-3.46l1.77-4.16 3.45 7.62c.34.79 1.12 1.35 1.97 1.35.67 0 1.35-.34 1.77-.9l1.9-3.12v3.46c0 .98.79 1.77 1.77 1.77s1.77-.79 1.77-1.77v-5.84c0-1.12-.9-1.9-1.9-1.9h-1.23l-2.93-6.49c-.45-1.01-1.46-1.68-2.58-1.68-1.12 0-2.13.67-2.58 1.68l-2.93 6.49h-1.23c-1 0-1.9.78-1.9 1.9v5.84zm21.19-1.77c0 .98.79 1.77 1.77 1.77s1.77-.79 1.77-1.77v-5.84c0-.9-.67-1.68-1.57-1.8l-3.91-.56c-.79-.11-1.46.45-1.57 1.24v.11l-1.68 5.84c-.11.79.45 1.46 1.24 1.57l3.91.56c.9.12 1.57.9 1.57 1.68v.2zm8.69-.12c0 .9.67 1.68 1.57 1.8l3.91.56c.79.11 1.46-.45 1.57-1.24v-.11l1.68-5.84c.11-.79-.45-1.46-1.24-1.57l-3.91-.56c-.9-.12-1.57-.9-1.57-1.68v-.2c0-.98-.79-1.77-1.77-1.77s-1.77.79-1.77 1.77v5.84zm-53.32.12c0 .98.79 1.77 1.77 1.77s1.77-.79 1.77-1.77v-5.84c0-.9.67-1.68 1.57-1.8l3.91-.56c.79-.11 1.46.45 1.57 1.24v.11l1.68 5.84c.11.79-.45 1.46-1.24 1.57l-3.91.56c-.9.12-1.57.9-1.57 1.68v.2zm8.69-.12c0 .9.67 1.68 1.57 1.8l3.91.56c.79.11 1.46-.45 1.57-1.24v-.11l1.68-5.84c.11-.79-.45-1.46-1.24-1.57l-3.91-.56c-.9-.12-1.57-.9-1.57-1.68v-.2c0-.98-.79-1.77-1.77-1.77s-1.77.79-1.77 1.77v5.84zm17.82-1.57l-2.7-5.73c-.23-.45-.79-.79-1.35-.79h-2.36c-.56 0-1.12.34-1.35.79l-2.7 5.73h10.46zm-14.16-7.17h2.13l1.35-3.46h3.8l1.35 3.46h2.01l-4.37-10.28h-2.15l-4.12 10.28zm46.96 8.73c0 .98.79 1.77 1.77 1.77s1.77-.79 1.77-1.77v-3.46l1.77-4.16 3.45 7.62c.34.79 1.12 1.35 1.97 1.35.67 0 1.35-.34 1.77-.9l1.9-3.12v3.46c0 .98.79 1.77 1.77 1.77s1.77-.79 1.77-1.77v-5.84c0-1.12-.9-1.9-1.9-1.9h-1.23l-2.93-6.49c-.45-1.01-1.46-1.68-2.58-1.68-1.12 0-2.13.67-2.58 1.68l-2.93 6.49h-1.23c-1 0-1.9.78-1.9 1.9v5.84z" />
                    </svg>
                  </div>
                  {/* Azure */}
                  <div className="h-8 flex items-center text-gray-400 font-medium text-sm tracking-wide">
                    <svg
                      className="h-6 w-auto"
                      viewBox="0 0 78 24"
                      fill="currentColor"
                    >
                      <path d="M2.5 2.5h12v12H18V7.5h-4v-5h-4v5h-4.5v5h5v7.5h-5.5V18h-6.5v-12h6v-3.5zm21 0h12v12H30V7.5h-4v-5h-4v5h-4.5v5h5v7.5h-5.5V18h-6.5v-12h6v-3.5zm-10.5 9.5h5v5h-5v-5zm10.5 0h5v5h-5v-5z" />
                    </svg>
                  </div>
                  {/* Google Cloud */}
                  <div className="h-8 flex items-center text-gray-400 font-medium text-sm tracking-wide">
                    <svg
                      className="h-6 w-auto"
                      viewBox="0 0 120 24"
                      fill="currentColor"
                    >
                      <path d="M30.1 11.1c0-2.2-1.2-4.1-3.3-4.6v-.5c0-.5-.4-1-1-1s-1 .4-1 1v.5c-2.2.5-3.6 2.5-3.6 4.7 0 2.7 2.1 4.4 5.9 5.6 2.9.9 3.7 2.1 3.7 3.4 0 1.5-1.3 2.8-3.4 3.2v.5c0 .5-.4 1-1 1s-1-.4-1-1v-.5c-2.2-.5-3.7-2.5-3.7-4.7 0-2.7 2.1-4.4 5.9-5.6 2.9-.9 3.7-2.1 3.7-3.4zM16 4.7c1.8 0 3.3 1.3 3.3 3.1 0 1.7-1.4 3.1-3.3 3.1s-3.3-1.4-3.3-3.1c0-1.8 1.4-3.1 3.3-3.1zM16 15.3c-1.8 0-3.3-1.4-3.3-3.1 0-1.8 1.4-3.1 3.3-3.1s3.3 1.4 3.3 3.1c0 1.8-1.4 3.1-3.3 3.1zM38.8 5l-7.6 13.1c-.6 1-1.8 1.4-2.9.9-.3-.1-.6-.3-.9-.5L21 14.9c-.6-.5-.9-1.3-.9-2.1V5h6.3v2.4c0 .5.4 1 1 1s1-.4 1-1V5h7.1v14.4c0 1.7 1.3 3.1 3 3.1s3-1.3 3-3.1V5h-2.7zM48.7 5l-7.6 13.1c-.6 1-1.8 1.4-2.9.9-.3-.1-.6-.3-.9-.5l-6.4-3.5c-.6-.5-.9-1.3-.9-2.1V5h6.3v2.4c0 .5.4 1 1 1s1-.4 1-1V5h7.1v14.4c0 1.7 1.3 3.1 3 3.1s3-1.3 3-3.1V5h-2.9zM67.8 5l-7.6 13.1c-.6 1-1.8 1.4-2.9.9-.3-.1-.6-.3-.9-.5l-6.4-3.5c-.6-.5-.9-1.3-.9-2.1V5h6.3v2.4c0 .5.4 1 1 1s1-.4 1-1V5h7.1v14.4c0 1.7 1.3 3.1 3 3.1s3-1.3 3-3.1V5h-2.8zM82.6 5H75l-4.4 7.1c-.5.8-1.6 1.2-2.6.9l-.3-.1-4.6-2.2c-.5-.2-.8-.7-.8-1.3V5h6.2v2.4c0 .5.4 1 1 1s1-.4 1-1V5h7.7v15.9c0 1.6 1.3 2.9 2.9 2.9s2.9-1.3 2.9-2.9V5h-2.4zM96.3 5l-7.6 13.1c-.6 1-1.8 1.4-2.9.9-.3-.1-.6-.3-.9-.5l-6.4-3.5c-.6-.5-.9-1.3-.9-2.1V5h6.3v2.4c0 .5.4 1 1 1s1-.4 1-1V5h7.1v14.4c0 1.7 1.3 3.1 3 3.1s3-1.3 3-3.1V5h-2.9zM115 5h-7.6l-4.4 7.1c-.5.8-1.6 1.2-2.6.9l-.3-.1-4.6-2.2c-.5-.2-.8-.7-.8-1.3V5h6.2v2.4c0 .5.4 1 1 1s1-.4 1-1V5h7.7v15.9c0 1.6 1.3 2.9 2.9 2.9s2.9-1.3 2.9-2.9V5h-2.5z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom Text Section */}
        <section className="py-16 bg-gray-100">
          <div className="max-w-[900px] mx-auto px-6 text-center">
            <h2 className="text-[22px] lg:text-[26px] font-semibold text-gray-900 mb-6">
              DevOps Can Make or{" "}
              <span className="text-[#f97316]">Break Your Go-To-Market</span>
            </h2>
            <p className="text-[14px] lg:text-[16px] text-[#6b7280] leading-relaxed max-w-[800px] mx-auto">
              Netsmartz empowers SaaS businesses with AI-based DevOps solutions
              and services that accelerate development while maintaining
              flexibility, ensuring seamless adaptation to evolving needs. Our
              AI-enhanced pipelines ensure faster releases, fewer errors, and
              smarter decision-making at every stage of your product lifecycle.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { value: "50%+", label: "Faster Deployments" },
                { value: "2000+", label: "Clients Served" },
                { value: "1500+", label: "DevOps Experts" },
                { value: "99.9%", label: "Uptime Guaranteed" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Key Features
              </h2>
              <p className="text-lg text-gray-600 max-w-[600px] mx-auto">
                Comprehensive DevOps solutions designed to transform your
                business
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
                <div className="absolute inset-0 bg-[#F97316]/10 rounded-3xl transform rotate-3"></div>
                <div className="relative bg-white p-10 rounded-3xl border border-gray-100 shadow-lg">
                  <div className="text-center">
                    <div className="text-6xl font-bold text-[#F97316] mb-2">
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
