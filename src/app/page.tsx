import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Statistics } from "@/components/statistics";
import { ServiceCards } from "@/components/service-cards";
import { Testimonials } from "@/components/testimonials";
import { StrategyCTA } from "@/components/strategy-cta";
import { TrustedBy } from "@/components/trusted-by";
import { GlobalTechCenters } from "@/components/global-tech-centers";
import { ProductEcosystem } from "@/components/product-ecosystem";
import { Partners } from "@/components/partners";
import { FAQ } from "@/components/faq";
import { ContactForm } from "@/components/contact-form";
import { Footer } from "@/components/footer";
import { FloatingElements } from "@/components/floating-elements";

export default function Home() {
  return (
    <>
      <Header />
      <main className="overflow-visible">
        <Hero />
        <Statistics />
        <ServiceCards />
        <Testimonials />
        <StrategyCTA />
        <TrustedBy />
        <GlobalTechCenters />
        <ProductEcosystem />
        <Partners />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
      <FloatingElements />
    </>
  );
}
