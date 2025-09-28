"use client"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { FileSpreadsheet, Globe, Mail, FolderOpen, ArrowRight, Play, CheckCircle } from "lucide-react"
import Link from "next/link"
import { StickyFooter } from "@/components/sticky-footer"

export default function WorkflowsPage() {
  const useCases = [
    {
      icon: FileSpreadsheet,
      title: "Sales & Lead Qualification",
      description: "Automated lead qualification and scoring with follow-up calls for warm prospects, product demonstrations and appointment scheduling.",
      steps: ["Lead Qualification", "Follow-up Calls", "Product Demos", "Appointment Confirmation"],
      color: "from-green-500 to-green-600",
      time: "Saves 4+ hours daily",
    },
    {
      icon: Mail,
      title: "Customer Support",
      description: "24/7 first-level technical support with order status inquiries, billing management, and complaint resolution.",
      steps: ["24/7 Support", "Order Inquiries", "Billing Management", "Complaint Resolution"],
      color: "from-blue-500 to-blue-600",
      time: "Saves 3+ hours daily",
    },
    {
      icon: Globe,
      title: "Marketing & Surveys",
      description: "Market research and customer feedback collection, event invitations, satisfaction surveys, and brand awareness campaigns.",
      steps: ["Market Research", "Event Management", "Customer Surveys", "Brand Campaigns"],
      color: "from-purple-500 to-purple-600",
      time: "Saves 2+ hours daily",
    },
    {
      icon: FolderOpen,
      title: "Healthcare & Appointments",
      description: "Patient appointment scheduling and reminders, medication adherence follow-ups, post-treatment check-ins, and insurance verification.",
      steps: ["Appointment Scheduling", "Medication Follow-ups", "Check-ins", "Insurance Verification"],
      color: "from-orange-500 to-orange-600",
      time: "Saves 1+ hour daily",
    },
  ]

  const workflowFeatures = [
    "Visual drag-and-drop voice agent builder",
    "Natural conversation flow design",
    "Integration with 100+ business tools",
    "Real-time call monitoring and analytics",
    "Multilingual voice support",
    "Custom scripting for complex scenarios",
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
                <Play className="h-4 w-4" />
                Voice AI Use Cases
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl mb-8 text-balance"
            >
              Supercharge your Call Operations <br />
              <span className="text-blue-400">with Voice AI</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mx-auto mb-12 max-w-2xl text-lg text-muted-foreground text-pretty"
            >
              Discover the new way to build, test, deploy, and monitor production-ready AI voice agents at scale.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-6">
              Transform Your Business Communications
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real-world voice AI applications that save hours of manual work every day.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative p-8 rounded-2xl bg-card/50 border border-border hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${useCase.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <useCase.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-blue-400 transition-colors">
                      {useCase.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">{useCase.description}</p>
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium">
                      {useCase.time}
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="text-sm font-medium text-foreground mb-3">Key Capabilities:</h4>
                  {useCase.steps.map((step, stepIndex) => (
                    <div key={stepIndex} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center">
                        <span className="text-xs font-medium text-blue-400">{stepIndex + 1}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{step}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center text-blue-400 text-sm font-medium mt-6 group-hover:text-blue-300 transition-colors">
                  Learn More
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Builder Features */}
      <section className="py-24 bg-card/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-6">
                Powerful Voice AI Builder
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Create sophisticated voice AI agents with our intuitive drag-and-drop interface. No programming knowledge required.
              </p>

              <div className="space-y-4">
                {workflowFeatures.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="h-5 w-5 text-blue-400 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl p-8 border border-blue-500/20">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-4 bg-card/50 rounded-lg border border-border">
                    <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                      <span className="text-white text-xs font-bold">1</span>
                    </div>
                    <span className="text-sm font-medium">Design Conversation Flow</span>
                  </div>

                  <div className="flex justify-center">
                    <ArrowRight className="h-5 w-5 text-muted-foreground" />
                  </div>

                  <div className="flex items-center gap-3 p-4 bg-card/50 rounded-lg border border-border">
                    <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                      <span className="text-white text-xs font-bold">2</span>
                    </div>
                    <span className="text-sm font-medium">Train Voice Agent</span>
                  </div>

                  <div className="flex justify-center">
                    <ArrowRight className="h-5 w-5 text-muted-foreground" />
                  </div>

                  <div className="flex items-center gap-3 p-4 bg-card/50 rounded-lg border border-border">
                    <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
                      <span className="text-white text-xs font-bold">3</span>
                    </div>
                    <span className="text-sm font-medium">Deploy & Monitor</span>
                  </div>
                </div>
              </div>
            </motion.div>
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
              Ready to Transform Your <span className="text-blue-400">Call Operations</span>?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of businesses who have automated their phone communications with Buddhi Voice.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/signup"
                className="group cursor-pointer border border-blue-500/20 bg-gradient-to-b from-blue-500 to-blue-600 gap-2 h-[60px] flex items-center p-[10px] rounded-full hover:-translate-y-0.5 transition-all duration-200 shadow-lg shadow-blue-500/25"
              >
                <div className="border border-blue-400/30 bg-blue-500 h-[40px] rounded-full flex items-center justify-center text-white">
                  <p className="font-medium tracking-tight mr-3 ml-3 flex items-center gap-2 justify-center text-base">
                    TRY FOR FREE
                  </p>
                </div>
                <div className="text-white/80 group-hover:ml-4 ease-in-out transition-all size-[24px] flex items-center justify-center rounded-full border-2 border-blue-400/30">
                  <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </Link>

              <Link
                href="/templates"
                className="group cursor-pointer border border-border bg-card/50 gap-2 h-[60px] flex items-center p-[10px] rounded-full hover:bg-card/80 transition-all duration-200"
              >
                <div className="border border-border bg-background h-[40px] rounded-full flex items-center justify-center text-foreground">
                  <p className="font-medium tracking-tight mr-3 ml-3 flex items-center gap-2 justify-center text-base">
                    Browse Templates
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
