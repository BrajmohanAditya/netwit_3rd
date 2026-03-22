"use client";

import { use } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle, Users, Globe, Award, TrendingUp } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { aboutData } from "@/config/about-data";

// Custom Our Story Components
import { OurStoryHero } from "@/components/our-story-hero";
import { OurStoryTimeline } from "@/components/our-story-timeline";

// Custom Excellence Components
import { ExcellenceHero } from "@/components/excellence-hero";
import { ExcellencePillars } from "@/components/excellence-pillars";

// Custom Why Netwit Components
import { WhyNetwitHero } from "@/components/why-netwit-hero";
import { WhyNetwitDifferentiation } from "@/components/why-netwit-differentiation";

// Custom Timeline Components
import { TimelineHero } from "@/components/timeline-hero";
import { TimelineFeed } from "@/components/timeline-feed";

// Custom Leadership Components
import { LeadershipHero } from "@/components/leadership-hero";
import { LeadershipProfiles } from "@/components/leadership-profiles";

// Custom Life At Netwit Components
import { LifeAtNetwitHero } from "@/components/life-at-netwit-hero";
import { LifeAtNetwitCulture } from "@/components/life-at-netwit-culture";

// Custom Netwit Academy Components
import { NetwitAcademyHero } from "@/components/netwit-academy-hero";
import { NetwitAcademyCurriculum } from "@/components/netwit-academy-curriculum";

// Custom L&D, AI, and Sustainability Components
import { LearningDevelopmentHero } from "@/components/learning-development-hero";
import { LearningDevelopmentGrowth } from "@/components/learning-development-growth";
import { AiCultureHero } from "@/components/ai-culture-hero";
import { AiCultureProtocol } from "@/components/ai-culture-protocol";
import { SustainabilityHero } from "@/components/sustainability-hero";
import { SustainabilityImpact } from "@/components/sustainability-impact";

// Custom Talent Stories and GPW Journal Components
import { TalentStoriesHero } from "@/components/talent-stories-hero";
import { TalentStoriesGrid } from "@/components/talent-stories-grid";
import { GpwJournalHero } from "@/components/gpw-journal-hero";
import { GpwJournalArticles } from "@/components/gpw-journal-articles";

// Custom Events, Hiring, Giving Back, and Referral Components
import { EventsHero } from "@/components/events-hero";
import { EventsGrid } from "@/components/events-grid";
import { HiringHero } from "@/components/hiring-hero";
import { HiringBenefits } from "@/components/hiring-benefits";
import { GivingBackHero } from "@/components/giving-back-hero";
import { GivingBackImpact } from "@/components/giving-back-impact";
import { ReferralHero } from "@/components/referral-hero";
import { ReferralProgram } from "@/components/referral-program";

// Custom Thought Leadership Components
import { ThoughtLeadershipHero } from "@/components/thought-leadership-hero";
import { ThoughtLeadershipPillars } from "@/components/thought-leadership-pillars";

export default function AboutPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const pageData = aboutData[slug as keyof typeof aboutData];

  if (!pageData) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex items-center justify-center pt-[80px]">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Page Not Found</h1>
            <p className="text-gray-600 mb-6">The page you&apos;re looking for doesn&apos;t exist.</p>
            <Link href="/" className="text-primary hover:underline">Go back home</Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  if (slug === "our-story") {
    return (
      <>
        <Header />
        <main className="pt-[0px] bg-[#02050b]">
          <OurStoryHero />
          <OurStoryTimeline />
        </main>
        <Footer />
      </>
    );
  }

  if (slug === "25-years-excellence") {
    return (
      <>
        <Header />
        <main className="pt-[0px] bg-[#050505]">
          <ExcellenceHero />
          <ExcellencePillars />
        </main>
        <Footer />
      </>
    );
  }

  if (slug === "why-netsmartz") {
    return (
      <>
        <Header />
        <main className="pt-[0px] bg-[#080a0d]">
          <WhyNetwitHero />
          <WhyNetwitDifferentiation />
        </main>
        <Footer />
      </>
    );
  }

  if (slug === "timeline") {
    return (
      <>
        <Header />
        <main className="pt-[0px] bg-[#02050b]">
          <TimelineHero />
          <TimelineFeed />
        </main>
        <Footer />
      </>
    );
  }

  if (slug === "leadership-team") {
    return (
      <>
        <Header />
        <main className="pt-[0px] bg-[#030303]">
          <LeadershipHero />
          <LeadershipProfiles />
        </main>
        <Footer />
      </>
    );
  }

  if (slug === "life-at-netsmartz") {
    return (
      <>
        <Header />
        <main className="pt-[0px] bg-[#09020f]">
          <LifeAtNetwitHero />
          <LifeAtNetwitCulture />
        </main>
        <Footer />
      </>
    );
  }

  if (slug === "netsmartz-academy") {
    return (
      <>
        <Header />
        <main className="pt-[0px] bg-[#020502]">
          <NetwitAcademyHero />
          <NetwitAcademyCurriculum />
        </main>
        <Footer />
      </>
    );
  }

  if (slug === "learning-development") {
    return (
      <>
        <Header />
        <main className="pt-[0px] bg-[#050b1a]">
          <LearningDevelopmentHero />
          <LearningDevelopmentGrowth />
        </main>
        <Footer />
      </>
    );
  }

  if (slug === "ai-first-culture") {
    return (
      <>
        <Header />
        <main className="pt-[0px] bg-[#020202]">
          <AiCultureHero />
          <AiCultureProtocol />
        </main>
        <Footer />
      </>
    );
  }

  if (slug === "sustainability") {
    return (
      <>
        <Header />
        <main className="pt-[0px] bg-[#030303]">
          <SustainabilityHero />
          <SustainabilityImpact />
        </main>
        <Footer />
      </>
    );
  }

  if (slug === "talent-stories") {
    return (
      <>
        <Header />
        <main className="pt-[0px] bg-[#0d0d0d]">
          <TalentStoriesHero />
          <TalentStoriesGrid />
        </main>
        <Footer />
      </>
    );
  }

  if (slug === "gpw-journal") {
    return (
      <>
        <Header />
        <main className="pt-[0px] bg-[#020512]">
          <GpwJournalHero />
          <GpwJournalArticles />
        </main>
        <Footer />
      </>
    );
  }

  if (slug === "events") {
    return (
      <>
        <Header />
        <main className="pt-[0px] bg-[#0d021c]">
          <EventsHero />
          <EventsGrid />
        </main>
        <Footer />
      </>
    );
  }

  if (slug === "we-are-hiring") {
    return (
      <>
        <Header />
        <main className="pt-[0px] bg-[#020617]">
          <HiringHero />
          <HiringBenefits />
        </main>
        <Footer />
      </>
    );
  }

  if (slug === "giving-back") {
    return (
      <>
        <Header />
        <main className="pt-[0px] bg-[#020502]">
          <GivingBackHero />
          <GivingBackImpact />
        </main>
        <Footer />
      </>
    );
  }

  if (slug === "referral-partners") {
    return (
      <>
        <Header />
        <main className="pt-[0px] bg-[#0d0d0d]">
          <ReferralHero />
          <ReferralProgram />
        </main>
        <Footer />
      </>
    );
  }

  if (slug === "thought-leadership") {
    return (
      <>
        <Header />
        <main className="pt-[0px] bg-[#020617]">
          <ThoughtLeadershipHero />
          <ThoughtLeadershipPillars />
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
            </svg>
          </div>

          <div className="relative max-w-[1200px] mx-auto px-6">
            <div className="max-w-2xl">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                About Us
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
                href="#contact"
                className="inline-flex items-center gap-2 bg-[#0B3D91] text-white px-8 py-4 rounded-lg font-semibold transition-all hover:bg-[#0a3066] hover:shadow-lg"
              >
                Get Started <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {pageData.stats.map((stat, index) => (
                <div key={index} className="text-center p-6 bg-gray-50 rounded-2xl">
                  <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Highlights Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Key Highlights</h2>
              <p className="text-lg text-gray-600 max-w-[600px] mx-auto">
                What sets us apart and drives our success
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 max-w-[800px] mx-auto">
              {pageData.highlights.map((highlight, index) => (
                <div key={index} className="flex items-center gap-4 p-6 bg-white rounded-xl shadow-sm">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-gray-700 font-medium">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="py-20 bg-[#0B3D91]">
          <div className="max-w-[800px] mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              {slug === "we-are-hiring" ? "Join Our Growing Team" : "Want to Learn More?"}
            </h2>
            <p className="text-xl text-white/80 mb-8">
              {slug === "we-are-hiring" 
                ? "Explore career opportunities and become part of our success story"
                : "Get in touch with our team to learn more about Netwit"
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#contact-form"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#0B3D91] px-8 py-4 rounded-full font-semibold transition-all hover:shadow-lg"
              >
                {slug === "we-are-hiring" ? "View Openings" : "Contact Us"} <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/about/our-story"
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-full font-semibold transition-all hover:bg-white/10"
              >
                Learn More
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
  return Object.keys(aboutData).map((slug) => ({ slug }));
}
