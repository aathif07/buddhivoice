"use client"; // Required for useState and onClick in Next.js

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import {
  Check,
  Sparkles,
  Zap, // Using Zap for a generic "Build" icon placeholder
  MonitorUp, // Using MonitorUp for "Test"
  Send, // Using Send for "Deploy"
  LineChart, // Using LineChart for "Monitor"
} from "lucide-react";
import MagicBento from "./MagicBento";

// Data for the "How It Works" section - with video display functionality
const howItWorksSteps = [
  {
    icon: Zap,
    title: "Build",
    description: "Utilize the voice AI API and our intuitive agent builder to create custom voice AI callers effortlessly.",
    video: "/01.mp4", // Set to video URL when video is available
    alt: "Agent Builder Demo Video",
  },
  {
    icon: MonitorUp,
    title: "Test",
    description: "Perform comprehensive agent testing with built-in LLM features to ensure seamless handling of edge cases.",
    video: "/02.mp4", // Set to video URL when video is available
    alt: "Testing Interface Demo Video",
  },
  {
    icon: Send,
    title: "Deploy",
    description: "Easily deploy your agents for AI phone calls, web calls, SMS, chat, and more.",
    video: "/03.mp4", // Set to video URL when video is available
    alt: "Deployment Options Demo Video",
  },
  {
    icon: LineChart,
    title: "Monitor",
    description: "Artificial Intelligence tracks success rates, latency, and user sentiment through call history dashboard. Quickly identify failed calls.",
    video: "/04.mp4", // Set to video URL when video is available
    alt: "Monitoring Dashboard Demo Video",
  },
];

// Data for the "Pricing" section (remains unchanged)
const pricingPlans = [
  {
    name: "Starter",
    price: "Free",
    description: "Perfect for testing voice AI with limited calls",
    features: ["100 minutes/month", "Basic voice agents", "Community support", "Standard templates"],
    popular: false,
    cta: "Get Started",
  },
  {
    name: "Pro",
    monthlyPrice: 99,
    annualPrice: 79,
    description: "For businesses running regular voice operations",
    features: [
      "1,000 minutes/month",
      "Advanced voice agents",
      "Priority support",
      "Custom integrations",
      "Analytics dashboard",
      "Multilingual support",
    ],
    popular: true,
    cta: "Start Free Trial",
  },
  {
    name: "Enterprise",
    monthlyPrice: 499,
    annualPrice: 399,
    description: "For large organizations with high call volumes",
    features: [
      "10,000+ minutes/month",
      "Everything in Pro",
      "Dedicated account manager",
      "Custom AI training",
      "SLA guarantee",
      "On-premise deployment",
      "Advanced security",
    ],
    popular: false,
    cta: "Contact Sales",
  },
];

export function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  // Throttled resize handler for performance
  const handleResize = useCallback(() => {
    const width = window.innerWidth;
    setIsMobile(width < 768);
    setIsDesktop(width >= 1024);
  }, []);

  // Initialize device detection
  useEffect(() => {
    handleResize();
    let timeoutId: NodeJS.Timeout;
    
    const throttledResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleResize, 150);
    };
    
    window.addEventListener('resize', throttledResize);
    return () => {
      window.removeEventListener('resize', throttledResize);
      clearTimeout(timeoutId);
    };
  }, [handleResize]);

  return (
    // React Fragment to wrap both sections
    <>
      {/* =================================== */}
      {/* ====== HOW IT WORKS SECTION ======= */}
      {/* =================================== */}
      <section className="py-16 md:py-24 lg:py-32 px-4 md:px-6 lg:px-8 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16 lg:mb-20"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent mb-4">
              How It Works
            </h2>
            <p className="text-base md:text-lg text-white/60 max-w-2xl mx-auto">
              Our platform simplifies complex voice AI tasks into easily manageable steps.
            </p>
          </motion.div>

          {/* How It Works Steps with Video Display */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
            {howItWorksSteps.map((step, index) => {
              const IconComponent = step.icon;
              const videoUrl = step.video; // Use static video from step data
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative"
                >
                  {/* Step Card */}
                  <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10 hover:border-white/20 transition-all duration-300 h-full flex flex-col">
                    {/* Step Number */}
                    <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-[#3B82F6] to-[#3B82F6]/80 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {index + 1}
                    </div>

                    {/* Title */}
                    <div className="mb-4">
                      <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">{step.title}</h3>
                    </div>

                    {/* Description */}
                    <p className="text-white/70 text-sm md:text-base mb-6 leading-relaxed flex-grow">
                      {step.description}
                    </p>

                    {/* Video Section */}
                    <div className="relative mt-auto">
                      {videoUrl ? (
                        <div className="relative group/video">
                          <video
                            className="w-full h-auto rounded-xl border border-white/10"
                            autoPlay
                            loop
                            muted
                            playsInline
                            preload="auto"
                          >
                            <source src={videoUrl} type="video/mp4" />
                            Your browser does not support the video tag.
                          </video>
                        </div>
                      ) : (
                        <div className="w-full aspect-video bg-white/5 border-2 border-dashed border-white/20 rounded-xl flex flex-col items-center justify-center text-center p-6">
                          <div className="p-4 bg-white/5 rounded-full mb-4">
                            <svg className="w-8 h-8 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                            </svg>
                          </div>
                          <p className="text-white/40 text-sm">Demo video coming soon</p>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =================================== */}
      {/* ======== PRICING SECTION ========== */}
      {/* =================================== */}
      <section className="relative pt-8 md:pt-12 lg:pt-16 pb-16 md:pb-20 lg:pb-24 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-14 lg:mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-4 md:mb-6"
            >
              <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-[#3B82F6]" />
              <span className="text-xs md:text-sm font-medium text-white/80">Pricing</span>
            </motion.div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent mb-3 md:mb-4">
              Simple, Transparent Pricing
            </h2>

            <p className="text-base md:text-lg text-white/60 max-w-2xl mx-auto mb-6 md:mb-8">
              Start with our free plan and scale as your voice AI needs grow. All plans include core features.
            </p>

            {/* Monthly/Annual Toggle */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center justify-center gap-2 md:gap-4 p-1 bg-white/5 rounded-full border border-white/10 backdrop-blur-sm w-fit mx-auto"
            >
              <button
                onClick={() => setIsAnnual(false)}
                className={`px-4 md:px-6 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-200 ${
                  !isAnnual ? "bg-[#3B82F6] text-white shadow-lg" : "text-white/60 hover:text-white/80"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setIsAnnual(true)}
                className={`px-4 md:px-6 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-200 relative ${
                  isAnnual ? "bg-[#3B82F6] text-white shadow-lg" : "text-white/60 hover:text-white/80"
                }`}
              >
                Annual
                <span className="absolute -top-1 md:-top-2 -right-1 md:-right-2 bg-green-500 text-white text-xs px-1.5 md:px-2 py-0.5 rounded-full">
                  Save 20%
                </span>
              </button>
            </motion.div>
          </motion.div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: isDesktop ? -5 : 0 }}
                className={`relative rounded-2xl p-6 md:p-8 backdrop-blur-sm border transition-all duration-300 h-full flex flex-col ${
                  plan.popular
                    ? "bg-gradient-to-b from-[#3B82F6]/10 to-transparent border-[#3B82F6]/30 shadow-lg shadow-[#3B82F6]/10"
                    : "bg-white/5 border-white/10 hover:border-white/20"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 md:-top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-[#3B82F6] to-[#3B82F6]/80 text-white text-xs md:text-sm font-medium px-3 md:px-4 py-1.5 md:py-2 rounded-full">
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-6 md:mb-8">
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center gap-1 mb-2">
                    {plan.price ? (
                      <span className="text-3xl md:text-4xl font-bold text-white">{plan.price}</span>
                    ) : (
                      <>
                        <span className="text-3xl md:text-4xl font-bold text-white">
                          ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                        </span>
                        <span className="text-white/60 text-base md:text-lg">{isAnnual ? "/year" : "/month"}</span>
                      </>
                    )}
                  </div>
                  <p className="text-white/60 text-xs md:text-sm">{plan.description}</p>
                </div>

                <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8 flex-grow">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 md:gap-3">
                      <Check className="w-4 h-4 md:w-5 md:h-5 text-[#3B82F6] flex-shrink-0" />
                      <span className="text-white/80 text-xs md:text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: isDesktop ? 1.02 : 1 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-2.5 md:py-3 px-4 md:px-6 rounded-lg font-medium transition-all duration-200 text-sm md:text-base mt-auto ${
                    plan.popular
                      ? "bg-gradient-to-r from-[#3B82F6] to-[#3B82F6]/80 text-white shadow-lg shadow-[#3B82F6]/25 hover:shadow-[#3B82F6]/40"
                      : "bg-white/10 text-white border border-white/20 hover:bg-white/20"
                  }`}
                >
                  {plan.cta}
                </motion.button>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12 md:mt-14 lg:mt-16"
          >
            <p className="text-white/60 mb-3 md:mb-4 text-sm md:text-base">Need a custom solution or higher volume? We're here to help.</p>
            <motion.button
              whileHover={{ scale: isDesktop ? 1.05 : 1 }}
              whileTap={{ scale: 0.95 }}
              className="text-[#3B82F6] hover:text-[#3B82F6]/80 font-medium transition-colors text-sm md:text-base"
            >
              Contact our sales team →
            </motion.button>
          </motion.div>
        </div>
      </section>
    </>
  );
}