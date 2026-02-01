import { CourseDetail } from "@/types/Course";
import { Star, Clock, Globe, ChevronRight } from "lucide-react";

export default function CourseHero({ course }: { course: CourseDetail }) {
  return (
    <section className="bg-slate-900 py-16 text-white">
      <div className="mx-auto max-w-7xl px-6">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-sm text-slate-400 mb-8">
          <span>Courses</span>
          <ChevronRight className="h-4 w-4" />
          <span className="text-white truncate">{course?.title}</span>
        </div>

        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
            {course?.title}
          </h1>

          <p className="text-lg text-slate-300 mb-8 line-clamp-2">
            {course?.description}
          </p>

          <div className="flex flex-wrap items-center gap-6 text-sm">
            {/* Rating */}
            <div className="flex items-center gap-1.5">
              <span className="text-amber-400 font-bold">
                {course?.rating || "New"}
              </span>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${i < Math.floor(course?.rating) ? "fill-amber-400 text-amber-400" : "text-slate-600"}`}
                  />
                ))}
              </div>
            </div>

            {/* Instructor */}
            <div className="flex items-center gap-2">
              <span className="text-slate-400">Created by</span>
              <span className="text-blue-400 font-medium underline underline-offset-4 cursor-pointer">
                {course?.instructor?.name}
              </span>
            </div>

            {/* Meta Info */}
            <div className="flex items-center gap-4 text-slate-400">
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>
                  Last updated{" "}
                  {new Date(course?.updatedAt).toLocaleDateString()}
                </span>
              </div>
              <div className="flex items-center gap-1">
                <Globe className="h-4 w-4" />
                <span>English</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
