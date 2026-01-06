import { X, SlidersHorizontal } from "lucide-react";
import SearchCourse from "@/components/customs/courses/SearchCourse";
import SortCourse from "@/components/customs/courses/SortCourse";
import Filters from "@/components/customs/courses/Filters";
import CourseExplore from "@/components/customs/courses/CourseExplore";
import MobileFilter from "@/components/customs/courses/MobileFilter";

export const CATEGORIES = [
  "All",
  "Development",
  "Design",
  "Artificial Intelligence",
  "Business",
];

type SortOption =
  | "Popularity"
  | "Rating"
  | "Price: Low to High"
  | "Price: High to Low";

const page: React.FC<{ onCourseSelect: (id: string) => void }> = ({
  onCourseSelect,
}) => {
  return (
    <div className="space-y-8 px-4 py-24">
      {/* Header Area */}
      <div className="flex flex-col gap-4">
        <div className=" mx-auto my-auto text-center">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            Browse Catalog
          </h1>
          <p className="text-slate-500 mt-1">
            Discover expert-led courses across technology and business.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          {/* search component  */}
          <SearchCourse />

          <button
            // onClick={() => setShowMobileFilters(true)}
            className="lg:hidden inline-flex items-center justify-center rounded-md border border-slate-200 bg-white h-10 px-4 text-sm font-medium hover:bg-slate-50"
          >
            <SlidersHorizontal size={16} className="mr-2" />
            Filters
          </button>
          {/* sorting component  */}
          <SortCourse />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* Sidebar Filters - Desktop */}
        <Filters />

        {/* Results Grid */}
        <CourseExplore />
      </div>

      {/* Mobile Filter Sheet */}
      <MobileFilter />
    </div>
  );
};

export default page;
