import EnterprisePage from "@/components/enterprise-page";

export default function DataSmartz360Page() {
  const pageData = {
    title: "DataSmartz360",
    subtitle: "Data & Analytics Solutions",
    description: "Unlock the power of your data with DataSmartz360 - comprehensive data and analytics solutions that transform raw data into actionable insights. Our team helps organizations build robust data infrastructure and derive meaningful business intelligence.",
    features: [
      { title: "Data Engineering", description: "Scalable data pipelines and architecture design", icon: "🏗️" },
      { title: "BI Dashboards", description: "Interactive business intelligence dashboards", icon: "📊" },
      { title: "Data Insights", description: "Advanced analytics and visualization", icon: "🔍" },
      { title: "Data Governance", description: "Quality management and security", icon: "🛡️" },
    ],
    benefits: [
      "Data-driven decisions",
      "Improved data quality",
      "Real-time insights",
      "Better business outcomes",
      "Scalable data infrastructure",
    ],
  };

  return <EnterprisePage {...pageData} />;
}
