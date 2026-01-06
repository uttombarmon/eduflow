"use client";
import React, { useMemo } from "react";
import { useAppSelector } from "@/lib/hooks";
import { RootState } from "@/lib/store";
import Courses from "./Courses";
import NotFoundCourse from "./NotFoundCourse";
import { useGetCoursesQuery } from "@/lib/features/courses/courseApi";
import { FilterProduct } from "@/lib/utils/FilterProduct";

const CourseExplore = () => {
  const { data, isLoading, error } = useGetCoursesQuery();
  const { categorie, level, price, search, sortBy } = useAppSelector(
    (state: RootState) => state.filters
  );

  const filteredCourses = useMemo(() => {
    if (!data) return [];
    // console.log("filters: ", categorie, level, price, search, sortBy);

    // Call our bulletproof utility
    const result = FilterProduct({
      courses: data,
      search,
      categorie,
      level,
      price,
      sortBy,
    });
    return result;
  }, [data, search, categorie, level, price, sortBy]);

  if (isLoading) return <div className="p-10 text-center">Loading...</div>;
  if (error)
    return (
      <div className="p-10 text-center text-red-500">Error loading data</div>
    );

  return (
    <div className="flex-1">
      <div className="mb-4 text-sm text-slate-500 font-medium">
        Showing {filteredCourses.length} courses
      </div>

      {filteredCourses.length > 0 ? (
        <Courses courses={filteredCourses} />
      ) : (
        <NotFoundCourse />
      )}
    </div>
  );
};

export default CourseExplore;
