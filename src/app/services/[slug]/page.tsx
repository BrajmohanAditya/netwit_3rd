import { services, servicesList } from "@/config/menu-data";
import { ServicePage } from "@/components/service-page";

export function generateStaticParams() {
  const customPages = [
    'accounting-services',
    'customer-support',
    'devops',
    'global-capability-center',
    'marketing-services',
    'qa-automation-testing',
    'sales-acceleration'
  ];

  return servicesList
    .filter((service) => !customPages.includes(service.slug))
    .map((service) => ({
      slug: service.slug,
    }));
}

export default function ServiceDynamicPage({ params }: { params: Promise<{ slug: string }> }) {
  return <ServicePage type="service" data={services as Record<string, unknown>} params={params} />;
}
