import { Button } from "@/components/ui/button";
import { CourseDetail } from "@/types/Course";
import { BookOpen, Edit3, Trash2, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const CourseCard = ({
  course,
  handleDeleteCourse,
}: {
  course: CourseDetail;
  handleDeleteCourse: (id: string) => void;
}) => {
  return (
    <div className="grid grid-cols-12 gap-4 p-4 items-center hover:bg-slate-50/50 transition-colors group">
      <div className="col-span-4 md:col-span-4 flex items-center gap-4">
        <div
          className={`h-12 w-16 rounded-lg ${course.thumbnail} flex items-center justify-center text-white/50 text-xs font-bold`}
        >
          <Image
            src={course.thumbnail}
            className=" w-full h-full"
            width={100}
            height={100}
            alt="Course Thumbnail"
          />
        </div>
        <div>
          <h3 className="font-bold text-slate-900 line-clamp-1">
            {course?.title}
          </h3>
          <div className="flex items-center gap-3 mt-1 text-xs text-slate-500">
            <span className="flex items-center gap-1">
              <BookOpen size={12} />
              {course?._count?.lessons} Lessons
            </span>
            <span className="hidden sm:flex items-center gap-1">
              <Users size={12} /> {course?.studentsCount} Students
            </span>
          </div>
        </div>
      </div>

      <div className="col-span-2 hidden md:flex justify-center">
        <span
          className={`px-2.5 py-1 rounded-full text-xs font-bold ${
            course?.status === "publish"
              ? "bg-emerald-100 text-emerald-700"
              : "bg-amber-100 text-amber-700"
          }`}
        >
          {course?.status}
        </span>
      </div>

      <div className="col-span-2 hidden md:block text-right text-sm font-bold text-slate-700">
        {course?.price}
      </div>
      <Link
        href={`/dashboard/studio/managelessons/${course?.id}`}
        className="col-span-2 hidden md:block text-right text-sm font-bold text-slate-700"
      >
        <Button className=" hover:cursor-pointer bg-slate-900/70">
          Add Lesson
        </Button>
      </Link>

      <div className="col-span-1 hidden md:block text-right text-sm text-slate-500 font-medium">
        {course?.studentsCount}
      </div>

      <div className="col-span-5 md:col-span-1 flex items-center justify-end gap-2">
        <Button
          variant="ghost"
          size="icon-sm"
          className="hidden sm:flex text-slate-400 hover:text-blue-600"
        >
          <Edit3 className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="icon-sm"
          className="text-slate-400 hover:text-slate-900"
          onClick={() => handleDeleteCourse(course.id)}
        >
          <Trash2 className="h-4 w-4 text-red-300" />
        </Button>
      </div>
    </div>
  );
};

export default CourseCard;
