"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const toolsSlide1 = [
  { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
  { name: "Bitbucket", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bitbucket/bitbucket-original.svg" },
  { name: "Azure DevOps", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg" },
  { name: "CodePipeline", icon: "https://img.icons8.com/color/48/000000/amazon-web-services.png" },
  { name: "CodeCommit", icon: "https://img.icons8.com/color/48/000000/git.png" },
  { name: "Azure", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg" },
  { name: "CentOS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/centos/centos-original.svg" },
  { name: "Chef", icon: "https://img.icons8.com/color/48/000000/chef.png" },
  { name: "Datadog", icon: "https://img.icons8.com/color/48/000000/datadog.png" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
  { name: "Amazon ECS", icon: "https://img.icons8.com/color/48/000000/amazon-web-services.png" },
  { name: "Elastic", icon: "https://img.icons8.com/color/48/000000/elasticsearch.png" },
  { name: "ELK Stack", icon: "https://img.icons8.com/color/48/000000/elasticsearch.png" },
  { name: "Beats", icon: "https://img.icons8.com/color/48/000000/audio-wave.png" },
  { name: "Google Cloud", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg" },
  { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" },
  { name: "GitLab", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitlab/gitlab-original.svg" },
  { name: "Cisco", icon: "https://img.icons8.com/color/48/000000/cisco-router.png" },
  { name: "GKE", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg" },
  { name: "Gloo", icon: "https://img.icons8.com/color/48/000000/api-settings.png" },
  { name: "Gradle", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gradle/gradle-original.svg" },
  { name: "Grafana", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/grafana/grafana-original.svg" },
  { name: "Helm", icon: "https://img.icons8.com/color/48/000000/helm.png" },
  { name: "IIS", icon: "https://img.icons8.com/windows/50/000000/server.png" },
  { name: "Jenkins", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg" },
  { name: "JUnit", icon: "https://img.icons8.com/color/48/000000/java.png" },
  { name: "Kibana", icon: "https://img.icons8.com/color/48/000000/kibana.png" },
  { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg" },
  { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" },
  { name: "Logstash", icon: "https://img.icons8.com/color/48/000000/logstash.png" }
];

const toolsSlide2 = [
  { name: "Maven", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/maven/maven-original.svg" },
  { name: "ModSecurity", icon: "https://img.icons8.com/color/48/000000/security-shield.png" },
  { name: "Nginx", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nginx/nginx-original.svg" },
  { name: "NPM", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg" },
  { name: "Oracle", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oracle/oracle-original.svg" },
  { name: "OpenShift", icon: "https://img.icons8.com/color/48/000000/openshift.png" },
  { name: "Prometheus", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prometheus/prometheus-original.svg" },
  { name: "Site24x7", icon: "https://img.icons8.com/color/48/000000/website.png" },
  { name: "SonarQube", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sonarqube/sonarqube-original.svg" },
  { name: "Terraform", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/terraform/terraform-original.svg" },
  { name: "Windows", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/windows8/windows8-original.svg" },
  { name: "Ansible", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ansible/ansible-original.svg" },
  { name: "Apache", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apache/apache-original.svg" },
  { name: "Tomcat", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tomcat/tomcat-original.svg" },
  { name: "ArgoCD", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/argocd/argocd-original.svg" },
  { name: "AWS CodeBuild", icon: "https://img.icons8.com/color/48/000000/amazon-web-services.png" }
];

const slides = [toolsSlide1, toolsSlide2];

export function ToolsSlider() {
  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 md:px-16 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-[40px] font-bold text-gray-900 mb-6">
            DevOps Tools <span className="text-[var(--color-primary)]">and Platforms</span>
          </h2>
          <p className="text-[#6b7280] text-[16px] lg:text-[18px]">
            Our expert team utilizes cutting-edge automation tools & platforms to guarantee a successful DevOps journey.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Slider Controls (Absolute Left/Right arrows) */}
          <button 
            onClick={prevSlide}
            className="absolute -left-2 md:-left-6 lg:-left-12 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 transition-all shadow-sm z-20"
          >
            <ChevronLeft className="w-6 h-6" strokeWidth={1.5} />
          </button>

          <button 
            onClick={nextSlide}
            className="absolute -right-2 md:-right-6 lg:-right-12 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 transition-all shadow-sm z-20"
          >
            <ChevronRight className="w-6 h-6" strokeWidth={1.5} />
          </button>

          {/* Slider Slides Container */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeSlide * 100}%)` }}
            >
              {slides.map((slide, sIdx) => (
                <div key={sIdx} className="w-full flex-shrink-0 px-2 lg:px-4">
                  {/* Flex wrapping container to ensure exact centering on rows missing a full 10 columns */}
                  <div className="flex flex-wrap justify-center gap-3 lg:gap-4">
                    {slide.map((tool, idx) => (
                      <div
                        key={idx}
                        className="flex flex-col items-center justify-center h-[90px] w-[calc(33.33%-0.75rem)] md:w-[calc(20%-0.75rem)] lg:w-[calc(10%-0.9rem)] bg-[#fcfcfc] hover:bg-white rounded-[14px] border border-gray-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all gap-2.5 p-2 text-center group cursor-pointer relative"
                      >
                        <img 
                          src={tool.icon} 
                          alt={tool.name} 
                          className="w-8 h-8 object-contain transition-transform group-hover:scale-110"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            if (e.currentTarget.nextElementSibling) {
                              (e.currentTarget.nextElementSibling as HTMLElement).style.display = 'flex';
                            }
                          }}
                        />
                        <div className="w-8 h-8 rounded-lg bg-gray-100 hidden group-hover:bg-[var(--color-primary)] transition-colors items-center justify-center text-xs font-bold text-gray-500 group-hover:text-white uppercase shadow-sm">
                          {tool.name.substring(0, 2)}
                        </div>
                        <span className="text-[11px] lg:text-[12px] font-semibold text-gray-600 group-hover:text-gray-900 leading-tight transition-colors">
                          {tool.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-3 mt-14">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveSlide(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                activeSlide === idx ? "bg-[var(--color-primary)] opacity-90" : "bg-blue-300 opacity-60"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
