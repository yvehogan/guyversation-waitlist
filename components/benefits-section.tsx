import React from 'react';
import { motion } from "framer-motion";
import BenefitCard from './benefits-card';


const BenefitsSection = () => {
  return (
    <section id="benefits" className="container mx-auto px-4 py-16 md:py-24">
        <motion.h2
          className="text-3xl md:text-[64px] font-medium text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Why Join Guyversation?
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          <BenefitCard
            icon="mentorship"
            title="One-on-One Mentorship"
            description="Connect boys with positive male role models for guidance and support."
            delay={0}
          />
          <BenefitCard
            icon="mental-health"
            title="Mental Health Support"
            description="Access licensed therapists for personal growth, stress, and emotional wellness."
            delay={0.1}
          />
          <BenefitCard
            icon="education"
            title="Life Skills & Educational Content"
            description="Age-appropriate videos, guides, and courses to build confidence and resilience."
            delay={0.2}
          />
          
          {/* Modified container for last two cards with mobile spacing */}
          <div className="flex flex-col gap-8 md:col-span-1 lg:col-span-3 lg:flex-row lg:justify-center lg:w-full lg:max-w-[832px]">
            <BenefitCard
              icon="community"
              title="Community Spaces"
              description="Join moderated group discussions and activities with like-minded peers and mentors."
              delay={0.3}
            />
            <BenefitCard
              icon="goals"
              title="Goal Setting & Progress Tools"
              description="Track personal development, achievements, and emotional growth."
              delay={0.4}
            />
          </div>
        </div>
      </section>
  )
}

export default BenefitsSection
