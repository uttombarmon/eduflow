"use client";
import AuthModal from "@/components/customs/auth/AuthModal";
import Courses from "@/components/customs/home/Courses";
import Features from "@/components/customs/home/Features";
import FinalCTA from "@/components/customs/home/FinalCTA";
import Hero from "@/components/customs/home/Hero";
import HowWorks from "@/components/customs/home/HowWorks";
import Navbar from "@/components/customs/home/Navbar";
import States from "@/components/customs/home/States";
import Testimonials from "@/components/customs/home/Testimonials";
import { useState } from "react";

export default function Home() {
  const [authmodal, setAuthModal] = useState<"login" | "signup">("login");
  const [isOpen, setOpen] = useState<boolean>(false);
  const onLogin = () => setAuthModal("login");
  const onSignup = () => setAuthModal("signup");
  const onClose = () => setOpen(!isOpen);
  return (
    <div>
      <AuthModal isOpen={isOpen} onClose={onClose} initialMode={authmodal} />
      <Navbar onLogin={onLogin} onSignup={onSignup} />
      <main>
        {/* Hero Section */}
        <Hero />
        {/* Stats Section */}
        <States />
        {/* Features Grid */}
        <Features />
        {/* How it Works Section */}
        <HowWorks />
        {/* Course Previews */}
        <Courses />
        {/* Testimonials */}
        <Testimonials />
        {/* Final CTA Section */}
        <FinalCTA />
      </main>
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
    </div>
  );
}
