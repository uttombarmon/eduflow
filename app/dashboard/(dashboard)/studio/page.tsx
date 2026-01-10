"use client";

import React, { useState } from "react";
import {
    Plus,
    Search,
    Filter,
    MoreHorizontal,
    Edit3,
    Trash2,
    Eye,
    BarChart2,
    BookOpen,
    Users
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "motion/react"

// Mock Data for Courses
const MOCK_COURSES = [
    {
        id: 1,
        title: "Fullstack Next.js: The Complete Guide",
        thumbnail: "bg-blue-600",
        status: "Published",
        price: "$89.00",
        sales: 420,
        rating: 4.8,
        lastUpdated: "2 days ago",
    },
    {
        id: 2,
        title: "Mastering Tailwind CSS",
        thumbnail: "bg-teal-500",
        status: "Published",
        price: "$49.00",
        sales: 310,
        rating: 4.9,
        lastUpdated: "5 days ago",
    },
    {
        id: 3,
        title: "React Native for Beginners",
        thumbnail: "bg-violet-600",
        status: "Draft",
        price: "$59.00",
        sales: 0,
        rating: 0,
        lastUpdated: "1 week ago",
    },
    {
        id: 4,
        title: "Advanced TypeScript Patterns",
        thumbnail: "bg-blue-700",
        status: "Published",
        price: "$69.00",
        sales: 156,
        rating: 4.7,
        lastUpdated: "2 weeks ago",
    },
];

const StudioPage = () => {
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            {/* Header Section */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900 tracking-tight">
                        Content Studio
                    </h1>
                    <p className="text-slate-500 mt-1">
                        Manage your courses, quizzes, and learning materials.
                    </p>
                </div>
                <div className="flex items-center gap-3">
                    <Button variant="outline" className="hidden sm:flex">
                        Import Content
                    </Button>
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-200">
                        <Plus className="mr-2 h-4 w-4" />
                        Create New Course
                    </Button>
                </div>
            </div>

            {/* Filters & Search */}
            <div className="flex flex-col sm:flex-row gap-4 justify-between items-center bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
                <div className="relative w-full sm:w-96">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 h-4 w-4" />
                    <input
                        type="text"
                        placeholder="Search your courses..."
                        className="w-full pl-10 pr-4 py-2 bg-slate-50 border-none rounded-xl text-sm focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                    <select className="px-4 py-2 bg-slate-50 rounded-xl text-sm font-medium border-none outline-none cursor-pointer hover:bg-slate-100 transition-colors">
                        <option>All Status</option>
                        <option>Published</option>
                        <option>Draft</option>
                        <option>Archived</option>
                    </select>
                    <Button variant="ghost" size="icon" className="text-slate-500">
                        <Filter className="h-4 w-4" />
                    </Button>
                </div>
            </div>

            {/* Course List */}
            <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="grid grid-cols-12 gap-4 p-4 border-b border-slate-100 bg-slate-50/50 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    <div className="col-span-6 md:col-span-5">Course</div>
                    <div className="col-span-2 hidden md:block text-center">Status</div>
                    <div className="col-span-2 hidden md:block text-right">Price</div>
                    <div className="col-span-2 hidden md:block text-right">Sales</div>
                    <div className="col-span-4 md:col-span-1 text-right">Actions</div>
                </div>

                <div className="divide-y divide-slate-100">
                    {MOCK_COURSES.map((course) => (
                        <div key={course.id} className="grid grid-cols-12 gap-4 p-4 items-center hover:bg-slate-50/50 transition-colors group">
                            <div className="col-span-6 md:col-span-5 flex items-center gap-4">
                                <div className={`h-12 w-16 rounded-lg ${course.thumbnail} flex items-center justify-center text-white/50 text-xs font-bold`}>
                                    img
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 line-clamp-1">{course.title}</h3>
                                    <div className="flex items-center gap-3 mt-1 text-xs text-slate-500">
                                        <span className="flex items-center gap-1"><BookOpen size={12} /> 12 Lessons</span>
                                        <span className="hidden sm:flex items-center gap-1"><Users size={12} /> {course.sales} Students</span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-span-2 hidden md:flex justify-center">
                                <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${course.status === 'Published'
                                        ? 'bg-emerald-100 text-emerald-700'
                                        : 'bg-amber-100 text-amber-700'
                                    }`}>
                                    {course.status}
                                </span>
                            </div>

                            <div className="col-span-2 hidden md:block text-right text-sm font-bold text-slate-700">
                                {course.price}
                            </div>

                            <div className="col-span-2 hidden md:block text-right text-sm text-slate-500 font-medium">
                                {course.sales}
                            </div>

                            <div className="col-span-4 md:col-span-1 flex items-center justify-end gap-2">
                                <Button variant="ghost" size="icon-sm" className="hidden sm:flex text-slate-400 hover:text-blue-600">
                                    <Edit3 className="h-4 w-4" />
                                </Button>
                                <Button variant="ghost" size="icon-sm" className="text-slate-400 hover:text-slate-900">
                                    <MoreHorizontal className="h-4 w-4" />
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination / Footer */}
                <div className="p-4 border-t border-slate-100 bg-slate-50/30 flex justify-between items-center text-xs text-slate-500">
                    <span>Showing 4 of 12 courses</span>
                    <div className="flex gap-2">
                        <Button variant="outline" size="sm" disabled>Previous</Button>
                        <Button variant="outline" size="sm">Next</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudioPage;