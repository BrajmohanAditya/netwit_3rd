import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { SecureSmartzHero } from "@/components/secure-smartz-hero";
import { SecureSmartzStats } from "@/components/secure-smartz-stats";
import { SecureSmartzFeatures } from "@/components/secure-smartz-features";
import { SecureSmartzServices } from "@/components/secure-smartz-services";

export default function SecureSmartzPage() {
  return (
    <div className="bg-[#0A0A0B] min-h-screen text-white w-full overflow-x-hidden font-sans">
      <Header />
      <main className="pt-[80px]">
        <SecureSmartzHero />
        <SecureSmartzStats />
        <SecureSmartzFeatures />
        <SecureSmartzServices />
      </main>
      <Footer />
    </div>
  );
}
