"use client"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { FileText, Download, Star, Clock, ArrowRight, Search, Headphones, Phone, MessageCircle, Calendar } from "lucide-react"
import Link from "next/link"
import { StickyFooter } from "@/components/sticky-footer"
import { useState } from "react"

export default function TemplatesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")

  const categories = ["All", "Sales", "Support", "Marketing", "Healthcare", "Surveys"]

  const templates = [
    {
      id: 1,
      title: "Lead Qualification Template",
      description:
        "Automated lead screening and qualification with intelligent question routing and appointment scheduling.",
      category: "Sales",
      downloads: 1250,
      rating: 4.8,
      timeToSetup: "5 min",
      color: "from-blue-500 to-blue-600",
      features: ["Smart questioning", "Scoring system", "Calendar integration", "Follow-up sequences"],
      icon: <Headphones className="h-6 w-6 text-white" />
    },
    {
      id: 2,
      title: "Customer Support Template",
      description: "24/7 customer service agent that handles common inquiries, ticket creation, and escalations.",
      category: "Support",
      downloads: 980,
      rating: 4.9,
      timeToSetup: "10 min",
      color: "from-green-500 to-green-600",
      features: ["Knowledge base", "Ticket creation", "Escalation paths", "Multi-language support"],
      icon: <Phone className="h-6 w-6 text-white" />
    },
    {
      id: 3,
      title: "Appointment Scheduler Template",
      description: "Intelligent appointment booking system with calendar sync and automated reminders.",
      category: "Healthcare",
      downloads: 750,
      rating: 4.7,
      timeToSetup: "8 min",
      color: "from-purple-500 to-purple-600",
      features: ["Calendar sync", "Availability management", "Reminder system", "Confirmation texts"],
      icon: <Calendar className="h-6 w-6 text-white" />
    },
    {
      id: 4,
      title: "Market Research Template",
      description: "Professional survey conductor that collects customer feedback and analyzes responses.",
      category: "Marketing",
      downloads: 1100,
      rating: 4.6,
      timeToSetup: "12 min",
      color: "from-orange-500 to-orange-600",
      features: ["Question branching", "Response analysis", "Report generation", "CRM integration"],
      icon: <MessageCircle className="h-6 w-6 text-white" />
    },
    {
      id: 5,
      title: "Order Taking Template",
      description: "Automated order processing system that captures customer details and payment information.",
      category: "Sales",
      downloads: 650,
      rating: 4.5,
      timeToSetup: "3 min",
      color: "from-teal-500 to-teal-600",
      features: ["Product catalog", "Payment processing", "Order confirmation", "Inventory sync"],
      icon: <Headphones className="h-6 w-6 text-white" />
    },
    {
      id: 6,
      title: "Patient Check-in Template",
      description: "Healthcare check-in assistant that collects patient information and updates medical records.",
      category: "Healthcare",
      downloads: 890,
      rating: 4.8,
      timeToSetup: "15 min",
      color: "from-red-500 to-red-600",
      features: ["Medical forms", "Insurance verification", "Record updates", "HIPAA compliant"],
      icon: <Phone className="h-6 w-6 text-white" />
    },
  ]

  const filteredTemplates = templates.filter(template => {
    const matchesCategory = selectedCategory === "All" || template.category === selectedCategory
    const matchesSearch = template.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          template.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen">
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
                <FileText className="h-4 w-4" />
                Voice AI Templates
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl mb-8 text-balance"
            >
              <span className="text-blue-400">Pre-Built Voice AI</span> <br />
              Templates for Every Use Case
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mx-auto mb-12 max-w-2xl text-lg text-muted-foreground text-pretty"
            >
              Jump-start your voice AI journey with our library of professionally designed templates. Customize and
              deploy in minutes, not hours.
            </motion.p>

            {/* Search and Filter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
            >
              <div className="relative w-full max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search templates..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-3 bg-card/50 border border-border rounded-full text-foreground placeholder-muted-foreground focus:outline-none focus:border-blue-500/50 w-full"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? "bg-blue-500 text-white"
                    : "bg-card/50 text-muted-foreground hover:text-foreground hover:bg-card/80"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Templates Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {filteredTemplates.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold text-foreground mb-2">No templates found</h3>
              <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTemplates.map((template, index) => (
                <motion.div
                  key={template.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative p-6 rounded-2xl bg-card/50 border border-border hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${template.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      {template.icon}
                    </div>
                    <div className="flex items-center gap-1 text-yellow-400">
                      <Star className="h-4 w-4 fill-current" />
                      <span className="text-sm font-medium">{template.rating}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-blue-400 transition-colors">
                    {template.title}
                  </h3>

                  <p className="text-muted-foreground mb-4 leading-relaxed">{template.description}</p>

                  {/* Stats */}
                  <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Download className="h-4 w-4" />
                      <span>{template.downloads.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{template.timeToSetup}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {template.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-medium hover:from-blue-600 hover:to-blue-700 transition-all duration-200 group-hover:shadow-lg group-hover:shadow-blue-500/25">
                    <Download className="h-4 w-4" />
                    Use Template
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-card/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-6">
              Trusted by Voice AI Professionals
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-blue-400 mb-2">50+</div>
              <div className="text-muted-foreground">Ready-to-use templates</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-blue-400 mb-2">10K+</div>
              <div className="text-muted-foreground">Template downloads</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-blue-400 mb-2">4.8★</div>
              <div className="text-muted-foreground">Average rating</div>
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
              Can't Find What You Need?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Request a custom template or build your own with our visual voice AI builder.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/signup"
                className="group cursor-pointer border border-blue-500/20 bg-gradient-to-b from-blue-500 to-blue-600 gap-2 h-[60px] flex items-center p-[10px] rounded-full hover:-translate-y-0.5 transition-all duration-200 shadow-lg shadow-blue-500/25"
              >
                <div className="border border-blue-400/30 bg-blue-500 h-[40px] rounded-full flex items-center justify-center text-white">
                  <p className="font-medium tracking-tight mr-3 ml-3 flex items-center gap-2 justify-center text-base">
                    Start Building
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
                    Request Template
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