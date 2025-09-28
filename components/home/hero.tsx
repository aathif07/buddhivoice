"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { Sparkles, Play, Phone, Headphones, MessageCircle } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <>
      <section className="relative overflow-hidden min-h-screen flex flex-col">
        {/* Wave Effect Background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-64 opacity-30">
           
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-24 sm:py-32 relative z-10 flex-1 flex flex-col">
          <div className="mx-auto max-w-4xl text-center flex-1 flex flex-col justify-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <Badge
                variant="secondary"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm bg-blue-500/10 text-blue-400 border-blue-500/20 relative z-20"
              >
                <Sparkles className="h-4 w-4" />
                Voice AI Platform
              </Badge>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-8"
            >
              <h1
                id="main-title"
                className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl text-balance"
              >
                Supercharge your Call Operations <br />
                <strong className="text-blue-400">with Voice AI</strong>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mx-auto mb-12 max-w-2xl text-lg text-muted-foreground text-pretty"
            >
              Discover the new way to build, test, deploy, and monitor production-ready AI voice agents at scale.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
            >
              {/* Primary CTA */}
              <Link
                href="/signup"
                className="group cursor-pointer border border-blue-500/20 bg-gradient-to-b from-blue-500 to-blue-600 gap-2 h-[60px] flex items-center p-[10px] rounded-full hover:-translate-y-0.5 transition-all duration-200 shadow-lg shadow-blue-500/25"
              >
                <div className="border border-blue-400/30 bg-blue-500 h-[40px] rounded-full flex items-center justify-center text-white">
                  <p className="font-medium tracking-tight mr-3 ml-3 flex items-center gap-2 justify-center text-base">
                    <Sparkles className="h-4 w-4" />
                    Start Free Trial
                  </p>
                </div>
                <div className="text-white/80 group-hover:ml-4 ease-in-out transition-all size-[24px] flex items-center justify-center rounded-full border-2 border-blue-400/30">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-arrow-right group-hover:rotate-180 ease-in-out transition-all"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </div>
              </Link>

              {/* Secondary CTA */}
              <Link href="/contact" className="group cursor-pointer border border-border bg-card/50 gap-2 h-[60px] flex items-center p-[10px] rounded-full hover:bg-card/80 transition-all duration-200">
                <div className="border border-border bg-background h-[40px] rounded-full flex items-center justify-center text-foreground">
                  <p className="font-medium tracking-tight mr-3 ml-3 flex items-center gap-2 justify-center text-base">
                    <Play className="h-4 w-4" />
                    Request a Demo
                  </p>
                </div>
                <div className="text-muted-foreground group-hover:ml-4 ease-in-out transition-all size-[24px] flex items-center justify-center rounded-full border-2 border-border">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-arrow-right group-hover:rotate-180 ease-in-out transition-all"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </div>
              </Link>
            </motion.div>

            {/* Visual Illustration */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-16 relative"
            >
              {/* Background Wave Effect for Content */}
              <div className="absolute inset-0 -inset-x-32 -inset-y-16 pointer-events-none overflow-hidden opacity-20">
               
              </div>
              
              <div className="relative mx-auto max-w-4xl z-10">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-center">
                  {/* Customer Icon */}
                  <div className="flex flex-col items-center space-y-3 p-6 rounded-2xl bg-gradient-to-br from-green-500/10 to-green-600/10 border border-green-500/20 backdrop-blur-sm">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-sm font-medium text-green-400">Customer</span>
                  </div>

                  {/* Arrow */}
                  <div className="flex justify-center">
                    <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center backdrop-blur-sm">
                      <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>

                  {/* BuddhiVoice AI */}
                  <div className="flex flex-col items-center space-y-3 p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-blue-600/10 border border-blue-500/20 backdrop-blur-sm">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/25">
                      <span className="text-white font-bold text-xl">BV</span>
                    </div>
                    <span className="text-sm font-medium text-blue-400">BuddhiVoice AI</span>
                  </div>

                  {/* Arrow */}
                  <div className="flex justify-center">
                    <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center backdrop-blur-sm">
                      <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>

                  {/* Business Systems */}
                  <div className="flex flex-col items-center space-y-3 p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-purple-600/10 border border-purple-500/20 backdrop-blur-sm">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                      <MessageCircle className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-sm font-medium text-purple-400">Business Systems</span>
                  </div>
                </div>

                {/* Connection Lines */}
                <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-green-500/20 via-blue-500/20 to-purple-500/20 transform -translate-y-1/2"></div>
              </div>
            </motion.div>
          </div>

          {/* Stats Section */}
         
        </div>
      </section>
    </>
  )
}