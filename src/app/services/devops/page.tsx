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
        <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 py-20 lg:py-28">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-30">
            <svg className="absolute top-0 right-0 w-1/2 h-full" viewBox="0 0 800 800" fill="none">
              <circle cx="400" cy="400" r="300" stroke="#E5E7EB" strokeWidth="1" strokeDasharray="4 4" />
              <circle cx="400" cy="400" r="200" stroke="#E5E7EB" strokeWidth="1" strokeDasharray="4 4" />
              <circle cx="400" cy="400" r="100" stroke="#E5E7EB" strokeWidth="1" strokeDasharray="4 4" />
            </svg>
          </div>
          
          <div className="relative max-w-[1200px] mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="max-w-xl">
                <span className="inline-block text-sm font-medium text-gray-500 mb-4">
                  AI-Powered DevOps Services and Solutions
                </span>
                
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                  Fast-Track Your SaaS Deployments with Expert DevOps
                </h1>
                
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  An agile approach to accelerate SaaS DevOps development
                </p>
                
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-[#F97316] text-white px-6 py-3 rounded-lg font-semibold transition-all hover:bg-[#EA580C] hover:scale-105 hover:shadow-lg"
                >
                  Accelerate SaaS Growth with AI-First DevOps
                  <ArrowRight className="w-5 h-5" />
                </Link>

                {/* Cloud Logos */}
                <div className="flex items-center gap-8 mt-10 pt-8 border-t border-gray-200">
                  <span className="text-sm text-gray-500 font-medium">Powered by:</span>
                  <div className="flex items-center gap-6">
                    <div className="h-8 flex items-center text-gray-400 font-bold text-sm">
                      AWS
                    </div>
                    <div className="h-8 flex items-center text-gray-400 font-bold text-sm">
                      Azure
                    </div>
                    <div className="h-8 flex items-center text-gray-400 font-bold text-sm">
                      Google Cloud
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Decorative */}
              <div className="hidden lg:flex justify-center items-center relative">
                <div className="absolute top-10 right-10 w-32 h-32 bg-orange-100 rounded-full blur-3xl opacity-50"></div>
                <div className="absolute bottom-10 left-10 w-40 h-40 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
                <div className="relative w-80 h-80 bg-gradient-to-br from-gray-100 to-gray-50 rounded-3xl border border-gray-200 p-8 shadow-xl">
                  <div className="grid grid-cols-2 gap-4 h-full">
                    <div className="bg-white rounded-2xl p-4 shadow-sm flex flex-col items-center justify-center">
                      <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-2">
                        <span className="text-2xl">🚀</span>
                      </div>
                      <span className="text-sm font-semibold text-gray-700">50% Faster</span>
                      <span className="text-xs text-gray-500">Deployments</span>
                    </div>
                    <div className="bg-white rounded-2xl p-4 shadow-sm flex flex-col items-center justify-center">
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-2">
                        <span className="text-2xl">🔒</span>
                      </div>
                      <span className="text-sm font-semibold text-gray-700">99.9%</span>
                      <span className="text-xs text-gray-500">Uptime</span>
                    </div>
                    <div className="bg-white rounded-2xl p-4 shadow-sm flex flex-col items-center justify-center">
                      <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-2">
                        <span className="text-2xl">⚡</span>
                      </div>
                      <span className="text-sm font-semibold text-gray-700">AI-Powered</span>
                      <span className="text-xs text-gray-500">Automation</span>
                    </div>
                    <div className="bg-white rounded-2xl p-4 shadow-sm flex flex-col items-center justify-center">
                      <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-2">
                        <span className="text-2xl">☁️</span>
                      </div>
                      <span className="text-sm font-semibold text-gray-700">Cloud-Native</span>
                      <span className="text-xs text-gray-500">Solutions</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Value Proposition Section */}
        <section className="py-16 bg-white">
          <div className="max-w-[800px] mx-auto px-6 text-center">
            <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900 mb-6">
              DevOps Can Make or Break Your <span className="text-[#F97316]">Go-To-Market</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Netsmartz empowers SaaS businesses with AI-based DevOps solutions and services that accelerate development while maintaining flexibility, ensuring seamless adaptation to evolving needs. Our AI-enhanced pipelines ensure faster releases, fewer errors, and smarter decision-making at every stage of your product lifecycle.
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
                  <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">{stat.value}</div>
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
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Key Features</h2>
              <p className="text-lg text-gray-600 max-w-[600px] mx-auto">
                Comprehensive DevOps solutions designed to transform your business
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "CI/CD Pipeline", description: "Automated continuous integration and deployment pipelines", icon: "⚙️" },
                { title: "Infrastructure as Code", description: "Scalable and reproducible infrastructure management", icon: "📝" },
                { title: "Container Orchestration", description: "Kubernetes and Docker container management", icon: "📦" },
                { title: "Cloud Migration", description: "Seamless migration to cloud platforms", icon: "☁️" },
                { title: "Monitoring & Logging", description: "Real-time monitoring and centralized logging", icon: "📊" },
                { title: "Security Automation", description: "DevSecOps integration for secure deployments", icon: "🔒" },
              ].map((feature, index) => (
                <div key={index} className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-shadow border border-gray-100">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
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
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Benefits</h2>
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
                      <span className="text-gray-700 font-medium">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-[#F97316]/10 rounded-3xl transform rotate-3"></div>
                <div className="relative bg-white p-10 rounded-3xl border border-gray-100 shadow-lg">
                  <div className="text-center">
                    <div className="text-6xl font-bold text-[#F97316] mb-2">+</div>
                    <div className="text-2xl font-semibold text-gray-900 mb-4">
                      Business Value
                    </div>
                    <p className="text-gray-600">
                      Join 2000+ clients who transformed their business with our DevOps solutions
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
