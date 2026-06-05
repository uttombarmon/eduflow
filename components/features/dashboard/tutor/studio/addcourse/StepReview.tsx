import React, { useState } from "react";
import {
  ArrowLeft,
  Save,
  CheckCircle,
  AlertCircle,
  LayoutList,
  AlignLeft,
  DollarSign,
  CheckCircle2,
} from "lucide-react";
import { Course } from "@/types/Course";
import { CourseModule } from "./StepCurriculum"; // Import the interface

interface StepReviewProps {
  courseData: Partial<Course>;
  modules: CourseModule[];
  onPrev: () => void;
  onSave: () => Promise<void>;
}

const StepReview = ({
  courseData,
  modules,
  onPrev,
  onSave,
}: StepReviewProps) => {
  const [isSaving, setIsSaving] = useState(false);

  // --- Calculations ---
  // Safely handle undefined modules or missing lessons arrays
  const totalLessons =
    modules?.reduce((acc, module) => acc + (module.lessons?.length || 0), 0) ||
    0;

  // --- Validation Logic ---
  const hasTitle = !!courseData?.title && courseData?.title.length > 5;
  const hasCategory = !!courseData?.category;
  const hasModules = modules?.length > 0;
  const hasLessons = totalLessons > 0;
  const hasThumbnail = !!courseData?.thumbnail;

  const isReadyToPublish = hasTitle && hasCategory && hasModules && hasLessons;

  const handleFinalSave = async () => {
    setIsSaving(true);
    try {
      await onSave();
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Summary Details */}
        <div className="lg:col-span-2 space-y-6">
          {/* 1. General Information Summary */}
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
            <div className="flex items-center gap-2 mb-6 text-slate-800">
              <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
                <AlignLeft size={18} />
              </div>
              <h3 className="font-bold text-lg">General Information</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-50 p-6 rounded-2xl">
              <div className="space-y-1">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                  Course Title
                </span>
                <p className="font-bold text-slate-800 text-lg leading-tight">
                  {courseData?.title || (
                    <span className="text-red-400">Missing Title</span>
                  )}
                </p>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                  Category & Level
                </span>
                <p className="font-bold text-slate-700">
                  {courseData?.category || "Not Selected"} •{" "}
                  <span className="text-blue-600">{courseData?.level}</span>
                </p>
              </div>
            </div>
          </div>

          {/* 2. Curriculum Architecture Summary */}
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
            <div className="flex items-center gap-2 mb-6 text-slate-800">
              <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600">
                <LayoutList size={18} />
              </div>
              <h3 className="font-bold text-lg">Curriculum Structure</h3>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl flex items-center gap-12">
              <div className="text-center">
                <span className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">
                  Modules
                </span>
                <span className="text-3xl font-black text-slate-800">
                  {modules?.length}
                </span>
              </div>
              <div className="w-px h-10 bg-slate-200" />
              <div className="text-center">
                <span className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">
                  Total Lessons
                </span>
                <span className="text-3xl font-black text-slate-800">
                  {totalLessons}
                </span>
              </div>
              <div className="ml-auto flex -space-x-2">
                {/* Visual indicator of lessons */}
                {[...Array(Math.max(0, Math.min(totalLessons, 5)))].map(
                  (_, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-white border-2 border-slate-50 flex items-center justify-center shadow-sm"
                    >
                      <div className="w-4 h-4 rounded-sm bg-indigo-200 animate-pulse" />
                    </div>
                  ),
                )}
                {totalLessons > 5 && (
                  <div className="text-xs text-slate-400 self-center ml-4">
                    +{totalLessons - 5} more
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* 3. Financial Summary */}
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
            <div className="flex items-center gap-2 mb-6 text-slate-800">
              <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600">
                <DollarSign size={18} />
              </div>
              <h3 className="font-bold text-lg">Pricing Model</h3>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl inline-block min-w-50">
              <span className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">
                Enrollment Fee
              </span>
              <span className="text-3xl font-black text-emerald-600">
                {courseData?.price === 0
                  ? "FREE"
                  : `$${courseData?.price?.toFixed(2)}`}
              </span>
            </div>
          </div>

          {/* Navigation Actions */}
          <div className="flex justify-between items-center pt-6">
            <button
              onClick={onPrev}
              disabled={isSaving}
              className="px-6 py-3 rounded-xl font-bold text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-all flex items-center gap-2 disabled:opacity-50"
            >
              <ArrowLeft size={18} /> Return to Pricing
            </button>

            <button
              onClick={handleFinalSave}
              disabled={isSaving || !isReadyToPublish}
              className="px-10 py-4 rounded-2xl font-black bg-[#0A1128] text-white hover:bg-slate-800 transition-all flex items-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed shadow-xl shadow-blue-900/10"
            >
              {isSaving ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Publishing...
                </div>
              ) : (
                <>
                  Publish Course <Save size={20} />
                </>
              )}
            </button>
          </div>
        </div>

        {/* Right Column: Pre-flight Checklist */}
        <div className="space-y-6">
          <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-200 sticky top-6">
            <h3 className="text-xl font-black text-slate-900 mb-6">
              Final Checklist
            </h3>

            <div className="space-y-5">
              <ChecklistItem
                label="Course Identity"
                sublabel="Title > 5 chars"
                isComplete={hasTitle}
              />
              <ChecklistItem
                label="Classification"
                sublabel="Category assigned"
                isComplete={hasCategory}
              />
              <ChecklistItem
                label="Curriculum"
                sublabel="Min. 1 Module & Lesson"
                isComplete={hasModules && hasLessons}
              />
              <ChecklistItem
                label="Course Media"
                sublabel="Thumbnail uploaded"
                isComplete={hasThumbnail}
              />
            </div>

            {!isReadyToPublish ? (
              <div className="mt-8 p-4 bg-red-50 rounded-2xl border border-red-100 flex items-start gap-3 text-red-800 text-xs leading-relaxed">
                <AlertCircle size={16} className="shrink-0 text-red-500" />
                <p>
                  Your course is not yet eligible for publishing. Please return
                  to the previous steps to complete all required fields.
                </p>
              </div>
            ) : (
              <div className="mt-8 p-4 bg-emerald-50 rounded-2xl border border-emerald-100 flex items-start gap-3 text-emerald-800 text-xs leading-relaxed">
                <CheckCircle2 size={16} className="shrink-0 text-emerald-500" />
                <p>
                  Everything looks perfect! Your course is ready to be shared
                  with the world.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Helper Checklist Component ---
const ChecklistItem = ({
  label,
  sublabel,
  isComplete,
}: {
  label: string;
  sublabel: string;
  isComplete: boolean;
}) => (
  <div className="flex items-center justify-between group">
    <div className="flex flex-col">
      <span
        className={`text-sm font-bold ${isComplete ? "text-slate-800" : "text-slate-400"}`}
      >
        {label}
      </span>
      <span className="text-[10px] text-slate-400 font-medium">{sublabel}</span>
    </div>
    {isComplete ? (
      <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center text-white shadow-sm shadow-emerald-200">
        <CheckCircle size={14} strokeWidth={3} />
      </div>
    ) : (
      <div className="w-6 h-6 rounded-full border-2 border-slate-100 bg-slate-50" />
    )}
  </div>
);

export default StepReview;
