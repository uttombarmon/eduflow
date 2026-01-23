import { Course } from "@/types/TypesAll";
import CourseCard from "./CourseCard";
import React from "react";
import { CourseDetail } from "@/types/CoursesTypes";
interface CoursesProps {
  courses: CourseDetail[];
}
const Courses: React.FC<CoursesProps> = ({ courses }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
      {courses?.map((course) => (
        <CourseCard key={course?.id || course?.title} course={course} />
      ))}
    </div>
  );
};

export default Courses;
