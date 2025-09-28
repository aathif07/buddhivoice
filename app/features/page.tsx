"use client"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Monitor, Globe, Workflow, Clock, Shield, FileText, BarChart3, CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"
import { StickyFooter } from "@/components/sticky-footer"

export default function FeaturesPage() {
  const features = [
    {
      icon: Monitor,
      title: "Voice AI Agent Builder",
      description:
        "Create sophisticated voice agents with our intuitive visual builder. No coding required to design conversational flows.",
      details: "Drag-and-drop interface with pre-built components for common call scenarios and custom scripting support.",
      color: "from-green-500 to-green-600",
    },
    {
      icon: Globe,
      title: "Multi-Channel Deployment",
      description:
        "Deploy your voice agents across phone lines, web calls, and mobile apps. Seamless integration with existing systems.",
      details: "Support for SIP, WebRTC, and mobile SDKs with real-time monitoring and analytics.",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Workflow,
      title: "Real-time Testing & Tuning",
      description:
        "Test your voice agents in real-time with live calls. Adjust responses and behaviors on the fly during development.",
      details: "Interactive debugging tools with conversation playback and performance metrics.",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Clock,
      title: "Production Monitoring",
      description: "Monitor all your voice agents in production with detailed analytics and real-time dashboards.",
      details: "Call quality metrics, conversation analytics, and automated alerting for performance issues.",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Enterprise-grade security for all voice interactions. End-to-end encryption and compliance features.",
      details: "SOC 2 compliance, HIPAA support, and advanced authentication with audit logging.",
      color: "from-red-500 to-red-600",
    },
    {
      icon: FileText,
      title: "Conversation Analytics",
      description: "Deep insights into customer conversations with sentiment analysis and topic extraction.",
      details: "Custom reporting dashboards with export capabilities and integration with BI tools.",
      color: "from-teal-500 to-teal-600",
    },
    {
      icon: BarChart3,
      title: "Scalable Infrastructure",
      description:
        "Scale your voice agents from prototype to enterprise deployment with our cloud-native infrastructure.",
      details: "Auto-scaling capabilities with 99.9% uptime SLA and global CDN for low-latency calls.",
      color: "from-indigo-500 to-indigo-600",
    },
  ]

  return (
    <div className="min-h-screen pb-64">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 sm:py-32">
        <div className="container mx-auto px-4 relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <Badge
                variant="secondary"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm bg-blue-500/10 text-blue-400 border-blue-500/20"
              >
                <CheckCircle className="h-4 w-4" />
                Voice AI Platform
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl mb-8 text-balance"
            >
              Powerful Voice AI Features <br />
              <span className="text-blue-400">for Modern Businesses</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mx-auto mb-12 max-w-2xl text-lg text-muted-foreground text-pretty"
            >
              Explore the comprehensive features that make BuddhiVoice the leading platform for building, deploying, and managing intelligent voice agents.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative p-8 rounded-2xl bg-card/50 border border-border hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-1"
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon className="h-6 w-6 text-white" />
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-blue-400 transition-colors">
                  {feature.title}
                </h3>

                <p className="text-muted-foreground mb-4 leading-relaxed">{feature.description}</p>

                <p className="text-sm text-muted-foreground/80 mb-6">{feature.details}</p>

                <div className="flex items-center text-blue-400 text-sm font-medium group-hover:text-blue-300 transition-colors">
                  Learn more
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-4xl text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Experience the power of BuddhiVoice features with our comprehensive platform designed for modern voice AI solutions.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/signup"
                className="group cursor-pointer border border-blue-500/20 bg-gradient-to-b from-blue-500 to-blue-600 gap-2 h-[60px] flex items-center p-[10px] rounded-full hover:-translate-y-0.5 transition-all duration-200 shadow-lg shadow-blue-500/25"
              >
                <div className="border border-blue-400/30 bg-blue-500 h-[40px] rounded-full flex items-center justify-center text-white">
                  <p className="font-medium tracking-tight mr-3 ml-3 flex items-center gap-2 justify-center text-base">
                    Start Free Trial
                  </p>
                </div>
                <div className="text-white/80 group-hover:ml-4 ease-in-out transition-all size-[24px] flex items-center justify-center rounded-full border-2 border-blue-400/30">
                  <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </Link>

              <Link
                href="/contact"
                className="group cursor-pointer border border-border bg-card/50 gap-2 h-[60px] flex items-center p-[10px] rounded-full hover:bg-card/80 transition-all duration-200"
              >
                <div className="border border-border bg-background h-[40px] rounded-full flex items-center justify-center text-foreground">
                  <p className="font-medium tracking-tight mr-3 ml-3 flex items-center gap-2 justify-center text-base">
                    Contact Sales
                  </p>
                </div>
                <div className="text-muted-foreground group-hover:ml-4 ease-in-out transition-all size-[24px] flex items-center justify-center rounded-full border-2 border-border">
                  <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <StickyFooter />
    </div>
  )
}
