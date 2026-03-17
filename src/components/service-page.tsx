"use client";

import Link from "next/link";
import { use } from "react";
import { ArrowRight, CheckCircle, Shield, Zap, Target, TrendingUp, Users, Globe } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

interface Feature {
  title: string;
  description: string;
}

interface ServiceData {
  title: string;
  subtitle: string;
  description: string;
  features: Feature[];
  benefits: string[];
}

interface ServicePageProps {
  type: "service" | "solution";
  data: Record<string, unknown>;
  params: Promise<{ slug: string }>;
}

export function ServicePage({ type, data, params }: ServicePageProps) {
  const { slug } = use(params) as { slug: string };
  const pageData = data[slug] as ServiceData | undefined;

  if (!pageData) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex items-center justify-center pt-[80px]">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-[#2d2d2d] mb-4">Page Not Found</h1>
            <p className="text-muted mb-6">The page you&apos;re looking for doesn&apos;t exist.</p>
            <Link href="/" className="text-primary hover:underline">Go back home</Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const iconComponents: Record<string, React.ElementType> = {
    Shield,
    Zap,
    Target,
    TrendingUp,
    Users,
    Globe,
    CheckCircle,
  };

  const getIcon = (index: number) => {
    const icons = Object.values(iconComponents);
    return icons[index % icons.length];
  };

  return (
    <>
      <Header />
      <main className="pt-[80px]">
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-to-b from-primary/5 to-transparent">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="max-w-[800px]">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                {type === "service" ? "Services" : "Solutions"}
              </span>
              <h1 className="text-5xl font-bold text-[#2d2d2d] mb-6 leading-tight">
                {pageData.title}
              </h1>
              <p className="text-xl text-muted mb-8 leading-relaxed">
                {pageData.subtitle}
              </p>
              <div className="flex gap-4">
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-semibold transition-all hover:bg-primary-600 hover:shadow-lg"
                >
                  Get Started <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="#overview"
                  className="inline-flex items-center gap-2 border border-gray-300 text-[#2d2d2d] px-8 py-4 rounded-full font-semibold transition-all hover:border-primary hover:text-primary"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section id="overview" className="py-20 bg-white">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="max-w-[800px]">
              <h2 className="text-3xl font-bold text-[#2d2d2d] mb-6">Overview</h2>
              <p className="text-lg text-muted leading-relaxed">
                {pageData.description}
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-surface-2">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-[#2d2d2d] mb-4">Key Features</h2>
              <p className="text-lg text-muted max-w-[600px] mx-auto">
                Comprehensive solutions designed to transform your business
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pageData.features.map((feature: Feature, index: number) => {
                const Icon = getIcon(index);
                return (
                  <div
                    key={index}
                    className="bg-white p-8 rounded-2xl border border-gray-100 hover:border-primary/30 hover:shadow-lg transition-all"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-[#2d2d2d] mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-bold text-[#2d2d2d] mb-6">Benefits</h2>
                <p className="text-lg text-muted mb-8">
                  Achieve measurable results with our proven solutions
                </p>
                <ul className="space-y-4">
                  {pageData.benefits.map((benefit: string, index: number) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                      <span className="text-[#2d2d2d] font-medium">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-primary/10 rounded-3xl transform rotate-3"></div>
                <div className="relative bg-white p-10 rounded-3xl border border-gray-100 shadow-lg">
                  <div className="text-center">
                    <div className="text-6xl font-bold text-primary mb-2">+</div>
                    <div className="text-2xl font-semibold text-[#2d2d2d] mb-4">
                      Business Value
                    </div>
                    <p className="text-muted">
                      Join 2000+ clients who transformed their business with our solutions
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="py-20 bg-primary">
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
                className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-semibold transition-all hover:shadow-lg"
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
