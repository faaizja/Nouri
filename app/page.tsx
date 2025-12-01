"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import { useRef } from "react"
import { Button } from "@/components/ui/button"

export default function LandingPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  return (
    <div ref={containerRef} className="bg-white text-[#2E2E2E]">


      <Header />

      <section className="min-h-screen flex items-center justify-center px-6 md:px-12 pt-20 pb-10">
        <div className="max-w-7xl w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-light leading-[0.95] mb-2 text-balance">
              <span className="font-inter font-bold hover:text-[#a8c686]/75 duration-300 ease-in-out">Nouri</span> is a smart kitchen app companion that helps reduce <span className="font-inter font-bold">food waste.</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="flex items-center gap-8 text-[#2E2E2E]/60"
          >
            <div>
              <p className="text-base">Scroll down to see more</p>
            </div>
          </motion.div>
          
        </div>
      </section>

      {/* about section */}
      <section className="py-24 px-6 md:px-12 bg-[#F9F9F5]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-8 text-balance">
              About
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-6 text-[#2E2E2E]/70 text-lg leading-relaxed"
          >
            <p className="">
              Many home cooks want to waste less food, but expiry dates, busy schedules, and forgotten leftovers make it hard to track what’s in the kitchen. Nouri connects your pantry, recipes, and waste habits into one place so you can cook confidently with what you already have.
            </p>
            {/* <Link href="/process">
              <Button
                variant="outline"
                size="lg"
                className="mt-6 rounded-full border-[#2E2E2E] text-[#2E2E2E] hover:bg-[#7a9d54] hover:text-white transition-all duration-300 ease-in-out bg-transparent"
              >
                See process
              </Button>
            </Link> */}
          </motion.div>
        </div>
      </section>


     {/* value section */}
      <section className="py-24 px-6 md:px-12 bg-[#a8c686]/40">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20">
          
          {/* This is the content block (left column on desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-6 text-[#2E2E2E]/70 text-lg leading-relaxed"
          >
            <p className="">
              In Canada, households throw away $1,766 of edible food per year. 
              Nouri focuses on the everyday moments where food gets lost: when you stock the kitchen, 
              when you’re choosing what to cook, and when you decide to throw something away.
            </p>
            <Link href="/process">
              <Button
                variant="outline"
                size="lg"
                className="mt-6 rounded-full border-[#2E2E2E] text-[#2E2E2E] hover:bg-[#7a9d54] hover:text-white transition-all duration-300 ease-in-out bg-transparent"
              >
                See process
              </Button>
            </Link>
          </motion.div>

          {/* This is the heading block (right column on desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-8 text-balance">
              Value
            </h2>
          </motion.div>

        </div>
      </section>

       {/* component with the three features */}
      <ProjectShowcase />



      {/* <section className="py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-12 mb-20"
          >
            <div>
              <div className="text-5xl md:text-6xl font-light mb-4">40%</div>
              <p className="text-[#2E2E2E]/60">Reduction in food waste for active users</p>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-light mb-4">$600</div>
              <p className="text-[#2E2E2E]/60">Average annual savings per household</p>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-light mb-4">200kg</div>
              <p className="text-[#2E2E2E]/60">CO₂ emissions reduced per user yearly</p>
            </div>
          </motion.div>
        </div>
      </section> */}

      <section className="py-24 px-6 md:px-12 bg-[#F9F9F5]">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-8 text-balance">
              Want to see how we designed Nouri?
            </h2>
            <Link href="/process">
              <Button
                size="lg"
                className="rounded-full bg-[#2E2E2E] text-white hover:bg-[#a8c686] duration-300 ease-in-out px-12 py-6 text-lg"
              >
                View full case study
              </Button>
            </Link>
          </motion.div>
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
      <nav className="max-w-7xl mx-auto lg:mx-14 px-6 md:px-12 h-20 flex items-center justify-between">
        <Link href="/" className="text-2xl font-inter font-bold text-[#a8c686]">
          Nouri
        </Link>
        
        <div className="flex items-center gap-12">
          <Link href="/" className="text-sm hover:text-[#7A9D54] transition-colors">
            Home
          </Link>
          <Link href="/process" className="text-sm hover:text-[#7A9D54] transition-colors">
            Process
          </Link>
          <Link href="/members" className="text-sm hover:text-[#7A9D54] transition-colors">
            The Team
          </Link>
        </div>

      </nav>
    </motion.header>
  )
}







function ProjectShowcase() {
  return (
    <>

      {/* KITCHEN INTELLIGENCE HUB */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h4 className="text-[#2E2E2E]/65 mb-2">Feature 1 - Track what you have</h4>
            <h3 className="text-4xl md:text-5xl font-light mb-6 text-balance">Kitchen Intelligence Hub</h3>
            <p className="text-lg text-[#2E2E2E]/70 leading-relaxed">
              Nouri keeps a live snapshot of what’s in your kitchen, what’s expiring soon, and how efficiently you’re using food. From here you can add items, scan receipts, and see at a glance what needs attention today.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img className="lg:ml-52" src="/KIH.png" height={350} width={350} alt="mockup of kitchen intelligence hub" />
            <p className="flex justify-center text-center items-center pl-40 pt-3.5 text-wrap text-[#7a9d54] font-semibold">Nouri keeps track of what you have in your <br /> pantry to prevent food waste.</p>
          </motion.div>
        </div>
      </section>



      {/* RECIPE RESCUE*/}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
              <img className="lg:ml-20" src="/RR.png" height={350} width={350} alt="mockup of recipe rescue" />
              <p className="flex justify-center text-center items-center pr-24 pt-3.5 text-wrap text-[#7a9d54] font-semibold">Nouri detects expiring items and suggests <br /> recipes to rescue them.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h4 className="text-[#2E2E2E]/65 mb-2">Feature 2 - Turn expiring food into meals</h4>
            <h3 className="text-4xl md:text-5xl font-light mb-6 text-balance">Recipe Rescue</h3>
            <p className="text-lg text-[#2E2E2E]/70 leading-relaxed">
              When ingredients are about to go bad, Nouri suggests recipes that rescue them. The cooking assistant walks you through each step with a clear timer and “skip step” options so cooking stays flexible, not stressful.
            </p>
          </motion.div>

        </div>
      </section>


        {/* NOURI NEXUS */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h4 className="text-[#2E2E2E]/65 mb-2">Feature 3 - See the impact of your habits</h4>
            <h3 className="text-4xl md:text-5xl font-light mb-6 text-balance">Nouri Nexus</h3>
            <p className="text-lg text-[#2E2E2E]/70 leading-relaxed">
              Nouri turns your saved meals and logged waste into a growing Nourishment Tree and weekly score. Small changes become visible progress, nudging you to keep building low-waste habits.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img className="lg:ml-52" src="/NN.png" height={350} width={350} alt="mockup of nouri nexus" />
            <p className="flex justify-center text-center items-center pl-40 pt-3.5 text-wrap text-[#7a9d54] font-semibold">Nouri shows you how your habits impact the environment and helps you make informed decisions.</p>
          </motion.div>
        </div>
      </section>

    </>
  )
}



function Footer() {
  return (
    <footer className="py-12 px-6 md:px-12 border-t border-[#2E2E2E]/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-[#2E2E2E]/60">© Nouri 2025 | All Rights Reserved</p>
      </div>
    </footer>
  )
}
