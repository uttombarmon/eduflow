"use client";
import Courses from "@/components/features/home/Courses";
import Features from "@/components/features/home/Features";
import FinalCTA from "@/components/features/home/FinalCTA";
import Hero from "@/components/features/home/Hero";
import HowItWorks from "@/components/features/home/HowItWorks";
import Stats from "@/components/features/home/Stats";
import Testimonials from "@/components/features/home/Testimonials";
import { motion } from "motion/react"; // Note: standard import is usually "framer-motion"

export default function Home() {
  const fadeInVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeInOut" as const },
    },
  };

  return (
    <>
      <main className="relative">
        <Hero />

        {/* We wrap sections in motion.section to animate on scroll */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInVariant}
        >
          <Stats />
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInVariant}
        >
          <Features />
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInVariant}
        >
          <HowItWorks />
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInVariant}
        >
          <Courses />
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInVariant}
        >
          <Testimonials />
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInVariant}
        >
          <FinalCTA />
        </motion.section>
      </main>

      {/* 3. Footer */}
      <footer className="border-t py-12 bg-white">
        <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 font-bold text-lg">
            <div className="flex h-6 w-6 items-center justify-center rounded bg-slate-900 text-slate-50">
              <span className="italic text-xs">E</span>
            </div>
            <span>EduFlow</span>
          </div>
          <p className="text-sm text-slate-500">
            © 2025 EduFlow Inc. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-sm text-slate-500 hover:text-slate-900 transition-colors"
            >
              Twitter
            </a>
            <a
              href="#"
              className="text-sm text-slate-500 hover:text-slate-900 transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
