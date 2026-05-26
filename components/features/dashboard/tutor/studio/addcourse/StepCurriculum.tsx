import React from "react";
import {
  Plus,
  ArrowRight,
  ArrowLeft,
  Lightbulb,
  CheckCircle2,
  GripVertical,
  Trash2,
  PlaySquare,
  FileText,
  LayoutList,
} from "lucide-react";
import { Lesson } from "@/types/Course";

export interface CourseModule {
  id: string;
  title: string;
  lessons: Partial<Lesson>[];
}

interface StepCurriculumProps {
  modules: CourseModule[];
  setModules: React.Dispatch<React.SetStateAction<CourseModule[]>>;
  onPrev: () => void;
  onNext: () => void;
}

const StepCurriculum = ({
  modules,
  setModules,
  onPrev,
  onNext,
}: StepCurriculumProps) => {
  // --- Module Management ---
  const addModule = () => {
    setModules([
      ...modules,
      { id: crypto.randomUUID(), title: "", lessons: [] },
    ]);
  };

  const updateModuleTitle = (moduleIndex: number, title: string) => {
    const newModules = [...modules];
    newModules[moduleIndex].title = title;
    setModules(newModules);
  };

  const removeModule = (moduleIndex: number) => {
    setModules(modules.filter((_, i) => i !== moduleIndex));
  };

  // --- Lesson Management ---
  const addLesson = (moduleIndex: number) => {
    const newModules = [...modules];
    newModules[moduleIndex].lessons.push({
      id: crypto.randomUUID(),
      title: "",
      content: "",
      videoUrl: "",
    });
    setModules(newModules);
  };

  const updateLesson = (
    moduleIndex: number,
    lessonIndex: number,
    data: Partial<Lesson>,
  ) => {
    const newModules = [...modules];
    newModules[moduleIndex].lessons[lessonIndex] = {
      ...newModules[moduleIndex].lessons[lessonIndex],
      ...data,
    };
    setModules(newModules);
  };

  const removeLesson = (moduleIndex: number, lessonIndex: number) => {
    const newModules = [...modules];
    newModules[moduleIndex].lessons.splice(lessonIndex, 1);
    setModules(newModules);
  };

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Module & Lesson Builder */}
        <div className="lg:col-span-2">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 mb-6">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h2 className="text-xl font-bold text-slate-800">
                  Course Curriculum
                </h2>
                <p className="text-sm text-slate-500 mt-1">
                  Organize your course into modules and lessons.
                </p>
              </div>
              <button
                onClick={addModule}
                className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-xl font-bold text-sm hover:bg-blue-100 transition-colors"
              >
                <Plus size={16} /> Add Module
              </button>
            </div>

            {/* Modules List */}
            <div className="space-y-6">
              {modules?.length === 0 ? (
                <div className="text-center py-12 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
                  <LayoutList
                    size={32}
                    className="mx-auto text-slate-300 mb-3"
                  />
                  <p className="text-slate-500 font-medium">
                    No modules added yet.
                  </p>
                  <p className="text-sm text-slate-400 mt-1">
                    Click &quot;Add Module&quot; to start structuring your
                    course.
                  </p>
                </div>
              ) : (
                modules?.map((module, mIndex) => (
                  <div
                    key={module?.id}
                    className="bg-slate-50 border border-slate-200 rounded-2xl p-5 relative group/module"
                  >
                    {/* Module Header */}
                    <div className="flex justify-between items-center mb-4 border-b border-slate-200 pb-4">
                      <div className="flex items-center gap-3 flex-1">
                        <span className="font-bold text-slate-400 uppercase text-sm tracking-wider">
                          Module {mIndex + 1}
                        </span>
                        <input
                          type="text"
                          value={module?.title}
                          onChange={(e) =>
                            updateModuleTitle(mIndex, e.target.value)
                          }
                          placeholder="e.g. Introduction & Setup"
                          className="text-lg font-bold text-slate-800 bg-transparent border-none outline-none placeholder:text-slate-300 w-full focus:ring-0 p-0"
                        />
                      </div>
                      <button
                        onClick={() => removeModule(mIndex)}
                        className="text-slate-400 hover:text-red-500 transition-colors p-2 rounded-lg hover:bg-red-50 opacity-0 group-hover/module:opacity-100"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>

                    {/* Lessons inside Module */}
                    <div className="space-y-3 pl-4 border-l-2 border-slate-200 ml-2 mb-4">
                      {module.lessons.length === 0 ? (
                        <p className="text-sm text-slate-400 italic py-2">
                          No lessons in this module.
                        </p>
                      ) : (
                        module.lessons.map((lesson, lIndex) => (
                          <LessonCard
                            key={lesson.id}
                            index={lIndex}
                            lesson={lesson}
                            onUpdate={(data) =>
                              updateLesson(mIndex, lIndex, data)
                            }
                            onRemove={() => removeLesson(mIndex, lIndex)}
                          />
                        ))
                      )}
                    </div>

                    {/* Add Lesson to Module Button */}
                    <div className="pl-6">
                      <button
                        onClick={() => addLesson(mIndex)}
                        className="flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        <Plus size={16} /> Add Lesson to Module {mIndex + 1}
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-between items-center mt-6">
            <button
              onClick={onPrev}
              className="px-6 py-3 rounded-xl font-semibold bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 transition-colors flex items-center gap-2"
            >
              <ArrowLeft size={18} /> Back
            </button>
            <button
              onClick={onNext}
              className="px-6 py-3 rounded-xl font-semibold bg-[#0A1128] text-white hover:bg-slate-800 transition-colors flex items-center gap-2"
            >
              Continue to Pricing <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Right Column: Curriculum Tips */}
        <div className="space-y-6">
          <CurriculumTips />
        </div>
      </div>
    </div>
  );
};

export default StepCurriculum;

// -------------------------------------------------------------
// Sub-Component: Individual Lesson Card
// -------------------------------------------------------------
interface LessonCardProps {
  index: number;
  lesson: Partial<Lesson>;
  onUpdate: (data: Partial<Lesson>) => void;
  onRemove: () => void;
}

const LessonCard = ({ index, lesson, onUpdate, onRemove }: LessonCardProps) => {
  return (
    <div className="group/lesson bg-white border border-slate-200 rounded-xl p-4 shadow-sm hover:border-blue-300 transition-colors">
      <div className="flex items-start gap-3">
        <div className="mt-2 cursor-grab text-slate-300 hover:text-slate-500">
          <GripVertical size={16} />
        </div>

        <div className="flex-1 space-y-3">
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-2 w-full">
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-slate-100 text-slate-500 text-[10px] font-bold shrink-0">
                {index + 1}
              </span>
              <input
                type="text"
                value={lesson.title || ""}
                onChange={(e) => onUpdate({ title: e.target.value })}
                placeholder="Lesson Title"
                className="text-base font-bold text-slate-700 bg-transparent border-none outline-none placeholder:text-slate-300 w-full focus:ring-0 p-0"
              />
            </div>
            <button
              onClick={onRemove}
              className="text-slate-400 hover:text-red-500 transition-colors p-1.5 rounded-md hover:bg-red-50 opacity-0 group-hover/lesson:opacity-100"
            >
              <Trash2 size={14} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none text-slate-400">
                <PlaySquare size={14} />
              </div>
              <input
                type="text"
                value={lesson.videoUrl || ""}
                onChange={(e) => onUpdate({ videoUrl: e.target.value })}
                className="w-full pl-8 p-2.5 bg-slate-50 border border-transparent rounded-lg focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none text-xs text-slate-700 transition-all"
                placeholder="Video URL"
              />
            </div>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-2.5 pt-2.5 pointer-events-none text-slate-400">
                <FileText size={14} />
              </div>
              <textarea
                rows={1}
                value={lesson.content || ""}
                onChange={(e) => onUpdate({ content: e.target.value })}
                className="w-full pl-8 p-2.5 bg-slate-50 border border-transparent rounded-lg focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none text-xs text-slate-700 transition-all resize-none overflow-hidden"
                placeholder="Brief description..."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// -------------------------------------------------------------
// Sub-Component: Sidebar Tips
// -------------------------------------------------------------
const CurriculumTips = () => {
  const tips = [
    "Group 3-5 lessons per module to prevent cognitive overload.",
    "Keep individual lessons under 10 minutes.",
    "Start each module with a quick 'What you will learn' video.",
    "End modules with an actionable assignment or quiz.",
  ];

  return (
    <div className="bg-[#0A1128] p-6 rounded-3xl shadow-lg text-white sticky top-6">
      <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center mb-4 text-blue-400">
        <Lightbulb size={20} />
      </div>
      <h3 className="text-lg font-bold mb-4">Module Strategy</h3>
      <ul className="space-y-4">
        {tips.map((tip, idx) => (
          <li
            key={idx}
            className="flex items-start gap-3 text-sm text-slate-300"
          >
            <CheckCircle2 size={18} className="text-blue-400 shrink-0 mt-0.5" />
            <span className="leading-relaxed">{tip}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
