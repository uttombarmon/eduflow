import { CourseDetail } from "@/types/CoursesTypes";

export function CourseSidebar({ course }: { course: CourseDetail }) {
    return (
        <div className="sticky top-24 rounded-2xl border border-slate-200 p-6 shadow-lg bg-white">
            <div className="aspect-video mb-6 overflow-hidden rounded-xl">
                <img src={course?.thumbnail} alt={course?.title} className="object-cover w-full h-full" />
            </div>
            <div className="mb-6">
                <span className="text-3xl font-bold">${course?.price}</span>
                {course?.price > 0 && <span className="ml-2 text-slate-500 line-through">$99.99</span>}
            </div>
            <button className="w-full bg-slate-900 text-white py-3 rounded-lg font-semibold hover:bg-slate-800 transition">
                Enroll Now
            </button>
            <div className="mt-6 space-y-4 text-sm text-slate-600">
                <div className="flex justify-between">
                    <span>Duration</span>
                    <span className="font-medium text-slate-900">{course?.totalDuration || "12h 30m"}</span>
                </div>
                <div className="flex justify-between">
                    <span>Lessons</span>
                    <span className="font-medium text-slate-900">{course?._count.lessons}</span>
                </div>
                <div className="flex justify-between">
                    <span>Level</span>
                    <span className="font-medium text-slate-900">{course?.level}</span>
                </div>
            </div>
        </div>
    );
}