import { BrainCircuit, Globe, Sparkles, Trophy, Users } from "lucide-react";
import React from "react";

function Features() {
  return (
    <section className="py-24" id="features">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Everything you need to grow
          </h2>
          <p className="mt-4 text-lg text-slate-500">
            Powerful features to help you master any subject with ease.
          </p>
        </div>
        <div className="grid gap-12 md:grid-cols-3">
          {[
            {
              title: "AI Summaries",
              description:
                "Get key takeaways from long lectures instantly using our Gemini-powered engine.",
              icon: BrainCircuit,
            },
            {
              title: "Expert Tutors",
              description:
                "Learn from industry veterans with years of experience at top-tier tech companies.",
              icon: Users,
            },
            {
              title: "Global Access",
              description:
                "Access your coursework anytime, anywhere, on any device with offline syncing.",
              icon: Globe,
            },
            {
              title: "Smart Quizzes",
              description:
                "Reinforce your knowledge with automatically generated quizzes tailored to each lesson.",
              icon: Sparkles,
            },
            {
              title: "Peer Networking",
              description:
                "Connect with thousands of other professionals learning the same skills.",
              icon: Globe,
            },
            {
              title: "Verified Certificates",
              description:
                "Earn industry-recognized certificates to boost your LinkedIn and resume.",
              icon: Trophy,
            },
          ].map((f, i) => (
            <div
              key={i}
              className="group flex flex-col items-start gap-4 p-6 rounded-2xl border border-transparent hover:border-slate-100 hover:bg-slate-50/50 transition-all"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg border bg-white shadow-sm transition-all group-hover:bg-slate-900 group-hover:text-white">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold tracking-tight">{f.title}</h3>
              <p className="text-slate-500 leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
