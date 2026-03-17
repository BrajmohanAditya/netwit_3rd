import EnterprisePage from "@/components/enterprise-page";

export default function CyberSmartzPage() {
  const pageData = {
    title: "CyberSmartz",
    subtitle: "AI for All Businesses",
    description: "Democratize artificial intelligence with CyberSmartz - bringing powerful AI capabilities to businesses of all sizes. Our solutions help organizations leverage machine learning, automation, and intelligent systems to drive growth and innovation.",
    features: [
      { title: "AI Automation", description: "Streamline operations with intelligent automation", icon: "🤖" },
      { title: "Predictive Analytics", description: "Data-driven forecasting and insights", icon: "📈" },
      { title: "Smart Decision Systems", description: "AI-powered decision making tools", icon: "🧠" },
      { title: "Custom AI Models", description: "Tailored machine learning solutions", icon: "⚙️" },
    ],
    benefits: [
      "Faster decision making",
      "Cost reduction through automation",
      "Improved accuracy",
      "Scalable AI capabilities",
      "Competitive advantage",
    ],
  };

  return <EnterprisePage {...pageData} />;
}
