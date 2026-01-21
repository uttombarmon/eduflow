"use client";
import { useParams } from "next/navigation";
import { CourseContent } from "@/components/features/courses/details/CourseContent";
import { CourseSidebar } from "@/components/features/courses/details/CourseSidebar";
import CourseHero from "@/components/features/courses/details/CourseHero";
import { useGetCourseDetailByIdQuery } from "@/lib/features/courses/courseApi";

export default function CourseDetailPage() {
    const { id } = useParams();
    const { data: course, isLoading, isError } = useGetCourseDetailByIdQuery(id as string);
    console.log(course)
    if (isLoading) return <div className="p-20 text-center">Loading Course...</div>;
    if (isError || !course) return <div className="p-20 text-center">Course not found.</div>;

    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section: Title, Instructor, Rating */}
            <CourseHero course={course?.data} />

            <div className="mx-auto max-w-7xl px-6 py-12">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
                    {/* Main Content: Description, Syllabus */}
                    <div className="lg:col-span-2 space-y-12">
                        <CourseContent course={course?.data} />
                    </div>

                    {/* Sidebar: Price, Purchase Button, Stats */}
                    <div className="lg:col-span-1">
                        <CourseSidebar course={course?.data} />
                    </div>
                </div>
            </div>
        </main>
    );
}