import React from "react";

function States() {
  return (
    <section className="py-20 border-y bg-slate-50/40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Active Learners", value: "120k+" },
            { label: "Expert Courses", value: "500+" },
            { label: "Success Rate", value: "94%" },
            { label: "Countries", value: "180+" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl font-bold text-slate-900 mb-2">
                {stat.value}
              </div>
              <div className="text-sm font-medium text-slate-500 uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default States;
