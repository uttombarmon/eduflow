"use client";
import React, { useState } from "react";
import { BookOpen, Video, Clock, Plus, ChevronDown } from "lucide-react";
import { redirect, useParams } from "next/navigation";
import { useGetCourseByIdQuery } from "@/lib/features/courses/courseApi";
import Loading from "@/components/layout/Loading";
import { CourseDetail, Lesson } from "@/types/Course";
import AddLessonForm from "./AddLessonForm";

const LessonsManager = () => {
  const [showForm, setShowForm] = useState(false);
  const params = useParams();
  const courseId = params.id;
  // console.log("course id: ", courseId);
  const {
    data: res,
    isLoading,
    isError,
  } = useGetCourseByIdQuery(courseId as string);
  const course = res as CourseDetail;
  if (isLoading)
    return (
      <div className=" w-screen h-screen flex justify-center items-center">
        <Loading />
      </div>
    );
  if (isError) redirect("/dashboard/studio");
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* 1. COURSE DETAILS SECTION */}
      <section className="bg-white p-6 rounded-2xl border shadow-sm">
        <div className="flex justify-between items-start">
          <div>
            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold uppercase">
              {course.level}
            </span>
            <h1 className="text-3xl font-bold mt-2 text-slate-900">
              {course.title}
            </h1>
            <p className="text-slate-500 mt-2">{course.description}</p>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold text-green-600">${course.price}</p>
            <p className="text-sm text-slate-400 capitalize">{course.status}</p>
          </div>
        </div>
      </section>

      {/* 2. ADDED LESSONS LIST */}
      <section>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <BookOpen size={20} className="text-blue-600" />
            Course Curriculum
          </h2>
          <span className="text-sm text-slate-500">
            {course.lessons?.length || 0} Lessons
          </span>
        </div>

        <div className="space-y-3">
          {(course?.lessons as Lesson[])?.length > 0 ? (
            (course?.lessons as Lesson[]).map(
              (lesson: Lesson, index: number) => (
                <div
                  key={lesson.id}
                  className="group bg-white p-4 rounded-xl border flex items-center gap-4 hover:border-blue-300 transition-all"
                >
                  <div className="h-10 w-10 bg-slate-100 rounded-lg flex items-center justify-center font-bold text-slate-500 group-hover:bg-blue-50 group-hover:text-blue-600">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-slate-800">
                      {lesson.title}
                    </h3>
                    <div className="flex gap-4 text-xs text-slate-400 mt-1">
                      <span className="flex items-center gap-1">
                        <Clock size={12} /> {lesson.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <Video size={12} />{" "}
                        {lesson.videoUrl ? "Video included" : "No video"}
                      </span>
                    </div>
                  </div>
                  <ChevronDown size={18} className="text-slate-300" />
                </div>
              ),
            )
          ) : (
            <div className="text-center py-10 border-2 border-dashed rounded-2xl bg-slate-50">
              <p className="text-slate-400">
                No lessons added yet. Start building your course below!
              </p>
            </div>
          )}
        </div>
      </section>

      {/* 3. ADD LESSON FORM (Conditional) */}
      <section className="pt-4">
        {!showForm ? (
          <button
            onClick={() => setShowForm(true)}
            className="w-full py-4 border-2 border-dashed border-blue-300 rounded-2xl text-blue-600 font-semibold hover:bg-blue-50 flex items-center justify-center gap-2 transition-all"
          >
            <Plus size={20} /> Add a New Lesson
          </button>
        ) : (
          <div className="bg-white p-6 rounded-2xl border-2 border-blue-100 shadow-lg animate-in slide-in-from-bottom-4 duration-300">
            <LessonFormHeader onCancel={() => setShowForm(false)} />
            {/* Your AddLessonForm component goes here */}
            <div className="mt-4 p-8 border-2 border-dotted border-slate-200 rounded-xl text-center">
              <AddLessonForm courseId={courseId as string} />
            </div>
          </div>
        )}
      </section>
    </div>
  );
};
export default LessonsManager;

export function LessonFormHeader({ onCancel }: { onCancel: () => void }) {
  return (
    <div className="flex justify-between items-center mb-4">
      <h3 className="text-lg font-bold">New Lesson Details</h3>
      <button onClick={onCancel} className="text-slate-400 hover:text-red-500">
        Cancel
      </button>
    </div>
  );
}
