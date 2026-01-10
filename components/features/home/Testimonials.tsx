import { Quote } from "lucide-react";
import Image from "next/image";
import React from "react";

function Testimonials() {
  return (
    <section className="py-24 bg-slate-50/50 border-t">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight">
            Hear from our students
          </h2>
          <p className="mt-4 text-lg text-slate-500">
            Real stories from real professionals who accelerated their careers.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              text: "The AI summary feature saved me hours. I can quickly review key points from a 45-minute lecture in just 2 minutes.",
              name: "Alex Rivera",
              title: "Software Engineer at Meta",
              avatar: "https://i.pravatar.cc/150?u=alex",
            },
            {
              text: "Finally a platform that feels modern. The UI is clean, the content is expert-level, and the mobile experience is flawless.",
              name: "Sarah Jenkins",
              title: "Product Designer at Figma",
              avatar: "https://i.pravatar.cc/150?u=sarah",
            },
            {
              text: "The React Architecture course was exactly what I needed to lead my team's migration to micro-frontends.",
              name: "David Chen",
              title: "Tech Lead at Stripe",
              avatar: "https://i.pravatar.cc/150?u=david",
            },
          ].map((t, i) => (
            <div
              key={i}
              className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
            >
              <Quote className="h-8 w-8 text-slate-100 mb-4 fill-slate-100" />
              <p className="text-slate-600 leading-relaxed mb-8 italic">
                {`"${t.text}"`}
              </p>
              <div className="flex items-center gap-3">
                <Image
                  src={t.avatar}
                  className="h-10 w-10 rounded-full border border-slate-100"
                  alt={t.name}
                  width={700}
                  height={700}
                />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">{t.name}</h4>
                  <p className="text-[10px] font-medium text-slate-500 uppercase tracking-tight">
                    {t.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
