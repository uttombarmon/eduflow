"use client";
import React, { useState } from "react";
import { Plus, Save } from "lucide-react";
import { Course, CourseStatus, Lesson } from "@/types/Course";
import { AddLesson } from "./AddLesson";
import {
  useAddLessonMutation,
  useCreateCourseMutation,
} from "@/lib/features/courses/courseApi";
import { useRouter } from "next/navigation";
import Utilities from "./Utilities";

const CreateCourseForm = () => {
  const router = useRouter();
  const [createCourse] = useCreateCourseMutation();
  const [addLessonMutation] = useAddLessonMutation();
  const [lessons, setLessons] = useState<Partial<Lesson>[]>([]);
  const [courseData, setCourseData] = useState<Partial<Course>>({
    title: "",
    description: "",
    thumbnail: "",
    level: "Beginner",
    category: "Development",
    price: 0,
    status: "draft" as CourseStatus,
  });

  const handleCreateCourse = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await createCourse(courseData).unwrap();
      console.log(res);

      if (res && res.success && res.data?.id) {
        const courseId = res.data.id;
        console.log("Course created successfully");

        router.push("/dashboard/studio");
        // Add all lessons
        await Promise.all(
          lessons.map((lesson) =>
            addLessonMutation({
              id: courseId,
              lesson: lesson as Lesson,
            }).unwrap(),
          ),
        );
      } else {
        console.log("Course created unsuccessfully");
      }
      router.push("/dashboard/studio");
    } catch (error) {
      console.error("Failed to create course", error);
    }
  };
  const addLesson = () => {
    setLessons([...lessons, { id: crypto.randomUUID(), title: "" }]);
  };

  const updateLesson = (index: number, data: Partial<Lesson>) => {
    const newLessons = [...lessons];
    newLessons[index] = { ...newLessons[index], ...data };
    setLessons(newLessons);
  };

  const removeLesson = (index: number) => {
    setLessons(lessons.filter((_, i) => i !== index));
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Create New Course
      </h2>

      {/* Basic Info Section */}
      <section className="space-y-6 mb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Course Title
              </label>
              <input
                onChange={(e) =>
                  setCourseData({ ...courseData, title: e.target.value })
                }
                type="text"
                className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
                placeholder="Enter a catchy title..."
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description
              </label>
              <textarea
                onChange={(e) =>
                  setCourseData({ ...courseData, description: e.target.value })
                }
                rows={4}
                className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
                placeholder="What will students learn?"
              />
            </div>
          </div>
          {/* course price, category, status, level */}
          <Utilities courseData={courseData} setCourseData={setCourseData} />
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="mb-10">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold text-gray-900">Curriculum</h3>
          <button
            onClick={addLesson}
            className="flex items-center gap-2 text-sm font-semibold text-indigo-600 hover:text-indigo-700"
          >
            <Plus size={18} /> Add Lesson
          </button>
        </div>

        {lessons.length === 0 ? (
          <div className="text-center py-12 bg-gray-50 rounded-xl border border-dashed border-gray-200">
            <p className="text-gray-500">
              No lessons added yet. Click &quot;Add Lesson&quot; to start
              building your curriculum.
            </p>
          </div>
        ) : (
          lessons.map((lesson, index) => (
            <AddLesson
              key={lesson.id}
              index={index}
              lesson={lesson}
              onUpdate={updateLesson}
              onRemove={removeLesson}
            />
          ))
        )}
      </section>

      <div className="pt-6 border-t flex justify-end gap-4">
        <button
          onClick={handleCreateCourse}
          className="px-6 py-2 rounded-lg font-medium bg-indigo-600 text-white hover:bg-indigo-700 transition flex items-center gap-2"
        >
          <Save size={18} /> Save Course
        </button>
      </div>
    </div>
  );
};

export default CreateCourseForm;
