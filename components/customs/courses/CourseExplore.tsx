"use client";
import { useAppSelector } from "@/lib/hooks";
import { RootState } from "@/lib/store";
import { FilterProduct } from "@/lib/utils/FilterProduct";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Filters from "./Filters";
import Courses from "./Courses";
import NotFoundCourse from "./NotFoundCourse";
import { useGetCoursesQuery } from "@/lib/features/courses/courseApi";

const CourseExplore = () => {
  const dispatch = useDispatch();
  const { data, isLoading, error } = useGetCoursesQuery();
  const { categorie, level, price, search, sortBy } = useAppSelector(
    (state: RootState) => state.filters
  );

  // Calculate filtered results on the fly
  // const filteredCourses = React.useMemo(() => {
  //   if (!data) return [];

  //   // Filtering Logic
  //   const filteredData = FilterProduct(
  //     data,
  //     search,
  //     categorie,
  //     level,
  //     price,
  //     sortBy
  //   );
  //   return filteredData;
  // }, [data, sortBy, level, categorie, price, search]); // recalculates ONLY when these change

  if (isLoading) {
    return (
      <div className=" w-dvw h-dvh flex justify-center items-center">
        <p>Loading...</p>
      </div>
    );
  }
  if (error) {
    return (
      <div className=" w-dvw h-dvh flex justify-center items-center">
        <p>Error Fetching Course...</p>
      </div>
    );
  }
  if (!data) {
    return (
      <div className=" w-dvw h-dvh flex justify-center items-center">
        <p>Not Found Course...</p>
      </div>
    );
  }
  return (
    // <div className="flex flex-col lg:flex-row gap-8 items-start">
    //   {/* Sidebar Filters - Desktop */}
    //   <Filters />

    //   {/* Results Grid */}
    <div className="flex-1">
      <div className="mb-4 text-sm text-slate-500 font-medium">
        Showing {data?.length} courses
        {/* Showing {filteredCourses?.length} courses */}
      </div>
      {data &&
        // {filteredCourses &&
        (data.length > 0 ? (
          // (filteredCourses.length > 0 ? (
          <Courses courses={data} />
        ) : (
          // <Courses courses={filteredCourses} />
          <NotFoundCourse />
        ))}
    </div>
    // </div>
  );
};

export default CourseExplore;
