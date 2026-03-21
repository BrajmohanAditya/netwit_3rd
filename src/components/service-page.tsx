"use client";

import Link from "next/link";
import { use } from "react";
import { ArrowRight, CheckCircle, Shield, Zap, Target, TrendingUp, Users, Globe } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CybersecurityServices } from "@/components/cybersecurity-services";
import { CybersecurityAddons } from "@/components/cybersecurity-addons";
import { EsgContent } from "@/components/esg-content";
import { EsgBenefits } from "@/components/esg-benefits";
import { EsgFrameworks } from "@/components/esg-frameworks";
import { AiPodsHero } from "@/components/aipods-hero";
import { AiPodsContent } from "@/components/aipods-content";
import { AiPodsBottomContent } from "@/components/aipods-bottom-content";
import { AiPodsComparison } from "@/components/aipods-comparison";
import { AiPodsWorkflow } from "@/components/aipods-workflow";
import { AiPodsContact } from "@/components/aipods-contact";
import { AiPodsFaq } from "@/components/aipods-faq";
import { DataPodsHero } from "@/components/data-pods-hero";
import { DataPodsProblem } from "@/components/data-pods-problem";
import { DataPodsContent } from "@/components/data-pods-content";
import { DataPodsIndustries } from "@/components/data-pods-industries";
import { AIPodsTrustedBy } from "@/components/aipods-trusted-by";
import { DataPodsWhyNetsmartz } from "@/components/data-pods-why-netsmartz";
import { AzureMigrationHero } from "@/components/azure-migration-hero";
import { AzureMigrationValue } from "@/components/azure-migration-value";
import { AzureMigrationStall } from "@/components/azure-migration-stall";
import { AzureMigrationAMMP } from "@/components/azure-migration-ammp";
import { AzureMigrationSecurity } from "@/components/azure-migration-security";
import { AzureMigrationPaths } from "@/components/azure-migration-paths";
import { AzureMigrationIndustries } from "@/components/azure-migration-industries";
import { AzureMigrationWhyNetsmartz } from "@/components/azure-migration-why-netsmartz";
import { AzureMigrationFaq } from "@/components/azure-migration-faq";
import { MdrHero } from "@/components/mdr-hero";
import { MdrBreaches } from "@/components/mdr-breaches";
import { MdrAssessment } from "@/components/mdr-assessment";
import { MdrIndustries } from "@/components/mdr-industries";
import { MdrWhyNetsmartz } from "@/components/mdr-why-netsmartz";

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
  label?: string;
  buttonText?: string;
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
        {slug === "ai-pods" ? (
          <AiPodsHero />
        ) : slug === "data-pods" ? (
          <DataPodsHero />
        ) : slug === "azure-migration" ? (
          <AzureMigrationHero />
        ) : slug === "managed-detection-response" ? (
          <MdrHero />
        ) : (
        <section 
          className={`relative py-32 overflow-hidden ${['cybersecurity', 'esg'].includes(slug) ? 'min-h-[60vh] flex items-center bg-black' : 'bg-gradient-to-b from-primary/5 to-transparent'}`}
        >
          {['cybersecurity', 'esg'].includes(slug) && (
            <div className="absolute inset-0 z-0">
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
                style={{ backgroundImage: `url(/images/${slug === 'cybersecurity' ? 'cybersecurity_hero.png' : 'esg_hero.png'})` }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80"></div>
            </div>
          )}
          <div className="max-w-[1200px] mx-auto px-6 relative z-10 w-full text-center">
            <div className={['cybersecurity', 'esg'].includes(slug) ? 'max-w-[1000px] mx-auto' : 'max-w-[800px] text-left'}>
              <span className={`inline-block px-4 py-1.5 rounded-full mb-6 font-medium text-sm ${['cybersecurity', 'esg'].includes(slug) ? 'text-white/80' : 'bg-primary/10 text-primary'}`}>
                {pageData.label || (type === "service" ? "Services" : "Solutions")}
              </span>
              <h1 className={`font-bold mb-6 leading-tight ${['cybersecurity', 'esg'].includes(slug) ? 'text-white text-5xl md:text-7xl' : 'text-5xl text-[#2d2d2d]'}`}>
                {pageData.title}
              </h1>
              <p className={`text-xl mb-8 leading-relaxed mx-auto max-w-2xl ${['cybersecurity', 'esg'].includes(slug) ? 'text-white/90' : 'text-muted'}`}>
                {pageData.subtitle}
              </p>
              <div className={`flex gap-4 ${['cybersecurity', 'esg'].includes(slug) ? 'justify-center' : ''}`}>
                <Link
                  href="#contact"
                  className={`inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold transition-all hover:scale-105 hover:shadow-2xl ${
                    slug === 'cybersecurity' 
                      ? 'bg-gradient-to-r from-[#FF8C42] to-[#F05A22] text-white' 
                      : slug === 'esg'
                      ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white'
                      : 'bg-primary text-white hover:bg-primary-600 shadow-lg'
                  }`}
                >
                  {pageData.buttonText || "Get Started"} {!['cybersecurity', 'esg'].includes(slug) && <ArrowRight className="w-5 h-5" />}
                </Link>
                {!['cybersecurity', 'esg'].includes(slug) && (
                  <Link
                    href="#overview"
                    className="inline-flex items-center gap-2 border border-gray-300 text-[#2d2d2d] px-8 py-4 rounded-full font-semibold transition-all hover:border-primary hover:text-primary"
                  >
                    Learn More
                  </Link>
                )}
              </div>
            </div>
          </div>
        </section>
        )}

        {/* Overview Section */}
        {slug !== "esg" && slug !== "ai-pods" && slug !== "data-pods" && slug !== "azure-migration" && slug !== "managed-detection-response" && (
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
        )}

        {/* Custom ESG Content */}
        {slug === "esg" && <EsgContent />}

        {/* ESG Benefits Grid */}
        {slug === "esg" && <EsgBenefits />}

        {/* ESG Frameworks Detail */}
        {slug === "esg" && <EsgFrameworks />}

        {/* Consulting Services (Specific to Cybersecurity) */}
        {slug === "cybersecurity" && <CybersecurityServices />}
        
        {/* Add-on Services (Specific to Cybersecurity) */}
        {slug === "cybersecurity" && <CybersecurityAddons />}

        {/* Custom AI Pods Content */}
        {slug === "ai-pods" && (
          <>
            <AiPodsContent />
            <AiPodsComparison />
            <AiPodsWorkflow />
            <AiPodsBottomContent />
            <AiPodsFaq />
            <AiPodsContact />
          </>
        )}

        {/* Custom Data Pods Content */}
        {slug === "data-pods" && (
          <>
            <DataPodsProblem />
            <DataPodsContent />
            <DataPodsIndustries />
            <AIPodsTrustedBy />
            <DataPodsWhyNetsmartz />
          </>
        )}

        {/* Custom Azure Migration Content */}
        {slug === "azure-migration" && (
          <>
            <AzureMigrationValue />
            <AzureMigrationStall />
            <AzureMigrationSecurity />
            <AzureMigrationAMMP />
            <AzureMigrationPaths />
            <AzureMigrationIndustries />
            <AIPodsTrustedBy />
            <AzureMigrationWhyNetsmartz />
            <AzureMigrationFaq />
          </>
        )}

        {/* Custom MDR Content */}
        {slug === "managed-detection-response" && (
          <>
            <MdrBreaches />
            <MdrAssessment />
            <MdrIndustries />
            <AIPodsTrustedBy />
            <MdrWhyNetsmartz />
          </>
        )}

        {/* Features Section */}
        {slug !== "cybersecurity" && slug !== "ai-pods" && slug !== "data-pods" && slug !== "azure-migration" && slug !== "managed-detection-response" && (
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
        )}

        {/* Benefits Section */}
        {slug !== "ai-pods" && slug !== "data-pods" && slug !== "azure-migration" && slug !== "managed-detection-response" && (
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
        )}

        {/* CTA Section */}
        {slug !== "ai-pods" && slug !== "data-pods" && slug !== "azure-migration" && slug !== "managed-detection-response" && (
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
        )}
      </main>
      <Footer />
    </>
  );
}
