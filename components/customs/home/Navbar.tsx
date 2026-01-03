"use client";
import React, { useState, useEffect } from "react";

interface LandingNavbarProps {
  onLogin: () => void;
  onSignup: () => void;
}

const Navbar: React.FC<LandingNavbarProps> = ({ onLogin, onSignup }) => {
  // const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-60 border-b transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md py-3"
          : "bg-transparent py-5 border-transparent"
      }`}
    >
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-2 font-bold text-xl tracking-tight">
          <div className="flex h-8 w-8 items-center justify-center rounded bg-slate-900 text-slate-50">
            <span className="italic text-sm">E</span>
          </div>
          <span>EduFlow</span>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          {["Features", "Courses", "Pricing", "Enterprise"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={onLogin}
            className="text-sm font-medium text-slate-500 hover:text-slate-900 px-4 py-2"
          >
            Log in
          </button>
          <button
            onClick={onSignup}
            className="inline-flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-sm font-medium text-slate-50 shadow hover:bg-slate-900/90 transition-all"
          >
            Join Free
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
