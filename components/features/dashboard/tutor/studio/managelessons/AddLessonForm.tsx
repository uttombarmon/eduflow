"use client";
import React, { useState } from "react";
import { Loader2, Save } from "lucide-react";
import { useAddLessonMutation } from "@/lib/features/courses/courseApi";

export default function AddLessonForm({
  setShowForm,
  courseId,
}: {
  showForm: boolean;
  setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
  courseId: string;
}) {
  const [addLesson] = useAddLessonMutation();
  const [isLoading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    duration: "",
    content: "",
    videoUrl: "",
  });

  const handleSave = async () => {
    setLoading(true);
    try {
      const res = await addLesson({ id: courseId, lesson: formData }).unwrap();
      if (res.success) {
        setLoading(false);
      }
      setFormData({
        title: "",
        duration: "",
        content: "",
        videoUrl: "",
      });
    } catch (err) {
      console.error("Failed to save lesson:", err);
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
            onClick={() => setShowForm(false)}
            className="px-4 py-2 text-slate-600 hover:bg-slate-200 rounded-lg transition"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            disabled={isLoading || !formData.title}
            className="flex items-center gap-2 px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 transition"
          >
            {isLoading ? (
              <Loader2 className="animate-spin" size={18} />
            ) : (
              <Save size={18} />
            )}
            Save Lesson
          </button>
        </div>
      </div>
    </div>
  );
}
