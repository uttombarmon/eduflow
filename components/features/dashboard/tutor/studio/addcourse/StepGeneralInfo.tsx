import { ArrowRight } from "lucide-react";
import CoreDetailsForm from "./CoreDetailsForm";
import CourseMediaPanel from "./CourseMediaPanel";
import OptimizationTips from "./OptimizationTips";
import Link from "next/link";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const StepGeneralInfo = ({ courseData, setCourseData, onNext }: any) => {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Form */}
        <div className="lg:col-span-2">
          <CoreDetailsForm
            courseData={courseData}
            setCourseData={setCourseData}
          />

          {/* Action Buttons */}
          <div className="flex justify-between items-center mt-6">
            <Link
              href={"/dashboard/studio"}
              className="px-6 py-3 rounded-xl font-semibold bg-indigo-50 text-indigo-600 hover:bg-indigo-100 transition-colors"
            >
              Discard Draft
            </Link>
            <button
              onClick={onNext}
              className="px-6 py-3 rounded-xl font-semibold bg-[#0A1128] text-white hover:bg-slate-800 transition-colors flex items-center gap-2"
            >
              Save and Continue <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Right Column: Sidebar */}
        <div className="space-y-6">
          <CourseMediaPanel
            courseData={courseData}
            setCourseData={setCourseData}
          />
          <OptimizationTips />
        </div>
      </div>
    </div>
  );
};
export default StepGeneralInfo;
