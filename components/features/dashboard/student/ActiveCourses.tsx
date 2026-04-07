import { Play } from "lucide-react";
import Image from "next/image";

const ActiveCourses = ({ activeCourses }: { activeCourses: any[] }) => {
  return (
    <div className="grid gap-3">
      {activeCourses.length === 0 && (
        <p className="text-center text-slate-500">No active courses</p>
      )}
      {activeCourses.map((course) => (
        <div
          key={course.id}
          className="group relative flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition-all hover:bg-slate-50 cursor-pointer"
          // onClick={() => onCourseSelect(course.id)}
        >
          <Image
            src={course.thumbnail}
            className="h-14 w-24 rounded-md object-cover"
            width={300}
            height={300}
            alt="Thumbnail"
          />
          <div className="flex-1 space-y-1 overflow-hidden">
            <h3 className="font-semibold text-sm truncate">{course.title}</h3>
            <div className="flex items-center gap-2">
              <div className="h-1.5 flex-1 rounded-full bg-slate-100 overflow-hidden max-w-[120px]">
                <div
                  className="h-full bg-slate-900"
                  style={{ width: `${course.progress}%` }}
                />
              </div>
              <span className="text-[10px] font-medium text-slate-500">
                {course.progress}%
              </span>
            </div>
          </div>
          <button className="inline-flex items-center justify-center rounded-md h-9 w-9 border border-slate-200 bg-white hover:bg-slate-100">
            <Play size={14} className="fill-slate-900" />
          </button>
        </div>
      ))}
    </div>
  );
};

export default ActiveCourses;
