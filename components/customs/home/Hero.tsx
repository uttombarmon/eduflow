"use client";
import { ArrowRight, Sparkles } from "lucide-react";
import { easeIn, motion } from "motion/react";

function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, filter: "blur(20px)" }}
      animate={{ opacity: 1, filter: "blur(0px)" }}
      transition={{ ease: easeIn, duration: 1 }}
      className="relative pt-32 pb-24 lg:pt-52 lg:pb-40 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-6 text-center">
        <div className="mx-auto flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-slate-200 bg-linear-to-tr from-orange-500/30 to-pink-300/30 px-7 py-2 mb-8 animate-in fade-in slide-in-from-bottom-2">
          <Sparkles className="h-4 w-4 text-rose-700 animate-pulse" />
          <p className="text-sm font-medium text-slate-900">
            Experience AI-augmented education
          </p>
        </div>
        <h1 className="mx-auto max-w-4xl text-5xl font-bold tracking-tight text-slate-900 sm:text-7xl mb-8 leading-[1.1]">
          Build skills that matter with{" "}
          <span className="underline decoration-indigo-200 decoration-8 underline-offset-8">
            EduFlow
          </span>
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-slate-500 mb-12 leading-relaxed">
          The intelligent learning platform for modern professionals. Powered by
          Google Gemini for summaries, quiz generation, and personalized paths.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            // onClick={onStart}
            className="inline-flex h-12 items-center justify-center rounded-md bg-slate-900 px-8 text-base font-medium text-slate-50 shadow transition-all hover:bg-slate-900/90"
          >
            Get Started for Free
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
          <button className="inline-flex h-12 items-center justify-center rounded-md border border-slate-200 bg-white px-8 text-base font-medium shadow-sm hover:bg-slate-100 transition-all">
            Learn More
          </button>
        </div>
        {/* Partner Logos */}
        <div className="mt-20">
          <p className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-8">
            Trusted by teams at
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-50 grayscale">
            <span className="text-2xl font-bold tracking-tighter text-slate-900">
              STRIPE
            </span>
            <span className="text-2xl font-bold tracking-tighter text-slate-900">
              VERCEL
            </span>
            <span className="text-2xl font-bold tracking-tighter text-slate-900">
              LINEAR
            </span>
            <span className="text-2xl font-bold tracking-tighter text-slate-900">
              AIRBNB
            </span>
            <span className="text-2xl font-bold tracking-tighter text-slate-900">
              NOTION
            </span>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Hero;
