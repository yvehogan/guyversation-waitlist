import React from 'react'
import { motion } from "framer-motion";
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="container mx-auto px-4 flex-grow flex flex-col justify-center items-center">
          <motion.h1
            className="text-4xl md:text-7xl font-semibold text-neutral-100 mb-6 leading-12 md:leading-20 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Helping Boys Grow Through <br />
            <span className="bg-gradient-to-r from-[#9c4dcc] to-[#f05454] bg-clip-text text-transparent">
              Real Conversations
            </span>
          </motion.h1>
          <motion.p
            className="max-w-5xl mx-auto text-neutral-200 font-light mb-10 text-[20px] text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Guyversation is a safe, supportive platform where young boys connect
            with positive mentors—so they can open up, build confidence, and
            grow into their best selves.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <Link
              href="https://forms.gle/V93vo9ivBraT13Kc9"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#9c4dcc] text-white rounded-full px-8 py-3 font-medium hover:bg-[#8a3cb8] transition-colors inline-block"
            >
              Join the Waitlist
            </Link>
          </motion.div>
        </section>
  )
}

export default HeroSection;
