// import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";

const StudioHeader = () => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 tracking-tight">
          Content Studio
        </h1>
        <p className="text-slate-500 mt-1">
          Manage your courses, quizzes, and learning materials.
        </p>
      </div>
      <div className="flex items-center gap-3">
        {/* <Button variant="outline" className="hidden sm:flex">
          Import Content
        </Button> */}
        <Link
          href="/dashboard/studio/add_course"
          className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-200 rounded-xl inline-flex items-center gap-2 w-fit px-4 py-2"
        >
          <Plus className="mr-2 h-4 w-4" />
          Create New Course
        </Link>
      </div>
    </div>
  );
};

export default StudioHeader;
