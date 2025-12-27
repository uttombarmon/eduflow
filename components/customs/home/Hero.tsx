import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";

function Hero() {
  return (
    <section className="relative pt-32 pb-24 lg:pt-52 lg:pb-40 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <div className="mx-auto flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-slate-200 bg-slate-50/50 px-7 py-2 mb-8 animate-in fade-in slide-in-from-bottom-2">
          <Sparkles className="h-4 w-4 text-slate-900" />
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
      </div>
    </section>
  );
}

export default Hero;
