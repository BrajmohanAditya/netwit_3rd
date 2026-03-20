"use client";

export function EsgContent() {
  return (
    <div className="flex flex-col bg-white">
      {/* What is ESG Section */}
      <section className="py-20 border-b border-gray-100">
        <div className="max-w-[1000px] mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#2d2d2d] mb-8">What is ESG?</h2>
          <div className="space-y-6 text-lg text-[#333] leading-relaxed">
            <p>
              In simple terms, ESG stands for Environmental, Social, and Governance. It is a framework that
              companies use to measure and disclose their performance in these three key areas.
            </p>
            
            <div className="space-y-6 pl-2">
              <p>
                <span className="font-bold">Environmental (E):</span> This focuses on a company&apos;s impact on the planet, 
                including aspects like energy efficiency, carbon footprint, and waste management.
              </p>
              <p>
                <span className="font-bold">Social (S):</span> This considers a company&apos;s relationships with people, 
                both within and outside the organization. It includes factors such as employee relations, 
                community engagement, and diversity and inclusion.
              </p>
              <p>
                <span className="font-bold">Governance (G):</span> This involves evaluating the systems and structures 
                that guide and control a company, including issues like executive compensation, 
                board composition, and adherence to ethical business standards.
              </p>
            </div>

            <p className="pt-4">
              ESG is often used as a set of criteria for investors to assess a company&apos;s sustainability and ethical practices.
            </p>
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="py-20 bg-[#fafafa]">
        <div className="max-w-[1000px] mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#2d2d2d] mb-8">How is ESG different from Sustainability?</h2>
          <div className="space-y-8 text-lg text-[#333] leading-relaxed">
            <p>
              On the other hand, sustainability is a broader concept. While ESG is a subset of sustainability, 
              sustainability encompasses a more comprehensive approach to balancing economic, social, and 
              environmental considerations to meet the needs of the present without compromising the ability 
              of future generations to meet their own needs. ESG is a specific lens within the broader spectrum 
              of sustainability, focusing on the business-related aspects of environmental, social, and 
              governance practices.
            </p>

            <p>
              ESG reporting refers to the disclosure of a company&apos;s performance in three key areas: 
              Environmental, Social, and Governance. It provides a framework for organizations to 
              communicate their efforts and impacts in sustainability, social responsibility, and 
              corporate governance. This reporting is aimed at informing stakeholders, including investors, 
              customers, and employees, about the company&apos;s commitment to ethical and sustainable practices. 
              ESG reporting typically involves the measurement and disclosure of various metrics, policies, 
              and initiatives related to environmental conservation, social impact, and governance structures.
            </p>
          </div>
        </div>
      </section>
      {/* Importance for Enterprises Section */}
      <section className="py-24 bg-white">
        <div className="max-w-[1000px] mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#2d2d2d] mb-8">Why ESG Reporting is important for Enterprises?</h2>
          <div className="space-y-6 text-lg text-[#333] leading-relaxed">
            <p>
              ESG Reporting has emerged as a cornerstone for enterprises seeking to fortify their commitment 
              to sustainability and responsible business practices. This imperative stems from a confluence 
              of factors, wherein Environmental, Social, and Governance considerations have become 
              integral components of corporate strategy.
            </p>
            <p>
              In an era marked by heightened scrutiny of corporate behaviour, ESG Reporting serves as a 
              mechanism for enterprises to exhibit transparency and accountability. Through the systematic 
              disclosure of key metrics related to environmental impact, social responsibility initiatives, 
              and governance structures, companies can effectively communicate their dedication to 
              ethical and sustainable practices.
            </p>
            <p>
              The strategic importance of ESG Reporting is underscored by its role in fostering stakeholder 
              trust. Investors, customers, and employees increasingly demand comprehensive insights into a 
              company&apos;s sustainability efforts. By leveraging sophisticated analytics and reporting 
              tools, enterprises can provide nuanced, data-driven narratives that resonate with 
              discerning stakeholders.
            </p>
            <p>
              Technology, as a catalyst for precision and efficiency, plays a pivotal role in the ESG 
              reporting landscape. Automated data collection and analysis not only enhance the accuracy 
              of reported metrics but also streamline the overall reporting process. Real-time reporting, 
              facilitated by advanced technologies, enables enterprises to stay agile in adapting to 
              evolving sustainability standards, demonstrating a commitment to continuous improvement.
            </p>
            <p>
              For enterprises navigating the complex intersection of profitability and responsibility, 
              ESG Reporting becomes a strategic imperative. Beyond regulatory compliance, it positions 
              businesses to attract socially responsible investors, access a conscientious customer base, 
              and fortify their brand in a marketplace increasingly shaped by values and ethics.
            </p>
            <p>
              In conclusion, the adoption of ESG Reporting, enriched by technological integration, is not 
              merely a compliance exercise; it is a strategic initiative that aligns enterprises with the 
              evolving expectations of a socially conscious world. As businesses traverse this landscape, 
              ESG Reporting emerges not only as a necessity but as a beacon guiding enterprises toward 
              a future where sustainable practices and financial success coalesce seamlessly.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
