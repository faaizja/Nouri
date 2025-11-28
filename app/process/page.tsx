"use client"

import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ProcessPage() {
  return (
    <div className="bg-white text-[#2E2E2E] min-h-screen">
      <Header />

      <section className="pt-32 pb-24 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <Link href="/">
              <Button
                variant="ghost"
                className="mb-12 text-[#2E2E2E]/60 hover:text-[#2E2E2E] hover:bg-transparent -ml-4"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
            </Link>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-light mb-8 text-balance leading-[0.95]">
              Designing a smarter way to manage food
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12 bg-[#F9F9F5]">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <div className="relative aspect-video bg-white rounded-3xl overflow-hidden shadow-xl">
            <img
              src="/images/screenshot-202025-11-25-20at-209.png"
              alt="YPlan event discovery platform"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </section>

      <section className="py-32 px-6 md:px-12">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm uppercase tracking-wider text-[#2E2E2E]/60 mb-4">Challenge</h2>
            <h3 className="text-3xl md:text-4xl font-light mb-6">The Problem</h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-6 text-lg text-[#2E2E2E]/70 leading-relaxed"
          >
            <p>
              American households waste an average of $1,800 worth of food annually. The primary issue isn't awareness –
              it's the lack of systems to track what you have and when it expires.
            </p>
            <p>
              Users struggle with three core challenges: tracking their food inventory, deciding what to cook with
              available ingredients, and understanding their impact on the environment and their wallet.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-32 px-6 md:px-12 bg-[#F9F9F5]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-sm uppercase tracking-wider text-[#2E2E2E]/60 mb-4">Research</h2>
            <h3 className="text-4xl md:text-5xl font-light">Key Insights</h3>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="text-5xl md:text-6xl font-light mb-4">78%</div>
              <p className="text-[#2E2E2E]/60">of users forget about food in their fridge until it expires</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-5xl md:text-6xl font-light mb-4">40%</div>
              <p className="text-[#2E2E2E]/60">of purchased food ends up in the trash</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-5xl md:text-6xl font-light mb-4">92%</div>
              <p className="text-[#2E2E2E]/60">want to reduce waste but lack the tools</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 md:px-12">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm uppercase tracking-wider text-[#2E2E2E]/60 mb-4">Solution</h2>
            <h3 className="text-3xl md:text-4xl font-light mb-6">Three Core Features</h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h4 className="text-xl font-medium mb-3">Kitchen Intelligence Hub</h4>
              <p className="text-[#2E2E2E]/70 leading-relaxed">
                Automated tracking with smart expiration alerts to prevent food waste before it happens.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-medium mb-3">Recipe Rescue</h4>
              <p className="text-[#2E2E2E]/70 leading-relaxed">
                AI-powered meal suggestions using available ingredients and dietary preferences.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-medium mb-3">Nouri Nexus</h4>
              <p className="text-[#2E2E2E]/70 leading-relaxed">
                Visual impact tracking showing waste reduction, cost savings, and environmental benefits.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-32 px-6 md:px-12 bg-[#F9F9F5]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-sm uppercase tracking-wider text-[#2E2E2E]/60 mb-4">Design Evolution</h2>
            <h3 className="text-4xl md:text-5xl font-light">From Concept to Reality</h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative aspect-[16/9] bg-white rounded-3xl overflow-hidden shadow-xl mb-12"
          >
            <div className="w-full h-full bg-gradient-to-br from-[#F5F5F5] to-white flex items-center justify-center p-12">
              <p className="text-center text-[#2E2E2E]/40">Design evolution mockups</p>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h4 className="text-2xl font-light mb-4">Initial Concept</h4>
              <p className="text-[#2E2E2E]/70 leading-relaxed">
                Started with a simple list-based inventory system. User testing revealed the need for more visual
                hierarchy and actionable insights.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-2xl font-light mb-4">Final Design</h4>
              <p className="text-[#2E2E2E]/70 leading-relaxed">
                Evolved into a visual, card-based interface with color-coded alerts, AI suggestions, and impact tracking
                that motivates behavioral change.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-sm uppercase tracking-wider text-[#2E2E2E]/60 mb-4">Testing & Results</h2>
            <h3 className="text-4xl md:text-5xl font-light mb-8">Validation Through Users</h3>
            <p className="text-lg text-[#2E2E2E]/70 leading-relaxed max-w-3xl">
              Conducted 24 user testing sessions across 5 major iterations. Simplified onboarding from 8 steps to 3,
              enhanced recipe filters, and improved notification relevance based on direct feedback.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-5xl font-light mb-2">24</div>
              <p className="text-[#2E2E2E]/60">User Testing Sessions</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-5xl font-light mb-2">5</div>
              <p className="text-[#2E2E2E]/60">Major Iterations</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-5xl font-light mb-2">92%</div>
              <p className="text-[#2E2E2E]/60">User Satisfaction</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 md:px-12 bg-[#2E2E2E] text-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-8">Final Prototype</h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              A complete solution that transforms how people manage their kitchen and reduce food waste
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative aspect-video bg-white/5 rounded-3xl overflow-hidden border border-white/10"
          >
            <div className="w-full h-full flex items-center justify-center p-12">
              <p className="text-center text-white/30">Final prototype mockup</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <Link href="/">
            <Button
              size="lg"
              variant="outline"
              className="rounded-full border-[#2E2E2E] text-[#2E2E2E] hover:bg-[#2E2E2E] hover:text-white transition-all duration-300 bg-transparent"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to home
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}

function Header() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md"
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        <Link href="/" className="text-2xl font-light">
          Nouri
        </Link>
        <div className="flex items-center gap-12">
          <Link href="/" className="text-sm hover:text-[#7A9D54] transition-colors">
            Home
          </Link>
          <Link href="/process" className="text-sm hover:text-[#7A9D54] transition-colors">
            Process
          </Link>
        </div>
      </nav>
    </motion.header>
  )
}

function Footer() {
  return (
    <footer className="py-12 px-6 md:px-12 border-t border-[#2E2E2E]/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-[#2E2E2E]/60">© 2025 Nouri Portfolio</p>
        <div className="flex items-center gap-8">
          <Link href="/" className="text-sm text-[#2E2E2E]/60 hover:text-[#2E2E2E] transition-colors">
            Home
          </Link>
          <Link href="/process" className="text-sm text-[#2E2E2E]/60 hover:text-[#2E2E2E] transition-colors">
            Process
          </Link>
        </div>
      </div>
    </footer>
  )
}
