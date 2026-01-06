"use client";
import { setSort } from "@/lib/features/courses/FiltersSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { RootState } from "@/lib/store";
import { ChevronDown } from "lucide-react";
type SortOption =
  | "Popularity"
  | "Rating"
  | "Price: Low to High"
  | "Price: High to Low";
const SortCourse = () => {
  const dispatch = useAppDispatch();
  const { sortBy } = useAppSelector((state: RootState) => state.filters);
  return (
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
  );
};

export default SortCourse;
