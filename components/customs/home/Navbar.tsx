"use client";
import { setAuthModalOpen, setAuthMode } from "@/lib/features/UIslice";
import { RootState } from "@/lib/store";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Navbar: React.FC = () => {
  const dispatch = useDispatch();
  const handleAuthTrigger = (mode: "login" | "signup") => {
    dispatch(setAuthMode(mode));
    dispatch(setAuthModalOpen(true));
  };
  const { user } = useSelector((state: RootState) => state.auth);
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
          {[
            { name: "Features", path: "#features" },
            { name: "Courses", path: "/courses" },
            { name: "Blog", path: "/blogs" },
            { name: "Contact Us", path: "/contact-us" },
          ].map((item) => (
            <Link
              key={item.name}
              href={item?.path}
              className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors"
            >
              {item?.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {user ? (
            <Link
              href={"/dashboard"}
              className="text-sm font-medium flex bg-slate-400/20 rounded-3xl text-slate-700 hover:text-slate-900 px-4 py-2"
            >
              Dashboard
              <ArrowRight size={20} />
            </Link>
          ) : (
            <>
              <button
                onClick={() => handleAuthTrigger("login")}
                className="text-sm font-medium text-slate-500 hover:text-slate-900 px-4 py-2"
              >
                Log in
              </button>
              <button
                onClick={() => handleAuthTrigger("signup")}
                className="inline-flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-sm font-medium text-slate-50 shadow hover:bg-slate-900/90 transition-all"
              >
                Join Free
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
