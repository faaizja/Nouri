"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function MeetTheMembersPage() {
  // Member data structure
  const teamMembers = [
    {
      name: "Erika Miranda",
      photoSrc: "/erika.jpeg",
      bio: "Erika led the development of Nouri’s brand identity and visual system,shaping the overall look and feel of the product. She also contributed to refining the wireflows and UX logic to help ensure a thoughtful and intuitive user experience.",
    },
    {
      name: "Faaiz Abdullah",
      photoSrc: "/faaiz.jpg",
      bio: "Faaiz contributed core research by conducting user interviews and analyzing data to identify key pain points. He then used these findings to architect the app's feature wireflows to ensure a logical and user experience.",
    },
  ];

  return (
    <div className="bg-white text-[#2E2E2E]">

      <Header /> 

      {/* Hero Section - Matching Landing Page Style */}
      <section className="min-h-screen flex items-center justify-center px-6 md:px-12 pt-20">
        <div className="max-w-7xl w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-light leading-[0.95] mb-8 text-balance">
              Meet the <span className="font-inter font-bold text-[#a8c686]">team</span> behind Nouri's mission to reduce food waste.
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="flex items-center gap-8 text-[#2E2E2E]/60"
          >
            <div>
              <p className="text-base">Scroll down to meet us</p>
            </div>
          </motion.div>
        </div>
      </section>

      {teamMembers.map((member, index) => (
        <section 
          key={member.name}
          className={`py-24 px-6 md:px-12 ${index % 2 === 0 ? 'bg-white' : 'bg-[#7a9d54]/40'}`}
        >
          <div 
            className={`max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center ${
              index % 2 !== 0 ? 'md:grid-cols-[2fr_1fr]' : 'md:grid-cols-[1fr_2fr]'
            }`} // Custom grid split for flow
          >
            
            {/* Member Photo (Order changes based on index for zigzag flow) */}
            <motion.div
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.5 }}
              className={`relative flex items-center justify-center ${
                index % 2 === 0 ? 'order-1 md:order-1' : 'order-1 md:order-2'
              }`} 
            >
              <div className="relative w-full max-w-sm aspect-square rounded-full overflow-hidden border-4 border-[#7A9D54] shadow-2xl">
                <img 
                  src={member.photoSrc} 
                  alt={`Photo of ${member.name}`} 
                  className="w-full h-full object-cover" 
                  // Placeholder style
                  style={{ backgroundColor: index % 2 === 0 ? '#dbead0' : '#eaf2e2' }} 
                />
              </div>
            </motion.div>

            {/* Member Details */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true, amount: 0.5 }}
              className={`space-y-4 ${
                index % 2 === 0 ? 'order-2 md:order-2' : 'order-2 md:order-1'
              }`}
            >
              <h2 className="text-5xl md:text-6xl font-light mb-2">
                {member.name}
              </h2>
              <p className="text-lg text-[#2E2E2E]/80 leading-relaxed max-w-lg">
                {member.bio}
              </p>
            </motion.div>

          </div>
        </section>
      ))}


      <Footer /> {/* Reuse the existing Footer component */}
    </div>
  )
}

// Re-using the Header and Footer components from your LandingPage
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

function Footer() {
  return (
    <footer className="py-12 px-6 md:px-12 border-t border-[#2E2E2E]/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-[#2E2E2E]/60">© Nouri 2025 | All Rights Reserved</p>
      </div>
    </footer>
  )
}