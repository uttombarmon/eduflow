"use client";
import React from "react";
import {
  Users,
  DollarSign,
  BookOpen,
  Star,
  ArrowUpRight,
  MoreHorizontal,
  Plus,
} from "lucide-react";
import { useGetUserProfileQuery } from "@/lib/features/auth/userApi";
import TutorStatCard from "./TutorStatCard";
import TopCourseItem from "./TopCourseItem";

const TutorDashboardd = () => {
  const { data: user } = useGetUserProfileQuery();

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      {/* Welcome Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">
            Instructor Overview
          </h1>
          <p className="text-slate-500 mt-1">
            Welcome back, {user?.name || "Tutor"}. Here's what's happening with
            your courses.
          </p>
        </div>
        <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl font-bold transition-all shadow-lg shadow-blue-200 active:scale-95">
          <Plus size={20} />
          Create New Course
        </button>
      </div>

      {/* Primary Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <TutorStatCard
          title="Total Revenue"
          value="$12,840.50"
          change="+14%"
          icon={<DollarSign className="text-emerald-600" />}
          trend="up"
        />
        <TutorStatCard
          title="Total Students"
          value="1,420"
          change="+8%"
          icon={<Users className="text-blue-600" />}
          trend="up"
        />
        <TutorStatCard
          title="Course Ratings"
          value="4.9"
          change="0.2"
          icon={<Star className="text-amber-500" />}
          trend="up"
        />
        <TutorStatCard
          title="Active Courses"
          value="8"
          change="New"
          icon={<BookOpen className="text-indigo-600" />}
          trend="neutral"
        />
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Sales Chart Area */}
        <div className="lg:col-span-2 bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-slate-900 text-lg">Revenue Growth</h3>
            <select className="text-sm border-none bg-slate-50 rounded-lg px-3 py-1 outline-none font-medium">
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
            </select>
          </div>
          <div className="h-64 flex items-end justify-between gap-2 px-2">
            {/* Simple CSS Bar Chart Placeholder */}
            {[40, 70, 45, 90, 65, 80, 95].map((h, i) => (
              <div
                key={i}
                className="group relative flex-1 flex flex-col items-center"
              >
                <div
                  className="w-full bg-blue-100 group-hover:bg-blue-600 transition-all rounded-t-lg"
                  style={{ height: `${h}%` }}
                />
                <span className="text-[10px] text-slate-400 mt-2 font-bold">
                  Day {i + 1}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Top Performing Courses */}
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
          <h3 className="font-bold text-slate-900 text-lg mb-6">
            Your Best Sellers
          </h3>
          <div className="space-y-6">
            <TopCourseItem title="Fullstack Next.js" sales={420} price="$89" />
            <TopCourseItem title="Mastering Tailwind" sales={310} price="$49" />
            <TopCourseItem title="Framer Motion Pro" sales={150} price="$59" />
          </div>
          <button className="w-full mt-8 py-3 text-sm font-bold text-blue-600 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors">
            View Analytics
          </button>
        </div>
      </div>
    </div>
  );
};


export default TutorDashboardd;
