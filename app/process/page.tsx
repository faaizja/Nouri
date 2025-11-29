"use client"

import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ProcessPage() {
  return (

    <div className="bg-white text-[#2E2E2E] min-h-screen">
      <Header />

      <section className="min-h-screen flex items-center justify-center px-6 md:px-12 pt-20">
        <div className="max-w-7xl w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-light leading-[0.95] mb-8 text-balance">
              <span className="font-inter font-bold">A closer look </span> at <br /> how we designed <br />
              <span className="font-inter font-bold hover:text-[#a8c686]/75 duration-300 ease-in-out">Nouri</span>
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


      {/* wireframe image section */}
      <section className="py-16 px-6 md:px-12 bg-[#F9F9F5]">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <h1 className="text-2xl md:text-3xl lg:text-3xl font-light mb-8">Nouri started as a simple question: 
            <span className="italic font-semibold text-[#7a9d54]"> why is it still so hard to keep track of what is in your kitchen? </span>
             This page walks through how we researched, designed, and refined Nouri into a tool that helps home cooks waste less food and feel more confident about what they already have.</h1>
          <div className="relative aspect-video bg-white rounded-3xl overflow-hidden shadow-xl">
            <img
              src="https://s3-figma-hubfile-images-production.figma.com/hub/file/carousel/img/dde24df1ad16e83aedccec1f38d459233cc5f05a"
              alt="Next-level mockup"
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
            <h3 className="text-3xl md:text-4xl font-light mb-6">The Core Problem</h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-6 text-lg text-[#2E2E2E]/70 leading-relaxed"
          >
            <p>
              Home cooks want to waste less, but expiry dates, busy schedules, and forgotten leftovers make it hard to see what is actually in the kitchen. 
              Food often goes bad quietly at the back of the fridge, which means money lost and extra stress when deciding what to cook.
            </p>
            <p>
              Our mission was to design a system that makes food visibility <span className="text-[#7a9d54] italic font-semibold">simple</span>, 
              <span className="text-[#7a9d54] italic font-semibold"> reduces waste</span>, 
              and <span className="text-[#7a9d54] italic font-semibold">supports</span> everyday decision making 
              rather than adding more work.
            </p>
          </motion.div>

        </div> 
      </section>

      {/* all research section */}
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
              <div className="text-5xl md:text-6xl font-light mb-4">%</div>
              <p className="text-[#2E2E2E]/60">of users forget about food in their fridge until it expires</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-5xl md:text-6xl font-light mb-4">%</div>
              <p className="text-[#2E2E2E]/60">of purchased food ends up in the trash</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-5xl md:text-6xl font-light mb-4">%</div>
              <p className="text-[#2E2E2E]/60">want to reduce waste but lack the tools</p>
            </motion.div>
            </div>

          {/* 3 levels of findings */}
          <div className="grid md:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-4xl md:text-5xl font-light lg:mt-20 text-nowrap lg:mb-20">Three levels of findings (stage 2 slide 5)</h3>

              <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-x-64">
                <div className="flex-1 text-center lg:text-left lg:text-nowrap">
                  <div className="text-5xl md:text-6xl lg:text-3xl font-light mb-4">Human-Level <br /> findings</div>
                  <p className="text-[#2E2E2E]/60">food waste is rarely intentional</p>
                </div>

                <div className="flex-1 text-center lg:text-left lg:text-nowrap">
                  <div className="text-5xl md:text-6xl lg:text-3xl font-light mb-4">System-Level <br /> findings</div>
                  <p className="text-[#2E2E2E]/60">food waste is rarely intentional</p>
                </div>

                <div className="flex-1 text-center lg:text-left lg:text-nowrap">
                  <div className="text-5xl md:text-6xl lg:text-3xl font-light mb-4">Tech-Level <br /> findings</div>
                  <p className="text-[#2E2E2E]/60">food waste is rarely intentional</p>
                </div>
              </div>

              {/* transtion statement  */}
              <motion.div 
                className="mt-28 mb-16"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="relative">
                  <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-2 h-24 bg-[#a8c686] rounded-full"></div>
                  <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] text-nowrap pl-8 leading-relaxed">
                    These insights helped us <span className="italic font-light">narrow in</span><br />
                    on who our <span className="font-bold text-[#a8c686] relative">
                      solution
                      <motion.div 
                        className="absolute -bottom-1 left-0 w-full h-1 bg-[#a8c686]"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        viewport={{ once: true }}
                      ></motion.div>
                    </span> should serve.
                  </h1>
                </div>
              </motion.div> 

            </motion.div>
          </div>
          

          {/* our target audience */}
          <div className="grid md:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-4xl md:text-5xl font-light lg:mt-5 text-nowrap lg:mb-16">Our target audience (stage 2 slide 11)</h3>
              
              <h1 className="text-2xl lg:text-2xl font-light lg:mt-10 lg:mb-10 text-nowrap">Based on our research, we focused on two primary groups who feel the pain of food waste most strongly.</h1>

              {/* containers of audiences */}
              <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-x-12">

                <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-[#7A9D54]">
                  <div className="text-5xl md:text-6xl lg:text-3xl font-light mb-4 text-left">Gen Z & Millennials</div>
                  <p className="text-[#2E2E2E]/60 text-left  text-nowrap">Busy young adults who care about sustainability, 
                  want to save money <br /> on groceries, and are comfortable using apps to support daily routines.</p>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-[#7A9D54]">
                  <div className="text-5xl md:text-6xl lg:text-3xl font-light mb-4 text-left">Household Managers</div>
                  <p className="text-[#2E2E2E]/60 text-left text-nowrap">People who plan meals and manage groceries for their 
                  household, <br />often women, who juggle limited time, picky eaters, 
                  and the pressure <br />to use up food before it spoils.</p>
                </div>

              </div>
            </motion.div>
          </div>

          {/* personas */}
          <div className="md:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h1 className="text-4xl md:text-5xl font-light lg:mt-16 text-nowrap lg:mb-16">User Persona</h1>

              <h2 className="text-3xl text-nowrap italic font-normal">"I don't always have a chance to review what I 
                have before shopping, <br />so I don't really pay attention 
                to what's sitting in my fridge."
              </h2>

              <div className="flex flex-col lg:flex-row mt-10"> 
                
                <div className="mr-10"> 
                  <img src="/sarah.png" alt="a picture of our primary persona sarah" className="rounded-3xl drop-shadow-2xl h-[560px] w-[400px]" />
                </div>

                <div className="">
                  <h1 className="text-2xl font-semibold">Meet Sarah, <span className="italic">the on-the-go <span className="text-[#7a9d54]">household manager</span></span></h1>

                  <div className="bg-[#a8c686]/75 p-6 rounded-2xl mt-10">
                  <h2 className="text-lg font-semibold">About</h2>
                  <h3>24-year-old household manager who cooks 5-6 days weekly <br />but struggles with fragmented kitchen inventory memory.</h3>
                  </div>

                  <div className="bg-[#a8c686]/75 p-6 rounded-2xl mt-10">
                  <h2 className="text-lg font-semibold">Goals</h2>
                  <h3>Wants automated tracking that predicts when to restock <br />and suggests recipes from what's already in her kitchen.</h3>
                  </div>

                  <div className="bg-[#a8c686]/75 p-6 rounded-2xl mt-10">
                  <h2 className="text-lg font-semibold">Pain points</h2>
                  <h3>Makes grocery decisions blind, can't recall what's home <br />or how fresh it is. Mental tracking feels overwhelming.</h3>
                  </div>
                </div>

              </div>
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

      {/* design evolution section */}
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
                we can talk about initial ideas here and what our approach was when we started designing the ui and screens. in the image box above could be the mid-fidelity wireframes wireframes
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative aspect-[16/9] bg-white rounded-3xl overflow-hidden shadow-xl mb-12 lg:mt-20"
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
              <h4 className="text-2xl font-light mb-4">Final Design</h4>
              <p className="text-[#2E2E2E]/70 leading-relaxed">
                over here we can talk about the final design and how it was implemented and what we learned from the process and the final wireframes in the image box above
              </p>
            </motion.div>
          </div>

        </div>
      </section>

      {/* testing & results section */}
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
              We conducted 14 user testing sessions across 3 major iterations. we can talk more about some key insights we got
              from users and how the proves it gets the job done.
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
              <div className="text-5xl font-light mb-2">14</div>
              <p className="text-[#2E2E2E]/60">User Testing Sessions</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-5xl font-light mb-2">3</div>
              <p className="text-[#2E2E2E]/60">Major Iterations</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-5xl font-light mb-2">97%</div>
              <p className="text-[#2E2E2E]/60">User Satisfaction</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* final prototype section */}
      <section className="py-32 px-6 md:px-12 bg-[#7a9d54] text-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20 text-center"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">Final Prototype</h2>
            <p className="text-lg text-white max-w-2xl mx-auto font-medium">
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
              <div>
                <iframe
                  style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
                  width={800}
                  height={450}
                  src="https://embed.figma.com/proto/xUfsQbFl391Vu4UaAwQ5bE/IAT-334--Project-3-Backup?page-id=2667%3A19954&node-id=2669-22800&viewport=312%2C-237%2C0.07&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2669%3A23005&show-proto-sidebar=1&embed-host=share"
                  allowFullScreen
                />
              </div>
            </div>
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
        </div>

      </nav>
    </motion.header>
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