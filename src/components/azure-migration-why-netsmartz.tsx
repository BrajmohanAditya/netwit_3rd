"use client";

import Image from "next/image";
import { ListChecks, Award, ShieldCheck, ClipboardCheck, Target } from "lucide-react";

export function AzureMigrationWhyNetwit() {
  const reasons = [
    {
      title: "Azure migration partner with AMMP-eligible delivery",
      icon: <ListChecks className="w-[30px] h-[30px] mb-4 text-[#555] stroke-[1.2]" />
    },
    {
      title: "Proven Azure migration and modernization expertise",
      icon: <Award className="w-[30px] h-[30px] mb-4 text-[#555] stroke-[1.2]" />
    },
    {
      title: "Security-led execution aligned to enterprise risk requirements",
      icon: <ShieldCheck className="w-[30px] h-[30px] mb-4 text-[#555] stroke-[1.2]" />
    },
    {
      title: "End-to-end ownership from assessment through optimization",
      icon: <ClipboardCheck className="w-[30px] h-[30px] mb-4 text-[#555] stroke-[1.2]" />
    },
    {
      title: "Clear accountability before, during, and after go-live",
      icon: <Target className="w-[30px] h-[30px] mb-4 text-[#555] stroke-[1.2]" />
    }
  ];

  return (
    <section className="bg-white py-24 px-6 w-full flex flex-col items-center">
      <div className="max-w-[1100px] w-full text-center mb-16">
        <h2 className="text-[26px] md:text-[32px] font-bold text-text mb-10 tracking-tight">
          Why Netwit?
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-3">
          {reasons.map((reason, idx) => (
            <div
              key={idx}
              className="bg-primary/5 border border-primary/20 rounded-[4px] py-8 px-4 flex flex-col items-center justify-start text-center shadow-sm min-h-[160px] transition-shadow hover:shadow-md"
            >
              {reason.icon}
              <p className="text-[#333] font-semibold text-[13px] leading-[1.35]">
                {reason.title}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Identical contact form structure from Data Pods */}
      <div className="max-w-[1100px] w-full bg-[#fdfdfd] rounded-xl overflow-hidden shadow-[0_4px_25px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col md:flex-row min-h-[500px]">
        {/* Left Side: Image + Text */}
        <div className="md:w-1/2 relative p-10 md:p-14 border-r border-gray-100 flex flex-col justify-between text-white overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 w-full h-full z-0 bg-[#000]">
            <Image
              src="/images/contact_bg.png"
              alt="Handshake"
              fill
              className="object-cover object-center opacity-70 mix-blend-screen"
            />
            {/* Deep dark overlay to ensure text readability */}
            <div className="absolute inset-0 bg-black/60 mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col h-full justify-center">
            <div>
              <h2 className="text-3xl md:text-[38px] font-bold leading-[1.1] tracking-tight mb-8">
                See How Netwit<br className="hidden md:block" /> Can Work For You
              </h2>
              <p className="text-[14px] md:text-[15.5px] font-bold text-white leading-relaxed mb-6 max-w-[420px]">
                Access a complimentary, security-led Azure readiness assessment backed by Microsoft AMMP funding.
              </p>
            </div>

            <div className="mt-6">
              <p className="font-bold text-[14.5px] leading-relaxed">
                Please fill out the form or send us an email to<br />
                <a href="mailto:sales@netsmartz.com" className="text-primary hover:text-primary-600 transition-colors underline decoration-primary/30 underline-offset-4">sales@netsmartz.com</a>
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="md:w-1/2 p-10 md:p-12 bg-[#fdfdfd]">
          <h3 className="text-[20px] font-bold text-text mb-8">
            Connect with Us Today!
          </h3>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            {/* Name */}
            <div>
              <input
                type="text"
                placeholder="Name*"
                className="w-full px-4 py-[13px] bg-white border border-gray-300 rounded-[4px] text-[13px] placeholder:text-gray-400 focus:outline-none focus:border-primary transition-colors"
                required
              />
            </div>

            {/* Email & Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="email"
                placeholder="Email Address*"
                className="w-full px-4 py-[13px] bg-white border border-gray-300 rounded-[4px] text-[13px] placeholder:text-gray-400 focus:outline-none focus:border-primary transition-colors"
                required
              />
              <div className="relative flex bg-white items-center border border-gray-300 rounded-[4px] focus-within:border-primary transition-colors overflow-hidden">
                <div className="flex items-center justify-center px-4 bg-gray-50 border-r border-gray-300 h-full">
                  <span className="text-[17px] leading-none">🇺🇸</span>
                </div>
                <input
                  type="tel"
                  placeholder="Phone Number*"
                  className="w-full px-4 bg-transparent py-[13px] text-[13px] placeholder:text-gray-400 focus:outline-none"
                  required
                />
              </div>
            </div>

            {/* Company */}
            <div>
              <input
                type="text"
                placeholder="Company"
                className="w-full px-4 py-[13px] bg-white border border-gray-300 rounded-[4px] text-[13px] placeholder:text-gray-400 focus:outline-none focus:border-primary transition-colors"
                required
              />
            </div>

            {/* Requirements */}
            <div>
              <textarea
                placeholder="Tell us more about your requirements"
                rows={4}
                className="w-full px-4 py-[13px] bg-white border border-gray-300 rounded-[4px] text-[13px] placeholder:text-gray-400 focus:outline-none focus:border-accent-gold transition-colors resize-none"
              ></textarea>
            </div>

            {/* Consent Checkbox */}
            <div className="flex items-start gap-3 pt-3">
              <input
                type="checkbox"
                id="consent_netsmartz_az2"
                className="mt-1 flex-shrink-0 cursor-pointer accent-primary border-gray-300 rounded-sm"
                required
              />
              <label htmlFor="consent_netsmartz_az2" className="text-[10px] text-gray-500 leading-[14px]">
                By checking this box, I consent to receive text messages Conversational purpose from Netwit. You can reply &quot;STOP&quot; at any time to opt-out. Message and data rates may apply. For more information, please refer to our Privacy Policy and SMS Terms and Conditions on our website.
              </label>
            </div>

            {/* Bottom Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-5 pt-5">
              <button
                type="submit"
                className="bg-primary hover:bg-primary-600 text-white font-bold py-3 px-10 rounded-[4px] text-[14px] transition-all w-full sm:w-auto shadow-sm"
              >
                Submit
              </button>

              {/* Dummy reCAPTCHA */}
              <div className="flex flex-col border border-gray-200 rounded-[4px] bg-[#fdfdfd] p-3 w-full sm:w-[230px] shadow-sm">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <input type="checkbox" className="w-[22px] h-[22px] border-2 border-gray-300 bg-white rounded-sm cursor-pointer hover:border-gray-400 transition-colors" />
                    <span className="text-[13px] text-gray-700 font-medium tracking-tight">I'm not a robot</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <img src="https://www.gstatic.com/recaptcha/api2/logo_48.png" width={26} height={26} alt="reCAPTCHA" className="opacity-80" />
                    <div className="text-[8px] text-gray-500 mt-0.5 whitespace-nowrap">
                      Privacy - Terms
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </form>
        </div>
      </div>
    </section>
  );
}
