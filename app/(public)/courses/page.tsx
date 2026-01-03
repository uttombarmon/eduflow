"use client";
import React, { useState, useMemo, useEffect } from "react";
import { MOCK_COURSES } from "@/components/customs/constants/MockDatas";
import {
  Search,
  Filter,
  Star,
  Users,
  Clock,
  ChevronDown,
  X,
  SlidersHorizontal,
  Check,
  BookOpen,
} from "lucide-react";
import Image from "next/image";
import FilterSection from "@/components/customs/courses/FilterSection";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { setCategories } from "@/lib/features/courses/CategoriesSlice";
import { setCourses } from "@/lib/features/courses/CoursesSlice";
import {
  setClearAll,
  setSearch,
  setSort,
} from "@/lib/features/courses/FiltersSlice";

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

const CourseExplorer: React.FC<{ onCourseSelect: (id: string) => void }> = ({
  onCourseSelect,
}) => {
  const dispatch = useDispatch();
  const { courses } = useSelector((state: RootState) => state.course);
  const { categorie, level, price, search, sortBy } = useSelector(
    (state: RootState) => state.filters
  );
  useEffect(() => {
    return () => {
      console.log(MOCK_COURSES);
      dispatch(setCategories(CATEGORIES));
      dispatch(setCourses(MOCK_COURSES));
    };
  }, []);

  // const [searchQuery, setSearchQuery] = useState("");
  // const [selectedCategory, setSelectedCategory] = useState("All");
  // const [selectedLevel, setSelectedLevel] = useState("All");
  // const [selectedPrice, setSelectedPrice] = useState("All");
  // const [sortBy, setSortBy] = useState<SortOption>("Popularity");
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const filteredAndSortedCourses = useMemo(() => {
    const results = courses.filter((course) => {
      const matchesSearch =
        course.title.toLowerCase().includes(search.toLowerCase()) ||
        course.instructor.toLowerCase().includes(search.toLowerCase());
      const matchesCategory =
        categorie === "All" || course.category === categorie;
      const matchesLevel = level === "All" || course.level === level;
      const matchesPrice =
        price === "All" ||
        (price === "Free" ? course.price === 0 : course.price > 0);

      return matchesSearch && matchesCategory && matchesLevel && matchesPrice;
    });

    // Sorting
    switch (sortBy) {
      case "Rating":
        results.sort((a, b) => b.rating - a.rating);
        break;
      case "Price: Low to High":
        results.sort((a, b) => a.price - b.price);
        break;
      case "Price: High to Low":
        results.sort((a, b) => b.price - a.price);
        break;
      case "Popularity":
      default:
        results.sort((a, b) => b.studentsCount - a.studentsCount);
        break;
    }
    // dispatch(setCourses(results));
    return results;
  }, [courses, sortBy, search, categorie, level, price]);

  // const resetFilters = () => {
  //   setSelectedCategory("All");
  //   setSelectedLevel("All");
  //   setSelectedPrice("All");
  //   setSearchQuery("");
  //   setSortBy("Popularity");
  // };

  return (
    <div className="space-y-8 px-4 py-24">
      {/* Header Area */}
      <div className="flex flex-col gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            Browse Catalog
          </h1>
          <p className="text-slate-500 mt-1">
            Discover expert-led courses across technology and business.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search by course, instructor, or topic..."
              className="flex h-10 w-full rounded-md border border-slate-200 bg-white px-9 py-2 text-sm ring-offset-white placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950"
              value={search}
              onChange={(e) => dispatch(setSearch(e.target.value))}
            />
          </div>

          <button
            onClick={() => setShowMobileFilters(true)}
            className="lg:hidden inline-flex items-center justify-center rounded-md border border-slate-200 bg-white h-10 px-4 text-sm font-medium hover:bg-slate-50"
          >
            <SlidersHorizontal size={16} className="mr-2" />
            Filters
          </button>

          <div className="relative group inline-flex">
            <select
              value={sortBy}
              onChange={(e) => dispatch(setSort(e.target.value as SortOption))}
              className="appearance-none h-10 rounded-md border border-slate-200 bg-white pl-4 pr-10 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-slate-950 cursor-pointer"
            >
              <option>Popularity</option>
              <option>Rating</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* Sidebar Filters - Desktop */}
        <aside className="hidden lg:block w-64 shrink-0 space-y-8 sticky top-24">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-400">
              Filters
            </h2>
            <button
              onClick={() => dispatch(setClearAll())}
              className="text-xs font-medium text-slate-500 hover:text-slate-950"
            >
              Clear All
            </button>
          </div>
          <FilterSection />
        </aside>

        {/* Results Grid */}
        <div className="flex-1">
          <div className="mb-4 text-sm text-slate-500 font-medium">
            Showing {courses.length} courses
          </div>

          {filteredAndSortedCourses?.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredAndSortedCourses.map((course) => (
                <div
                  key={course.id}
                  className="group flex flex-col rounded-xl border border-slate-200 bg-white shadow-sm transition-all hover:shadow-md overflow-hidden cursor-pointer"
                  onClick={() => onCourseSelect(course.id)}
                >
                  <div className="aspect-video relative overflow-hidden bg-slate-100">
                    <Image
                      src={course.thumbnail}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      width={200}
                      height={200}
                      alt={course.title}
                    />
                    <div className="absolute top-3 left-3 flex gap-2">
                      <span className="bg-white/90 backdrop-blur border border-slate-200 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-tighter">
                        {course.level}
                      </span>
                    </div>
                  </div>

                  <div className="p-5 flex-1 flex flex-col">
                    <div className="flex items-center gap-1.5 mb-2">
                      <div className="flex items-center text-amber-500">
                        <Star size={12} fill="currentColor" />
                        <span className="ml-1 text-xs font-bold text-slate-700">
                          {course.rating}
                        </span>
                      </div>
                      <span className="text-slate-300 text-xs">•</span>
                      <span className="text-[10px] font-medium text-slate-500 uppercase">
                        {course.category}
                      </span>
                    </div>

                    <h3 className="text-base font-bold leading-tight mb-2 group-hover:text-indigo-600 transition-colors line-clamp-2">
                      {course.title}
                    </h3>
                    <p className="text-xs text-slate-500 mb-4 truncate">
                      by {course.instructor}
                    </p>

                    <div className="flex items-center gap-4 mt-auto mb-4">
                      <div className="flex items-center text-[11px] text-slate-500">
                        <Clock size={12} className="mr-1" />
                        {course.totalDuration}
                      </div>
                      <div className="flex items-center text-[11px] text-slate-500">
                        <BookOpen size={12} className="mr-1" />
                        {course.lessons.length} Lessons
                      </div>
                    </div>

                    <div className="pt-4 border-t flex items-center justify-between">
                      <div className="flex flex-col leading-none">
                        <span className="text-[10px] text-slate-400 font-bold uppercase mb-0.5">
                          Price
                        </span>
                        <span className="text-lg font-bold text-slate-900">
                          {course.price === 0 ? "Free" : `$${course.price}`}
                        </span>
                      </div>
                      <button className="inline-flex h-9 items-center justify-center rounded-md bg-slate-900 px-4 text-xs font-semibold text-slate-50 hover:bg-slate-900/90 transition-colors">
                        Explore Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-20 bg-white rounded-xl border border-dashed border-slate-200">
              <div className="h-12 w-12 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 mb-4">
                <Search size={24} />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">
                No courses found
              </h3>
              <p className="text-slate-500 mt-1 max-w-xs text-center">
                Try adjusting your search or filters to find what you&aps;re
                looking for.
              </p>
              <button
                onClick={() => dispatch(setClearAll())}
                className="mt-6 text-sm font-bold text-indigo-600 hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Filter Sheet */}
      {showMobileFilters && (
        <div className="fixed inset-0 z-[100] lg:hidden">
          <div
            className="absolute inset-0 bg-slate-950/20 backdrop-blur-sm"
            onClick={() => setShowMobileFilters(false)}
          />
          <div className="absolute right-0 top-0 bottom-0 w-80 bg-white shadow-2xl p-6 animate-in slide-in-from-right duration-300">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-lg font-bold">Filters</h2>
              <button
                onClick={() => setShowMobileFilters(false)}
                className="p-1 hover:bg-slate-100 rounded-md"
              >
                <X size={20} />
              </button>
            </div>

            <div className="overflow-y-auto max-h-[calc(100vh-160px)]">
              <FilterSection />
            </div>

            <div className="absolute bottom-6 left-6 right-6 pt-6 border-t bg-white">
              <button
                onClick={() => setShowMobileFilters(false)}
                className="w-full h-11 bg-slate-900 text-slate-50 rounded-md font-semibold text-sm"
              >
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseExplorer;
