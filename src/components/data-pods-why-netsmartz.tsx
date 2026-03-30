"use client";

import Image from "next/image";

export function DataPodsWhyNetwit() {
  const reasons = [
    { title: "25+ years of enterprise delivery experience" },
    { title: "Deep engineering expertise across data, analytics, and AI" },
    { title: "1,500+ global engineers" },
    { title: "Offshore execution with onshore accountability" },
    { title: "Outcome-driven delivery, not staff augmentation" }
  ];

  return (
    <section className="bg-white py-24 px-6 w-full flex flex-col items-center">
      <div className="max-w-[1100px] w-full text-center mb-16">
        <h2 className="text-[26px] md:text-3xl font-bold text-text mb-8">
          Why Netwit?
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {reasons.map((reason, idx) => (
            <div
              key={idx}
              className="bg-primary/5 border border-primary/20 rounded-[4px] p-5 flex items-center justify-center text-center shadow-sm min-h-[120px] transition-shadow hover:shadow-md"
            >
              <p className="text-[#333] font-semibold text-[13px] leading-[1.35]">
                {reason.title}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Identical contact form structure from AI Pods */}
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
            {/* Deep dark overlay to ensure text readability matching image */}
            <div className="absolute inset-0 bg-black/60 mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col h-full justify-center">
            <div>
              <h2 className="text-3xl md:text-[36px] font-bold leading-[1.15] tracking-tight mb-8">
                Turn AI Ambition into<br className="hidden md:block" /> Production-Ready<br className="hidden md:block" /> Outcomes
              </h2>
              <p className="text-[14px] md:text-[15px] font-bold text-white leading-relaxed mb-6 max-w-[420px]">
                Start with a 20-minute Data Readiness Assessment to uncover data reliability, governance, and control gaps that could block AI ROI and understand the fastest path to stabilization.
              </p>
            </div>

            <div className="mt-8">
              <p className="font-bold text-[14px] leading-relaxed">
                To reserve your slot, fill out the form or email us at<br />
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
                className="w-full px-4 py-[13px] bg-white border border-gray-300 rounded-[4px] text-[13px] placeholder:text-gray-400 focus:outline-none focus:border-primary transition-colors resize-none"
              ></textarea>
            </div>

            {/* Consent Checkbox */}
            <div className="flex items-start gap-3 pt-3">
              <input
                type="checkbox"
                id="consent_netsmartz"
                className="mt-1 flex-shrink-0 cursor-pointer accent-primary border-gray-300 rounded-sm"
                required
              />
              <label htmlFor="consent_netsmartz" className="text-[10px] text-gray-500 leading-[14px]">
                By checking this box, I consent to receive text messages Conversational purpose from Netsmartz. You can reply &quot;STOP&quot; at any time to opt-out. Message and data rates may apply. For more information, please refer to our Privacy Policy and SMS Terms and Conditions on our website.
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
