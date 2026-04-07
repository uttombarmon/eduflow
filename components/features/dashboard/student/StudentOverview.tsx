"use client";
import Loading from "@/components/layout/Loading";
import { useGetStudentDashboardQuery } from "@/lib/features/dashboard/student/studentApi";
import { useAppSelector } from "@/lib/hooks";
import { RootState } from "@/lib/store";
import * as Icons from "lucide-react";
import { redirect } from "next/navigation";
import React from "react";
import ActiveCourses from "./ActiveCourses";

const IconMap: Record<string, React.ElementType> = {
  BookOpen: Icons.BookOpen,
  Clock: Icons.Clock,
  Star: Icons.Star,
  Award: Icons.Award,
  // Add any other icons you expect from your JSON here
};

const StudentOverviews: React.FC = () => {
  const { user, isCheckingAuth } = useAppSelector(
    (state: RootState) => state.auth,
  );
  const { data, isLoading, error } = useGetStudentDashboardQuery();
  const stats = data?.data?.stats;
  // console.log(data);
  if (isCheckingAuth) return <Loading />;
  if (!user || user?.role === undefined) {
    redirect("/");
    return null;
  }
  if (isLoading) return <Loading />;
  if (error) return <div>Error</div>;
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
        {stats &&
          stats.map((stat: any, i: number) => {
            const IconComponent = IconMap[stat.icon] || Icons.HelpCircle;
            return (
              <div
                key={i}
                className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <p className="text-sm font-medium tracking-tight text-slate-500">
                    {stat.label}
                  </p>
                  <IconComponent
                    size={16}
                    className={`text-muted-foreground ${stat.color}`}
                  />
                </div>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-slate-500 mt-1">{stat?.trend}</p>
              </div>
            );
          })}
      </div>

      <div className="grid gap-6 md:grid-cols-7">
        <div className="md:col-span-4 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold tracking-tight">
              Continue Learning
            </h2>
          </div>
          <ActiveCourses activeCourses={data?.data?.activeCourses} />
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
                    <Icons.BookOpen size={18} />
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
      </div>
    </div>
  );
};

export default StudentOverviews;
