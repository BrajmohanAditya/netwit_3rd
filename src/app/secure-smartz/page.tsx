import EnterprisePage from "@/components/enterprise-page";

export default function SecureSmartzPage() {
  const pageData = {
    title: "SecureSmartz",
    subtitle: "Advanced Cybersecurity Solutions",
    description: "Protect your business with comprehensive cybersecurity solutions designed for the modern enterprise. SecureSmartz provides end-to-end security services that safeguard your digital assets, data, and infrastructure from evolving cyber threats.",
    features: [
      { title: "Threat Detection", description: "AI-powered real-time threat monitoring and detection", icon: "🔍" },
      { title: "Risk Assessment", description: "Comprehensive vulnerability assessments and risk analysis", icon: "📊" },
      { title: "Compliance Security", description: "Regulatory compliance management (GDPR, HIPAA, SOC 2)", icon: "✅" },
      { title: "Incident Response", description: "24/7 rapid incident response and breach containment", icon: "🚨" },
    ],
    benefits: [
      "Complete threat protection",
      "Regulatory compliance",
      "Reduced security incidents",
      "Business continuity",
      "Customer trust",
    ],
  };

  return <EnterprisePage {...pageData} />;
}
