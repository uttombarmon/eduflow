import { CheckCircle2, Rocket } from "lucide-react";
import React from "react";

function FinalCTA() {
  return (
    <section className="py-24 overflow-hidden relative">
      <div className="absolute inset-0 bg-slate-900 -z-10"></div>
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-150 h-150 bg-indigo-500/10 rounded-full blur-[100px] -z-10"></div>

      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-shadow-slate-700 sm:text-5xl mb-6">
          Ready to start your next learning journey?
        </h2>
        <p className="text-slate-400 text-lg mb-10 leading-relaxed">
          Join over 120,000+ professionals who are building the future of
          technology every day on EduFlow.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            // onClick={onStart}
            className="inline-flex h-12 w-full sm:w-auto items-center justify-center rounded-md bg-white px-8 text-base font-bold text-slate-900 shadow-xl transition-all hover:bg-slate-100"
          >
            Get Started for Free
            <Rocket className="ml-2 h-5 w-5" />
          </button>
          <button className="inline-flex h-12 w-full sm:w-auto items-center justify-center rounded-md border border-slate-700 bg-transparent px-8 text-base font-medium text-slate-700 hover:bg-white transition-all">
            Contact Sales
          </button>
        </div>
        <div className="mt-12 flex items-center justify-center gap-8 text-slate-500 text-sm">
          <div className="flex items-center gap-2">
            <CheckCircle2 size={16} className="text-emerald-500" />
            <span>No credit card required</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 size={16} className="text-emerald-500" />
            <span>Cancel anytime</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FinalCTA;
