"use client";
import React from 'react';
import { useGetCoursesQuery } from '@/lib/features/courses/courseApi';
import Loading from '@/components/layout/Loading';
import {
    Award,
    Download,
    Share2,
    Calendar,
    CheckCircle,
    ArrowRight
} from 'lucide-react';
import Link from 'next/link';
import { Course } from '@/types/TypesAll';

const CertificatesPage = () => {
    const { data: courses, isLoading } = useGetCoursesQuery();
    const courseDatas = courses as unknown as Course[] || [];
    const completedCourses = courseDatas?.filter((course: Course) => (course.progress ?? 0) === 100) || [];

    if (isLoading) {
        return <div className="flex h-[50vh] items-center justify-center"><Loading /></div>;
    }

    return (
        <div className="space-y-8 pb-12">
            {/* Header */}
            <div>
                <h1 className="text-3xl font-bold tracking-tight text-slate-900">My Certificates</h1>
                <p className="text-slate-500 mt-1">
                    View and download certificates for your completed courses.
                </p>
            </div>

            {/* Content */}
            {completedCourses.length > 0 ? (
                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {completedCourses.map((course) => (
                        <div
                            key={course.id}
                            className="group relative flex flex-col bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
                        >
                            {/* Decorative top border */}
                            <div className="h-1.5 w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />

                            <div className="p-6 flex-1 flex flex-col">
                                {/* Icon & Status */}
                                <div className="flex justify-between items-start mb-6">
                                    <div className="h-12 w-12 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600">
                                        <Award size={24} />
                                    </div>
                                    <div className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-[11px] font-bold uppercase tracking-wider border border-emerald-100 flex items-center gap-1.5">
                                        <CheckCircle size={12} />
                                        Verified
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="mb-6">
                                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Certificate of Completion</h4>
                                    <h3 className="text-lg font-bold text-slate-900 line-clamp-2 leading-tight mb-2 group-hover:text-indigo-600 transition-colors">
                                        {course.title}
                                    </h3>
                                    <p className="text-sm text-slate-500">
                                        Instructor: <span className="text-slate-700 font-medium">{course.instructor}</span>
                                    </p>
                                </div>

                                {/* Date (Mocked) */}
                                <div className="mt-auto pt-6 border-t border-slate-100 flex items-center text-slate-400 text-xs">
                                    <Calendar size={14} className="mr-2" />
                                    <span>Issued on {new Date().toLocaleDateString()}</span>
                                </div>
                            </div>

                            {/* Actions Footer */}
                            <div className="bg-slate-50 px-6 py-4 flex gap-3 border-t border-slate-100">
                                <button className="flex-1 inline-flex items-center justify-center h-9 text-sm font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors shadow-sm">
                                    <Download size={16} className="mr-2" />
                                    Download
                                </button>
                                <button className="inline-flex items-center justify-center h-9 w-9 text-slate-600 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 hover:text-indigo-600 transition-colors">
                                    <Share2 size={16} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center py-20 bg-white rounded-2xl border border-dashed border-slate-300 text-center">
                    <div className="h-20 w-20 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 mb-6">
                        <Award size={40} />
                    </div>
                    <h2 className="text-xl font-bold text-slate-900">No certificates yet</h2>
                    <p className="text-slate-500 mt-2 max-w-sm mb-8">
                        Complete a course to earn your first certificate.
                        Keep learning and achieving your goals!
                    </p>
                    <Link
                        href="/courses"
                        className="inline-flex items-center justify-center h-11 px-8 rounded-lg bg-indigo-600 text-white font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200"
                    >
                        Browse Courses
                        <ArrowRight size={18} className="ml-2" />
                    </Link>
                </div>
            )}
        </div>
    );
};

export default CertificatesPage;