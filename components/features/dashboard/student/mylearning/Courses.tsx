import { Course } from "@/types/TypesAll";
import { CheckCircle, Clock, Play, Trophy } from "lucide-react";
import Image from "next/image";

const Courses = ({ courses }: { courses: Course[] }) => {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {courses.map((course) => {
        const progress = course?.progress ?? 0;
        const isCompleted = progress === 100;

        return (
          <div
            key={course?.id}
            className="group flex flex-col bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all overflow-hidden cursor-pointer"
            // onClick={() => onCourseSelect(course.id)}
            onClick={() => {}}
          >
            <div className="aspect-video relative overflow-hidden bg-slate-100">
              <Image
                src={course?.thumbnail}
                alt={course?.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                width={100}
                height={100}
              />
              {isCompleted && (
                <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-[2px] flex items-center justify-center">
                  <div className="bg-emerald-500 text-white p-2 rounded-full shadow-lg">
                    <CheckCircle size={24} />
                  </div>
                </div>
              )}
              <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-slate-200">
                <div
                  className={`h-full transition-all duration-500 ${
                    isCompleted ? "bg-emerald-500" : "bg-indigo-600"
                  }`}
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            <div className="p-5 flex-1 flex flex-col">
              <div className="flex justify-between items-start mb-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                  {course?.category}
                </span>
                <span className="text-[10px] font-bold text-slate-500">
                  {progress}% Complete
                </span>
              </div>

              <h3 className="text-base font-bold text-slate-900 mb-4 line-clamp-2 leading-tight group-hover:text-indigo-600 transition-colors">
                {course?.title}
              </h3>

              <div className="mt-auto space-y-4">
                <div className="flex items-center gap-3">
                  <img
                    src={`https://avatar.vercel.sh/${course?.instructor}`}
                    className="h-6 w-6 rounded-full grayscale"
                    alt={course?.instructor}
                  />
                  <span className="text-xs text-slate-500">
                    by {course?.instructor}
                  </span>
                </div>

                <div className="pt-4 border-t border-slate-50 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-slate-400">
                    <Clock size={14} />
                    <span className="text-[11px] font-medium">
                      {course?.totalDuration}
                    </span>
                  </div>

                  {isCompleted ? (
                    <button className="inline-flex h-8 items-center justify-center rounded-md bg-emerald-50 px-3 text-[11px] font-bold text-emerald-700 hover:bg-emerald-100 transition-colors">
                      <Trophy size={14} className="mr-1.5" />
                      Certificate
                    </button>
                  ) : (
                    <button className="inline-flex h-8 items-center justify-center rounded-md bg-slate-900 px-3 text-[11px] font-bold text-white hover:bg-slate-800 transition-all">
                      <Play size={12} className="mr-1.5 fill-white" />
                      Continue
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Courses;
