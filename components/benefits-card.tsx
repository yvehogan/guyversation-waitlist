"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import { LuGraduationCap } from "react-icons/lu"
import { PiHandshakeFill } from "react-icons/pi"
import { HiOutlineUserGroup } from "react-icons/hi"

interface BenefitCardProps {
  icon: string
  title: string
  description: string
  delay?: number
}

export default function BenefitCard({ icon, title, description, delay = 0 }: BenefitCardProps) {
  const getIcon = () => {
    switch (icon) {
      case "mentorship":
        return <PiHandshakeFill className="text-secondary-500 h-10 w-10" />
      case "mental-health":
        return (
            <Image 
            src="/icons/health.svg" 
            alt="Goals icon" 
            width={40} 
            height={40} 
            className="text-secondary-500" 
          />
        ) 
      case "education":
        return <LuGraduationCap className="text-secondary-500 h-10 w-10" />
      case "community":
        return <HiOutlineUserGroup className="text-secondary-500 h-10 w-10" />
      case "goals":
        return (
          <Image 
            src="/icons/goal.svg" 
            alt="Goals icon" 
            width={40} 
            height={40} 
            className="text-secondary-500" 
          />
        )
      default:
        return null
    }
  }

  return (
    <motion.div
      className="bg-[#EDF9F4] p-6 rounded-[20px]"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="mb-4">{getIcon()}</div>
      <h3 className="text-lg font-semibold black mb-2">{title}</h3>
      <p className="text-lg font-light">{description}</p>
    </motion.div>
  )
}