import { Course } from "@/types/TypesAll";
import { BookOpen, Clock, Star } from "lucide-react";
import Image from "next/image";
import React from "react";

function CourseCard({ course }: { course: Course }) {
  return (
    <div
      className="group flex flex-col rounded-xl border border-slate-200 bg-white shadow-sm transition-all hover:shadow-md overflow-hidden cursor-pointer"
      onClick={() => alert("Clicked on Course!")}
    >
      <div className="aspect-video relative overflow-hidden bg-slate-100">
        <Image
          src={course.thumbnail}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          width={200}
          height={200}
          alt={course.title}
        />
        <div className="absolute top-3 left-3 flex gap-2">
          <span className="bg-white/90 backdrop-blur border border-slate-200 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-tighter">
            {course.level}
          </span>
        </div>
      </div>

      <div className="p-5 flex-1 flex flex-col">
        <div className="flex items-center gap-1.5 mb-2">
          <div className="flex items-center text-amber-500">
            <Star size={12} fill="currentColor" />
            <span className="ml-1 text-xs font-bold text-slate-700">
              {course.rating}
            </span>
          </div>
          <span className="text-slate-300 text-xs">•</span>
          <span className="text-[10px] font-medium text-slate-500 uppercase">
            {course.category}
          </span>
        </div>

        <h3 className="text-base font-bold leading-tight mb-2 group-hover:text-indigo-600 transition-colors line-clamp-2">
          {course.title}
        </h3>
        <p className="text-xs text-slate-500 mb-4 truncate">
          by {course.instructor}
        </p>

        <div className="flex items-center gap-4 mt-auto mb-4">
          <div className="flex items-center text-[11px] text-slate-500">
            <Clock size={12} className="mr-1" />
            {course.totalDuration}
          </div>
          <div className="flex items-center text-[11px] text-slate-500">
            <BookOpen size={12} className="mr-1" />
            {course.lessons.length} Lessons
          </div>
        </div>

        <div className="pt-4 border-t flex items-center justify-between">
          <div className="flex flex-col leading-none">
            <span className="text-[10px] text-slate-400 font-bold uppercase mb-0.5">
              Price
            </span>
            <span className="text-lg font-bold text-slate-900">
              {course.price === 0 ? "Free" : `$${course.price}`}
            </span>
          </div>
          <button className="inline-flex h-9 items-center justify-center rounded-md bg-slate-900 px-4 text-xs font-semibold text-slate-50 hover:bg-slate-900/90 transition-colors">
            Explore Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
