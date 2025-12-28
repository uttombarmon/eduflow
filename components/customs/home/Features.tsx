import { BrainCircuit, Globe, Users } from "lucide-react";
import React from "react";

function Features() {
  return (
    <section className="py-24 border-t bg-slate-50/50">
      <div className="mx-auto max-w-7xl px-6">
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
          ].map((f, i) => (
            <div key={i} className="group flex flex-col items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg border bg-white shadow-sm transition-all group-hover:scale-110">
                <f.icon className="h-6 w-6 text-slate-900" />
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
