"use client";

import { use } from "react";
import Link from "next/link";
import { ArrowRight, Search, Filter } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { resourcesData } from "@/config/resources-data";

// Custom Case Studies Components
import { CaseStudiesHero } from "@/components/case-studies-hero";
import { CaseStudiesGrid } from "@/components/case-studies-grid";

// Custom Client Experiences Components
import { ClientExperiencesHero } from "@/components/client-experiences-hero";
import { ClientExperiencesGrid } from "@/components/client-experiences-grid";

// Custom Blog Components
import { BlogHero } from "@/components/blog-hero";
import { BlogGrid } from "@/components/blog-grid";

// Custom Webinars Components
import { WebinarsHero } from "@/components/webinars-hero";
import { WebinarsGrid } from "@/components/webinars-grid";

// Custom Press Release Components
import { PressReleaseHero } from "@/components/press-release-hero";
import { PressReleaseGrid } from "@/components/press-release-grid";

// Custom Expert Q&A Components
import { ExpertQaHero } from "@/components/expert-qa-hero";
import { ExpertQaGrid } from "@/components/expert-qa-grid";

// Custom Podcasts Components
import { PodcastsHero } from "@/components/podcasts-hero";
import { PodcastsGrid } from "@/components/podcasts-grid";

// Custom Whitepapers Components
import { WhitepapersHero } from "@/components/whitepapers-hero";
import { WhitepapersGrid } from "@/components/whitepapers-grid";

// Custom eBooks Components
import { EbooksHero } from "@/components/ebooks-hero";
import { EbooksGrid } from "@/components/ebooks-grid";

// Custom Brochure Components
import { BrochureHero } from "@/components/brochure-hero";
import { BrochureGrid } from "@/components/brochure-grid";

// Custom Infographics Components
import { InfographicsHero } from "@/components/infographics-hero";
import { InfographicsGrid } from "@/components/infographics-grid";

// Custom Tech Tales Components
import { TechTalesHero } from "@/components/tech-tales-hero";
import { TechTalesGrid } from "@/components/tech-tales-grid";

// Custom SaaS Masterclasses Components
import { SaasMasterclassesHero } from "@/components/saas-masterclasses-hero";
import { SaasMasterclassesGrid } from "@/components/saas-masterclasses-grid";

// Custom FAQ Components
import { FaqHero } from "@/components/faq-hero";
import { FaqGrid } from "@/components/faq-grid";

// Custom All Resources Components
import { AllResourcesHero } from "@/components/all-resources-hero";
import { AllResourcesGrid } from "@/components/all-resources-grid";

export default function ResourcePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const pageData = resourcesData[slug as keyof typeof resourcesData];

  if (!pageData) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex items-center justify-center pt-[80px]">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Page Not Found</h1>
            <p className="text-gray-600 mb-6">The resource page you&apos;re looking for doesn&apos;t exist.</p>
            <Link href="/" className="text-primary hover:underline">Go back home</Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  if (slug === "case-studies") {
    return (
      <>
        <Header />
        <main className="pt-[0px] bg-[#050608]">
          <CaseStudiesHero />
          <CaseStudiesGrid />
        </main>
        <Footer />
      </>
    );
  }

  if (slug === "client-experiences") {
    return (
      <>
        <Header />
        <main className="pt-[0px] bg-[#050810]">
          <ClientExperiencesHero />
          <ClientExperiencesGrid />
        </main>
        <Footer />
      </>
    );
  }

  if (slug === "blog") {
    return (
      <>
        <Header />
        <main className="pt-[0px] bg-[#050608]">
          <BlogHero />
          <BlogGrid />
        </main>
        <Footer />
      </>
    );
  }

  if (slug === "webinars") {
    return (
      <>
        <Header />
        <main className="pt-[0px] bg-[#050814]">
          <WebinarsHero />
          <WebinarsGrid />
        </main>
        <Footer />
      </>
    );
  }

  if (slug === "press-release") {
    return (
      <>
        <Header />
        <main className="pt-[0px] bg-[#05060d]">
          <PressReleaseHero />
          <PressReleaseGrid />
        </main>
        <Footer />
      </>
    );
  }

  if (slug === "expert-qa") {
    return (
      <>
        <Header />
        <main className="pt-[0px] bg-[#050a0f]">
          <ExpertQaHero />
          <ExpertQaGrid />
        </main>
        <Footer />
      </>
    );
  }

  if (slug === "podcasts") {
    return (
      <>
        <Header />
        <main className="pt-[0px] bg-[#0a050d]">
          <PodcastsHero />
          <PodcastsGrid />
        </main>
        <Footer />
      </>
    );
  }

  if (slug === "whitepapers") {
    return (
      <>
        <Header />
        <main className="pt-[0px] bg-[#05060a]">
          <WhitepapersHero />
          <WhitepapersGrid />
        </main>
        <Footer />
      </>
    );
  }

  if (slug === "ebooks") {
    return (
      <>
        <Header />
        <main className="pt-[0px] bg-[#08050d]">
          <EbooksHero />
          <EbooksGrid />
        </main>
        <Footer />
      </>
    );
  }

  if (slug === "brochure") {
    return (
      <>
        <Header />
        <main className="pt-[0px] bg-[#0c0d12]">
          <BrochureHero />
          <BrochureGrid />
        </main>
        <Footer />
      </>
    );
  }

  if (slug === "infographics") {
    return (
      <>
        <Header />
        <main className="pt-[0px] bg-[#050805]">
          <InfographicsHero />
          <InfographicsGrid />
        </main>
        <Footer />
      </>
    );
  }

  if (slug === "tech-tales") {
    return (
      <>
        <Header />
        <main className="pt-[0px] bg-[#050608]">
          <TechTalesHero />
          <TechTalesGrid />
        </main>
        <Footer />
      </>
    );
  }

  if (slug === "saas-masterclasses") {
    return (
      <>
        <Header />
        <main className="pt-[0px] bg-[#050505]">
          <SaasMasterclassesHero />
          <SaasMasterclassesGrid />
        </main>
        <Footer />
      </>
    );
  }

  if (slug === "faq") {
    return (
      <>
        <Header />
        <main className="pt-[0px] bg-[#05060b]">
          <FaqHero />
          <FaqGrid />
        </main>
        <Footer />
      </>
    );
  }

  if (slug === "all-resources") {
    return (
      <>
        <Header />
        <main className="pt-[0px] bg-[#020202]">
          <AllResourcesHero />
          <AllResourcesGrid />
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
        <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 pt-12 pb-16 lg:pt-16 lg:pb-20">
          <div className="absolute inset-0 opacity-30">
            <svg className="absolute top-0 right-0 w-1/2 h-full" viewBox="0 0 800 800" fill="none">
              <circle cx="400" cy="400" r="300" stroke="#E5E7EB" strokeWidth="1" strokeDasharray="4 4" />
              <circle cx="400" cy="400" r="200" stroke="#E5E7EB" strokeWidth="1" strokeDasharray="4 4" />
            </svg>
          </div>

          <div className="relative max-w-[1200px] mx-auto px-6">
            <div className="max-w-2xl">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                {pageData.category}
              </span>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
                {pageData.title}
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {pageData.subtitle}
              </p>
              <p className="text-lg text-gray-600 mb-8">
                {pageData.description}
              </p>
              <Link
                href="#resources"
                className="inline-flex items-center gap-2 bg-[#0B3D91] text-white px-8 py-4 rounded-lg font-semibold transition-all hover:bg-[#0a3066] hover:shadow-lg"
              >
                Explore Now <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Search & Filter Section */}
        <section className="py-6 bg-white border-b border-gray-100">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search resources..."
                  className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
              <button className="flex items-center gap-2 px-5 py-3 border border-gray-200 rounded-lg hover:border-primary hover:text-primary transition-colors">
                <Filter className="w-5 h-5" />
                <span className="font-medium">Filters</span>
              </button>
            </div>
          </div>
        </section>

        {/* Resources Grid Section */}
        <section id="resources" className="py-16 bg-gray-50">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pageData.items.map((item, index) => (
                <div key={index} className="bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-shadow border border-gray-100 group">
                  <div className="h-40 bg-gradient-to-br from-primary/10 to-accent-teal/10 flex items-center justify-center">
                    <span className="text-5xl opacity-50">📄</span>
                  </div>
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full mb-3">
                      {item.tag}
                    </span>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {item.description}
                    </p>
                    <Link
                      href={`/resources/${slug}/${index}`}
                      className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
                    >
                      Learn More <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Load More Section */}
        <section className="py-12 bg-white">
          <div className="max-w-[1200px] mx-auto px-6 text-center">
            <button className="px-8 py-4 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors">
              Load More
            </button>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-[#0B3D91]">
          <div className="max-w-[800px] mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Get the latest resources, insights, and updates delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-lg text-gray-900 focus:outline-none"
              />
              <button className="px-8 py-4 bg-[#F97316] text-white rounded-lg font-semibold hover:bg-[#EA580C] transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export function generateStaticParams() {
  return Object.keys(resourcesData).map((slug) => ({ slug }));
}
