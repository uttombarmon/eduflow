import Courses from "@/components/customs/home/Courses";
import Features from "@/components/customs/home/Features";
import Hero from "@/components/customs/home/Hero";
import Navbar from "@/components/customs/home/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white">
      <Navbar />
      <main>
        {/* Hero Section */}
        <Hero />
        {/* Features Grid */}
        <Features />
        {/* Course Previews */}
        <Courses />
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
