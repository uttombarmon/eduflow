"use client";

import { useState } from "react";
import {
  useDeleteCourseMutation,
  useGetTutorCoursesQuery,
} from "@/lib/features/courses/courseApi";
import Loading from "@/components/layout/Loading";
import { CourseDetail, Pagination } from "@/types/Course";
import FooterPagination from "@/components/features/dashboard/tutor/studio/FooterPagination";
import StudioHeader from "../../../../../components/features/dashboard/tutor/studio/StudioHeader";
import CourseCard from "./CourseCard";
import StudioFilter from "../../../../../components/features/dashboard/tutor/studio/StudioFilter";
import { useDebounce } from "@/lib/Debounce";

const StudioPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [status, setStatus] = useState("publish");
  const [page, setPage] = useState(1);
  const debouncedSearch = useDebounce(searchTerm, 1000);
  const debouncedStatus = useDebounce(status, 500);
  const { data: response, isLoading } = useGetTutorCoursesQuery({
    search: debouncedSearch,
    status: debouncedStatus,
    page,
    limit: 10,
  });
  const [deleteCourse] = useDeleteCourseMutation();
  const courses = response?.data ?? [];
  const pagination = response?.pagination as Pagination;
  if (isLoading) {
    return (
      <div className=" w-full h-full flex justify-center items-center">
        <Loading />
      </div>
    );
  }
  const handleDeleteCourse = async (id: string) => {
    try {
      await deleteCourse(id);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Header Section */}
      <StudioHeader />

      {/* Filters & Search */}
      <StudioFilter
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        setStatus={setStatus}
      />

      {/* Course List */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="grid grid-cols-12 gap-4 p-4 border-b border-slate-100 bg-slate-50/50 text-xs font-semibold text-slate-500 uppercase tracking-wider">
          <div className="col-span-4 md:col-span-4">Course</div>
          <div className="col-span-2 hidden md:block text-center">Status</div>
          <div className="col-span-2 hidden md:block text-right">Price</div>
          <div className="col-span-2 hidden md:block text-center">Lesson</div>
          <div className="col-span-1 hidden md:block text-right">Sales</div>
          <div className="col-span-5 md:col-span-1 text-center">Actions</div>
        </div>

        <div className="divide-y divide-slate-100">
          {courses.length === 0 ? (
            <div className="flex items-center justify-center h-32 md:h-72">
              <p className="text-slate-500">No courses found</p>
            </div>
          ) : (
            courses.map((course: CourseDetail) => (
              <CourseCard
                key={course.id}
                course={course}
                handleDeleteCourse={handleDeleteCourse}
              />
            ))
          )}
        </div>

        {/* Pagination / Footer */}
        <FooterPagination
          courses={courses}
          page={page}
          pagination={pagination}
          setPage={setPage}
        />
      </div>
    </div>
  );
};

export default StudioPage;
