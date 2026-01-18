"use client";

import React, { useState } from "react";
import {
    TrendingUp,
    Users,
    DollarSign,
    Clock,
    ArrowUpRight,
    ArrowDownRight,
    Filter,
    Download,
    Calendar
} from "lucide-react";
import { Button } from "@/components/ui/button";

const AnalyticsPage = () => {

    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900 tracking-tight">
                        Analytics Overview
                    </h1>
                    <p className="text-slate-500 mt-1">
                        Track your revenue, student growth, and course performance.
                    </p>
                </div>
                <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2 px-3 py-2 bg-white border border-slate-200 rounded-xl text-sm font-medium text-slate-600 shadow-sm">
                        <Calendar size={16} className="text-slate-400" />
                        <span>Last 30 Days</span>
                    </div>
                    <Button variant="outline" className="hidden sm:flex gap-2">
                        <Download size={16} />
                        Export Report
                    </Button>
                </div>
            </div>

            {/* Overview Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard
                    title="Total Revenue"
                    value="$12,840.50"
                    change="+12.5%"
                    trend="up"
                    icon={<DollarSign className="text-emerald-600" size={24} />}
                    color="bg-emerald-50 text-emerald-600"
                />
                <StatCard
                    title="Active Students"
                    value="1,420"
                    change="+8.2%"
                    trend="up"
                    icon={<Users className="text-blue-600" size={24} />}
                    color="bg-blue-50 text-blue-600"
                />
                <StatCard
                    title="Course Completion"
                    value="68%"
                    change="-2.1%"
                    trend="down"
                    icon={<TrendingUp className="text-violet-600" size={24} />}
                    color="bg-violet-50 text-violet-600"
                />
                <StatCard
                    title="Avg. Watch Time"
                    value="42m"
                    change="+5.4%"
                    trend="up"
                    icon={<Clock className="text-amber-600" size={24} />}
                    color="bg-amber-50 text-amber-600"
                />
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
                {/* Main Chart Area */}
                <div className="lg:col-span-2 bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h3 className="font-bold text-slate-900 text-lg">Revenue Growth</h3>
                            <p className="text-sm text-slate-500">Monthly revenue performance</p>
                        </div>
                        <div className="flex gap-2">
                            {/* Mock Legend */}
                            <div className="flex items-center gap-2 text-xs font-medium text-slate-600">
                                <span className="w-2 h-2 rounded-full bg-blue-600"></span> Current
                                <span className="w-2 h-2 rounded-full bg-slate-200"></span> Previous
                            </div>
                        </div>
                    </div>

                    {/* Simple CSS Bar Chart */}
                    <div className="h-64 flex items-end justify-between gap-3 sm:gap-6 px-2">
                        {[40, 65, 45, 90, 65, 80, 95, 55, 70, 85, 60, 75].map((h, i) => (
                            <div key={i} className="group relative flex-1 flex flex-col items-center gap-2">
                                <div className="w-full bg-slate-100 rounded-t-sm relative h-full">
                                    {/* Foreground Bar */}
                                    <div
                                        className="absolute bottom-0 w-full bg-blue-600 rounded-t-sm transition-all duration-500 group-hover:bg-blue-700"
                                        style={{ height: `${h}%` }}
                                    >
                                        <div className="opacity-0 group-hover:opacity-100 absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-xs py-1 px-2 rounded pointer-events-none transition-opacity font-bold">
                                            ${h * 100}
                                        </div>
                                    </div>
                                </div>
                                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                                    {['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'][i]}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Top Courses List */}
                <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="font-bold text-slate-900 text-lg">Top Performing</h3>
                        <Button variant="ghost" size="icon-sm" className="text-slate-400">
                            <Filter size={16} />
                        </Button>
                    </div>
                    <div className="space-y-6">
                        <TopCourseRow
                            title="Fullstack Next.js"
                            revenue="$4,200"
                            students="420"
                            color="bg-blue-100 text-blue-700"
                        />
                        <TopCourseRow
                            title="Mastering Tailwind"
                            revenue="$2,850"
                            students="310"
                            color="bg-teal-100 text-teal-700"
                        />
                        <TopCourseRow
                            title="UI/UX Design Masterclass"
                            revenue="$1,200"
                            students="156"
                            color="bg-purple-100 text-purple-700"
                        />
                        <TopCourseRow
                            title="React Native Crypto App"
                            revenue="$980"
                            students="85"
                            color="bg-orange-100 text-orange-700"
                        />
                    </div>
                    <Button variant="outline" className="w-full mt-6">
                        View All Courses
                    </Button>
                </div>
            </div>
        </div>
    );
};

// Sub-components
const StatCard = ({ title, value, change, trend, icon, color }: any) => (
    <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
        <div className="flex justify-between items-start mb-4">
            <div className={`p-3 rounded-2xl ${color}`}>
                {icon}
            </div>
            <div className={`flex items-center text-xs font-bold ${trend === 'up' ? 'text-emerald-600 bg-emerald-50' : 'text-rose-600 bg-rose-50'} px-2 py-1 rounded-full`}>
                {trend === 'up' ? <ArrowUpRight size={14} className="mr-1" /> : <ArrowDownRight size={14} className="mr-1" />}
                {change}
            </div>
        </div>
        <p className="text-sm font-medium text-slate-500">{title}</p>
        <h3 className="text-2xl font-black text-slate-900 mt-1">{value}</h3>
    </div>
);

const TopCourseRow = ({ title, revenue, students, color }: any) => (
    <div className="flex items-center gap-4">
        <div className={`h-10 w-10 rounded-lg flex items-center justify-center font-bold text-xs ${color}`}>
            CS
        </div>
        <div className="flex-1">
            <h4 className="font-bold text-sm text-slate-900 line-clamp-1">{title}</h4>
            <div className="flex items-center gap-3 mt-0.5">
                <span className="text-xs text-slate-500 font-medium">{students} Students</span>
                <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                <span className="text-xs text-emerald-600 font-bold">{revenue}</span>
            </div>
        </div>
    </div>
)

export default AnalyticsPage;
