import { services, servicesList } from "@/config/menu-data";
import { ServicePage } from "@/components/service-page";

export function generateStaticParams() {
  return servicesList.map((service) => ({
    slug: service.slug,
  }));
}

export default function ServiceDynamicPage({ params }: { params: Promise<{ slug: string }> }) {
  return <ServicePage type="service" data={services as Record<string, unknown>} params={params} />;
}
