import React from "react";
import {
  ArrowRight,
  ArrowLeft,
  Lightbulb,
  CheckCircle2,
  DollarSign,
  Tag,
} from "lucide-react";
import { Course } from "@/types/Course";

interface StepPricingProps {
  courseData: Partial<Course>;
  setCourseData: React.Dispatch<React.SetStateAction<Partial<Course>>>;
  onPrev: () => void;
  onNext: () => void;
}

const StepPricing = ({
  courseData,
  setCourseData,
  onPrev,
  onNext,
}: StepPricingProps) => {
  const isFree = courseData.price === 0;

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Pricing Form */}
        <div className="lg:col-span-2">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 mb-6">
            <div className="flex items-center gap-2 mb-8 text-slate-800">
              <Tag className="text-blue-600" />
              <h2 className="text-xl font-bold">Pricing Strategy</h2>
            </div>

            <div className="space-y-8">
              {/* Free vs Paid Selection */}
              <div>
                <label className="block text-xs font-bold text-slate-500 tracking-wider mb-4 uppercase">
                  Course Type
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    onClick={() => setCourseData({ ...courseData, price: 0 })}
                    className={`p-4 rounded-2xl border-2 text-left transition-all ${
                      isFree
                        ? "border-blue-500 bg-blue-50 ring-4 ring-blue-500/10"
                        : "border-slate-200 hover:border-slate-300"
                    }`}
                  >
                    <h4
                      className={`font-bold text-lg ${isFree ? "text-blue-700" : "text-slate-700"}`}
                    >
                      Free Course
                    </h4>
                    <p className="text-sm text-slate-500 mt-1">
                      Great for lead generation and building an audience.
                    </p>
                  </button>

                  <button
                    onClick={() =>
                      setCourseData({
                        ...courseData,
                        price:
                          courseData.price === 0 ? 49.99 : courseData.price,
                      })
                    }
                    className={`p-4 rounded-2xl border-2 text-left transition-all ${
                      !isFree
                        ? "border-blue-500 bg-blue-50 ring-4 ring-blue-500/10"
                        : "border-slate-200 hover:border-slate-300"
                    }`}
                  >
                    <h4
                      className={`font-bold text-lg ${!isFree ? "text-blue-700" : "text-slate-700"}`}
                    >
                      Premium Course
                    </h4>
                    <p className="text-sm text-slate-500 mt-1">
                      Monetize your expertise with a one-time fee.
                    </p>
                  </button>
                </div>
              </div>

              {/* Price Input (Only shows if Premium is selected) */}
              {!isFree && (
                <div className="animate-in fade-in zoom-in-95 duration-300">
                  <label className="block text-xs font-bold text-slate-500 tracking-wider mb-2 uppercase">
                    Base Price (USD)
                  </label>
                  <div className="relative max-w-xs">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-500">
                      <DollarSign size={20} />
                    </div>
                    <input
                      type="number"
                      min="0"
                      step="0.01"
                      value={courseData.price || ""}
                      onChange={(e) =>
                        setCourseData({
                          ...courseData,
                          price: parseFloat(e.target.value) || 0,
                        })
                      }
                      className="w-full pl-12 p-4 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-blue-500 outline-none text-slate-700 text-lg font-bold"
                      placeholder="49.99"
                    />
                  </div>
                </div>
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
              Review & Publish <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Right Column: Pricing Tips */}
        <div className="space-y-6">
          <div className="bg-[#0A1128] p-6 rounded-3xl shadow-lg text-white sticky top-6">
            <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center mb-4 text-blue-400">
              <Lightbulb size={20} />
            </div>
            <h3 className="text-lg font-bold mb-4">Pricing Tips</h3>
            <ul className="space-y-4">
              {[
                "Analyze competitor pricing in your category.",
                "Courses with over 5 hours of video generally sell for $50+.",
                "Consider offering your first course for free to build reviews.",
                "Ending prices in .99 converts 14% better than flat numbers.",
              ].map((tip, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-sm text-slate-300"
                >
                  <CheckCircle2
                    size={18}
                    className="text-blue-400 shrink-0 mt-0.5"
                  />
                  <span className="leading-relaxed">{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepPricing;
