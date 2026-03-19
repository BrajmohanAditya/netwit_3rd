import React from "react";
import { Calculator, Cloud, FileText, Receipt, Users, PieChart } from "lucide-react";

const services = [
  {
    title: "Day-to-day Accounting",
    icon: <Calculator className="w-5 h-5 text-white stroke-[2]" />,
    description: "We leverage AI in accounting software to manage your daily financial transactions, ensuring every entry is accurate, categorized, and aligned with your business goals for seamless financial tracking."
  },
  {
    title: "Virtual Bookkeeping",
    icon: <Cloud className="w-5 h-5 text-white stroke-[2]" />,
    description: "Our cloud-based business bookkeeping software for accounting firms gives you 24/7 access to your financial data, with real-time updates and secure remote collaboration."
  },
  {
    title: "Invoice Management",
    icon: <FileText className="w-5 h-5 text-white stroke-[2]" />,
    description: "We handle the entire invoicing process—from creation to delivery and follow-ups as a part of our accounting service, ensuring timely payments and improved cash flow for your business."
  },
  {
    title: "Accounts Receivable / Payable",
    icon: <Receipt className="w-5 h-5 text-white stroke-[2]" />,
    description: "Stay on top of your cash flow with automated AI in accounting workflows for efficient tracking of incoming payments and outgoing expenses, reducing delays, and improving vendor relationships."
  },
  {
    title: "Payroll Management",
    icon: <Users className="w-5 h-5 text-white stroke-[2]" />,
    description: "We ensure your employees are paid accurately and on time while handling tax deductions, benefits, and compliance with local labor laws enabled by secure AI bookkeeping software."
  },
  {
    title: "Monthly Reports",
    icon: <PieChart className="w-5 h-5 text-white stroke-[2]" />,
    description: "Receive detailed, easy-to-understand AI-generated financial reports every month, including profit and loss statements, balance sheets, and cash flow summaries, delivered through top accounting software in the USA."
  }
];

export default function ComprehensiveServices() {
  return (
    <section className="py-24 bg-[#fafafa]">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-[28px] md:text-[36px] font-bold text-[#111827] mb-6">
            <span className="text-[#ea580c]">Comprehensive SaaS</span> Accounting Services for Businesses
          </h2>
          <p className="text-[14px] md:text-[15px] text-[#4b5563] leading-relaxed">
            We provide extensive SaaS accounting services tailored to your business model and growth stage. Whether you're a startup or an established SaaS company optimizing your margins, we've got you covered. Our accounting services for businesses include:
          </p>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div 
              key={idx}
              className="bg-white border border-gray-100 rounded-2xl p-8 flex flex-col shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow"
            >
              <div className="mb-6">
                <div className="w-12 h-12 rounded-full bg-[#ea580c] flex items-center justify-center shadow-sm">
                  {service.icon}
                </div>
              </div>
              
              <h3 className="text-[17px] font-bold text-[#ea580c] mb-4">
                {service.title}
              </h3>
              
              <p className="text-[14px] leading-[1.8] text-[#4b5563]">
                {service.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
