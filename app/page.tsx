"use client";

import Image from "next/image";
import Link from "next/link";
import { Montserrat } from "next/font/google";
import { motion } from "framer-motion";
import BenefitCard from "@/components/benefits-card";
import HeroSection from "@/components/hero-section";
import FeatureSection from "@/components/feature-section";
import BenefitsSection from "@/components/benefits-section";
import Footer from "@/components/footer";
import Header from "@/components/header";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <div className="bg-[#F3E9FD33] h-screen flex flex-col">
        <Header />

        <HeroSection />
      </div>
      <div className="bg-white">
        <FeatureSection />
        <BenefitsSection />
      </div>
      <Footer />
    </main>
  );
}
