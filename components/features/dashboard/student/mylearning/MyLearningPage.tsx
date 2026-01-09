"use client"
import React, { useState, useMemo } from 'react';
import {
    BookOpen,
    CheckCircle,
    Clock,
    Play,
    Trophy,
    Search,
    Filter,
    MoreVertical,
    LayoutGrid,
    List
} from 'lucide-react';
import { useGetCoursesQuery } from '@/lib/features/courses/courseApi';
import Loading from '@/components/layout/Loading';
import Link from 'next/link';
import Toobar from './Toobar';
import Courses from './Courses';

// interface MyLearningProps {
//     onCourseSelect: (id: string) => void;
//     onExploreClick: () => void;
// }
export type FilterType = 'all' | 'in-progress' | 'completed';

const MyLearning: React.FC = () => {
    const { data: list, isLoading } = useGetCoursesQuery()
    const [filter, setFilter] = useState<FilterType>('all');
    const [searchQuery, setSearchQuery] = useState('');

    const enrolledCourses = useMemo(() => {
        if (!list) return [];
        return list.filter(course => (course.progress ?? 0) >= 0);
    }, [list]);

    const filteredCourses = useMemo(() => {
        if (!enrolledCourses) return [];
        return enrolledCourses.filter(course => {
            const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase());
            const progress = course.progress ?? 0;

            if (filter === 'completed') return matchesSearch && progress === 100;
            if (filter === 'in-progress') return matchesSearch && progress > 0 && progress < 100;
            return matchesSearch;
        });
    }, [enrolledCourses, filter, searchQuery]);

    const stats = useMemo(() => {
        const total = enrolledCourses.length;
        const completed = enrolledCourses.filter(c => (c.progress ?? 0) === 100).length;
        const inProgress = enrolledCourses.filter(c => (c.progress ?? 0) > 0 && (c.progress ?? 0) < 100).length;

        return { total, completed, inProgress };
    }, [enrolledCourses]);
    if (isLoading) return <div className='flex items-center justify-center h-screen'><Loading /></div>;
    if (enrolledCourses.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center py-24 text-center">
                <div className="h-20 w-20 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 mb-6">
                    <BookOpen size={40} />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">No courses yet</h2>
                <p className="text-slate-500 mt-2 max-w-sm">
                    You haven't enrolled in any courses yet. Start your learning journey by exploring our catalog.
                </p>
                <button
                    // onClick={() => onCourseSelect(course.id)}
                    onClick={() => { }}
                    className="mt-8 inline-flex h-11 items-center justify-center rounded-md bg-slate-900 px-8 text-sm font-semibold text-slate-50 hover:bg-slate-900/90 transition-all shadow-lg shadow-slate-200"
                >
                    Browse Catalog
                </button>
            </div>
        );
    }

    return (
        <div className="space-y-8 pb-12">
            {/* Header & Stats */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div className="space-y-1">
                    <h1 className="text-3xl font-bold tracking-tight text-slate-900">My Learning</h1>
                    <p className="text-slate-500">Track your progress and pick up where you left off.</p>
                </div>

                <div className="flex gap-4">
                    <div className="flex flex-col items-center px-4 py-2 bg-white rounded-lg border border-slate-200 min-w-[80px]">
                        <span className="text-xl font-bold text-slate-900">{stats.total}</span>
                        <span className="text-[10px] font-bold text-slate-400 uppercase">Enrolled</span>
                    </div>
                    <div className="flex flex-col items-center px-4 py-2 bg-white rounded-lg border border-slate-200 min-w-[80px]">
                        <span className="text-xl font-bold text-indigo-600">{stats.inProgress}</span>
                        <span className="text-[10px] font-bold text-slate-400 uppercase">Active</span>
                    </div>
                    <div className="flex flex-col items-center px-4 py-2 bg-white rounded-lg border border-slate-200 min-w-[80px]">
                        <span className="text-xl font-bold text-emerald-600">{stats.completed}</span>
                        <span className="text-[10px] font-bold text-slate-400 uppercase">Finished</span>
                    </div>
                </div>
            </div>

            {/* Toolbar */}
            <Toobar filter={filter} setFilter={setFilter} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

            {/* Course Grid */}
            {filteredCourses.length > 0 ? (
                <Courses courses={filteredCourses} />
            ) : (
                <div className="flex flex-col items-center justify-center py-20 bg-white rounded-xl border border-dashed border-slate-200">
                    <div className="h-12 w-12 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 mb-4">
                        <Filter size={24} />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900">No matching courses</h3>
                    <p className="text-slate-500 mt-1 max-w-xs text-center">
                        We couldn't find any courses matching your current filter or search criteria.
                    </p>
                    <button
                        onClick={() => { setFilter('all'); setSearchQuery(''); }}
                        className="mt-6 text-sm font-bold text-indigo-600 hover:underline"
                    >
                        Show all enrolled courses
                    </button>
                </div>
            )}

            {/* Recommendations Footer */}
            <div className="mt-12 p-8 rounded-2xl bg-indigo-400 text-slate-900 flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden relative">
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
                <div className="z-10 space-y-2 text-center md:text-left relative">
                    <h3 className="text-2xl font-bold">Want to learn something new?</h3>
                    <p className="text-slate-500 opacity-90">Explore our curated collection of new courses added this week.</p>
                </div>
                <Link href="/courses"
                    className="z-10 px-6 py-2 rounded-lg bg-indigo-500/50 text-indigo-500 font-bold  hover:bg-indigo-50 transition-all"
                >
                    Explore Catalog
                </Link>
            </div>
        </div>
    );
};

export default MyLearning;
