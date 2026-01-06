import { Search } from "lucide-react";

const NotFoundCourse = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 bg-white rounded-xl border border-dashed border-slate-200">
      <div className="h-12 w-12 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 mb-4">
        <Search size={24} />
      </div>
      <h3 className="text-lg font-semibold text-slate-900">No courses found</h3>
      <p className="text-slate-500 mt-1 max-w-xs text-center">
        Try adjusting your search or filters to find what you&aps;re looking
        for.
      </p>
      {/* <button
        onClick={() => dispatch(setClearAll())}
        className="mt-6 text-sm font-bold text-indigo-600 hover:underline"
      >
        Clear all filters
      </button> */}
    </div>
  );
};

export default NotFoundCourse;
