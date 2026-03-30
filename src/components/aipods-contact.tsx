"use client";

import Image from "next/image";

export function AiPodsContact() {
  return (
    <section className="bg-gray-50 py-24 px-6 w-full flex justify-center items-center">
      <div className="max-w-[1100px] w-full bg-white rounded-xl overflow-hidden shadow-[0_4px_25px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col md:flex-row min-h-[500px]">
        
        {/* Left Side: Image + Text */}
        <div className="md:w-1/2 relative p-10 flex flex-col justify-between text-white overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 w-full h-full z-0">
            <Image 
              src="/images/contact_bg.png" 
              alt="Handshake" 
              fill 
              className="object-cover object-center"
            />
            {/* Deep dark overlay to ensure text readability matching image */}
            <div className="absolute inset-0 bg-black/60 mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20"></div>
          </div>
          
          {/* Content */}
          <div className="relative z-10 flex flex-col h-full justify-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
                Launch Production-<br/>Ready AI Faster with<br/>Netsmartz AI Pods
              </h2>
              <p className="text-[17px] text-gray-200 leading-relaxed mb-12 max-w-[400px]">
                Get a complimentary AI Pod discovery session to assess readiness, execution gaps, and delivery timelines.
              </p>
            </div>

            <div className="mt-auto pt-8">
              <p className="font-semibold text-lg">
                Fill out the form or email us at<br/>
                <a href="mailto:sales@netsmartz.com" className="text-primary hover:underline">sales@netsmartz.com</a>
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="md:w-1/2 p-10 md:p-12 bg-white">
          <h3 className="text-2xl font-bold text-text mb-8">
            Connect with Us Today!
          </h3>

          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            {/* Name */}
            <div>
              <input 
                type="text" 
                placeholder="Name*" 
                className="w-full px-4 py-3 border border-gray-300 rounded-[4px] text-sm focus:outline-none focus:border-primary transition-colors"
                required
              />
            </div>

            {/* Email & Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <input 
                type="email" 
                placeholder="Email Address*" 
                className="w-full px-4 py-3 border border-gray-300 rounded-[4px] text-sm focus:outline-none focus:border-primary transition-colors"
                required
              />
              <div className="relative flex items-center border border-gray-300 rounded-[4px] focus-within:border-primary transition-colors overflow-hidden">
                <div className="flex items-center justify-center px-3 bg-gray-50 border-r border-gray-300 h-full">
                  <span className="text-lg">🇺🇸</span>
                  <svg className="w-3 h-3 ml-1 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                <input 
                  type="tel" 
                  placeholder="Phone Number*" 
                  className="w-full px-4 py-3 text-sm focus:outline-none"
                  required
                />
              </div>
            </div>

            {/* Company */}
            <div>
              <input 
                type="text" 
                placeholder="Company" 
                className="w-full px-4 py-3 border border-gray-300 rounded-[4px] text-sm focus:outline-none focus:border-primary transition-colors"
                required
              />
            </div>

            {/* Requirements */}
            <div>
              <textarea 
                placeholder="Tell us more about your requirements" 
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-[4px] text-sm focus:outline-none focus:border-primary transition-colors resize-none"
              ></textarea>
            </div>

            {/* Consent Checkbox */}
            <div className="flex items-start gap-2 pt-2">
              <input 
                type="checkbox" 
                id="consent" 
                className="mt-1 w-3.5 h-3.5 flex-shrink-0 cursor-pointer accent-primary"
                required
              />
              <label htmlFor="consent" className="text-[10px] text-gray-500 leading-tight">
                By checking this box, I consent to receive text messages Conversational purpose from Netsmartz. You can reply &quot;STOP&quot; at any time to opt-out. Message and data rates may apply. For more information, please refer to our Privacy Policy and SMS Terms and Conditions on our website.
              </label>
            </div>

            {/* Bottom Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4">
              <button 
                type="submit" 
                className="bg-primary hover:bg-primary-600 text-white font-bold py-2.5 px-8 rounded-[4px] text-sm transition-colors w-full sm:w-auto"
              >
                Submit
              </button>

              {/* Dummy reCAPTCHA */}
              <div className="flex flex-col border border-gray-200 rounded-[4px] bg-[#fdfdfd] p-3 w-full sm:w-[260px] shadow-sm">
                 <div className="flex items-center justify-between">
                   <div className="flex items-center gap-3">
                     <input type="checkbox" className="w-6 h-6 border-2 border-gray-300 rounded-sm cursor-pointer" />
                     <span className="text-[13px] text-gray-700 font-medium">I'm not a robot</span>
                   </div>
                   <div className="flex flex-col items-center">
                     {/* eslint-disable-next-line @next/next/no-img-element */}
                     <img src="https://www.gstatic.com/recaptcha/api2/logo_48.png" width={24} height={24} alt="reCAPTCHA" />
                     <div className="text-[8px] text-gray-500 mt-1 whitespace-nowrap">
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
