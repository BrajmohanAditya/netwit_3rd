import { solutions, solutionsList } from "@/config/menu-data";
import { ServicePage } from "@/components/service-page";

export function generateStaticParams() {
  return solutionsList.map((solution) => ({
    slug: solution.slug,
  }));
}

export default function SolutionDynamicPage({ params }: { params: Promise<{ slug: string }> }) {
  return <ServicePage type="solution" data={solutions as Record<string, unknown>} params={params} />;
}
