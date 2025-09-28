"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Image from 'next/image'
import Link from 'next/link'

interface Integration {
  name: string;
  logoUrl: string;
  href: string;
}

const integrations: Integration[] = [
  {
    name: 'Cal.com',
    logoUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d88d3dca-f6e2-4980-ad64-cb2afe19a91e-retellai-com/assets/icons/675cbac0dbcc4a60be5d0f55_67282f3b7c6bc502a2e3794a_67282c38d51824fcbb3257ad_android-chrome-512x512-5.png?',
    href: 'https://www.buddhistvoice.com/integrations/cal-com',
  },
  {
    name: 'n8n',
    logoUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d88d3dca-f6e2-4980-ad64-cb2afe19a91e-retellai-com/assets/icons/675cbae2170637295756f2c1_67282f39268b30b9783711be_671ed0ce997520a67a970b7f_cropped-favicon-n8n-6.png?',
    href: 'https://www.buddhistvoice.com/integrations/n8n',
  },
  {
    name: 'GoHighLevel',
    logoUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d88d3dca-f6e2-4980-ad64-cb2afe19a91e-retellai-com/assets/icons/675cbacb49d95fc1b99d1b2f_67282f398c83e7e1c6eb2576_671ec51b420cf850293256f4_16953064057414655210067262582862-1.svg?',
    href: 'https://www.buddhistvoice.com/integrations/go-high-level',
  },
  {
    name: 'Twilio',
    logoUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d88d3dca-f6e2-4980-ad64-cb2afe19a91e-retellai-com/assets/svgs/675cbaed5e654042b0686ec1_671ec08aca514c4d553d7b83_twilio%20(1)-2.svg?',
    href: 'https://www.buddhistvoice.com/integrations/twillio',
  },
  {
    name: 'Vonage',
    logoUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d88d3dca-f6e2-4980-ad64-cb2afe19a91e-retellai-com/assets/icons/675cbafe8d435798c4aacc8a_67282f36b8f9310bbd233ab1_6720735630c9d0df8f3ca879_vonage-7.png?',
    href: 'https://www.buddhistvoice.com/integrations/vonage',
  },
  {
    name: 'OpenAI',
    logoUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d88d3dca-f6e2-4980-ad64-cb2afe19a91e-retellai-com/assets/images/675cbb17056208a12365db4e_67282f3ab3a3615fe88a4af9_671ec93b0923ab9360558876_openai-chatgpt-logo-icon-free-png-5.webp?',
    href: 'https://www.buddhistvoice.com/integrations/custom-llm',
  },
];

export function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  const faqs = [
    {
      question: "What is Buddhi Voice exactly?",
      answer:
        "Buddhi Voice is an AI-powered voice automation platform that helps you build, deploy, and manage AI voice agents for customer calls. It enables you to automate sales, support, and other phone-based interactions with human-like conversational AI.",
    },
    {
      question: "How natural do the AI voice agents sound?",
      answer:
        "Our voice agents use advanced text-to-speech and natural language processing technologies to sound incredibly human-like. Most callers cannot distinguish between our AI agents and real humans. We support multiple voices and languages.",
    },
    {
      question: "Can I use Buddhi Voice for my specific industry?",
      answer:
        "Yes! Buddhi Voice is designed to be flexible across industries including healthcare, finance, e-commerce, real estate, and more. You can customize agents for appointment setting, lead qualification, customer support, surveys, and order taking.",
    },
    {
      question: "Is Buddhi Voice compliant with data protection regulations?",
      answer:
        "Absolutely. Buddhi Voice is SOC 2 Type 1&2, HIPAA, and GDPR compliant. All voice data is encrypted in transit and at rest. We provide detailed audit logs and security features to meet enterprise requirements.",
    },
    {
      question: "How quickly can I deploy a voice AI agent?",
      answer:
        "You can create and deploy a basic voice AI agent in under 30 minutes using our visual builder. Advanced agents with custom integrations can be deployed within a few hours. No coding required for most use cases.",
    },
  ]

  return (
    <>
      {/* Integrations Section */}
      <section className="bg-black py-[120px]">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-4xl text-center">
            <motion.div
              className="mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              <div className="text-sm text-gray-400 mb-2">Reliable & Scalable</div>
            </motion.div>
            <motion.div
              className="mb-4"
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <span className="inline-block rounded-full bg-blue-500/20 px-4 py-2 text-sm font-semibold leading-tight text-blue-300 border border-blue-500/30">
                Integrations
              </span>
            </motion.div>
            <motion.h2
              className="text-4xl md:text-[54px] md:leading-[60px] font-medium text-white"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
            >
              Seamlessly Integrate with your tech stack
            </motion.h2>
            <motion.p
              className="text-lg mt-6 text-gray-300 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            >
              With native and external connectivity to any CRM, telephony, automation platform, and database, building and deploying phone agents has never been easier.
            </motion.p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
            {integrations.map((integration, idx) => (
              <motion.div
                key={integration.name}
                initial={{ opacity: 0, y: 30, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ 
                  duration: 0.6, 
                  delay: idx * 0.1, 
                  ease: 'easeOut',
                  type: 'spring',
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: 1.1, 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
              >
                <Link href={integration.href} className="group block">
                  <motion.div 
                    className="flex h-full flex-col items-center justify-center gap-4 rounded-2xl border border-blue-500/20 bg-gray-900/50 p-6 transition-all duration-300 ease-in-out group-hover:border-blue-400/60 group-hover:bg-gray-800/60 group-hover:shadow-lg group-hover:shadow-blue-500/20"
                    whileHover={{
                      boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)",
                      borderColor: "rgba(59, 130, 246, 0.6)"
                    }}
                  >
                    <motion.div 
                      className="relative h-12 w-12"
                      whileHover={{ 
                        rotate: [0, -10, 10, 0],
                        transition: { duration: 0.5 }
                      }}
                    >
                      <Image
                        src={integration.logoUrl}
                        alt={`${integration.name} logo`}
                        fill
                        className="object-contain transition-all duration-300 group-hover:brightness-110"
                      />
                    </motion.div>
                    <motion.span 
                      className="text-sm font-semibold text-white transition-colors duration-300 group-hover:text-blue-300"
                      whileHover={{ scale: 1.05 }}
                    >
                      {integration.name}
                    </motion.span>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="relative overflow-hidden pb-120 pt-24">
      {/* Background blur effects */}
      <div className="bg-primary/20 absolute top-1/2 -right-20 z-[-1] h-64 w-64 rounded-full opacity-80 blur-3xl"></div>
      <div className="bg-primary/20 absolute top-1/2 -left-20 z-[-1] h-64 w-64 rounded-full opacity-80 blur-3xl"></div>

      <div className="z-10 container mx-auto px-4">
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="border-primary/40 text-primary inline-flex items-center gap-2 rounded-full border px-3 py-1 uppercase">
            <span>✶</span>
            <span className="text-sm">Faqs</span>
          </div>
        </motion.div>

        <motion.h2
          className="mx-auto mt-6 max-w-xl text-center text-4xl font-medium md:text-[54px] md:leading-[60px]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Questions? We've got{" "}
          <span className="bg-gradient-to-b from-foreground via-rose-200 to-primary bg-clip-text text-transparent">
            answers
          </span>
        </motion.h2>

        <div className="mx-auto mt-12 flex max-w-xl flex-col gap-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="from-secondary/40 to-secondary/10 rounded-2xl border border-white/10 bg-gradient-to-b p-6 shadow-[0px_2px_0px_0px_rgba(255,255,255,0.1)_inset] transition-all duration-300 hover:border-white/20 cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => toggleItem(index)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault()
                  toggleItem(index)
                }
              }}
              {...(index === faqs.length - 1 && { "data-faq": faq.question })}
            >
              <div className="flex items-start justify-between">
                <h3 className="m-0 font-medium pr-4">{faq.question}</h3>
                <motion.div
                  animate={{ rotate: openItems.includes(index) ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className=""
                >
                  {openItems.includes(index) ? (
                    <Minus className="text-primary flex-shrink-0 transition duration-300" size={24} />
                  ) : (
                    <Plus className="text-primary flex-shrink-0 transition duration-300" size={24} />
                  )}
                </motion.div>
              </div>
              <AnimatePresence>
                {openItems.includes(index) && (
                  <motion.div
                    className="mt-4 text-muted-foreground leading-relaxed overflow-hidden"
                    initial={{ opacity: 0, height: 0, marginTop: 0 }}
                    animate={{ opacity: 1, height: "auto", marginTop: 16 }}
                    exit={{ opacity: 0, height: 0, marginTop: 0 }}
                    transition={{
                      duration: 0.4,
                      ease: "easeInOut",
                      opacity: { duration: 0.2 },
                    }}
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    </>
  )
}
