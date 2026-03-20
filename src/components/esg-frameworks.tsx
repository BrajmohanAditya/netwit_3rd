"use client";

export function EsgFrameworks() {
  return (
    <div className="flex flex-col bg-white">
      {/* ESG Reporting Frameworks Section */}
      <section className="py-24 border-b border-gray-100">
        <div className="max-w-[1000px] mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#2d2d2d] mb-8">ESG Reporting Frameworks</h2>
          <div className="space-y-6 text-lg text-[#333] leading-relaxed">
            <p>
              ESG reporting frameworks provide structured guidelines for companies to disclose their 
              environmental, social, and governance performance. These frameworks help organizations 
              communicate their sustainability efforts, risks, and opportunities to stakeholders. 
              Some of the most widely recognized ESG reporting frameworks include:
            </p>
            
            <ul className="space-y-4 pt-4">
              <li>
                <span className="font-bold">Global Reporting Initiative (GRI):</span> GRI provides a comprehensive framework 
                for sustainability reporting, focusing on economic, environmental, and social impacts.
              </li>
              <li>
                <span className="font-bold">International Financial Reporting Standards (IFRS):</span> IFRS integrates ESG 
                considerations into financial reporting, enhancing the reliability of non-financial disclosures.
              </li>
              <li>
                <span className="font-bold">Sustainability Accounting Standards Board (SASB):</span> SASB offers 
                industry-specific standards for disclosing financially material sustainability information.
              </li>
              <li>
                <span className="font-bold">Enterprise Sustainability Reporting Standard (ESRS):</span> ESRS aims to provide 
                a globally consistent framework for sustainability reporting, harmonizing existing standards.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Role Section */}
      <section className="py-24 bg-[#fafafa]">
        <div className="max-w-[1000px] mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#2d2d2d] mb-8 whitespace-nowrap">
            Role of GRI, IFRS, SASB AND ESRS
          </h2>
          <div className="space-y-8 text-lg text-[#333] leading-relaxed">
            <p>
              GRI (Global Reporting Initiative), IFRS (International Financial Reporting Standards), 
              SASB (Sustainability Accounting Standards Board), and ESRS (Enterprise Sustainability 
              Reporting Standard) play significant roles in advancing ESG reporting by providing 
              frameworks, standards, and guidelines. Here&apos;s how each contributes to the cause:
            </p>

            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-bold text-[#2d2d2d] mb-4">Global Reporting Initiative (GRI)</h3>
                <p>
                  GRI is a pioneer in sustainability reporting, providing a comprehensive framework for 
                  organizations to disclose their economic, environmental, and social impacts. GRI 
                  standards offer a globally recognized and widely used set of guidelines for 
                  sustainability reporting. They promote transparency, comparability, and credibility 
                  in ESG reporting by providing a standardized structure for organizations to disclose 
                  relevant information. GRI encourages organizations to identify and report on 
                  material issues that can impact their sustainability performance.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#2d2d2d] mb-4">International Financial Reporting Standards (IFRS)</h3>
                <p>
                  Contribution: IFRS contributes to ESG reporting by incorporating sustainability 
                  considerations into financial reporting, bridging the gap between financial and 
                  non-financial information. IFRS emphasizes the integration of material environmental, 
                  social, and governance information into financial reports. It enhances the 
                  reliability and consistency of ESG disclosures, making it easier for investors and 
                  stakeholders to evaluate a company&apos;s overall performance. IFRS aims to align 
                  financial and sustainability reporting to provide a more holistic view of a 
                  company&apos;s value creation.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#2d2d2d] mb-4">Sustainability Accounting Standards Board (SASB)</h3>
                <p>
                  SASB focuses on industry-specific ESG standards, providing a framework that helps 
                  companies identify and report financially material sustainability information. 
                  SASB standards are industry-tailored, recognizing that material ESG issues vary 
                  across sectors. By offering specific metrics for each industry, SASB enhances the 
                  relevance and comparability of ESG data, making it more useful for investors in 
                  their decision-making processes. SASB standards help companies prioritize ESG 
                  issues that are most impactful within their specific industry context.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#2d2d2d] mb-4">Enterprise Sustainability Reporting Standard (ESRS)</h3>
                <p>
                  ESRS is a proposed international standard for sustainability reporting, aiming to 
                  provide a globally consistent framework for organizations. ESRS seeks to 
                  harmonize existing standards, reducing complexity and encouraging global 
                  consistency in sustainability reporting. It aims to simplify the reporting process, 
                  making it more accessible for organizations of various sizes and industries. By 
                  providing a unified standard, ESRS aims to enhance the comparability and 
                  reliability of sustainability data across different regions and sectors.
                </p>
              </div>
            </div>

            <p className="pt-8 italic text-base text-[#666]">
              In summary, GRI, IFRS, SASB, and ESRS contribute to the cause of ESG reporting by 
              offering frameworks and standards that enhance the consistency, transparency, 
              and relevance of sustainability disclosures. These initiatives help organizations 
              align with best practices, meet stakeholder expectations, and foster a more 
              sustainable and responsible business environment.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
