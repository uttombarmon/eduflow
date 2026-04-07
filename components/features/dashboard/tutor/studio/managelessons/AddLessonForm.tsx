"use client";
import {
  useAddLessonMutation,
  useUpdateLessonMutation,
} from "@/lib/features/courses/lessons/lessonApi";
import { Lesson } from "@/types/Course";
import { Loader2, Save } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";

export default function AddLessonForm({
  setShowForm,
  courseId,
  lessons,
}: {
  showForm: boolean;
  setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
  courseId: string;
  lessons: Lesson[];
}) {
  const [addLesson] = useAddLessonMutation();
  const [isLoading, setLoading] = useState(false);
  const [updateLesson] = useUpdateLessonMutation();
  const searchParams = useSearchParams();
  const lessonId = searchParams.get("lessonId");
  const isUpdate = searchParams.get("isUpdate");
  const router = useRouter();

  const [formData, setFormData] = useState({
    title: "",
    duration: "",
    content: "",
    videoUrl: "",
  });

  const closeForm = () => {
    setShowForm(false);
    const params = new URLSearchParams(searchParams.toString());
    params.delete("lessonId");
    params.delete("isUpdate");
    router.push(`${window.location.pathname}?${params.toString()}`);
  };

  // Update form when URL params indicate an update operation
  React.useEffect(() => {
    if (isUpdate && lessonId && lessons) {
      const lesson = lessons.find((l) => l.id === lessonId);
      if (lesson) {
        setFormData({
          title: lesson.title || "",
          duration: lesson.duration || "",
          content: lesson.content || "",
          videoUrl: lesson.videoUrl || "",
        });
        setShowForm(true);
      }
    }
  }, [isUpdate, lessonId, lessons, setShowForm]);

  const handleSave = async () => {
    setLoading(true);
    try {
      const res = await addLesson({ id: courseId, lesson: formData }).unwrap();
      if (res?.status === "success") {
        setLoading(false);
        setFormData({
          title: "",
          duration: "",
          content: "",
          videoUrl: "",
        });
        closeForm();
      }
    } catch (err) {
      console.error("Failed to save lesson:", err);
      setLoading(false);
    }
  };
  const handleUpdateLesson = async () => {
    if (!lessonId) return;
    try {
      setLoading(true);
      await updateLesson({ id: lessonId, lesson: formData }).unwrap();
      setLoading(false);
      closeForm();
    } catch (err) {
      console.error("Failed to update lesson:", err);
      setLoading(false);
    }
  };

  return (
    <div className="mt-6 border-t pt-6">
      <div className="space-y-3">
        <input
          placeholder="Lesson Title"
          className="w-full p-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        />

        <div className="flex gap-3">
          <input
            placeholder="Duration (e.g. 15m)"
            className="flex-1 p-2.5 border rounded-lg outline-none"
            value={formData.duration}
            onChange={(e) =>
              setFormData({ ...formData, duration: e.target.value })
            }
          />
          <input
            placeholder="Video URL"
            className="flex-[2] p-2.5 border rounded-lg outline-none"
            value={formData.videoUrl}
            onChange={(e) =>
              setFormData({ ...formData, videoUrl: e.target.value })
            }
          />
        </div>

        <textarea
          placeholder="Brief description of the lesson content..."
          className="w-full p-2.5 border rounded-lg h-24 outline-none"
          value={formData.content}
          onChange={(e) =>
            setFormData({ ...formData, content: e.target.value })
          }
        />

        <div className="flex justify-end gap-3 mt-2">
          <button
            onClick={closeForm}
            className="px-4 py-2 text-slate-600 hover:bg-slate-200 rounded-lg transition"
          >
            Cancel
          </button>
          <button
            onClick={() => (isUpdate ? handleUpdateLesson() : handleSave())}
            disabled={isLoading || !formData.title}
            className="flex items-center gap-2 px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 transition"
          >
            {isLoading ? (
              <Loader2 className="animate-spin" size={18} />
            ) : (
              <Save size={18} />
            )}
            {lessonId ? "Update Lesson" : "Save Lesson"}
          </button>
        </div>
      </div>
    </div>
  );
}
