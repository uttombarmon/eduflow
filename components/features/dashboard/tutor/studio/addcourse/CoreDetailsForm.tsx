import { AlignLeft, Sparkles } from "lucide-react";

// --- LEFT COLUMN: CORE DETAILS ---
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CoreDetailsForm = ({ courseData, setCourseData }: any) => {
  const levels = ["Beginner", "Intermediate", "Advanced"];

  return (
    <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
      <div className="flex items-center gap-2 mb-8 text-slate-800">
        <AlignLeft className="text-blue-600" />
        <h2 className="text-xl font-bold">Core Details</h2>
      </div>

      <div className="space-y-6">
        {/* Title */}
        <div>
          <label className="block text-xs font-bold text-slate-500 tracking-wider mb-2 uppercase">
            Course Title
          </label>
          <input
            type="text"
            value={courseData.title}
            onChange={(e) =>
              setCourseData({ ...courseData, title: e.target.value })
            }
            className="w-full p-4 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-blue-500 outline-none text-slate-700 placeholder:text-slate-400"
            placeholder="e.g. Advanced Quantum Computing for AI Architects"
          />
        </div>

        {/* Category & Level Grid */}
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-xs font-bold text-slate-500 tracking-wider mb-2 uppercase">
              Category
            </label>
            <select
              value={courseData.category}
              onChange={(e) =>
                setCourseData({ ...courseData, category: e.target.value })
              }
              className="w-full p-4 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-blue-500 outline-none text-slate-700 appearance-none"
            >
              <option value="" disabled>
                Select category...
              </option>
              <option value="Technology & AI">Technology & AI</option>
              <option value="Business">Business</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-500 tracking-wider mb-2 uppercase">
              Level
            </label>
            <div className="flex gap-2 bg-slate-50 p-1.5 rounded-xl">
              {levels.map((level) => (
                <button
                  key={level}
                  onClick={() => setCourseData({ ...courseData, level })}
                  className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-all ${
                    courseData.level === level
                      ? "bg-blue-400 text-white shadow-sm"
                      : "text-slate-500 hover:text-slate-700"
                  }`}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Description */}
        <div>
          <div className="flex justify-between items-end mb-2">
            <label className="block text-xs font-bold text-slate-500 tracking-wider uppercase">
              Description
            </label>
            <button className="flex items-center gap-1.5 text-xs font-bold bg-black text-white px-3 py-1.5 rounded-full hover:bg-slate-800 transition">
              <Sparkles size={12} /> AI ENHANCE
            </button>
          </div>
          <textarea
            rows={5}
            value={courseData.description}
            onChange={(e) =>
              setCourseData({ ...courseData, description: e.target.value })
            }
            className="w-full p-4 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-blue-500 outline-none text-slate-700 placeholder:text-slate-400"
            placeholder="Describe the learning outcomes and target audience..."
          />
        </div>
      </div>
    </div>
  );
};
export default CoreDetailsForm;
