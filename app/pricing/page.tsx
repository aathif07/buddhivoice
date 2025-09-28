"use client"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Check, X, ArrowRight, Star, Zap } from "lucide-react"
import Link from "next/link"
import { StickyFooter } from "@/components/sticky-footer"

export default function PricingPage() {
  const pricingTiers = [
    {
      name: "Starter",
      price: "Free",
      description: "Perfect for individuals testing voice AI",
      features: [
        "100 call minutes/month",
        "Basic voice agents",
        "Community support",
        "Template library access",
        "1 scheduled campaign",
      ],
      limitations: ["No advanced analytics", "Limited customization", "No custom integrations"],
      cta: "Start Free",
      ctaLink: "/signup",
      popular: false,
      color: "from-gray-500 to-gray-600",
    },
    {
      name: "Pro",
      price: "$99",
      period: "/month",
      description: "For businesses running regular voice operations",
      features: [
        "Everything in Starter",
        "1,000 call minutes/month",
        "Advanced voice agents",
        "Priority support",
        "Analytics dashboard",
        "Custom integrations",
        "Multilingual support",
      ],
      limitations: [],
      cta: "Upgrade to Pro",
      ctaLink: "/signup?plan=pro",
      popular: true,
      color: "from-blue-500 to-blue-600",
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large organizations with high call volumes",
      features: [
        "Everything in Pro",
        "10,000+ call minutes/month",
        "Dedicated account manager",
        "Custom AI training",
        "SLA guarantee",
        "On-premise deployment",
        "Advanced security",
        "Custom integrations",
      ],
      limitations: [],
      cta: "Contact Sales",
      ctaLink: "/contact",
      popular: false,
      color: "from-purple-500 to-purple-600",
    },
  ]

  const comparisonFeatures = [
    { feature: "Call Minutes", starter: "100", pro: "1,000", enterprise: "10,000+" },
    { feature: "Voice Agents", starter: "Basic", pro: "Advanced", enterprise: "Custom" },
    { feature: "Multilingual Support", starter: false, pro: true, enterprise: true },
    { feature: "Analytics Dashboard", starter: false, pro: true, enterprise: true },
    { feature: "Custom Integrations", starter: false, pro: true, enterprise: true },
    { feature: "Priority Support", starter: false, pro: true, enterprise: true },
    { feature: "SLA Guarantee", starter: false, pro: false, enterprise: true },
    { feature: "Custom AI Training", starter: false, pro: false, enterprise: true },
  ]

  const renderFeatureValue = (value: boolean | string) => {
    if (value === true) {
      return <Check className="h-5 w-5 text-green-400" />
    } else if (value === false) {
      return <X className="h-5 w-5 text-red-400" />
    } else {
      return <span className="text-sm text-muted-foreground">{value}</span>
    }
  }

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
                <Zap className="h-4 w-4" />
                Simple, Flexible Pricing
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl mb-8 text-balance"
            >
              Choose the <span className="text-blue-400">Perfect Plan</span> <br />
              for Your Voice AI Needs
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mx-auto mb-12 max-w-2xl text-lg text-muted-foreground text-pretty"
            >
              Start free and scale as you grow. All plans include our core voice AI features with no hidden fees.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
                  tier.popular
                    ? "border-blue-500/50 bg-gradient-to-br from-blue-500/5 to-blue-600/5 shadow-lg shadow-blue-500/10"
                    : "border-border bg-card/50 hover:border-blue-500/30"
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-1">
                      <Star className="h-3 w-3 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{tier.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-foreground">{tier.price}</span>
                    {tier.period && <span className="text-muted-foreground">{tier.period}</span>}
                  </div>
                  <p className="text-muted-foreground">{tier.description}</p>
                </div>

                <div className="space-y-4 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-green-400 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}

                  {tier.limitations.map((limitation, limitationIndex) => (
                    <div key={limitationIndex} className="flex items-center gap-3">
                      <X className="h-5 w-5 text-red-400 flex-shrink-0" />
                      <span className="text-muted-foreground line-through">{limitation}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href={tier.ctaLink}
                  className={`w-full flex items-center justify-center gap-2 px-6 py-4 rounded-lg font-medium transition-all duration-200 ${
                    tier.popular
                      ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 shadow-lg shadow-blue-500/25"
                      : "bg-card border border-border text-foreground hover:bg-card/80 hover:border-blue-500/30"
                  }`}
                >
                  {tier.cta}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-16 bg-card/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
              Detailed Feature Comparison
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to know about our voice AI platform capabilities.
            </p>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="w-full max-w-4xl mx-auto border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-6 font-medium text-muted-foreground">Features</th>
                  <th className="text-center py-4 px-6 font-medium text-muted-foreground">Starter</th>
                  <th className="text-center py-4 px-6 font-medium text-muted-foreground">Pro</th>
                  <th className="text-center py-4 px-6 font-medium text-muted-foreground">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((feature, index) => (
                  <tr key={index} className="border-b border-border/50 hover:bg-card/30">
                    <td className="py-4 px-6 font-medium text-foreground">{feature.feature}</td>
                    <td className="py-4 px-6 text-center">{renderFeatureValue(feature.starter)}</td>
                    <td className="py-4 px-6 text-center">{renderFeatureValue(feature.pro)}</td>
                    <td className="py-4 px-6 text-center">{renderFeatureValue(feature.enterprise)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-center mb-12">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-card/50 border border-border">
                <h3 className="font-semibold text-foreground mb-2">Can I change plans anytime?</h3>
                <p className="text-muted-foreground">
                  Yes, you can upgrade, downgrade, or cancel your plan at any time. Changes take effect immediately.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-card/50 border border-border">
                <h3 className="font-semibold text-foreground mb-2">What happens if I exceed my call minutes?</h3>
                <p className="text-muted-foreground">
                  You'll be notified when you're approaching your limit. Additional minutes can be purchased at a rate of $0.05 per minute.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-card/50 border border-border">
                <h3 className="font-semibold text-foreground mb-2">Do you offer discounts for non-profits or educational institutions?</h3>
                <p className="text-muted-foreground">
                  Yes, we offer special pricing for non-profits and educational institutions. Please contact our sales team for more information.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-card/50 border border-border">
                <h3 className="font-semibold text-foreground mb-2">Is there a setup fee?</h3>
                <p className="text-muted-foreground">
                  No, there are no setup fees for any of our plans. You can start building voice AI agents immediately after signing up.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
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
