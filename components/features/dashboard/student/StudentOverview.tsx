"use client";
import React from "react";
import { BookOpen, Clock, Award, Star, Play } from "lucide-react";
import Image from "next/image";
import { useAppSelector } from "@/lib/hooks";
import { RootState } from "@/lib/store";
import { redirect } from "next/navigation";
import Loading from "@/components/layout/Loading";

const StudentOverviews: React.FC = () => {
  const { user, isCheckingAuth } = useAppSelector(
    (state: RootState) => state.auth,
  );
  if (isCheckingAuth) return <Loading />;
  if (!user || user?.role === undefined) return redirect("/");

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-slate-500">
          Welcome back, {(user?.name as string).split(" ")[0]}. Here is
          what&apos;s happening today.
        </p>
      </div>

      {/* Grid Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {[
          {
            label: "Courses Enrolled",
            value: "4",
            icon: BookOpen,
            color: "text-indigo-600",
          },
          {
            label: "Learning Time",
            value: "12.5h",
            icon: Clock,
            color: "text-sky-600",
          },
          {
            label: "Average Score",
            value: "92%",
            icon: Star,
            color: "text-amber-600",
          },
          {
            label: "Certificates",
            value: "2",
            icon: Award,
            color: "text-emerald-600",
          },
        ].map((stat, i) => (
          <div
            key={i}
            className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <div className="flex flex-row items-center justify-between space-y-0 pb-2">
              <p className="text-sm font-medium tracking-tight text-slate-500">
                {stat.label}
              </p>
              <stat.icon
                size={16}
                className={`text-muted-foreground ${stat.color}`}
              />
            </div>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p className="text-xs text-slate-500 mt-1">+2% from last month</p>
          </div>
        ))}
      </div>

      {/* <div className="grid gap-6 md:grid-cols-7">
        <div className="md:col-span-4 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold tracking-tight">
              Continue Learning
            </h2>
          </div>
          <div className="grid gap-3">
            {activeCourses.map((course) => (
              <div
                key={course.id}
                className="group relative flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition-all hover:bg-slate-50 cursor-pointer"
              // onClick={() => onCourseSelect(course.id)}
              >
                <Image
                  src={course.thumbnail}
                  className="h-14 w-24 rounded-md object-cover"
                  width={300}
                  height={300}
                  alt="Thumbnail"
                />
                <div className="flex-1 space-y-1 overflow-hidden">
                  <h3 className="font-semibold text-sm truncate">
                    {course.title}
                  </h3>
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 flex-1 rounded-full bg-slate-100 overflow-hidden max-w-[120px]">
                      <div
                        className="h-full bg-slate-900"
                        style={{ width: `${course.progress}%` }}
                      />
                    </div>
                    <span className="text-[10px] font-medium text-slate-500">
                      {course.progress}%
                    </span>
                  </div>
                </div>
                <button className="inline-flex items-center justify-center rounded-md h-9 w-9 border border-slate-200 bg-white hover:bg-slate-100">
                  <Play size={14} className="fill-slate-900" />
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="md:col-span-3 space-y-4">
          <h2 className="text-xl font-semibold tracking-tight">
            Recommendations
          </h2>
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm space-y-4">
            <p className="text-sm text-slate-500">
              Based on your recent activity with{" "}
              <span className="font-medium text-slate-900">
                React Architecture
              </span>
              .
            </p>
            <div className="space-y-4">
              {[
                { title: "Advanced TS Patterns", time: "4h 20m", tag: "Pro" },
                {
                  title: "Server Components Deep Dive",
                  time: "2h 15m",
                  tag: "New",
                },
              ].map((rec, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 group cursor-pointer"
                >
                  <div className="h-10 w-10 rounded bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-slate-200">
                    <BookOpen size={18} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">{rec.title}</p>
                    <p className="text-xs text-slate-500">{rec.time}</p>
                  </div>
                  <span className="text-[10px] font-bold uppercase border px-1.5 py-0.5 rounded border-slate-200">
                    {rec.tag}
                  </span>
                </div>
              ))}
            </div>
            <button className="w-full mt-2 inline-flex items-center justify-center rounded-md text-sm font-medium border border-slate-200 bg-white h-9 px-4 hover:bg-slate-100">
              Explore All
            </button>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default StudentOverviews;
