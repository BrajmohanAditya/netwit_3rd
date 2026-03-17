import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";

interface EnterprisePageProps {
  title: string;
  subtitle: string;
  description: string;
  features: { title: string; description: string; icon: string }[];
  benefits: string[];
}

export default function EnterprisePage({ title, subtitle, description, features, benefits }: EnterprisePageProps) {
  return (
    <>
      <Header />
      <main className="pt-[80px]">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 py-20 lg:py-24">
          <div className="absolute inset-0 opacity-30">
            <svg className="absolute top-0 right-0 w-1/2 h-full" viewBox="0 0 800 800" fill="none">
              <circle cx="400" cy="400" r="300" stroke="#E5E7EB" strokeWidth="1" strokeDasharray="4 4" />
              <circle cx="400" cy="400" r="200" stroke="#E5E7EB" strokeWidth="1" strokeDasharray="4 4" />
              <circle cx="400" cy="400" r="100" stroke="#E5E7EB" strokeWidth="1" strokeDasharray="4 4" />
            </svg>
          </div>

          <div className="relative max-w-[1200px] mx-auto px-6">
            <div className="max-w-2xl">
              <span className="inline-block text-sm font-medium text-gray-500 mb-4">
                Enterprise Solutions
              </span>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                {title}
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {subtitle}
              </p>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 bg-[#0B3D91] text-white px-8 py-4 rounded-lg font-semibold transition-all hover:bg-[#0a3066] hover:shadow-lg"
              >
                Get Started <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-16 bg-white">
          <div className="max-w-[800px] mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Overview</h2>
            <p className="text-lg text-gray-600 leading-relaxed">{description}</p>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Key Features</h2>
              <p className="text-lg text-gray-600 max-w-[600px] mx-auto">
                Comprehensive solutions designed to transform your business
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl hover:shadow-lg transition-shadow border border-gray-100">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Benefits</h2>
                <p className="text-lg text-gray-600 mb-8">
                  Achieve measurable results with our proven solutions
                </p>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-[#0B3D91]/10 rounded-3xl transform rotate-3"></div>
                <div className="relative bg-white p-10 rounded-3xl border border-gray-100 shadow-lg">
                  <div className="text-center">
                    <div className="text-6xl font-bold text-[#0B3D91] mb-2">+</div>
                    <div className="text-2xl font-semibold text-gray-900 mb-4">Business Value</div>
                    <p className="text-gray-600">Join 2000+ clients who transformed their business with our solutions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="py-20 bg-[#0B3D91]">
          <div className="max-w-[800px] mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-white/80 mb-8">Get in touch with our experts today and start your journey</p>
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
