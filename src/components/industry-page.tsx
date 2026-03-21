"use client";

import { use } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { industriesData } from "@/config/industries-data";

import { StartupsHero } from "@/components/industries-startups-hero";
import { StartupsServices } from "@/components/industries-startups-services";
import { StartupsGrowth } from "@/components/industries-startups-growth";
import { StartupsClientsDo } from "@/components/industries-startups-clients-do";
import { StartupsHire } from "@/components/industries-startups-hire";
import { StartupsInsights } from "@/components/industries-startups-insights";
import { StartupsCarousel } from "@/components/industries-startups-carousel";

import { ScaleupsHero } from "@/components/industries-scaleups-hero";
import { ScaleupsExpertise } from "@/components/industries-scaleups-expertise";
import { ScaleupsWhyAndTimeline } from "@/components/industries-scaleups-why";
import { ScaleupsWhatWeDo } from "@/components/industries-scaleups-what-we-do";
import { ScaleupsEngagement } from "@/components/industries-scaleups-engagement";
import { ScaleupsPlanned } from "@/components/industries-scaleups-planned";
import { ScaleupsClients } from "@/components/industries-scaleups-clients";
import { ScaleupsSuccessStories } from "@/components/industries-scaleups-success";
import { ScaleupsInsights } from "@/components/industries-scaleups-insights";

import { EnterpriseHero } from "@/components/industries-enterprise-hero";
import { EnterpriseSuccessStories } from "@/components/industries-enterprise-success";
import { EnterpriseClients } from "@/components/industries-enterprise-clients";
import { EnterpriseWhatWeDo } from "@/components/industries-enterprise-what-we-do";
import { EnterpriseMetricsTech } from "@/components/industries-enterprise-metrics";
import { EnterpriseIndustries } from "@/components/industries-enterprise-industries";
import { EnterpriseInsights } from "@/components/industries-enterprise-insights";
import { SaasClients } from "@/components/industries-saas-clients";

// New IT Staff Components
import { ItStaffHero } from "@/components/industries-it-staff-hero";
import { ItStaffServices } from "@/components/industries-it-staff-services";
import { ItStaffBenefits } from "@/components/industries-it-staff-benefits";

// New Education Components
import { EducationHero } from "@/components/industries-education-hero";
import { EducationSolutions } from "@/components/industries-education-solutions";
import { EducationBenefits } from "@/components/industries-education-benefits";
import { EducationClients } from "@/components/industries-education-clients";

// New Finance Components
import { FinanceHero } from "@/components/industries-finance-hero";
import { FinanceClients } from "@/components/industries-finance-clients";
import { FinanceSolutions } from "@/components/industries-finance-solutions";
import { FinanceBenefits } from "@/components/industries-finance-benefits";

// New Food Components
import { FoodHero } from "@/components/industries-food-hero";
import { FoodClients } from "@/components/industries-food-clients";
import { FoodSolutions } from "@/components/industries-food-solutions";
import { FoodBenefits } from "@/components/industries-food-benefits";

// New Healthcare Components
import { HealthcareHero } from "@/components/industries-healthcare-hero";
import { HealthcareClients } from "@/components/industries-healthcare-clients";
import { HealthcareSolutions } from "@/components/industries-healthcare-solutions";
import { HealthcareBenefits } from "@/components/industries-healthcare-benefits";

// New Manufacturing Components
import { ManufacturingHero } from "@/components/industries-manufacturing-hero";
import { ManufacturingClients } from "@/components/industries-manufacturing-clients";
import { ManufacturingSolutions } from "@/components/industries-manufacturing-solutions";
import { ManufacturingBenefits } from "@/components/industries-manufacturing-benefits";

// New Media Components
import { MediaHero } from "@/components/industries-media-hero";
import { MediaClients } from "@/components/industries-media-clients";
import { MediaSolutions } from "@/components/industries-media-solutions";
import { MediaBenefits } from "@/components/industries-media-benefits";

// New Real Estate Components
import { RealEstateHero } from "@/components/industries-real-estate-hero";
import { RealEstateClients } from "@/components/industries-real-estate-clients";
import { RealEstateSolutions } from "@/components/industries-real-estate-solutions";
import { RealEstateBenefits } from "@/components/industries-real-estate-benefits";

export default function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const pageData = industriesData[slug as keyof typeof industriesData];

  if (!pageData) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex items-center justify-center pt-[80px]">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Page Not Found</h1>
            <p className="text-gray-600 mb-6">The industry page you&apos;re looking for doesn&apos;t exist.</p>
            <Link href="/" className="text-primary hover:underline">Go back home</Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  // Render the requested layout mockups directly to the startups slug as instructed
  if (slug === "startups") {
    return (
      <>
        <Header />
        <main className="pt-[80px]">
          <EnterpriseHero />
          <EnterpriseWhatWeDo />
          <EnterpriseMetricsTech />
          <ScaleupsEngagement />
          <EnterpriseSuccessStories />
          <EnterpriseClients />
          <EnterpriseIndustries />
          <StartupsHire /> 
          <EnterpriseInsights />
        </main>
        <Footer />
      </>
    );
  }

  if (slug === "enterprise" || slug === "enterprises") {
    return (
      <>
        <Header />
        <main className="pt-[80px]">
          <EnterpriseHero />
          <EnterpriseWhatWeDo />
          <EnterpriseMetricsTech />
          <ScaleupsEngagement />
          <EnterpriseSuccessStories />
          <EnterpriseClients />
          <EnterpriseIndustries />
          <StartupsHire /> 
          <EnterpriseInsights />
        </main>
        <Footer />
      </>
    );
  }

  if (slug === "saas") {
    return (
      <>
        <Header />
        <main className="pt-[80px]">
          <EnterpriseHero />
          <ScaleupsEngagement />
          <EnterpriseSuccessStories />
          <SaasClients />
          <EnterpriseWhatWeDo />
          <EnterpriseMetricsTech />
          <EnterpriseIndustries />
          <StartupsHire /> 
          <EnterpriseInsights />
        </main>
        <Footer />
      </>
    );
  }

  if (slug === "it-staff") {
    return (
      <>
        <Header />
        <main className="pt-[80px]">
          <ItStaffHero />
          <ItStaffBenefits />
          <ItStaffServices />
          <ScaleupsEngagement />
          <StartupsHire /> 
          <EnterpriseInsights />
        </main>
        <Footer />
      </>
    );
  }

  if (slug === "education") {
    return (
      <>
        <Header />
        <main className="pt-[80px]">
          <EducationHero />
          <EducationClients />
          <EducationSolutions />
          <EducationBenefits />
          <ScaleupsEngagement />
          <EnterpriseInsights />
        </main>
        <Footer />
      </>
    );
  }

  if (slug === "finance") {
    return (
      <>
        <Header />
        <main className="pt-[80px]">
          <FinanceHero />
          <FinanceClients />
          <FinanceSolutions />
          <FinanceBenefits />
          <ScaleupsEngagement />
          <EnterpriseInsights />
        </main>
        <Footer />
      </>
    );
  }

  if (slug === "food") {
    return (
      <>
        <Header />
        <main className="pt-[80px]">
          <FoodHero />
          <FoodClients />
          <FoodSolutions />
          <FoodBenefits />
          <ScaleupsEngagement />
          <EnterpriseInsights />
        </main>
        <Footer />
      </>
    );
  }

  if (slug === "healthcare") {
    return (
      <>
        <Header />
        <main className="pt-[80px]">
          <HealthcareHero />
          <HealthcareClients />
          <HealthcareSolutions />
          <HealthcareBenefits />
          <ScaleupsEngagement />
          <EnterpriseInsights />
        </main>
        <Footer />
      </>
    );
  }

  if (slug === "manufacturing") {
    return (
      <>
        <Header />
        <main className="pt-[80px]">
          <ManufacturingHero />
          <ManufacturingClients />
          <ManufacturingSolutions />
          <ManufacturingBenefits />
          <ScaleupsEngagement />
          <EnterpriseInsights />
        </main>
        <Footer />
      </>
    );
  }

  if (slug === "media") {
    return (
      <>
        <Header />
        <main className="pt-[80px]">
          <MediaHero />
          <MediaClients />
          <MediaSolutions />
          <MediaBenefits />
          <ScaleupsEngagement />
          <EnterpriseInsights />
        </main>
        <Footer />
      </>
    );
  }

  if (slug === "real-estate") {
    return (
      <>
        <Header />
        <main className="pt-[80px]">
          <RealEstateHero />
          <RealEstateClients />
          <RealEstateSolutions />
          <RealEstateBenefits />
          <ScaleupsEngagement />
          <EnterpriseInsights />
        </main>
        <Footer />
      </>
    );
  }

  if (slug === "scaleups") {
    return (
      <>
        <Header />
        <main className="pt-[80px]">
          <ScaleupsHero />
          <ScaleupsExpertise />
          <ScaleupsEngagement />
          <ScaleupsPlanned />
          <ScaleupsWhyAndTimeline />
          <ScaleupsWhatWeDo />
          <ScaleupsClients />
          <StartupsHire /> 
          <ScaleupsSuccessStories />
          <ScaleupsInsights />
          <StartupsCarousel />
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="pt-[80px]">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 pt-12 pb-20 lg:pt-16 lg:pb-24">
          <div className="absolute inset-0 opacity-30">
            <svg className="absolute top-0 right-0 w-1/2 h-full" viewBox="0 0 800 800" fill="none">
              <circle cx="400" cy="400" r="300" stroke="#E5E7EB" strokeWidth="1" strokeDasharray="4 4" />
              <circle cx="400" cy="400" r="200" stroke="#E5E7EB" strokeWidth="1" strokeDasharray="4 4" />
              <circle cx="400" cy="400" r="100" stroke="#E5E7EB" strokeWidth="1" strokeDasharray="4 4" />
            </svg>
          </div>

          <div className="relative max-w-[1200px] mx-auto px-6">
            <div className="max-w-2xl">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                {pageData.category}
              </span>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                {pageData.title}
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {pageData.subtitle}
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

        {/* Description Section */}
        <section className="py-16 bg-white">
          <div className="max-w-[800px] mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Overview</h2>
            <p className="text-lg text-gray-600 leading-relaxed">{pageData.description}</p>
          </div>
        </section>

        {/* Challenges Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Industry Challenges</h2>
                <p className="text-lg text-gray-600 mb-8">
                  We understand the unique challenges facing the {pageData.title.toLowerCase()} industry.
                </p>
                <ul className="space-y-4">
                  {pageData.challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-red-500 text-sm">!</span>
                      </div>
                      <span className="text-gray-700">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our DevOps Solutions</h2>
                <p className="text-lg text-gray-600 mb-8">
                  Tailored solutions to address your specific industry needs.
                </p>
                <ul className="space-y-4">
                  {pageData.solutions.map((solution, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                      </div>
                      <span className="text-gray-700">{solution}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Benefits</h2>
              <p className="text-lg text-gray-600 max-w-[600px] mx-auto">
                Achieve measurable results with our industry-specific solutions
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {pageData.benefits.map((benefit, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-2xl hover:shadow-lg transition-shadow border border-gray-100">
                  <CheckCircle className="w-8 h-8 text-green-500 mb-4" />
                  <p className="text-gray-700 font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="py-20 bg-[#0B3D91]">
          <div className="max-w-[800px] mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your {pageData.title} Business?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Get in touch with our industry experts today
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

export function generateStaticParams() {
  return Object.keys(industriesData).map((slug) => ({
    slug,
  }));
}
