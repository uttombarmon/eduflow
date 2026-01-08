import { BookOpen, Play, Search, Sparkles, Trophy } from "lucide-react";
import React from "react";

function HowWorks() {
  return (
    <section className="py-24 bg-slate-900 text-slate-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
              How EduFlow works
            </h2>
            <p className="text-slate-400 text-lg mb-10 leading-relaxed">
              We&apos;ve streamlined the learning process to be as efficient as
              possible. Focus on the knowledge, we&apos;ll handle the
              organization.
            </p>

            <div className="space-y-8">
              {[
                {
                  icon: Search,
                  title: "Discover",
                  desc: "Browse our curated library of expert-led courses.",
                },
                {
                  icon: BookOpen,
                  title: "Engage",
                  desc: "Watch high-quality video modules with synchronized notes.",
                },
                {
                  icon: Sparkles,
                  title: "AI Assist",
                  desc: "Use AI to summarize complex topics and generate quizzes.",
                },
                {
                  icon: Trophy,
                  title: "Certify",
                  desc: "Complete assessments and earn your verified certificate.",
                },
              ].map((step, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-800 text-slate-200">
                    <step.icon size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">{step.title}</h4>
                    <p className="text-slate-400 mt-1">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-linear-to-tr from-indigo-500 to-sky-400 p-8 shadow-2xl overflow-hidden group">
              <div className="bg-white/10 backdrop-blur-md h-full w-full rounded-xl border border-white/20 p-6 flex flex-col">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-3 w-3 rounded-full bg-red-400"></div>
                  <div className="h-3 w-3 rounded-full bg-amber-400"></div>
                  <div className="h-3 w-3 rounded-full bg-emerald-400"></div>
                </div>
                <div className="flex-1 space-y-4">
                  <div className="h-4 w-3/4 bg-white/20 rounded"></div>
                  <div className="h-4 w-1/2 bg-white/20 rounded"></div>
                  <div className="mt-8 space-y-3">
                    <div className="h-20 w-full bg-white/10 rounded-lg flex items-center justify-center">
                      <Play className="text-white fill-white" size={32} />
                    </div>
                    <div className="h-3 w-full bg-white/10 rounded"></div>
                    <div className="h-3 w-5/6 bg-white/10 rounded"></div>
                  </div>
                </div>
                <div className="mt-6 flex justify-between items-center">
                  <div className="h-8 w-24 bg-white/30 rounded-md"></div>
                  <div className="h-8 w-32 bg-indigo-600 rounded-md shadow-lg"></div>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 h-32 w-32 bg-indigo-500/20 blur-3xl rounded-full"></div>
            <div className="absolute -top-6 -left-6 h-32 w-32 bg-sky-500/20 blur-3xl rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowWorks;
