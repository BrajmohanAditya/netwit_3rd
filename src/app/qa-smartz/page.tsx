import EnterprisePage from "@/components/enterprise-page";

export default function QASmartzPage() {
  const pageData = {
    title: "QASmartz",
    subtitle: "Quality Assurance & Automation Testing",
    description: "Deliver flawless software with QASmartz - your partner in quality assurance and automation testing. We help organizations ensure software quality through comprehensive testing strategies, automation, and continuous quality improvement.",
    features: [
      { title: "Test Automation", description: "Selenium, Cypress, and Playwright automation frameworks", icon: "🔧" },
      { title: "Performance Testing", description: "Load, stress, and endurance testing", icon: "⚡" },
      { title: "Bug Tracking", description: "Integrated bug tracking and management", icon: "🐛" },
      { title: "Continuous Testing", description: "CI/CD pipeline integration for ongoing quality", icon: "🔄" },
    ],
    benefits: [
      "70% reduction in testing time",
      "99.9% defect detection rate",
      "Faster time-to-market",
      "Reduced testing costs",
      "Improved test coverage",
    ],
  };

  return <EnterprisePage {...pageData} />;
}
