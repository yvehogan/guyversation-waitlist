import React from 'react'
import { motion } from "framer-motion";
import Image from 'next/image';
const FeatureSection = () => {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-[64px] font-medium text-black mb-6">
              Boys Need Space to Talk. We&apos;re Here to Make It Happen.
            </h2>
            <p className="text-black text-[18px] font-light">
              Too often, boys are taught to stay quiet about their feelings. At
              Guyversation, we&apos;re changing that by creating a space where young
              guys can speak freely, ask questions, and get guidance from
              trusted mentors who&apos;ve been there.
            </p>
          </motion.div>
          <motion.div
            className="md:w-1/2 relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="/svgs/boys.svg"
              alt="Boys in conversation"
              width={600}
              height={400}
              className="rounded-3xl relative z-10 w-full h-auto"
            />
          </motion.div>
        </div>
      </section>
  )
}

export default FeatureSection;
