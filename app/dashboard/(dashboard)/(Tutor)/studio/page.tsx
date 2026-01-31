"use client";

import { useEffect, useState } from "react";
import {
  Plus,
  Search,
  Filter,
  Edit3,
  BookOpen,
  Users,
  Trash2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  useDeleteCourseMutation,
  useGetTutorCoursesQuery,
} from "@/lib/features/courses/courseApi";
import Loading from "@/components/layout/Loading";
import Image from "next/image";
import { TutorCourse } from "@/types/CoursesTypes";

const StudioPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [courses, setCourses] = useState<TutorCourse[] | []>([]);
  const { data: response, isLoading } = useGetTutorCoursesQuery();
  const [deleteCourse] = useDeleteCourseMutation();
  useEffect(() => {
    if (!!response && response?.data?.length > 0) {
      console.log(response.data);
      setCourses(response?.data as TutorCourse[]);
    }
  }, [response]);
  if (isLoading) {
    return (
      <div className=" w-full h-full flex justify-center items-center">
        <Loading />
      </div>
    );
  }
  const handleDeleteCourse = async (id: string) => {
    try {
      const res = await deleteCourse(id);
      //   console.log(res);
      if (res?.data?.success) {
        const filteredCourse = courses.filter(
          (course) => (course.id as string) != id,
        );
        setCourses(filteredCourse);
        // console.log(filteredCourse);
      } else {
        console.log("Something worng!");
      }
    } catch (error) {
      console.log(error);
    }
  };

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
          <Link
            href="/dashboard/studio/add_course"
            className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-200 rounded-xl inline-flex items-center gap-2 w-fit px-4 py-2"
          >
            <Plus className="mr-2 h-4 w-4" />
            Create New Course
          </Link>
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
          {courses.length === 0 ? (
            <div className="flex items-center justify-center h-32 md:h-72">
              <p className="text-slate-500">No courses found</p>
            </div>
          ) : (
            courses.map((course: any) => (
              <div
                key={course.id}
                className="grid grid-cols-12 gap-4 p-4 items-center hover:bg-slate-50/50 transition-colors group"
              >
                <div className="col-span-6 md:col-span-5 flex items-center gap-4">
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
                      {course.title}
                    </h3>
                    <div className="flex items-center gap-3 mt-1 text-xs text-slate-500">
                      <span className="flex items-center gap-1">
                        <BookOpen size={12} /> 12 Lessons
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
                      course?.status === "Published"
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

                <div className="col-span-2 hidden md:block text-right text-sm text-slate-500 font-medium">
                  {course?.sales}
                </div>

                <div className="col-span-4 md:col-span-1 flex items-center justify-end gap-2">
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
            ))
          )}
        </div>

        {/* Pagination / Footer */}
        <div className="p-4 border-t border-slate-100 bg-slate-50/30 flex justify-between items-center text-xs text-slate-500">
          <span>Showing 4 of 12 courses</span>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" disabled>
              Previous
            </Button>
            <Button variant="outline" size="sm">
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudioPage;
