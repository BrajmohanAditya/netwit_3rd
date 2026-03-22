"use client";

import { use } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { technologyData } from "@/config/technologies-data";

// Custom Angular Components
import { AngularHero } from "@/components/tech-angular-hero";
import { AngularFeatures } from "@/components/tech-angular-features";
import { AngularBenefits } from "@/components/tech-angular-benefits";

// Custom React Components
import { ReactHero } from "@/components/tech-react-hero";
import { ReactFeatures } from "@/components/tech-react-features";
import { ReactBenefits } from "@/components/tech-react-benefits";

// Custom Vue Components
import { VueHero } from "@/components/tech-vue-hero";
import { VueFeatures } from "@/components/tech-vue-features";
import { VueBenefits } from "@/components/tech-vue-benefits";

// Custom Node Components
import { NodeHero } from "@/components/tech-node-hero";
import { NodeFeatures } from "@/components/tech-node-features";
import { NodeBenefits } from "@/components/tech-node-benefits";

// Custom React Native Components
import { ReactNativeHero } from "@/components/tech-react-native-hero";
import { ReactNativeFeatures } from "@/components/tech-react-native-features";
import { ReactNativeBenefits } from "@/components/tech-react-native-benefits";

// Custom Flutter Components
import { FlutterHero } from "@/components/tech-flutter-hero";
import { FlutterFeatures } from "@/components/tech-flutter-features";
import { FlutterBenefits } from "@/components/tech-flutter-benefits";

// Custom Swift/iOS Components
import { SwiftHero } from "@/components/tech-swift-hero";
import { SwiftFeatures } from "@/components/tech-swift-features";
import { SwiftBenefits } from "@/components/tech-swift-benefits";

// Custom Android Components
import { AndroidHero } from "@/components/tech-android-hero";
import { AndroidFeatures } from "@/components/tech-android-features";
import { AndroidBenefits } from "@/components/tech-android-benefits";

// Custom General iOS Components
import { IosHero } from "@/components/tech-ios-hero";
import { IosFeatures } from "@/components/tech-ios-features";
import { IosBenefits } from "@/components/tech-ios-benefits";

// Custom PHP Components
import { PhpHero } from "@/components/tech-php-hero";
import { PhpFeatures } from "@/components/tech-php-features";
import { PhpBenefits } from "@/components/tech-php-benefits";

// Custom Ruby on Rails Components
import { RailsHero } from "@/components/tech-rails-hero";
import { RailsFeatures } from "@/components/tech-rails-features";
import { RailsBenefits } from "@/components/tech-rails-benefits";

// Custom Java Components
import { JavaHero } from "@/components/tech-java-hero";
import { JavaFeatures } from "@/components/tech-java-features";
import { JavaBenefits } from "@/components/tech-java-benefits";

// Custom Python Components
import { PythonHero } from "@/components/tech-python-hero";
import { PythonFeatures } from "@/components/tech-python-features";
import { PythonBenefits } from "@/components/tech-python-benefits";

// Custom .NET Components
import { DotnetHero } from "@/components/tech-dotnet-hero";
import { DotnetFeatures } from "@/components/tech-dotnet-features";
import { DotnetBenefits } from "@/components/tech-dotnet-benefits";

// Custom Golang Components
import { GolangHero } from "@/components/tech-golang-hero";
import { GolangFeatures } from "@/components/tech-golang-features";
import { GolangBenefits } from "@/components/tech-golang-benefits";

// Custom Magento Components
import { MagentoHero } from "@/components/tech-magento-hero";
import { MagentoFeatures } from "@/components/tech-magento-features";
import { MagentoBenefits } from "@/components/tech-magento-benefits";

// Custom MERN Components
import { MernHero } from "@/components/tech-mern-hero";
import { MernFeatures } from "@/components/tech-mern-features";
import { MernBenefits } from "@/components/tech-mern-benefits";

// Custom Azure DevOps Components
import { DevopsAzureHero } from "@/components/tech-devops-azure-hero";
import { DevopsAzureFeatures } from "@/components/tech-devops-azure-features";
import { DevopsAzureBenefits } from "@/components/tech-devops-azure-benefits";

// Custom AWS DevOps Components
import { DevopsAwsHero } from "@/components/tech-devops-aws-hero";
import { DevopsAwsFeatures } from "@/components/tech-devops-aws-features";
import { DevopsAwsBenefits } from "@/components/tech-devops-aws-benefits";

// Custom Dynamics CRM Components
import { DynamicsCrmHero } from "@/components/tech-dynamics-crm-hero";
import { DynamicsCrmFeatures } from "@/components/tech-dynamics-crm-features";
import { DynamicsCrmBenefits } from "@/components/tech-dynamics-crm-benefits";

// Custom C# MVC Components
import { CsharpMvcHero } from "@/components/tech-csharp-mvc-hero";
import { CsharpMvcFeatures } from "@/components/tech-csharp-mvc-features";
import { CsharpMvcBenefits } from "@/components/tech-csharp-mvc-benefits";

// Custom Software Testing Components
import { TestingHero } from "@/components/tech-testing-hero";
import { TestingFeatures } from "@/components/tech-testing-features";
import { TestingBenefits } from "@/components/tech-testing-benefits";

export default function TechnologyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const pageData = technologyData[slug as keyof typeof technologyData];

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

  if (slug === "angularjs") {
    return (
      <>
        <Header />
        <main className="pt-[0px] bg-[#09090b]">
          <AngularHero />
          <AngularFeatures />
          <AngularBenefits />
        </main>
        <Footer />
      </>
    );
  }

  if (slug === "reactjs") {
    return (
      <>
        <Header />
        <main className="pt-[0px] bg-[#000000]">
          <ReactHero />
          <ReactFeatures />
          <ReactBenefits />
        </main>
        <Footer />
      </>
    );
  }

  if (slug === "vuejs") {
    return (
      <>
        <Header />
        <main className="pt-[0px] bg-[#0c1322]">
          <VueHero />
          <VueFeatures />
          <VueBenefits />
        </main>
        <Footer />
      </>
    );
  }

  if (slug === "nodejs") {
    return (
      <>
        <Header />
        <main className="pt-[0px] bg-[#0d1117]">
          <NodeHero />
          <NodeFeatures />
          <NodeBenefits />
        </main>
        <Footer />
      </>
    );
  }

  if (slug === "react-native") {
    return (
      <>
        <Header />
        <main className="pt-[0px] bg-[#0a0f1c]">
          <ReactNativeHero />
          <ReactNativeFeatures />
          <ReactNativeBenefits />
        </main>
        <Footer />
      </>
    );
  }

  if (slug === "flutter") {
    return (
      <>
        <Header />
        <main className="pt-[0px] bg-[#040b16]">
          <FlutterHero />
          <FlutterFeatures />
          <FlutterBenefits />
        </main>
        <Footer />
      </>
    );
  }

  if (slug === "ios-swift") {
    return (
      <>
        <Header />
        <main className="pt-[0px] bg-black">
          <SwiftHero />
          <SwiftFeatures />
          <SwiftBenefits />
        </main>
        <Footer />
      </>
    );
  }

  if (slug === "android") {
    return (
      <>
        <Header />
        <main className="pt-[0px] bg-[#101216]">
          <AndroidHero />
          <AndroidFeatures />
          <AndroidBenefits />
        </main>
        <Footer />
      </>
    );
  }

  if (slug === "ios") {
    return (
      <>
        <Header />
        <main className="pt-[0px] bg-[#020816]">
          <IosHero />
          <IosFeatures />
          <IosBenefits />
        </main>
        <Footer />
      </>
    );
  }

  if (slug === "php") {
    return (
      <>
        <Header />
        <main className="pt-[0px] bg-[#0b0f19]">
          <PhpHero />
          <PhpFeatures />
          <PhpBenefits />
        </main>
        <Footer />
      </>
    );
  }

  if (slug === "ruby-on-rails") {
    return (
      <>
        <Header />
        <main className="pt-[0px] bg-[#0d0708]">
          <RailsHero />
          <RailsFeatures />
          <RailsBenefits />
        </main>
        <Footer />
      </>
    );
  }

  if (slug === "java") {
    return (
      <>
        <Header />
        <main className="pt-[0px] bg-[#080d15]">
          <JavaHero />
          <JavaFeatures />
          <JavaBenefits />
        </main>
        <Footer />
      </>
    );
  }

  if (slug === "python") {
    return (
      <>
        <Header />
        <main className="pt-[0px] bg-[#0b101e]">
          <PythonHero />
          <PythonFeatures />
          <PythonBenefits />
        </main>
        <Footer />
      </>
    );
  }

  if (slug === "dotnet") {
    return (
      <>
        <Header />
        <main className="pt-[0px] bg-[#090b10]">
          <DotnetHero />
          <DotnetFeatures />
          <DotnetBenefits />
        </main>
        <Footer />
      </>
    );
  }

  if (slug === "golang") {
    return (
      <>
        <Header />
        <main className="pt-[0px] bg-[#0a0f12]">
          <GolangHero />
          <GolangFeatures />
          <GolangBenefits />
        </main>
        <Footer />
      </>
    );
  }

  if (slug === "magento") {
    return (
      <>
        <Header />
        <main className="pt-[0px] bg-[#0c0908]">
          <MagentoHero />
          <MagentoFeatures />
          <MagentoBenefits />
        </main>
        <Footer />
      </>
    );
  }

  if (slug === "mern-stack") {
    return (
      <>
        <Header />
        <main className="pt-[0px] bg-[#05080a]">
          <MernHero />
          <MernFeatures />
          <MernBenefits />
        </main>
        <Footer />
      </>
    );
  }

  if (slug === "devops-azure") {
    return (
      <>
        <Header />
        <main className="pt-[0px] bg-[#050b14]">
          <DevopsAzureHero />
          <DevopsAzureFeatures />
          <DevopsAzureBenefits />
        </main>
        <Footer />
      </>
    );
  }

  if (slug === "devops-aws") {
    return (
      <>
        <Header />
        <main className="pt-[0px] bg-[#0f1523]">
          <DevopsAwsHero />
          <DevopsAwsFeatures />
          <DevopsAwsBenefits />
        </main>
        <Footer />
      </>
    );
  }

  if (slug === "dynamics-crm") {
    return (
      <>
        <Header />
        <main className="pt-[0px] bg-[#050b14]">
          <DynamicsCrmHero />
          <DynamicsCrmFeatures />
          <DynamicsCrmBenefits />
        </main>
        <Footer />
      </>
    );
  }

  if (slug === "testing") {
    return (
      <>
        <Header />
        <main className="pt-[0px] bg-[#050608]">
          <TestingHero />
          <TestingFeatures />
          <TestingBenefits />
        </main>
        <Footer />
      </>
    );
  }

  if (slug === "csharp-mvc") {
    return (
      <>
        <Header />
        <main className="pt-[0px] bg-[#0a0710]">
          <CsharpMvcHero />
          <CsharpMvcFeatures />
          <CsharpMvcBenefits />
        </main>
        <Footer />
      </>
    );
  }

  return <PageContent title={pageData.title} subtitle={pageData.subtitle} description={pageData.description} features={pageData.features} benefits={pageData.benefits} />;
}

function PageContent({ title, subtitle, description, features, benefits }: {
  title: string;
  subtitle: string;
  description: string;
  features: { title: string; description: string }[];
  benefits: string[];
}) {
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
                Technologies
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

        {/* Description Section */}
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
                Comprehensive {title.toLowerCase()} development services
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl hover:shadow-lg transition-shadow border border-gray-100">
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
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Why Choose Us</h2>
                <p className="text-lg text-gray-600 mb-8">
                  Expert {title.toLowerCase()} development for your business
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
                    <div className="text-2xl font-semibold text-gray-900 mb-4">Technology Excellence</div>
                    <p className="text-gray-600">Industry-leading {title.toLowerCase()} solutions</p>
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
              Ready to Build with {title}?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Start your {title.toLowerCase()} project with our expert team
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
                Talk to Expert
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
  return Object.keys(technologyData).map((slug) => ({ slug }));
}
